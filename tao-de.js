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

// Tạo các mã đề từ danh sách câu gốc
function taoMaDe(dsId, soMa, daoCau, daoPA, hat) {
  const rng = taoRng(hat);
  // Nhóm vị trí theo cụm câu chùm để khi đảo câu, cụm vẫn đi liền nhau
  const cum = [];
  dsId.forEach((id, i) => { const k = CAU_THEO_ID[id]?.chum; const cuoi = cum[cum.length - 1];
    if (k && cuoi && CAU_THEO_ID[dsId[cuoi[0]]]?.chum === k) cuoi.push(i); else cum.push([i]); });
  return MA_DE.slice(0, soMa).map(ma => ({
    ma,
    thuTu: (daoCau ? tronRng(cum, rng) : cum).flat(),
    pa: dsId.map(() => daoPA ? tronRng([0, 1, 2, 3], rng) : [0, 1, 2, 3]),
  }));
}

/* ---------- Soạn đề 2 bước: (1) khung đề → (2) chọn câu (xem nguyên đề) ---------- */
// Tỉ lệ mức độ gợi ý theo kiểu đề (Nhận biết / Thông hiểu / Vận dụng / Vận dụng cao, %)
const KIEU_DE = {
  "co-ban": { ten: "Cơ bản", tl: [30, 40, 25, 5], mo: "Kiểm tra nhanh, 15 phút" },
  "chuan": { ten: "Chuẩn", tl: [20, 30, 35, 15], mo: "Giữa kì, cuối chương" },
  "nang-cao": { ten: "Nâng cao", tl: [10, 25, 40, 25], mo: "Thi cuối kì, chọn lọc" },
};
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
const luuSoan = () => boNho.ghi("de-dang-soan", soan);
const MAU_MUC = { 1: "nb", 2: "th", 3: "vd", 4: "vdc" }, TAT_MUC = { 1: "NB", 2: "TH", 3: "VD", 4: "VDC" };
const cauNguon = () => KHO_DE_CAU.filter(c => (cauHinhDe.choDuyet || !c.choDuyet) && (!soan.chuong.length || soan.chuong.includes(c.chuong)));
const demChon = () => { const d = { 1: 0, 2: 0, 3: 0, 4: 0 }; soan.chon.forEach(id => { const c = CAU_THEO_ID[id]; if (c) d[c.mucDo]++; }); return d; };
const tongMuc = () => [1, 2, 3, 4].reduce((t, m) => t + (soan.muc[m] || 0), 0);

function datTong(n) { soan.tong = Math.max(1, Math.min(100, parseInt(n, 10) || 1)); soan.muc = chiaMucDo(soan.tong, KIEU_DE[soan.kieu].tl); cauHinhDe.phut = phutGoiY(soan.tong); luuSoan(); luuCauHinh(); hienManHinh(); }
function datKieu(k) { soan.kieu = k; soan.muc = chiaMucDo(soan.tong, KIEU_DE[k].tl); luuSoan(); hienManHinh(); }
function doiMuc(m, d) { soan.muc[m] = Math.max(0, (soan.muc[m] || 0) + d); soan.tong = tongMuc(); luuSoan(); hienManHinh(); }
function batChuong(id) { const i = soan.chuong.indexOf(id); i < 0 ? soan.chuong.push(id) : soan.chuong.splice(i, 1); luuSoan(); hienManHinh(); }
function chonMoiChuong(tat) { soan.chuong = tat ? [] : CHUONG.filter(c => KHO_DE_CAU.some(q => q.chuong === c.id)).map(c => c.id); luuSoan(); hienManHinh(); }

