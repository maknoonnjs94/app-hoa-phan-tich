/* =========================================================
   KHO ẢNH ĐỀ THI CUỐI KÌ CÁC NĂM (chỉ giáo viên)  #/kho-de-thi  và  #/kho-de-thi?id=
   Ảnh chụp/scan được làm đẹp ngay trên máy (xu-ly-anh.js: thẳng lại, xóa bóng, cắt viền, phóng to, làm nét)
   rồi lưu ở Firestore — KHÔNG để trong repo công khai:
     khoAnhDe/{id} = { nam: "2024-2025", ki, ten, ghiChu, soTrang, thumb (dataURL nhỏ), taoLuc, taoBoi, taoTen }
     khoAnhDe/{id}/trang/{01,02,…} = { t, anh (dataURL WebP/JPEG ≤ ~800 KB), w, h }
   ========================================================= */
const KD = { ds: null, nam: "", tu: "", them: null };
const KD_KI = ["Kì 1", "Kì 2", "Kì hè", "Khác"];
const kdDocUrl = b => new Promise((ok, loi) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = loi; r.readAsDataURL(b); });
const kdTen = d => [d.ki ? "Cuối kì " + (d.ki === "Khác" ? "" : d.ki) : "Đề thi", d.nam, d.ten].filter(Boolean).join(" · ").replace("Cuối kì  ·", "Cuối kì ·");

