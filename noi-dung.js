/* =========================================================
   NỘI DUNG HỌC TẬP của app — sửa/thêm bài ở file này.
   - CHUONG: mỗi chương có lý thuyết (lyThuyet) và bài tập (baiTap).
   - TRA_CUU: các bảng tra cứu.
   Viết chỉ số dưới bằng <sub>, số mũ bằng <sup>. Ví dụ: H<sub>2</sub>O, 10<sup>-14</sup>
   ========================================================= */
const CHUONG = [
  {
    id: "dai-cuong",
    icon: "📏",
    ten: "Đại cương & sai số",
    moTa: "Nồng độ, pha dung dịch, sai số phân tích",
    lyThuyet: `
      <h3>1. Các loại nồng độ</h3>
      <div class="cong-thuc">C<sub>M</sub> = n / V &nbsp;(mol/L)</div>
      <div class="cong-thuc">C% = m<sub>chất tan</sub> / m<sub>dung dịch</sub> × 100%</div>
      <div class="cong-thuc">1 ppm = 1 mg/L (dung dịch loãng trong nước)</div>
      <h3>2. Pha loãng dung dịch</h3>
      <p>Số mol chất tan không đổi khi pha loãng:</p>
      <div class="cong-thuc">C<sub>1</sub>·V<sub>1</sub> = C<sub>2</sub>·V<sub>2</sub></div>
      <h3>3. Sai số trong phân tích</h3>
      <ul>
        <li><b>Sai số hệ thống</b>: lệch về một phía, có nguyên nhân xác định (dụng cụ, hóa chất, phương pháp).</li>
        <li><b>Sai số ngẫu nhiên</b>: lệch không theo quy luật, giảm bằng cách làm lặp lại nhiều lần.</li>
      </ul>
      <div class="cong-thuc">Trung bình: x̄ = Σx<sub>i</sub> / n</div>
      <div class="cong-thuc">Độ lệch chuẩn: s = √[ Σ(x<sub>i</sub> − x̄)<sup>2</sup> / (n − 1) ]</div>
      <div class="cong-thuc">Độ lệch chuẩn tương đối: RSD = s / x̄ × 100%</div>
    `,
    baiTap: [
      {
        de: "Hòa tan 4,00 g NaOH (M = 40,0 g/mol) thành 250,0 mL dung dịch. Tính nồng độ mol của dung dịch.",
        dapAn: "n = 4,00 / 40,0 = 0,100 mol<br>C = 0,100 / 0,2500 = <b>0,400 M</b>",
      },
      {
        de: "Cần lấy bao nhiêu mL dung dịch HCl 2,00 M để pha thành 500,0 mL dung dịch HCl 0,100 M?",
        dapAn: "V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub> / C<sub>1</sub> = 0,100 × 500,0 / 2,00 = <b>25,0 mL</b>",
      },
    ],
  },
  {
    id: "axit-bazo",
    icon: "⚗️",
    ten: "Cân bằng axit – bazơ",
    moTa: "pH, Ka, Kb, dung dịch đệm",
    lyThuyet: `
      <h3>1. Khái niệm cơ bản</h3>
      <div class="cong-thuc">pH = −lg[H<sup>+</sup>] &nbsp;;&nbsp; pOH = −lg[OH<sup>−</sup>]</div>
      <div class="cong-thuc">K<sub>w</sub> = [H<sup>+</sup>][OH<sup>−</sup>] = 10<sup>−14</sup> (25 °C) → pH + pOH = 14</div>
      <div class="cong-thuc">Cặp axit – bazơ liên hợp: K<sub>a</sub> · K<sub>b</sub> = K<sub>w</sub></div>
      <h3>2. Tính pH gần đúng</h3>
      <ul>
        <li><b>Axit mạnh</b> nồng độ C<sub>a</sub>: [H<sup>+</sup>] = C<sub>a</sub></li>
        <li><b>Bazơ mạnh</b> nồng độ C<sub>b</sub>: [OH<sup>−</sup>] = C<sub>b</sub></li>
        <li><b>Axit yếu</b>: [H<sup>+</sup>] ≈ √(K<sub>a</sub>·C<sub>a</sub>)</li>
        <li><b>Bazơ yếu</b>: [OH<sup>−</sup>] ≈ √(K<sub>b</sub>·C<sub>b</sub>)</li>
      </ul>
      <p class="ghi-chu">Công thức gần đúng cho axit/bazơ yếu dùng được khi axit phân li ít (thường khi C/K ≥ 100). Nếu không, phải giải phương trình bậc hai.</p>
      <h3>3. Dung dịch đệm</h3>
      <p>Hỗn hợp axit yếu HA và bazơ liên hợp A<sup>−</sup> (Henderson – Hasselbalch):</p>
      <div class="cong-thuc">pH = pK<sub>a</sub> + lg( C<sub>A⁻</sub> / C<sub>HA</sub> )</div>
    `,
    baiTap: [
      {
        de: "Tính pH của dung dịch CH<sub>3</sub>COOH 0,10 M (pK<sub>a</sub> = 4,76).",
        dapAn: "K<sub>a</sub> = 10<sup>−4,76</sup> ≈ 1,74·10<sup>−5</sup><br>[H<sup>+</sup>] ≈ √(1,74·10<sup>−5</sup> × 0,10) ≈ 1,32·10<sup>−3</sup> M<br>pH ≈ <b>2,88</b>",
      },
      {
        de: "Tính pH của dung dịch NH<sub>3</sub> 0,10 M (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,24).",
        dapAn: "pK<sub>b</sub> = 14 − 9,24 = 4,76 → K<sub>b</sub> ≈ 1,74·10<sup>−5</sup><br>[OH<sup>−</sup>] ≈ √(1,74·10<sup>−5</sup> × 0,10) ≈ 1,32·10<sup>−3</sup> M → pOH ≈ 2,88<br>pH ≈ <b>11,12</b>",
      },
      {
        de: "Tính pH của dung dịch đệm gồm CH<sub>3</sub>COOH 0,10 M và CH<sub>3</sub>COONa 0,20 M (pK<sub>a</sub> = 4,76).",
        dapAn: "pH = 4,76 + lg(0,20 / 0,10) = 4,76 + 0,30 = <b>5,06</b>",
      },
    ],
  },
  {
    id: "tao-phuc",
    icon: "🔗",
    ten: "Cân bằng tạo phức",
    moTa: "Hằng số bền, EDTA, chuẩn độ complexon",
    lyThuyet: `
      <h3>1. Hằng số bền</h3>
      <p>Với phản ứng M + L ⇌ ML:</p>
      <div class="cong-thuc">β = [ML] / ([M]·[L])</div>
      <p>β càng lớn thì phức càng bền.</p>
      <h3>2. EDTA (kí hiệu H<sub>4</sub>Y)</h3>
      <ul>
        <li>Tạo phức với hầu hết ion kim loại theo tỉ lệ <b>1 : 1</b>.</li>
        <li>Độ bền phức phụ thuộc pH, nên chuẩn độ phải giữ pH ổn định bằng dung dịch đệm (ví dụ đệm NH<sub>3</sub>/NH<sub>4</sub>Cl pH ≈ 10).</li>
      </ul>
      <div class="cong-thuc">Hằng số bền điều kiện: β' = β · α<sub>Y⁴⁻</sub></div>
      <h3>3. Chuẩn độ complexon</h3>
      <div class="cong-thuc">n<sub>M</sub> = n<sub>EDTA</sub> → C<sub>M</sub>·V<sub>M</sub> = C<sub>EDTA</sub>·V<sub>EDTA</sub></div>
      <p>Chỉ thị hay dùng: ET-OO (Eriochrome đen T), murexit.</p>
    `,
    baiTap: [
      {
        de: "Chuẩn độ 25,00 mL dung dịch Ca<sup>2+</sup> bằng EDTA 0,01000 M thì hết 12,50 mL. Tính nồng độ Ca<sup>2+</sup>.",
        dapAn: "Tỉ lệ 1 : 1 → C = 0,01000 × 12,50 / 25,00 = <b>5,000·10<sup>−3</sup> M</b>",
      },
    ],
  },
  {
    id: "ket-tua",
    icon: "🧂",
    ten: "Cân bằng kết tủa",
    moTa: "Tích số tan, độ tan, chuẩn độ kết tủa",
    lyThuyet: `
      <h3>1. Tích số tan</h3>
      <p>Với M<sub>m</sub>A<sub>n</sub> (rắn) ⇌ mM + nA:</p>
      <div class="cong-thuc">K<sub>sp</sub> = [M]<sup>m</sup>·[A]<sup>n</sup></div>
      <h3>2. Độ tan s (mol/L) trong nước</h3>
      <div class="cong-thuc">Dạng MA: s = √K<sub>sp</sub></div>
      <div class="cong-thuc">Dạng M<sub>m</sub>A<sub>n</sub>: s = ( K<sub>sp</sub> / (m<sup>m</sup>·n<sup>n</sup>) )<sup>1/(m+n)</sup></div>
      <h3>3. Điều kiện tạo kết tủa</h3>
      <ul>
        <li>Tích ion Q &gt; K<sub>sp</sub>: có kết tủa.</li>
        <li>Q &lt; K<sub>sp</sub>: chưa kết tủa.</li>
        <li><b>Hiệu ứng ion chung</b>: thêm ion chung làm độ tan giảm.</li>
      </ul>
      <h3>4. Chuẩn độ kết tủa (bạc)</h3>
      <ul>
        <li><b>Mohr</b>: chỉ thị K<sub>2</sub>CrO<sub>4</sub>, môi trường trung tính.</li>
        <li><b>Volhard</b>: chuẩn độ ngược bằng SCN<sup>−</sup>, chỉ thị Fe<sup>3+</sup>.</li>
        <li><b>Fajans</b>: chỉ thị hấp phụ (fluorescein...).</li>
      </ul>
    `,
    baiTap: [
      {
        de: "Tính độ tan của AgCl trong nước (K<sub>sp</sub> = 1,8·10<sup>−10</sup>).",
        dapAn: "s = √(1,8·10<sup>−10</sup>) ≈ <b>1,3·10<sup>−5</sup> M</b>",
      },
      {
        de: "Tính độ tan của AgCl trong dung dịch NaCl 0,010 M (K<sub>sp</sub> = 1,8·10<sup>−10</sup>).",
        dapAn: "[Cl<sup>−</sup>] ≈ 0,010 M → s = K<sub>sp</sub> / [Cl<sup>−</sup>] = 1,8·10<sup>−10</sup> / 0,010 = <b>1,8·10<sup>−8</sup> M</b><br>(nhỏ hơn trong nước khoảng 700 lần — hiệu ứng ion chung)",
      },
    ],
  },
  {
    id: "oxi-hoa-khu",
    icon: "⚡",
    ten: "Cân bằng oxi hóa – khử",
    moTa: "Thế điện cực, phương trình Nernst",
    lyThuyet: `
      <h3>1. Phương trình Nernst (25 °C)</h3>
      <p>Với cặp Ox + ne ⇌ Kh:</p>
      <div class="cong-thuc">E = E° + (0,0592 / n) · lg( [Ox] / [Kh] )</div>
      <h3>2. Hằng số cân bằng của phản ứng oxi hóa – khử</h3>
      <div class="cong-thuc">lg K = n·(E°<sub>1</sub> − E°<sub>2</sub>) / 0,0592</div>
      <p>(n: số electron trao đổi; E°<sub>1</sub> của chất oxi hóa, E°<sub>2</sub> của chất khử)</p>
      <h3>3. Các phương pháp chuẩn độ thường gặp</h3>
      <ul>
        <li><b>Pemanganat</b>: KMnO<sub>4</sub> trong môi trường H<sub>2</sub>SO<sub>4</sub>, tự chỉ thị (hồng nhạt).<br>MnO<sub>4</sub><sup>−</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> → Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O</li>
        <li><b>Dicromat</b>: K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, chỉ thị diphenylamin.</li>
        <li><b>Iot – thiosunfat</b>: I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup>, chỉ thị hồ tinh bột.</li>
      </ul>
    `,
    baiTap: [
      {
        de: "Tính thế của cặp Fe<sup>3+</sup>/Fe<sup>2+</sup> khi [Fe<sup>3+</sup>] = 0,10 M; [Fe<sup>2+</sup>] = 0,010 M (E° = 0,77 V).",
        dapAn: "E = 0,77 + 0,0592 × lg(0,10 / 0,010) = 0,77 + 0,0592 = <b>0,83 V</b>",
      },
      {
        de: "Chuẩn độ 20,00 mL dung dịch Fe<sup>2+</sup> bằng KMnO<sub>4</sub> 0,02000 M trong môi trường axit thì hết 15,00 mL. Tính nồng độ Fe<sup>2+</sup>.",
        dapAn: "n<sub>MnO₄⁻</sub> = 0,02000 × 0,01500 = 3,000·10<sup>−4</sup> mol<br>n<sub>Fe²⁺</sub> = 5 × 3,000·10<sup>−4</sup> = 1,500·10<sup>−3</sup> mol<br>C = 1,500·10<sup>−3</sup> / 0,02000 = <b>0,07500 M</b>",
      },
    ],
  },
  {
    id: "chuan-do",
    icon: "🧪",
    ten: "Phân tích thể tích (chuẩn độ)",
    moTa: "Điểm tương đương, chọn chỉ thị, tính kết quả",
    lyThuyet: `
      <h3>1. Khái niệm</h3>
      <ul>
        <li><b>Điểm tương đương</b>: lúc lượng thuốc thử thêm vào vừa đủ phản ứng hết với chất cần xác định.</li>
        <li><b>Điểm cuối chuẩn độ</b>: lúc chỉ thị đổi màu, dừng chuẩn độ. Chênh lệch giữa hai điểm này gây ra sai số chỉ thị.</li>
        <li><b>Chất chuẩn gốc</b>: tinh khiết, bền, công thức xác định (ví dụ Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O, H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>·2H<sub>2</sub>O).</li>
      </ul>
      <h3>2. Tính kết quả</h3>
      <p>Với phản ứng aA + bB → sản phẩm:</p>
      <div class="cong-thuc">n<sub>A</sub> / a = n<sub>B</sub> / b</div>
      <div class="cong-thuc">Tỉ lệ 1 : 1: C<sub>A</sub>·V<sub>A</sub> = C<sub>B</sub>·V<sub>B</sub></div>
      <h3>3. Chọn chỉ thị</h3>
      <p>Chọn chỉ thị có khoảng đổi màu nằm trong <b>bước nhảy</b> của đường chuẩn độ. Ví dụ chuẩn độ axit mạnh bằng bazơ mạnh có thể dùng phenolphtalein hoặc metyl đỏ.</p>
    `,
    baiTap: [
      {
        de: "Chuẩn độ 25,00 mL dung dịch HCl bằng NaOH 0,1000 M thì hết 20,00 mL. Tính nồng độ HCl.",
        dapAn: "C<sub>HCl</sub> = 0,1000 × 20,00 / 25,00 = <b>0,08000 M</b>",
      },
    ],
  },
  {
    id: "khoi-luong",
    icon: "⚖️",
    ten: "Phân tích khối lượng",
    moTa: "Dạng kết tủa, dạng cân, hệ số chuyển",
    lyThuyet: `
      <h3>1. Các bước</h3>
      <p>Hòa tan mẫu → tạo kết tủa → lọc, rửa → sấy/nung → cân.</p>
      <ul>
        <li><b>Dạng kết tủa</b>: chất tách ra khỏi dung dịch.</li>
        <li><b>Dạng cân</b>: chất đem cân sau khi sấy/nung (có thể khác dạng kết tủa, ví dụ Fe(OH)<sub>3</sub> → Fe<sub>2</sub>O<sub>3</sub>).</li>
      </ul>
      <h3>2. Hệ số chuyển F</h3>
      <div class="cong-thuc">F = (a · M<sub>chất cần xác định</sub>) / (b · M<sub>dạng cân</sub>)</div>
      <p>(a, b chọn sao cho số nguyên tử của nguyên tố cần xác định ở tử và mẫu bằng nhau)</p>
      <div class="cong-thuc">%X = m<sub>dạng cân</sub> · F / m<sub>mẫu</sub> × 100%</div>
    `,
    baiTap: [
      {
        de: "Phân tích 0,5000 g mẫu thu được 0,4660 g BaSO<sub>4</sub> (M = 233,39). Tính % lưu huỳnh (S = 32,06) trong mẫu.",
        dapAn: "F = 32,06 / 233,39 = 0,1374<br>%S = 0,4660 × 0,1374 / 0,5000 × 100% ≈ <b>12,80%</b>",
      },
    ],
  },
];

