/* =========================================================
   MÔ PHỎNG TƯƠNG TÁC trong lý thuyết.
   Cách dùng trong noi-dung.js: đặt <div class="mo-phong" data-loai="chuan-do"></div>
   ở chỗ muốn hiện. app.js gọi khoiTaoMoPhong(vùng) sau mỗi lần vẽ màn hình.
   Các loại: chuan-do, uv-vis, edta-3d, keo-tha-aas
   ========================================================= */
const MO_PHONG = {};
function khoiTaoMoPhong(vung) {
  vung.querySelectorAll(".mo-phong[data-loai]").forEach(el => {
    const f = MO_PHONG[el.dataset.loai];
    if (f && !el.dataset.daVe) { el.dataset.daVe = "1"; f(el); }
  });
}
const svgNS = "http://www.w3.org/2000/svg";
const soVN = (x, d = 2) => x.toFixed(d).replace(".", ",");
const kep = (x, a, b) => Math.min(b, Math.max(a, x));
const tronMau = (m1, m2, t) => m1.map((v, i) => Math.round(v + (m2[i] - v) * t));
const rgba = (m, a = 1) => `rgba(${m[0]},${m[1]},${m[2]},${a})`;
// Kéo bằng chuột và cảm ứng: gọi f(x, y) theo toạ độ trong phần tử el (0..1)
function keoTren(el, f) {
  const chay = e => {
    const r = el.getBoundingClientRect();
    f(kep((e.clientX - r.left) / r.width, 0, 1), kep((e.clientY - r.top) / r.height, 0, 1));
  };
  el.addEventListener("pointerdown", e => { el.setPointerCapture(e.pointerId); chay(e); e.preventDefault(); });
  el.addEventListener("pointermove", e => { if (el.hasPointerCapture(e.pointerId)) chay(e); });
}

/* ---------------- Dụng cụ thủy tinh vẽ theo hình thật ---------------- */
let soDinhDanh = 0;
const THUY_TINH_DEFS = id => `<defs>
  <linearGradient id="tt${id}" x1="0" x2="1"><stop offset="0" stop-color="#cbd5e1" stop-opacity=".55"/><stop offset=".18" stop-color="#fff" stop-opacity=".9"/><stop offset=".45" stop-color="#f1f5f9" stop-opacity=".35"/><stop offset=".85" stop-color="#e2e8f0" stop-opacity=".5"/><stop offset="1" stop-color="#94a3b8" stop-opacity=".6"/></linearGradient>
  <linearGradient id="kl${id}" x1="0" x2="1"><stop offset="0" stop-color="#475569"/><stop offset=".4" stop-color="#cbd5e1"/><stop offset="1" stop-color="#475569"/></linearGradient>
  <linearGradient id="bong${id}" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
</defs>`;
// Giá đỡ + buret 50 mL (khóa PTFE) + bình nón Erlenmeyer trên tấm trắng. viewBox 0 0 130 320
function svgBuretBinh(mauBuret = "#bfdbfe") {
  const id = ++soDinhDanh, G = `url(#tt${id})`;
  let vach = "";
  for (let v = 0; v <= 50; v++) {
    const y = 18 + v * 3.6, dai = v % 10 === 0 ? 7 : v % 5 === 0 ? 5 : 3;
    vach += `<line x1="60" x2="${60 + dai}" y1="${y}" y2="${y}" stroke="#334155" stroke-width="${v % 5 ? .5 : .8}"/>`;
    if (v % 10 === 0) vach += `<text x="78" y="${y + 2.5}" class="mp-so-vach">${v}</text>`;
  }
  return `<svg class="mp-bo" viewBox="0 0 130 320" aria-label="Buret trên giá và bình nón">${THUY_TINH_DEFS(id)}
    <rect x="6" y="306" width="118" height="10" rx="3" fill="#334155"/><rect x="14" y="8" width="6" height="298" rx="3" fill="url(#kl${id})"/>
    <rect x="17" y="68" width="44" height="5" rx="2" fill="url(#kl${id})"/><rect x="56" y="63" width="4" height="15" rx="1.5" fill="#475569"/><rect x="74" y="63" width="4" height="15" rx="1.5" fill="#475569"/>
    <rect class="mp-muc-buret" x="61.5" y="18" width="11" height="192" fill="${mauBuret}"/>
    <path class="mp-khum" d="" fill="none" stroke="#1d4ed8" stroke-width="1"/>
    <rect x="60" y="6" width="14" height="206" rx="2" fill="${G}" stroke="#94a3b8" stroke-width="1"/><rect x="58" y="3" width="18" height="4" rx="1.5" fill="${G}" stroke="#94a3b8"/>
    <rect x="62" y="8" width="3" height="200" fill="url(#bong${id})" opacity=".8"/>
    ${vach}
    <rect x="61" y="211" width="12" height="13" rx="2" fill="${G}" stroke="#94a3b8"/>
    <g class="mp-khoa"><rect x="51" y="215.5" width="32" height="5" rx="2.5" fill="#f8fafc" stroke="#64748b"/><rect x="47" y="213.5" width="7" height="9" rx="2" fill="#e2e8f0" stroke="#64748b"/></g>
    <path d="M63 224 L71 224 L68.6 246 L65.4 246 Z" fill="${G}" stroke="#94a3b8"/>
    <circle class="mp-giot" cx="67" cy="250" r="2.4" fill="${mauBuret}" stroke="#60a5fa" stroke-width=".5" opacity="0"/>
    <rect x="22" y="300" width="90" height="6" rx="1.5" fill="#f8fafc" stroke="#cbd5e1"/>
    <path class="mp-dd" d="M40.3 285 L93.7 285 L104 296 Q106 300 101 300 H33 Q28 300 30 296 Z"/>
    <g class="mp-hat"></g>
    <path d="M58 253 V266 L30 296 Q28 300 33 300 H101 Q106 300 104 296 L76 266 V253 Z" fill="${G}" stroke="#94a3b8" stroke-width="1.1"/>
    <rect x="56" y="250" width="22" height="3.5" rx="1.5" fill="${G}" stroke="#94a3b8"/>
    <path d="M38 292 L55 272" stroke="#fff" stroke-width="2" opacity=".7" stroke-linecap="round"/>
  </svg>`;
}
// Đặt mức dung dịch trong buret theo thể tích đã chảy ra (0 – 50 mL)
function datMucBuret(goc, V) {
  const y = 18 + kep(V, 0, 50) * 3.6;
  const r = goc.querySelector(".mp-muc-buret"); r.setAttribute("y", y); r.setAttribute("height", 210 - y);
  goc.querySelector(".mp-khum").setAttribute("d", `M61.5 ${y - 1.4} Q67 ${y + 2} 72.5 ${y - 1.4}`);
}

