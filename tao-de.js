/* ================= TẠO ĐỀ KIỂM TRA =================
   Giáo viên chọn số câu theo từng chương + mức độ → app bốc câu (trải đều các dạng),
   tạo nhiều mã đề (đảo câu, đảo phương án), xem trước, làm thử, in / lưu PDF kèm đáp án,
   lưu trên máy và chia sẻ bằng đường link.
   Đề lưu ở localStorage khóa "de-da-luu". */

const KHO_DE_CAU = [...NGAN_HANG.map(c => ({ ...c, choDuyet: false })), ...NGAN_HANG_CHO_DUYET.map(c => ({ ...c, choDuyet: true }))];
KHO_DE_CAU.forEach(c => { if (!CAU_THEO_ID[c.id]) CAU_THEO_ID[c.id] = c; });

const cauHinhDe = boNho.doc("cau-hinh-de", null) || {
  ten: "Đề kiểm tra Hóa phân tích", phut: 45, choDuyet: false, muc: [1, 2, 3, 4],
  soCau: {}, soMa: 2, daoCau: true, daoPA: true,
};
const luuCauHinh = () => boNho.ghi("cau-hinh-de", cauHinhDe);
const dsDe = () => boNho.doc("de-da-luu", []);
const ghiDsDe = ds => boNho.ghi("de-da-luu", ds);
const timDe = id => dsDe().find(d => d.id === id);
const MA_DE = ["101", "102", "103", "104", "105", "106", "107", "108"];
const coDau = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

