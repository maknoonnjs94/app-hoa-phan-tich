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
      <svg class="mp-bo" viewBox="0 0 120 260" aria-label="Buret và bình nón">
        <rect x="52" y="6" width="16" height="150" rx="3" class="mp-thuy-tinh"/>
        <rect class="mp-muc-buret" x="54" y="8" width="12" height="146" fill="#bfdbfe"/>
        ${Array.from({ length: 11 }, (_, i) => `<line x1="52" x2="58" y1="${10 + i * 14}" y2="${10 + i * 14}" class="mp-vach"/>`).join("")}
        <path d="M56 156 h8 v10 l-3 8 h-2 l-3-8z" class="mp-thuy-tinh"/>
        <rect class="mp-khoa" x="47" y="158" width="26" height="6" rx="3"/>
        <circle class="mp-giot" cx="60" cy="178" r="2.6" fill="#93c5fd" opacity="0"/>
        <path d="M44 196 h32 v12 l26 40 q2 6 -5 6 h-74 q-7 0 -5-6 l26-40z" class="mp-thuy-tinh"/>
        <path class="mp-dd" d="M30 226 h60 l12 18 q2 4 -4 4 h-76 q-6 0 -4-4z"/>
      </svg>
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
    $(".mp-muc-buret").setAttribute("y", 8 + V / Vmax * 146); $(".mp-muc-buret").setAttribute("height", 146 - V / Vmax * 146);
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
  const giot = () => { const g = $(".mp-giot"); g.animate([{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(40px)" }], { duration: 350 }); };
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
MO_PHONG["keo-tha-aas"] = el => {
  const O = [["den", "Đèn catot rỗng"], ["nt", "Bộ nguyên tử hóa (ngọn lửa)"], ["ds", "Bộ đơn sắc"], ["dt", "Detector"]];
  const NHIEU = [["x", "Cuvet thạch anh"], ["y", "Đèn deuteri"]];
  const the = [...O, ...NHIEU].sort(() => Math.random() - 0.5);
  el.innerHTML = `
    <div class="mp-dau"><b>🧩 Lắp ráp máy AAS</b><span>Kéo từng nhãn vào đúng ô trên sơ đồ</span></div>
    <div class="mp-so-do">${O.map(([k], i) => `<div class="mp-o" data-k="${k}"><span>${i + 1}</span></div>${i < 3 ? '<div class="mp-mui">→</div>' : ""}`).join("")}</div>
    <div class="mp-kho-nhan">${the.map(([k, t]) => `<div class="mp-nhan" data-k="${k}">${t}</div>`).join("")}</div>
    <p class="mp-nhan-xet">Gợi ý: ánh sáng đi từ nguồn, qua đám nguyên tử tự do, rồi mới đến bộ đơn sắc và detector.</p>`;
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
      const o = [...el.querySelectorAll(".mp-o")].find(o => { const r = o.getBoundingClientRect(); return e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom; });
      if (!o) return;
      if (o.dataset.k === n.dataset.k && !o.classList.contains("dung")) {
        o.classList.add("dung"); o.innerHTML = `<b>${n.textContent}</b>`; n.classList.add("dung");
        const con = el.querySelectorAll(".mp-o:not(.dung)").length;
        nx.innerHTML = con ? `✅ Đúng! Còn ${con} ô.` : "🎉 Hoàn thành! Đèn catot rỗng phát vạch đặc trưng → nguyên tử tự do trong ngọn lửa hấp thụ → bộ đơn sắc tách vạch cần đo → detector ghi cường độ.";
        if (!con) el.querySelector(".mp-so-do").classList.add("xong");
      } else {
        o.classList.add("sai"); setTimeout(() => o.classList.remove("sai"), 500);
        nx.innerHTML = n.dataset.k === "x" ? "❌ AAS không dùng cuvet: mẫu được nguyên tử hóa trong ngọn lửa hoặc lò graphit." : n.dataset.k === "y" ? "❌ Đèn deuteri là nguồn liên tục của máy UV – Vis (trong AAS chỉ dùng để hiệu chỉnh nền)." : "❌ Chưa đúng vị trí, thử lại.";
      }
    });
  });
};
