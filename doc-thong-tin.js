/* =========================================================
   TỰ ĐỌC THÔNG TIN ĐỀ THI TỪ ẢNH (OCR tiếng Việt, chạy ngay trên máy — Tesseract.js trong vendor/tesseract/)
   DOC.doc(blob) → { chu, nam, ki, ten, ghiChu }  (đọc phần đầu trang: năm học, học kì, đề số, học phần, thời gian)
   Thư viện + dữ liệu tiếng Việt (~14 MB) chỉ tải khi dùng lần đầu rồi được trình duyệt nhớ lại.
   ========================================================= */
const DOC = (() => {
  let wk = null, dangNap = null;
  const napScript = () => window.Tesseract ? Promise.resolve() : new Promise((ok, loi) => { const s = document.createElement("script"); s.src = "vendor/tesseract/tesseract.min.js"; s.onload = ok; s.onerror = () => loi(new Error("Không tải được bộ đọc chữ")); document.head.append(s); });
  async function worker(bao) {
    if (wk) return wk;
    return dangNap ||= (async () => {
      bao?.("Đang tải bộ đọc chữ tiếng Việt (lần đầu ~14 MB)…"); await napScript();
      wk = await Tesseract.createWorker("vie", 1, { workerPath: "vendor/tesseract/worker.min.js", corePath: "vendor/tesseract/", langPath: "vendor/tesseract/lang/", workerBlobURL: false, gzip: true });
      return wk;
    })().catch(e => { dangNap = null; throw e; });
  }
  /* phần đầu trang (40% trên) là nơi có năm học, kì, đề số… */
  async function catDau(blob) {
    const bm = await createImageBitmap(blob), h = Math.round(bm.height * 0.4), k = Math.min(1, 1800 / bm.width), c = document.createElement("canvas");
    c.width = Math.round(bm.width * k); c.height = Math.round(h * k); c.getContext("2d").drawImage(bm, 0, 0, bm.width, h, 0, 0, c.width, c.height); return c;
  }
  const bo = s => String(s || "").replace(/\s+/g, " ").trim();
  function phanTich(chu) {
    const t = String(chu || ""), kq = { nam: "", ki: "", ten: "", ghiChu: "" };
    let m = t.match(/(20\d\d)\s*[-–—−~]\s*(20\d\d)/);
    if (m) kq.nam = `${m[1]}-${m[2]}`;
    else if ((m = t.match(/n[aăâ]m\s*h[oọ0]c[^\d]{0,6}(20\d\d)/i))) kq.nam = `${m[1]}-${+m[1] + 1}`;
    if ((m = t.match(/h[oọ0]c\s*k[iìíỳyỵ]\s*[:\-]?\s*(hè|he|III|II|I|[123])\b/i))) { const v = m[1].toLowerCase(); kq.ki = /^(hè|he|3|iii)$/.test(v) ? "Kì hè" : /^(2|ii)$/.test(v) ? "Kì 2" : "Kì 1"; }
    if ((m = t.match(/đ[eềếệ]\s*(?:thi\s*)?s[oố]\s*[:\-]?\s*([0-9]{1,3}|[A-D])\b/i))) kq.ten = `Đề số ${m[1].toUpperCase()}`;
    else if ((m = t.match(/m[aã]\s*đ[eềếệ]\s*[:\-]?\s*([0-9A-Za-z]{1,8})/i))) kq.ten = `Mã đề ${m[1]}`;
    const hp = t.match(/h[oọ0]c\s*ph[aầ]n\s*[:\-]\s*([^\n(]{3,60}?)\s*\(\s*([A-Za-z]{2,5}\s?\d{3,5})\s*\)/i), tg = t.match(/th[oờ]i\s*gian[^\d\n]{0,30}(\d{2,3})\s*ph/i), p = [];
    if (hp) p.push(`Học phần: ${bo(hp[1])} (${hp[2].replace(/\s/g, "")})`);
    if (tg) p.push(`${tg[1]} phút`);
    kq.ghiChu = p.join(" · ");
    return kq;
  }
  async function doc(blob, bao) {
    const w = await worker(bao); bao?.("Đang đọc chữ trên ảnh…");
    const { data } = await w.recognize(await catDau(blob)); return { chu: data.text, ...phanTich(data.text) };
  }
  return { doc, phanTich };
})();
