/* =========================================================
   THỐNG KÊ CHI TIẾT KẾT QUẢ LỚP  (#/thong-ke-lop?id=)
   Trung bình, trung vị, phương sai, độ lệch chuẩn, tứ phân vị, phân bố điểm + đường chuẩn (Gauss),
   biến động qua các lần kiểm tra, xem từng sinh viên so với lớp. Chọn gộp nhiều bài hoặc xem từng bài.
   ========================================================= */
const sk = (x, d = 2) => x == null || !isFinite(x) ? "–" : x.toFixed(d).replace(".", ",");
function tkThongKe(a) {
  const n = a.length; if (!n) return { n: 0 };
  const s = [...a].sort((x, y) => x - y), tb = s.reduce((t, x) => t + x, 0) / n;
  const pt = p => { const k = (n - 1) * p, f = Math.floor(k); return s[f] + (s[Math.min(f + 1, n - 1)] - s[f]) * (k - f); };
  const ss = s.reduce((t, x) => t + (x - tb) ** 2, 0), pv = n > 1 ? ss / (n - 1) : 0, sd = Math.sqrt(pv);
  const lech = n > 2 && sd > 0 ? s.reduce((t, x) => t + ((x - tb) / Math.sqrt(ss / n)) ** 3, 0) / n : 0;   // độ lệch (skewness) của mẫu
  return { n, tb, tv: pt(.5), q1: pt(.25), q3: pt(.75), pv, sd, min: s[0], max: s[n - 1], lech, d5: a.filter(x => x >= 5).length / n * 100, d8: a.filter(x => x >= 8).length / n * 100 };
}
let TK = null;
async function tkTaiLop(l) {
  const [hs, giao, nop] = await Promise.all([
    fbDb.collection("nguoiDung").where("lopHoc", "array-contains", l.id).get(),
    fbDb.collection("deGiao").where("lop", "==", l.id).get(),
    fbDb.collection("baiNop").where("lop", "==", l.id).get()]);
  const bg = Date.now();
  const de = giao.docs.map(x => ({ id: x.id, ...x.data() })).filter(d => bg > d.dongLuc).sort((a, b) => a.moLuc - b.moLuc);
  await Promise.all(de.map(d => taiDapAn(d, d.id).catch(() => {})));
  const bai = {}; nop.docs.forEach(x => { const b = x.data(); bai[`${b.deGiaoId}_${b.uid}`] = b; });
  const dsHS = hs.docs.map(x => ({ uid: x.id, ...x.data() })).filter(u => u.vaiTro === "hs" || !u.vaiTro)
    .sort((a, b) => (a.hoTen || "").split(" ").pop().localeCompare((b.hoTen || "").split(" ").pop(), "vi") || (a.hoTen || "").localeCompare(b.hoTen || "", "vi"));
  const diem = dsHS.map(u => de.map(d => { const b = bai[`${d.id}_${u.uid}`]; return b && (b.daNop || bg > d.dongLuc) ? diemCuoi(b) : null; }));
  return { l, de, hs: dsHS, diem, bai, tab: "diem", nhom: "dang", xanh: 70, do: 40, daBao: new Set(), chon: new Set(de.map((_, i) => i)), vang0: false, xem: "", xep: "ten" };
}
/* điểm của sinh viên i trên các bài đang chọn: trung bình (vắng: bỏ qua hoặc tính 0) */
function tkDiemHS(i) {
  const v = [...TK.chon].map(j => TK.diem[i][j] ?? (TK.vang0 ? 0 : null)).filter(x => x != null);
  return v.length ? v.reduce((t, x) => t + x, 0) / v.length : null;
}
const tkCot = j => TK.diem.map((r, i) => r[j] ?? (TK.vang0 ? 0 : null)).filter(x => x != null);

