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
  tk.user = user; tk.hoSo = null; tk.loi = ""; tk.dangTai = !!user;   // dangTai: đã đăng nhập nhưng hồ sơ (vai trò) chưa tải xong → các màn theo vai trò phải chờ, không được coi là học sinh
  if (user) { try { tk.hoSo = await taiHoSo(user); } catch (e) { console.warn(e); tk.loi = `${e.code || ""} ${e.message || ""}`.trim(); } }
  tk.san = true; tk.dangTai = false;
  if (user && tk.hoSo) { try { if (!sessionStorage.getItem("nk-dn")) { sessionStorage.setItem("nk-dn", "1"); ghiNhatKy("dang-nhap", navigator.userAgent.includes("Android") ? "Android" : navigator.userAgent.includes("iPhone") ? "iPhone" : "Máy tính"); } } catch {} }
  capNhatNutTk();
  window.dispatchEvent(new Event("tk-san"));   // báo cho các màn phụ thuộc vai trò vẽ lại
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
      <div class="dn-nhom"><img src="anh/3d/nhom-chao.webp" alt="" class="dn-chung">
        <div class="dn-chu"><b>Chào mừng vào phòng lab!</b><span>Đăng nhập để làm bài được giao, xem điểm và lớp học</span></div></div>
      <div class="the-trang form-tk dn-form">
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
      <details class="the-trang form-tk loi-chao-tk"><summary><b>👋 Trang chủ của tôi</b><small>${hoa(tenChao(h) ? "Đang gọi: " + tenChao(h) : "Chưa đặt tên gọi")} · không bắt buộc</small></summary>
        <p class="nhan-o">Nhân vật ở đầu trang chủ</p>${luoiNhanVat()}
        <label>Tên muốn app gọi bạn<input id="tk-ten-goi" maxlength="30" value="${hoa(h.tenGoi || "")}" placeholder="VD: cô Lan, thầy Hùng, Minh Anh"></label>
        <label>Câu nhắn dưới lời chào<input id="tk-loi-chao" maxlength="80" value="${hoa(h.loiChao || "")}" placeholder="Mỗi ngày một chút Hóa phân tích"></label>
        <p class="ghi-chu">Để trống thì app tự gọi theo tên trong hồ sơ.</p><p class="loi-tk" id="tk-loi-cg"></p>
        <button class="btn full" onclick="luuLoiChao()">Lưu lời chào</button></details>
      ${h.vaiTro === "gv" ? `<a class="the-luyen" href="#/quan-tri"><span class="o-icon">👥</span><span class="text"><b>Lớp học phần của tôi</b><small>Tạo lớp, nhập danh sách SV (link Google Sheets / Excel), quản lí tài khoản</small></span><span class="chevron">›</span></a>` : ""}
      ${h.vaiTro === "qtv" ? `<a class="the-luyen" href="#/quan-tri"><span class="o-icon">🛠️</span><span class="text"><b>Quản trị</b><small>Lớp học phần, tài khoản giáo viên / sinh viên, cài đặt</small></span><span class="chevron">›</span></a>` : ""}
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
  capNhatNutTk(); window.dispatchEvent(new Event("tk-san")); if (canDoiMk()) location.hash = "#/doi-mat-khau"; else hienManHinh();
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
    ghiNhatKy("doi-mat-khau"); alert("Đã đổi mật khẩu."); location.hash = "#/tai-khoan";
  } catch (e) { loi.textContent = loiTk(e); }
}

/* ---------- Quản trị: lớp học phần, tài khoản ----------
   Mô hình: LỚP HỌC PHẦN do giáo viên tạo (vd "Hóa phân tích khoa ngoài - Kì 1 2026-2027"), gồm SV nhiều ngành.
   lop/{id} = { ten, gv:[uid], taoBoi }; SV: nguoiDung.lopHoc = [id lớp học phần], nguoiDung.nganh = lớp hành chính / ngành.
   GV: nguoiDung.lopDay = [id lớp mình dạy] (luật Firestore dựa vào đây). QTV thấy và làm được mọi thứ. */
/* ---------- Nhật ký hoạt động (collection nhatKy: mọi người đã đăng nhập ghi được, chỉ QTV đọc) ---------- */
const HANH_DONG = {
  "dang-nhap": "Đăng nhập", "doi-mat-khau": "Đổi mật khẩu", "giao-de": "Giao bài", "gia-han": "Đổi giờ đóng bài", "xoa-giao": "Xóa bài giao",
  "mo-khoa-bai": "Mở khóa bài", "thu-bai": "Thu bài", "chot-diem": "Chốt điểm", "sua-diem": "Sửa điểm", "khoa-tk": "Khóa / mở khóa tài khoản",
  "khoa-hang-loat": "Khóa hàng loạt", "dat-lai-mk": "Gửi thư đặt lại MK", "sua-nguoi": "Sửa thông tin người dùng", "tao-lop": "Tạo lớp", "xoa-lop": "Xóa lớp",
  "cai-dat": "Đổi cài đặt", "tra-loi-gop-y": "Trả lời góp ý", "gan-gv": "Gán giáo viên cho lớp", "kho-de-thi": "Kho đề thi", "canh-bao-hoc": "Báo động học tập", "sao-luu": "Sao lưu", "khoi-phuc": "Khôi phục dữ liệu",
};
function ghiNhatKy(hd, ct = "", doiTuong = "") {
  try {
    if (!fbDb || !tk.user) return;
    fbDb.collection("nhatKy").add({ luc: Date.now(), uid: tk.user.uid, ten: String(tk.hoSo?.hoTen || "").slice(0, 80), vaiTro: tk.hoSo?.vaiTro || "", hd, ct: String(ct).slice(0, 300), doiTuong: String(doiTuong).slice(0, 120), ban: typeof BAN_APP === "string" ? BAN_APP : "" }).catch(() => {});
  } catch {}
}
const qt = { tab: "lop", ds: null, tatCa: null, lop: null, loc: "", locLop: "", locNganh: "", tt: "" };
const laQtvTk = () => tk.hoSo?.vaiTro === "qtv" && !tk.hoSo?.khoa;
const laGvThuong = () => tk.hoSo?.vaiTro === "gv" && !tk.hoSo?.khoa;
const lopDay = () => tk.hoSo?.lopDay || [];
const tenLop = id => qt.lop?.find(l => l.id === id)?.ten || "";
const ganTenLop = u => (u.lopHoc || []).map(tenLop).filter(Boolean);
MAN_HINH["/quan-tri"] = {
  tieuDe: "Quản trị",
  manHinhCon: true,
  ve: () => {
    if (!laQtvTk() && !laGvThuong()) return `<div class="trong">Chỉ quản trị viên, giáo viên mới vào được mục này.</div>`;
    const TAB = laQtvTk() ? { lop: "Lớp học phần", nguoi: "Tài khoản", them: "Thêm 1 người", caiDat: "Cài đặt", nhatKy: "📜 Nhật ký" }
      : { lop: "Lớp của tôi", nguoi: "Sinh viên của tôi", caiDat: "Khóa chưa đổi MK" };
    if (!TAB[qt.tab]) qt.tab = "lop";
    return `<div class="chip-hang">${Object.entries(TAB).map(([k, v]) => `<button class="chip-nhanh ${qt.tab === k ? "chon" : ""}" onclick="qt.tab='${k}';hienManHinh()">${v}</button>`).join("")}</div>
      <div id="vung-qt"><div class="trong">Đang tải…</div></div>`;
  },
  sauKhiVe: () => veQuanTri(),
};
async function taiQt(ep) {
  qt.cfg = await layCauHinhTk(ep);
  if (ep || !qt.tatCa) qt.tatCa = (await fbDb.collection("nguoiDung").get()).docs.map(d => ({ uid: d.id, ...d.data() }));
  if (ep || !qt.lop) qt.lop = (await fbDb.collection("lop").get()).docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => a.ten.localeCompare(b.ten, "vi"));
  if (laGvThuong()) {
    const cua = new Set(qt.lop.filter(l => (l.gv || []).includes(tk.user.uid)).map(l => l.id));
    qt.lop = qt.lop.filter(l => cua.has(l.id));
    qt.ds = qt.tatCa.filter(u => u.vaiTro === "hs" && (u.lopHoc || []).some(id => cua.has(id)));
  } else {
    qt.ds = qt.tatCa;
    if (laQtvTk() && (ep || !qt.daDongBo)) { qt.daDongBo = true; dongBoLopDay().catch(() => {}); }
  }
  if (qt.locLop && !qt.lop.some(l => l.id === qt.locLop)) qt.locLop = "";
}
// QTV: ghi lopDay (id các lớp dạy) vào hồ sơ GV cho khớp với lop.gv
async function dongBoLopDay() {
  const lo = fbDb.batch(); let n = 0;
  qt.tatCa.filter(u => u.vaiTro === "gv" || u.vaiTro === "qtv").forEach(u => {
    const dung = qt.lop.filter(l => (l.gv || []).includes(u.uid)).map(l => l.id).sort();
    if (JSON.stringify(dung) !== JSON.stringify([...(u.lopDay || [])].sort())) { lo.update(fbDb.collection("nguoiDung").doc(u.uid), { lopDay: dung }); u.lopDay = dung; n++; }
  });
  if (n) await lo.commit();
}
const chonLop = (id, rong, chon = qt.locLop) => `<select id="${id}">${rong ? `<option value="">${rong}</option>` : ""}${qt.lop.map(l => `<option value="${l.id}" ${chon === l.id ? "selected" : ""}>${hoa(l.ten)}</option>`).join("")}</select>`;
const dsNganh = ds => [...new Set(ds.map(u => u.nganh || "").filter(Boolean))].sort((a, b) => a.localeCompare(b, "vi"));

