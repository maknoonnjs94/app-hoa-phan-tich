/* =========================================================
   TÀI KHOẢN (Firebase, gói Spark miễn phí)
   - Đăng nhập email + mật khẩu; tài khoản do Quản trị viên (QTV) cấp.
   - Học sinh: email HS, mật khẩu đầu = mã HS, bắt đổi ở lần đăng nhập đầu.
   - Vai trò lưu ở Firestore: nguoiDung/{uid} = { hoTen, email, vaiTro: qtv|gv|hs, maHS, lop, doiMatKhau, khoa }
   - lop/{id} = { ten, gv: [uid] }
   Lí thuyết, bài tập, tạo đề vẫn dùng được khi chưa đăng nhập.
   ========================================================= */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCgICCzlYJinA9oqgeJ998IBGdVYkgVpPM",
  authDomain: "hoa-phan-tich.firebaseapp.com",
  projectId: "hoa-phan-tich",
  storageBucket: "hoa-phan-tich.firebasestorage.app",
  messagingSenderId: "692193685011",
  appId: "1:692193685011:web:b9bb2ae25fdaaf59a859e6",
};
const VAI_TRO = { qtv: "Quản trị viên", gv: "Giáo viên", hs: "Học sinh" };

let fbApp = null, fbAuth = null, fbDb = null;
const tk = { san: false, user: null, hoSo: null };   // san = đã biết trạng thái đăng nhập
try {
  fbApp = firebase.initializeApp(FIREBASE_CONFIG);
  fbAuth = firebase.auth(); fbDb = firebase.firestore();
  fbAuth.languageCode = "vi";
} catch (e) { console.warn("Không khởi tạo được Firebase", e); }

const loiTk = e => ({
  "auth/invalid-credential": "Sai email hoặc mật khẩu.",
  "auth/wrong-password": "Sai email hoặc mật khẩu.",
  "auth/user-not-found": "Sai email hoặc mật khẩu.",
  "auth/invalid-email": "Email không hợp lệ.",
  "auth/too-many-requests": "Thử sai quá nhiều lần. Đợi vài phút rồi thử lại.",
  "auth/network-request-failed": "Không có mạng. Kiểm tra kết nối rồi thử lại.",
  "auth/email-already-in-use": "Email này đã có tài khoản.",
  "auth/weak-password": "Mật khẩu phải từ 6 kí tự.",
  "auth/requires-recent-login": "Hãy đăng xuất, đăng nhập lại rồi đổi mật khẩu.",
  "auth/configuration-not-found": "Máy chủ chưa bật đăng nhập bằng email (Firebase → Authentication).",
  "permission-denied": "Không có quyền thực hiện việc này.",
}[e && e.code] || (e && e.message) || "Có lỗi xảy ra.");
const hoa = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

/* ---------- Cài đặt chung (lưu Firestore cauHinh/chung, ai cũng đọc được): tên miền email, mật khẩu khởi tạo ----------
   Sinh viên đăng nhập bằng mã SV → app ghép thành <mã>@<tên miền>. Tên trường không nằm trong mã nguồn. */
let cauHinhTk = null;
async function layCauHinhTk(moi) {
  if (!cauHinhTk || moi || (tk.user && !cauHinhTk.daDocRieng)) {
    try { const s = await fbDb.collection("cauHinh").doc("chung").get(); cauHinhTk = s.exists ? s.data() : {}; } catch { cauHinhTk = cauHinhTk || {}; }
    // Mật khẩu khởi tạo để riêng, chỉ người đã đăng nhập đọc được
    if (tk.user) try { const r = await fbDb.collection("cauHinh").doc("rieng").get(); if (r.exists) Object.assign(cauHinhTk, r.data()); cauHinhTk.daDocRieng = true; } catch {}
  }
  return { tenMien: "", matKhauDau: "123456", ...cauHinhTk };
}
const ghepEmail = (ma, tenMien) => { ma = String(ma || "").trim(); return ma.includes("@") || !tenMien ? ma.toLowerCase() : `${ma}@${tenMien}`.toLowerCase(); };

/* ---------- Theo dõi đăng nhập ---------- */
async function taiHoSo(user) {
  const ref = fbDb.collection("nguoiDung").doc(user.uid);
  let snap = await ref.get();
  if (!snap.exists) {
    // Quản trị viên đầu tiên: luật Firestore chỉ cho đúng UID đã khai báo tự tạo hồ sơ QTV
    try { await ref.set({ hoTen: "Quản trị viên", email: user.email, vaiTro: "qtv", doiMatKhau: false, khoa: false, taoLuc: Date.now() }); snap = await ref.get(); }
    catch (e) { if (e.code !== "permission-denied") throw e; return null; }
  }
  return snap.data();
}
if (fbAuth) fbAuth.onAuthStateChanged(async user => {
  tk.user = user; tk.hoSo = null; tk.loi = "";
  if (user) { try { tk.hoSo = await taiHoSo(user); } catch (e) { console.warn(e); tk.loi = `${e.code || ""} ${e.message || ""}`.trim(); } }
  tk.san = true;
  capNhatNutTk();
  if (tk.hoSo?.khoa) { alert("Tài khoản đã bị khóa. Liên hệ quản trị viên."); fbAuth.signOut(); return; }
  if (canDoiMk()) location.hash = "#/doi-mat-khau";
  else if (["/tai-khoan", "/quan-tri"].includes(location.hash.slice(1).split("?")[0]) || location.hash === "#/doi-mat-khau") hienManHinh();
});
const canDoiMk = () => tk.user && tk.hoSo?.doiMatKhau;
// Chưa đổi mật khẩu lần đầu thì không cho đi màn khác
window.addEventListener("hashchange", () => { if (canDoiMk() && location.hash !== "#/doi-mat-khau") location.hash = "#/doi-mat-khau"; });

/* ---------- Ảnh đại diện: ảnh chụp (thu nhỏ, lưu thẳng trong hồ sơ) hoặc biểu tượng + màu ----------
   anhDaiDien = "data:image/jpeg;base64,…"  |  "bt:🧪|#14b8a6"  |  không có → chữ cái đầu tên */
