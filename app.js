/* =========================================================
   Các màn hình của app.
   Nội dung học tập (lý thuyết, bài tập, bảng tra) nằm ở file noi-dung.js.
   Muốn thêm màn hình: thêm một mục vào MAN_HINH, rồi trỏ link tới "#/ten-duong-dan".
   ========================================================= */

/* ---------- Ghi nhớ tiến độ đọc (lưu trên máy người dùng) ---------- */
const boNho = {
  doc(khoa, macDinh) { try { return JSON.parse(localStorage.getItem(khoa)) ?? macDinh; } catch { return macDinh; } },
  ghi(khoa, giaTri) { try { localStorage.setItem(khoa, JSON.stringify(giaTri)); } catch {} },
};
const tienDo = id => boNho.doc("tien-do", {})[id] || 0;          // % đã đọc của chương
const docGanNhat = () => boNho.doc("doc-gan-nhat", null);         // { id, muc }

/* ---------- Tách bài lý thuyết thành các mục theo <h3> ---------- */
const boThe = html => html.replace(/<[^>]+>/g, "");
function tachMuc(html) {
  const phan = html.split(/(?=<h3>)/);
  const dau = phan[0].startsWith("<h3>") ? "" : phan.shift();
  const muc = phan.map(p => {
    const m = p.match(/^<h3>([\s\S]*?)<\/h3>/);
    return { tieuDe: m[1].replace(/^\s*\d+\.\s*/, ""), than: p.slice(m[0].length) };
  });
  return { dau, muc };
}
const CHUONG_MUC = Object.fromEntries(CHUONG.map(c => [c.id, tachMuc(c.lyThuyet)]));
const thongKe = c => {
  const chu = boThe(c.lyThuyet).replace(/\\[\[\(][\s\S]*?\\[\]\)]/g, " ").split(/\s+/).length;
  return {
    soMuc: CHUONG_MUC[c.id].muc.length,
    soViDu: (c.lyThuyet.match(/class="vi-du"/g) || []).length,
    phut: Math.max(3, Math.round(chu / 130 + (c.lyThuyet.match(/\\\[/g) || []).length * 0.25)),
  };
};

/* ---------- Mảnh giao diện dùng lại ---------- */
const dongDanhSach = (link, icon, ten, phu) => `
  <a href="${link}">
    <span class="icon">${icon}</span>
    <span class="text">${ten}<small>${phu}</small></span>
    <span class="chevron">›</span>
  </a>`;

const theChuong = (c, so) => {
  const pt = tienDo(c.id);
  return `
  <a class="the-chuong" href="#/ly-thuyet/${c.id}">
    <span class="icon">${c.icon}</span>
    <span class="text">
      <span class="ten">${so}. ${c.ten}</span>
      <small>${c.moTa}</small>
      <span class="dong-duoi">
        <span class="nhan-chuong ${c.dayDu ? "day-du" : ""}">${c.dayDu ? "Đầy đủ" : "Tóm tắt"}</span>
        ${c.choDuyet ? '<span class="nhan-chuong cho-duyet">Chờ duyệt</span>' : ""}
        ${pt ? `<span class="thanh-nho"><i style="width:${pt}%"></i></span><span class="pt">${pt}%</span>` : ""}
      </span>
    </span>
  </a>`;
};

const theDocTiep = () => {
  const g = docGanNhat();
  const c = g && CHUONG.find(x => x.id === g.id);
  if (!c) return "";
  const muc = CHUONG_MUC[c.id].muc[g.muc];
  return `
  <a class="doc-tiep" href="#/ly-thuyet/${c.id}?muc=${g.muc}">
    <span class="icon">${c.icon}</span>
    <span class="text"><small>Đọc tiếp</small>${c.ten}<small>${muc ? `Mục ${g.muc + 1} · ${muc.tieuDe}` : ""}</small></span>
    <span class="nut-tron">▶</span>
  </a>`;
};

// Chia các chương theo nhóm (Phân tích hóa học / Phân tích công cụ)
const theoNhom = veNhom => [...new Set(CHUONG.map(c => c.nhom))]
  .map(nhom => `<h2>${nhom}</h2>${veNhom(CHUONG.filter(c => c.nhom === nhom))}`).join("");

/* ---------- Tìm kiếm trong lý thuyết (không phân biệt dấu) ---------- */
const boDau = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
const CHI_MUC_TIM = CHUONG.flatMap(c => CHUONG_MUC[c.id].muc.map((m, k) => {
  const chu = boThe(m.than).replace(/\\[\[\(][\s\S]*?\\[\]\)]/g, " ").replace(/\s+/g, " ").trim();
  return { c, k, tieuDe: boThe(m.tieuDe), chu, khoa: boDau(`${c.ten} ${boThe(m.tieuDe)} ${chu}`) };
}));
function timKiem(q) {
  const ds = document.getElementById("ds-chuong"), kq = document.getElementById("kq-tim");
  const tu = boDau(q.trim()).split(/\s+/).filter(Boolean);
  ds.hidden = tu.length > 0; kq.hidden = !tu.length;
  if (!tu.length) return;
  const trung = CHI_MUC_TIM.filter(x => tu.every(t => x.khoa.includes(t))).slice(0, 30);
  kq.innerHTML = trung.length ? `<div class="list">${trung.map(x => {
    const vt = boDau(x.chu).indexOf(tu[0]);
    const trich = vt < 0 ? x.chu.slice(0, 90) : (vt > 30 ? "…" : "") + x.chu.slice(Math.max(0, vt - 30), vt + 70);
    return dongDanhSach(`#/ly-thuyet/${x.c.id}?muc=${x.k}`, x.c.icon, x.tieuDe, `${x.c.ten} · ${trich}…`);
  }).join("")}</div>` : `<div class="trong">Không tìm thấy mục nào khớp “${q}”.</div>`;
}

const CONG_THUC_TRANG_CHU = String.raw`
        <div class="cong-thuc"><div class="nhan">Định nghĩa pH</div>\[ \mathrm{pH} = -\lg\Hp \qquad \mathrm{pH} + \mathrm{pOH} = 14 \]</div>
        <div class="cong-thuc"><div class="nhan">Pha loãng</div>\[ C_1V_1 = C_2V_2 \]</div>
        <div class="cong-thuc"><div class="nhan">Dung dịch đệm</div>\[ \mathrm{pH} = \pKa + \lg\frac{C_\mathrm{A^-}}{C_\mathrm{HA}} \]</div>
        <div class="cong-thuc"><div class="nhan">Phương trình Nernst (25 °C)</div>\[ E = E^\circ + \frac{0,0592}{n}\lg\frac{[\mathrm{Ox}]}{[\mathrm{Kh}]} \]</div>