MAN_HINH["/kho-de-thi"] = {
  tieuDe: "Kho đề thi",
  manHinhCon: true,
  ve: () => laGVtk() ? `<div id="vung-kd"><div class="trong">Đang tải…</div></div>` : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-kd"); if (!v || !laGVtk()) return;
    const id = thamSoHash().get("id");
    try { id ? await kdVeXem(v, id) : await kdVeDs(v); } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}<br><br><a class="btn" href="#/kho-de-thi">← Kho đề thi</a></div>`; }
  },
};

/* ---------- danh sách ---------- */
async function kdVeDs(v, taiLai) {
  if (!KD.ds || taiLai) KD.ds = (await fbDb.collection("khoAnhDe").get()).docs.map(x => ({ id: x.id, ...x.data() })).sort((a, b) => String(b.nam).localeCompare(String(a.nam)) || b.taoLuc - a.taoLuc);
  const nam = [...new Set(KD.ds.map(d => d.nam).filter(Boolean))].sort().reverse(), tu = boDau(KD.tu.trim());
  const ds = KD.ds.filter(d => (!KD.nam || d.nam === KD.nam) && (!tu || boDau(kdTen(d) + " " + (d.ghiChu || "")).includes(tu)));
  v.innerHTML = `<p class="ghi-chu">Kho lưu ảnh các đề thi cuối kì để tham khảo khi ra đề. Chỉ giáo viên xem được; ảnh không đưa lên nơi công khai. Ảnh tự được làm thẳng, xóa bóng, cắt viền và làm nét.</p>
    <div class="nut-hang trai"><button class="btn" onclick="kdMoThem()">＋ Thêm đề thi</button></div>
    <div id="kd-them"></div>
    ${KD.ds.length ? `<div class="hang-loc"><input type="search" placeholder="🔍 Tìm đề…" value="${hoa(KD.tu)}" oninput="KD.tu=this.value;kdVeDs(document.getElementById('vung-kd'))">
      <select onchange="KD.nam=this.value;kdVeDs(document.getElementById('vung-kd'))" aria-label="Năm học"><option value="">Mọi năm (${KD.ds.length})</option>${nam.map(n => `<option ${KD.nam === n ? "selected" : ""}>${hoa(n)}</option>`).join("")}</select></div>` : ""}
    <div class="kd-luoi">${ds.map(d => `<a class="kd-the" href="#/kho-de-thi?id=${d.id}"><img src="${d.thumb || ""}" alt=""><b>${hoa(kdTen(d))}</b><small>${d.soTrang || 0} trang · ${hoa(d.taoTen || "")}</small></a>`).join("")
      || `<div class="trong" style="grid-column:1/-1">${KD.ds.length ? "Không có đề nào khớp." : "Kho còn trống. Bấm “＋ Thêm đề thi” rồi chọn ảnh chụp đề."}</div>`}</div>`;
}

/* ---------- thêm đề: chọn ảnh → làm đẹp → xem trước → lưu ---------- */
function kdMoThem() {
  KD.them = { trang: [], opt: { ...XLA.MAC_DINH }, xuLy: false };
  const o = document.getElementById("kd-them"); if (!o) return;
  const nam = new Date().getFullYear();
  o.innerHTML = `<div class="the-trang form-tk"><b>Thêm đề thi mới</b>
      <div class="luoi-cot"><label>Năm học<input id="kd-nam" placeholder="${nam - 1}-${nam}" maxlength="20"></label>
        <label>Kì<select id="kd-ki">${KD_KI.map(k => `<option>${k}</option>`).join("")}</select></label></div>
      <label>Tên / mã đề (tùy chọn)<input id="kd-ten" placeholder="VD: Đề 1, Đề chính thức" maxlength="60"></label>
      <label>Ghi chú (tùy chọn)<input id="kd-gc" maxlength="200"></label>
      <label class="btn full phu">📷 Chọn ảnh đề (chụp hoặc từ thư viện, chọn được nhiều trang)<input type="file" accept="image/*" multiple hidden onchange="kdChonAnh(this.files);this.value=''"></label>
      <button class="btn full phu" onclick="kdDocTin(true)">🔎 Đọc năm học, kì, đề số từ ảnh</button>
      <details><summary>Tùy chọn làm đẹp ảnh</summary><div class="kd-tuy">${[["ban", "Bỏ nền bàn / ngoài tờ giấy"], ["nen", "Xóa bóng, làm đều nền"], ["thang", "Làm thẳng chữ"], ["cat", "Cắt viền thừa"], ["to", "Phóng to ảnh nhỏ"], ["muot", "Làm mượt nhiễu"], ["net", "Làm nét chữ"], ["mau", "Giữ màu (mặc định: đen trắng)"]]
        .map(([k, t]) => `<label class="tk-chk"><input type="checkbox" ${KD.them.opt[k] ? "checked" : ""} onchange="KD.them.opt.${k}=this.checked"> ${t}</label>`).join("")}
        <button class="btn phu" onclick="kdXuLyLai()">↻ Xử lý lại tất cả với tùy chọn này</button></div></details>
      <div id="kd-trang"></div><p class="ghi-chu" id="kd-dt"></p><p class="loi-tk" id="kd-loi"></p>
      <div class="nut-hang"><button class="btn phu" onclick="KD.them=null;document.getElementById('kd-them').innerHTML=''">Hủy</button><button class="btn" id="kd-luu" onclick="kdLuu()" disabled>💾 Lưu vào kho</button></div></div>`;
  o.scrollIntoView({ behavior: "smooth", block: "start" });
}
async function kdChonAnh(files) {
  if (!KD.them) return;
  const moi = [...files].filter(f => f.type.startsWith("image/")).map(tep => ({ tep, xoay: 0, ra: null, url: "", tt: "đang chờ…" }));
  KD.them.trang.push(...moi); kdVeTrang(); await kdChay(moi);
}
async function kdChay(ds) {
  const T = KD.them; if (!T) return; T.xuLy = true; kdVeTrang();
  for (const p of ds) {
    try { p.tt = "đang xử lý…"; kdVeTrang(); const r = await XLA.xuLy(p.tep, { ...T.opt, xoay: p.xoay }, s => { p.tt = s; const e = document.getElementById("kd-tt-" + T.trang.indexOf(p)); if (e) e.textContent = s; });
      if (p.url) URL.revokeObjectURL(p.url); p.ra = r; p.url = URL.createObjectURL(r.blob); p.tt = `${r.w}×${r.h} · ${Math.round(r.blob.size / 1024)} KB${r.goc ? " · đã chỉnh nghiêng " + r.goc.toFixed(1).replace(".", ",") + "°" : ""}`; }
    catch (e) { p.ra = null; p.tt = "⚠ lỗi: " + (e.message || e); }
    if (!KD.them) return;
  }
  T.xuLy = false; kdVeTrang();
  if (!T.daDoc && T.trang.some(p => p.ra)) kdDocTin(false);   // ảnh đầu tiên xong → tự đọc thông tin đề
}
/* tự đọc phần đầu trang (OCR) để điền năm học, kì, đề số, ghi chú; chỉ điền ô còn trống (ép = true thì ghi đè) */
async function kdDocTin(ep) {
  const T = KD.them, p = T?.trang.find(x => x.ra), tt = document.getElementById("kd-dt"); if (!T || !p || !tt || T.dangDoc) return;
  T.dangDoc = true; T.daDoc = true;
  try {
    const r = await DOC.doc(p.ra.blob, s => { tt.textContent = "🔎 " + s; });
    const g = id => document.getElementById(id), dien = (id, v) => { const e = g(id); if (e && v && (ep || !e.value.trim())) { e.value = v; return true; } return false; }, da = [];
    if (dien("kd-nam", r.nam)) da.push("năm học " + r.nam);
    if (r.ki && g("kd-ki") && (ep || g("kd-ki").selectedIndex === 0)) { g("kd-ki").value = r.ki; da.push(r.ki); }
    if (dien("kd-ten", r.ten)) da.push(r.ten);
    if (dien("kd-gc", r.ghiChu)) da.push("ghi chú");
    tt.textContent = da.length ? "✨ Đã tự điền: " + da.join(", ") + ". Bạn kiểm tra lại cho chắc." : (r.nam || r.ki || r.ten ? "Các ô đã có thông tin nên giữ nguyên." : "Không đọc được thông tin trên ảnh này, bạn nhập tay nhé.");
  } catch (e) { tt.textContent = "Không đọc được chữ trên ảnh (" + (e.message || e) + "). Bạn nhập tay nhé."; }
  T.dangDoc = false;
}
function kdXuLyLai() { if (KD.them?.trang.length) kdChay(KD.them.trang); }
function kdVeTrang() {
  const o = document.getElementById("kd-trang"), T = KD.them; if (!o || !T) return;
  o.innerHTML = T.trang.map((p, i) => `<div class="kd-trang"><div class="kd-anh">${p.url ? `<img src="${p.url}" alt="Trang ${i + 1}">` : `<div class="kd-cho">⏳</div>`}</div>
    <div class="kd-ctrl"><b>Trang ${i + 1}</b><small id="kd-tt-${i}">${hoa(p.tt)}</small>
      <div class="kd-nut"><button class="chip-nhanh" onclick="kdXoay(${i})" ${T.xuLy ? "disabled" : ""}>↻ Xoay</button><button class="chip-nhanh" onclick="kdDoiCho(${i},-1)" ${i ? "" : "disabled"}>⬆</button><button class="chip-nhanh" onclick="kdDoiCho(${i},1)" ${i < T.trang.length - 1 ? "" : "disabled"}>⬇</button><button class="chip-nhanh" onclick="kdBoTrang(${i})">🗑</button></div></div></div>`).join("");
  const n = T.trang.filter(p => p.ra).length, b = document.getElementById("kd-luu"); if (b) b.disabled = T.xuLy || !n;
}
async function kdXoay(i) { const p = KD.them.trang[i]; p.xoay = (p.xoay + 90) % 360; await kdChay([p]); }
function kdDoiCho(i, d) { const a = KD.them.trang, j = i + d; if (j < 0 || j >= a.length) return; [a[i], a[j]] = [a[j], a[i]]; kdVeTrang(); }
function kdBoTrang(i) { const p = KD.them.trang.splice(i, 1)[0]; if (p?.url) URL.revokeObjectURL(p.url); kdVeTrang(); }
async function kdLuu() {
  const T = KD.them, loi = document.getElementById("kd-loi"), g = id => document.getElementById(id)?.value.trim() || "", trang = T.trang.filter(p => p.ra);
  if (!trang.length) return;
  const nam = g("kd-nam"); if (!nam) { loi.textContent = "Nhập năm học (VD 2024-2025)."; return; }
  const nut = document.getElementById("kd-luu"); nut.disabled = true; loi.textContent = "";
  try {
    const meta = { nam, ki: g("kd-ki"), ten: g("kd-ten"), ghiChu: g("kd-gc"), soTrang: trang.length, thumb: trang[0].ra.thuNho, taoLuc: Date.now(), taoBoi: tk.user.uid, taoTen: String(tk.hoSo?.hoTen || "").slice(0, 60) };
    const ref = await fbDb.collection("khoAnhDe").add(meta);
    for (let i = 0; i < trang.length; i++) {
      loi.textContent = `Đang lưu trang ${i + 1}/${trang.length}…`;
      await ref.collection("trang").doc(String(i + 1).padStart(2, "0")).set({ t: i + 1, anh: await kdDocUrl(trang[i].ra.blob), w: trang[i].ra.w, h: trang[i].ra.h });
    }
    trang.forEach(p => p.url && URL.revokeObjectURL(p.url)); KD.them = null; KD.ds = null;
    if (typeof ghiNhatKy === "function") ghiNhatKy("kho-de-thi", `Thêm ${kdTen(meta)} (${trang.length} trang)`);
    location.hash = `#/kho-de-thi?id=${ref.id}`;
  } catch (e) { loi.textContent = "Không lưu được: " + loiTk(e); nut.disabled = false; }
}

