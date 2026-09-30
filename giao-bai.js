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
const BAN_APP = "v163";   // tăng cùng PHIEN_BAN trong sw.js
const laGVtk = () => ["gv", "qtv"].includes(tk.hoSo?.vaiTro) && !tk.hoSo?.khoa;
const laHStk = () => tk.hoSo?.vaiTro === "hs" && !tk.hoSo?.khoa;
const gioVN = ms => new Date(ms).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" });
const diemVN = x => String(x).replace(".", ",");
const hatTu = s => [...s].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 7) >>> 0;
const dangGiao = () => baiLam && baiLam.giao && !baiLam.ketThuc;
const giamSat = () => dangGiao() && baiLam.giao.chongGianLan !== false;   // chỉ bài có bật chống gian lận
const dinhDangGio = ms => { const d = new Date(ms - new Date(ms).getTimezoneOffset() * 60000); return d.toISOString().slice(0, 16); };

/* ================= GIÁO VIÊN ================= */

// Nút "Giao cho lớp" trên màn xem đề
const veDeGoc = MAN_HINH["/de"].ve;
MAN_HINH["/de"].ve = () => {
  const h = veDeGoc();
  return laGVtk() ? h.replace(`<button class="btn phu" onclick="inDe()">`, `<a class="btn" href="#/giao-de?id=${deDangXem()?.id}${sessionStorage.getItem("giao-cho-lop") ? "&lop=" + sessionStorage.getItem("giao-cho-lop") : ""}">📤 Giao cho lớp</a><button class="btn phu" onclick="inDe()">`) : h;
};