/* ---------------- 1. Chuẩn độ acid – base ---------------- */
const CHI_THI = {
  "Phenolphtalein": { pK: 9.1, a: [255, 255, 255], b: [236, 72, 153], ten: "không màu → hồng", khoang: [8.2, 10.0] },
  "Metyl đỏ": { pK: 5.1, a: [220, 38, 38], b: [250, 204, 21], ten: "đỏ → vàng", khoang: [4.4, 6.2] },
  "Metyl da cam": { pK: 3.7, a: [220, 38, 38], b: [250, 204, 21], ten: "đỏ → vàng", khoang: [3.1, 4.4] },
  "Bromthymol xanh": { pK: 7.1, a: [234, 179, 8], b: [37, 99, 235], ten: "vàng → xanh lam", khoang: [6.0, 7.6] },
};
const HE_CHUAN_DO = {
  "HCl bằng NaOH": { loai: "acid", Ka: 1e3, ten: "HCl", chuan: "NaOH" },
  "CH₃COOH bằng NaOH": { loai: "acid", Ka: 10 ** -4.75, ten: "CH₃COOH", chuan: "NaOH" },
  "NH₃ bằng HCl": { loai: "base", Ka: 10 ** -9.25, ten: "NH₃", chuan: "HCl" },
};
function phChuanDo(he, V, Va = 25, Ca = 0.1, Cc = 0.1) {
  const Vt = Va + V, C = Ca * Va / Vt, X = Cc * V / Vt, Kw = 1e-14;
  // cân bằng điện tích, giải theo pH bằng chia đôi
  const f = pH => {
    const h = 10 ** -pH;
    return he.loai === "acid"
      ? h + X - Kw / h - C * he.Ka / (he.Ka + h)          // acid HA + NaOH
      : h + C * h / (h + he.Ka) - Kw / h - X;           // base B + HCl (Ka của BH+)
  };
  let lo = 0, hi = 14;
  for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (f(m) > 0) lo = m; else hi = m; }
  return (lo + hi) / 2;
}
MO_PHONG["chuan-do"] = el => {
  const Va = 25, Ve = 25, Vmax = 50;
  let he = HE_CHUAN_DO["CH₃COOH bằng NaOH"], ct = CHI_THI["Phenolphtalein"], V = 0, chay = null;
  el.innerHTML = `
    <div class="mp-dau"><b>🧪 Mô phỏng chuẩn độ</b><span>Kéo trên đồ thị, bấm giọt hoặc mở khóa buret</span></div>
    <div class="mp-chon">
      <select class="mp-he">${Object.keys(HE_CHUAN_DO).map(k => `<option ${k === "CH₃COOH bằng NaOH" ? "selected" : ""}>${k}</option>`).join("")}</select>
      <select class="mp-ct">${Object.keys(CHI_THI).map(k => `<option>${k}</option>`).join("")}</select>
    </div>
    <div class="mp-khung-cd">
      ${svgBuretBinh()}
      <svg class="mp-do-thi" viewBox="0 0 300 200" aria-label="Đường chuẩn độ">
        <rect class="mp-vung-ct" x="30" width="262" y="0" height="0"/>
        <g class="mp-luoi"></g>
        <path class="mp-duong-mo" fill="none"/>
        <path class="mp-duong" fill="none"/>
        <line class="mp-tđ" y1="8" y2="176"/>
        <circle class="mp-diem" r="5"/>
      </svg>
    </div>
    <div class="mp-so"><div><small>V chuẩn</small><b class="mp-v">0,00 mL</b></div><div><small>pH</small><b class="mp-ph">–</b></div><div><small>Vùng</small><b class="mp-vung">–</b></div></div>
    <div class="mp-nut">
      <button data-d="0.05">+1 giọt</button><button data-d="1">+1 mL</button>
      <button class="mp-mo-khoa">▶ Mở khóa</button><button class="mp-lai">↺ Làm lại</button>
    </div>
    <p class="mp-nhan-xet"></p>`;
  const $ = s => el.querySelector(s);
  const X = v => 30 + v / Vmax * 262, Y = p => 176 - p / 14 * 168;
  const luoi = $(".mp-luoi");
  luoi.innerHTML = [0, 2, 4, 6, 8, 10, 12, 14].map(p => `<line x1="30" x2="292" y1="${Y(p)}" y2="${Y(p)}"/><text x="24" y="${Y(p) + 3}">${p}</text>`).join("")
    + [0, 10, 20, 30, 40, 50].map(v => `<text x="${X(v)}" y="192" text-anchor="middle">${v}</text>`).join("")
    + `<text x="292" y="186" text-anchor="end" class="mp-tr">mL</text><text x="34" y="12" class="mp-tr">pH</text>`;
  $(".mp-tđ").setAttribute("x1", X(Ve)); $(".mp-tđ").setAttribute("x2", X(Ve));
  const duong = (den) => { let d = ""; for (let v = 0; v <= den + 1e-9; v += 0.25) d += (d ? "L" : "M") + X(v).toFixed(1) + " " + Y(phChuanDo(he, v)).toFixed(1); return d; };
  function veLai() {
    $(".mp-duong-mo").setAttribute("d", duong(Vmax));
    const [a, b] = ct.khoang; $(".mp-vung-ct").setAttribute("y", Y(b)); $(".mp-vung-ct").setAttribute("height", Y(a) - Y(b));
    capNhat();
  }
  function capNhat() {
    const pH = phChuanDo(he, V);
    $(".mp-duong").setAttribute("d", V > 0 ? duong(V) : "");
    $(".mp-diem").setAttribute("cx", X(V)); $(".mp-diem").setAttribute("cy", Y(pH));
    $(".mp-v").textContent = soVN(V) + " mL"; $(".mp-ph").textContent = soVN(pH);
    $(".mp-vung").textContent = V === 0 ? "Ban đầu" : Math.abs(V - Ve) < 0.03 ? "Tương đương" : V < Ve ? "Trước tđ" : "Sau tđ";
    datMucBuret(el, V);
    const f = 1 / (1 + 10 ** (ct.pK - pH));
    const mau = tronMau(ct.a, ct.b, f), trong = ct === CHI_THI["Phenolphtalein"] ? 0.15 + 0.7 * f : 0.75;
    $(".mp-dd").setAttribute("fill", rgba(mau, trong));
    // pH tại điểm cuối (giữa khoảng đổi màu) → sai số chỉ thị
    const pHtd = phChuanDo(he, Ve), pHc = ct.pK;
    let lo = 0, hi = Vmax, tang = he.loai === "acid";
    for (let i = 0; i < 50; i++) { const m = (lo + hi) / 2; if ((phChuanDo(he, m) < pHc) === tang) lo = m; else hi = m; }
    const Vc = (lo + hi) / 2, ss = (Vc - Ve) / Ve * 100;
    $(".mp-nhan-xet").innerHTML = `pH tương đương = <b>${soVN(pHtd)}</b>. ${Object.keys(CHI_THI).find(k => CHI_THI[k] === ct)} (${ct.ten}) đổi màu ở pH ≈ ${soVN(pHc, 1)} → dừng ở ${soVN(Vc)} mL, sai số chỉ thị <b>${ss >= 0 ? "+" : ""}${soVN(ss, 1)}%</b>. ${Math.abs(ss) < 0.2 ? "✅ Chỉ thị phù hợp." : "⚠️ Không phù hợp: khoảng đổi màu nằm ngoài bước nhảy."}`;
  }
  const dat = v => { V = kep(Math.round(v * 100) / 100, 0, Vmax); capNhat(); };
  const giot = () => { const g = $(".mp-giot"); g.animate([{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(32px)" }], { duration: 350 }); };
  el.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { giot(); dat(V + +b.dataset.d); });
  $(".mp-lai").onclick = () => { dung(); dat(0); };
  const dung = () => { clearInterval(chay); chay = null; $(".mp-mo-khoa").textContent = "▶ Mở khóa"; $(".mp-khoa").classList.remove("mo"); };
  $(".mp-mo-khoa").onclick = () => {
    if (chay) return dung();
    if (V >= Vmax) dat(0);
    $(".mp-mo-khoa").textContent = "⏸ Khóa lại"; $(".mp-khoa").classList.add("mo");
    chay = setInterval(() => { giot(); dat(V + (Math.abs(V - Ve) < 2 ? 0.1 : 0.5)); if (V >= Vmax || !el.isConnected) dung(); }, 120);
  };
  $(".mp-he").onchange = e => { he = HE_CHUAN_DO[e.target.value]; $(".mp-ct").value = he.loai === "base" ? "Metyl đỏ" : e.target.value.startsWith("HCl") ? "Bromthymol xanh" : "Phenolphtalein"; ct = CHI_THI[$(".mp-ct").value]; veLai(); };
  $(".mp-ct").onchange = e => { ct = CHI_THI[e.target.value]; veLai(); };
  keoTren($(".mp-do-thi"), x => dat((x * 300 - 30) / 262 * Vmax));
  veLai();
};

/* ---------------- 2. Máy quang phổ UV – Vis ---------------- */
function mauBuocSong(l) {   // màu gần đúng của ánh sáng bước sóng l (nm)
  const t = [[380, [120, 0, 170]], [440, [40, 60, 255]], [490, [0, 200, 255]], [520, [40, 220, 60]], [570, [230, 230, 0]], [600, [255, 140, 0]], [650, [255, 30, 0]], [700, [200, 0, 0]]];
  for (let i = 1; i < t.length; i++) if (l <= t[i][0]) return tronMau(t[i - 1][1], t[i][1], (l - t[i - 1][0]) / (t[i][0] - t[i - 1][0]));
  return t[t.length - 1][1];
}
MO_PHONG["uv-vis"] = el => {
  const epsMax = 2400, l0 = 525, rong = 45, b = 1.00;             // KMnO₄: hấp thụ mạnh ánh sáng lục ~525 nm
  const eps = l => epsMax * Math.exp(-(((l - l0) / rong) ** 2));
  let lam = 525, C = 2.0e-4;
  const BO_PHAN = {
    den: ["Nguồn sáng", "Đèn wolfram – halogen (vùng khả kiến) và đèn deuteri (vùng UV) phát ánh sáng liên tục nhiều bước sóng."],
    don: ["Bộ đơn sắc", "Cách tử tách ánh sáng thành các bước sóng; khe ra chỉ cho một dải hẹp quanh λ đã chọn đi qua."],
    cuvet: ["Cuvet", "Chứa dung dịch, bề dày b = 1,00 cm. Thạch anh dùng được cả UV; thủy tinh, nhựa chỉ dùng vùng khả kiến."],
    det: ["Detector", "Ống nhân quang hoặc photodiode đổi cường độ ánh sáng P thành tín hiệu điện."],
    xl: ["Bộ xử lí", "Tính T = P/P₀ và A = −lg T, hiển thị kết quả."],
  };
  el.innerHTML = `
    <div class="mp-dau"><b>🌈 Máy quang phổ UV – Vis</b><span>Chạm vào từng bộ phận để xem chức năng</span></div>
    <svg class="mp-may" viewBox="0 0 340 130">
      <defs><filter id="mpMo"><feGaussianBlur stdDeviation="2"/></filter></defs>
      <line class="mp-tia-trang" x1="40" y1="65" x2="118" y2="65"/>
      <line class="mp-tia-mau" x1="150" y1="65" x2="205" y2="65"/>
      <line class="mp-tia-ra" x1="235" y1="65" x2="272" y2="65"/>
      <g class="mp-bp" data-bp="den"><circle cx="28" cy="65" r="14" fill="#fde68a"/><circle cx="28" cy="65" r="14" fill="#fbbf24" filter="url(#mpMo)" class="mp-sang"/><text x="28" y="100">Đèn</text></g>
      <g class="mp-bp" data-bp="don"><rect x="112" y="40" width="44" height="50" rx="6" class="mp-hop"/><path d="M122 80 L134 48 L146 80 Z" fill="#c7d2fe" stroke="#6366f1"/><text x="134" y="104">Đơn sắc</text></g>
      <g class="mp-bp" data-bp="cuvet"><rect x="206" y="40" width="28" height="50" rx="3" class="mp-thuy-tinh"/><rect class="mp-dd-uv" x="208" y="52" width="24" height="36" rx="2"/><text x="220" y="104">Cuvet</text></g>
      <g class="mp-bp" data-bp="det"><rect x="272" y="48" width="16" height="34" rx="3" fill="#475569"/><rect x="272" y="56" width="5" height="18" fill="#22d3ee"/><text x="280" y="100">Detector</text></g>
      <g class="mp-bp" data-bp="xl"><rect x="296" y="42" width="40" height="46" rx="5" class="mp-hop"/><text class="mp-man" x="316" y="70" text-anchor="middle">0,00</text><text x="316" y="104">Xử lí</text></g>
    </svg>
    <div class="mp-giai-thich">Chạm vào một bộ phận của máy.</div>
    <label class="mp-truot">λ = <b class="mp-lam">525 nm</b><input type="range" class="mp-r-lam" min="400" max="700" value="525"></label>
    <label class="mp-truot">C = <b class="mp-c">2,0·10⁻⁴ M</b><input type="range" class="mp-r-c" min="0" max="50" value="20"></label>
    <div class="mp-so"><div><small>ε ở λ này</small><b class="mp-eps">–</b></div><div><small>%T</small><b class="mp-t">–</b></div><div><small>A = εbC</small><b class="mp-a">–</b></div></div>
    <div class="mp-hai-do-thi">
      <svg class="mp-pho" viewBox="0 0 150 110"><text x="75" y="10" text-anchor="middle" class="mp-tr">Phổ hấp thụ (A theo λ)</text><path class="mp-duong" fill="none"/><line class="mp-vach-lam" y1="14" y2="96"/><text x="8" y="106" class="mp-tr">400</text><text x="142" y="106" text-anchor="end" class="mp-tr">700 nm</text></svg>
      <svg class="mp-beer" viewBox="0 0 150 110"><text x="75" y="10" text-anchor="middle" class="mp-tr">Định luật Beer (A theo C)</text><path class="mp-duong-mo" fill="none"/><circle class="mp-diem" r="4"/><text x="8" y="106" class="mp-tr">0</text><text x="142" y="106" text-anchor="end" class="mp-tr">5·10⁻⁴ M</text></svg>
    </div>
    <p class="mp-nhan-xet">Dung dịch KMnO₄ màu tím vì hấp thụ mạnh ánh sáng lục (λ<sub>max</sub> ≈ 525 nm) — màu tím là màu phụ của màu lục.</p>`;
  const $ = s => el.querySelector(s);
  el.querySelectorAll(".mp-bp").forEach(g => g.onclick = () => {
    el.querySelectorAll(".mp-bp").forEach(x => x.classList.toggle("chon", x === g));
    const [t, m] = BO_PHAN[g.dataset.bp]; $(".mp-giai-thich").innerHTML = `<b>${t}.</b> ${m}`;
  });
  const Amax = epsMax * b * 5e-4;
  const Xp = l => 8 + (l - 400) / 300 * 134, Yp = A => 96 - A / Amax * 80;
  function capNhat() {
    const e = eps(lam), A = e * b * C, T = 10 ** -A, mau = mauBuocSong(lam);
    $(".mp-lam").textContent = lam + " nm"; $(".mp-c").innerHTML = C ? `${soVN(C * 1e4, 1)}·10⁻⁴ M` : "0 (mẫu trắng)";
    $(".mp-eps").textContent = Math.round(e).toLocaleString("vi-VN"); $(".mp-t").textContent = soVN(T * 100, 1) + "%"; $(".mp-a").textContent = soVN(A, 3);
    $(".mp-man").textContent = soVN(A, 2);
    $(".mp-tia-mau").style.stroke = rgba(mau); $(".mp-tia-ra").style.stroke = rgba(mau, Math.max(T, 0.04));
    $(".mp-dd-uv").setAttribute("fill", `rgba(147,51,234,${kep(C / 5e-4 * 0.95, 0.02, 0.95)})`);
    let d = ""; for (let l = 400; l <= 700; l += 5) d += (d ? "L" : "M") + Xp(l).toFixed(1) + " " + Yp(eps(l) * b * C).toFixed(1);
    $(".mp-pho .mp-duong").setAttribute("d", d);
    $(".mp-vach-lam").setAttribute("x1", Xp(lam)); $(".mp-vach-lam").setAttribute("x2", Xp(lam)); $(".mp-vach-lam").style.stroke = rgba(mau);
    const Ab = C2 => 96 - (e * b * C2) / Amax * 80;
    $(".mp-beer .mp-duong-mo").setAttribute("d", `M8 96 L142 ${Ab(5e-4).toFixed(1)}`);
    $(".mp-beer .mp-diem").setAttribute("cx", 8 + C / 5e-4 * 134); $(".mp-beer .mp-diem").setAttribute("cy", Ab(C));
  }
  $(".mp-r-lam").oninput = e => { lam = +e.target.value; capNhat(); };
  $(".mp-r-c").oninput = e => { C = e.target.value * 1e-5; capNhat(); };
  capNhat();
};

/* ---------------- 3. Phức kim loại – EDTA 3D ---------------- */
MO_PHONG["edta-3d"] = el => {
  // Toạ độ gần đúng của phức bát diện M–EDTA: M ở tâm; 2 N ở vị trí cis (+x, +y), 4 O ở các đỉnh còn lại
  const A = [["M", 0, 0, 0], ["N", 2, 0, 0], ["N", 0, 2, 0], ["O", 0, 0, 2], ["O", 0, -2, 0], ["O", 0, 0, -2], ["O", -2, 0, 0]];
  const LK = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6]];
  const them = (t, v) => { A.push([t, ...v]); return A.length - 1; };
  const cong = (u, v, a = 1, b = 1) => u.map((x, i) => a * x + b * v[i]);
  const don = v => { const l = Math.hypot(...v) || 1; return v.map(x => x / l); };
  const toaDo = i => A[i].slice(1);
  const cA = them("C", [2.3, 1.2, 0.6]), cB = them("C", [1.2, 2.3, -0.6]);        // cầu ethylen N–CH₂–CH₂–N
  LK.push([1, cA], [cA, cB], [cB, 2]);
  // 4 nhánh glycinat N–CH₂–C(=O)–O, mỗi nhánh khép một vòng chelate 5 cạnh với M
  [[1, 3], [1, 4], [2, 5], [2, 6]].forEach(([n, o]) => {
    const p = toaDo(n), q = toaDo(o), u = don(cong(p, q));
    const ch2 = them("C", cong(cong(p, q, 0.72, 0.28), u, 1, 0.95));
    const co = them("C", cong(cong(p, q, 0.28, 0.72), u, 1, 0.95));
    const od = them("O", cong(toaDo(co), u, 1, 1.15));
    LK.push([n, ch2], [ch2, co], [co, o], [co, od]);
  });
  const MAU = { M: ["#f59e0b", 17], N: ["#3b82f6", 11], O: ["#ef4444", 11], C: ["#64748b", 9] };
  el.innerHTML = `
    <div class="mp-dau"><b>🧊 Phức kim loại – EDTA (3D)</b><span>Kéo để xoay · chạm hai lần để dừng/chạy</span></div>
    <svg class="mp-3d" viewBox="-110 -110 220 220"></svg>
    <div class="mp-chu-giai"><span><i style="background:#f59e0b"></i>Ion kim loại M</span><span><i style="background:#3b82f6"></i>N</span><span><i style="background:#ef4444"></i>O</span><span><i style="background:#64748b"></i>C</span></div>
    <p class="mp-nhan-xet">EDTA "ôm" ion kim loại bằng <b>6 nguyên tử cho</b> (2 N, 4 O) xếp thành bát diện, tạo 5 vòng chelate 5 cạnh → phức 1 : 1 rất bền.</p>`;
  const svg = el.querySelector(".mp-3d");
  let ax = -0.5, ay = 0.6, tu = true, cham = 0;
  function ve() {
    const ca = Math.cos(ax), sa = Math.sin(ax), cb = Math.cos(ay), sb = Math.sin(ay);
    const P = A.map(([t, x, y, z]) => { const x1 = x * cb + z * sb, z1 = -x * sb + z * cb, y1 = y * ca - z1 * sa, z2 = y * sa + z1 * ca; const k = 25 * 7 / (7 + z2 * 0.6); return { t, X: x1 * k, Y: -y1 * k, Z: z2, k }; });
    const ds = [
      ...LK.map(([i, j]) => ({ z: (P[i].Z + P[j].Z) / 2 - 0.01, s: `<line x1="${P[i].X.toFixed(1)}" y1="${P[i].Y.toFixed(1)}" x2="${P[j].X.toFixed(1)}" y2="${P[j].Y.toFixed(1)}" class="${i === 0 ? "mp-lk-pt" : "mp-lk"}"/>` })),
      ...P.map(p => ({ z: p.Z, s: `<circle cx="${p.X.toFixed(1)}" cy="${p.Y.toFixed(1)}" r="${(MAU[p.t][1] * p.k / 25).toFixed(1)}" fill="url(#g${p.t})"/>${p.t === "M" ? `<text x="${p.X.toFixed(1)}" y="${(p.Y + 4).toFixed(1)}" text-anchor="middle" class="mp-chu-m">M</text>` : ""}` })),
    ].sort((a, b) => b.z - a.z);
    svg.innerHTML = `<defs>${Object.entries(MAU).map(([t, [c]]) => `<radialGradient id="g${t}" cx="35%" cy="30%"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="${c}"/><stop offset="1" stop-color="${c}" stop-opacity=".85"/></radialGradient>`).join("")}</defs>` + ds.map(d => d.s).join("");
  }
  let cu = null;
  svg.addEventListener("pointerdown", e => { svg.setPointerCapture(e.pointerId); cu = [e.clientX, e.clientY]; tu = false; if (Date.now() - cham < 300) tu = true; cham = Date.now(); });
  svg.addEventListener("pointermove", e => { if (!cu) return; ay += (e.clientX - cu[0]) * 0.012; ax += (e.clientY - cu[1]) * 0.012; cu = [e.clientX, e.clientY]; ve(); });
  svg.addEventListener("pointerup", () => { cu = null; });
  const vong = () => { if (!el.isConnected) return; if (tu && !cu) { ay += 0.012; ve(); } requestAnimationFrame(vong); };
  ve(); requestAnimationFrame(vong);
};

/* ---------------- 4. Kéo thả: sơ đồ máy AAS ---------------- */
function keoThaSoDo(el, { tieuDe, moTa, o, nhieu, goiY, xong, giaiThichSai }) {
  const the = [...o, ...nhieu].sort(() => Math.random() - 0.5);
  el.innerHTML = `
    <div class="mp-dau"><b>${tieuDe}</b><span>${moTa}</span></div>
    <div class="mp-so-do">${o.map(([k], i) => `<div class="mp-o" data-k="${k}"><span>${i + 1}</span></div>${i < o.length - 1 ? '<div class="mp-mui">→</div>' : ""}`).join("")}</div>
    <div class="mp-kho-nhan">${the.map(([k, t]) => `<div class="mp-nhan" data-k="${k}">${t}</div>`).join("")}</div>
    <p class="mp-nhan-xet">${goiY}</p>`;
  const nx = el.querySelector(".mp-nhan-xet");
  el.querySelectorAll(".mp-nhan").forEach(n => {
    let bong = null, dx = 0, dy = 0;
    n.addEventListener("pointerdown", e => {
      if (n.classList.contains("dung")) return;
      const r = n.getBoundingClientRect(); dx = e.clientX - r.left; dy = e.clientY - r.top;
      bong = n.cloneNode(true); bong.classList.add("mp-bong"); bong.style.width = r.width + "px"; document.body.append(bong);
      n.classList.add("dang-keo"); n.setPointerCapture(e.pointerId); di(e); e.preventDefault();
    });
    const di = e => { if (bong) { bong.style.left = e.clientX - dx + "px"; bong.style.top = e.clientY - dy + "px"; } };
    n.addEventListener("pointermove", di);
    n.addEventListener("pointerup", e => {
      if (!bong) return; bong.remove(); bong = null; n.classList.remove("dang-keo");
      const oo = [...el.querySelectorAll(".mp-o")].find(x => { const r = x.getBoundingClientRect(); return e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom; });
      if (!oo) return;
      if (oo.dataset.k === n.dataset.k && !oo.classList.contains("dung")) {
        oo.classList.add("dung"); oo.innerHTML = `<b>${n.textContent}</b>`; n.classList.add("dung");
        const con = el.querySelectorAll(".mp-o:not(.dung)").length;
        nx.innerHTML = con ? `✅ Đúng! Còn ${con} ô.` : "🎉 Hoàn thành! " + xong;
        if (!con) el.querySelector(".mp-so-do").classList.add("xong");
      } else {
        oo.classList.add("sai"); setTimeout(() => oo.classList.remove("sai"), 500);
        nx.innerHTML = giaiThichSai[n.dataset.k] || "❌ Chưa đúng vị trí, thử lại.";
      }
    });
  });
}
MO_PHONG["keo-tha-aas"] = el => keoThaSoDo(el, {
  tieuDe: "🧩 Lắp ráp máy AAS", moTa: "Kéo từng nhãn vào đúng ô trên sơ đồ",
  o: [["den", "Đèn catot rỗng"], ["nt", "Bộ nguyên tử hóa (ngọn lửa)"], ["ds", "Bộ đơn sắc"], ["dt", "Detector"]],
  nhieu: [["x", "Cuvet thạch anh"], ["y", "Đèn deuteri"]],
  goiY: "Gợi ý: ánh sáng đi từ nguồn, qua đám nguyên tử tự do, rồi mới đến bộ đơn sắc và detector.",
  xong: "Đèn catot rỗng phát vạch đặc trưng → nguyên tử tự do trong ngọn lửa hấp thụ → bộ đơn sắc tách vạch cần đo → detector ghi cường độ.",
  giaiThichSai: { x: "❌ AAS không dùng cuvet: mẫu được nguyên tử hóa trong ngọn lửa hoặc lò graphit.", y: "❌ Đèn deuteri là nguồn liên tục của máy UV – Vis (trong AAS chỉ dùng để hiệu chỉnh nền)." },
});
MO_PHONG["keo-tha-hplc"] = el => keoThaSoDo(el, {
  tieuDe: "🧩 Lắp ráp hệ HPLC", moTa: "Kéo từng bộ phận vào đúng vị trí theo đường đi của pha động",
  o: [["dm", "Bình dung môi"], ["bom", "Bơm cao áp"], ["tiem", "Bộ tiêm mẫu"], ["cot", "Cột C18"], ["dt", "Detector UV"]],
  nhieu: [["k", "Bình khí mang He"], ["l", "Lò cột GC"]],
  goiY: "Pha động phải được bơm tạo áp suất trước khi mẫu được tiêm vào dòng.",
  xong: "Dung môi → bơm cao áp → tiêm mẫu vào dòng pha động → cột tách → detector ghi sắc đồ.",
  giaiThichSai: { k: "❌ Khí mang là pha động của GC; HPLC dùng pha động lỏng.", l: "❌ Lò cột dùng trong GC (điều khiển nhiệt độ cột); HPLC điều khiển tách chủ yếu bằng thành phần pha động." },
});

/* ---------------- Khung đồ thị dùng chung ---------------- */
// Tạo SVG đồ thị: trả về {svg, X, Y} với trục x [x0,x1], y [y0,y1]
function doThi(el, { x0, x1, y0, y1, nhanX, nhanY, vachX, vachY, rong = 300, cao = 190 }) {
  const L = 32, R = rong - 8, T = 10, B = cao - 22;
  const X = x => L + (x - x0) / (x1 - x0) * (R - L), Y = y => B - (y - y0) / (y1 - y0) * (B - T);
  el.setAttribute("viewBox", `0 0 ${rong} ${cao}`);
  el.innerHTML = `<g class="mp-luoi">${vachY.map(v => `<line x1="${L}" x2="${R}" y1="${Y(v)}" y2="${Y(v)}"/><text x="${L - 4}" y="${Y(v) + 3}" text-anchor="end">${String(v).replace(".", ",")}</text>`).join("")}
    ${vachX.map(v => `<text x="${X(v)}" y="${B + 12}" text-anchor="middle">${String(v).replace(".", ",")}</text>`).join("")}
    <text x="${R}" y="${cao - 1}" text-anchor="end" class="mp-tr">${nhanX}</text><text x="${L + 3}" y="${T + 6}" class="mp-tr">${nhanY}</text></g>`;
  return { X, Y, L, R, T, B };
}
const duongSVG = (pts, X, Y) => pts.map((p, i) => (i ? "L" : "M") + X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1)).join("");
const phanTu = (tag, attrs, cha) => { const e = document.createElementNS(svgNS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); cha.append(e); return e; };