const BIEU_TUONG = ["🧪", "⚗️", "🔬", "🧫", "🧬", "⚛️", "💧", "🔥", "🌈", "📊", "⚖️", "🔋", "💡", "🌿", "🦉", "🐱", "🐶", "🦊", "🐼", "🤖", "👩‍🔬", "👨‍🔬", "🎓", "⭐"];
const MAU_NEN = ["#14b8a6", "#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#ef4444", "#22c55e", "#0f172a"];
function anhDaiDien(h, co = 32) {
  const a = h?.anhDaiDien || "", st = `width:${co}px;height:${co}px;font-size:${Math.round(co * .5)}px`;
  if (a.startsWith("data:image/")) return `<img class="anh-dd" src="${a}" alt="" style="${st}">`;
  if (a.startsWith("bt:")) { const [bt, mau] = a.slice(3).split("|"); return `<span class="anh-dd" style="${st};background:${hoa(mau)}">${hoa(bt)}</span>`; }
  return `<span class="anh-dd" style="${st}">${hoa(((h?.hoTen || h?.email || "?").trim().split(/\s+/).pop() || "?")[0].toUpperCase())}</span>`;
}

/* ---------- Nút tài khoản trên thanh tiêu đề ---------- */
const nutTk = document.createElement("a");
nutTk.className = "icon-btn nut-tk"; nutTk.href = "#/tai-khoan"; nutTk.setAttribute("aria-label", "Tài khoản");
document.querySelector(".topbar").append(nutTk);
function capNhatNutTk() {
  const ten = tk.hoSo?.hoTen || tk.user?.email || "";
  nutTk.innerHTML = tk.user
    ? anhDaiDien(tk.hoSo || { hoTen: ten }, 32)
    : `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>`;
}
capNhatNutTk();

/* ---------- Màn Tài khoản: đăng nhập / thông tin ---------- */
MAN_HINH["/tai-khoan"] = {
  tieuDe: "Tài khoản",
  manHinhCon: true,
  ve: () => {
    if (!fbAuth) return `<div class="trong">Không kết nối được máy chủ tài khoản. Kiểm tra mạng rồi mở lại app.</div>`;
    if (!tk.san) return `<div class="trong">Đang kiểm tra đăng nhập…</div>`;
    if (!tk.user) return `
      <div class="the-trang form-tk">
        <h3>Đăng nhập</h3>
        <p class="ghi-chu">Sinh viên: gõ <b>mã sinh viên</b> (hoặc email đầy đủ). Mật khẩu lần đầu do thầy cô thông báo; đăng nhập xong app sẽ yêu cầu đổi mật khẩu.</p>
        <label>Mã sinh viên hoặc email<input id="tk-email" autocomplete="username" autocapitalize="off" spellcheck="false"></label>
        <label>Mật khẩu<input type="password" id="tk-mk" autocomplete="current-password"></label>
        <p class="loi-tk" id="tk-loi"></p>
        <button class="btn full" onclick="dangNhap()">Đăng nhập</button>
        <button class="btn full phu" onclick="quenMk()">Quên mật khẩu</button>
      </div>`;
    const h = tk.hoSo;
    if (!h) return `<div class="the-trang form-tk"><p>Tài khoản <b>${hoa(tk.user.email)}</b> chưa được cấp quyền trong app. Liên hệ quản trị viên.</p>
      ${tk.loi ? `<p class="loi-tk">Chi tiết lỗi: ${hoa(tk.loi)}</p>` : ""}
      <p class="ghi-chu">UID: ${hoa(tk.user.uid)}</p>
      <button class="btn full" onclick="thuLaiHoSo()">Thử lại</button>
      <button class="btn full phu" onclick="dangXuat()">Đăng xuất</button></div>`;
    return `
      <div class="the-trang the-tk">
        <a href="#/anh-dai-dien" class="doi-anh" aria-label="Đổi ảnh đại diện">${anhDaiDien(h, 56)}<span>✎</span></a>
        <div><b>${hoa(h.hoTen)}</b><small>${hoa(h.email)}</small>
          <small>${VAI_TRO[h.vaiTro] || ""}${h.maHS ? " · Mã HS " + hoa(h.maHS) : ""}${h.lop ? " · Lớp " + hoa(h.lop) : ""}</small></div>
      </div>
      ${h.vaiTro === "gv" ? `<a class="the-luyen" href="#/quan-tri"><span class="o-icon">👥</span><span class="text"><b>Quản lí sinh viên lớp tôi</b><small>Thêm, nhập danh sách, khóa, đặt lại mật khẩu cho SV lớp mình</small></span><span class="chevron">›</span></a>` : ""}
      ${h.vaiTro === "qtv" ? `<a class="the-luyen" href="#/quan-tri"><span class="o-icon">🛠️</span><span class="text"><b>Quản trị tài khoản</b><small>Thêm giáo viên, học sinh, lớp; khóa, đặt lại mật khẩu</small></span><span class="chevron">›</span></a>` : ""}
      <a class="the-luyen the-kho" href="#/doi-mat-khau"><span class="o-icon">🔑</span><span class="text"><b>Đổi mật khẩu</b><small>Nên đổi định kì</small></span><span class="chevron">›</span></a>
      <button class="btn full phu" onclick="dangXuat()">Đăng xuất</button>`;
  },
};
async function dangNhap() {
  const vao = document.getElementById("tk-email").value.trim(), mk = document.getElementById("tk-mk").value;
  const loi = document.getElementById("tk-loi");
  if (!vao || !mk) { loi.textContent = "Nhập mã sinh viên (hoặc email) và mật khẩu."; return; }
  loi.textContent = "Đang đăng nhập…";
  const email = ghepEmail(vao, (await layCauHinhTk()).tenMien);
  try { await fbAuth.signInWithEmailAndPassword(email, mk); }
  catch (e) { loi.textContent = loiTk(e); }
}
async function quenMk() {
  const vao = document.getElementById("tk-email").value.trim() || prompt("Nhập mã sinh viên hoặc email:");
  if (!vao) return;
  const email = ghepEmail(vao, (await layCauHinhTk()).tenMien);
  try { await fbAuth.sendPasswordResetEmail(email); alert("Nếu email có tài khoản, thư đặt lại mật khẩu đã được gửi. Kiểm tra cả mục Thư rác."); }
  catch (e) { alert(loiTk(e)); }
}
async function thuLaiHoSo() {
  tk.loi = "";
  try { tk.hoSo = await taiHoSo(tk.user); } catch (e) { tk.loi = `${e.code || ""} ${e.message || ""}`.trim(); }
  capNhatNutTk(); if (canDoiMk()) location.hash = "#/doi-mat-khau"; else hienManHinh();
}
function dangXuat() { fbAuth.signOut(); location.hash = "#/tai-khoan"; }

