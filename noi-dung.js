/* =========================================================
   NỘI DUNG HỌC TẬP của app — sửa/thêm bài ở file này.
   - CHUONG: mỗi chương có lý thuyết (lyThuyet) và bài tập (baiTap).
     Mỗi <h3> trong lý thuyết là một mục: app tự đánh số, tự làm mục lục và thanh điều hướng.
     dayDu: true → chương đã soạn đầy đủ (hiện nhãn "Đầy đủ").
     choDuyet: true → bản soạn mới, đã qua phản biện nhưng người quản trị chưa duyệt (hiện nhãn "Chờ duyệt").
   - TRA_CUU: các bảng tra cứu.
   Viết chỉ số dưới bằng <sub>, số mũ bằng <sup>. Ví dụ: H<sub>2</sub>O, 10<sup>-14</sup>
   ========================================================= */
const CHUONG = [
  {
    id: "mo-dau",
    choDuyet: true,
    nhom: "Cơ sở",
    icon: "🔬",
    ten: "Mở đầu",
    moTa: "Đối tượng, phân loại phương pháp, quy trình phân tích",
    dayDu: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Phân biệt chất phân tích, mẫu, nền mẫu; phân tích định tính, định lượng, đặc trưng.</li>
          <li>So sánh phương pháp hóa học và phương pháp công cụ.</li>
          <li>Nắm 6 bước của một quy trình phân tích và các tiêu chí chọn phương pháp.</li>
        </ul>
      </div>

      <h3>1. Hóa phân tích là gì?</h3>
      <p><b>Hóa phân tích</b> là khoa học về việc <b>tách, nhận danh và xác định lượng</b> các cấu tử có trong vật chất.</p>
      <ul>
        <li><b>Chất phân tích</b> (analyte): chất cần xác định.</li>
        <li><b>Mẫu</b> (sample): phần vật chất đem phân tích, chứa chất phân tích.</li>
        <li><b>Nền mẫu</b> (matrix): mọi thành phần còn lại của mẫu ngoài chất phân tích. Nền mẫu có thể gây cản trở phép đo.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 1.</b> Xác định hàm lượng vàng trong một chiếc nhẫn. Đâu là mẫu, đâu là chất phân tích?
        <details><summary>Xem lời giải</summary>
          Mẫu là chiếc nhẫn. Chất phân tích là Au (có thể thêm Cu, Ag nếu cần biết thành phần hợp kim). Các kim loại còn lại tạo thành nền mẫu.
        </details></div>

      <h3>2. Ba loại câu hỏi phân tích</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Loại</th><th>Trả lời câu hỏi</th><th>Ví dụ</th></tr></thead>
          <tbody>
            <tr><td>Định tính (qualitative)</td><td>Trong mẫu <b>có những gì</b>?</td><td>Tương ớt có chứa phẩm màu Rhodamine B không?</td></tr>
            <tr><td>Định lượng (quantitative)</td><td>Mỗi chất có <b>bao nhiêu</b>?</td><td>Hàm lượng caffeine trong chocolate là bao nhiêu mg/g?</td></tr>
            <tr><td>Đặc trưng (characterization)</td><td>Tính chất hóa lí, cấu trúc, hình thái ra sao?</td><td>Kích thước và hình dạng hạt nano bạc</td></tr>
          </tbody>
        </table>
      </div>
      <p>Hóa phân tích được dùng trong lâm sàng (xét nghiệm máu), dược (kiểm nghiệm thuốc), môi trường (kim loại nặng trong nước), pháp y, an toàn thực phẩm và kiểm soát chất lượng sản xuất.</p>

      <h3>3. Phân loại phương pháp định lượng</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Nhóm</th><th>Gồm</th><th>Đặc điểm</th></tr></thead>
          <tbody>
            <tr><td>Phương pháp hóa học (cổ điển)</td><td><b>Khối lượng</b> (gravimetric): cân sản phẩm.<br><b>Thể tích</b> (volumetric): đo thể tích dung dịch chuẩn — tức chuẩn độ.</td><td>Chính xác cao, rẻ, nhưng chậm; hợp với nồng độ lớn (cỡ %, mM trở lên)</td></tr>
            <tr><td>Phương pháp công cụ</td><td><b>Điện hóa</b> (đo thế, von-ampe...)<br><b>Quang phổ</b> (UV-Vis, AAS, AES...), <b>khối phổ</b> (MS)<br><b>Tách</b> (GC, HPLC, điện di mao quản CE)</td><td>Nhanh, nhạy, đo được lượng vết (ppm, ppb) nhưng thiết bị đắt; độ chính xác thường thấp hơn</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Phương pháp công cụ phần lớn là phép đo <b>tương đối</b>: phải so với dung dịch chuẩn (dựng đường chuẩn). Phương pháp khối lượng và chuẩn độ dựa trực tiếp trên hợp thức phản ứng.</p>

      <h3>4. Các bước của một quy trình phân tích</h3>
      <ol>
        <li><b>Xác định vấn đề, chọn quy trình</b>: cần đo chất gì, trong nền mẫu nào, cần độ chính xác bao nhiêu, ngân sách và thời gian ra sao.</li>
        <li><b>Lấy mẫu</b>: lấy được <b>mẫu đại diện</b> cho toàn bộ đối tượng.</li>
        <li><b>Chuẩn bị mẫu</b>: chuyển mẫu về dạng đo được (hòa tan, tách, làm giàu, loại hoặc che chất cản).</li>
        <li><b>Phân tích</b>: đo tín hiệu của mẫu và của các chuẩn (đường chuẩn), lặp lại nhiều lần.</li>
        <li><b>Báo cáo và diễn giải</b>: tính kết quả kèm độ không đảm bảo đo.</li>
        <li><b>Kết luận</b>: trả lời câu hỏi ban đầu.</li>
      </ol>
      <div class="vi-du"><b>Ví dụ 2.</b> Xác định caffeine trong chocolate bằng HPLC. Hãy chỉ ra các bước.
        <details><summary>Xem lời giải</summary>
          <ol>
            <li>Chọn phương pháp HPLC vì tách được caffeine khỏi theobromine có cấu trúc gần giống.</li>
            <li>Lấy mẫu: nghiền nhiều thanh chocolate, trộn đều rồi lấy phần đại diện.</li>
            <li>Chuẩn bị mẫu: loại chất béo bằng dung môi, chiết caffeine bằng nước nóng, lọc.</li>
            <li>Phân tích: tiêm dung dịch chuẩn caffeine và dịch chiết mẫu vào HPLC, so sánh diện tích pic.</li>
            <li>Báo cáo: hàm lượng caffeine (mg/g) kèm độ lệch chuẩn.</li>
            <li>Kết luận: so sánh với mức công bố trên nhãn.</li>
          </ol>
        </details></div>

      <h3>5. Lấy mẫu và chuẩn bị mẫu</h3>
      <ul>
        <li><b>Mẫu đồng nhất</b> (dung dịch đã khuấy đều): lấy một phần bất kì là đại diện.</li>
        <li><b>Mẫu không đồng nhất</b> (đất, quặng, thực phẩm): chia thành nhiều phần, lấy ngẫu nhiên nhiều phần nhỏ, gộp và trộn đều thành <b>mẫu gộp</b> (composite sample).</li>
        <li>Sai số do lấy mẫu không đại diện <b>không thể</b> sửa được ở các bước sau, dù máy đo chính xác đến đâu.</li>
      </ul>
      <p><b>Chuẩn bị mẫu</b> gồm:</p>
      <ul>
        <li><b>Hòa tan</b> mẫu: bằng nước, dung môi hữu cơ, acid mạnh (HCl, HNO<sub>3</sub>...) hoặc nung chảy với kiềm.</li>
        <li><b>Làm giàu</b>: tăng nồng độ chất phân tích khi quá thấp (chiết, cô đặc...).</li>
        <li><b>Loại chất cản</b> (interference) hoặc <b>che</b> (masking): dùng thuốc thử tạo phức bền với chất cản để nó không tham gia phản ứng đo.</li>
      </ul>

      <h3>6. Tiêu chí chọn phương pháp</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Tiêu chí</th><th>Ý nghĩa</th><th>Tiếng Anh</th></tr></thead>
          <tbody>
            <tr><td>Độ đúng</td><td>Kết quả gần giá trị thật</td><td>accuracy</td></tr>
            <tr><td>Độ chụm</td><td>Các lần đo lặp lại gần nhau</td><td>precision</td></tr>
            <tr><td>Độ nhạy</td><td>Tín hiệu thay đổi nhiều khi nồng độ thay đổi ít (độ dốc đường chuẩn lớn)</td><td>sensitivity</td></tr>
            <tr><td>Giới hạn phát hiện</td><td>Lượng chất nhỏ nhất phát hiện được một cách tin cậy</td><td>LOD</td></tr>
            <tr><td>Độ chọn lọc</td><td>Đo được chất phân tích mà ít bị chất khác trong mẫu cản trở</td><td>selectivity</td></tr>
            <tr><td>Độ bền vững</td><td>Kết quả ít bị ảnh hưởng khi điều kiện thay đổi nhỏ (nhiệt độ, người làm, hóa chất)</td><td>robustness (ruggedness)</td></tr>
          </tbody>
        </table>
      </div>
      <p>Ngoài ra còn cân nhắc: thời gian, chi phí, lượng mẫu cần dùng, mức độ an toàn.</p>
      <div class="vi-du"><b>Ví dụ 3.</b> Cần xác định Pb ở mức vài ppb trong nước uống. Nên chọn phương pháp chuẩn độ hay phương pháp công cụ? Vì sao?
        <details><summary>Xem lời giải</summary>
          Chọn <b>phương pháp công cụ</b> (ví dụ AAS lò graphit hoặc ICP-MS). Ở mức ppb, lượng Pb quá nhỏ để chuẩn độ hay cân; cần phương pháp có giới hạn phát hiện thấp và độ nhạy cao.
        </details></div>
    `,
    baiTap: [],
  },
  {
    id: "do-luong",
    choDuyet: true,
    nhom: "Cơ sở",
    icon: "📏",
    ten: "Đo lường hóa học",
    moTa: "Nồng độ, dụng cụ, pha chế, hợp thức, giới thiệu chuẩn độ",
    dayDu: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Đổi qua lại giữa các loại nồng độ: C<sub>M</sub>, C%, ppm, ppb (cả mẫu lỏng và mẫu rắn).</li>
          <li>Biết dùng đúng dụng cụ đo lường và tính lượng hóa chất để pha dung dịch.</li>
          <li>Tính kết quả phân tích khối lượng và chuẩn độ (trực tiếp, ngược, gián tiếp) từ hợp thức phản ứng.</li>
        </ul>
      </div>
<h3>1. Các cách biểu diễn nồng độ</h3>
      <div class="cong-thuc"><div class="nhan">Nồng độ mol (mol/L, kí hiệu M)</div>\[ C_\mathrm{M} = \frac{n}{V} = \frac{m}{M\cdot V} \]</div>
      <div class="cong-thuc"><div class="nhan">Nồng độ phần trăm khối lượng</div>\[ C\% = \frac{m_\text{ct}}{m_\text{dd}}\cdot100\% \]</div>
      <div class="cong-thuc"><div class="nhan">Nồng độ khối lượng (g/L, mg/L...)</div>\[ \rho = \frac{m_\text{ct}}{V} \]</div>
      <p><b>ppm và ppb</b> dùng cho lượng vết (nước, thực phẩm, môi trường):</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Đơn vị</th><th>Dung dịch (loãng, trong nước)</th><th>Mẫu rắn</th></tr></thead>
          <tbody>
            <tr><td>ppm</td><td>mg/L = µg/mL</td><td>mg/kg = µg/g</td></tr>
            <tr><td>ppb</td><td>µg/L = ng/mL</td><td>µg/kg = ng/g</td></tr>
          </tbody>
        </table>
      </div>
      <p>Ngoài ra: 1% = 10<sup>4</sup> ppm; 1 ppm = 10<sup>3</sup> ppb.</p>
      <p class="luu-y">Coi ppm ≈ mg/L (ppb ≈ µg/L) chỉ đúng với dung dịch loãng trong nước (khối lượng riêng ≈ 1 g/mL). Với mẫu rắn, ppm luôn là mg/kg.</p>
      <p><b>Nồng độ molan</b> (molality) = số mol chất tan / kg dung môi. Không phụ thuộc nhiệt độ vì không dùng thể tích.</p>
      <p><b>Nồng độ đương lượng</b> C<sub>N</sub> (tài liệu cũ hay dùng): C<sub>N</sub> = z·C<sub>M</sub>, với z là số H<sup>+</sup> trao đổi (phản ứng acid – base) hoặc số electron trao đổi (phản ứng oxi hóa – khử). Ví dụ H<sub>2</sub>SO<sub>4</sub> 0,1 M = 0,2 N khi phản ứng hết 2 nấc.</p>

      <h3>2. Đổi đơn vị nồng độ</h3>
      <div class="cong-thuc"><div class="nhan">C% sang C<sub>M</sub> (d: khối lượng riêng, g/mL)</div>\[ C_\mathrm{M} = \frac{10\cdot d\cdot C\%}{M} \]</div>
      <div class="cong-thuc"><div class="nhan">ppm ↔ C<sub>M</sub> (M: khối lượng mol, g/mol)</div>\[ \begin{gathered} C_\mathrm{M} = \frac{\mathrm{ppm}\cdot10^{-3}}{M} \\ \mathrm{ppm} = C_\mathrm{M}\cdot M\cdot10^{3} \end{gathered} \]</div>
      <div class="cong-thuc"><div class="nhan">ppb ↔ C<sub>M</sub></div>\[ \begin{gathered} C_\mathrm{M} = \frac{\mathrm{ppb}\cdot10^{-6}}{M} \\ \mathrm{ppb} = C_\mathrm{M}\cdot M\cdot10^{6} \end{gathered} \]</div>
      <div class="vi-du"><b>Ví dụ 1.</b> Dung dịch HCl đặc 37%, d = 1,19 g/mL (M = 36,46). Tính nồng độ mol.
        <details><summary>Xem lời giải</summary>
          \[ C_\mathrm{M} = \frac{10\cdot1,19\cdot37}{36,46} = \mathbf{12,1\ M} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 2.</b> Nước có hàm lượng chì 2,5 ppm. Tính nồng độ mol của Pb (M = 207,2).
        <details><summary>Xem lời giải</summary>
          2,5 ppm = 2,5 mg/L = 2,5·10<sup>−3</sup> g/L.
          \[ C_\mathrm{M} = \frac{2,5\cdot10^{-3}}{207,2} = \mathbf{1,2\cdot10^{-5}\ M} \]
        </details></div>

            <div class="vi-du"><b>Ví dụ 3.</b> Hòa tan 5,76 g KCl·MgCl<sub>2</sub>·6H<sub>2</sub>O (M = 277,85) trong nước rồi định mức thành 2,000 L. Tính: (a) [Mg<sup>2+</sup>]; (b) [Cl<sup>−</sup>]; (c) nồng độ % khối lượng/thể tích; (d) số mmol Cl<sup>−</sup> trong 25,0 mL dung dịch; (e) nồng độ K<sup>+</sup> theo ppm.
        <details><summary>Xem lời giải</summary>
          \[ n = \frac{5,76}{277,85} = 0,02073\ \mathrm{mol} \]
          (a) và (b):
          \[ \begin{aligned} [\mathrm{Mg^{2+}}] &= \frac{0,02073}{2,000} = \mathbf{0,0104\ M} \\ [\mathrm{Cl^-}] &= 3\cdot0,01037 = \mathbf{0,0311\ M} \end{aligned} \]
          (c) \( \dfrac{5,76\ \mathrm{g}}{2000\ \mathrm{mL}}\cdot100 = \mathbf{0,288\%\ (w/v)} \)<br>
          (d) \( n_\mathrm{Cl^-} = 0,031096\cdot25,0 = \mathbf{0,777\ mmol} \)<br>
          (e) \( \mathrm{K^+} = 0,01037\cdot39,10\cdot10^3 = \mathbf{405\ ppm} \)
        </details></div>

<h3>3. Pha chế dung dịch</h3>
      <p><b>a) Từ chất rắn</b> (V tính bằng lít; P là độ tinh khiết, %):</p>
      <div class="cong-thuc">\[ m = C_\mathrm{M}\cdot V\cdot M\cdot\frac{100}{P} \]</div>
      <p>Nếu chất ở dạng ngậm nước (CuSO<sub>4</sub>·5H<sub>2</sub>O, Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O...), dùng khối lượng mol <b>của cả tinh thể ngậm nước</b>.</p>
      <p><b>b) Pha loãng</b>: số mol chất tan không đổi.</p>
      <div class="cong-thuc">\[ C_1V_1 = C_2V_2 \]</div>
      <p><b>c) Từ dung dịch đặc có C% và d</b>: đổi sang C<sub>M</sub> (mục 2), rồi pha loãng.</p>
      <p><b>d) Trộn hai dung dịch cùng chất</b> (coi thể tích cộng được):</p>
      <div class="cong-thuc">\[ C = \frac{C_1V_1 + C_2V_2}{V_1 + V_2} \]</div>
      <div class="vi-du"><b>Ví dụ 4.</b> Tính khối lượng CuSO<sub>4</sub>·5H<sub>2</sub>O (M = 249,68) cần để pha 500,0 mL dung dịch Cu<sup>2+</sup> 0,0500 M.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} m &= 0,0500\cdot0,5000\cdot249,68 \\ &= \mathbf{6,24\ g} \end{aligned} \]
          Cân chính xác khoảng 6,24 g, hòa tan rồi định mức tới vạch trong bình định mức 500 mL.
        </details></div>
      <div class="vi-du"><b>Ví dụ 5.</b> Cần bao nhiêu mL H<sub>2</sub>SO<sub>4</sub> 98% (d = 1,84 g/mL, M = 98,08) để pha 500,0 mL H<sub>2</sub>SO<sub>4</sub> 0,100 M?
        <details><summary>Xem lời giải</summary>
          \[ C_\mathrm{M} = \frac{10\cdot1,84\cdot98}{98,08} = 18,4\ \mathrm{M} \]
          \[ \begin{aligned} V_1 &= \frac{C_2V_2}{C_1} = \frac{0,100\cdot500,0}{18,4} \\ &= \mathbf{2,72\ mL} \end{aligned} \]
          Nhớ: rót từ từ acid vào nước, không làm ngược lại.
        </details></div>
      <div class="vi-du"><b>Ví dụ 6.</b> Trộn 100,0 mL HCl 0,200 M với 300,0 mL HCl 0,100 M. Tính nồng độ dung dịch thu được.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} C &= \frac{0,200\cdot100,0 + 0,100\cdot300,0}{100,0 + 300,0} \\ &= \mathbf{0,125\ M} \end{aligned} \]
        </details></div>

      
      <h3>4. Dụng cụ đo lường</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Dụng cụ</th><th>Công dụng</th><th>Lưu ý</th></tr></thead>
          <tbody>
            <tr><td>Cân phân tích</td><td>Cân chính xác đến 0,1 mg (loại vi lượng đến 0,001 mg)</td><td>Chất hút ẩm: cân theo hiệu (cân cốc cân trước và sau khi lấy chất)</td></tr>
            <tr><td>Bình định mức</td><td>Pha dung dịch có thể tích chính xác</td><td>Hiệu chuẩn kiểu <b>chứa</b> (to contain, TC): thể tích đúng khi chất lỏng ở trong bình</td></tr>
            <tr><td>Pipet bầu</td><td>Lấy chính xác một thể tích cố định</td><td>Hiệu chuẩn kiểu <b>chảy ra</b> (to deliver, TD): không thổi giọt cuối</td></tr>
            <tr><td>Pipet chia độ, micropipet</td><td>Lấy thể tích thay đổi được</td><td>Micropipet dùng cho thể tích µL</td></tr>
            <tr><td>Buret</td><td>Nhỏ dung dịch chuẩn khi chuẩn độ</td><td>Đọc đến 1/10 vạch chia (0,01 mL với buret 50 mL); mắt ngang đáy mặt khum</td></tr>
            <tr><td>Ống đong, cốc có mỏ</td><td>Đong ước lượng</td><td>Không dùng cho phép đo chính xác</td></tr>
          </tbody>
        </table>
      </div>

      <h3>5. Hợp thức và phân tích khối lượng</h3>
      <p>Mọi phép tính định lượng dựa trên <b>hợp thức</b> (tỉ lệ mol) của phản ứng. Trong phân tích khối lượng, chất cần xác định được chuyển thành một <b>dạng cân</b> có công thức xác định rồi đem cân.</p>
      <div class="cong-thuc"><div class="nhan">Hệ số chuyển (a, b cân bằng số nguyên tử nguyên tố cần xác định)</div>\[ F = \frac{a\cdot M_\text{chất cần xác định}}{b\cdot M_\text{dạng cân}} \]</div>
      <div class="cong-thuc"><div class="nhan">Hàm lượng</div>\[ \%X = \frac{m_\text{dạng cân}\cdot F}{m_\text{mẫu}}\cdot100\% \]</div>
      <ul>
        <li><b>Dạng kết tủa</b> cần: độ tan rất nhỏ, tinh khiết, dễ lọc rửa. <b>Dạng cân</b> cần: đúng công thức, bền, khối lượng mol lớn.</li>
        <li>Kết tủa tinh thể (BaSO<sub>4</sub>...): tạo từ dung dịch loãng, nóng, thêm thuốc thử chậm, để muồi. Kết tủa vô định hình (Fe(OH)<sub>3</sub>...): dung dịch đặc, nóng, có chất điện li.</li>
        <li><b>Cộng kết</b>: tạp chất bị kéo theo kết tủa, thường gây sai số dương (có thể âm nếu tạp chất chứa chính ion cần xác định).</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 7.</b> Xác định sắt trong viên bổ sung sắt fumarat: 15 viên được hòa tan trong HCl, oxi hóa Fe<sup>2+</sup> thành Fe<sup>3+</sup> bằng H<sub>2</sub>O<sub>2</sub>, kết tủa Fe(OH)<sub>3</sub> bằng NH<sub>3</sub>, lọc, nung thu được 0,277 g Fe<sub>2</sub>O<sub>3</sub> (M = 159,69). Tính khối lượng Fe (55,845) trung bình trong mỗi viên.
        <details><summary>Xem lời giải</summary>
          \[ m_\mathrm{Fe} = 0,277\cdot\frac{2\cdot55,845}{159,69} = 0,194\ \mathrm{g} \]
          Mỗi viên chứa: \[ \frac{0,194}{15} = 0,0129\ \mathrm{g} = \mathbf{12,9\ mg} \]
        </details></div>

      <h3>6. Giới thiệu phương pháp chuẩn độ</h3>
      <ul>
        <li><b>Chất chuẩn</b> (titrant): dung dịch đã biết chính xác nồng độ, cho từ buret vào dung dịch <b>chất phân tích</b> (analyte).</li>
        <li><b>Điểm tương đương</b> (equivalence point): lượng chất chuẩn thêm vào vừa đủ phản ứng với chất phân tích theo hợp thức — là điểm lí thuyết.</li>
        <li><b>Điểm cuối</b> (end point): điểm ta thực sự quan sát được (chỉ thị đổi màu, thế hoặc độ hấp thụ thay đổi đột ngột) và dừng chuẩn độ.</li>
        <li><b>Sai số chuẩn độ</b> = chênh lệch giữa điểm cuối và điểm tương đương. Có thể hiệu chỉnh bằng chuẩn độ mẫu trắng.</li>
        <li><b>Chất gốc</b> (primary standard): tinh khiết cao, bền, không hút ẩm, khối lượng mol lớn — cân rồi pha là biết ngay nồng độ chính xác. Dung dịch không pha từ chất gốc (NaOH, HCl, KMnO<sub>4</sub>...) phải <b>chuẩn hóa</b> lại bằng chất gốc.</li>
        <li>Yêu cầu của phản ứng chuẩn độ: nhanh, hoàn toàn, đúng hợp thức, phát hiện được điểm cuối.</li>
      </ul>
      <div class="cong-thuc"><div class="nhan">Phản ứng aA + bB → sản phẩm</div>\[ \frac{n_\mathrm{A}}{a} = \frac{n_\mathrm{B}}{b} \]</div>
      <div class="cong-thuc"><div class="nhan">Tỉ lệ 1 : 1</div>\[ C_\mathrm{A}V_\mathrm{A} = C_\mathrm{B}V_\mathrm{B} \]</div>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Kiểu chuẩn độ</th><th>Cách làm</th><th>Dùng khi</th></tr></thead>
          <tbody>
            <tr><td>Trực tiếp</td><td>Chất chuẩn phản ứng thẳng với chất phân tích</td><td>Phản ứng nhanh, có chỉ thị phù hợp</td></tr>
            <tr><td>Ngược</td><td>Thêm lượng <b>dư biết trước</b> thuốc thử, rồi chuẩn độ lượng dư bằng chất chuẩn thứ hai</td><td>Phản ứng chậm, hoặc điểm cuối của chuẩn độ ngược rõ hơn</td></tr>
            <tr><td>Gián tiếp (thay thế)</td><td>Chuyển chất phân tích thành một chất khác có lượng tương đương, rồi chuẩn độ chất đó</td><td>Chất phân tích không phản ứng trực tiếp với chất chuẩn</td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 8.</b> Chuẩn độ 10,00 mL dung dịch HCl bằng NaOH 0,02000 M (chỉ thị phenolphtalein) hết 9,46 mL. Tính nồng độ HCl.
        <details><summary>Xem lời giải</summary>
          \[ C_\mathrm{HCl} = \frac{0,02000\cdot9,46}{10,00} = \mathbf{0,0189\ M} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 9.</b> <i>(Chuẩn độ ngược)</i> Hòa tan 0,2500 g đá vôi trong 50,00 mL HCl 0,1000 M. Lượng HCl dư chuẩn độ hết 10,00 mL NaOH 0,1000 M. Tính %CaCO<sub>3</sub> (M = 100,09).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} n_\text{HCl ban đầu} &= 5,000\cdot10^{-3}\ \mathrm{mol} \\ n_\text{HCl dư} &= 1,000\cdot10^{-3}\ \mathrm{mol} \\ n_\text{HCl phản ứng} &= 4,000\cdot10^{-3}\ \mathrm{mol} \end{aligned} \]
          CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O, nên n<sub>CaCO₃</sub> = 2,000·10<sup>−3</sup> mol:
          \[ \begin{aligned} \%\mathrm{CaCO_3} &= \frac{2,000\cdot10^{-3}\cdot100,09}{0,2500}\cdot100\% \\ &= \mathbf{80,07\%} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 10.</b> <i>(Chuẩn độ gián tiếp)</i> Ca<sup>2+</sup> trong 5,00 mL mẫu được kết tủa hết dưới dạng CaC<sub>2</sub>O<sub>4</sub>. Lọc, rửa, hòa tan kết tủa trong H<sub>2</sub>SO<sub>4</sub>, rồi chuẩn độ H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> sinh ra bằng KMnO<sub>4</sub> 0,00200 M hết 4,80 mL. Tính nồng độ Ca<sup>2+</sup>.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} &\ce{5H2C2O4 + 2MnO4- + 6H+} \\ &\qquad\ce{-> 10CO2 + 2Mn^2+ + 8H2O} \end{aligned} \]
          \[ \begin{aligned} n_\mathrm{MnO_4^-} &= 0,00200\cdot4,80\cdot10^{-3} \\ &= 9,60\cdot10^{-6}\ \mathrm{mol} \\ n_\mathrm{Ca^{2+}} &= n_\mathrm{H_2C_2O_4} = \tfrac{5}{2}\cdot9,60\cdot10^{-6} \\ &= 2,40\cdot10^{-5}\ \mathrm{mol} \\ C_\mathrm{Ca^{2+}} &= \frac{2,40\cdot10^{-5}}{5,00\cdot10^{-3}} \\ &= \mathbf{4,80\cdot10^{-3}\ M} \end{aligned} \]
        </details></div>

      <h3>7. Tóm tắt công thức</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Nội dung</th><th>Công thức</th><th>Ghi chú</th></tr></thead>
          <tbody>
            <tr><td>Đổi C% → C<sub>M</sub></td><td>\( C_\mathrm{M} = \dfrac{10\,d\,C\%}{M} \)</td><td>d tính bằng g/mL</td></tr>
            <tr><td>Đổi ppm ↔ C<sub>M</sub></td><td>\( C_\mathrm{M} = \dfrac{\mathrm{ppm}\cdot10^{-3}}{M} \)</td><td>Dung dịch loãng</td></tr>
            <tr><td>Pha từ chất rắn</td><td>\( m = C_\mathrm{M}VM\cdot\dfrac{100}{P} \)</td><td>V tính bằng lít</td></tr>
            <tr><td>Pha loãng</td><td>\( C_1V_1 = C_2V_2 \)</td><td>Cùng đơn vị hai vế</td></tr>
            <tr><td>Phân tích khối lượng</td><td>\( \%X = \dfrac{m\cdot F}{m_\text{mẫu}}\cdot100 \)</td><td>F: hệ số chuyển</td></tr>
            <tr><td>Chuẩn độ</td><td>\( \dfrac{n_\mathrm{A}}{a} = \dfrac{n_\mathrm{B}}{b} \)</td><td>Ngược: trừ lượng dư</td></tr>
          </tbody>
        </table>
      </div>
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
      {
        de: "Phân tích 0,5000 g mẫu thu được 0,4660 g BaSO<sub>4</sub> (M = 233,39). Tính % lưu huỳnh (S = 32,06) trong mẫu.",
        dapAn: "F = 32,06 / 233,39 = 0,13737<br>%S = 0,4660 × 0,13737 / 0,5000 × 100% = <b>12,80%</b>",
      },
    ],
  },
  {
    id: "thong-ke",
    choDuyet: true,
    nhom: "Cơ sở",
    icon: "📊",
    ten: "Sai số và thống kê",
    moTa: "Chữ số có nghĩa, sai số, lan truyền, Q, t, F",
    dayDu: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Ghi kết quả đúng số chữ số có nghĩa.</li>
          <li>Phân biệt sai số hệ thống, ngẫu nhiên; tính lan truyền sai số.</li>
          <li>Kiểm tra số liệu ngờ (chuẩn Q) <b>trước</b>, rồi mới tính x̄, s, RSD và khoảng tin cậy.</li>
          <li>So sánh kết quả với giá trị thật, so sánh hai phương pháp (chuẩn t, chuẩn F).</li>
        </ul>
      </div>
<h3>1. Chữ số có nghĩa và làm tròn</h3>
      <ul>
        <li>Chữ số có nghĩa gồm mọi chữ số chắc chắn và <b>một</b> chữ số cuối không chắc chắn.</li>
        <li>Số 0 đứng đầu không có nghĩa (0,0025 có 2 CSCN); số 0 ở giữa hoặc ở cuối phần thập phân có nghĩa (20,00 có 4 CSCN).</li>
        <li>Viết dạng lũy thừa để rõ ràng: 1200 có thể là 1,2·10<sup>3</sup> (2 CSCN) hoặc 1,200·10<sup>3</sup> (4 CSCN).</li>
      </ul>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Phép tính</th><th>Quy tắc</th><th>Ví dụ</th></tr></thead>
          <tbody>
            <tr><td>Cộng, trừ</td><td>Giữ số chữ số thập phân bằng số hạng ít chữ số thập phân nhất</td><td>12,11 + 0,3 = 12,4</td></tr>
            <tr><td>Nhân, chia</td><td>Giữ số CSCN bằng số hạng ít CSCN nhất</td><td>2,5 × 3,142 = 7,9</td></tr>
            <tr><td>Logarit</td><td>Số chữ số thập phân của lg = số CSCN của số ban đầu</td><td>[H<sup>+</sup>] = 2,0·10<sup>−3</sup> → pH = 2,70</td></tr>
          </tbody>
        </table>
      </div>
      <p>Khi đọc dụng cụ có vạch chia, đọc hết các vạch và <b>ước lượng thêm 1/10 khoảng chia</b>: chữ số ước lượng đó là chữ số không chắc chắn cuối cùng.</p>
      <p><b>Làm tròn</b>: chữ số bỏ đi &lt; 5 thì giữ nguyên, &gt; 5 thì tăng 1; nếu đúng bằng 5 thì làm tròn về số <b>chẵn</b> gần nhất (ví dụ 0,125 → 0,12 ; 0,135 → 0,14).</p>
      <p class="luu-y">Chỉ làm tròn ở <b>kết quả cuối cùng</b>. Các bước trung gian giữ thêm 1–2 chữ số để không cộng dồn sai số làm tròn.</p>

      <h3>2. Sai số trong phân tích</h3>
      <div class="cong-thuc"><div class="nhan">Sai số tuyệt đối (μ: giá trị thật)</div>\[ E = x - \mu \]</div>
      <div class="cong-thuc"><div class="nhan">Sai số tương đối</div>\[ E_r = \frac{x - \mu}{\mu}\cdot100\% \]</div>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Loại sai số</th><th>Đặc điểm</th><th>Cách xử lí</th></tr></thead>
          <tbody>
            <tr><td>Hệ thống</td><td>Lệch về một phía, có nguyên nhân xác định (dụng cụ chưa hiệu chuẩn, hóa chất bẩn, phương pháp, người làm). Ảnh hưởng <b>độ đúng</b>.</td><td>Tìm và loại nguyên nhân</td></tr>
            <tr><td>Ngẫu nhiên</td><td>Lệch cả hai phía, không theo quy luật. Ảnh hưởng <b>độ chụm</b>.</td><td>Làm lặp lại, xử lí thống kê</td></tr>
            <tr><td>Thô</td><td>Do nhầm lẫn (đọc sai, đổ rớt mẫu...), kết quả lệch hẳn.</td><td>Loại bỏ (chuẩn Q)</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><b>Độ đúng</b>: mức gần của kết quả trung bình với giá trị thật.</li>
        <li><b>Độ chụm</b>: mức gần nhau giữa các lần đo lặp lại. Kết quả có thể rất chụm mà vẫn sai (do sai số hệ thống).</li>
        <li><b>Phát hiện sai số hệ thống</b>: phân tích mẫu chuẩn (CRM), làm mẫu trắng, so sánh với phương pháp khác, thêm chuẩn để tính độ thu hồi.</li>
      </ul>

      <h3>3. Lan truyền sai số</h3>
      <p>Kết quả cuối thường được tính từ nhiều đại lượng đo, mỗi đại lượng có độ lệch chuẩn riêng.</p>
      <div class="cong-thuc"><div class="nhan">Phép cộng, trừ: y = a + b − c</div>\[ s_y = \sqrt{s_a^2 + s_b^2 + s_c^2} \]</div>
      <div class="cong-thuc"><div class="nhan">Phép nhân, chia: y = a·b / c</div>\[ \frac{s_y}{y} = \sqrt{\left(\frac{s_a}{a}\right)^2 + \left(\frac{s_b}{b}\right)^2 + \left(\frac{s_c}{c}\right)^2} \]</div>
      <div class="vi-du"><b>Ví dụ 1.</b> Đọc buret lúc đầu và lúc cuối, mỗi lần có s = 0,02 mL. Tính độ lệch chuẩn của thể tích tiêu tốn.
        <details><summary>Xem lời giải</summary>
          \[ s_V = \sqrt{0,02^2 + 0,02^2} = \mathbf{0,028\ mL} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 2.</b> Chuẩn độ 25,00 (s = 0,02) mL HCl hết 20,00 (s = 0,02) mL NaOH 0,1000 (s = 0,0002) M. Tính C<sub>HCl</sub> kèm độ lệch chuẩn.
        <details><summary>Xem lời giải</summary>
          \[ C_\mathrm{HCl} = \frac{0,1000\cdot20,00}{25,00} = 0,08000\ \mathrm{M} \]
          \[ \begin{aligned} \frac{s_C}{C} &= \Bigl[\left(\tfrac{0,0002}{0,1000}\right)^2 + \left(\tfrac{0,02}{20,00}\right)^2 \\ &\qquad + \left(\tfrac{0,02}{25,00}\right)^2\Bigr]^{1/2} \\ &= 2,4\cdot10^{-3} \end{aligned} \]
          \[ \begin{aligned} s_C &= 0,08000\cdot2,4\cdot10^{-3} = 0,00019 \\ C &= \mathbf{0,0800 \pm 0,0002\ M} \end{aligned} \]
        </details></div>

            <p><b>Lan truyền sai số hệ thống</b> (ví dụ sai số của khối lượng nguyên tử, dung sai dụng cụ chưa hiệu chuẩn):</p>
      <ul>
        <li>Giá trị cho dạng x ± a với phân bố đều (chữ nhật), như khối lượng nguyên tử: độ không đảm bảo chuẩn \( u = \dfrac{a}{\sqrt{3}} \).</li>
        <li>Phân tử có n nguyên tử cùng loại: độ không đảm bảo là n·u (các sai số cùng dấu cộng thẳng). Các nguyên tố khác nhau thì kết hợp theo quy tắc cộng bình phương ở trên.</li>
        <li>Dùng một pipet chưa hiệu chuẩn n lần: sai số hệ thống <b>cộng thẳng</b> (n × dung sai). Pipet đã hiệu chuẩn thì chỉ còn sai số ngẫu nhiên, dùng quy tắc cộng bình phương.</li>
      </ul>
<h3>4. Xử lí thống kê kết quả</h3>
      <div class="cong-thuc"><div class="nhan">Trung bình và độ lệch chuẩn (n lần đo)</div>\[ \bar{x} = \frac{\sum x_i}{n} \qquad s = \sqrt{\frac{\sum\left(x_i - \bar{x}\right)^2}{n - 1}} \]</div>
      <div class="cong-thuc"><div class="nhan">Độ lệch chuẩn tương đối (hệ số biến thiên)</div>\[ \mathrm{RSD} = \frac{s}{\bar{x}}\cdot100\% \]</div>
      <div class="cong-thuc"><div class="nhan">Khoảng tin cậy của giá trị thật</div>\[ \mu = \bar{x} \pm \frac{t\cdot s}{\sqrt{n}} \]</div>
      <p>t tra bảng Student theo bậc tự do f = n − 1 và độ tin cậy (thường 95%):</p>
      <div class="bang-cuon">
        <table class="bang bang-hep">
          <thead><tr><th>f = n − 1</th><th>t (95%)</th></tr></thead>
          <tbody><tr><td>1</td><td>12,71</td></tr><tr><td>2</td><td>4,30</td></tr><tr><td>3</td><td>3,18</td></tr><tr><td>4</td><td>2,78</td></tr><tr><td>5</td><td>2,57</td></tr><tr><td>6</td><td>2,45</td></tr><tr><td>8</td><td>2,31</td></tr><tr><td>10</td><td>2,23</td></tr></tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 3.</b> Bốn lần xác định hàm lượng một chất cho kết quả (%): 10,12 ; 10,15 ; 10,10 ; 10,14. Tính x̄, s, RSD và khoảng tin cậy 95%.
        <details><summary>Xem lời giải</summary>
          Kiểm tra số liệu ngờ trước (mục 5): với 10,10, Q = (10,12 − 10,10)/(10,15 − 10,10) = 0,40 &lt; Q<sub>bảng</sub> = 0,829 (n = 4, 95%) → giữ; với 10,15, Q = 0,20 → giữ. Tổng 4 giá trị: 10,12 + 10,15 + 10,10 + 10,14 = 40,51.
          \[ \begin{aligned} \bar{x} &= \frac{40,51}{4} = 10,13 \\ s &= 0,022 \\ \mathrm{RSD} &= \frac{0,022}{10,13}\cdot100\% = 0,22\% \end{aligned} \]
          Với f = 3, t = 3,18:
          \[ \begin{aligned} \mu &= 10,13 \pm \frac{3,18\cdot0,0222}{\sqrt{4}} \\ &= \mathbf{10,13 \pm 0,04\ \%} \end{aligned} \]
        </details></div>

      <h3>5. Loại số liệu ngờ: chuẩn Q (Dixon)</h3>
      <p>Khi một kết quả lệch hẳn so với các kết quả còn lại, phải kiểm tra bằng chuẩn Q <b>trước khi</b> tính trung bình, độ lệch chuẩn và khoảng tin cậy. Xếp dãy theo thứ tự tăng dần rồi tính:</p>
      <div class="cong-thuc"><div class="nhan">x<sub>1</sub>: giá trị ngờ ; x<sub>2</sub>: giá trị gần x<sub>1</sub> nhất</div>\[ Q_\text{tính} = \frac{\left|x_1 - x_2\right|}{x_\text{max} - x_\text{min}} \]</div>
      <p>Nếu Q<sub>tính</sub> &gt; Q<sub>bảng</sub> (thường dùng mức tin cậy <b>95%</b>) thì loại giá trị ngờ; ngược lại phải giữ.</p>
      <div class="bang-cuon">
        <table class="bang bang-hep">
          <thead><tr><th>n</th><th>Q (90%)</th><th>Q (95%)</th></tr></thead>
          <tbody><tr><td>3</td><td>0,941</td><td>0,970</td></tr><tr><td>4</td><td>0,765</td><td>0,829</td></tr><tr><td>5</td><td>0,642</td><td>0,710</td></tr><tr><td>6</td><td>0,560</td><td>0,625</td></tr><tr><td>7</td><td>0,507</td><td>0,568</td></tr><tr><td>8</td><td>0,468</td><td>0,526</td></tr><tr><td>9</td><td>0,437</td><td>0,493</td></tr><tr><td>10</td><td>0,412</td><td>0,466</td></tr></tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 4.</b> Kết quả 5 lần chuẩn độ (mL): 20,12 ; 20,15 ; 20,18 ; 20,14 ; 20,45. Có loại được 20,45 không (độ tin cậy 95%)?
        <details><summary>Xem lời giải</summary>
          Xếp tăng dần: 20,12 ; 20,14 ; 20,15 ; 20,18 ; 20,45. Giá trị gần 20,45 nhất là 20,18.
          \[ Q_\text{tính} = \frac{20,45 - 20,18}{20,45 - 20,12} = \frac{0,27}{0,33} = 0,82 \]
          Q<sub>tính</sub> = 0,82 &gt; Q<sub>bảng</sub> = 0,710 (n = 5) → <b>loại 20,45</b>. Trung bình của 4 giá trị còn lại là 20,15 mL.
        </details></div>

            <div class="vi-du"><b>Ví dụ 5.</b> Bảy lần đo cho kết quả: 24,9 ; 24,7 ; 23,2 ; 24,5 ; 25,1 ; 24,4 ; 24,3. Kiểm tra giá trị ngờ (95%) rồi tính x̄, s, RSD và khoảng tin cậy 95%.
        <details><summary>Xem lời giải</summary>
          Xếp tăng dần: 23,2 ; 24,3 ; 24,4 ; 24,5 ; 24,7 ; 24,9 ; 25,1. Giá trị ngờ là 23,2.
          \[ \begin{aligned} Q_\text{tính} &= \frac{24,3 - 23,2}{25,1 - 23,2} = \frac{1,1}{1,9} \\ &= 0,58 > Q_\text{bảng} = 0,568 \end{aligned} \]
          → loại 23,2. Với 6 giá trị còn lại:
          \[ \begin{aligned} \bar{x} &= 24,65 \\ s &= 0,31 \\ \mathrm{RSD} &= \frac{0,31}{24,65}\cdot100\% = 1,3\% \\ \mu &= 24,65 \pm \frac{2,57\cdot0,31}{\sqrt{6}} \\ &= 24,65 \pm 0,32 \end{aligned} \]
          Số liệu gốc chỉ có 1 chữ số thập phân, nên làm tròn kết quả cuối (24,65 làm tròn về số chẵn): <b>μ = 24,6 ± 0,3</b>.
          (t = 2,57 với f = 5.)
        </details></div>
<h3>6. Kiểm tra sai số hệ thống</h3>
      <p><b>So sánh trung bình với giá trị thật</b> (ví dụ khi phân tích mẫu chuẩn):</p>
      <div class="cong-thuc">\[ t_\text{tính} = \frac{\left|\bar{x} - \mu\right|\sqrt{n}}{s} \]</div>
      <p>Nếu t<sub>tính</sub> &gt; t<sub>bảng</sub> (f = n − 1): khác biệt có ý nghĩa → phương pháp có sai số hệ thống.</p>
      <p>Cách tương đương: tính khoảng tin cậy 95% của x̄. Nếu giá trị thật μ <b>nằm ngoài</b> khoảng tin cậy thì có sai số hệ thống.</p>
      <p><b>So sánh độ chụm của hai phương pháp</b> (chuẩn F), với s<sub>1</sub> ≥ s<sub>2</sub>:</p>
      <div class="cong-thuc">\[ F_\text{tính} = \frac{s_1^2}{s_2^2} \]</div>
      <p>Nếu F<sub>tính</sub> &gt; F<sub>bảng</sub> thì hai phương pháp có độ chụm khác nhau.</p>
      <p><b>So sánh hai giá trị trung bình</b> (chuẩn t, khi hai độ lệch chuẩn không khác nhau đáng kể theo chuẩn F):</p>
      <div class="cong-thuc"><div class="nhan">Độ lệch chuẩn gộp</div>\[ s_\text{gộp} = \sqrt{\frac{s_1^2(n_1 - 1) + s_2^2(n_2 - 1)}{n_1 + n_2 - 2}} \]</div>
      <div class="cong-thuc"><div class="nhan">Bậc tự do f = n<sub>1</sub> + n<sub>2</sub> − 2</div>\[ t_\text{tính} = \frac{\left|\bar{x}_1 - \bar{x}_2\right|}{s_\text{gộp}}\sqrt{\frac{n_1n_2}{n_1 + n_2}} \]</div>
      <p>Nếu t<sub>tính</sub> &gt; t<sub>bảng</sub> thì hai kết quả khác nhau có ý nghĩa thống kê.</p>
      <div class="vi-du"><b>Ví dụ 6.</b> Mẫu chuẩn có hàm lượng thật 10,00%. Dùng số liệu ví dụ 3 (x̄ = 10,1275 ; s = 0,02217 ; n = 4), phương pháp có sai số hệ thống không?
        <details><summary>Xem lời giải</summary>
          \[ t_\text{tính} = \frac{\left|10,1275 - 10,00\right|\cdot\sqrt{4}}{0,02217} = 11,5 \]
          t<sub>tính</sub> = 11,5 &gt; t<sub>bảng</sub> = 3,18 → <b>có sai số hệ thống</b>: kết quả rất chụm nhưng lệch cao so với giá trị thật.
        </details></div>

            <div class="vi-du"><b>Ví dụ 7.</b> Hai phương pháp phân tích cùng một mẫu, mỗi phương pháp 5 lần: phương pháp 1 cho x̄<sub>1</sub> = 10,24 ; s<sub>1</sub> = 0,12. Phương pháp 2 cho x̄<sub>2</sub> = 10,41 ; s<sub>2</sub> = 0,10. Hai kết quả có khác nhau đáng kể không (95%)? Biết F<sub>bảng</sub>(4, 4) = 6,39 ; t<sub>bảng</sub>(f = 8) = 2,31.
        <details><summary>Xem lời giải</summary>
          \[ F_\text{tính} = \frac{0,12^2}{0,10^2} = 1,44 < 6,39 \]
          → độ chụm hai phương pháp không khác nhau có ý nghĩa, được gộp s:
          \[ \begin{aligned} s_\text{gộp} &= \sqrt{\frac{0,12^2\cdot4 + 0,10^2\cdot4}{8}} = 0,110 \\ t_\text{tính} &= \frac{\left|10,24 - 10,41\right|}{0,1105}\sqrt{\frac{5\cdot5}{5 + 5}} = 2,43 \end{aligned} \]
          t<sub>tính</sub> = 2,43 &gt; 2,31 → <b>hai kết quả khác nhau có ý nghĩa</b> (ít nhất một phương pháp có sai số hệ thống).
        </details></div>
<h3>7. Tóm tắt công thức</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Nội dung</th><th>Công thức</th><th>Ghi chú</th></tr></thead>
          <tbody>
            <tr><td>Lan truyền (cộng, trừ)</td><td>\( s_y = \sqrt{s_a^2 + s_b^2} \)</td><td>Cộng bình phương s tuyệt đối</td></tr>
            <tr><td>Lan truyền (nhân, chia)</td><td>\( \dfrac{s_y}{y} = \sqrt{\left(\dfrac{s_a}{a}\right)^2 + \left(\dfrac{s_b}{b}\right)^2} \)</td><td>Cộng bình phương s tương đối</td></tr>
            <tr><td>Chuẩn F</td><td>\( F = \dfrac{s_1^2}{s_2^2} \)</td><td>s<sub>1</sub> ≥ s<sub>2</sub></td></tr>
            <tr><td>So sánh hai trung bình</td><td>\( t = \dfrac{|\bar{x}_1 - \bar{x}_2|}{s_\text{gộp}}\sqrt{\dfrac{n_1n_2}{n_1+n_2}} \)</td><td>f = n<sub>1</sub> + n<sub>2</sub> − 2</td></tr>
            <tr><td>Độ lệch chuẩn</td><td>\( s = \sqrt{\dfrac{\sum(x_i - \bar{x})^2}{n-1}} \)</td><td>n − 1 bậc tự do</td></tr>
            <tr><td>Khoảng tin cậy</td><td>\( \mu = \bar{x} \pm \dfrac{ts}{\sqrt{n}} \)</td><td>t tra theo f = n − 1</td></tr>
            <tr><td>Chuẩn Q</td><td>\( Q = \dfrac{|x_1 - x_2|}{x_\text{max} - x_\text{min}} \)</td><td>Q<sub>tính</sub> &gt; Q<sub>bảng</sub> → loại</td></tr>
            <tr><td>Chuẩn t</td><td>\( t = \dfrac{|\bar{x} - \mu|\sqrt{n}}{s} \)</td><td>t<sub>tính</sub> &gt; t<sub>bảng</sub> → có sai số hệ thống</td></tr>
          </tbody>
        </table>
      </div>
    `,
    baiTap: [],
  },
  {
    id: "can-bang",
    nhom: "Cân bằng và chuẩn độ",
    icon: "⚖️",
    ten: "Cân bằng hóa học",
    moTa: "Hằng số K, Le Chatelier, tạo phức, tích số tan, hoạt độ, bảo toàn",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Viết được biểu thức hằng số cân bằng và biến đổi K khi đảo, nhân hệ số hoặc cộng các phản ứng.</li>
          <li>Dùng K<sub>a</sub>, K<sub>b</sub>, K<sub>w</sub>, K<sub>f</sub> (β), K<sub>sp</sub> để dự đoán chiều phản ứng, tính độ tan và xét điều kiện kết tủa.</li>
          <li>Tính lực ion, hệ số hoạt độ; viết phương trình bảo toàn điện tích và bảo toàn khối lượng.</li>
        </ul>
      </div>
      <h3>1. Hằng số cân bằng</h3>
      <div class="cong-thuc"><div class="nhan">Phản ứng aA + bB ⇌ cC + dD</div>\[ K = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b} \]</div>
      <ul>
        <li>Chất tan tính bằng nồng độ mol (M); chất khí tính bằng áp suất riêng phần (bar).</li>
        <li><b>Chất rắn nguyên chất và dung môi</b> (H<sub>2</sub>O) không có mặt trong biểu thức K, vì hoạt độ của chúng bằng 1.</li>
        <li>K ≫ 1: cân bằng lệch về phía sản phẩm. K ≪ 1: lệch về phía chất đầu.</li>
        <li>K chỉ phụ thuộc nhiệt độ, không phụ thuộc nồng độ ban đầu.</li>
      </ul>
      <p><b>Thương số phản ứng Q</b> có cùng biểu thức với K nhưng dùng nồng độ tại thời điểm đang xét:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>So sánh</th><th>Phản ứng tự diễn ra theo chiều</th></tr></thead>
          <tbody>
            <tr><td>Q &lt; K</td><td>Thuận (tạo thêm sản phẩm)</td></tr>
            <tr><td>Q = K</td><td>Hệ đang cân bằng</td></tr>
            <tr><td>Q &gt; K</td><td>Nghịch (tạo lại chất đầu)</td></tr>
          </tbody>
        </table>
      </div>

      <h3>2. Biến đổi hằng số cân bằng</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Thao tác với phương trình</th><th>Hằng số mới</th></tr></thead>
          <tbody>
            <tr><td>Đảo chiều phản ứng</td><td>K' = 1/K</td></tr>
            <tr><td>Nhân cả phương trình với n</td><td>K' = K<sup>n</sup></td></tr>
            <tr><td>Cộng hai phản ứng</td><td>K<sub>3</sub> = K<sub>1</sub>·K<sub>2</sub></td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 1.</b> Tính hằng số cân bằng của phản ứng CH<sub>3</sub>COOH + NH<sub>3</sub> ⇌ CH<sub>3</sub>COO<sup>−</sup> + NH<sub>4</sub><sup>+</sup>. Biết pK<sub>a</sub>(CH<sub>3</sub>COOH) = 4,75; pK<sub>b</sub>(NH<sub>3</sub>) = 4,75.
        <details><summary>Xem lời giải</summary>
          Viết phản ứng thành tổng của ba phản ứng đã biết hằng số:
          \[ \begin{gathered} \mathrm{CH_3COOH} \rightleftharpoons \mathrm{CH_3COO^-} + \mathrm{H^+} \\ K_\mathrm{a} = 10^{-4,75} \\[6pt] \mathrm{NH_3} + \mathrm{H_2O} \rightleftharpoons \mathrm{NH_4^+} + \mathrm{OH^-} \\ K_\mathrm{b} = 10^{-4,75} \\[6pt] \mathrm{H^+} + \mathrm{OH^-} \rightleftharpoons \mathrm{H_2O} \\ 1/K_\mathrm{w} = 10^{14} \end{gathered} \]
          \[ \begin{aligned} K &= \frac{K_\mathrm{a}K_\mathrm{b}}{K_\mathrm{w}} = 10^{-4,75-4,75+14} \\ &= 10^{4,50} = \mathbf{3,2\cdot10^{4}} \end{aligned} \]
          K ≫ 1 nên acid acetic phản ứng gần như hoàn toàn với amoniac.
        </details></div>

      <h3>3. Nguyên lí Le Chatelier</h3>
      <p>Khi một hệ đang cân bằng bị tác động, cân bằng chuyển dịch theo chiều <b>làm giảm</b> tác động đó.</p>
      <ul>
        <li><b>Nồng độ</b>: thêm một chất thì cân bằng chuyển dịch theo chiều tiêu thụ chất đó; lấy bớt một chất thì cân bằng chuyển dịch theo chiều tạo ra chất đó. K không đổi, chỉ Q thay đổi.</li>
        <li><b>Áp suất</b> (hệ có chất khí): tăng áp suất thì cân bằng chuyển dịch về phía có ít phân tử khí hơn.</li>
        <li><b>Nhiệt độ</b>: tăng nhiệt độ thì cân bằng chuyển dịch theo chiều thu nhiệt. Đây là tác động duy nhất <b>làm thay đổi K</b>: phản ứng thu nhiệt có K tăng khi tăng nhiệt độ, phản ứng tỏa nhiệt có K giảm.</li>
      </ul>
      <p>Ứng dụng trong phân tích: thêm ion chung để kết tủa hoàn toàn hơn (mục 6); thêm NH<sub>3</sub> để hòa tan AgCl vì NH<sub>3</sub> "kéo" Ag<sup>+</sup> ra khỏi cân bằng tan (mục 5).</p>

      <h3>4. Cân bằng acid – base và tích số ion của nước</h3>
      <p>Theo Brønsted – Lowry, <b>acid</b> là chất cho proton (H<sup>+</sup>), <b>base</b> là chất nhận proton. Acid mất một proton thành base liên hợp của nó, ví dụ các cặp CH<sub>3</sub>COOH/CH<sub>3</sub>COO<sup>−</sup> và NH<sub>4</sub><sup>+</sup>/NH<sub>3</sub>.</p>
      <div class="cong-thuc"><div class="nhan">Hằng số acid và hằng số base</div>\[ \begin{gathered} \mathrm{HA} \rightleftharpoons \mathrm{H^+} + \mathrm{A^-} \\ \Ka = \frac{\Hp[\mathrm{A^-}]}{[\mathrm{HA}]} \\[6pt] \mathrm{B} + \mathrm{H_2O} \rightleftharpoons \mathrm{BH^+} + \mathrm{OH^-} \\ \Kb = \frac{[\mathrm{BH^+}]\OH}{[\mathrm{B}]} \end{gathered} \]</div>
      <p>K<sub>a</sub> (K<sub>b</sub>) càng nhỏ thì acid (base) càng yếu. Acid nhiều nấc (H<sub>2</sub>CO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>...) có nhiều hằng số K<sub>a1</sub> &gt; K<sub>a2</sub> &gt; K<sub>a3</sub>.</p>
      <div class="bang-cuon">
        <table class="bang bang-hep">
          <thead><tr><th>Acid</th><th>K<sub>a</sub> (25 °C)</th></tr></thead>
          <tbody>
            <tr><td>HF</td><td>7,1·10<sup>−4</sup></td></tr>
            <tr><td>HCOOH (acid formic)</td><td>1,7·10<sup>−4</sup></td></tr>
            <tr><td>CH<sub>3</sub>CH(OH)COOH (acid lactic)</td><td>1,4·10<sup>−4</sup></td></tr>
            <tr><td>C<sub>6</sub>H<sub>5</sub>COOH (acid benzoic)</td><td>6,5·10<sup>−5</sup></td></tr>
            <tr><td>CH<sub>3</sub>COOH (acid acetic)</td><td>1,8·10<sup>−5</sup></td></tr>
            <tr><td>HOCl</td><td>3,0·10<sup>−8</sup></td></tr>
            <tr><td>HCN</td><td>4,9·10<sup>−10</sup></td></tr>
            <tr><td>H<sub>2</sub>CO<sub>3</sub></td><td>K<sub>a1</sub> = 4,2·10<sup>−7</sup>; K<sub>a2</sub> = 4,8·10<sup>−11</sup></td></tr>
            <tr><td>H<sub>3</sub>PO<sub>4</sub></td><td>K<sub>a1</sub> = 7,5·10<sup>−3</sup>; K<sub>a2</sub> = 6,2·10<sup>−8</sup>; K<sub>a3</sub> = 4,8·10<sup>−13</sup></td></tr>
            <tr><td>H<sub>2</sub>C<sub>2</sub>O<sub>4</sub></td><td>K<sub>a1</sub> = 6,5·10<sup>−2</sup>; K<sub>a2</sub> = 6,46·10<sup>−5</sup></td></tr>
          </tbody>
        </table>
      </div>
      <div class="cong-thuc"><div class="nhan">Tích số ion của nước (25 °C)</div>\[ \Kw = \Hp\OH = 1,0\cdot10^{-14} \]</div>
      <div class="cong-thuc"><div class="nhan">pH và cặp acid – base liên hợp (25 °C)</div>\[ \begin{gathered} \mathrm{pH} = -\lg\Hp \qquad \mathrm{pH} + \mathrm{pOH} = 14 \\ \Ka\cdot\Kb = \Kw \qquad \pKa + \pKb = 14 \end{gathered} \]</div>
      <p>K<sub>w</sub> tăng theo nhiệt độ: 6,809·10<sup>−15</sup> ở 20 °C; 1,0·10<sup>−14</sup> ở 25 °C; 1,469·10<sup>−14</sup> ở 30 °C. Nước trung tính luôn có [H<sup>+</sup>] = [OH<sup>−</sup>] = √K<sub>w</sub>, nên pH trung tính chỉ bằng 7 ở 25 °C.</p>
      <div class="vi-du"><b>Ví dụ 2.</b> Biết pK<sub>a</sub>(CH<sub>3</sub>COOH) = 4,75. Tính K<sub>b</sub> của CH<sub>3</sub>COO<sup>−</sup>.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \pKb &= 14 - 4,75 = 9,25 \\ \Kb &= 10^{-9,25} = \mathbf{5,6\cdot10^{-10}} \end{aligned} \]
          Tương tự, pK<sub>b</sub>(NH<sub>3</sub>) = 4,75 cho pK<sub>a</sub>(NH<sub>4</sub><sup>+</sup>) = 9,25.
        </details></div>
      <div class="vi-du"><b>Ví dụ 3.</b> Tính pH của nước nguyên chất ở 30 °C (K<sub>w</sub> = 1,469·10<sup>−14</sup>). Nước đó có tính acid không?
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \Hp &= \sqrt{1,469\cdot10^{-14}} = 1,212\cdot10^{-7}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{6,92} \end{aligned} \]
          Nước vẫn <b>trung tính</b> vì [H<sup>+</sup>] = [OH<sup>−</sup>]. pH &lt; 7 chỉ vì K<sub>w</sub> ở 30 °C lớn hơn ở 25 °C.
        </details></div>

      <h3>5. Cân bằng tạo phức</h3>
      <p>Ion kim loại M kết hợp với phối tử L tạo phức. Hằng số tạo thành K<sub>f</sub> (còn gọi là <b>hằng số bền</b>) càng lớn thì phức càng bền.</p>
      <div class="cong-thuc"><div class="nhan">Hằng số bền từng nấc K<sub>i</sub> (điện tích lược bỏ cho gọn)</div>\[ \begin{aligned} \mathrm{M} + \mathrm{L} &\rightleftharpoons \mathrm{ML} && K_1 = \frac{[\mathrm{ML}]}{[\mathrm{M}][\mathrm{L}]} \\ \mathrm{ML} + \mathrm{L} &\rightleftharpoons \mathrm{ML_2} && K_2 = \frac{[\mathrm{ML_2}]}{[\mathrm{ML}][\mathrm{L}]} \end{aligned} \]</div>
      <div class="cong-thuc"><div class="nhan">Hằng số bền tổng β<sub>n</sub></div>\[ \begin{gathered} \mathrm{M} + n\mathrm{L} \rightleftharpoons \mathrm{ML}_n \\ \beta_n = \frac{[\mathrm{ML}_n]}{[\mathrm{M}][\mathrm{L}]^n} = K_1K_2\cdots K_n \end{gathered} \]</div>
      <p>Viết theo logarit cho gọn: lg β<sub>n</sub> = lg K<sub>1</sub> + lg K<sub>2</sub> + … + lg K<sub>n</sub>. Hằng số không bền là nghịch đảo của hằng số bền.</p>
      <div class="vi-du"><b>Ví dụ 4.</b> Phức Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> có lg K<sub>1</sub> = 3,31 và lg K<sub>2</sub> = 3,91. Tính β<sub>2</sub>, rồi tính độ tan của AgCl (K<sub>sp</sub> = 1,8·10<sup>−10</sup>) trong dung dịch NH<sub>3</sub> 1,0 M.
        <details><summary>Xem lời giải</summary>
          \[ \beta_2 = 10^{3,31 + 3,91} = 10^{7,22} = 1,7\cdot10^{7} \]
          Cộng cân bằng tan với cân bằng tạo phức:
          \[ \begin{gathered} \mathrm{AgCl(r)} + 2\mathrm{NH_3} \rightleftharpoons \mathrm{Ag(NH_3)_2^+} + \mathrm{Cl^-} \\ K = K_\mathrm{sp}\beta_2 = 3,0\cdot10^{-3} \end{gathered} \]
          Gọi S là độ tan: [Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>] = [Cl<sup>−</sup>] = S; [NH<sub>3</sub>] = 1,0 − 2S.
          \[ \begin{gathered} \frac{S^2}{(1,0 - 2S)^2} = 3,0\cdot10^{-3} \\ \frac{S}{1,0 - 2S} = 0,0547 \;\Rightarrow\; S = \mathbf{0,049\ M} \end{gathered} \]
          So với độ tan trong nước (√K<sub>sp</sub> = 1,3·10<sup>−5</sup> M), độ tan tăng khoảng 3700 lần: NH<sub>3</sub> "kéo" Ag<sup>+</sup> ra khỏi cân bằng tan (Le Chatelier).
        </details></div>

      <h3>6. Cân bằng kết tủa: tích số tan và độ tan</h3>
      <div class="cong-thuc"><div class="nhan">Chất ít tan M<sub>m</sub>A<sub>n</sub></div>\[ \begin{gathered} \mathrm{M}_m\mathrm{A}_n\mathrm{(r)} \rightleftharpoons m\mathrm{M}^{n+} + n\mathrm{A}^{m-} \\ K_\mathrm{sp} = [\mathrm{M}^{n+}]^m[\mathrm{A}^{m-}]^n \end{gathered} \]</div>
      <p>K<sub>sp</sub> càng nhỏ thì chất càng khó tan. <b>Độ tan S</b> (mol/L) là số mol chất tan được trong 1 L dung dịch bão hòa:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Kiểu hợp chất</th><th>Ví dụ</th><th>K<sub>sp</sub> theo S</th><th>Độ tan</th></tr></thead>
          <tbody>
            <tr><td>MA</td><td>AgBr, CaCO<sub>3</sub></td><td>S<sup>2</sup></td><td>S = √K<sub>sp</sub></td></tr>
            <tr><td>MA<sub>2</sub> hoặc M<sub>2</sub>A</td><td>PbBr<sub>2</sub>, Ag<sub>2</sub>CrO<sub>4</sub></td><td>4S<sup>3</sup></td><td>S = ∛(K<sub>sp</sub>/4)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Chỉ so sánh độ tan qua K<sub>sp</sub> khi hai chất <b>cùng kiểu</b> (cùng tỉ lệ ion). Ví dụ PbBr<sub>2</sub> (K<sub>sp</sub> = 6,6·10<sup>−6</sup>) và MgCO<sub>3</sub> (K<sub>sp</sub> = 6,8·10<sup>−6</sup>) có K<sub>sp</sub> gần bằng nhau, nhưng độ tan của PbBr<sub>2</sub> (1,2·10<sup>−2</sup> M) lớn hơn khoảng 4,5 lần so với MgCO<sub>3</sub> (2,6·10<sup>−3</sup> M).</p>
      <div class="bang-cuon">
        <table class="bang bang-hep">
          <thead><tr><th>Chất</th><th>K<sub>sp</sub></th><th>Chất</th><th>K<sub>sp</sub></th></tr></thead>
          <tbody>
            <tr><td>PbBr<sub>2</sub></td><td>6,6·10<sup>−6</sup></td><td>CaCO<sub>3</sub></td><td>5,0·10<sup>−9</sup></td></tr>
            <tr><td>CuBr</td><td>6,3·10<sup>−9</sup></td><td>SrCO<sub>3</sub></td><td>5,6·10<sup>−10</sup></td></tr>
            <tr><td>AgBr</td><td>5,4·10<sup>−13</sup></td><td>MgC<sub>2</sub>O<sub>4</sub></td><td>4,8·10<sup>−6</sup></td></tr>
            <tr><td>Hg<sub>2</sub>Br<sub>2</sub></td><td>6,4·10<sup>−23</sup></td><td>FeC<sub>2</sub>O<sub>4</sub></td><td>2·10<sup>−7</sup></td></tr>
            <tr><td>MgCO<sub>3</sub></td><td>6,8·10<sup>−6</sup></td><td>NiC<sub>2</sub>O<sub>4</sub></td><td>1·10<sup>−7</sup></td></tr>
            <tr><td>NiCO<sub>3</sub></td><td>1,3·10<sup>−7</sup></td><td>SrC<sub>2</sub>O<sub>4</sub></td><td>5·10<sup>−8</sup></td></tr>
          </tbody>
        </table>
      </div>
      <div class="cong-thuc"><div class="nhan">Điều kiện kết tủa (Q tính theo nồng độ ion ngay sau khi trộn)</div>\( Q > K_\mathrm{sp} \): có kết tủa.<br>\( Q \le K_\mathrm{sp} \): không kết tủa (nếu đã có kết tủa thì kết tủa tan thêm tới khi Q = K<sub>sp</sub>).</div>
      <p><b>Hiệu ứng ion chung</b>: thêm một ion của kết tủa vào dung dịch làm độ tan giảm mạnh (Le Chatelier). Nhờ đó, trong phân tích khối lượng người ta dùng dư thuốc thử để kết tủa hoàn toàn.</p>
      <p><b>Kết tủa phân đoạn</b>: khi thêm dần thuốc thử vào dung dịch chứa nhiều ion, chất nào đạt điều kiện Q &gt; K<sub>sp</sub> trước thì kết tủa trước. Nếu hai kết tủa có K<sub>sp</sub> chênh nhau nhiều, có thể tách riêng từng ion.</p>
      <div class="vi-du"><b>Ví dụ 5.</b> Tính độ tan (mol/L và mg/L) của CaCO<sub>3</sub> (K<sub>sp</sub> = 5,0·10<sup>−9</sup>, M = 100,09) trong nước, bỏ qua phản ứng của CO<sub>3</sub><sup>2−</sup> với nước.
        <details><summary>Xem lời giải</summary>
          \[ S = \sqrt{5,0\cdot10^{-9}} = \mathbf{7,1\cdot10^{-5}\ M} \]
          \[ \begin{aligned} 7,07\cdot10^{-5}\cdot100,09 &= 7,1\cdot10^{-3}\ \mathrm{g/L} \\ &= \mathbf{7,1\ mg/L} \end{aligned} \]
          Thực tế CO<sub>3</sub><sup>2−</sup> nhận proton của nước tạo HCO<sub>3</sub><sup>−</sup>, nên độ tan thật lớn hơn giá trị này.
        </details></div>
      <div class="vi-du"><b>Ví dụ 6.</b> Tính độ tan của PbBr<sub>2</sub> (K<sub>sp</sub> = 6,6·10<sup>−6</sup>) trong nước.
        <details><summary>Xem lời giải</summary>
          PbBr<sub>2</sub> ⇌ Pb<sup>2+</sup> + 2Br<sup>−</sup>: [Pb<sup>2+</sup>] = S; [Br<sup>−</sup>] = 2S.
          \[ \begin{aligned} K_\mathrm{sp} &= S(2S)^2 = 4S^3 \\ S &= \sqrt[3]{\frac{6,6\cdot10^{-6}}{4}} = \mathbf{1,2\cdot10^{-2}\ M} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 7.</b> Tính độ tan của AgBr (K<sub>sp</sub> = 5,4·10<sup>−13</sup>) (a) trong nước; (b) trong dung dịch NaBr 0,010 M.
        <details><summary>Xem lời giải</summary>
          (a) \( S = \sqrt{5,4\cdot10^{-13}} = \mathbf{7,3\cdot10^{-7}\ M} \)<br>
          (b) [Br<sup>−</sup>] = 0,010 + S ≈ 0,010 M (vì S rất nhỏ):
          \[ S = \frac{5,4\cdot10^{-13}}{0,010} = \mathbf{5,4\cdot10^{-11}\ M} \]
          Ion chung Br<sup>−</sup> làm độ tan giảm khoảng 1,4·10<sup>4</sup> lần. Giả thiết S ≪ 0,010 đúng.
        </details></div>
      <div class="vi-du"><b>Ví dụ 8.</b> Trộn 10,0 mL CaCl<sub>2</sub> 1,0·10<sup>−3</sup> M với 10,0 mL Na<sub>2</sub>CO<sub>3</sub> 1,0·10<sup>−3</sup> M. Có kết tủa CaCO<sub>3</sub> (K<sub>sp</sub> = 5,0·10<sup>−9</sup>) không?
        <details><summary>Xem lời giải</summary>
          Sau khi trộn, thể tích tăng gấp đôi nên nồng độ mỗi ion giảm một nửa:
          \[ [\mathrm{Ca^{2+}}] = [\mathrm{CO_3^{2-}}] = 5,0\cdot10^{-4}\ \mathrm{M} \]
          \[ Q = (5,0\cdot10^{-4})^2 = 2,5\cdot10^{-7} > K_\mathrm{sp} \]
          Vậy <b>có kết tủa</b>. Lỗi hay gặp: quên tính pha loãng khi trộn.
        </details></div>

      <h3>7. Hoạt độ và lực ion (tự đọc)</h3>
      <p>Trong dung dịch có nhiều ion, mỗi ion bị các ion trái dấu bao quanh nên "hoạt động" kém hơn nồng độ thực. Hằng số cân bằng chính xác phải viết theo <b>hoạt độ</b>.</p>
      <div class="cong-thuc"><div class="nhan">Lực ion (c<sub>i</sub>: nồng độ, z<sub>i</sub>: điện tích của ion i)</div>\[ \mu = \frac{1}{2}\sum c_iz_i^2 \]</div>
      <div class="cong-thuc"><div class="nhan">Hoạt độ và hệ số hoạt độ γ</div>\[ \mathcal{A}_i = \gamma_i\,[i] \]</div>
      <div class="cong-thuc"><div class="nhan">Phương trình Debye – Hückel mở rộng (25 °C; α: kích thước ion hydrat hóa, pm)</div>\[ \lg\gamma = \frac{-0,51\,z^2\sqrt{\mu}}{1 + \dfrac{\alpha\sqrt{\mu}}{305}} \]</div>
      <ul>
        <li>Lực ion càng lớn thì γ càng nhỏ. Ion điện tích càng lớn thì γ giảm càng mạnh (vì có z<sup>2</sup>).</li>
        <li>Dung dịch rất loãng (μ → 0) có γ → 1, nên dùng nồng độ thay cho hoạt độ được.</li>
        <li>Khi μ &lt; 0,01 M có thể bỏ mẫu số, gọi là định luật giới hạn: lg γ = −0,51z<sup>2</sup>√μ.</li>
        <li>Phương trình dùng tốt đến khoảng μ = 0,1 M.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 9.</b> Tính lực ion của dung dịch Na<sub>2</sub>SO<sub>4</sub> 0,010 M và hệ số hoạt độ của SO<sub>4</sub><sup>2−</sup> (α = 400 pm), Na<sup>+</sup> (α = 450 pm).
        <details><summary>Xem lời giải</summary>
          [Na<sup>+</sup>] = 0,020 M; [SO<sub>4</sub><sup>2−</sup>] = 0,010 M.
          \[ \begin{aligned} \mu &= \tfrac{1}{2}\left(0,020\cdot1^2 + 0,010\cdot2^2\right) \\ &= \mathbf{0,030\ M} \end{aligned} \]
          \[ \begin{aligned} \lg\gamma_{\mathrm{SO_4^{2-}}} &= \frac{-0,51\cdot4\cdot\sqrt{0,030}}{1 + \dfrac{400\sqrt{0,030}}{305}} \\ &= -0,288 \;\Rightarrow\; \gamma = \mathbf{0,52} \end{aligned} \]
          \[ \begin{aligned} \lg\gamma_{\mathrm{Na^+}} &= \frac{-0,51\cdot1\cdot\sqrt{0,030}}{1 + \dfrac{450\sqrt{0,030}}{305}} \\ &= -0,070 \;\Rightarrow\; \gamma = \mathbf{0,85} \end{aligned} \]
          Ion điện tích 2 bị ảnh hưởng mạnh hơn nhiều so với ion điện tích 1.
        </details></div>

      <h3>8. Phương trình bảo toàn điện tích và bảo toàn khối lượng</h3>
      <p><b>Bảo toàn điện tích</b>: dung dịch luôn trung hòa điện, nên tổng điện tích dương bằng tổng điện tích âm. Nồng độ mỗi ion được <b>nhân với độ lớn điện tích</b> của nó.</p>
      <div class="cong-thuc"><div class="nhan">Dạng tổng quát</div>\[ \sum n_i[\text{cation}_i] = \sum m_j[\text{anion}_j] \]</div>
      <ul>
        <li>Ca(NO<sub>3</sub>)<sub>2</sub>: 2[Ca<sup>2+</sup>] + [H<sup>+</sup>] = [NO<sub>3</sub><sup>−</sup>] + [OH<sup>−</sup>]</li>
        <li>KH<sub>2</sub>PO<sub>4</sub>: [H<sup>+</sup>] + [K<sup>+</sup>] = [OH<sup>−</sup>] + [H<sub>2</sub>PO<sub>4</sub><sup>−</sup>] + 2[HPO<sub>4</sub><sup>2−</sup>] + 3[PO<sub>4</sub><sup>3−</sup>]</li>
      </ul>
      <p><b>Bảo toàn khối lượng (bảo toàn nồng độ)</b>: tổng nồng độ các dạng của một cấu tử bằng nồng độ đã đưa vào.</p>
      <ul>
        <li>0,050 mol CH<sub>3</sub>COOH trong 1,00 L: [CH<sub>3</sub>COOH] + [CH<sub>3</sub>COO<sup>−</sup>] = 0,050 M.</li>
        <li>KH<sub>2</sub>PO<sub>4</sub> C M: [K<sup>+</sup>] = C và [H<sub>3</sub>PO<sub>4</sub>] + [H<sub>2</sub>PO<sub>4</sub><sup>−</sup>] + [HPO<sub>4</sub><sup>2−</sup>] + [PO<sub>4</sub><sup>3−</sup>] = C.</li>
        <li>Khi hòa tan chất rắn chứa các ion theo tỉ lệ cố định, dùng tỉ lệ đó. Ví dụ hòa tan Ag<sub>2</sub>CrO<sub>4</sub>: [Ag<sup>+</sup>] = 2·(tổng nồng độ các dạng chromat).</li>
      </ul>
      <p><b>Giải hệ cân bằng một cách hệ thống</b> (dùng cho các bài phức tạp):</p>
      <ol>
        <li>Viết mọi phản ứng có trong dung dịch (kể cả sự phân li của nước).</li>
        <li>Viết phương trình bảo toàn điện tích.</li>
        <li>Viết các phương trình bảo toàn khối lượng.</li>
        <li>Viết biểu thức hằng số cân bằng cho từng phản ứng.</li>
        <li>Đếm: số phương trình phải bằng số ẩn (nồng độ các tiểu phân).</li>
        <li>Giải hệ, thường bằng cách bỏ qua các số hạng rất nhỏ rồi kiểm tra lại giả thiết.</li>
      </ol>
      <div class="vi-du"><b>Ví dụ 10.</b> Viết phương trình bảo toàn điện tích cho dung dịch chứa Na<sub>2</sub>CO<sub>3</sub> và NaCl.
        <details><summary>Xem lời giải</summary>
          Các ion có mặt: Na<sup>+</sup>, H<sup>+</sup>, CO<sub>3</sub><sup>2−</sup>, HCO<sub>3</sub><sup>−</sup>, Cl<sup>−</sup>, OH<sup>−</sup> (H<sub>2</sub>CO<sub>3</sub> không mang điện).
          \[ \begin{aligned} &[\mathrm{Na^+}] + \Hp \\ &= 2[\mathrm{CO_3^{2-}}] + [\mathrm{HCO_3^-}] + [\mathrm{Cl^-}] + \OH \end{aligned} \]
          Lỗi hay gặp: quên nhân 2 cho CO<sub>3</sub><sup>2−</sup>, hoặc đưa hệ số 2 vào [Na<sup>+</sup>] vì công thức Na<sub>2</sub>CO<sub>3</sub>.
        </details></div>
    `,
    baiTap: [],
  },
  {
    id: "axit-bazo",
    choDuyet: true,
    nhom: "Cân bằng và chuẩn độ",
    icon: "⚗️",
    ten: "Cân bằng acid – base",
    moTa: "pH, phân bố, đa acid, lưỡng tính, đệm",
    dayDu: true,
    lyThuyet: String.raw`
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
          <div class="cong-thuc"><div class="nhan">Acid ⇌ H<sup>+</sup> + base liên hợp</div>\[ \ce{HA <=> H+ + A-} \]</div>
          Ví dụ: CH<sub>3</sub>COOH / CH<sub>3</sub>COO<sup>−</sup> ; NH<sub>4</sub><sup>+</sup> / NH<sub>3</sub> ; H<sub>2</sub>PO<sub>4</sub><sup>−</sup> / HPO<sub>4</sub><sup>2−</sup></li>
        <li>Proton không tồn tại tự do trong nước mà kết hợp với nước thành H<sub>3</sub>O<sup>+</sup>. Để gọn, ta vẫn viết H<sup>+</sup>.</li>
        <li><b>Chất lưỡng tính</b>: vừa cho vừa nhận được proton (H<sub>2</sub>O, HCO<sub>3</sub><sup>−</sup>, H<sub>2</sub>PO<sub>4</sub><sup>−</sup>, amino acid...).</li>
      </ul>
      <p><b>Sự tự proton phân của nước:</b></p>
      <div class="cong-thuc"><div class="nhan">Ở 25 °C</div>\[ \begin{gathered} \ce{H2O <=> H+ + OH-} \\ \Kw = \Hp\OH = 1,0\cdot10^{-14} \end{gathered} \]</div>
      <div class="cong-thuc">\[ \begin{aligned} \mathrm{pH} &= -\lg\Hp \\ \mathrm{pOH} &= -\lg\OH \\ \mathrm{pH} + \mathrm{pOH} &= 14,00 \end{aligned} \]</div>
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
      <div class="cong-thuc">\[ \begin{gathered} \ce{HA <=> H+ + A-} \\ \Ka = \frac{\Hp[\mathrm{A^-}]}{[\mathrm{HA}]} \end{gathered} \]</div>
      <div class="cong-thuc">\[ \begin{gathered} \ce{A- + H2O <=> HA + OH-} \\ \Kb = \frac{[\mathrm{HA}]\OH}{[\mathrm{A^-}]} \end{gathered} \]</div>
      <div class="cong-thuc"><div class="nhan">Cặp acid – base liên hợp</div>\[ \begin{gathered} \Ka \cdot \Kb = \Kw \\ \pKa + \pKb = 14 \end{gathered} \]</div>
      <ul>
        <li>pK<sub>a</sub> càng <b>nhỏ</b> thì acid càng <b>mạnh</b>, và base liên hợp của nó càng yếu.</li>
        <li><b>Acid mạnh</b> (HCl, HBr, HI, HNO<sub>3</sub>, HClO<sub>4</sub>, nấc 1 của H<sub>2</sub>SO<sub>4</sub>) coi như phân li hoàn toàn trong nước.</li>
        <li><b>Base mạnh</b>: NaOH, KOH, Ba(OH)<sub>2</sub>...</li>
        <li>Acid đa chức phân li theo từng nấc với K<sub>a1</sub> &gt; K<sub>a2</sub> &gt; K<sub>a3</sub>. Với base liên hợp của nấc cuối (nấc n): \( K_\mathrm{b1} = \dfrac{\Kw}{K_{\mathrm{a}n}} \).</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 1.</b> Tính K<sub>b</sub> của CO<sub>3</sub><sup>2−</sup>, biết H<sub>2</sub>CO<sub>3</sub> có K<sub>a1</sub> = 4,2·10<sup>−7</sup> ; K<sub>a2</sub> = 4,8·10<sup>−11</sup>.
        <details><summary>Xem lời giải</summary>
          CO<sub>3</sub><sup>2−</sup> là base liên hợp của HCO<sub>3</sub><sup>−</sup> (nấc 2), nên dùng K<sub>a2</sub>:
          \[ \begin{aligned} K_\mathrm{b1} &= \frac{\Kw}{K_\mathrm{a2}} = \frac{1,0\cdot10^{-14}}{4,8\cdot10^{-11}} \\ &= \mathbf{2,1\cdot10^{-4}} \end{aligned} \]
          Lỗi hay gặp: dùng K<sub>a1</sub> sẽ ra 2,4·10<sup>−8</sup> (đó là K<sub>b</sub> của HCO<sub>3</sub><sup>−</sup>).
        </details></div>

      <h3>3. Các phương trình cơ sở</h3>
      <p>Mọi bài tính pH chính xác đều dựa trên ba loại phương trình sau, kết hợp với các biểu thức hằng số cân bằng.</p>
      <p><b>a) Định luật bảo toàn nồng độ</b>: tổng nồng độ các dạng của một cấu tử bằng nồng độ ban đầu.</p>
      <div class="cong-thuc"><div class="nhan">Dung dịch HA nồng độ C</div>\[ C = [\mathrm{HA}] + [\mathrm{A^-}] \]</div>
      <p><b>b) Định luật bảo toàn điện tích</b>: dung dịch trung hòa điện.</p>
      <div class="cong-thuc"><div class="nhan">Dung dịch HA</div>\[ \Hp = [\mathrm{A^-}] + \OH \]</div>
      <p><b>c) Điều kiện proton (ĐKP)</b>: tổng proton các chất đã cho bằng tổng proton các chất đã nhận, so với một <b>mức không</b> được chọn (thường là các chất ban đầu và H<sub>2</sub>O).</p>
      <div class="cong-thuc"><div class="nhan">Dung dịch HA — mức không: HA, H<sub>2</sub>O</div>\[ \Hp = [\mathrm{A^-}] + \OH \]</div>
      <div class="cong-thuc"><div class="nhan">Dung dịch NaHCO<sub>3</sub> — mức không: HCO<sub>3</sub><sup>−</sup>, H<sub>2</sub>O</div>\[ \Hp + [\mathrm{H_2CO_3}] = [\mathrm{CO_3^{2-}}] + \OH \]</div>
      <p class="luu-y">Mẹo viết ĐKP: vế trái là các chất có <b>nhiều proton hơn</b> mức không (H<sup>+</sup>, H<sub>2</sub>CO<sub>3</sub>), vế phải là các chất có <b>ít proton hơn</b> (OH<sup>−</sup>, CO<sub>3</sub><sup>2−</sup>). Nếu chất mất/nhận 2 proton thì nhân hệ số 2.</p>

      <h3>4. Phân số mol các dạng và giản đồ phân bố</h3>
      <p>Phân số mol α cho biết mỗi dạng chiếm bao nhiêu phần trong tổng nồng độ. Kí hiệu h = [H<sup>+</sup>].</p>
      <div class="cong-thuc"><div class="nhan">Acid đơn chức HA</div>\[ \alpha_\mathrm{HA} = \frac{h}{h + \Ka} \qquad \alpha_\mathrm{A^-} = \frac{\Ka}{h + \Ka} \]</div>
      <div class="cong-thuc"><div class="nhan">Acid 2 chức H<sub>2</sub>A, với D = h<sup>2</sup> + K<sub>a1</sub>h + K<sub>a1</sub>K<sub>a2</sub></div>\[ \begin{gathered} \alpha_\mathrm{H_2A} = \frac{h^2}{D} \qquad \alpha_\mathrm{HA^-} = \frac{K_\mathrm{a1}h}{D} \\ \alpha_\mathrm{A^{2-}} = \frac{K_\mathrm{a1}K_\mathrm{a2}}{D} \end{gathered} \]</div>
      <ul>
        <li>Khi pH = pK<sub>a</sub>: hai dạng liên hợp bằng nhau (mỗi dạng 50%).</li>
        <li>Khi pH = pK<sub>a</sub> − 1: dạng acid chiếm ~91%. Khi pH = pK<sub>a</sub> + 1: dạng base chiếm ~91%.</li>
        <li>α chỉ phụ thuộc pH, không phụ thuộc nồng độ tổng.</li>
      </ul>
      <p><b>Giản đồ phân bố của acid acetic</b> (pK<sub>a</sub> = 4,75):</p>
      <div class="gian-do" data-pka="4.75" data-dang="CH₃COOH,CH₃COO⁻"></div>
      <p><b>Giản đồ phân bố của acid phosphoric</b> (pK<sub>a</sub> = 2,12 ; 7,21 ; 12,32):</p>
      <div class="gian-do" data-pka="2.12,7.21,12.32" data-dang="H₃PO₄,H₂PO₄⁻,HPO₄²⁻,PO₄³⁻"></div>
      <p>Từ giản đồ thấy ngay: ở pH ≈ 4,7 dạng H<sub>2</sub>PO<sub>4</sub><sup>−</sup> gần như chiếm toàn bộ, ở pH ≈ 9,8 là HPO<sub>4</sub><sup>2−</sup>. Đây cũng là pH gần đúng của dung dịch NaH<sub>2</sub>PO<sub>4</sub> và Na<sub>2</sub>HPO<sub>4</sub> (xem mục 10).</p>

      <h3>5. pH của acid mạnh và base mạnh</h3>
      <div class="cong-thuc"><div class="nhan">Acid mạnh (C<sub>a</sub> ≥ 10<sup>−6</sup> M)</div>\[ \Hp = \Ca \]</div>
      <div class="cong-thuc"><div class="nhan">Base mạnh</div>\[ \OH = \Cb \;\Rightarrow\; \mathrm{pH} = 14 + \lg \Cb \]</div>
      <p>Khi dung dịch rất loãng (C<sub>a</sub> &lt; 10<sup>−6</sup> M), H<sup>+</sup> do nước phân li không bỏ qua được. Từ bảo toàn điện tích \( \Hp = \Ca + \dfrac{\Kw}{\Hp} \):</p>
      <div class="cong-thuc">\[ \Hp = \frac{\Ca + \sqrt{\Ca^2 + 4\Kw}}{2} \]</div>
      <div class="vi-du"><b>Ví dụ 2.</b> Tính pH của dung dịch NaOH 0,020 M.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \OH &= 0,020\ \mathrm{M} \\ \mathrm{pOH} &= -\lg 0,020 = 1,70 \\ \mathrm{pH} &= 14 - 1,70 = \mathbf{12,30} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 3.</b> Tính pH của dung dịch HCl 1,0·10<sup>−7</sup> M.
        <details><summary>Xem lời giải</summary>
          C<sub>a</sub> &lt; 10<sup>−6</sup> M nên phải tính cả nước:
          \[ \begin{aligned} \Hp &= \frac{10^{-7} + \sqrt{10^{-14} + 4\cdot10^{-14}}}{2} \\ &= 1,62\cdot10^{-7}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{6,79} \end{aligned} \]
          Nếu tính [H<sup>+</sup>] = C<sub>a</sub> sẽ ra pH = 7,00 — vô lí vì dung dịch acid không thể trung tính.
        </details></div>

      <h3>6. pH của acid yếu đơn chức</h3>
      <p>Từ ĐKP [H<sup>+</sup>] = [A<sup>−</sup>] + [OH<sup>−</sup>] và biểu thức K<sub>a</sub>, có hai bước đơn giản hóa:</p>
      <p><b>Bước 1 — Bỏ qua sự phân li của nước?</b> Được khi \( \Ka\Ca \gg \Kw \) (thực tế: \( \Ka\Ca \ge 20\Kw \)). Khi đó [H<sup>+</sup>] ≈ [A<sup>−</sup>], dẫn tới phương trình bậc hai:</p>
      <div class="cong-thuc">\[ \begin{gathered} \Hp^2 + \Ka\Hp - \Ka\Ca = 0 \\ \Hp = \frac{-\Ka + \sqrt{\Ka^2 + 4\Ka\Ca}}{2} \end{gathered} \]</div>
      <p><b>Bước 2 — Bỏ qua lượng acid đã phân li?</b> Được khi acid phân li ít (≤ 5%), tức \( \dfrac{\Ca}{\Ka} \ge 400 \). Khi đó [HA] ≈ C<sub>a</sub>:</p>
      <div class="cong-thuc">\[ \begin{gathered} \Hp = \sqrt{\Ka\Ca} \\ \mathrm{pH} = \tfrac{1}{2}\left(\pKa - \lg\Ca\right) \end{gathered} \]</div>
      <p><b>Trường hợp acid rất yếu, rất loãng</b> (K<sub>a</sub>C<sub>a</sub> không lớn hơn nhiều so với K<sub>w</sub>) nhưng vẫn C<sub>a</sub>/K<sub>a</sub> ≥ 400:</p>
      <div class="cong-thuc">\[ \Hp = \sqrt{\Ka\Ca + \Kw} \]</div>
      <div class="vi-du"><b>Ví dụ 4.</b> Tính pH của CH<sub>3</sub>COOH 0,050 M (pK<sub>a</sub> = 4,75).
        <details><summary>Xem lời giải</summary>
          K<sub>a</sub> = 10<sup>−4,75</sup> = 1,78·10<sup>−5</sup>; K<sub>a</sub>C<sub>a</sub> = 8,9·10<sup>−7</sup> ≫ K<sub>w</sub>; \( \dfrac{\Ca}{\Ka} \approx 2\,810 \ge 400 \).
          \[ \begin{aligned} \mathrm{pH} &= \tfrac{1}{2}\left(4,75 - \lg 0,050\right) \\ &= \tfrac{1}{2}\left(4,75 + 1,30\right) = \mathbf{3,03} \end{aligned} \]
          Giải phương trình bậc hai cũng ra pH = 3,03.
        </details></div>
      <div class="vi-du"><b>Ví dụ 5.</b> Tính pH của HF 0,010 M (K<sub>a</sub> = 7,1·10<sup>−4</sup>).
        <details><summary>Xem lời giải</summary>
          \( \dfrac{\Ca}{\Ka} \approx 14 < 400 \) → phải giải phương trình bậc hai. Tính biệt thức trước:
          \[ \begin{aligned} \Delta &= \Ka^2 + 4\Ka\Ca \\ &= 5,04\cdot10^{-7} + 2,84\cdot10^{-5} \\ &= 2,89\cdot10^{-5} \end{aligned} \]
          \[ \begin{aligned} \Hp &= \frac{-7,1\cdot10^{-4} + \sqrt{2,89\cdot10^{-5}}}{2} \\ &= 2,33\cdot10^{-3}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{2,63} \end{aligned} \]
          Dùng nhầm công thức căn sẽ ra 2,57.
        </details></div>
      <div class="vi-du"><b>Ví dụ 6.</b> Tính pH của HCN 2,0·10<sup>−4</sup> M (K<sub>a</sub> = 4,9·10<sup>−10</sup>).
        <details><summary>Xem lời giải</summary>
          K<sub>a</sub>C<sub>a</sub> = 9,8·10<sup>−14</sup> — cùng cỡ với K<sub>w</sub>, không bỏ qua nước được:
          \[ \begin{aligned} \Hp &= \sqrt{9,8\cdot10^{-14} + 1,0\cdot10^{-14}} \\ &= 3,29\cdot10^{-7}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{6,48} \end{aligned} \]
          Bỏ qua nước sẽ ra 6,50.
        </details></div>

      <h3>7. pH của base yếu đơn chức</h3>
      <p>Hoàn toàn tương tự acid yếu, thay [H<sup>+</sup>] bằng [OH<sup>−</sup>], K<sub>a</sub> bằng K<sub>b</sub>, C<sub>a</sub> bằng C<sub>b</sub>:</p>
      <div class="cong-thuc"><div class="nhan">Khi C<sub>b</sub>/K<sub>b</sub> ≥ 400</div>\[ \OH = \sqrt{\Kb\Cb} \]</div>
      <div class="cong-thuc"><div class="nhan">Khi C<sub>b</sub>/K<sub>b</sub> &lt; 400</div>\[ \OH = \frac{-\Kb + \sqrt{\Kb^2 + 4\Kb\Cb}}{2} \]</div>
      <p>Muối của acid yếu và base mạnh (CH<sub>3</sub>COONa, NaCN, NaF...) là base yếu với \( \Kb = \dfrac{\Kw}{\Ka} \). Muối của base yếu và acid mạnh (NH<sub>4</sub>Cl) là acid yếu.</p>
      <div class="vi-du"><b>Ví dụ 7.</b> Tính pH của NH<sub>3</sub> 0,050 M (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,25).
        <details><summary>Xem lời giải</summary>
          pK<sub>b</sub> = 14 − 9,25 = 4,75 → K<sub>b</sub> = 1,78·10<sup>−5</sup>; \( \dfrac{\Cb}{\Kb} \approx 2\,810 \ge 400 \).
          \[ \begin{aligned} \OH &= \sqrt{1,78\cdot10^{-5}\cdot0,050} \\ &= 9,43\cdot10^{-4}\ \mathrm{M} \\ \mathrm{pOH} &= 3,03 \\ \mathrm{pH} &= 14 - 3,03 = \mathbf{10,97} \end{aligned} \]
          Lỗi hay gặp: dùng pK<sub>a</sub> = 9,25 thay cho pK<sub>b</sub>, hoặc quên đổi pOH sang pH (ra 3,03).
        </details></div>
      <div class="vi-du"><b>Ví dụ 8.</b> Tính pH của CH<sub>3</sub>COONa 0,15 M (pK<sub>a</sub> của CH<sub>3</sub>COOH = 4,75).
        <details><summary>Xem lời giải</summary>
          \[ \Kb = \frac{10^{-14}}{10^{-4,75}} = 10^{-9,25} = 5,62\cdot10^{-10} \]
          \[ \begin{aligned} \OH &= \sqrt{5,62\cdot10^{-10}\cdot0,15} \\ &= 9,18\cdot10^{-6}\ \mathrm{M} \\ \mathrm{pOH} &= 5,04 \\ \mathrm{pH} &= 14 - 5,04 = \mathbf{8,96} \end{aligned} \]
          Lỗi hay gặp: dùng thẳng pK<sub>a</sub> = 4,75 thay cho pK<sub>b</sub> = 9,25.
        </details></div>

      <h3>8. Hỗn hợp acid mạnh và acid yếu</h3>
      <p>Acid mạnh cho nhiều H<sup>+</sup>, đẩy cân bằng phân li của acid yếu sang trái (hiệu ứng ion chung) → acid yếu gần như không phân li.</p>
      <div class="cong-thuc"><div class="nhan">C<sub>1</sub>: acid mạnh ; C<sub>2</sub>, K<sub>a</sub>: acid yếu</div>\[ \Hp = C_1 + C_2\cdot\frac{\Ka}{\Ka + \Hp} \]</div>
      <p>Thường chỉ cần lấy gần đúng [H<sup>+</sup>] ≈ C<sub>1</sub>, rồi kiểm tra phần đóng góp của acid yếu.</p>
      <div class="vi-du"><b>Ví dụ 9.</b> Tính pH của dung dịch HCl 0,010 M + CH<sub>3</sub>COOH 0,10 M.
        <details><summary>Xem lời giải</summary>
          Gần đúng lần 1: [H<sup>+</sup>] ≈ 0,010 M. Phần do CH<sub>3</sub>COOH:
          \[ \begin{aligned} &0,10\cdot\frac{1,78\cdot10^{-5}}{1,78\cdot10^{-5} + 0,010} \\ &= 1,8\cdot10^{-4}\ \mathrm{M} \end{aligned} \]
          (chỉ 0,18% acid acetic phân li)
          \[ \begin{aligned} \Hp &\approx 0,0102\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{1,99} \end{aligned} \]
          Gần như bằng pH của riêng HCl là 2,00.
        </details></div>

      <h3>9. Acid và base đa chức</h3>
      <p>Khi các hằng số cách nhau xa \( \left(\dfrac{K_\mathrm{a1}}{K_\mathrm{a2}} \ge 10^4\right) \), các nấc sau phân li không đáng kể → tính pH theo <b>nấc 1</b> như một acid đơn chức (nhớ kiểm tra điều kiện C/K<sub>a1</sub> ≥ 400).</p>
      <p>Tương tự, base đa chức (Na<sub>2</sub>CO<sub>3</sub>, Na<sub>3</sub>PO<sub>4</sub>) tính theo nấc base thứ nhất với \( K_\mathrm{b1} = \dfrac{\Kw}{K_{\mathrm{a}n}} \) (K<sub>an</sub>: hằng số nấc cuối).</p>
      <div class="vi-du"><b>Ví dụ 10.</b> Tính pH của H<sub>3</sub>PO<sub>4</sub> 0,10 M (K<sub>a1</sub> = 7,5·10<sup>−3</sup>).
        <details><summary>Xem lời giải</summary>
          \( \dfrac{C}{K_\mathrm{a1}} \approx 13 < 400 \) → giải phương trình bậc hai theo nấc 1:
          \[ \begin{aligned} \Delta &= K_\mathrm{a1}^2 + 4K_\mathrm{a1}C \\ &= 5,63\cdot10^{-5} + 3,00\cdot10^{-3} \\ &= 3,06\cdot10^{-3} \end{aligned} \]
          \[ \begin{aligned} \Hp &= \frac{-7,5\cdot10^{-3} + \sqrt{3,06\cdot10^{-3}}}{2} \\ &= 2,39\cdot10^{-2}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{1,62} \end{aligned} \]
          Dùng nhầm công thức căn sẽ ra 1,56.
        </details></div>
      <div class="vi-du"><b>Ví dụ 11.</b> Tính pH của Na<sub>2</sub>CO<sub>3</sub> 0,25 M (K<sub>a2</sub> của H<sub>2</sub>CO<sub>3</sub> = 4,8·10<sup>−11</sup>).
        <details><summary>Xem lời giải</summary>
          K<sub>b1</sub> = K<sub>w</sub>/K<sub>a2</sub> = 2,08·10<sup>−4</sup>; \( \dfrac{C}{K_\mathrm{b1}} \approx 1\,200 \ge 400 \) → dùng công thức căn:
          \[ \begin{aligned} \OH &= \sqrt{2,08\cdot10^{-4}\cdot0,25} \\ &= 7,22\cdot10^{-3}\ \mathrm{M} \\ \mathrm{pOH} &= 2,14 \\ \mathrm{pH} &= 14 - 2,14 = \mathbf{11,86} \end{aligned} \]
          Giải phương trình bậc hai ra pH = 11,85: sai khác 0,01 là mức chấp nhận được khi C/K ≥ 400 (sai số ≤ 5% ở nồng độ).
        </details></div>

      <h3>10. Chất lưỡng tính</h3>
      <p>Với dung dịch HA<sup>−</sup> (NaHCO<sub>3</sub>, NaH<sub>2</sub>PO<sub>4</sub>, Na<sub>2</sub>HPO<sub>4</sub>...), từ ĐKP suy ra:</p>
      <div class="cong-thuc">\[ \Hp = \sqrt{\frac{K_\mathrm{a1}\left(K_\mathrm{a2}C + \Kw\right)}{K_\mathrm{a1} + C}} \]</div>
      <p>Khi C ≫ K<sub>a1</sub> và K<sub>a2</sub>C ≫ K<sub>w</sub>, công thức rút gọn thành:</p>
      <div class="cong-thuc">\[ \begin{gathered} \Hp = \sqrt{K_\mathrm{a1}K_\mathrm{a2}} \\ \mathrm{pH} = \frac{\mathrm{p}K_\mathrm{a1} + \mathrm{p}K_\mathrm{a2}}{2} \end{gathered} \]</div>
      <p>(K<sub>a1</sub>, K<sub>a2</sub> là hai hằng số <b>kề</b> dạng lưỡng tính. Ví dụ với Na<sub>2</sub>HPO<sub>4</sub> dùng pK<sub>a2</sub> và pK<sub>a3</sub> của H<sub>3</sub>PO<sub>4</sub>.)</p>
      <div class="vi-du"><b>Ví dụ 12.</b> Tính pH của NaHCO<sub>3</sub> 0,10 M và NaH<sub>2</sub>PO<sub>4</sub> 0,10 M.
        <details><summary>Xem lời giải</summary>
          NaHCO<sub>3</sub> (công thức đầy đủ cũng cho cùng kết quả):
          \[ \begin{aligned} \Hp &= \sqrt{4,2\cdot10^{-7}\cdot4,8\cdot10^{-11}} \\ &= 4,49\cdot10^{-9}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{8,35} \end{aligned} \]
          NaH<sub>2</sub>PO<sub>4</sub>: công thức rút gọn cho \( \Hp = \sqrt{7,5\cdot10^{-3}\cdot6,2\cdot10^{-8}} = 2,16\cdot10^{-5} \) M, pH = 4,67. Nhưng C = 0,10 không lớn hơn nhiều so với K<sub>a1</sub> = 7,5·10<sup>−3</sup>, nên dùng công thức đầy đủ. Với K<sub>a2</sub>C + K<sub>w</sub> = 6,20·10<sup>−9</sup> và K<sub>a1</sub> + C = 0,1075:
          \[ \begin{aligned} \Hp &= \sqrt{\frac{7,5\cdot10^{-3}\cdot6,20\cdot10^{-9}}{0,1075}} \\ &= 2,08\cdot10^{-5}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{4,68} \end{aligned} \]
        </details></div>

      <h3>11. Dung dịch đệm</h3>
      <p>Dung dịch đệm chứa đồng thời acid yếu HA và base liên hợp A<sup>−</sup> với nồng độ đáng kể. Nó giữ pH gần như không đổi khi thêm một lượng nhỏ acid mạnh, base mạnh, hoặc khi pha loãng.</p>
      <div class="cong-thuc"><div class="nhan">Phương trình Henderson – Hasselbalch</div>\[ \mathrm{pH} = \pKa + \lg\frac{C_\mathrm{A^-}}{C_\mathrm{HA}} \]</div>
      <ul>
        <li>Điều kiện dùng: C<sub>HA</sub> và C<sub>A⁻</sub> đều lớn hơn nhiều so với [H<sup>+</sup>] và [OH<sup>−</sup>].</li>
        <li>Pha loãng đệm: tỉ số C<sub>A⁻</sub>/C<sub>HA</sub> không đổi nên pH gần như không đổi.</li>
        <li>Khoảng đệm hiệu quả: <b>pH = pK<sub>a</sub> ± 1</b>. Muốn pha đệm pH nào thì chọn cặp có pK<sub>a</sub> gần pH đó.</li>
      </ul>
      <p><b>Đệm năng</b> β = dC<sub>b</sub>/dpH = −dC<sub>a</sub>/dpH: số mol base (acid) mạnh cần thêm vào 1 L dung dịch để pH tăng (giảm) một lượng rất nhỏ, tính quy về 1 đơn vị pH.</p>
      <div class="cong-thuc"><div class="nhan">C = C<sub>HA</sub> + C<sub>A⁻</sub></div>\[ \beta \approx 2,303\cdot C\cdot\frac{\Ka h}{\left(\Ka + h\right)^2} \]</div>
      <p>β lớn nhất khi pH = pK<sub>a</sub> (β<sub>max</sub> = 0,576·C) và tăng theo nồng độ tổng của đệm.</p>
      <div class="vi-du"><b>Ví dụ 13.</b> 1,00 L đệm gồm CH<sub>3</sub>COOH 0,10 M và CH<sub>3</sub>COONa 0,10 M. Thêm 0,010 mol HCl (coi thể tích không đổi). Tính pH trước và sau khi thêm, so sánh với việc thêm cùng lượng HCl vào 1,00 L nước.
        <details><summary>Xem lời giải</summary>
          Trước khi thêm:
          \[ \mathrm{pH} = 4,75 + \lg\frac{0,10}{0,10} = \mathbf{4,75} \]
          H<sup>+</sup> + CH<sub>3</sub>COO<sup>−</sup> → CH<sub>3</sub>COOH, nên C<sub>A⁻</sub> = 0,090 M; C<sub>HA</sub> = 0,110 M:
          \[ \mathrm{pH} = 4,75 + \lg\frac{0,090}{0,110} = \mathbf{4,66} \]
          pH chỉ giảm 0,09. Trong nước, pH giảm từ 7,00 xuống 2,00 (giảm 5 đơn vị).
        </details></div>
      <div class="vi-du"><b>Ví dụ 14.</b> Cần pha 1,00 L đệm acetat tổng nồng độ 0,100 M, pH 5,00 (pK<sub>a</sub> = 4,75). Tính số mol CH<sub>3</sub>COONa và CH<sub>3</sub>COOH cần dùng.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \lg\frac{C_\mathrm{A^-}}{C_\mathrm{HA}} &= 5,00 - 4,75 = 0,25 \\ \frac{C_\mathrm{A^-}}{C_\mathrm{HA}} &= 10^{0,25} = 1,78 \end{aligned} \]
          \[ \begin{aligned} n_\mathrm{CH_3COONa} &= 0,100\cdot\frac{1,78}{1 + 1,78} \\ &= \mathbf{0,0640\ mol} \\ n_\mathrm{CH_3COOH} &= 0,100 - 0,0640 \\ &= \mathbf{0,0360\ mol} \end{aligned} \]
        </details></div>

      <h3>12. Tóm tắt: chọn công thức tính pH</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Dung dịch</th><th>Công thức</th><th>Điều kiện</th></tr></thead>
          <tbody>
            <tr><td>Acid mạnh</td><td>\( \Hp = \Ca \)</td><td>\( \Ca \ge 10^{-6} \)</td></tr>
            <tr><td>Acid mạnh rất loãng</td><td>\( \Hp = \dfrac{\Ca + \sqrt{\Ca^2 + 4\Kw}}{2} \)</td><td>\( \Ca < 10^{-6} \)</td></tr>
            <tr><td>Acid yếu</td><td>\( \Hp = \sqrt{\Ka\Ca} \)</td><td>\( \dfrac{\Ca}{\Ka} \ge 400 \)</td></tr>
            <tr><td>Acid yếu</td><td>Giải phương trình bậc hai</td><td>\( \dfrac{\Ca}{\Ka} < 400 \)</td></tr>
            <tr><td>Acid rất yếu, loãng</td><td>\( \Hp = \sqrt{\Ka\Ca + \Kw} \)</td><td>\( \Ka\Ca \not\gg \Kw \)</td></tr>
            <tr><td>Base yếu, muối base</td><td>Như acid yếu, với \( \Kb = \dfrac{\Kw}{\Ka} \)</td><td>\( \dfrac{\Cb}{\Kb} \ge 400 \)</td></tr>
            <tr><td>Acid đa chức</td><td>Tính theo nấc 1</td><td>\( \dfrac{K_\mathrm{a1}}{K_\mathrm{a2}} \ge 10^4 \)</td></tr>
            <tr><td>Chất lưỡng tính</td><td>\( \mathrm{pH} = \dfrac{\mathrm{p}K_\mathrm{a1} + \mathrm{p}K_\mathrm{a2}}{2} \)</td><td>\( C \gg K_\mathrm{a1};\ K_\mathrm{a2}C \gg \Kw \)</td></tr>
            <tr><td>Dung dịch đệm</td><td>\( \mathrm{pH} = \pKa + \lg\dfrac{C_\mathrm{A^-}}{C_\mathrm{HA}} \)</td><td>\( C_\mathrm{HA}, C_\mathrm{A^-} \gg \Hp, \OH \)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y"><b>Lỗi hay gặp:</b> quên kiểm tra điều kiện C/K ≥ 400; dùng nhầm K<sub>a</sub> thay cho K<sub>b</sub> khi tính muối; với chất lưỡng tính lấy sai cặp pK<sub>a</sub> không kề nhau; làm tròn pH quá sớm (pH lấy 2 chữ số thập phân ở kết quả cuối).</p>
    `,
    baiTap: [
      {
        de: "Tính pH của dung dịch CH<sub>3</sub>COOH 0,15 M (pK<sub>a</sub> = 4,75).",
        dapAn: "K<sub>a</sub> = 10<sup>−4,75</sup> = 1,78·10<sup>−5</sup>; C/K<sub>a</sub> ≈ 8 440 ≥ 400<br>[H<sup>+</sup>] = √(1,78·10<sup>−5</sup> × 0,15) = 1,63·10<sup>−3</sup> M<br>pH = <b>2,79</b>",
      },
      {
        de: "Tính pH của dung dịch NH<sub>3</sub> 0,030 M (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,25).",
        dapAn: "pK<sub>b</sub> = 14 − 9,25 = 4,75 → K<sub>b</sub> = 1,78·10<sup>−5</sup>; C/K<sub>b</sub> ≈ 1 690 ≥ 400<br>[OH<sup>−</sup>] = √(1,78·10<sup>−5</sup> × 0,030) = 7,30·10<sup>−4</sup> M → pOH = 3,14<br>pH = <b>10,86</b>",
      },
      {
        de: "Tính pH của dung dịch đệm gồm CH<sub>3</sub>COOH 0,10 M và CH<sub>3</sub>COONa 0,20 M (pK<sub>a</sub> = 4,75).",
        dapAn: "pH = 4,75 + lg(0,20 / 0,10) = 4,75 + 0,30 = <b>5,05</b>",
      },
    ],
  },
  {
    id: "chuan-do-axit-bazo",
    nhom: "Cân bằng và chuẩn độ",
    icon: "🧪",
    ten: "Chuẩn độ acid – base",
    moTa: "Đường chuẩn độ, bước nhảy, chọn chỉ thị",
    lyThuyet: String.raw`
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
    id: "edta",
    nhom: "Cân bằng và chuẩn độ",
    icon: "🔗",
    ten: "Tạo phức và chuẩn độ EDTA",
    moTa: "Kf, αY4−, hằng số bền điều kiện, chỉ thị kim loại",
    lyThuyet: String.raw`
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
    nhom: "Cân bằng và chuẩn độ",
    icon: "🧂",
    ten: "Kết tủa và chuẩn độ kết tủa",
    moTa: "Ksp, độ tan, Mohr, Volhard, Fajans",
    lyThuyet: String.raw`
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
    nhom: "Cân bằng và chuẩn độ",
    icon: "⚡",
    ten: "Oxi hóa – khử và chuẩn độ",
    moTa: "Nernst, thế điều kiện, đường chuẩn độ, các phương pháp",
    lyThuyet: String.raw`
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
    id: "hieu-chuan",
    nhom: "Phân tích công cụ",
    icon: "📈",
    ten: "Các phương pháp hiệu chuẩn",
    moTa: "Đường chuẩn, LOD, thêm chuẩn, nội chuẩn, thẩm định",
    lyThuyet: String.raw`
      <h3>1. Đường chuẩn (phương pháp ngoại chuẩn)</h3>
      <p>Đo tín hiệu y của một dãy dung dịch chuẩn đã biết nồng độ x, dựng đường thẳng y = mx + b bằng <b>phương pháp bình phương tối thiểu</b>, rồi thay tín hiệu mẫu để tìm nồng độ.</p>
      <div class="cong-thuc"><div class="nhan">Hệ số góc và hệ số chặn</div>\[ \begin{gathered} m = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sum(x_i - \bar{x})^2} \\ b = \bar{y} - m\bar{x} \end{gathered} \]</div>
      <div class="cong-thuc"><div class="nhan">Nồng độ mẫu</div>\[ x_\text{mẫu} = \frac{y_\text{mẫu} - b}{m} \]</div>
      <ul>
        <li>Chỉ dùng trong <b>khoảng tuyến tính</b>; mẫu phải nằm trong khoảng nồng độ của dãy chuẩn (không ngoại suy).</li>
        <li><b>Mẫu trắng</b> (blank) chứa mọi thành phần trừ chất phân tích, dùng để trừ tín hiệu nền.</li>
        <li>Nên tính hồi quy bằng công cụ thống kê (ví dụ Data Analysis trong Excel) để có cả độ lệch chuẩn của m và b, không chỉ vẽ đường xu hướng.</li>
      </ul>
      <h3>2. Giới hạn phát hiện và giới hạn định lượng</h3>
      <div class="cong-thuc"><div class="nhan">s: độ lệch chuẩn tín hiệu mẫu trắng (hoặc mẫu nồng độ rất thấp); m: độ dốc đường chuẩn</div>\[ \mathrm{LOD} = \frac{3s}{m} \qquad \mathrm{LOQ} = \frac{10s}{m} \]</div>
      <h3>3. Phương pháp thêm chuẩn</h3>
      <p>Thêm lượng chuẩn đã biết vào chính mẫu → loại trừ ảnh hưởng của nền mẫu (matrix effect).</p>
      <div class="cong-thuc"><div class="nhan">Thêm chuẩn một lần (thể tích thêm không đáng kể)</div>\[ C_x = \frac{\Delta C\cdot A_x}{A_{x+\text{chuẩn}} - A_x} \]</div>
      <p>Thêm chuẩn nhiều mức: vẽ tín hiệu theo nồng độ chuẩn thêm vào, kéo dài đường thẳng cắt trục hoành; |giao điểm| chính là nồng độ chất phân tích.</p>
      <div class="vi-du"><b>Ví dụ 1.</b> Mẫu có A<sub>x</sub> = 0,240. Thêm chuẩn làm nồng độ tăng thêm 2,00 ppm thì A = 0,400. Tính C<sub>x</sub>.
        <details><summary>Xem lời giải</summary>
          \[ C_x = \frac{2,00\cdot0,240}{0,400 - 0,240} = \mathbf{3,00\ ppm} \]
        </details></div>
      <h3>4. Phương pháp nội chuẩn</h3>
      <p>Thêm một lượng biết trước chất <b>nội chuẩn</b> (IS, khác chất phân tích nhưng tính chất gần giống) vào cả chuẩn và mẫu; dùng <b>tỉ số tín hiệu</b> để bù dao động thể tích tiêm, độ nhạy thiết bị.</p>
      <div class="cong-thuc"><div class="nhan">Hệ số đáp ứng F (xác định từ hỗn hợp chuẩn)</div>\[ \frac{A_X}{[X]} = F\cdot\frac{A_{IS}}{[IS]} \]</div>
      <h3>5. Đảm bảo chất lượng và thẩm định phương pháp</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Chỉ tiêu</th><th>Kiểm tra bằng</th><th>Ghi chú</th></tr></thead>
          <tbody>
            <tr><td>Độ đúng</td><td>Mẫu chuẩn (CRM), độ thu hồi khi thêm chuẩn</td><td>\( R = \dfrac{C_\text{sau thêm} - C_\text{mẫu}}{C_\text{thêm}}\cdot100\% \)</td></tr>
            <tr><td>Độ chụm</td><td>Đo lặp lại, tính RSD</td><td>Lặp lại trong ngày và giữa các ngày</td></tr>
            <tr><td>Khoảng tuyến tính</td><td>Dãy chuẩn, hệ số xác định R<sup>2</sup></td><td></td></tr>
            <tr><td>LOD, LOQ</td><td>Mẫu trắng lặp lại</td><td>3s/m và 10s/m</td></tr>
            <tr><td>Độ chọn lọc</td><td>Thêm chất có thể cản trở</td><td></td></tr>
            <tr><td>Độ bền vững</td><td>Thay đổi nhỏ điều kiện</td><td></td></tr>
          </tbody>
        </table>
      </div>
    `,
    baiTap: [],
  },
  {
    id: "uv-vis",
    nhom: "Phân tích công cụ",
    icon: "🌈",
    ten: "Quang phổ UV-Vis và huỳnh quang",
    moTa: "Bức xạ điện từ, Lambert – Beer, máy đo, huỳnh quang",
    lyThuyet: String.raw`
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

      <h3>5. Huỳnh quang phân tử</h3>
      <p>Phân tử hấp thụ bức xạ (kích thích), rồi phát ra bức xạ có <b>bước sóng dài hơn</b> khi trở về trạng thái cơ bản.</p>
      <div class="cong-thuc">Ở nồng độ thấp: F = K · C</div>
      <ul>
        <li>Detector đặt vuông góc (90°) với chùm sáng kích thích.</li>
        <li>Nhạy hơn đo quang hấp thụ 10 – 1000 lần, chọn lọc hơn (chọn được cả λ kích thích và λ phát xạ).</li>
        <li>Nồng độ cao: hiện tượng tự dập tắt, mất tuyến tính.</li>
      </ul>
    `,
    baiTap: [],
  },
  {
    id: "quang-nguyen-tu",
    nhom: "Phân tích công cụ",
    icon: "🔥",
    ten: "Quang phổ nguyên tử",
    moTa: "AAS, AES, ICP-OES, ICP-MS",
    lyThuyet: String.raw`
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
    `,
    baiTap: [],
  },
  {
    id: "dien-hoa",
    nhom: "Phân tích công cụ",
    icon: "🔋",
    ten: "Điện hóa: điện cực và đo thế",
    moTa: "Điện cực so sánh, điện cực chỉ thị, ISE, chuẩn độ điện thế",
    lyThuyet: String.raw`
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
    id: "sac-ki",
    nhom: "Phân tích công cụ",
    icon: "📉",
    ten: "Sắc kí đại cương",
    moTa: "Thời gian lưu, hệ số lưu, số đĩa, độ phân giải",
    lyThuyet: String.raw`
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
    id: "gc-hplc",
    nhom: "Phân tích công cụ",
    icon: "🧫",
    ten: "Sắc kí khí và sắc kí lỏng",
    moTa: "TLC, GC, HPLC, detector",
    lyThuyet: String.raw`
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
    ten: "Hằng số acid Ka, pKa",
    cot: ["Acid", "K<sub>a</sub>", "pK<sub>a</sub>"],
    dong: [
      ["HF", "7,1·10<sup>−4</sup>", "3,15"],
      ["HCOOH (acid formic)", "1,7·10<sup>−4</sup>", "3,77"],
      ["CH<sub>3</sub>CH(OH)COOH (acid lactic)", "1,4·10<sup>−4</sup>", "3,85"],
      ["C<sub>6</sub>H<sub>5</sub>COOH (acid benzoic)", "6,5·10<sup>−5</sup>", "4,19"],
      ["CH<sub>3</sub>COOH (acid acetic)", "1,8·10<sup>−5</sup> (quy ước 10<sup>−4,75</sup>)", "4,75"],
      ["HOCl", "3,0·10<sup>−8</sup>", "7,52"],
      ["NH<sub>4</sub><sup>+</sup>", "5,6·10<sup>−10</sup>", "9,25"],
      ["HCN", "4,9·10<sup>−10</sup>", "9,31"],
      ["H<sub>2</sub>CO<sub>3</sub>", "4,2·10<sup>−7</sup> ; 4,8·10<sup>−11</sup>", "6,38 ; 10,32"],
      ["H<sub>3</sub>PO<sub>4</sub>", "7,5·10<sup>−3</sup> ; 6,2·10<sup>−8</sup> ; 4,8·10<sup>−13</sup>", "2,12 ; 7,21 ; 12,32"],
      ["H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>", "6,5·10<sup>−2</sup> ; 6,46·10<sup>−5</sup>", "1,19 ; 4,19"],
    ],
  },
  {
    id: "ksp",
    icon: "🧂",
    ten: "Tích số tan Ksp",
    cot: ["Chất", "K<sub>sp</sub>"],
    dong: [
      ["AgCl", "1,8·10<sup>−10</sup>"],
      ["AgBr", "5,4·10<sup>−13</sup>"],
      ["CuBr", "6,3·10<sup>−9</sup>"],
      ["PbBr<sub>2</sub>", "6,6·10<sup>−6</sup>"],
      ["Hg<sub>2</sub>Br<sub>2</sub>", "6,4·10<sup>−23</sup>"],
      ["AgI", "8,3·10<sup>−17</sup>"],
      ["Ag<sub>2</sub>CrO<sub>4</sub>", "1,1·10<sup>−12</sup>"],
      ["BaSO<sub>4</sub>", "1,1·10<sup>−10</sup>"],
      ["CaC<sub>2</sub>O<sub>4</sub>", "2,3·10<sup>−9</sup>"],
      ["CaCO<sub>3</sub>", "5,0·10<sup>−9</sup>"],
      ["MgCO<sub>3</sub>", "6,8·10<sup>−6</sup>"],
      ["NiCO<sub>3</sub>", "1,3·10<sup>−7</sup>"],
      ["SrCO<sub>3</sub>", "5,6·10<sup>−10</sup>"],
      ["MgC<sub>2</sub>O<sub>4</sub>", "4,8·10<sup>−6</sup>"],
      ["FeC<sub>2</sub>O<sub>4</sub>", "2·10<sup>−7</sup>"],
      ["NiC<sub>2</sub>O<sub>4</sub>", "1·10<sup>−7</sup>"],
      ["SrC<sub>2</sub>O<sub>4</sub>", "5·10<sup>−8</sup>"],
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