async function veQuanTri() {
  const vung = document.getElementById("vung-qt"); if (!vung) return;
  try { await taiQt(); } catch (e) { vung.innerHTML = `<div class="trong">${loiTk(e)}</div>`; return; }
  // Dữ liệu cũ: SV có trường "lop" (tên ngành) từ bản trước → chuyển thành ngành
  const cu = laQtvTk() ? qt.tatCa.filter(u => u.vaiTro === "hs" && u.lop && !u.nganh) : [];
  const bannerCu = cu.length ? `<div class="the-trang canh-bao-cu">⚠️ Có ${cu.length} sinh viên còn dữ liệu "lớp" kiểu cũ (thực chất là ngành).
    <button class="btn nho" onclick="chuyenDuLieuCu()">Chuyển thành ngành</button></div>` : "";
  if (qt.tab === "lop") {
    const tu = boDau(qt.locTenLop || ""), ds = qt.lop.filter(l => !tu || boDau(l.ten).includes(tu));
    const gvDs = qt.tatCa.filter(u => u.vaiTro !== "hs");
    const lopCu = laQtvTk() ? qt.lop.filter(l => !l.taoBoi) : [];
    const bannerLopCu = lopCu.length ? `<div class="the-trang canh-bao-cu">🧹 Có ${lopCu.length} "lớp" do lần nhập trước tự tạo theo tên ngành (không phải lớp học phần):
      <small>${lopCu.slice(0, 8).map(l => hoa(l.ten)).join(" · ")}${lopCu.length > 8 ? " …" : ""}</small>
      <button class="btn nho" onclick="xoaLopCu()">${cu.length ? "Chuyển ngành cho SV rồi xóa các lớp này" : "Xóa các lớp này"}</button></div>` : "";
    vung.innerHTML = (lopCu.length ? "" : bannerCu) + bannerLopCu + `<div class="hang-loc"><input type="search" placeholder="🔍 Tìm lớp học phần…" value="${hoa(qt.locTenLop || "")}" oninput="qt.locTenLop=this.value;clearTimeout(qt.t);qt.t=setTimeout(veQuanTri,250)">
        <button class="btn nho" onclick="qtThemLop()">＋ Tạo lớp</button></div>
      <p class="ghi-chu">${qt.lop.length} lớp học phần · bấm tên lớp để nhập danh sách SV, xem điểm</p>
      <div class="the-trang ds-gon">${ds.map(l => { const n = qt.tatCa.filter(u => u.vaiTro === "hs" && (u.lopHoc || []).includes(l.id)), ng = dsNganh(n);
        return `<div class="dong-lop"><a class="lien-ket ten" href="#/lop?id=${l.id}"><b>${hoa(l.ten)}</b>
          <small>${n.length} SV${ng.length ? ` · ${ng.length} ngành` : ""} · GV: ${(l.gv || []).map(id => hoa(qt.tatCa.find(u => u.uid === id)?.hoTen?.split(" ").slice(-2).join(" ") || "?")).join(", ") || "chưa có"}</small></a>
          ${laQtvTk() ? `<button class="chip-nhanh" onclick="qt.moGv=qt.moGv==='${l.id}'?'':'${l.id}';veQuanTri()" aria-label="Giáo viên của lớp">👥 GV (${(l.gv || []).length})</button>` : ""}
          ${laQtvTk() || l.taoBoi === tk.user.uid ? `<button class="nut-ba-cham" onclick="qtXoaLop('${l.id}')" aria-label="Xóa lớp">🗑</button>` : ""}</div>
        ${laQtvTk() && qt.moGv === l.id ? khungGanGv(l) : ""}`; }).join("")
        || `<p class="ghi-chu" style="padding:12px">Chưa có lớp học phần nào. Bấm ＋ Tạo lớp, đặt tên như "Hóa phân tích khoa ngoài - Kì 1 2026-2027".</p>`}</div>`;
  } else if (qt.tab === "nguoi") {
    const hs = qt.ds.filter(u => u.vaiTro === "hs");
    vung.innerHTML = bannerCu + `
      <div class="hang-loc"><input type="search" placeholder="🔍 Tìm tên, mã SV, email…" value="${hoa(qt.loc)}" oninput="qt.loc=this.value;clearTimeout(qt.t);qt.t=setTimeout(veDsTk,250)">
        ${chonLop("loc-lop", "Mọi lớp HP").replace("<select", `<select onchange="qt.locLop=this.value;veDsTk()"`)}</div>
      <div class="hang-loc"><select onchange="qt.locNganh=this.value;veDsTk()"><option value="">Mọi ngành</option>${dsNganh(hs).map(n => `<option ${qt.locNganh === n ? "selected" : ""}>${hoa(n)}</option>`).join("")}</select></div>
      <div class="nhom-chip loc-tt">${[["", "Tất cả"], ["chua", "⏳ Chưa đổi MK"], ["khoa", "🔒 Đã khóa"]].map(([k, v]) => `<button class="chip-nhanh ${(qt.tt || "") === k ? "chon" : ""}" onclick="qt.tt='${k}';veQuanTri()">${v}</button>`).join("")}</div>
      <div id="ds-tk"></div>`;
    veDsTk();
  } else if (qt.tab === "them") {
    vung.innerHTML = `<div class="the-trang form-tk">
      <p class="ghi-chu">Thêm sinh viên nên làm trong trang lớp học phần (nhập danh sách hoặc ＋ theo mã SV). Mục này chủ yếu để thêm giáo viên / quản trị viên.</p>
      <label>Vai trò<select id="them-vt" onchange="document.getElementById('o-ma').hidden=this.value!=='hs'">
        <option value="gv">Giáo viên</option><option value="qtv">Quản trị viên</option><option value="hs">Sinh viên</option></select></label>
      <label>Họ và tên<input id="them-ten"></label>
      <label>Email<input type="email" id="them-email" inputmode="email"></label>
      <div id="o-ma" hidden><label>Mã sinh viên (email để trống sẽ là mã@${hoa(qt.cfg?.tenMien || "tên miền")})<input id="them-ma"></label>
        <label>Ngành / lớp hành chính<input id="them-nganh" placeholder="VD: 67 Sinh học"></label>
        <label>Lớp học phần${chonLop("them-lop", "— Chưa vào lớp nào —", "")}</label></div>
      <label>Mật khẩu đầu (bỏ trống = ${hoa(qt.cfg?.matKhauDau || "123456")})<input id="them-mk"></label>
      <p class="loi-tk" id="tk-loi"></p>
      <button class="btn full" onclick="qtThemMot()">Tạo tài khoản</button></div>`;
  } else if (qt.tab === "nhatKy" && laQtvTk()) {
    veNhatKy();
  } else if (qt.tab === "caiDat") {
    const chuaDoi = qt.ds.filter(u => u.vaiTro === "hs" && u.doiMatKhau && !u.khoa && (!qt.locLop || (u.lopHoc || []).includes(qt.locLop)));
    vung.innerHTML = `${laQtvTk() ? `<div class="the-trang form-tk"><b>Tài khoản sinh viên</b>
      <label>Tên miền email (sinh viên đăng nhập bằng mã SV, app ghép thành mã@tên miền)<input id="cd-mien" value="${hoa(qt.cfg.tenMien)}" placeholder="vd: truong.edu.vn" autocapitalize="off"></label>
      <label>Mật khẩu khởi tạo (từ 6 kí tự; sinh viên phải đổi ở lần đăng nhập đầu)<input id="cd-mk" value="${hoa(qt.cfg.matKhauDau)}"></label>
      <p class="loi-tk" id="tk-loi"></p>
      <button class="btn full" onclick="luuCaiDat()">Lưu cài đặt</button></div>` : ""}
    ${laQtvTk() ? `<div class="the-trang form-tk"><b>💾 Sao lưu dữ liệu</b>
      <p class="ghi-chu">Gói miễn phí của Firebase không tự sao lưu. Bấm nút dưới để tải một file gồm tài khoản, lớp, đề giao, bài nộp, đáp án. Lưu file vào Google Drive của bạn. ${htSaoLuu()}</p>
      <button class="btn full" onclick="saoLuuToanBo()">⬇ Sao lưu toàn bộ ngay</button>
      <label class="btn full phu">⬆ Khôi phục từ file sao lưu<input type="file" accept="application/json" hidden onchange="khoiPhucSaoLuu(this)"></label>
      <p class="loi-tk" id="sl-loi"></p></div>` : ""}
    <div class="the-trang form-tk"><b>🔒 Khóa tài khoản chưa đổi mật khẩu</b>
      <p class="ghi-chu">Mật khẩu khởi tạo giống nhau nên dễ bị người khác đăng nhập thay. Sau buổi hướng dẫn đầu tiên, khóa các tài khoản chưa đổi mật khẩu; em nào cần thì mở khóa lại.</p>
      <label>Lớp học phần${chonLop("cd-lop", laQtvTk() ? "Mọi lớp" : "Mọi lớp của tôi").replace("<select", `<select onchange="qt.locLop=this.value;veQuanTri()"`)}</label>
      <button class="btn full phu" onclick="khoaChuaDoi()" ${chuaDoi.length ? "" : "disabled"}>Khóa ${chuaDoi.length} tài khoản chưa đổi mật khẩu</button></div>`;
  }
}
// Dọn: chuyển "lớp" cũ của SV thành ngành, rồi xóa các lớp tự tạo theo ngành (không có người tạo)
async function xoaLopCu() {
  const lopCu = qt.lop.filter(l => !l.taoBoi), cu = qt.tatCa.filter(u => u.vaiTro === "hs" && u.lop && !u.nganh);
  if (!confirm(`Dọn dữ liệu cũ?\n• ${cu.length} sinh viên: "lớp" cũ → ngành\n• Xóa ${lopCu.length} lớp tự tạo theo tên ngành\nTài khoản sinh viên vẫn giữ nguyên.`)) return;
  try {
    for (let i = 0; i < cu.length; i += 400) { const lo = fbDb.batch(); cu.slice(i, i + 400).forEach(u => lo.update(fbDb.collection("nguoiDung").doc(u.uid), { nganh: u.lop, lop: firebase.firestore.FieldValue.delete() })); await lo.commit(); }
    cu.forEach(u => { u.nganh = u.lop; delete u.lop; });
    for (let i = 0; i < lopCu.length; i += 400) { const lo = fbDb.batch(); lopCu.slice(i, i + 400).forEach(l => lo.delete(fbDb.collection("lop").doc(l.id))); await lo.commit(); }
    await taiQt(true); await dongBoLopDay(); alert("Đã dọn xong."); veQuanTri();
  } catch (e) { alert(loiTk(e)); }
}
async function chuyenDuLieuCu() {
  const cu = qt.tatCa.filter(u => u.vaiTro === "hs" && u.lop && !u.nganh);
  if (!confirm(`Chuyển trường "lớp" cũ của ${cu.length} sinh viên thành "ngành"? Các lớp đặt theo tên ngành trước đây nên xóa ở tab Lớp học phần.`)) return;
  try {
    for (let i = 0; i < cu.length; i += 400) { const lo = fbDb.batch(); cu.slice(i, i + 400).forEach(u => lo.update(fbDb.collection("nguoiDung").doc(u.uid), { nganh: u.lop, lop: firebase.firestore.FieldValue.delete() })); await lo.commit(); }
    cu.forEach(u => { u.nganh = u.lop; delete u.lop; }); veQuanTri();
  } catch (e) { alert(loiTk(e)); }
}