// Tự điền phần còn thiếu theo từng mức độ: rải đều các chương đã chọn, trong chương rải đều các dạng
function tuDien() {
  const da = new Set(soan.chon), dem = demChon(), dung = {}, dangDung = {};
  soan.chon.forEach(id => { const c = CAU_THEO_ID[id]; if (!c) return; dung[c.chuong] = (dung[c.chuong] || 0) + 1; const k = c.chuong + "|" + c.dang; dangDung[k] = (dangDung[k] || 0) + 1; });
  let them = 0, thieu = 0;
  [1, 2, 3, 4].forEach(m => {
    let can = (soan.muc[m] || 0) - dem[m];
    const pool = cauNguon().filter(c => c.mucDo === m && !c.chum && !da.has(c.id));
    while (can > 0) {
      const theoCh = {}; pool.filter(c => !da.has(c.id)).forEach(c => (theoCh[c.chuong] ||= []).push(c));
      const dsCh = Object.keys(theoCh); if (!dsCh.length) { thieu += can; break; }
      const ch = dsCh.sort((x, y) => (dung[x] || 0) - (dung[y] || 0) || Math.random() - .5)[0];
      const ung = theoCh[ch].sort((x, y) => (dangDung[ch + "|" + x.dang] || 0) - (dangDung[ch + "|" + y.dang] || 0) || Math.random() - .5)[0];
      da.add(ung.id); soan.chon.push(ung.id); dung[ch] = (dung[ch] || 0) + 1; dangDung[ch + "|" + ung.dang] = (dangDung[ch + "|" + ung.dang] || 0) + 1;
      can--; them++;
    }
  });
  luuSoan(); hienManHinh();
  if (thieu) alert(`Đã thêm ${them} câu. Còn thiếu ${thieu} câu vì các chương đã chọn không đủ câu ở mức độ đó — chọn thêm chương hoặc giảm số câu mức độ đó.`);
}
function batDauChon(tuDong) {
  cauHinhDe.ten = (document.getElementById("ten-de").value || "").trim() || "Đề kiểm tra"; luuCauHinh();
  if (tuDong) { soan.chon = []; tuDien(); }
  location.hash = "#/chon-cau";
}

// Tên ngắn của chương cho lưới chọn chương
const TEN_NGAN = { "mo-dau": "Mở đầu", "do-luong": "Đo lường", "thong-ke": "Thống kê", "can-bang": "Cân bằng", "axit-bazo": "Acid – base",
  "chuan-do-axit-bazo": "Chuẩn độ AB", "edta": "EDTA", "ket-tua": "Kết tủa", "oxi-hoa-khu": "Oxi hóa – khử", "hieu-chuan": "Hiệu chuẩn",
  "uv-vis": "UV-Vis", "quang-nguyen-tu": "Quang ng. tử", "dien-hoa": "Điện hóa", "sac-ki": "Sắc kí ĐC", "gc-hplc": "GC – HPLC" };
