/* =========================================================
   Các màn hình của app.
   Nội dung học tập (lý thuyết, bài tập, bảng tra) nằm ở file noi-dung.js.
   Muốn thêm màn hình: thêm một mục vào MAN_HINH, rồi trỏ link tới "#/ten-duong-dan".
   ========================================================= */
const dongDanhSach = (link, icon, ten, phu) => `
  <a href="${link}">
    <span class="icon">${icon}</span>
    <span class="text">${ten}<small>${phu}</small></span>
    <span class="chevron">›</span>
  </a>`;

const MAN_HINH = {
  "/": {
    tieuDe: "Hóa phân tích",
    ve: () => `
      <div class="card hero">
        <h3>Hóa phân tích 🧪</h3>
        <p>Ôn lý thuyết, luyện bài tập, tính nhanh và tra cứu hằng số — ngay trên điện thoại.</p>
      </div>
      <div class="grid">
        <a class="card o-tat" href="#/ly-thuyet"><div class="big">📘</div>Lý thuyết</a>
        <a class="card o-tat" href="#/bai-tap"><div class="big">✏️</div>Bài tập</a>
        <a class="card o-tat" href="#/cong-cu"><div class="big">🧮</div>Công cụ</a>
        <a class="card o-tat" href="#/tra-cuu"><div class="big">📋</div>Tra cứu</a>
      </div>
      <h2>Công thức hay dùng</h2>
      <div class="card">
        <div class="cong-thuc">pH = −lg[H<sup>+</sup>] &nbsp;;&nbsp; pH + pOH = 14</div>
        <div class="cong-thuc">C<sub>1</sub>·V<sub>1</sub> = C<sub>2</sub>·V<sub>2</sub></div>
        <div class="cong-thuc">pH = pK<sub>a</sub> + lg( C<sub>A⁻</sub> / C<sub>HA</sub> )</div>
        <div class="cong-thuc">E = E° + (0,0592 / n) · lg( [Ox] / [Kh] )</div>
      </div>
    `,
  },

  "/ly-thuyet": {
    tieuDe: "Lý thuyết",
    ve: () => `
      <h2>Các chương</h2>
      <div class="list">
        ${CHUONG.map((c, i) => dongDanhSach(`#/ly-thuyet/${c.id}`, c.icon, `${i + 1}. ${c.ten}`, c.moTa)).join("")}
      </div>
    `,
  },

  "/bai-tap": {
    tieuDe: "Bài tập",
    ve: () => `
      <h2>Chọn chương</h2>
      <div class="list">
        ${CHUONG.map(c => dongDanhSach(`#/bai-tap/${c.id}`, c.icon, c.ten, `${c.baiTap.length} bài`)).join("")}
      </div>
    `,
  },

  "/cong-cu": {
    tieuDe: "Công cụ",
    ve: () => `
      <div class="card cong-cu">
        <h3>Tính pH dung dịch</h3>
        <label>Loại chất
          <select id="ph-loai" onchange="tinhPH()">
            <option value="axit-manh">Axit mạnh (1 nấc)</option>
            <option value="bazo-manh">Bazơ mạnh (1 nấc)</option>
            <option value="axit-yeu">Axit yếu (1 nấc)</option>
            <option value="bazo-yeu">Bazơ yếu (1 nấc)</option>
          </select>
        </label>
        <label>Nồng độ C (mol/L)
          <input id="ph-c" inputmode="decimal" placeholder="ví dụ 0,1" oninput="tinhPH()">
        </label>
        <label id="ph-k-nhan" hidden><span id="ph-k-ten">pKa</span>
          <input id="ph-k" inputmode="decimal" placeholder="ví dụ 4,76" oninput="tinhPH()">
        </label>
        <div class="ket-qua" id="ph-kq">Nhập nồng độ để xem kết quả.</div>
      </div>

      <div class="card cong-cu">
        <h3>Pha loãng: C₁·V₁ = C₂·V₂</h3>
        <p class="ghi-chu">Nhập 3 ô bất kỳ, để trống ô cần tính.</p>
        <div class="hai-cot">
          <label>C₁<input id="pl-c1" inputmode="decimal" oninput="tinhPhaLoang()"></label>
          <label>V₁<input id="pl-v1" inputmode="decimal" oninput="tinhPhaLoang()"></label>
          <label>C₂<input id="pl-c2" inputmode="decimal" oninput="tinhPhaLoang()"></label>
          <label>V₂<input id="pl-v2" inputmode="decimal" oninput="tinhPhaLoang()"></label>
        </div>
        <div class="ket-qua" id="pl-kq">C và V dùng cùng đơn vị ở hai vế.</div>
      </div>

      <div class="card cong-cu">
        <h3>Pha dung dịch từ chất rắn</h3>
        <label>Nồng độ cần pha (mol/L)<input id="cr-c" inputmode="decimal" oninput="tinhChatRan()"></label>
        <label>Thể tích (mL)<input id="cr-v" inputmode="decimal" oninput="tinhChatRan()"></label>
        <label>Khối lượng mol M (g/mol)<input id="cr-m" inputmode="decimal" oninput="tinhChatRan()"></label>
        <div class="ket-qua" id="cr-kq">m = C · V · M</div>
      </div>
    `,
  },

  "/tra-cuu": {
    tieuDe: "Tra cứu",
    ve: () => `
      <h2>Bảng tra</h2>
      <div class="list">
        ${TRA_CUU.map(b => dongDanhSach(`#/tra-cuu/${b.id}`, b.icon, b.ten, `${b.dong.length} dòng`)).join("")}
      </div>
      <p class="ghi-chu">Giá trị ở 25 °C, có thể lệch nhẹ giữa các tài liệu.</p>
    `,
  },
};

/* Màn hình con (có nút "Quay lại"): tự tạo cho từng chương và từng bảng tra */
CHUONG.forEach((c, i) => {
  MAN_HINH[`/ly-thuyet/${c.id}`] = {
    tieuDe: c.ten,
    manHinhCon: true,
    ve: () => `
      <div class="card bai-hoc">${c.lyThuyet}</div>
      <a class="btn full" href="#/bai-tap/${c.id}">Làm bài tập chương này ✏️</a>
    `,
  };
  MAN_HINH[`/bai-tap/${c.id}`] = {
    tieuDe: `Bài tập: ${c.ten}`,
    manHinhCon: true,
    ve: () => `
      ${c.baiTap.map((b, j) => `
        <div class="card bai-tap">
          <div class="so-bai">Bài ${j + 1}</div>
          <p>${b.de}</p>
          <details>
            <summary>Xem đáp án</summary>
            <div class="dap-an">${b.dapAn}</div>
          </details>
        </div>`).join("")}
      <a class="btn full phu" href="#/ly-thuyet/${c.id}">Xem lại lý thuyết 📘</a>
    `,
  };
});
TRA_CUU.forEach(b => {
  MAN_HINH[`/tra-cuu/${b.id}`] = {
    tieuDe: b.ten,
    manHinhCon: true,
    ve: () => `
      <div class="bang-cuon">
        <table class="bang">
          <thead><tr>${b.cot.map(t => `<th>${t}</th>`).join("")}</tr></thead>
          <tbody>${b.dong.map(d => `<tr>${d.map(o => `<td>${o}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    `,
  };
});

/* ================= Công cụ tính ================= */
// Đọc số người dùng nhập (chấp nhận cả dấu phẩy "0,1" và dấu chấm "0.1")
function docSo(id) {
  const chu = document.getElementById(id).value.trim().replace(",", ".");
  if (chu === "") return null;
  const so = Number(chu);
  return Number.isFinite(so) ? so : NaN;
}
// Hiện số kiểu Việt Nam: 3 chữ số có nghĩa, dấu phẩy thập phân
function vietSo(x) {
  if (x !== 0 && (Math.abs(x) < 1e-3 || Math.abs(x) >= 1e5)) {
    const [co, mu] = x.toExponential(2).split("e");
    return `${co.replace(".", ",")}·10<sup>${Number(mu)}</sup>`.replace("-", "−");
  }
  return Number(x.toPrecision(4)).toLocaleString("vi-VN", { maximumFractionDigits: 6 });
}

const KW = 1e-14;
// Giải cân bằng điện tích cho axit 1 nấc (Ka = Infinity nghĩa là axit mạnh), có tính cả nước:
//   [H+] − Kw/[H+] − C·Ka/(Ka + [H+]) = 0   (vế trái tăng dần theo [H+] nên chia đôi được)
function tinhH(C, Ka) {
  const f = h => h - KW / h - (Ka === Infinity ? C : C * Ka / (Ka + h));
  let thap = -16, cao = 2;   // tìm lg[H+] trong khoảng 10^-16 … 10^2
  for (let i = 0; i < 200; i++) {
    const giua = (thap + cao) / 2;
    if (f(10 ** giua) > 0) cao = giua; else thap = giua;
  }
  return 10 ** ((thap + cao) / 2);
}

function tinhPH() {
  const loai = document.getElementById("ph-loai").value;
  const yeu = loai.endsWith("yeu");
  const laBazo = loai.startsWith("bazo");
  document.getElementById("ph-k-nhan").hidden = !yeu;
  document.getElementById("ph-k-ten").textContent = laBazo ? "pKb" : "pKa";
  const kq = document.getElementById("ph-kq");
  const C = docSo("ph-c");
  const pK = yeu ? docSo("ph-k") : 0;
  if (C === null || (yeu && pK === null)) { kq.innerHTML = "Nhập nồng độ để xem kết quả."; return; }
  if (!(C > 0) || Number.isNaN(pK)) { kq.innerHTML = "⚠️ Số nhập vào chưa hợp lệ."; return; }
  const K = yeu ? 10 ** -pK : Infinity;
  // Bazơ: tính [OH-] bằng đúng công thức như axit, rồi đổi sang pH
  const x = tinhH(C, K);
  const pH = laBazo ? 14 + Math.log10(x) : -Math.log10(x);
  const H = 10 ** -pH;
  kq.innerHTML = `pH = <b>${pH.toFixed(2).replace(".", ",")}</b><br>
    [H<sup>+</sup>] = ${vietSo(H)} M &nbsp; [OH<sup>−</sup>] = ${vietSo(KW / H)} M`;
}

function tinhPhaLoang() {
  const ten = ["c1", "v1", "c2", "v2"];
  const gt = ten.map(t => docSo("pl-" + t));
  const kq = document.getElementById("pl-kq");
  const trong = gt.map((g, i) => g === null ? i : -1).filter(i => i >= 0);
  if (trong.length !== 1) { kq.innerHTML = "Nhập đúng 3 ô, để trống 1 ô cần tính."; return; }
  if (gt.some(g => g !== null && !(g > 0))) { kq.innerHTML = "⚠️ Các số phải lớn hơn 0."; return; }
  const [c1, v1, c2, v2] = gt;
  const i = trong[0];
  const ketQua = [c2 * v2 / v1, c2 * v2 / c1, c1 * v1 / v2, c1 * v1 / c2][i];
  const nhan = ["C₁", "V₁", "C₂", "V₂"][i];
  kq.innerHTML = `${nhan} = <b>${vietSo(ketQua)}</b>`;
}

function tinhChatRan() {
  const C = docSo("cr-c"), V = docSo("cr-v"), M = docSo("cr-m");
  const kq = document.getElementById("cr-kq");
  if (C === null || V === null || M === null) { kq.innerHTML = "m = C · V · M"; return; }
  if (!(C > 0 && V > 0 && M > 0)) { kq.innerHTML = "⚠️ Các số phải lớn hơn 0."; return; }
  kq.innerHTML = `Cân <b>${vietSo(C * V / 1000 * M)} g</b> chất rắn, hòa tan và định mức thành ${vietSo(V)} mL.`;
}

/* ================= Bộ điều hướng (không cần sửa) ================= */
const noiDung = document.getElementById("noi-dung");
const tieuDe = document.getElementById("tieu-de");
const nutQuayLai = document.getElementById("nut-quay-lai");

function hienManHinh() {
  const duong = location.hash.replace(/^#/, "") || "/";
  const mh = MAN_HINH[duong] || MAN_HINH["/"];
  tieuDe.textContent = mh.tieuDe;
  document.title = duong === "/" ? "Hóa phân tích" : mh.tieuDe + " · Hóa phân tích";
  noiDung.innerHTML = mh.ve();
  nutQuayLai.hidden = !mh.manHinhCon;
  document.querySelectorAll(".tabbar a").forEach(a =>
    a.classList.toggle("active", a.dataset.tab === duong ||
      (a.dataset.tab !== "/" && duong.startsWith(a.dataset.tab + "/"))));
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