// Danh sách tài khoản gọn: mỗi người một dòng, nhóm theo ngành (thu gọn được); tìm / lọc thì hiện danh sách phẳng
const moNhomTk = {};
function dongTkGon(u, lopId) {
  const tt = u.khoa ? "🔒" : u.doiMatKhau && u.vaiTro === "hs" ? "⏳" : "";
  return `<div class="dong-gon ${u.khoa ? "da-khoa" : ""}">${anhDaiDien(u, 30)}
    <div class="giua"><b>${hoa(u.hoTen)}</b><small>${u.vaiTro === "hs" ? `${hoa(u.maHS || u.email)}${u.nganh ? " · " + hoa(u.nganh) : ""}` : `<span class="vt-${u.vaiTro} nhan-vt">${VAI_TRO[u.vaiTro]}</span> ${hoa(u.email)}`}</small></div>
    <span class="tt">${tt}</span>
    ${u.uid === tk.user.uid ? "<span></span>" : `<button class="nut-ba-cham" onclick="this.parentNode.classList.toggle('mo')" aria-label="Thao tác">⋯</button>`}
    <div class="thao-tac"><small>${hoa(u.email)}${u.vaiTro === "hs" && ganTenLop(u).length ? " · lớp HP: " + ganTenLop(u).map(hoa).join("; ") : ""}</small>
      <button class="btn phu" onclick="qtDatLaiMk('${u.uid}')">📧 Đặt lại MK</button>
      <button class="btn phu" onclick="qtSuaNguoi('${u.uid}')">✎ Sửa</button>
      <button class="btn phu" onclick="qtKhoa('${u.uid}')">${u.khoa ? "🔓 Mở khóa" : "🔒 Khóa"}</button>
      ${lopId ? `<button class="btn phu" onclick="boKhoiLop('${u.uid}','${lopId}')">➖ Bỏ khỏi lớp</button>` : ""}</div></div>`;
}
function locTk(ds) {
  const tu = boDau(qt.loc || "");
  return ds.filter(u => (!qt.locLop || (u.lopHoc || []).includes(qt.locLop)) && (!qt.locNganh || u.nganh === qt.locNganh)
    && (!qt.tt || (qt.tt === "khoa" ? u.khoa : qt.tt === "chua" ? u.vaiTro === "hs" && u.doiMatKhau && !u.khoa : true))
    && (!tu || boDau(`${u.hoTen} ${u.email} ${u.maHS || ""} ${u.nganh || ""}`).includes(tu)))
    .sort((a, b) => a.hoTen.split(" ").pop().localeCompare(b.hoTen.split(" ").pop(), "vi") || a.hoTen.localeCompare(b.hoTen, "vi"));
}
function nhomTheoNganh(ds, lopId) {
  const nhom = [], canBo = ds.filter(u => u.vaiTro !== "hs");
  if (canBo.length) nhom.push(["Quản trị viên, giáo viên", canBo]);
  const theo = {}; ds.filter(u => u.vaiTro === "hs").forEach(u => (theo[u.nganh || ""] ||= []).push(u));
  Object.keys(theo).sort((a, b) => (a ? 0 : 1) - (b ? 0 : 1) || a.localeCompare(b, "vi")).forEach(n => nhom.push([n || "Chưa ghi ngành", theo[n]]));
  return nhom.map(([ten, dsu]) => {
    const chua = dsu.filter(u => u.vaiTro === "hs" && u.doiMatKhau && !u.khoa).length, khoa = dsu.filter(u => u.khoa).length, k = (lopId || "") + ten;
    return `<details class="the-trang nhom-tk" ${moNhomTk[k] ?? (nhom.length <= 2) ? "open" : ""} ontoggle="moNhomTk[${JSON.stringify(k).replace(/"/g, "&quot;")}]=this.open">
      <summary><b>${hoa(ten)}</b><span class="dem">${dsu.length}${chua ? ` · ⏳${chua}` : ""}${khoa ? ` · 🔒${khoa}` : ""}</span></summary>
      <div class="ds-gon">${dsu.map(u => dongTkGon(u, lopId)).join("")}</div></details>`;
  }).join("");
}
function veDsTk() {
  const v = document.getElementById("ds-tk"); if (!v) return;
  const ds = locTk(qt.ds);
  if (!ds.length) { v.innerHTML = `<div class="trong">Không có tài khoản phù hợp.</div>`; return; }
  v.innerHTML = qt.loc || qt.locNganh
    ? `<p class="ghi-chu">${ds.length} tài khoản</p><div class="the-trang ds-gon">${ds.slice(0, 300).map(u => dongTkGon(u)).join("")}</div>`
    : `<p class="ghi-chu">${ds.length} tài khoản · nhóm theo ngành · ⏳ chưa đổi MK · 🔒 đã khóa · bấm ⋯ để thao tác</p>` + nhomTheoNganh(ds);
}