/* Bảng tra cứu (giá trị ở 25 °C, có thể lệch nhẹ giữa các tài liệu) */
const TRA_CUU = [
  {
    id: "pka",
    icon: "⚗️",
    ten: "Hằng số axit pKa",
    cot: ["Axit", "pK<sub>a</sub>"],
    dong: [
      ["HCOOH", "3,75"],
      ["CH<sub>3</sub>COOH", "4,76"],
      ["C<sub>6</sub>H<sub>5</sub>COOH", "4,20"],
      ["HF", "3,17"],
      ["HNO<sub>2</sub>", "3,15"],
      ["HClO", "7,53"],
      ["HCN", "9,21"],
      ["NH<sub>4</sub><sup>+</sup>", "9,24"],
      ["H<sub>3</sub>BO<sub>3</sub>", "9,24"],
      ["H<sub>2</sub>CO<sub>3</sub>", "6,35 ; 10,33"],
      ["H<sub>3</sub>PO<sub>4</sub>", "2,15 ; 7,20 ; 12,35"],
      ["H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>", "1,25 ; 4,27"],
    ],
  },
  {
    id: "ksp",
    icon: "🧂",
    ten: "Tích số tan Ksp",
    cot: ["Chất", "K<sub>sp</sub>"],
    dong: [
      ["AgCl", "1,8·10<sup>−10</sup>"],
      ["AgBr", "5,0·10<sup>−13</sup>"],
      ["AgI", "8,3·10<sup>−17</sup>"],
      ["Ag<sub>2</sub>CrO<sub>4</sub>", "1,1·10<sup>−12</sup>"],
      ["BaSO<sub>4</sub>", "1,1·10<sup>−10</sup>"],
      ["CaC<sub>2</sub>O<sub>4</sub>", "2,3·10<sup>−9</sup>"],
      ["CaCO<sub>3</sub>", "2,8·10<sup>−9</sup>"],
      ["Mg(OH)<sub>2</sub>", "1,8·10<sup>−11</sup>"],
    ],
  },
  {
    id: "the-dien-cuc",
    icon: "⚡",
    ten: "Thế điện cực chuẩn E°",
    cot: ["Cặp", "E° (V)"],
    dong: [
      ["F<sub>2</sub> / F<sup>−</sup>", "+2,87"],
      ["MnO<sub>4</sub><sup>−</sup> / Mn<sup>2+</sup>", "+1,51"],
      ["Cl<sub>2</sub> / Cl<sup>−</sup>", "+1,36"],
      ["Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> / Cr<sup>3+</sup>", "+1,33"],
      ["O<sub>2</sub> / H<sub>2</sub>O", "+1,23"],
      ["Br<sub>2</sub> / Br<sup>−</sup>", "+1,07"],
      ["Ag<sup>+</sup> / Ag", "+0,80"],
      ["Fe<sup>3+</sup> / Fe<sup>2+</sup>", "+0,77"],
      ["I<sub>2</sub> / I<sup>−</sup>", "+0,54"],
      ["Cu<sup>2+</sup> / Cu", "+0,34"],
      ["S<sub>4</sub>O<sub>6</sub><sup>2−</sup> / S<sub>2</sub>O<sub>3</sub><sup>2−</sup>", "+0,08"],
      ["2H<sup>+</sup> / H<sub>2</sub>", "0,00"],
      ["Fe<sup>2+</sup> / Fe", "−0,44"],
      ["Zn<sup>2+</sup> / Zn", "−0,76"],
    ],
  },
  {
    id: "chi-thi",
    icon: "🎨",
    ten: "Chỉ thị axit – bazơ",
    cot: ["Chỉ thị", "Khoảng pH", "Đổi màu"],
    dong: [
      ["Metyl da cam", "3,1 – 4,4", "đỏ → vàng"],
      ["Metyl đỏ", "4,4 – 6,2", "đỏ → vàng"],
      ["Bromthymol xanh", "6,0 – 7,6", "vàng → xanh lam"],
      ["Phenolphtalein", "8,2 – 10,0", "không màu → hồng"],
    ],
  },
];