function doiTong(d) { datTong(soan.tong + d); }
function doiPhut(d) { cauHinhDe.phut = Math.max(5, Math.min(180, cauHinhDe.phut + d)); luuCauHinh(); hienManHinh(); }
function batNhom(nhom) {
  const ids = CHUONG.filter(c => c.nhom === nhom && KHO_DE_CAU.some(q => q.chuong === c.id)).map(c => c.id);
  const du = ids.every(id => soan.chuong.includes(id));
  soan.chuong = du ? soan.chuong.filter(id => !ids.includes(id)) : [...new Set([...soan.chuong, ...ids])];
  luuSoan(); hienManHinh();
}
MAN_HINH["/tao-de"] = {
  tieuDe: "Tạo đề",
  ve: () => {
    const luu = dsDe(), nguon = cauNguon(), coTheoMuc = m => nguon.filter(c => c.mucDo === m).length;
    const nhomCh = [...new Set(CHUONG.map(c => c.nhom))].map(n => [n, CHUONG.filter(c => c.nhom === n && KHO_DE_CAU.some(q => q.chuong === c.id))]);
    return `
    <div class="buoc-soan"><span class="dang">1 · Khung đề</span><span>2 · Chọn câu</span><span>3 · Mã đề, in, giao</span></div>
    <div class="the-trang tao-de gon">
      <input class="o-ten-de" id="ten-de" value="${coDau(cauHinhDe.ten)}" onchange="datCauHinh('ten', this.value)" aria-label="Tên đề" placeholder="Tên đề">
      <div class="hang-2">
        <div class="o-dem"><small>Số câu</small><span class="buoc"><button onclick="doiTong(-5)">−</button>
          <input inputmode="numeric" value="${soan.tong}" onchange="datTong(this.value)" aria-label="Số câu"><button onclick="doiTong(5)">+</button></span></div>
        <div class="o-dem"><small>Thời gian (phút)</small><span class="buoc"><button onclick="doiPhut(-5)">−</button>
          <b>${cauHinhDe.phut}</b><button onclick="doiPhut(5)">+</button></span>
          ${cauHinhDe.phut !== phutGoiY(soan.tong) ? `<button class="goi-y" onclick="datCauHinh('phut', ${phutGoiY(soan.tong)});hienManHinh()">gợi ý ${phutGoiY(soan.tong)}</button>` : ""}</div>
      </div>
      <div class="phan-doan">${Object.entries(KIEU_DE).map(([k, v]) => `<button class="${soan.kieu === k ? "chon" : ""}" onclick="datKieu('${k}')"><b>${v.ten}</b><small>${v.tl.join("/")}</small></button>`).join("")}</div>
      <div class="luoi-md">${[1, 2, 3, 4].map(m => `<div class="o-md muc-${MAU_MUC[m]}"><small>${TAT_MUC[m]}</small>
        <span class="buoc-md"><button onclick="doiMuc(${m},-1)" ${soan.muc[m] ? "" : "disabled"} aria-label="Bớt">−</button><b>${soan.muc[m] || 0}</b><button onclick="doiMuc(${m},1)" aria-label="Thêm">+</button></span>
        <small class="${coTheoMuc(m) < (soan.muc[m] || 0) ? "loi-tk" : ""}">/${coTheoMuc(m)}</small></div>`).join("")}</div>
      <p class="ghi-chu nho">NB Nhận biết · TH Thông hiểu · VD Vận dụng · VDC Vận dụng cao · /số câu kho có</p>

      <div class="dau-muc-ch"><b>Chương</b><small class="ghi-chu">${soan.chuong.length ? `đã chọn ${soan.chuong.length}` : "chưa chọn = mọi chương"}</small>
        ${soan.chuong.length ? `<button class="chip-nhanh" onclick="chonMoiChuong(true)">Bỏ chọn</button>` : ""}</div>
      ${nhomCh.map(([n, ds]) => `<div class="nhom-ch"><button class="ten-nhom" onclick="batNhom('${n}')">${n} ${ds.every(c => soan.chuong.includes(c.id)) ? "✓" : "＋"}</button>
        <div class="luoi-ch">${ds.map(c => `<button class="o-ch ${soan.chuong.includes(c.id) ? "chon" : ""}" onclick="batChuong('${c.id}')">${c.icon} ${TEN_NGAN[c.id] || c.ten}</button>`).join("")}</div></div>`).join("")}

      <details class="tuy-chon"><summary>Mã đề: ${cauHinhDe.soMa} mã${cauHinhDe.daoCau ? " · đảo câu" : ""}${cauHinhDe.daoPA ? " · đảo phương án" : ""}</summary>
        <div class="nhom-chip">${[1, 2, 4, 6, 8].map(n => `<label class="chip-chon"><input type="radio" name="de-so-ma" ${cauHinhDe.soMa === n ? "checked" : ""} onchange="datCauHinh('soMa', ${n});hienManHinh()"><span>${n} mã</span></label>`).join("")}</div>
        <label class="dong-bat"><input type="checkbox" ${cauHinhDe.daoCau ? "checked" : ""} onchange="datCauHinh('daoCau', this.checked);hienManHinh()"><span>Đảo thứ tự câu giữa các mã</span></label>
        <label class="dong-bat"><input type="checkbox" ${cauHinhDe.daoPA ? "checked" : ""} onchange="datCauHinh('daoPA', this.checked);hienManHinh()"><span>Đảo thứ tự phương án A, B, C, D</span></label>
        ${NGAN_HANG_CHO_DUYET.length ? `<label class="dong-bat"><input type="checkbox" ${cauHinhDe.choDuyet ? "checked" : ""} onchange="datCauHinh('choDuyet', this.checked)"><span>Dùng cả câu chờ duyệt</span></label>` : ""}
      </details>
      ${soan.chon.length ? `<p class="ghi-chu">Đang có bản soạn dở ${soan.chon.length} câu — <a href="#/chon-cau">tiếp tục chọn</a>.</p>` : ""}
    </div>
    <div class="nut-hang hai-nut day-chon">
      <button class="btn phu" onclick="batDauChon(false)">✋ Tự chọn</button>
      <button class="btn" onclick="batDauChon(true)">✨ Gợi ý sẵn ${tongMuc()} câu</button></div>
    ${luu.length ? `<h2>Đề đã lưu</h2><div class="list">${luu.map(d =>
      dongDanhSach(`#/de?id=${d.id}`, "📄", coDau(d.ten), `${d.cau.length} câu · ${d.phut} phút · ${d.ma.length} mã · ${new Date(d.ngay).toLocaleDateString("vi-VN")}`)).join("")}</div>` : ""}`;
  },
};