/* ---------- Đổi ảnh đại diện ---------- */
let anhTam = null;   // ảnh đang chọn, chưa lưu
MAN_HINH["/anh-dai-dien"] = {
  tieuDe: "Ảnh đại diện",
  manHinhCon: true,
  ve: () => {
    if (!tk.hoSo) return `<div class="trong">Hãy đăng nhập trước.</div>`;
    const xem = { ...tk.hoSo, anhDaiDien: anhTam ?? tk.hoSo.anhDaiDien };
    const bt = (xem.anhDaiDien || "").startsWith("bt:") ? xem.anhDaiDien.slice(3).split("|") : ["", MAU_NEN[0]];
    return `<div class="the-trang form-tk" style="align-items:center">
      ${anhDaiDien(xem, 96)}
      <div class="nut-hang"><label class="btn">📷 Chụp / chọn ảnh<input type="file" accept="image/*" hidden onchange="chonAnhDD(this.files[0])"></label>
        <button class="btn phu" onclick="anhTam='';hienManHinh()">Dùng chữ cái</button></div></div>
    <div class="the-trang"><b>Hoặc chọn biểu tượng</b>
      <div class="luoi-bt">${BIEU_TUONG.map(b => `<button class="${bt[0] === b ? "chon" : ""}" onclick="anhTam='bt:${b}|${bt[1]}';hienManHinh()">${b}</button>`).join("")}</div>
      <b>Màu nền</b>
      <div class="luoi-mau">${MAU_NEN.map(m => `<button style="background:${m}" class="${bt[1] === m ? "chon" : ""}" onclick="anhTam='bt:${bt[0] || BIEU_TUONG[0]}|${m}';hienManHinh()" aria-label="Màu"></button>`).join("")}</div></div>
    <p class="loi-tk" id="tk-loi"></p>
    <button class="btn full" onclick="luuAnhDD()" ${anhTam === null ? "disabled" : ""}>Lưu ảnh đại diện</button>`;
  },
};
// Cắt vuông giữa ảnh, thu nhỏ 160×160, nén JPEG (~10 KB)
function chonAnhDD(tep) {
  if (!tep) return;
  const img = new Image(), url = URL.createObjectURL(tep);
  img.onload = () => {
    const c = document.createElement("canvas"), n = 160, k = Math.min(img.width, img.height);
    c.width = c.height = n;
    c.getContext("2d").drawImage(img, (img.width - k) / 2, (img.height - k) / 2, k, k, 0, 0, n, n);
    anhTam = c.toDataURL("image/jpeg", .82); URL.revokeObjectURL(url); hienManHinh();
  };
  img.onerror = () => alert("Không đọc được ảnh này.");
  img.src = url;
}
async function luuAnhDD() {
  const loi = document.getElementById("tk-loi"); loi.textContent = "Đang lưu…";
  try {
    const gt = anhTam || firebase.firestore.FieldValue.delete();
    await fbDb.collection("nguoiDung").doc(tk.user.uid).update({ anhDaiDien: gt });
    if (anhTam) tk.hoSo.anhDaiDien = anhTam; else delete tk.hoSo.anhDaiDien;
    anhTam = null; capNhatNutTk(); location.hash = "#/tai-khoan";
  } catch (e) { loi.textContent = loiTk(e); }
}

/* ---------- Đổi mật khẩu (bắt buộc ở lần đầu) ---------- */
MAN_HINH["/doi-mat-khau"] = {
  tieuDe: "Đổi mật khẩu",
  manHinhCon: true,
  ve: () => !tk.user ? `<div class="trong">Hãy đăng nhập trước.</div>` : `
    <div class="the-trang form-tk">
      ${canDoiMk() ? `<p class="ghi-chu"><b>Lần đăng nhập đầu:</b> hãy đặt mật khẩu mới (từ 6 kí tự, khác mã học sinh) để tiếp tục.</p>` : ""}
      <label>Mật khẩu mới<input type="password" id="mk-moi" autocomplete="new-password"></label>
      <label>Nhập lại mật khẩu mới<input type="password" id="mk-lai" autocomplete="new-password"></label>
      <p class="loi-tk" id="tk-loi"></p>
      <button class="btn full" onclick="doiMk()">Lưu mật khẩu</button>
      ${canDoiMk() ? `<button class="btn full phu" onclick="dangXuat()">Đăng xuất</button>` : ""}
    </div>`,
};
async function doiMk() {
  const a = document.getElementById("mk-moi").value, b = document.getElementById("mk-lai").value, loi = document.getElementById("tk-loi");
  if (a.length < 6) { loi.textContent = "Mật khẩu phải từ 6 kí tự."; return; }
  if (a !== b) { loi.textContent = "Hai lần nhập không khớp."; return; }
  if (tk.hoSo?.maHS && a === tk.hoSo.maHS) { loi.textContent = "Mật khẩu mới phải khác mã sinh viên."; return; }
  if (a === (await layCauHinhTk()).matKhauDau) { loi.textContent = "Mật khẩu mới phải khác mật khẩu khởi tạo."; return; }
  loi.textContent = "Đang lưu…";
  try {
    await tk.user.updatePassword(a);
    if (tk.hoSo?.doiMatKhau) { await fbDb.collection("nguoiDung").doc(tk.user.uid).update({ doiMatKhau: false }); tk.hoSo.doiMatKhau = false; }
    alert("Đã đổi mật khẩu."); location.hash = "#/tai-khoan";
  } catch (e) { loi.textContent = loiTk(e); }
}