/* ---------------- 5. Giản đồ phân bố theo pH (kéo pH) ---------------- */
const HE_PHAN_BO = {
  "Acid acetic": { pK: [4.75], dang: ["CH₃COOH", "CH₃COO⁻"] },
  "Acid carbonic": { pK: [6.38, 10.32], dang: ["H₂CO₃", "HCO₃⁻", "CO₃²⁻"] },
  "Acid phosphoric": { pK: [2.12, 7.21, 12.32], dang: ["H₃PO₄", "H₂PO₄⁻", "HPO₄²⁻", "PO₄³⁻"] },
  "Acid oxalic": { pK: [1.19, 4.19], dang: ["H₂C₂O₄", "HC₂O₄⁻", "C₂O₄²⁻"] },
};
const MAU_DANG = ["#6366f1", "#10b981", "#f59e0b", "#ef4444"];
function alphaDang(pK, pH) {
  const h = 10 ** -pH, K = pK.map(p => 10 ** -p), n = K.length;
  const t = []; let tich = 1;
  for (let i = 0; i <= n; i++) { t.push(h ** (n - i) * tich); tich *= K[i] ?? 1; }
  const D = t.reduce((a, b) => a + b); return t.map(x => x / D);
}
MO_PHONG["phan-bo"] = el => {
  let he = HE_PHAN_BO["Acid phosphoric"], pH = 7;
  el.innerHTML = `
    <div class="mp-dau"><b>📊 Dạng tồn tại theo pH</b><span>Kéo ngang trên đồ thị để đổi pH</span></div>
    <div class="mp-chon"><select>${Object.keys(HE_PHAN_BO).map(k => `<option ${k === "Acid phosphoric" ? "selected" : ""}>${k}</option>`).join("")}</select></div>
    <svg class="mp-do-thi"></svg>
    <div class="mp-cot-dang"></div>
    <p class="mp-nhan-xet"></p>`;
  const svg = el.querySelector("svg"), $ = s => el.querySelector(s);
  function ve() {
    const { X, Y } = doThi(svg, { x0: 0, x1: 14, y0: 0, y1: 100, nhanX: "pH", nhanY: "%", vachX: [0, 2, 4, 6, 8, 10, 12, 14], vachY: [0, 25, 50, 75, 100] });
    he.dang.forEach((_, k) => { const pts = []; for (let p = 0; p <= 14.001; p += 0.1) pts.push([p, alphaDang(he.pK, p)[k] * 100]); phanTu("path", { d: duongSVG(pts, X, Y), fill: "none", stroke: MAU_DANG[k], "stroke-width": 2.4 }, svg); });
    he.pK.forEach(p => phanTu("line", { x1: X(p), x2: X(p), y1: Y(0), y2: Y(100), class: "mp-tđ" }, svg));
    const vach = phanTu("line", { y1: Y(0), y2: Y(100), stroke: "var(--chu)", "stroke-width": 1.5 }, svg);
    const nhan = phanTu("text", { y: 20, "text-anchor": "middle", class: "mp-nhan-ph" }, svg);
    const capNhat = () => {
      vach.setAttribute("x1", X(pH)); vach.setAttribute("x2", X(pH)); nhan.setAttribute("x", kep(X(pH), 40, 270)); nhan.textContent = "pH " + soVN(pH, 1);
      const a = alphaDang(he.pK, pH), iMax = a.indexOf(Math.max(...a));
      $(".mp-cot-dang").innerHTML = he.dang.map((d, k) => `<div><span style="color:${MAU_DANG[k]}">${d}</span><i><b style="width:${(a[k] * 100).toFixed(1)}%;background:${MAU_DANG[k]}"></b></i><small>${soVN(a[k] * 100, 1)}%</small></div>`).join("");
      $(".mp-nhan-xet").innerHTML = `Dạng chủ yếu: <b>${he.dang[iMax]}</b>. pK<sub>a</sub> = ${he.pK.map(p => soVN(p)).join(" ; ")} (đường đứt): tại pH = pK<sub>a</sub> hai dạng kề nhau bằng nhau, mỗi dạng 50%.`;
    };
    keoTren(svg, x => { pH = kep(Math.round(((x * 300 - 32) / 260 * 14) * 10) / 10, 0, 14); capNhat(); });
    capNhat();
  }
  $("select").onchange = e => { he = HE_PHAN_BO[e.target.value]; ve(); };
  ve();
};

