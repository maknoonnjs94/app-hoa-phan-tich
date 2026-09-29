/* =========================================================
   GIAO BÀI CHO LỚP + LÀM BÀI CÓ CHỐNG GIAN LẬN
   Firestore:
     deGiao/{id}  = { ten, lop, gvUid, gvTen, cau:[id], phut, moLuc, dongLuc, soLanRoi, taoLuc }
     baiNop/{deGiaoId_uid} = { deGiaoId, uid, hoTen, maHS, lop, cau:[{id,thuTu}], chon, batDau, capNhat,
                               phien, roi:[{luc,giay}], daNop, nopLuc, lyDo, dung, diem }
   Chống gian lận: (1) phát hiện rời app, quá số lần thì tự nộp; (2) hình mờ tên + mã HS;
   (3) mỗi HS một thứ tự câu và phương án; (4) chặn bôi đen, sao chép; (5) toàn màn hình;
   (6) một bài chỉ làm trên một máy tại một thời điểm.
   ========================================================= */
const BAN_APP = "v77";   // tăng cùng PHIEN_BAN trong sw.js
const laGVtk = () => ["gv", "qtv"].includes(tk.hoSo?.vaiTro) && !tk.hoSo?.khoa;
const laHStk = () => tk.hoSo?.vaiTro === "hs" && !tk.hoSo?.khoa;
const gioVN = ms => new Date(ms).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" });
const diemVN = x => String(x).replace(".", ",");
const hatTu = s => [...s].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 7) >>> 0;
const dangGiao = () => baiLam && baiLam.giao && !baiLam.ketThuc;
const dinhDangGio = ms => { const d = new Date(ms - new Date(ms).getTimezoneOffset() * 60000); return d.toISOString().slice(0, 16); };

/* ================= GIÁO VIÊN ================= */

// Nút "Giao cho lớp" trên màn xem đề
const veDeGoc = MAN_HINH["/de"].ve;
MAN_HINH["/de"].ve = () => {
  const h = veDeGoc();
  return laGVtk() ? h.replace(`<button class="btn phu" onclick="inDe()">`, `<a class="btn" href="#/giao-de?id=${deDangXem()?.id}">📤 Giao cho lớp</a><button class="btn phu" onclick="inDe()">`) : h;
};

MAN_HINH["/giao-de"] = {
  tieuDe: "Giao đề cho lớp",
  manHinhCon: true,
  ve: () => {
    if (!laGVtk()) return `<div class="trong">Đăng nhập tài khoản giáo viên để giao đề.<br><br><a class="btn" href="#/tai-khoan">Đăng nhập</a></div>`;
    const de = timDe(thamSoHash().get("id"));
    if (!de) return `<div class="trong">Không tìm thấy đề trên máy này.</div>`;
    const bayGio = Date.now();
    return `<div class="the-trang form-tk">
      <p><b>${coDau(de.ten)}</b> · ${de.cau.length} câu</p>
      <label>Tên bài giao<input id="gd-ten" value="${coDau(de.ten)}"></label>
      <label>Lớp<select id="gd-lop"><option>Đang tải…</option></select></label>
      <label>Mở đề lúc<input type="datetime-local" id="gd-mo" value="${dinhDangGio(bayGio)}"></label>
      <label>Đóng đề lúc<input type="datetime-local" id="gd-dong" value="${dinhDangGio(bayGio + 24 * 3600000)}"></label>
      <label>Thời gian làm bài (phút)<input type="number" id="gd-phut" min="5" max="240" value="${de.phut}"></label>
      <label>Số lần rời app tối đa (quá số này bài tự nộp)<input type="number" id="gd-roi" min="0" max="20" value="3"></label>
      <p class="ghi-chu">Mỗi học sinh nhận thứ tự câu và phương án khác nhau. Học sinh không xem được đáp án sau khi nộp.</p>
      <p class="loi-tk" id="tk-loi"></p>
      <button class="btn full" onclick="luuGiaoDe('${de.id}')">Giao đề</button></div>`;
  },
  sauKhiVe: async () => {
    const o = document.getElementById("gd-lop"); if (!o) return;
    try {
      const ds = (await fbDb.collection("lop").get()).docs.map(d => d.data())
        .filter(l => tk.hoSo.vaiTro === "qtv" || (l.gv || []).includes(tk.user.uid)).sort((a, b) => a.ten.localeCompare(b.ten, "vi"));
      o.innerHTML = ds.length ? ds.map(l => `<option>${hoa(l.ten)}</option>`).join("") : `<option value="">Chưa được gán lớp nào (nhờ QTV gán)</option>`;
    } catch (e) { o.innerHTML = `<option value="">${loiTk(e)}</option>`; }
  },
};
async function luuGiaoDe(idDe) {
  const de = timDe(idDe), g = id => document.getElementById(id).value, loi = document.getElementById("tk-loi");
  const moLuc = new Date(g("gd-mo")).getTime(), dongLuc = new Date(g("gd-dong")).getTime(), phut = Number(g("gd-phut")), lop = g("gd-lop");
  if (!lop) { loi.textContent = "Chọn lớp."; return; }
  if (!(dongLuc > moLuc)) { loi.textContent = "Giờ đóng đề phải sau giờ mở đề."; return; }
  if (!(phut >= 5)) { loi.textContent = "Thời gian làm bài tối thiểu 5 phút."; return; }
  loi.textContent = "Đang giao…";
  try {
    const cau = de.cau.map(id => CAU_THEO_ID[id]).filter(Boolean);
    const noiDung = cau.map(c => ({ id: c.id, chuong: c.chuong, dang: c.dang || "", mucDo: c.mucDo, de: c.de, phuongAn: c.phuongAn, ...(c.chum ? { chum: c.chum, dan: c.dan || "" } : {}) }));
    const ref = fbDb.collection("deGiao").doc(), lo = fbDb.batch();
    lo.set(ref, { ten: g("gd-ten").trim() || de.ten, lop, gvUid: tk.user.uid, gvTen: tk.hoSo.hoTen,
      cau: cau.map(c => c.id), noiDung, phut, moLuc, dongLuc, soLanRoi: Math.max(0, Number(g("gd-roi")) || 0), taoLuc: Date.now() });
    // Đáp án + lời giải để riêng: học sinh chỉ đọc được sau giờ đóng đề (luật Firestore kiểm tra)
    lo.set(fbDb.collection("dapAnDe").doc(ref.id), { lop, dongLuc, gvUid: tk.user.uid,
      cau: Object.fromEntries(cau.map(c => [c.id, { dapAn: c.dapAn, loiGiai: c.loiGiai || "" }])) });
    await lo.commit();
    alert(`Đã giao đề cho lớp ${lop}.`); location.hash = "#/da-giao";
  } catch (e) { loi.textContent = loiTk(e); }
}