let fbPhu = null;
async function taoTaiKhoan({ hoTen, email, vaiTro, maHS = "", nganh = "", lopHoc = [], mk }) {
  fbPhu = fbPhu || firebase.initializeApp(FIREBASE_CONFIG, "tao-tk");
  const cred = await fbPhu.auth().createUserWithEmailAndPassword(email, mk);
  await fbPhu.auth().signOut();
  const hoSo = { hoTen, email: email.toLowerCase(), vaiTro, maHS, nganh, lopHoc, doiMatKhau: true, khoa: false, taoLuc: Date.now(), taoBoi: tk.user.uid };
  await fbDb.collection("nguoiDung").doc(cred.user.uid).set(hoSo);
  const u = { uid: cred.user.uid, ...hoSo }; qt.tatCa?.push(u); if (qt.ds !== qt.tatCa) qt.ds?.push(u);
  return u;
}
async function qtThemMot() {
  const g = id => document.getElementById(id)?.value.trim() || "", loi = document.getElementById("tk-loi");
  const cfg = await layCauHinhTk(), vaiTro = g("them-vt"), hoTen = g("them-ten"), maHS = vaiTro === "hs" ? g("them-ma") : "";
  const email = g("them-email") ? g("them-email").toLowerCase() : maHS ? ghepEmail(maHS, cfg.tenMien) : "";
  const mk = g("them-mk") || cfg.matKhauDau;
  if (!hoTen || !email.includes("@")) { loi.textContent = "Nhập họ tên và email (hoặc mã sinh viên)."; return; }
  if (mk.length < 6) { loi.textContent = "Mật khẩu đầu phải từ 6 kí tự."; return; }
  loi.textContent = "Đang tạo…";
  try { await taoTaiKhoan({ hoTen, email, vaiTro, maHS, nganh: vaiTro === "hs" ? g("them-nganh") : "", lopHoc: vaiTro === "hs" && g("them-lop") ? [g("them-lop")] : [], mk });
    loi.textContent = `Đã tạo tài khoản cho ${hoTen}.`; ["them-ten", "them-email", "them-ma"].forEach(id => document.getElementById(id).value = ""); }
  catch (e) { loi.textContent = loiTk(e); }
}

/* ---------- Thêm SV vào lớp học phần: nhập file Excel/CSV, link Google Sheets, dán, hoặc theo mã SV ----------
   SV chưa có tài khoản → tạo mới (mã@tên miền, mật khẩu khởi tạo) và xếp vào lớp; đã có → chỉ thêm vào lớp. */