/* ---------------- 6. Le Chatelier: Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺ ---------------- */
MO_PHONG["le-chatelier"] = el => {
  const K = 140;                                   // hằng số cân bằng gần đúng
  let Fe = 2e-3, SCN = 2e-3, x = 0, dang = null;    // tổng nồng độ; x = [FeSCN²⁺]
  const canBang = () => { const a = K, b = -(K * (Fe + SCN) + 1), c = K * Fe * SCN; return (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a); };
  x = canBang();
  el.innerHTML = `
    <div class="mp-dau"><b>⚖️ Nguyên lí Le Chatelier</b><span>Fe³⁺ (vàng nhạt) + SCN⁻ ⇌ FeSCN²⁺ (đỏ máu), K = 140</span></div>
    <div class="mp-le">
      <svg class="mp-coc" viewBox="0 0 100 120"><path d="M15 10 h70 v95 q0 8 -8 8 h-54 q-8 0 -8-8z" class="mp-thuy-tinh"/><path class="mp-dd" d="M17 40 h66 v64 q0 7 -7 7 h-52 q-7 0 -7-7z"/></svg>
      <div class="mp-cot-dang mp-cot-le"></div>
    </div>
    <div class="mp-so"><div><small>Q</small><b class="mp-q">–</b></div><div><small>K</small><b>140</b></div><div><small>Chiều chuyển dịch</small><b class="mp-chieu">Cân bằng</b></div></div>
    <div class="mp-nut mp-nut-le"><button data-l="fe">+ Fe³⁺</button><button data-l="scn">+ SCN⁻</button><button data-l="ag">+ Ag⁺ (lấy SCN⁻)</button><button data-l="loang">Pha loãng ×2</button></div>
    <p class="mp-nhan-xet">Bấm một tác động rồi quan sát: Q thay đổi ngay, sau đó hệ tự chuyển dịch về Q = K.</p>`;
  const $ = s => el.querySelector(s);
  function hien(xh) {
    const f = Fe - xh, s = SCN - xh, Q = xh / (f * s);
    $(".mp-q").textContent = Q.toFixed(0);
    $(".mp-dd").setAttribute("fill", `rgba(${Math.round(250 - 60 * Math.min(1, xh / 3e-3))},${Math.round(210 - 190 * Math.min(1, xh / 1.5e-3))},${Math.round(80 - 60 * Math.min(1, xh / 1.5e-3))},${0.35 + 0.6 * Math.min(1, xh / 2e-3)})`);
    const max = Math.max(f, s, xh, 1e-4) * 1.1;
    $(".mp-cot-le").innerHTML = [["Fe³⁺", f, "#eab308"], ["SCN⁻", s, "#94a3b8"], ["FeSCN²⁺", xh, "#dc2626"]].map(([t, c, m]) => `<div><span>${t}</span><i><b style="width:${c / max * 100}%;background:${m}"></b></i><small>${(c * 1e3).toFixed(2).replace(".", ",")} mM</small></div>`).join("");
    return Q;
  }
  function tacDong(l) {
    cancelAnimationFrame(dang);
    if (l === "fe") Fe += 2e-3; if (l === "scn") SCN += 2e-3;
    if (l === "ag") { const bot = Math.min(1e-3, SCN - x - 1e-5); SCN -= bot; }
    if (l === "loang") { Fe /= 2; SCN /= 2; x /= 2; }
    const Q = hien(x), dich = Q < K ? "→ Thuận" : Q > K ? "← Nghịch" : "Cân bằng";
    $(".mp-chieu").textContent = dich;
    $(".mp-nhan-xet").innerHTML = { fe: "Thêm Fe³⁺: Q giảm dưới K → cân bằng chuyển dịch thuận, màu đỏ đậm lên.", scn: "Thêm SCN⁻: Q < K → chuyển dịch thuận, tạo thêm FeSCN²⁺.", ag: "Ag⁺ kết tủa AgSCN, lấy bớt SCN⁻: Q > K → chuyển dịch nghịch, màu đỏ nhạt đi.", loang: "Pha loãng: cả tử và mẫu giảm, nhưng Q = [FeSCN²⁺]/([Fe³⁺][SCN⁻]) tăng gấp đôi → chuyển dịch nghịch (về phía nhiều tiểu phân hơn)." }[l];
    const dau = x, cuoi = canBang(), t0 = performance.now();
    const buoc = t => { const k = Math.min(1, (t - t0) / 1400); x = dau + (cuoi - dau) * (1 - (1 - k) ** 3); hien(x); if (k < 1 && el.isConnected) dang = requestAnimationFrame(buoc); else $(".mp-chieu").textContent = "Cân bằng (Q = K)"; };
    setTimeout(() => { dang = requestAnimationFrame(buoc); }, 500);
  }
  el.querySelectorAll("[data-l]").forEach(b => b.onclick = () => tacDong(b.dataset.l));
  hien(x);
};

/* ---------------- 7. Chuẩn độ kết tủa Mohr ---------------- */
MO_PHONG["mohr"] = el => {
  const Va = 25, C = 0.0500, Cag = 0.0500, Ve = 25, Vmax = 40, Ksp = 1.8e-10, KspCr = 1.1e-12, Cr0 = 5e-3;
  let V = 0, chay = null;
  const tinh = v => { const Vt = Va + v, d = (C * Va - Cag * v) / Vt; const ag = (-d + Math.sqrt(d * d + 4 * Ksp)) / 2; const cr = Cr0 * Va / Vt; return { ag, pAg: -Math.log10(ag), do: ag * ag * cr > KspCr, ket: Math.min(v, Ve) / Ve }; };
  el.innerHTML = `
    <div class="mp-dau"><b>🧂 Chuẩn độ Mohr</b><span>25,00 mL Cl⁻ 0,0500 M + K₂CrO₄, chuẩn bằng AgNO₃ 0,0500 M</span></div>
    <div class="mp-khung-cd">
      ${svgBuretBinh("#f1f5f9")}
      <svg class="mp-do-thi"></svg>
    </div>
    <div class="mp-so"><div><small>V AgNO₃</small><b class="mp-v">0,00 mL</b></div><div><small>pAg</small><b class="mp-ph">–</b></div><div><small>Quan sát</small><b class="mp-vung">–</b></div></div>
    <div class="mp-nut"><button data-d="0.05">+1 giọt</button><button data-d="1">+1 mL</button><button class="mp-mo-khoa">▶ Mở khóa</button><button class="mp-lai">↺ Làm lại</button></div>
    <p class="mp-nhan-xet">AgCl (trắng) kết tủa trước vì cần [Ag⁺] rất nhỏ. Khi Cl⁻ gần hết, [Ag⁺] tăng vọt, Ag₂CrO₄ đỏ gạch xuất hiện: đó là điểm cuối.</p>`;
  const $ = s => el.querySelector(s), svg = $(".mp-do-thi");
  const { X, Y } = doThi(svg, { x0: 0, x1: Vmax, y0: 0, y1: 10, nhanX: "mL", nhanY: "pAg", vachX: [0, 10, 20, 30, 40], vachY: [0, 2, 4, 6, 8, 10] });
  const pts = []; for (let v = 0; v <= Vmax; v += 0.2) pts.push([v, tinh(v).pAg]);
  phanTu("path", { d: duongSVG(pts, X, Y), class: "mp-duong-mo", fill: "none" }, svg);
  phanTu("line", { x1: X(Ve), x2: X(Ve), y1: Y(0), y2: Y(10), class: "mp-tđ" }, svg);
  const duong = phanTu("path", { class: "mp-duong", fill: "none" }, svg), diem = phanTu("circle", { r: 5, class: "mp-diem" }, svg);
  const hat = $(".mp-hat"); hat.innerHTML = Array.from({ length: 40 }, (_, i) => `<circle cx="${38 + (i * 37) % 58}" cy="${288 + (i * 13) % 10}" r="${1.1 + (i % 3) * 0.5}" fill="#f8fafc" opacity="0"/>`).join("");
  function capNhat() {
    const r = tinh(V);
    duong.setAttribute("d", V > 0 ? duongSVG(pts.filter(p => p[0] <= V).concat([[V, r.pAg]]), X, Y) : "");
    diem.setAttribute("cx", X(V)); diem.setAttribute("cy", Y(r.pAg));
    $(".mp-v").textContent = soVN(V) + " mL"; $(".mp-ph").textContent = soVN(r.pAg);
    datMucBuret(el, V);
    $(".mp-dd").setAttribute("fill", r.do ? "rgba(185,60,40,.75)" : `rgba(250,204,21,${0.55 - 0.25 * r.ket})`);
    hat.querySelectorAll("circle").forEach((c, i) => { c.setAttribute("opacity", i / 40 < r.ket ? 0.9 : 0); c.setAttribute("fill", r.do ? "#c2410c" : "#f8fafc"); });
    $(".mp-vung").textContent = r.do ? "Đỏ gạch" : V > 0 ? "Kết tủa trắng" : "Vàng";
  }
  const dat = v => { V = kep(Math.round(v * 100) / 100, 0, Vmax); capNhat(); };
  el.querySelectorAll("[data-d]").forEach(b => b.onclick = () => dat(V + +b.dataset.d));
  const dung = () => { clearInterval(chay); chay = null; $(".mp-mo-khoa").textContent = "▶ Mở khóa"; };
  $(".mp-lai").onclick = () => { dung(); dat(0); };
  $(".mp-mo-khoa").onclick = () => { if (chay) return dung(); if (V >= Vmax) dat(0); $(".mp-mo-khoa").textContent = "⏸ Khóa lại"; chay = setInterval(() => { dat(V + (Math.abs(V - Ve) < 1.5 ? 0.05 : 0.5)); if (tinh(V).do || V >= Vmax || !el.isConnected) dung(); }, 110); };
  keoTren(svg, x => dat((x * 300 - 32) / 260 * Vmax));
  capNhat();
};

/* ---------------- 8. Chuẩn độ oxi hóa – khử ---------------- */
MO_PHONG["chuan-do-oxh"] = el => {
  const HE = { "Fe²⁺ bằng Ce⁴⁺ (HNO₃ 1 M)": { E2: 1.61, n: 1 }, "Fe²⁺ bằng KMnO₄ ([H⁺] = 1 M)": { E2: 1.51, n: 5 } };
  const E1 = 0.77, Ve = 25, Vmax = 40, Einde = 1.15;
  let he = HE["Fe²⁺ bằng Ce⁴⁺ (HNO₃ 1 M)"], V = 12.5;
  const E = v => { if (v <= 0) v = 0.01; if (Math.abs(v - Ve) < 1e-6) return (E1 + he.n * he.E2) / (1 + he.n); if (v < Ve) return E1 + 0.059 * Math.log10(v / (Ve - v)); return he.E2 + 0.059 / he.n * Math.log10((v - Ve) / Ve); };
  el.innerHTML = `
    <div class="mp-dau"><b>⚡ Đường chuẩn độ oxi hóa – khử</b><span>Kéo trên đồ thị · chỉ thị ferroin (E⁰ = 1,15 V)</span></div>
    <div class="mp-chon"><select>${Object.keys(HE).map(k => `<option>${k}</option>`).join("")}</select></div>
    <svg class="mp-do-thi"></svg>
    <div class="mp-so"><div><small>V chuẩn</small><b class="mp-v">–</b></div><div><small>E (V)</small><b class="mp-e">–</b></div><div><small>Ferroin</small><b class="mp-mau">–</b></div></div>
    <p class="mp-nhan-xet"></p>`;
  const $ = s => el.querySelector(s), svg = $("svg");
  let X, Y, duong, diem, oMau;
  function ve() {
    ({ X, Y } = doThi(svg, { x0: 0, x1: Vmax, y0: 0.5, y1: 1.8, nhanX: "mL", nhanY: "E (V)", vachX: [0, 10, 20, 30, 40], vachY: [0.6, 0.8, 1, 1.2, 1.4, 1.6] }));
    phanTu("rect", { x: X(0), width: X(Vmax) - X(0), y: Y(Einde + 0.059), height: Y(Einde - 0.059) - Y(Einde + 0.059), class: "mp-vung-ct" }, svg);
    const pts = []; for (let v = 0.25; v <= Vmax; v += 0.25) pts.push([v, E(v)]);
    phanTu("path", { d: duongSVG(pts, X, Y), class: "mp-duong", fill: "none" }, svg);
    phanTu("line", { x1: X(Ve), x2: X(Ve), y1: Y(0.5), y2: Y(1.8), class: "mp-tđ" }, svg);
    phanTu("line", { x1: X(Ve / 2), x2: X(Ve / 2), y1: Y(0.5), y2: Y(1.8), stroke: "var(--vien)", "stroke-dasharray": "2 3" }, svg);
    diem = phanTu("circle", { r: 5, class: "mp-diem" }, svg);
    capNhat();
  }
  function capNhat() {
    const e = E(V); diem.setAttribute("cx", X(V)); diem.setAttribute("cy", Y(e));
    $(".mp-v").textContent = soVN(V) + " mL"; $(".mp-e").textContent = soVN(e, 3);
    const f = 1 / (1 + 10 ** ((Einde - e) / 0.059));            // phần ferroin ở dạng oxi hóa (xanh nhạt)
    const mau = tronMau([220, 38, 38], [147, 197, 253], f);
    $(".mp-mau").innerHTML = `<span class="mp-cham" style="background:${rgba(mau)}"></span>${f < 0.3 ? "đỏ" : f > 0.7 ? "xanh nhạt" : "đang đổi"}`;
    const Etd = (E1 + he.n * he.E2) / (1 + he.n);
    $(".mp-nhan-xet").innerHTML = V < Ve ? `Trước tương đương: tính E theo cặp Fe³⁺/Fe²⁺. Tại V = V<sub>e</sub>/2 = 12,5 mL, E = E⁰(Fe) = 0,77 V.` : Math.abs(V - Ve) < 0.2 ? `Tại tương đương: E<sub>tđ</sub> = (0,77 + ${he.n}·${soVN(he.E2)})/${1 + he.n} = <b>${soVN(Etd)} V</b>.` : `Sau tương đương: tính E theo cặp của chất chuẩn. Tại V = 2V<sub>e</sub> (50 mL, ngoài đồ thị), E = E⁰ = ${soVN(he.E2)} V.`;
  }
  keoTren(svg, x => { V = kep(Math.round(((x * 300 - 32) / 260 * Vmax) * 10) / 10, 0.1, Vmax); if (Math.abs(V - Ve) < 0.25) V = Ve; capNhat(); });
  $("select").onchange = e => { he = HE[e.target.value]; ve(); };
  ve();
};