/* ---------- Bước 2: chọn câu, xem nguyên đề ---------- */
const locChon = { tab: "kho", chuong: "", muc: 0, dang: "", tu: "", anDaChon: true, dapAn: false, so: 15 };
function theCauChon(c, trongDe) {
  const da = soan.chon.includes(c.id), cum = c.chum ? KHO_DE_CAU.filter(x => x.chum === c.chum) : null;
  return `<div class="the-trang cau-chon ${da ? "da-chon" : ""}">
    <div class="nhan-cau"><span>${c.id}</span><span class="muc-${c.mucDo}">${MUC_DO[c.mucDo]}</span><span>${tenChuong(c.chuong)}</span>${cum ? `<span>Chùm ${cum.length} câu</span>` : ""}</div>
    <div class="ten-dang">${tenDang(c.dang)}</div>
    ${c.dan ? `<div class="de-dan">${c.dan}</div>` : ""}<div class="de-cau">${c.de}</div>
    <ol class="pa-de" type="A">${c.phuongAn.map((p, j) => `<li class="${locChon.dapAn && CHU[j] === c.dapAn ? "dung" : ""}"><span class="chu">${CHU[j]}.</span> ${p}</li>`).join("")}</ol>
    <div class="nut-hang">${trongDe ? `<button class="btn phu" onclick="doiCauSoan('${c.id}')">↻ Đổi câu tương tự</button>` : ""}
      <button class="btn ${da ? "phu" : ""}" onclick="batChonCau('${c.id}')">${da ? "✓ Đã chọn · Bỏ" : "＋ Thêm vào đề"}</button></div></div>`;
}
function batChonCau(id) {
  const c = CAU_THEO_ID[id], nhom = c.chum ? KHO_DE_CAU.filter(x => x.chum === c.chum).map(x => x.id) : [id];
  if (soan.chon.includes(id)) soan.chon = soan.chon.filter(x => !nhom.includes(x));
  else soan.chon.push(...nhom.filter(x => !soan.chon.includes(x)));
  luuSoan(); veChonCau();
}
function doiCauSoan(id) {
  const g = CAU_THEO_ID[id], da = new Set(soan.chon);
  const pool = cauNguon().filter(c => !da.has(c.id) && !c.chum && c.chuong === g.chuong);
  const chon = [pool.filter(c => c.dang === g.dang && c.mucDo === g.mucDo), pool.filter(c => c.mucDo === g.mucDo)].find(p => p.length);
  if (!chon) return alert("Không còn câu cùng chương, cùng mức độ để đổi.");
  soan.chon[soan.chon.indexOf(id)] = chon[Math.floor(Math.random() * chon.length)].id; luuSoan(); veChonCau();
}
function datLocChon(k, v) { locChon[k] = v; locChon.so = 15; veChonCau(); }
function thanhTienDoChon() {
  const d = demChon();
  return `<div class="thanh-chon"><b>Đã chọn ${soan.chon.length}/${tongMuc()}</b>
    ${[1, 2, 3, 4].map(m => { const n = d[m], t = soan.muc[m] || 0; return `<button class="chip-muc ${n === t ? "du" : n > t ? "thua" : "thieu"}" onclick="locChon.tab='kho';datLocChon('muc',${m})">${TAT_MUC[m]} ${n}/${t}</button>`; }).join("")}</div>
    <div class="nhom-chip"><button class="chip-nhanh ${locChon.tab === "kho" ? "chon" : ""}" onclick="locChon.tab='kho';veChonCau()">Kho câu</button>
      <button class="chip-nhanh ${locChon.tab === "de" ? "chon" : ""}" onclick="locChon.tab='de';veChonCau()">Đề đang soạn (${soan.chon.length})</button></div>`;
}
function veChonCau() {
  const v = document.getElementById("vung-chon"); if (!v) return;
  const tt = document.getElementById("tien-do-chon"); if (tt) tt.innerHTML = thanhTienDoChon();
  if (locChon.tab === "de") {
    const ds = soan.chon.map(id => CAU_THEO_ID[id]).filter(Boolean).sort((a, b) => a.mucDo - b.mucDo);
    v.innerHTML = lamToan(ds.length ? ds.map(c => theCauChon(c, true)).join("") : `<div class="trong">Chưa chọn câu nào.</div>`);
    return;
  }
  const tu = boDau(locChon.tu).split(/\s+/).filter(Boolean);
  const nguon = cauNguon().filter(c => (!locChon.chuong || c.chuong === locChon.chuong) && (!locChon.muc || c.mucDo === locChon.muc)
    && (!locChon.dang || c.dang === locChon.dang) && (!locChon.anDaChon || !soan.chon.includes(c.id))
    && (!tu.length || tu.every(t => khoaTimCau(c).includes(t))));
  const dsDang = [...new Set(cauNguon().filter(c => !locChon.chuong || c.chuong === locChon.chuong).map(c => c.dang))];
  v.innerHTML = `<div class="loc-chon">
      <input type="search" placeholder="🔍 Tìm chất, từ khóa, mã câu…" value="${coDau(locChon.tu)}" oninput="clearTimeout(locChon.h);locChon.h=setTimeout(()=>datLocChon('tu',this.value),300)">
      <div class="hang-loc-3">
        <select onchange="locChon.dang='';datLocChon('chuong',this.value)" aria-label="Chương"><option value="">Mọi chương</option>${CHUONG.filter(c => cauNguon().some(q => q.chuong === c.id)).map(c => `<option value="${c.id}" ${locChon.chuong === c.id ? "selected" : ""}>${TEN_NGAN[c.id] || c.ten}</option>`).join("")}</select>
        <select onchange="datLocChon('muc',Number(this.value))" aria-label="Mức độ">${[0, 1, 2, 3, 4].map(m => `<option value="${m}" ${locChon.muc === m ? "selected" : ""}>${m ? MUC_DO[m] : "Mọi mức"}</option>`).join("")}</select>
        <select onchange="datLocChon('dang',this.value)" aria-label="Dạng"><option value="">Mọi dạng</option>${dsDang.map(d => `<option value="${coDau(d)}" ${locChon.dang === d ? "selected" : ""}>${coDau(tenDang(d))}</option>`).join("")}</select>
      </div>
      <div class="nhom-chip">
        <label class="chip-chon"><input type="checkbox" ${locChon.anDaChon ? "checked" : ""} onchange="datLocChon('anDaChon',this.checked)"><span>Ẩn câu đã chọn</span></label>
        <label class="chip-chon"><input type="checkbox" ${locChon.dapAn ? "checked" : ""} onchange="datLocChon('dapAn',this.checked)"><span>Hiện đáp án</span></label></div>
    </div><p class="ghi-chu">${nguon.length} câu phù hợp</p>
    <div id="ds-chon">${lamToan(nguon.slice(0, locChon.so).map(c => theCauChon(c)).join(""))}</div>
    ${nguon.length > locChon.so ? `<button class="btn full phu" onclick="locChon.so+=15;veChonCau()">Xem thêm (${nguon.length - locChon.so} câu)</button>` : ""}`;
}
// Xếp câu trong đề: theo mức độ tăng dần, rồi theo chương; câu chùm đi liền nhau
function xepCauDe(ids) {
  const donVi = {}; ids.forEach(id => { const c = CAU_THEO_ID[id]; (donVi[c.chum || id] ||= []).push(c); });
  return Object.values(donVi).sort((a, b) => Math.min(...a.map(c => c.mucDo)) - Math.min(...b.map(c => c.mucDo))
    || CHUONG.findIndex(x => x.id === a[0].chuong) - CHUONG.findIndex(x => x.id === b[0].chuong)).flat().map(c => c.id);
}
function xongChonCau() {
  if (!soan.chon.length) return alert("Chưa chọn câu nào.");
  const d = demChon(), lech = [1, 2, 3, 4].filter(m => d[m] !== (soan.muc[m] || 0));
  if (lech.length && !confirm(`Số câu chưa khớp khung (${lech.map(m => `${TAT_MUC[m]} ${d[m]}/${soan.muc[m] || 0}`).join(", ")}). Vẫn tạo đề?`)) return;
  const hat = Math.floor(Math.random() * 2 ** 31);
  const de = { id: "d" + Date.now().toString(36), ten: cauHinhDe.ten, phut: cauHinhDe.phut, ngay: Date.now(),
    cau: xepCauDe(soan.chon), daoCau: cauHinhDe.daoCau, daoPA: cauHinhDe.daoPA, hat };
  de.ma = taoMaDe(de.cau, cauHinhDe.soMa, de.daoCau, de.daoPA, hat);
  ghiDsDe([de, ...dsDe()]);
  soan.chon = []; luuSoan();
  location.hash = `#/de?id=${de.id}`;
}
MAN_HINH["/chon-cau"] = {
  tieuDe: "Chọn câu cho đề",
  manHinhCon: true,
  ve: () => `
    <div class="buoc-soan"><a href="#/tao-de">1 · Khung đề</a><span class="dang">2 · Chọn câu</span><span>3 · Mã đề, in, giao</span></div>
    <div class="dinh-chon" id="tien-do-chon"></div>
    <div id="vung-chon"></div>
    <div class="nut-hang hai-nut day-chon">
      <button class="btn phu" onclick="tuDien()">✨ Tự điền phần thiếu</button>
      <button class="btn" onclick="xongChonCau()">Xong → Tạo mã đề</button></div>`,
  sauKhiVe: veChonCau,
};