/* ---------- Quản trị (chỉ QTV) ---------- */
const qt = { tab: "nguoi", ds: null, lop: null, loc: "", locLop: "" };
// Giáo viên (không phải QTV) chỉ quản lí sinh viên các lớp mình dạy (hoSo.lopDay, do QTV gán)
const laQtvTk = () => tk.hoSo?.vaiTro === "qtv" && !tk.hoSo?.khoa;
const laGvThuong = () => tk.hoSo?.vaiTro === "gv" && !tk.hoSo?.khoa;
const lopDay = () => tk.hoSo?.lopDay || [];
MAN_HINH["/quan-tri"] = {
  tieuDe: "Quản trị",
  manHinhCon: true,
  ve: () => {
    if (!laQtvTk() && !laGvThuong()) return `<div class="trong">Chỉ quản trị viên, giáo viên mới vào được mục này.</div>`;
    if (laGvThuong() && !lopDay().length) return `<div class="trong">Thầy/cô chưa được gán lớp nào. Nhờ quản trị viên gán lớp (Quản trị → Lớp).</div>`;
    const TAB = laQtvTk() ? { nguoi: "Tài khoản", them: "Thêm 1 người", nhap: "Nhập danh sách", lop: "Lớp", caiDat: "Cài đặt" }
      : { nguoi: "Sinh viên", them: "Thêm 1 SV", nhap: "Nhập danh sách", caiDat: "Khóa chưa đổi MK" };
    if (!TAB[qt.tab]) qt.tab = "nguoi";
    return `<div class="chip-hang">${Object.entries(TAB).map(([k, v]) => `<button class="chip-nhanh ${qt.tab === k ? "chon" : ""}" onclick="qt.tab='${k}';hienManHinh()">${v}</button>`).join("")}</div>
      <div id="vung-qt"><div class="trong">Đang tải…</div></div>`;
  },
  sauKhiVe: () => veQuanTri(),
};
async function taiQt(ep) {
  qt.cfg = await layCauHinhTk(ep);
  if (ep || !qt.ds) qt.ds = (await fbDb.collection("nguoiDung").get()).docs.map(d => ({ uid: d.id, ...d.data() }));
  if (ep || !qt.lop) qt.lop = (await fbDb.collection("lop").get()).docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => a.ten.localeCompare(b.ten, "vi"));
  if (laGvThuong()) {   // giáo viên: chỉ thấy sinh viên và lớp của mình
    qt.ds = qt.ds.filter(u => u.vaiTro === "hs" && lopDay().includes(u.lop));
    qt.lop = qt.lop.filter(l => lopDay().includes(l.ten));
    if (qt.locLop && !lopDay().includes(qt.locLop)) qt.locLop = "";
  } else if (laQtvTk() && (ep || !qt.daDongBo)) { qt.daDongBo = true; dongBoLopDay().catch(() => {}); }
}
// QTV: ghi danh sách lớp dạy vào hồ sơ từng GV (luật Firestore dựa vào đây để cho GV quản lí SV lớp mình)
async function dongBoLopDay() {
  const lo = fbDb.batch(); let n = 0;
  qt.ds.filter(u => u.vaiTro === "gv").forEach(u => {
    const dung = qt.lop.filter(l => (l.gv || []).includes(u.uid)).map(l => l.ten).sort();
    if (JSON.stringify(dung) !== JSON.stringify([...(u.lopDay || [])].sort())) { lo.update(fbDb.collection("nguoiDung").doc(u.uid), { lopDay: dung }); u.lopDay = dung; n++; }
  });
  if (n) await lo.commit();
}
const chonLop = (id, rong) => `<select id="${id}">${rong ? `<option value="">${rong}</option>` : ""}${qt.lop.map(l => `<option ${qt.locLop === l.ten ? "selected" : ""}>${hoa(l.ten)}</option>`).join("")}</select>`;
async function veQuanTri() {
  const vung = document.getElementById("vung-qt"); if (!vung) return;
  try { await taiQt(); } catch (e) { vung.innerHTML = `<div class="trong">${loiTk(e)}</div>`; return; }
  if (qt.tab === "nguoi") {
    const tu = boDau(qt.loc);
    const ds = qt.ds.filter(u => (!qt.locLop || u.lop === qt.locLop) && (!tu || boDau(`${u.hoTen} ${u.email} ${u.maHS || ""}`).includes(tu)))
      .sort((a, b) => (a.vaiTro + a.hoTen).localeCompare(b.vaiTro + b.hoTen, "vi"));
    vung.innerHTML = `
      <div class="hang-loc"><input type="search" placeholder="Tìm tên, email, mã HS…" value="${hoa(qt.loc)}" oninput="qt.loc=this.value;clearTimeout(qt.t);qt.t=setTimeout(veQuanTri,300)">
        ${chonLop("loc-lop", "Mọi lớp").replace("<select", `<select onchange="qt.locLop=this.value;veQuanTri()"`)}</div>
      <p class="ghi-chu">${laGvThuong() ? `${ds.filter(u => u.vaiTro === "hs").length} sinh viên · lớp ${lopDay().map(hoa).join(", ")}` : `${ds.length} tài khoản`}</p>
      ${ds.map(u => `<div class="the-trang dong-tk co-anh ${u.khoa ? "da-khoa" : ""}">${anhDaiDien(u, 40)}
        <div><b>${hoa(u.hoTen)}</b> <span class="nhan-vt vt-${u.vaiTro}">${VAI_TRO[u.vaiTro]}</span>${u.khoa ? ' <span class="nhan-vt">Đã khóa</span>' : ""}
          <small>${hoa(u.email)}${u.maHS ? " · " + hoa(u.maHS) : ""}${u.lop ? " · " + hoa(u.lop) : ""}${u.doiMatKhau ? " · chưa đổi MK lần đầu" : ""}</small></div>
        ${u.uid === tk.user.uid ? "" : `<div class="nut-hang">
          <button class="btn phu" onclick="qtDatLaiMk('${u.uid}')">Gửi email đặt lại MK</button>
          <button class="btn phu" onclick="qtSuaNguoi('${u.uid}')">Sửa</button>
          <button class="btn phu" onclick="qtKhoa('${u.uid}')">${u.khoa ? "Mở khóa" : "Khóa"}</button></div>`}
      </div>`).join("") || `<div class="trong">Chưa có tài khoản nào.</div>`}`;
  } else if (qt.tab === "them") {
    vung.innerHTML = `<div class="the-trang form-tk">
      <label ${laQtvTk() ? "" : "hidden"}>Vai trò<select id="them-vt" onchange="document.getElementById('o-ma').hidden=this.value!=='hs'">
        <option value="hs">Sinh viên</option>${laQtvTk() ? `<option value="gv">Giáo viên</option><option value="qtv">Quản trị viên</option>` : ""}</select></label>
      <label>Họ và tên<input id="them-ten"></label>
      <label>Email<input type="email" id="them-email" inputmode="email"></label>
      <div id="o-ma"><label>Mã sinh viên (email để trống sẽ là mã@${hoa(qt.cfg?.tenMien || "tên miền")})<input id="them-ma"></label>
        <label>Lớp${chonLop("them-lop", laQtvTk() ? "— Chưa xếp lớp —" : "")}</label></div>
      <label>Mật khẩu đầu (bỏ trống = ${hoa(qt.cfg?.matKhauDau || "123456")})<input id="them-mk"></label>
      <p class="loi-tk" id="tk-loi"></p>
      <button class="btn full" onclick="qtThemMot()">Tạo tài khoản</button></div>`;
  } else if (qt.tab === "nhap") {
    veNhapDs(vung);
  } else if (qt.tab === "caiDat") {
    const chuaDoi = qt.ds.filter(u => u.vaiTro === "hs" && u.doiMatKhau && !u.khoa && (!qt.locLop || u.lop === qt.locLop));
    vung.innerHTML = `${laQtvTk() ? `<div class="the-trang form-tk"><b>Tài khoản sinh viên</b>
      <label>Tên miền email (sinh viên đăng nhập bằng mã SV, app ghép thành mã@tên miền)<input id="cd-mien" value="${hoa(qt.cfg.tenMien)}" placeholder="vd: truong.edu.vn" autocapitalize="off"></label>
      <label>Mật khẩu khởi tạo (từ 6 kí tự; sinh viên phải đổi ở lần đăng nhập đầu)<input id="cd-mk" value="${hoa(qt.cfg.matKhauDau)}"></label>
      <p class="loi-tk" id="tk-loi"></p>
      <button class="btn full" onclick="luuCaiDat()">Lưu cài đặt</button></div>` : ""}
    <div class="the-trang form-tk"><b>🔒 Khóa tài khoản chưa đổi mật khẩu</b>
      <p class="ghi-chu">Mật khẩu khởi tạo giống nhau nên dễ bị người khác đăng nhập thay. Sau buổi hướng dẫn đầu tiên, khóa các tài khoản chưa đổi mật khẩu; em nào cần thì mở khóa lại ở tab Tài khoản.</p>
      <label>Lớp${chonLop("cd-lop", "Mọi lớp").replace("<select", `<select onchange="qt.locLop=this.value;veQuanTri()"`)}</label>
      <button class="btn full phu" onclick="khoaChuaDoi()" ${chuaDoi.length ? "" : "disabled"}>Khóa ${chuaDoi.length} tài khoản chưa đổi mật khẩu</button></div>`;
  } else {
    const gv = qt.ds.filter(u => u.vaiTro !== "hs");
    vung.innerHTML = `<div class="the-trang form-tk">
      <label>Tên lớp mới<input id="lop-ten" placeholder="VD: K68 Hóa A"></label>
      <button class="btn full" onclick="qtThemLop()">Thêm lớp</button></div>
      ${qt.lop.map(l => `<div class="the-trang dong-tk"><div><b>${hoa(l.ten)}</b>
        <small>${qt.ds.filter(u => u.lop === l.ten && u.vaiTro === "hs").length} học sinh · GV: ${(l.gv || []).map(id => hoa(qt.ds.find(u => u.uid === id)?.hoTen || "?")).join(", ") || "chưa có"}</small></div>
        <div class="nut-hang"><select onchange="qtGanGv('${l.id}', this.value); this.value=''"><option value="">+ Gán / bỏ giáo viên</option>
          ${gv.map(u => `<option value="${u.uid}">${(l.gv || []).includes(u.uid) ? "✓ " : ""}${hoa(u.hoTen)}</option>`).join("")}</select></div></div>`).join("")}`;
  }
}