/* ---------------- 9. Đường chuẩn: kéo điểm, hồi quy tức thì ---------------- */
MO_PHONG["duong-chuan"] = el => {
  const xs = [0, 2, 4, 6, 8, 10];
  let ys = [0.004, 0.126, 0.249, 0.374, 0.497, 0.620], yMau = 0.300;
  const T95 = { 2: 4.30, 3: 3.18, 4: 2.78, 5: 2.57 };
  el.innerHTML = `
    <div class="mp-dau"><b>📈 Dựng đường chuẩn</b><span>Kéo các điểm lên/xuống · kéo đường ngang cam để đổi tín hiệu mẫu</span></div>
    <svg class="mp-do-thi mp-dc"></svg>
    <div class="mp-so mp-so-4"><div><small>m</small><b class="mp-m">–</b></div><div><small>b</small><b class="mp-b">–</b></div><div><small>R²</small><b class="mp-r2">–</b></div><div><small>s<sub>y</sub></small><b class="mp-sy">–</b></div></div>
    <p class="mp-nhan-xet"></p>`;
  const $ = s => el.querySelector(s), svg = $("svg");
  const { X, Y, B, T } = doThi(svg, { x0: 0, x1: 10.5, y0: 0, y1: 0.7, nhanX: "C (ppm)", nhanY: "A", vachX: [0, 2, 4, 6, 8, 10], vachY: [0, 0.2, 0.4, 0.6] });
  const lg = phanTu("line", { class: "mp-duong" }, svg), ngang = phanTu("line", { stroke: "#f59e0b", "stroke-width": 2, "stroke-dasharray": "5 3" }, svg);
  const doc = phanTu("line", { stroke: "#f59e0b", "stroke-width": 1.5 }, svg), band = phanTu("rect", { fill: "rgba(245,158,11,.25)" }, svg);
  const dps = xs.map((x, i) => phanTu("circle", { r: 7, cx: X(x), class: "mp-diem mp-keo" }, svg));
  function capNhat() {
    const n = xs.length, Sx = xs.reduce((a, b) => a + b), Sy = ys.reduce((a, b) => a + b), Sxx = xs.reduce((a, x) => a + x * x, 0), Sxy = xs.reduce((a, x, i) => a + x * ys[i], 0);
    const D = n * Sxx - Sx * Sx, m = (n * Sxy - Sx * Sy) / D, b = (Sxx * Sy - Sxy * Sx) / D;
    const d = ys.map((y, i) => y - (m * xs[i] + b)), sy = Math.sqrt(d.reduce((a, v) => a + v * v, 0) / (n - 2));
    const yb = Sy / n, SStot = ys.reduce((a, y) => a + (y - yb) ** 2, 0), r2 = 1 - d.reduce((a, v) => a + v * v, 0) / SStot;
    dps.forEach((c, i) => c.setAttribute("cy", Y(ys[i])));
    lg.setAttribute("x1", X(0)); lg.setAttribute("y1", Y(b)); lg.setAttribute("x2", X(10.5)); lg.setAttribute("y2", Y(m * 10.5 + b));
    const x0 = (yMau - b) / m, xb = Sx / n, Sxxc = Sxx - n * xb * xb;
    const sx = sy / Math.abs(m) * Math.sqrt(1 + 1 / n + (yMau - yb) ** 2 / (m * m * Sxxc)), ci = T95[n - 2] * sx;
    ngang.setAttribute("x1", X(0)); ngang.setAttribute("x2", X(kep(x0, 0, 10.5))); ngang.setAttribute("y1", Y(yMau)); ngang.setAttribute("y2", Y(yMau));
    doc.setAttribute("x1", X(kep(x0, 0, 10.5))); doc.setAttribute("x2", X(kep(x0, 0, 10.5))); doc.setAttribute("y1", Y(yMau)); doc.setAttribute("y2", B);
    band.setAttribute("x", X(kep(x0 - ci, 0, 10.5))); band.setAttribute("width", Math.max(0, X(kep(x0 + ci, 0, 10.5)) - X(kep(x0 - ci, 0, 10.5)))); band.setAttribute("y", B - 6); band.setAttribute("height", 6);
    $(".mp-m").textContent = soVN(m, 4); $(".mp-b").textContent = soVN(b, 4); $(".mp-r2").textContent = soVN(r2, 4); $(".mp-sy").textContent = soVN(sy, 4);
    const ngoai = x0 < 0 || x0 > 10;
    $(".mp-nhan-xet").innerHTML = `Mẫu có A = ${soVN(yMau, 3)} → C = <b>${soVN(x0, 2)} ± ${soVN(ci, 2)} ppm</b> (95%, đo mẫu 1 lần). ${ngoai ? "⚠️ Nằm ngoài dãy chuẩn: không được ngoại suy, hãy pha loãng mẫu." : "Thử kéo một điểm lệch khỏi đường thẳng: s<sub>y</sub> tăng, khoảng tin cậy của mẫu rộng ra."}`;
  }
  let dang = -1;
  svg.addEventListener("pointerdown", e => {
    const r = svg.getBoundingClientRect(), px = (e.clientX - r.left) / r.width * 300, py = (e.clientY - r.top) / r.height * 190;
    let best = -1, dmin = 22; xs.forEach((x, i) => { const dd = Math.hypot(X(x) - px, Y(ys[i]) - py); if (dd < dmin) { dmin = dd; best = i; } });
    dang = best >= 0 ? best : "mau"; svg.setPointerCapture(e.pointerId); e.preventDefault();
  });
  svg.addEventListener("pointermove", e => {
    if (dang === -1 || !svg.hasPointerCapture(e.pointerId)) return;
    const r = svg.getBoundingClientRect(), py = (e.clientY - r.top) / r.height * 190, y = kep((B - py) / (B - T) * 0.7, 0, 0.7);
    if (dang === "mau") yMau = y; else ys[dang] = y; capNhat();
  });
  svg.addEventListener("pointerup", () => { dang = -1; });
  capNhat();
};

/* ---------------- 10. Sắp xếp (kéo thẻ lên/xuống) ---------------- */
function ganKeoSapXep(ds) {
  ds.querySelectorAll(".mp-the-keo").forEach(the => {
    the.addEventListener("pointerdown", e => { the.setPointerCapture(e.pointerId); the.classList.add("dang-keo"); e.preventDefault(); });
    the.addEventListener("pointermove", e => {
      if (!the.hasPointerCapture(e.pointerId)) return;
      const khac = [...ds.children].filter(x => x !== the);
      const sau = khac.find(x => { const r = x.getBoundingClientRect(); return e.clientY < r.top + r.height / 2; });
      if (sau) { if (the.nextElementSibling !== sau) ds.insertBefore(the, sau); } else if (ds.lastElementChild !== the) ds.append(the);
    });
    the.addEventListener("pointerup", () => the.classList.remove("dang-keo"));
  });
}
MO_PHONG["sap-xep-quy-trinh"] = el => {
  const DUNG = ["Chọn quy trình: HPLC tách được caffeine khỏi theobromine", "Lấy mẫu: nghiền, trộn đều nhiều thanh chocolate", "Chuẩn bị mẫu: loại chất béo, chiết caffeine bằng nước nóng, lọc", "Phân tích: tiêm chuẩn và mẫu vào HPLC, đo diện tích pic", "Báo cáo: hàm lượng caffeine (mg/g) kèm độ lệch chuẩn", "Kết luận: so sánh với mức ghi trên nhãn"];
  let thuTu = DUNG.map((_, i) => i); do thuTu.sort(() => Math.random() - 0.5); while (thuTu.every((v, i) => v === i));
  el.innerHTML = `
    <div class="mp-dau"><b>🍫 Sắp xếp quy trình phân tích</b><span>Xác định caffeine trong chocolate · kéo thẻ lên/xuống cho đúng thứ tự</span></div>
    <div class="mp-ds-keo">${thuTu.map(i => `<div class="mp-the-keo" data-i="${i}"><span class="mp-tay">⠿</span><span>${DUNG[i]}</span></div>`).join("")}</div>
    <div class="mp-nut mp-nut-2"><button class="mp-kiem">Kiểm tra</button><button class="mp-tron">🔀 Trộn lại</button></div>
    <p class="mp-nhan-xet"></p>`;
  const ds = el.querySelector(".mp-ds-keo");
  ganKeoSapXep(ds);
  el.querySelector(".mp-kiem").onclick = () => {
    let dung = 0; [...ds.children].forEach((x, k) => { const ok = +x.dataset.i === k; x.classList.toggle("dung", ok); x.classList.toggle("sai", !ok); dung += ok; });
    el.querySelector(".mp-nhan-xet").innerHTML = dung === 6 ? "🎉 Chính xác! Chọn quy trình → lấy mẫu → chuẩn bị mẫu → phân tích → báo cáo → kết luận." : `Đúng ${dung}/6 vị trí. Thẻ đỏ đang sai chỗ, thử lại nhé.`;
  };
  el.querySelector(".mp-tron").onclick = () => { [...ds.children].sort(() => Math.random() - 0.5).forEach(x => { x.classList.remove("dung", "sai"); ds.append(x); }); el.querySelector(".mp-nhan-xet").textContent = ""; };
};

/* ---------------- 11. Đọc buret ---------------- */
MO_PHONG["doc-buret"] = el => {
  let that, doc, mat = 0;
  el.innerHTML = `
    <div class="mp-dau"><b>🔍 Tập đọc buret</b><span>Đọc ở đáy mặt khum, ước lượng đến 0,01 mL</span></div>
    <div class="mp-buret-khung"><svg class="mp-buret" viewBox="0 0 160 220"></svg>
      <div class="mp-buret-dk">
        <div class="mp-mat"><small>Vị trí mắt</small><button data-m="-1">Cao</button><button data-m="0" class="chon">Ngang</button><button data-m="1">Thấp</button></div>
        <div class="mp-doc"><small>Số đọc của bạn</small><b class="mp-so-doc">–</b></div>
        <div class="mp-buoc"><button data-b="-0.1">−0,1</button><button data-b="-0.01">−0,01</button><button data-b="0.01">+0,01</button><button data-b="0.1">+0,1</button></div>
      </div></div>
    <div class="mp-nut mp-nut-2"><button class="mp-kiem">Kiểm tra</button><button class="mp-moi">Câu mới</button></div>
    <p class="mp-nhan-xet">Buret đánh số tăng dần từ trên xuống. Vạch lớn cách 1 mL, vạch nhỏ cách 0,1 mL.</p>`;
  const svg = el.querySelector("svg"), $ = s => el.querySelector(s);
  const id = ++soDinhDanh;
  function ve() {
    const goc = Math.floor(that) - 1, Y = v => 20 + (v - goc) * 60;   // 60 px / mL, số tăng từ trên xuống
    const m = Y(that), lech = mat * 7;
    let s = THUY_TINH_DEFS(id) + `<rect x="0" y="0" width="160" height="220" fill="#fff"/><rect x="54" y="0" width="4" height="220" fill="#1d4ed8" opacity=".15"/>`;
    s += `<rect x="50" y="${m}" width="60" height="${220 - m}" fill="#dbeafe"/><path d="M50 ${m - 6} Q80 ${m + 6} 110 ${m - 6} L110 ${m + 2} Q80 ${m + 14} 50 ${m + 2} Z" fill="#93c5fd" opacity=".55"/><path d="M50 ${m - 6} Q80 ${m + 6} 110 ${m - 6}" stroke="#1e40af" stroke-width="1.8" fill="none"/>`;
    for (let k = Math.round(goc * 10); k <= Math.round((goc + 3.6) * 10); k++) {
      const v = k / 10, y = Y(v), lon = k % 10 === 0, vua = k % 5 === 0;
      s += `<line x1="50" x2="${lon ? 92 : vua ? 76 : 68}" y1="${y}" y2="${y}" stroke="#0f172a" stroke-width="${lon ? 1.5 : .9}"/>` + (lon ? `<text x="95" y="${y + 4}" class="mp-so-buret">${v}</text>` : "");
    }
    s += `<rect x="50" y="0" width="60" height="220" fill="url(#tt${id})" stroke="#64748b" stroke-width="1.2"/><rect x="56" y="0" width="6" height="220" fill="url(#bong${id})"/>`;
    s += `<line x1="0" x2="160" y1="${m + lech}" y2="${m - lech}" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4 3"/><text x="3" y="${m + lech - 3}" font-size="12">👁</text>`;
    svg.innerHTML = s;
    $(".mp-so-doc").textContent = soVN(doc) + " mL";
  }
  const moi = () => { that = Math.round((5 + Math.random() * 40) * 100) / 100; doc = Math.round(that); $(".mp-nhan-xet").textContent = "Chỉnh số đọc rồi bấm Kiểm tra."; ve(); };
  el.querySelectorAll("[data-b]").forEach(b => b.onclick = () => { doc = Math.round((doc + +b.dataset.b) * 100) / 100; ve(); });
  el.querySelectorAll("[data-m]").forEach(b => b.onclick = () => { mat = +b.dataset.m; el.querySelectorAll("[data-m]").forEach(x => x.classList.toggle("chon", x === b)); ve();
    $(".mp-nhan-xet").textContent = mat ? `Mắt ${mat < 0 ? "cao hơn" : "thấp hơn"} mặt khum gây sai số thị sai: số đọc ${mat < 0 ? "nhỏ" : "lớn"} hơn thực tế. Luôn để mắt ngang đáy mặt khum.` : "Mắt ngang đáy mặt khum: đọc đúng."; });
  $(".mp-kiem").onclick = () => { const ss = Math.abs(doc - that); $(".mp-nhan-xet").innerHTML = ss <= 0.02 ? `✅ Chính xác! Giá trị đúng ${soVN(that)} mL.` : `❌ Chưa đúng (lệch ${soVN(ss)} mL). Giá trị đúng ${soVN(that)} mL: phần nguyên và 1 chữ số đọc từ vạch, chữ số cuối là ước lượng giữa hai vạch nhỏ.`; };
  $(".mp-moi").onclick = moi;
  moi();
};

