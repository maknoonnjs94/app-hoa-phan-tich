/* =========================================================
   KHO CÂU HỎI CÓ KHÓA
   Ngân hàng câu hỏi + bài tự luận nằm trong kho.bin (nén + mã hóa AES-GCM).
   Chỉ máy đã nhập "mật khẩu kho" (giáo viên) mới tải và giải kho.bin; học sinh, khách không tải.
   Sau khi giải xong mới nạp các script phía sau (app.js…), để app thấy đủ câu hỏi như trước.
   ========================================================= */
const MUC_DO = ["", "Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao"];
const NGAN_HANG = [], NGAN_HANG_CHO_DUYET = [];
const KHO_KHOA = { mo: false, loi: "" };
const KHOA_LUU = "khoa-kho";   // khóa AES đã suy ra, lưu trên máy giáo viên

async function suyKhoa(matKhau, muoi) {
  const goc = await crypto.subtle.importKey("raw", new TextEncoder().encode(matKhau), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt: muoi, iterations: 250000, hash: "SHA-256" }, goc,
    { name: "AES-GCM", length: 256 }, true, ["decrypt"]);
}
const b64 = u => btoa(String.fromCharCode(...new Uint8Array(u)));
const tuB64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function giaiKho(khoa, t) {
  const ro = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t.slice(16, 28) }, khoa, t.slice(28));
  const chu = await new Response(new Blob([ro]).stream().pipeThrough(new DecompressionStream("gzip"))).text();
  return JSON.parse(chu);
}
async function taiKhoBin() { const r = await fetch("kho.bin", { cache: "no-cache" }); if (!r.ok) throw new Error("Không tải được kho"); return new Uint8Array(await r.arrayBuffer()); }
function napKho(du) {
  NGAN_HANG.push(...du.nganHang); NGAN_HANG_CHO_DUYET.push(...(du.choDuyet || []));
  Object.entries(du.baiTap || {}).forEach(([id, ds]) => { const c = CHUONG.find(x => x.id === id); if (c) c.baiTap = ds; });
  KHO_KHOA.mo = true;
}
// Mở kho bằng khóa đã lưu (nếu máy này từng nhập mật khẩu)
async function moKhoDaLuu() {
  let luu = null; try { luu = localStorage.getItem(KHOA_LUU); } catch {}
  if (!luu) return;
  try {
    const t = await taiKhoBin();
    const { muoi, khoa } = JSON.parse(luu);
    if (muoi !== b64(t.slice(0, 16))) throw new Error("Kho đã đổi mật khẩu");
    napKho(await giaiKho(await crypto.subtle.importKey("raw", tuB64(khoa), "AES-GCM", false, ["decrypt"]), t));
  } catch (e) { KHO_KHOA.loi = e.message || "Không mở được kho"; try { localStorage.removeItem(KHOA_LUU); } catch {} }
}
// Nhập mật khẩu kho (màn giáo viên) → lưu khóa, tải lại app
async function nhapMatKhauKho() {
  const o = document.getElementById("mk-kho"), loi = document.getElementById("loi-kho");
  if (!o.value) return;
  loi.textContent = "Đang mở kho…";
  try {
    const t = await taiKhoBin(), khoa = await suyKhoa(o.value, t.slice(0, 16));
    await giaiKho(khoa, t);   // sai mật khẩu sẽ báo lỗi ở đây
    localStorage.setItem(KHOA_LUU, JSON.stringify({ muoi: b64(t.slice(0, 16)), khoa: b64(await crypto.subtle.exportKey("raw", khoa)) }));
    location.reload();
  } catch (e) { loi.textContent = e.name === "OperationError" ? "Sai mật khẩu kho." : (e.message || "Không mở được kho."); }
}
function khoaKhoTrenMay() {
  if (!confirm("Khóa kho câu hỏi trên máy này? Lần sau phải nhập lại mật khẩu kho.")) return;
  try { localStorage.removeItem(KHOA_LUU); } catch {}
  location.reload();
}
const oMoKho = () => `<div class="the-trang form-tk">
  <h3>🔐 Kho câu hỏi đang khóa</h3>
  <p class="ghi-chu">Nhập <b>mật khẩu kho</b> (quản trị viên cung cấp cho giáo viên). Chỉ cần nhập một lần trên mỗi máy.</p>
  ${KHO_KHOA.loi ? `<p class="loi-tk">${KHO_KHOA.loi}</p>` : ""}
  <label>Mật khẩu kho<input type="password" id="mk-kho" autocomplete="off" onkeydown="if(event.key==='Enter')nhapMatKhauKho()"></label>
  <p class="loi-tk" id="loi-kho"></p>
  <button class="btn full" onclick="nhapMatKhauKho()">Mở kho</button></div>`;

// Mở kho (nếu có khóa) rồi nạp tiếp các script của app theo đúng thứ tự
(async () => {
  await moKhoDaLuu();
  ["phan-dang.js", "anh/nguon.js", "mo-phong.js", "app.js", "tao-de.js",
   "vendor/firebase/firebase-app-compat.js", "vendor/firebase/firebase-auth-compat.js", "vendor/firebase/firebase-firestore-compat.js",
   "tai-khoan.js", "giao-bai.js", "so-diem.js"].forEach(src => {
    const s = document.createElement("script"); s.src = src; s.async = false; document.body.append(s);
  });
})();
