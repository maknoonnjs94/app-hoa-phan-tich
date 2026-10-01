/* =========================================================
   LÀM ĐẸP ẢNH ĐỀ THI (chạy ngay trên máy, không gửi ảnh đi đâu để xử lý)
   Các bước: xoay đúng chiều → xóa bóng đổ / làm đều nền → thẳng lại chữ → cắt viền thừa
             → phóng to (nếu ảnh nhỏ) → làm mượt nhiễu nhẹ → làm nét → nén gọn (WebP/JPEG).
   XLA.xuLy(tep, tuyChon, baoTienDo) → { blob, w, h, goc, thuNho (dataURL nhỏ) }
   ========================================================= */
const XLA = (() => {
  const MAC_DINH = { xoay: 0, ban: true, nen: true, thang: true, cat: true, to: true, muot: true, net: true, mau: false, toiDa: 600000 };
  const CANH_LAM_VIEC = 2600, CANH_TOI_DA = 3000;
  const tao = (w, h) => { const c = document.createElement("canvas"); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; };
  const ctx2d = c => c.getContext("2d", { willReadFrequently: true });
  const kep = v => v < 0 ? 0 : v > 255 ? 255 : v;
  const nghi = () => new Promise(r => setTimeout(r, 0));   // nhường giao diện cập nhật thanh tiến độ

  async function nap(tep) {
    let bm;
    try { bm = await createImageBitmap(tep, { imageOrientation: "from-image" }); }
    catch { bm = await new Promise((ok, loi) => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => loi(new Error("Không đọc được ảnh")); i.src = URL.createObjectURL(tep); }); }
    return bm;
  }
  function veVao(nguon, xoay, canhToiDa) {
    const w0 = nguon.width, h0 = nguon.height, quay = xoay % 180 !== 0, k = Math.min(1, canhToiDa / Math.max(w0, h0));
    const w = Math.round(w0 * k), h = Math.round(h0 * k), c = tao(quay ? h : w, quay ? w : h), g = ctx2d(c);
    g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height);
    g.translate(c.width / 2, c.height / 2); g.rotate(xoay * Math.PI / 180); g.imageSmoothingQuality = "high"; g.drawImage(nguon, -w / 2, -h / 2, w, h);
    return c;
  }
  const doSang = (d, i) => (d[i] * 299 + d[i + 1] * 587 + d[i + 2] * 114) / 1000;

  /* tách tờ giấy khỏi mặt bàn / nền chụp: tìm vùng sáng lớn nhất (Otsu), tô trắng mọi thứ ngoài tờ giấy */
  function boNenBan(c) {
    const w = c.width, h = c.height, k = 480 / Math.max(w, h), sw = Math.max(16, Math.round(w * k)), sh = Math.max(16, Math.round(h * k)), nho = tao(sw, sh), gn = ctx2d(nho);
    gn.imageSmoothingQuality = "high"; gn.drawImage(c, 0, 0, sw, sh);
    const p = gn.getImageData(0, 0, sw, sh).data, L = new Uint8Array(sw * sh), ls = new Uint32Array(256);
    for (let i = 0; i < sw * sh; i++) { L[i] = doSang(p, i * 4); ls[L[i]]++; }
    let tong = sw * sh, sum = 0; for (let v = 0; v < 256; v++) sum += v * ls[v];
    let wb = 0, sb = 0, tot = 128, max = -1;
    for (let v = 0; v < 256; v++) { wb += ls[v]; if (!wb) continue; const wf = tong - wb; if (!wf) break; sb += v * ls[v]; const mb = sb / wb, mf = (sum - sb) / wf, kq = wb * wf * (mb - mf) ** 2; if (kq > max) { max = kq; tot = v; } }
    const m = new Uint8Array(sw * sh); for (let i = 0; i < sw * sh; i++) m[i] = L[i] > tot ? 1 : 0;
    const nhan = new Int32Array(sw * sh), hang = []; let lon = -1, dtLon = 0, id = 0;
    for (let s0 = 0; s0 < sw * sh; s0++) { if (!m[s0] || nhan[s0]) continue; id++; let n = 0; hang.length = 0; hang.push(s0); nhan[s0] = id;
      while (hang.length) { const q = hang.pop(); n++; const x = q % sw, y = (q - x) / sw;
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= sw || yy >= sh) continue; const j = yy * sw + xx; if (m[j] && !nhan[j]) { nhan[j] = id; hang.push(j); } } }
      if (n > dtLon) { dtLon = n; lon = id; } }
    if (lon < 0 || dtLon < tong * 0.25 || dtLon > tong * 0.97) return null;   // không thấy bàn (ảnh scan kín trang) → bỏ qua
    const x0 = new Int32Array(sh).fill(sw), x1 = new Int32Array(sh).fill(-1), y0 = new Int32Array(sw).fill(sh), y1 = new Int32Array(sw).fill(-1);
    for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) if (nhan[y * sw + x] === lon) { if (x < x0[y]) x0[y] = x; if (x > x1[y]) x1[y] = x; if (y < y0[x]) y0[x] = y; if (y > y1[x]) y1[x] = y; }
    /* an toàn: nếu phần bị loại còn có CHỮ (giấy bị tối do bóng đổ) thì không dùng mặt nạ — thà giữ viền còn hơn mất nội dung */
    const trongTai = (x, y) => x >= x0[y] && x <= x1[y] && y >= y0[x] && y <= y1[x], moN = moHop(L, sw, sh, 3); let ngoai = 0, chiTiet = 0;
    for (let y = 6; y < sh - 6; y++) for (let x = 6; x < sw - 6; x++) { if (trongTai(x, y) || trongTai(x + 6, y) || trongTai(x - 6, y) || trongTai(x, y + 6) || trongTai(x, y - 6)) continue; ngoai++; if (Math.abs(L[y * sw + x] - moN[y * sw + x]) > 9) chiTiet++; }
    if (ngoai && chiTiet / ngoai > 0.035) return null;
    const mk = tao(sw, sh), gm = ctx2d(mk), im = gm.createImageData(sw, sh);
    for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) { const trong = x >= x0[y] + 3 && x <= x1[y] - 3 && y >= y0[x] + 3 && y <= y1[x] - 3; const v = trong ? 255 : 0, o = (y * sw + x) * 4; im.data[o] = im.data[o + 1] = im.data[o + 2] = v; im.data[o + 3] = 255; }
    gm.putImageData(im, 0, 0);
    const lonMk = tao(w, h), gl = ctx2d(lonMk); gl.imageSmoothingQuality = "high"; gl.drawImage(mk, 0, 0, w, h);
    const mm = gl.getImageData(0, 0, w, h).data, g = ctx2d(c), anh = g.getImageData(0, 0, w, h), d = anh.data;
    for (let i = 0; i < d.length; i += 4) if (mm[i] < 140) d[i] = d[i + 1] = d[i + 2] = 0;   // tạm tô đen: bước làm đều nền bỏ qua vùng này
    g.putImageData(anh, 0, 0);
    const mat = new Uint8Array(w * h); for (let i = 0; i < w * h; i++) mat[i] = mm[i * 4] < 140 ? 0 : 1; return mat;
  }
  function toTrangNgoai(c, mat) { if (!mat) return; const g = ctx2d(c), anh = g.getImageData(0, 0, c.width, c.height), d = anh.data; for (let i = 0; i < mat.length; i++) if (!mat[i]) { d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = 255; } g.putImageData(anh, 0, 0); }
  /* làm đều nền: ước lượng độ sáng nền (lọc max trên ảnh thu nhỏ) rồi chia ảnh cho nền → bóng đổ, ánh đèn lệch biến mất */
  function lamDeuNen(c) {
    const w = c.width, h = c.height, g = ctx2d(c), anh = g.getImageData(0, 0, w, h), d = anh.data;
    const sw = Math.max(24, Math.round(w / 18)), sh = Math.max(24, Math.round(h / 18)), nho = tao(sw, sh), gn = ctx2d(nho);
    gn.imageSmoothingQuality = "high"; gn.drawImage(c, 0, 0, sw, sh);
    const p = gn.getImageData(0, 0, sw, sh).data, a = new Float32Array(sw * sh), b = new Float32Array(sw * sh);
    for (let i = 0; i < sw * sh; i++) a[i] = doSang(p, i * 4);
    const R = 2;   // lọc max bán kính 2 ô (≈ 36 điểm ảnh gốc) để nét chữ không kéo tối nền
    for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) { let m = 0; for (let j = -R; j <= R; j++) for (let i = -R; i <= R; i++) { const yy = y + j, xx = x + i; if (yy >= 0 && yy < sh && xx >= 0 && xx < sw) { const v = a[yy * sw + xx]; if (v > m) m = v; } } b[y * sw + x] = m; }
    for (let k = 0; k < 2; k++) { for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) { let s = 0, n = 0; for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) { const yy = y + j, xx = x + i; if (yy >= 0 && yy < sh && xx >= 0 && xx < sw) { s += b[yy * sw + xx]; n++; } } a[y * sw + x] = s / n; } b.set(a); }
    const bo = tao(sw, sh), gb = ctx2d(bo), im = gb.createImageData(sw, sh);
    for (let i = 0; i < sw * sh; i++) { const v = kep(b[i]); im.data[i * 4] = im.data[i * 4 + 1] = im.data[i * 4 + 2] = v; im.data[i * 4 + 3] = 255; }
    gb.putImageData(im, 0, 0);
    const lon = tao(w, h), gl = ctx2d(lon); gl.imageSmoothingQuality = "high"; gl.drawImage(bo, 0, 0, w, h);
    const nen = gl.getImageData(0, 0, w, h).data;
    for (let i = 0; i < d.length; i += 4) { const f = 255 / Math.max(60, nen[i]); d[i] = kep(d[i] * f); d[i + 1] = kep(d[i + 1] * f); d[i + 2] = kep(d[i + 2] * f); }
    g.putImageData(anh, 0, 0);
  }
  /* kéo giãn tương phản: nền → trắng, chữ → đen đậm */
  function keoTuongPhan(c, mat) {
    const w = c.width, h = c.height, g = ctx2d(c), anh = g.getImageData(0, 0, w, h), d = anh.data, ls = new Uint32Array(256);
    let tong = 0; for (let i = 0; i < d.length; i += 4) { if (mat && !mat[i / 4]) continue; ls[Math.round(doSang(d, i))]++; tong++; }
    if (!tong) return; let t = 0, thap = 0; for (let v = 0; v < 256; v++) { t += ls[v]; if (t >= tong * 0.01) { thap = v; break; } }
    const lo = Math.min(thap + 8, 120), hi = 232, lut = new Uint8Array(256);
    for (let v = 0; v < 256; v++) { let x = (v - lo) / (hi - lo); x = x < 0 ? 0 : x > 1 ? 1 : x; lut[v] = Math.round(Math.pow(x, 1.25) * 255); }
    for (let i = 0; i < d.length; i += 4) { d[i] = lut[d[i]]; d[i + 1] = lut[d[i + 1]]; d[i + 2] = lut[d[i + 2]]; }
    g.putImageData(anh, 0, 0);
  }
  function veXam(c) { const g = ctx2d(c), a = g.getImageData(0, 0, c.width, c.height), d = a.data; for (let i = 0; i < d.length; i += 4) d[i] = d[i + 1] = d[i + 2] = doSang(d, i); g.putImageData(a, 0, 0); }

  /* đo độ nghiêng của dòng chữ: góc làm các dòng chữ “gọn” nhất khi chiếu ngang (phương sai lớn nhất) */
  function docGoc(c) {
    const k = 700 / Math.max(c.width, c.height), w = Math.round(c.width * Math.min(1, k)), h = Math.round(c.height * Math.min(1, k)), nho = tao(w, h), g = ctx2d(nho);
    g.imageSmoothingQuality = "high"; g.drawImage(c, 0, 0, w, h);
    const d = g.getImageData(0, 0, w, h).data, muc = [];
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (doSang(d, (y * w + x) * 4) < 150) muc.push(x, y);
    if (muc.length < 400) return 0;
    const diem = a => { const s = Math.sin(a), co = Math.cos(a), bin = new Float64Array(w + h + 4), off = w * Math.abs(s) + 2; let n = 0;
      for (let i = 0; i < muc.length; i += 2) { const p = Math.round(-muc[i] * s + muc[i + 1] * co + off); if (p >= 0 && p < bin.length) { bin[p]++; n++; } }
      let m = n / bin.length, v = 0; for (let i = 0; i < bin.length; i++) v += (bin[i] - m) ** 2; return v; };
    let tot = 0, ts = -1; const rad = x => x * Math.PI / 180;
    for (let a = -6; a <= 6.001; a += 0.5) { const s = diem(rad(a)); if (s > ts) { ts = s; tot = a; } }
    let tot2 = tot, ts2 = ts; for (let a = tot - 0.5; a <= tot + 0.501; a += 0.1) { const s = diem(rad(a)); if (s > ts2) { ts2 = s; tot2 = a; } }
    return Math.abs(tot2) < 0.25 ? 0 : tot2;
  }
  function xoayGoc(c, doGoc) {
    const k = doGoc * Math.PI / 180, o = tao(c.width, c.height), g = ctx2d(o);
    g.fillStyle = "#fff"; g.fillRect(0, 0, o.width, o.height); g.translate(o.width / 2, o.height / 2); g.rotate(-k); g.imageSmoothingQuality = "high"; g.drawImage(c, -c.width / 2, -c.height / 2);
    return o;
  }
  /* cắt viền thừa: giữ khung chứa chữ (bỏ dải sát mép 1,5% và các nét lẻ), chừa lề đều */
  function catVien(c) {
    const w = c.width, h = c.height, g = ctx2d(c), d = g.getImageData(0, 0, w, h).data, hang = new Uint32Array(h), cot = new Uint32Array(w), le = Math.round(Math.min(w, h) * 0.015);
    for (let y = le; y < h - le; y++) for (let x = le; x < w - le; x++) if (doSang(d, (y * w + x) * 4) < 140) { hang[y]++; cot[x]++; }
    const tim = (a, n, nguong, dau) => { const doc = dau ? i => i : i => n - 1 - i; for (let i = 0; i < n; i++) if (a[doc(i)] >= nguong) { let ok = 0; for (let j = 0; j < 6 && i + j < n; j++) if (a[doc(i + j)] >= nguong) ok++; if (ok >= 3) return doc(i); } return dau ? 0 : n - 1; };
    const ngH = Math.max(2, w * 0.004), ngC = Math.max(2, h * 0.004);
    let y0 = tim(hang, h, ngH, true), y1 = tim(hang, h, ngH, false), x0 = tim(cot, w, ngC, true), x1 = tim(cot, w, ngC, false);
    if (x1 - x0 < w * 0.3 || y1 - y0 < h * 0.3) return c;   // phát hiện không chắc → giữ nguyên
    const m = Math.round(Math.max(w, h) * 0.025); x0 = Math.max(0, x0 - m); y0 = Math.max(0, y0 - m); x1 = Math.min(w - 1, x1 + m); y1 = Math.min(h - 1, y1 + m);
    const o = tao(x1 - x0 + 1, y1 - y0 + 1); ctx2d(o).drawImage(c, x0, y0, o.width, o.height, 0, 0, o.width, o.height); return o;
  }
  function phongTo(c) {
    const lon = Math.max(c.width, c.height), he = lon < 1800 ? 2 : lon < 2400 ? 1.5 : 1, k = Math.min(he, CANH_TOI_DA / lon);
    if (k <= 1.01) return { c, k: 1 };
    const o = tao(c.width * k, c.height * k), g = ctx2d(o); g.imageSmoothingQuality = "high"; g.drawImage(c, 0, 0, o.width, o.height); return { c: o, k };
  }
  /* làm mờ hộp 1 kênh (cộng dồn) — dùng cho làm mượt và làm nét */
  function moHop(p, w, h, r) {
    const t = new Float32Array(w * h), o = new Uint8ClampedArray(w * h), n = 2 * r + 1;
    for (let y = 0; y < h; y++) { let s = 0; const b = y * w; for (let x = -r; x <= r; x++) s += p[b + Math.min(w - 1, Math.max(0, x))]; for (let x = 0; x < w; x++) { t[b + x] = s / n; s += p[b + Math.min(w - 1, x + r + 1)] - p[b + Math.max(0, x - r)]; } }
    for (let x = 0; x < w; x++) { let s = 0; for (let y = -r; y <= r; y++) s += t[Math.min(h - 1, Math.max(0, y)) * w + x]; for (let y = 0; y < h; y++) { o[y * w + x] = s / n; s += t[Math.min(h - 1, y + r + 1) * w + x] - t[Math.max(0, y - r) * w + x]; } }
    return o;
  }
  function loc(c, muot, net, k, xam) {
    const w = c.width, h = c.height, g = ctx2d(c), anh = g.getImageData(0, 0, w, h), d = anh.data, kenh = xam ? [0] : [0, 1, 2], p = new Uint8ClampedArray(w * h);
    for (const ch of kenh) {
      for (let i = 0; i < w * h; i++) p[i] = d[i * 4 + ch];
      let cur = p;
      if (muot) { const m = moHop(p, w, h, 1); cur = new Uint8ClampedArray(w * h); for (let i = 0; i < w * h; i++) cur[i] = 0.55 * p[i] + 0.45 * m[i]; }
      if (net) { const m = moHop(cur, w, h, Math.max(1, Math.round(1.2 * k))), q = new Uint8ClampedArray(w * h); for (let i = 0; i < w * h; i++) q[i] = cur[i] + 1.1 * (cur[i] - m[i]); cur = q; }
      for (let i = 0; i < w * h; i++) { d[i * 4 + ch] = cur[i]; if (xam) d[i * 4 + 1] = d[i * 4 + 2] = cur[i]; }
    }
    g.putImageData(anh, 0, 0);
  }
  const ra = (c, loai, q) => new Promise(ok => c.toBlob(ok, loai, q));
  async function nen(c, toiDa) {   // nén vừa dung lượng cho phép lưu trong Firestore
    let cur = c;
    for (let lan = 0; lan < 6; lan++) {
      for (const q of [0.86, 0.76, 0.66, 0.56, 0.46]) { let b = await ra(cur, "image/webp", q); if (!b || b.type !== "image/webp") b = await ra(cur, "image/jpeg", q); if (b && b.size <= toiDa) return { blob: b, c: cur }; }
      const o = tao(cur.width * 0.85, cur.height * 0.85), g = ctx2d(o); g.imageSmoothingQuality = "high"; g.drawImage(cur, 0, 0, o.width, o.height); cur = o;
    }
    return { blob: await ra(cur, "image/jpeg", 0.5), c: cur };
  }
  async function xuLy(tep, tuy = {}, bao = () => {}) {
    const o = { ...MAC_DINH, ...tuy };
    bao("Đang đọc ảnh…"); let c = veVao(await nap(tep), o.xoay, CANH_LAM_VIEC); await nghi();
    if (!o.mau) veXam(c);
    let mat = null; if (o.ban) { bao("Đang tách tờ giấy khỏi mặt bàn…"); mat = boNenBan(c); await nghi(); }
    if (o.nen) { bao("Đang làm đều nền, xóa bóng…"); lamDeuNen(c); keoTuongPhan(c, mat); await nghi(); }
    toTrangNgoai(c, mat);
    let goc = 0; if (o.thang) { bao("Đang làm thẳng chữ…"); goc = docGoc(c); if (goc) c = xoayGoc(c, goc); await nghi(); }
    if (o.cat) { bao("Đang cắt viền thừa…"); c = catVien(c); await nghi(); }
    let k = 1; if (o.to) { bao("Đang phóng to…"); ({ c, k } = phongTo(c)); await nghi(); }
    if (o.muot || o.net) { bao("Đang làm mượt, làm nét…"); loc(c, o.muot, o.net, k, !o.mau); await nghi(); }
    bao("Đang nén ảnh…"); const r = await nen(c, o.toiDa);
    const t = tao(220, 220 * r.c.height / r.c.width), gt = ctx2d(t); gt.imageSmoothingQuality = "high"; gt.drawImage(r.c, 0, 0, t.width, t.height);
    return { blob: r.blob, w: r.c.width, h: r.c.height, goc, thuNho: t.toDataURL("image/webp", 0.6) };
  }
  return { xuLy, MAC_DINH };
})();