MAN_HINH["/da-giao"] = {
  tieuDe: "Bài đã giao",
  manHinhCon: true,
  ve: () => laGVtk() ? `<p class="ghi-chu">Tạo đề ở mục Tạo đề, mở đề rồi bấm "📤 Giao cho lớp".</p><div id="vung-gd"><div class="trong">Đang tải…</div></div>`
    : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-gd"); if (!v) return;
    try {
      let q = fbDb.collection("deGiao");
      if (tk.hoSo.vaiTro !== "qtv") q = q.where("gvUid", "==", tk.user.uid);
      const ds = (await q.get()).docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => b.moLuc - a.moLuc);
      const bg = Date.now();
      v.innerHTML = ds.map(d => `<a class="the-trang dong-tk lien-ket" href="#/bang-diem?id=${d.id}">
        <div><b>${hoa(d.ten)}</b> <span class="nhan-vt">${bg < d.moLuc ? "Chưa mở" : bg > d.dongLuc ? "Đã đóng" : "Đang mở"}</span>
        <small>Lớp ${hoa(d.lop)} · ${d.cau.length} câu · ${d.phut} phút${tk.hoSo.vaiTro === "qtv" ? " · GV " + hoa(d.gvTen) : ""}</small>
        <small>${gioVN(d.moLuc)} → ${gioVN(d.dongLuc)}</small></div></a>`).join("") || `<div class="trong">Chưa giao bài nào.</div>`;
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};