// Giao bài cho lớp học phần: bài kiểm tra (bấm giờ, chống gian lận, 1 lần) hoặc bài tập về nhà (làm lại, xem đáp án ngay)
const giaoTam = { loai: "kiem-tra" };
MAN_HINH["/giao-de"] = {
  tieuDe: "Giao bài cho lớp",
  manHinhCon: true,
  ve: () => {
    if (!laGVtk()) return `<div class="trong">Đăng nhập tài khoản giáo viên để giao bài.<br><br><a class="btn" href="#/tai-khoan">Đăng nhập</a></div>`;
    const ts = thamSoHash(), lopChon = ts.get("lop") || "", de = timDe(ts.get("id"));
    if (!de) {   // chưa chọn đề: chọn trong các đề đã lưu hoặc tạo mới
      const ds = dsDe();
      return `<div class="the-trang"><b>Chọn đề để giao</b><p class="ghi-chu">Đề đã tạo trên máy này. Muốn đề mới thì bấm “Tạo đề mới”, tạo xong bấm “📤 Giao cho lớp”.</p>
        <button class="btn" onclick="sessionStorage.setItem('giao-cho-lop','${lopChon}');location.hash='#/tao-de'">＋ Tạo đề mới</button></div>
        ${ds.length ? `<div class="list">${ds.map(d => dongDanhSach(`#/giao-de?id=${d.id}${lopChon ? "&lop=" + lopChon : ""}`, "📄", coDau(d.ten), `${d.cau.length} câu · ${d.phut} phút · ${new Date(d.ngay).toLocaleDateString("vi-VN")}`)).join("")}</div>` : `<div class="trong">Chưa có đề nào được lưu.</div>`}`;
    }
    const bayGio = Date.now(), bt = giaoTam.loai === "bai-tap";
    return `<div class="the-trang form-tk">
      <p><b>${coDau(de.ten)}</b> · ${de.cau.length} câu${de.ma.length > 1 ? ` · <b>${de.ma.length} mã đề</b>: mỗi sinh viên nhận ngẫu nhiên một mã (câu khác cùng dạng), thứ tự xáo riêng từng em` : ""}</p>
      <div class="phan-doan hai">${[["kiem-tra", "📝 Bài kiểm tra", "bấm giờ · 1 lần"], ["bai-tap", "📚 Bài tập về nhà", "làm lại · xem đáp án"]].map(([k, t, m]) =>
        `<button class="${giaoTam.loai === k ? "chon" : ""}" onclick="giaoTam.loai='${k}';hienManHinh()"><b>${t}</b><small>${m}</small></button>`).join("")}</div>
      <label>Tên bài giao<input id="gd-ten" value="${coDau((bt ? "Bài tập: " : "") + de.ten)}"></label>
      <label>Lớp học phần<select id="gd-lop" data-chon="${lopChon}"><option>Đang tải…</option></select></label>
      <label>Mở lúc<input type="datetime-local" id="gd-mo" value="${dinhDangGio(bayGio)}"></label>
      <label>${bt ? "Hạn nộp" : "Hệ thống tự đóng bài lúc"}<input type="datetime-local" id="gd-dong" value="${dinhDangGio(bayGio + (bt ? 7 * 24 : 24) * 3600000)}" oninput="goiYGioGiao()"></label>
      <label>Thời gian mỗi lần làm (phút${bt ? ", 0 = không bấm giờ" : ""})<input type="number" id="gd-phut" min="0" max="240" value="${bt ? 0 : de.phut}" oninput="goiYGioGiao()"></label>
      <p class="ghi-chu" id="gd-goi-y-gio"></p>
      ${(() => { const ids = de.ma.length > 1 ? [...cauCuaMa(de, de.ma[0])] : de.cau, dx = deXuatDiem(ids);
        return `<details class="tuy-chon" ontoggle="capNhatTongDiem()"><summary>🎯 Chia điểm từng câu (tổng <b id="gd-diem-tong">10</b>)</summary>
          <p class="ghi-chu">Máy đề xuất: nhận biết : thông hiểu : vận dụng = 1 : 1,5 : 2; câu vận dụng cao chỉ chiếm đoạn cuối thang điểm (khoảng 8,5–10) — đề dễ ít điểm hơn (≈ 0,8), đề khó nhiều hơn (tối đa 1,5). Thầy cô sửa số ở từng câu nếu muốn; điểm bài luôn quy về thang 10 theo tỉ lệ điểm các câu. Đề nhiều mã: điểm theo vị trí câu, các mã dùng chung.</p>
          <div class="nut-hang trai"><button class="btn nho phu" type="button" onclick="datLaiDiem('xuat')">Đề xuất theo mức độ</button><button class="btn nho phu" type="button" onclick="datLaiDiem('deu')">Chia đều</button></div>
          <div class="luoi-diem">${ids.map((id, i) => `<label><span>Câu ${i + 1} · ${TAT_MUC[CAU_THEO_ID[id]?.mucDo] || ""}</span><input type="number" step="0.05" min="0" class="gd-diem" value="${String(dx[i]).replace(",", ".")}" oninput="capNhatTongDiem()"></label>`).join("")}</div></details>`; })()}
      <div class="the-con"><b>Đáp án cho sinh viên</b>
        <label>Mở đáp số (A/B/C/D)<select id="gd-hienda" onchange="document.getElementById('o-da-luc').hidden=this.value!=='hen-gio'">
          ${bt ? `<option value="sau-nop" selected>Ngay sau khi nộp</option>` : ""}<option value="sau-han" ${bt ? "" : "selected"}>Sau ${bt ? "hạn nộp" : "khi đóng đề"}</option><option value="hen-gio">Hẹn ngày giờ…</option></select></label>
        <label id="o-da-luc" hidden>Mở đáp án lúc<input type="datetime-local" id="gd-da-luc" value="${dinhDangGio(bayGio + (bt ? 7 * 24 + 1 : 25) * 3600000)}"></label>
        <label>Lời giải chi tiết<select id="gd-lg"><option value="khong" selected>Chưa hiện (chỉ đáp số)</option><option value="cung">Hiện cùng đáp án</option></select></label>
        <p class="ghi-chu">Sau này mở / ẩn lời giải, mở đáp án sớm hơn: vào Bảng điểm của bài.</p></div>
      ${bt ? `<label>Số lần được làm<select id="gd-solan"><option value="1">1 lần</option><option value="2">2 lần</option><option value="3" selected>3 lần</option><option value="0">Không giới hạn</option></select></label>
        <label class="dong-bat"><input type="checkbox" id="gd-cgl" checked><span>Khóa khi làm bài: sinh viên chỉ thao tác ở màn làm bài (không mở được lí thuyết, tra cứu, kho câu hỏi), toàn màn hình, cảnh báo rời app</span></label>
        <p class="ghi-chu">Điểm tính theo lần làm cuối. Mỗi lần làm lại, câu và phương án được xáo lại.</p>`
      : `<label>Số lần rời app làm khóa bài (rời đủ số này thì bài bị khóa và tự nộp; các lần trước chỉ cảnh báo)<input type="number" id="gd-roi" min="0" max="20" value="3"></label>
        <p class="ghi-chu">Mỗi sinh viên nhận thứ tự câu và phương án khác nhau.</p>`}
      <p class="loi-tk" id="tk-loi"></p>
      <button class="btn full" onclick="luuGiaoDe('${de.id}')">📤 Giao ${bt ? "bài tập" : "bài kiểm tra"}</button></div>`;
  },
  sauKhiVe: async () => {
    const o = document.getElementById("gd-lop"); if (!o) return;
    goiYGioGiao();
    try {
      const ds = (await fbDb.collection("lop").get()).docs.map(d => ({ id: d.id, ...d.data() }))
        .filter(l => tk.hoSo.vaiTro === "qtv" || (l.gv || []).includes(tk.user.uid)).sort((a, b) => a.ten.localeCompare(b.ten, "vi"));
      o.innerHTML = ds.length ? ds.map(l => `<option value="${l.id}" ${o.dataset.chon === l.id ? "selected" : ""}>${hoa(l.ten)}</option>`).join("") : `<option value="">Chưa có lớp học phần (tạo ở Tài khoản → Lớp học phần)</option>`;
    } catch (e) { o.innerHTML = `<option value="">${loiTk(e)}</option>`; }
  },
};
const layDiemForm = () => [...document.querySelectorAll(".gd-diem")].map(o => Math.max(0, Number(o.value) || 0));
function capNhatTongDiem() { const o = document.getElementById("gd-diem-tong"); if (o) o.textContent = diemVN(Math.round(layDiemForm().reduce((a, b) => a + b, 0) * 100) / 100); }
function datLaiDiem(kieu) {
  const os = [...document.querySelectorAll(".gd-diem")], de = timDe(thamSoHash().get("id")); if (!os.length || !de) return;
  const ids = de.ma.length > 1 ? [...cauCuaMa(de, de.ma[0])] : de.cau, dx = kieu === "deu" ? ids.map(() => Math.round(1000 / ids.length) / 100) : deXuatDiem(ids);
  os.forEach((o, i) => (o.value = dx[i])); capNhatTongDiem();
}
async function luuGiaoDe(idDe) {
  const de = timDe(idDe), g = id => document.getElementById(id)?.value ?? "", loi = document.getElementById("tk-loi");
  const bt = giaoTam.loai === "bai-tap";
  const moLuc = new Date(g("gd-mo")).getTime(), dongLuc = new Date(g("gd-dong")).getTime(), phut = Number(g("gd-phut")) || 0, lop = g("gd-lop");
  if (!lop) { loi.textContent = "Chọn lớp học phần."; return; }
  if (!(dongLuc > moLuc)) { loi.textContent = "Giờ đóng / hạn nộp phải sau giờ mở."; return; }
  if (!bt && !(phut >= 5)) { loi.textContent = "Bài kiểm tra: thời gian làm tối thiểu 5 phút."; return; }
  const diemForm = layDiemForm();
  if (diemForm.length && !(diemForm.reduce((a, b) => a + b, 0) > 0)) { loi.textContent = "Tổng điểm các câu phải lớn hơn 0."; return; }
  loi.textContent = "Đang giao…";
  try {
    const maDe = de.ma.length > 1 ? de.ma.map(m => ({ ma: m.ma, cau: [...cauCuaMa(de, m)] })) : null;
    const cau = moiCauDe(de).map(id => CAU_THEO_ID[id]).filter(Boolean);   // mọi câu của mọi mã
    const cauMau = (maDe ? maDe[0].cau : de.cau);
    const noiDung = cau.map(c => ({ id: c.id, chuong: c.chuong, dang: c.dang || "", mucDo: c.mucDo, de: c.de, phuongAn: c.phuongAn, ...(c.chum ? { chum: c.chum, dan: c.dan || "" } : {}), ...(c.bang ? { bang: c.bang } : {}) }));
    const ref = fbDb.collection("deGiao").doc(), lo = fbDb.batch();
    const lopTen = document.getElementById("gd-lop").selectedOptions[0]?.textContent || "";
    const hienDapAn = g("gd-hienda"), dapAnLuc = hienDapAn === "hen-gio" ? new Date(g("gd-da-luc")).getTime() : dongLuc, hienLoiGiai = g("gd-lg");
    if (hienDapAn === "hen-gio" && !(dapAnLuc > moLuc)) { loi.textContent = "Giờ mở đáp án phải sau giờ mở bài."; return; }
    const kieu = { hienDapAn, dapAnLuc, hienLoiGiai, ...(bt ? { loai: "bai-tap", soLanLam: Number(g("gd-solan")), chongGianLan: document.getElementById("gd-cgl").checked, soLanRoi: 3 }
      : { loai: "kiem-tra", soLanLam: 1, chongGianLan: true, soLanRoi: Math.max(0, Number(g("gd-roi")) || 0) }) };
    lo.set(ref, { ten: g("gd-ten").trim() || de.ten, lop, lopTen, gvUid: tk.user.uid, gvTen: tk.hoSo.hoTen,
      cau: cauMau, ...(maDe ? { maDe } : {}), noiDung, phut, moLuc, dongLuc, ...kieu, taoLuc: Date.now() });
    // Đáp số để riêng (SV đọc sau dapAnLuc, hoặc ngay sau khi nộp nếu "sau-nop"); lời giải để riêng nữa, GV bật / tắt
    // điểm theo vị trí câu; các mã đề dùng chung
    const diemCau = {}; (maDe ? maDe.map(m => m.cau) : [de.cau]).forEach(cs => cs.forEach((cid, i) => { if (diemForm[i] != null) diemCau[cid] = diemForm[i]; }));
    lo.set(fbDb.collection("dapAnDe").doc(ref.id), { lop, dongLuc, dapAnLuc, hienDapAn, gvUid: tk.user.uid, diemCau,
      cau: Object.fromEntries(cau.map(c => [c.id, { dapAn: c.dapAn }])) });
    lo.set(fbDb.collection("loiGiaiDe").doc(ref.id), { lop, mo: hienLoiGiai === "cung", gvUid: tk.user.uid,
      cau: Object.fromEntries(cau.map(c => [c.id, c.loiGiai || ""])) });
    await lo.commit();
    try { const dsL = dsDe(), i = dsL.findIndex(x => x.id === idDe); if (i >= 0) { (dsL[i].giao ||= []).push({ luc: Date.now(), lop: lopTen, loai: bt ? "bai-tap" : "kiem-tra" }); ghiDsDe(dsL); } } catch {}   // nhớ đề này đã giao cho lớp nào (hiện ở ngân hàng đề)
    ghiNhatKy("giao-de", `${bt ? "bài tập" : "kiểm tra"}, ${cau.length} câu, mở ${gioVN(moLuc)} đóng ${gioVN(dongLuc)}`, `${document.getElementById("gd-ten")?.value.trim() || de.ten} · lớp ${lopTen}`);
    sessionStorage.removeItem("giao-cho-lop"); batCanhBaoGV();   // bài mới giao: bắt đầu nghe ngay
    alert(`Đã giao ${bt ? "bài tập" : "bài kiểm tra"} cho lớp ${lopTen}.`); location.hash = `#/lop?id=${lop}`;
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
        <div><span class="nhan-loai ${d.loai === "bai-tap" ? "bt" : "kt"}">${d.loai === "bai-tap" ? "📚" : "📝"}</span> <b>${hoa(d.ten)}</b> <span class="nhan-vt">${bg < d.moLuc ? "Chưa mở" : bg > d.dongLuc ? "Đã đóng" : "Đang mở"}</span>
        <small>Lớp ${hoa(d.lopTen || d.lop)} · ${d.cau.length} câu · ${d.phut} phút${tk.hoSo.vaiTro === "qtv" ? " · GV " + hoa(d.gvTen) : ""}</small>
        <small>${gioVN(d.moLuc)} → ${gioVN(d.dongLuc)}</small></div></a>`).join("") || `<div class="trong">Chưa giao bài nào.</div>`;
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};

// Điểm từng câu của bài giao (dapAnDe.diemCau, nạp trong taiDapAn); bài cũ chưa chia điểm thì mọi câu bằng nhau
const DIEM_DE = {};
const chamBai = b => {
  const dm = DIEM_DE[b.deGiaoId] || {}, ds = b.cau || [], p = c => dm[c.id] ?? 1;
  let tong = 0, dat = 0, dung = 0;
  ds.forEach((c, i) => { const x = p(c); tong += x; if (CAU_THEO_ID[c.id] && b.chon[i] === dapAnHienThi(c)) { dat += x; dung++; } });
  const deu = ds.every(c => p(c) === p(ds[0]));
  return { dung, diem: !ds.length || !tong ? 0 : deu ? Math.round(dung / ds.length * 100) / 10 : Math.round(dat / tong * 1000) / 100 };
};
// Điểm cuối cùng: điểm GV sửa > điểm đã chốt > điểm tính từ bài làm
const diemCuoi = b => b.diemSua ?? b.diemChot ?? chamBai(b).diem;
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
        fbDb.collection("nguoiDung").where("lopHoc", "array-contains", d.lop).get(),
        fbDb.collection("baiNop").where("deGiaoId", "==", id).get()]);
      const theoUid = Object.fromEntries(nop.docs.map(x => [x.data().uid, x.data()]));
      const dong = hs.docs.map(x => ({ uid: x.id, ...x.data() })).sort((a, b) => a.hoTen.split(" ").pop().localeCompare(b.hoTen.split(" ").pop(), "vi"))
        .map(u => { const b = theoUid[u.uid]; return { u, b, ...(b ? { ...chamBai(b), diem: diemCuoi(b) } : {}) }; });
      bangDiemHienTai = { d, dong, id };
      const daNop = dong.filter(x => x.b?.daNop).length;
      const LY_DO = { "roi-app": "bị khóa: rời app đủ số lần", "het-gio": "hết giờ", "gv-thu": "giáo viên thu bài" };
      const quaHan = Date.now() > d.dongLuc;
      v.innerHTML = `<div class="the-trang"><b>${hoa(d.ten)}</b><small class="ghi-chu"> · Lớp ${hoa(d.lopTen || d.lop)}</small>
        <p class="ghi-chu">${gioVN(d.moLuc)} → ${gioVN(d.dongLuc)} · ${d.phut} phút · khóa khi rời app ${d.soLanRoi} lần<br>Đã nộp ${daNop}/${dong.length}${d.daChot ? ` · <b>đã chốt điểm ${gioVN(d.chotLuc)}</b>` : " · chưa chốt điểm"}</p>
        <p class="ghi-chu">Đáp án cho SV: ${d.hienDapAn === "sau-nop" ? "ngay sau khi nộp" : Date.now() > lucDapAn(d) ? "<b>đã mở</b>" : "mở lúc " + gioVN(lucDapAn(d))} · Lời giải chi tiết: <b>${d.hienLoiGiai === "cung" ? "đang hiện" : "đang ẩn"}</b></p>
        <div class="nut-hang trai">${d.hienDapAn !== "sau-nop" && Date.now() <= lucDapAn(d) ? `<button class="btn phu" onclick="moDapAnNgay('${id}')">🔓 Mở đáp án ngay</button>` : ""}
          <button class="btn phu" onclick="batLoiGiai('${id}', ${d.hienLoiGiai !== "cung"})">${d.hienLoiGiai === "cung" ? "🙈 Ẩn lời giải" : "📖 Mở lời giải chi tiết"}</button></div>
        <details class="tuy-chon"><summary>⏰ Giờ đóng bài: ${gioVN(d.dongLuc)}${quaHan ? " (đã đóng)" : ""}</summary>
          <p class="ghi-chu">Đến giờ đóng, hệ thống đóng bài của mọi sinh viên (đã làm hay chưa). Gia hạn hoặc đóng sớm tại đây.</p>
          <label>Giờ đóng mới<input type="datetime-local" id="gd-dong-moi" value="${dinhDangGio(Math.max(d.dongLuc, Date.now()))}"></label>
          <div class="nut-hang"><button class="btn phu" onclick="datGioDong('${id}', false)">Lưu giờ đóng</button>${quaHan ? "" : `<button class="btn phu" onclick="datGioDong('${id}', true)">⛔ Đóng bài ngay</button>`}</div></details>
        ${(() => { const ids = d.maDe?.length > 1 ? d.maDe[0].cau : d.cau, cu = DIEM_DE[id], dx = cu ? null : ids.map(() => 1);
          return `<details class="tuy-chon"><summary>🎯 Điểm từng câu${cu ? "" : " (đang chia đều)"}</summary>
          <p class="ghi-chu">Sửa số ở từng câu rồi bấm Lưu: điểm mọi bài sẽ tính lại theo tỉ lệ (quy về thang 10). ${d.daChot ? "<b>Đề đã chốt điểm — nhớ bấm “Chốt lại điểm” sau khi lưu.</b>" : ""}</p>
          <div class="nut-hang trai"><button class="btn nho phu" type="button" onclick="datLaiDiemBang('${id}')">Đề xuất theo mức độ</button></div>
          <div class="luoi-diem">${ids.map((cid, i) => `<label><span>Câu ${i + 1} · ${TAT_MUC[CAU_THEO_ID[cid]?.mucDo] || ""}</span><input type="number" step="0.05" min="0" class="bd-diem" value="${cu ? cu[cid] ?? 1 : 1}"></label>`).join("")}</div>
          <button class="btn full" onclick="luuDiemCau('${id}')">💾 Lưu điểm các câu</button></details>`; })()}
        <p class="ghi-chu">Bấm tên sinh viên để xem bài làm, sửa điểm.</p>
        <div class="nut-hang">${quaHan ? "" : `<a class="btn" href="#/theo-doi?id=${id}">👁 Theo dõi trực tiếp</a>`}<button class="btn" onclick="chotDiem('${id}')">🔒 ${d.daChot ? "Chốt lại điểm" : "Chốt điểm"}</button><button class="btn phu" onclick="xuatBangDiem()">⬇ Tải Excel</button><a class="btn phu" href="#/so-diem?lop=${encodeURIComponent(d.lop)}">📒 Sổ điểm lớp</a>
          <button class="btn phu" onclick="xoaGiaoDe('${id}')">🗑 Xóa bài giao</button></div></div>
        <div class="the-trang bang-cuon"><table class="bang"><thead><tr><th>Học sinh</th><th>Điểm</th><th>Rời app</th><th>Trạng thái</th></tr></thead><tbody>
        ${dong.map(({ u, b, dung, diem }) => `<tr class="${b?.roi?.length ? "co-roi" : ""}">
          <td>${b ? `<a class="ten-anh lien-ket" href="#/bai-lam?de=${id}&uid=${u.uid}">` : `<span class="ten-anh">`}${anhDaiDien(u, 28)}<span>${hoa(u.hoTen)}<small>${hoa(u.maHS || "")}${u.nganh ? " · " + hoa(u.nganh) : ""}${b?.maDe ? " · mã " + hoa(b.maDe) : ""}</small></span>${b ? "</a>" : "</span>"}</td>
          <td>${b?.daNop || (b && quaHan) ? `<b>${diemVN(diem)}</b><small>${dung}/${b.cau.length}${b.diemSua != null ? " · đã sửa" : ""}</small>` : "–"}</td>
          <td>${b ? `${b.roi?.length || 0} lần<small>${b.roi?.length ? b.roi.reduce((t, r) => t + r.giay, 0) + " giây" : ""}</small>` : "–"}</td>
          <td>${!b ? "Chưa làm" : b.daNop ? `Nộp ${gioVN(b.nopLuc)}${LY_DO[b.lyDo] ? `<small>${LY_DO[b.lyDo]}</small>` : ""}${!quaHan && d.loai !== "bai-tap" && (b.lyDo === "roi-app" || b.lyDo === "gv-thu") ? `<button class="btn nho phu" onclick="moKhoaBai('${id}','${u.uid}')">🔓 Mở khóa</button>` : ""}` : quaHan ? "Hết hạn, chưa bấm nộp<small>chấm theo bài đã làm</small>" : "Đang làm"}</td></tr>
          ${b?.roi?.length ? `<tr class="nhat-ki-roi"><td colspan="4">${b.roi.map(moTaRoi).join("<br>")}</td></tr>` : ""}`).join("")}
        </tbody></table></div>`;
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};
function xuatBangDiem() {
  const { d, dong } = bangDiemHienTai, o = s => `"${String(s ?? "").replace(/"/g, '""')}"`;
  const hang = [["STT", "Họ tên", "Mã HS", "Email", "Số câu đúng", "Tổng số câu", "Điểm", "Số lần rời app", "Tổng giây rời app", "Nộp lúc", "Ghi chú", "Chi tiết vi phạm", "Ghi chú điểm của GV"],
    ...dong.map(({ u, b, dung, diem }, i) => [i + 1, u.hoTen, u.maHS, u.email, b?.daNop || (b && Date.now() > d.dongLuc) ? dung : "", b?.cau?.length || "", b?.daNop || (b && Date.now() > d.dongLuc) ? diemVN(diem) : "",
      b ? b.roi?.length || 0 : "", b ? (b.roi || []).reduce((t, r) => t + r.giay, 0) : "", b?.nopLuc ? new Date(b.nopLuc).toLocaleString("vi-VN") : "",
      !b ? "Chưa làm" : !b.daNop ? "Chưa nộp" : b.lyDo === "roi-app" ? "Tự nộp do rời app" : b.lyDo === "het-gio" ? "Hết giờ" : b.lyDo === "gv-thu" ? "GV thu bài" : "",
      (b?.roi || []).map(moTaRoi).join(" | "), b?.ghiChuDiem || ""])];
  const blob = new Blob(["﻿" + hang.map(h => h.map(o).join(";")).join("\r\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `Bang diem - ${d.ten} - ${d.lopTen || d.lop}.csv`; a.click();
}
// Giải thích luật giờ ngay dưới ô nhập: giờ làm bài chỉ chạy khi SV bấm Làm bài; đến giờ đóng thì hệ thống đóng với mọi SV
function goiYGioGiao() {
  const o = document.getElementById("gd-goi-y-gio"); if (!o) return;
  const bt = giaoTam.loai === "bai-tap", dong = new Date(document.getElementById("gd-dong")?.value).getTime(), phut = Number(document.getElementById("gd-phut")?.value) || 0;
  o.innerHTML = (phut ? `⏱ Mỗi sinh viên có <b>${phut} phút</b>, đồng hồ chỉ bắt đầu chạy khi em bấm “Làm bài”. ` : `Không bấm giờ. `)
    + (dong ? `🔒 Đến <b>${gioVN(dong)}</b> hệ thống ${bt ? "ngừng nhận bài" : "tự đóng bài"} của <b>mọi</b> sinh viên, kể cả sinh viên chưa làm hay đang làm dở (bài đang làm được thu theo phần đã làm). Ai bấm vào muộn thì chỉ còn thời gian đến giờ đóng.` : "");
}
// GV đổi giờ đóng sau khi giao (gia hạn hoặc đóng sớm); "ngay" = đóng bài ngay lúc này
async function datGioDong(id, ngay) {
  const d = bangDiemHienTai?.d; if (!d) return;
  const moi = ngay ? Date.now() : new Date(document.getElementById("gd-dong-moi")?.value).getTime();
  if (!moi || isNaN(moi)) return alert("Chọn giờ đóng mới.");
  if (moi <= d.moLuc) return alert("Giờ đóng phải sau giờ mở bài.");
  if (!confirm(ngay ? "Đóng bài NGAY bây giờ? Sinh viên chưa làm sẽ không vào làm được nữa; bài đang làm dở được thu theo phần đã làm." : `Đổi giờ đóng bài thành ${gioVN(moi)}?`)) return;
  const dapCu = d.dapAnLuc ?? d.dongLuc, capDA = d.hienDapAn !== "sau-nop", dapMoi = !capDA ? dapCu : (dapCu === d.dongLuc || dapCu < moi ? moi : dapCu);
  const lo = fbDb.batch();
  lo.update(fbDb.collection("deGiao").doc(id), { dongLuc: moi, ...(capDA ? { dapAnLuc: dapMoi } : {}) });
  lo.update(fbDb.collection("dapAnDe").doc(id), { dongLuc: moi, ...(capDA ? { dapAnLuc: dapMoi } : {}) });
  try { await lo.commit(); ghiNhatKy("gia-han", `${gioVN(d.dongLuc)} → ${gioVN(moi)}${ngay ? " (đóng ngay)" : ""}`, `${d.ten} · lớp ${d.lopTen || ""}`); hienManHinh(); } catch (e) { alert(loiTk(e)); }
}
function datLaiDiemBang(id) {
  const d = bangDiemHienTai?.d, os = [...document.querySelectorAll(".bd-diem")]; if (!d || !os.length) return;
  const dx = deXuatDiem(d.maDe?.length > 1 ? d.maDe[0].cau : d.cau); os.forEach((o, i) => (o.value = dx[i]));
}
async function luuDiemCau(id) {
  const d = bangDiemHienTai?.d; if (!d) return;
  const diem = [...document.querySelectorAll(".bd-diem")].map(o => Math.max(0, Number(o.value) || 0));
  if (!(diem.reduce((a, b) => a + b, 0) > 0)) return alert("Tổng điểm các câu phải lớn hơn 0.");
  if (!confirm("Lưu điểm từng câu? Điểm của mọi bài làm sẽ được tính lại." + (d.daChot ? "\n\nĐề đã chốt điểm: sau khi lưu hãy bấm “Chốt lại điểm”." : ""))) return;
  const diemCau = {}; (d.maDe?.length > 1 ? d.maDe.map(m => m.cau) : [d.cau]).forEach(cs => cs.forEach((cid, i) => { if (diem[i] != null) diemCau[cid] = diem[i]; }));
  try { await fbDb.collection("dapAnDe").doc(id).update({ diemCau }); DIEM_DE[id] = diemCau; hienManHinh(); } catch (e) { alert(loiTk(e)); }
}
async function moDapAnNgay(id) {
  if (!confirm("Mở đáp số cho sinh viên ngay bây giờ?")) return;
  const luc = Date.now() - 1000, lo = fbDb.batch();
  lo.update(fbDb.collection("deGiao").doc(id), { dapAnLuc: luc }); lo.update(fbDb.collection("dapAnDe").doc(id), { dapAnLuc: luc });
  try { await lo.commit(); hienManHinh(); } catch (e) { alert(loiTk(e)); }
}
async function batLoiGiai(id, mo) {
  if (!confirm(mo ? "Mở lời giải chi tiết cho sinh viên? (Sinh viên thấy lời giải khi đã được xem đáp án.)" : "Ẩn lời giải chi tiết?")) return;
  const lo = fbDb.batch();
  lo.update(fbDb.collection("deGiao").doc(id), { hienLoiGiai: mo ? "cung" : "khong" }); lo.update(fbDb.collection("loiGiaiDe").doc(id), { mo });
  try { await lo.commit(); hienManHinh(); } catch (e) { alert(loiTk(e)); }
}
async function xoaGiaoDe(id) {
  if (!confirm("Xóa bài giao này? Học sinh sẽ không thấy bài nữa (bài đã nộp vẫn còn trong máy chủ).")) return;
  try { ghiNhatKy("xoa-giao", "", (typeof bangDiemHienTai !== "undefined" && bangDiemHienTai?.d?.id === id ? bangDiemHienTai.d.ten : id)); await fbDb.collection("deGiao").doc(id).delete(); await fbDb.collection("dapAnDe").doc(id).delete().catch(() => {}); await fbDb.collection("loiGiaiDe").doc(id).delete().catch(() => {}); location.hash = "#/da-giao"; } catch (e) { alert(loiTk(e)); }
}

/* ================= HỌC SINH ================= */
let dsGiaoHS = null;
async function taiBaiGiaoHS() {
  // SV có thể học nhiều lớp học phần: lấy đề của từng lớp
  const [giao, nop] = await Promise.all([
    Promise.all((tk.hoSo.lopHoc || []).map(id => fbDb.collection("deGiao").where("lop", "==", id).get().then(s => s.docs).catch(() => []))).then(x => x.flat()),
    fbDb.collection("baiNop").where("uid", "==", tk.user.uid).get()]);
  const theoDe = Object.fromEntries(nop.docs.map(x => [x.data().deGiaoId, x.data()]));
  dsGiaoHS = giao.map(x => ({ id: x.id, ...x.data(), bai: theoDe[x.id] })).sort((a, b) => b.moLuc - a.moLuc);
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
      await Promise.all(ds.filter(d => moDapAn(d, d.bai)).map(d => taiDapAn(d, d.id).catch(() => {})));
      v.innerHTML = ds.map(d => {
        const b = d.bai, mo = bg >= d.moLuc && bg <= d.dongLuc, bt = d.loai === "bai-tap";
        const coDA = moDapAn(d, b);
        const conLan = bt && b?.daNop && mo && (!d.soLanLam || (b.lanNop || 0) < d.soLanLam);
        const xem = coDA ? ` <a class="btn phu" href="#/xem-dap-an?id=${d.id}">📄 Đáp án</a>` : "";
        const lamLai = conLan ? ` <button class="btn" onclick="batDauBaiGiao('${d.id}')">↻ Làm lại${d.soLanLam ? ` (còn ${d.soLanLam - (b.lanNop || 0)})` : ""}</button>` : "";
        const tt = b && (coDA || d.daChot) && (b.daNop || bg > d.dongLuc)
            ? `<span class="nhan-vt vt-hs">${d.daChot ? "Điểm chính thức" : b.daNop ? (bt ? `Lần ${b.lanNop || 1}` : "Đã nộp") : "Hết hạn"} · ${diemVN(diemCuoi(b))} điểm</span>${b.ghiChuDiem ? `<small class="ghi-chu">GV ghi: ${hoa(b.ghiChuDiem)}</small>` : ""}${xem}${lamLai}`
          : b?.daNop ? `<span class="nhan-vt vt-hs">Đã nộp · điểm, đáp án có lúc ${gioVN(lucDapAn(d))}</span>${lamLai}`
          : bg < d.moLuc ? `<span class="nhan-vt">Mở lúc ${gioVN(d.moLuc)}</span>` : bg > d.dongLuc ? `<span class="nhan-vt">Đã hết hạn</span>`
          : `<button class="btn" onclick="batDauBaiGiao('${d.id}')">${b ? "Làm tiếp" : "Làm bài"}</button>`;
        return `<div class="the-trang dong-tk"><div><span class="nhan-loai ${bt ? "bt" : "kt"}">${bt ? "📚 Bài tập" : "📝 Kiểm tra"}</span> <b>${hoa(d.ten)}</b>
          <small>${hoa(d.lopTen || "")} · ${d.cau.length} câu${d.phut ? ` · ${d.phut} phút` : ""} · GV ${hoa(d.gvTen)}</small>
          <small>Hạn: ${gioVN(d.dongLuc)}${bt ? ` · ${d.soLanLam ? `được làm ${d.soLanLam} lần` : "làm lại không giới hạn"}` : mo && !b?.daNop ? ` · rời app ${d.soLanRoi} lần thì bị khóa` : ""}</small></div><div class="nut-hang">${tt}</div></div>`;
      }).join("") || `<div class="trong">Chưa có bài nào được giao.</div>`;
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};

const refBai = id => fbDb.collection("baiNop").doc(`${id}_${tk.user.uid}`);
const lucDapAn = d => d.dapAnLuc ?? d.dongLuc;
const moDapAn = (d, b) => !!b && (Date.now() > lucDapAn(d) || (d.hienDapAn === "sau-nop" && b.lanNop > 0));
const napNoiDung = nd => (nd || []).forEach(c => { if (!CAU_THEO_ID[c.id]) CAU_THEO_ID[c.id] = { ...c }; });
// Tải đáp án của một đề giao (GV: luôn được; HS: sau giờ đóng) và gắn vào câu để chấm, xem lời giải
async function taiDapAn(d, id) {
  napNoiDung(d.noiDung);
  const s = await fbDb.collection("dapAnDe").doc(id).get();
  if (s.exists) DIEM_DE[id] = s.data().diemCau || null;
  if (s.exists) Object.entries(s.data().cau).forEach(([k, v]) => { if (CAU_THEO_ID[k]) Object.assign(CAU_THEO_ID[k], v); });
  // lời giải: chỉ đọc được khi GV đã mở (luật Firestore); không được thì bỏ qua
  try { const lg = await fbDb.collection("loiGiaiDe").doc(id).get(); if (lg.exists) Object.entries(lg.data().cau).forEach(([k, v]) => { if (CAU_THEO_ID[k]) CAU_THEO_ID[k].loiGiaiGiao = v; }); } catch {}
  return s.exists;
}
if (baiLam?.giao?.noiDung) napNoiDung(baiLam.giao.noiDung);
async function batDauBaiGiao(id) {
  const d = (dsGiaoHS || []).find(x => x.id === id); if (!d) return;
  const bt = d.loai === "bai-tap", cgl = d.chongGianLan !== false;
  try {
    const snap = await refBai(id).get(), cu = snap.exists ? snap.data() : null;
    const lamLai = cu?.daNop;
    if (lamLai && !(bt && (!d.soLanLam || (cu.lanNop || 0) < d.soLanLam))) return alert("Em đã nộp bài này rồi.");
    if (!confirm(`${lamLai ? "Làm lại" : "Bắt đầu"} "${d.ten}"?\n\n${d.phut ? `• Thời gian: ${d.phut} phút, đồng hồ chỉ chạy từ lúc em bấm OK.${Math.floor((d.dongLuc - Date.now()) / 60000) < d.phut ? ` Vì bài đóng lúc ${gioVN(d.dongLuc)} nên em chỉ còn ${Math.max(0, Math.floor((d.dongLuc - Date.now()) / 60000))} phút.` : ""} Hệ thống tự đóng bài lúc ${gioVN(d.dongLuc)}.` : `• Không bấm giờ, nộp trước hạn ${gioVN(d.dongLuc)}.`}\n${cgl ? `• Bài làm toàn màn hình. Rời app sẽ bị ghi lại và báo giáo viên; rời đủ ${d.soLanRoi} lần bài bị khóa và tự nộp.\n• Mỗi lúc chỉ làm trên một máy.` : "• Có thể thoát ra xem lí thuyết rồi quay lại làm tiếp."}${lamLai ? `\n• Điểm tính theo lần làm cuối.` : ""}`)) return;
    if (cgl) vaoToanManHinh();
    const phien = baiLam?.giao?.id === id ? baiLam.giao.phien : Math.random().toString(36).slice(2);
    if (cu && !lamLai && cu.phien !== phien && Date.now() - (cu.capNhat || 0) < 60000)
      return alert("Bài này đang được làm trên một máy khác. Chỉ được làm trên một máy. Nếu đó là máy của em, hãy đóng app ở máy kia, đợi 1 phút rồi thử lại.");
    if (!d.noiDung && !d.cau.every(x => CAU_THEO_ID[x])) return alert("Đề này được giao theo cách cũ. Nhờ giáo viên giao lại.");
    napNoiDung(d.noiDung);
    // Đề nhiều mã: mỗi SV cố định một mã (theo mã hóa uid + id bài), rồi xáo thứ tự câu / phương án riêng của em
    const phienBan = d.maDe?.length > 1 ? d.maDe[hatTu(tk.user.uid + id) % d.maDe.length] : null, dsGoc = phienBan ? phienBan.cau : d.cau;
    let cau = lamLai ? null : cu?.cau;
    if (!cau) { const m = taoMaDe(dsGoc, 1, true, true, hatTu(tk.user.uid + id + (cu?.lanNop || 0)))[0]; cau = m.thuTu.map(i => ({ id: dsGoc[i], thuTu: m.pa[i] })); }
    const batDau = lamLai ? Date.now() : cu?.batDau || Date.now(), roi = lamLai ? [] : cu?.roi || [];
    const bai = { deGiaoId: id, uid: tk.user.uid, hoTen: tk.hoSo.hoTen, maHS: tk.hoSo.maHS || "", lop: d.lop, cau,
      chon: lamLai ? cau.map(() => null) : cu?.chon || cau.map(() => null), batDau, capNhat: Date.now(), phien, roi, daNop: false, lanNop: cu?.lanNop || 0,
      ...(phienBan ? { maDe: phienBan.ma } : {}),
      ...(lamLai ? { lichSu: [...(cu.lichSu || []), { lan: cu.lanNop || 1, nopLuc: cu.nopLuc || 0, soCau: cu.cau?.length || 0 }] } : {}) };
    await refBai(id).set(bai, lamLai || !cu ? undefined : { merge: true });
    baiLam = { cau, chon: bai.chon, cheDo: "thi", viTri: 0, batDau, ketThuc: null,
      hanGio: Math.max(1000, Math.min(d.phut ? d.phut * 60000 : Infinity, d.dongLuc - batDau)),
      giao: { id, ten: d.ten, soLanRoi: d.soLanRoi, dongLuc: d.dongLuc, noiDung: d.noiDung, phien, roi, daGui: false,
        loai: d.loai || "kiem-tra", chongGianLan: cgl, hienDapAn: d.hienDapAn || "sau-han", dapAnLuc: lucDapAn(d), soLanLam: d.soLanLam || 1, lanNop: bai.lanNop } };
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
      thoatDangThi(); location.hash = "#/ket-qua"; setTimeout(() => alert("Giáo viên đã thu bài của em."), 50); return;
    }
    if (snap.exists && snap.data().phien !== baiLam.giao.phien) { khoaVaThoat("Bài này vừa được mở trên máy khác. Máy này dừng làm bài."); return; }
    await refBai(baiLam.giao.id).update({ chon: baiLam.chon, capNhat: Date.now(), roi: baiLam.giao.roi, dangRoi: roiLuc ? { luc: roiLuc, loai: roiLoai } : null });
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
    const lanNop = (baiLam.giao.lanNop || 0) + 1;
    await refBai(baiLam.giao.id).update({ chon: baiLam.chon, roi: baiLam.giao.roi, daNop: true, nopLuc: baiLam.ketThuc, lyDo, lanNop, capNhat: Date.now() });
    baiLam.giao.daGui = true; baiLam.giao.lanNop = lanNop; luuBaiLam(); if (location.hash.startsWith("#/ket-qua")) hienManHinh();
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
    ${g.lyDo === "roi-app" ? `<p class="loi-tk">Bài bị khóa và tự nộp vì rời app đủ ${g.soLanRoi} lần.</p>` : g.lyDo === "gv-thu" ? `<p class="loi-tk">Giáo viên đã thu bài.</p>` : ""}
    <p>Đã làm ${baiLam.chon.filter(x => x !== null).length}/${baiLam.cau.length} câu${g.chongGianLan !== false ? ` · rời app ${g.roi.length} lần` : ""}${g.loai === "bai-tap" ? ` · lần làm thứ ${g.lanNop || 1}` : ""}</p>
    ${g.hienDapAn === "sau-nop" && g.daGui ? `<a class="btn full" href="#/xem-dap-an?id=${g.id}">📄 Xem điểm và đáp án</a>`
      : `<p class="ghi-chu"><b>Điểm và đáp án</b> mở trong mục Bài được giao lúc ${gioVN(g.dapAnLuc ?? g.dongLuc)}.</p>`}
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
      const snap = await refBai(id).get();
      if (!snap.exists) { v.innerHTML = `<div class="trong">Em chưa làm bài này.</div>`; return; }
      if (!moDapAn(d, snap.data())) { v.innerHTML = `<div class="trong">Đáp án mở lúc ${gioVN(lucDapAn(d))}.</div>`; return; }
      await taiDapAn(d, id);
      const b = snap.data(), { dung } = chamBai(b), diem = diemCuoi(b);
      v.innerHTML = lamToan(`<div class="the-trang"><b>${hoa(d.ten)}</b><p>${hoa(b.hoTen)} · ${dung}/${b.cau.length} câu đúng · <b>${diemVN(diem)} điểm</b></p>
        <button class="btn phu" onclick="window.print()">🖨 In / lưu PDF</button></div>
        ${b.cau.map((c, i) => {
          const goc = CAU_THEO_ID[c.id]; if (!goc) return "";
          const chon = b.chon[i], dungVT = dapAnHienThi(c), tt = chon === null ? "bo" : chon === dungVT ? "dung" : "sai";
          return `<div class="the-trang xem-lai ${tt}"><b>Câu ${i + 1}: ${chon === null ? "bỏ trống" : "chọn " + CHU[chon]} · đáp án ${CHU[dungVT]} ${tt === "dung" ? "✓" : tt === "sai" ? "✗" : ""}</b>
            ${goc.dan ? `<div class="de-dan">${goc.dan}</div>` : ""}<div class="de-cau">${goc.de}</div>${bangTin(goc)}
            <div class="phuong-an">${c.thuTu.map((k, j) => `<button disabled class="${j === dungVT ? "dung" : j === chon ? "sai" : "mo"}"><span class="chu">${CHU[j]}</span><span class="nd">${goc.phuongAn[k]}</span></button>`).join("")}</div>
            ${(goc.loiGiaiGiao ?? (laGVtk() ? goc.loiGiai : "")) ? `<div class="loi-giai"><b>Lời giải</b><div>${goc.loiGiaiGiao ?? goc.loiGiai}</div></div>` : ""}</div>`;
        }).join("")}`);
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};

/* ---------- Theo dõi trực tiếp (GV / QTV): cập nhật ngay khi HS vi phạm, có tiếng báo ---------- */
let huyTheoDoi = null, amThanh = null;
const daThay = {};   // uid → số vi phạm đã thấy
function moAmThanh() {   // tạo / đánh thức bộ phát âm thanh (gọi sớm nhất có thể để tiếng kêu không bị trễ)
  amThanh = amThanh || new (window.AudioContext || window.webkitAudioContext)();
  if (amThanh.state === "suspended") amThanh.resume?.();
  return amThanh;
}
let dangKeu = false;
function tiengBao() {   // đúng 3 tiếng "ting" rồi ngắt; đang kêu thì bỏ qua lệnh kêu mới (không chồng, không kêu mãi)
  if (dangKeu) return;
  try {
    const A = moAmThanh(); dangKeu = true; setTimeout(() => (dangKeu = false), 1200);
    const phat = () => [0, .17, .34].forEach(t => { const o = A.createOscillator(), g = A.createGain(), T = A.currentTime + t; o.type = "sine"; o.frequency.value = 1320;
      g.gain.setValueAtTime(.0001, T); g.gain.exponentialRampToValueAtTime(.5, T + .008); g.gain.exponentialRampToValueAtTime(.0001, T + .15);
      o.connect(g); g.connect(A.destination); o.start(T); o.stop(T + .18); });
    if (A.state === "running") phat(); else A.resume().then(phat).catch(() => {});   // chưa mở khóa thì đợi mở xong mới phát, không dồn nhiều lượt
    navigator.vibrate?.([120, 60, 120, 60, 120]);
  } catch { dangKeu = false; }
}
// Mở khóa âm thanh của trình duyệt bằng lần chạm đầu tiên của giáo viên
["pointerdown", "keydown", "touchstart"].forEach(ev => document.addEventListener(ev, () => { if (laGVtk()) { try { moAmThanh(); } catch {} } }, { passive: true }));

/* ---------- Cảnh báo thời gian thực cho giáo viên: học sinh rời app trong lúc kiểm tra ----------
   Nghe baiNop của các bài đang mở (mọi màn hình). Có em vừa rời app (dangRoi) hoặc thêm một lần vi phạm (roi):
   kêu "ting ting" và hiện tên em ngay trên đầu màn hình. */
let huyCanhBaoGV = [], hienDeGV = [], nhoCanhBao = {};
const lucBaoCuoi = {};
function hienCanhBaoGV(u, b, de, kieu) {
  const kh = b.deGiaoId + "_" + b.uid;
  if (kieu !== "tu-nop" && Date.now() - (lucBaoCuoi[kh] || 0) < 10000) return;   // một em: tối đa một cảnh báo mỗi 10 giây
  lucBaoCuoi[kh] = Date.now();
  tiengBao();   // kêu ngay lập tức, rồi mới dựng khung cảnh báo
  let kho = document.getElementById("canh-bao-gv");
  if (!kho) { kho = document.createElement("div"); kho.id = "canh-bao-gv"; document.body.append(kho); }
  const n = b.roi?.length || 0, phai = de.soLanRoi ?? 3;
  const tre = b.dangRoi?.luc ? Math.max(0, Math.round((Date.now() - b.dangRoi.luc) / 1000)) : 0;
  const tt = kieu === "tu-nop" ? `bị khóa vì rời app đủ ${phai} lần` : kieu === "dang" ? `vừa rời app (đang ở ngoài)` : `vừa quay lại · vi phạm lần ${n}/${phai}`;
  const o = document.createElement("div"); o.className = "cb-gv";
  o.innerHTML = `<div><b>⚠️ ${hoa(b.hoTen || "Học sinh")}</b> <small>${hoa(b.maHS || "")}</small><br><span>${tt} · ${hoa(de.ten)} · ${gioVN(Date.now()).split(" ")[0]}${kieu === "dang" && tre > 3 ? ` · tin đến trễ ${tre} giây` : ""}</span></div>
    <a class="btn nho" href="#/theo-doi?id=${b.deGiaoId}">Xem</a>${kieu === "tu-nop" ? `<button class="btn nho phu" data-mk="1">🔓 Mở khóa</button>` : ""}<button class="btn nho phu" data-dong="1" aria-label="Đóng">✕</button>`;
  o.querySelector("[data-dong]").onclick = () => o.remove();
  const mk = o.querySelector("[data-mk]"); if (mk) mk.onclick = () => { moKhoaBai(b.deGiaoId, b.uid); o.remove(); };
  kho.prepend(o); while (kho.children.length > 5) kho.lastChild.remove();
  setTimeout(() => o.remove(), 25000);
}
function xuLyThayDoiBai(de, snap, lanDau) {
  snap.docChanges().forEach(ch => {
    if (ch.type === "removed") return;
    const b = ch.doc.data(), key = ch.doc.id, n = b.roi?.length || 0, dang = b.dangRoi?.luc || 0, cu = nhoCanhBao[key];
    if (!cu) {   // lần đầu thấy bài này: ghi nhận, chỉ báo nếu em đang ở ngoài app rất gần đây
      nhoCanhBao[key] = { n, dang, cho: !!dang };
      if (dang && Date.now() - dang < 120000 && !b.daNop) hienCanhBaoGV(b, b, de, "dang");
      return;
    }
    if (dang && dang !== cu.dang && !b.daNop) { cu.cho = true; hienCanhBaoGV(b, b, de, "dang"); }
    else if (n > cu.n) { const daBao = cu.cho; cu.cho = false; if (b.daNop && b.lyDo === "roi-app") hienCanhBaoGV(b, b, de, "tu-nop"); else if (!daBao) hienCanhBaoGV(b, b, de, "quay-lai"); }
    else if (!dang) cu.cho = false;
    Object.assign(cu, { n, dang });
  });
}
let idCanhBao = "";
async function batCanhBaoGV() {
  if (!fbDb || !tk.user || !laGVtk()) { huyCanhBaoGV.forEach(f => f()); huyCanhBaoGV = []; nhoCanhBao = {}; idCanhBao = ""; return; }
  try {
    let q = fbDb.collection("deGiao"); if (tk.hoSo.vaiTro !== "qtv") q = q.where("gvUid", "==", tk.user.uid);
    const bg = Date.now(), ds = (await q.get()).docs.map(d => ({ id: d.id, ...d.data() }))
      .filter(d => d.loai !== "bai-tap" && d.chongGianLan !== false && bg >= d.moLuc - 60000 && bg <= d.dongLuc + 600000);
    const khoa = tk.user.uid + ":" + ds.map(d => d.id).sort().join(",");
    if (khoa === idCanhBao) return;   // vẫn đúng các bài đang mở → giữ nguyên đăng ký, không bỏ sót sự kiện
    huyCanhBaoGV.forEach(f => f()); huyCanhBaoGV = []; nhoCanhBao = {}; idCanhBao = khoa;
    ds.forEach(de => huyCanhBaoGV.push(fbDb.collection("baiNop").where("deGiaoId", "==", de.id).onSnapshot(snap => xuLyThayDoiBai(de, snap), () => {})));
  } catch (e) { console.warn("cảnh báo GV", e); }
}
window.addEventListener("tk-san", batCanhBaoGV);
setInterval(() => { if (laGVtk() && !document.hidden) batCanhBaoGV(); }, 300000);   // làm mới danh sách bài đang mở mỗi 5 phút
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
      const hs = (await fbDb.collection("nguoiDung").where("lopHoc", "array-contains", d.lop).get()).docs
        .map(x => ({ uid: x.id, ...x.data() })).sort((a, b) => a.hoTen.split(" ").pop().localeCompare(b.hoTen.split(" ").pop(), "vi"));
      let lanDau = true;
      huyTheoDoi = fbDb.collection("baiNop").where("deGiaoId", "==", id).onSnapshot(snap => {
        const vung = document.getElementById("vung-td"); if (!vung) return;
        const bai = Object.fromEntries(snap.docs.map(x => [x.data().uid, x.data()])), bg = Date.now();
        let moi = false;
        hs.forEach(u => { const n = bai[u.uid]?.roi?.length || 0; if (!lanDau && n > (daThay[u.uid] || 0)) { moi = true; u.moi = bg; } daThay[u.uid] = n; });
        if (moi && !huyCanhBaoGV.length) tiengBao();   // cảnh báo toàn cục đã kêu rồi thì màn này chỉ tô đỏ
        lanDau = false;
        const dem = { lam: 0, nop: 0, vp: 0 };
        const dong = hs.map(u => {
          const b = bai[u.uid], n = b?.roi?.length || 0, cuoi = b?.roi?.[n - 1];
          if (b?.daNop) dem.nop++; else if (b) dem.lam++; if (n) dem.vp++;
          const ketNoi = b && !b.daNop ? (bg - (b.capNhat || 0) < 45000 ? "🟢" : "⚪ mất kết nối") : "";
          return `<div class="the-trang dong-td ${n ? "co-vp" : ""} ${u.moi && bg - u.moi < 15000 ? "vp-moi" : ""}">${anhDaiDien(u, 40)}
            <div class="giua"><b>${hoa(u.hoTen)}</b> <small class="ghi-chu">${hoa(u.maHS || "")}</small>
              <small>${!b ? "Chưa vào bài" : b.daNop ? `✅ Đã nộp · ${diemVN(chamBai(b).diem)} điểm` : `✍️ Đang làm ${b.chon.filter(x => x !== null).length}/${b.cau.length} câu ${ketNoi}`}</small>
              ${b && !b.daNop && b.dangRoi ? `<small class="vp">🚨 Đang ở ngoài app từ ${gioVN(b.dangRoi.luc).split(" ")[0]}</small>` : ""}
              ${n ? `<small class="vp">⚠️ ${n} lần vi phạm · gần nhất: ${moTaRoi(cuoi)}</small>` : ""}</div>
            ${b && !b.daNop ? `<button class="btn phu" onclick="thuBai('${id}','${u.uid}')">Thu bài</button>` : b?.daNop && (b.lyDo === "roi-app" || b.lyDo === "gv-thu") ? `<button class="btn phu" onclick="moKhoaBai('${id}','${u.uid}')">🔓 Mở khóa</button>` : ""}</div>`;
        }).join("");
        vung.innerHTML = `<div class="the-trang"><b>${hoa(d.ten)}</b> · Lớp ${hoa(d.lopTen || d.lop)}
          <p class="ghi-chu">Đóng đề: ${gioVN(d.dongLuc)} · Đang làm ${dem.lam} · Đã nộp ${dem.nop}/${hs.length} · Có vi phạm ${dem.vp}</p>
          <p class="ghi-chu">Để màn này mở trong giờ kiểm tra: em nào vi phạm, dòng đó đỏ lên và có tiếng "ting".</p>
          <button class="btn phu" onclick="tiengBao()">🔔 Thử / bật âm thanh</button></div>${dong}`;
      }, e => { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; });
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};
window.addEventListener("hashchange", () => { if (!location.hash.startsWith("#/theo-doi")) { huyTheoDoi?.(); huyTheoDoi = null; } });
// Bài bị khóa (tự nộp vì rời app) hoặc đã thu: GV cân nhắc mức độ vi phạm, nếu chưa nghiêm trọng thì mở khóa cho em làm tiếp / làm lại
async function moKhoaBai(idDe, uid) {
  try {
    const [sd, sb] = await Promise.all([fbDb.collection("deGiao").doc(idDe).get(), fbDb.collection("baiNop").doc(`${idDe}_${uid}`).get()]);
    const d = sd.data(), b = sb.data(); if (!d || !b) return alert("Không tìm thấy bài.");
    if (!b.daNop) return alert("Bài này chưa bị khóa.");
    if (Date.now() > d.dongLuc) return alert("Đề đã quá giờ đóng. Gia hạn giờ đóng trước (Bảng điểm → Giờ đóng bài) rồi mở khóa.");
    const vp = b.roi?.length || 0, nam = LY_DO_KHOA[b.lyDo] || "đã nộp";
    const k = prompt(`Mở khóa cho ${b.hoTen || "học sinh"}?\n(Bài ${nam}; em đã rời app ${vp} lần)\n\n1 = Làm tiếp: giữ các câu đã chọn, tính tiếp thời gian còn lại\n2 = Làm lại từ đầu: xóa bài đã làm, tính giờ mới\n\nSố lần rời app được tính lại từ 0; lịch sử vi phạm vẫn được lưu.`, "1");
    if (k !== "1" && k !== "2") return;
    const xoa = firebase.firestore.FieldValue.delete(), lamLai = k === "2", bg = Date.now();
    const cap = { daNop: false, lyDo: xoa, nopLuc: xoa, diemChot: xoa, dung: xoa, dangRoi: null, roi: [], roiCu: [...(b.roiCu || []), ...(b.roi || [])], phien: xoa, capNhat: 0,
      lanNop: Math.max(0, (b.lanNop || 1) - 1), moKhoa: [...(b.moKhoa || []), { luc: bg, kieu: lamLai ? "lam-lai" : "lam-tiep", boi: tk.user.uid }],
      batDau: lamLai ? bg : Math.max(0, bg - ((b.nopLuc || bg) - (b.batDau || bg))) };
    if (lamLai) cap.chon = (b.cau || []).map(() => null);
    await fbDb.collection("baiNop").doc(`${idDe}_${uid}`).update(cap);
    ghiNhatKy("mo-khoa-bai", lamLai ? "làm lại từ đầu" : "làm tiếp", `${b.hoTen || uid} · ${d.ten}`);
    alert(`Đã mở khóa. ${b.hoTen || "Em"} vào mục Bài được giao để ${lamLai ? "làm lại" : "làm tiếp"}.`); if (location.hash.startsWith("#/bang-diem")) hienManHinh();
  } catch (e) { alert(loiTk(e)); }
}
const LY_DO_KHOA = { "roi-app": "bị khóa vì rời app đủ số lần", "gv-thu": "do giáo viên thu", "het-gio": "hết giờ" };
async function thuBai(idDe, uid) {
  if (!confirm("Thu bài của học sinh này ngay? Bài được chấm theo những câu em đã làm.")) return;
  try { await fbDb.collection("baiNop").doc(`${idDe}_${uid}`).update({ daNop: true, nopLuc: Date.now(), lyDo: "gv-thu" }); ghiNhatKy("thu-bai", "", `${idDe}_${uid}`); }
  catch (e) { alert(loiTk(e)); }
}

/* ---------- Chống gian lận khi đang làm bài được giao ---------- */
function vaoToanManHinh() { try { document.documentElement.requestFullscreen?.({ navigationUI: "hide" }).catch(() => {}); } catch {} }
function thoatDangThi() {
  document.body.classList.remove("dang-thi"); document.getElementById("hinh-mo")?.remove(); document.getElementById("canh-bao-roi")?.remove();
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
}
function batDangThi() {
  if (document.body.classList.contains("dang-thi")) return;
  document.body.classList.add("dang-thi"); setTimeout(ghiNenVP, 1500);   // mốc kích thước để nhận ra chia màn hình
  const chu = `${tk.hoSo?.hoTen || ""} · ${tk.hoSo?.maHS || tk.user?.email || ""}`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='260' height='150'><text x='10' y='90' transform='rotate(-25 130 75)' font-family='sans-serif' font-size='15' fill='rgba(120,120,140,0.16)'>${hoa(chu)}</text></svg>`;
  const mo = document.createElement("div"); mo.id = "hinh-mo";
  mo.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  document.body.append(mo);
}
let roiLuc = 0, roiLoai = "";
const LOAI_ROI = { "chia-man-hinh": "Chia màn hình / dùng nhiều ứng dụng cùng lúc", "roi-app": "Rời app / về màn hình chính / khóa máy", "mat-tieu-diem": "Bấm ra ngoài (chia màn hình, thông báo, bong bóng chat)",
  "toan-man-hinh": "Thoát toàn màn hình", "mo-lai": "Tắt app rồi mở lại" };
const moTaRoi = r => `${gioVN(r.luc).split(" ")[0]} · ${LOAI_ROI[r.loai] || "Rời bài làm"} · ${r.giay} giây`;
let hen_roi = 0;
function batDauRoi(loai = "mat-tieu-diem", luc = Date.now()) {
  if (!giamSat()) return;
  if (!roiLuc) {
    roiLuc = luc; roiLoai = loai;
    // báo ngay lên máy chủ để giáo viên thấy tức thời (không đợi em quay lại)
    clearTimeout(hen_roi);
    hen_roi = setTimeout(() => { try { if (roiLuc && fbDb && tk.user && baiLam?.giao?.id) refBai(baiLam.giao.id).update({ dangRoi: { luc: roiLuc, loai: roiLoai } }).catch(() => {}); } catch {} }, 1200);
  } else if (loai === "roi-app" && roiLoai === "mat-tieu-diem") roiLoai = loai;
}
function ketThucRoi() {
  clearTimeout(hen_roi);
  if (!roiLuc || !giamSat()) { roiLuc = 0; return; }
  const giay = Math.round((Date.now() - roiLuc) / 1000); roiLuc = 0;
  if (giay < 1) return;
  const g = baiLam.giao; g.roi.push({ luc: Date.now(), giay, loai: roiLoai }); luuBaiLam();
  if (g.roi.length >= Math.max(1, g.soLanRoi)) {   // rời đủ số lần (mặc định 3) mới khóa; các lần trước chỉ cảnh báo
    g.lyDo = "roi-app"; baiLam.ketThuc = Date.now(); luuBaiLam(); thoatDangThi();
    location.hash = "#/ket-qua";
    setTimeout(() => alert(`Em đã rời bài làm ${g.roi.length} lần. Bài bị khóa và tự động nộp. Nếu có lí do chính đáng, em trao đổi với giáo viên.`), 50); return;
  }
  dongBoBai(); canhBaoRoi(g.roi.length, g.soLanRoi, giay);
}
function canhBaoRoi(lan, toiDa, giay) {
  document.getElementById("canh-bao-roi")?.remove();
  const o = document.createElement("div"); o.id = "canh-bao-roi";
  o.innerHTML = `<div><b>⚠️ Em đã rời bài làm</b><p>Lần ${lan}/${toiDa} · ${giay} giây.<br>Giáo viên đã được báo ngay. Rời đủ ${toiDa} lần bài sẽ bị khóa và tự nộp (còn ${Math.max(0, toiDa - lan)} lần).</p>
    <button class="btn full" onclick="this.closest('#canh-bao-roi').remove();vaoToanManHinh()">Tiếp tục làm bài</button></div>`;
  o.addEventListener("click", e => { if (e.target === o) o.remove(); });
  document.body.append(o);
}
document.addEventListener("visibilitychange", () => document.hidden ? batDauRoi("roi-app") : ketThucRoi());
/* Chỉ tính vi phạm khi THẬT SỰ rời bài: thoát app (ẩn trang), chia màn hình / nhiều cửa sổ, hoặc mất tiêu điểm kéo dài.
   Cuộc gọi đến, thông báo, kéo thanh trạng thái, bàn phím… làm app mất tiêu điểm chốc lát nhưng em vẫn ở trong bài → KHÔNG báo. */
const NGUONG_MAT_TIEU_DIEM = 15000;   // ms: mất tiêu điểm liên tục quá ngưỡng này (khi app vẫn hiện) mới coi là đang dùng cửa sổ khác
let henBlur = 0, nenVP = null;
window.addEventListener("blur", () => { clearTimeout(henBlur); const luc = Date.now(); henBlur = setTimeout(() => { if (!document.hidden && !document.hasFocus()) batDauRoi("mat-tieu-diem", luc); }, NGUONG_MAT_TIEU_DIEM); });
window.addEventListener("focus", () => { clearTimeout(henBlur); if (!document.hidden) ketThucRoi(); });
const ghiNenVP = () => { nenVP = { w: innerWidth, h: innerHeight }; };
window.addEventListener("orientationchange", () => setTimeout(ghiNenVP, 600));
window.addEventListener("resize", () => {   // chia màn hình: vùng hiển thị của app co lại (không có ô nhập liệu nào đang mở bàn phím)
  if (!giamSat()) return;
  if (!nenVP || (innerWidth > innerHeight) !== (nenVP.w > nenVP.h)) return ghiNenVP();   // xoay ngang / dọc: lấy lại mốc
  const nho = innerHeight < nenVP.h * 0.72 || innerWidth < nenVP.w * 0.72, nhap = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || "");
  if (nho && !nhap) batDauRoi("chia-man-hinh"); else if (!nho && roiLoai === "chia-man-hinh" && roiLuc) ketThucRoi();
});
document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && giamSat() && location.hash.startsWith("#/lam-bai")) { batDauRoi("toan-man-hinh"); setTimeout(ketThucRoi, 300); } });
["copy", "cut", "contextmenu", "selectstart"].forEach(ev => document.addEventListener(ev, e => { if (document.body.classList.contains("dang-thi")) e.preventDefault(); }));

// Điều hướng: đang làm bài được giao thì chỉ ở màn làm bài; nộp xong thì gửi lên máy chủ
function kiemTraGiao() {
  const duong = location.hash.slice(1).split("?")[0] || "/";
  if (giamSat()) {
    if (duong !== "/lam-bai" && duong !== "/doi-mat-khau") { location.hash = "#/lam-bai"; return; }
    batDangThi();
  } else if (dangGiao()) {
    thoatDangThi();   // bài tập không giám sát: được thoát ra xem lí thuyết, quay lại làm tiếp
  } else {
    thoatDangThi();
    if (baiLam?.giao?.id && baiLam.ketThuc && !baiLam.giao.daGui && tk.user) guiBaiGiao();
  }
}
window.addEventListener("hashchange", kiemTraGiao);
// Mở lại app giữa chừng bài được giao: tính là một lần rời app
if (giamSat()) { roiLuc = Date.now() - 1000; roiLoai = "mo-lai"; }

/* ---------- Phân quyền xem: học sinh và khách chỉ xem lí thuyết (+ tra cứu bảng) và bài được giao ----------
   Ngân hàng câu hỏi, bài tập, luyện tập, tạo đề chỉ dành cho giáo viên / QTV. */
const LA_MUC_GV = d => /^\/(bai-tap|luyen-tap|kho|tao-de|chon-cau|chon-dang|ngan-hang-de|de|giao-de|da-giao|bang-diem|theo-doi|nhap-lop)(\/|$)/.test(d) || ((d === "/lam-bai" || d === "/ket-qua") && !baiLam?.giao);
// Các mục cần kho câu hỏi đã mở khóa trên máy này
const CAN_KHO = d => /^\/(bai-tap|luyen-tap|kho|tao-de|chon-cau|chon-dang|ngan-hang-de|de|giao-de)(\/|$)/.test(d) || ((d === "/lam-bai" || d === "/ket-qua") && !baiLam?.giao);
const duocVao = d => (!LA_MUC_GV(d) || laGVtk()) && (!CAN_KHO(d) || KHO_KHOA.mo);
Object.keys(MAN_HINH).forEach(d => {
  if (!LA_MUC_GV(d) && d !== "/lam-bai" && d !== "/ket-qua") return;
  const m = MAN_HINH[d], veGoc = m.ve, sauGoc = m.sauKhiVe;
  m.ve = () => (tk.dangTai || (fbAuth && !tk.san)) ? `<div class="trong">Đang kiểm tra đăng nhập…</div>` : duocVao(d) ? veGoc() : LA_MUC_GV(d) && !laGVtk() ? `<div class="trong">🔒 Mục này dành cho giáo viên.<br>Học sinh xem Lí thuyết và làm bài được giao.<br><br>
    <a class="btn" href="#/ly-thuyet">Xem lí thuyết</a> ${tk.user ? "" : `<a class="btn phu" href="#/tai-khoan">Đăng nhập</a>`}</div>` : oMoKho();
  if (sauGoc) m.sauKhiVe = () => { if (duocVao(d)) return sauGoc(); };
  if (m.lamBai) Object.defineProperty(m, "lamBai", { get: () => duocVao(d) });
  if (m.khoChuong) { const kc = m.khoChuong; Object.defineProperty(m, "khoChuong", { get: () => duocVao(d) ? kc : null }); }
});
MAN_HINH["/kho-cau-hoi"] = { tieuDe: "Kho câu hỏi", manHinhCon: true, ve: () => !laGVtk() ? `<div class="trong">Chỉ giáo viên mới mở được kho.</div>` : !KHO_KHOA.mo ? oMoKho() : `
  <div class="the-trang"><b>🔓 Kho đã mở trên máy này</b><p class="ghi-chu">${NGAN_HANG.length} câu trắc nghiệm · ${CHUONG.reduce((t, c) => t + c.baiTap.length, 0)} bài tự luận</p></div>
  <a class="the-luyen" href="#/kho"><span class="o-icon">📚</span><span class="text"><b>Ngân hàng câu hỏi</b><small>Xem theo chương, lọc mức độ, dạng; xem đáp án và lời giải</small></span><span class="chevron">›</span></a>
  <a class="the-luyen the-kho" href="#/tao-de"><span class="o-icon">📝</span><span class="text"><b>Tạo đề kiểm tra</b><small>Chọn câu, tạo mã đề, in, giao cho lớp</small></span><span class="chevron">›</span></a>
  <a class="the-luyen the-kho" href="#/ngan-hang-de"><span class="o-icon">🗂️</span><span class="text"><b>Ngân hàng đề thi</b><small>Đề đã soạn theo chủ đề, dùng lại cho các lần sau</small></span><span class="chevron">›</span></a>
  <a class="the-luyen the-kho" href="#/bai-tap"><span class="o-icon">✏️</span><span class="text"><b>Bài tập và luyện tập</b><small>Bài tự luận theo chương, luyện trắc nghiệm</small></span><span class="chevron">›</span></a>
  <button class="btn full phu" onclick="khoaKhoTrenMay()">🔒 Khóa kho trên máy này (khi dùng máy chung)</button>` };
// Thẻ "Lớp học" to, nằm giữa trang chủ của giáo viên (số liệu lấy từ bản tính gần nhất, nếu có)
function theLopHocTrangChu() {
  const kq = typeof docKQ === "function" ? docKQ() : null, ds = kq && kq.uid === tk.user?.uid ? kq.ds : null;
  const sv = ds ? ds.reduce((t, k) => t + k.siSo, 0) : 0, tb = ds ? ds.filter(k => k.tb != null) : [];
  const dong = ds ? `${ds.length} lớp · ${sv} sinh viên${tb.length ? " · TB " + diemVN(Math.round(tb.reduce((t, k) => t + k.tb, 0) / tb.length * 100) / 100) : ""}` : "Thêm sinh viên · giao bài · xem kết quả từng lớp";
  return `<a href="#/lop-hoc" class="tc-lop"><img class="bieu-tuong" src="anh/3d/lop-hoc.webp" alt=""><span class="text"><small>Quản lý</small><b>Lớp học</b><em>${dong}</em></span><span class="mui">›</span></a>`;
}
// Trang chủ theo vai trò: GV có thẻ Lớp học ở đầu và các ô soạn đề; HS có Bài được giao
function theDauTrangChu() { return laGVtk() ? theLopHocTrangChu() : ""; }
const oTrangChuKhach = oTrangChu;
oTrangChu = () => laGVtk() ? [["#/tao-de", "tao-de", "Tạo đề", "Soạn & in đề"], [KHO_KHOA.mo ? "#/kho" : "#/kho-cau-hoi", "luu", "Ngân hàng", "Câu hỏi"],
    ["#/ngan-hang-de", "luyen-tap", "Đề đã soạn", "Dùng lại"], ["#/ly-thuyet", "ly-thuyet", "Lí thuyết", "15 chương"],
    ["#/tra-cuu", "tra-cuu", "Tra cứu", "Bảng hằng số"], ["#/cong-cu", "may-tinh", "Máy tính", "Tính nhanh"]]
  : tk.user ? [["#/bai-duoc-giao", "luyen-tap", "Bài được giao", "Làm bài"], ["#/ly-thuyet", "ly-thuyet", "Lí thuyết", "15 chương"],
    ["#/tra-cuu", "tra-cuu", "Tra cứu", "Bảng hằng số"], ["#/cong-cu", "may-tinh", "Máy tính", "Tính nhanh"],
    ["#/gop-y", "gop-y", "Góp ý", "Ý tưởng mới"], ["#/tai-khoan", "tai-khoan", "Tài khoản", "Hồ sơ"]]
  : oTrangChuKhach();
const capNhatQuyen = () => document.body.classList.toggle("la-gv", laGVtk());
if (fbAuth) { fbAuth.onAuthStateChanged(() => { capNhatQuyen(); hienManHinh(); }); window.addEventListener("tk-san", () => { capNhatQuyen(); hienManHinh(); }); }   // tk-san: hồ sơ đã tải xong → vẽ lại đúng theo vai trò
capNhatQuyen();


/* ---------- Góp ý cho app: mọi người dùng gửi ý tưởng để hoàn thiện app ----------
   Gửi lên Firestore (collection baoLoi, loai "gop-y": người đã đăng nhập tạo được, GV / QTV đọc được);
   khách hoặc khi lỗi mạng thì chia sẻ qua Zalo / Messenger / email. */
const KIEU_GOP_Y = [["y-tuong", "💡 Ý tưởng mới"], ["loi", "🐞 Gặp lỗi"], ["giao-dien", "🎨 Giao diện khó dùng"], ["khac", "💬 Khác"]];
MAN_HINH["/gop-y"] = {
  tieuDe: "Góp ý cho app",
  manHinhCon: true,
  ve: () => `<p class="ghi-chu">Bạn thấy app cần thêm gì, sửa gì cho dễ dùng hơn? Mọi ý kiến đều được đọc và cân nhắc để hoàn thiện app.</p>
    <div class="the-trang form-tk">
      <div class="chon-loi gop-y-kieu">${KIEU_GOP_Y.map(([v, t], k) => `<label><input type="radio" name="gy-kieu" value="${v}" ${k ? "" : "checked"}><span>${t}</span></label>`).join("")}</div>
      <label>Nội dung góp ý<textarea id="gy-nd" rows="6" maxlength="1500" placeholder="Ví dụ: Em muốn có thêm… / Phần … khó dùng vì… / Khi bấm … thì bị lỗi…"></textarea></label>
      <label>Tên hoặc cách liên hệ (không bắt buộc)<input id="gy-ten" maxlength="100" value="${hoa(tk.hoSo?.hoTen || "")}" autocomplete="off"></label>
      <p class="loi-tk" id="gy-loi"></p>
      <button class="btn full" onclick="guiGopY()">📨 Gửi góp ý</button>
      <p class="ghi-chu">${tk.user ? "Góp ý được gửi thẳng cho người phát triển." : "Bạn chưa đăng nhập nên góp ý sẽ được gửi qua Zalo, Messenger hoặc email bằng menu chia sẻ."} Hoặc liên hệ trực tiếp <a href="tel:0912995778">0912 995 778</a>.</p></div>
    <div id="vung-gy"></div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-gy"); if (!v || !laGVtk()) return;
    try {
      const ds = (await fbDb.collection("baoLoi").where("loai", "==", "gop-y").get()).docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => b.luc - a.luc).slice(0, 60);
      v.innerHTML = `<h2>Góp ý đã nhận (${ds.length})</h2>` + (ds.map(g => `<div class="the-trang gop-y-the"><small class="ghi-chu">${(KIEU_GOP_Y.find(k => k[0] === g.kieu) || KIEU_GOP_Y[3])[1]} · ${hoa(g.ten || "ẩn danh")}${g.vaiTro ? " (" + hoa(g.vaiTro) + ")" : ""} · ${gioVN(g.luc)}</small><p>${hoa(g.noiDung)}</p></div>`).join("") || `<div class="trong">Chưa có góp ý nào.</div>`);
    } catch (e) { v.innerHTML = ""; }
  },
};
async function guiGopY() {
  const nd = (document.getElementById("gy-nd")?.value || "").trim(), ten = (document.getElementById("gy-ten")?.value || "").trim(), loi = document.getElementById("gy-loi");
  const kieu = document.querySelector('input[name="gy-kieu"]:checked')?.value || "khac";
  if (nd.length < 10) { loi.textContent = "Hãy viết rõ hơn một chút (ít nhất 10 kí tự)."; return; }
  loi.textContent = "Đang gửi…";
  if (tk.user && fbDb) {
    try {
      await fbDb.collection("baoLoi").add({ loai: "gop-y", kieu, noiDung: nd, ten, uid: tk.user.uid, vaiTro: tk.hoSo?.vaiTro || "", banApp: BAN_APP, luc: Date.now() });
      document.getElementById("gy-nd").value = ""; loi.textContent = ""; return alert("Cảm ơn bạn! Góp ý đã được gửi tới người phát triển.");
    } catch (e) { console.warn("góp ý", e); }
  }
  const text = `GÓP Ý APP HÓA PHÂN TÍCH (${BAN_APP})\n${(KIEU_GOP_Y.find(k => k[0] === kieu) || [])[1] || ""}\n\n${nd}${ten ? "\n\nTừ: " + ten : ""}`;
  loi.textContent = "";
  try { if (navigator.share) return await navigator.share({ title: "Góp ý Hóa phân tích", text }); } catch (e) { if (e.name === "AbortError") return; }
  try { await navigator.clipboard.writeText(text); alert("Đã chép nội dung góp ý. Dán vào Zalo/Messenger rồi gửi cho Phạm Ngọc (0912 995 778)."); }
  catch { prompt("Chép nội dung dưới đây để gửi:", text); }
}

