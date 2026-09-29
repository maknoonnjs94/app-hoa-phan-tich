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

/* ---------- Nút tài khoản trên thanh tiêu đề ---------- */
const nutTk = document.createElement("a");
nutTk.className = "icon-btn nut-tk"; nutTk.href = "#/tai-khoan"; nutTk.setAttribute("aria-label", "Tài khoản");
document.querySelector(".topbar").append(nutTk);
function capNhatNutTk() {
  const ten = tk.hoSo?.hoTen || tk.user?.email || "";
  nutTk.innerHTML = tk.user
    ? `<span class="chu-cai">${hoa((ten.trim().split(/\s+/).pop() || "?")[0].toUpperCase())}</span>`
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
        <p class="ghi-chu">Dùng tài khoản do nhà trường cấp. Học sinh: email của em, mật khẩu lần đầu là mã học sinh.</p>
        <label>Email<input type="email" id="tk-email" autocomplete="username" inputmode="email"></label>
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
        <span class="anh-tk">${hoa((h.hoTen.trim().split(/\s+/).pop() || "?")[0].toUpperCase())}</span>
        <div><b>${hoa(h.hoTen)}</b><small>${hoa(h.email)}</small>
          <small>${VAI_TRO[h.vaiTro] || ""}${h.maHS ? " · Mã HS " + hoa(h.maHS) : ""}${h.lop ? " · Lớp " + hoa(h.lop) : ""}</small></div>
      </div>
      ${h.vaiTro === "qtv" ? `<a class="the-luyen" href="#/quan-tri"><span class="o-icon">🛠️</span><span class="text"><b>Quản trị tài khoản</b><small>Thêm giáo viên, học sinh, lớp; khóa, đặt lại mật khẩu</small></span><span class="chevron">›</span></a>` : ""}
      <a class="the-luyen the-kho" href="#/doi-mat-khau"><span class="o-icon">🔑</span><span class="text"><b>Đổi mật khẩu</b><small>Nên đổi định kì</small></span><span class="chevron">›</span></a>
      <button class="btn full phu" onclick="dangXuat()">Đăng xuất</button>`;
  },
};
async function dangNhap() {
  const email = document.getElementById("tk-email").value.trim(), mk = document.getElementById("tk-mk").value;
  const loi = document.getElementById("tk-loi");
  if (!email || !mk) { loi.textContent = "Nhập email và mật khẩu."; return; }
  loi.textContent = "Đang đăng nhập…";
  try { await fbAuth.signInWithEmailAndPassword(email, mk); }
  catch (e) { loi.textContent = loiTk(e); }
}
async function quenMk() {
  const email = document.getElementById("tk-email").value.trim() || prompt("Nhập email tài khoản:");
  if (!email) return;
  try { await fbAuth.sendPasswordResetEmail(email); alert("Nếu email có tài khoản, thư đặt lại mật khẩu đã được gửi. Kiểm tra cả mục Thư rác."); }
  catch (e) { alert(loiTk(e)); }
}
async function thuLaiHoSo() {
  tk.loi = "";
  try { tk.hoSo = await taiHoSo(tk.user); } catch (e) { tk.loi = `${e.code || ""} ${e.message || ""}`.trim(); }
  capNhatNutTk(); if (canDoiMk()) location.hash = "#/doi-mat-khau"; else hienManHinh();
}
function dangXuat() { fbAuth.signOut(); location.hash = "#/tai-khoan"; }

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
  if (tk.hoSo?.maHS && a === tk.hoSo.maHS) { loi.textContent = "Mật khẩu mới phải khác mã học sinh."; return; }
  loi.textContent = "Đang lưu…";
  try {
    await tk.user.updatePassword(a);
    if (tk.hoSo?.doiMatKhau) { await fbDb.collection("nguoiDung").doc(tk.user.uid).update({ doiMatKhau: false }); tk.hoSo.doiMatKhau = false; }
    alert("Đã đổi mật khẩu."); location.hash = "#/tai-khoan";
  } catch (e) { loi.textContent = loiTk(e); }
}

/* ---------- Quản trị (chỉ QTV) ---------- */
const qt = { tab: "nguoi", ds: null, lop: null, loc: "", locLop: "" };
MAN_HINH["/quan-tri"] = {
  tieuDe: "Quản trị",
  manHinhCon: true,
  ve: () => {
    if (tk.hoSo?.vaiTro !== "qtv") return `<div class="trong">Chỉ quản trị viên mới vào được mục này.</div>`;
    const TAB = { nguoi: "Tài khoản", them: "Thêm 1 người", nhap: "Nhập danh sách", lop: "Lớp" };
    return `<div class="chip-hang">${Object.entries(TAB).map(([k, v]) => `<button class="chip-nhanh ${qt.tab === k ? "chon" : ""}" onclick="qt.tab='${k}';hienManHinh()">${v}</button>`).join("")}</div>
      <div id="vung-qt"><div class="trong">Đang tải…</div></div>`;
  },
  sauKhiVe: () => veQuanTri(),
};
async function taiQt(ep) {
  if (ep || !qt.ds) qt.ds = (await fbDb.collection("nguoiDung").get()).docs.map(d => ({ uid: d.id, ...d.data() }));
  if (ep || !qt.lop) qt.lop = (await fbDb.collection("lop").get()).docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => a.ten.localeCompare(b.ten, "vi"));
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
      <p class="ghi-chu">${ds.length} tài khoản</p>
      ${ds.map(u => `<div class="the-trang dong-tk ${u.khoa ? "da-khoa" : ""}">
        <div><b>${hoa(u.hoTen)}</b> <span class="nhan-vt vt-${u.vaiTro}">${VAI_TRO[u.vaiTro]}</span>${u.khoa ? ' <span class="nhan-vt">Đã khóa</span>' : ""}
          <small>${hoa(u.email)}${u.maHS ? " · " + hoa(u.maHS) : ""}${u.lop ? " · " + hoa(u.lop) : ""}${u.doiMatKhau ? " · chưa đổi MK lần đầu" : ""}</small></div>
        ${u.uid === tk.user.uid ? "" : `<div class="nut-hang">
          <button class="btn phu" onclick="qtDatLaiMk('${u.uid}')">Gửi email đặt lại MK</button>
          <button class="btn phu" onclick="qtSuaNguoi('${u.uid}')">Sửa</button>
          <button class="btn phu" onclick="qtKhoa('${u.uid}')">${u.khoa ? "Mở khóa" : "Khóa"}</button></div>`}
      </div>`).join("") || `<div class="trong">Chưa có tài khoản nào.</div>`}`;
  } else if (qt.tab === "them") {
    vung.innerHTML = `<div class="the-trang form-tk">
      <label>Vai trò<select id="them-vt" onchange="document.getElementById('o-ma').hidden=this.value!=='hs'">
        <option value="hs">Học sinh</option><option value="gv">Giáo viên</option><option value="qtv">Quản trị viên</option></select></label>
      <label>Họ và tên<input id="them-ten"></label>
      <label>Email<input type="email" id="them-email" inputmode="email"></label>
      <div id="o-ma"><label>Mã học sinh (mật khẩu đầu)<input id="them-ma"></label>
        <label>Lớp${chonLop("them-lop", "— Chưa xếp lớp —")}</label></div>
      <label>Mật khẩu đầu (giáo viên / QTV; bỏ trống với học sinh)<input id="them-mk"></label>
      <p class="loi-tk" id="tk-loi"></p>
      <button class="btn full" onclick="qtThemMot()">Tạo tài khoản</button></div>`;
  } else if (qt.tab === "nhap") {
    vung.innerHTML = `<div class="the-trang form-tk">
      <p class="ghi-chu">Mở file Excel danh sách lớp, bôi đen 3 cột theo đúng thứ tự <b>Họ tên · Email · Mã HS</b> (không lấy dòng tiêu đề), chép rồi dán vào ô dưới. Mật khẩu đầu của mỗi em = mã HS (từ 6 kí tự).</p>
      <label>Lớp${chonLop("nhap-lop", "— Chưa xếp lớp —")}</label>
      <textarea id="nhap-ds" rows="8" placeholder="Nguyễn Văn An&#9;an.nguyen@truong.edu.vn&#9;2251001"></textarea>
      <button class="btn full" onclick="qtNhapDs()">Tạo tài khoản cho cả danh sách</button>
      <pre class="nhat-ki" id="nhat-ki" hidden></pre></div>`;
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
  const vaiTro = g("them-vt"), hoTen = g("them-ten"), email = g("them-email"), maHS = vaiTro === "hs" ? g("them-ma") : "";
  const mk = vaiTro === "hs" ? maHS : g("them-mk");
  if (!hoTen || !email) { loi.textContent = "Nhập họ tên và email."; return; }
  if (mk.length < 6) { loi.textContent = vaiTro === "hs" ? "Mã HS phải từ 6 kí tự (dùng làm mật khẩu đầu)." : "Mật khẩu đầu phải từ 6 kí tự."; return; }
  loi.textContent = "Đang tạo…";
  try { await taoTaiKhoan({ hoTen, email, vaiTro, maHS, lop: vaiTro === "hs" ? g("them-lop") : "", mk }); loi.textContent = `Đã tạo tài khoản cho ${hoTen}.`; document.getElementById("them-ten").value = document.getElementById("them-email").value = document.getElementById("them-ma").value = ""; }
  catch (e) { loi.textContent = loiTk(e); }
}
async function qtNhapDs() {
  const lop = document.getElementById("nhap-lop").value, ki = document.getElementById("nhat-ki");
  const dong = document.getElementById("nhap-ds").value.split(/\r?\n/).map(d => d.split(/\t|;|,(?=\s*\S+@)|,(?=\s*\w+\s*$)/).map(x => x.trim())).filter(d => d.join("").length);
  if (!dong.length) return alert("Chưa dán danh sách.");
  if (!confirm(`Tạo ${dong.length} tài khoản học sinh${lop ? " cho lớp " + lop : ""}?`)) return;
  ki.hidden = false; ki.textContent = ""; let ok = 0;
  for (const [hoTen, email, maHS] of dong) {
    const ghi = s => { ki.textContent += s + "\n"; ki.scrollTop = ki.scrollHeight; };
    if (!hoTen || !email || !/@/.test(email) || !maHS) { ghi(`✗ ${hoTen || "?"}: thiếu cột (cần Họ tên · Email · Mã HS)`); continue; }
    if (maHS.length < 6) { ghi(`✗ ${hoTen}: mã HS dưới 6 kí tự`); continue; }
    try { await taoTaiKhoan({ hoTen, email, vaiTro: "hs", maHS, lop, mk: maHS }); ok++; ghi(`✓ ${hoTen}`); }
    catch (e) { ghi(`✗ ${hoTen}: ${loiTk(e)}`); }
  }
  ki.textContent += `\nXong: tạo được ${ok}/${dong.length} tài khoản.`;
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
  const vt = prompt("Vai trò (hs / gv / qtv):", u.vaiTro); if (vt === null || !VAI_TRO[vt.trim()]) return;
  const lop = u.vaiTro === "hs" || vt.trim() === "hs" ? prompt("Lớp (gõ đúng tên lớp, bỏ trống nếu chưa xếp):", u.lop || "") : u.lop;
  if (lop === null) return;
  const moi = { hoTen: hoTen.trim(), vaiTro: vt.trim(), lop: (lop || "").trim() };
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
  try { await fbDb.collection("lop").doc(lopId).update({ gv: [...gv] }); l.gv = [...gv]; veQuanTri(); }
  catch (e) { alert(loiTk(e)); }
}

// Nếu người dùng mở thẳng link tới màn tài khoản thì vẽ lại khi script này đã nạp
if (["/tai-khoan", "/doi-mat-khau", "/quan-tri"].includes(location.hash.slice(1).split("?")[0])) hienManHinh();