function tkBieuDoPhanBo(m, mau) {
  const W = 340, H = 200, L = 28, R = 8, T = 10, B = 26, pw = W - L - R, ph = H - T - B;
  const dem = Array(10).fill(0); mau.forEach(x => dem[Math.min(9, Math.max(0, Math.floor(x)))]++);
  const dc = m.n >= 3 && m.sd > 0, pdf = x => Math.exp(-((x - m.tb) ** 2) / (2 * m.pv)) / (m.sd * Math.sqrt(2 * Math.PI)) * m.n;
  let ymax = Math.max(...dem, dc ? pdf(m.tb) : 0, 1); ymax = Math.ceil(ymax * 1.1);
  const X = x => L + x / 10 * pw, Y = y => T + ph - y / ymax * ph;
  const cot = dem.map((c, i) => `<rect class="tk-cot ${i < 5 ? "yeu" : i >= 8 ? "gioi" : ""}" x="${X(i) + 1}" y="${Y(c)}" width="${pw / 10 - 2}" height="${T + ph - Y(c)}"><title>${i}–${i + 1} điểm: ${c} sinh viên</title></rect>${c ? `<text class="tk-so" x="${X(i + .5)}" y="${Y(c) - 3}">${c}</text>` : ""}`).join("");
  let duong = ""; if (dc) { const pts = []; for (let x = 0; x <= 10.001; x += .1) pts.push(`${X(x).toFixed(1)},${Y(Math.min(pdf(x), ymax)).toFixed(1)}`); duong = `<polyline class="tk-gauss" points="${pts.join(" ")}"/>`; }
  const nhanX = Array.from({ length: 11 }, (_, i) => `<text class="tk-nhan" x="${X(i)}" y="${H - 8}">${i}</text>`).join("");
  const tbLine = m.n ? `<line class="tk-tb" x1="${X(m.tb)}" x2="${X(m.tb)}" y1="${T}" y2="${T + ph}"/>` : "";
  return `<svg viewBox="0 0 ${W} ${H}" class="tk-svg" role="img" aria-label="Phân bố điểm">
    <line class="tk-truc" x1="${L}" x2="${W - R}" y1="${T + ph}" y2="${T + ph}"/><text class="tk-nhan" x="${L - 4}" y="${T + 8}" text-anchor="end">${ymax}</text><text class="tk-nhan" x="${L - 4}" y="${T + ph}" text-anchor="end">0</text>
    ${cot}${duong}${tbLine}${nhanX}</svg>`;
}
function tkBieuDoBai(xem) {
  const ds = [...TK.chon].sort((a, b) => a - b); if (!ds.length) return "";
  const W = 340, H = 210, L = 26, R = 12, T = 12, B = 34, pw = W - L - R, ph = H - T - B;
  const X = k => L + (ds.length === 1 ? pw / 2 : k / (ds.length - 1) * pw), Y = v => T + ph - v / 10 * ph;
  const th = ds.map(j => tkThongKe(tkCot(j)));
  const ok = th.map((t, k) => t.n ? k : -1).filter(k => k >= 0);
  const duong = (f, cls) => { const p = ok.map(k => { const v = f(th[k]); return v == null ? null : `${X(k).toFixed(1)},${Y(Math.max(0, Math.min(10, v))).toFixed(1)}`; }).filter(Boolean); return p.length > 1 ? `<polyline class="${cls}" points="${p.join(" ")}"/>` : ""; };
  const dai = ok.length > 1 ? `<polygon class="tk-dai" points="${ok.map(k => `${X(k).toFixed(1)},${Y(Math.min(10, th[k].tb + th[k].sd)).toFixed(1)}`).join(" ")} ${[...ok].reverse().map(k => `${X(k).toFixed(1)},${Y(Math.max(0, th[k].tb - th[k].sd)).toFixed(1)}`).join(" ")}"/>` : "";
  const dot = (f, cls) => ok.map(k => `<circle class="${cls}" cx="${X(k)}" cy="${Y(f(th[k]))}" r="3.5"><title>Bài ${ds[k] + 1}: ${sk(f(th[k]))}</title></circle>`).join("");
  let hsLine = "", hsDot = "";
  if (xem >= 0) { const v = ds.map(j => TK.diem[xem][j] ?? (TK.vang0 ? 0 : null)); const p = v.map((x, k) => x == null ? null : `${X(k).toFixed(1)},${Y(x).toFixed(1)}`).filter(Boolean);
    hsLine = p.length > 1 ? `<polyline class="tk-hs" points="${p.join(" ")}"/>` : ""; hsDot = v.map((x, k) => x == null ? "" : `<circle class="tk-hs-d" cx="${X(k)}" cy="${Y(x)}" r="4"><title>${hoa(TK.hs[xem].hoTen)} – bài ${ds[k] + 1}: ${sk(x)}</title></circle>`).join(""); }
  const luoi = [0, 5, 10].map(v => `<line class="tk-luoi" x1="${L}" x2="${W - R}" y1="${Y(v)}" y2="${Y(v)}"/><text class="tk-nhan" x="${L - 4}" y="${Y(v) + 3}" text-anchor="end">${v}</text>`).join("");
  const nhan = ds.map((j, k) => `<text class="tk-nhan" x="${X(k)}" y="${H - 18}">B${j + 1}</text><text class="tk-nhan nho" x="${X(k)}" y="${H - 6}">${new Date(TK.de[j].moLuc).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" })}</text>`).join("");
  return `<svg viewBox="0 0 ${W} ${H}" class="tk-svg" role="img" aria-label="Điểm qua các bài">${luoi}${dai}${duong(t => t.tv, "tk-tv")}${duong(t => t.tb, "tk-tbl")}${dot(t => t.tv, "tk-tv-d")}${dot(t => t.tb, "tk-tb-d")}${hsLine}${hsDot}${nhan}</svg>
    <div class="kq-chu-thich"><span><i class="tk-ct tbl"></i>Trung bình</span><span><i class="tk-ct tv"></i>Trung vị</span><span><i class="tk-ct dai"></i>TB ± độ lệch chuẩn</span>${xem >= 0 ? `<span><i class="tk-ct hs"></i>${hoa(TK.hs[xem].hoTen)}</span>` : ""}</div>`;
}
function tkNhanXet(m) {
  if (m.n < 3) return "Cần ít nhất 3 sinh viên có điểm để nhận xét phân bố.";
  const t = [];
  t.push(Math.abs(m.lech) < .5 ? "Phân bố khá cân đối, gần dạng chuông (Gauss)." : m.lech < 0 ? "Phân bố lệch về phía điểm cao (đa số điểm cao, một số ít điểm thấp kéo đuôi trái)." : "Phân bố lệch về phía điểm thấp (đa số điểm thấp, một số ít điểm cao kéo đuôi phải).");
  t.push(m.sd < 1.2 ? "Điểm tập trung (độ lệch chuẩn nhỏ): trình độ khá đồng đều." : m.sd > 2 ? "Điểm phân tán nhiều (độ lệch chuẩn lớn): lớp phân hóa rõ." : "Mức phân tán trung bình.");
  if (Math.abs(m.tb - m.tv) >= .5) t.push(m.tb < m.tv ? "Trung bình thấp hơn trung vị: có một số em điểm rất thấp kéo trung bình xuống." : "Trung bình cao hơn trung vị: có một số em điểm rất cao kéo trung bình lên.");
  return t.join(" ");
}
function tkVe() {
  const v = document.getElementById("tk-noi-dung"); if (!v || !TK) return;
  if (TK.tab === "dang") return tkVeDang(v);
  const ds = [...TK.chon].sort((a, b) => a - b);
  const xem = TK.xem === "" ? -1 : TK.hs.findIndex(u => u.uid === TK.xem);
  const diemHS = TK.hs.map((_, i) => tkDiemHS(i)), mau = diemHS.filter(x => x != null), m = tkThongKe(mau);
  const nhom = ds.length === 1 ? `bài ${ds[0] + 1}` : `${ds.length} bài gộp (điểm trung bình mỗi em)`;
  const the = (n, t, g) => `<div><small>${n}</small><b>${t}</b>${g ? `<em>${g}</em>` : ""}</div>`;
  const hang = TK.hs.map((u, i) => ({ u, i, tb: diemHS[i], v: ds.map(j => TK.diem[i][j]) }));
  const sd = h => { const a = h.v.filter(x => x != null); return a.length > 1 ? tkThongKe(a).sd : null; };
  if (TK.xep === "cao") hang.sort((a, b) => (b.tb ?? -1) - (a.tb ?? -1)); else if (TK.xep === "thap") hang.sort((a, b) => (a.tb ?? 99) - (b.tb ?? 99));
  const tong = ds.map(j => tkThongKe(tkCot(j)));
  v.innerHTML = !ds.length ? `<div class="trong">Hãy chọn ít nhất một bài.</div>` : `
    <div class="the-trang"><b>1. Tổng hợp: ${nhom}</b>${m.n ? `
      <div class="tk-the">${the("Số sinh viên", m.n)}${the("Trung bình", sk(m.tb))}${the("Trung vị", sk(m.tv), "điểm ở giữa")}${the("Độ lệch chuẩn", sk(m.sd), "mức phân tán")}${the("Phương sai", sk(m.pv), "= độ lệch chuẩn²")}${the("Thấp nhất", sk(m.min, 1))}${the("Cao nhất", sk(m.max, 1))}${the("Tứ phân vị", sk(m.q1, 1) + " – " + sk(m.q3, 1), "Q1 – Q3 (50% ở giữa)")}${the("Độ lệch", sk(m.lech), m.lech < -.5 ? "lệch trái" : m.lech > .5 ? "lệch phải" : "cân đối")}${the("Từ 5 trở lên", sk(m.d5, 0) + "%")}${the("Từ 8 trở lên", sk(m.d8, 0) + "%")}</div>
      <p class="ghi-chu">${tkNhanXet(m)}</p>` : `<p class="ghi-chu">Chưa có điểm.</p>`}</div>
    <div class="the-trang"><b>2. Phân bố điểm và đường chuẩn (Gauss)</b>${m.n ? tkBieuDoPhanBo(m, mau) : ""}
      <p class="ghi-chu">Cột: số sinh viên theo khoảng 1 điểm (đỏ: dưới 5, xanh: từ 8). Đường cong: phân bố chuẩn lí thuyết có cùng trung bình và độ lệch chuẩn. Nét đứng: trung bình. Cột càng bám sát đường cong thì điểm càng “chuẩn”.</p></div>
    <div class="the-trang"><b>3. Biến động qua các bài</b>${tkBieuDoBai(xem)}
      <label class="tk-chon-hs">So sánh một sinh viên với lớp<select onchange="tkDoi('xem',this.value)"><option value="">— không chọn —</option>${TK.hs.map(u => `<option value="${u.uid}" ${u.uid === TK.xem ? "selected" : ""}>${hoa(u.hoTen)}${u.maHS ? " (" + hoa(u.maHS) + ")" : ""}</option>`).join("")}</select></label></div>
    <div class="the-trang"><b>4. Thống kê từng bài</b><div class="bang-cuon"><table class="bang tk-bang"><thead><tr><th>Bài</th><th>n</th><th>TB</th><th>Trung vị</th><th>Độ lệch chuẩn</th><th>Phương sai</th><th>Min</th><th>Max</th></tr></thead><tbody>
      ${ds.map((j, k) => { const t = tong[k]; return `<tr><td><a class="lien-ket" href="#/bang-diem?id=${TK.de[j].id}" title="${hoa(TK.de[j].ten)}">Bài ${j + 1}</a></td><td>${t.n}</td><td><b>${sk(t.tb)}</b></td><td>${sk(t.tv)}</td><td>${sk(t.sd)}</td><td>${sk(t.pv)}</td><td>${sk(t.min, 1)}</td><td>${sk(t.max, 1)}</td></tr>`; }).join("")}</tbody></table></div></div>
    <div class="the-trang"><b>5. Từng sinh viên</b> <label class="tk-xep">Sắp xếp <select onchange="tkDoi('xep',this.value)"><option value="ten" ${TK.xep === "ten" ? "selected" : ""}>Theo tên</option><option value="cao" ${TK.xep === "cao" ? "selected" : ""}>Điểm TB cao → thấp</option><option value="thap" ${TK.xep === "thap" ? "selected" : ""}>Điểm TB thấp → cao</option></select></label>
      <p class="ghi-chu">Bấm vào tên để vẽ đường điểm của em đó ở mục 3. Độ lệch chuẩn nhỏ = điểm ổn định giữa các bài.</p>
      <div class="bang-cuon"><table class="bang tk-bang"><thead><tr><th>Sinh viên</th>${ds.map(j => `<th>B${j + 1}</th>`).join("")}<th>TB</th>${ds.length > 1 ? "<th>Độ lệch chuẩn</th><th>Xu hướng</th>" : ""}</tr></thead><tbody>
      ${hang.map(h => { const co = h.v.filter(x => x != null), xh = co.length > 1 ? co[co.length - 1] - co[0] : null;
        return `<tr class="${h.u.uid === TK.xem ? "tk-dang-xem" : ""}"><td><a class="lien-ket" onclick="tkDoi('xem','${h.u.uid}');document.querySelector('.tk-svg')?.scrollIntoView({behavior:'smooth',block:'center'})">${hoa(h.u.hoTen)}</a><small>${hoa(h.u.maHS || "")}</small></td>
          ${h.v.map(x => `<td class="${x == null ? "" : x < 5 ? "yeu" : x >= 8 ? "gioi" : ""}">${x == null ? "–" : sk(x, 1)}</td>`).join("")}<td><b>${sk(h.tb)}</b></td>${ds.length > 1 ? `<td>${sk(sd(h))}</td><td>${xh == null ? "–" : xh > .5 ? "▲ " + sk(xh, 1) : xh < -.5 ? "▼ " + sk(Math.abs(xh), 1) : "＝"}</td>` : ""}</tr>`; }).join("")}</tbody></table></div></div>`;
}