const nhap = { dong: null, cot: {}, tenTep: "", lopId: "" };
const COT_NHAP = { stt: "STT", hoTen: "Họ và tên", ho: "Họ đệm", ten: "Tên", maHS: "Mã SV / MSSV", ngaySinh: "Ngày sinh", nganh: "Lớp HC / ngành", email: "Email" };
function napThuVienXlsx() {
  if (window.XLSX) return Promise.resolve();
  return new Promise((ok, loi) => { const s = document.createElement("script"); s.src = "vendor/xlsx/xlsx.core.min.js"; s.onload = ok; s.onerror = () => loi(new Error("Không tải được thư viện đọc Excel")); document.head.append(s); });
}
// Ngày sinh về dạng dd/mm/yyyy (Excel có thể trả m/d/yyyy, yyyy-mm-dd, số ngày của Excel); không nhận ra thì giữ nguyên
function chuanNgaySinh(t) {
  t = String(t ?? "").trim(); if (!t) return "";
  const hai = n => String(n).padStart(2, "0"); let m;
  if ((m = t.match(/^(\d{4})[\/\-.](\d{1,2})[\/\-.](\d{1,2})/))) return `${hai(m[3])}/${hai(m[2])}/${m[1]}`;
  if ((m = t.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2}|\d{4})$/))) {
    let [, a, b, y] = m; a = +a; b = +b; if (y.length === 2) y = (+y <= 30 ? "20" : "19") + y;
    if (b > 12 && a <= 12) [a, b] = [b, a];   // m/d/yyyy → d/m/yyyy
    return `${hai(a)}/${hai(b)}/${y}`;
  }
  if (/^\d{5}$/.test(t)) { const d = new Date(Math.round((+t - 25569) * 864e5)); return `${hai(d.getUTCDate())}/${hai(d.getUTCMonth() + 1)}/${d.getUTCFullYear()}`; }
  return t;
}
async function docTepDs(tep) {
  if (!tep) return;
  try {
    await napThuVienXlsx();
    const wb = XLSX.read(await tep.arrayBuffer(), { type: "array", cellDates: true });
    const ws = wb.Sheets[wb.SheetNames[0]];
    nhan(XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: "", dateNF: "dd/mm/yyyy" }), tep.name + (wb.SheetNames.length > 1 ? ` (trang "${wb.SheetNames[0]}")` : ""));
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
    if (/^(stt|tt|so tt|so thu tu|no)$/.test(x)) return "stt";
    if (/^(ngay sinh|ngaysinh|ngay thang nam sinh|ns|dob|date of birth|birthday|sinh ngay)$/.test(x)) return "ngaySinh";
    if (/^(ho|ho dem|ho lot|ho va ten dem)$/.test(x)) return "ho";
    if (/^(ten|first ?name)$/.test(x)) return "ten";
    if (/^(lop|ma lop|lop hoc|class|lop sinh hoat|lop hanh chinh|nganh|nganh hoc|khoa|chuong trinh|he dao tao|lop hc)$/.test(x)) return "nganh";
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
  veNhapDs();
}
// Link Google Sheets (chia sẻ "Bất kì ai có đường liên kết") → tải CSV
async function docLinkSheet() {
  const link = document.getElementById("link-sheet").value.trim();
  const m = link.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/); if (!m) return alert("Link Google Sheets không đúng. Link có dạng https://docs.google.com/spreadsheets/d/…");
  const gid = (link.match(/[#&?]gid=(\d+)/) || [])[1] || "0";
  try {
    const r = await fetch(`https://docs.google.com/spreadsheets/d/${m[1]}/gviz/tq?tqx=out:csv&gid=${gid}`);
    const chu = await r.text();
    if (!r.ok || /^\s*<!DOCTYPE|<html/i.test(chu)) throw new Error("Sheet chưa bật chia sẻ “Bất kì ai có đường liên kết đều xem được”.");
    await napThuVienXlsx();
    const wb = XLSX.read(chu, { type: "string" });
    nhan(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, raw: false, defval: "" }), "Google Sheets");
  } catch (e) { alert("Không đọc được sheet: " + (e.message || e)); }
}
function hangNhap() {
  const c = nhap.cot, g = (r, k) => c[k] === undefined ? "" : String(r[c[k]] ?? "").trim();
  const theoEmail = Object.fromEntries(qt.tatCa.map(u => [u.email.toLowerCase(), u])), trongTep = {};
  return nhap.dong.map((r, i) => {
    const hoTen = g(r, "hoTen") || [g(r, "ho"), g(r, "ten")].filter(Boolean).join(" ");
    const maHS = g(r, "maHS").replace(/\s+/g, ""), nganh = g(r, "nganh");
    const email = (g(r, "email") || (maHS && qt.cfg?.tenMien ? ghepEmail(maHS, qt.cfg.tenMien) : "")).toLowerCase();
    let loi = "", co = null;
    if (!hoTen) loi = "thiếu họ tên"; else if (!maHS && !g(r, "email")) loi = "thiếu mã SV";
    else if (!email) loi = "chưa đặt tên miền email (Quản trị → Cài đặt)";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) loi = "email sai";
    else if (trongTep[email] !== undefined) loi = `trùng với dòng ${trongTep[email] + 1}`;
    else if ((co = theoEmail[email]) && co.vaiTro !== "hs") loi = "email này là tài khoản giáo viên";
    if (email && trongTep[email] === undefined) trongTep[email] = i;
    const daTrong = co && (co.lopHoc || []).includes(nhap.lopId);
    const sttN = /^\d{1,4}$/.test(g(r, "stt")) ? +g(r, "stt") : null, ns = chuanNgaySinh(g(r, "ngaySinh"));
    return { idx: i, stt: sttN, ns, hoTen, email, maHS, nganh, loi, co: loi ? null : co, trangThai: loi ? "loi" : daTrong ? "daTrong" : co ? "them" : "moi" };
  });
}
function veNhapDs() {
  const vung = document.getElementById("vung-nhap"); if (!vung) return;
  const cotChon = k => { const n = Math.max(...nhap.dong.map(r => r.length), nhap.tieuDe?.length || 0);
    return `<label>${COT_NHAP[k]}<select onchange="nhap.cot['${k}']=this.value===''?undefined:Number(this.value);veNhapDs()">
      <option value="">— không có —</option>${[...Array(n)].map((_, j) => `<option value="${j}" ${nhap.cot[k] === j ? "selected" : ""}>Cột ${String.fromCharCode(65 + j)}${nhap.tieuDe?.[j] ? " · " + hoa(nhap.tieuDe[j]) : ` · ${hoa(String(nhap.dong[0]?.[j] ?? "").slice(0, 18))}`}</option>`).join("")}</select></label>`; };
  if (!nhap.dong) {
    vung.innerHTML = `<div class="the-trang form-tk">
      <p class="ghi-chu">Danh sách cần cột <b>Họ tên</b> (hoặc Họ đệm + Tên) và <b>Mã SV</b>; cột <b>Lớp / Ngành</b> nếu có (lưu làm ngành của SV). Em chưa có tài khoản sẽ được tạo: <b>mã SV@${hoa(qt.cfg?.tenMien || "(chưa đặt tên miền)")}</b>, mật khẩu đầu <b>${hoa(qt.cfg?.matKhauDau || "123456")}</b>; em đã có tài khoản chỉ được thêm vào lớp.</p>
      <label>🔗 Link Google Sheets<input id="link-sheet" placeholder="https://docs.google.com/spreadsheets/d/…" autocapitalize="off"></label>
      <button class="btn full" onclick="docLinkSheet()">Đọc sheet</button>
      <p class="ghi-chu">Sheet phải bật chia sẻ “Bất kì ai có đường liên kết đều xem được”.</p>
      <label class="btn full phu">📂 Hoặc chọn file Excel / CSV<input type="file" accept=".xlsx,.xls,.csv,.ods" hidden onchange="docTepDs(this.files[0])"></label>
      <details><summary>Hoặc dán từ Excel</summary>
        <textarea id="nhap-dan" rows="6" placeholder="Bôi đen bảng (kể cả dòng tiêu đề), chép rồi dán vào đây"></textarea>
        <button class="btn full phu" onclick="docDanDs()">Đọc bảng đã dán</button></details></div>`;
    return;
  }
  const ds = hangNhap(), dem = k => ds.filter(x => x.trangThai === k).length, lam = ds.filter(x => x.trangThai === "moi" || x.trangThai === "them");
  const NHAN = { moi: "＋ tạo mới", them: "↪ đã có TK, thêm vào lớp", daTrong: "✓ đã trong lớp" };
  vung.innerHTML = `<div class="the-trang form-tk">
      <p><b>${hoa(nhap.tenTep)}</b> · ${ds.length} dòng</p>
      <p class="ghi-chu">＋ ${dem("moi")} tạo mới · ↪ ${dem("them")} đã có tài khoản · ✓ ${dem("daTrong")} đã trong lớp${dem("loi") ? ` · <span class="loi-tk">✗ ${dem("loi")} lỗi</span>` : ""}</p>
      <details ${nhap.cot.maHS === undefined || (nhap.cot.hoTen === undefined && nhap.cot.ten === undefined) ? "open" : ""}><summary>Cột đã nhận (bấm để sửa nếu sai)</summary>
        <div class="luoi-cot">${Object.keys(COT_NHAP).map(cotChon).join("")}</div></details>
      <div class="bang-cuon"><table class="bang bang-nhap"><thead><tr><th>STT</th><th></th><th>Họ tên</th><th>Mã SV</th><th>Ngày sinh</th><th>Ngành</th></tr></thead><tbody>
        ${ds.map((x, i) => `<tr class="${x.loi ? "loi" : ""}"><td>${x.stt ?? i + 1}</td><td>${x.loi ? "✗ " + x.loi : NHAN[x.trangThai]}</td><td>${hoa(x.hoTen)}</td><td>${hoa(x.maHS)}</td><td>${hoa(x.ns)}</td><td>${hoa(x.nganh)}</td></tr>`).join("")}
      </tbody></table></div>
      <div class="nut-hang"><button class="btn phu" onclick="nhap.dong=null;veNhapDs()">Chọn danh sách khác</button>
        <button class="btn" onclick="taoTuDs()" ${lam.length ? "" : "disabled"}>Thêm ${lam.length} SV vào lớp</button></div>
      <pre class="nhat-ki" id="nhat-ki" hidden></pre></div>`;
}
async function taoTuDs() {
  const tatCa = hangNhap(), ds = tatCa.filter(x => x.trangThai === "moi" || x.trangThai === "them"), ki = document.getElementById("nhat-ki"), thuTu = [];
  tatCa.filter(x => x.trangThai === "daTrong").forEach(x => thuTu.push({ uid: x.co.uid, idx: x.idx, stt: x.stt, ns: x.ns }));   // đã trong lớp: chỉ cập nhật STT / ngày sinh
  const cfg = await layCauHinhTk(), moi = ds.filter(x => x.trangThai === "moi").length;
  if (!confirm(`Thêm ${ds.length} sinh viên vào lớp "${tenLop(nhap.lopId)}"?\n• Tạo mới ${moi} tài khoản (mật khẩu đầu ${cfg.matKhauDau})\n• ${ds.length - moi} em đã có tài khoản chỉ được thêm vào lớp`)) return;
  ki.hidden = false; ki.textContent = "";
  const ghi = s => { ki.textContent += s + "\n"; ki.scrollTop = ki.scrollHeight; };
  let ok = 0;
  for (const x of ds) {
    try {
      let uid;
      if (x.trangThai === "moi") uid = (await taoTaiKhoan({ hoTen: x.hoTen, email: x.email, vaiTro: "hs", maHS: x.maHS, nganh: x.nganh, lopHoc: [nhap.lopId], mk: cfg.matKhauDau })).uid;
      else { await ghiLopHoc(x.co, [...new Set([...(x.co.lopHoc || []), nhap.lopId])]); uid = x.co.uid; }
      thuTu.push({ uid, idx: x.idx, stt: x.stt, ns: x.ns });
      ok++; ghi(`✓ ${x.hoTen}${x.trangThai === "them" ? " (đã có TK, thêm vào lớp)" : ""}`);
    } catch (e) {
      ghi(`✗ ${x.hoTen}: ${loiTk(e)}`);
      if (e.code === "auth/too-many-requests") { ghi("\n⏸ Firebase tạm chặn vì tạo quá nhiều tài khoản trong thời gian ngắn. Khoảng 1 giờ sau đọc lại danh sách và bấm tiếp — các em đã có sẽ tự được bỏ qua."); break; }
    }
  }
  try { await ghiThuTuLop(nhap.lopId, thuTu); } catch (e) { ghi("⚠ Chưa ghi được số thứ tự / ngày sinh: " + loiTk(e)); }
  ghi(`\nXong: ${ok}/${ds.length} sinh viên đã vào lớp.`);
}
// Số thứ tự + ngày sinh của SV trong lớp: lop/{id}.danhSach = { uid: { s: STT, ns: "dd/mm/yyyy" } }.
// STT: lấy theo cột STT của file; không có thì giữ STT cũ; lớp còn trống thì theo thứ tự dòng trong file; lớp đã có người thì nối tiếp.
async function ghiThuTuLop(lopId, muc) {
  if (!muc.length) return;
  const cu = (await fbDb.collection("lop").doc(lopId).get()).data()?.danhSach || {}, rong = !Object.keys(cu).length;
  let max = Math.max(0, ...Object.values(cu).map(v => v.s || 0)); const cap = {};
  muc.sort((a, b) => a.idx - b.idx).forEach(m => { const c = cu[m.uid]; cap[`danhSach.${m.uid}`] = { s: m.stt ?? c?.s ?? (rong ? m.idx + 1 : ++max), ns: m.ns || c?.ns || "" }; });
  await fbDb.collection("lop").doc(lopId).update(cap);
  const l = qt.lop?.find(x => x.id === lopId); if (l) { l.danhSach = { ...(l.danhSach || {}) }; Object.entries(cap).forEach(([k, v]) => l.danhSach[k.slice(9)] = v); }
}
// Ghi danh sách lớp học phần của 1 SV (luật: GV chỉ thêm / bớt lớp mình dạy)
async function ghiLopHoc(u, lopHoc) {
  await fbDb.collection("nguoiDung").doc(u.uid).update({ lopHoc });
  u.lopHoc = lopHoc;
  if (laGvThuong() && !qt.ds.includes(u) && lopHoc.some(id => qt.lop.some(l => l.id === id))) qt.ds.push(u);
}
async function boKhoiLop(uid, lopId) {
  const u = qt.tatCa.find(x => x.uid === uid);
  if (!confirm(`Bỏ ${u.hoTen} khỏi lớp "${tenLop(lopId)}"? Tài khoản và bài đã làm vẫn giữ.`)) return;
  try { await ghiLopHoc(u, (u.lopHoc || []).filter(id => id !== lopId)); try { await fbDb.collection("lop").doc(lopId).update({ [`danhSach.${uid}`]: firebase.firestore.FieldValue.delete() }); } catch {} hienManHinh(); } catch (e) { alert(loiTk(e)); }
}
// Thêm 1 SV vào lớp theo mã SV (có tài khoản thì thêm vào lớp, chưa có thì tạo)
async function themTheoMa(lopId) {
  const cfg = await layCauHinhTk();
  const ma = (prompt("Mã sinh viên (hoặc email):") || "").trim(); if (!ma) return;
  const email = ghepEmail(ma, cfg.tenMien); if (!email.includes("@")) return alert("Chưa đặt tên miền email (Quản trị → Cài đặt). Nhập email đầy đủ.");
  const co = qt.tatCa.find(u => u.email.toLowerCase() === email);
  try {
    if (co) {
      if (co.vaiTro !== "hs") return alert("Email này là tài khoản giáo viên.");
      if ((co.lopHoc || []).includes(lopId)) return alert(`${co.hoTen} đã ở trong lớp.`);
      await ghiLopHoc(co, [...(co.lopHoc || []), lopId]); await ghiThuTuLop(lopId, [{ uid: co.uid, idx: 0 }]).catch(() => {}); alert(`Đã thêm ${co.hoTen} (đã có tài khoản) vào lớp.`);
    } else {
      const hoTen = (prompt(`Chưa có tài khoản ${email}. Họ và tên sinh viên:`) || "").trim(); if (!hoTen) return;
      const nganh = (prompt("Ngành / lớp hành chính (có thể bỏ trống):") || "").trim();
      const moi = await taoTaiKhoan({ hoTen, email, vaiTro: "hs", maHS: ma.includes("@") ? "" : ma, nganh, lopHoc: [lopId], mk: cfg.matKhauDau });
      await ghiThuTuLop(lopId, [{ uid: moi.uid, idx: 0 }]).catch(() => {});
      alert(`Đã tạo tài khoản ${email} (mật khẩu đầu ${cfg.matKhauDau}) và thêm vào lớp.`);
    }
    hienManHinh();
  } catch (e) { alert(loiTk(e)); }
}
MAN_HINH["/nhap-lop"] = {
  tieuDe: "Thêm SV vào lớp",
  manHinhCon: true,
  ve: () => laQtvTk() || laGvThuong() ? `<div id="dau-nhap"></div><div id="vung-nhap"><div class="trong">Đang tải…</div></div>` : `<div class="trong">Chỉ giáo viên, quản trị viên mới dùng được mục này.</div>`,
  sauKhiVe: async () => {
    if (!laQtvTk() && !laGvThuong()) return;
    try { await taiQt(); } catch (e) { document.getElementById("vung-nhap").innerHTML = `<div class="trong">${loiTk(e)}</div>`; return; }
    const id = thamSoHash().get("id");
    if (!qt.lop.some(l => l.id === id)) { document.getElementById("vung-nhap").innerHTML = `<div class="trong">Không tìm thấy lớp, hoặc lớp không do thầy/cô phụ trách.</div>`; return; }
    if (nhap.lopId !== id) Object.assign(nhap, { lopId: id, dong: null });
    document.getElementById("dau-nhap").innerHTML = `<div class="the-trang"><b>${hoa(tenLop(id))}</b>
      <div class="nut-hang"><a class="btn phu" href="#/lop?id=${id}">← Về trang lớp</a><button class="btn phu" onclick="themTheoMa('${id}')">＋ 1 SV theo mã</button></div></div>`;
    veNhapDs();
  },
};