`;

const MAN_HINH = {
  "/": {
    tieuDe: "Hóa phân tích",
    ve: () => {
      const daDoc = CHUONG.filter(c => tienDo(c.id) >= 90).length;
      return `
      <div class="hero">
        <div class="hero-nho">Ôn tập đại học</div>
        <h3>Hóa phân tích</h3>
        <p>Phân tích hóa học và phân tích công cụ: lý thuyết, bài tập, công cụ tính, tra cứu.</p>
        <div class="hero-tien-do"><span class="thanh-nho sang"><i style="width:${daDoc / CHUONG.length * 100}%"></i></span>
          Đã đọc ${daDoc}/${CHUONG.length} chương</div>
      </div>
      ${theDocTiep()}
      <div class="grid">
        <a class="o-tat" href="#/ly-thuyet"><span class="o-icon">📘</span><b>Lý thuyết</b><small>${CHUONG.length} chương</small></a>
        <a class="o-tat" href="#/bai-tap"><span class="o-icon">✏️</span><b>Bài tập</b><small>${CHUONG.reduce((t, c) => t + c.baiTap.length, 0)} bài</small></a>
        <a class="o-tat" href="#/cong-cu"><span class="o-icon">🧮</span><b>Công cụ</b><small>3 máy tính</small></a>
        <a class="o-tat" href="#/tra-cuu"><span class="o-icon">📋</span><b>Tra cứu</b><small>${TRA_CUU.length} bảng</small></a>
      </div>
      <h2>Công thức hay dùng</h2>
      <div class="the-trang">
        ${CONG_THUC_TRANG_CHU}
      </div>`;
    },
  },

  "/ly-thuyet": {
    tieuDe: "Lý thuyết",
    ve: () => `
      <label class="o-tim">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
        <input type="search" placeholder="Tìm chương, mục, công thức…" oninput="timKiem(this.value)" autocomplete="off">
      </label>
      <div id="kq-tim" hidden></div>
      <div id="ds-chuong">
        ${theDocTiep()}
        ${theoNhom(ds => `<div class="list list-chuong">${ds.map((c, i) => theChuong(c, i + 1)).join("")}</div>`)}
      </div>
    `,
  },

  "/bai-tap": {
    tieuDe: "Bài tập",
    ve: () => `
      <a class="the-luyen" href="#/luyen-tap">
        <span class="o-icon">🎯</span>
        <span class="text"><b>Luyện trắc nghiệm</b><small>${NGAN_HANG.length} câu hỏi A, B, C, D · chấm điểm ngay</small></span>
        <span class="chevron">›</span>
      </a>
      <a class="the-luyen the-kho" href="#/kho">
        <span class="o-icon">📚</span>
        <span class="text"><b>Kho câu hỏi theo chương</b><small>${NGAN_HANG.length} câu đã duyệt · ${NGAN_HANG_CHO_DUYET.length} câu chờ duyệt</small></span>
        <span class="chevron">›</span>
      </a>
      <h2>Bài tập tự luận theo chương</h2>
      ${theoNhom(ds => `
        <div class="list">
          ${ds.map(c => dongDanhSach(`#/bai-tap/${c.id}`, c.icon, c.ten, c.baiTap.length ? `${c.baiTap.length} bài` : "Đang soạn")).join("")}
        </div>`)}
    `,
  },

  "/cong-cu": {
    tieuDe: "Công cụ",
    ve: () => `
      <div class="the-trang cong-cu">
        <h3>Tính pH dung dịch</h3>
        <label>Loại chất
          <select id="ph-loai" onchange="tinhPH()">
            <option value="axit-manh">Acid mạnh (1 nấc)</option>
            <option value="bazo-manh">Base mạnh (1 nấc)</option>
            <option value="axit-yeu">Acid yếu (1 nấc)</option>
            <option value="bazo-yeu">Base yếu (1 nấc)</option>
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

      <div class="the-trang cong-cu">
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

      <div class="the-trang cong-cu">
        <h3>Pha dung dịch từ chất rắn</h3>
        <label>Nồng độ cần pha (mol/L)<input id="cr-c" inputmode="decimal" oninput="tinhChatRan()"></label>
        <label>Thể tích (mL)<input id="cr-v" inputmode="decimal" oninput="tinhChatRan()"></label>
        <label>Khối lượng mol M (g/mol)<input id="cr-m" inputmode="decimal" oninput="tinhChatRan()"></label>
        <div class="ket-qua" id="cr-kq">m = C · V · M</div>
      </div>
    `,
  },

  "/kho": {
    tieuDe: "Kho câu hỏi",
    manHinhCon: true,
    ve: () => `
      <p class="ghi-chu">Câu <b>chờ duyệt</b> chỉ hiển thị ở đây để người quản trị xem xét, chưa dùng trong luyện tập hay kiểm tra.</p>
      ${theoNhom(ds => `<div class="list">${ds.map(c => {
        const da = NGAN_HANG.filter(q => q.chuong === c.id).length, cho = NGAN_HANG_CHO_DUYET.filter(q => q.chuong === c.id).length;
        return dongDanhSach(`#/kho/${c.id}`, c.icon, c.ten, da + cho ? `${da} đã duyệt${cho ? ` · ${cho} chờ duyệt` : ""}` : "Chưa có câu hỏi");
      }).join("")}</div>`)}
    `,
  },

  "/luyen-tap": {
    tieuDe: "Luyện trắc nghiệm",
    manHinhCon: true,
    ve: () => {
      const coCau = CHUONG.filter(c => NGAN_HANG.some(q => q.chuong === c.id));
      const dangDo = baiLam && !baiLam.ketThuc;
      return `
      ${dangDo ? `<a class="doc-tiep" href="#/lam-bai"><span class="icon">⏳</span>
        <span class="text"><small>Bài đang làm dở</small>${baiLam.chon.filter(x => x !== null).length}/${baiLam.cau.length} câu đã làm<small>Bấm để làm tiếp</small></span>
        <span class="nut-tron">▶</span></a>` : ""}
      <div class="the-trang chon-luyen">
        <h3>Chọn chương</h3>
        <div class="nhom-chip">${coCau.map(c => `<label class="chip-chon"><input type="checkbox" name="lt-chuong" value="${c.id}" checked onchange="demCauLuyen()">
          <span>${c.icon} ${c.ten} <small>${NGAN_HANG.filter(q => q.chuong === c.id).length}</small></span></label>`).join("")}</div>
        <h3>Mức độ</h3>
        <div class="nhom-chip">${[1, 2, 3, 4].map(m => `<label class="chip-chon"><input type="checkbox" name="lt-muc" value="${m}" checked onchange="demCauLuyen()"><span>${MUC_DO[m]}</span></label>`).join("")}</div>
        <h3>Số câu</h3>
        <div class="nhom-chip">${[["5", "5"], ["10", "10"], ["20", "20"], ["het", "Tất cả"]].map(([v, t], k) =>
          `<label class="chip-chon"><input type="radio" name="lt-so" value="${v}" ${k === 1 ? "checked" : ""}><span>${t}</span></label>`).join("")}</div>
        <h3>Cách làm</h3>
        <div class="nhom-chip cot">
          <label class="chip-chon"><input type="radio" name="lt-che-do" value="luyen" checked><span><b>Luyện tập</b> — chọn xong xem ngay đáp án và lời giải</span></label>
          <label class="chip-chon"><input type="radio" name="lt-che-do" value="thi"><span><b>Thi thử</b> — làm hết rồi mới chấm điểm, có bấm giờ</span></label>
        </div>
        <p class="ghi-chu" id="lt-bao">Có ${NGAN_HANG.length} câu phù hợp.</p>
        <button class="btn full" onclick="batDauLuyen()">Bắt đầu</button>
      </div>`;
    },
  },

  "/lam-bai": {
    tieuDe: "Làm bài",
    manHinhCon: true,
    lamBai: true,
    ve: () => {
      if (!baiLam || baiLam.ketThuc) return `<div class="trong">Chưa có bài đang làm.<br><br><a class="btn" href="#/luyen-tap">Chọn bài luyện</a></div>`;
      return `
      <div class="thanh-lam-bai">
        <span id="so-cau"></span>
        <span class="dong-ho">⏱ <span id="dong-ho">00:00</span></span>
        <button class="nut-phu" onclick="nopBai()">Nộp bài</button>
      </div>
      <div class="thanh-lam"><i id="tien-do-lam"></i></div>
      <div id="khung-cau"></div>`;
    },
  },

  "/ket-qua": {
    tieuDe: "Kết quả",
    manHinhCon: true,
    ve: () => {
      if (!baiLam || !baiLam.ketThuc) return `<div class="trong">Chưa có bài đã nộp.</div>`;
      const n = baiLam.cau.length, d = soCauDung(), diem = Math.round(d / n * 100) / 10;
      const sai = n - d;
      return `
      <div class="hero ket-qua-hero">
        <div class="vong-diem" style="--pt:${d / n * 100}%"><b>${String(diem).replace(".", ",")}</b><small>điểm</small></div>
        <div>
          <div class="hero-nho">${baiLam.cheDo === "thi" ? "Thi thử" : "Luyện tập"}</div>
          <h3>${d}/${n} câu đúng</h3>
          <p>Thời gian: ${dongHo(baiLam.ketThuc - baiLam.batDau)}</p>
        </div>
      </div>
      <div class="dieu-huong">
        ${sai ? `<button class="btn phu" onclick="lamLaiCauSai()">Làm lại ${sai} câu sai</button>` : ""}
        <a class="btn" href="#/luyen-tap">Luyện đề mới</a>
      </div>
      <h2>Xem lại từng câu</h2>
      ${baiLam.cau.map((cau, i) => {
        const goc = CAU_THEO_ID[cau.id], chon = baiLam.chon[i], dung = dapAnHienThi(cau);
        const trangThai = chon === null ? "bo" : (chon === dung ? "dung" : "sai");
        return `
        <details class="the-trang xem-lai ${trangThai}">
          <summary><span class="dau">${trangThai === "dung" ? "✓" : trangThai === "sai" ? "✗" : "–"}</span>
            <span>Câu ${i + 1}: ${chon === null ? "bỏ trống" : "chọn " + CHU[chon]} · đáp án ${CHU[dung]}</span></summary>
          <div class="de-cau">${goc.de}</div>
          <div class="phuong-an">${cau.thuTu.map((k, j) =>
            `<button disabled class="${j === dung ? "dung" : j === chon ? "sai" : "mo"}"><span class="chu">${CHU[j]}</span><span class="nd">${goc.phuongAn[k]}</span></button>`).join("")}</div>
          <div class="loi-giai"><b>Lời giải</b><div>${goc.loiGiai || ""}</div></div>
        </details>`;
      }).join("")}`;
    },
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
  const cungNhom = CHUONG.filter(x => x.nhom === c.nhom);
  const soTrongNhom = cungNhom.indexOf(c) + 1;
  MAN_HINH[`/ly-thuyet/${c.id}`] = {
    tieuDe: c.ten,
    manHinhCon: true,
    chuong: c,
    ve: () => {
      const { dau, muc } = CHUONG_MUC[c.id];
      const tk = thongKe(c);
      const truoc = CHUONG[i - 1], sau = CHUONG[i + 1];
      return `
      <div class="hero hero-chuong">
        <div class="hero-nho">Chương ${soTrongNhom} · ${c.nhom}</div>
        <h3><span>${c.icon}</span> ${c.ten}</h3>
        <div class="chip-dong">
          <span class="chip">${tk.soMuc} mục</span>
          ${tk.soViDu ? `<span class="chip">${tk.soViDu} ví dụ</span>` : ""}
          <span class="chip">${tk.phut} phút đọc</span>
          <span class="chip">${c.dayDu ? "Bản đầy đủ" : "Bản tóm tắt"}</span>
          ${c.choDuyet ? '<span class="chip">⏳ Chờ duyệt</span>' : ""}
        </div>
      </div>
      <details class="the-trang muc-luc" open>
        <summary>Mục lục</summary>
        <ol>${muc.map((m, k) => `<li><button onclick="denMuc(${k})"><span class="so">${k + 1}</span><span>${m.tieuDe}</span></button></li>`).join("")}</ol>
      </details>
      ${dau.trim() ? `<div class="the-trang bai-hoc">${dau}</div>` : ""}
      ${muc.map((m, k) => `
        <section class="the-trang bai-hoc muc" id="muc-${k}">
          <h3><span class="so">${k + 1}</span><span>${m.tieuDe}</span></h3>
          ${m.than}
        </section>`).join("")}
      ${c.baiTap.length ? `<a class="btn full" href="#/bai-tap/${c.id}">Làm bài tập chương này ✏️</a>` : ""}
      <nav class="chuyen-chuong">
        ${truoc ? `<a href="#/ly-thuyet/${truoc.id}"><small>‹ Chương trước</small>${truoc.ten}</a>` : "<span></span>"}
        ${sau ? `<a class="sau" href="#/ly-thuyet/${sau.id}"><small>Chương sau ›</small>${sau.ten}</a>` : "<span></span>"}
      </nav>
    `;
    },
  };
  MAN_HINH[`/kho/${c.id}`] = {
    tieuDe: `Kho: ${c.ten}`,
    manHinhCon: true,
    khoChuong: c.id,
    ve: () => `
      <div class="thanh-kho" id="thanh-kho">
        <div class="hang-tim">
          <label class="o-tim-kho">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
            <input type="search" id="tim-kho" placeholder="Tìm chất, từ khóa, mã câu…" autocomplete="off" value="${locKho.tu.replace(/"/g, "&quot;")}" oninput="timKho(this.value)">
          </label>
          <button class="nut-tron" id="nut-dap-an" aria-pressed="${locKho.hienDapAn}" onclick="datLocKho('hienDapAn', !locKho.hienDapAn)" title="Hiện / ẩn đáp án">
            <svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="nut-tron nut-loc" onclick="moLocKho()" title="Bộ lọc">
            <svg viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></svg><span class="huy-hieu" id="so-loc" hidden></span>
          </button>
        </div>
        <div class="hang-chip" id="hang-chip-kho"></div>
      </div>
      <div id="ds-kho"></div>`,
  };
  MAN_HINH[`/bai-tap/${c.id}`] = {
    tieuDe: `Bài tập: ${c.ten}`,
    manHinhCon: true,
    ve: () => `
      ${c.baiTap.length ? "" : `<div class="trong">Bài tập chương này đang được soạn.</div>`}
      ${c.baiTap.map((b, j) => `
        <div class="the-trang bai-tap">
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

/* ================= KHO CÂU HỎI =================
   Xem toàn bộ câu hỏi theo chương: đã duyệt (NGAN_HANG) và chờ duyệt (NGAN_HANG_CHO_DUYET).
   Câu chờ duyệt KHÔNG dùng trong luyện tập / kiểm tra. */
const KHO = [...NGAN_HANG.map(c => ({ ...c, choDuyet: false })), ...NGAN_HANG_CHO_DUYET.map(c => ({ ...c, choDuyet: true }))];
const locKho = { trangThai: "tat-ca", muc: 0, dang: "", tu: "", hienDapAn: false, chuong: null };
const MOI_LAN = 15;   // số câu vẽ mỗi lần; cuộn tới cuối tự vẽ thêm (KaTeX nặng, vẽ hết sẽ chậm)
let dsKhoHien = [], daVeKho = 0, quanSatKho = null;
const maDang = d => (d.match(/^(D\d+)\s·\s/) || [])[1] || "";
const tenDang = d => d.replace(/^D\d+\s·\s/, "");
function khoaTimCau(c) {
  if (!c._tim) c._tim = boDau(`${c.id} ${c.dang} ${boThe(c.de)} ${c.phuongAn.map(boThe).join(" ")}`);
  return c._tim;
}
// Lọc theo mọi tiêu chí, trừ tiêu chí "bo" (để đếm số câu cho từng lựa chọn của tiêu chí đó)
function locCauKho(bo) {
  const tu = boDau(locKho.tu).split(/\s+/).filter(Boolean);
  return KHO.filter(c => c.chuong === locKho.chuong
    && (bo === "trangThai" || locKho.trangThai === "tat-ca" || (locKho.trangThai === "cho" ? c.choDuyet : !c.choDuyet))
    && (bo === "muc" || !locKho.muc || c.mucDo === locKho.muc)
    && (bo === "dang" || !locKho.dang || c.dang === locKho.dang)
    && (!tu.length || tu.every(t => khoaTimCau(c).includes(t))));
}
const demTheo = (ds, f) => ds.reduce((m, c) => (m[f(c)] = (m[f(c)] || 0) + 1, m), {});
function veKho() {
  const ds = locCauKho();
  // Hàng chip nhanh: trạng thái duyệt (có số câu) + các lọc đang bật (bấm × để bỏ)
  const theoTT = locCauKho("trangThai"), soCho = theoTT.filter(c => c.choDuyet).length;
  const chipTT = [["tat-ca", "Tất cả", theoTT.length], ["cho", "Chờ duyệt", soCho], ["da", "Đã duyệt", theoTT.length - soCho]]
    .map(([v, t, n]) => `<button class="chip-nhanh ${locKho.trangThai === v ? "chon" : ""}" onclick="datLocKho('trangThai','${v}')">${t} <small>${n}</small></button>`).join("");
  const dangBat = [
    locKho.muc && `<button class="chip-nhanh bat" onclick="datLocKho('muc',0)">${MUC_DO[locKho.muc]} <span>✕</span></button>`,
    locKho.dang && `<button class="chip-nhanh bat" onclick="datLocKho('dang','')">${maDang(locKho.dang) || tenDang(locKho.dang)} <span>✕</span></button>`,
  ].filter(Boolean);
  document.getElementById("hang-chip-kho").innerHTML = (dangBat.length ? `${dangBat.join("")}<span class="vach"></span>` : "") + chipTT;
  const soLoc = document.getElementById("so-loc");
  soLoc.hidden = !dangBat.length; soLoc.textContent = dangBat.length;
  document.getElementById("nut-dap-an").setAttribute("aria-pressed", locKho.hienDapAn);

  dsKhoHien = ds; daVeKho = 0;
  const vung = document.getElementById("ds-kho");
  vung.innerHTML = `<div class="dem-kho"><b>${ds.length}</b> câu${locKho.tu ? ` khớp “${locKho.tu.replace(/</g, "&lt;")}”` : ""}</div>` +
    (ds.length ? "" : `<div class="trong">Không có câu nào khớp.<br><button class="nut-phu" onclick="datLaiLocKho()">Bỏ hết bộ lọc</button></div>`);
  veThemKho();
}
function veThemKho() {
  const vung = document.getElementById("ds-kho");
  if (!vung) return;
  vung.querySelector(".moc-kho")?.remove();
  const phan = dsKhoHien.slice(daVeKho, daVeKho + MOI_LAN);
  vung.insertAdjacentHTML("beforeend", lamToan(phan.map(c => `
    <div class="the-trang cau-kho">
      <div class="nhan-cau"><span>${c.id}</span><span class="muc-${c.mucDo}">${MUC_DO[c.mucDo]}</span>
        ${maDang(c.dang) ? `<span class="ma-dang">${maDang(c.dang)}</span>` : ""}
        ${c.choDuyet ? '<span class="cho-duyet">Chờ duyệt</span>' : ""}</div>
      <div class="ten-dang">${tenDang(c.dang)}</div>
      <div class="de-cau">${c.de}</div>
      <div class="phuong-an">${c.phuongAn.map((p, j) =>
        `<button disabled class="${locKho.hienDapAn && CHU[j] === c.dapAn ? "dung" : ""}"><span class="chu">${CHU[j]}</span><span class="nd">${p}</span></button>`).join("")}</div>
      <details ${locKho.hienDapAn ? "open" : ""}><summary><span class="khi-dong">Xem đáp án và lời giải</span><span class="khi-mo">Ẩn lời giải</span></summary>
        <div class="loi-giai dung"><b>Đáp án ${c.dapAn}</b><div>${c.loiGiai}</div></div></details>
    </div>`).join("")));
  daVeKho += phan.length;
  if (daVeKho < dsKhoHien.length) {
    vung.insertAdjacentHTML("beforeend", `<button class="moc-kho nut-phu" onclick="veThemKho()">Xem thêm (${dsKhoHien.length - daVeKho} câu)</button>`);
    quanSatKho?.disconnect();
    quanSatKho = new IntersectionObserver(e => { if (e[0].isIntersecting) veThemKho(); }, { rootMargin: "600px" });
    quanSatKho.observe(vung.querySelector(".moc-kho"));
  }
}
function datLocKho(khoa, giaTri) {
  locKho[khoa] = giaTri;
  if (!document.getElementById("ds-kho")) return;
  const giuCho = khoa === "hienDapAn";   // bật/tắt đáp án thì giữ nguyên chỗ đang xem
  const y = scrollY;
  veKho();
  if (giuCho) { while (daVeKho < dsKhoHien.length && document.body.scrollHeight < y + innerHeight) veThemKho(); scrollTo(0, y); }
  else scrollTo({ top: 0 });
  if (!bangMucLuc.hidden && bangMucLuc.classList.contains("bang-loc")) moLocKho();
}
function datLaiLocKho() { Object.assign(locKho, { trangThai: "tat-ca", muc: 0, dang: "", tu: "" }); const o = document.getElementById("tim-kho"); if (o) o.value = ""; datLocKho("muc", 0); }
let henTimKho;
function timKho(tu) { clearTimeout(henTimKho); henTimKho = setTimeout(() => datLocKho("tu", tu.trim()), 250); }
// Bảng lọc trượt từ dưới lên: mức độ + dạng bài, mỗi lựa chọn kèm số câu
function moLocKho() {
  const theoMuc = demTheo(locCauKho("muc"), c => c.mucDo);
  const dsDang = locCauKho("dang");
  const theoDang = demTheo(dsDang, c => c.dang);
  const tatCaDang = [...new Set(KHO.filter(c => c.chuong === locKho.chuong).map(c => c.dang))]
    .sort((x, y) => (maDang(x) ? 0 : 1) - (maDang(y) ? 0 : 1) || x.localeCompare(y, "vi", { numeric: true }));
  const cuon = bangMucLuc.scrollTop;
  bangMucLuc.classList.add("bang-loc");
  bangMucLuc.innerHTML = `
    <div class="dau-sticky"><div class="tay-cam"></div>
      <div class="dau-bang"><b>Bộ lọc</b><button class="nut-phu" onclick="datLaiLocKho()">Đặt lại</button></div></div>
    <h4>Mức độ</h4>
    <div class="luoi-muc">${[0, 1, 2, 3, 4].map(m => `<button class="${locKho.muc === m ? "chon" : ""}" onclick="datLocKho('muc',${m})">
      ${m ? MUC_DO[m] : "Mọi mức độ"}<small>${m ? theoMuc[m] || 0 : Object.values(theoMuc).reduce((a, b) => a + b, 0)}</small></button>`).join("")}</div>
    <h4>Dạng bài</h4>
    <div class="ds-dang">
      <button class="${locKho.dang ? "" : "chon"}" onclick="datLocKho('dang','')"><span class="ma">Tất cả</span><span>Mọi dạng bài</span><small>${dsDang.length}</small></button>
      ${tatCaDang.map(d => `<button class="${locKho.dang === d ? "chon" : ""} ${theoDang[d] ? "" : "rong"}" onclick="datLocKho('dang', this.dataset.d)" data-d="${d.replace(/"/g, "&quot;")}">
        <span class="ma">${maDang(d) || "Cũ"}</span><span>${tenDang(d)}</span><small>${theoDang[d] || 0}</small></button>`).join("")}
    </div>
    <div class="chan-bang"><button class="btn full" onclick="dongMucLuc()">Xem ${dsKhoHien.length} câu</button></div>`;
  manChe.hidden = bangMucLuc.hidden = false;
  bangMucLuc.scrollTop = cuon;
}

/* ================= TRẮC NGHIỆM =================
   Dùng chung cho HS tự luyện và (sau này) bài kiểm tra do GV mở.
   Bài làm lưu trên máy (localStorage) nên thoát ra vào lại vẫn còn. */
const CHU = ["A", "B", "C", "D"];
const CAU_THEO_ID = Object.fromEntries(NGAN_HANG.map(c => [c.id, c]));
const tenChuong = id => CHUONG.find(c => c.id === id)?.ten || id;
const tronMang = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
let baiLam = boNho.doc("bai-lam", null);
const luuBaiLam = () => boNho.ghi("bai-lam", baiLam);

// Tạo bài làm từ danh sách id câu hỏi: xáo thứ tự câu và thứ tự phương án
function taoBaiLam(dsId, cheDo) {
  baiLam = {
    cau: tronMang(dsId).map(id => ({ id, thuTu: tronMang([0, 1, 2, 3]) })),
    chon: dsId.map(() => null), cheDo, viTri: 0, batDau: Date.now(), ketThuc: null,
  };
  luuBaiLam();
  location.hash = "#/lam-bai";
}
const dapAnGoc = cau => CHU.indexOf(CAU_THEO_ID[cau.id].dapAn);      // vị trí đúng trong phuongAn gốc
const dapAnHienThi = cau => cau.thuTu.indexOf(dapAnGoc(cau));       // vị trí đúng sau khi xáo
const soCauDung = () => baiLam.cau.filter((c, i) => baiLam.chon[i] === dapAnHienThi(c)).length;
const dongHo = ms => { const g = Math.floor(ms / 1000); return `${String(Math.floor(g / 60)).padStart(2, "0")}:${String(g % 60).padStart(2, "0")}`; };

// Màn hình chọn nội dung luyện
function batDauLuyen() {
  const chon = [...document.querySelectorAll('[name="lt-chuong"]:checked')].map(x => x.value);
  const muc = [...document.querySelectorAll('[name="lt-muc"]:checked')].map(x => Number(x.value));
  const so = document.querySelector('[name="lt-so"]:checked').value;
  const cheDo = document.querySelector('[name="lt-che-do"]:checked').value;
  let ds = NGAN_HANG.filter(c => chon.includes(c.chuong) && muc.includes(c.mucDo)).map(c => c.id);
  if (!ds.length) { document.getElementById("lt-bao").textContent = "Chưa có câu nào khớp lựa chọn. Hãy chọn thêm chương hoặc mức độ."; return; }
  ds = tronMang(ds).slice(0, so === "het" ? ds.length : Number(so));
  taoBaiLam(ds, cheDo);
}
function demCauLuyen() {
  const chon = [...document.querySelectorAll('[name="lt-chuong"]:checked')].map(x => x.value);
  const muc = [...document.querySelectorAll('[name="lt-muc"]:checked')].map(x => Number(x.value));
  const n = NGAN_HANG.filter(c => chon.includes(c.chuong) && muc.includes(c.mucDo)).length;
  document.getElementById("lt-bao").textContent = `Có ${n} câu phù hợp.`;
}

// Vẽ câu hỏi hiện tại (chỉ vẽ lại phần khung câu, không vẽ cả trang)
function veCau() {
  const khung = document.getElementById("khung-cau");
  if (!khung || !baiLam) return;
  const i = baiLam.viTri, cau = baiLam.cau[i], goc = CAU_THEO_ID[cau.id];
  const daChon = baiLam.chon[i];
  const hienDapAn = baiLam.cheDo === "luyen" && daChon !== null;   // chế độ luyện: chọn xong hiện đáp án
  const dung = dapAnHienThi(cau);
  const n = baiLam.cau.length, daLam = baiLam.chon.filter(x => x !== null).length;
  document.getElementById("tien-do-lam").style.width = (daLam / n * 100) + "%";
  document.getElementById("so-cau").textContent = `Câu ${i + 1}/${n}`;
  khung.innerHTML = lamToan(`
    <div class="the-trang cau-hoi">
      <div class="nhan-cau"><span>${tenChuong(goc.chuong)}</span><span>${MUC_DO[goc.mucDo]}</span></div>
      <div class="de-cau">${goc.de}</div>
      <div class="phuong-an">
        ${cau.thuTu.map((k, j) => {
          let lop = "";
          if (hienDapAn) lop = j === dung ? "dung" : (j === daChon ? "sai" : "mo");
          else if (j === daChon) lop = "chon";
          return `<button class="${lop}" ${hienDapAn ? "disabled" : ""} onclick="chonPhuongAn(${j})">
            <span class="chu">${CHU[j]}</span><span class="nd">${goc.phuongAn[k]}</span></button>`;
        }).join("")}
      </div>
      ${hienDapAn ? `<div class="loi-giai ${daChon === dung ? "dung" : "sai"}">
        <b>${daChon === dung ? "✓ Chính xác!" : `✗ Chưa đúng. Đáp án: ${CHU[dung]}`}</b>
        <div>${goc.loiGiai || ""}</div></div>` : ""}
    </div>
    <div class="dieu-huong">
      <button class="btn phu" ${i === 0 ? "disabled" : ""} onclick="denCau(${i - 1})">‹ Trước</button>
      <button class="btn phu" onclick="moBangCau()">${daLam}/${n} đã làm</button>
      ${i < n - 1 ? `<button class="btn" onclick="denCau(${i + 1})">Sau ›</button>`
                  : `<button class="btn" onclick="nopBai()">Nộp bài</button>`}
    </div>`);
}
function chonPhuongAn(j) {
  baiLam.chon[baiLam.viTri] = j; luuBaiLam(); veCau();
  // Chế độ thi thử: tự sang câu tiếp theo cho nhanh
  if (baiLam.cheDo === "thi" && baiLam.viTri < baiLam.cau.length - 1) setTimeout(() => denCau(baiLam.viTri + 1), 250);
}
function denCau(i) { dongMucLuc(); baiLam.viTri = i; luuBaiLam(); veCau(); window.scrollTo(0, 0); }
function moBangCau() {
  bangMucLuc.innerHTML = `
    <div class="dau-sticky"><div class="tay-cam"></div>
    <div class="dau-bang"><b>Danh sách câu hỏi</b><button class="nut-phu" onclick="nopBai()">Nộp bài</button></div></div>
    <div class="luoi-cau">${baiLam.cau.map((c, k) => {
      const lop = baiLam.chon[k] === null ? "" : (baiLam.cheDo === "luyen" ? (baiLam.chon[k] === dapAnHienThi(c) ? "dung" : "sai") : "da-lam");
      return `<button class="${lop} ${k === baiLam.viTri ? "hien-tai" : ""}" onclick="denCau(${k})">${k + 1}</button>`;
    }).join("")}</div>
    <div class="chu-giai-cau"><span><i class="da-lam"></i>Đã làm</span><span><i></i>Chưa làm</span></div>`;
  manChe.hidden = bangMucLuc.hidden = false;
}
function nopBai() {
  dongMucLuc();
  const conLai = baiLam.chon.filter(x => x === null).length;
  if (conLai && !confirm(`Còn ${conLai} câu chưa làm. Vẫn nộp bài?`)) return;
  baiLam.ketThuc = Date.now(); luuBaiLam();
  location.hash = "#/ket-qua";
}
function lamLaiCauSai() {
  const sai = baiLam.cau.filter((c, i) => baiLam.chon[i] !== dapAnHienThi(c)).map(c => c.id);
  taoBaiLam(sai, baiLam.cheDo);
}
let henGioDongHo = null;

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

/* ================= Công thức toán (KaTeX) =================
   Trong nội dung viết công thức kiểu LaTeX:
     \[ ... \]  công thức riêng một dòng      \( ... \)  công thức nằm trong câu
   Ví dụ: \[ \Hp = \sqrt{\Ka \Ca} \]   hoặc   \( \dfrac{\Ca}{\Ka} \ge 400 \)
   Dấu phẩy thập phân (0,10) tự hiển thị đúng. Các lệnh viết tắt ở TOAN_VIET_TAT. */
const TOAN_VIET_TAT = {
  "\\Hp": "[\\mathrm{H^+}]",
  "\\OH": "[\\mathrm{OH^-}]",
  "\\Ka": "K_\\mathrm{a}",
  "\\Kb": "K_\\mathrm{b}",
  "\\Kw": "K_\\mathrm{w}",
  "\\pKa": "\\mathrm{p}K_\\mathrm{a}",
  "\\pKb": "\\mathrm{p}K_\\mathrm{b}",
  "\\Ca": "C_\\mathrm{a}",
  "\\Cb": "C_\\mathrm{b}",
};
function lamToan(html) {
  if (!window.katex) return html;
  return html.replace(/\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)/g, (goc, rieng, trongCau) => {
    const tex = (rieng ?? trongCau).replace(/(\d),(\d)/g, "$1{,}$2");
    try {
      return katex.renderToString(tex, {
        displayMode: rieng !== undefined, throwOnError: false, strict: "ignore",   // "ignore": cho phép chữ tiếng Việt trong \text{}
        macros: { ...TOAN_VIET_TAT },
      });
    } catch { return goc; }
  });
}

