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
    moTa: "Nồng độ, pha chế, sai số, thống kê",
    lyThuyet: `
      <h3>1. Các cách biểu diễn nồng độ</h3>
      <div class="cong-thuc">Nồng độ mol: C<sub>M</sub> = n / V &nbsp;(mol/L, kí hiệu M)</div>
      <div class="cong-thuc">Nồng độ phần trăm khối lượng: C% = m<sub>chất tan</sub> / m<sub>dung dịch</sub> × 100%</div>
      <div class="cong-thuc">Nồng độ khối lượng: ρ = m<sub>chất tan</sub> / V &nbsp;(g/L, mg/L)</div>
      <div class="cong-thuc">ppm = mg/kg ; ppb = µg/kg<br>(dung dịch loãng trong nước: 1 ppm ≈ 1 mg/L ; 1 ppb ≈ 1 µg/L)</div>
      <p><b>Các công thức đổi hay dùng</b> (d: khối lượng riêng, g/mL; M: khối lượng mol, g/mol):</p>
      <div class="cong-thuc">C<sub>M</sub> = 10 · d · C% / M</div>
      <div class="cong-thuc">ppm (mg/L) = C<sub>M</sub> · M · 1000</div>
      <div class="vi-du"><b>Ví dụ.</b> Dung dịch HCl 37%, d = 1,19 g/mL (M = 36,46). Tính C<sub>M</sub>.<br>
        C<sub>M</sub> = 10 × 1,19 × 37 / 36,46 ≈ <b>12,1 M</b></div>

      <h3>2. Pha chế dung dịch</h3>
      <p><b>Từ chất rắn</b> (V tính bằng lít; P: độ tinh khiết, %):</p>
      <div class="cong-thuc">m = C<sub>M</sub> · V · M &nbsp;;&nbsp; nếu chất không tinh khiết: m = C<sub>M</sub> · V · M · 100 / P</div>
      <p><b>Pha loãng</b>: số mol chất tan không đổi.</p>
      <div class="cong-thuc">C<sub>1</sub> · V<sub>1</sub> = C<sub>2</sub> · V<sub>2</sub></div>
      <div class="vi-du"><b>Ví dụ.</b> Pha 250,0 mL dung dịch NaCl 0,100 M (M = 58,44).<br>
        m = 0,100 × 0,2500 × 58,44 = <b>1,461 g</b>. Cân, hòa tan rồi định mức tới vạch trong bình định mức 250 mL.</div>

      <h3>3. Sai số trong phân tích</h3>
      <ul>
        <li><b>Sai số tuyệt đối</b>: E = x − μ (μ: giá trị thật). <b>Sai số tương đối</b>: E / μ × 100%.</li>
        <li><b>Sai số hệ thống</b>: lệch về một phía, có nguyên nhân xác định (dụng cụ chưa hiệu chuẩn, hóa chất không tinh khiết, phương pháp). Quyết định <b>độ đúng</b>.</li>
        <li><b>Sai số ngẫu nhiên</b>: lệch không theo quy luật, giảm bằng cách làm lặp lại nhiều lần. Quyết định <b>độ chụm</b> (độ lặp lại).</li>
        <li><b>Sai số thô</b>: do nhầm lẫn, cần phát hiện và loại bỏ.</li>
      </ul>

      <h3>4. Xử lí thống kê số liệu</h3>
      <div class="cong-thuc">Trung bình: x̄ = Σx<sub>i</sub> / n</div>
      <div class="cong-thuc">Độ lệch chuẩn: s = √[ Σ(x<sub>i</sub> − x̄)<sup>2</sup> / (n − 1) ]</div>
      <div class="cong-thuc">Độ lệch chuẩn tương đối: RSD = s / x̄ × 100%</div>
      <div class="cong-thuc">Khoảng tin cậy: μ = x̄ ± t · s / √n &nbsp;(t tra bảng Student, bậc tự do n − 1)</div>
      <div class="cong-thuc">Loại số liệu ngờ (chuẩn Q): Q = |x<sub>ngờ</sub> − x<sub>gần nhất</sub>| / (x<sub>max</sub> − x<sub>min</sub>)</div>
      <p>Nếu Q<sub>tính</sub> &gt; Q<sub>bảng</sub> thì loại giá trị ngờ.</p>
      <div class="vi-du"><b>Ví dụ.</b> Kết quả 4 lần đo: 10,12 ; 10,15 ; 10,10 ; 10,14.<br>
        x̄ = 10,13 ; s = 0,022 ; RSD = 0,22%<br>
        Khoảng tin cậy 95% (t = 3,18 với 3 bậc tự do): μ = 10,13 ± 3,18 × 0,022 / √4 = <b>10,13 ± 0,04</b></div>

      <h3>5. Chữ số có nghĩa</h3>
      <ul>
        <li><b>Cộng, trừ</b>: kết quả giữ số chữ số thập phân bằng số hạng có ít chữ số thập phân nhất.</li>
        <li><b>Nhân, chia</b>: kết quả giữ số chữ số có nghĩa bằng số hạng có ít chữ số có nghĩa nhất.</li>
        <li><b>Logarit</b>: số chữ số thập phân của pH bằng số chữ số có nghĩa của [H<sup>+</sup>]. Ví dụ [H<sup>+</sup>] = 1,3·10<sup>−3</sup> M → pH = 2,89.</li>
      </ul>
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
    ten: "Cân bằng acid – base",
    moTa: "pH, Ka, Kb, muối, dung dịch đệm, đa acid",
    lyThuyet: `
      <h3>1. Thuyết acid – base Brønsted</h3>
      <ul>
        <li><b>Acid</b>: chất cho proton H<sup>+</sup>. <b>Base</b>: chất nhận proton.</li>
        <li>Cặp acid – base liên hợp: HA / A<sup>−</sup> (ví dụ CH<sub>3</sub>COOH / CH<sub>3</sub>COO<sup>−</sup>, NH<sub>4</sub><sup>+</sup> / NH<sub>3</sub>).</li>
        <li>Nước là chất lưỡng tính.</li>
      </ul>
      <div class="cong-thuc">K<sub>w</sub> = [H<sup>+</sup>][OH<sup>−</sup>] = 10<sup>−14</sup> (25 °C)</div>
      <div class="cong-thuc">pH = −lg[H<sup>+</sup>] ; pOH = −lg[OH<sup>−</sup>] ; pH + pOH = 14</div>

      <h3>2. Hằng số acid, hằng số base</h3>
      <div class="cong-thuc">HA ⇌ H<sup>+</sup> + A<sup>−</sup> &nbsp;&nbsp; K<sub>a</sub> = [H<sup>+</sup>][A<sup>−</sup>] / [HA]</div>
      <div class="cong-thuc">A<sup>−</sup> + H<sub>2</sub>O ⇌ HA + OH<sup>−</sup> &nbsp;&nbsp; K<sub>b</sub> = [HA][OH<sup>−</sup>] / [A<sup>−</sup>]</div>
      <div class="cong-thuc">Cặp liên hợp: K<sub>a</sub> · K<sub>b</sub> = K<sub>w</sub> → pK<sub>a</sub> + pK<sub>b</sub> = 14</div>
      <p>K<sub>a</sub> càng lớn (pK<sub>a</sub> càng nhỏ) thì acid càng mạnh, base liên hợp càng yếu.</p>

      <h3>3. pH của acid mạnh, base mạnh</h3>
      <div class="cong-thuc">Acid mạnh: [H<sup>+</sup>] = C<sub>a</sub> &nbsp;;&nbsp; Base mạnh: [OH<sup>−</sup>] = C<sub>b</sub></div>
      <p class="luu-y">Khi C<sub>a</sub> &lt; 10<sup>−6</sup> M phải tính cả H<sup>+</sup> do nước phân li:
        [H<sup>+</sup>] = ( C<sub>a</sub> + √(C<sub>a</sub><sup>2</sup> + 4K<sub>w</sub>) ) / 2. Ví dụ HCl 10<sup>−8</sup> M có pH = 6,98 (không phải 8).</p>

      <h3>4. pH của acid yếu đơn chức</h3>
      <p><b>Kiểm tra điều kiện trước (quy tắc 5%):</b></p>
      <div class="cong-thuc">C<sub>a</sub> / K<sub>a</sub> ≥ 400 → [H<sup>+</sup>] = √(K<sub>a</sub> · C<sub>a</sub>)</div>
      <div class="cong-thuc">C<sub>a</sub> / K<sub>a</sub> &lt; 400 → giải: [H<sup>+</sup>]<sup>2</sup> + K<sub>a</sub>[H<sup>+</sup>] − K<sub>a</sub>C<sub>a</sub> = 0<br>
        [H<sup>+</sup>] = ( −K<sub>a</sub> + √(K<sub>a</sub><sup>2</sup> + 4K<sub>a</sub>C<sub>a</sub>) ) / 2</div>
      <div class="cong-thuc">Độ điện li: α = [H<sup>+</sup>] / C<sub>a</sub></div>
      <div class="vi-du"><b>Ví dụ 1.</b> CH<sub>3</sub>COOH 0,10 M, pK<sub>a</sub> = 4,76.<br>
        K<sub>a</sub> = 1,74·10<sup>−5</sup> ; C<sub>a</sub>/K<sub>a</sub> ≈ 5.750 ≥ 400 → dùng công thức căn.<br>
        [H<sup>+</sup>] = √(1,74·10<sup>−5</sup> × 0,10) = 1,32·10<sup>−3</sup> M → <b>pH = 2,88</b></div>
      <div class="vi-du"><b>Ví dụ 2.</b> ClCH<sub>2</sub>COOH 0,010 M, pK<sub>a</sub> = 2,86.<br>
        K<sub>a</sub> = 1,38·10<sup>−3</sup> ; C<sub>a</sub>/K<sub>a</sub> ≈ 7,2 &lt; 400 → phải giải phương trình bậc hai.<br>
        [H<sup>+</sup>] = ( −1,38·10<sup>−3</sup> + √((1,38·10<sup>−3</sup>)<sup>2</sup> + 4 × 1,38·10<sup>−3</sup> × 0,010) ) / 2 = 3,09·10<sup>−3</sup> M → <b>pH = 2,51</b><br>
        (Nếu dùng nhầm công thức căn sẽ ra pH = 2,43 — sai.)</div>

      <h3>5. pH của base yếu đơn chức</h3>
      <div class="cong-thuc">C<sub>b</sub> / K<sub>b</sub> ≥ 400 → [OH<sup>−</sup>] = √(K<sub>b</sub> · C<sub>b</sub>)</div>
      <div class="cong-thuc">C<sub>b</sub> / K<sub>b</sub> &lt; 400 → [OH<sup>−</sup>] = ( −K<sub>b</sub> + √(K<sub>b</sub><sup>2</sup> + 4K<sub>b</sub>C<sub>b</sub>) ) / 2</div>
      <p>Tính pOH rồi suy ra pH = 14 − pOH.</p>

      <h3>6. pH của dung dịch muối</h3>
      <ul>
        <li>Muối của acid yếu + base mạnh (CH<sub>3</sub>COONa, NaCN...): anion là <b>base yếu</b>, K<sub>b</sub> = K<sub>w</sub> / K<sub>a</sub> → pH &gt; 7.</li>
        <li>Muối của base yếu + acid mạnh (NH<sub>4</sub>Cl...): cation là <b>acid yếu</b> → pH &lt; 7.</li>
        <li>Muối của acid mạnh + base mạnh (NaCl, KNO<sub>3</sub>): pH = 7.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ.</b> CH<sub>3</sub>COONa 0,10 M (pK<sub>a</sub> = 4,76).<br>
        pK<sub>b</sub> = 9,24 → K<sub>b</sub> = 5,75·10<sup>−10</sup><br>
        [OH<sup>−</sup>] = √(5,75·10<sup>−10</sup> × 0,10) = 7,58·10<sup>−6</sup> M → pOH = 5,12 → <b>pH = 8,88</b></div>

      <h3>7. Dung dịch đệm</h3>
      <p>Hỗn hợp acid yếu HA và base liên hợp A<sup>−</sup> (hoặc base yếu và acid liên hợp), giữ pH gần như không đổi khi thêm ít acid/base mạnh hoặc pha loãng.</p>
      <div class="cong-thuc">pH = pK<sub>a</sub> + lg( C<sub>A⁻</sub> / C<sub>HA</sub> ) &nbsp;(Henderson – Hasselbalch)</div>
      <ul>
        <li>Dùng được khi C<sub>HA</sub>, C<sub>A⁻</sub> lớn hơn nhiều so với [H<sup>+</sup>] và [OH<sup>−</sup>].</li>
        <li>Khoảng đệm hiệu quả: pH = pK<sub>a</sub> ± 1. Đệm mạnh nhất khi C<sub>A⁻</sub> = C<sub>HA</sub> (pH = pK<sub>a</sub>).</li>
      </ul>
      <div class="vi-du"><b>Ví dụ.</b> CH<sub>3</sub>COOH 0,10 M + CH<sub>3</sub>COONa 0,20 M.<br>
        pH = 4,76 + lg(0,20 / 0,10) = <b>5,06</b></div>

      <h3>8. Acid đa chức và chất lưỡng tính</h3>
      <ul>
        <li>Acid đa chức (H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>CO<sub>3</sub>...) phân li theo từng nấc, K<sub>a1</sub> &gt; K<sub>a2</sub> &gt; K<sub>a3</sub>. Khi các hằng số cách nhau xa (K<sub>a1</sub>/K<sub>a2</sub> ≥ 10<sup>4</sup>), tính pH gần đúng theo nấc 1 như acid đơn chức.</li>
        <li>Chất lưỡng tính (NaHCO<sub>3</sub>, NaH<sub>2</sub>PO<sub>4</sub>...):</li>
      </ul>
      <div class="cong-thuc">pH ≈ ( pK<sub>a1</sub> + pK<sub>a2</sub> ) / 2</div>
      <div class="vi-du"><b>Ví dụ.</b> NaHCO<sub>3</sub>: pH ≈ (6,35 + 10,33) / 2 = <b>8,34</b></div>
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
      <h3>1. Khái niệm</h3>
      <ul>
        <li><b>Phức chất</b> gồm ion trung tâm (thường là ion kim loại) liên kết với các <b>phối tử</b> (NH<sub>3</sub>, CN<sup>−</sup>, Cl<sup>−</sup>, EDTA...).</li>
        <li><b>Số phối trí</b>: số liên kết mà ion trung tâm tạo với phối tử.</li>
        <li><b>Phức chelat</b>: phối tử có nhiều nhóm cho electron, "kẹp" ion kim loại thành vòng → rất bền (ví dụ phức với EDTA).</li>
      </ul>

      <h3>2. Hằng số bền</h3>
      <div class="cong-thuc">Từng nấc: M + L ⇌ ML &nbsp; K<sub>1</sub> = [ML] / ([M][L])<br>
        ML + L ⇌ ML<sub>2</sub> &nbsp; K<sub>2</sub> = [ML<sub>2</sub>] / ([ML][L]) ...</div>
      <div class="cong-thuc">Tổng hợp: β<sub>n</sub> = K<sub>1</sub> · K<sub>2</sub> ··· K<sub>n</sub> = [ML<sub>n</sub>] / ([M][L]<sup>n</sup>)</div>
      <div class="cong-thuc">Hằng số không bền: K<sub>kb</sub> = 1 / β</div>
      <p>β càng lớn (lgβ càng lớn) thì phức càng bền.</p>

      <h3>3. EDTA và hằng số bền điều kiện</h3>
      <ul>
        <li>EDTA là acid 4 chức, kí hiệu H<sub>4</sub>Y. Dạng tạo phức là Y<sup>4−</sup>.</li>
        <li>Tạo phức với hầu hết ion kim loại theo tỉ lệ <b>1 : 1</b>, không phụ thuộc điện tích ion: M<sup>n+</sup> + Y<sup>4−</sup> ⇌ MY<sup>(n−4)+</sup>.</li>
        <li>Ở pH thấp, Y<sup>4−</sup> bị proton hóa (thành HY<sup>3−</sup>, H<sub>2</sub>Y<sup>2−</sup>...) nên phức kém bền. Vì vậy phải giữ pH bằng dung dịch đệm.</li>
      </ul>
      <div class="cong-thuc">α<sub>Y⁴⁻</sub> = [Y<sup>4−</sup>] / C<sub>Y</sub> &nbsp;(tăng khi pH tăng)</div>
      <div class="cong-thuc">β' = β · α<sub>Y⁴⁻</sub> &nbsp;↔&nbsp; lgβ' = lgβ + lgα<sub>Y⁴⁻</sub></div>
      <p>Điều kiện chuẩn độ được chính xác (sai số ≤ 0,1%): lg(C<sub>M</sub> · β') ≥ 6.</p>
      <div class="vi-du"><b>Ví dụ.</b> Phức CaY<sup>2−</sup> có lgβ = 10,69. Ở pH = 10, α<sub>Y⁴⁻</sub> ≈ 0,35.<br>
        lgβ' = 10,69 + lg0,35 = <b>10,24</b>. Với C<sub>Ca</sub> = 0,01 M: lg(C·β') = 8,24 ≥ 6 → chuẩn độ được.</div>

      <h3>4. Chuẩn độ complexon (EDTA)</h3>
      <div class="cong-thuc">n<sub>M</sub> = n<sub>EDTA</sub> → C<sub>M</sub> · V<sub>M</sub> = C<sub>EDTA</sub> · V<sub>EDTA</sub></div>
      <p><b>Chỉ thị kim loại</b>: chất màu tạo phức với ion kim loại, phức này kém bền hơn phức với EDTA. Tại điểm tương đương, EDTA "giật" ion kim loại khỏi chỉ thị → dung dịch đổi sang màu của chỉ thị tự do.</p>
      <ul>
        <li><b>ET-OO</b> (Eriochrome đen T), pH 10: đỏ nho → xanh chàm. Dùng xác định Mg<sup>2+</sup>, Zn<sup>2+</sup>, tổng Ca<sup>2+</sup> + Mg<sup>2+</sup>.</li>
        <li><b>Murexit</b>, pH 12: hồng → tím. Dùng xác định riêng Ca<sup>2+</sup> (Mg<sup>2+</sup> đã kết tủa thành Mg(OH)<sub>2</sub>).</li>
      </ul>
      <p><b>Các kiểu chuẩn độ</b>: trực tiếp; ngược (thêm dư EDTA, chuẩn lượng dư bằng Mg<sup>2+</sup> hoặc Zn<sup>2+</sup>); thế (dùng MgY<sup>2−</sup> giải phóng Mg<sup>2+</sup>).</p>
      <p><b>Độ cứng của nước</b>: tổng Ca<sup>2+</sup> + Mg<sup>2+</sup>, thường quy về mg CaCO<sub>3</sub>/L.</p>
      <div class="vi-du"><b>Ví dụ.</b> Chuẩn độ 50,00 mL nước ở pH 10 (chỉ thị ET-OO) hết 8,40 mL EDTA 0,01000 M.<br>
        n = 0,01000 × 8,40·10<sup>−3</sup> = 8,40·10<sup>−5</sup> mol<br>
        Độ cứng = 8,40·10<sup>−5</sup> × 100,09 × 1000 / 0,05000 ≈ <b>168 mg CaCO<sub>3</sub>/L</b></div>
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
      <p>Với chất ít tan M<sub>m</sub>A<sub>n</sub> (rắn) ⇌ mM<sup>n+</sup> + nA<sup>m−</sup>:</p>
      <div class="cong-thuc">K<sub>sp</sub> = [M]<sup>m</sup> · [A]<sup>n</sup> &nbsp;(chỉ phụ thuộc nhiệt độ)</div>

      <h3>2. Độ tan s (mol/L) trong nước</h3>
      <div class="cong-thuc">[M] = m·s ; [A] = n·s → K<sub>sp</sub> = m<sup>m</sup> · n<sup>n</sup> · s<sup>m+n</sup></div>
      <div class="cong-thuc">s = ( K<sub>sp</sub> / (m<sup>m</sup> · n<sup>n</sup>) )<sup>1/(m+n)</sup></div>
      <div class="cong-thuc">Dạng MA (AgCl, BaSO<sub>4</sub>): s = √K<sub>sp</sub> &nbsp;;&nbsp; Dạng M<sub>2</sub>A (Ag<sub>2</sub>CrO<sub>4</sub>): s = ∛(K<sub>sp</sub>/4)</div>
      <div class="vi-du"><b>Ví dụ.</b> AgCl (K<sub>sp</sub> = 1,8·10<sup>−10</sup>): s = 1,3·10<sup>−5</sup> M<br>
        Ag<sub>2</sub>CrO<sub>4</sub> (K<sub>sp</sub> = 1,1·10<sup>−12</sup>): s = ∛(1,1·10<sup>−12</sup> / 4) = 6,5·10<sup>−5</sup> M<br>
        → Ag<sub>2</sub>CrO<sub>4</sub> có K<sub>sp</sub> <b>nhỏ hơn</b> nhưng lại tan <b>nhiều hơn</b> AgCl.</div>
      <p class="luu-y">Chỉ được so sánh độ tan qua K<sub>sp</sub> khi các chất có cùng dạng công thức. Khác dạng thì phải tính s.</p>

      <h3>3. Điều kiện tạo kết tủa và kết tủa phân đoạn</h3>
      <ul>
        <li>Tích ion Q &gt; K<sub>sp</sub>: có kết tủa. Q = K<sub>sp</sub>: dung dịch bão hòa. Q &lt; K<sub>sp</sub>: chưa kết tủa.</li>
        <li><b>Kết tủa phân đoạn</b>: khi thêm dần thuốc thử vào hỗn hợp nhiều ion, chất nào cần nồng độ thuốc thử <b>nhỏ hơn</b> để đạt K<sub>sp</sub> thì kết tủa trước.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ.</b> Dung dịch chứa Cl<sup>−</sup> 0,010 M và CrO<sub>4</sub><sup>2−</sup> 0,010 M, thêm dần Ag<sup>+</sup>.<br>
        AgCl bắt đầu kết tủa khi [Ag<sup>+</sup>] = 1,8·10<sup>−10</sup> / 0,010 = 1,8·10<sup>−8</sup> M<br>
        Ag<sub>2</sub>CrO<sub>4</sub> bắt đầu kết tủa khi [Ag<sup>+</sup>] = √(1,1·10<sup>−12</sup> / 0,010) = 1,0·10<sup>−5</sup> M<br>
        → <b>AgCl kết tủa trước</b>. Đây là cơ sở của phương pháp Mohr.</div>

      <h3>4. Các yếu tố ảnh hưởng đến độ tan</h3>
      <ul>
        <li><b>Ion chung</b>: làm giảm độ tan. Ví dụ AgCl trong NaCl 0,010 M: s = K<sub>sp</sub> / 0,010 = 1,8·10<sup>−8</sup> M.</li>
        <li><b>pH</b>: kết tủa là hydroxide hoặc muối của acid yếu (CaC<sub>2</sub>O<sub>4</sub>, CaCO<sub>3</sub>...) tan nhiều hơn trong môi trường acid.</li>
        <li><b>Tạo phức</b>: làm tăng độ tan. Ví dụ AgCl tan trong NH<sub>3</sub> do tạo [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>.</li>
        <li><b>Lực ion (hiệu ứng muối)</b>: có mặt chất điện li lạ làm độ tan tăng nhẹ.</li>
      </ul>

      <h3>5. Chuẩn độ kết tủa (phương pháp bạc)</h3>
      <ul>
        <li><b>Mohr</b>: chuẩn độ trực tiếp Cl<sup>−</sup>, Br<sup>−</sup> bằng AgNO<sub>3</sub>, chỉ thị K<sub>2</sub>CrO<sub>4</sub>. Điểm cuối: xuất hiện kết tủa đỏ gạch Ag<sub>2</sub>CrO<sub>4</sub>. Môi trường trung tính hoặc kiềm yếu (pH 6,5 – 10).</li>
        <li><b>Volhard</b>: chuẩn độ ngược. Thêm dư AgNO<sub>3</sub>, chuẩn lượng Ag<sup>+</sup> dư bằng SCN<sup>−</sup>, chỉ thị Fe<sup>3+</sup> (điểm cuối: màu đỏ của FeSCN<sup>2+</sup>). Môi trường HNO<sub>3</sub>.</li>
        <li><b>Fajans</b>: dùng chỉ thị hấp phụ (fluorescein, eosin): chỉ thị bám lên bề mặt kết tủa và đổi màu tại điểm tương đương.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ (Mohr).</b> Chuẩn độ 25,00 mL NaCl hết 18,60 mL AgNO<sub>3</sub> 0,05000 M.<br>
        C<sub>NaCl</sub> = 0,05000 × 18,60 / 25,00 = <b>0,03720 M</b></div>
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
    moTa: "Nernst, hằng số cân bằng, các phương pháp chuẩn độ",
    lyThuyet: `
      <h3>1. Khái niệm</h3>
      <ul>
        <li><b>Chất oxi hóa</b> nhận electron, <b>chất khử</b> cho electron. Mỗi cặp oxi hóa – khử viết là Ox/Kh: Ox + ne ⇌ Kh.</li>
        <li>Thế điện cực chuẩn E° càng lớn thì dạng Ox càng mạnh. E° càng nhỏ thì dạng Kh càng mạnh.</li>
        <li>Phản ứng xảy ra theo chiều: Ox mạnh + Kh mạnh → Ox yếu + Kh yếu (cặp có E lớn hơn oxi hóa cặp có E nhỏ hơn).</li>
      </ul>

      <h3>2. Phương trình Nernst (25 °C)</h3>
      <div class="cong-thuc">Ox + ne ⇌ Kh: &nbsp; E = E° + (0,0592 / n) · lg( [Ox] / [Kh] )</div>
      <div class="cong-thuc">Tổng quát aOx + mH<sup>+</sup> + ne ⇌ bKh + ...:<br>
        E = E° + (0,0592 / n) · lg( [Ox]<sup>a</sup>[H<sup>+</sup>]<sup>m</sup> / [Kh]<sup>b</sup> )</div>
      <p>Chất rắn và nước không đưa vào biểu thức.</p>
      <div class="vi-du"><b>Ví dụ.</b> MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e ⇌ Mn<sup>2+</sup> + 4H<sub>2</sub>O (E° = 1,51 V). Tính E khi [MnO<sub>4</sub><sup>−</sup>] = [Mn<sup>2+</sup>] và pH = 1.<br>
        E = 1,51 + (0,0592 / 5) · lg(10<sup>−1</sup>)<sup>8</sup> = 1,51 − 0,095 = <b>1,42 V</b><br>
        → pH càng tăng, KMnO<sub>4</sub> oxi hóa càng yếu.</div>

      <h3>3. Thế điều kiện E°'</h3>
      <p>Thế đo được khi C<sub>Ox</sub> = C<sub>Kh</sub> = 1 M trong một môi trường cụ thể (pH, chất tạo phức, chất tạo kết tủa). Ví dụ: tạo phức với Fe<sup>3+</sup> (bằng F<sup>−</sup>, PO<sub>4</sub><sup>3−</sup>) làm E' của cặp Fe<sup>3+</sup>/Fe<sup>2+</sup> giảm.</p>

      <h3>4. Hằng số cân bằng</h3>
      <div class="cong-thuc">lg K = n · (E°<sub>1</sub> − E°<sub>2</sub>) / 0,0592</div>
      <p>E°<sub>1</sub>: cặp của chất oxi hóa; E°<sub>2</sub>: cặp của chất khử; n: tổng số electron trao đổi (bội số chung nhỏ nhất của n<sub>1</sub> và n<sub>2</sub>).</p>

      <h3>5. Thế tại điểm tương đương</h3>
      <div class="cong-thuc">E<sub>tđ</sub> = ( n<sub>1</sub>E°<sub>1</sub> + n<sub>2</sub>E°<sub>2</sub> ) / ( n<sub>1</sub> + n<sub>2</sub> )</div>
      <p>(áp dụng khi H<sup>+</sup> không tham gia phản ứng và hệ số các chất đều bằng 1)</p>
      <div class="vi-du"><b>Ví dụ.</b> Chuẩn độ Fe<sup>2+</sup> bằng Ce<sup>4+</sup> trong H<sub>2</sub>SO<sub>4</sub> 1 M (E°' Ce<sup>4+</sup>/Ce<sup>3+</sup> = 1,44 V; E° Fe<sup>3+</sup>/Fe<sup>2+</sup> = 0,77 V).<br>
        lg K = (1,44 − 0,77) / 0,0592 = 11,3 → phản ứng gần như hoàn toàn.<br>
        E<sub>tđ</sub> = (0,77 + 1,44) / 2 = <b>1,11 V</b></div>

      <h3>6. Các phương pháp chuẩn độ oxi hóa – khử</h3>
      <ul>
        <li><b>Pemanganat</b>: KMnO<sub>4</sub> trong H<sub>2</sub>SO<sub>4</sub> (không dùng HCl vì Cl<sup>−</sup> bị oxi hóa). Tự chỉ thị: dư 1 giọt cho màu hồng nhạt. KMnO<sub>4</sub> không phải chất gốc, phải chuẩn hóa bằng H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> hoặc Na<sub>2</sub>C<sub>2</sub>O<sub>4</sub>.<br>
          MnO<sub>4</sub><sup>−</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> → Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O</li>
        <li><b>Dicromat</b>: K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> là chất chuẩn gốc, dung dịch rất bền. Chỉ thị diphenylamin. Dùng định lượng Fe<sup>2+</sup>, xác định COD.<br>
          Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 6Fe<sup>2+</sup> + 14H<sup>+</sup> → 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup> + 7H<sub>2</sub>O</li>
        <li><b>Iot – thiosunfat</b>: chỉ thị hồ tinh bột (thêm khi gần điểm cuối, lúc dung dịch vàng nhạt).<br>
          I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup><br>
          Chuẩn độ <b>gián tiếp</b>: chất oxi hóa + I<sup>−</sup> dư → giải phóng I<sub>2</sub>, rồi chuẩn độ I<sub>2</sub> bằng Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ (iot gián tiếp).</b> 25,00 mL dung dịch Cu<sup>2+</sup> + KI dư, I<sub>2</sub> sinh ra phản ứng vừa đủ 12,50 mL Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> 0,1000 M.<br>
        2Cu<sup>2+</sup> + 4I<sup>−</sup> → 2CuI + I<sub>2</sub> ; I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → ... ⇒ n<sub>Cu²⁺</sub> = n<sub>S₂O₃²⁻</sub><br>
        C<sub>Cu²⁺</sub> = 0,1000 × 12,50 / 25,00 = <b>0,05000 M</b></div>
    `,
    baiTap: [
      {
        de: "Tính thế của cặp Fe<sup>3+</sup>/Fe<sup>2+</sup> khi [Fe<sup>3+</sup>] = 0,10 M; [Fe<sup>2+</sup>] = 0,010 M (E° = 0,77 V).",
        dapAn: "E = 0,77 + 0,0592 × lg(0,10 / 0,010) = 0,77 + 0,0592 = <b>0,83 V</b>",
      },
      {
        de: "Chuẩn độ 20,00 mL dung dịch Fe<sup>2+</sup> bằng KMnO<sub>4</sub> 0,02000 M trong môi trường acid thì hết 15,00 mL. Tính nồng độ Fe<sup>2+</sup>.",
        dapAn: "n<sub>MnO₄⁻</sub> = 0,02000 × 0,01500 = 3,000·10<sup>−4</sup> mol<br>n<sub>Fe²⁺</sub> = 5 × 3,000·10<sup>−4</sup> = 1,500·10<sup>−3</sup> mol<br>C = 1,500·10<sup>−3</sup> / 0,02000 = <b>0,07500 M</b>",
      },
    ],
  },
  {
    id: "chuan-do",
    icon: "🧪",
    ten: "Phân tích thể tích (chuẩn độ)",
    moTa: "Chất gốc, kiểu chuẩn độ, đường chuẩn độ, chỉ thị",
    lyThuyet: `
      <h3>1. Khái niệm</h3>
      <ul>
        <li><b>Chuẩn độ</b>: thêm từ từ dung dịch đã biết chính xác nồng độ (dung dịch chuẩn, trong buret) vào dung dịch chất cần xác định cho tới khi phản ứng vừa đủ.</li>
        <li><b>Điểm tương đương</b>: lúc lượng thuốc thử thêm vào đúng bằng lượng cần theo phương trình phản ứng (lí thuyết).</li>
        <li><b>Điểm cuối chuẩn độ</b>: lúc chỉ thị đổi màu, ta dừng chuẩn độ (thực tế). Chênh lệch giữa hai điểm gây ra <b>sai số chỉ thị</b>.</li>
      </ul>
      <p><b>Yêu cầu của phản ứng chuẩn độ</b>: xảy ra nhanh, gần như hoàn toàn, đúng hệ số tỉ lượng và có cách phát hiện điểm tương đương.</p>

      <h3>2. Chất chuẩn gốc và chuẩn hóa</h3>
      <ul>
        <li><b>Chất chuẩn gốc</b>: tinh khiết, bền, công thức xác định, khối lượng mol lớn. Pha từ chất gốc thì biết ngay nồng độ chính xác.</li>
        <li>Chất không phải chất gốc (NaOH, HCl, KMnO<sub>4</sub>, Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>) phải <b>chuẩn hóa</b> lại nồng độ.</li>
        <li>Ví dụ: chuẩn hóa NaOH bằng H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>·2H<sub>2</sub>O hoặc kali hydrophtalat (KHP); chuẩn hóa HCl bằng Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O (borax) hoặc Na<sub>2</sub>CO<sub>3</sub>.</li>
      </ul>

      <h3>3. Các kiểu chuẩn độ</h3>
      <ul>
        <li><b>Trực tiếp</b>: dung dịch chuẩn phản ứng thẳng với chất cần xác định.</li>
        <li><b>Ngược</b>: thêm một lượng dư chính xác thuốc thử, rồi chuẩn độ lượng dư bằng dung dịch chuẩn khác. Dùng khi phản ứng chậm hoặc không có chỉ thị phù hợp.</li>
        <li><b>Thế</b>: chất cần xác định phản ứng tạo ra một lượng tương đương chất khác, rồi chuẩn độ chất đó.</li>
      </ul>

      <h3>4. Tính kết quả</h3>
      <div class="cong-thuc">aA + bB → sản phẩm: &nbsp; n<sub>A</sub> / a = n<sub>B</sub> / b</div>
      <div class="cong-thuc">Tỉ lệ 1 : 1: C<sub>A</sub> · V<sub>A</sub> = C<sub>B</sub> · V<sub>B</sub></div>
      <div class="cong-thuc">% khối lượng: %X = n<sub>X</sub> · M<sub>X</sub> / m<sub>mẫu</sub> × 100%</div>
      <div class="vi-du"><b>Ví dụ (chuẩn độ ngược).</b> Hòa tan 0,2500 g mẫu đá vôi trong 50,00 mL HCl 0,1000 M. Lượng HCl dư được chuẩn độ hết 10,00 mL NaOH 0,1000 M. Tính %CaCO<sub>3</sub> (M = 100,09).<br>
        n<sub>HCl ban đầu</sub> = 5,000·10<sup>−3</sup> mol ; n<sub>HCl dư</sub> = 1,000·10<sup>−3</sup> mol → n<sub>HCl phản ứng</sub> = 4,000·10<sup>−3</sup> mol<br>
        CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O → n<sub>CaCO₃</sub> = 2,000·10<sup>−3</sup> mol<br>
        %CaCO<sub>3</sub> = 2,000·10<sup>−3</sup> × 100,09 / 0,2500 × 100% = <b>80,07%</b></div>

      <h3>5. Đường chuẩn độ acid – base và chọn chỉ thị</h3>
      <p><b>Đường chuẩn độ</b>: đồ thị pH theo thể tích dung dịch chuẩn. Gần điểm tương đương pH thay đổi đột ngột — gọi là <b>bước nhảy</b>. Chọn chỉ thị có khoảng đổi màu (hay chỉ số pT) nằm trong bước nhảy.</p>
      <ul>
        <li><b>Acid mạnh – base mạnh</b>: pH<sub>tđ</sub> = 7. Với nồng độ 0,1 M, bước nhảy (sai số ±0,1%) từ pH 4,3 đến 9,7 → dùng được metyl đỏ, phenolphtalein, cả metyl da cam.</li>
        <li><b>Acid yếu – base mạnh</b>: pH<sub>tđ</sub> &gt; 7 (tính theo dung dịch muối). Tại điểm nửa tương đương: pH = pK<sub>a</sub>. Thường dùng phenolphtalein.</li>
        <li><b>Base yếu – acid mạnh</b>: pH<sub>tđ</sub> &lt; 7. Thường dùng metyl đỏ, metyl da cam.</li>
        <li>Nồng độ càng loãng, acid/base càng yếu thì bước nhảy càng ngắn. Điều kiện chuẩn độ được acid yếu với sai số nhỏ: C<sub>a</sub> · K<sub>a</sub> ≥ 10<sup>−8</sup>.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ.</b> Chuẩn độ 25,00 mL CH<sub>3</sub>COOH 0,1000 M bằng NaOH 0,1000 M. Tính pH tại điểm tương đương.<br>
        V<sub>NaOH</sub> = 25,00 mL → C<sub>CH₃COONa</sub> = 0,1000 × 25,00 / 50,00 = 0,05000 M<br>
        K<sub>b</sub> = 10<sup>−9,24</sup> = 5,75·10<sup>−10</sup> → [OH<sup>−</sup>] = √(5,75·10<sup>−10</sup> × 0,05000) = 5,36·10<sup>−6</sup> M<br>
        pOH = 5,27 → <b>pH<sub>tđ</sub> = 8,73</b> → chọn phenolphtalein.</div>
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
    moTa: "Dạng kết tủa, dạng cân, hệ số chuyển, độ ẩm",
    lyThuyet: `
      <h3>1. Nguyên tắc</h3>
      <p>Tách chất cần xác định ra khỏi mẫu dưới dạng một hợp chất có thành phần xác định, rồi <b>cân</b> để tính hàm lượng.</p>
      <ul>
        <li><b>Phương pháp kết tủa</b> (hay dùng nhất): hòa tan mẫu → tạo kết tủa → lọc, rửa → sấy/nung → cân.</li>
        <li><b>Phương pháp bay hơi (tách)</b>: làm bay hơi thành phần cần xác định (nước, CO<sub>2</sub>...) rồi cân phần còn lại hoặc phần hấp thụ. Ví dụ xác định độ ẩm, độ tro.</li>
      </ul>

      <h3>2. Dạng kết tủa và dạng cân</h3>
      <ul>
        <li><b>Dạng kết tủa</b>: chất tách ra khỏi dung dịch. Yêu cầu: độ tan rất nhỏ, tinh khiết, dễ lọc và rửa.</li>
        <li><b>Dạng cân</b>: chất đem cân sau khi sấy/nung. Yêu cầu: thành phần đúng công thức, bền ngoài không khí, khối lượng mol càng lớn càng tốt (sai số tương đối nhỏ).</li>
        <li>Hai dạng có thể giống nhau (BaSO<sub>4</sub> → BaSO<sub>4</sub>) hoặc khác nhau (Fe(OH)<sub>3</sub> → nung → Fe<sub>2</sub>O<sub>3</sub>; CaC<sub>2</sub>O<sub>4</sub> → nung → CaO).</li>
      </ul>

      <h3>3. Điều kiện tạo kết tủa tốt</h3>
      <ul>
        <li><b>Kết tủa tinh thể</b> (BaSO<sub>4</sub>, CaC<sub>2</sub>O<sub>4</sub>): kết tủa từ dung dịch loãng, nóng; thêm thuốc thử chậm và khuấy đều; để yên cho kết tủa "muồi" (hạt lớn dần, dễ lọc, ít tạp chất).</li>
        <li><b>Kết tủa vô định hình</b> (Fe(OH)<sub>3</sub>, Al(OH)<sub>3</sub>): kết tủa từ dung dịch đặc, nóng, có chất điện li để keo tụ; lọc ngay, không để muồi.</li>
        <li><b>Cộng kết</b>: tạp chất bị kéo theo vào kết tủa (hấp phụ bề mặt, nội hấp...) gây sai số dương. Hạn chế bằng cách rửa kĩ, kết tủa lại.</li>
      </ul>

      <h3>4. Hệ số chuyển F và tính kết quả</h3>
      <div class="cong-thuc">F = ( a · M<sub>chất cần xác định</sub> ) / ( b · M<sub>dạng cân</sub> )</div>
      <p>a, b chọn sao cho số nguyên tử của nguyên tố cần xác định ở tử và mẫu bằng nhau.</p>
      <div class="cong-thuc">%X = m<sub>dạng cân</sub> · F / m<sub>mẫu</sub> × 100%</div>
      <div class="vi-du"><b>Ví dụ.</b> Phân tích 0,4000 g quặng sắt, thu được 0,2500 g Fe<sub>2</sub>O<sub>3</sub>. Tính %Fe (Fe = 55,845 ; Fe<sub>2</sub>O<sub>3</sub> = 159,69).<br>
        F = 2 × 55,845 / 159,69 = 0,6994<br>
        %Fe = 0,2500 × 0,6994 / 0,4000 × 100% = <b>43,71%</b></div>

      <h3>5. Xác định độ ẩm</h3>
      <div class="cong-thuc">% độ ẩm = ( m<sub>trước sấy</sub> − m<sub>sau sấy</sub> ) / m<sub>trước sấy</sub> × 100%</div>
      <p>Sấy đến <b>khối lượng không đổi</b> (hai lần cân liên tiếp chênh nhau không quá sai số cho phép).</p>
      <div class="vi-du"><b>Ví dụ.</b> 2,0000 g mẫu sau khi sấy đến khối lượng không đổi còn 1,8640 g.<br>
        % độ ẩm = (2,0000 − 1,8640) / 2,0000 × 100% = <b>6,80%</b></div>
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
    ten: "Hằng số acid pKa",
    cot: ["Acid", "pK<sub>a</sub>"],
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
    ten: "Chỉ thị acid – base",
    cot: ["Chỉ thị", "Khoảng pH", "Đổi màu"],
    dong: [
      ["Metyl da cam", "3,1 – 4,4", "đỏ → vàng"],
      ["Metyl đỏ", "4,4 – 6,2", "đỏ → vàng"],
      ["Bromthymol xanh", "6,0 – 7,6", "vàng → xanh lam"],
      ["Phenolphtalein", "8,2 – 10,0", "không màu → hồng"],
    ],
  },
];