async function luuCaiDat() {
  const tenMien = document.getElementById("cd-mien").value.trim().replace(/^@/, "").toLowerCase(), matKhauDau = document.getElementById("cd-mk").value.trim();
  const loi = document.getElementById("tk-loi");
  if (tenMien && !/^[a-z0-9.-]+\.[a-z]{2,}$/.test(tenMien)) { loi.textContent = "Tên miền không hợp lệ (vd: truong.edu.vn)."; return; }
  if (matKhauDau.length < 6) { loi.textContent = "Mật khẩu khởi tạo phải từ 6 kí tự."; return; }
  try {
    await fbDb.collection("cauHinh").doc("chung").set({ tenMien }, { merge: true });
    await fbDb.collection("cauHinh").doc("rieng").set({ matKhauDau }, { merge: true });
    ghiNhatKy("cai-dat", `tên miền: ${tenMien || "(trống)"}; đã đổi mật khẩu khởi tạo`); await taiQt(true); loi.textContent = "Đã lưu.";
  } catch (e) { loi.textContent = loiTk(e); }
}
async function khoaChuaDoi(lopId = qt.locLop) {
  const ds = qt.ds.filter(u => u.vaiTro === "hs" && u.doiMatKhau && !u.khoa && (!lopId || (u.lopHoc || []).includes(lopId)));
  if (!ds.length) return alert("Không có tài khoản nào chưa đổi mật khẩu.");
  if (!confirm(`Khóa ${ds.length} tài khoản chưa đổi mật khẩu${lopId ? ` của lớp "${tenLop(lopId)}"` : ""}?`)) return;
  try {
    for (let i = 0; i < ds.length; i += 400) { const lo = fbDb.batch(); ds.slice(i, i + 400).forEach(u => lo.update(fbDb.collection("nguoiDung").doc(u.uid), { khoa: true })); await lo.commit(); }
    ghiNhatKy("khoa-hang-loat", `${ds.length} tài khoản chưa đổi MK`, lopId ? tenLop(lopId) : "mọi lớp"); ds.forEach(u => u.khoa = true); alert(`Đã khóa ${ds.length} tài khoản.`); hienManHinh();
  } catch (e) { alert(loiTk(e)); }
}
const timTk = uid => qt.tatCa?.find(x => x.uid === uid);
async function qtDatLaiMk(uid) {
  const u = timTk(uid);
  if (!confirm(`Gửi email đặt lại mật khẩu tới ${u.email}?`)) return;
  try { await fbAuth.sendPasswordResetEmail(u.email); ghiNhatKy("dat-lai-mk", "", u.hoTen); alert("Đã gửi. Người dùng mở email và bấm vào đường dẫn để đặt mật khẩu mới."); }
  catch (e) { alert(loiTk(e)); }
}
async function qtKhoa(uid) {
  const u = timTk(uid);
  if (!confirm(`${u.khoa ? "Mở khóa" : "Khóa"} tài khoản ${u.hoTen}?`)) return;
  try { await fbDb.collection("nguoiDung").doc(uid).update({ khoa: !u.khoa }); u.khoa = !u.khoa; ghiNhatKy("khoa-tk", u.khoa ? "Khóa" : "Mở khóa", u.hoTen); document.getElementById("ds-tk") ? veDsTk() : hienManHinh(); }
  catch (e) { alert(loiTk(e)); }
}
async function qtSuaNguoi(uid) {
  const u = timTk(uid);
  const hoTen = prompt("Họ và tên:", u.hoTen); if (hoTen === null) return;
  const vt = laQtvTk() ? prompt("Vai trò (hs / gv / qtv):", u.vaiTro) : "hs"; if (vt === null || !VAI_TRO[vt.trim()]) return;
  const moi = { hoTen: hoTen.trim() };
  if (laQtvTk()) moi.vaiTro = vt.trim();
  if (vt.trim() === "hs") {
    const maHS = prompt("Mã sinh viên:", u.maHS || ""); if (maHS === null) return;
    const nganh = prompt("Ngành / lớp hành chính:", u.nganh || ""); if (nganh === null) return;
    Object.assign(moi, { maHS: maHS.trim(), nganh: nganh.trim() });
  }
  try { await fbDb.collection("nguoiDung").doc(uid).update(moi); ghiNhatKy("sua-nguoi", moi.vaiTro && moi.vaiTro !== u.vaiTro ? `vai trò ${u.vaiTro} → ${moi.vaiTro}` : "", u.hoTen); Object.assign(u, moi); document.getElementById("ds-tk") ? veDsTk() : hienManHinh(); }
  catch (e) { alert(loiTk(e)); }
}
async function qtThemLop() {
  const ten = (prompt("Tên lớp học phần (VD: Hóa phân tích khoa ngoài - Kì 1 2026-2027):") || "").trim();
  if (!ten) return;
  if (qt.lop.some(l => l.ten === ten)) return alert("Đã có lớp này.");
  try {
    const ref = await fbDb.collection("lop").add({ ten, gv: laQtvTk() ? [] : [tk.user.uid], taoBoi: tk.user.uid, taoLuc: Date.now() });
    if (laGvThuong()) {   // GV tự ghi lớp mới vào danh sách lớp dạy (luật kiểm tra GV có tên trong lớp đó)
      const ld = [...lopDay(), ref.id];
      await fbDb.collection("nguoiDung").doc(tk.user.uid).update({ lopDay: ld, lopVuaDoi: ref.id });
      tk.hoSo.lopDay = ld;
    }
    ghiNhatKy("tao-lop", "", ten); await taiQt(true); location.hash = `#/lop?id=${ref.id}`;
  } catch (e) { alert(loiTk(e)); }
}
async function qtXoaLop(id) {
  const n = qt.tatCa.filter(u => (u.lopHoc || []).includes(id)).length;
  if (!confirm(`Xóa lớp "${tenLop(id)}"${n ? ` (${n} sinh viên)` : ""}? Tài khoản sinh viên vẫn giữ; bài đã giao và điểm của lớp vẫn còn trên máy chủ nhưng không còn hiện theo lớp.`)) return;
  try {
    ghiNhatKy("xoa-lop", "", tenLop(id)); await fbDb.collection("lop").doc(id).delete();
    if (laGvThuong()) { const ld = lopDay().filter(x => x !== id); await fbDb.collection("nguoiDung").doc(tk.user.uid).update({ lopDay: ld }); tk.hoSo.lopDay = ld; }
    await taiQt(true); if (laQtvTk()) await dongBoLopDay(); veQuanTri();
  } catch (e) { alert(loiTk(e)); }
}
// QTV: khung tick chọn các giáo viên phụ trách một lớp (dùng ở Quản trị → Lớp học phần và ở trang lớp)
function khungGanGv(l) {
  const gvDs = qt.tatCa.filter(u => u.vaiTro !== "hs");
  return `<div class="the-trang gan-gv-ds"><b>Giáo viên phụ trách lớp</b> <small class="ghi-chu">(tick để thêm, bỏ tick để gỡ; một lớp có thể có nhiều giáo viên, ai cũng giao bài, điểm danh, xem điểm được)</small>
    ${gvDs.map(u => `<label class="tk-chk"><input type="checkbox" ${(l.gv || []).includes(u.uid) ? "checked" : ""} onchange="qtGanGv('${l.id}','${u.uid}')"> ${hoa(u.hoTen)}${u.uid === tk.user.uid ? " (tôi)" : ""} <small class="ghi-chu">${u.vaiTro === "qtv" ? "quản trị viên · " : ""}${hoa(u.email)}</small></label>`).join("") || `<p class="ghi-chu">Chưa có tài khoản giáo viên. Tạo ở tab “Người dùng”.</p>`}</div>`;
}
async function qtGanGv(lopId, uid) {
  if (!uid) return;
  const l = qt.lop.find(x => x.id === lopId), gv = new Set(l.gv || []);
  gv.has(uid) ? gv.delete(uid) : gv.add(uid);
  if (!gv.size && !confirm("Lớp sẽ không còn giáo viên nào phụ trách. Vẫn gỡ?")) return document.getElementById("vung-qt") ? veQuanTri() : hienManHinh();
  try { await fbDb.collection("lop").doc(lopId).update({ gv: [...gv] }); l.gv = [...gv]; await dongBoLopDay(); ghiNhatKy("gan-gv", `Lớp ${l.ten}`, qt.tatCa.find(u => u.uid === uid)?.hoTen || ""); document.getElementById("vung-qt") ? veQuanTri() : hienManHinh(); }
  catch (e) { alert(loiTk(e)); }
}