/* ---------- Màn hình xem đề ---------- */
let maDangXem = 0, hienDapAnDe = false;
function thamSoHash() { return new URLSearchParams((location.hash.split("?")[1]) || ""); }
function cauTheoMa(de, k) {
  const m = de.ma[k];
  return m.thuTu.map(i => ({ id: de.cau[i], pa: m.pa[i] }));
}
const chuDapAn = (x) => CHU[x.pa.indexOf(CHU.indexOf(CAU_THEO_ID[x.id].dapAn))];

function veCauDe(x, so, coDapAn, coNhan = true, truoc = null) {
  const g = CAU_THEO_ID[x.id]; if (!g) return "";
  const dauCum = g.dan && (!truoc || CAU_THEO_ID[truoc.id]?.chum !== g.chum);
  const dung = chuDapAn(x);
  return `${dauCum ? `<div class="de-dan">${g.dan}</div>` : ""}<div class="cau-de">
    <div class="dau-cau-de"><b>Câu ${so}.</b>${coNhan ? ` <span class="nhan-nho">${tenChuong(g.chuong)} · ${MUC_DO[g.mucDo]}${g.choDuyet ? ' · <i class="cho">chờ duyệt</i>' : ""}</span>` : ""}</div>
    <div class="de-cau">${g.de}</div>
    <ol class="pa-de" type="A">${x.pa.map((k, j) => `<li class="${coDapAn && CHU[j] === dung ? "dung" : ""}"><span class="chu">${CHU[j]}.</span> ${g.phuongAn[k]}</li>`).join("")}</ol>
    ${coNhan ? `<button class="nut-doi" onclick="doiCau('${x.id}')">↻ Đổi câu khác</button>` : ""}
  </div>`;
}

