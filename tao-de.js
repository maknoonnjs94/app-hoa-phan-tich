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

/* ---------- Màn hình cấu hình ---------- */
function veDongChuong(c) {
  const co = cauDungDuoc(c.id).length, n = Math.min(cauHinhDe.soCau[c.id] || 0, co);
  return `<div class="dong-ma-tran ${co ? "" : "mo"}">
    <span class="ten">${c.icon} ${c.ten}<small>${co ? `có ${co} câu` : "chưa có câu"}</small></span>
    <span class="buoc">
      <button onclick="doiSoCau('${c.id}',-1)" ${n ? "" : "disabled"} aria-label="Bớt">−</button>
      <input inputmode="numeric" value="${n}" onchange="datSoCau('${c.id}',this.value)" ${co ? "" : "disabled"} aria-label="Số câu ${coDau(c.ten)}">
      <button onclick="doiSoCau('${c.id}',1)" ${co > n ? "" : "disabled"} aria-label="Thêm">+</button>
    </span></div>`;
}
function tongCau() { return CHUONG.reduce((t, c) => t + Math.min(cauHinhDe.soCau[c.id] || 0, cauDungDuoc(c.id).length), 0); }
function veMaTran() {
  const el = document.getElementById("ma-tran"); if (!el) return;
  el.innerHTML = theoNhom(ds => ds.map(veDongChuong).join(""));
  document.getElementById("tong-cau-de").textContent = tongCau();
  document.getElementById("nut-tao-de").disabled = !tongCau();
}
function doiSoCau(id, d) { datSoCau(id, (cauHinhDe.soCau[id] || 0) + d); }
function datSoCau(id, v) {
  const co = cauDungDuoc(id).length;
  cauHinhDe.soCau[id] = Math.max(0, Math.min(co, parseInt(v, 10) || 0));
  luuCauHinh(); veMaTran();
}
function chiaDeu() {
  const tong = parseInt(document.getElementById("tong-chia").value, 10) || 0;
  let chon = CHUONG.filter(c => (cauHinhDe.soCau[c.id] || 0) > 0 && cauDungDuoc(c.id).length);
  if (!chon.length) chon = CHUONG.filter(c => cauDungDuoc(c.id).length);
  CHUONG.forEach(c => cauHinhDe.soCau[c.id] = 0);
  let con = tong, vong = true;
  while (con > 0 && vong) {           // rải từng câu một cho tới khi đủ hoặc hết câu
    vong = false;
    for (const c of chon) if (con > 0 && cauHinhDe.soCau[c.id] < cauDungDuoc(c.id).length) { cauHinhDe.soCau[c.id]++; con--; vong = true; }
  }
  luuCauHinh(); veMaTran();
}
function datCauHinh(khoa, v) {
  cauHinhDe[khoa] = v; luuCauHinh();
  if (khoa === "choDuyet" || khoa === "muc") veMaTran();
}
function datMuc() { datCauHinh("muc", [...document.querySelectorAll('[name="de-muc"]:checked')].map(x => Number(x.value))); }

function taoDe() {
  const hat = Math.floor(Math.random() * 2 ** 31), rng = taoRng(hat);
  let ds = [];
  CHUONG.forEach(c => { const n = Math.min(cauHinhDe.soCau[c.id] || 0, cauDungDuoc(c.id).length); if (n) ds.push(...bocCau(cauDungDuoc(c.id), n, rng)); });
  if (!ds.length) return;
  const ten = (document.getElementById("ten-de").value || "").trim() || "Đề kiểm tra";
  cauHinhDe.ten = ten; luuCauHinh();
  const de = {
    id: "d" + Date.now().toString(36), ten, phut: cauHinhDe.phut, ngay: Date.now(),
    cau: ds.map(c => c.id), daoCau: cauHinhDe.daoCau, daoPA: cauHinhDe.daoPA, hat,
  };
  de.ma = taoMaDe(de.cau, cauHinhDe.soMa, de.daoCau, de.daoPA, hat);
  ghiDsDe([de, ...dsDe()]);
  location.hash = `#/de?id=${de.id}`;
}

MAN_HINH["/tao-de"] = {
  tieuDe: "Tạo đề",
  ve: () => {
    const luu = dsDe();
    return `
    <div class="the-trang tao-de">
      <label class="nhan-o">Tên đề<input id="ten-de" value="${coDau(cauHinhDe.ten)}" onchange="datCauHinh('ten', this.value)"></label>
      <h3>Thời gian làm bài</h3>
      <div class="nhom-chip">${[15, 30, 45, 60, 90].map(p => `<label class="chip-chon"><input type="radio" name="de-phut" value="${p}" ${cauHinhDe.phut === p ? "checked" : ""} onchange="datCauHinh('phut', ${p})"><span>${p} phút</span></label>`).join("")}</div>
      <h3>Mức độ</h3>
      <div class="nhom-chip">${[1, 2, 3, 4].map(m => `<label class="chip-chon"><input type="checkbox" name="de-muc" value="${m}" ${cauHinhDe.muc.includes(m) ? "checked" : ""} onchange="datMuc()"><span>${MUC_DO[m]}</span></label>`).join("")}</div>
      <label class="dong-bat"><input type="checkbox" ${cauHinhDe.choDuyet ? "checked" : ""} onchange="datCauHinh('choDuyet', this.checked)">
        <span>Dùng cả câu <b>chờ duyệt</b><small>Câu chưa được duyệt có nhãn “chờ duyệt” khi xem trước; nhãn này không in ra đề.</small></span></label>

      <h3>Số câu theo chương</h3>
      <div class="chia-nhanh">Tổng <input id="tong-chia" inputmode="numeric" value="${tongCau() || 20}"> câu
        <button class="btn phu nho" onclick="chiaDeu()">Chia đều</button></div>
      <p class="ghi-chu">Chia đều cho các chương đang có số câu &gt; 0 (nếu chưa chọn chương nào thì chia cho mọi chương). Sửa lại từng chương bằng nút − / +.</p>
      <div id="ma-tran" class="ma-tran"></div>

      <h3>Mã đề</h3>
      <div class="nhom-chip">${[1, 2, 4, 6, 8].map(n => `<label class="chip-chon"><input type="radio" name="de-so-ma" ${cauHinhDe.soMa === n ? "checked" : ""} onchange="datCauHinh('soMa', ${n})"><span>${n} mã</span></label>`).join("")}</div>
      <label class="dong-bat"><input type="checkbox" ${cauHinhDe.daoCau ? "checked" : ""} onchange="datCauHinh('daoCau', this.checked)"><span>Đảo thứ tự câu giữa các mã</span></label>
      <label class="dong-bat"><input type="checkbox" ${cauHinhDe.daoPA ? "checked" : ""} onchange="datCauHinh('daoPA', this.checked)"><span>Đảo thứ tự phương án A, B, C, D</span></label>
      <button class="btn full" id="nut-tao-de" onclick="taoDe()">Tạo đề · <span id="tong-cau-de">0</span> câu</button>
    </div>

    ${luu.length ? `<h2>Đề đã lưu</h2><div class="list">${luu.map(d =>
      dongDanhSach(`#/de?id=${d.id}`, "📄", coDau(d.ten), `${d.cau.length} câu · ${d.phut} phút · ${d.ma.length} mã · ${new Date(d.ngay).toLocaleDateString("vi-VN")}`)).join("")}</div>` : ""}
    `;
  },
  sauKhiVe: veMaTran,
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