// Số ngẫu nhiên có hạt giống: cùng hạt giống → cùng mã đề (in lại vẫn y hệt)
function taoRng(hat) {
  let a = hat >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const tronRng = (a, rng) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

// Câu dùng được cho đề theo nguồn (có/không câu chờ duyệt) và mức độ
const cauDungDuoc = (chuong, ch = cauHinhDe) =>
  KHO_DE_CAU.filter(c => c.chuong === chuong && (ch.choDuyet || !c.choDuyet) && ch.muc.includes(c.mucDo));

// Bốc n câu của một chương, trải đều các dạng (mỗi vòng lấy 1 câu của mỗi dạng)
function bocCau(pool, n, rng, tranh = new Set()) {
  // Câu chùm (cùng trường "chum") được bốc nguyên cụm, tính theo số câu của cụm
  const donVi = {}, theoDang = {};
  pool.filter(c => !tranh.has(c.id)).forEach(c => { const k = c.chum || c.id; (donVi[k] ||= []).push(c); });
  tronRng(Object.values(donVi), rng).forEach(u => (theoDang[u[0].dang] ||= []).push(u));
  const nhom = tronRng(Object.values(theoDang), rng), kq = [];
  let conCho = true;
  while (kq.length < n && conCho) {
    conCho = false;
    for (const g of nhom) {
      const i = g.findIndex(u => kq.length + u.length <= n);
      if (i >= 0) { kq.push(...g.splice(i, 1)[0]); conCho = true; }
    }
  }
  return kq;
}

// Chọn 1 câu thay thế CÙNG DẠNG (cùng chương), chưa dùng ở mã nào: ưu tiên cùng mức độ, rồi khác mức, cuối cùng đành dùng lại
// Câu thay thế: ưu tiên cùng loại (lí thuyết/tính toán) và cùng mức độ để các mã đề khó như nhau.
const uuTienCungLoai = (pool, g) => [pool.filter(q => q.loai === g.loai && q.mucDo === g.mucDo), pool.filter(q => q.loai === g.loai), pool.filter(q => q.mucDo === g.mucDo), pool].find(p => p.length);
function chonThayThe(id, dung, rng) {
  const g = CAU_THEO_ID[id];
  if (!g || g.chum) return { id, loai: "" };   // câu chùm giữ nguyên
  const pool = KHO_DE_CAU.filter(q => q.chuong === g.chuong && q.dang === g.dang && !q.chum && !dung.has(q.id) && (cauHinhDe.choDuyet || !q.choDuyet || g.choDuyet));
  const chon = uuTienCungLoai(pool, g) || pool;
  if (!chon.length) return { id, loai: "lap" };
  const moi = chon[Math.floor(rng() * chon.length)];
  dung.add(moi.id);
  return { id: moi.id, loai: moi.mucDo === g.mucDo ? "" : "muc" };
}
// Thứ tự câu + thứ tự phương án của một mã (cụm câu chùm luôn đi liền nhau)
function xepMa(dsId, daoCau, daoPA, rng) {
  const cum = [];
  dsId.forEach((id, i) => { const k = CAU_THEO_ID[id]?.chum; const cuoi = cum[cum.length - 1];
    if (k && cuoi && CAU_THEO_ID[dsId[cuoi[0]]]?.chum === k) cuoi.push(i); else cum.push([i]); });
  return { thuTu: (daoCau ? tronRng(cum, rng) : cum).flat(), pa: dsId.map(() => daoPA ? tronRng([0, 1, 2, 3], rng) : [0, 1, 2, 3]) };
}
// Tạo các mã đề từ đề mẫu dsId. khac = true: mã 2 trở đi mỗi vị trí lấy một câu KHÁC cùng dạng (không trùng mã nào);
// thứ tự câu xáo riêng từng mã nên cùng một dạng nằm ở vị trí khác nhau giữa các mã.
function taoMaDe(dsId, soMa, daoCau, daoPA, hat, khac = false) {
  const rng = taoRng(hat), rngC = taoRng((hat ^ 0x5bd1e995) >>> 0), dung = new Set(dsId);
  return MA_DE.slice(0, soMa).map((ma, k) => {
    let cau = dsId, canhBao = [];
    if (khac && k > 0) cau = dsId.map((id, i) => { const r = chonThayThe(id, dung, rngC); if (r.loai) canhBao.push({ i, loai: r.loai }); return r.id; });
    return { ma, cau, canhBao, ...xepMa(dsId, daoCau, daoPA, rng) };
  });
}
const cauCuaMa = (de, m) => m.cau || de.cau;
const moiCauDe = de => [...new Set(de.ma.flatMap(m => cauCuaMa(de, m)))];   // mọi câu dùng trong đề (mọi mã)

/* ---------- Soạn đề 2 bước: (1) khung đề → (2) chọn câu (xem nguyên đề) ---------- */
// Tỉ lệ mức độ gợi ý theo kiểu đề (Nhận biết / Thông hiểu / Vận dụng / Vận dụng cao, %)
const KIEU_DE = {
  "co-ban": { ten: "Cơ bản", tl: [30, 40, 25, 5], lt: 55, mo: "Kiểm tra nhanh, 15 phút", goiY: "Nghiêng về khái niệm: nhận biết – thông hiểu gần như toàn lí thuyết, chỉ vài bài tính một bước." },
  "chuan": { ten: "Chuẩn", tl: [20, 30, 35, 15], lt: 40, mo: "Giữa kì, cuối chương", goiY: "Cân đối: nhận biết – thông hiểu nghiêng lí thuyết, vận dụng nghiêng tính toán, vận dụng cao là bài mẫu thật." },
  "nang-cao": { ten: "Nâng cao", tl: [10, 25, 40, 25], lt: 25, mo: "Thi cuối kì, chọn lọc", goiY: "Nghiêng về tính toán: chủ yếu bài nhiều bước và mẫu thật; lí thuyết chỉ giữ ở phần khái niệm và lựa chọn phương pháp." },
};
// Xác suất là câu lí thuyết theo từng mức (NB, TH, VD, VDC) — dùng để chia tỉ lệ lí thuyết/tính toán vào từng mức
const PROFILE_LT = [0.9, 0.55, 0.2, 0.05];
const TEN_LOAI_NGAN = { lt: "Lí thuyết", tt: "Tính toán" };
function chiaLoai(muc, ltPct) {
  const n = [1, 2, 3, 4].map(m => muc[m] || 0), tong = n.reduce((a, b) => a + b, 0), dich = Math.round(tong * ltPct / 100);
  const gt = k => n.map((c, i) => c * Math.min(1, k * PROFILE_LT[i]));
  let lo = 0, hi = 50; for (let i = 0; i < 40; i++) { const mid = (lo + hi) / 2; gt(mid).reduce((a, b) => a + b, 0) < dich ? lo = mid : hi = mid; }
  const tho = gt(hi), lt = tho.map(Math.floor); let con = dich - lt.reduce((a, b) => a + b, 0);
  [0, 1, 2, 3].sort((i, j) => (tho[j] - lt[j]) - (tho[i] - lt[i])).forEach(i => { if (con > 0 && lt[i] < n[i]) { lt[i]++; con--; } });
  const o = {}; [1, 2, 3, 4].forEach((m, i) => (o[m] = { lt: lt[i], tt: n[i] - lt[i] })); return o;
}
// Chia n câu theo tỉ lệ (phương pháp phần dư lớn nhất; hòa thì ưu tiên Vận dụng)
function chiaMucDo(n, tl) {
  const tho = tl.map(p => n * p / 100), nguyen = tho.map(Math.floor);
  let con = n - nguyen.reduce((a, b) => a + b, 0);
  [2, 1, 3, 0].sort((i, j) => (tho[j] - nguyen[j]) - (tho[i] - nguyen[i])).forEach(i => { if (con > 0) { nguyen[i]++; con--; } });
  return { 1: nguyen[0], 2: nguyen[1], 3: nguyen[2], 4: nguyen[3] };
}
const phutGoiY = n => Math.max(15, Math.ceil(n * 1.5 / 5) * 5);
const soan = Object.assign({ tong: 20, kieu: "chuan", chuong: [], chon: [] }, boNho.doc("de-dang-soan", {}));
if (!soan.muc) soan.muc = chiaMucDo(soan.tong, KIEU_DE[soan.kieu].tl);
if (soan.lt == null) soan.lt = KIEU_DE[soan.kieu].lt;
if (!soan.loai) soan.loai = chiaLoai(soan.muc, soan.lt);
const capNhatLoai = () => { soan.loai = chiaLoai(soan.muc, soan.lt); };
const luuSoan = () => boNho.ghi("de-dang-soan", soan);
const MAU_MUC = { 1: "nb", 2: "th", 3: "vd", 4: "vdc" }, TAT_MUC = { 1: "NB", 2: "TH", 3: "VD", 4: "VDC" };
const cauNguon = () => KHO_DE_CAU.filter(c => (cauHinhDe.choDuyet || !c.choDuyet) && (!soan.chuong.length || soan.chuong.includes(c.chuong)));
const demChon = () => { const d = { 1: 0, 2: 0, 3: 0, 4: 0 }; soan.chon.forEach(id => { const c = CAU_THEO_ID[id]; if (c) d[c.mucDo]++; }); return d; };
const demLoai = () => { const d = { 1: { lt: 0, tt: 0 }, 2: { lt: 0, tt: 0 }, 3: { lt: 0, tt: 0 }, 4: { lt: 0, tt: 0 } }; soan.chon.forEach(id => { const c = CAU_THEO_ID[id]; if (c) d[c.mucDo][c.loai]++; }); return d; };
const tongLoai = () => [1, 2, 3, 4].reduce((t, m) => ({ lt: t.lt + (soan.loai[m]?.lt || 0), tt: t.tt + (soan.loai[m]?.tt || 0) }), { lt: 0, tt: 0 });
const tongMuc = () => [1, 2, 3, 4].reduce((t, m) => t + (soan.muc[m] || 0), 0);

function datTong(n) { soan.tong = Math.max(1, Math.min(100, parseInt(n, 10) || 1)); soan.muc = chiaMucDo(soan.tong, KIEU_DE[soan.kieu].tl); capNhatLoai(); cauHinhDe.phut = phutGoiY(soan.tong); luuSoan(); luuCauHinh(); hienManHinh(); }
function datKieu(k) { soan.kieu = k; soan.muc = chiaMucDo(soan.tong, KIEU_DE[k].tl); soan.lt = KIEU_DE[k].lt; capNhatLoai(); luuSoan(); hienManHinh(); }
function doiLt(d) { soan.lt = Math.max(0, Math.min(100, soan.lt + d)); capNhatLoai(); luuSoan(); hienManHinh(); }
function doiMuc(m, d) { soan.muc[m] = Math.max(0, (soan.muc[m] || 0) + d); soan.tong = tongMuc(); capNhatLoai(); luuSoan(); hienManHinh(); }
function batChuong(id) { const i = soan.chuong.indexOf(id); i < 0 ? soan.chuong.push(id) : soan.chuong.splice(i, 1); luuSoan(); hienManHinh(); }
function chonMoiChuong(tat) { soan.chuong = tat ? [] : CHUONG.filter(c => KHO_DE_CAU.some(q => q.chuong === c.id)).map(c => c.id); luuSoan(); hienManHinh(); }

// Tự điền phần còn thiếu theo từng mức độ và loại (lí thuyết / tính toán): rải đều các chương đã chọn, trong chương rải đều các dạng
function tuDien() {
  const da = new Set(soan.chon), dem = demLoai(), dung = {}, dangDung = {};
  soan.chon.forEach(id => { const c = CAU_THEO_ID[id]; if (!c) return; dung[c.chuong] = (dung[c.chuong] || 0) + 1; const k = c.chuong + "|" + c.dang; dangDung[k] = (dangDung[k] || 0) + 1; });
  let them = 0, thieu = 0, doiLoai = 0;
  const themMot = (m, loai) => {
    const theoCh = {}; cauNguon().filter(c => c.mucDo === m && !c.chum && !da.has(c.id) && (!loai || c.loai === loai)).forEach(c => (theoCh[c.chuong] ||= []).push(c));
    const dsCh = Object.keys(theoCh); if (!dsCh.length) return false;
    const ch = dsCh.sort((x, y) => (dung[x] || 0) - (dung[y] || 0) || Math.random() - .5)[0];
    // ưu tiên dạng đủ câu cho số mã đề (để các mã sau có câu khác cùng dạng), rồi dạng chưa dùng nhiều
    const du = x => soCauDang(ch, x.dang, m, x.loai) >= ((dangDung[ch + "|" + x.dang] || 0) + 1) * (cauHinhDe.soMa || 1) ? 0 : 1;
    const ung = theoCh[ch].sort((x, y) => du(x) - du(y) || (dangDung[ch + "|" + x.dang] || 0) - (dangDung[ch + "|" + y.dang] || 0) || Math.random() - .5)[0];
    da.add(ung.id); soan.chon.push(ung.id); dung[ch] = (dung[ch] || 0) + 1; dangDung[ch + "|" + ung.dang] = (dangDung[ch + "|" + ung.dang] || 0) + 1; dem[m][ung.loai]++;
    them++; return true;
  };
  const conThieu = [];
  [1, 2, 3, 4].forEach(m => ["tt", "lt"].forEach(l => {
    let can = (soan.loai[m]?.[l] || 0) - dem[m][l];
    while (can > 0) { if (!themMot(m, l)) { conThieu.push(m); break; } can--; }
    if (can > 0) for (; can > 0; can--) conThieu.push(m);
  }));
  // thiếu câu đúng loại → lấy loại còn lại cùng mức để đủ khung mức độ
  conThieu.forEach(m => { if (themMot(m, null)) doiLoai++; else thieu++; });
  luuSoan(); hienManHinh();
  if (thieu || doiLoai) alert(`Đã thêm ${them} câu.${doiLoai ? ` ${doiLoai} câu phải lấy khác loại lí thuyết/tính toán đã định vì các chương đã chọn không đủ câu loại đó.` : ""}${thieu ? ` Còn thiếu ${thieu} câu vì các chương đã chọn không đủ câu ở mức độ đó — chọn thêm chương hoặc giảm số câu mức độ đó.` : ""}`);
}
function batDauChon(tuDong) {
  cauHinhDe.ten = (document.getElementById("ten-de").value || "").trim() || "Đề kiểm tra"; luuCauHinh();
  if (tuDong === true) { soan.chon = []; tuDien(); }
  locChon.tab = "de"; locChon.thay = "";
  location.hash = tuDong === "dang" ? "#/chon-dang" : "#/chon-cau";
}

// Tên ngắn của chương cho lưới chọn chương
const TEN_NGAN = { "mo-dau": "Mở đầu", "do-luong": "Đo lường", "thong-ke": "Thống kê", "can-bang": "Cân bằng", "axit-bazo": "Acid – base",
  "chuan-do-axit-bazo": "Chuẩn độ AB", "edta": "EDTA", "ket-tua": "Kết tủa", "oxi-hoa-khu": "Oxi hóa – khử", "hieu-chuan": "Hiệu chuẩn",
  "uv-vis": "UV-Vis", "quang-nguyen-tu": "Quang ng. tử", "dien-hoa": "Điện hóa", "sac-ki": "Sắc kí ĐC", "gc-hplc": "GC – HPLC" };
// Đổi một cấu hình của đề (thời gian, số mã, đảo câu / phương án, tên đề…) và lưu; vẽ lại màn đang mở
function datCauHinh(khoa, v) {
  cauHinhDe[khoa] = v; luuCauHinh();
  if (khoa === "soMa" && document.getElementById("vung-chon")) veChonCau();
  else if (khoa === "choDuyet") hienManHinh();
}
function datTenGoiY() {
  const cs = soan.chuong.length ? soan.chuong : [], ten = cs.length ? cs.slice(0, 3).map(id => TEN_NGAN[id] || id).join(" + ") + (cs.length > 3 ? " +…" : "") : "Tổng hợp";
  cauHinhDe.ten = `${ten} — ${soan.tong} câu ${KIEU_DE[soan.kieu].ten.toLowerCase()}`; luuCauHinh();
  const o = document.getElementById("ten-de"); if (o) o.value = cauHinhDe.ten;
}
function doiTong(d) { datTong(soan.tong + d); }
function doiPhut(d) { cauHinhDe.phut = Math.max(5, Math.min(180, cauHinhDe.phut + d)); luuCauHinh(); hienManHinh(); }
function batNhom(nhom) {
  const ids = CHUONG.filter(c => c.nhom === nhom && KHO_DE_CAU.some(q => q.chuong === c.id)).map(c => c.id);
  const du = ids.every(id => soan.chuong.includes(id));
  soan.chuong = du ? soan.chuong.filter(id => !ids.includes(id)) : [...new Set([...soan.chuong, ...ids])];
  luuSoan(); hienManHinh();
}
let moTuyChon = false;
MAN_HINH["/tao-de"] = {
  tieuDe: "Tạo đề",
  ve: () => {
    const luu = dsDe(), nguon = cauNguon(), coTheoMuc = m => nguon.filter(c => c.mucDo === m).length;
    const nhomCh = [...new Set(CHUONG.map(c => c.nhom))].map(n => [n, CHUONG.filter(c => c.nhom === n && KHO_DE_CAU.some(q => q.chuong === c.id))]);
    return `
    <div class="buoc-soan"><span class="dang">1 · Khung đề</span><span>2 · Chọn câu</span><span>3 · Mã đề, in, giao</span></div>
    <div class="the-trang tao-de gon">
      <input class="o-ten-de" id="ten-de" value="${coDau(cauHinhDe.ten)}" onchange="datCauHinh('ten', this.value)" aria-label="Tên đề" placeholder="Tên đề"><button type="button" class="goi-y" onclick="datTenGoiY()">✨ Gợi ý tên theo chủ đề</button>
      <div class="hang-2">
        <div class="o-dem"><small>Số câu</small><span class="buoc"><button onclick="doiTong(-5)">−</button>
          <input inputmode="numeric" value="${soan.tong}" onchange="datTong(this.value)" aria-label="Số câu"><button onclick="doiTong(5)">+</button></span></div>
        <div class="o-dem"><small>Thời gian (phút)</small><span class="buoc"><button onclick="doiPhut(-5)">−</button>
          <b>${cauHinhDe.phut}</b><button onclick="doiPhut(5)">+</button></span>
          ${cauHinhDe.phut !== phutGoiY(soan.tong) ? `<button class="goi-y" onclick="datCauHinh('phut', ${phutGoiY(soan.tong)});hienManHinh()">gợi ý ${phutGoiY(soan.tong)}</button>` : ""}</div>
      </div>
      <div class="phan-doan">${Object.entries(KIEU_DE).map(([k, v]) => `<button class="${soan.kieu === k ? "chon" : ""}" onclick="datKieu('${k}')"><b>${v.ten}</b><small>${v.tl.join("/")}</small><small>LT ${v.lt}%</small></button>`).join("")}</div>
      <div class="luoi-md">${[1, 2, 3, 4].map(m => `<div class="o-md muc-${MAU_MUC[m]}"><small>${TAT_MUC[m]}</small>
        <span class="buoc-md"><button onclick="doiMuc(${m},-1)" ${soan.muc[m] ? "" : "disabled"} aria-label="Bớt">−</button><b>${soan.muc[m] || 0}</b><button onclick="doiMuc(${m},1)" aria-label="Thêm">+</button></span>
        <small class="${coTheoMuc(m) < (soan.muc[m] || 0) ? "loi-tk" : ""}">/${coTheoMuc(m)}</small></div>`).join("")}</div>
      <p class="ghi-chu nho">NB Nhận biết · TH Thông hiểu · VD Vận dụng · VDC Vận dụng cao · /số câu kho có</p>
      ${(() => { const t = tongLoai(), ltKho = nguon.filter(c => c.loai === "lt").length, ttKho = nguon.length - ltKho;
        return `<div class="khung-loai"><div class="o-dem"><small>Lí thuyết · Tính toán</small><span class="buoc"><button onclick="doiLt(-5)" ${soan.lt <= 0 ? "disabled" : ""}>−</button>
          <b>${soan.lt}% · ${100 - soan.lt}%</b><button onclick="doiLt(5)" ${soan.lt >= 100 ? "disabled" : ""}>+</button></span></div>
          <div class="chip-loai">${["lt", "tt"].map(l => `<span class="chip-muc ${(l === "lt" ? ltKho : ttKho) < t[l] ? "thieu" : "du"}">${TEN_LOAI_NGAN[l]} ${t[l]} <i>/${l === "lt" ? ltKho : ttKho} trong kho</i></span>`).join("")}</div>
          <p class="ghi-chu nho">${KIEU_DE[soan.kieu].goiY}</p>
          <p class="ghi-chu nho">Chia theo mức (lí thuyết + tính toán): ${[1, 2, 3, 4].map(m => `<b>${TAT_MUC[m]}</b> ${soan.loai[m].lt}+${soan.loai[m].tt}`).join(" · ")}</p></div>`; })()}

      <div class="dau-muc-ch"><b>Chương</b><small class="ghi-chu">${soan.chuong.length ? `đã chọn ${soan.chuong.length}` : "chưa chọn = mọi chương"}</small>
        ${soan.chuong.length ? `<button class="chip-nhanh" onclick="chonMoiChuong(true)">Bỏ chọn</button>` : ""}</div>
      ${nhomCh.map(([n, ds]) => `<div class="nhom-ch"><button class="ten-nhom" onclick="batNhom('${n}')">${n} ${ds.every(c => soan.chuong.includes(c.id)) ? "✓" : "＋"}</button>
        <div class="luoi-ch">${ds.map(c => `<button class="o-ch ${soan.chuong.includes(c.id) ? "chon" : ""}" onclick="batChuong('${c.id}')">${c.icon} ${TEN_NGAN[c.id] || c.ten}</button>`).join("")}</div></div>`).join("")}

      <details class="tuy-chon" ${moTuyChon ? "open" : ""} ontoggle="moTuyChon=this.open"><summary>Mã đề: ${cauHinhDe.soMa} mã${cauHinhDe.daoCau ? " · đảo câu" : ""}${cauHinhDe.daoPA ? " · đảo phương án" : ""}</summary>
        <div class="nhom-chip">${[1, 2, 4, 6, 8].map(n => `<label class="chip-chon"><input type="radio" name="de-so-ma" ${cauHinhDe.soMa === n ? "checked" : ""} onchange="datCauHinh('soMa', ${n});hienManHinh()"><span>${n} mã</span></label>`).join("")}</div>
        <label class="dong-bat"><input type="checkbox" ${cauHinhDe.daoCau ? "checked" : ""} onchange="datCauHinh('daoCau', this.checked);hienManHinh()"><span>Đảo thứ tự câu giữa các mã</span></label>
        <label class="dong-bat"><input type="checkbox" ${cauHinhDe.daoPA ? "checked" : ""} onchange="datCauHinh('daoPA', this.checked);hienManHinh()"><span>Đảo thứ tự phương án A, B, C, D</span></label>
        ${NGAN_HANG_CHO_DUYET.length ? `<label class="dong-bat"><input type="checkbox" ${cauHinhDe.choDuyet ? "checked" : ""} onchange="datCauHinh('choDuyet', this.checked)"><span>Dùng cả câu chờ duyệt</span></label>` : ""}
      </details>
      ${soan.chon.length ? `<p class="ghi-chu">Đang có bản soạn dở ${soan.chon.length} câu — <a href="#/chon-cau">tiếp tục chọn</a>.</p>` : ""}
    </div>
    <div class="nut-hang hai-nut day-chon">
      <button class="btn phu" onclick="batDauChon('dang')">☑ Chọn nhiều dạng</button>
      <button class="btn" onclick="batDauChon(true)">✨ Gợi ý sẵn ${tongMuc()} câu</button></div>
    ${luu.length ? `<h2>Đề đã lưu <a class="lien-ket nho" href="#/ngan-hang-de">📚 Ngân hàng đề (${luu.length})</a></h2><div class="list">${luu.slice(0, 3).map(d =>
      dongDanhSach(`#/de?id=${d.id}`, "📄", coDau(d.ten), `${d.cau.length} câu · ${d.phut} phút · ${d.ma.length} mã · ${new Date(d.ngay).toLocaleDateString("vi-VN")}`)).join("")}</div>` : ""}`;
  },
};

/* ---------- Bước 2: chọn câu, xem nguyên đề ---------- */
const locChon = { tab: "de", chuong: "", loai: "", muc: 0, dang: "", tu: "", anDaChon: true, dapAn: false, so: 15, thay: "", addCh: "", addDang: "", addLoai: "", addN: 1 };
// Đề xuất điểm từng câu (tổng 10). Vận dụng cao chỉ chiếm đoạn cuối của thang điểm (khoảng 8,5–10 để học sinh còn "kiếm" điểm):
// tổng điểm nhóm VDC tăng theo tỉ lệ câu VDC trong đề — đề dễ (ít VDC) ≈ 0,8 điểm, đề khó tối đa 1,5 điểm.
// Phần còn lại chia cho nhận biết : thông hiểu : vận dụng = 1 : 1,5 : 2. Làm tròn 0,05, bù để tổng đúng 10.
const TRONG_SO_MUC = { 1: 1, 2: 1.5, 3: 2 };
function chiaNguyen05(tong, w) {   // chia `tong` điểm theo trọng số w, bước 0,05, tổng đúng bằng `tong`
  const T = w.reduce((a, b) => a + b, 0) || 1, tho = w.map(x => tong * x / T / 0.05), buoc = tho.map(Math.floor);
  let con = Math.round(tong / 0.05) - buoc.reduce((a, b) => a + b, 0);
  tho.map((x, i) => i).sort((i, j) => (tho[j] - buoc[j]) - (tho[i] - buoc[i])).forEach(i => { if (con > 0) { buoc[i]++; con--; } });
  return buoc.map(b => Math.round(b * 5) / 100);
}
function deXuatDiem(ids) {
  const muc = ids.map(id => CAU_THEO_ID[id]?.mucDo || 3), n = ids.length, i4 = muc.map((m, i) => m === 4 ? i : -1).filter(i => i >= 0), kho = muc.map((m, i) => m === 4 ? -1 : i).filter(i => i >= 0);
  if (!n) return [];
  const V4 = !i4.length ? 0 : !kho.length ? 10 : Math.min(1.5, Math.max(0.5, 0.5 + 6 * i4.length / n)), kq = new Array(n).fill(0);
  if (i4.length) chiaNguyen05(V4, i4.map(() => 1)).forEach((x, k) => (kq[i4[k]] = x));
  if (kho.length) chiaNguyen05(10 - V4, kho.map(i => TRONG_SO_MUC[muc[i]] || 2)).forEach((x, k) => (kq[kho[k]] = x));
  return kq;
}
const soCauDang = (chuong, dang, muc = 0, loai = "") => KHO_DE_CAU.filter(q => q.chuong === chuong && q.dang === dang && !q.chum && (!muc || q.mucDo === muc) && (!loai || q.loai === loai) && (cauHinhDe.choDuyet || !q.choDuyet)).length;
const dangCuaChuong = chuong => [...new Set(cauNguon().filter(c => c.chuong === chuong && !c.chum).map(c => c.dang))]
  .sort((a, b) => (tenDang(a) || "").localeCompare(tenDang(b) || "", "vi"));
const soMaKhac = () => Math.max(0, (cauHinhDe.soMa || 1) - 1);
// Giữ soan.bt khớp với đề mẫu: bỏ vị trí đã xóa, bỏ câu trùng, bổ sung câu còn thiếu (cùng dạng, không trùng câu nào trong đề)
function capNhatBienThe() {
  soan.bt = soan.bt || {};
  Object.keys(soan.bt).forEach(k => { if (!soan.chon.includes(k)) delete soan.bt[k]; });
  const seen = new Set(soan.chon);
  soan.chon.forEach(id => {
    const g = CAU_THEO_ID[id], n = soMaKhac(); if (!g) return;
    let arr = (soan.bt[id] || []).slice(0, n).filter(v => CAU_THEO_ID[v] && (v === id || !seen.has(v)));
    arr.forEach(v => { if (v !== id) seen.add(v); });
    while (arr.length < n) arr.push(g.chum ? id : chonThayThe(id, seen, Math.random).id);
    soan.bt[id] = arr;
  });
  luuSoan();
}
const loaiBienThe = (idMau, v) => { const g = CAU_THEO_ID[idMau], q = CAU_THEO_ID[v]; return g.chum ? "chum" : v === idMau ? "lap" : q.mucDo !== g.mucDo ? "muc" : ""; };
const tatCaBienThe = () => new Set([...soan.chon, ...Object.values(soan.bt || {}).flat()]);
// 🎲 một ô: đổi câu của mã (k+2) tại vị trí idMau sang câu khác cùng dạng
function doiBienThe(idMau, k) {
  const seen = tatCaBienThe();
  const r = chonThayThe(idMau, seen, Math.random);
  if (r.id === idMau && r.loai === "lap") return alert("Dạng này không còn câu nào khác chưa dùng trong đề.");
  soan.bt[idMau][k] = r.id; luuSoan(); veChonCau();
}
// 🎲 cả hàng: đổi câu của mọi mã khác tại vị trí này
function doiHangBienThe(idMau) {
  const seen = tatCaBienThe(); let doi = 0;
  soan.bt[idMau] = soan.bt[idMau].map(v => { const r = chonThayThe(idMau, seen, Math.random); if (r.id === idMau) return v; doi++; return r.id; });
  luuSoan(); veChonCau(); if (!doi) alert("Dạng này không còn câu nào khác chưa dùng trong đề.");
}
const xemTruocCau = q => `<div class="de-cau">${q.de}</div><ol class="pa-de" type="A">${q.phuongAn.map((p, j) => `<li><span class="chu">${CHU[j]}.</span> ${p}</li>`).join("")}</ol>`;
function khoiBienThe(c) {
  if (soMaKhac() < 1) return "";
  if (c.chum) return `<div class="bien-the"><small>Câu chùm: giữ nguyên ở mọi mã đề.</small></div>`;
  const arr = soan.bt?.[c.id] || [];
  return `<div class="bien-the"><div class="bt-dau"><b>Câu của các mã khác</b><button class="btn phu nho" onclick="doiHangBienThe('${c.id}')">🎲 Đổi cả hàng</button></div>
    ${arr.map((v, k) => { const q = CAU_THEO_ID[v], lo = loaiBienThe(c.id, v);
      return `<div class="bt-dong" onclick="this.classList.toggle('mo')"><div class="bt-tren"><span class="ma">Mã ${MA_DE[k + 1]}</span>
        <span class="bt-id">${lo === "lap" ? "⚠️ dùng lại câu mẫu (hết câu)" : `${q.id} · ${TAT_MUC[q.mucDo]}${lo === "muc" ? " ⚠️ khác mức" : ""}`}</span>
        <button class="nut-xs" onclick="event.stopPropagation();doiBienThe('${c.id}',${k})" aria-label="Đổi câu mã ${MA_DE[k + 1]}">🎲</button></div>
        <div class="bt-xem">${lo === "lap" ? "" : q.de.replace(/<[^>]+>/g, " ").slice(0, 140)}</div><div class="bt-day">${xemTruocCau(q)}</div></div>`; }).join("")}</div>`;
}
function theCauChon(c, trongDe) {
  const da = soan.chon.includes(c.id), cum = c.chum ? KHO_DE_CAU.filter(x => x.chum === c.chum) : null;
  const nDang = soCauDang(c.chuong, c.dang), thay = locChon.thay && !da;
  const canhBao = trongDe && !c.chum && nDang < (cauHinhDe.soMa || 1) ? `<small class="loi-tk">⚠️ Dạng này chỉ có ${nDang} câu — chỉ đủ ${nDang} mã khác nhau, các mã sau sẽ phải dùng lại câu.</small>` : "";
  return `<div class="the-trang cau-chon ${da ? "da-chon" : ""}">
    <div class="nhan-cau"><span>${c.id}</span><span class="muc-${c.mucDo}">${MUC_DO[c.mucDo]}</span><span class="loai-${c.loai}">${TEN_LOAI[c.loai]}</span><span>${tenChuong(c.chuong)}</span>${cum ? `<span>Chùm ${cum.length} câu</span>` : ""}</div>
    <div class="ten-dang">${tenDang(c.dang)}${trongDe && !c.chum ? ` <small>· kho có ${nDang} câu dạng này</small>` : ""}</div>${canhBao}
    ${c.dan ? `<div class="de-dan">${c.dan}</div>` : ""}<div class="de-cau">${c.de}</div>${bangTin(c)}
    <ol class="pa-de" type="A">${c.phuongAn.map((p, j) => `<li class="${locChon.dapAn && CHU[j] === c.dapAn ? "dung" : ""}"><span class="chu">${CHU[j]}.</span> ${p}</li>`).join("")}</ol>
    ${trongDe ? `<div class="nut-hang">
        ${c.chum ? "" : `<button class="btn phu" onclick="doiCauSoan('${c.id}')">🎲 Câu khác cùng dạng</button>
          <select class="doi-dang" onchange="doiDangViTri('${c.id}', this.value)" aria-label="Đổi dạng"><option value="">🔁 Đổi dạng…</option>
            ${dangCuaChuong(c.chuong).filter(d => d !== c.dang && soCauDang(c.chuong, d, 0, c.loai) > 0).map(d => `<option value="${coDau(d)}">${coDau(tenDang(d))} (${soCauDang(c.chuong, d, 0, c.loai)} câu ${c.loai === "tt" ? "tính toán" : "lí thuyết"})</option>`).join("")}</select>
          <button class="btn phu" onclick="chonTayViTri('${c.id}')">✋ Chọn tay</button>`}
        <button class="btn phu" onclick="batChonCau('${c.id}')">🗑 Bỏ</button></div>${khoiBienThe(c)}`
    : `<div class="nut-hang"><button class="btn ${da ? "phu" : ""}" onclick="${thay ? `thayViTri('${c.id}')` : `batChonCau('${c.id}')`}">${da ? "✓ Đã chọn · Bỏ" : thay ? "⇄ Dùng câu này thay" : "＋ Thêm vào đề"}</button></div>`}</div>`;
}
function batChonCau(id) {
  const c = CAU_THEO_ID[id], nhom = c.chum ? KHO_DE_CAU.filter(x => x.chum === c.chum).map(x => x.id) : [id];
  if (soan.chon.includes(id)) soan.chon = soan.chon.filter(x => !nhom.includes(x));
  else soan.chon.push(...nhom.filter(x => !soan.chon.includes(x)));
  luuSoan(); veChonCau();
}
// 🎲 Bốc câu khác CÙNG DẠNG (ưu tiên cùng mức độ), chưa có trong đề mẫu
function doiCauSoan(id) {
  const g = CAU_THEO_ID[id], da = new Set(soan.chon);
  const pool = cauNguon().filter(c => !da.has(c.id) && !c.chum && c.chuong === g.chuong && c.dang === g.dang);
  const chon = uuTienCungLoai(pool, g);
  if (!chon) return alert("Dạng này không còn câu nào khác. Dùng “🔁 Đổi dạng…” hoặc “✋ Chọn tay”.");
  soan.chon[soan.chon.indexOf(id)] = chon[Math.floor(Math.random() * chon.length)].id; luuSoan(); veChonCau();
}
// 🔁 Đổi cả dạng của vị trí: app tự bốc 1 câu ngẫu nhiên trong dạng mới (ưu tiên cùng mức độ)
function doiDangViTri(id, dangMoi) {
  if (!dangMoi) return;
  const g = CAU_THEO_ID[id], da = new Set(soan.chon);
  const pool = cauNguon().filter(c => !da.has(c.id) && !c.chum && c.chuong === g.chuong && c.dang === dangMoi && c.loai === g.loai);
  const chon = uuTienCungLoai(pool, g);
  if (!chon) return alert("Dạng đó không còn câu nào chưa dùng.");
  soan.chon[soan.chon.indexOf(id)] = chon[Math.floor(Math.random() * chon.length)].id; luuSoan(); veChonCau();
}
// ✋ Chọn tay: mở kho, lọc sẵn theo chương + dạng của vị trí; bấm “Dùng câu này thay”
function chonTayViTri(id) {
  const g = CAU_THEO_ID[id];
  Object.assign(locChon, { tab: "kho", thay: id, chuong: g.chuong, dang: g.dang, muc: 0, tu: "", anDaChon: true, so: 15 }); veChonCau();
}
function thayViTri(moi) {
  const i = soan.chon.indexOf(locChon.thay); if (i < 0) return;
  soan.chon[i] = moi; locChon.thay = ""; locChon.tab = "de"; luuSoan(); veChonCau();
}
// ＋ Thêm vào đề mẫu n câu ngẫu nhiên của một dạng
function themTheoDang() {
  const { addCh, addDang, addN } = locChon;
  if (!addCh || !addDang) return alert("Chọn chương và dạng trước.");
  const da = new Set(soan.chon), pool = tronMang(cauNguon().filter(c => !da.has(c.id) && !c.chum && c.chuong === addCh && c.dang === addDang && (!locChon.addLoai || c.loai === locChon.addLoai)));
  if (!pool.length) return alert("Dạng này không còn câu chưa dùng.");
  const them = pool.slice(0, Math.max(1, addN));
  soan.chon.push(...them.map(c => c.id)); luuSoan(); veChonCau();
  if (them.length < addN) alert(`Dạng này chỉ còn ${them.length} câu, đã thêm ${them.length}.`);
}
function datLocChon(k, v) { locChon[k] = v; locChon.so = 15; veChonCau(); }
function thanhTienDoChon() {
  const d = demChon();
  return `<div class="thanh-chon"><b>Đã chọn ${soan.chon.length}/${tongMuc()}</b>
    ${[1, 2, 3, 4].map(m => { const n = d[m], t = soan.muc[m] || 0; return `<button class="chip-muc ${n === t ? "du" : n > t ? "thua" : "thieu"}" onclick="locChon.tab='kho';datLocChon('muc',${m})">${TAT_MUC[m]} ${n}/${t}</button>`; }).join("")}</div>
    <div class="nhom-chip"><button class="chip-nhanh ${locChon.tab === "de" ? "chon" : ""}" onclick="locChon.tab='de';locChon.thay='';veChonCau()">Đề mẫu (${soan.chon.length} câu)</button>
      <button class="chip-nhanh ${locChon.tab === "kho" ? "chon" : ""}" onclick="locChon.tab='kho';veChonCau()">Kho câu (chọn tay)</button></div>`;
}
function veChonCau() {
  const v = document.getElementById("vung-chon"); if (!v) return;
  const tt = document.getElementById("tien-do-chon"); if (tt) tt.innerHTML = thanhTienDoChon();
  if (locChon.tab === "de") {
    capNhatBienThe();
    const ds = soan.chon.map(id => CAU_THEO_ID[id]).filter(Boolean).sort((a, b) => a.mucDo - b.mucDo);
    const cs = locChon.addCh || soan.chuong[0] || CHUONG.find(c => KHO_DE_CAU.some(q => q.chuong === c.id))?.id || "", dsD = dangCuaChuong(cs).filter(d => soCauDang(cs, d, 0, locChon.addLoai) > 0);
    if (locChon.addCh !== cs || !dsD.includes(locChon.addDang)) { locChon.addCh = cs; locChon.addDang = dsD[0] || ""; }
    v.innerHTML = `<a class="btn full" href="#/chon-dang">☑ Chọn nhiều dạng cùng lúc</a>
      <details class="the-trang them-dang" ${ds.length && !locChon.moThem ? "" : "open"} ontoggle="if(this.open!==!!locChon.moThem)locChon.moThem=this.open"><summary><b>＋ Thêm câu theo dạng</b> <small>(app tự bốc ngẫu nhiên trong dạng)</small></summary>
        <div class="hang-loc-3 hai-cot"><select onchange="locChon.addCh=this.value;locChon.addDang='';veChonCau()" aria-label="Chương">${CHUONG.filter(c => cauNguon().some(q => q.chuong === c.id)).map(c => `<option value="${c.id}" ${cs === c.id ? "selected" : ""}>${TEN_NGAN[c.id] || c.ten}</option>`).join("")}</select>
          <select onchange="locChon.addLoai=this.value;locChon.addDang='';veChonCau()" aria-label="Loại câu"><option value="">Mọi loại</option><option value="lt" ${locChon.addLoai === "lt" ? "selected" : ""}>Lí thuyết</option><option value="tt" ${locChon.addLoai === "tt" ? "selected" : ""}>Tính toán</option></select>
          <select onchange="locChon.addDang=this.value" aria-label="Dạng">${dsD.map(d => `<option value="${coDau(d)}" ${locChon.addDang === d ? "selected" : ""}>${coDau(tenDang(d))} (${soCauDang(cs, d, 0, locChon.addLoai)})</option>`).join("")}</select></div>
        <div class="nut-hang"><span class="buoc"><button onclick="locChon.addN=Math.max(1,locChon.addN-1);veChonCau()">−</button><b>${locChon.addN}</b><button onclick="locChon.addN++;veChonCau()">+</button></span> câu
          <button class="btn" onclick="themTheoDang()">＋ Thêm ngẫu nhiên</button></div></details>
      <p class="ghi-chu">Đề mẫu (mã ${MA_DE[0]}): mỗi câu là một <b>dạng</b>. Dưới mỗi câu là <b>câu của các mã khác</b> (cùng dạng, khác câu): bấm dòng để xem đầy đủ, bấm 🎲 để đổi. Thứ tự câu mỗi mã sẽ xáo riêng khi sinh mã đề.</p>
      ${lamToan(ds.length ? ds.map(c => theCauChon(c, true)).join("") : `<div class="trong">Chưa có câu nào. Bấm “✨ Gợi ý sẵn” ở bước 1 hoặc thêm theo dạng ở trên.</div>`)}`;
    return;
  }
  const tu = boDau(locChon.tu).split(/\s+/).filter(Boolean);
  const banner = locChon.thay ? `<div class="the-trang canh-bao-cu">✋ Đang chọn câu thay cho <b>${locChon.thay}</b> (${coDau(tenDang(CAU_THEO_ID[locChon.thay]?.dang || ""))}). <button class="btn nho phu" onclick="locChon.thay='';locChon.tab='de';veChonCau()">Hủy</button></div>` : "";
  const nguon = cauNguon().filter(c => (!locChon.chuong || c.chuong === locChon.chuong) && (!locChon.muc || c.mucDo === locChon.muc) && (!locChon.loai || c.loai === locChon.loai)
    && (!locChon.dang || c.dang === locChon.dang) && (!locChon.anDaChon || !soan.chon.includes(c.id))
    && (!tu.length || tu.every(t => khoaTimCau(c).includes(t))));
  const dsDang = [...new Set(cauNguon().filter(c => !locChon.chuong || c.chuong === locChon.chuong).map(c => c.dang))];
  v.innerHTML = banner + `<div class="loc-chon">
      <input type="search" placeholder="🔍 Tìm chất, từ khóa, mã câu…" value="${coDau(locChon.tu)}" oninput="clearTimeout(locChon.h);locChon.h=setTimeout(()=>datLocChon('tu',this.value),300)">
      <div class="hang-loc-3">
        <select onchange="locChon.dang='';datLocChon('chuong',this.value)" aria-label="Chương"><option value="">Mọi chương</option>${CHUONG.filter(c => cauNguon().some(q => q.chuong === c.id)).map(c => `<option value="${c.id}" ${locChon.chuong === c.id ? "selected" : ""}>${TEN_NGAN[c.id] || c.ten}</option>`).join("")}</select>
        <select onchange="datLocChon('muc',Number(this.value))" aria-label="Mức độ">${[0, 1, 2, 3, 4].map(m => `<option value="${m}" ${locChon.muc === m ? "selected" : ""}>${m ? MUC_DO[m] : "Mọi mức"}</option>`).join("")}</select>
        <select onchange="datLocChon('loai',this.value)" aria-label="Loại câu"><option value="">Mọi loại</option><option value="lt" ${locChon.loai === "lt" ? "selected" : ""}>Lí thuyết</option><option value="tt" ${locChon.loai === "tt" ? "selected" : ""}>Tính toán</option></select>
        <select onchange="datLocChon('dang',this.value)" aria-label="Dạng"><option value="">Mọi dạng</option>${dsDang.map(d => `<option value="${coDau(d)}" ${locChon.dang === d ? "selected" : ""}>${coDau(tenDang(d))}</option>`).join("")}</select>
      </div>
      <div class="nhom-chip">
        <label class="chip-chon"><input type="checkbox" ${locChon.anDaChon ? "checked" : ""} onchange="datLocChon('anDaChon',this.checked)"><span>Ẩn câu đã chọn</span></label>
        <label class="chip-chon"><input type="checkbox" ${locChon.dapAn ? "checked" : ""} onchange="datLocChon('dapAn',this.checked)"><span>Hiện đáp án</span></label></div>
    </div><p class="ghi-chu">${nguon.length} câu phù hợp</p>
    <div id="ds-chon">${lamToan(nguon.slice(0, locChon.so).map(c => theCauChon(c)).join(""))}</div>
    ${nguon.length > locChon.so ? `<button class="btn full phu" onclick="locChon.so+=15;veChonCau()">Xem thêm (${nguon.length - locChon.so} câu)</button>` : ""}`;
}
/* ---------- Chọn nhiều dạng cùng lúc: tích hàng loạt, gợi ý theo khung, mỗi dạng chỉnh số câu, bấm một lần thêm hết ---------- */
const chonDang = {}, chonMuc = {}, chonLoai = {}, moChuongDang = {}, locDang = { tu: "" };   // chonDang[stt] = số câu; chonMuc[stt] = mức độ dự kiến của từng câu (khi app đề xuất)
let dsDangHien = [];
const mucCuaDang = (ch, d) => [...new Set(KHO_DE_CAU.filter(q => q.chuong === ch && q.dang === d && !q.chum).map(q => q.mucDo))].sort();
const thieuKhungMuc = () => { const d = demChon(); return [1, 2, 3, 4].map(m => Math.max(0, (soan.muc[m] || 0) - d[m])); };   // còn thiếu ở NB, TH, VD, VDC
const loaiCuaDang = (ch, d) => { const a = KHO_DE_CAU.filter(q => q.chuong === ch && q.dang === d && !q.chum && (cauHinhDe.choDuyet || !q.choDuyet)), lt = a.filter(q => q.loai === "lt").length; return lt && lt < a.length ? `LT ${lt}·TT ${a.length - lt}` : lt ? "LT" : "TT"; };
const daTheoDangMap = () => { const o = {}; soan.chon.forEach(id => { const c = CAU_THEO_ID[id]; if (c) o[c.chuong + "|" + c.dang] = (o[c.chuong + "|" + c.dang] || 0) + 1; }); return o; };

function veKhungDang() {
  const v = document.getElementById("khung-dang"); if (!v) return;
  const dem = demChon(), th = thieuKhungMuc(), tongThieu = th.reduce((a, b) => a + b, 0);
  const pm = [0, 0, 0, 0], pl = { lt: 0, tt: 0 }; let tichKhongMuc = 0, tongC = 0;
  Object.entries(chonDang).forEach(([i, n]) => { tongC += n; const ms = chonMuc[i] || [], ls = chonLoai[i] || []; for (let k = 0; k < n; k++) { ms[k] ? pm[ms[k] - 1]++ : tichKhongMuc++; if (ls[k]) pl[ls[k]]++; } });
  const dl = demLoai(), tl = tongLoai(), coLoai = { lt: dl[1].lt + dl[2].lt + dl[3].lt + dl[4].lt, tt: dl[1].tt + dl[2].tt + dl[3].tt + dl[4].tt };
  const conThieu = Math.max(0, tongThieu - tongC);
  v.innerHTML = `<div class="thanh-chon"><b>Khung ${tongMuc()} câu · đã có ${soan.chon.length}</b>
      ${[1, 2, 3, 4].map(m => { const co = dem[m] + pm[m - 1], t = soan.muc[m] || 0; return `<span class="chip-muc ${co === t ? "du" : co > t ? "thua" : "thieu"}">${TAT_MUC[m]} ${dem[m]}${pm[m - 1] ? `<i>+${pm[m - 1]}</i>` : ""}/${t}</span>`; }).join("")}
      ${["lt", "tt"].map(l => `<span class="chip-muc ${coLoai[l] + pl[l] === tl[l] ? "du" : coLoai[l] + pl[l] > tl[l] ? "thua" : "thieu"}">${l === "lt" ? "LT" : "TT"} ${coLoai[l]}${pl[l] ? `<i>+${pl[l]}</i>` : ""}/${tl[l]}</span>`).join("")}</div>
    <div class="hang-khung"><span class="ghi-chu">${tongThieu ? `Còn thiếu <b>${tongThieu}</b> câu${tongC ? ` · đang tích <b>${tongC}</b> → ${conThieu ? `còn thiếu ${conThieu}` : tongC > tongThieu ? `<b class="loi-tk">thừa ${tongC - tongThieu}</b>` : "<b>vừa đủ ✓</b>"}` : ""}` : `Đề mẫu đã đủ khung ✓${tongC ? ` · đang tích thêm ${tongC}` : ""}`}</span>
      <button class="btn nho" onclick="deXuatTheoKhung()" ${tongThieu ? "" : "disabled"}>✨ Đề xuất theo khung</button>
      ${tongC ? `<button class="btn nho phu" onclick="boTichHet()">Bỏ tích hết</button>` : ""}</div>`;
}
function veChonDang() {
  const v = document.getElementById("vung-dang"); if (!v) return;
  const tu = boDau(locDang.tu.trim()), daTheoDang = daTheoDangMap(), th = thieuKhungMuc(), tongMucThieu = th.reduce((a, b) => a + b, 0);
  dsDangHien = []; let html = "";
  const uuTien = new Set(soan.chuong), theoThuTu = [...CHUONG].sort((a, b) => (uuTien.has(b.id) ? 1 : 0) - (uuTien.has(a.id) ? 1 : 0));   // chương đã chọn ở bước 1 lên đầu
  theoThuTu.forEach(c => {
    const dsD = dangCuaChuong(c.id).filter(d => !tu || boDau(tenDang(d) || "").includes(tu));
    if (!dsD.length) return;
    const dong = dsD.map(d => { const i = dsDangHien.push({ ch: c.id, d }) - 1, n = chonDang[i] || 0, tong = soCauDang(c.id, d), da = daTheoDang[c.id + "|" + d] || 0;
      const hop = mucCuaDang(c.id, d).filter(m => th[m - 1] > 0);
      return `<div class="dong-dang ${n ? "chon" : ""}" onclick="tichDang(${i})"><span class="hop">${n ? "☑" : "☐"}</span>
        <span class="ten">${coDau(tenDang(d))}<small>${tong} câu · ${mucCuaDang(c.id, d).map(m => TAT_MUC[m]).join("/")} · ${loaiCuaDang(c.id, d)}${da ? ` · <b>đã có ${da} trong đề</b>` : ""}${!da && hop.length ? ` · <span class="hop-khung">★ hợp khung (thiếu ${hop.map(m => TAT_MUC[m]).join("/")})</span>` : ""}${tong < (cauHinhDe.soMa || 1) ? ` · <span class="loi-tk">ít câu, đủ ${tong} mã</span>` : ""}</small></span>
        ${n ? `<span class="buoc" onclick="event.stopPropagation()"><button onclick="doiSoDang(${i},-1)">−</button><b>${n}</b><button onclick="doiSoDang(${i},1)">+</button></span>` : ""}</div>`; }).join("");
    const idx = dsDangHien.map((x, i) => x.ch === c.id ? i : -1).filter(i => i >= 0), nChon = idx.filter(i => chonDang[i]).length;
    const daChuong = soan.chon.filter(id => CAU_THEO_ID[id]?.chuong === c.id).length;
    const goiY = uuTien.size && uuTien.has(c.id) && tongMucThieu ? Math.max(0, Math.round(tongMuc() / uuTien.size) - daChuong) : 0;
    html += `<details class="the-trang nhom-tk" ${tu || (moChuongDang[c.id] ?? uuTien.has(c.id)) ? "open" : ""} ontoggle="moChuongDang['${c.id}']=this.open"><summary class="sum-2"><b>${c.icon} ${c.ten}</b>
      <span class="dem">${daChuong ? `có ${daChuong} · ` : ""}${goiY ? `gợi ý +${goiY} · ` : ""}${nChon ? `☑ ${nChon}/` : ""}${dsD.length} dạng</span>
      <button class="chip-nhanh" onclick="event.preventDefault();event.stopPropagation();tichChuongDang('${c.id}')">${nChon === idx.length ? "Bỏ tích" : "Tích cả chương"}</button></summary>
      <div class="ds-gon">${dong}</div></details>`;
  });
  v.innerHTML = html || `<div class="trong">Không có dạng nào khớp.</div>`;
  const tongC = Object.values(chonDang).reduce((t, x) => t + x, 0), tongD = Object.values(chonDang).filter(x => x).length;
  const nut = document.getElementById("nut-them-dang"); if (nut) { nut.disabled = !tongC; nut.textContent = tongC ? `Thêm ${tongC} câu (${tongD} dạng) vào đề mẫu` : "Tích dạng để thêm"; }
  veKhungDang();
}
function tichDang(i) { chonDang[i] = chonDang[i] ? 0 : 1; if (!chonDang[i]) delete chonMuc[i], delete chonLoai[i]; veChonDang(); }
function doiSoDang(i, d) { chonDang[i] = Math.max(0, (chonDang[i] || 0) + d); if (!chonDang[i]) delete chonMuc[i], delete chonLoai[i]; veChonDang(); }
function boTichHet() { Object.keys(chonDang).forEach(k => delete chonDang[k]); Object.keys(chonMuc).forEach(k => delete chonMuc[k]); Object.keys(chonLoai).forEach(k => delete chonLoai[k]); veChonDang(); }
function tichChuongDang(ch) {
  const idx = dsDangHien.map((x, i) => x.ch === ch ? i : -1).filter(i => i >= 0), tatCa = idx.every(i => chonDang[i]);
  idx.forEach(i => { chonDang[i] = tatCa ? 0 : (chonDang[i] || 1); if (!chonDang[i]) delete chonMuc[i], delete chonLoai[i]; }); moChuongDang[ch] = true; veChonDang();
}
// ✨ Đề xuất theo khung: tự tích các dạng vừa đủ số câu còn thiếu ở từng mức độ, rải đều các chương, ưu tiên dạng chưa có / đủ câu cho số mã
function deXuatTheoKhung() {
  boTichHet(); locDang.tu = ""; const o = document.querySelector("#khung-dang")?.parentNode?.querySelector(".o-tim-lop"); if (o) o.value = ""; veChonDang();
  const th = thieuKhungMuc(); if (!th.some(x => x > 0)) return;
  const cs = soan.chuong.length ? soan.chuong : CHUONG.filter(c => KHO_DE_CAU.some(q => q.chuong === c.id)).map(c => c.id);
  const daCh = {}, daDang = daTheoDangMap(), dl = demLoai();
  soan.chon.forEach(id => { const c = CAU_THEO_ID[id]; if (c) daCh[c.chuong] = (daCh[c.chuong] || 0) + 1; });
  let thieu = 0, doiLoai = 0;
  const themMot = (m, l) => {
    const ung = dsDangHien.map((x, i) => ({ ...x, i })).filter(x => cs.includes(x.ch) && soCauDang(x.ch, x.d, m, l || "") > 0);
    if (!ung.length) return false;
    const diem = x => [soCauDang(x.ch, x.d, m, l || "") >= ((daDang[x.ch + "|" + x.d] || 0) + 1) * (cauHinhDe.soMa || 1) ? 0 : 1, daCh[x.ch] || 0, daDang[x.ch + "|" + x.d] || 0, Math.random()];
    ung.sort((a, b) => { const p = diem(a), q = diem(b); for (let k = 0; k < 4; k++) if (p[k] !== q[k]) return p[k] - q[k]; return 0; });
    const x = ung[0]; chonDang[x.i] = (chonDang[x.i] || 0) + 1; (chonMuc[x.i] ||= []).push(m); (chonLoai[x.i] ||= []).push(l || "");
    daCh[x.ch] = (daCh[x.ch] || 0) + 1; daDang[x.ch + "|" + x.d] = (daDang[x.ch + "|" + x.d] || 0) + 1; return true;
  };
  const conThieu = [];
  [1, 2, 3, 4].forEach(m => ["tt", "lt"].forEach(l => {
    for (let n = (soan.loai[m]?.[l] || 0) - dl[m][l]; n > 0; n--) if (!themMot(m, l)) conThieu.push(m);
  }));
  conThieu.forEach(m => { if (themMot(m, null)) doiLoai++; else thieu++; });
  cs.forEach(c => { if (dsDangHien.some((x, i) => x.ch === c && chonDang[i])) moChuongDang[c] = true; });
  veChonDang();
  if (thieu || doiLoai) alert(`${doiLoai ? `${doiLoai} câu phải lấy khác loại lí thuyết/tính toán đã định vì các chương đã chọn không đủ câu loại đó. ` : ""}${thieu ? `Còn ${thieu} câu chưa đề xuất được vì các chương đã chọn không đủ dạng ở mức độ đó.` : ""}`);
}
// Thêm vào đề mẫu: mỗi dạng bốc n câu ngẫu nhiên; theo mức độ đã đề xuất, còn lại ưu tiên mức độ đang thiếu so với khung
function themCacDang() {
  const chon = Object.entries(chonDang).filter(([, n]) => n > 0); if (!chon.length) return;
  const da = new Set(soan.chon); let them = 0, thieu = [];
  chon.forEach(([i, n]) => {
    const { ch, d } = dsDangHien[i];
    for (let k = 0; k < n; k++) {
      let pool = cauNguon().filter(q => q.chuong === ch && q.dang === d && !q.chum && !da.has(q.id)); if (!pool.length) { thieu.push(tenDang(d)); break; }
      const mm = chonMuc[i]?.[k], ll = chonLoai[i]?.[k]; if (mm && pool.some(q => q.mucDo === mm)) pool = pool.filter(q => q.mucDo === mm);
      if (ll && pool.some(q => q.loai === ll)) pool = pool.filter(q => q.loai === ll);
      const dem = demLoai(), thieuMuc = q => (soan.loai[q.mucDo]?.[q.loai] || 0) - dem[q.mucDo][q.loai];
      pool.sort((a, b) => thieuMuc(b) - thieuMuc(a) || Math.random() - .5);
      da.add(pool[0].id); soan.chon.push(pool[0].id); them++;
    }
  });
  boTichHetKhongVe(); luuSoan();
  if (thieu.length) alert(`Đã thêm ${them} câu. Dạng hết câu chưa dùng: ${[...new Set(thieu)].join("; ")}.`);
  locChon.tab = "de"; location.hash = "#/chon-cau";
}
function boTichHetKhongVe() { Object.keys(chonDang).forEach(k => delete chonDang[k]); Object.keys(chonMuc).forEach(k => delete chonMuc[k]); Object.keys(chonLoai).forEach(k => delete chonLoai[k]); }
MAN_HINH["/chon-dang"] = {
  tieuDe: "Chọn nhiều dạng",
  manHinhCon: true,
  ve: () => `
    <div class="buoc-soan"><a href="#/tao-de">1 · Khung đề</a><span class="dang">2 · Chọn dạng</span><a href="#/chon-cau">3 · Đề mẫu</a></div>
    <div class="dinh-chon" id="khung-dang"></div>
    <input class="o-tim-lop" type="search" placeholder="🔍 Tìm dạng theo tên…" value="${coDau(locDang.tu)}" oninput="locDang.tu=this.value;clearTimeout(locDang.h);locDang.h=setTimeout(veChonDang,250)">
    <div id="vung-dang"></div>
    <div class="nut-hang hai-nut day-chon"><a class="btn phu" href="#/chon-cau">← Đề mẫu</a>
      <button class="btn" id="nut-them-dang" onclick="themCacDang()" disabled>Tích dạng để thêm</button></div>`,
  sauKhiVe: veChonDang,
};

// Xếp câu trong đề: theo mức độ tăng dần, rồi theo chương; câu chùm đi liền nhau
function xepCauDe(ids) {
  const donVi = {}; ids.forEach(id => { const c = CAU_THEO_ID[id]; (donVi[c.chum || id] ||= []).push(c); });
  return Object.values(donVi).sort((a, b) => Math.min(...a.map(c => c.mucDo)) - Math.min(...b.map(c => c.mucDo))
    || CHUONG.findIndex(x => x.id === a[0].chuong) - CHUONG.findIndex(x => x.id === b[0].chuong)).flat().map(c => c.id);
}
function xongChonCau() {
  if (!soan.chon.length) return alert("Chưa có câu nào trong đề mẫu.");
  const d = demChon(), lech = [1, 2, 3, 4].filter(m => d[m] !== (soan.muc[m] || 0));
  const dl = demLoai(), tl = tongLoai(), ltCo = [1, 2, 3, 4].reduce((t, m) => t + dl[m].lt, 0), ttCo = soan.chon.length - ltCo;
  if (!lech.length && (Math.abs(ltCo - tl.lt) > 2) && !confirm(`Tỉ lệ lí thuyết/tính toán lệch khung (lí thuyết ${ltCo}/${tl.lt}, tính toán ${ttCo}/${tl.tt}). Vẫn tạo đề?`)) return;
  if (lech.length && !confirm(`Số câu chưa khớp khung (${lech.map(m => `${TAT_MUC[m]} ${d[m]}/${soan.muc[m] || 0}`).join(", ")}). Vẫn tạo đề?`)) return;
  capNhatBienThe();
  const hat = Math.floor(Math.random() * 2 ** 31);
  const ten0 = (cauHinhDe.ten || "").trim(), macDinh = !ten0 || /^Đề kiểm tra$/i.test(ten0);
  const de = { id: "d" + Date.now().toString(36), ten: ten0, phut: cauHinhDe.phut, ngay: Date.now(),
    cau: xepCauDe(soan.chon), daoCau: cauHinhDe.daoCau, daoPA: cauHinhDe.daoPA, hat, khac: true };
  if (macDinh) de.ten = goiYTenDe(de);   // chưa đặt tên: hệ thống đề xuất theo chương
  de.ma = taoMaDe(de.cau, cauHinhDe.soMa, de.daoCau, de.daoPA, hat, false);
  // mã 2 trở đi: đúng những câu anh/chị đã thấy và chỉnh ở bước đề mẫu
  de.ma.forEach((m, k) => {
    if (!k) return;
    m.cau = de.cau.map(id => soan.bt[id][k - 1]);
    m.canhBao = []; m.cau.forEach((v, i) => { const lo = loaiBienThe(de.cau[i], v); if (lo === "lap" || lo === "muc") m.canhBao.push({ i, loai: lo }); });
  });
  ghiDsDe([de, ...dsDe()]);
  soan.chon = []; soan.bt = {}; luuSoan(); locChon.thay = "";
  location.hash = `#/de?id=${de.id}`;
}
MAN_HINH["/chon-cau"] = {
  tieuDe: "Chọn câu cho đề",
  manHinhCon: true,
  ve: () => `
    <div class="buoc-soan"><a href="#/tao-de">1 · Khung đề</a><span class="dang">2 · Đề mẫu</span><span>3 · Sinh mã đề</span></div>
    <div class="dinh-chon" id="tien-do-chon"></div>
    <div id="vung-chon"></div>
    <div class="nut-hang hai-nut day-chon">
      <button class="btn phu" onclick="tuDien()">✨ Điền phần thiếu</button>
      <select class="chon-ma" onchange="datCauHinh('soMa',Number(this.value))" aria-label="Số mã đề">${[1, 2, 3, 4, 5, 6, 8].map(n => `<option value="${n}" ${cauHinhDe.soMa === n ? "selected" : ""}>${n} mã</option>`).join("")}</select>
      <button class="btn" onclick="xongChonCau()">Sinh mã đề →</button></div>`,
  sauKhiVe: veChonCau,
};

/* ---------- Màn hình xem đề ---------- */
let maDangXem = 0, hienDapAnDe = false;
function thamSoHash() { return new URLSearchParams((location.hash.split("?")[1]) || ""); }
function cauTheoMa(de, k) {
  const m = de.ma[k], cau = cauCuaMa(de, m);
  return m.thuTu.map(i => ({ id: cau[i], pa: m.pa[i] }));
}
const chuDapAn = (x) => CHU[x.pa.indexOf(CHU.indexOf(CAU_THEO_ID[x.id].dapAn))];

function veCauDe(x, so, coDapAn, coNhan = true, truoc = null) {
  const g = CAU_THEO_ID[x.id]; if (!g) return "";
  const dauCum = g.dan && (!truoc || CAU_THEO_ID[truoc.id]?.chum !== g.chum);
  const dung = chuDapAn(x);
  return `${dauCum ? `<div class="de-dan">${g.dan}</div>` : ""}<div class="cau-de">
    <div class="dau-cau-de"><b>Câu ${so}.</b>${coNhan ? ` <span class="nhan-nho">${tenChuong(g.chuong)} · ${MUC_DO[g.mucDo]} · ${coDau(tenDang(g.dang))}${g.choDuyet ? ' · <i class="cho">chờ duyệt</i>' : ""}</span>` : ""}</div>
    <div class="de-cau">${g.de}</div>${bangTin(g)}
    <ol class="pa-de" type="A">${x.pa.map((k, j) => `<li class="${coDapAn && CHU[j] === dung ? "dung" : ""}"><span class="chu">${CHU[j]}.</span> ${g.phuongAn[k]}</li>`).join("")}</ol>
    ${coNhan && !g.chum ? `<button class="nut-doi" onclick="doiCau('${x.id}')">🎲 Đổi câu khác cùng dạng</button>` : ""}
  </div>`;
}


/* =========================================================
   NGÂN HÀNG ĐỀ THI: xem lại mọi đề đã soạn theo chủ đề, dùng lại cho các lần sau.
   - Chủ đề: GV tự đặt (đổi tên) hoặc hệ thống đề xuất theo chương / dạng của các câu trong đề.
   - ♻️ Dùng lại: nạp đề vào bước soạn để chỉnh; 🎲 Làm mới câu: giữ khung (cùng dạng, mức, loại) nhưng thay bằng câu khác.
   - Sao lưu / nạp từ file để chuyển đề sang máy khác (đề chỉ lưu mã câu, không lưu nội dung câu).
   ========================================================= */
function thongTinDe(de) {
  const theoCh = {}, muc = [0, 0, 0, 0]; let lt = 0, tt = 0;
  de.cau.forEach(id => { const c = CAU_THEO_ID[id]; if (!c) return; theoCh[c.chuong] = (theoCh[c.chuong] || 0) + 1; muc[c.mucDo - 1]++; c.loai === "tt" ? tt++ : lt++; });
  return { n: de.cau.length, chuong: Object.entries(theoCh).sort((a, b) => b[1] - a[1]), muc, lt, tt };
}
function kieuTheoMuc(t) { const p = t.n ? (t.muc[2] + t.muc[3]) / t.n : 0; return p < 0.35 ? "cơ bản" : p < 0.6 ? "chuẩn" : "nâng cao"; }
function goiYTenDe(de) {
  const t = thongTinDe(de), ten = t.chuong.slice(0, 3).map(([id]) => TEN_NGAN[id] || id);
  return `${ten.join(" + ")}${t.chuong.length > 3 ? " +…" : ""} — ${t.n} câu ${kieuTheoMuc(t)}`;
}
const chuDeCuaDe = de => de.chuDe || thongTinDe(de).chuong.map(([id, n]) => `${TEN_NGAN[id] || id} (${n})`).join(" · ");
const locNH = { tu: "", chuong: "" };
function veNganHangDe() {
  const v = document.getElementById("vung-nh"); if (!v) return;
  const tu = boDau(locNH.tu.trim()), tatCa = dsDe().map(d => ({ d, t: thongTinDe(d) }));
  const chCo = [...new Set(tatCa.flatMap(x => x.t.chuong.map(([id]) => id)))];
  const ds = tatCa.filter(({ d, t }) => (!locNH.chuong || t.chuong.some(([id]) => id === locNH.chuong)) && (!tu || boDau(`${d.ten} ${chuDeCuaDe(d)}`).includes(tu))).sort((a, b) => b.d.ngay - a.d.ngay);
  const chip = document.getElementById("nh-chip");
  if (chip) chip.innerHTML = chCo.length > 1 ? [["", "Mọi chủ đề"], ...chCo.map(id => [id, TEN_NGAN[id] || id])].map(([id, ten]) => `<button class="chip-nhanh ${locNH.chuong === id ? "chon" : ""}" onclick="locNH.chuong='${id}';veNganHangDe()">${ten}</button>`).join("") : "";
  v.innerHTML = ds.map(({ d, t }) => {
    const giao = d.giao || [], cuoi = giao[giao.length - 1];
    return `<div class="the-trang nh-de"><div class="nh-dau"><b>${coDau(d.ten)}</b><button class="nut-tron nho" onclick="doiTenDe('${d.id}')" aria-label="Đổi tên và chủ đề" title="Đổi tên / chủ đề">✏️</button></div>
      <div class="nh-chu-de">${coDau(chuDeCuaDe(d))}</div>
      <div class="nh-thong-tin"><span>${t.n} câu</span><span>NB ${t.muc[0]} · TH ${t.muc[1]} · VD ${t.muc[2]} · VDC ${t.muc[3]}</span><span>LT ${t.lt} · TT ${t.tt}</span><span>${d.phut} phút</span><span>${d.ma.length} mã</span><span>${new Date(d.ngay).toLocaleDateString("vi-VN")}</span></div>
      ${giao.length ? `<div class="ghi-chu">📤 Đã giao ${giao.length} lần · gần nhất: ${coDau(cuoi.lop || "")} (${new Date(cuoi.luc).toLocaleDateString("vi-VN")})</div>` : ""}
      <div class="nut-hang nh-nut"><a class="btn phu" href="#/de?id=${d.id}">👁 Xem</a><button class="btn" onclick="dungLaiDe('${d.id}',false)">♻️ Dùng lại</button><button class="btn phu" onclick="dungLaiDe('${d.id}',true)">🎲 Làm mới câu</button><a class="btn phu" href="#/giao-de?id=${d.id}">📤 Giao</a><button class="btn phu" onclick="xoaDeBank('${d.id}')" aria-label="Xóa">🗑</button></div></div>`;
  }).join("") || `<div class="trong">${tatCa.length ? "Không có đề nào khớp." : "Chưa có đề nào được lưu. Soạn đề ở mục Tạo đề, đề tạo xong sẽ nằm ở đây để dùng lại."}<br><br><a class="btn" href="#/tao-de">＋ Tạo đề mới</a></div>`;
}
function doiTenDe(id) {
  const ds = dsDe(), d = ds.find(x => x.id === id); if (!d) return;
  const ten = prompt("Tên đề:", d.ten); if (ten === null) return;
  const cd = prompt("Chủ đề (để trống = hệ thống tự đề xuất theo chương):", d.chuDe || ""); if (cd === null) return;
  d.ten = ten.trim() || d.ten; d.chuDe = cd.trim(); ghiDsDe(ds); veNganHangDe();
}
function xoaDeBank(id) {
  const d = timDe(id); if (!d || !confirm(`Xóa đề “${d.ten}” khỏi máy này?`)) return;
  ghiDsDe(dsDe().filter(x => x.id !== id)); veNganHangDe();
}
function dungLaiDe(id, lamMoi) {
  const de = timDe(id); if (!de) return;
  if (soan.chon.length && !confirm("Đang có bản soạn dở. Thay bằng đề này?")) return;
  let ids = [...de.cau];
  const thieu = ids.filter(x => !CAU_THEO_ID[x]).length;
  if (thieu) return alert(`Đề này có ${thieu} câu không còn trong kho (đã bị sửa hoặc xóa) nên chưa dùng lại được.`);
  if (lamMoi) { const dung = new Set(ids); ids = ids.map(x => { const g = CAU_THEO_ID[x]; if (g.chum) return x; const r = chonThayThe(x, dung, Math.random); return r.loai === "lap" ? x : r.id; }); }
  const muc = { 1: 0, 2: 0, 3: 0, 4: 0 }; let lt = 0; ids.forEach(x => { muc[CAU_THEO_ID[x].mucDo]++; if (CAU_THEO_ID[x].loai !== "tt") lt++; });
  soan.chon = ids; soan.tong = ids.length; soan.muc = muc; soan.lt = Math.round(lt / ids.length * 20) * 5; capNhatLoai();
  soan.chuong = []; soan.bt = {};
  if (!lamMoi) ids.forEach((x, i) => { soan.bt[x] = de.ma.slice(1).map(m => (m.cau || de.cau)[i]).filter(v => CAU_THEO_ID[v]); });   // giữ đúng câu của các mã khác
  Object.assign(cauHinhDe, { ten: `${de.ten} (${lamMoi ? "làm mới" : "dùng lại"})`, phut: de.phut, soMa: de.ma.length, daoCau: !!de.daoCau, daoPA: !!de.daoPA });
  luuCauHinh(); capNhatBienThe(); luuSoan(); locChon.tab = "de"; locChon.thay = "";
  location.hash = "#/chon-cau";
}
function saoLuuNganHangDe() {
  const blob = new Blob([JSON.stringify({ ver: 1, luc: Date.now(), de: dsDe() })], { type: "application/json" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "ngan-hang-de.json"; a.click();
}
function napNganHangDe(input) {
  const f = input.files[0]; if (!f) return;
  f.text().then(t => {
    const nap = JSON.parse(t).de || [], co = new Set(dsDe().map(d => d.id)), moi = nap.filter(d => d?.id && Array.isArray(d.cau) && Array.isArray(d.ma) && !co.has(d.id));
    ghiDsDe([...moi, ...dsDe()]); alert(`Đã nạp ${moi.length} đề mới (bỏ qua ${nap.length - moi.length} đề đã có).`); veNganHangDe();
  }).catch(() => alert("File không đúng định dạng ngân hàng đề.")).finally(() => (input.value = ""));
}
MAN_HINH["/ngan-hang-de"] = {
  tieuDe: "Ngân hàng đề thi",
  manHinhCon: true,
  ve: () => `<p class="ghi-chu">Mọi đề đã soạn trên máy này. Đặt tên / chủ đề để dễ tìm; bấm ♻️ để dùng lại cho lần sau.</p>
    <div class="the-trang"><input type="search" id="nh-tim" placeholder="🔍 Tìm theo tên hoặc chủ đề…" value="${coDau(locNH.tu)}" oninput="locNH.tu=this.value;veNganHangDe()"><div class="hang-chip" id="nh-chip"></div></div>
    <div id="vung-nh"></div>
    <div class="nut-hang"><button class="btn phu" onclick="saoLuuNganHangDe()">⬇ Sao lưu ngân hàng đề</button><label class="btn phu">⬆ Nạp từ file<input type="file" accept="application/json,.json" hidden onchange="napNganHangDe(this)"></label></div>
    <p class="ghi-chu">Đề lưu ngay trên máy này. Đổi máy hoặc sợ mất thì bấm Sao lưu rồi Nạp từ file ở máy mới.</p>`,
  sauKhiVe: () => veNganHangDe(),
};

MAN_HINH["/de"] = {
  tieuDe: "Đề kiểm tra",
  manHinhCon: true,
  ve: () => {
    const ts = thamSoHash();
    const de = timDe(ts.get("chia") ? nhapDeChiaSe(ts.get("chia")) : ts.get("id"));
    if (!de) return `<div class="trong">Không tìm thấy đề này trên máy.<br><br><a class="btn" href="#/tao-de">Tạo đề mới</a></div>`;
    if (maDangXem >= de.ma.length) maDangXem = 0;
    const ds = cauTheoMa(de, maDangXem), soCho = moiCauDe(de).filter(id => CAU_THEO_ID[id]?.choDuyet).length;
    const cb = de.ma[maDangXem].canhBao || [];
    const nLap = cb.filter(x => x.loai === "lap").length, nMuc = cb.filter(x => x.loai === "muc").length;
    return `
    <div class="the-trang dau-de">
      <h3>${coDau(de.ten)}</h3>
      <p>${de.cau.length} câu · ${de.phut} phút · ${de.ma.length} mã đề${de.khac ? " · mỗi mã câu khác nhau (cùng dạng), thứ tự xáo riêng" : ""}</p>
      ${soCho ? `<p class="canh-bao">⚠️ Có ${soCho} câu chưa được duyệt.</p>` : ""}
      <div class="nut-de">
        <button class="btn" onclick="lamThuDe()">▶ Làm bài</button>
        <button class="btn phu" onclick="inDe()">🖨 In / PDF</button>
        <button class="btn phu" onclick="chiaSeDe()">🔗 Chia sẻ</button>
        ${de.ma.length < MA_DE.length ? `<button class="btn phu" onclick="themMaDe()">＋ Thêm mã đề</button>` : ""}
        <button class="btn phu" onclick="xoaDe()">🗑 Xóa</button>
      </div>
    </div>
    <div class="thanh-ma">
      <div class="nhom-chip">${de.ma.map((m, k) => `<label class="chip-chon"><input type="radio" name="ma-xem" ${k === maDangXem ? "checked" : ""} onchange="maDangXem=${k};hienManHinh()"><span>Mã ${m.ma}</span></label>`).join("")}</div>
      <label class="dong-bat gon"><input type="checkbox" ${hienDapAnDe ? "checked" : ""} onchange="hienDapAnDe=this.checked;hienManHinh()"><span>Hiện đáp án</span></label>
    </div>
    ${nLap || nMuc ? `<div class="the-trang canh-bao-cu">⚠️ Mã ${de.ma[maDangXem].ma}: ${nLap ? `${nLap} vị trí phải dùng lại câu (dạng đó hết câu)` : ""}${nLap && nMuc ? "; " : ""}${nMuc ? `${nMuc} vị trí lấy câu khác mức độ (dạng đó hết câu cùng mức)` : ""}. Bấm “🎲 Đổi câu khác” hoặc chọn dạng khác cho đề mẫu.</div>` : ""}
    <div class="nut-hang trai"><button class="btn phu nho" onclick="sinhLaiMa()">🎲 Sinh lại câu cho mã ${de.ma[maDangXem].ma}</button></div>
    <div class="the-trang">${ds.map((x, i) => veCauDe(x, i + 1, hienDapAnDe, true, ds[i - 1])).join("")}</div>
    <h2>Đáp án mã ${de.ma[maDangXem].ma}</h2>
    <div class="the-trang luoi-dap-an">${ds.map((x, i) => `<span><b>${i + 1}</b>${chuDapAn(x)}</span>`).join("")}</div>`;
  },
};

function deDangXem() { return timDe(thamSoHash().get("id")); }
function capNhatDe(de) { ghiDsDe(dsDe().map(d => d.id === de.id ? de : d)); }

// Đổi 1 câu của mã đang xem bằng câu khác CÙNG DẠNG (ưu tiên cùng mức), không trùng câu ở bất kì mã nào
function doiCau(id) {
  const de = deDangXem(), m = de.ma[maDangXem], g = CAU_THEO_ID[id];
  m.cau ||= [...de.cau];
  const idx = m.cau.indexOf(id); if (idx < 0) return;
  const dung = new Set(moiCauDe(de));
  const pool = KHO_DE_CAU.filter(c => (cauHinhDe.choDuyet || !c.choDuyet || g.choDuyet) && c.chuong === g.chuong && !c.chum && !dung.has(c.id));
  const chon = uuTienCungLoai(pool.filter(c => c.dang === g.dang), g);
  if (!chon) return alert("Dạng này không còn câu nào chưa dùng trong đề.");
  const moi = chon[Math.floor(Math.random() * chon.length)];
  m.cau[idx] = moi.id; if (maDangXem === 0) de.cau[idx] = moi.id;
  m.canhBao = (m.canhBao || []).filter(x => x.i !== idx);
  capNhatDe(de); hienManHinh();
}
// Sinh lại toàn bộ câu của mã đang xem (mỗi vị trí một câu khác cùng dạng)
function sinhLaiMa() {
  const de = deDangXem(), m = de.ma[maDangXem];
  if (maDangXem === 0) return alert("Mã đầu tiên là đề mẫu. Muốn đổi câu thì bấm “🎲 Đổi câu khác” từng câu, hoặc quay lại bước soạn đề mẫu.");
  const dung = new Set(de.ma.filter((_, k) => k !== maDangXem).flatMap(x => cauCuaMa(de, x))), rng = taoRng(Math.floor(Math.random() * 2 ** 31));
  m.canhBao = []; m.cau = de.cau.map((id, i) => { const r = chonThayThe(id, dung, rng); if (r.loai) m.canhBao.push({ i, loai: r.loai }); return r.id; });
  capNhatDe(de); hienManHinh();
}
// Thêm 1 mã đề mới (câu khác cùng dạng, thứ tự xáo riêng)
function themMaDe() {
  const de = deDangXem(); if (de.ma.length >= MA_DE.length) return;
  const rng = taoRng(Math.floor(Math.random() * 2 ** 31)), dung = new Set(moiCauDe(de)), canhBao = [];
  const cau = de.cau.map((id, i) => { const r = chonThayThe(id, dung, rng); if (r.loai) canhBao.push({ i, loai: r.loai }); return r.id; });
  de.ma.push({ ma: MA_DE[de.ma.length], cau, canhBao, ...xepMa(de.cau, de.daoCau, de.daoPA, rng) });
  de.khac = true; maDangXem = de.ma.length - 1; capNhatDe(de); hienManHinh();
}
function xoaDe() {
  const de = deDangXem();
  if (!confirm(`Xóa đề “${de.ten}” khỏi máy này?`)) return;
  ghiDsDe(dsDe().filter(d => d.id !== de.id));
  location.hash = "#/tao-de";
}

// Làm bài theo mã đang xem: giữ đúng thứ tự câu và phương án của mã, có hạn giờ
function lamThuDe() {
  const de = deDangXem(), ds = cauTheoMa(de, maDangXem);
  baiLam = {
    cau: ds.map(x => ({ id: x.id, thuTu: x.pa })), chon: ds.map(() => null), cheDo: "thi",
    viTri: 0, batDau: Date.now(), ketThuc: null, hanGio: de.phut * 60000, tuDe: de.id, maDe: de.ma[maDangXem].ma,
  };
  luuBaiLam();
  location.hash = "#/lam-bai";
}

/* ---------- Chia sẻ bằng link (đề nằm gọn trong link, không cần máy chủ) ---------- */
const maHoa = o => btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const giaiMa = s => JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/")))));
function chiaSeDe() {
  const de = deDangXem();
  const goi = { t: de.ten, p: de.phut, c: de.cau, dc: de.daoCau ? 1 : 0, dp: de.daoPA ? 1 : 0, h: de.hat, n: de.ma.length, ...(de.khac ? { k: 1, m: de.ma.map(m => cauCuaMa(de, m)) } : {}) };
  const link = `${location.origin}${location.pathname}#/de?chia=${maHoa(goi)}`;
  if (navigator.share) navigator.share({ title: de.ten, text: `Đề: ${de.ten}`, url: link }).catch(() => {});
  else if (navigator.clipboard) navigator.clipboard.writeText(link).then(() => alert("Đã chép link đề. Dán vào tin nhắn để gửi."), () => prompt("Chép link này:", link));
  else prompt("Chép link này:", link);
}
function nhapDeChiaSe(s) {
  try {
    const g = giaiMa(s), cau = g.c.filter(id => CAU_THEO_ID[id]);
    if (!cau.length) throw 0;
    const id = "s" + (g.h >>> 0).toString(36) + cau.length;
    if (!timDe(id)) {
      const de = { id, ten: g.t, phut: g.p, ngay: Date.now(), cau, daoCau: !!g.dc, daoPA: !!g.dp, hat: g.h };
      de.ma = taoMaDe(cau, g.n, de.daoCau, de.daoPA, g.h, !!g.k);
      if (g.k && g.m) { de.khac = true; g.m.forEach((ds, k) => { if (de.ma[k] && ds.length === cau.length && ds.every(x => CAU_THEO_ID[x])) de.ma[k].cau = ds; }); }
      ghiDsDe([de, ...dsDe()]);
    }
    history.replaceState(null, "", `#/de?id=${id}`);
    return id;
  } catch { history.replaceState(null, "", "#/tao-de"); return null; }
}

/* ---------- In / lưu PDF: mọi mã đề + trang đáp án, khổ A4 ---------- */
function inDe() {
  const de = deDangXem();
  const vung = document.getElementById("vung-in") || document.body.appendChild(Object.assign(document.createElement("div"), { id: "vung-in" }));
  const dauTrang = m => `<div class="dau-in">
      <div><b>${coDau(de.ten)}</b><br>Thời gian: ${de.phut} phút · ${de.cau.length} câu trắc nghiệm</div>
      <div class="ma-in">Mã đề<br><b>${m.ma}</b></div></div>
    <div class="ho-ten-in">Họ và tên: ……………………………………… Lớp: ………… Số báo danh: …………</div>`;
  const cacMa = de.ma.map((m, k) => `<section class="trang-in">${dauTrang(m)}
      ${cauTheoMa(de, k).map((x, i, a) => veCauDe(x, i + 1, false, false, a[i - 1])).join("")}
      <p class="het-in">— HẾT —</p></section>`).join("");
  const dapAn = `<section class="trang-in"><h3>ĐÁP ÁN · ${coDau(de.ten)}</h3>
    <table class="bang-dap-an"><thead><tr><th>Câu</th>${de.ma.map(m => `<th>${m.ma}</th>`).join("")}</tr></thead>
    <tbody>${de.cau.map((_, i) => `<tr><td>${i + 1}</td>${de.ma.map((m, k) => `<td>${chuDapAn(cauTheoMa(de, k)[i])}</td>`).join("")}</tr>`).join("")}</tbody></table></section>`;
  vung.innerHTML = lamToan(cacMa + dapAn);
  document.body.classList.add("dang-in");
  const xong = () => { document.body.classList.remove("dang-in"); vung.innerHTML = ""; window.removeEventListener("afterprint", xong); };
  window.addEventListener("afterprint", xong);
  setTimeout(() => window.print(), 300);
}

// Mở thẳng link #/tao-de hoặc #/de?… (app.js đã vẽ màn hình trước khi file này nạp)
if (/^#\/(tao-de|de)(\?|$)/.test(location.hash)) hienManHinh();