/* ---------- Theo dạng bài + đề xuất báo động ---------- */
const tkKhoaNhom = c => TK.nhom === "chuong" ? tenChuong(c.chuong) : TK.nhom === "loai" ? (c.loai === "tt" ? "Câu tính toán" : "Câu lí thuyết") : `${tenChuong(c.chuong)} · ${tenDang(c.dang || "(chưa có dạng)")}`;
const tkMau = (d, t) => t < 2 ? "tk-xam" : d / t * 100 >= TK.xanh ? "tk-xanh" : d / t * 100 < TK.do ? "tk-do" : "tk-vang";
const ptram = (d, t) => t ? Math.round(d / t * 100) : null;
function tkPhanTich() {
  const ds = [...TK.chon].sort((a, b) => a - b), lop = {}, hs = TK.hs.map(() => ({ t: 0, d: 0, nhom: {}, vang: 0, lam: 0 }));
  TK.hs.forEach((u, i) => ds.forEach(j => {
    const b = TK.bai[`${TK.de[j].id}_${u.uid}`]; if (!b) { hs[i].vang++; return; }
    hs[i].lam++;
    (b.cau || []).forEach((c, k) => { const q = CAU_THEO_ID[c.id]; if (!q) return; const dung = b.chon?.[k] === dapAnHienThi(c), key = tkKhoaNhom(q);
      const x = hs[i].nhom[key] ||= { t: 0, d: 0 }, y = lop[key] ||= { t: 0, d: 0, yeu: 0 }; x.t++; y.t++; hs[i].t++; if (dung) { x.d++; y.d++; hs[i].d++; } });
  }));
  hs.forEach(h => Object.entries(h.nhom).forEach(([k, x]) => { if (x.t >= 2 && x.d / x.t * 100 < TK.do) lop[k].yeu++; }));
  const dexuat = [];
  hs.forEach((h, i) => { const ly = [], tl = ptram(h.d, h.t), do_ = Object.entries(h.nhom).filter(([, x]) => x.t >= 2 && x.d / x.t * 100 < TK.do).sort((a, b) => a[1].d / a[1].t - b[1].d / b[1].t);
    if (h.t >= 5 && tl < TK.do) ly.push(`làm đúng chỉ ${tl}%`);
    if (do_.length >= 3) ly.push(`${do_.length} dạng sai nhiều`);
    if (ds.length >= 2 && h.vang >= 2) ly.push(`vắng ${h.vang} bài`);
    if (ly.length) dexuat.push({ i, tl, ly, yeu: do_.slice(0, 5).map(([k]) => k) }); });
  dexuat.sort((a, b) => (a.tl ?? -1) - (b.tl ?? -1));
  return { ds, lop, hs, dexuat };
}
async function tkBaoDong(uid, hoi = true) {
  const i = TK.hs.findIndex(u => u.uid === uid), u = TK.hs[i], P = tkPhanTich(), dx = P.dexuat.find(x => x.i === i);
  const yeu = dx?.yeu.length ? dx.yeu : Object.entries(P.hs[i].nhom).filter(([, x]) => x.t >= 2).sort((a, b) => a[1].d / a[1].t - b[1].d / b[1].t).slice(0, 5).map(([k]) => k);
  let ghi = "";
  if (hoi) { ghi = prompt(`Báo động cho ${u.hoTen}.\\nSinh viên sẽ thấy nhắc nhở ở trang chủ. Thêm lời nhắn (có thể để trống):`, ""); if (ghi === null) return; }
  try {
    await fbDb.collection("nguoiDung").doc(uid).update({ canhBaoHoc: { luc: Date.now(), boi: String(tk.hoSo?.hoTen || "Giáo viên").slice(0, 60), lop: String(TK.l.ten).slice(0, 80), tl: ptram(P.hs[i].d, P.hs[i].t) ?? -1, dang: yeu.map(k => k.slice(0, 90)), ghiChu: String(ghi).trim().slice(0, 200) } });
    TK.daBao.add(uid); if (typeof ghiNhatKy === "function") ghiNhatKy("canh-bao-hoc", `Lớp ${TK.l.ten}`, u.hoTen);
    if (hoi) tkVe();
  } catch (e) { alert(loiTk(e)); }
}
async function tkBaoDongTatCa() {
  const P = tkPhanTich(), ds = P.dexuat.map(x => TK.hs[x.i].uid).filter(u => !TK.daBao.has(u));
  if (!ds.length) return; if (!confirm(`Báo động ${ds.length} sinh viên đang được đề xuất? Các em sẽ thấy nhắc nhở ở trang chủ.`)) return;
  for (const u of ds) await tkBaoDong(u, false); tkVe();
}
function tkVeDang(v) {
  const ds = [...TK.chon].sort((a, b) => a - b);
  if (!ds.length) { v.innerHTML = `<div class="trong">Hãy chọn ít nhất một bài.</div>`; return; }
  if (!Object.keys(CAU_THEO_ID).length) { v.innerHTML = `<div class="trong">Máy này chưa mở khóa kho câu hỏi nên chưa biết câu thuộc dạng nào. Hãy mở khóa kho rồi quay lại.</div>`; return; }
  const P = tkPhanTich(), keys = Object.keys(P.lop).sort((a, b) => P.lop[a].d / P.lop[a].t - P.lop[b].d / P.lop[b].t);
  const ct = `<div class="kq-chu-thich"><span><i class="tk-o tk-xanh"></i>Làm được nhiều (từ ${TK.xanh}%)</span><span><i class="tk-o tk-vang"></i>Sai ít</span><span><i class="tk-o tk-do"></i>Sai nhiều (dưới ${TK.do}%)</span><span><i class="tk-o tk-xam"></i>Chưa đủ số câu</span></div>`;
  const o = (d, t) => `<td class="tk-o ${tkMau(d, t)}" title="${d}/${t} câu đúng">${t ? ptram(d, t) + "%" : "–"}</td>`;
  v.innerHTML = `
    <div class="the-trang tk-dau"><div class="chip-hang" style="margin:0 0 8px">${[["dang", "Theo dạng bài"], ["chuong", "Theo chương"], ["loai", "Lí thuyết / Tính"]].map(([k, t]) => `<button class="chip-nhanh ${TK.nhom === k ? "chon" : ""}" onclick="tkDoi('nhom','${k}')">${t}</button>`).join("")}</div>
      <div class="tk-nguong"><label>Xanh từ <input type="number" min="1" max="100" value="${TK.xanh}" onchange="tkDoi('xanh',this.value)">%</label><label>Đỏ dưới <input type="number" min="0" max="99" value="${TK.do}" onchange="tkDoi('do',this.value)">%</label></div>${ct}</div>
    <div class="the-trang"><b>🚨 Đề xuất báo động</b><small class="ghi-chu"> đúng &lt;${TK.do}% · ≥3 dạng sai nhiều · vắng ≥2 bài</small>
      ${P.dexuat.length ? `<div class="kq-hs">${P.dexuat.map(x => { const u = TK.hs[x.i], da = TK.daBao.has(u.uid) || (u.canhBaoHoc && Date.now() - u.canhBaoHoc.luc < 7 * 864e5);
        return `<div class="tk-bd"><div><b>${hoa(u.hoTen)} <small>${hoa(u.maHS || "")}</small></b><span class="tk-ly">${x.ly.join(" · ")}</span>${x.yeu.length ? `<small>Yếu: ${x.yeu.map(k => hoa(k)).join("; ")}</small>` : ""}</div>
          <button class="chip-nhanh ${da ? "" : "bat"}" onclick="tkBaoDong('${u.uid}')">${da ? "✓ Đã báo" : "🚨 Báo"}</button></div>`; }).join("")}</div>
        <div class="nut-hang trai"><button class="chip-nhanh bat" onclick="tkBaoDongTatCa()">🚨 Báo tất cả đề xuất</button></div>`
        : `<p class="ghi-chu">Chưa có sinh viên nào cần báo động với các bài đang chọn. 🎉</p>`}
      <p class="ghi-chu">“Báo” gửi nhắc nhở lên trang chủ của em kèm các dạng cần ôn. Có thể báo bất kì em nào ở bảng bên dưới.</p></div>
    <div class="the-trang"><b>Lớp làm được bao nhiêu % theo từng nhóm</b> <small class="ghi-chu">(yếu nhất lên đầu)</small>
      <div class="bang-cuon"><table class="bang tk-bang"><thead><tr><th>Nhóm</th><th>% đúng</th><th>Số câu</th><th>SV sai nhiều</th></tr></thead><tbody>
      ${keys.map(k => { const x = P.lop[k]; return `<tr><td>${hoa(k)}</td>${o(x.d, x.t)}<td>${x.t}</td><td>${x.yeu}</td></tr>`; }).join("")}</tbody></table></div></div>
    <div class="the-trang"><b>Từng sinh viên theo nhóm</b> <small class="ghi-chu">(cuộn ngang; bấm 🚨 để báo động)</small>
      <div class="bang-cuon"><table class="bang tk-bang"><thead><tr><th>Sinh viên</th><th>Chung</th>${keys.map(k => `<th title="${hoa(k)}">${hoa(k.length > 22 ? k.slice(0, 21) + "…" : k)}</th>`).join("")}<th></th></tr></thead><tbody>
      ${TK.hs.map((u, i) => { const h = P.hs[i]; return `<tr><td>${hoa(u.hoTen)}<small>${hoa(u.maHS || "")}</small></td>${o(h.d, h.t)}${keys.map(k => { const x = h.nhom[k]; return x ? o(x.d, x.t) : `<td>–</td>`; }).join("")}<td><button class="chip-nhanh" onclick="tkBaoDong('${u.uid}')">🚨</button></td></tr>`; }).join("")}</tbody></table></div></div>`;
}
function tkXuat() {   // CSV mở bằng Excel (cùng kiểu với sổ điểm): tổng hợp, từng bài, từng sinh viên
  const ds = [...TK.chon].sort((a, b) => a - b); if (!ds.length) return;
  const o = x => `"${String(x ?? "").replace(/"/g, '""')}"`, n = (x, d = 2) => x == null || !isFinite(x) ? "" : x.toFixed(d).replace(".", ",");
  const diemHS = TK.hs.map((_, i) => tkDiemHS(i)), m = tkThongKe(diemHS.filter(x => x != null));
  const r = [[`Thống kê lớp: ${TK.l.ten}`], [`Các bài gộp: ${ds.map(j => j + 1).join(", ")}`, TK.vang0 ? "vắng tính 0 điểm" : "bài vắng bỏ qua"], [],
    ["TỔNG HỢP"], ["Số sinh viên", "Trung bình", "Trung vị", "Độ lệch chuẩn", "Phương sai (mẫu)", "Thấp nhất", "Cao nhất", "Q1", "Q3", "Độ lệch", "% từ 5", "% từ 8"],
    m.n ? [m.n, n(m.tb), n(m.tv), n(m.sd), n(m.pv), n(m.min, 1), n(m.max, 1), n(m.q1), n(m.q3), n(m.lech), n(m.d5, 0), n(m.d8, 0)] : [], [],
    ["TỪNG BÀI"], ["Bài", "Tên bài", "Ngày mở", "n", "Trung bình", "Trung vị", "Độ lệch chuẩn", "Phương sai (mẫu)", "Thấp nhất", "Cao nhất"],
    ...ds.map(j => { const t = tkThongKe(tkCot(j)); return [`Bài ${j + 1}`, TK.de[j].ten, new Date(TK.de[j].moLuc).toLocaleDateString("vi-VN"), t.n, n(t.tb), n(t.tv), n(t.sd), n(t.pv), n(t.min, 1), n(t.max, 1)]; }), [],
    ["TỪNG SINH VIÊN"], ["STT", "Họ tên", "Mã SV", ...ds.map(j => `Bài ${j + 1}`), "Điểm TB", "Độ lệch chuẩn", "Thay đổi (cuối − đầu)"],
    ...TK.hs.map((u, i) => { const v = ds.map(j => TK.diem[i][j] ?? (TK.vang0 ? 0 : null)), co = v.filter(x => x != null);
      return [i + 1, u.hoTen, u.maHS || "", ...v.map(x => n(x, 1)), n(diemHS[i]), co.length > 1 ? n(tkThongKe(co).sd) : "", co.length > 1 ? n(co[co.length - 1] - co[0], 1) : ""]; })];
  const blob = new Blob(["\ufeff" + r.map(x => x.map(o).join(";")).join("\r\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `Thong ke - ${TK.l.ten}.csv`; a.click();
}
function tkDoi(kieu, val) {
  if (!TK) return;
  if (kieu === "xem") TK.xem = val; else if (kieu === "xep") TK.xep = val;
  else if (kieu === "tab" || kieu === "nhom") TK[kieu] = val;
  else if (kieu === "xanh") TK.xanh = Math.max(1, Math.min(100, +val || 70));
  else if (kieu === "do") TK.do = Math.max(0, Math.min(99, +val || 40));
  else if (kieu === "vang0") TK.vang0 = !!val;
  else if (kieu === "bai") { const j = +val; TK.chon.has(j) ? TK.chon.delete(j) : TK.chon.add(j); }
  else if (kieu === "tat") TK.chon = new Set(TK.de.map((_, i) => i));
  else if (kieu === "cuoi") TK.chon = new Set(TK.de.length ? [TK.de.length - 1] : []);
  else if (kieu === "bo") TK.chon = new Set();
  if (["bai", "tat", "cuoi", "bo"].includes(kieu)) tkVeChon();
  tkVe();
}
function tkTab(t) { TK.tab = t; ["diem", "dang"].forEach(k => document.getElementById("tk-t-" + k)?.classList.toggle("chon", k === t)); tkVe(); }
function tkVeChon() {
  const o = document.getElementById("tk-chon"); if (!o || !TK) return;
  o.innerHTML = TK.de.map((d, j) => `<label class="tk-the-bai ${TK.chon.has(j) ? "bat" : ""}" title="${hoa(d.ten)}"><input type="checkbox" ${TK.chon.has(j) ? "checked" : ""} onchange="tkDoi('bai',${j})"><span>B${j + 1}</span><small>${new Date(d.moLuc).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" })}</small></label>`).join("");
}
MAN_HINH["/thong-ke-lop"] = {
  tieuDe: "Thống kê chi tiết",
  manHinhCon: true,
  ve: () => laGVtk() ? `<div id="vung-tk"><div class="trong">Đang tải số liệu…</div></div>` : `<div class="trong">Chỉ giáo viên mới xem được mục này.</div>`,
  sauKhiVe: async () => {
    const v = document.getElementById("vung-tk"); if (!v || !laGVtk()) return;
    const id = thamSoHash().get("id") || "";
    try {
      const l = (await danhSachLopGV()).find(x => x.id === id);
      if (!l) { v.innerHTML = `<div class="trong">Không tìm thấy lớp, hoặc lớp không do thầy/cô phụ trách.<br><br><a class="btn" href="#/lop-hoc">← Lớp học</a></div>`; return; }
      TK = await tkTaiLop(l);
      if (!document.getElementById("vung-tk")) return;
      if (!TK.de.length) { v.innerHTML = `<div class="nut-hang trai"><a class="btn phu" href="#/ket-qua-lop?id=${id}">← Kết quả lớp</a></div><div class="trong">Lớp ${hoa(l.ten)} chưa có bài nào đã đóng để thống kê.</div>`; return; }
      v.innerHTML = `<div class="chip-hang"><a class="chip-nhanh" href="#/ket-qua-lop?id=${id}">← Kết quả lớp</a><a class="chip-nhanh" href="#/so-diem?lop=${id}">📒 Sổ điểm</a></div>
        <div class="the-trang tk-dau"><div class="tk-tieu-de"><b>${hoa(l.ten)}</b><small>${TK.hs.length} SV · ${TK.de.length} bài đã đóng</small></div>
          <p class="ghi-chu">Chạm vào bài để chọn / bỏ chọn. Nhiều bài = gộp (mỗi em lấy điểm TB).</p>
          <div id="tk-chon" class="tk-chon"></div>
          <div class="chip-hang"><button class="chip-nhanh" onclick="tkDoi('tat')">Tất cả</button><button class="chip-nhanh" onclick="tkDoi('cuoi')">Bài gần nhất</button><button class="chip-nhanh" onclick="tkXuat()">⬇ Excel</button></div>
          <label class="tk-chk"><input type="checkbox" onchange="tkDoi('vang0',this.checked)"> Vắng tính 0 điểm</label></div>
        <div class="chip-hang tk-tab"><button class="chip-nhanh chon" id="tk-t-diem" onclick="tkTab('diem')">📈 Điểm số</button><button class="chip-nhanh" id="tk-t-dang" onclick="tkTab('dang')">🧩 Dạng bài &amp; báo động</button></div>
        <div id="tk-noi-dung"></div>`;
      tkVeChon(); tkVe();
    } catch (e) { v.innerHTML = `<div class="trong">${loiTk(e)}</div>`; }
  },
};