// Nếu người dùng mở thẳng link tới màn tài khoản thì vẽ lại khi script này đã nạp
if (["/tai-khoan", "/doi-mat-khau", "/quan-tri", "/nhap-lop"].includes(location.hash.slice(1).split("?")[0])) hienManHinh();

/* ---------- Sao lưu / khôi phục toàn bộ dữ liệu Firestore (chỉ quản trị viên) ---------- */
const BANG_SAO_LUU = ["nguoiDung", "lop", "deGiao", "dapAnDe", "loiGiaiDe", "baiNop", "baoLoi", "cauHinh"];
const luuLanSaoLuu = () => { try { return +localStorage.getItem("sao-luu-luc") || 0; } catch { return 0; } };
function htSaoLuu() {
  const t = luuLanSaoLuu();
  return t ? `Lần sao lưu gần nhất trên máy này: <b>${gioVN(t)}</b>${Date.now() - t > 7 * 864e5 ? ` — <b style="color:#dc2626">đã quá 7 ngày, nên sao lưu lại</b>` : ""}.` : `<b style="color:#dc2626">Máy này chưa từng sao lưu.</b>`;
}
async function saoLuuToanBo() {
  const loi = document.getElementById("sl-loi"); if (loi) loi.textContent = "Đang đọc dữ liệu…";
  try {
    const du = {}; let tong = 0;
    for (const b of BANG_SAO_LUU) {
      du[b] = {}; (await fbDb.collection(b).get()).forEach(d => { du[b][d.id] = d.data(); tong++; });
    }
    const blob = new Blob([JSON.stringify({ ver: 1, luc: Date.now(), du })], { type: "application/json" });
    const a = document.createElement("a"), d = new Date(Date.now() + 7 * 36e5).toISOString().slice(0, 10);
    a.href = URL.createObjectURL(blob); a.download = `sao-luu-hoa-phan-tich-${d}.json`; a.click();
    try { localStorage.setItem("sao-luu-luc", String(Date.now())); } catch {}
    ghiNhatKy("sao-luu", `${tong} mục`);
    if (loi) loi.textContent = `Đã tải file sao lưu (${tong} mục). Hãy chép file vào Google Drive.`;
  } catch (e) { if (loi) loi.textContent = loiTk(e); }
}
async function khoiPhucSaoLuu(input) {
  const f = input.files[0]; if (!f) return; const loi = document.getElementById("sl-loi");
  try {
    const nap = JSON.parse(await f.text()); if (!nap?.du) throw new Error("File không đúng định dạng sao lưu.");
    const dem = BANG_SAO_LUU.map(b => `${b}: ${Object.keys(nap.du[b] || {}).length}`).join("\n");
    if (!confirm(`Khôi phục từ file sao lưu ngày ${gioVN(nap.luc)}?\n\n${dem}\n\nCác mục cùng mã sẽ bị GHI ĐÈ bằng bản trong file; mục không có trong file được giữ nguyên. (Không tạo lại tài khoản đăng nhập đã bị xóa.)`)) return;
    let xong = 0;
    for (const b of BANG_SAO_LUU) {
      const ids = Object.keys(nap.du[b] || {});
      for (let i = 0; i < ids.length; i += 400) {
        const lo = fbDb.batch(); ids.slice(i, i + 400).forEach(id => lo.set(fbDb.collection(b).doc(id), nap.du[b][id])); await lo.commit(); xong += Math.min(400, ids.length - i);
        if (loi) loi.textContent = `Đang khôi phục… ${xong}`;
      }
    }
    ghiNhatKy("khoi-phuc", `${xong} mục từ file ${nap.luc ? gioVN(nap.luc) : ""}`);
    if (loi) loi.textContent = `Đã khôi phục ${xong} mục.`; taiQt(true);
  } catch (e) { if (loi) loi.textContent = "Không khôi phục được: " + (e.message || loiTk(e)); }
  finally { input.value = ""; }
}