/* ================= Giản đồ phân bố acid – base =================
   Trong nội dung chỉ cần viết: <div class="gian-do" data-pka="2.15,7.20,12.35" data-dang="H₃PO₄,H₂PO₄⁻,HPO₄²⁻,PO₄³⁻"></div>
   App tự tính phân số mol α của từng dạng theo pH (0 → 14) và vẽ đồ thị. */
const MAU_DUONG = ["var(--mau-chinh)", "#16a34a", "#f59e0b", "#dc2626"];
function veGianDo(khung) {
  const pKa = khung.dataset.pka.split(",").map(Number);
  const dang = khung.dataset.dang.split(",");
  const n = pKa.length;
  // α_i ∝ h^(n−i) · Ka1·…·Ka_i
  const alpha = pH => {
    const h = 10 ** -pH;
    const t = [];
    for (let i = 0, tich = 1; i <= n; i++) { t.push(h ** (n - i) * tich); tich *= 10 ** -pKa[i]; }
    const tong = t.reduce((a, b) => a + b, 0);
    return t.map(x => x / tong);
  };
  const R = 320, C = 180, T = 12, P = 12, D = 28, Tr = 34;   // rộng, cao, lề trên/phải/dưới/trái
  const x = pH => Tr + pH / 14 * (R - Tr - P);
  const y = a => T + (1 - a) * (C - T - D);
  const diem = [...Array(141)].map((_, k) => k / 10);
  const duong = [...Array(n + 1)].map((_, i) =>
    `<path d="${diem.map((pH, k) => `${k ? "L" : "M"}${x(pH).toFixed(1)},${y(alpha(pH)[i]).toFixed(1)}`).join("")}"
       fill="none" stroke="${MAU_DUONG[i % 4]}" stroke-width="2.5"/>`).join("");
  const truc = [0, 2, 4, 6, 8, 10, 12, 14].map(v =>
    `<line x1="${x(v)}" x2="${x(v)}" y1="${T}" y2="${C - D}" class="luoi"/><text x="${x(v)}" y="${C - D + 14}" text-anchor="middle">${v}</text>`).join("")
    + [0, 0.5, 1].map(v =>
    `<line x1="${Tr}" x2="${R - P}" y1="${y(v)}" y2="${y(v)}" class="luoi"/><text x="${Tr - 5}" y="${y(v) + 4}" text-anchor="end">${String(v).replace(".", ",")}</text>`).join("");
  const pKaNet = pKa.map(v => `<line x1="${x(v)}" x2="${x(v)}" y1="${T}" y2="${C - D}" class="net-pka"/>`).join("");
  khung.innerHTML = `
    <svg viewBox="0 0 ${R} ${C}" role="img" aria-label="Giản đồ phân bố theo pH">
      ${truc}${pKaNet}${duong}
      <text x="${(R + Tr) / 2}" y="${C - 2}" text-anchor="middle">pH</text>
      <text x="10" y="${(T + C - D) / 2}" text-anchor="middle" transform="rotate(-90 10 ${(T + C - D) / 2})">α</text>
    </svg>
    <div class="chu-giai">${dang.map((d, i) => `<span><i style="background:${MAU_DUONG[i % 4]}"></i>${d}</span>`).join("")}
      <span class="phu">Nét đứt: pH = pK<sub>a</sub></span></div>`;
}

