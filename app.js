/* =========================================================
   Các màn hình của app.
   Muốn thêm màn hình: thêm một mục vào MAN_HINH, rồi trỏ link tới "#/ten-duong-dan".
   ========================================================= */
const MAN_HINH = {
  "/": {
    tieuDe: "Trang chủ",
    ve: () => `
      <div class="card hero">
        <h3>Xin chào 👋</h3>
        <p>Đây là web chạy như app trên điện thoại. Sửa nội dung trong file <b>app.js</b>.</p>
      </div>
      <h2>Lối tắt</h2>
      <div class="grid">
        <a class="card" href="#/kham-pha" style="color:inherit;text-decoration:none"><div class="big">🔍</div>Khám phá</a>
        <a class="card" href="#/thong-bao" style="color:inherit;text-decoration:none"><div class="big">🔔</div>Thông báo</a>
        <a class="card" href="#/chi-tiet" style="color:inherit;text-decoration:none"><div class="big">📄</div>Trang chi tiết</a>
        <a class="card" href="#/ca-nhan" style="color:inherit;text-decoration:none"><div class="big">👤</div>Cá nhân</a>
      </div>
    `,
  },

  "/kham-pha": {
    tieuDe: "Khám phá",
    ve: () => `
      <h2>Danh mục</h2>
      <div class="list">
        ${["Bài viết", "Hình ảnh", "Video", "Tài liệu"].map((ten, i) => `
          <a href="#/chi-tiet">
            <span class="icon">${["📝", "🖼️", "🎬", "📚"][i]}</span>
            <span class="text">${ten}<small>Bấm để xem chi tiết</small></span>
            <span class="chevron">›</span>
          </a>`).join("")}
      </div>
    `,
  },

  "/thong-bao": {
    tieuDe: "Thông báo",
    ve: () => `
      <div class="list">
        <div class="row"><span class="icon">🎉</span><span class="text">Chào mừng bạn!<small>Vừa xong</small></span></div>
        <div class="row"><span class="icon">📌</span><span class="text">Nhớ cài app ra màn hình chính<small>Hôm nay</small></span></div>
      </div>
    `,
  },

  "/ca-nhan": {
    tieuDe: "Cá nhân",
    ve: () => `
      <div class="card" style="display:flex;align-items:center;gap:14px">
        <div class="icon" style="width:56px;height:56px;border-radius:50%;display:grid;place-items:center;font-size:28px;background:var(--nen)">👤</div>
        <div><strong>Khách</strong><br><small style="color:var(--chu-phu)">Chưa đăng nhập</small></div>
      </div>
      <h2>Cài đặt</h2>
      <div class="list">
        <div class="row"><span class="icon">📱</span><span class="text">Chế độ đang chạy<small>${dangChayNhuApp() ? "Đã cài như app" : "Đang mở trong trình duyệt"}</small></span></div>
        <div class="row"><span class="icon">🌐</span><span class="text">Mạng<small>${navigator.onLine ? "Đang có mạng" : "Đang ngoại tuyến"}</small></span></div>
      </div>
    `,
  },

  /* Màn hình con: có nút "Quay lại" thay vì nằm trên thanh tab */
  "/chi-tiet": {
    tieuDe: "Chi tiết",
    manHinhCon: true,
    ve: () => `
      <div class="card">
        <h3 style="margin-top:0">Trang chi tiết</h3>
        <p>Màn hình con có nút quay lại ở góc trên, giống app thật. Nút "Back" của Android cũng quay lại được.</p>
      </div>
      <button class="btn full" onclick="history.back()">Quay lại</button>
    `,
  },
};

/* ================= Bộ điều hướng (không cần sửa) ================= */
const noiDung = document.getElementById("noi-dung");
const tieuDe = document.getElementById("tieu-de");
const nutQuayLai = document.getElementById("nut-quay-lai");

function hienManHinh() {
  const duong = location.hash.replace(/^#/, "") || "/";
  const mh = MAN_HINH[duong] || MAN_HINH["/"];
  tieuDe.textContent = mh.tieuDe;
  document.title = mh.tieuDe + " · Hóa phân tích";
  noiDung.innerHTML = mh.ve();
  nutQuayLai.hidden = !mh.manHinhCon;
  document.querySelectorAll(".tabbar a").forEach(a =>
    a.classList.toggle("active", a.dataset.tab === duong));
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", hienManHinh);
nutQuayLai.addEventListener("click", () => history.length > 1 ? history.back() : (location.hash = "#/"));
hienManHinh();

/* ================= Chạy như app / chạy offline ================= */
function dangChayNhuApp() {
  return matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
}

// Service worker: lưu sẵn giao diện để mở được cả khi mất mạng
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
}

/* ================= Gợi ý "Cài app" ================= */
const goiY = document.getElementById("goi-y-cai");
const nutCai = document.getElementById("nut-cai");
let suKienCai = null;

function daTatGoiY() {
  try { return localStorage.getItem("da-tat-goi-y-cai") === "1"; } catch { return false; }
}
document.getElementById("nut-dong-goi-y").addEventListener("click", () => {
  goiY.hidden = true;
  try { localStorage.setItem("da-tat-goi-y-cai", "1"); } catch {}
});

// Android / Chrome: trình duyệt báo "có thể cài" → hiện nút Cài
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  suKienCai = e;
  if (!daTatGoiY()) goiY.hidden = false;
});
nutCai.addEventListener("click", async () => {
  if (!suKienCai) return;
  suKienCai.prompt();
  await suKienCai.userChoice;
  suKienCai = null;
  goiY.hidden = true;
});
window.addEventListener("appinstalled", () => { goiY.hidden = true; });

// iPhone / iPad (Safari không có nút cài tự động) → hiện hướng dẫn thủ công
const laIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
if (laIOS && !dangChayNhuApp() && !daTatGoiY()) {
  document.getElementById("huong-dan-cai").innerHTML =
    'Bấm nút <b>Chia sẻ</b> ⬆️ rồi chọn <b>"Thêm vào MH chính"</b>.';
  nutCai.hidden = true;
  goiY.hidden = false;
}