/* ---------- Lối vào: thẻ trong Tài khoản, huy hiệu ở trang chủ ---------- */
const veTkGoc = MAN_HINH["/tai-khoan"].ve;
MAN_HINH["/tai-khoan"].ve = () => {
  let h = veTkGoc();
  const the = (href, icon, ten, mo) => `<a class="the-luyen" href="${href}"><span class="o-icon">${icon}</span><span class="text"><b>${ten}</b><small>${mo}</small></span><span class="chevron">›</span></a>`;
  if (laHStk()) h = h.replace(`<a class="the-luyen the-kho" href="#/doi-mat-khau">`, the("#/bai-duoc-giao", "📝", "Bài được giao", "Bài kiểm tra giáo viên giao cho lớp") + `<a class="the-luyen the-kho" href="#/doi-mat-khau">`);
  if (laGVtk()) h = h.replace(`<a class="the-luyen the-kho" href="#/doi-mat-khau">`, the("#/da-giao", "📤", "Bài đã giao và bảng điểm", "Theo dõi học sinh làm bài, tải bảng điểm")
    + (KHO_KHOA.mo ? the("#/kho", "📚", "Ngân hàng câu hỏi", `${NGAN_HANG.length} câu theo 15 chương · xem đề, đáp án, lời giải`) + the("#/ngan-hang-de", "🗂️", "Ngân hàng đề thi", "Đề đã soạn theo chủ đề, dùng lại cho các lần sau")
      : the("#/kho-cau-hoi", "🔐", "Mở kho câu hỏi", "Nhập mật khẩu kho để xem ngân hàng câu hỏi, tạo đề, bài tập"))
    + `<a class="the-luyen the-kho" href="#/doi-mat-khau">`);
  if (laQtvTk() && Date.now() - luuLanSaoLuu() > 7 * 864e5) h = `<a class="the-trang canh-bao-cu" href="#/quan-tri" style="display:block;text-decoration:none;color:inherit">💾 ${luuLanSaoLuu() ? "Đã hơn 7 ngày chưa sao lưu dữ liệu." : "Bạn chưa sao lưu dữ liệu lần nào."} Bấm để vào Quản trị → Cài đặt → Sao lưu.</a>` + h;
  h += the("#/gop-y", "💡", "Góp ý cho app", "Ý tưởng, chỗ khó dùng, lỗi gặp phải — để app ngày càng hoàn thiện");
  return h + `<p class="ghi-chu" style="text-align:center">Phiên bản app: ${BAN_APP}${tk.hoSo ? ` · vai trò: ${VAI_TRO[tk.hoSo.vaiTro] || "?"}` : ""}${laGVtk() ? ` · kho: ${KHO_KHOA.mo ? "đã mở" : "khóa"}` : ""}</p>`
    + khungNhaPhatTrien();
};
async function ganHuyHieuTrangChu() {
  const canh = document.querySelector(".tc-canh"); if (!canh || !tk.user) return;
  let html = "";
  if (laHStk()) {
    try {
      const bg = Date.now(), ds = await taiBaiGiaoHS();
      const n = ds.filter(d => bg >= d.moLuc && bg <= d.dongLuc && !d.bai?.daNop).length;
      html = `<a class="huy-hieu-tc" href="#/bai-duoc-giao"><img src="anh/3d/luyen-tap.webp" alt="">${n ? `<b>${n}</b> bài đang mở` : "Bài được giao"}</a>`;
    } catch { return; }
  } else if (laGVtk()) {
    const kq = typeof docKQ === "function" ? docKQ() : null, ok = kq && kq.uid === tk.user.uid;
    const tomTat = ok ? kq.ds.filter(k => k.tb != null).slice(0, 2).map(k => `${hoa(k.ten)}: TB ${diemVN(k.tb)}${k.nopRate != null ? " · nộp " + k.nopRate + "%" : ""}`).join(" | ") : "";
    html = `<a class="huy-hieu-tc" href="#/da-giao"><img src="anh/3d/chia-se.webp" alt="">Bài đã giao</a>`;
    if ((!ok || Date.now() - kq.luc > 900000) && typeof taiKetQuaTatCa === "function" && !ganHuyHieuTrangChu.dangTai) {   // làm mới ngầm rồi vẽ lại
      ganHuyHieuTrangChu.dangTai = true;
      taiKetQuaTatCa().then(() => ganHuyHieuTrangChu()).catch(() => {}).finally(() => { setTimeout(() => (ganHuyHieuTrangChu.dangTai = false), 60000); });
    }
  }
  canh.innerHTML = html;
}
window.addEventListener("hashchange", () => { if ((location.hash || "#/") === "#/" || location.hash === "") ganHuyHieuTrangChu(); });
if (fbAuth) window.addEventListener("tk-san", () => { ganHuyHieuTrangChu(); kiemTraGiao(); });
kiemTraGiao();
if (["/giao-de", "/da-giao", "/bang-diem", "/bai-duoc-giao"].includes(location.hash.slice(1).split("?")[0])) hienManHinh();