// Tạo tài khoản bằng một bản Firebase phụ để QTV không bị đăng xuất
let fbPhu = null;
async function taoTaiKhoan({ hoTen, email, vaiTro, maHS = "", lop = "", mk }) {
  fbPhu = fbPhu || firebase.initializeApp(FIREBASE_CONFIG, "tao-tk");
  const cred = await fbPhu.auth().createUserWithEmailAndPassword(email, mk);
  await fbPhu.auth().signOut();
  const hoSo = { hoTen, email: email.toLowerCase(), vaiTro, maHS, lop, doiMatKhau: true, khoa: false, taoLuc: Date.now(), taoBoi: tk.user.uid };
  await fbDb.collection("nguoiDung").doc(cred.user.uid).set(hoSo);
  qt.ds?.push({ uid: cred.user.uid, ...hoSo });
}
async function qtThemMot() {
  const g = id => document.getElementById(id).value.trim(), loi = document.getElementById("tk-loi");
  const cfg = await layCauHinhTk(), vaiTro = g("them-vt"), hoTen = g("them-ten"), maHS = vaiTro === "hs" ? g("them-ma") : "";
  const email = g("them-email") ? g("them-email").toLowerCase() : maHS ? ghepEmail(maHS, cfg.tenMien) : "";
  const mk = g("them-mk") || cfg.matKhauDau;
  if (!hoTen || !email.includes("@")) { loi.textContent = maHS && !cfg.tenMien ? "Chưa đặt tên miền email (tab Cài đặt) — nhập email đầy đủ." : "Nhập họ tên và email (hoặc mã sinh viên)."; return; }
  if (mk.length < 6) { loi.textContent = "Mật khẩu đầu phải từ 6 kí tự."; return; }
  loi.textContent = "Đang tạo…";
  try { await taoTaiKhoan({ hoTen, email, vaiTro, maHS, lop: vaiTro === "hs" ? g("them-lop") : "", mk }); loi.textContent = `Đã tạo tài khoản cho ${hoTen}.`; document.getElementById("them-ten").value = document.getElementById("them-email").value = document.getElementById("them-ma").value = ""; }
  catch (e) { loi.textContent = loiTk(e); }
}
/* ---------- Nhập danh sách lớp từ file Excel / CSV (hoặc dán từ Excel) ----------
   Tự nhận cột theo tiêu đề (Họ tên | Họ đệm + Tên, Email, Mã SV/MSSV, Lớp), xem trước, báo lỗi từng dòng. */
