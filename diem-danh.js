/* =========================================================
   ĐIỂM DANH BUỔI HỌC (giáo viên)  #/diem-danh?lop=
   Lịch học cố định hằng tuần lưu ở lop/{id}.lich = { tu: "yyyy-mm-dd", tuan, buoi: [{ thu 0–6 (0 = CN), bd, kt, ten, dd }] }
   (dd = buổi này có điểm danh không). Kết quả mỗi buổi: diemDanh/{lopId}_{yyyymmdd}_{số thứ tự buổi} = { lop, ngay, slot, dd?, kq: { uid: c|v|p|m }, luc, boi }
   c = có mặt, v = vắng, p = có phép, m = muộn. dd trong bản ghi (nếu có) ghi đè cài đặt chung của buổi đó.
   ========================================================= */
const DD_THU = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
const DD_TT = { c: ["✔", "Có mặt", "xanh"], a: ["⚙", "Có mặt (tự động: đã nộp bài test)", "xanh"], v: ["✖", "Vắng", "do"], p: ["P", "Có phép", "vang"], m: ["⏰", "Muộn", "cam"] };
const ddIso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const ddNgayVN = iso => iso.split("-").reverse().join("/");
let DD = null;

function ddBuoi(l) {
  const L = l.lich; if (!L?.tu || !L.buoi?.length) return [];
  const [y, m, d] = L.tu.split("-").map(Number), out = [];
  L.buoi.forEach((s, si) => {
    const d0 = new Date(y, m - 1, d); d0.setDate(d0.getDate() + ((s.thu - d0.getDay() + 7) % 7));
    for (let k = 0; k < (L.tuan || 15); k++) { const dt = new Date(d0); dt.setDate(d0.getDate() + 7 * k); const ngay = ddIso(dt); out.push({ ngay, slot: si, s, id: `${l.id}_${ngay.replace(/-/g, "")}_${si}` }); }
  });
  return out.sort((a, b) => a.ngay.localeCompare(b.ngay) || (a.s.bd || "").localeCompare(b.s.bd || ""));
}
const ddCo = b => DD.rec[b.id]?.dd ?? b.s.dd !== false;           // buổi này có điểm danh không
const ddNhan = b => `${DD_THU[b.s.thu]} ${ddNgayVN(b.ngay).slice(0, 5)}${b.s.bd ? " · " + b.s.bd : ""}${b.s.ten ? " · " + b.s.ten : ""}`;
function ddDem(b) { const kq = DD.rec[b.id]?.kq || {}, v = Object.values(kq); return { a: v.filter(x => x === "a").length, c: v.filter(x => x === "c").length, v: v.filter(x => x === "v").length, p: v.filter(x => x === "p").length, m: v.filter(x => x === "m").length, tong: v.length }; }
const ddKq = (b, uid) => DD.rec[b.id]?.kq?.[uid] || "";
const ddCoMat = k => k === "c" || k === "m" || k === "a";