/* ================= Làm đẹp nội dung sau khi vẽ =================
   - "Ví dụ N." thành nhãn, nút "Xem lời giải" đổi chữ khi mở
   - Bảng có class "bang-the": trên điện thoại hiện thành từng thẻ */
function lamDepNoiDung(html) {
  return html
    .replace(/<b>Ví dụ\s*([\d.]*?)\.?<\/b>/g, '<span class="nhan-vd">Ví dụ $1</span>')
    .replace(/<summary>Xem (lời giải|đáp án)<\/summary>/g,
      '<summary><span class="khi-dong">Xem $1</span><span class="khi-mo">Ẩn $1</span></summary>');
}
function ganNhanBang(goc) {
  goc.querySelectorAll("table.bang-the").forEach(bang => {
    const cot = [...bang.querySelectorAll("thead th")].map(th => th.textContent.trim());
    bang.querySelectorAll("tbody tr").forEach(tr => [...tr.children].forEach((td, i) => { td.dataset.nhan = cot[i] || ""; }));
  });
}

/* ================= Bộ điều hướng (không cần sửa) ================= */
const noiDung = document.getElementById("noi-dung");
const tieuDe = document.getElementById("tieu-de");
const nutQuayLai = document.getElementById("nut-quay-lai");
const thanhTienDo = document.getElementById("tien-do-doc");
let chuongDangDoc = null;   // chương đang mở (để theo dõi tiến độ đọc)