MAN_HINH["/de"] = {
  tieuDe: "Đề kiểm tra",
  manHinhCon: true,
  ve: () => {
    const ts = thamSoHash();
    const de = timDe(ts.get("chia") ? nhapDeChiaSe(ts.get("chia")) : ts.get("id"));
    if (!de) return `<div class="trong">Không tìm thấy đề này trên máy.<br><br><a class="btn" href="#/tao-de">Tạo đề mới</a></div>`;
    if (maDangXem >= de.ma.length) maDangXem = 0;
    const ds = cauTheoMa(de, maDangXem), soCho = de.cau.filter(id => CAU_THEO_ID[id]?.choDuyet).length;
    return `
    <div class="the-trang dau-de">
      <h3>${coDau(de.ten)}</h3>
      <p>${de.cau.length} câu · ${de.phut} phút · ${de.ma.length} mã đề</p>
      ${soCho ? `<p class="canh-bao">⚠️ Có ${soCho} câu chưa được duyệt.</p>` : ""}
      <div class="nut-de">
        <button class="btn" onclick="lamThuDe()">▶ Làm bài</button>
        <button class="btn phu" onclick="inDe()">🖨 In / PDF</button>
        <button class="btn phu" onclick="chiaSeDe()">🔗 Chia sẻ</button>
        <button class="btn phu" onclick="xoaDe()">🗑 Xóa</button>
      </div>
    </div>
    <div class="thanh-ma">
      <div class="nhom-chip">${de.ma.map((m, k) => `<label class="chip-chon"><input type="radio" name="ma-xem" ${k === maDangXem ? "checked" : ""} onchange="maDangXem=${k};hienManHinh()"><span>Mã ${m.ma}</span></label>`).join("")}</div>
      <label class="dong-bat gon"><input type="checkbox" ${hienDapAnDe ? "checked" : ""} onchange="hienDapAnDe=this.checked;hienManHinh()"><span>Hiện đáp án</span></label>
    </div>
    <div class="the-trang">${ds.map((x, i) => veCauDe(x, i + 1, hienDapAnDe, true, ds[i - 1])).join("")}</div>
    <h2>Đáp án mã ${de.ma[maDangXem].ma}</h2>
    <div class="the-trang luoi-dap-an">${ds.map((x, i) => `<span><b>${i + 1}</b>${chuDapAn(x)}</span>`).join("")}</div>`;
  },
};