const chamBai = b => {
  const dung = (b.cau || []).filter((c, i) => CAU_THEO_ID[c.id] && b.chon[i] === dapAnHienThi(c)).length;
  return { dung, diem: b.cau?.length ? Math.round(dung / b.cau.length * 100) / 10 : 0 };
};
let bangDiemHienTai = null;
MAN_HINH["/bang-diem"] = {
  tieuDe: "Bảng điểm",
  manHinhCon: true,
  ve: () => laGVtk() ? `<div id="vung-bd"><div class="trong">Đang tải…</div></div>` : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-bd"); if (!v) return;
    try {
      const id = thamSoHash().get("id");
      const d = (await fbDb.collection("deGiao").doc(id).get()).data();
      await taiDapAn(d, id);
      const [hs, nop] = await Promise.all([
        fbDb.collection("nguoiDung").where("lop", "==", d.lop).where("vaiTro", "==", "hs").get(),
        fbDb.collection("baiNop").where("deGiaoId", "==", id).get()]);
      const theoUid = Object.fromEntries(nop.docs.map(x => [x.data().uid, x.data()]));
      const dong = hs.docs.map(x => ({ uid: x.id, ...x.data() })).sort((a, b) => a.hoTen.split(" ").pop().localeCompare(b.hoTen.split(" ").pop(), "vi"))
        .map(u => { const b = theoUid[u.uid]; return { u, b, ...(b ? chamBai(b) : {}) }; });
      bangDiemHienTai = { d, dong };
      const daNop = dong.filter(x => x.b?.daNop).length;
      const LY_DO = { "roi-app": "tự nộp: rời app quá số lần", "het-gio": "hết giờ", "gv-thu": "giáo viên thu bài" };
      const quaHan = Date.now() > d.dongLuc;
      v.innerHTML = `<div class="the-trang"><b>${hoa(d.ten)}</b><small class="ghi-chu"> · Lớp ${hoa(d.lop)}</small>
        <p class="ghi-chu">${gioVN(d.moLuc)} → ${gioVN(d.dongLuc)} · ${d.phut} phút · tối đa ${d.soLanRoi} lần rời app<br>Đã nộp ${daNop}/${dong.length}</p>
        <div class="nut-hang">${quaHan ? "" : `<a class="btn" href="#/theo-doi?id=${id}">👁 Theo dõi trực tiếp</a>`}<button class="btn" onclick="xuatBangDiem()">⬇ Tải Excel</button>
          <button class="btn phu" onclick="xoaGiaoDe('${id}')">🗑 Xóa bài giao</button></div></div>
        <div class="the-trang bang-cuon"><table class="bang"><thead><tr><th>Học sinh</th><th>Điểm</th><th>Rời app</th><th>Trạng thái</th></tr></thead><tbody>
        ${dong.map(({ u, b, dung, diem }) => `<tr class="${b?.roi?.length ? "co-roi" : ""}">
          <td><span class="ten-anh">${anhDaiDien(u, 28)}<span>${hoa(u.hoTen)}<small>${hoa(u.maHS || "")}</small></span></span></td>
          <td>${b?.daNop || (b && quaHan) ? `<b>${diemVN(diem)}</b><small>${dung}/${b.cau.length}</small>` : "–"}</td>
          <td>${b ? `${b.roi?.length || 0} lần<small>${b.roi?.length ? b.roi.reduce((t, r) => t + r.giay, 0) + " giây" : ""}</small>` : "–"}</td>
          <td>${!b ? "Chưa làm" : b.daNop ? `Nộp ${gioVN(b.nopLuc)}${LY_DO[b.lyDo] ? `<small>${LY_DO[b.lyDo]}</small>` : ""}` : quaHan ? "Hết hạn, chưa bấm nộp<small>chấm theo bài đã làm</small>" : "Đang làm"}</td></tr>
          ${b?.roi?.length ? `<tr class="nhat-ki-roi"><td colspan="4">${b.roi.map(moTaRoi).join("<br>")}</td></tr>` : ""}`).join("")}
        </tbody></table></div>`;
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};
function xuatBangDiem() {
  const { d, dong } = bangDiemHienTai, o = s => `"${String(s ?? "").replace(/"/g, '""')}"`;
  const hang = [["STT", "Họ tên", "Mã HS", "Email", "Số câu đúng", "Tổng số câu", "Điểm", "Số lần rời app", "Tổng giây rời app", "Nộp lúc", "Ghi chú", "Chi tiết vi phạm"],
    ...dong.map(({ u, b, dung, diem }, i) => [i + 1, u.hoTen, u.maHS, u.email, b?.daNop || (b && Date.now() > d.dongLuc) ? dung : "", b?.cau?.length || "", b?.daNop || (b && Date.now() > d.dongLuc) ? diemVN(diem) : "",
      b ? b.roi?.length || 0 : "", b ? (b.roi || []).reduce((t, r) => t + r.giay, 0) : "", b?.nopLuc ? new Date(b.nopLuc).toLocaleString("vi-VN") : "",
      !b ? "Chưa làm" : !b.daNop ? "Chưa nộp" : b.lyDo === "roi-app" ? "Tự nộp do rời app" : b.lyDo === "het-gio" ? "Hết giờ" : b.lyDo === "gv-thu" ? "GV thu bài" : "",
      (b?.roi || []).map(moTaRoi).join(" | ")])];
  const blob = new Blob(["﻿" + hang.map(h => h.map(o).join(";")).join("\r\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `Bang diem - ${d.ten} - ${d.lop}.csv`; a.click();
}
async function xoaGiaoDe(id) {
  if (!confirm("Xóa bài giao này? Học sinh sẽ không thấy bài nữa (bài đã nộp vẫn còn trong máy chủ).")) return;
  try { await fbDb.collection("deGiao").doc(id).delete(); await fbDb.collection("dapAnDe").doc(id).delete().catch(() => {}); location.hash = "#/da-giao"; } catch (e) { alert(loiTk(e)); }
}

/* ================= HỌC SINH ================= */
let dsGiaoHS = null;
async function taiBaiGiaoHS() {
  const [giao, nop] = await Promise.all([
    fbDb.collection("deGiao").where("lop", "==", tk.hoSo.lop || "-").get(),
    fbDb.collection("baiNop").where("uid", "==", tk.user.uid).get()]);
  const theoDe = Object.fromEntries(nop.docs.map(x => [x.data().deGiaoId, x.data()]));
  dsGiaoHS = giao.docs.map(x => ({ id: x.id, ...x.data(), bai: theoDe[x.id] })).sort((a, b) => b.moLuc - a.moLuc);
  return dsGiaoHS;
}
MAN_HINH["/bai-duoc-giao"] = {
  tieuDe: "Bài được giao",
  manHinhCon: true,
  ve: () => laHStk() ? `<div id="vung-bg"><div class="trong">Đang tải…</div></div>` : `<div class="trong">Đăng nhập tài khoản học sinh để xem bài được giao.<br><br><a class="btn" href="#/tai-khoan">Đăng nhập</a></div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-bg"); if (!v) return;
    try {
      const ds = await taiBaiGiaoHS(), bg = Date.now();
      await Promise.all(ds.filter(d => d.bai && bg > d.dongLuc).map(d => taiDapAn(d, d.id).catch(() => {})));
      v.innerHTML = ds.map(d => {
        const b = d.bai, mo = bg >= d.moLuc && bg <= d.dongLuc;
        const xem = b && bg > d.dongLuc ? ` <a class="btn phu" href="#/xem-dap-an?id=${d.id}">📄 Xem đáp án</a>` : "";
        const tt = b && bg > d.dongLuc ? `<span class="nhan-vt vt-hs">${b.daNop ? "Đã nộp" : "Hết hạn"} · ${diemVN(chamBai(b).diem)} điểm</span>${xem}`
          : b?.daNop ? `<span class="nhan-vt vt-hs">Đã nộp · điểm có sau ${gioVN(d.dongLuc)}</span>`
          : bg < d.moLuc ? `<span class="nhan-vt">Mở lúc ${gioVN(d.moLuc)}</span>` : bg > d.dongLuc ? `<span class="nhan-vt">Đã hết hạn</span>`
          : `<button class="btn" onclick="batDauBaiGiao('${d.id}')">${b ? "Làm tiếp" : "Làm bài"}</button>`;
        return `<div class="the-trang dong-tk"><div><b>${hoa(d.ten)}</b><small>${d.cau.length} câu · ${d.phut} phút · GV ${hoa(d.gvTen)}</small>
          <small>Hạn: ${gioVN(d.dongLuc)}${mo && !b?.daNop ? ` · rời app tối đa ${d.soLanRoi} lần` : ""}</small></div><div class="nut-hang">${tt}</div></div>`;
      }).join("") || `<div class="trong">Chưa có bài nào được giao.</div>`;
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};

const refBai = id => fbDb.collection("baiNop").doc(`${id}_${tk.user.uid}`);
const napNoiDung = nd => (nd || []).forEach(c => { if (!CAU_THEO_ID[c.id]) CAU_THEO_ID[c.id] = { ...c }; });
// Tải đáp án của một đề giao (GV: luôn được; HS: sau giờ đóng) và gắn vào câu để chấm, xem lời giải
async function taiDapAn(d, id) {
  napNoiDung(d.noiDung);
  const s = await fbDb.collection("dapAnDe").doc(id).get();
  if (s.exists) Object.entries(s.data().cau).forEach(([k, v]) => { if (CAU_THEO_ID[k]) Object.assign(CAU_THEO_ID[k], v); });
  return s.exists;
}
if (baiLam?.giao?.noiDung) napNoiDung(baiLam.giao.noiDung);
async function batDauBaiGiao(id) {
  const d = (dsGiaoHS || []).find(x => x.id === id); if (!d) return;
  if (!confirm(`Bắt đầu "${d.ten}"?\n\n• Thời gian: ${d.phut} phút, tính từ lúc bắt đầu.\n• Bài làm toàn màn hình. Rời app (chuyển app, về màn hình chính, khóa máy) sẽ bị ghi lại; quá ${d.soLanRoi} lần bài tự nộp.\n• Mỗi lúc chỉ làm trên một máy.`)) return;
  vaoToanManHinh();
  try {
    const snap = await refBai(id).get(), cu = snap.exists ? snap.data() : null;
    if (cu?.daNop) return alert("Em đã nộp bài này rồi.");
    const phien = baiLam?.giao?.id === id ? baiLam.giao.phien : Math.random().toString(36).slice(2);
    if (cu && cu.phien !== phien && Date.now() - (cu.capNhat || 0) < 60000)
      return alert("Bài này đang được làm trên một máy khác. Chỉ được làm trên một máy. Nếu đó là máy của em, hãy đóng app ở máy kia, đợi 1 phút rồi thử lại.");
    if (!d.noiDung && !d.cau.every(x => CAU_THEO_ID[x])) return alert("Đề này được giao theo cách cũ. Nhờ giáo viên giao lại.");
    napNoiDung(d.noiDung);
    let cau = cu?.cau;
    if (!cau) { const m = taoMaDe(d.cau, 1, true, true, hatTu(tk.user.uid + id))[0]; cau = m.thuTu.map(i => ({ id: d.cau[i], thuTu: m.pa[i] })); }
    const batDau = cu?.batDau || Date.now(), roi = cu?.roi || [];
    const bai = { deGiaoId: id, uid: tk.user.uid, hoTen: tk.hoSo.hoTen, maHS: tk.hoSo.maHS || "", lop: tk.hoSo.lop, cau,
      chon: cu?.chon || cau.map(() => null), batDau, capNhat: Date.now(), phien, roi, daNop: false };
    await refBai(id).set(bai);
    baiLam = { cau, chon: bai.chon, cheDo: "thi", viTri: 0, batDau, ketThuc: null,
      hanGio: Math.max(1000, Math.min(d.phut * 60000, d.dongLuc - batDau)),
      giao: { id, ten: d.ten, soLanRoi: d.soLanRoi, dongLuc: d.dongLuc, noiDung: d.noiDung, phien, roi, daGui: false } };
    luuBaiLam(); location.hash = "#/lam-bai";
  } catch (e) { alert(loiTk(e)); }
}

// Đồng bộ bài làm lên máy chủ (định kì + khi chọn đáp án) và giữ "phiên" để chặn làm trên 2 máy
let henDongBo = null;
async function dongBoBai() {
  if (!dangGiao() || !fbDb || !tk.user) return;
  try {
    const snap = await refBai(baiLam.giao.id).get();
    if (snap.exists && snap.data().daNop) {   // giáo viên đã thu bài
      Object.assign(baiLam.giao, { daGui: true, lyDo: snap.data().lyDo || "gv-thu" }); baiLam.ketThuc = snap.data().nopLuc || Date.now(); luuBaiLam();
      alert("Giáo viên đã thu bài của em."); location.hash = "#/ket-qua"; return;
    }
    if (snap.exists && snap.data().phien !== baiLam.giao.phien) { khoaVaThoat("Bài này vừa được mở trên máy khác. Máy này dừng làm bài."); return; }
    await refBai(baiLam.giao.id).update({ chon: baiLam.chon, capNhat: Date.now(), roi: baiLam.giao.roi });
  } catch (e) { console.warn("đồng bộ", e); }
}
function khoaVaThoat(tb) { baiLam = null; luuBaiLam(); thoatDangThi(); alert(tb); location.hash = "#/bai-duoc-giao"; }
setInterval(() => { if (dangGiao() && location.hash.startsWith("#/lam-bai")) dongBoBai(); }, 15000);
const chonGoc = chonPhuongAn;
chonPhuongAn = function (j) { chonGoc(j); if (dangGiao()) { clearTimeout(henDongBo); henDongBo = setTimeout(dongBoBai, 2000); } };

async function guiBaiGiao() {
  if (!baiLam?.giao || !baiLam.ketThuc || baiLam.giao.daGui) return;
  const lyDo = baiLam.giao.lyDo || (baiLam.ketThuc - baiLam.batDau >= baiLam.hanGio - 1500 ? "het-gio" : "");
  try {
    await refBai(baiLam.giao.id).update({ chon: baiLam.chon, roi: baiLam.giao.roi, daNop: true, nopLuc: baiLam.ketThuc, lyDo, capNhat: Date.now() });
    baiLam.giao.daGui = true; luuBaiLam(); if (location.hash.startsWith("#/ket-qua")) hienManHinh();
  } catch (e) { console.warn("nộp", e); setTimeout(guiBaiGiao, 15000); }
}

// Màn kết quả của bài được giao: chỉ báo đã nộp và điểm, không hiện đáp án
const veKetQuaGoc = MAN_HINH["/ket-qua"].ve;
MAN_HINH["/ket-qua"].ve = () => {
  if (!baiLam?.giao || !baiLam.ketThuc) return veKetQuaGoc();
  const g = baiLam.giao;
  return `<div class="the-trang form-tk" style="text-align:center">
    <h3>${hoa(g.ten)}</h3>
    <p>${g.daGui ? "✅ Đã nộp bài lên máy chủ." : "⏳ Đang gửi bài… Giữ kết nối mạng, đừng đóng app."}</p>
    ${g.lyDo === "roi-app" ? `<p class="loi-tk">Bài tự nộp vì rời app quá ${g.soLanRoi} lần.</p>` : g.lyDo === "gv-thu" ? `<p class="loi-tk">Giáo viên đã thu bài.</p>` : ""}
    <p>Đã làm ${baiLam.chon.filter(x => x !== null).length}/${baiLam.cau.length} câu · rời app ${g.roi.length} lần</p>
    <p class="ghi-chu"><b>Điểm, đáp án và lời giải</b> mở trong mục Bài được giao sau khi đề đóng${g.dongLuc ? ` (${gioVN(g.dongLuc)})` : ""}.</p>
    <a class="btn full" href="#/bai-duoc-giao">Về danh sách bài</a></div>`;
};

/* ---------- Học sinh xem đáp án + lời giải sau khi đề đóng ---------- */
MAN_HINH["/xem-dap-an"] = {
  tieuDe: "Đáp án",
  manHinhCon: true,
  ve: () => tk.user ? `<div id="vung-da"><div class="trong">Đang tải…</div></div>` : `<div class="trong">Hãy đăng nhập.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-da"); if (!v) return;
    try {
      const id = thamSoHash().get("id"), d = (await fbDb.collection("deGiao").doc(id).get()).data();
      if (Date.now() <= d.dongLuc) { v.innerHTML = `<div class="trong">Đáp án mở sau ${gioVN(d.dongLuc)}.</div>`; return; }
      await taiDapAn(d, id);
      const snap = await refBai(id).get();
      if (!snap.exists) { v.innerHTML = `<div class="trong">Em chưa làm bài này.</div>`; return; }
      const b = snap.data(), { dung, diem } = chamBai(b);
      v.innerHTML = lamToan(`<div class="the-trang"><b>${hoa(d.ten)}</b><p>${hoa(b.hoTen)} · ${dung}/${b.cau.length} câu đúng · <b>${diemVN(diem)} điểm</b></p>
        <button class="btn phu" onclick="window.print()">🖨 In / lưu PDF</button></div>
        ${b.cau.map((c, i) => {
          const goc = CAU_THEO_ID[c.id]; if (!goc) return "";
          const chon = b.chon[i], dungVT = dapAnHienThi(c), tt = chon === null ? "bo" : chon === dungVT ? "dung" : "sai";
          return `<div class="the-trang xem-lai ${tt}"><b>Câu ${i + 1}: ${chon === null ? "bỏ trống" : "chọn " + CHU[chon]} · đáp án ${CHU[dungVT]} ${tt === "dung" ? "✓" : tt === "sai" ? "✗" : ""}</b>
            ${goc.dan ? `<div class="de-dan">${goc.dan}</div>` : ""}<div class="de-cau">${goc.de}</div>
            <div class="phuong-an">${c.thuTu.map((k, j) => `<button disabled class="${j === dungVT ? "dung" : j === chon ? "sai" : "mo"}"><span class="chu">${CHU[j]}</span><span class="nd">${goc.phuongAn[k]}</span></button>`).join("")}</div>
            <div class="loi-giai"><b>Lời giải</b><div>${goc.loiGiai || ""}</div></div></div>`;
        }).join("")}`);
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};

/* ---------- Theo dõi trực tiếp (GV / QTV): cập nhật ngay khi HS vi phạm, có tiếng báo ---------- */
let huyTheoDoi = null, amThanh = null;
const daThay = {};   // uid → số vi phạm đã thấy
function tiengBao() {
  try {
    amThanh = amThanh || new (window.AudioContext || window.webkitAudioContext)();
    [0, .18].forEach(t => { const o = amThanh.createOscillator(), g = amThanh.createGain(); o.frequency.value = 880; g.gain.value = .15;
      o.connect(g); g.connect(amThanh.destination); o.start(amThanh.currentTime + t); o.stop(amThanh.currentTime + t + .12); });
  } catch {}
}
MAN_HINH["/theo-doi"] = {
  tieuDe: "Theo dõi trực tiếp",
  manHinhCon: true,
  ve: () => `<div id="vung-td"><div class="trong">Đang kết nối…</div></div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-td"); if (!v || !laGVtk()) return;
    huyTheoDoi?.();
    try {
      const id = thamSoHash().get("id"), d = (await fbDb.collection("deGiao").doc(id).get()).data();
      await taiDapAn(d, id);
      const hs = (await fbDb.collection("nguoiDung").where("lop", "==", d.lop).where("vaiTro", "==", "hs").get()).docs
        .map(x => ({ uid: x.id, ...x.data() })).sort((a, b) => a.hoTen.split(" ").pop().localeCompare(b.hoTen.split(" ").pop(), "vi"));
      let lanDau = true;
      huyTheoDoi = fbDb.collection("baiNop").where("deGiaoId", "==", id).onSnapshot(snap => {
        const vung = document.getElementById("vung-td"); if (!vung) return;
        const bai = Object.fromEntries(snap.docs.map(x => [x.data().uid, x.data()])), bg = Date.now();
        let moi = false;
        hs.forEach(u => { const n = bai[u.uid]?.roi?.length || 0; if (!lanDau && n > (daThay[u.uid] || 0)) { moi = true; u.moi = bg; } daThay[u.uid] = n; });
        if (moi) tiengBao();
        lanDau = false;
        const dem = { lam: 0, nop: 0, vp: 0 };
        const dong = hs.map(u => {
          const b = bai[u.uid], n = b?.roi?.length || 0, cuoi = b?.roi?.[n - 1];
          if (b?.daNop) dem.nop++; else if (b) dem.lam++; if (n) dem.vp++;
          const ketNoi = b && !b.daNop ? (bg - (b.capNhat || 0) < 45000 ? "🟢" : "⚪ mất kết nối") : "";
          return `<div class="the-trang dong-td ${n ? "co-vp" : ""} ${u.moi && bg - u.moi < 15000 ? "vp-moi" : ""}">${anhDaiDien(u, 40)}
            <div class="giua"><b>${hoa(u.hoTen)}</b> <small class="ghi-chu">${hoa(u.maHS || "")}</small>
              <small>${!b ? "Chưa vào bài" : b.daNop ? `✅ Đã nộp · ${diemVN(chamBai(b).diem)} điểm` : `✍️ Đang làm ${b.chon.filter(x => x !== null).length}/${b.cau.length} câu ${ketNoi}`}</small>
              ${n ? `<small class="vp">⚠️ ${n} lần vi phạm · gần nhất: ${moTaRoi(cuoi)}</small>` : ""}</div>
            ${b && !b.daNop ? `<button class="btn phu" onclick="thuBai('${id}','${u.uid}')">Thu bài</button>` : ""}</div>`;
        }).join("");
        vung.innerHTML = `<div class="the-trang"><b>${hoa(d.ten)}</b> · Lớp ${hoa(d.lop)}
          <p class="ghi-chu">Đóng đề: ${gioVN(d.dongLuc)} · Đang làm ${dem.lam} · Đã nộp ${dem.nop}/${hs.length} · Có vi phạm ${dem.vp}</p>
          <p class="ghi-chu">Để màn này mở trong giờ kiểm tra: em nào vi phạm, dòng đó đỏ lên và có tiếng "ting".</p>
          <button class="btn phu" onclick="tiengBao()">🔔 Thử / bật âm thanh</button></div>${dong}`;
      }, e => { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; });
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};
window.addEventListener("hashchange", () => { if (!location.hash.startsWith("#/theo-doi")) { huyTheoDoi?.(); huyTheoDoi = null; } });
async function thuBai(idDe, uid) {
  if (!confirm("Thu bài của học sinh này ngay? Bài được chấm theo những câu em đã làm.")) return;
  try { await fbDb.collection("baiNop").doc(`${idDe}_${uid}`).update({ daNop: true, nopLuc: Date.now(), lyDo: "gv-thu" }); }
  catch (e) { alert(loiTk(e)); }
}

/* ---------- Chống gian lận khi đang làm bài được giao ---------- */
function vaoToanManHinh() { try { document.documentElement.requestFullscreen?.({ navigationUI: "hide" }).catch(() => {}); } catch {} }
function thoatDangThi() {
  document.body.classList.remove("dang-thi"); document.getElementById("hinh-mo")?.remove();
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
}
function batDangThi() {
  if (document.body.classList.contains("dang-thi")) return;
  document.body.classList.add("dang-thi");
  const chu = `${tk.hoSo?.hoTen || ""} · ${tk.hoSo?.maHS || tk.user?.email || ""}`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='260' height='150'><text x='10' y='90' transform='rotate(-25 130 75)' font-family='sans-serif' font-size='15' fill='rgba(120,120,140,0.16)'>${hoa(chu)}</text></svg>`;
  const mo = document.createElement("div"); mo.id = "hinh-mo";
  mo.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  document.body.append(mo);
}
let roiLuc = 0, roiLoai = "";
const LOAI_ROI = { "roi-app": "Rời app / về màn hình chính / khóa máy", "mat-tieu-diem": "Bấm ra ngoài (chia màn hình, thông báo, bong bóng chat)",
  "toan-man-hinh": "Thoát toàn màn hình", "mo-lai": "Tắt app rồi mở lại" };
const moTaRoi = r => `${gioVN(r.luc).split(" ")[0]} · ${LOAI_ROI[r.loai] || "Rời bài làm"} · ${r.giay} giây`;
function batDauRoi(loai = "mat-tieu-diem") {
  if (!dangGiao()) return;
  if (!roiLuc) { roiLuc = Date.now(); roiLoai = loai; } else if (loai === "roi-app" && roiLoai === "mat-tieu-diem") roiLoai = loai;
}
function ketThucRoi() {
  if (!roiLuc || !dangGiao()) { roiLuc = 0; return; }
  const giay = Math.round((Date.now() - roiLuc) / 1000); roiLuc = 0;
  if (giay < 1) return;
  const g = baiLam.giao; g.roi.push({ luc: Date.now(), giay, loai: roiLoai }); luuBaiLam();
  if (g.roi.length > g.soLanRoi) {
    g.lyDo = "roi-app"; baiLam.ketThuc = Date.now(); luuBaiLam();
    alert(`Em đã rời bài làm ${g.roi.length} lần (tối đa ${g.soLanRoi}). Bài được tự động nộp.`);
    location.hash = "#/ket-qua"; return;
  }
  dongBoBai(); canhBaoRoi(g.roi.length, g.soLanRoi, giay);
}
function canhBaoRoi(lan, toiDa, giay) {
  document.getElementById("canh-bao-roi")?.remove();
  const o = document.createElement("div"); o.id = "canh-bao-roi";
  o.innerHTML = `<div><b>⚠️ Em đã rời bài làm</b><p>Lần ${lan}/${toiDa} · ${giay} giây.<br>Giáo viên sẽ thấy số lần rời app. Quá ${toiDa} lần bài tự nộp.</p>
    <button class="btn full" onclick="this.closest('#canh-bao-roi').remove();vaoToanManHinh()">Tiếp tục làm bài</button></div>`;
  document.body.append(o);
}
document.addEventListener("visibilitychange", () => document.hidden ? batDauRoi("roi-app") : ketThucRoi());
window.addEventListener("blur", () => batDauRoi("mat-tieu-diem"));
window.addEventListener("focus", () => { if (!document.hidden) ketThucRoi(); });
document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && dangGiao() && location.hash.startsWith("#/lam-bai")) { batDauRoi("toan-man-hinh"); setTimeout(ketThucRoi, 300); } });
["copy", "cut", "contextmenu", "selectstart"].forEach(ev => document.addEventListener(ev, e => { if (document.body.classList.contains("dang-thi")) e.preventDefault(); }));

// Điều hướng: đang làm bài được giao thì chỉ ở màn làm bài; nộp xong thì gửi lên máy chủ
function kiemTraGiao() {
  const duong = location.hash.slice(1).split("?")[0] || "/";
  if (dangGiao()) {
    if (duong !== "/lam-bai" && duong !== "/doi-mat-khau") { location.hash = "#/lam-bai"; return; }
    batDangThi();
  } else {
    thoatDangThi();
    if (baiLam?.giao?.id && baiLam.ketThuc && !baiLam.giao.daGui && tk.user) guiBaiGiao();
  }
}
window.addEventListener("hashchange", kiemTraGiao);
// Mở lại app giữa chừng bài được giao: tính là một lần rời app
if (dangGiao()) { roiLuc = Date.now() - 1000; roiLoai = "mo-lai"; }

/* ---------- Phân quyền xem: học sinh và khách chỉ xem lí thuyết (+ tra cứu bảng) và bài được giao ----------
   Ngân hàng câu hỏi, bài tập, luyện tập, tạo đề chỉ dành cho giáo viên / QTV. */
const LA_MUC_GV = d => /^\/(bai-tap|luyen-tap|kho|tao-de|chon-cau|de|giao-de|da-giao|bang-diem|theo-doi)(\/|$)/.test(d) || ((d === "/lam-bai" || d === "/ket-qua") && !baiLam?.giao);
// Các mục cần kho câu hỏi đã mở khóa trên máy này
const CAN_KHO = d => /^\/(bai-tap|luyen-tap|kho|tao-de|chon-cau|de|giao-de)(\/|$)/.test(d) || ((d === "/lam-bai" || d === "/ket-qua") && !baiLam?.giao);
const duocVao = d => (!LA_MUC_GV(d) || laGVtk()) && (!CAN_KHO(d) || KHO_KHOA.mo);
Object.keys(MAN_HINH).forEach(d => {
  if (!LA_MUC_GV(d) && d !== "/lam-bai" && d !== "/ket-qua") return;
  const m = MAN_HINH[d], veGoc = m.ve, sauGoc = m.sauKhiVe;
  m.ve = () => duocVao(d) ? veGoc() : LA_MUC_GV(d) && !laGVtk() ? `<div class="trong">🔒 Mục này dành cho giáo viên.<br>Học sinh xem Lí thuyết và làm bài được giao.<br><br>
    <a class="btn" href="#/ly-thuyet">Xem lí thuyết</a> ${tk.user ? "" : `<a class="btn phu" href="#/tai-khoan">Đăng nhập</a>`}</div>` : oMoKho();
  if (sauGoc) m.sauKhiVe = () => { if (duocVao(d)) return sauGoc(); };
  if (m.lamBai) Object.defineProperty(m, "lamBai", { get: () => duocVao(d) });
  if (m.khoChuong) { const kc = m.khoChuong; Object.defineProperty(m, "khoChuong", { get: () => duocVao(d) ? kc : null }); }
});
MAN_HINH["/kho-cau-hoi"] = { tieuDe: "Kho câu hỏi", manHinhCon: true, ve: () => !laGVtk() ? `<div class="trong">Chỉ giáo viên mới mở được kho.</div>` : !KHO_KHOA.mo ? oMoKho() : `
  <div class="the-trang"><b>🔓 Kho đã mở trên máy này</b><p class="ghi-chu">${NGAN_HANG.length} câu trắc nghiệm · ${CHUONG.reduce((t, c) => t + c.baiTap.length, 0)} bài tự luận</p></div>
  <a class="the-luyen" href="#/kho"><span class="o-icon">📚</span><span class="text"><b>Ngân hàng câu hỏi</b><small>Xem theo chương, lọc mức độ, dạng; xem đáp án và lời giải</small></span><span class="chevron">›</span></a>
  <a class="the-luyen the-kho" href="#/tao-de"><span class="o-icon">📝</span><span class="text"><b>Tạo đề kiểm tra</b><small>Chọn câu, tạo mã đề, in, giao cho lớp</small></span><span class="chevron">›</span></a>
  <a class="the-luyen the-kho" href="#/bai-tap"><span class="o-icon">✏️</span><span class="text"><b>Bài tập và luyện tập</b><small>Bài tự luận theo chương, luyện trắc nghiệm</small></span><span class="chevron">›</span></a>
  <button class="btn full phu" onclick="khoaKhoTrenMay()">🔒 Khóa kho trên máy này (khi dùng máy chung)</button>` };
// Trang chủ: học sinh / khách thấy ô Tra cứu và Bài được giao thay cho Tạo đề, Luyện tập
const veTrangChuGoc = MAN_HINH["/"].ve;
MAN_HINH["/"].ve = () => laGVtk() ? veTrangChuGoc().replace(/<a href="#\/luyen-tap" class="o-3">[\s\S]*?<\/a>/,
    `<a href="${KHO_KHOA.mo ? "#/kho" : "#/kho-cau-hoi"}" class="o-3"><img src="anh/giao-dien/o-luyen-tap.webp" alt=""><b>Ngân hàng</b></a>`) : veTrangChuGoc()
  .replace(/<a href="#\/tao-de" class="o-2">[\s\S]*?<\/a>/, `<a href="#/tra-cuu" class="o-2"><img src="anh/giao-dien/o-doc-tiep.webp" alt=""><b>Tra cứu</b></a>`)
  .replace(/<a href="#\/luyen-tap" class="o-3">[\s\S]*?<\/a>/, `<a href="${tk.user ? "#/bai-duoc-giao" : "#/tai-khoan"}" class="o-3"><img src="anh/giao-dien/o-tao-de.webp" alt=""><b>${tk.user ? "Bài được giao" : "Đăng nhập"}</b></a>`);
const capNhatQuyen = () => document.body.classList.toggle("la-gv", laGVtk());
if (fbAuth) fbAuth.onAuthStateChanged(() => { capNhatQuyen(); hienManHinh(); });
capNhatQuyen();

/* ---------- Lối vào: thẻ trong Tài khoản, huy hiệu ở trang chủ ---------- */
const veTkGoc = MAN_HINH["/tai-khoan"].ve;
MAN_HINH["/tai-khoan"].ve = () => {
  let h = veTkGoc();
  const the = (href, icon, ten, mo) => `<a class="the-luyen" href="${href}"><span class="o-icon">${icon}</span><span class="text"><b>${ten}</b><small>${mo}</small></span><span class="chevron">›</span></a>`;
  if (laHStk()) h = h.replace(`<a class="the-luyen the-kho" href="#/doi-mat-khau">`, the("#/bai-duoc-giao", "📝", "Bài được giao", "Bài kiểm tra giáo viên giao cho lớp") + `<a class="the-luyen the-kho" href="#/doi-mat-khau">`);
  if (laGVtk()) h = h.replace(`<a class="the-luyen the-kho" href="#/doi-mat-khau">`, the("#/da-giao", "📤", "Bài đã giao và bảng điểm", "Theo dõi học sinh làm bài, tải bảng điểm")
    + (KHO_KHOA.mo ? the("#/kho", "📚", "Ngân hàng câu hỏi", `${NGAN_HANG.length} câu theo 15 chương · xem đề, đáp án, lời giải`)
      : the("#/kho-cau-hoi", "🔐", "Mở kho câu hỏi", "Nhập mật khẩu kho để xem ngân hàng câu hỏi, tạo đề, bài tập"))
    + `<a class="the-luyen the-kho" href="#/doi-mat-khau">`);
  return h + `<p class="ghi-chu" style="text-align:center">Phiên bản app: ${BAN_APP}${tk.hoSo ? ` · vai trò: ${VAI_TRO[tk.hoSo.vaiTro] || "?"}` : ""}${laGVtk() ? ` · kho: ${KHO_KHOA.mo ? "đã mở" : "khóa"}` : ""}</p>`;
};
async function ganHuyHieuTrangChu() {
  const canh = document.querySelector(".tc-canh"); if (!canh || !tk.user) return;
  let html = "";
  if (laHStk()) {
    try {
      const bg = Date.now(), ds = await taiBaiGiaoHS();
      const n = ds.filter(d => bg >= d.moLuc && bg <= d.dongLuc && !d.bai?.daNop).length;
      html = `<a class="huy-hieu-tc" href="#/bai-duoc-giao">📝 ${n ? `${n} bài đang mở` : "Bài được giao"}</a>`;
    } catch { return; }
  } else if (laGVtk()) html = `<a class="huy-hieu-tc" href="#/da-giao">📤 Bài đã giao</a>`;
  canh.innerHTML = html;
}
window.addEventListener("hashchange", () => { if ((location.hash || "#/") === "#/" || location.hash === "") ganHuyHieuTrangChu(); });
if (fbAuth) fbAuth.onAuthStateChanged(() => setTimeout(() => {
  ganHuyHieuTrangChu(); kiemTraGiao();
  if (["/giao-de", "/da-giao", "/bang-diem", "/bai-duoc-giao"].includes(location.hash.slice(1).split("?")[0])) hienManHinh();
}, 800));
kiemTraGiao();
if (["/giao-de", "/da-giao", "/bang-diem", "/bai-duoc-giao"].includes(location.hash.slice(1).split("?")[0])) hienManHinh();
