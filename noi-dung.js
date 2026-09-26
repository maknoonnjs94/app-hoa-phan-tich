/* =========================================================
   NỘI DUNG HỌC TẬP của app — sửa/thêm bài ở file này.
   - CHUONG: mỗi chương có lý thuyết (lyThuyet) và bài tập (baiTap).
   - TRA_CUU: các bảng tra cứu.
   Viết chỉ số dưới bằng <sub>, số mũ bằng <sup>. Ví dụ: H<sub>2</sub>O, 10<sup>-14</sup>
   ========================================================= */
const CHUONG = [
  {
    id: "dai-cuong",
    nhom: "Phân tích hóa học",
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
    nhom: "Phân tích hóa học",
    icon: "⚗️",
    ten: "Cân bằng acid – base",
    moTa: "✅ Bản đầy đủ · pH, phân bố, đa acid, lưỡng tính, đệm",
    lyThuyet: `
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Viết được các phương trình cơ sở: bảo toàn nồng độ, bảo toàn điện tích, điều kiện proton.</li>
          <li>Tính pH của acid/base mạnh, yếu, đa chức, chất lưỡng tính, hỗn hợp và dung dịch đệm.</li>
          <li>Biết khi nào được dùng công thức gần đúng và khi nào phải giải chính xác.</li>
        </ul>
      </div>

      <h3>1. Thuyết acid – base Brønsted – Lowry</h3>
      <ul>
        <li><b>Acid</b> là chất cho proton (H<sup>+</sup>), <b>base</b> là chất nhận proton.</li>
        <li>Mỗi acid khi cho proton tạo thành base liên hợp của nó, và ngược lại:
          <div class="cong-thuc">Acid ⇌ H<sup>+</sup> + Base liên hợp</div>
          Ví dụ: CH<sub>3</sub>COOH / CH<sub>3</sub>COO<sup>−</sup> ; NH<sub>4</sub><sup>+</sup> / NH<sub>3</sub> ; H<sub>2</sub>PO<sub>4</sub><sup>−</sup> / HPO<sub>4</sub><sup>2−</sup></li>
        <li>Proton không tồn tại tự do trong nước mà kết hợp với nước thành H<sub>3</sub>O<sup>+</sup>. Để gọn, ta vẫn viết H<sup>+</sup>.</li>
        <li><b>Chất lưỡng tính</b>: vừa cho vừa nhận được proton (H<sub>2</sub>O, HCO<sub>3</sub><sup>−</sup>, H<sub>2</sub>PO<sub>4</sub><sup>−</sup>, amino acid...).</li>
      </ul>
      <p><b>Sự tự proton phân của nước:</b></p>
      <div class="cong-thuc">H<sub>2</sub>O ⇌ H<sup>+</sup> + OH<sup>−</sup> &nbsp;&nbsp; K<sub>w</sub> = [H<sup>+</sup>][OH<sup>−</sup>] = 1,0·10<sup>−14</sup> (25 °C)</div>
      <div class="cong-thuc">pH = −lg[H<sup>+</sup>] &nbsp;;&nbsp; pOH = −lg[OH<sup>−</sup>] &nbsp;;&nbsp; pH + pOH = pK<sub>w</sub> = 14,00</div>
      <p>K<sub>w</sub> tăng theo nhiệt độ, nên dung dịch trung tính không phải lúc nào cũng có pH = 7:</p>
      <div class="bang-cuon">
        <table class="bang">
          <thead><tr><th>Nhiệt độ</th><th>pK<sub>w</sub></th><th>pH trung tính</th></tr></thead>
          <tbody>
            <tr><td>0 °C</td><td>14,94</td><td>7,47</td></tr>
            <tr><td>25 °C</td><td>14,00</td><td>7,00</td></tr>
            <tr><td>50 °C</td><td>13,26</td><td>6,63</td></tr>
            <tr><td>100 °C</td><td>12,26</td><td>6,13</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Nói chính xác, pH = −lg a<sub>H⁺</sub> (a: hoạt độ). Trong chương này ta xét dung dịch loãng, coi hoạt độ bằng nồng độ.</p>

      <h3>2. Hằng số acid K<sub>a</sub> và hằng số base K<sub>b</sub></h3>
      <div class="cong-thuc">HA ⇌ H<sup>+</sup> + A<sup>−</sup> &nbsp;&nbsp; K<sub>a</sub> = [H<sup>+</sup>][A<sup>−</sup>] / [HA]</div>
      <div class="cong-thuc">A<sup>−</sup> + H<sub>2</sub>O ⇌ HA + OH<sup>−</sup> &nbsp;&nbsp; K<sub>b</sub> = [HA][OH<sup>−</sup>] / [A<sup>−</sup>]</div>
      <div class="cong-thuc">Cặp liên hợp: K<sub>a</sub> · K<sub>b</sub> = K<sub>w</sub> &nbsp;↔&nbsp; pK<sub>a</sub> + pK<sub>b</sub> = 14</div>
      <ul>
        <li>pK<sub>a</sub> càng <b>nhỏ</b> thì acid càng <b>mạnh</b>, và base liên hợp của nó càng yếu.</li>
        <li><b>Acid mạnh</b> (HCl, HBr, HI, HNO<sub>3</sub>, HClO<sub>4</sub>, nấc 1 của H<sub>2</sub>SO<sub>4</sub>) coi như phân li hoàn toàn trong nước.</li>
        <li><b>Base mạnh</b>: NaOH, KOH, Ba(OH)<sub>2</sub>...</li>
        <li>Acid đa chức phân li theo từng nấc với K<sub>a1</sub> &gt; K<sub>a2</sub> &gt; K<sub>a3</sub>. Với base liên hợp: K<sub>b1</sub> = K<sub>w</sub>/K<sub>a,cuối</sub>.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 1.</b> Tính K<sub>b</sub> của CO<sub>3</sub><sup>2−</sup>, biết H<sub>2</sub>CO<sub>3</sub> có pK<sub>a1</sub> = 6,35 ; pK<sub>a2</sub> = 10,33.
        <details><summary>Xem lời giải</summary>
          CO<sub>3</sub><sup>2−</sup> là base liên hợp của HCO<sub>3</sub><sup>−</sup> (nấc 2), nên:<br>
          pK<sub>b1</sub> = 14 − pK<sub>a2</sub> = 14 − 10,33 = 3,67 → K<sub>b1</sub> = <b>2,14·10<sup>−4</sup></b>
        </details></div>

      <h3>3. Các phương trình cơ sở</h3>
      <p>Mọi bài tính pH chính xác đều dựa trên ba loại phương trình sau, kết hợp với các biểu thức hằng số cân bằng.</p>
      <p><b>a) Định luật bảo toàn nồng độ</b>: tổng nồng độ các dạng của một cấu tử bằng nồng độ ban đầu.</p>
      <div class="cong-thuc">Dung dịch HA nồng độ C: &nbsp; C = [HA] + [A<sup>−</sup>]</div>
      <p><b>b) Định luật bảo toàn điện tích</b>: dung dịch trung hòa điện.</p>
      <div class="cong-thuc">Dung dịch HA: &nbsp; [H<sup>+</sup>] = [A<sup>−</sup>] + [OH<sup>−</sup>]</div>
      <p><b>c) Điều kiện proton (ĐKP)</b>: tổng proton các chất đã cho bằng tổng proton các chất đã nhận, so với một <b>mức không</b> được chọn (thường là các chất ban đầu và H<sub>2</sub>O).</p>
      <div class="cong-thuc">Dung dịch HA, mức không là HA và H<sub>2</sub>O:<br>
        [H<sup>+</sup>] = [A<sup>−</sup>] + [OH<sup>−</sup>]</div>
      <div class="cong-thuc">Dung dịch NaHCO<sub>3</sub>, mức không là HCO<sub>3</sub><sup>−</sup> và H<sub>2</sub>O:<br>
        [H<sup>+</sup>] + [H<sub>2</sub>CO<sub>3</sub>] = [CO<sub>3</sub><sup>2−</sup>] + [OH<sup>−</sup>]</div>
      <p class="luu-y">Mẹo viết ĐKP: vế trái là các chất có <b>nhiều proton hơn</b> mức không (H<sup>+</sup>, H<sub>2</sub>CO<sub>3</sub>), vế phải là các chất có <b>ít proton hơn</b> (OH<sup>−</sup>, CO<sub>3</sub><sup>2−</sup>). Nếu chất mất/nhận 2 proton thì nhân hệ số 2.</p>

      <h3>4. Phân số mol các dạng và giản đồ phân bố</h3>
      <p>Phân số mol α cho biết mỗi dạng chiếm bao nhiêu phần trong tổng nồng độ. Kí hiệu h = [H<sup>+</sup>].</p>
      <div class="cong-thuc">Acid đơn chức: &nbsp; α<sub>HA</sub> = h / (h + K<sub>a</sub>) &nbsp;;&nbsp; α<sub>A⁻</sub> = K<sub>a</sub> / (h + K<sub>a</sub>)</div>
      <div class="cong-thuc">Acid 2 chức H<sub>2</sub>A: mẫu số D = h<sup>2</sup> + K<sub>a1</sub>h + K<sub>a1</sub>K<sub>a2</sub><br>
        α<sub>H₂A</sub> = h<sup>2</sup>/D ; α<sub>HA⁻</sub> = K<sub>a1</sub>h/D ; α<sub>A²⁻</sub> = K<sub>a1</sub>K<sub>a2</sub>/D</div>
      <ul>
        <li>Khi pH = pK<sub>a</sub>: hai dạng liên hợp bằng nhau (mỗi dạng 50%).</li>
        <li>Khi pH = pK<sub>a</sub> − 1: dạng acid chiếm ~91%. Khi pH = pK<sub>a</sub> + 1: dạng base chiếm ~91%.</li>
        <li>α chỉ phụ thuộc pH, không phụ thuộc nồng độ tổng.</li>
      </ul>
      <p><b>Giản đồ phân bố của acid acetic</b> (pK<sub>a</sub> = 4,76):</p>
      <div class="gian-do" data-pka="4.76" data-dang="CH₃COOH,CH₃COO⁻"></div>
      <p><b>Giản đồ phân bố của acid phosphoric</b> (pK<sub>a</sub> = 2,15 ; 7,20 ; 12,35):</p>
      <div class="gian-do" data-pka="2.15,7.20,12.35" data-dang="H₃PO₄,H₂PO₄⁻,HPO₄²⁻,PO₄³⁻"></div>
      <p>Từ giản đồ thấy ngay: ở pH ≈ 4,7 dạng H<sub>2</sub>PO<sub>4</sub><sup>−</sup> gần như chiếm toàn bộ, ở pH ≈ 9,8 là HPO<sub>4</sub><sup>2−</sup>. Đây cũng là pH của dung dịch NaH<sub>2</sub>PO<sub>4</sub> và Na<sub>2</sub>HPO<sub>4</sub>.</p>

      <h3>5. pH của acid mạnh và base mạnh</h3>
      <div class="cong-thuc">Acid mạnh C<sub>a</sub>: &nbsp; [H<sup>+</sup>] = C<sub>a</sub> &nbsp;(khi C<sub>a</sub> ≥ 10<sup>−6</sup> M)</div>
      <div class="cong-thuc">Base mạnh C<sub>b</sub>: &nbsp; [OH<sup>−</sup>] = C<sub>b</sub> → pH = 14 + lg C<sub>b</sub></div>
      <p>Khi dung dịch rất loãng (C<sub>a</sub> &lt; 10<sup>−6</sup> M), H<sup>+</sup> do nước phân li không bỏ qua được. Từ bảo toàn điện tích [H<sup>+</sup>] = C<sub>a</sub> + K<sub>w</sub>/[H<sup>+</sup>]:</p>
      <div class="cong-thuc">[H<sup>+</sup>] = ( C<sub>a</sub> + √(C<sub>a</sub><sup>2</sup> + 4K<sub>w</sub>) ) / 2</div>
      <div class="vi-du"><b>Ví dụ 2.</b> Tính pH của dung dịch NaOH 0,020 M.
        <details><summary>Xem lời giải</summary>
          [OH<sup>−</sup>] = 0,020 M → pOH = 1,70 → <b>pH = 12,30</b>
        </details></div>
      <div class="vi-du"><b>Ví dụ 3.</b> Tính pH của dung dịch HCl 1,0·10<sup>−7</sup> M.
        <details><summary>Xem lời giải</summary>
          C<sub>a</sub> &lt; 10<sup>−6</sup> M nên phải tính cả nước:<br>
          [H<sup>+</sup>] = ( 10<sup>−7</sup> + √(10<sup>−14</sup> + 4·10<sup>−14</sup>) ) / 2 = 1,62·10<sup>−7</sup> M → <b>pH = 6,79</b><br>
          (Nếu tính [H<sup>+</sup>] = C<sub>a</sub> sẽ ra pH = 7,00 — vô lí vì dung dịch acid không thể trung tính.)
        </details></div>

      <h3>6. pH của acid yếu đơn chức</h3>
      <p>Từ ĐKP [H<sup>+</sup>] = [A<sup>−</sup>] + [OH<sup>−</sup>] và biểu thức K<sub>a</sub>, có hai bước đơn giản hóa:</p>
      <p><b>Bước 1 — Bỏ qua sự phân li của nước?</b> Được khi K<sub>a</sub>·C<sub>a</sub> ≫ K<sub>w</sub> (thực tế: K<sub>a</sub>·C<sub>a</sub> ≥ 20K<sub>w</sub>). Khi đó [H<sup>+</sup>] ≈ [A<sup>−</sup>], dẫn tới:</p>
      <div class="cong-thuc">[H<sup>+</sup>]<sup>2</sup> + K<sub>a</sub>[H<sup>+</sup>] − K<sub>a</sub>C<sub>a</sub> = 0 &nbsp;→&nbsp; [H<sup>+</sup>] = ( −K<sub>a</sub> + √(K<sub>a</sub><sup>2</sup> + 4K<sub>a</sub>C<sub>a</sub>) ) / 2</div>
      <p><b>Bước 2 — Bỏ qua lượng acid đã phân li?</b> Được khi acid phân li ít (≤ 5%), tức <b>C<sub>a</sub>/K<sub>a</sub> ≥ 400</b>. Khi đó [HA] ≈ C<sub>a</sub>:</p>
      <div class="cong-thuc">[H<sup>+</sup>] = √(K<sub>a</sub> · C<sub>a</sub>) &nbsp;↔&nbsp; pH = ½ (pK<sub>a</sub> − lg C<sub>a</sub>)</div>
      <p><b>Trường hợp acid rất yếu, rất loãng</b> (K<sub>a</sub>C<sub>a</sub> không lớn hơn nhiều so với K<sub>w</sub>) nhưng vẫn C<sub>a</sub>/K<sub>a</sub> ≥ 400:</p>
      <div class="cong-thuc">[H<sup>+</sup>] = √(K<sub>a</sub> · C<sub>a</sub> + K<sub>w</sub>)</div>
      <div class="vi-du"><b>Ví dụ 4.</b> Tính pH của CH<sub>3</sub>COOH 0,10 M (pK<sub>a</sub> = 4,76).
        <details><summary>Xem lời giải</summary>
          K<sub>a</sub> = 1,74·10<sup>−5</sup>; K<sub>a</sub>C<sub>a</sub> = 1,74·10<sup>−6</sup> ≫ K<sub>w</sub>; C<sub>a</sub>/K<sub>a</sub> ≈ 5.750 ≥ 400.<br>
          pH = ½ (4,76 − lg 0,10) = ½ (4,76 + 1) = <b>2,88</b>
        </details></div>
      <div class="vi-du"><b>Ví dụ 5.</b> Tính pH của ClCH<sub>2</sub>COOH 0,010 M (pK<sub>a</sub> = 2,86).
        <details><summary>Xem lời giải</summary>
          K<sub>a</sub> = 1,38·10<sup>−3</sup>; C<sub>a</sub>/K<sub>a</sub> ≈ 7,2 &lt; 400 → phải giải phương trình bậc hai.<br>
          [H<sup>+</sup>] = ( −1,38·10<sup>−3</sup> + √((1,38·10<sup>−3</sup>)<sup>2</sup> + 4 × 1,38·10<sup>−3</sup> × 0,010) ) / 2 = 3,09·10<sup>−3</sup> M<br>
          <b>pH = 2,51</b> (dùng nhầm công thức căn sẽ ra 2,43)
        </details></div>
      <div class="vi-du"><b>Ví dụ 6.</b> Tính pH của HCN 1,0·10<sup>−4</sup> M (pK<sub>a</sub> = 9,21).
        <details><summary>Xem lời giải</summary>
          K<sub>a</sub> = 6,17·10<sup>−10</sup>; K<sub>a</sub>C<sub>a</sub> = 6,2·10<sup>−14</sup> — cùng cỡ với K<sub>w</sub>, không bỏ qua nước được.<br>
          [H<sup>+</sup>] = √(6,2·10<sup>−14</sup> + 1,0·10<sup>−14</sup>) = 2,68·10<sup>−7</sup> M → <b>pH = 6,57</b><br>
          (Bỏ qua nước sẽ ra 6,61.)
        </details></div>

      <h3>7. pH của base yếu đơn chức</h3>
      <p>Hoàn toàn tương tự acid yếu, thay [H<sup>+</sup>] bằng [OH<sup>−</sup>], K<sub>a</sub> bằng K<sub>b</sub>, C<sub>a</sub> bằng C<sub>b</sub>:</p>
      <div class="cong-thuc">C<sub>b</sub>/K<sub>b</sub> ≥ 400: &nbsp; [OH<sup>−</sup>] = √(K<sub>b</sub> · C<sub>b</sub>)</div>
      <div class="cong-thuc">C<sub>b</sub>/K<sub>b</sub> &lt; 400: &nbsp; [OH<sup>−</sup>] = ( −K<sub>b</sub> + √(K<sub>b</sub><sup>2</sup> + 4K<sub>b</sub>C<sub>b</sub>) ) / 2</div>
      <p>Muối của acid yếu và base mạnh (CH<sub>3</sub>COONa, NaCN, NaF...) là base yếu với K<sub>b</sub> = K<sub>w</sub>/K<sub>a</sub>. Muối của base yếu và acid mạnh (NH<sub>4</sub>Cl) là acid yếu.</p>
      <div class="vi-du"><b>Ví dụ 7.</b> Tính pH của NH<sub>3</sub> 0,050 M (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,24).
        <details><summary>Xem lời giải</summary>
          pK<sub>b</sub> = 14 − 9,24 = 4,76 → K<sub>b</sub> = 1,74·10<sup>−5</sup>; C<sub>b</sub>/K<sub>b</sub> ≈ 2.880 ≥ 400.<br>
          [OH<sup>−</sup>] = √(1,74·10<sup>−5</sup> × 0,050) = 9,32·10<sup>−4</sup> M → pOH = 3,03 → <b>pH = 10,97</b>
        </details></div>
      <div class="vi-du"><b>Ví dụ 8.</b> Tính pH của CH<sub>3</sub>COONa 0,10 M.
        <details><summary>Xem lời giải</summary>
          K<sub>b</sub> = 10<sup>−9,24</sup> = 5,75·10<sup>−10</sup>; C<sub>b</sub>/K<sub>b</sub> rất lớn.<br>
          [OH<sup>−</sup>] = √(5,75·10<sup>−10</sup> × 0,10) = 7,58·10<sup>−6</sup> M → pOH = 5,12 → <b>pH = 8,88</b>
        </details></div>

      <h3>8. Hỗn hợp acid mạnh và acid yếu</h3>
      <p>Acid mạnh cho nhiều H<sup>+</sup>, đẩy cân bằng phân li của acid yếu sang trái (hiệu ứng ion chung) → acid yếu gần như không phân li.</p>
      <div class="cong-thuc">[H<sup>+</sup>] = C<sub>mạnh</sub> + C<sub>yếu</sub> · K<sub>a</sub> / (K<sub>a</sub> + [H<sup>+</sup>])</div>
      <p>Thường chỉ cần lấy gần đúng [H<sup>+</sup>] ≈ C<sub>mạnh</sub>, rồi kiểm tra phần đóng góp của acid yếu.</p>
      <div class="vi-du"><b>Ví dụ 9.</b> Tính pH của dung dịch HCl 0,010 M + CH<sub>3</sub>COOH 0,10 M.
        <details><summary>Xem lời giải</summary>
          Gần đúng lần 1: [H<sup>+</sup>] ≈ 0,010 M.<br>
          Phần do CH<sub>3</sub>COOH: 0,10 × 1,74·10<sup>−5</sup> / (1,74·10<sup>−5</sup> + 0,010) = 1,7·10<sup>−4</sup> M (chỉ 0,17% acid acetic phân li).<br>
          [H<sup>+</sup>] ≈ 0,0102 M → <b>pH = 1,99</b> (gần như bằng pH của riêng HCl là 2,00)
        </details></div>

      <h3>9. Acid và base đa chức</h3>
      <p>Khi các hằng số cách nhau xa (K<sub>a1</sub>/K<sub>a2</sub> ≥ 10<sup>4</sup>), các nấc sau phân li không đáng kể → tính pH theo <b>nấc 1</b> như một acid đơn chức (nhớ kiểm tra điều kiện C/K<sub>a1</sub> ≥ 400).</p>
      <p>Tương tự, base đa chức (Na<sub>2</sub>CO<sub>3</sub>, Na<sub>3</sub>PO<sub>4</sub>) tính theo nấc base thứ nhất với K<sub>b1</sub> = K<sub>w</sub>/K<sub>a,cuối</sub>.</p>
      <div class="vi-du"><b>Ví dụ 10.</b> Tính pH của H<sub>3</sub>PO<sub>4</sub> 0,10 M (pK<sub>a1</sub> = 2,15).
        <details><summary>Xem lời giải</summary>
          K<sub>a1</sub> = 7,08·10<sup>−3</sup>; C/K<sub>a1</sub> ≈ 14 &lt; 400 → giải phương trình bậc hai theo nấc 1:<br>
          [H<sup>+</sup>] = ( −7,08·10<sup>−3</sup> + √((7,08·10<sup>−3</sup>)<sup>2</sup> + 4 × 7,08·10<sup>−3</sup> × 0,10) ) / 2 = 2,33·10<sup>−2</sup> M<br>
          <b>pH = 1,63</b>
        </details></div>
      <div class="vi-du"><b>Ví dụ 11.</b> Tính pH của Na<sub>2</sub>CO<sub>3</sub> 0,10 M (pK<sub>a2</sub> của H<sub>2</sub>CO<sub>3</sub> = 10,33).
        <details><summary>Xem lời giải</summary>
          K<sub>b1</sub> = 10<sup>−3,67</sup> = 2,14·10<sup>−4</sup>; C/K<sub>b1</sub> ≈ 468 ≥ 400 → dùng công thức căn.<br>
          [OH<sup>−</sup>] = √(2,14·10<sup>−4</sup> × 0,10) = 4,62·10<sup>−3</sup> M → pOH = 2,34 → <b>pH = 11,66</b>
        </details></div>

      <h3>10. Chất lưỡng tính</h3>
      <p>Với dung dịch HA<sup>−</sup> (NaHCO<sub>3</sub>, NaH<sub>2</sub>PO<sub>4</sub>, Na<sub>2</sub>HPO<sub>4</sub>...), từ ĐKP suy ra:</p>
      <div class="cong-thuc">[H<sup>+</sup>] = √[ K<sub>a1</sub>(K<sub>a2</sub>C + K<sub>w</sub>) / (K<sub>a1</sub> + C) ]</div>
      <p>Khi C ≫ K<sub>a1</sub> và K<sub>a2</sub>C ≫ K<sub>w</sub>, công thức rút gọn thành:</p>
      <div class="cong-thuc">[H<sup>+</sup>] = √(K<sub>a1</sub> · K<sub>a2</sub>) &nbsp;↔&nbsp; pH = ( pK<sub>a1</sub> + pK<sub>a2</sub> ) / 2</div>
      <p>(K<sub>a1</sub>, K<sub>a2</sub> là hai hằng số <b>kề</b> dạng lưỡng tính. Ví dụ với Na<sub>2</sub>HPO<sub>4</sub> dùng pK<sub>a2</sub> và pK<sub>a3</sub> của H<sub>3</sub>PO<sub>4</sub>.)</p>
      <div class="vi-du"><b>Ví dụ 12.</b> Tính pH của NaHCO<sub>3</sub> 0,10 M và NaH<sub>2</sub>PO<sub>4</sub> 0,10 M.
        <details><summary>Xem lời giải</summary>
          NaHCO<sub>3</sub>: pH = (6,35 + 10,33) / 2 = <b>8,34</b> (công thức đầy đủ cũng cho 8,34).<br>
          NaH<sub>2</sub>PO<sub>4</sub>: công thức rút gọn cho (2,15 + 7,20) / 2 = 4,68. Nhưng C = 0,10 không lớn hơn nhiều so với K<sub>a1</sub> = 7,08·10<sup>−3</sup>, dùng công thức đầy đủ:<br>
          [H<sup>+</sup>] = √[ 7,08·10<sup>−3</sup> × (6,31·10<sup>−8</sup> × 0,10 + 10<sup>−14</sup>) / (7,08·10<sup>−3</sup> + 0,10) ] = 2,04·10<sup>−5</sup> M → <b>pH = 4,69</b>
        </details></div>

      <h3>11. Dung dịch đệm</h3>
      <p>Dung dịch đệm chứa đồng thời acid yếu HA và base liên hợp A<sup>−</sup> với nồng độ đáng kể. Nó giữ pH gần như không đổi khi thêm một lượng nhỏ acid mạnh, base mạnh, hoặc khi pha loãng.</p>
      <div class="cong-thuc">pH = pK<sub>a</sub> + lg( C<sub>A⁻</sub> / C<sub>HA</sub> ) &nbsp;(Henderson – Hasselbalch)</div>
      <ul>
        <li>Điều kiện dùng: C<sub>HA</sub> và C<sub>A⁻</sub> đều lớn hơn nhiều so với [H<sup>+</sup>] và [OH<sup>−</sup>].</li>
        <li>Pha loãng đệm: tỉ số C<sub>A⁻</sub>/C<sub>HA</sub> không đổi nên pH gần như không đổi.</li>
        <li>Khoảng đệm hiệu quả: <b>pH = pK<sub>a</sub> ± 1</b>. Muốn pha đệm pH nào thì chọn cặp có pK<sub>a</sub> gần pH đó.</li>
      </ul>
      <p><b>Đệm năng</b> β: số mol acid hoặc base mạnh cần thêm vào 1 L để pH thay đổi 1 đơn vị.</p>
      <div class="cong-thuc">β ≈ 2,303 · C · K<sub>a</sub>·h / (K<sub>a</sub> + h)<sup>2</sup> &nbsp;(C = C<sub>HA</sub> + C<sub>A⁻</sub>)</div>
      <p>β lớn nhất khi pH = pK<sub>a</sub> (β<sub>max</sub> = 0,576·C) và tăng theo nồng độ tổng của đệm.</p>
      <div class="vi-du"><b>Ví dụ 13.</b> 1,00 L đệm gồm CH<sub>3</sub>COOH 0,10 M và CH<sub>3</sub>COONa 0,10 M. Thêm 0,010 mol HCl (coi thể tích không đổi). Tính pH trước và sau khi thêm, so sánh với việc thêm cùng lượng HCl vào 1,00 L nước.
        <details><summary>Xem lời giải</summary>
          Trước: pH = 4,76 + lg(0,10/0,10) = <b>4,76</b><br>
          H<sup>+</sup> + CH<sub>3</sub>COO<sup>−</sup> → CH<sub>3</sub>COOH: C<sub>A⁻</sub> = 0,090 M; C<sub>HA</sub> = 0,110 M<br>
          Sau: pH = 4,76 + lg(0,090/0,110) = <b>4,67</b> (chỉ giảm 0,09)<br>
          Trong nước: pH từ 7,00 giảm xuống 2,00 (giảm 5 đơn vị).
        </details></div>
      <div class="vi-du"><b>Ví dụ 14.</b> Cần trộn CH<sub>3</sub>COONa và CH<sub>3</sub>COOH theo tỉ lệ nồng độ bao nhiêu để được đệm pH 5,00?
        <details><summary>Xem lời giải</summary>
          lg(C<sub>A⁻</sub>/C<sub>HA</sub>) = 5,00 − 4,76 = 0,24 → C<sub>A⁻</sub>/C<sub>HA</sub> = 10<sup>0,24</sup> = <b>1,74</b>
        </details></div>

      <h3>12. Tóm tắt: chọn công thức tính pH</h3>
      <div class="bang-cuon">
        <table class="bang bang-tom-tat">
          <thead><tr><th>Dung dịch</th><th>Công thức</th><th>Điều kiện</th></tr></thead>
          <tbody>
            <tr><td>Acid mạnh</td><td>[H<sup>+</sup>] = C<sub>a</sub></td><td>C<sub>a</sub> ≥ 10<sup>−6</sup> M</td></tr>
            <tr><td>Acid mạnh rất loãng</td><td>[H<sup>+</sup>] = (C<sub>a</sub> + √(C<sub>a</sub><sup>2</sup> + 4K<sub>w</sub>)) / 2</td><td>C<sub>a</sub> &lt; 10<sup>−6</sup> M</td></tr>
            <tr><td>Acid yếu</td><td>[H<sup>+</sup>] = √(K<sub>a</sub>C<sub>a</sub>)</td><td>C<sub>a</sub>/K<sub>a</sub> ≥ 400</td></tr>
            <tr><td>Acid yếu</td><td>Giải bậc hai</td><td>C<sub>a</sub>/K<sub>a</sub> &lt; 400</td></tr>
            <tr><td>Acid rất yếu, loãng</td><td>[H<sup>+</sup>] = √(K<sub>a</sub>C<sub>a</sub> + K<sub>w</sub>)</td><td>K<sub>a</sub>C<sub>a</sub> không ≫ K<sub>w</sub></td></tr>
            <tr><td>Base yếu, muối base</td><td>Như acid yếu, dùng K<sub>b</sub> = K<sub>w</sub>/K<sub>a</sub></td><td>C<sub>b</sub>/K<sub>b</sub> ≥ 400</td></tr>
            <tr><td>Acid đa chức</td><td>Theo nấc 1</td><td>K<sub>a1</sub>/K<sub>a2</sub> ≥ 10<sup>4</sup></td></tr>
            <tr><td>Chất lưỡng tính</td><td>pH = (pK<sub>a1</sub> + pK<sub>a2</sub>) / 2</td><td>C ≫ K<sub>a1</sub></td></tr>
            <tr><td>Dung dịch đệm</td><td>pH = pK<sub>a</sub> + lg(C<sub>A⁻</sub>/C<sub>HA</sub>)</td><td>C<sub>HA</sub>, C<sub>A⁻</sub> ≫ [H<sup>+</sup>], [OH<sup>−</sup>]</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y"><b>Lỗi hay gặp:</b> quên kiểm tra điều kiện C/K ≥ 400; dùng nhầm K<sub>a</sub> thay cho K<sub>b</sub> khi tính muối; với chất lưỡng tính lấy sai cặp pK<sub>a</sub> không kề nhau; làm tròn pH quá sớm (pH lấy 2 chữ số thập phân ở kết quả cuối).</p>
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
    nhom: "Phân tích hóa học",
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
    nhom: "Phân tích hóa học",
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
    nhom: "Phân tích hóa học",
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
    nhom: "Phân tích hóa học",
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
    nhom: "Phân tích hóa học",
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
  /* ===================== PHÂN TÍCH CÔNG CỤ ===================== */
  {
    id: "do-the",
    nhom: "Phân tích công cụ",
    icon: "🔋",
    ten: "Điện hóa: phương pháp đo thế",
    moTa: "Điện cực so sánh, điện cực chỉ thị, ISE, chuẩn độ điện thế",
    lyThuyet: `
      <h3>1. Đại cương phân tích điện hóa</h3>
      <p>Các phương pháp điện hóa đo một đại lượng điện (thế, dòng, điện lượng, độ dẫn) liên quan đến nồng độ chất phân tích.</p>
      <ul>
        <li><b>Đo thế</b>: đo thế của pin ở dòng gần bằng 0.</li>
        <li><b>Điện phân, culông</b>: đo khối lượng hoặc điện lượng.</li>
        <li><b>Von-ampe, cực phổ</b>: đo dòng theo thế áp vào.</li>
        <li><b>Đo độ dẫn</b>: đo độ dẫn điện của dung dịch.</li>
      </ul>

      <h3>2. Pin đo thế</h3>
      <div class="cong-thuc">E<sub>pin</sub> = E<sub>chỉ thị</sub> − E<sub>so sánh</sub> + E<sub>j</sub></div>
      <p>E<sub>j</sub>: thế tiếp xúc lỏng (nhỏ, coi như không đổi và gộp vào hằng số).</p>
      <ul>
        <li><b>Điện cực so sánh</b>: thế không đổi, không phụ thuộc dung dịch đo.
          <ul>
            <li>Điện cực hydro chuẩn (SHE): quy ước E = 0,000 V.</li>
            <li>Điện cực calomen bão hòa (SCE): Hg | Hg<sub>2</sub>Cl<sub>2</sub> | KCl bão hòa, E ≈ 0,244 V.</li>
            <li>Điện cực bạc clorua: Ag | AgCl | KCl bão hòa, E ≈ 0,197 V.</li>
          </ul></li>
        <li><b>Điện cực chỉ thị</b>: thế phụ thuộc hoạt độ chất cần đo.
          <ul>
            <li>Điện cực kim loại (Ag nhúng trong Ag<sup>+</sup>...), điện cực trơ Pt cho cặp oxi hóa – khử.</li>
            <li>Điện cực màng chọn lọc ion (ISE): điện cực thủy tinh đo pH, điện cực F<sup>−</sup> (màng LaF<sub>3</sub>), điện cực Ca<sup>2+</sup>...</li>
          </ul></li>
      </ul>

      <h3>3. Điện cực chọn lọc ion (ISE)</h3>
      <div class="cong-thuc">E = K + (0,0592 / z) · lg a<sub>i</sub> &nbsp;(25 °C)</div>
      <p>z: điện tích ion (có dấu); a<sub>i</sub>: hoạt độ ion (dung dịch loãng coi a ≈ C).</p>
      <ul>
        <li>Độ dốc lí thuyết: 59,2 mV cho mỗi lần hoạt độ ion hóa trị 1 thay đổi 10 lần; 29,6 mV với ion hóa trị 2.</li>
        <li>Để đo nồng độ (thay cho hoạt độ), thêm dung dịch điều chỉnh lực ion (TISAB) vào cả mẫu và chuẩn.</li>
        <li><b>Hệ số chọn lọc</b> k<sub>ij</sub> càng nhỏ thì ion lạ j càng ít cản trở.</li>
      </ul>

      <h3>4. Đo pH bằng điện cực thủy tinh</h3>
      <div class="cong-thuc">E = K − 0,0592 · pH</div>
      <p>Phải chuẩn hóa máy bằng dung dịch đệm chuẩn trước khi đo (thường 2 đệm, ví dụ pH 4,01 và 7,00):</p>
      <div class="cong-thuc">pH<sub>x</sub> = pH<sub>chuẩn</sub> + (E<sub>chuẩn</sub> − E<sub>x</sub>) / 0,0592</div>
      <div class="vi-du"><b>Ví dụ.</b> Trong đệm pH 4,00 đo được E = 0,250 V; trong mẫu đo được E = 0,132 V.<br>
        pH<sub>x</sub> = 4,00 + (0,250 − 0,132) / 0,0592 = <b>5,99</b></div>
      <p class="luu-y">Sai số kiềm: ở pH rất cao (&gt; 11), điện cực thủy tinh "nhạy" cả với Na<sup>+</sup> nên pH đo được thấp hơn thật. Sai số acid: ở pH rất thấp (&lt; 0,5), pH đo được cao hơn thật.</p>

      <h3>5. Chuẩn độ điện thế</h3>
      <p>Theo dõi thế của điện cực chỉ thị trong khi chuẩn độ, không cần chỉ thị màu (dùng được với dung dịch đục, có màu).</p>
      <ul>
        <li>Điểm tương đương là điểm uốn của đường E theo V.</li>
        <li><b>Đạo hàm bậc 1</b>: ΔE/ΔV đạt cực đại tại điểm tương đương.</li>
        <li><b>Đạo hàm bậc 2</b>: Δ²E/ΔV² đổi dấu (bằng 0) tại điểm tương đương.</li>
        <li><b>Phương pháp Gran</b>: biến đổi số liệu thành đường thẳng, kéo dài cắt trục V tại điểm tương đương.</li>
      </ul>
    `,
    baiTap: [],
  },
  {
    id: "dien-phan-von-ampe",
    nhom: "Phân tích công cụ",
    icon: "⚡",
    ten: "Điện hóa: điện phân, von-ampe, độ dẫn",
    moTa: "Faraday, culông, cực phổ, Ilkovic, đo độ dẫn",
    lyThuyet: `
      <h3>1. Định luật Faraday</h3>
      <div class="cong-thuc">Q = I · t &nbsp;(C = A · s)</div>
      <div class="cong-thuc">n<sub>chất</sub> = Q / (z · F) &nbsp;;&nbsp; m = Q · M / (z · F)</div>
      <p>F = 96485 C/mol (hằng số Faraday); z: số electron trao đổi cho 1 phân tử/ion.</p>
      <div class="vi-du"><b>Ví dụ.</b> Điện phân dung dịch Cu<sup>2+</sup> với dòng 0,500 A trong 965 s (hiệu suất 100%).<br>
        Q = 0,500 × 965 = 482,5 C<br>
        m<sub>Cu</sub> = 482,5 × 63,55 / (2 × 96485) = <b>0,159 g</b></div>

      <h3>2. Điện khối lượng và phương pháp culông</h3>
      <ul>
        <li><b>Điện khối lượng</b>: điện phân cho kim loại bám hết lên điện cực, cân điện cực trước và sau.</li>
        <li><b>Culông thế không đổi</b>: giữ thế điện cực làm việc cố định, dòng giảm dần về 0; đo tổng điện lượng Q.</li>
        <li><b>Chuẩn độ culông</b> (dòng không đổi): thuốc thử được tạo ra ngay trên điện cực (ví dụ I<sub>2</sub> từ I<sup>−</sup>), đo thời gian t đến điểm tương đương → Q = I·t. Không cần dung dịch chuẩn, rất chính xác với lượng nhỏ.</li>
        <li>Điều kiện: hiệu suất dòng 100% (toàn bộ điện lượng dùng cho đúng phản ứng cần đo).</li>
      </ul>
      <div class="vi-du"><b>Ví dụ.</b> Chuẩn độ culông As(III) bằng I<sub>2</sub> sinh ra từ I<sup>−</sup> (2I<sup>−</sup> → I<sub>2</sub> + 2e), dòng 20,0 mA, hết 600 s. I<sub>2</sub> phản ứng với As(III) theo tỉ lệ 1 : 1.<br>
        Q = 0,0200 × 600 = 12,0 C → n<sub>As</sub> = n<sub>I₂</sub> = 12,0 / (2 × 96485) = <b>6,22·10<sup>−5</sup> mol</b></div>

      <h3>3. Cực phổ và von-ampe</h3>
      <p>Áp thế biến thiên lên điện cực làm việc (điện cực giọt thủy ngân, điện cực rắn...), ghi dòng theo thế → <b>đường von-ampe (cực phổ đồ)</b>.</p>
      <ul>
        <li><b>Thế bán sóng E<sub>1/2</sub></b>: đặc trưng cho từng chất → dùng để <b>định tính</b>.</li>
        <li><b>Dòng giới hạn khuếch tán i<sub>d</sub></b> tỉ lệ với nồng độ → dùng để <b>định lượng</b>.</li>
      </ul>
      <div class="cong-thuc">Phương trình Ilkovic: i<sub>d</sub> = 708 · z · D<sup>1/2</sup> · m<sup>2/3</sup> · t<sup>1/6</sup> · C</div>
      <p>(i<sub>d</sub> cực đại, µA; D: hệ số khuếch tán, cm²/s; m: tốc độ chảy Hg, mg/s; t: chu kì giọt, s; C: mmol/L. Dòng trung bình dùng hệ số 607.) Trong cùng điều kiện đo: i<sub>d</sub> = k · C.</p>
      <div class="vi-du"><b>Ví dụ.</b> Dung dịch chuẩn 1,00·10<sup>−3</sup> M cho i<sub>d</sub> = 5,20 µA; mẫu cho 3,90 µA (cùng điều kiện).<br>
        C<sub>x</sub> = 1,00·10<sup>−3</sup> × 3,90 / 5,20 = <b>7,50·10<sup>−4</sup> M</b></div>
      <ul>
        <li><b>Von-ampe xung vi phân (DPV)</b>: giảm dòng tụ điện → nhạy hơn cực phổ cổ điển.</li>
        <li><b>Von-ampe hòa tan anot (ASV)</b>: làm giàu kim loại lên điện cực bằng điện phân, rồi quét thế hòa tan ra → phát hiện kim loại nặng (Pb, Cd, Cu, Zn) ở mức ppb.</li>
      </ul>

      <h3>4. Phương pháp đo độ dẫn</h3>
      <div class="cong-thuc">Độ dẫn điện riêng κ (S/cm) ; độ dẫn điện mol: Λ = 1000 · κ / C &nbsp;(S·cm²/mol, C: mol/L)</div>
      <div class="cong-thuc">Chất điện li mạnh (Kohlrausch): Λ = Λ° − K·√C</div>
      <div class="cong-thuc">Định luật chuyển động độc lập của ion: Λ° = λ°<sub>+</sub> + λ°<sub>−</sub></div>
      <p>H<sup>+</sup> (λ° ≈ 350) và OH<sup>−</sup> (λ° ≈ 199) dẫn điện tốt hơn hẳn các ion khác (Na<sup>+</sup> ≈ 50, Cl<sup>−</sup> ≈ 76 S·cm²/mol).</p>
      <p><b>Chuẩn độ đo độ dẫn</b>: ví dụ chuẩn độ HCl bằng NaOH — trước điểm tương đương độ dẫn <b>giảm</b> (H<sup>+</sup> linh động bị thay bằng Na<sup>+</sup> kém linh động), sau điểm tương đương độ dẫn <b>tăng</b> (dư Na<sup>+</sup>, OH<sup>−</sup>). Giao điểm hai đoạn thẳng là điểm tương đương.</p>
    `,
    baiTap: [],
  },
  {
    id: "quang-dai-cuong",
    nhom: "Phân tích công cụ",
    icon: "🌈",
    ten: "Quang phổ: đại cương & UV-Vis",
    moTa: "Bức xạ điện từ, Lambert – Beer, đo quang phân tử",
    lyThuyet: `
      <h3>1. Bức xạ điện từ</h3>
      <div class="cong-thuc">E = h · ν = h · c / λ &nbsp;;&nbsp; số sóng ν̃ = 1 / λ</div>
      <p>h = 6,626·10<sup>−34</sup> J·s ; c = 3,00·10<sup>8</sup> m/s. Bước sóng càng ngắn thì năng lượng càng lớn.</p>
      <ul>
        <li><b>Tử ngoại (UV)</b> 190 – 400 nm và <b>khả kiến (Vis)</b> 400 – 800 nm: chuyển mức năng lượng electron.</li>
        <li><b>Hồng ngoại (IR)</b> 4000 – 400 cm<sup>−1</sup>: dao động liên kết → nhận biết nhóm chức.</li>
      </ul>

      <h3>2. Định luật Lambert – Beer</h3>
      <div class="cong-thuc">Độ truyền qua: T = I / I<sub>0</sub> &nbsp;;&nbsp; %T = T × 100</div>
      <div class="cong-thuc">Độ hấp thụ quang: A = −lg T = lg( I<sub>0</sub> / I )</div>
      <div class="cong-thuc">A = ε · l · C</div>
      <p>ε: hệ số hấp thụ mol (L·mol<sup>−1</sup>·cm<sup>−1</sup>); l: bề dày cuvet (cm); C: nồng độ (mol/L).</p>
      <ul>
        <li><b>Tính cộng tính</b>: dung dịch nhiều chất hấp thụ: A = Σ ε<sub>i</sub> · l · C<sub>i</sub>.</li>
        <li>Đo ở bước sóng hấp thụ cực đại <b>λ<sub>max</sub></b> để có độ nhạy cao nhất và ít sai số.</li>
        <li>Nên đo trong khoảng A ≈ 0,2 – 0,8 (sai số tương đối nhỏ nhất ở A = 0,434).</li>
      </ul>
      <div class="vi-du"><b>Ví dụ.</b> Dung dịch có A = 0,450 trong cuvet 1,00 cm, ε = 1,50·10<sup>4</sup> L·mol<sup>−1</sup>·cm<sup>−1</sup>.<br>
        C = A / (ε·l) = 0,450 / (1,50·10<sup>4</sup> × 1,00) = <b>3,00·10<sup>−5</sup> M</b><br>
        %T = 10<sup>−0,450</sup> × 100 = <b>35,5%</b></div>

      <h3>3. Các nguyên nhân sai lệch định luật Beer</h3>
      <ul>
        <li><b>Nồng độ cao</b> (thường &gt; 0,01 M): tương tác giữa các phân tử, chiết suất thay đổi.</li>
        <li><b>Hóa học</b>: chất phân li, tạo phức, cân bằng acid – base làm thay đổi dạng hấp thụ.</li>
        <li><b>Thiết bị</b>: ánh sáng không đơn sắc, ánh sáng tạp (stray light).</li>
      </ul>

      <h3>4. Máy quang phổ UV-Vis</h3>
      <p>Nguồn sáng → bộ đơn sắc → cuvet chứa mẫu → detector → bộ xử lí.</p>
      <ul>
        <li>Nguồn: đèn deuteri (vùng UV), đèn wolfram – halogen (vùng Vis).</li>
        <li>Bộ đơn sắc: cách tử hoặc lăng kính.</li>
        <li>Cuvet: thạch anh (dùng được cả UV), thủy tinh hoặc nhựa (chỉ vùng Vis).</li>
        <li>Detector: ống nhân quang, dãy diode (DAD).</li>
      </ul>
      <p>Chất không màu có thể cho phản ứng với <b>thuốc thử tạo màu</b> (ví dụ Fe<sup>2+</sup> + 1,10-phenanthrolin tạo phức đỏ cam) rồi đo quang.</p>

      <h3>5. Phương pháp định lượng</h3>
      <ul>
        <li><b>Đường chuẩn</b>: đo A của dãy dung dịch chuẩn → dựng đường A = a·C + b → thay A<sub>mẫu</sub> tìm C<sub>x</sub>. Mẫu phải nằm trong khoảng tuyến tính.</li>
        <li><b>Thêm chuẩn</b>: thêm lượng chuẩn biết trước vào chính mẫu → loại trừ ảnh hưởng của nền mẫu.</li>
        <li><b>Mẫu trắng</b>: chứa mọi thành phần trừ chất phân tích, dùng để chỉnh A = 0.</li>
      </ul>
      <div class="cong-thuc">Thêm chuẩn một lần (thể tích thêm không đáng kể):<br>C<sub>x</sub> = ΔC · A<sub>x</sub> / (A<sub>x+chuẩn</sub> − A<sub>x</sub>)</div>
      <div class="vi-du"><b>Ví dụ.</b> Mẫu có A<sub>x</sub> = 0,240. Thêm chuẩn làm nồng độ tăng thêm 2,00 ppm thì A = 0,400.<br>
        C<sub>x</sub> = 2,00 × 0,240 / (0,400 − 0,240) = <b>3,00 ppm</b></div>
    `,
    baiTap: [],
  },
  {
    id: "quang-nguyen-tu",
    nhom: "Phân tích công cụ",
    icon: "🔥",
    ten: "Quang phổ nguyên tử & phương pháp quang khác",
    moTa: "AAS, AES/ICP, ICP-MS, huỳnh quang, IR",
    lyThuyet: `
      <h3>1. Phổ nguyên tử và phổ phân tử</h3>
      <ul>
        <li><b>Phổ nguyên tử</b>: nguyên tử tự do ở trạng thái hơi, cho <b>vạch phổ</b> rất hẹp, đặc trưng cho từng nguyên tố → dùng xác định kim loại.</li>
        <li><b>Phổ phân tử</b>: cho <b>dải phổ</b> rộng (vì có thêm mức dao động, quay).</li>
        <li>Mọi phương pháp phổ nguyên tử đều cần bước <b>nguyên tử hóa</b>: chuyển mẫu thành nguyên tử tự do.</li>
      </ul>

      <h3>2. Quang phổ hấp thụ nguyên tử (AAS)</h3>
      <p>Nguyên tử ở trạng thái cơ bản hấp thụ bức xạ đúng bằng vạch cộng hưởng của nó.</p>
      <ul>
        <li><b>Nguồn</b>: đèn catot rỗng (HCL) làm bằng chính nguyên tố cần đo → phát vạch đặc trưng, mỗi nguyên tố một đèn.</li>
        <li><b>Nguyên tử hóa ngọn lửa (F-AAS)</b>: không khí – axetilen (~2300 °C) hoặc N<sub>2</sub>O – axetilen (~2700 °C); nhanh, cỡ ppm.</li>
        <li><b>Nguyên tử hóa lò graphit (GF-AAS)</b>: nhạy hơn 100 – 1000 lần (cỡ ppb), cần ít mẫu.</li>
        <li>Kĩ thuật hydrua hóa (As, Se, Sb...), hóa hơi lạnh (Hg).</li>
      </ul>
      <div class="cong-thuc">A = k · C &nbsp;(trong khoảng tuyến tính)</div>
      <p><b>Ảnh hưởng cản trở</b>: hóa học (tạo hợp chất bền khó nguyên tử hóa, ví dụ PO<sub>4</sub><sup>3−</sup> với Ca → thêm La<sup>3+</sup> hoặc Sr<sup>2+</sup> làm chất giải phóng); ion hóa (thêm K, Cs làm chất khử ion hóa); hấp thụ nền (hiệu chỉnh bằng đèn D<sub>2</sub> hoặc Zeeman).</p>

      <h3>3. Quang phổ phát xạ nguyên tử (AES) và ICP-OES</h3>
      <p>Nguyên tử bị kích thích lên mức năng lượng cao, khi trở về phát ra bức xạ đặc trưng. Cường độ vạch tỉ lệ với nồng độ:</p>
      <div class="cong-thuc">I = k · C</div>
      <ul>
        <li><b>Nguồn kích thích plasma ICP</b> (Ar, 6000 – 10000 K): nguyên tử hóa và kích thích gần như hoàn toàn, ít cản trở hóa học.</li>
        <li>Phân tích <b>đồng thời nhiều nguyên tố</b>, khoảng tuyến tính rộng (4 – 6 bậc nồng độ).</li>
        <li>Quang kế ngọn lửa: dùng ngọn lửa làm nguồn kích thích, hay dùng cho Na, K.</li>
      </ul>

      <h3>4. ICP-MS</h3>
      <p>Plasma ICP ion hóa nguyên tử → khối phổ kế tách ion theo tỉ số <b>m/z</b> → đếm ion. Nhạy nhất trong nhóm (cỡ ppt), phân tích đồng thời nhiều nguyên tố và đồng vị. Cản trở: ion đa nguyên tử cùng m/z (ví dụ <sup>40</sup>Ar<sup>35</sup>Cl<sup>+</sup> trùng <sup>75</sup>As<sup>+</sup>).</p>

      <h3>5. Huỳnh quang phân tử</h3>
      <p>Phân tử hấp thụ bức xạ (kích thích), rồi phát ra bức xạ có <b>bước sóng dài hơn</b> khi trở về trạng thái cơ bản.</p>
      <div class="cong-thuc">Ở nồng độ thấp: F = K · C</div>
      <ul>
        <li>Detector đặt vuông góc (90°) với chùm sáng kích thích.</li>
        <li>Nhạy hơn đo quang hấp thụ 10 – 1000 lần, chọn lọc hơn (chọn được cả λ kích thích và λ phát xạ).</li>
        <li>Nồng độ cao: hiện tượng tự dập tắt, mất tuyến tính.</li>
      </ul>

      <h3>6. Phổ hồng ngoại (IR)</h3>
      <p>Hấp thụ bức xạ IR làm dao động liên kết, dùng chủ yếu để <b>định tính, nhận biết nhóm chức</b>. Một số vùng đặc trưng:</p>
      <ul>
        <li>O–H: 3200 – 3600 cm<sup>−1</sup> (rộng) ; N–H: 3300 – 3500 cm<sup>−1</sup></li>
        <li>C–H: 2850 – 3100 cm<sup>−1</sup></li>
        <li>C≡N, C≡C: 2100 – 2260 cm<sup>−1</sup></li>
        <li>C=O: 1650 – 1750 cm<sup>−1</sup> (mạnh, rất đặc trưng)</li>
        <li>Vùng "vân tay" 400 – 1500 cm<sup>−1</sup>: đặc trưng riêng từng chất.</li>
      </ul>
    `,
    baiTap: [],
  },
  {
    id: "sac-ki-dai-cuong",
    nhom: "Phân tích công cụ",
    icon: "📊",
    ten: "Sắc kí: đại cương",
    moTa: "Thời gian lưu, hệ số lưu, số đĩa, độ phân giải",
    lyThuyet: `
      <h3>1. Nguyên tắc</h3>
      <p>Các chất được tách nhờ <b>phân bố khác nhau</b> giữa hai pha: <b>pha tĩnh</b> (cố định trong cột hoặc trên bản) và <b>pha động</b> (khí hoặc lỏng, chảy qua pha tĩnh). Chất tương tác mạnh với pha tĩnh sẽ đi chậm hơn.</p>
      <div class="cong-thuc">Hệ số phân bố: K = C<sub>tĩnh</sub> / C<sub>động</sub></div>
      <p>Phân loại theo pha động: sắc kí khí (GC), sắc kí lỏng (LC, HPLC); theo cơ chế: hấp phụ, phân bố, trao đổi ion, rây phân tử.</p>

      <h3>2. Sắc kí đồ và các đại lượng lưu giữ</h3>
      <ul>
        <li><b>t<sub>M</sub></b> (thời gian chết): thời gian chất không bị lưu giữ đi qua cột.</li>
        <li><b>t<sub>R</sub></b> (thời gian lưu): từ lúc tiêm mẫu đến đỉnh pic → dùng để <b>định tính</b>.</li>
        <li>Thời gian lưu hiệu chỉnh: t'<sub>R</sub> = t<sub>R</sub> − t<sub>M</sub>.</li>
        <li><b>Diện tích (hoặc chiều cao) pic</b> tỉ lệ với lượng chất → dùng để <b>định lượng</b>.</li>
      </ul>
      <div class="cong-thuc">Hệ số lưu: k = ( t<sub>R</sub> − t<sub>M</sub> ) / t<sub>M</sub></div>
      <div class="cong-thuc">Hệ số chọn lọc: α = k<sub>2</sub> / k<sub>1</sub> &nbsp;(k<sub>2</sub> &gt; k<sub>1</sub>, nên α ≥ 1)</div>
      <p>k tốt nằm trong khoảng 1 – 10: k quá nhỏ thì tách kém, quá lớn thì phân tích lâu, pic tù.</p>

      <h3>3. Hiệu quả cột: số đĩa lí thuyết</h3>
      <div class="cong-thuc">N = 16 · ( t<sub>R</sub> / W )<sup>2</sup> = 5,54 · ( t<sub>R</sub> / W<sub>1/2</sub> )<sup>2</sup></div>
      <div class="cong-thuc">Chiều cao đĩa lí thuyết: H = L / N</div>
      <p>W: độ rộng pic ở đáy; W<sub>1/2</sub>: độ rộng ở nửa chiều cao; L: chiều dài cột. N càng lớn (H càng nhỏ) thì cột càng hiệu quả, pic càng hẹp.</p>
      <div class="cong-thuc">Phương trình van Deemter: H = A + B / u + C · u</div>
      <ul>
        <li>A: khuếch tán xoáy (do các đường đi khác nhau qua hạt nhồi).</li>
        <li>B/u: khuếch tán dọc (quan trọng khi tốc độ pha động u nhỏ).</li>
        <li>C·u: chuyển khối giữa hai pha (quan trọng khi u lớn).</li>
        <li>Có một tốc độ tối ưu u<sub>opt</sub> cho H nhỏ nhất.</li>
      </ul>

      <h3>4. Độ phân giải</h3>
      <div class="cong-thuc">R<sub>s</sub> = 2 · ( t<sub>R2</sub> − t<sub>R1</sub> ) / ( W<sub>1</sub> + W<sub>2</sub> )</div>
      <p>R<sub>s</sub> ≥ 1,5: hai pic tách hoàn toàn (tới đường nền). R<sub>s</sub> = 1: tách khoảng 98%.</p>
      <div class="cong-thuc">Phương trình Purnell: R<sub>s</sub> = (√N / 4) · ( (α − 1) / α ) · ( k<sub>2</sub> / (1 + k<sub>2</sub>) )</div>
      <p>Muốn tăng R<sub>s</sub>: tăng N (cột dài hơn, hạt nhỏ hơn), tăng α (đổi pha động/pha tĩnh — hiệu quả nhất), hoặc tăng k (đổi thành phần pha động, nhiệt độ).</p>
      <p class="luu-y">R<sub>s</sub> tỉ lệ với √N: muốn R<sub>s</sub> tăng gấp đôi thì N phải tăng 4 lần (cột dài gấp 4).</p>
      <div class="vi-du"><b>Ví dụ.</b> Cột dài 30,0 cm, t<sub>M</sub> = 1,00 phút. Hai chất có t<sub>R1</sub> = 5,00 phút, t<sub>R2</sub> = 5,60 phút, W<sub>1</sub> = 0,40 phút, W<sub>2</sub> = 0,44 phút.<br>
        k<sub>1</sub> = (5,00 − 1,00)/1,00 = 4,00 ; k<sub>2</sub> = 4,60 ; α = 4,60 / 4,00 = 1,15<br>
        R<sub>s</sub> = 2 × (5,60 − 5,00) / (0,40 + 0,44) = <b>1,43</b> &lt; 1,5 → chưa tách hoàn toàn<br>
        N (theo chất 2) = 16 × (5,60 / 0,44)<sup>2</sup> ≈ 2,59·10<sup>3</sup> ; H = 300 mm / 2590 ≈ 0,116 mm</div>

      <h3>5. Định lượng trong sắc kí</h3>
      <ul>
        <li><b>Ngoại chuẩn</b>: dựng đường chuẩn diện tích pic theo nồng độ.</li>
        <li><b>Nội chuẩn</b>: thêm một lượng chất nội chuẩn (IS) biết trước vào cả chuẩn và mẫu, dùng tỉ số diện tích → bù sai số do thể tích tiêm, dao động thiết bị.</li>
      </ul>
      <div class="cong-thuc">Hệ số đáp ứng: F = ( A<sub>X</sub> / C<sub>X</sub> ) / ( A<sub>IS</sub> / C<sub>IS</sub> )</div>
      <div class="cong-thuc">C<sub>X</sub> = ( A<sub>X</sub> / A<sub>IS</sub> ) · C<sub>IS</sub> / F</div>
      <div class="vi-du"><b>Ví dụ.</b> Hỗn hợp chuẩn X và IS cùng 1,00 mg/mL cho diện tích 1200 và 1000 → F = 1,20.<br>
        Mẫu thêm IS 0,500 mg/mL cho diện tích X = 1500, IS = 800.<br>
        C<sub>X</sub> = (1500 / 800) × 0,500 / 1,20 = <b>0,781 mg/mL</b></div>
    `,
    baiTap: [],
  },
  {
    id: "sac-ki-ki-thuat",
    nhom: "Phân tích công cụ",
    icon: "🧫",
    ten: "Sắc kí: các kĩ thuật",
    moTa: "Sắc kí lớp mỏng, GC, HPLC, sắc kí ion",
    lyThuyet: `
      <h3>1. Sắc kí lớp mỏng (TLC)</h3>
      <p>Pha tĩnh là lớp silica gel (hoặc nhôm oxide) trải trên bản; pha động là dung môi, đi lên nhờ mao dẫn.</p>
      <div class="cong-thuc">R<sub>f</sub> = quãng đường chất đi / quãng đường dung môi đi &nbsp;(0 &lt; R<sub>f</sub> &lt; 1)</div>
      <div class="vi-du"><b>Ví dụ.</b> Vết chất cách vạch xuất phát 3,6 cm, tuyến dung môi cách 8,0 cm → R<sub>f</sub> = 3,6 / 8,0 = <b>0,45</b></div>
      <p>Dùng để định tính nhanh, kiểm tra độ tinh khiết, theo dõi phản ứng. Trên silica (phân cực), chất càng phân cực thì R<sub>f</sub> càng nhỏ.</p>

      <h3>2. Sắc kí khí (GC)</h3>
      <ul>
        <li><b>Pha động</b>: khí mang trơ (He, N<sub>2</sub>, H<sub>2</sub>) — chỉ mang chất đi, không tương tác.</li>
        <li><b>Đối tượng</b>: chất dễ bay hơi, bền nhiệt (hoặc dẫn xuất hóa cho dễ bay hơi).</li>
        <li><b>Cột</b>: cột mao quản (dài 15 – 100 m, pha tĩnh phủ thành trong) cho hiệu quả rất cao; cột nhồi.</li>
        <li><b>Nhiệt độ</b> là thông số quan trọng nhất: chạy chương trình nhiệt (tăng dần nhiệt độ lò cột) để tách hỗn hợp có nhiệt độ sôi khác xa nhau.</li>
      </ul>
      <p><b>Detector thường gặp:</b></p>
      <ul>
        <li><b>FID</b> (ion hóa ngọn lửa): nhạy với hợp chất hữu cơ chứa C–H, không nhạy với H<sub>2</sub>O, CO<sub>2</sub>.</li>
        <li><b>TCD</b> (dẫn nhiệt): vạn năng, không phá hủy mẫu, kém nhạy.</li>
        <li><b>ECD</b> (bắt electron): rất nhạy với hợp chất chứa halogen (thuốc trừ sâu clo hữu cơ).</li>
        <li><b>MS</b> (khối phổ): vừa định lượng vừa nhận danh chất (GC-MS).</li>
      </ul>

      <h3>3. Sắc kí lỏng hiệu năng cao (HPLC)</h3>
      <ul>
        <li>Pha động lỏng được bơm cao áp qua cột nhồi hạt rất nhỏ (3 – 5 µm, hoặc &lt; 2 µm với UHPLC).</li>
        <li>Phân tích được chất không bay hơi, kém bền nhiệt (dược phẩm, sinh học).</li>
        <li><b>Pha thường</b>: pha tĩnh phân cực (silica), pha động kém phân cực → chất kém phân cực ra trước.</li>
        <li><b>Pha đảo</b> (phổ biến nhất): pha tĩnh kém phân cực (C18, C8), pha động phân cực (nước + methanol/acetonitrile) → chất <b>phân cực ra trước</b>. Tăng tỉ lệ dung môi hữu cơ thì các chất ra nhanh hơn.</li>
        <li><b>Rửa giải đẳng dòng</b> (thành phần pha động không đổi) và <b>rửa giải gradient</b> (thay đổi thành phần theo thời gian — giống chương trình nhiệt trong GC).</li>
      </ul>
      <p><b>Detector:</b> UV-Vis / dãy diode (DAD, phổ biến nhất), huỳnh quang (rất nhạy, chọn lọc), chỉ số khúc xạ RI (vạn năng, kém nhạy), khối phổ (LC-MS).</p>

      <h3>4. Sắc kí ion và sắc kí rây phân tử</h3>
      <ul>
        <li><b>Sắc kí ion</b>: pha tĩnh là nhựa trao đổi ion; dùng xác định anion (F<sup>−</sup>, Cl<sup>−</sup>, NO<sub>3</sub><sup>−</sup>, SO<sub>4</sub><sup>2−</sup>...) và cation. Detector độ dẫn, có bộ triệt nền để giảm độ dẫn của pha động.</li>
        <li><b>Sắc kí rây phân tử (loại cỡ)</b>: tách theo kích thước phân tử; phân tử <b>lớn ra trước</b> (không lọt vào lỗ xốp). Dùng cho polymer, protein.</li>
      </ul>

      <h3>5. So sánh nhanh GC và HPLC</h3>
      <div class="bang-cuon">
        <table class="bang">
          <thead><tr><th></th><th>GC</th><th>HPLC</th></tr></thead>
          <tbody>
            <tr><td>Pha động</td><td>Khí trơ</td><td>Lỏng</td></tr>
            <tr><td>Chất phân tích</td><td>Dễ bay hơi, bền nhiệt</td><td>Không bay hơi, kém bền nhiệt</td></tr>
            <tr><td>Điều chỉnh tách</td><td>Nhiệt độ cột</td><td>Thành phần pha động</td></tr>
            <tr><td>Detector hay dùng</td><td>FID, ECD, MS</td><td>UV/DAD, huỳnh quang, MS</td></tr>
          </tbody>
        </table>
      </div>
    `,
    baiTap: [],
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