const nhap = { dong: null, cot: {}, tenTep: "", lopChung: "" };
const COT_NHAP = { hoTen: "Họ và tên", ho: "Họ đệm", ten: "Tên", email: "Email", maHS: "Mã SV / MSSV", lop: "Lớp" };
function napThuVienXlsx() {
  if (window.XLSX) return Promise.resolve();
  return new Promise((ok, loi) => { const s = document.createElement("script"); s.src = "vendor/xlsx/xlsx.core.min.js"; s.onload = ok; s.onerror = () => loi(new Error("Không tải được thư viện đọc Excel")); document.head.append(s); });
}
async function docTepDs(tep) {
  if (!tep) return;
  try {
    await napThuVienXlsx();
    const wb = XLSX.read(await tep.arrayBuffer(), { type: "array" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    nhan(XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: "" }), tep.name + (wb.SheetNames.length > 1 ? ` (trang "${wb.SheetNames[0]}")` : ""));
  } catch (e) { alert("Không đọc được file: " + (e.message || e)); }
}
function docDanDs() {
  const chu = document.getElementById("nhap-dan").value;
  nhan(chu.split(/\r?\n/).map(d => d.split("\t")), "Dán từ Excel");
}
// Nhận bảng thô → tìm dòng tiêu đề, đoán cột
function nhan(bang, ten) {
  bang = bang.map(r => r.map(x => String(x ?? "").trim())).filter(r => r.some(Boolean));
  if (!bang.length) return alert("File không có dữ liệu.");
  const chuan = s => boDau(s).replace(/[^a-z0-9@ ]/g, " ").replace(/\s+/g, " ").trim();
  const doan = h => { const x = chuan(h);
    if (/e ?mail/.test(x)) return "email";
    if (/^(mssv|msv|mshs|ma ?sv|ma sinh vien|ma hs|ma hoc sinh|ma so( sinh vien| hoc sinh)?|student id|id)$/.test(x) || /^ma (sv|hs|so)/.test(x)) return "maHS";
    if (/^(ho (va |&)?ten|hoten|full ?name|ten sinh vien|ten hoc sinh|sinh vien|hoc sinh)$/.test(x)) return "hoTen";
    if (/^(ho|ho dem|ho lot|ho va ten dem)$/.test(x)) return "ho";
    if (/^(ten|first ?name)$/.test(x)) return "ten";
    if (/^(lop|ma lop|lop hoc|class|lop sinh hoat)$/.test(x)) return "lop";
    return null; };
  let iTieuDe = -1, cot = {};
  for (let i = 0; i < Math.min(10, bang.length); i++) {
    const c = {}; bang[i].forEach((h, j) => { const k = doan(h); if (k && c[k] === undefined) c[k] = j; });
    if (Object.keys(c).length >= 2) { iTieuDe = i; cot = c; break; }
  }
  let du = bang.slice(iTieuDe + 1);
  if (iTieuDe < 0) {   // không có tiêu đề: đoán theo nội dung
    const soCot = Math.max(...bang.map(r => r.length)), tl = (j, f) => bang.filter(r => f(r[j] || "")).length / bang.length;
    for (let j = 0; j < soCot; j++) {
      if (cot.email === undefined && tl(j, v => /@/.test(v)) > .6) cot.email = j;
      else if (cot.maHS === undefined && tl(j, v => /^[A-Za-z]{0,4}\d{5,}$/.test(v)) > .6) cot.maHS = j;
      else if (cot.hoTen === undefined && tl(j, v => /\S+\s+\S+/.test(v) && !/@/.test(v)) > .6) cot.hoTen = j;
    }
    du = bang;
  }
  Object.assign(nhap, { dong: du, cot, tenTep: ten, tieuDe: iTieuDe >= 0 ? bang[iTieuDe] : null });
  veNhapDs(document.getElementById("vung-qt"));
}
function hangNhap() {
  const c = nhap.cot, g = (r, k) => c[k] === undefined ? "" : (r[c[k]] || "").trim();
  const daCo = new Set(qt.ds.map(u => u.email.toLowerCase())), trongTep = {};
  return nhap.dong.map((r, i) => {
    const hoTen = g(r, "hoTen") || [g(r, "ho"), g(r, "ten")].filter(Boolean).join(" ");
    const maHS = g(r, "maHS").replace(/\s+/g, ""), lop = g(r, "lop") || nhap.lopChung;
    const email = (g(r, "email") || (maHS && qt.cfg?.tenMien ? ghepEmail(maHS, qt.cfg.tenMien) : "")).toLowerCase();
    let loi = "";
    if (!hoTen) loi = "thiếu họ tên"; else if (!email) loi = qt.cfg?.tenMien ? "thiếu mã SV" : "thiếu email (chưa đặt tên miền ở tab Cài đặt)"; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) loi = "email sai";
    else if (!maHS) loi = "thiếu mã SV";
    else if (trongTep[email] !== undefined) loi = `trùng email với dòng ${trongTep[email] + 1}`;
    else if (daCo.has(email)) loi = "đã có tài khoản";
    else if (laGvThuong() && !lopDay().includes(lop)) loi = lop ? `lớp ${lop} không do thầy/cô phụ trách` : "chưa chọn lớp";
    if (email && trongTep[email] === undefined) trongTep[email] = i;
    return { hoTen, email, maHS, lop, loi };
  });
}
function veNhapDs(vung) {
  if (!vung) return;
  const cotChon = k => { const n = Math.max(...nhap.dong.map(r => r.length), nhap.tieuDe?.length || 0);
    return `<label>${COT_NHAP[k]}<select onchange="nhap.cot['${k}']=this.value===''?undefined:Number(this.value);veNhapDs(document.getElementById('vung-qt'))">
      <option value="">— không có —</option>${[...Array(n)].map((_, j) => `<option value="${j}" ${nhap.cot[k] === j ? "selected" : ""}>Cột ${String.fromCharCode(65 + j)}${nhap.tieuDe?.[j] ? " · " + hoa(nhap.tieuDe[j]) : ` · ${hoa((nhap.dong[0]?.[j] || "").slice(0, 18))}`}</option>`).join("")}</select></label>`; };
  if (!nhap.dong) {
    vung.innerHTML = `<div class="the-trang form-tk">
      <p><b>Nhập danh sách lớp</b></p>
      <p class="ghi-chu">Chọn file <b>Excel (.xlsx, .xls)</b> hoặc <b>CSV</b>. Google Sheets: Tệp → Tải xuống → Microsoft Excel (.xlsx). File chỉ cần cột <b>Họ tên</b> (hoặc Họ đệm + Tên) và <b>Mã SV</b>; cột <b>Lớp</b>, <b>Email</b> nếu có. Tài khoản = <b>mã SV@${hoa(qt.cfg?.tenMien || "(chưa đặt tên miền)")}</b>, mật khẩu đầu = <b>${hoa(qt.cfg?.matKhauDau || "123456")}</b>.</p>
      <label class="btn full">📂 Chọn file danh sách<input type="file" accept=".xlsx,.xls,.csv,.ods" hidden onchange="docTepDs(this.files[0])"></label>
      <details><summary>Hoặc dán từ Excel</summary>
        <textarea id="nhap-dan" rows="6" placeholder="Bôi đen bảng trong Excel (kể cả dòng tiêu đề), chép rồi dán vào đây"></textarea>
        <button class="btn full phu" onclick="docDanDs()">Đọc bảng đã dán</button></details></div>`;
    return;
  }
  const ds = hangNhap(), tot = ds.filter(x => !x.loi), coCotLop = nhap.cot.lop !== undefined;
  const lopMoi = [...new Set(tot.map(x => x.lop).filter(l => l && !qt.lop.some(y => y.ten === l)))];
  vung.innerHTML = `<div class="the-trang form-tk">
      <p><b>${hoa(nhap.tenTep)}</b> · ${ds.length} dòng · <span class="vt-hs nhan-vt">${tot.length} hợp lệ</span> ${ds.length - tot.length ? `<span class="nhan-vt vt-qtv">${ds.length - tot.length} lỗi / bỏ qua</span>` : ""}</p>
      <details ${Object.keys(nhap.cot).length < 3 ? "open" : ""}><summary>Cột đã nhận (bấm để sửa nếu sai)</summary>
        <div class="luoi-cot">${Object.keys(COT_NHAP).map(cotChon).join("")}</div></details>
      ${coCotLop ? `<p class="ghi-chu">Lớp lấy theo cột Lớp trong file${lopMoi.length ? `; sẽ tạo lớp mới: <b>${lopMoi.map(hoa).join(", ")}</b>` : ""}.</p>`
        : `<label>Lớp cho cả danh sách<input list="ds-lop" value="${hoa(nhap.lopChung)}" placeholder="Chọn hoặc gõ tên lớp mới" onchange="nhap.lopChung=this.value.trim();veNhapDs(document.getElementById('vung-qt'))">
          <datalist id="ds-lop">${qt.lop.map(l => `<option value="${hoa(l.ten)}">`).join("")}</datalist></label>`}
      <div class="bang-cuon"><table class="bang bang-nhap"><thead><tr><th>#</th><th></th><th>Họ tên</th><th>Email</th><th>Mã</th><th>Lớp</th></tr></thead><tbody>
        ${ds.map((x, i) => `<tr class="${x.loi ? "loi" : ""}"><td>${i + 1}</td><td>${x.loi ? "✗ " + x.loi : "✓"}</td><td>${hoa(x.hoTen)}</td><td>${hoa(x.email)}</td><td>${hoa(x.maHS)}</td><td>${hoa(x.lop)}</td></tr>`).join("")}
      </tbody></table></div>
      <div class="nut-hang"><button class="btn phu" onclick="nhap.dong=null;veNhapDs(document.getElementById('vung-qt'))">Chọn file khác</button>
        <button class="btn" onclick="taoTuDs()" ${tot.length ? "" : "disabled"}>Tạo ${tot.length} tài khoản</button></div>
      <pre class="nhat-ki" id="nhat-ki" hidden></pre></div>`;
}
async function taoTuDs() {
  const tot = hangNhap().filter(x => !x.loi), ki = document.getElementById("nhat-ki");
  const cfg = await layCauHinhTk();
  if (!confirm(`Tạo ${tot.length} tài khoản sinh viên? Mật khẩu đầu = ${cfg.matKhauDau}.`)) return;
  ki.hidden = false; ki.textContent = "";
  const ghi = s => { ki.textContent += s + "\n"; ki.scrollTop = ki.scrollHeight; };
  for (const ten of [...new Set(tot.map(x => x.lop).filter(l => l && !qt.lop.some(y => y.ten === l)))]) {
    try { await fbDb.collection("lop").add({ ten, gv: [], taoLuc: Date.now() }); ghi(`+ Tạo lớp ${ten}`); } catch (e) { ghi(`✗ Lớp ${ten}: ${loiTk(e)}`); }
  }
  await taiQt(true);
  let ok = 0;
  for (const x of tot) {
    try { await taoTaiKhoan({ hoTen: x.hoTen, email: x.email, vaiTro: "hs", maHS: x.maHS, lop: x.lop, mk: cfg.matKhauDau }); ok++; ghi(`✓ ${x.hoTen}`); }
    catch (e) {
      ghi(`✗ ${x.hoTen}: ${loiTk(e)}`);
      if (e.code === "auth/too-many-requests") { ghi("\n⏸ Firebase tạm chặn vì tạo quá nhiều tài khoản trong thời gian ngắn. Khoảng 1 giờ sau mở lại file này và bấm Tạo tiếp — các em đã có tài khoản sẽ tự được bỏ qua."); break; }
    }
  }
  ghi(`\nXong: tạo được ${ok}/${tot.length} tài khoản.`);
}
async function luuCaiDat() {
  const tenMien = document.getElementById("cd-mien").value.trim().replace(/^@/, "").toLowerCase(), matKhauDau = document.getElementById("cd-mk").value.trim();
  const loi = document.getElementById("tk-loi");
  if (tenMien && !/^[a-z0-9.-]+\.[a-z]{2,}$/.test(tenMien)) { loi.textContent = "Tên miền không hợp lệ (vd: truong.edu.vn)."; return; }
  if (matKhauDau.length < 6) { loi.textContent = "Mật khẩu khởi tạo phải từ 6 kí tự."; return; }
  try {
    await fbDb.collection("cauHinh").doc("chung").set({ tenMien }, { merge: true });
    await fbDb.collection("cauHinh").doc("rieng").set({ matKhauDau }, { merge: true });
    await taiQt(true); loi.textContent = "Đã lưu.";
  } catch (e) { loi.textContent = loiTk(e); }
}
async function khoaChuaDoi() {
  const ds = qt.ds.filter(u => u.vaiTro === "hs" && u.doiMatKhau && !u.khoa && (!qt.locLop || u.lop === qt.locLop));
  if (!confirm(`Khóa ${ds.length} tài khoản chưa đổi mật khẩu${qt.locLop ? " của lớp " + qt.locLop : ""}?`)) return;
  try {
    for (let i = 0; i < ds.length; i += 400) { const lo = fbDb.batch(); ds.slice(i, i + 400).forEach(u => lo.update(fbDb.collection("nguoiDung").doc(u.uid), { khoa: true })); await lo.commit(); }
    ds.forEach(u => u.khoa = true); alert(`Đã khóa ${ds.length} tài khoản.`); veQuanTri();
  } catch (e) { alert(loiTk(e)); }
}
async function qtDatLaiMk(uid) {
  const u = qt.ds.find(x => x.uid === uid);
  if (!confirm(`Gửi email đặt lại mật khẩu tới ${u.email}?`)) return;
  try { await fbAuth.sendPasswordResetEmail(u.email); alert("Đã gửi. Người dùng mở email và bấm vào đường dẫn để đặt mật khẩu mới."); }
  catch (e) { alert(loiTk(e)); }
}
async function qtKhoa(uid) {
  const u = qt.ds.find(x => x.uid === uid);
  if (!confirm(`${u.khoa ? "Mở khóa" : "Khóa"} tài khoản ${u.hoTen}?`)) return;
  try { await fbDb.collection("nguoiDung").doc(uid).update({ khoa: !u.khoa }); u.khoa = !u.khoa; veQuanTri(); }
  catch (e) { alert(loiTk(e)); }
}
async function qtSuaNguoi(uid) {
  const u = qt.ds.find(x => x.uid === uid);
  const hoTen = prompt("Họ và tên:", u.hoTen); if (hoTen === null) return;
  const vt = laQtvTk() ? prompt("Vai trò (hs / gv / qtv):", u.vaiTro) : "hs"; if (vt === null || !VAI_TRO[vt.trim()]) return;
  const maHS = vt.trim() === "hs" ? prompt("Mã sinh viên:", u.maHS || "") : u.maHS || ""; if (maHS === null) return;
  const lop = u.vaiTro === "hs" || vt.trim() === "hs" ? prompt(`Lớp (gõ đúng tên lớp${laGvThuong() ? ": " + lopDay().join(", ") : ", bỏ trống nếu chưa xếp"}):`, u.lop || "") : u.lop;
  if (lop === null) return;
  if (laGvThuong() && !lopDay().includes(lop.trim())) return alert("Chỉ chuyển được sang lớp thầy/cô đang dạy.");
  const moi = { hoTen: hoTen.trim(), vaiTro: vt.trim(), maHS: maHS.trim(), lop: (lop || "").trim() };
  try { await fbDb.collection("nguoiDung").doc(uid).update(moi); Object.assign(u, moi); veQuanTri(); }
  catch (e) { alert(loiTk(e)); }
}
async function qtThemLop() {
  const ten = document.getElementById("lop-ten").value.trim();
  if (!ten) return;
  if (qt.lop.some(l => l.ten === ten)) return alert("Đã có lớp này.");
  try { await fbDb.collection("lop").add({ ten, gv: [], taoLuc: Date.now() }); await taiQt(true); veQuanTri(); }
  catch (e) { alert(loiTk(e)); }
}
async function qtGanGv(lopId, uid) {
  if (!uid) return;
  const l = qt.lop.find(x => x.id === lopId), gv = new Set(l.gv || []);
  gv.has(uid) ? gv.delete(uid) : gv.add(uid);
  try { await fbDb.collection("lop").doc(lopId).update({ gv: [...gv] }); l.gv = [...gv]; await dongBoLopDay(); veQuanTri(); }
  catch (e) { alert(loiTk(e)); }
}

// Nếu người dùng mở thẳng link tới màn tài khoản thì vẽ lại khi script này đã nạp
if (["/tai-khoan", "/doi-mat-khau", "/quan-tri"].includes(location.hash.slice(1).split("?")[0])) hienManHinh();