function deDangXem() { return timDe(thamSoHash().get("id")); }
function capNhatDe(de) { ghiDsDe(dsDe().map(d => d.id === de.id ? de : d)); }

// Đổi một câu bằng câu khác cùng chương (ưu tiên cùng dạng, cùng mức độ), giữ nguyên vị trí trong mọi mã
function doiCau(id) {
  const de = deDangXem(), g = CAU_THEO_ID[id];
  const daCo = new Set(de.cau), ch = { ...cauHinhDe, choDuyet: cauHinhDe.choDuyet || !!g.choDuyet };
  const pool = cauDungDuoc(g.chuong, { ...ch, muc: [1, 2, 3, 4] }).filter(c => !daCo.has(c.id));
  const uuTien = [pool.filter(c => c.dang === g.dang && c.mucDo === g.mucDo), pool.filter(c => c.dang === g.dang), pool.filter(c => c.mucDo === g.mucDo), pool];
  const chon = uuTien.find(p => p.length);
  if (!chon) { alert("Chương này không còn câu nào khác để đổi."); return; }
  const moi = chon[Math.floor(Math.random() * chon.length)];
  de.cau[de.cau.indexOf(id)] = moi.id;
  capNhatDe(de); hienManHinh();
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
  const goi = { t: de.ten, p: de.phut, c: de.cau, dc: de.daoCau ? 1 : 0, dp: de.daoPA ? 1 : 0, h: de.hat, n: de.ma.length };
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
      de.ma = taoMaDe(cau, g.n, de.daoCau, de.daoPA, g.h);
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