/* ---------- Trang nhật ký hoạt động (chỉ quản trị viên) ---------- */
const nk = { ds: null, han: 200, hd: "", tu: "", het: false };
async function taiNhatKy(them) {
  if (them) nk.han += 200;
  const snap = await fbDb.collection("nhatKy").orderBy("luc", "desc").limit(nk.han).get();
  nk.ds = snap.docs.map(d => ({ id: d.id, ...d.data() })); nk.het = snap.size < nk.han;
}
async function veNhatKy(them) {
  const vung = document.getElementById("vung-qt"); if (!vung) return;
  try { if (!nk.ds || them === true || them === "moi") await taiNhatKy(them === true); } catch (e) { vung.innerHTML = `<div class="trong">${loiTk(e)}<br><small>Nếu báo thiếu quyền: dán lại luật mới vào Firestore → Rules → Publish.</small></div>`; return; }
  const tu = boDau(nk.tu || "");
  const ds = nk.ds.filter(x => (!nk.hd || x.hd === nk.hd) && (!tu || boDau(`${x.ten} ${x.ct || ""} ${x.doiTuong || ""}`).includes(tu)));
  const co = [...new Set(nk.ds.map(x => x.hd))];
  vung.innerHTML = `<p class="ghi-chu">Ghi lại ai làm gì, lúc nào (đăng nhập, giao bài, sửa điểm, mở khóa, khóa tài khoản, sao lưu…). Chỉ quản trị viên xem được. Đang tải ${nk.ds.length} dòng mới nhất.</p>
    <div class="the-trang"><input type="search" id="nk-tim" placeholder="🔍 Tìm theo tên người, đối tượng, nội dung…" value="${hoa(nk.tu)}" oninput="nk.tu=this.value;clearTimeout(nk.t);nk.t=setTimeout(()=>{veNhatKy();document.getElementById('nk-tim')?.focus()},250)">
      <div class="chip-hang" style="margin-top:8px"><button class="chip-nhanh ${nk.hd ? "" : "chon"}" onclick="nk.hd='';veNhatKy()">Tất cả</button>${co.map(h => `<button class="chip-nhanh ${nk.hd === h ? "chon" : ""}" onclick="nk.hd='${h}';veNhatKy()">${hoa(HANH_DONG[h] || h)}</button>`).join("")}</div></div>
    <div class="the-trang ds-gon">${ds.map(x => `<div class="dong-nk"><b>${hoa(HANH_DONG[x.hd] || x.hd)}</b> <small class="nk-gio">${gioVN(x.luc)}</small>
      <div>${hoa(x.ten || "?")} <span class="nhan-vt">${hoa(VAI_TRO[x.vaiTro] || x.vaiTro || "")}</span></div>
      ${x.doiTuong ? `<small>Đối tượng: ${hoa(x.doiTuong)}</small>` : ""}${x.ct ? `<small>${hoa(x.ct)}</small>` : ""}</div>`).join("") || `<div class="trong">Chưa có dòng nào.</div>`}</div>
    <div class="nut-hang">${nk.het ? "" : `<button class="btn phu" onclick="veNhatKy(true)">Tải thêm 200 dòng</button>`}
      <button class="btn phu" onclick="veNhatKy('moi')">↻ Làm mới</button>
      <button class="btn phu" onclick="xoaNhatKyCu()">🧹 Xóa dòng cũ hơn 90 ngày</button></div>`;
}
async function xoaNhatKyCu() {
  if (!confirm("Xóa các dòng nhật ký cũ hơn 90 ngày? Không khôi phục được.")) return;
  try {
    const han = Date.now() - 90 * 864e5; let xoa = 0;
    for (;;) {
      const s = await fbDb.collection("nhatKy").where("luc", "<", han).limit(400).get(); if (s.empty) break;
      const lo = fbDb.batch(); s.docs.forEach(d => lo.delete(d.ref)); await lo.commit(); xoa += s.size;
    }
    nk.ds = null; alert(`Đã xóa ${xoa} dòng.`); veNhatKy("moi");
  } catch (e) { alert(loiTk(e)); }
}

/* ---------- Lời chào trang chủ: tên gọi (tenGoi) và câu nhắn (loiChao) do chính người dùng đặt, không bắt buộc ---------- */
function tenChao(h) {
  if (!h) return "";
  if (h.tenGoi) return h.tenGoi;
  const ten = String(h.hoTen || "").trim();
  if (!ten || /quản trị|giáo viên|admin|tài khoản/i.test(ten)) return h.vaiTro === "hs" ? "" : "Thầy cô";
  return ten.split(/\s+/).pop();
}
async function luuLoiChao() {
  const tenGoi = document.getElementById("tk-ten-goi").value.trim().slice(0, 30), loiChao = document.getElementById("tk-loi-chao").value.trim().slice(0, 80), loi = document.getElementById("tk-loi-cg");
  loi.textContent = "Đang lưu…";
  try {
    const xoa = firebase.firestore.FieldValue.delete();
    await fbDb.collection("nguoiDung").doc(tk.user.uid).update({ tenGoi: tenGoi || xoa, loiChao: loiChao || xoa });
    if (tenGoi) tk.hoSo.tenGoi = tenGoi; else delete tk.hoSo.tenGoi;
    if (loiChao) tk.hoSo.loiChao = loiChao; else delete tk.hoSo.loiChao;
    loi.textContent = "Đã lưu. Về trang chủ để xem lời chào mới.";
  } catch (e) { loi.textContent = loiTk(e) + " (Nếu báo thiếu quyền: quản trị viên dán lại luật Firestore mới.)"; }
}
