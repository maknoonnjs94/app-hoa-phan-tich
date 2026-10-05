/* =========================================================
   KẾT QUẢ CHẤM BÀI CỦA GIÁO VIÊN
   - Chốt điểm: lưu điểm cố định vào baiNop (diemChot, dung), đánh dấu deGiao.daChot.
   - Sửa điểm từng em: baiNop.diemSua + ghiChuDiem (điểm cuối = diemSua ?? diemChot ?? điểm tính).
   - Xem bài làm từng em: câu chọn, đáp án, lời giải, nhật kí vi phạm.
   - Sổ điểm lớp: học sinh × các bài đã giao, điểm trung bình, tải Excel.
   ========================================================= */

async function chotDiem(id) {
  const { d, dong } = bangDiemHienTai;
  const coBai = dong.filter(x => x.b);
  if (!confirm(`${d.daChot ? "Chốt lại" : "Chốt"} điểm cho ${coBai.length} bài làm?\n\n• Điểm được lưu cố định trên máy chủ; học sinh thấy "điểm chính thức".\n• Điểm đã sửa tay vẫn giữ nguyên.\n• Em chưa làm bài không có điểm (ghi "vắng").`)) return;
  try {
    const lo = fbDb.batch();
    coBai.forEach(({ u, b }) => { const { dung, diem } = chamBai(b); lo.update(fbDb.collection("baiNop").doc(`${id}_${u.uid}`), { diemChot: diem, dung }); });
    lo.update(fbDb.collection("deGiao").doc(id), { daChot: true, chotLuc: Date.now() });
    await lo.commit();
    ghiNhatKy("chot-diem", `${coBai.length} bài`, d.ten); alert("Đã chốt điểm."); hienManHinh();
  } catch (e) { alert(loiTk(e)); }
}