/* ---------------- 12. Độ đúng và độ chụm: bia bắn ---------------- */
MO_PHONG["bia-ban"] = el => {
  let heThong = 0, ngauNhien = 0.4, mam = 1;
  const rnd = () => { mam = (mam * 16807) % 2147483647; return mam / 2147483647; };
  const gauss = () => Math.sqrt(-2 * Math.log(rnd() + 1e-9)) * Math.cos(2 * Math.PI * rnd());
  el.innerHTML = `
    <div class="mp-dau"><b>🎯 Độ đúng và độ chụm</b><span>Mỗi dấu chấm là một lần đo; tâm bia là giá trị thật</span></div>
    <svg class="mp-bia" viewBox="-110 -110 220 220"></svg>
    <label class="mp-truot">Sai số hệ thống: <b class="mp-ht">0</b><input type="range" class="mp-r-ht" min="0" max="10" value="0"></label>
    <label class="mp-truot">Sai số ngẫu nhiên: <b class="mp-nn">4</b><input type="range" class="mp-r-nn" min="1" max="10" value="4"></label>
    <div class="mp-nut mp-nut-2"><button class="mp-ban">🔁 Đo lại 10 lần</button><button class="mp-chuan">Mẫu "vừa đúng vừa chụm"</button></div>
    <p class="mp-nhan-xet"></p>`;
  const $ = s => el.querySelector(s);
  function ve() {
    const pts = Array.from({ length: 10 }, () => [heThong * 6 + gauss() * ngauNhien * 45, -heThong * 4 + gauss() * ngauNhien * 45]);
    const tb = [pts.reduce((a, p) => a + p[0], 0) / 10, pts.reduce((a, p) => a + p[1], 0) / 10];
    const s = Math.sqrt(pts.reduce((a, p) => a + (p[0] - tb[0]) ** 2 + (p[1] - tb[1]) ** 2, 0) / 9);
    $(".mp-bia").innerHTML = [100, 75, 50, 25].map((r, i) => `<circle r="${r}" fill="${i % 2 ? "#fecaca" : "#fff"}" stroke="#ef4444" stroke-width="1"/>`).join("") + `<circle r="6" fill="#ef4444"/>`
      + pts.map(p => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4.5" fill="#1d4ed8" stroke="#fff" stroke-width="1"/>`).join("")
      + `<path d="M${tb[0] - 7} ${tb[1]} h14 M${tb[0]} ${tb[1] - 7} v14" stroke="#f59e0b" stroke-width="3"/>`;
    const lech = Math.hypot(...tb), dung = lech < 15, chum = s < 25;
    $(".mp-nhan-xet").innerHTML = `Trung bình (dấu + cam) lệch tâm <b>${lech.toFixed(0)}</b>; độ phân tán s = <b>${s.toFixed(0)}</b> → <b>${dung ? "đúng" : "không đúng"}</b> và <b>${chum ? "chụm" : "không chụm"}</b>. ${!dung && chum ? "Rất chụm mà vẫn sai: dấu hiệu sai số hệ thống, đo lặp nhiều lần cũng không khắc phục được." : dung && !chum ? "Trung bình gần đúng nhưng phân tán: sai số ngẫu nhiên lớn, cần đo lặp và xử lí thống kê." : ""}`;
    $(".mp-ht").textContent = heThong; $(".mp-nn").textContent = Math.round(ngauNhien * 10);
  }
  $(".mp-r-ht").oninput = e => { heThong = +e.target.value; ve(); };
  $(".mp-r-nn").oninput = e => { ngauNhien = e.target.value / 10; ve(); };
  $(".mp-ban").onclick = () => { mam = Math.floor(Math.random() * 1e6) + 1; ve(); };
  $(".mp-chuan").onclick = () => { heThong = 0; ngauNhien = 0.2; $(".mp-r-ht").value = 0; $(".mp-r-nn").value = 2; ve(); };
  ve();
};

/* ---------------- 13. Chuẩn Q: kéo giá trị ngờ ---------------- */
MO_PHONG["q-test"] = el => {
  const co = [20.12, 20.14, 20.15, 20.18, 20.16];
  const QB = { 3: 0.970, 4: 0.829, 5: 0.710, 6: 0.625, 7: 0.568, 8: 0.526, 9: 0.493, 10: 0.466 };
  let ngo = 20.40;
  el.innerHTML = `
    <div class="mp-dau"><b>🧪 Chuẩn Q (Dixon)</b><span>Kéo chấm đỏ (giá trị ngờ) dọc trục số</span></div>
    <svg class="mp-truc-q" viewBox="0 0 300 86"></svg>
    <div class="mp-so"><div><small>Q tính</small><b class="mp-qt">–</b></div><div><small>Q bảng (n = 6, 95%)</small><b>0,625</b></div><div><small>Kết luận</small><b class="mp-kl">–</b></div></div>
    <p class="mp-nhan-xet"></p>`;
  const svg = el.querySelector("svg"), $ = s => el.querySelector(s);
  const X = v => 20 + (v - 19.90) / 0.70 * 260;
  function ve() {
    const ds = [...co, ngo].sort((a, b) => a - b), cao = ngo >= ds[ds.length - 1], thap = ngo <= ds[0], ke = cao ? ds[ds.length - 2] : ds[1];
    if (!cao && !thap) {
      svg.innerHTML = `<line x1="20" x2="280" y1="58" y2="58" stroke="var(--chu-phu)"/>` + [...co, ngo].map(v => `<circle cx="${X(v)}" cy="58" r="${v === ngo ? 8 : 5}" fill="${v === ngo ? "#ef4444" : "#6366f1"}"/>`).join("");
      $(".mp-qt").textContent = "–"; $(".mp-kl").textContent = "–";
      $(".mp-nhan-xet").textContent = "Giá trị này nằm giữa dãy số liệu, không phải giá trị ngờ: chuẩn Q chỉ áp dụng cho giá trị nhỏ nhất hoặc lớn nhất.";
      return;
    }
    const Q = Math.abs(ngo - ke) / (ds[ds.length - 1] - ds[0]), loai = Q > QB[6];
    const tbTat = ds.reduce((a, b) => a + b) / 6, tbCon = co.reduce((a, b) => a + b) / 5;
    let s = `<line x1="20" x2="280" y1="58" y2="58" stroke="var(--chu-phu)"/>`;
    for (let v = 19.9; v <= 20.601; v += 0.1) s += `<line x1="${X(v)}" x2="${X(v)}" y1="54" y2="62" stroke="var(--chu-phu)"/><text x="${X(v)}" y="78" text-anchor="middle">${soVN(v, 1)}</text>`;
    s += `<line x1="${X(ngo)}" x2="${X(ke)}" y1="38" y2="38" stroke="#ef4444" stroke-width="2"/><line x1="${X(ds[0])}" x2="${X(ds[5])}" y1="18" y2="18" stroke="#6366f1" stroke-width="2"/>`;
    s += co.map(v => `<circle cx="${X(v)}" cy="58" r="5" fill="#6366f1"/>`).join("") + `<circle cx="${X(ngo)}" cy="58" r="8" fill="#ef4444" stroke="#fff" stroke-width="2" class="mp-keo-q"/>`;
    s += `<text x="${(X(ngo) + X(ke)) / 2}" y="33" text-anchor="middle" fill="#ef4444">khoảng cách</text><text x="${(X(ds[0]) + X(ds[5])) / 2}" y="12" text-anchor="middle" fill="#6366f1">khoảng biến thiên</text>`;
    svg.innerHTML = s;
    $(".mp-qt").textContent = soVN(Q, 3); $(".mp-kl").textContent = loai ? "Loại" : "Giữ"; $(".mp-kl").style.color = loai ? "#ef4444" : "var(--xanh)";
    $(".mp-nhan-xet").innerHTML = `Giá trị ngờ ${soVN(ngo)} mL. Trung bình cả 6 giá trị: ${soVN(tbTat, 3)}; bỏ giá trị ngờ: ${soVN(tbCon, 3)}. ${loai ? "Q tính > Q bảng → loại, dùng trung bình 5 giá trị." : "Q tính ≤ Q bảng → phải giữ, dù trông có vẻ lệch."}`;
  }
  keoTren(svg, x => { ngo = kep(Math.round((19.90 + (x * 300 - 20) / 260 * 0.70) * 100) / 100, 19.9, 20.6); ve(); });
  ve();
};

/* ---------------- 14. Pin điện hóa Zn – Cu ---------------- */
MO_PHONG["pin-dien-hoa"] = el => {
  let lgZn = -1, lgCu = -2;
  el.innerHTML = `
    <div class="mp-dau"><b>🔋 Pin Zn | Zn²⁺ || Cu²⁺ | Cu</b><span>Kéo thanh trượt đổi nồng độ, xem electron và ion di chuyển</span></div>
    <svg class="mp-pin" viewBox="0 0 320 190">
      <path id="mpDay" d="M70 60 V22 H250 V60" fill="none" stroke="#475569" stroke-width="3"/>
      <g class="mp-e">${[0, 1, 2, 3, 4].map(i => `<circle r="3.5" fill="#facc15"><animateMotion dur="3s" begin="${i * 0.6}s" repeatCount="indefinite"><mpath href="#mpDay"/></animateMotion></circle>`).join("")}</g>
      <rect x="126" y="8" width="68" height="28" rx="6" fill="#0f172a"/><text class="mp-vk" x="160" y="27" text-anchor="middle">1,07 V</text>
      <path d="M30 80 h80 v90 q0 8 -8 8 h-64 q-8 0 -8-8z" class="mp-thuy-tinh"/><rect class="mp-dd-zn" x="32" y="100" width="76" height="76" rx="6" fill="rgba(200,210,230,.5)"/>
      <path d="M210 80 h80 v90 q0 8 -8 8 h-64 q-8 0 -8-8z" class="mp-thuy-tinh"/><rect class="mp-dd-cu" x="212" y="100" width="76" height="76" rx="6" fill="rgba(59,130,246,.5)"/>
      <rect x="62" y="56" width="16" height="100" rx="2" fill="#94a3b8"/><text x="70" y="186" text-anchor="middle">Zn (anot, −)</text>
      <rect x="242" y="56" width="16" height="100" rx="2" fill="#c2703d"/><text x="250" y="186" text-anchor="middle">Cu (catot, +)</text>
      <path d="M95 125 V70 H225 V125" fill="none" stroke="#e2e8f0" stroke-width="14" stroke-linecap="round"/><text x="160" y="84" text-anchor="middle" class="mp-tr">cầu muối KCl</text>
      <path id="mpCauTrai" d="M160 70 H95 V120" fill="none"/><path id="mpCauPhai" d="M160 70 H225 V120" fill="none"/>
      ${[0, 1].map(i => `<circle r="3" fill="#22c55e"><animateMotion dur="4s" begin="${i * 2}s" repeatCount="indefinite"><mpath href="#mpCauTrai"/></animateMotion></circle><circle r="3" fill="#a855f7"><animateMotion dur="4s" begin="${i * 2 + 1}s" repeatCount="indefinite"><mpath href="#mpCauPhai"/></animateMotion></circle>`).join("")}
      <text x="160" y="50" text-anchor="middle" class="mp-tr">e⁻ →</text>
    </svg>
    <p class="mp-chu-giai"><span><i style="background:#facc15"></i>electron (mạch ngoài)</span><span><i style="background:#22c55e"></i>Cl⁻ về phía anot</span><span><i style="background:#a855f7"></i>K⁺ về phía catot</span></p>
    <label class="mp-truot">[Zn²⁺] = <b class="mp-zn"></b><input type="range" class="mp-r-zn" min="-4" max="0" step="0.1" value="-1"></label>
    <label class="mp-truot">[Cu²⁺] = <b class="mp-cu"></b><input type="range" class="mp-r-cu" min="-4" max="0" step="0.1" value="-2"></label>
    <div class="mp-so"><div><small>E(Cu²⁺/Cu)</small><b class="mp-ep">–</b></div><div><small>E(Zn²⁺/Zn)</small><b class="mp-em">–</b></div><div><small>E pin</small><b class="mp-epin">–</b></div></div>
    <p class="mp-nhan-xet">E<sub>pin</sub> = E<sub>+</sub> − E<sub>−</sub> = 1,10 + (0,059/2)·lg([Cu²⁺]/[Zn²⁺]). Tăng [Cu²⁺] hoặc giảm [Zn²⁺] làm thế pin tăng.</p>`;
  const $ = s => el.querySelector(s);
  const hien = v => { const e = Math.floor(v + 1e-9), m = 10 ** (v - e); return `${soVN(m, 1)}·10<sup>${e}</sup> M`; };
  function capNhat() {
    const r3 = x => Math.round(x * 1000 + 1e-6) / 1000, ep = r3(0.34 + 0.0295 * lgCu), em = r3(-0.76 + 0.0295 * lgZn), E = r3(ep - em);
    $(".mp-zn").innerHTML = hien(lgZn); $(".mp-cu").innerHTML = hien(lgCu);
    $(".mp-ep").textContent = soVN(ep, 3) + " V"; $(".mp-em").textContent = soVN(em, 3) + " V"; $(".mp-epin").textContent = soVN(E, 3) + " V";
    $(".mp-vk").textContent = soVN(E, 3) + " V";
    $(".mp-dd-cu").setAttribute("fill", `rgba(59,130,246,${0.12 + 0.18 * (lgCu + 4)})`);
  }
  $(".mp-r-zn").oninput = e => { lgZn = +e.target.value; capNhat(); };
  $(".mp-r-cu").oninput = e => { lgCu = +e.target.value; capNhat(); };
  capNhat();
};

/* ---------------- 15. Sắc đồ: N, α, k và độ phân giải ---------------- */
MO_PHONG["sac-do"] = el => {
  let N = 5000, alpha = 1.10, k2 = 4, t = null, chay = null;
  const tm = 1;
  el.innerHTML = `
    <div class="mp-dau"><b>📉 Mô phỏng tách sắc kí</b><span>Đổi N, α, k rồi bấm ▶ để xem hai chất di chuyển trong cột</span></div>
    <svg class="mp-cot" viewBox="0 0 300 36"><rect x="10" y="12" width="270" height="16" rx="8" fill="#e2e8f0" stroke="#94a3b8"/><rect class="mp-b1" y="13" height="14" rx="6" fill="#6366f1" opacity=".8"/><rect class="mp-b2" y="13" height="14" rx="6" fill="#f59e0b" opacity=".8"/><rect x="282" y="8" width="12" height="24" rx="3" fill="#475569"/><text x="294" y="5" text-anchor="end" class="mp-tr">detector</text></svg>
    <svg class="mp-do-thi mp-sd"></svg>
    <label class="mp-truot">Số đĩa N = <b class="mp-n"></b><input type="range" class="mp-r-n" min="500" max="20000" step="500" value="5000"></label>
    <label class="mp-truot">Hệ số tách α = <b class="mp-a"></b><input type="range" class="mp-r-a" min="1.00" max="1.30" step="0.01" value="1.10"></label>
    <label class="mp-truot">Hệ số lưu k₂ = <b class="mp-k"></b><input type="range" class="mp-r-k" min="0.5" max="10" step="0.5" value="4"></label>
    <div class="mp-so"><div><small>t<sub>R1</sub> ; t<sub>R2</sub> (min)</small><b class="mp-tr12">–</b></div><div><small>R<sub>s</sub></small><b class="mp-rs">–</b></div><div><small>Đánh giá</small><b class="mp-dg">–</b></div></div>
    <div class="mp-nut mp-nut-2"><button class="mp-chay">▶ Chạy sắc kí</button><button class="mp-tat">⏭ Xem toàn bộ</button></div>`;
  const $ = s => el.querySelector(s), svg = $(".mp-sd");
  const thongSo = () => { const k1 = k2 / alpha, t1 = tm * (1 + k1), t2 = tm * (1 + k2); return { t1, t2, s1: t1 / Math.sqrt(N), s2: t2 / Math.sqrt(N) }; };
  function ve() {
    const { t1, t2, s1, s2 } = thongSo(), tMax = t2 * 1.25 + 0.5, rs = (t2 - t1) / (2 * (s1 + s2));
    const { X, Y } = doThi(svg, { x0: 0, x1: tMax, y0: 0, y1: 1.1, nhanX: "t (min)", nhanY: "tín hiệu", vachX: [0, Math.round(tMax / 2), Math.floor(tMax)], vachY: [0], cao: 150 });
    const g = (x, m, s) => Math.exp(-((x - m) ** 2) / (2 * s * s));
    const hmax = Math.max(...[t1, t2].map(m => g(m, t1, s1) + g(m, t2, s2)));
    const den = t ?? tMax, pts = [], p1 = [], p2 = [];
    for (let x = 0; x <= den; x += tMax / 400) { pts.push([x, (g(x, t1, s1) + g(x, t2, s2)) / hmax]); p1.push([x, g(x, t1, s1) / hmax]); p2.push([x, g(x, t2, s2) / hmax]); }
    phanTu("path", { d: duongSVG(p1, X, Y), fill: "none", stroke: "#6366f1", "stroke-width": 1, "stroke-dasharray": "3 2" }, svg);
    phanTu("path", { d: duongSVG(p2, X, Y), fill: "none", stroke: "#f59e0b", "stroke-width": 1, "stroke-dasharray": "3 2" }, svg);
    phanTu("path", { d: duongSVG(pts, X, Y), fill: "none", class: "mp-duong" }, svg);
    phanTu("line", { x1: X(tm), x2: X(tm), y1: Y(0), y2: Y(0.25), stroke: "var(--chu-phu)" }, svg);
    phanTu("text", { x: X(tm), y: Y(0.3), "text-anchor": "middle", class: "mp-tr" }, svg).textContent = "tm";
    // vị trí dải trong cột tại thời điểm t
    const tt = t ?? 0, L = 270;
    [[".mp-b1", t1, s1], [".mp-b2", t2, s2]].forEach(([c, tr, s]) => { const x = 10 + L * Math.min(1.05, tt / tr), w = Math.max(6, L * 4 * s / tr * Math.sqrt(Math.max(tt, 0.05) / tr)); $(c).setAttribute("x", x - w / 2); $(c).setAttribute("width", w); $(c).setAttribute("opacity", tt / tr > 1.05 || t === null ? 0 : 0.8); });
    $(".mp-n").textContent = N.toLocaleString("vi-VN"); $(".mp-a").textContent = soVN(alpha); $(".mp-k").textContent = soVN(k2, 1);
    $(".mp-tr12").textContent = `${soVN(t1)} ; ${soVN(t2)}`; $(".mp-rs").textContent = soVN(rs);
    $(".mp-dg").textContent = alpha === 1 ? "Không tách" : rs >= 1.5 ? "Tách hoàn toàn" : rs >= 1 ? "Gần tách" : "Chồng pic"; $(".mp-dg").style.color = rs >= 1.5 ? "var(--xanh)" : "#ef4444";
  }
  const dung = () => { cancelAnimationFrame(chay); chay = null; };
  $(".mp-chay").onclick = () => { dung(); const { t2 } = thongSo(), tMax = t2 * 1.25 + 0.5, t0 = performance.now(); const buoc = n => { t = Math.min(tMax, (n - t0) / 5000 * tMax); ve(); if (t < tMax && el.isConnected) chay = requestAnimationFrame(buoc); else { t = null; ve(); } }; chay = requestAnimationFrame(buoc); };
  $(".mp-tat").onclick = () => { dung(); t = null; ve(); };
  $(".mp-r-n").oninput = e => { N = +e.target.value; ve(); };
  $(".mp-r-a").oninput = e => { alpha = +e.target.value; ve(); };
  $(".mp-r-k").oninput = e => { k2 = +e.target.value; ve(); };
  ve();
};

/* ---------------- 16. Phương trình Van Deemter ---------------- */
MO_PHONG["van-deemter"] = el => {
  const A = 0.10, B = 1.0, C = 0.010; let u = 10;
  el.innerHTML = `
    <div class="mp-dau"><b>📐 Đường Van Deemter</b><span>Kéo trên đồ thị để đổi tốc độ pha động u</span></div>
    <svg class="mp-do-thi"></svg>
    <p class="mp-chu-giai"><span><i style="background:#94a3b8"></i>A</span><span><i style="background:#22c55e"></i>B/u</span><span><i style="background:#f59e0b"></i>C·u</span><span><i style="background:var(--mau-chinh)"></i>H tổng</span></p>
    <div class="mp-so"><div><small>u (mm/s)</small><b class="mp-u">–</b></div><div><small>H (mm)</small><b class="mp-h">–</b></div><div><small>Số hạng lớn nhất</small><b class="mp-lon">–</b></div></div>`;
  const $ = s => el.querySelector(s), svg = $("svg");
  const { X, Y } = doThi(svg, { x0: 0, x1: 40, y0: 0, y1: 0.8, nhanX: "u (mm/s)", nhanY: "H (mm)", vachX: [0, 10, 20, 30, 40], vachY: [0, 0.2, 0.4, 0.6, 0.8] });
  const ve1 = (f, mau, w) => { const p = []; for (let x = 0.6; x <= 40; x += 0.2) p.push([x, Math.min(0.8, f(x))]); phanTu("path", { d: duongSVG(p, X, Y), fill: "none", stroke: mau, "stroke-width": w }, svg); };
  ve1(() => A, "#94a3b8", 1.5); ve1(x => B / x, "#22c55e", 1.5); ve1(x => C * x, "#f59e0b", 1.5); ve1(x => A + B / x + C * x, "var(--mau-chinh)", 2.6);
  phanTu("line", { x1: X(10), x2: X(10), y1: Y(0), y2: Y(0.3), class: "mp-tđ" }, svg);
  const d = phanTu("circle", { r: 6, class: "mp-diem" }, svg);
  function capNhat() {
    const h = A + B / u + C * u; d.setAttribute("cx", X(u)); d.setAttribute("cy", Y(Math.min(0.8, h)));
    $(".mp-u").textContent = soVN(u, 1); $(".mp-h").textContent = soVN(h, 3);
    $(".mp-lon").textContent = B / u > C * u && B / u > A ? "B/u (chậm quá)" : C * u > A ? "C·u (nhanh quá)" : "A";
  }
  keoTren(svg, x => { u = kep(Math.round(((x * 300 - 32) / 260 * 40) * 2) / 2, 1, 40); capNhat(); });
  capNhat();
};

/* ---------------- 17. Thứ tự rửa giải ---------------- */
MO_PHONG["thu-tu-rua-giai"] = el => {
  const CHE_DO = {
    "HPLC pha đảo (C18, nước – methanol)": { ds: [["Theobromine", "log P = −0,8"], ["Caffeine", "log P = −0,1"], ["Phenol", "log P = 1,5"], ["Toluen", "log P = 2,7"]], ly: "Pha đảo: chất càng phân cực (log P nhỏ) càng ra sớm." },
    "HPLC pha thường (silica, hexan)": { ds: [["Toluen", "log P = 2,7"], ["Phenol", "log P = 1,5"], ["Caffeine", "log P = −0,1"], ["Theobromine", "log P = −0,8"]], ly: "Pha thường: chất kém phân cực ra trước, chất phân cực bị silica giữ lâu." },
    "GC cột không phân cực": { ds: [["n-Hexan", "sôi 69 °C"], ["Ethyl acetat", "sôi 77 °C"], ["Benzen", "sôi 80,1 °C"], ["Toluen", "sôi 110,6 °C"]], ly: "GC trên pha tĩnh không phân cực: ra theo nhiệt độ sôi tăng dần." },
  };
  el.innerHTML = `
    <div class="mp-dau"><b>🏁 Chất nào ra trước?</b><span>Chọn hệ sắc kí, kéo thẻ theo thứ tự ra khỏi cột (trên cùng: ra trước)</span></div>
    <div class="mp-chon"><select>${Object.keys(CHE_DO).map(k => `<option>${k}</option>`).join("")}</select></div>
    <div class="mp-ds-keo"></div>
    <div class="mp-nut mp-nut-2"><button class="mp-kiem">Kiểm tra</button><button class="mp-tron">🔀 Trộn lại</button></div>
    <p class="mp-nhan-xet"></p>`;
  const $ = s => el.querySelector(s), ds = $(".mp-ds-keo");
  let cd = CHE_DO[Object.keys(CHE_DO)[0]];
  function tao() {
    const tt = cd.ds.map((_, i) => i); do tt.sort(() => Math.random() - 0.5); while (tt.every((v, i) => v === i));
    ds.innerHTML = tt.map(i => `<div class="mp-the-keo" data-i="${i}"><span class="mp-tay">⠿</span><span>${cd.ds[i][0]}</span><small class="mp-goi-y"></small></div>`).join("");
    ganKeoSapXep(ds); $(".mp-nhan-xet").textContent = "";
  }
  $(".mp-kiem").onclick = () => {
    let dung = 0; [...ds.children].forEach((x, k) => { const ok = +x.dataset.i === k; x.classList.toggle("dung", ok); x.classList.toggle("sai", !ok); dung += ok; x.querySelector(".mp-goi-y").textContent = cd.ds[+x.dataset.i][1]; });
    $(".mp-nhan-xet").innerHTML = (dung === cd.ds.length ? "🎉 Chính xác! " : `Đúng ${dung}/${cd.ds.length}. `) + cd.ly;
  };
  $(".mp-tron").onclick = tao;
  $("select").onchange = e => { cd = CHE_DO[e.target.value]; tao(); };
  tao();
};

/* ---------------- 18. Chuẩn độ EDTA: ảnh hưởng của pH ---------------- */
MO_PHONG["chuan-do-edta"] = el => {
  const ALPHA = { 6: 1.8e-5, 7: 3.8e-4, 8: 4.2e-3, 9: 0.041, 10: 0.30, 11: 0.81, 12: 0.98 };
  const ION = { "Ca²⁺ (lg Kf = 10,70)": 10.70, "Mg²⁺ (lg Kf = 8,79)": 8.79, "Zn²⁺ (lg Kf = 16,50)": 16.50 };
  let pH = 10, lgKf = 10.70;
  const V0 = 50, C = 0.0400, Cy = 0.0800, Ve = 25, Vmax = 40;
  el.innerHTML = `
    <div class="mp-dau"><b>🔗 Đường chuẩn độ EDTA theo pH</b><span>50,0 mL M²⁺ 0,0400 M chuẩn bằng EDTA 0,0800 M</span></div>
    <div class="mp-chon"><select>${Object.keys(ION).map(k => `<option>${k}</option>`).join("")}</select></div>
    <svg class="mp-do-thi"></svg>
    <label class="mp-truot">pH của đệm = <b class="mp-ph-edta"></b><input type="range" min="6" max="12" step="1" value="10"></label>
    <div class="mp-so"><div><small>α<sub>Y⁴⁻</sub></small><b class="mp-al">–</b></div><div><small>lg K<sub>f</sub>'</small><b class="mp-kf">–</b></div><div><small>Chuẩn độ được?</small><b class="mp-dg">–</b></div></div>`;
  const $ = s => el.querySelector(s), svg = $("svg");
  function pM(V, Kf) {
    const Vt = V0 + V, M = C * V0 / Vt, Y = Cy * V / Vt;
    // [M] + [MY] = M ; [Y]' + [MY] = Y ; [MY] = Kf'[M][Y]' → bậc hai theo [M]
    const a = Kf, b = 1 + Kf * (Y - M), c = -M, m = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    return -Math.log10(m);
  }
  function ve() {
    const Kf = ALPHA[pH] * 10 ** lgKf;
    const { X, Y } = doThi(svg, { x0: 0, x1: Vmax, y0: 0, y1: 14, nhanX: "mL EDTA", nhanY: "pM", vachX: [0, 10, 20, 30, 40], vachY: [0, 4, 8, 12] });
    [6, 8, 10, 12].forEach(p => { if (p === pH) return; const K = ALPHA[p] * 10 ** lgKf, pts = []; for (let v = 0; v <= Vmax; v += 0.25) pts.push([v, Math.min(14, pM(v, K))]); phanTu("path", { d: duongSVG(pts, X, Y), fill: "none", stroke: "var(--vien)", "stroke-width": 1.2 }, svg); phanTu("text", { x: X(Vmax) - 2, y: Y(Math.min(13.5, pM(Vmax, K))) - 3, "text-anchor": "end", class: "mp-tr" }, svg).textContent = "pH " + p; });
    const pts = []; for (let v = 0; v <= Vmax; v += 0.1) pts.push([v, Math.min(14, pM(v, Kf))]);
    phanTu("path", { d: duongSVG(pts, X, Y), fill: "none", class: "mp-duong" }, svg);
    phanTu("line", { x1: X(Ve), x2: X(Ve), y1: Y(0), y2: Y(14), class: "mp-tđ" }, svg);
    const lg = Math.log10(Kf);
    $(".mp-ph-edta").textContent = pH; $(".mp-al").textContent = ALPHA[pH] < 0.01 ? ALPHA[pH].toExponential(1).replace(".", ",").replace("e-", "·10⁻").replace(/⁻(\d)/, (m, d) => "⁻" + "⁰¹²³⁴⁵⁶⁷⁸⁹"[d]) : soVN(ALPHA[pH]);
    $(".mp-kf").textContent = soVN(lg, 1); $(".mp-dg").textContent = lg >= 8 ? "✅ Được" : "❌ Không"; $(".mp-dg").style.color = lg >= 8 ? "var(--xanh)" : "#ef4444";
  }
  $("input").oninput = e => { pH = +e.target.value; ve(); };
  $("select").onchange = e => { lgKf = ION[e.target.value]; ve(); };
  ve();
};

/* ---------------- 19. Phân bố Boltzmann: AAS và AES ---------------- */
MO_PHONG["boltzmann"] = el => {
  const NT = { "Na 589,0 nm (g*/g₀ = 3)": [589.0, 3], "Ca 422,7 nm (g*/g₀ = 3)": [422.7, 3], "Zn 213,9 nm (g*/g₀ = 3)": [213.9, 3] };
  let lam = 589.0, g = 3, T = 2500;
  el.innerHTML = `
    <div class="mp-dau"><b>🔥 Nguyên tử kích thích theo nhiệt độ</b><span>240 chấm là 240 nguyên tử; số chấm sáng (kích thích) được phóng đại 100 lần để nhìn thấy. g*/g₀ = 3 theo Harris (gộp cả mức 3p)</span></div>
    <div class="mp-chon"><select>${Object.keys(NT).map(k => `<option>${k}</option>`).join("")}</select></div>
    <svg class="mp-nt" viewBox="0 0 300 110"></svg>
    <label class="mp-truot">Nhiệt độ = <b class="mp-t"></b><input type="range" min="2000" max="8000" step="100" value="2500"></label>
    <div class="mp-so"><div><small>N*/N₀</small><b class="mp-r">–</b></div><div><small>Tăng 10 K làm N* tăng</small><b class="mp-d">–</b></div><div><small>N₀ (cơ bản)</small><b class="mp-n0">–</b></div></div>
    <p class="mp-nhan-xet">AES đo nguyên tử kích thích (rất nhạy với nhiệt độ); AAS đo nguyên tử ở trạng thái cơ bản (gần như 100%, ít phụ thuộc nhiệt độ). Nguyên tố có vạch bước sóng ngắn (ΔE lớn) khó kích thích hơn: cần nguồn nóng như ICP.</p>`;
  const $ = s => el.querySelector(s), svg = $("svg");
  const r = (Tk) => g * Math.exp(-6.626e-34 * 2.998e8 / (lam * 1e-9) / (1.381e-23 * Tk));
  function ve() {
    const ti = r(T), n = 240, soSang = Math.min(n, Math.round(ti * n * 100));   // phóng đại 100 lần
    let s = ""; for (let i = 0; i < n; i++) { const x = 8 + (i % 30) * 9.6, y = 10 + Math.floor(i / 30) * 12.5; const sang = (i * 97) % n < soSang; s += `<circle cx="${x}" cy="${y}" r="${sang ? 4 : 3}" fill="${sang ? "#f97316" : "#64748b"}" ${sang ? 'class="mp-sang"' : 'opacity=".55"'}/>`; }
    svg.innerHTML = s;
    $(".mp-t").textContent = T.toLocaleString("vi-VN") + " K"; const [m, e] = ti.toExponential(2).split("e"); $(".mp-r").innerHTML = `${m.replace(".", ",")}·10<sup>${e.replace("-", "−").replace("+", "")}</sup>`;
    $(".mp-d").textContent = soVN((r(T + 10) / ti - 1) * 100, 1) + "%"; $(".mp-n0").textContent = soVN(100 / (1 + ti), 2) + "%";
  }
  $("input").oninput = e => { T = +e.target.value; ve(); };
  $("select").onchange = e => { [lam, g] = NT[e.target.value]; ve(); };
  ve();
};


/* ---------------- 20. Bộ dụng cụ đo thể tích ---------------- */
MO_PHONG["dung-cu"] = el => {
  const id = ++soDinhDanh, G = `url(#tt${id})`, dd = "#bfdbfe";
  const DC = [
    ["Pipet bầu", `<path d="M28 4 h4 v60 q14 6 14 34 q0 28 -14 34 v42 l-1 12 h-2 l-1-12 v-42 q-14 -6 -14 -34 q0 -28 14 -34 z" fill="${G}" stroke="#64748b"/><path d="M29 100 q-10 -2 -10 -2 q0 22 11 30 v40 l1 8 l1 -8 v-40 q11 -8 11 -30 z" fill="${dd}" opacity=".8"/><line x1="26" x2="34" y1="40" y2="40" stroke="#0f172a" stroke-width="1.4"/><text x="30" y="104" text-anchor="middle" class="mp-so-vach">25 mL</text>`,
      "Lấy chính xác <b>một</b> thể tích cố định (vạch mức duy nhất ở ống trên). Hiệu chuẩn kiểu <b>chảy ra (TD)</b>: để chảy tự do, chạm đầu pipet vào thành bình, không thổi giọt cuối."],
    ["Pipet chia độ", `<path d="M26 4 h8 v164 l-2.5 16 h-3 l-2.5 -16 z" fill="${G}" stroke="#64748b"/><rect x="27" y="70" width="6" height="98" fill="${dd}" opacity=".8"/>${Array.from({ length: 16 }, (_, i) => `<line x1="26" x2="${i % 5 ? 30 : 34}" y1="${20 + i * 9}" y2="${20 + i * 9}" stroke="#0f172a" stroke-width=".7"/>`).join("")}`,
      "Lấy thể tích <b>thay đổi</b> được (ví dụ 0 – 10 mL, chia 0,1 mL). Kém chính xác hơn pipet bầu."],
    ["Bình định mức", `<path d="M24 22 h12 v70 q24 10 24 46 q0 44 -30 44 q-30 0 -30 -44 q0 -36 24 -46 z" fill="${G}" stroke="#64748b"/><path d="M24 120 h12 v0 q22 0 22 18 q0 40 -28 40 q-28 0 -28 -40 q0 -18 22 -18 z" fill="${dd}" opacity=".8"/><rect x="22" y="8" width="16" height="14" rx="3" fill="#e2e8f0" stroke="#64748b"/><line x1="22" x2="38" y1="56" y2="56" stroke="#0f172a" stroke-width="1.4"/><text x="30" y="152" text-anchor="middle" class="mp-so-vach">100 mL</text>`,
      "Pha dung dịch có <b>thể tích chính xác</b>: hòa tan chất, thêm dung môi tới khi đáy mặt khum chạm vạch trên cổ bình, đậy nút, lộn ngược lắc đều. Hiệu chuẩn kiểu <b>chứa (TC)</b>."],
    ["Buret", `<rect x="25" y="4" width="10" height="150" rx="2" fill="${G}" stroke="#64748b"/><rect x="26" y="40" width="8" height="114" fill="${dd}" opacity=".8"/>${Array.from({ length: 13 }, (_, i) => `<line x1="25" x2="${i % 2 ? 29 : 33}" y1="${10 + i * 11}" y2="${10 + i * 11}" stroke="#0f172a" stroke-width=".7"/>`).join("")}<rect x="26" y="154" width="8" height="10" fill="${G}" stroke="#64748b"/><rect x="16" y="157" width="28" height="4" rx="2" fill="#f8fafc" stroke="#64748b"/><path d="M27 164 h6 l-2 20 h-2 z" fill="${G}" stroke="#64748b"/>`,
      "Nhỏ dung dịch chuẩn khi chuẩn độ. Vạch 0 ở trên, số tăng dần xuống dưới. Đọc đến 0,01 mL với buret 50 mL, mắt ngang đáy mặt khum; tráng buret bằng chính dung dịch chuẩn trước khi dùng."],
    ["Ống đong", `<path d="M20 8 h20 v160 h-20 z" fill="${G}" stroke="#64748b"/><path d="M18 8 l2 -4 h22" fill="none" stroke="#64748b"/><rect x="21" y="80" width="18" height="88" fill="${dd}" opacity=".8"/>${Array.from({ length: 10 }, (_, i) => `<line x1="20" x2="${i % 2 ? 26 : 30}" y1="${20 + i * 15}" y2="${20 + i * 15}" stroke="#0f172a" stroke-width=".7"/>`).join("")}<path d="M10 168 h40 v8 h-40 z" fill="#cbd5e1" stroke="#64748b"/>`,
      "Đong <b>ước lượng</b> thể tích (sai số cỡ 1%). Không dùng cho phép đo chính xác hay pha chuẩn."],
    ["Cốc có mỏ", `<path d="M8 90 h44 v80 q0 6 -6 6 h-32 q-6 0 -6 -6 z" fill="${G}" stroke="#64748b"/><path d="M8 90 l-4 -4" stroke="#64748b" fill="none"/><path d="M10 130 h40 v38 q0 6 -6 6 h-28 q-6 0 -6 -6 z" fill="${dd}" opacity=".8"/>${[110, 130, 150].map(y => `<line x1="12" x2="20" y1="${y}" y2="${y}" stroke="#0f172a" stroke-width=".7"/>`).join("")}`,
      "Hòa tan, đun, chứa dung dịch. Vạch trên cốc chỉ để ước lượng rất thô, <b>không dùng để đo thể tích</b>."],
  ];
  el.innerHTML = `
    <div class="mp-dau"><b>🧫 Dụng cụ đo thể tích</b><span>Chạm vào từng dụng cụ để xem cách dùng</span></div>
    <div class="mp-ke-dc">${DC.map(([ten, ve], i) => `<button class="mp-dc" data-i="${i}"><svg viewBox="0 0 60 190">${i === 0 ? THUY_TINH_DEFS(id) : ""}${ve}</svg><span>${ten}</span></button>`).join("")}</div>
    <div class="mp-giai-thich">Chạm vào một dụng cụ.</div>`;
  el.querySelectorAll(".mp-dc").forEach(b => b.onclick = () => {
    el.querySelectorAll(".mp-dc").forEach(x => x.classList.toggle("chon", x === b));
    const [ten, , mo] = DC[+b.dataset.i]; el.querySelector(".mp-giai-thich").innerHTML = `<b>${ten}.</b> ${mo}`;
  });
};