function hienManHinh() {
  const [duong, thamSo] = (location.hash.replace(/^#/, "") || "/").split("?");
  const mh = MAN_HINH[duong] || MAN_HINH["/"];
  tieuDe.textContent = mh.tieuDe;
  document.title = duong === "/" ? "Hóa phân tích" : mh.tieuDe + " · Hóa phân tích";
  noiDung.innerHTML = lamToan(lamDepNoiDung(mh.ve()));
  noiDung.querySelectorAll(".gian-do").forEach(veGianDo);
  ganNhanBang(noiDung);
  nutQuayLai.hidden = !mh.manHinhCon;
  document.body.classList.toggle("man-con", !!mh.manHinhCon);
  document.querySelectorAll(".tabbar a").forEach(a =>
    a.classList.toggle("active", a.dataset.tab === duong ||
      (a.dataset.tab !== "/" && duong.startsWith(a.dataset.tab + "/"))));
  if (mh.khoChuong) { if (locKho.chuong !== mh.khoChuong) { Object.assign(locKho, { dang: "", tu: "", chuong: mh.khoChuong }); document.getElementById("tim-kho").value = ""; } veKho(); }
  clearInterval(henGioDongHo);
  if (mh.lamBai && baiLam && !baiLam.ketThuc) {
    veCau();
    const capNhat = () => { const el = document.getElementById("dong-ho"); if (el) el.textContent = dongHo(Date.now() - baiLam.batDau); };
    capNhat(); henGioDongHo = setInterval(capNhat, 1000);
  }
  doCaoTieuDe();
  chuongDangDoc = mh.chuong || null;
  thanhTienDo.hidden = !chuongDangDoc;
  nutMucLuc.hidden = !chuongDangDoc;
  nutMucLuc.classList.remove("an");
  nhayLuc = Date.now();
  dongMucLuc();
  const muc = new URLSearchParams(thamSo).get("muc");
  if (chuongDangDoc && muc !== null) requestAnimationFrame(() => denMuc(Number(muc), false));
  else window.scrollTo(0, 0);
  capNhatKhiCuon();
}

let nhayLuc = 0;   // thời điểm app tự cuộn (nhảy mục) — lúc đó không ẩn nút Mục lục
function denMuc(k, muot = true) {
  dongMucLuc();
  nhayLuc = Date.now();
  nutMucLuc.classList.remove("an");
  const el = document.getElementById("muc-" + k);
  if (el) el.scrollIntoView({ behavior: muot ? "smooth" : "auto" });
}

/* Theo dõi cuộn: thanh tiến độ, mục đang đọc, ghi nhớ vị trí */
let dangCho = false;
function capNhatKhiCuon() {
  if (!chuongDangDoc) return;
  const cao = document.documentElement.scrollHeight - innerHeight;
  const pt = cao > 0 ? Math.min(100, Math.round(scrollY / cao * 100)) : 100;
  thanhTienDo.style.setProperty("--pt", pt + "%");
  const cacMuc = [...noiDung.querySelectorAll("section.muc")];
  let hienTai = 0;
  cacMuc.forEach((el, k) => { if (el.getBoundingClientRect().top < 140) hienTai = k; });
  nutMucLuc.querySelector("span").textContent = `Mục ${hienTai + 1}/${cacMuc.length}`;
  const ds = boNho.doc("tien-do", {});
  if (pt > (ds[chuongDangDoc.id] || 0)) { ds[chuongDangDoc.id] = pt; boNho.ghi("tien-do", ds); }
  if (scrollY > 200) boNho.ghi("doc-gan-nhat", { id: chuongDangDoc.id, muc: hienTai });
  bangMucLuc.querySelectorAll("ol button").forEach((b, k) => b.classList.toggle("dang-doc", k === hienTai));
}
let viTriCu = 0;
window.addEventListener("scroll", () => {
  // Nút "Mục lục" ẩn khi cuộn xuống đọc, hiện lại khi cuộn lên
  if (Date.now() - nhayLuc < 1200) viTriCu = scrollY;
  else if (Math.abs(scrollY - viTriCu) > 8) {
    const xuong = scrollY > viTriCu;
    nutMucLuc.classList.toggle("an", xuong && scrollY > 300);
    // Thanh lọc kho: cuộn xuống thì thu gọn (chỉ còn ô tìm), cuộn lên một chút là hiện đủ
    document.getElementById("thanh-kho")?.classList.toggle("gon", xuong && scrollY > 160);
    viTriCu = scrollY;
  }
  if (dangCho) return;
  dangCho = true;
  requestAnimationFrame(() => { dangCho = false; capNhatKhiCuon(); });
}, { passive: true });

/* Nút "Mục lục" nổi + bảng mục lục trượt từ dưới lên */
const nutMucLuc = document.createElement("button");
nutMucLuc.className = "nut-muc-luc"; nutMucLuc.hidden = true;
nutMucLuc.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/></svg><span></span>';
const manChe = document.createElement("div");
manChe.className = "man-che"; manChe.hidden = true;
const bangMucLuc = document.createElement("div");
bangMucLuc.className = "bang-muc-luc"; bangMucLuc.hidden = true;
document.body.append(nutMucLuc, manChe, bangMucLuc);
function moMucLuc() {
  const { muc } = CHUONG_MUC[chuongDangDoc.id];
  bangMucLuc.innerHTML = `
    <div class="dau-sticky"><div class="tay-cam"></div>
    <div class="dau-bang"><b>${chuongDangDoc.ten}</b>
      <button class="nut-phu" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); dongMucLuc()">↑ Đầu trang</button></div></div>
    <ol>${muc.map((m, k) => `<li><button onclick="denMuc(${k})"><span class="so">${k + 1}</span><span>${m.tieuDe}</span></button></li>`).join("")}</ol>`;
  manChe.hidden = bangMucLuc.hidden = false;
  capNhatKhiCuon();
  const dangDoc = bangMucLuc.querySelector(".dang-doc");   // cuộn bảng (không cuộn trang) tới mục đang đọc
  if (dangDoc) bangMucLuc.scrollTop = dangDoc.offsetTop - bangMucLuc.clientHeight / 2;
}
function dongMucLuc() { manChe.hidden = bangMucLuc.hidden = true; bangMucLuc.classList.remove("bang-loc"); }
nutMucLuc.addEventListener("click", moMucLuc);
manChe.addEventListener("click", dongMucLuc);

// Chiều cao thanh tiêu đề, để thanh lọc kho dính ngay bên dưới
const doCaoTieuDe = () => document.documentElement.style.setProperty("--cao-topbar", document.querySelector(".topbar").offsetHeight + "px");
window.addEventListener("resize", doCaoTieuDe);
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