MAN_HINH["/diem-danh"] = {
  tieuDe: "Điểm danh",
  manHinhCon: true,
  ve: () => laGVtk() ? `<div id="vung-dd"><div class="trong">Đang tải…</div></div>` : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-dd"); if (!v || !laGVtk()) return;
    const id = thamSoHash().get("lop") || "";
    try {
      const l = (await danhSachLopGV()).find(x => x.id === id);
      if (!l) { v.innerHTML = `<div class="trong">Không tìm thấy lớp, hoặc lớp không do thầy/cô phụ trách.<br><br><a class="btn" href="#/lop-hoc">← Lớp học</a></div>`; return; }
      const [hs, rec, giao, nop] = await Promise.all([fbDb.collection("nguoiDung").where("lopHoc", "array-contains", id).get(), fbDb.collection("diemDanh").where("lop", "==", id).get(),
        fbDb.collection("deGiao").where("lop", "==", id).get(), fbDb.collection("baiNop").where("lop", "==", id).get()]);
      const ds = l.danhSach || {};
      const dsHS = hs.docs.map(x => ({ uid: x.id, ...x.data() })).filter(u => u.vaiTro === "hs" || !u.vaiTro)
        .sort((a, b) => (ds[a.uid]?.s ?? 1e6) - (ds[b.uid]?.s ?? 1e6) || (a.hoTen || "").split(" ").pop().localeCompare((b.hoTen || "").split(" ").pop(), "vi") || (a.hoTen || "").localeCompare(b.hoTen || "", "vi"))
        .map((u, i) => ({ ...u, stt: ds[u.uid]?.s ?? i + 1, ns: ds[u.uid]?.ns || "" }));
      DD = { l, hs: dsHS, rec: Object.fromEntries(rec.docs.map(x => [x.id, x.data()])), cur: 0, sua: false, lichSua: null, timer: null, luu: "" };
      DD.buoi = ddBuoi(l);
      DD.test = giao.docs.map(x => ({ id: x.id, ...x.data() })).filter(d => d.loai !== "bai-tap"); DD.nop = nop.docs.map(x => x.data()).filter(b => b.daNop);
      await ddTuDien().catch(e => console.warn("tự điền điểm danh", e));
      const hom = ddIso(new Date()), qua = DD.buoi.filter(b => b.ngay <= hom && ddCo(b)).pop();
      DD.cur = Math.max(0, DD.buoi.indexOf(qua || DD.buoi.find(b => b.ngay >= hom) || DD.buoi[0]));
      DD.sua = !DD.buoi.length;
      ddVe();
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};

/* Buổi có bài KIỂM TRA (đề giao cho lớp, mở trùng giờ học) → sinh viên đã NỘP bài tự được ghi “có mặt (tự động)”.
   Chỉ điền cho em chưa có dấu nào, không đè dấu giáo viên đã đánh (vắng / phép / muộn / có mặt). Kết quả được lưu luôn. */
function ddKhungGio(b) {
  const [y, m, d] = b.ngay.split("-").map(Number), hm = t => { const [h, p] = String(t).split(":").map(Number); return new Date(y, m - 1, d, h || 0, p || 0).getTime(); };
  if (!b.s.bd) return [new Date(y, m - 1, d).getTime(), new Date(y, m - 1, d + 1).getTime()];
  const bd = hm(b.s.bd); return [bd - 30 * 60000, b.s.kt ? hm(b.s.kt) + 30 * 60000 : bd + 180 * 60000];   // chừa lề 30 phút hai đầu
}
async function ddTuDien() {
  const luu = [], bg = Date.now();
  DD.buoi.forEach(b => {
    if (!ddCo(b) || ddKhungGio(b)[0] > bg) return;
    const [t0, t1] = ddKhungGio(b), cac = DD.test.filter(d => d.moLuc < t1 && d.dongLuc > t0).map(d => d.id); if (!cac.length) return;
    const r = DD.rec[b.id] ||= {}; r.kq ||= {}; let them = 0;
    DD.hs.forEach(u => { if (!r.kq[u.uid] && DD.nop.some(n => n.uid === u.uid && cac.includes(n.deGiaoId))) { r.kq[u.uid] = "a"; them++; } });
    if (them) luu.push(b);
  });
  if (!luu.length) return;
  const lo = fbDb.batch();
  luu.forEach(b => { const r = DD.rec[b.id], bg2 = { lop: DD.l.id, ngay: b.ngay, slot: b.slot, kq: r.kq, luc: Date.now(), boi: "Tự động (bài kiểm tra)" }; if (r.dd !== undefined) bg2.dd = r.dd; lo.set(fbDb.collection("diemDanh").doc(b.id), bg2); });
  await lo.commit(); DD.tuDien = luu.length;
}
function ddVe() {
  const v = document.getElementById("vung-dd"); if (!v || !DD) return;
  const l = DD.l, id = l.id;
  v.innerHTML = `<div class="nut-hang trai"><a class="btn phu" href="#/lop?id=${id}">← Danh sách lớp</a><button class="btn phu" onclick="ddDoiSua()">⚙ Lịch học hằng tuần</button><button class="btn phu" onclick="ddXuat()">⬇ Excel</button></div>
    <div class="the-trang"><b>${hoa(l.ten)}</b> <small class="ghi-chu">${DD.hs.length} sinh viên · ${DD.buoi.length} buổi theo lịch</small></div>
    ${DD.sua ? ddVeLich() : ""}<div id="dd-buoi"></div><div id="dd-tong"></div>`;
  ddVeBuoi(); ddVeTong();
}
function ddDoiSua() { DD.sua = !DD.sua; if (DD.sua) DD.lichSua = JSON.parse(JSON.stringify(DD.l.lich || { tu: ddIso(new Date()), tuan: 15, buoi: [] })); ddVe(); }
function ddVeLich() {
  const L = DD.lichSua ||= JSON.parse(JSON.stringify(DD.l.lich || { tu: ddIso(new Date()), tuan: 15, buoi: [] }));
  return `<div class="the-trang form-tk"><b>⚙ Lịch học cố định hằng tuần</b>
    <p class="ghi-chu">Thêm các buổi học lặp lại mỗi tuần. Mỗi buổi chọn có điểm danh hay không (sau này vẫn đổi được từng buổi riêng, ví dụ buổi nghỉ lễ).</p>
    <div class="luoi-cot"><label>Tuần học đầu tiên bắt đầu từ ngày<input type="date" value="${L.tu}" onchange="DD.lichSua.tu=this.value"></label><label>Số tuần<input type="number" min="1" max="30" value="${L.tuan || 15}" onchange="DD.lichSua.tuan=Math.max(1,Math.min(30,+this.value||15))"></label></div>
    ${L.buoi.map((s, i) => `<div class="dd-slot"><select onchange="DD.lichSua.buoi[${i}].thu=+this.value">${[1, 2, 3, 4, 5, 6, 0].map(t => `<option value="${t}" ${s.thu === t ? "selected" : ""}>${DD_THU[t]}</option>`).join("")}</select>
      <input type="time" value="${s.bd || ""}" onchange="DD.lichSua.buoi[${i}].bd=this.value" aria-label="Giờ bắt đầu"><input type="time" value="${s.kt || ""}" onchange="DD.lichSua.buoi[${i}].kt=this.value" aria-label="Giờ kết thúc">
      <input type="text" maxlength="40" placeholder="Tên buổi (tùy chọn)" value="${hoa(s.ten || "")}" onchange="DD.lichSua.buoi[${i}].ten=this.value">
      <label class="tk-chk"><input type="checkbox" ${s.dd !== false ? "checked" : ""} onchange="DD.lichSua.buoi[${i}].dd=this.checked"> Có điểm danh</label>
      <button class="chip-nhanh" onclick="DD.lichSua.buoi.splice(${i},1);ddVe()">✕ Xóa</button></div>`).join("")}
    <div class="nut-hang"><button class="btn phu" onclick="DD.lichSua.buoi.push({thu:1,bd:'07:00',kt:'09:30',ten:'',dd:true});ddVe()">＋ Thêm buổi hằng tuần</button><button class="btn" onclick="ddLuuLich()">💾 Lưu lịch</button></div></div>`;
}
async function ddLuuLich() {
  const L = DD.lichSua; if (!L.tu) return alert("Chọn ngày bắt đầu."); if (!L.buoi.length) return alert("Thêm ít nhất một buổi học hằng tuần.");
  L.buoi = L.buoi.map(s => ({ thu: s.thu, bd: s.bd || "", kt: s.kt || "", ten: String(s.ten || "").slice(0, 40), dd: s.dd !== false }));
  try { await fbDb.collection("lop").doc(DD.l.id).update({ lich: L }); DD.l.lich = L; DD.buoi = ddBuoi(DD.l); DD.cur = Math.min(DD.cur, DD.buoi.length - 1); DD.sua = false; ddVe(); } catch (e) { alert(loiTk(e)); }
}
function ddVeBuoi() {
  const o = document.getElementById("dd-buoi"); if (!o) return;
  if (!DD.buoi.length) { o.innerHTML = `<div class="trong">Chưa có lịch học. Thêm lịch ở khung trên.</div>`; return; }
  const b = DD.buoi[DD.cur], co = ddCo(b), n = ddDem(b), hom = ddIso(new Date());
  o.innerHTML = `<div class="the-trang"><b>Buổi học</b>
    <div class="dd-chon"><button class="chip-nhanh" onclick="ddChon(${DD.cur - 1})" ${DD.cur ? "" : "disabled"}>◀</button>
      <select onchange="ddChon(+this.value)">${DD.buoi.map((x, i) => { const d = ddDem(x); return `<option value="${i}" ${i === DD.cur ? "selected" : ""}>${ddNhan(x)}${ddCo(x) ? (d.tong ? ` — ✓ ${d.c + d.m + d.a}/${DD.hs.length}` : x.ngay <= hom ? " — chưa điểm danh" : "") : " — không điểm danh"}</option>`; }).join("")}</select>
      <button class="chip-nhanh" onclick="ddChon(${DD.cur + 1})" ${DD.cur < DD.buoi.length - 1 ? "" : "disabled"}>▶</button></div>
    <p class="ghi-chu">${DD_THU[b.s.thu]}, ${ddNgayVN(b.ngay)}${b.s.bd ? " · " + b.s.bd + (b.s.kt ? "–" + b.s.kt : "") : ""}${b.ngay === hom ? " · <b>hôm nay</b>" : ""}</p>
    <label class="tk-chk"><input type="checkbox" ${co ? "checked" : ""} onchange="ddBat(this.checked)"> Buổi này có điểm danh</label>
    ${co ? `<div class="kq-chu-thich">${Object.entries(DD_TT).filter(([k]) => k !== "a" || n.a).map(([k, t]) => `<span><i class="tk-o tk-${t[2] === "cam" ? "vang" : t[2]}"></i>${t[0]} ${t[1]}: <b>${n[k]}</b></span>`).join("")}<span>Chưa điểm danh: <b>${DD.hs.length - n.tong}</b></span></div>
      <div class="nut-hang trai"><button class="btn" onclick="ddTatCa('c')">✔ Tất cả có mặt</button><button class="btn phu" onclick="ddTatCa('')">Xóa hết</button><small class="ghi-chu" id="dd-luu">${DD.luu}</small></div>
      <div class="dd-ds">${DD.hs.map(u => { const k = ddKq(b, u.uid);
        return `<div class="dd-dong ${k ? "co-" + k : ""}"><span class="stt-sv">${u.stt}</span><div class="giua"><b>${hoa(u.hoTen)}</b><small>${hoa(u.maHS || "")}${u.ns ? " · " + hoa(u.ns) : ""}${k === "a" ? " · ⚙ tự động: đã nộp bài test" : ""}</small></div>
          <div class="dd-nut">${Object.entries(DD_TT).filter(([t]) => t !== "a").map(([t, x]) => `<button class="dd-n ${k === t || (t === "c" && k === "a") ? "bat " + x[2] : ""}" title="${x[1]}" onclick="ddDat('${u.uid}','${t}')">${x[0]}</button>`).join("")}</div></div>`; }).join("") || `<p class="ghi-chu">Lớp chưa có sinh viên.</p>`}</div>`
      : `<p class="ghi-chu">Buổi này không điểm danh (không tính vào chuyên cần).</p>`}</div>`;
}
function ddChon(i) { if (i < 0 || i >= DD.buoi.length) return; DD.cur = i; DD.luu = ""; ddVeBuoi(); }
function ddLuuSau() {
  DD.luu = "đang lưu…"; const e = document.getElementById("dd-luu"); if (e) e.textContent = DD.luu;
  clearTimeout(DD.timer); DD.timer = setTimeout(ddLuu, 700);
}
async function ddLuu() {
  const b = DD.buoi[DD.cur], r = DD.rec[b.id] ||= {};
  const bg = { lop: DD.l.id, ngay: b.ngay, slot: b.slot, kq: r.kq || {}, luc: Date.now(), boi: String(tk.hoSo?.hoTen || "").slice(0, 60) };
  if (r.dd !== undefined) bg.dd = r.dd;
  try { await fbDb.collection("diemDanh").doc(b.id).set(bg); DD.luu = "✓ đã lưu"; } catch (e) { DD.luu = "⚠ chưa lưu được: " + loiTk(e); }
  const el = document.getElementById("dd-luu"); if (el) el.textContent = DD.luu; ddVeTong();
}
function ddDat(uid, t) {
  const b = DD.buoi[DD.cur], r = DD.rec[b.id] ||= {}; r.kq ||= {};
  if (r.kq[uid] === t) delete r.kq[uid]; else if (r.kq[uid] === "a" && t === "c") r.kq[uid] = "c"; else r.kq[uid] = t;   // bấm ✔ trên dấu tự động = xác nhận thủ công
  ddVeBuoi(); ddLuuSau();
}
function ddTatCa(t) {
  const b = DD.buoi[DD.cur], r = DD.rec[b.id] ||= {}; r.kq ||= {};
  if (!t && !confirm("Xóa hết kết quả điểm danh của buổi này?")) return;
  DD.hs.forEach(u => { if (!t) delete r.kq[u.uid]; else if (!r.kq[u.uid]) r.kq[u.uid] = t; });   // “tất cả có mặt” không đè các em đã đánh dấu vắng / phép / muộn
  ddVeBuoi(); ddLuuSau();
}
function ddBat(co) {
  const b = DD.buoi[DD.cur], r = DD.rec[b.id] ||= {}; r.dd = co; ddVeBuoi(); ddLuuSau();
}
/* tổng hợp chuyên cần: chỉ tính các buổi có điểm danh và đã có kết quả */
function ddTongHop() {
  const bs = DD.buoi.filter(b => ddCo(b) && ddDem(b).tong > 0);
  return { bs, hang: DD.hs.map(u => { const k = bs.map(b => ddKq(b, u.uid) || "");
    const c = k.filter(x => x === "c" || x === "a").length, m = k.filter(x => x === "m").length, v = k.filter(x => x === "v").length, p = k.filter(x => x === "p").length, tong = bs.length;
    return { u, k, c, m, v, p, vang: tong ? Math.round((v + (tong - k.filter(Boolean).length)) / tong * 100) : 0, coMat: tong ? Math.round((c + m) / tong * 100) : 0 }; }) };
}
function ddVeTong() {
  const o = document.getElementById("dd-tong"); if (!o || !DD.buoi.length) return;
  const { bs, hang } = ddTongHop();
  if (!bs.length) { o.innerHTML = ""; return; }
  const mau = h => h.vang >= 20 ? "tk-do" : h.vang >= 10 ? "tk-vang" : "tk-xanh";
  o.innerHTML = `<div class="the-trang"><b>Tổng hợp chuyên cần</b> <small class="ghi-chu">(${bs.length} buổi đã điểm danh · % vắng = vắng + chưa điểm danh; đỏ từ 20%, vàng từ 10%)</small>
    <div class="bang-cuon"><table class="bang tk-bang"><thead><tr><th>STT</th><th>Sinh viên</th>${bs.map(b => `<th title="${ddNhan(b)}">${ddNgayVN(b.ngay).slice(0, 5)}</th>`).join("")}<th>Có mặt</th><th>Vắng</th><th>% vắng</th></tr></thead><tbody>
    ${hang.map(h => `<tr><td>${h.u.stt}</td><td>${hoa(h.u.hoTen)}<small>${hoa(h.u.maHS || "")}${h.u.ns ? " · " + hoa(h.u.ns) : ""}</small></td>${h.k.map(x => `<td class="${x === "v" || x === "" ? "dd-v" : ""}">${x ? DD_TT[x][0] : "–"}</td>`).join("")}<td>${h.c + h.m}</td><td>${h.v}</td><td class="tk-o ${mau(h)}">${h.vang}%</td></tr>`).join("")}</tbody></table></div></div>`;
}
function ddXuat() {
  const { bs, hang } = ddTongHop(), o = s => `"${String(s ?? "").replace(/"/g, '""')}"`;
  const dong = [["STT", "Họ tên", "Mã SV", "Ngày sinh", ...bs.map(b => `${ddNgayVN(b.ngay)} ${b.s.bd || ""}`.trim()), "Có mặt", "Muộn", "Có phép", "Vắng", "% vắng (gồm chưa điểm danh)"],
    ...hang.map(h => [h.u.stt, h.u.hoTen, h.u.maHS, h.u.ns, ...h.k.map(x => x ? DD_TT[x][1] : ""), h.c, h.m, h.p, h.v, h.vang])];
  const blob = new Blob(["﻿" + dong.map(r => r.map(o).join(";")).join("\r\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `Diem danh - ${DD.l.ten}.csv`; a.click();
}