/* ---------- Xem bài làm một học sinh + sửa điểm ---------- */
MAN_HINH["/bai-lam"] = {
  tieuDe: "Bài làm",
  manHinhCon: true,
  ve: () => laGVtk() ? `<div id="vung-bl"><div class="trong">Đang tải…</div></div>` : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-bl"); if (!v || !laGVtk()) return;
    try {
      const ts = thamSoHash(), id = ts.get("de"), uid = ts.get("uid");
      const [sd, sb, su] = await Promise.all([fbDb.collection("deGiao").doc(id).get(), fbDb.collection("baiNop").doc(`${id}_${uid}`).get(), fbDb.collection("nguoiDung").doc(uid).get()]);
      const d = sd.data(), b = sb.data(), u = su.exists ? su.data() : { hoTen: b?.hoTen || "?" };
      if (!b) { v.innerHTML = `<div class="trong">Học sinh này chưa làm bài.</div>`; return; }
      await taiDapAn(d, id);
      const { dung, diem } = chamBai(b);
      v.innerHTML = lamToan(`
        <div class="the-trang the-tk">${anhDaiDien(u, 52)}<div><b>${hoa(u.hoTen)}</b><small>${hoa(u.maHS || "")} · Lớp ${hoa(d.lopTen || d.lop)}${b.maDe ? " · mã đề " + hoa(b.maDe) : ""}</small>
          <small>${hoa(d.ten)} · ${b.daNop ? "nộp " + gioVN(b.nopLuc) : "chưa nộp"}</small></div></div>
        <div class="the-trang form-tk">
          <div class="hang-diem"><div><small>Điểm tính</small><b>${diemVN(diem)}</b><small>${dung}/${b.cau.length} câu</small></div>
            <div><small>Điểm chốt</small><b>${b.diemChot != null ? diemVN(b.diemChot) : "–"}</b></div>
            <div class="noi"><small>Điểm cuối</small><b>${diemVN(diemCuoi(b))}</b></div></div>
          <label>Sửa điểm (bỏ trống = dùng điểm tính / điểm chốt)<input id="sua-diem" inputmode="decimal" value="${b.diemSua != null ? diemVN(b.diemSua) : ""}" placeholder="VD: 7,5"></label>
          <label>Ghi chú cho học sinh<input id="ghi-diem" value="${hoa(b.ghiChuDiem || "")}" placeholder="VD: −1 điểm do rời app 3 lần"></label>
          <p class="loi-tk" id="tk-loi"></p>
          <button class="btn full" onclick="luuSuaDiem('${id}','${uid}')">Lưu điểm</button></div>
        <div class="the-trang"><b>🕒 Dấu vết nộp bài</b><p class="ghi-chu">Bắt đầu: ${b.batDau ? gioVN(b.batDau) : "?"} · cập nhật cuối: ${b.capNhat ? gioVN(b.capNhat) : "?"}<br>
          ${b.daNop ? `Nộp lúc ${gioVN(b.nopLuc)} · cách nộp: ${LY_DO_KHOA[b.lyDo] || "em tự bấm nộp"}` : "Chưa nộp"}${b.thuLuc ? `<br><b>GV thu bài lúc ${gioVN(b.thuLuc)}</b> khi máy chủ mới ghi ${b.soCauLucThu}/${b.cau.length} câu` : ""}<br>
          Đã chọn ${b.chon.filter(x => x !== null).length}/${b.cau.length} câu${b.lichSu?.length ? ` · làm lại ${b.lichSu.length} lần` : ""}${b.moKhoa?.length ? ` · GV mở khóa ${b.moKhoa.length} lần` : ""}</p></div>
        ${b.roi?.length ? `<div class="the-trang"><b>⚠️ ${b.roi.length} lần vi phạm</b><p class="ghi-chu vp-ds">${b.roi.map(moTaRoi).join("<br>")}</p></div>` : ""}
        ${b.cau.map((c, i) => {
          const goc = CAU_THEO_ID[c.id]; if (!goc) return "";
          const chon = b.chon[i], dungVT = dapAnHienThi(c), tt = chon === null ? "bo" : chon === dungVT ? "dung" : "sai";
          return `<details class="the-trang xem-lai ${tt}"><summary><span class="dau">${tt === "dung" ? "✓" : tt === "sai" ? "✗" : "–"}</span>
              <span>Câu ${i + 1}: ${chon === null ? "bỏ trống" : "chọn " + CHU[chon]} · đáp án ${CHU[dungVT]}</span></summary>
            ${goc.dan ? `<div class="de-dan">${goc.dan}</div>` : ""}<div class="de-cau">${goc.de}</div>${bangTin(goc)}
            <div class="phuong-an">${c.thuTu.map((k, j) => `<button disabled class="${j === dungVT ? "dung" : j === chon ? "sai" : "mo"}"><span class="chu">${CHU[j]}</span><span class="nd">${goc.phuongAn[k]}</span></button>`).join("")}</div>
            <div class="loi-giai"><b>Lời giải</b><div>${goc.loiGiai || ""}</div></div></details>`;
        }).join("")}`);
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};
async function luuSuaDiem(id, uid) {
  const chu = document.getElementById("sua-diem").value.trim().replace(",", "."), loi = document.getElementById("tk-loi");
  const so = chu === "" ? null : Number(chu);
  if (so !== null && !(so >= 0 && so <= 10)) { loi.textContent = "Điểm phải từ 0 đến 10."; return; }
  loi.textContent = "Đang lưu…";
  try {
    await fbDb.collection("baiNop").doc(`${id}_${uid}`).update({ diemSua: so === null ? firebase.firestore.FieldValue.delete() : Math.round(so * 100) / 100,
      ghiChuDiem: document.getElementById("ghi-diem").value.trim() });
    ghiNhatKy("sua-diem", `${so === null ? "bỏ điểm sửa" : "điểm mới " + so}; ghi chú: ${document.getElementById("ghi-diem")?.value.trim() || "(không)"}`, document.querySelector(".the-tk b")?.textContent || `${id}_${uid}`);
    loi.textContent = "Đã lưu."; hienManHinh();
  } catch (e) { loi.textContent = loiTk(e); }
}

/* ---------- Sổ điểm lớp ---------- */
let soDiemHienTai = null;
MAN_HINH["/so-diem"] = {
  tieuDe: "Sổ điểm lớp",
  manHinhCon: true,
  ve: () => laGVtk() ? `<div class="the-trang form-tk"><label>Lớp<select id="sd-lop" onchange="location.hash='#/so-diem?lop='+encodeURIComponent(this.value)"><option>Đang tải…</option></select></label></div>
    <div id="vung-sd"></div>` : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const o = document.getElementById("sd-lop"), v = document.getElementById("vung-sd"); if (!o || !laGVtk()) return;
    try {
      const dsLop = (await fbDb.collection("lop").get()).docs.map(x => ({ id: x.id, ...x.data() }))
        .filter(l => tk.hoSo.vaiTro === "qtv" || (l.gv || []).includes(tk.user.uid)).sort((a, b) => a.ten.localeCompare(b.ten, "vi"));
      const lop = thamSoHash().get("lop") || dsLop[0]?.id || "", tenLopSd = dsLop.find(l => l.id === lop)?.ten || lop;
      o.innerHTML = dsLop.length ? dsLop.map(l => `<option value="${l.id}" ${l.id === lop ? "selected" : ""}>${hoa(l.ten)}</option>`).join("") : `<option value="">Chưa có lớp học phần</option>`;
      if (!lop) return;
      v.innerHTML = `<div class="trong">Đang tải sổ điểm…</div>`;
      const [hs, giao, nop] = await Promise.all([
        fbDb.collection("nguoiDung").where("lopHoc", "array-contains", lop).get(),
        fbDb.collection("deGiao").where("lop", "==", lop).get(),
        fbDb.collection("baiNop").where("lop", "==", lop).get()]);
      const de = giao.docs.map(x => ({ id: x.id, ...x.data() })).sort((a, b) => a.moLuc - b.moLuc);
      await Promise.all(de.map(d => taiDapAn(d, d.id).catch(() => {})));
      const bai = {}; nop.docs.forEach(x => { const b = x.data(); bai[`${b.deGiaoId}_${b.uid}`] = b; });
      const dsHS = hs.docs.map(x => ({ uid: x.id, ...x.data() })).sort((a, b) => a.hoTen.split(" ").pop().localeCompare(b.hoTen.split(" ").pop(), "vi") || a.hoTen.localeCompare(b.hoTen, "vi"));
      const bg = Date.now();
      const o1 = (d, u) => { const b = bai[`${d.id}_${u.uid}`]; if (!b || (!thamGiaBai(b) && bg > d.dongLuc)) return bg > d.dongLuc ? { chu: "vắng", lop: "vang" } : { chu: "–" };
        if (!b.daNop && bg <= d.dongLuc) return { chu: "đang làm" };
        const s = diemCuoi(b); return { so: s, chu: diemVN(s), lop: s < 5 ? "yeu" : s >= 8 ? "gioi" : "", link: `#/bai-lam?de=${d.id}&uid=${u.uid}`, sua: b.diemSua != null, vp: b.roi?.length }; };
      const hang = dsHS.map(u => { const o = de.map(d => o1(d, u)), co = o.filter(x => x.so != null);
        return { u, o, tb: co.length ? Math.round(co.reduce((t, x) => t + x.so, 0) / co.length * 100) / 100 : null, vang: o.filter(x => x.lop === "vang").length }; });
      soDiemHienTai = { lop: tenLopSd, de, hang };
      v.innerHTML = de.length ? `<div class="nut-hang"><button class="btn" onclick="xuatSoDiem()">⬇ Tải sổ điểm Excel</button></div>
        <p class="ghi-chu">${dsHS.length} học sinh · ${de.length} bài · bấm vào điểm để xem bài làm, sửa điểm. <span class="o-mau yeu">dưới 5</span> <span class="o-mau gioi">từ 8</span> ✎ đã sửa · ⚠ có vi phạm</p>
        <div class="the-trang bang-cuon so-diem"><table class="bang"><thead><tr><th>Học sinh</th>${de.map((d, k) => `<th title="${hoa(d.ten)}"><a class="lien-ket" href="#/bang-diem?id=${d.id}">Bài ${k + 1}</a><small>${new Date(d.moLuc).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" })}${d.daChot ? " 🔒" : ""}</small></th>`).join("")}<th>TB</th></tr></thead><tbody>
          ${hang.map(h => `<tr><td><span class="ten-anh">${anhDaiDien(h.u, 24)}<span>${hoa(h.u.hoTen)}<small>${hoa(h.u.maHS || "")}${h.u.nganh ? " · " + hoa(h.u.nganh) : ""}</small></span></span></td>
            ${h.o.map(x => `<td class="${x.lop || ""}">${x.link ? `<a class="lien-ket" href="${x.link}">${x.chu}${x.sua ? "✎" : ""}${x.vp ? "⚠" : ""}</a>` : x.chu}</td>`).join("")}
            <td><b>${h.tb != null ? diemVN(h.tb) : "–"}</b>${h.vang ? `<small>vắng ${h.vang}</small>` : ""}</td></tr>`).join("")}
        </tbody></table></div>
        <div class="the-trang"><b>Các bài</b><ol class="ds-bai-sd">${de.map(d => `<li><a class="lien-ket" href="#/bang-diem?id=${d.id}">${hoa(d.ten)}</a> <small class="ghi-chu">${gioVN(d.moLuc)}${d.daChot ? " · đã chốt" : ""}</small></li>`).join("")}</ol></div>`
        : `<div class="trong">Lớp ${hoa(tenLopSd)} chưa có bài nào được giao.</div>`;
    } catch (e) { (v || o).innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};
function xuatSoDiem() {
  const { lop, de, hang } = soDiemHienTai, o = s => `"${String(s ?? "").replace(/"/g, '""')}"`;
  const dong = [["STT", "Họ tên", "Mã SV", "Email", ...de.map((d, k) => `Bài ${k + 1}: ${d.ten}`), "Điểm TB", "Số bài vắng"],
    ...hang.map((h, i) => [i + 1, h.u.hoTen, h.u.maHS, h.u.email, ...h.o.map(x => x.so != null ? diemVN(x.so) : x.chu === "–" ? "" : x.chu), h.tb != null ? diemVN(h.tb) : "", h.vang])];
  const blob = new Blob(["﻿" + dong.map(r => r.map(o).join(";")).join("\r\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `So diem - ${lop}.csv`; a.click();
}


/* =========================================================
   KẾT QUẢ HỌC TẬP THEO LỚP (giáo viên): tổng quan từng lớp học phần — điểm trung bình, tỉ lệ nộp, phân bố học lực,
   từng bài, học sinh cần chú ý. Kết quả tính xong được nhớ 15 phút (localStorage) để trang chủ hiện tóm tắt.
   ========================================================= */
const KQ_CACHE = "kq-hoc-tap";
const docKQ = () => { try { return JSON.parse(localStorage.getItem(KQ_CACHE) || "null"); } catch { return null; } };
async function tinhKetQuaLop(l) {
  const [hs, giao, nop] = await Promise.all([
    fbDb.collection("nguoiDung").where("lopHoc", "array-contains", l.id).get(),
    fbDb.collection("deGiao").where("lop", "==", l.id).get(),
    fbDb.collection("baiNop").where("lop", "==", l.id).get()]);
  const de = giao.docs.map(x => ({ id: x.id, ...x.data() })).sort((a, b) => b.moLuc - a.moLuc);
  await Promise.all(de.map(d => taiDapAn(d, d.id).catch(() => {})));
  const bai = {}; nop.docs.forEach(x => { const b = x.data(); bai[`${b.deGiaoId}_${b.uid}`] = b; });
  const dsHS = hs.docs.map(x => ({ uid: x.id, ...x.data() })).filter(u => u.vaiTro === "hs" || !u.vaiTro), bg = Date.now();
  const tbcong = a => a.length ? Math.round(a.reduce((t, x) => t + x, 0) / a.length * 100) / 100 : null;
  const theoBai = de.map(d => {
    const cs = []; let nopN = 0;
    dsHS.forEach(u => { const b = bai[`${d.id}_${u.uid}`]; if (b && (b.daNop || bg > d.dongLuc)) { if (thamGiaBai(b)) cs.push(diemCuoi(b)); if (b.daNop) nopN++; } });
    return { id: d.id, ten: d.ten, loai: d.loai || "kiem-tra", dong: bg > d.dongLuc, nop: nopN, tong: dsHS.length, tb: tbcong(cs) };
  });
  const daDong = de.filter(d => bg > d.dongLuc);
  const theoHS = dsHS.map(u => {
    const diem = [], vp = []; let vang = 0;
    de.forEach(d => { const b = bai[`${d.id}_${u.uid}`];
      if (b && thamGiaBai(b) && (b.daNop || bg > d.dongLuc)) { diem.push(diemCuoi(b)); if (b.roi?.length) vp.push(b.roi.length); } else if (!thamGiaBai(b) && bg > d.dongLuc) vang++; });
    return { hoTen: u.hoTen, maHS: u.maHS || "", tb: tbcong(diem), vang, vp: vp.reduce((t, x) => t + x, 0), n: diem.length };
  });
  const co = theoHS.filter(h => h.tb != null);
  const phanBo = [co.filter(h => h.tb < 5).length, co.filter(h => h.tb >= 5 && h.tb < 6.5).length, co.filter(h => h.tb >= 6.5 && h.tb < 8).length, co.filter(h => h.tb >= 8).length];
  const nopTong = daDong.length * dsHS.length;
  return { id: l.id, ten: l.ten, siSo: dsHS.length, soBai: de.length, dangMo: de.filter(d => bg >= d.moLuc && bg <= d.dongLuc).length,
    tb: tbcong(co.map(h => h.tb)), nopRate: nopTong ? Math.round(daDong.reduce((t, d) => t + theoBai.find(x => x.id === d.id).nop, 0) / nopTong * 100) : null,
    coVP: theoHS.filter(h => h.vp).length, phanBo, bai: theoBai.slice(0, 6),
    hs: theoHS.map(h => ({ hoTen: h.hoTen, maHS: h.maHS, tb: h.tb, vang: h.vang, vp: h.vp })).sort((a, b) => (a.tb ?? 99) - (b.tb ?? 99) || a.hoTen.localeCompare(b.hoTen, "vi")),
    chuY: theoHS.filter(h => (h.tb != null && h.tb < 5) || h.vang >= 2).sort((a, b) => (a.tb ?? -1) - (b.tb ?? -1)).slice(0, 6) };
}
async function danhSachLopGV() {
  return (await fbDb.collection("lop").get()).docs.map(x => ({ id: x.id, ...x.data() }))
    .filter(l => tk.hoSo.vaiTro === "qtv" || (l.gv || []).includes(tk.user.uid)).sort((a, b) => a.ten.localeCompare(b.ten, "vi"));
}
let dangTinhKQ = null;
function taiKetQuaTatCa(khiXong) {   // tính lần lượt từng lớp (nhẹ máy chủ), gọi khiXong sau mỗi lớp
  if (dangTinhKQ) return dangTinhKQ;
  dangTinhKQ = (async () => {
    const ds = await danhSachLopGV(), kq = [];
    for (const l of ds) { try { kq.push(await tinhKetQuaLop(l)); } catch (e) { console.warn("kết quả lớp", e); } khiXong?.(kq, ds.length); }
    try { localStorage.setItem(KQ_CACHE, JSON.stringify({ luc: Date.now(), uid: tk.user.uid, ds: kq })); } catch {}
    return kq;
  })().finally(() => { dangTinhKQ = null; });
  return dangTinhKQ;
}
const the_KQ = k => {
  const pb = k.phanBo, tong = pb.reduce((a, b) => a + b, 0) || 1, mau = ["#dc2626", "#f59e0b", "#3b82f6", "#16a34a"], ten = ["dưới 5", "5–6,4", "6,5–7,9", "từ 8"];
  return `<div class="the-trang kq-lop"><div class="kq-dau"><b>${hoa(k.ten)}</b><small class="ghi-chu">${k.siSo} học sinh · ${k.soBai} bài${k.dangMo ? ` · <b>${k.dangMo} đang mở</b>` : ""}</small></div>
    <div class="kq-so"><div><small>Điểm TB lớp</small><b>${k.tb != null ? diemVN(k.tb) : "–"}</b></div><div><small>Tỉ lệ nộp</small><b>${k.nopRate != null ? k.nopRate + "%" : "–"}</b></div><div><small>Có vi phạm</small><b>${k.coVP}</b></div></div>
    <div class="kq-thanh" title="Phân bố học lực (theo điểm TB từng em)">${pb.map((n, i) => n ? `<i style="flex:${n};background:${mau[i]}">${n}</i>` : "").join("") || `<span class="ghi-chu">Chưa có điểm</span>`}</div>
    <div class="kq-chu-thich">${ten.map((t, i) => `<span><i style="background:${mau[i]}"></i>${t}: ${pb[i]}</span>`).join("")}</div>
    ${k.bai.length ? `<div class="kq-bai">${k.bai.map(b => `<a class="lien-ket" href="#/bang-diem?id=${b.id}"><span>${b.loai === "bai-tap" ? "📚" : "📝"} ${hoa(b.ten)}</span><small>nộp ${b.nop}/${b.tong}${b.tb != null ? " · TB " + diemVN(b.tb) : ""}${b.dong ? "" : " · đang mở"}</small></a>`).join("")}</div>` : ""}
    ${k.chuY.length ? `<div class="kq-chu-y"><b>Cần chú ý</b>${k.chuY.map(h => `<small>${hoa(h.hoTen)} ${h.maHS ? "(" + hoa(h.maHS) + ")" : ""}: ${h.tb != null ? "TB " + diemVN(h.tb) : "chưa có điểm"}${h.vang >= 2 ? " · vắng " + h.vang + " bài" : ""}${h.vp ? " · rời app " + h.vp + " lần" : ""}</small>`).join("")}</div>` : ""}
    <div class="nut-hang"><a class="btn" href="#/thong-ke-lop?id=${k.id}">📈 Thống kê</a><a class="btn phu" href="#/so-diem?lop=${k.id}">📒 Sổ điểm</a><a class="btn phu" href="#/lop?id=${k.id}">👥 Lớp</a></div></div>`;
};

/* =========================================================
   LỚP HỌC (giao diện chính của GV): danh sách lớp → mỗi lớp có Sinh viên (xem, thêm), Giao bài và
   Kết quả lớp (luồng con: điểm TB, tỉ lệ nộp, phân bố học lực, từng sinh viên).
   ========================================================= */
async function taoLopMoi() { await taiQt(); try { localStorage.removeItem(KQ_CACHE); } catch {} await qtThemLop(); }   // tạo xong tự mở trang lớp để thêm sinh viên
const mauTB = tb => tb == null ? "" : tb < 5 ? "yeu" : tb >= 8 ? "gioi" : "";
MAN_HINH["/lop-hoc"] = {
  tieuDe: "Lớp học",
  manHinhCon: true,
  ve: () => laGVtk() ? `<div class="lh-dau-trang"><button class="btn nho" onclick="taoLopMoi()">＋ Tạo lớp</button><a class="btn nho phu" href="#/ket-qua-hoc-tap">📊 Tổng quan mọi lớp</a></div>
    <div id="vung-lh"><div class="trong">Đang tải các lớp…</div></div>`
    : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-lh"); if (!v || !laGVtk()) return;
    try {
      const ds = await danhSachLopGV(), cu = docKQ(), kq = cu && cu.uid === tk.user.uid ? Object.fromEntries(cu.ds.map(k => [k.id, k])) : {};
      if (!ds.length) { v.innerHTML = `<div class="trong">Chưa có lớp học phần.<br>Bấm “＋ Tạo lớp học phần”, đặt tên như “Hóa phân tích khoa ngoài – Kì 1 2026-2027”, rồi thêm sinh viên bằng link Google Sheets hoặc file Excel.</div>`; return; }
      v.innerHTML = ds.map(l => { const k = kq[l.id];
        return `<div class="the-trang lh-lop"><div class="lh-ten">${hoa(l.ten)}</div>
          <div class="lh-so">${k ? `<span>👥 ${k.siSo} SV</span><span>📝 ${k.soBai} bài${k.dangMo ? ` · <b>${k.dangMo} đang mở</b>` : ""}</span>${k.tb != null ? `<span>⭐ TB ${diemVN(k.tb)}</span>` : ""}${k.nopRate != null ? `<span>✅ nộp ${k.nopRate}%</span>` : ""}` : "<span>đang tính số liệu…</span>"}</div>
          <div class="lh-nut"><a href="#/lop?id=${l.id}"><i>👥</i>Sinh viên</a><a href="#/nhap-lop?id=${l.id}"><i>➕</i>Thêm SV</a><a href="#/ket-qua-lop?id=${l.id}"><i>📊</i>Kết quả</a><a href="#/diem-danh?lop=${l.id}"><i>🗓</i>Điểm danh</a><a href="#/giao-de?lop=${l.id}"><i>📤</i>Giao bài</a></div></div>`; }).join("");
      if (!ds.every(l => kq[l.id]) && !dangTinhKQ) taiKetQuaTatCa().then(() => { if (document.getElementById("vung-lh")) MAN_HINH["/lop-hoc"].sauKhiVe(); }).catch(() => {});   // số liệu chưa có: tính ngầm rồi vẽ lại
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};
MAN_HINH["/ket-qua-lop"] = {
  tieuDe: "Kết quả lớp",
  manHinhCon: true,
  ve: () => laGVtk() ? `<div id="vung-kql"><div class="trong">Đang tính kết quả lớp…</div></div>` : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-kql"); if (!v || !laGVtk()) return;
    const id = thamSoHash().get("id") || "";
    try {
      const l = (await danhSachLopGV()).find(x => x.id === id);
      if (!l) { v.innerHTML = `<div class="trong">Không tìm thấy lớp, hoặc lớp không do thầy/cô phụ trách.<br><br><a class="btn" href="#/lop-hoc">← Lớp học</a></div>`; return; }
      const k = await tinhKetQuaLop(l);
      try { const cu = docKQ(), ds = (cu && cu.uid === tk.user.uid ? cu.ds : []).filter(x => x.id !== id).concat(k); localStorage.setItem(KQ_CACHE, JSON.stringify({ luc: cu?.luc || Date.now(), uid: tk.user.uid, ds })); } catch {}
      if (!document.getElementById("vung-kql")) return;
      v.innerHTML = `<div class="nut-hang trai"><a class="btn phu" href="#/lop-hoc">← Lớp học</a><a class="btn phu" href="#/lop?id=${id}">👥 Sinh viên</a><a class="btn phu" href="#/giao-de?lop=${id}">📤 Giao bài</a></div>${the_KQ(k)}
        <div class="the-trang"><b>Từng sinh viên</b> <small class="ghi-chu">(điểm trung bình các bài đã đóng, thấp lên trước)</small>
          <div class="kq-hs">${k.hs.map(h => `<div class="kq-hs-dong ${mauTB(h.tb)}"><span>${hoa(h.hoTen)}<small>${hoa(h.maHS)}</small></span><b>${h.tb != null ? diemVN(h.tb) : "–"}</b><small>${h.vang ? "vắng " + h.vang : ""}${h.vp ? (h.vang ? " · " : "") + "rời app " + h.vp : ""}</small></div>`).join("") || `<p class="ghi-chu">Lớp chưa có sinh viên.</p>`}</div></div>`;
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};

MAN_HINH["/ket-qua-hoc-tap"] = {
  tieuDe: "Kết quả học tập",
  manHinhCon: true,
  ve: () => laGVtk() ? `<p class="ghi-chu">Tổng quan từng lớp học phần: điểm, tỉ lệ nộp, phân bố học lực, học sinh cần chú ý.</p><div class="nut-hang"><button class="btn phu" onclick="localStorage.removeItem('${KQ_CACHE}');hienManHinh()">↻ Tính lại</button></div><div id="vung-kq"></div>` : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-kq"); if (!v || !laGVtk()) return;
    const cu = docKQ();
    if (cu && cu.uid === tk.user.uid && Date.now() - cu.luc < 900000) { v.innerHTML = cu.ds.map(the_KQ).join("") || `<div class="trong">Chưa có lớp học phần.</div>`; return; }
    v.innerHTML = `<div class="trong">Đang tính kết quả các lớp…</div>`;
    try {
      const kq = await taiKetQuaTatCa((xong, tong) => { if (document.getElementById("vung-kq")) v.innerHTML = xong.map(the_KQ).join("") + (xong.length < tong ? `<div class="trong">Đang tính… ${xong.length}/${tong} lớp</div>` : ""); });
      if (document.getElementById("vung-kq")) v.innerHTML = kq.map(the_KQ).join("") || `<div class="trong">Chưa có lớp học phần. Tạo lớp ở Tài khoản → Lớp học phần.</div>`;
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};

/* ---------- Lối vào sổ điểm ---------- */
const veTkSoDiem = MAN_HINH["/tai-khoan"].ve;
MAN_HINH["/tai-khoan"].ve = () => {
  const h = veTkSoDiem();
  return laGVtk() ? h.replace(`<a class="the-luyen" href="#/da-giao">`, `<a class="the-luyen" href="#/lop-hoc"><span class="o-icon">🏫</span><span class="text"><b>Lớp học</b><small>Thêm và xem sinh viên, giao bài, kết quả từng lớp</small></span><span class="chevron">›</span></a><a class="the-luyen" href="#/ket-qua-hoc-tap"><span class="o-icon">📊</span><span class="text"><b>Kết quả học tập</b><small>Tổng quan từng lớp: điểm, tỉ lệ nộp, học sinh cần chú ý</small></span><span class="chevron">›</span></a><a class="the-luyen" href="#/so-diem"><span class="o-icon">📒</span><span class="text"><b>Sổ điểm lớp</b><small>Điểm mọi bài theo lớp, điểm trung bình, tải Excel</small></span><span class="chevron">›</span></a><a class="the-luyen" href="#/da-giao">`) : h;
};
const veDaGiaoGoc = MAN_HINH["/da-giao"].ve;
MAN_HINH["/da-giao"].ve = () => laGVtk() ? `<a class="the-luyen" href="#/so-diem"><span class="o-icon">📒</span><span class="text"><b>Sổ điểm lớp</b><small>Tổng hợp điểm mọi bài theo lớp</small></span><span class="chevron">›</span></a>` + veDaGiaoGoc() : veDaGiaoGoc();
if (["/bai-lam", "/so-diem"].includes(location.hash.slice(1).split("?")[0])) hienManHinh();
if (fbAuth) fbAuth.onAuthStateChanged(() => setTimeout(() => { if (["/bai-lam", "/so-diem", "/lop"].includes(location.hash.slice(1).split("?")[0])) hienManHinh(); }, 900));

/* ---------- Trang lớp học phần: danh sách SV (nhiều ngành), tài khoản, kết quả, thao tác ---------- */
let lopHienTai = null;
const locLopHP = { nganh: "", tu: "" };
MAN_HINH["/lop"] = {
  tieuDe: "Lớp học phần",
  manHinhCon: true,
  ve: () => laGVtk() ? `<div id="vung-lop"><div class="trong">Đang tải…</div></div>` : `<div class="trong">Chỉ giáo viên, quản trị viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-lop"); if (!v || !laGVtk()) return;
    const id = thamSoHash().get("id") || "";
    try {
      await taiQt();
      const l = qt.lop.find(x => x.id === id);
      if (!l) { v.innerHTML = `<div class="trong">Không tìm thấy lớp, hoặc lớp không do thầy/cô phụ trách.</div>`; return; }
      if (lopHienTai?.id !== id) Object.assign(locLopHP, { nganh: "", tu: "" });
      const [hs, giao, nop] = await Promise.all([
        fbDb.collection("nguoiDung").where("lopHoc", "array-contains", id).get(),
        fbDb.collection("deGiao").where("lop", "==", id).get(),
        fbDb.collection("baiNop").where("lop", "==", id).get()]);
      const de = giao.docs.map(x => ({ id: x.id, ...x.data() })).sort((a, b) => a.moLuc - b.moLuc);
      await Promise.all(de.map(d => taiDapAn(d, d.id).catch(() => {})));
      const bai = {}; nop.docs.forEach(x => { const b = x.data(); bai[`${b.deGiaoId}_${b.uid}`] = b; });
      // đồng bộ bản ghi SV vào qt.tatCa để các nút Sửa / Khóa / Bỏ khỏi lớp dùng chung
      const dsHS = hs.docs.map(x => { const u = { uid: x.id, ...x.data() }, cu = qt.tatCa.find(y => y.uid === u.uid); return cu ? Object.assign(cu, u) : (qt.tatCa.push(u), u); });
      const gvLop = (l.gv || []).map(g => qt.tatCa.find(u => u.uid === g)?.hoTen).filter(Boolean);
      const bg = Date.now();
      const tt = l.danhSach || {};   // STT + ngày sinh theo danh sách đầu vào (lop.danhSach); chưa có thì đánh số theo thứ tự tên
      const ds = dsHS.sort((a, b) => (tt[a.uid]?.s ?? 1e6) - (tt[b.uid]?.s ?? 1e6) || a.hoTen.split(" ").pop().localeCompare(b.hoTen.split(" ").pop(), "vi") || a.hoTen.localeCompare(b.hoTen, "vi"))
        .map((u, i) => {
          const kq = de.map(d => { const b = bai[`${d.id}_${u.uid}`]; return { d, b, diem: b && thamGiaBai(b) && (b.daNop || bg > d.dongLuc) ? diemCuoi(b) : null }; });
          const co = kq.filter(x => x.diem != null);
          return { u, stt: tt[u.uid]?.s ?? i + 1, ns: tt[u.uid]?.ns || "", kq, lam: kq.filter(x => x.b).length, tb: co.length ? Math.round(co.reduce((t, x) => t + x.diem, 0) / co.length * 100) / 100 : null, vp: kq.reduce((t, x) => t + (x.b?.roi?.length || 0), 0) };
        });
      lopHienTai = { id, ten: l.ten, ds, de };
      const theoNganh = {}; ds.forEach(x => theoNganh[x.u.nganh || "Chưa ghi ngành"] = (theoNganh[x.u.nganh || "Chưa ghi ngành"] || 0) + 1);
      const dem = { khoa: ds.filter(x => x.u.khoa).length, chua: ds.filter(x => !x.u.khoa && x.u.doiMatKhau).length };
      v.innerHTML = `<div class="the-trang lop-dau"><h2>${hoa(l.ten)}</h2>
          <p class="ghi-chu">${ds.length} sinh viên · ${Object.keys(theoNganh).length} ngành · ${de.length} bài đã giao</p>
          <p class="ghi-chu">👤 ${gvLop.map(hoa).join(", ") || "Chưa có giáo viên"}</p>
          <div class="lop-chip"><span class="ok">✓ ${ds.length - dem.khoa - dem.chua} đang dùng</span>${dem.chua ? `<span class="cho">⏳ ${dem.chua} chưa đổi MK</span>` : ""}${dem.khoa ? `<span class="khoa">🔒 ${dem.khoa} đã khóa</span>` : ""}</div>
          <div class="lop-luoi">
            <a href="#/giao-de?lop=${id}"><i>📤</i>Giao bài</a><a href="#/diem-danh?lop=${id}"><i>🗓</i>Điểm danh</a><a href="#/ket-qua-lop?id=${id}"><i>📊</i>Kết quả</a>
            <a href="#/so-diem?lop=${id}"><i>📒</i>Sổ điểm</a><a href="#/nhap-lop?id=${id}"><i>➕</i>Thêm SV</a><button onclick="document.getElementById('lop-khac').toggleAttribute('hidden')"><i>⋯</i>Khác</button></div>
          <div class="lop-khac" id="lop-khac" hidden>
            <button onclick="themTheoMa('${id}')">＋ Thêm 1 SV theo mã</button><button onclick="xuatDsLop()">⬇ Tải danh sách Excel</button>
            ${laQtvTk() ? `<button onclick="qt.moGv=qt.moGv==='${id}'?'':'${id}';hienManHinh()">👥 Giáo viên của lớp</button>` : ""}
            ${dem.chua ? `<button onclick="khoaChuaDoi('${id}')">🔒 Khóa ${dem.chua} TK chưa đổi mật khẩu</button>` : ""}</div></div>
        ${laQtvTk() && qt.moGv === id ? khungGanGv(l) : ""}
        <details class="the-trang nhom-tk" ${de.length ? "open" : ""}><summary><b>Bài đã giao cho lớp</b><span class="dem">${de.length}</span></summary>
          <div class="ds-gon">${[...de].reverse().map(d => { const nop = ds.filter(x => bai[`${d.id}_${x.u.uid}`]?.daNop).length, bt = d.loai === "bai-tap";
            return `<a class="dong-lop lien-ket" href="#/bang-diem?id=${d.id}"><span class="ten"><b>${bt ? "📚" : "📝"} ${hoa(d.ten)}</b>
              <small>${bg < d.moLuc ? `mở ${gioVN(d.moLuc)}` : bg > d.dongLuc ? "đã đóng" : `đang mở · hạn ${gioVN(d.dongLuc)}`} · đã nộp ${nop}/${ds.length}${d.daChot ? " · 🔒 đã chốt" : ""}</small></span><span class="mui">›</span></a>`; }).join("")
            || `<p class="ghi-chu" style="padding:12px">Chưa giao bài nào. Bấm “📤 Giao bài”.</p>`}</div></details>
        ${ds.length ? `<div class="hang-loc"><input type="search" placeholder="🔍 Tìm tên, mã SV…" value="${hoa(locLopHP.tu)}" oninput="locLopHP.tu=this.value;locLop()">
          <select id="chon-nganh" onchange="locLopHP.nganh=this.value;locLop()" aria-label="Ngành"><option value="">Mọi ngành (${ds.length})</option>
            ${Object.entries(theoNganh).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "vi")).map(([n, k]) => `<option value="${hoa(n)}" ${locLopHP.nganh === n ? "selected" : ""}>${hoa(n)} (${k})</option>`).join("")}</select></div>
          <p class="ghi-chu" id="dem-loc"></p>` : ""}
        <div class="the-trang ds-gon" id="ds-lop">${ds.map(({ u, stt, ns, kq, lam, tb, vp }) => `<div class="dong-gon dong-sv co-stt" data-tim="${hoa(boDau(`${u.hoTen} ${u.maHS || ""} ${u.email}`))}" data-nganh="${hoa(u.nganh || "Chưa ghi ngành")}">
            <span class="stt-sv">${stt}</span>${anhDaiDien(u, 30)}
            <div class="giua"><b>${hoa(u.hoTen)}</b><small>${hoa(u.maHS || u.email)}${ns ? " · 🎂 " + hoa(ns) : ""}${u.nganh ? " · " + hoa(u.nganh) : ""}</small></div>
            <span class="tt">${u.khoa ? "🔒" : u.doiMatKhau ? "⏳" : ""}${tb != null ? ` <b class="${tb < 5 ? "chu-yeu" : tb >= 8 ? "chu-gioi" : ""}">${diemVN(tb)}</b>` : ""}</span>
            <button class="nut-ba-cham" onclick="this.parentNode.classList.toggle('mo')" aria-label="Chi tiết">⋯</button>
            <div class="thao-tac">
              <small>${hoa(u.email)} · đã làm ${lam}/${de.length} bài${vp ? ` · ⚠ ${vp} vi phạm` : ""}</small>
              ${de.length ? `<table class="bang bang-sv"><tbody>${kq.map(({ d, b, diem }) => `<tr><td>${hoa(d.ten)}<small>${gioVN(d.moLuc)}</small></td>
                <td>${diem != null ? `<a class="lien-ket" href="#/bai-lam?de=${d.id}&uid=${u.uid}"><b>${diemVN(diem)}</b> ›</a>` : b ? "đang làm" : bg > d.dongLuc ? "vắng" : "chưa làm"}</td></tr>`).join("")}</tbody></table>` : ""}
              <button class="btn phu" onclick="qtDatLaiMk('${u.uid}')">📧 Đặt lại MK</button>
              <button class="btn phu" onclick="qtSuaNguoi('${u.uid}')">✎ Sửa</button>
              <button class="btn phu" onclick="qtKhoa('${u.uid}')">${u.khoa ? "🔓 Mở khóa" : "🔒 Khóa"}</button>
              <button class="btn phu" onclick="boKhoiLop('${u.uid}','${id}')">➖ Bỏ khỏi lớp</button></div>
          </div>`).join("") || `<p class="ghi-chu" style="padding:14px">Lớp chưa có sinh viên. Bấm “＋ Thêm SV” và dán link Google Sheets danh sách lớp.</p>`}</div>`;
      locLop();
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};
function locLop() {
  const tu = boDau((locLopHP.tu || "").trim()); let n = 0;
  document.querySelectorAll("#ds-lop .dong-sv").forEach(x => { x.hidden = (tu && !x.dataset.tim.includes(tu)) || (locLopHP.nganh && x.dataset.nganh !== locLopHP.nganh); if (!x.hidden) n++; });
  const d = document.getElementById("dem-loc"); if (d) d.textContent = tu || locLopHP.nganh ? `Đang hiện ${n} sinh viên${locLopHP.nganh ? " · " + locLopHP.nganh : ""}` : "";
}
function xuatDsLop() {
  const { ten, ds, de } = lopHienTai, o = s => `"${String(s ?? "").replace(/"/g, '""')}"`;
  const dong = [["STT", "Họ tên", "Mã SV", "Ngày sinh", "Ngành / lớp HC", "Email đăng nhập", "Trạng thái tài khoản", "Số bài đã làm", "Số bài được giao", "Điểm TB", "Số lần vi phạm"],
    ...ds.map((x, i) => [x.stt, x.u.hoTen, x.u.maHS, x.ns, x.u.nganh, x.u.email, x.u.khoa ? "Đã khóa" : x.u.doiMatKhau ? "Chưa đổi mật khẩu" : "Đang dùng", x.lam, de.length, x.tb != null ? diemVN(x.tb) : "", x.vp])];
  const blob = new Blob(["﻿" + dong.map(r => r.map(o).join(";")).join("\r\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `Danh sach - ${ten}.csv`; a.click();
}
if (location.hash.startsWith("#/lop?")) hienManHinh();