/* ---------- xem một đề ---------- */
async function kdVeXem(v, id) {
  const [m, tr] = await Promise.all([fbDb.collection("khoAnhDe").doc(id).get(), fbDb.collection("khoAnhDe").doc(id).collection("trang").orderBy("t").get()]);
  if (!m.exists) throw new Error("Không tìm thấy đề này (có thể đã bị xóa).");
  const d = { id, ...m.data() }, trang = tr.docs.map(x => x.data()), duocXoa = laQtvTk() || d.taoBoi === tk.user.uid;
  KD.xem = { d, trang };
  v.innerHTML = `<div class="nut-hang trai"><a class="btn phu" href="#/kho-de-thi">← Kho đề thi</a><button class="btn phu" onclick="kdSua('${id}')">✎ Sửa thông tin</button>${duocXoa ? `<button class="btn phu" onclick="kdXoa('${id}')">🗑 Xóa đề</button>` : ""}</div>
    <div class="the-trang"><b>${hoa(kdTen(d))}</b><p class="ghi-chu">${trang.length} trang · thêm bởi ${hoa(d.taoTen || "?")} · ${gioVN(d.taoLuc)}${d.ghiChu ? "<br>" + hoa(d.ghiChu) : ""}</p></div>
    ${trang.map((p, i) => `<div class="the-trang kd-doc"><div class="kd-doc-dau"><small>Trang ${p.t}</small><span><button class="chip-nhanh" onclick="kdPhongTo(${i})">🔍 Phóng to</button> <button class="chip-nhanh" onclick="kdTai(${i})">⬇ Tải</button></span></div><img src="${p.anh}" alt="Trang ${p.t}" onclick="kdPhongTo(${i})"></div>`).join("")}`;
}
function kdTai(i) { const { d, trang } = KD.xem, a = document.createElement("a"); a.href = trang[i].anh; a.download = `${kdTen(d).replace(/[^\p{L}\p{N}]+/gu, "-")}-trang-${trang[i].t}.${trang[i].anh.startsWith("data:image/webp") ? "webp" : "jpg"}`; a.click(); }
function kdPhongTo(i) {
  const { trang } = KD.xem; let z = 1; document.getElementById("kd-xem")?.remove();
  const o = document.createElement("div"); o.id = "kd-xem"; o.className = "kd-xem";
  o.innerHTML = `<div class="kd-xem-thanh"><span>Trang ${trang[i].t}/${trang.length}</span><span><button data-z="-">－</button><button data-z="+">＋</button><button data-t="-1" ${i ? "" : "disabled"}>◀</button><button data-t="1" ${i < trang.length - 1 ? "" : "disabled"}>▶</button><button data-x="1">✕</button></span></div><div class="kd-xem-nen"><img src="${trang[i].anh}" alt=""></div>`;
  const im = o.querySelector("img"); o.onclick = e => { const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.z) { z = Math.max(1, Math.min(4, z + (b.dataset.z === "+" ? .6 : -.6))); im.style.width = z * 100 + "%"; }
    else if (b.dataset.t) { o.remove(); kdPhongTo(i + +b.dataset.t); } else if (b.dataset.x) o.remove(); };
  document.body.append(o);
}
async function kdSua(id) {
  const d = KD.xem.d, nam = prompt("Năm học (VD 2024-2025):", d.nam || ""); if (nam === null) return;
  const ki = prompt(`Kì (${KD_KI.join(" / ")}):`, d.ki || ""); if (ki === null) return;
  const ten = prompt("Tên / mã đề:", d.ten || ""); if (ten === null) return;
  const gc = prompt("Ghi chú:", d.ghiChu || ""); if (gc === null) return;
  try { await fbDb.collection("khoAnhDe").doc(id).update({ nam: nam.trim().slice(0, 20), ki: ki.trim().slice(0, 10), ten: ten.trim().slice(0, 60), ghiChu: gc.trim().slice(0, 200) }); KD.ds = null; hienManHinh(); } catch (e) { alert(loiTk(e)); }
}
async function kdXoa(id) {
  if (!confirm(`Xóa đề “${kdTen(KD.xem.d)}” cùng toàn bộ ảnh? Không khôi phục được.`)) return;
  try {
    const tr = await fbDb.collection("khoAnhDe").doc(id).collection("trang").get(), lo = fbDb.batch(); tr.docs.forEach(x => lo.delete(x.ref)); await lo.commit();
    await fbDb.collection("khoAnhDe").doc(id).delete(); KD.ds = null; if (typeof ghiNhatKy === "function") ghiNhatKy("kho-de-thi", `Xóa ${kdTen(KD.xem.d)}`); location.hash = "#/kho-de-thi";
  } catch (e) { alert(loiTk(e)); }
}
