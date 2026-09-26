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
        <li>K nhiệt động (viết theo hoạt độ) chỉ phụ thuộc nhiệt độ, không phụ thuộc nồng độ ban đầu. K viết theo nồng độ còn thay đổi chút ít theo lực ion của dung dịch (mục 7).</li>
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
        <li><b>Áp suất</b> (hệ có chất khí): tăng áp suất bằng cách nén (giảm thể tích) thì cân bằng chuyển dịch về phía có ít phân tử khí hơn. Thêm khí trơ ở thể tích không đổi thì cân bằng không chuyển dịch.</li>
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
          Gọi S là độ tan. Giả thiết Ag<sup>+</sup> tan ra gần như chuyển hết thành Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> (bỏ qua Ag<sup>+</sup> tự do, phức AgNH<sub>3</sub><sup>+</sup> và phản ứng của NH<sub>3</sub> với nước): [Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>] = [Cl<sup>−</sup>] = S; [NH<sub>3</sub>] = 1,0 − 2S.
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
            <tr><td>AgCl</td><td>1,8·10<sup>−10</sup></td><td>SrC<sub>2</sub>O<sub>4</sub></td><td>5·10<sup>−8</sup></td></tr>
            <tr><td>PbBr<sub>2</sub></td><td>6,6·10<sup>−6</sup></td><td>CaCO<sub>3</sub></td><td>5,0·10<sup>−9</sup></td></tr>
            <tr><td>CuBr</td><td>6,3·10<sup>−9</sup></td><td>SrCO<sub>3</sub></td><td>5,6·10<sup>−10</sup></td></tr>
            <tr><td>AgBr</td><td>5,4·10<sup>−13</sup></td><td>MgC<sub>2</sub>O<sub>4</sub></td><td>4,8·10<sup>−6</sup></td></tr>
            <tr><td>Hg<sub>2</sub>Br<sub>2</sub></td><td>6,4·10<sup>−23</sup></td><td>FeC<sub>2</sub>O<sub>4</sub></td><td>2·10<sup>−7</sup></td></tr>
            <tr><td>MgCO<sub>3</sub></td><td>6,8·10<sup>−6</sup></td><td>NiC<sub>2</sub>O<sub>4</sub></td><td>1·10<sup>−7</sup></td></tr>
            <tr><td>NiCO<sub>3</sub></td><td>1,3·10<sup>−7</sup></td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>
      <div class="cong-thuc"><div class="nhan">Điều kiện kết tủa (Q tính theo nồng độ ion ngay sau khi trộn)</div>\( Q > K_\mathrm{sp} \): có kết tủa.<br>\( Q \le K_\mathrm{sp} \): không kết tủa (nếu đã có kết tủa thì kết tủa tan thêm tới khi Q = K<sub>sp</sub>).</div>
      <p><b>Hiệu ứng ion chung</b>: thêm một ion của kết tủa vào dung dịch làm độ tan giảm mạnh (Le Chatelier). Nhờ đó, trong phân tích khối lượng người ta dùng dư thuốc thử để kết tủa hoàn toàn.</p>
      <p><b>Kết tủa phân đoạn</b>: khi thêm dần thuốc thử vào dung dịch chứa nhiều ion, chất nào đạt điều kiện Q &gt; K<sub>sp</sub> trước thì kết tủa trước. Muốn biết chất nào kết tủa trước, tính <b>nồng độ thuốc thử cần để bắt đầu kết tủa</b> từng chất (chỉ so sánh thẳng K<sub>sp</sub> được khi các kết tủa cùng kiểu và các ion có cùng nồng độ). Nếu hai kết tủa có K<sub>sp</sub> chênh nhau nhiều, có thể tách riêng từng ion.</p>
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
        <li>Khi μ rất nhỏ (khoảng dưới 0,005 M) có thể bỏ mẫu số, gọi là định luật giới hạn: lg γ = −0,51z<sup>2</sup>√μ. Ở μ = 0,01 M, với ion điện tích 2 định luật giới hạn đã lệch khoảng 5%.</li>
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
    baiTap: [
      {
        de: "Trộn các dung dịch sao cho sau khi trộn [Ag<sup>+</sup>] = [Cl<sup>−</sup>] = 1,0·10<sup>−4</sup> M. Có kết tủa AgCl (K<sub>sp</sub> = 1,8·10<sup>−10</sup>) không?",
        dapAn: "Q = (1,0·10<sup>−4</sup>)<sup>2</sup> = 1,0·10<sup>−8</sup> &gt; K<sub>sp</sub> → <b>có kết tủa</b>.",
      },
      {
        de: "HCN có K<sub>a</sub> = 4,9·10<sup>−10</sup>. Tính K<sub>b</sub> của CN<sup>−</sup>.",
        dapAn: "K<sub>b</sub> = K<sub>w</sub>/K<sub>a</sub> = 1,0·10<sup>−14</sup>/4,9·10<sup>−10</sup> = <b>2,0·10<sup>−5</sup></b>",
      },
      {
        de: "Tính độ tan của Hg<sub>2</sub>Br<sub>2</sub> (K<sub>sp</sub> = 6,4·10<sup>−23</sup>) trong nước. Biết Hg<sub>2</sub>Br<sub>2</sub> ⇌ Hg<sub>2</sub><sup>2+</sup> + 2Br<sup>−</sup>.",
        dapAn: "K<sub>sp</sub> = S(2S)<sup>2</sup> = 4S<sup>3</sup> → S = ∛(6,4·10<sup>−23</sup>/4) = <b>2,5·10<sup>−8</sup> M</b>",
      },
      {
        de: "Tính lực ion của dung dịch MgCl<sub>2</sub> 0,020 M.",
        dapAn: "[Mg<sup>2+</sup>] = 0,020 M; [Cl<sup>−</sup>] = 0,040 M → μ = ½(0,020·2<sup>2</sup> + 0,040·1<sup>2</sup>) = <b>0,060 M</b>",
      },
    ],
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
            <tr><td>20 °C</td><td>14,17</td><td>7,08</td></tr>
            <tr><td>25 °C</td><td>14,00</td><td>7,00</td></tr>
            <tr><td>30 °C</td><td>13,83</td><td>6,92</td></tr>
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
        <li><b>Base mạnh</b>: LiOH, NaOH, KOH, Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>, Ba(OH)<sub>2</sub>.</li>
        <li><b>Acid yếu</b> thường gặp: CH<sub>3</sub>COOH, HCOOH, HF, HCN... <b>Base yếu</b>: NH<sub>3</sub>, các amin (CH<sub>3</sub>NH<sub>2</sub>, C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub>), pyridin, anilin.</li>
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
      <p><b>a) Định luật bảo toàn nồng độ</b> (bảo toàn khối lượng): tổng nồng độ các dạng của một cấu tử bằng nồng độ ban đầu.</p>
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
      <p>Từ giản đồ thấy ngay: ở pH ≈ 4,7 dạng H<sub>2</sub>PO<sub>4</sub><sup>−</sup> gần như chiếm toàn bộ, ở pH ≈ 9,7 – 9,8 là HPO<sub>4</sub><sup>2−</sup>. Đây cũng là pH gần đúng của dung dịch NaH<sub>2</sub>PO<sub>4</sub> và Na<sub>2</sub>HPO<sub>4</sub> (xem mục 10).</p>
      <p><b>Dạng tồn tại chủ yếu</b>: pH &lt; pK<sub>a</sub> thì dạng acid chiếm ưu thế; pH &gt; pK<sub>a</sub> thì dạng base chiếm ưu thế. Với acid nhiều nấc, dạng chủ yếu là dạng có pH nằm giữa hai pK<sub>a</sub> kề nó.</p>
      <div class="vi-du"><b>Ví dụ 2.</b> Cho biết dạng tồn tại chủ yếu của acid acetic (pK<sub>a</sub> = 4,75) ở pH 3 và pH 8; của acid phosphoric (pK<sub>a</sub> = 2,12 ; 7,21 ; 12,32) ở pH 4, 9 và 12.
        <details><summary>Xem lời giải</summary>
          Acid acetic: pH 3 &lt; 4,75 → <b>CH<sub>3</sub>COOH</b>; pH 8 &gt; 4,75 → <b>CH<sub>3</sub>COO<sup>−</sup></b>.<br>
          Acid phosphoric: pH 4 nằm giữa 2,12 và 7,21 → <b>H<sub>2</sub>PO<sub>4</sub><sup>−</sup></b>; pH 9 nằm giữa 7,21 và 12,32 → <b>HPO<sub>4</sub><sup>2−</sup></b>; pH 12 vẫn nằm dưới 12,32 → <b>HPO<sub>4</sub><sup>2−</sup></b>. Tuy nhiên [PO<sub>4</sub><sup>3−</sup>]/[HPO<sub>4</sub><sup>2−</sup>] = 10<sup>12 − 12,32</sup> = 0,48, nên PO<sub>4</sub><sup>3−</sup> cũng chiếm khoảng 32%.
        </details></div>

      <h3>5. pH của acid mạnh và base mạnh</h3>
      <div class="cong-thuc"><div class="nhan">Acid mạnh (C<sub>a</sub> ≥ 10<sup>−6</sup> M)</div>\[ \Hp = \Ca \]</div>
      <div class="cong-thuc"><div class="nhan">Base mạnh</div>\[ \OH = \Cb \;\Rightarrow\; \mathrm{pH} = 14 + \lg \Cb \]</div>
      <p>Khi dung dịch rất loãng (C<sub>a</sub> &lt; 10<sup>−6</sup> M), H<sup>+</sup> do nước phân li không bỏ qua được. Từ bảo toàn điện tích \( \Hp = \Ca + \dfrac{\Kw}{\Hp} \):</p>
      <div class="cong-thuc">\[ \Hp = \frac{\Ca + \sqrt{\Ca^2 + 4\Kw}}{2} \]</div>
      <div class="vi-du"><b>Ví dụ 3.</b> Tính pH của dung dịch NaOH 0,020 M.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \OH &= 0,020\ \mathrm{M} \\ \mathrm{pOH} &= -\lg 0,020 = 1,70 \\ \mathrm{pH} &= 14 - 1,70 = \mathbf{12,30} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 4.</b> Tính pH của dung dịch HCl 1,0·10<sup>−7</sup> M.
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
      <div class="vi-du"><b>Ví dụ 5.</b> Tính pH của CH<sub>3</sub>COOH 0,050 M (pK<sub>a</sub> = 4,75).
        <details><summary>Xem lời giải</summary>
          K<sub>a</sub> = 10<sup>−4,75</sup> = 1,78·10<sup>−5</sup>; K<sub>a</sub>C<sub>a</sub> = 8,9·10<sup>−7</sup> ≫ K<sub>w</sub>; \( \dfrac{\Ca}{\Ka} \approx 2\,810 \ge 400 \).
          \[ \begin{aligned} \mathrm{pH} &= \tfrac{1}{2}\left(4,75 - \lg 0,050\right) \\ &= \tfrac{1}{2}\left(4,75 + 1,301\right) = 3,026 \\ &\approx \mathbf{3,03} \end{aligned} \]
          Giải phương trình bậc hai cũng ra pH = 3,03.
        </details></div>
      <div class="vi-du"><b>Ví dụ 6.</b> Tính pH của HF 0,010 M (K<sub>a</sub> = 7,1·10<sup>−4</sup>).
        <details><summary>Xem lời giải</summary>
          \( \dfrac{\Ca}{\Ka} \approx 14 < 400 \) → phải giải phương trình bậc hai. Tính biệt thức trước:
          \[ \begin{aligned} \Delta &= \Ka^2 + 4\Ka\Ca \\ &= 5,04\cdot10^{-7} + 2,84\cdot10^{-5} \\ &= 2,89\cdot10^{-5} \end{aligned} \]
          \[ \begin{aligned} \Hp &= \frac{-7,1\cdot10^{-4} + \sqrt{2,89\cdot10^{-5}}}{2} \\ &= 2,33\cdot10^{-3}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{2,63} \end{aligned} \]
          Dùng nhầm công thức căn sẽ ra 2,57.
        </details></div>
      <div class="vi-du"><b>Ví dụ 7.</b> Tính pH của dung dịch NaHSO<sub>4</sub> 0,050 M (HSO<sub>4</sub><sup>−</sup> có K<sub>a</sub> = 1,0·10<sup>−2</sup>).
        <details><summary>Xem lời giải</summary>
          HSO<sub>4</sub><sup>−</sup> là acid yếu khá mạnh: \( \dfrac{\Ca}{\Ka} = 5 < 400 \) → giải phương trình bậc hai:
          \[ \begin{aligned} \Delta &= 1,0\cdot10^{-4} + 2,0\cdot10^{-3} \\ &= 2,1\cdot10^{-3} \\ \Hp &= \frac{-1,0\cdot10^{-2} + \sqrt{\Delta}}{2} \\ &= 1,79\cdot10^{-2}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{1,75} \end{aligned} \]
          Dùng nhầm công thức căn sẽ ra 1,65; coi là acid mạnh sẽ ra 1,30.
        </details></div>
      <div class="vi-du"><b>Ví dụ 8.</b> Tính pH của HCN 2,0·10<sup>−4</sup> M (K<sub>a</sub> = 4,9·10<sup>−10</sup>).
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
      <div class="vi-du"><b>Ví dụ 9.</b> Tính pH của NH<sub>3</sub> 0,050 M (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,25).
        <details><summary>Xem lời giải</summary>
          pK<sub>b</sub> = 14 − 9,25 = 4,75 → K<sub>b</sub> = 1,78·10<sup>−5</sup>; \( \dfrac{\Cb}{\Kb} \approx 2\,810 \ge 400 \).
          \[ \begin{aligned} \OH &= \sqrt{1,78\cdot10^{-5}\cdot0,050} \\ &= 9,43\cdot10^{-4}\ \mathrm{M} \\ \mathrm{pOH} &= 3,026 \\ \mathrm{pH} &= 14 - 3,026 = \mathbf{10,97} \end{aligned} \]
          Lỗi hay gặp: dùng pK<sub>a</sub> = 9,25 thay cho pK<sub>b</sub>, hoặc quên đổi pOH sang pH (ra 3,03).
        </details></div>
      <div class="vi-du"><b>Ví dụ 10.</b> Tính pH của CH<sub>3</sub>COONa 0,15 M (pK<sub>a</sub> của CH<sub>3</sub>COOH = 4,75).
        <details><summary>Xem lời giải</summary>
          \[ \Kb = \frac{10^{-14}}{10^{-4,75}} = 10^{-9,25} = 5,62\cdot10^{-10} \]
          \[ \begin{aligned} \OH &= \sqrt{5,62\cdot10^{-10}\cdot0,15} \\ &= 9,18\cdot10^{-6}\ \mathrm{M} \\ \mathrm{pOH} &= 5,04 \\ \mathrm{pH} &= 14 - 5,04 = \mathbf{8,96} \end{aligned} \]
          Lỗi hay gặp: dùng thẳng pK<sub>a</sub> = 4,75 thay cho pK<sub>b</sub> = 9,25.
        </details></div>

      <h3>8. Hỗn hợp acid mạnh và acid yếu</h3>
      <p>Acid mạnh cho nhiều H<sup>+</sup>, đẩy cân bằng phân li của acid yếu sang trái (hiệu ứng ion chung) → acid yếu gần như không phân li.</p>
      <div class="cong-thuc"><div class="nhan">C<sub>1</sub>: acid mạnh ; C<sub>2</sub>, K<sub>a</sub>: acid yếu</div>\[ \Hp = C_1 + C_2\cdot\frac{\Ka}{\Ka + \Hp} \]</div>
      <p>Thường chỉ cần lấy gần đúng [H<sup>+</sup>] ≈ C<sub>1</sub>, rồi kiểm tra phần đóng góp của acid yếu.</p>
      <div class="vi-du"><b>Ví dụ 11.</b> Tính pH của dung dịch HCl 0,010 M + CH<sub>3</sub>COOH 0,10 M.
        <details><summary>Xem lời giải</summary>
          Gần đúng lần 1: [H<sup>+</sup>] ≈ 0,010 M. Phần do CH<sub>3</sub>COOH:
          \[ \begin{aligned} &0,10\cdot\frac{1,78\cdot10^{-5}}{1,78\cdot10^{-5} + 0,010} \\ &= 1,8\cdot10^{-4}\ \mathrm{M} \end{aligned} \]
          (chỉ 0,18% acid acetic phân li)
          \[ \begin{aligned} \Hp &\approx 0,0102\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{1,99} \end{aligned} \]
          Gần như bằng pH của riêng HCl là 2,00.
        </details></div>

      <h3>9. Acid và base đa chức</h3>
      <p>Tính pH theo <b>nấc 1</b> như một acid đơn chức (nhớ kiểm tra điều kiện C/K<sub>a1</sub> ≥ 400). Được phép bỏ qua nấc 2 khi \( K_\mathrm{a2} \ll \Hp \) tính theo nấc 1, vì khi đó \( [\mathrm{A^{2-}}]/[\mathrm{HA^-}] = K_\mathrm{a2}/\Hp \) rất nhỏ. Ví dụ H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> có K<sub>a1</sub>/K<sub>a2</sub> chỉ khoảng 10<sup>3</sup>, nhưng dung dịch 0,10 M có [H<sup>+</sup>] ≈ 5·10<sup>−2</sup> M ≫ K<sub>a2</sub> = 6,46·10<sup>−5</sup>, nên vẫn tính theo nấc 1.</p>
      <p>Tương tự, base đa chức (Na<sub>2</sub>CO<sub>3</sub>, Na<sub>3</sub>PO<sub>4</sub>) tính theo nấc base thứ nhất với \( K_\mathrm{b1} = \dfrac{\Kw}{K_{\mathrm{a}n}} \) (K<sub>an</sub>: hằng số nấc cuối).</p>
      <div class="vi-du"><b>Ví dụ 12.</b> Tính pH của H<sub>3</sub>PO<sub>4</sub> 0,10 M (K<sub>a1</sub> = 7,5·10<sup>−3</sup>).
        <details><summary>Xem lời giải</summary>
          \( \dfrac{C}{K_\mathrm{a1}} \approx 13 < 400 \) → giải phương trình bậc hai theo nấc 1:
          \[ \begin{aligned} \Delta &= K_\mathrm{a1}^2 + 4K_\mathrm{a1}C \\ &= 5,63\cdot10^{-5} + 3,00\cdot10^{-3} \\ &= 3,06\cdot10^{-3} \end{aligned} \]
          \[ \begin{aligned} \Hp &= \frac{-7,5\cdot10^{-3} + \sqrt{3,06\cdot10^{-3}}}{2} \\ &= 2,39\cdot10^{-2}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{1,62} \end{aligned} \]
          Dùng nhầm công thức căn sẽ ra 1,56.
        </details></div>
      <div class="vi-du"><b>Ví dụ 13.</b> Tính pH của Na<sub>2</sub>CO<sub>3</sub> 0,25 M (K<sub>a2</sub> của H<sub>2</sub>CO<sub>3</sub> = 4,8·10<sup>−11</sup>).
        <details><summary>Xem lời giải</summary>
          K<sub>b1</sub> = K<sub>w</sub>/K<sub>a2</sub> = 2,08·10<sup>−4</sup>; \( \dfrac{C}{K_\mathrm{b1}} \approx 1\,200 \ge 400 \) → dùng công thức căn:
          \[ \begin{aligned} \OH &= \sqrt{2,08\cdot10^{-4}\cdot0,25} \\ &= 7,22\cdot10^{-3}\ \mathrm{M} \\ \mathrm{pOH} &= 2,14 \\ \mathrm{pH} &= 14 - 2,14 = \mathbf{11,86} \end{aligned} \]
          Giải phương trình bậc hai ra pH = 11,85. Lượng CO<sub>3</sub><sup>2−</sup> đã phản ứng chỉ khoảng 2,8% (&lt; 5%), nên coi [CO<sub>3</sub><sup>2−</sup>] ≈ C là chấp nhận được; hai cách chỉ lệch 0,01 đơn vị pH.
        </details></div>

      <h3>10. Chất lưỡng tính</h3>
      <p>Với dung dịch HA<sup>−</sup> (NaHCO<sub>3</sub>, NaH<sub>2</sub>PO<sub>4</sub>, Na<sub>2</sub>HPO<sub>4</sub>...), từ ĐKP suy ra:</p>
      <div class="cong-thuc">\[ \Hp = \sqrt{\frac{K_\mathrm{a1}\left(K_\mathrm{a2}C + \Kw\right)}{K_\mathrm{a1} + C}} \]</div>
      <p>Khi C ≫ K<sub>a1</sub> và K<sub>a2</sub>C ≫ K<sub>w</sub>, công thức rút gọn thành:</p>
      <div class="cong-thuc">\[ \begin{gathered} \Hp = \sqrt{K_\mathrm{a1}K_\mathrm{a2}} \\ \mathrm{pH} = \frac{\mathrm{p}K_\mathrm{a1} + \mathrm{p}K_\mathrm{a2}}{2} \end{gathered} \]</div>
      <p>(K<sub>a1</sub>, K<sub>a2</sub> là hai hằng số <b>kề</b> dạng lưỡng tính. Ví dụ với Na<sub>2</sub>HPO<sub>4</sub> dùng pK<sub>a2</sub> và pK<sub>a3</sub> của H<sub>3</sub>PO<sub>4</sub>.)</p>
      <div class="vi-du"><b>Ví dụ 14.</b> Tính pH của NaHCO<sub>3</sub> 0,10 M, NaH<sub>2</sub>PO<sub>4</sub> 0,10 M và Na<sub>2</sub>HPO<sub>4</sub> 0,10 M.
        <details><summary>Xem lời giải</summary>
          NaHCO<sub>3</sub> (công thức đầy đủ cũng cho cùng kết quả):
          \[ \begin{aligned} \Hp &= \sqrt{4,2\cdot10^{-7}\cdot4,8\cdot10^{-11}} \\ &= 4,49\cdot10^{-9}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{8,35} \end{aligned} \]
          NaH<sub>2</sub>PO<sub>4</sub>: công thức rút gọn cho \( \Hp = \sqrt{7,5\cdot10^{-3}\cdot6,2\cdot10^{-8}} = 2,16\cdot10^{-5} \) M, pH = 4,67. Nhưng C = 0,10 không lớn hơn nhiều so với K<sub>a1</sub> = 7,5·10<sup>−3</sup>, nên dùng công thức đầy đủ. Với K<sub>a2</sub>C + K<sub>w</sub> = 6,20·10<sup>−9</sup> và K<sub>a1</sub> + C = 0,1075:
          \[ \begin{aligned} \Hp &= \sqrt{\frac{7,5\cdot10^{-3}\cdot6,20\cdot10^{-9}}{0,1075}} \\ &= 2,08\cdot10^{-5}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{4,68} \end{aligned} \]
          Na<sub>2</sub>HPO<sub>4</sub> (dùng K<sub>a2</sub> và K<sub>a3</sub>): công thức rút gọn cho pH = ½(7,21 + 12,32) ≈ 9,76. Nhưng K<sub>a3</sub>C = 4,8·10<sup>−14</sup> cùng cỡ với K<sub>w</sub>, điều kiện K<sub>a2</sub>C ≫ K<sub>w</sub> (ở đây là K<sub>a3</sub>C ≫ K<sub>w</sub>) không thỏa:
          \[ \begin{aligned} \Hp &= \sqrt{\frac{K_\mathrm{a2}\left(K_\mathrm{a3}C + \Kw\right)}{K_\mathrm{a2} + C}} \\ &= \sqrt{\frac{6,2\cdot10^{-8}\cdot5,8\cdot10^{-14}}{0,10}} \\ &= 1,90\cdot10^{-10}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{9,72} \end{aligned} \]
        </details></div>
      <p><b>Amino acid (tự đọc)</b>: amino acid như leucin tồn tại ở ba dạng H<sub>2</sub>L<sup>+</sup> / HL (ion lưỡng cực) / L<sup>−</sup>, với pK<sub>1</sub> = 2,33 và pK<sub>2</sub> = 9,74. Dạng H<sub>2</sub>L<sup>+</sup> tính như acid đơn chức với K<sub>1</sub>; dạng L<sup>−</sup> tính như base đơn chức với K<sub>b</sub> = K<sub>w</sub>/K<sub>2</sub>; dạng HL là chất lưỡng tính, pH ≈ ½(pK<sub>1</sub> + pK<sub>2</sub>) ≈ 6,0. Giá trị này cũng gần bằng <b>điểm đẳng điện</b> (pI), là pH tại đó điện tích trung bình của phân tử bằng 0.</p>

      <h3>11. Dung dịch đệm</h3>
      <p>Dung dịch đệm chứa đồng thời acid yếu HA và base liên hợp A<sup>−</sup> với nồng độ đáng kể. Nó giữ pH gần như không đổi khi thêm một lượng nhỏ acid mạnh, base mạnh, hoặc khi pha loãng.</p>
      <div class="cong-thuc"><div class="nhan">Phương trình Henderson – Hasselbalch</div>\[ \mathrm{pH} = \pKa + \lg\frac{C_\mathrm{A^-}}{C_\mathrm{HA}} \]</div>
      <ul>
        <li>Điều kiện dùng: C<sub>HA</sub> và C<sub>A⁻</sub> đều lớn hơn nhiều so với [H<sup>+</sup>] và [OH<sup>−</sup>].</li>
        <li>Pha loãng đệm: tỉ số C<sub>A⁻</sub>/C<sub>HA</sub> không đổi nên pH gần như không đổi, trừ khi đệm quá loãng hoặc pH quá thấp/quá cao.</li>
        <li>Đệm base (NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup>, Tris/Tris-H<sup>+</sup>) dùng cùng công thức với pK<sub>a</sub> của acid liên hợp: \( \mathrm{pH} = \mathrm{p}K_\mathrm{a}(\mathrm{BH^+}) + \lg\dfrac{C_\mathrm{B}}{C_\mathrm{BH^+}} \).</li>
        <li>Có thể pha đệm bằng cách <b>trung hòa một phần</b>: acid mạnh phản ứng hoàn toàn với base yếu, base mạnh phản ứng hoàn toàn với acid yếu.</li>
        <li>Khoảng đệm hiệu quả: <b>pH = pK<sub>a</sub> ± 1</b>. Muốn pha đệm pH nào thì chọn cặp có pK<sub>a</sub> gần pH đó.</li>
      </ul>
      <p><b>Đệm năng</b> β = dC<sub>b</sub>/dpH = −dC<sub>a</sub>/dpH: số mol base (acid) mạnh cần thêm vào 1 L dung dịch để pH tăng (giảm) một lượng rất nhỏ, tính quy về 1 đơn vị pH.</p>
      <div class="cong-thuc"><div class="nhan">C = C<sub>HA</sub> + C<sub>A⁻</sub></div>\[ \beta \approx 2,303\cdot C\cdot\frac{\Ka h}{\left(\Ka + h\right)^2} \]</div>
      <p>β lớn nhất khi pH = pK<sub>a</sub> (β<sub>max</sub> = 0,576·C) và tăng theo nồng độ tổng của đệm.</p>
      <div class="vi-du"><b>Ví dụ 15.</b> 1,00 L đệm gồm CH<sub>3</sub>COOH 0,10 M và CH<sub>3</sub>COONa 0,10 M. Thêm 0,010 mol HCl (coi thể tích không đổi). Tính pH trước và sau khi thêm, so sánh với việc thêm cùng lượng HCl vào 1,00 L nước.
        <details><summary>Xem lời giải</summary>
          Trước khi thêm:
          \[ \mathrm{pH} = 4,75 + \lg\frac{0,10}{0,10} = \mathbf{4,75} \]
          H<sup>+</sup> + CH<sub>3</sub>COO<sup>−</sup> → CH<sub>3</sub>COOH, nên C<sub>A⁻</sub> = 0,090 M; C<sub>HA</sub> = 0,110 M:
          \[ \mathrm{pH} = 4,75 + \lg\frac{0,090}{0,110} = \mathbf{4,66} \]
          pH chỉ giảm 0,09. Trong nước, pH giảm từ 7,00 xuống 2,00 (giảm 5 đơn vị).
        </details></div>
      <div class="vi-du"><b>Ví dụ 16.</b> Cần pha 1,00 L đệm acetat tổng nồng độ 0,100 M, pH 5,00 (pK<sub>a</sub> = 4,75). Tính số mol CH<sub>3</sub>COONa và CH<sub>3</sub>COOH cần dùng.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \lg\frac{C_\mathrm{A^-}}{C_\mathrm{HA}} &= 5,00 - 4,75 = 0,25 \\ \frac{C_\mathrm{A^-}}{C_\mathrm{HA}} &= 10^{0,25} = 1,78 \end{aligned} \]
          \[ \begin{aligned} n_\mathrm{CH_3COONa} &= 0,100\cdot\frac{1,78}{1 + 1,78} \\ &= \mathbf{0,0640\ mol} \\ n_\mathrm{CH_3COOH} &= 0,100 - 0,0640 \\ &= \mathbf{0,0360\ mol} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 17.</b> Trộn 100,0 mL NH<sub>3</sub> 0,20 M với 50,0 mL HCl 0,10 M. Tính pH (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,25).
        <details><summary>Xem lời giải</summary>
          HCl phản ứng hoàn toàn: NH<sub>3</sub> + H<sup>+</sup> → NH<sub>4</sub><sup>+</sup>. Còn 20,0 − 5,0 = 15,0 mmol NH<sub>3</sub> và tạo 5,0 mmol NH<sub>4</sub><sup>+</sup>:
          \[ \mathrm{pH} = 9,25 + \lg\frac{15,0}{5,0} = \mathbf{9,73} \]
        </details></div>
      <p class="luu-y"><b>Giới hạn của Henderson – Hasselbalch</b>: khi [H<sup>+</sup>] không nhỏ hơn nhiều so với nồng độ các dạng đệm, phải giải chính xác. Ví dụ đệm leucin H<sub>2</sub>L<sup>+</sup>/HL, mỗi dạng 4,5·10<sup>−3</sup> M (pK<sub>1</sub> = 2,33): công thức cho pH = 2,33, nhưng giải chính xác ra pH = 2,72, vì H<sub>2</sub>L<sup>+</sup> phân li đáng kể ([H<sup>+</sup>] ≈ 2·10<sup>−3</sup> M).</p>
      <p><b>Ứng dụng của dung dịch đệm</b>: giữ pH cho phản ứng enzyme, lên men, nhuộm; hiệu chuẩn máy đo pH; đệm PBS pH 7,4 trong sinh học. Máu người được giữ ở pH 7,35 – 7,45 nhờ ba hệ đệm: carbonate (H<sub>2</sub>CO<sub>3</sub>/HCO<sub>3</sub><sup>−</sup>), phosphate và protein. Trong phòng thí nghiệm thường pha theo công thức tra cứu (ví dụ bảng đệm McIlvaine Na<sub>2</sub>HPO<sub>4</sub> – acid citric cho pH 3 – 8), rồi đo pH và chỉnh bằng acid hoặc base trước khi định mức.</p>

      <h3>12. Tóm tắt: chọn công thức tính pH</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Dung dịch</th><th>Công thức</th><th>Điều kiện</th></tr></thead>
          <tbody>
            <tr><td>Acid mạnh</td><td>\( \Hp = \Ca \)</td><td>\( \Ca \ge 10^{-6} \)</td></tr>
            <tr><td>Acid mạnh rất loãng</td><td>\( \Hp = \dfrac{\Ca + \sqrt{\Ca^2 + 4\Kw}}{2} \)</td><td>\( \Ca < 10^{-6} \)</td></tr>
            <tr><td>Acid yếu</td><td>\( \Hp = \sqrt{\Ka\Ca} \)</td><td>\( \dfrac{\Ca}{\Ka} \ge 400 \)</td></tr>
            <tr><td>Acid yếu</td><td>Giải phương trình bậc hai</td><td>\( \dfrac{\Ca}{\Ka} < 400 \)</td></tr>
            <tr><td>Acid rất yếu, loãng</td><td>\( \Hp = \sqrt{\Ka\Ca + \Kw} \)</td><td>\( \Ka\Ca \not\gg \Kw \) và \( \dfrac{\Ca}{\Ka} \ge 400 \)</td></tr>
            <tr><td>Base yếu; muối của acid yếu (CH<sub>3</sub>COONa)</td><td>Như acid yếu, thay bằng [OH<sup>−</sup>] và \( \Kb = \dfrac{\Kw}{\Ka} \)</td><td>\( \dfrac{\Cb}{\Kb} \ge 400 \)</td></tr>
            <tr><td>Muối của base yếu (NH<sub>4</sub>Cl)</td><td>Acid yếu với \( \Ka = \dfrac{\Kw}{\Kb} \)</td><td>\( \dfrac{\Ca}{\Ka} \ge 400 \)</td></tr>
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
    moTa: "Đường chuẩn độ, bước nhảy, chỉ thị, Gran, chất gốc, Kjeldahl",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Tính pH tại mọi điểm của đường chuẩn độ: acid/base mạnh, acid yếu, base yếu, base hai nấc.</li>
          <li>Giải thích các yếu tố ảnh hưởng tới bước nhảy và chọn chỉ thị phù hợp, ước lượng sai số chỉ thị.</li>
          <li>Biết cách xác định điểm cuối, các chất gốc thường dùng và các ứng dụng: hỗn hợp carbonate, Kjeldahl.</li>
        </ul>
      </div>
      <h3>1. Các khái niệm cơ bản</h3>
      <ul>
        <li><b>Điểm tương đương</b>: lượng chất chuẩn thêm vào vừa đủ phản ứng hết với chất phân tích theo đúng hợp thức. Thể tích lúc đó gọi là <b>thể tích tương đương</b> V<sub>e</sub>.</li>
        <li><b>Điểm cuối</b>: thời điểm ta quan sát được sự thay đổi (chỉ thị đổi màu, điện cực báo). Chênh lệch giữa điểm cuối và điểm tương đương gây ra <b>sai số chuẩn độ</b>.</li>
        <li><b>Đường chuẩn độ</b>: đồ thị pH theo thể tích chất chuẩn. Quanh điểm tương đương pH thay đổi đột ngột, gọi là <b>bước nhảy pH</b>.</li>
      </ul>
      <p>Phản ứng chuẩn độ acid – base phải xảy ra nhanh, hoàn toàn (K rất lớn) và đúng hợp thức. Vì vậy chất chuẩn luôn là <b>acid mạnh hoặc base mạnh</b> (HCl, NaOH...).</p>
      <p><b>Cách tính pH trên đường chuẩn độ</b>: viết phản ứng, tính V<sub>e</sub>, rồi chia làm 4 vùng: (1) trước khi thêm chất chuẩn; (2) trước điểm tương đương; (3) tại điểm tương đương; (4) sau điểm tương đương. Ở mỗi vùng, xác định dung dịch đang chứa gì rồi dùng công thức ở Chương 5.</p>

      <h3>2. Chuẩn độ base mạnh bằng acid mạnh</h3>
      <p>Phản ứng: H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O. Trước điểm tương đương pH do OH<sup>−</sup> dư quyết định; tại điểm tương đương dung dịch chỉ có muối trung tính nên <b>pH = 7,00</b>; sau điểm tương đương pH do H<sup>+</sup> dư quyết định.</p>
      <div class="vi-du"><b>Ví dụ 1.</b> Chuẩn độ 50,0 mL KOH 0,0200 M bằng HBr 0,1000 M. Tính pH khi thêm 0; 5,0; 9,0; 10,0; 11,0 và 15,0 mL HBr.
        <details><summary>Xem lời giải</summary>
          \[ V_e = \frac{50,0\cdot0,0200}{0,1000} = 10,0\ \mathrm{mL} \]
          Ví dụ tại V = 5,0 mL: OH<sup>−</sup> dư = 1,000 − 0,500 = 0,500 mmol trong 55,0 mL:
          \[ \begin{aligned} \OH &= \frac{0,500}{55,0} = 9,09\cdot10^{-3}\ \mathrm{M} \\ \mathrm{pH} &= 14 + \lg\left(9,09\cdot10^{-3}\right) = 11,96 \end{aligned} \]
          Tại V = 11,0 mL: H<sup>+</sup> dư = 0,100 mmol trong 61,0 mL → [H<sup>+</sup>] = 1,64·10<sup>−3</sup> M → pH = 2,79.
          <div class="bang-cuon"><table class="bang">
            <thead><tr><th>V<sub>HBr</sub> (mL)</th><th>0</th><th>5,0</th><th>9,0</th><th>10,0</th><th>11,0</th><th>15,0</th></tr></thead>
            <tbody><tr><td>pH</td><td>12,30</td><td>11,96</td><td>11,23</td><td><b>7,00</b></td><td>2,79</td><td>2,11</td></tr></tbody>
          </table></div>
          Chỉ thêm 2 mL quanh V<sub>e</sub> (9,0 → 11,0 mL), pH giảm gần 8,5 đơn vị: đó là bước nhảy.
        </details></div>

      <h3>3. Chuẩn độ acid yếu bằng base mạnh</h3>
      <p>Phản ứng: HA + OH<sup>−</sup> → A<sup>−</sup> + H<sub>2</sub>O (K = K<sub>a</sub>/K<sub>w</sub> rất lớn, phản ứng hoàn toàn).</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Vùng</th><th>Dung dịch chứa</th><th>Cách tính pH</th></tr></thead>
          <tbody>
            <tr><td>V = 0</td><td>Acid yếu HA</td><td>\( \mathrm{pH} = \tfrac{1}{2}(\pKa - \lg\Ca) \) nếu C/K<sub>a</sub> ≥ 400</td></tr>
            <tr><td>0 &lt; V &lt; V<sub>e</sub></td><td>Đệm HA/A<sup>−</sup></td><td>\( \mathrm{pH} = \pKa + \lg\dfrac{n_\mathrm{A^-}}{n_\mathrm{HA}} \)</td></tr>
            <tr><td>V = V<sub>e</sub>/2</td><td>n<sub>HA</sub> = n<sub>A⁻</sub></td><td><b>pH = pK<sub>a</sub></b></td></tr>
            <tr><td>V = V<sub>e</sub></td><td>Base yếu A<sup>−</sup></td><td>\( K_\mathrm{b} = \Kw/\Ka \); pH &gt; 7</td></tr>
            <tr><td>V &gt; V<sub>e</sub></td><td>OH<sup>−</sup> dư (bỏ qua A<sup>−</sup>)</td><td>\( \mathrm{pH} = 14 + \lg\OH_\text{dư} \)</td></tr>
          </tbody>
        </table>
      </div>
      <p>Trong vùng đệm, tỉ số nồng độ bằng tỉ số số mol (cùng thể tích), nên chỉ cần tính số mol. Điểm nửa tương đương cho phép <b>xác định pK<sub>a</sub></b> trực tiếp từ đường chuẩn độ.</p>
      <div class="vi-du"><b>Ví dụ 2.</b> Chuẩn độ 50,0 mL CH<sub>3</sub>COOH 0,0500 M (pK<sub>a</sub> = 4,75) bằng NaOH 0,100 M. Tính pH tại các điểm đặc trưng.
        <details><summary>Xem lời giải</summary>
          n<sub>HA</sub> ban đầu = 2,50 mmol → V<sub>e</sub> = 25,0 mL.<br>
          <b>V = 0</b>: \( \mathrm{pH} = \tfrac{1}{2}(4,75 - \lg 0,0500) = 3,03 \)<br>
          <b>V = 5,0 mL</b>: n<sub>A⁻</sub> = 0,500 mmol; n<sub>HA</sub> = 2,00 mmol:
          \[ \mathrm{pH} = 4,75 + \lg\frac{0,500}{2,00} = 4,15 \]
          <b>V = 12,5 mL</b> (nửa tương đương): pH = pK<sub>a</sub> = 4,75.<br>
          <b>V = 25,0 mL</b>: C<sub>A⁻</sub> = 2,50/75,0 = 0,0333 M; K<sub>b</sub> = 10<sup>−9,25</sup>:
          \[ \begin{aligned} \mathrm{pOH} &= \tfrac{1}{2}(9,25 - \lg 0,0333) = 5,36 \\ \mathrm{pH} &= 14 - 5,36 = \mathbf{8,64} \end{aligned} \]
          <b>V = 26,0 mL</b>: OH<sup>−</sup> dư = 0,100 mmol/76,0 mL = 1,32·10<sup>−3</sup> M → pH = 11,12.
          <div class="bang-cuon"><table class="bang">
            <thead><tr><th>V<sub>NaOH</sub> (mL)</th><th>0</th><th>5,0</th><th>12,5</th><th>20,0</th><th>24,0</th><th>25,0</th><th>26,0</th><th>30,0</th></tr></thead>
            <tbody><tr><td>pH</td><td>3,03</td><td>4,15</td><td>4,75</td><td>5,35</td><td>6,13</td><td><b>8,64</b></td><td>11,12</td><td>11,80</td></tr></tbody>
          </table></div>
        </details></div>

      <h3>4. Chuẩn độ base yếu bằng acid mạnh</h3>
      <p>Hoàn toàn đối xứng với mục 3: B + H<sup>+</sup> → BH<sup>+</sup>.</p>
      <ul>
        <li>V = 0: base yếu, tính [OH<sup>−</sup>] theo K<sub>b</sub>.</li>
        <li>Trước điểm tương đương: đệm B/BH<sup>+</sup>, pH = pK<sub>a</sub>(BH<sup>+</sup>) + lg(n<sub>B</sub>/n<sub>BH⁺</sub>). Tại nửa tương đương pH = pK<sub>a</sub>(BH<sup>+</sup>).</li>
        <li>Tại điểm tương đương: acid yếu BH<sup>+</sup>, nên <b>pH &lt; 7</b>.</li>
        <li>Sau điểm tương đương: H<sup>+</sup> dư quyết định pH.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 3.</b> Chuẩn độ 50,0 mL NH<sub>3</sub> 0,0500 M bằng HCl 0,100 M (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,25). Tính pH ban đầu, tại nửa tương đương và tại điểm tương đương.
        <details><summary>Xem lời giải</summary>
          V<sub>e</sub> = 25,0 mL.<br>
          V = 0: pOH = ½(4,75 − lg 0,0500) = 3,03 → pH = 10,97.<br>
          V = 12,5 mL: pH = pK<sub>a</sub>(NH<sub>4</sub><sup>+</sup>) = 9,25.<br>
          V = 25,0 mL: C<sub>NH₄⁺</sub> = 0,0333 M:
          \[ \mathrm{pH} = \tfrac{1}{2}(9,25 - \lg 0,0333) = \mathbf{5,36} \]
          Chỉ thị phải đổi màu ở vùng acid (metyl đỏ). Dùng phenolphtalein sẽ dừng quá sớm.
        </details></div>

      <h3>5. Các yếu tố ảnh hưởng tới bước nhảy</h3>
      <ul>
        <li><b>Nồng độ</b>: dung dịch càng loãng thì bước nhảy càng ngắn. Chuẩn độ acid mạnh – base mạnh 0,1 M có bước nhảy (ứng với sai số ±0,1%) từ pH 4,3 đến 9,7; ở 0,001 M chỉ còn khoảng 6,3 – 7,7. Khi C &lt; 10<sup>−4</sup> M, bước nhảy quá nhỏ, không chuẩn độ được bằng chỉ thị màu.</li>
        <li><b>Độ mạnh của acid (base)</b>: acid càng yếu thì phần đầu đường chuẩn độ càng cao và bước nhảy càng ngắn. Acid có pK<sub>a</sub> &gt; 10 hầu như không còn bước nhảy trong nước, phải chuẩn độ trong dung môi không nước.</li>
        <li>Tiêu chí thường dùng để chuẩn độ acid yếu với sai số khoảng 0,1% bằng chỉ thị màu: \( \Ca\Ka \ge 10^{-8} \).</li>
      </ul>
      <p class="luu-y">Đường chuẩn độ acid yếu không đối xứng quanh điểm tương đương: phần trước V<sub>e</sub> là vùng đệm thoải, phần sau V<sub>e</sub> trùng với đường của acid mạnh.</p>

      <h3>6. Chuẩn độ acid, base hai nấc</h3>
      <p>Với acid H<sub>2</sub>A chuẩn độ bằng NaOH (hoặc base A<sup>2−</sup> chuẩn độ bằng HCl), đường chuẩn độ có hai điểm tương đương V<sub>e1</sub> và V<sub>e2</sub> = 2V<sub>e1</sub>:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Vùng (acid H<sub>2</sub>A + NaOH)</th><th>Dung dịch chứa</th><th>pH</th></tr></thead>
          <tbody>
            <tr><td>Trước V<sub>e1</sub></td><td>Đệm H<sub>2</sub>A/HA<sup>−</sup></td><td>pK<sub>a1</sub> + lg(n<sub>HA⁻</sub>/n<sub>H₂A</sub>)</td></tr>
            <tr><td>V<sub>e1</sub></td><td>Chất lưỡng tính HA<sup>−</sup></td><td>≈ ½(pK<sub>a1</sub> + pK<sub>a2</sub>)</td></tr>
            <tr><td>Giữa V<sub>e1</sub> và V<sub>e2</sub></td><td>Đệm HA<sup>−</sup>/A<sup>2−</sup></td><td>pK<sub>a2</sub> + lg(n<sub>A²⁻</sub>/n<sub>HA⁻</sub>)</td></tr>
            <tr><td>V<sub>e2</sub></td><td>Base yếu A<sup>2−</sup></td><td>Tính theo K<sub>b1</sub> = K<sub>w</sub>/K<sub>a2</sub></td></tr>
            <tr><td>Sau V<sub>e2</sub></td><td>OH<sup>−</sup> dư</td><td>14 + lg[OH<sup>−</sup>]<sub>dư</sub></td></tr>
          </tbody>
        </table>
      </div>
      <p>Muốn thấy rõ hai bước nhảy riêng biệt, hai hằng số phải cách nhau đủ xa (thường K<sub>a1</sub>/K<sub>a2</sub> ≥ 10<sup>4</sup>). Hệ carbonate chỉ có K<sub>a1</sub>/K<sub>a2</sub> ≈ 9·10<sup>3</sup>, nên bước nhảy thứ nhất nhỏ (sai số cỡ 1%); điểm cuối thứ hai rõ hơn và thường dùng để tính tổng lượng base.</p>
      <div class="vi-du"><b>Ví dụ 4.</b> Chuẩn độ 20,0 mL Na<sub>2</sub>CO<sub>3</sub> 0,100 M bằng HCl 0,100 M (H<sub>2</sub>CO<sub>3</sub>: K<sub>a1</sub> = 4,2·10<sup>−7</sup>; K<sub>a2</sub> = 4,8·10<sup>−11</sup>). Tính pH tại hai điểm tương đương và chọn chỉ thị.
        <details><summary>Xem lời giải</summary>
          V<sub>e1</sub> = 20,0 mL (CO<sub>3</sub><sup>2−</sup> → HCO<sub>3</sub><sup>−</sup>); V<sub>e2</sub> = 40,0 mL (HCO<sub>3</sub><sup>−</sup> → H<sub>2</sub>CO<sub>3</sub>).<br>
          <b>Tại V<sub>e1</sub></b>: dung dịch NaHCO<sub>3</sub> (lưỡng tính):
          \[ \begin{aligned} \Hp &= \sqrt{4,2\cdot10^{-7}\cdot4,8\cdot10^{-11}} \\ &= 4,49\cdot10^{-9}\ \mathrm{M} \\ \mathrm{pH} &= \mathbf{8,35} \end{aligned} \]
          → dùng phenolphtalein (khi chuẩn bằng HCl, màu chuyển từ hồng sang không màu).<br>
          <b>Tại V<sub>e2</sub></b>: H<sub>2</sub>CO<sub>3</sub> 2,00 mmol/60,0 mL = 0,0333 M, coi như acid một nấc với K<sub>a1</sub>:
          \[ \mathrm{pH} = \tfrac{1}{2}\left(6,38 - \lg 0,0333\right) = \mathbf{3,93} \]
          → dùng metyl da cam (màu chuyển từ vàng sang da cam). Trong thực tế nên đun sôi gần cuối để đuổi CO<sub>2</sub>, điểm cuối sẽ rõ hơn.
        </details></div>

      <h3>7. Chỉ thị acid – base</h3>
      <p>Chỉ thị là acid (base) yếu có dạng acid HInd và dạng base Ind<sup>−</sup> khác màu nhau:</p>
      <div class="cong-thuc">\[ \begin{gathered} \mathrm{HInd} \rightleftharpoons \mathrm{H^+} + \mathrm{Ind^-} \\ \mathrm{pH} = \mathrm{p}K_\mathrm{HInd} + \lg\frac{[\mathrm{Ind^-}]}{[\mathrm{HInd}]} \end{gathered} \]</div>
      <p>Mắt chỉ thấy rõ màu của một dạng khi nó nhiều gấp khoảng 10 lần dạng kia, nên <b>khoảng đổi màu ≈ pK<sub>HInd</sub> ± 1</b>. Khoảng thực nghiệm không nhất thiết đối xứng như vậy, vì mắt nhạy với một số màu hơn màu khác.</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Chỉ thị</th><th>Khoảng đổi màu (pH)</th><th>Màu (acid → base)</th></tr></thead>
          <tbody>
            <tr><td>Metyl da cam</td><td>3,1 – 4,4</td><td>đỏ → vàng</td></tr>
            <tr><td>Metyl đỏ</td><td>4,4 – 6,2</td><td>đỏ → vàng</td></tr>
            <tr><td>Bromthymol xanh</td><td>6,0 – 7,6</td><td>vàng → xanh lam</td></tr>
            <tr><td>Phenolphtalein</td><td>8,2 – 10,0</td><td>không màu → hồng</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Bài giảng minh họa quy tắc pK ± 1 bằng một chỉ thị có pK ≈ 5 (khoảng 4 – 6). Giá trị thực nghiệm của metyl da cam là pK ≈ 3,5, khoảng 3,1 – 4,4; khoảng 4,4 – 6,2 là của metyl đỏ. Khi thi, dùng số liệu đề bài cho.</p>
      <p>Bảng ghi màu theo chiều pH tăng. Khi chuẩn độ bằng acid (pH giảm), màu đi theo chiều ngược lại, ví dụ phenolphtalein chuyển từ hồng sang không màu.</p>
      <p><b>Nguyên tắc chọn chỉ thị</b>: khoảng đổi màu phải nằm trong bước nhảy, càng gần pH tương đương càng tốt. Chỉ dùng vài giọt, vì chỉ thị cũng là acid/base và tiêu tốn chất chuẩn.</p>
      <div class="vi-du"><b>Ví dụ 5.</b> Trong Ví dụ 2 (pH<sub>tđ</sub> = 8,64), nếu dùng bromthymol xanh và dừng chuẩn độ ở pH = 7,00 thì sai số bao nhiêu?
        <details><summary>Xem lời giải</summary>
          Ở pH 7,00 dung dịch vẫn là đệm:
          \[ \frac{n_\mathrm{A^-}}{n_\mathrm{HA}} = 10^{7,00 - 4,75} = 178 \]
          Phần acid đã được chuẩn độ là 178/179 = 99,44%, nên sai số là <b>−0,56%</b> (sai số âm vì dừng trước điểm tương đương). Phenolphtalein đổi màu quanh pH 8,2 – 10,0, bao quanh pH<sub>tđ</sub>, cho sai số nhỏ hơn nhiều.
        </details></div>

      <h3>8. Xác định điểm cuối bằng máy đo pH</h3>
      <p>Chuẩn độ điện thế: đo pH sau mỗi lần thêm chất chuẩn và vẽ đường chuẩn độ. Điểm cuối là <b>điểm uốn</b>, nơi độ dốc dpH/dV lớn nhất. Có thể tìm bằng đạo hàm bậc một (cực đại) hoặc đạo hàm bậc hai (bằng 0). Máy chuẩn độ tự động làm việc này.</p>
      <p><b>Đồ thị Gran</b>: số liệu sát điểm cuối thường kém tin cậy. Với chuẩn độ acid yếu bằng base mạnh, trong vùng khoảng 0,8V<sub>e</sub> – V<sub>e</sub> (bỏ qua hệ số hoạt độ):</p>
      <div class="cong-thuc">\[ V_\mathrm{b}\cdot10^{-\mathrm{pH}} = \Ka\left(V_e - V_\mathrm{b}\right) \]</div>
      <p>Vẽ V<sub>b</sub>·10<sup>−pH</sup> theo V<sub>b</sub> được đường thẳng: giao điểm với trục hoành là <b>V<sub>e</sub></b>, độ dốc là <b>−K<sub>a</sub></b>.</p>

      <h3>9. Chất gốc và chuẩn hóa dung dịch</h3>
      <p>Dung dịch NaOH hút CO<sub>2</sub> và hơi nước, HCl đặc không có nồng độ chính xác, nên phải <b>chuẩn hóa</b> bằng chất gốc (tinh khiết, bền, khối lượng mol lớn, phản ứng đúng hợp thức).</p>
      <ul>
        <li>Chuẩn hóa base: kali hydrophtalat KHC<sub>8</sub>H<sub>4</sub>O<sub>4</sub> (KHP), KH(IO<sub>3</sub>)<sub>2</sub>, acid benzoic, acid oxalic.</li>
        <li>Chuẩn hóa acid: Na<sub>2</sub>CO<sub>3</sub>, borax Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O, Tris.</li>
        <li>Dung dịch đã chuẩn hóa bằng chất gốc gọi là <b>chuẩn thứ cấp</b>, cần chuẩn hóa lại định kì.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 6.</b> Cân 0,5105 g KHP (M = 204,22), hòa tan rồi chuẩn độ bằng NaOH, hết 24,85 mL. Tính nồng độ NaOH.
        <details><summary>Xem lời giải</summary>
          KHP có một H<sup>+</sup> acid, phản ứng 1 : 1 với NaOH:
          \[ \begin{aligned} n_\mathrm{KHP} &= \frac{0,5105}{204,22} = 2,4998\cdot10^{-3}\ \mathrm{mol} \\ C_\mathrm{NaOH} &= \frac{2,4998\cdot10^{-3}}{0,02485} = \mathbf{0,1006\ M} \end{aligned} \]
        </details></div>

      <h3>10. Ứng dụng</h3>
      <p><b>a) Hỗn hợp carbonate (phương pháp hai chỉ thị)</b>: chuẩn độ mẫu bằng HCl, trước với phenolphtalein (hết V<sub>1</sub>), sau đó thêm metyl da cam và chuẩn tiếp (hết thêm V<sub>2</sub>).</p>
      <ul>
        <li>Chỉ có Na<sub>2</sub>CO<sub>3</sub>: V<sub>1</sub> = V<sub>2</sub>.</li>
        <li>Na<sub>2</sub>CO<sub>3</sub> + NaHCO<sub>3</sub>: V<sub>2</sub> &gt; V<sub>1</sub>; n(CO<sub>3</sub><sup>2−</sup>) ứng với V<sub>1</sub>, n(HCO<sub>3</sub><sup>−</sup>) ban đầu ứng với V<sub>2</sub> − V<sub>1</sub>.</li>
        <li>NaOH + Na<sub>2</sub>CO<sub>3</sub>: V<sub>1</sub> &gt; V<sub>2</sub>; n(CO<sub>3</sub><sup>2−</sup>) ứng với V<sub>2</sub>, n(OH<sup>−</sup>) ứng với V<sub>1</sub> − V<sub>2</sub>.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 7.</b> Chuẩn độ 25,00 mL dung dịch hỗn hợp Na<sub>2</sub>CO<sub>3</sub> và NaHCO<sub>3</sub> bằng HCl 0,1000 M: với phenolphtalein hết 12,50 mL, thêm metyl da cam chuẩn tiếp hết thêm 30,00 mL. Tính nồng độ mỗi chất.
        <details><summary>Xem lời giải</summary>
          Đến điểm cuối phenolphtalein: CO<sub>3</sub><sup>2−</sup> + H<sup>+</sup> → HCO<sub>3</sub><sup>−</sup>:
          \[ \begin{aligned} n_\mathrm{CO_3^{2-}} &= 0,1000\cdot12,50 = 1,250\ \mathrm{mmol} \\ C_\mathrm{Na_2CO_3} &= \frac{1,250}{25,00} = \mathbf{0,05000\ M} \end{aligned} \]
          Giai đoạn 2 chuẩn cả HCO<sub>3</sub><sup>−</sup> vừa tạo ra lẫn HCO<sub>3</sub><sup>−</sup> ban đầu:
          \[ \begin{aligned} n_\mathrm{HCO_3^-,\,đầu} &= 0,1000\cdot(30,00 - 12,50) \\ &= 1,750\ \mathrm{mmol} \\ C_\mathrm{NaHCO_3} &= \frac{1,750}{25,00} = \mathbf{0,07000\ M} \end{aligned} \]
        </details></div>
      <p><b>b) Phương pháp Kjeldahl</b> xác định nitơ hữu cơ (hàm lượng protein trong thực phẩm):</p>
      <ol>
        <li>Vô cơ hóa mẫu bằng H<sub>2</sub>SO<sub>4</sub> đặc, nóng (có xúc tác): N hữu cơ → NH<sub>4</sub><sup>+</sup>.</li>
        <li>Kiềm hóa bằng NaOH, chưng cất NH<sub>3</sub> sang bình hứng chứa một lượng HCl dư đã biết.</li>
        <li>Chuẩn độ ngược lượng HCl dư bằng NaOH với chỉ thị <b>metyl đỏ</b> (điểm cuối ở vùng acid). Không dùng phenolphtalein vì NaOH sẽ chuẩn luôn cả NH<sub>4</sub><sup>+</sup> trong bình hứng.</li>
        <li>Biến thể: hứng NH<sub>3</sub> bằng dung dịch H<sub>3</sub>BO<sub>3</sub> rồi chuẩn độ trực tiếp borat tạo thành bằng HCl chuẩn.</li>
      </ol>
      <div class="vi-du"><b>Ví dụ 8.</b> 0,5000 g mẫu thực phẩm được xử lí theo Kjeldahl. NH<sub>3</sub> được hấp thụ vào 50,00 mL HCl 0,1000 M; lượng HCl dư chuẩn độ hết 22,40 mL NaOH 0,1000 M. Tính %N và % protein (hệ số 6,25).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} n_\mathrm{NH_3} &= 0,1000\cdot(50,00 - 22,40) \\ &= 2,760\ \mathrm{mmol} \\ \%\mathrm{N} &= \frac{2,760\cdot10^{-3}\cdot14,007}{0,5000}\cdot100 \\ &= \mathbf{7,732\%} \\ \%\,\text{protein} &= 6,25\cdot7,732 = \mathbf{48,3\%} \end{aligned} \]
        </details></div>
      <p><b>c) Các ứng dụng khác</b>: xác định độ acid (giấm, sữa, dầu mỡ), độ kiềm của nước, xác định khối lượng đương lượng và K<sub>a</sub> của acid chưa biết (pH tại nửa tương đương).</p>
    `,
    baiTap: [
      {
        de: "Chuẩn độ 15,00 mL dung dịch HCl bằng NaOH 0,0500 M thì hết 20,70 mL. Tính nồng độ HCl.",
        dapAn: "C<sub>HCl</sub> = 0,0500 × 20,70 / 15,00 = <b>0,0690 M</b>",
      },
      {
        de: "Chuẩn độ 25,00 mL CH<sub>3</sub>COOH 0,1000 M bằng NaOH 0,1000 M (pK<sub>a</sub> = 4,75). Tính pH tại điểm tương đương và chọn chỉ thị.",
        dapAn: "V<sub>e</sub> = 25,00 mL → C<sub>CH₃COO⁻</sub> = 2,500/50,00 = 0,05000 M<br>pOH = ½(9,25 − lg 0,05000) = 5,28 → <b>pH = 8,72</b> → chọn phenolphtalein.",
      },
    ],
  },
  {
    id: "edta",
    nhom: "Cân bằng và chuẩn độ",
    icon: "🔗",
    ten: "Tạo phức và chuẩn độ EDTA",
    moTa: "EDTA, α_Y4−, hằng số bền điều kiện, đường chuẩn độ, chỉ thị kim loại",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Hiểu vì sao EDTA là thuốc thử chuẩn độ tạo phức quan trọng nhất và vai trò của pH.</li>
          <li>Tính α<sub>Y⁴⁻</sub>, hằng số bền điều kiện K<sub>f</sub>' (và K<sub>f</sub>'' khi có chất tạo phức phụ), pM trên đường chuẩn độ.</li>
          <li>Chọn chỉ thị kim loại, kĩ thuật chuẩn độ (trực tiếp, ngược, thay thế, gián tiếp) và tính kết quả.</li>
        </ul>
      </div>
      <h3>1. Phức chelate và chuẩn độ tạo phức</h3>
      <ul>
        <li><b>Phức chất</b> gồm ion kim loại trung tâm liên kết với các <b>phối tử</b> (NH<sub>3</sub>, CN<sup>−</sup>, Cl<sup>−</sup>...). Hằng số bền K<sub>i</sub>, β<sub>n</sub> đã học ở Chương 4, mục 5.</li>
        <li><b>Phối tử đa càng</b> (chelating ligand) có nhiều nguyên tử cho electron, "kẹp" ion kim loại thành vòng, tạo <b>phức chelate</b> rất bền. Ví dụ phức ATP – Mg<sup>2+</sup> trong tế bào, phức kim loại – EDTA.</li>
        <li><b>Chuẩn độ tạo phức</b> (chuẩn độ complexon) dựa trên phản ứng tạo phức giữa ion kim loại và thuốc thử, thường là EDTA.</li>
      </ul>

      <h3>2. EDTA</h3>
      <p>EDTA (acid ethylenediaminetetraacetic) có 4 nhóm –COOH và 2 nguyên tử N. Dạng proton hóa hoàn toàn H<sub>6</sub>Y<sup>2+</sup> là acid 6 nấc:</p>
      <div class="cong-thuc">\[ \begin{gathered} \mathrm{H_6Y^{2+}} \rightleftharpoons \mathrm{H_5Y^+} \rightleftharpoons \mathrm{H_4Y} \rightleftharpoons \mathrm{H_3Y^-} \\ \rightleftharpoons \mathrm{H_2Y^{2-}} \rightleftharpoons \mathrm{HY^{3-}} \rightleftharpoons \mathrm{Y^{4-}} \end{gathered} \]</div>
      <p>Dạng trung hòa H<sub>4</sub>Y là acid 4 nấc. Thuốc thử thường dùng là muối Na<sub>2</sub>H<sub>2</sub>Y·2H<sub>2</sub>O.</p>
      <p>EDTA tạo phức <b>1 : 1</b> với hầu hết ion kim loại, không phụ thuộc điện tích ion:</p>
      <div class="cong-thuc">\[ \begin{gathered} \mathrm{M^{n+}} + \mathrm{Y^{4-}} \rightleftharpoons \mathrm{MY^{n-4}} \\ K_\mathrm{f} = \frac{[\mathrm{MY^{n-4}}]}{[\mathrm{M^{n+}}][\mathrm{Y^{4-}}]} \end{gathered} \]</div>
      <div class="bang-cuon">
        <table class="bang bang-hep">
          <thead><tr><th>Ion</th><th>lg K<sub>f</sub></th><th>Ion</th><th>lg K<sub>f</sub></th></tr></thead>
          <tbody>
            <tr><td>Mg<sup>2+</sup></td><td>8,79</td><td>Zn<sup>2+</sup></td><td>16,50</td></tr>
            <tr><td>Ca<sup>2+</sup></td><td>10,70</td><td>Pb<sup>2+</sup></td><td>18,04</td></tr>
            <tr><td>Fe<sup>2+</sup></td><td>14,30</td><td>Cu<sup>2+</sup></td><td>18,78</td></tr>
            <tr><td>Al<sup>3+</sup></td><td>16,4</td><td>Fe<sup>3+</sup></td><td>25,1</td></tr>
          </tbody>
        </table>
      </div>

      <h3>3. Phân số α<sub>Y⁴⁻</sub> và hằng số bền điều kiện</h3>
      <p><b>Chỉ có dạng Y<sup>4−</sup> phản ứng với ion kim loại.</b> Phần EDTA tự do ở dạng Y<sup>4−</sup> phụ thuộc pH:</p>
      <div class="cong-thuc"><div class="nhan">[EDTA]: tổng nồng độ EDTA tự do (mọi dạng proton hóa)</div>\[ \alpha_\mathrm{Y^{4-}} = \frac{[\mathrm{Y^{4-}}]}{[\mathrm{EDTA}]} = \frac{K_1K_2K_3K_4K_5K_6}{D} \]</div>
      <div class="cong-thuc"><div class="nhan">K<sub>1</sub>…K<sub>6</sub>: hằng số phân li acid của H<sub>6</sub>Y<sup>2+</sup></div>\[ \begin{aligned} D = {} &\Hp^6 + \Hp^5K_1 \\ &+ \Hp^4K_1K_2 + \Hp^3K_1K_2K_3 \\ &+ \Hp^2K_1K_2K_3K_4 \\ &+ \Hp K_1K_2K_3K_4K_5 \\ &+ K_1K_2K_3K_4K_5K_6 \end{aligned} \]</div>
      <p>Các hằng số phân li của H<sub>6</sub>Y<sup>2+</sup> (25 °C, μ = 0,1 M): pK<sub>1</sub> = 0,0; pK<sub>2</sub> = 1,5; pK<sub>3</sub> = 2,00; pK<sub>4</sub> = 2,69; pK<sub>5</sub> = 6,13; pK<sub>6</sub> = 10,37. pH càng cao thì α<sub>Y⁴⁻</sub> càng lớn:</p>
      <div class="bang-cuon">
        <table class="bang">
          <thead><tr><th>pH</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th></tr></thead>
          <tbody><tr><td>α<sub>Y⁴⁻</sub></td><td>3,0·10<sup>−9</sup></td><td>2,9·10<sup>−7</sup></td><td>1,8·10<sup>−5</sup></td><td>3,8·10<sup>−4</sup></td><td>4,2·10<sup>−3</sup></td><td>0,041</td><td>0,30</td><td>0,81</td><td>0,98</td></tr></tbody>
        </table>
      </div>
      <p class="luu-y">Tài liệu khác nhau có thể cho α<sub>Y⁴⁻</sub> hơi khác (ví dụ 3,5·10<sup>−7</sup> ở pH 5) do dùng bộ hằng số khác. Khi đề bài cho sẵn α<sub>Y⁴⁻</sub>, dùng số của đề.</p>
      <div class="cong-thuc"><div class="nhan">Hằng số bền điều kiện (ở một pH cố định)</div>\[ K_\mathrm{f}' = \alpha_\mathrm{Y^{4-}}K_\mathrm{f} = \frac{[\mathrm{MY^{n-4}}]}{[\mathrm{M^{n+}}][\mathrm{EDTA}]} \]</div>
      <p>Để chuẩn độ đạt yêu cầu, phản ứng tạo phức phải gần như hoàn toàn tại điểm tương đương. Quy ước thường dùng: <b>K<sub>f</sub>' ≳ 10<sup>8</sup></b> (với C ≈ 0,01 M, lúc đó khoảng 99,9% ion kim loại đã tạo phức; dạng tổng quát lg(C·K<sub>f</sub>') ≥ 6). Vì vậy mỗi ion có một <b>pH tối thiểu</b> để chuẩn độ: ion tạo phức càng bền (K<sub>f</sub> lớn như Fe<sup>3+</sup>) thì chuẩn độ được ở pH càng thấp. Dựa vào đó có thể <b>chuẩn độ chọn lọc</b> bằng cách chỉnh pH.</p>
      <div class="vi-du"><b>Ví dụ 1.</b> Có chuẩn độ được Mg<sup>2+</sup> bằng EDTA ở pH 5 không? Ở pH 10 thì sao? (lg K<sub>f</sub>(MgY<sup>2−</sup>) = 8,79; α<sub>Y⁴⁻</sub> = 3,5·10<sup>−7</sup> ở pH 5 và 0,30 ở pH 10.)
        <details><summary>Xem lời giải</summary>
          Ở pH 5: \[ K_\mathrm{f}' = 3,5\cdot10^{-7}\cdot10^{8,79} = 2,2\cdot10^{2} \]
          Ở pH 10: \[ K_\mathrm{f}' = 0,30\cdot10^{8,79} = 1,8\cdot10^{8} \]
          Ở pH 5, K<sub>f</sub>' ≪ 10<sup>8</sup>: <b>không chuẩn độ được</b>. Ở pH 10, K<sub>f</sub>' ≈ 10<sup>8</sup>: <b>chuẩn độ được</b>. Vì vậy Mg<sup>2+</sup> luôn được chuẩn độ trong đệm NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> pH 10.
        </details></div>

      <h3>4. Đường chuẩn độ EDTA</h3>
      <p>Đồ thị pM = −lg[M<sup>n+</sup>] theo thể tích EDTA. Tính pM theo 3 vùng (dùng K<sub>f</sub>'):</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Vùng</th><th>Cách tính [M<sup>n+</sup>]</th></tr></thead>
          <tbody>
            <tr><td>Trước điểm tương đương</td><td>[M] = lượng M dư / tổng thể tích</td></tr>
            <tr><td>Tại điểm tương đương</td><td>M chỉ do MY phân li: \( [\mathrm{M}]^2 = \dfrac{[\mathrm{MY}]}{K_\mathrm{f}'} \)</td></tr>
            <tr><td>Sau điểm tương đương</td><td>\( [\mathrm{M}] = \dfrac{[\mathrm{MY}]}{K_\mathrm{f}'\,[\mathrm{EDTA}]_\text{dư}} \)</td></tr>
          </tbody>
        </table>
      </div>
      <p>Bước nhảy pM càng lớn khi K<sub>f</sub>' càng lớn (K<sub>f</sub> lớn, pH cao) và nồng độ càng lớn.</p>
      <div class="vi-du"><b>Ví dụ 2.</b> Chuẩn độ 50,0 mL Ca<sup>2+</sup> 0,0400 M (đệm pH 10) bằng EDTA 0,0800 M. Tính pCa tại các điểm đặc trưng (lg K<sub>f</sub> = 10,70; α<sub>Y⁴⁻</sub> = 0,30).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} K_\mathrm{f}' &= 0,30\cdot10^{10,70} = 1,50\cdot10^{10} \\ V_e &= \frac{50,0\cdot0,0400}{0,0800} = 25,0\ \mathrm{mL} \end{aligned} \]
          <b>V = 20,0 mL</b>: Ca<sup>2+</sup> dư = 2,000 − 1,600 = 0,400 mmol trong 70,0 mL → [Ca<sup>2+</sup>] = 5,71·10<sup>−3</sup> M → pCa = 2,24.<br>
          <b>V = 25,0 mL</b>: [CaY<sup>2−</sup>] = 2,000/75,0 = 0,02667 M:
          \[ \begin{aligned} [\mathrm{Ca^{2+}}] &= \sqrt{\frac{0,02667}{1,50\cdot10^{10}}} = 1,33\cdot10^{-6}\ \mathrm{M} \\ \mathrm{pCa} &= \mathbf{5,88} \end{aligned} \]
          <b>V = 30,0 mL</b>: EDTA dư 0,400 mmol/80,0 mL = 5,00·10<sup>−3</sup> M; [CaY<sup>2−</sup>] = 0,0250 M:
          \[ \begin{aligned} [\mathrm{Ca^{2+}}] &= \frac{0,0250}{1,50\cdot10^{10}\cdot5,00\cdot10^{-3}} \\ &= 3,33\cdot10^{-10}\ \mathrm{M} \;\Rightarrow\; \mathrm{pCa} = 9,48 \end{aligned} \]
          <div class="bang-cuon"><table class="bang">
            <thead><tr><th>V (mL)</th><th>15,0</th><th>20,0</th><th>24,9</th><th>25,0</th><th>25,1</th><th>30,0</th><th>35,0</th></tr></thead>
            <tbody><tr><td>pCa</td><td>1,91</td><td>2,24</td><td>3,97</td><td><b>5,88</b></td><td>7,78</td><td>9,48</td><td>9,78</td></tr></tbody>
          </table></div>
        </details></div>

      <h3>5. Chất tạo phức phụ</h3>
      <p>Ở pH cao, nhiều ion kim loại bị thủy phân tạo kết tủa hydroxide. Người ta thêm <b>chất tạo phức phụ</b> (thường là NH<sub>3</sub>, tartrate, citrate) để giữ ion kim loại trong dung dịch. Phức phụ phải <b>kém bền hơn</b> phức với EDTA để EDTA vẫn lấy được ion kim loại.</p>
      <div class="cong-thuc"><div class="nhan">Phần ion kim loại tự do (L: chất tạo phức phụ)</div>\[ \begin{aligned} \frac{1}{\alpha_\mathrm{M}} = {} &1 + \beta_1[\mathrm{L}] + \beta_2[\mathrm{L}]^2 \\ &+ \beta_3[\mathrm{L}]^3 + \beta_4[\mathrm{L}]^4 \end{aligned} \]</div>
      <div class="cong-thuc"><div class="nhan">Hằng số bền điều kiện khi có chất tạo phức phụ</div>\[ K_\mathrm{f}'' = \alpha_\mathrm{M}\,\alpha_\mathrm{Y^{4-}}\,K_\mathrm{f} \]</div>
      <div class="vi-du"><b>Ví dụ 3.</b> Chuẩn độ Zn<sup>2+</sup> bằng EDTA ở pH 10 trong NH<sub>3</sub> tự do 0,10 M. Phức Zn – NH<sub>3</sub> có lg β<sub>1</sub> = 2,18; lg β<sub>2</sub> = 4,43; lg β<sub>3</sub> = 6,74; lg β<sub>4</sub> = 8,70. Tính K<sub>f</sub>'' (lg K<sub>f</sub>(ZnY<sup>2−</sup>) = 16,50; α<sub>Y⁴⁻</sub> = 0,30).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \frac{1}{\alpha_\mathrm{Zn}} = {} &1 + 10^{2,18}(0,10) \\ &+ 10^{4,43}(0,10)^2 + 10^{6,74}(0,10)^3 \\ &+ 10^{8,70}(0,10)^4 \\ = {} &1 + 15 + 269 + 5\,495 + 50\,119 \\ = {} &5,59\cdot10^{4} \end{aligned} \]
          \[ \begin{aligned} \alpha_\mathrm{Zn} &= 1,79\cdot10^{-5} \\ K_\mathrm{f}'' &= 1,79\cdot10^{-5}\cdot0,30\cdot10^{16,50} \\ &= \mathbf{1,7\cdot10^{11}} \end{aligned} \]
          Dù phần lớn Zn<sup>2+</sup> nằm trong phức amin, K<sub>f</sub>'' vẫn ≫ 10<sup>8</sup> nên chuẩn độ tốt.
        </details></div>

      <h3>6. Chỉ thị kim loại</h3>
      <p>Chỉ thị kim loại (In) là chất màu tạo phức với ion kim loại, phức M–In có màu khác chỉ thị tự do. Phức M–In phải <b>kém bền hơn</b> phức MY.</p>
      <p>Ví dụ chuẩn độ Mg<sup>2+</sup> với eriocrom đen T (ET-OO) ở pH 10:</p>
      <div class="cong-thuc">\[ \begin{gathered} \underset{\text{đỏ}}{\mathrm{MgIn}} + \mathrm{EDTA} \rightarrow \mathrm{MgEDTA} + \underset{\text{xanh}}{\mathrm{In}} \end{gathered} \]</div>
      <p>Trước điểm tương đương Mg<sup>2+</sup> dư giữ chỉ thị ở dạng MgIn (đỏ). Ngay sau điểm tương đương, EDTA dư "giật" Mg<sup>2+</sup> khỏi chỉ thị, dung dịch chuyển <b>đỏ → xanh</b>.</p>
      <ul>
        <li><b>ET-OO</b> (eriocrom đen T), pH 10: đỏ nho → xanh chàm. Xác định Mg<sup>2+</sup>, Zn<sup>2+</sup>, tổng Ca<sup>2+</sup> + Mg<sup>2+</sup>.</li>
        <li><b>Murexit</b>, pH 12 – 13: đỏ → tím. Xác định riêng Ca<sup>2+</sup> (Mg<sup>2+</sup> đã kết tủa thành Mg(OH)<sub>2</sub>).</li>
        <li>Chỉ thị kim loại cũng là acid/base yếu, màu phụ thuộc pH, nên mỗi chỉ thị chỉ dùng trong một khoảng pH nhất định.</li>
        <li>Phức M–In quá yếu thì đổi màu trước điểm tương đương. Phức M–In quá bền (bền hơn MY) thì chỉ thị bị <b>khóa</b>: không đổi màu được. Ví dụ Cu<sup>2+</sup>, Ni<sup>2+</sup>, Co<sup>2+</sup>, Fe<sup>3+</sup>, Al<sup>3+</sup> khóa ET-OO; phải che các ion này hoặc dùng chuẩn độ ngược.</li>
        <li>Ca<sup>2+</sup> tạo phức với ET-OO quá yếu, điểm cuối không rõ. Mẹo: thêm một ít MgY<sup>2−</sup> vào mẫu; Ca<sup>2+</sup> đẩy Mg<sup>2+</sup> ra (CaY bền hơn MgY), Mg<sup>2+</sup> cho điểm cuối rõ với ET-OO mà không làm thay đổi tổng lượng EDTA tiêu tốn.</li>
      </ul>

      <h3>7. Các kĩ thuật chuẩn độ EDTA</h3>
      <ul>
        <li><b>Trực tiếp</b>: chuẩn độ thẳng ion kim loại bằng EDTA trong đệm phù hợp. Ví dụ Pb<sup>2+</sup> trong đệm NH<sub>3</sub> pH 10 có tartrate (chất tạo phức phụ).</li>
        <li><b>Ngược</b>: thêm EDTA dư đã biết, rồi chuẩn EDTA dư bằng dung dịch ion kim loại thứ hai (Mg<sup>2+</sup>, Zn<sup>2+</sup>, Pb<sup>2+</sup>). Dùng khi chất phân tích phản ứng chậm với EDTA (Al<sup>3+</sup>), bị kết tủa ở pH chuẩn độ, hoặc khóa chỉ thị. Ion chuẩn ngược thường phải tạo phức <b>kém bền hơn</b> phức của chất phân tích, để không đẩy chất phân tích ra khỏi phức. Ngoại lệ: phức trơ về động học như AlY<sup>−</sup> không trao đổi kịp trong thời gian chuẩn độ, nên dùng được cả Pb<sup>2+</sup> (Ví dụ 4).</li>
        <li><b>Thay thế</b>: dùng khi không có chỉ thị phù hợp cho ion cần xác định. Ví dụ Ag<sup>+</sup> đẩy Ni<sup>2+</sup> ra khỏi Ni(CN)<sub>4</sub><sup>2−</sup>: 2Ag<sup>+</sup> + Ni(CN)<sub>4</sub><sup>2−</sup> → 2Ag(CN)<sub>2</sub><sup>−</sup> + Ni<sup>2+</sup>, rồi chuẩn Ni<sup>2+</sup> giải phóng bằng EDTA. Phép đo này xác định <b>Ag<sup>+</sup></b>: n(Ag<sup>+</sup>) = 2·n(Ni<sup>2+</sup>).</li>
        <li><b>Gián tiếp</b>: xác định anion. Ví dụ SO<sub>4</sub><sup>2−</sup> được kết tủa bằng Ba<sup>2+</sup>, lọc BaSO<sub>4</sub>, hòa tan bằng EDTA dư ở pH 10, rồi chuẩn ngược EDTA dư bằng Mg<sup>2+</sup>.</li>
        <li><b>Chất che</b>: thuốc thử tạo phức bền với ion cản trở để nó không phản ứng với EDTA. Ví dụ CN<sup>−</sup> che Zn<sup>2+</sup>, Cu<sup>2+</sup>, Ni<sup>2+</sup>; F<sup>−</sup> hoặc triethanolamin che Al<sup>3+</sup>, Fe<sup>3+</sup>. <b>Giải che</b>: phá phức che để ion lại phản ứng được, ví dụ formaldehyd giải phóng Zn<sup>2+</sup> khỏi Zn(CN)<sub>4</sub><sup>2−</sup>.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 4.</b> 50,00 mL dung dịch chứa Fe<sup>3+</sup> và Al<sup>3+</sup>. Ở pH 2, chuẩn độ hết 29,61 mL EDTA 0,04016 M (chỉ Fe<sup>3+</sup> phản ứng). Thêm tiếp 50,00 mL EDTA 0,04016 M, đun sôi, chỉnh pH 5, chuẩn EDTA dư bằng Pb<sup>2+</sup> 0,03228 M hết 19,03 mL. Tính nồng độ Fe<sup>3+</sup> và Al<sup>3+</sup>.
        <details><summary>Xem lời giải</summary>
          Ở pH 2 chỉ Fe<sup>3+</sup> (K<sub>f</sub> rất lớn) phản ứng:
          \[ [\mathrm{Fe^{3+}}] = \frac{0,04016\cdot29,61}{50,00} = \mathbf{0,02378\ M} \]
          Al<sup>3+</sup> phản ứng chậm nên dùng chuẩn độ ngược:
          \[ \begin{aligned} n_\mathrm{EDTA} &= 0,04016\cdot50,00 = 2,008\ \mathrm{mmol} \\ n_\mathrm{Pb} &= 0,03228\cdot19,03 = 0,6143\ \mathrm{mmol} \\ n_\mathrm{Al} &= 2,008 - 0,6143 = 1,394\ \mathrm{mmol} \\ [\mathrm{Al^{3+}}] &= \frac{1,394}{50,00} = \mathbf{0,02787\ M} \end{aligned} \]
        </details></div>

      <h3>8. Ứng dụng: độ cứng của nước, canxi trong thuốc</h3>
      <p><b>Độ cứng của nước</b> là tổng nồng độ Ca<sup>2+</sup> + Mg<sup>2+</sup>, thường quy về mg CaCO<sub>3</sub>/L. Chuẩn độ ở pH 10 với ET-OO cho tổng Ca + Mg; ở pH 12 – 13 với murexit cho riêng Ca; hiệu hai kết quả cho Mg.</p>
      <div class="vi-du"><b>Ví dụ 5.</b> Chuẩn độ 50,00 mL nước ở pH 10 (chỉ thị ET-OO) hết 8,40 mL EDTA 0,01000 M. Tính độ cứng theo mg CaCO<sub>3</sub>/L.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} n &= 0,01000\cdot8,40\cdot10^{-3} \\ &= 8,40\cdot10^{-5}\ \mathrm{mol} \\ \text{Độ cứng} &= \frac{8,40\cdot10^{-5}\cdot100,09\cdot10^3}{0,05000} \\ &= \mathbf{168\ mg\ CaCO_3/L} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 6.</b> Hòa tan 5 viên thuốc bổ sung canxi rồi pha thành 250,0 mL dung dịch A. Lấy 10,00 mL A, chuẩn độ bằng EDTA 0,0150 M ở pH 13 (murexit) hết 10,15 mL. Tính (a) [Ca<sup>2+</sup>] trong A; (b) khối lượng Ca trong mỗi viên (Ca = 40,08).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} [\mathrm{Ca^{2+}}] &= \frac{0,0150\cdot10,15}{10,00} = \mathbf{0,0152\ M} \\ m_\mathrm{Ca} &= \frac{0,01522\cdot0,2500\cdot40,08}{5} \\ &= 0,0305\ \mathrm{g} = \mathbf{30,5\ mg/viên} \end{aligned} \]
          Màu tại điểm cuối: đỏ (Ca – murexit) → tím (murexit tự do).
        </details></div>
    `,
    baiTap: [
      {
        de: "Chuẩn độ 40,0 mL Ca<sup>2+</sup> 0,0120 M bằng EDTA 0,0120 M ở pH 13 (α<sub>Y⁴⁻</sub> = 0,988; lg K<sub>f</sub> = 10,70). Tính pCa khi thêm 20,0 mL; 40,0 mL và 60,0 mL EDTA.",
        dapAn: "K<sub>f</sub>' = 0,988·10<sup>10,70</sup> = 4,95·10<sup>10</sup>; V<sub>e</sub> = 40,0 mL<br>20,0 mL: [Ca<sup>2+</sup>] = 0,240 mmol/60,0 mL = 4,00·10<sup>−3</sup> M → <b>pCa = 2,40</b><br>40,0 mL: [CaY] = 0,00600 M → [Ca<sup>2+</sup>] = √(0,00600/4,95·10<sup>10</sup>) = 3,48·10<sup>−7</sup> M → <b>pCa = 6,46</b><br>60,0 mL: [EDTA]<sub>dư</sub> = 2,40·10<sup>−3</sup> M; [CaY] = 4,80·10<sup>−3</sup> M → [Ca<sup>2+</sup>] = 4,04·10<sup>−11</sup> M → <b>pCa = 10,39</b>",
      },
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
    moTa: "Độ tan theo pH và tạo phức, đường chuẩn độ bạc, Mohr, Volhard, Fajans",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Tính độ tan khi có ion chung, khi pH thay đổi; xét thứ tự kết tủa phân đoạn.</li>
          <li>Tính pAg trên đường chuẩn độ kết tủa.</li>
          <li>Nắm nguyên tắc, điều kiện và cách tính của ba phương pháp Mohr, Volhard, Fajans.</li>
        </ul>
      </div>
      <h3>1. Nhắc lại: tích số tan và độ tan</h3>
      <p>Biểu thức K<sub>sp</sub>, cách tính độ tan S và điều kiện kết tủa Q &gt; K<sub>sp</sub> đã học ở Chương 4, mục 6. Tổng quát cho M<sub>m</sub>A<sub>n</sub>:</p>
      <div class="cong-thuc">\[ \begin{gathered} K_\mathrm{sp} = (mS)^m(nS)^n = m^m n^n S^{m+n} \\ S = \sqrt[m+n]{\frac{K_\mathrm{sp}}{m^m n^n}} \end{gathered} \]</div>
      <div class="vi-du"><b>Ví dụ 1.</b> So sánh độ tan của AgCl (K<sub>sp</sub> = 1,8·10<sup>−10</sup>) và Ag<sub>2</sub>CrO<sub>4</sub> (K<sub>sp</sub> = 1,1·10<sup>−12</sup>) trong nước.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} S_\mathrm{AgCl} &= \sqrt{1,8\cdot10^{-10}} = 1,3\cdot10^{-5}\ \mathrm{M} \\ S_\mathrm{Ag_2CrO_4} &= \sqrt[3]{\frac{1,1\cdot10^{-12}}{4}} = 6,5\cdot10^{-5}\ \mathrm{M} \end{aligned} \]
          Ag<sub>2</sub>CrO<sub>4</sub> có K<sub>sp</sub> <b>nhỏ hơn</b> nhưng lại tan <b>nhiều hơn</b> AgCl, vì hai chất khác kiểu công thức.
        </details></div>

      <h3>2. Các yếu tố ảnh hưởng tới độ tan</h3>
      <ul>
        <li><b>Ion chung</b>: làm độ tan giảm mạnh (Chương 4, Ví dụ 7).</li>
        <li><b>pH</b>: nếu anion của kết tủa là base (CO<sub>3</sub><sup>2−</sup>, C<sub>2</sub>O<sub>4</sub><sup>2−</sup>, PO<sub>4</sub><sup>3−</sup>, OH<sup>−</sup>, S<sup>2−</sup>), H<sup>+</sup> kết hợp với anion làm cân bằng tan chuyển dịch sang phải: kết tủa <b>tan nhiều hơn trong acid</b>. Kết tủa của anion acid mạnh (AgCl) gần như không bị ảnh hưởng. BaSO<sub>4</sub> chỉ tan thêm đáng kể trong acid rất mạnh (pH &lt; 2), vì HSO<sub>4</sub><sup>−</sup> có pK<sub>a</sub> ≈ 2.</li>
        <li><b>Tạo phức</b>: thuốc thử tạo phức với cation làm độ tan tăng, ví dụ AgCl tan trong NH<sub>3</sub> (Chương 4, Ví dụ 4). Lượng lớn ion chung đôi khi cũng tạo phức (AgCl<sub>2</sub><sup>−</sup> trong Cl<sup>−</sup> đặc), làm độ tan tăng trở lại.</li>
        <li><b>Lực ion</b> (hiệu ứng muối): chất điện li lạ làm γ giảm, độ tan tăng nhẹ.</li>
      </ul>
      <p>Khi anion A<sup>2−</sup> tham gia cân bằng acid – base, dùng phân số α<sub>A²⁻</sub> (Chương 5, mục 4):</p>
      <div class="cong-thuc"><div class="nhan">Kết tủa MA, anion A<sup>2−</sup> là base (C<sub>A</sub>: tổng nồng độ các dạng của A)</div>\[ \begin{gathered} K_\mathrm{sp} = [\mathrm{M^{2+}}][\mathrm{A^{2-}}] = S\cdot\alpha_\mathrm{A^{2-}}S \\ S = \sqrt{\frac{K_\mathrm{sp}}{\alpha_\mathrm{A^{2-}}}} \end{gathered} \]</div>
      <div class="vi-du"><b>Ví dụ 2.</b> Tính độ tan của MgC<sub>2</sub>O<sub>4</sub> (K<sub>sp</sub> = 4,8·10<sup>−6</sup>) trong dung dịch giữ pH = 3,00 (H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>: K<sub>a1</sub> = 6,5·10<sup>−2</sup>; K<sub>a2</sub> = 6,46·10<sup>−5</sup>). So sánh với độ tan khi bỏ qua ảnh hưởng của pH.
        <details><summary>Xem lời giải</summary>
          h = 1,0·10<sup>−3</sup> M:
          \[ \begin{aligned} D &= h^2 + K_\mathrm{a1}h + K_\mathrm{a1}K_\mathrm{a2} \\ &= 1,0\cdot10^{-6} + 6,5\cdot10^{-5} \\ &\quad + 4,20\cdot10^{-6} \\ &= 7,02\cdot10^{-5} \\ \alpha_\mathrm{C_2O_4^{2-}} &= \frac{K_\mathrm{a1}K_\mathrm{a2}}{D} = 0,0598 \end{aligned} \]
          \[ S = \sqrt{\frac{4,8\cdot10^{-6}}{0,0598}} = \mathbf{9,0\cdot10^{-3}\ M} \]
          Bỏ qua pH: \( S = \sqrt{4,8\cdot10^{-6}} = 2,2\cdot10^{-3} \) M. Ở pH 3,00 độ tan tăng khoảng 4 lần vì phần lớn oxalat chuyển thành HC<sub>2</sub>O<sub>4</sub><sup>−</sup>.
        </details></div>

      <h3>3. Kết tủa phân đoạn</h3>
      <p>Khi thêm dần thuốc thử vào dung dịch chứa nhiều ion, chất nào cần <b>nồng độ thuốc thử nhỏ hơn</b> để đạt K<sub>sp</sub> thì kết tủa trước. Tính nồng độ đó cho từng chất rồi so sánh.</p>
      <div class="vi-du"><b>Ví dụ 3.</b> Dung dịch chứa Cl<sup>−</sup> 0,010 M và CrO<sub>4</sub><sup>2−</sup> 0,010 M. Thêm dần Ag<sup>+</sup>. Kết tủa nào xuất hiện trước?
        <details><summary>Xem lời giải</summary>
          AgCl bắt đầu kết tủa khi:
          \[ [\mathrm{Ag^+}] = \frac{1,8\cdot10^{-10}}{0,010} = 1,8\cdot10^{-8}\ \mathrm{M} \]
          Ag<sub>2</sub>CrO<sub>4</sub> bắt đầu kết tủa khi:
          \[ [\mathrm{Ag^+}] = \sqrt{\frac{1,1\cdot10^{-12}}{0,010}} = 1,0\cdot10^{-5}\ \mathrm{M} \]
          <b>AgCl kết tủa trước</b> (cần [Ag<sup>+</sup>] nhỏ hơn nhiều). Ag<sub>2</sub>CrO<sub>4</sub> chỉ xuất hiện khi Cl<sup>−</sup> đã gần hết: đây là cơ sở của phương pháp Mohr.
        </details></div>

      <h3>4. Đường chuẩn độ kết tủa</h3>
      <p>Chuẩn độ kết tủa quan trọng nhất là chuẩn độ halogenua X<sup>−</sup> bằng Ag<sup>+</sup> (phương pháp bạc): Ag<sup>+</sup> + X<sup>−</sup> → AgX(r). Đường chuẩn độ vẽ pAg = −lg[Ag<sup>+</sup>] theo thể tích Ag<sup>+</sup>:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Vùng</th><th>Cách tính [Ag<sup>+</sup>]</th></tr></thead>
          <tbody>
            <tr><td>Trước điểm tương đương</td><td>\( [\mathrm{Ag^+}] = \dfrac{K_\mathrm{sp}}{[\mathrm{X^-}]_\text{dư}} \)</td></tr>
            <tr><td>Tại điểm tương đương</td><td>\( [\mathrm{Ag^+}] = [\mathrm{X^-}] = \sqrt{K_\mathrm{sp}} \), tức pAg = ½pK<sub>sp</sub></td></tr>
            <tr><td>Sau điểm tương đương</td><td>[Ag<sup>+</sup>] = lượng Ag<sup>+</sup> dư / tổng thể tích</td></tr>
          </tbody>
        </table>
      </div>
      <p>K<sub>sp</sub> càng nhỏ thì bước nhảy càng lớn: I<sup>−</sup> (AgI, K<sub>sp</sub> = 8,3·10<sup>−17</sup>) cho bước nhảy lớn hơn Br<sup>−</sup>, lớn hơn Cl<sup>−</sup>. Với hỗn hợp halogenua, kết tủa ít tan nhất (AgI) tạo thành trước, đường chuẩn độ có hai bước nhảy liên tiếp.</p>
      <div class="vi-du"><b>Ví dụ 4.</b> Chuẩn độ 25,00 mL I<sup>−</sup> 0,100 M bằng Ag<sup>+</sup> 0,0500 M (K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>). Tính pAg khi thêm 10,00; 49,00; 50,00; 51,00 mL Ag<sup>+</sup>.
        <details><summary>Xem lời giải</summary>
          V<sub>e</sub> = 25,00·0,100/0,0500 = 50,00 mL.<br>
          <b>V = 10,00 mL</b>: I<sup>−</sup> dư = (2,500 − 0,500)/35,00 = 0,0571 M:
          \[ \begin{aligned} [\mathrm{Ag^+}] &= \frac{8,3\cdot10^{-17}}{0,0571} = 1,45\cdot10^{-15} \\ \mathrm{pAg} &= 14,84 \end{aligned} \]
          <b>V = 49,00 mL</b>: I<sup>−</sup> dư = 0,050/74,00 = 6,76·10<sup>−4</sup> M → pAg = 12,91.<br>
          <b>V = 50,00 mL</b>: pAg = ½·(−lg 8,3·10<sup>−17</sup>) = <b>8,04</b>.<br>
          <b>V = 51,00 mL</b>: Ag<sup>+</sup> dư = 0,050/76,00 = 6,58·10<sup>−4</sup> M → pAg = 3,18.<br>
          Chỉ 2 mL quanh V<sub>e</sub> mà pAg thay đổi gần 10 đơn vị.
        </details></div>

      <h3>5. Phương pháp Mohr</h3>
      <ul>
        <li>Chuẩn độ <b>trực tiếp</b> Cl<sup>−</sup>, Br<sup>−</sup> bằng AgNO<sub>3</sub>, chỉ thị K<sub>2</sub>CrO<sub>4</sub>.</li>
        <li>Điểm cuối: xuất hiện kết tủa <b>đỏ gạch</b> Ag<sub>2</sub>CrO<sub>4</sub> khi Ag<sup>+</sup> vừa dư.</li>
        <li>Để Ag<sub>2</sub>CrO<sub>4</sub> bắt đầu kết tủa đúng tại điểm tương đương cần [CrO<sub>4</sub><sup>2−</sup>] = K<sub>sp</sub>(Ag<sub>2</sub>CrO<sub>4</sub>)/K<sub>sp</sub>(AgCl) ≈ 6·10<sup>−3</sup> M. Thực tế dùng nồng độ thấp hơn một chút để màu vàng của cromat không che điểm cuối, rồi hiệu chỉnh bằng <b>mẫu trắng</b>.</li>
        <li>Môi trường <b>trung tính hoặc kiềm yếu (pH 6,5 – 10)</b>: pH thấp thì CrO<sub>4</sub><sup>2−</sup> chuyển thành HCrO<sub>4</sub><sup>−</sup>, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>, điểm cuối muộn; pH cao thì Ag<sup>+</sup> kết tủa thành Ag<sub>2</sub>O.</li>
        <li>Không dùng cho I<sup>−</sup>, SCN<sup>−</sup> vì kết tủa hấp phụ mạnh các ion này.</li>
        <li>Khi mẫu có NH<sub>4</sub><sup>+</sup>, giữ pH 6,5 – 7,2 để tránh tạo Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>.</li>
        <li>Phải chuẩn độ theo chiều Ag<sup>+</sup> vào mẫu. Không thể chuẩn ngược Ag<sup>+</sup> bằng Cl<sup>−</sup> với chỉ thị cromat, vì Ag<sub>2</sub>CrO<sub>4</sub> đã tạo ra tan lại rất chậm.</li>
        <li>Mẫu trắng: huyền phù CaCO<sub>3</sub> không chứa Cl<sup>−</sup>, có cùng lượng chỉ thị, để tạo nền đục giống mẫu thật.</li>
      </ul>

      <div class="vi-du"><b>Ví dụ 5.</b> Chuẩn độ 25,00 mL NaCl bằng AgNO<sub>3</sub> 0,05000 M theo phương pháp Mohr hết 18,60 mL. Mẫu trắng tốn 0,20 mL. Tính nồng độ NaCl.
        <details><summary>Xem lời giải</summary>
          Thể tích thực dùng cho Cl<sup>−</sup> = 18,60 − 0,20 = 18,40 mL:
          \[ C_\mathrm{NaCl} = \frac{0,05000\cdot18,40}{25,00} = \mathbf{0,03680\ M} \]
          Nếu quên trừ mẫu trắng sẽ ra 0,03720 M (sai số +1,1%).
        </details></div>

      <h3>6. Phương pháp Volhard</h3>
      <ul>
        <li>Chuẩn độ Ag<sup>+</sup> bằng SCN<sup>−</sup>, chỉ thị Fe<sup>3+</sup>: Ag<sup>+</sup> + SCN<sup>−</sup> → AgSCN(r). SCN<sup>−</sup> dư đầu tiên tạo phức <b>đỏ</b> FeSCN<sup>2+</sup>.</li>
        <li>Xác định halogenua bằng <b>chuẩn độ ngược</b>: thêm AgNO<sub>3</sub> dư đã biết, chuẩn lượng Ag<sup>+</sup> dư bằng KSCN.</li>
        <li>Môi trường <b>acid HNO<sub>3</sub></b> (giữ Fe<sup>3+</sup> không thủy phân). Đây là ưu điểm lớn: các anion như CO<sub>3</sub><sup>2−</sup>, C<sub>2</sub>O<sub>4</sub><sup>2−</sup> không cản trở.</li>
        <li>Với Cl<sup>−</sup>: AgCl tan nhiều hơn AgSCN, nên AgCl có thể chuyển dần thành AgSCN làm tiêu tốn thêm SCN<sup>−</sup>. Phải lọc bỏ AgCl hoặc thêm nitrobenzen bọc kết tủa trước khi chuẩn độ ngược. Với Br<sup>−</sup>, I<sup>−</sup> không cần.</li>
        <li>Với I<sup>−</sup>: chỉ thêm chỉ thị Fe<sup>3+</sup> sau khi toàn bộ I<sup>−</sup> đã kết tủa hết, vì Fe<sup>3+</sup> oxi hóa I<sup>−</sup> thành I<sub>2</sub>.</li>
        <li>Màu điểm cuối là đỏ nâu. Khi chuẩn trực tiếp Ag<sup>+</sup> bằng SCN<sup>−</sup> phải lắc mạnh, vì AgSCN hấp phụ Ag<sup>+</sup> làm điểm cuối đến sớm.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 6.</b> Thêm 50,00 mL AgNO<sub>3</sub> 0,1000 M vào 25,00 mL dung dịch Cl<sup>−</sup>, lọc bỏ AgCl. Chuẩn lượng Ag<sup>+</sup> dư hết 18,75 mL KSCN 0,0800 M. Tính [Cl<sup>−</sup>].
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} n_\mathrm{Ag^+} &= 0,1000\cdot50,00 = 5,000\ \mathrm{mmol} \\ n_\mathrm{Ag^+,\,dư} &= 0,0800\cdot18,75 = 1,500\ \mathrm{mmol} \\ n_\mathrm{Cl^-} &= 5,000 - 1,500 = 3,500\ \mathrm{mmol} \\ [\mathrm{Cl^-}] &= \frac{3,500}{25,00} = \mathbf{0,1400\ M} \end{aligned} \]
        </details></div>

      <h3>7. Phương pháp Fajans</h3>
      <ul>
        <li>Dùng <b>chỉ thị hấp phụ</b>: thuốc nhuộm anion bám lên bề mặt kết tủa và đổi màu tại điểm tương đương. Fluorescein (pH 7 – 10) và diclorofluorescein (pH 4 – 10) dùng cho Cl<sup>−</sup>; eosin (pH ≥ 2) chỉ dùng cho Br<sup>−</sup>, I<sup>−</sup>, SCN<sup>−</sup>, không dùng cho Cl<sup>−</sup> vì nó hấp phụ lên AgCl ngay từ trước điểm tương đương.</li>
        <li>Cơ chế (chuẩn Cl<sup>−</sup> bằng Ag<sup>+</sup>): trước điểm tương đương, Cl<sup>−</sup> dư hấp phụ lên AgCl nên bề mặt tích điện âm, đẩy chỉ thị anion ra xa. Sau điểm tương đương, Ag<sup>+</sup> dư hấp phụ làm bề mặt tích điện dương, hút chỉ thị lên bề mặt: kết tủa chuyển sang <b>màu hồng</b>.</li>
        <li>Kết tủa cần ở dạng keo, bề mặt lớn (thêm dextrin để giữ keo), tránh ánh sáng mạnh.</li>
        <li>pH phải đủ cao để chỉ thị ở dạng anion, nên mỗi chỉ thị chỉ dùng trong khoảng pH riêng như trên.</li>
      </ul>
      <p><b>So sánh ba phương pháp bạc</b>:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Phương pháp</th><th>Kiểu chuẩn độ</th><th>Chỉ thị, điểm cuối</th><th>Môi trường</th><th>Xác định</th></tr></thead>
          <tbody>
            <tr><td>Mohr</td><td>Trực tiếp bằng AgNO<sub>3</sub></td><td>K<sub>2</sub>CrO<sub>4</sub>: kết tủa đỏ gạch</td><td>pH 6,5 – 10</td><td>Cl<sup>−</sup>, Br<sup>−</sup></td></tr>
            <tr><td>Volhard</td><td>Ngược: Ag<sup>+</sup> dư chuẩn bằng SCN<sup>−</sup></td><td>Fe<sup>3+</sup>: phức đỏ nâu FeSCN<sup>2+</sup></td><td>HNO<sub>3</sub></td><td>Cl<sup>−</sup> (lọc AgCl), Br<sup>−</sup>, I<sup>−</sup>, SCN<sup>−</sup></td></tr>
            <tr><td>Fajans</td><td>Trực tiếp bằng AgNO<sub>3</sub></td><td>Chỉ thị hấp phụ: kết tủa đổi sang hồng</td><td>Tùy chỉ thị (pH 2 – 10)</td><td>Cl<sup>−</sup>, Br<sup>−</sup>, I<sup>−</sup>, SCN<sup>−</sup></td></tr>
          </tbody>
        </table>
      </div>

    `,
    baiTap: [
      {
        de: "Tính độ tan của AgCl (K<sub>sp</sub> = 1,8·10<sup>−10</sup>) trong nước và trong dung dịch NaCl 0,010 M.",
        dapAn: "Trong nước: S = √(1,8·10<sup>−10</sup>) = <b>1,3·10<sup>−5</sup> M</b><br>Trong NaCl 0,010 M: S = 1,8·10<sup>−10</sup>/0,010 = <b>1,8·10<sup>−8</sup> M</b> (giảm khoảng 750 lần do ion chung)",
      },
      {
        de: "Xác định Br<sup>−</sup> theo Volhard: thêm 40,00 mL AgNO<sub>3</sub> 0,1000 M vào 25,00 mL mẫu, chuẩn Ag<sup>+</sup> dư hết 12,20 mL KSCN 0,1000 M. Tính [Br<sup>−</sup>]. Có cần lọc AgBr trước khi chuẩn ngược không?",
        dapAn: "n<sub>Br⁻</sub> = 0,1000 × 40,00 − 0,1000 × 12,20 = 2,780 mmol → [Br<sup>−</sup>] = 2,780/25,00 = <b>0,1112 M</b><br>Không cần lọc: AgBr ít tan hơn AgSCN nên không chuyển thành AgSCN.",
      },
    ],
  },
  {
    id: "oxi-hoa-khu",
    nhom: "Cân bằng và chuẩn độ",
    icon: "⚡",
    ten: "Oxi hóa – khử và chuẩn độ",
    moTa: "Thế khử chuẩn, Nernst, thế điều kiện, đường chuẩn độ, chỉ thị, KMnO₄ – Cr₂O₇²⁻ – iod",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Dùng thế khử chuẩn để dự đoán chiều phản ứng và tính hằng số cân bằng.</li>
          <li>Viết và tính phương trình Nernst, kể cả khi có H<sup>+</sup>, chất tạo phức hoặc chất tạo kết tủa (thế điều kiện).</li>
          <li>Tính thế trên đường chuẩn độ oxi hóa – khử, chọn chỉ thị và tính kết quả các phương pháp KMnO<sub>4</sub>, K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, iod.</li>
        </ul>
      </div>
      <h3>1. Khái niệm cơ bản</h3>
      <ul>
        <li><b>Chất oxi hóa</b> nhận electron (bị khử); <b>chất khử</b> cho electron (bị oxi hóa). Phản ứng oxi hóa – khử là tổng của hai <b>bán phản ứng</b>.</li>
        <li>Mỗi cặp oxi hóa – khử liên hợp viết là Ox/Kh, ví dụ Fe<sup>3+</sup>/Fe<sup>2+</sup>, CO<sub>2</sub>/H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>: Ox + ne ⇌ Kh.</li>
        <li><b>Pin Galvani</b> dùng phản ứng oxi hóa – khử tự diễn biến để sinh ra dòng điện: chất khử nhường electron ở anot, electron đi qua mạch ngoài sang catot và khử chất oxi hóa.</li>
        <li><b>Thế khử chuẩn E<sup>0</sup></b> của một cặp được đo so với điện cực hydro chuẩn (SHE, quy ước E<sup>0</sup> = 0,00 V), ở 25 °C, hoạt độ các chất bằng 1, áp suất khí 1 bar.</li>
      </ul>
      <p><b>E<sup>0</sup> càng lớn thì dạng oxi hóa càng mạnh</b>; E<sup>0</sup> càng nhỏ thì dạng khử càng mạnh. Phản ứng tự xảy ra theo chiều: Ox của cặp có E lớn hơn + Kh của cặp có E nhỏ hơn.</p>
      <div class="bang-cuon">
        <table class="bang bang-hep">
          <thead><tr><th>Cặp</th><th>E<sup>0</sup> (V)</th></tr></thead>
          <tbody>
            <tr><td>MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e ⇌ Mn<sup>2+</sup> + 4H<sub>2</sub>O</td><td>1,51</td></tr>
            <tr><td>Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e ⇌ 2Cr<sup>3+</sup> + 7H<sub>2</sub>O</td><td>1,33</td></tr>
            <tr><td>2IO<sub>3</sub><sup>−</sup> + 12H<sup>+</sup> + 10e ⇌ I<sub>2</sub> + 6H<sub>2</sub>O</td><td>1,20</td></tr>
            <tr><td>Ag<sup>+</sup> + e ⇌ Ag</td><td>0,80</td></tr>
            <tr><td>Fe<sup>3+</sup> + e ⇌ Fe<sup>2+</sup></td><td>0,77</td></tr>
            <tr><td>AsO<sub>4</sub><sup>3−</sup> + 2H<sup>+</sup> + 2e ⇌ AsO<sub>3</sub><sup>3−</sup> + H<sub>2</sub>O (viết gọn)</td><td>0,57</td></tr>
            <tr><td>I<sub>2</sub> + 2e ⇌ 2I<sup>−</sup></td><td>0,54</td></tr>
            <tr><td>Cu<sup>2+</sup> + e ⇌ Cu<sup>+</sup></td><td>0,18</td></tr>
            <tr><td>2H<sup>+</sup> + 2e ⇌ H<sub>2</sub></td><td>0,00</td></tr>
            <tr><td>Zn<sup>2+</sup> + 2e ⇌ Zn</td><td>−0,76</td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 1.</b> Ở điều kiện chuẩn: (a) H<sub>2</sub> có khử được Zn<sup>2+</sup> không? (b) Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> có oxi hóa được I<sub>2</sub> thành IO<sub>3</sub><sup>−</sup> không?
        <details><summary>Xem lời giải</summary>
          (a) E<sup>0</sup>(Zn<sup>2+</sup>/Zn) = −0,76 V &lt; E<sup>0</sup>(H<sup>+</sup>/H<sub>2</sub>) = 0,00 V, nên Zn<sup>2+</sup> là chất oxi hóa yếu hơn H<sup>+</sup>: <b>không</b>. Ngược lại, Zn khử được H<sup>+</sup> (kẽm tan trong acid).<br>
          (b) E<sup>0</sup>(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/Cr<sup>3+</sup>) = 1,33 V &gt; E<sup>0</sup>(IO<sub>3</sub><sup>−</sup>/I<sub>2</sub>) = 1,20 V, nên <b>có</b>: Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> là chất oxi hóa mạnh hơn IO<sub>3</sub><sup>−</sup>.
        </details></div>

      <h3>2. Phương trình Nernst</h3>
      <div class="cong-thuc"><div class="nhan">aOx + mH<sup>+</sup> + ne ⇌ bKh (25 °C)</div>\[ E = E^0 + \frac{0,059}{n}\lg\frac{[\mathrm{Ox}]^a\Hp^m}{[\mathrm{Kh}]^b} \]</div>
      <ul>
        <li>Chất rắn và H<sub>2</sub>O không có mặt trong biểu thức; chất khí dùng áp suất (bar).</li>
        <li>Nếu H<sup>+</sup> tham gia bán phản ứng, thế phụ thuộc mạnh vào pH.</li>
        <li>Nhân cả bán phản ứng với một hệ số (ví dụ viết 2Fe<sup>3+</sup> + 2e ⇌ 2Fe<sup>2+</sup>) <b>không làm thay đổi</b> E<sup>0</sup> và E.</li>
        <li>Hệ số 0,059 V = 2,303RT/F ở 25 °C.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 2.</b> Tính thế của cặp Fe<sup>3+</sup>/Fe<sup>2+</sup> khi [Fe<sup>3+</sup>] = 0,10 M và [Fe<sup>2+</sup>] = 0,010 M.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} E &= 0,77 + 0,059\lg\frac{0,10}{0,010} \\ &= 0,77 + 0,059 = \mathbf{0,83\ V} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 3.</b> Tính thế của dung dịch chứa MnO<sub>4</sub><sup>−</sup> 0,010 M và Mn<sup>2+</sup> 0,020 M ở pH 3,80.
        <details><summary>Xem lời giải</summary>
          MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e ⇌ Mn<sup>2+</sup> + 4H<sub>2</sub>O; [H<sup>+</sup>] = 10<sup>−3,80</sup>:
          \[ \begin{aligned} E &= 1,51 + \frac{0,059}{5}\lg\frac{0,010\cdot\left(10^{-3,80}\right)^8}{0,020} \\ &= 1,51 + 0,0118\cdot(-0,30 - 30,40) \\ &= \mathbf{1,15\ V} \end{aligned} \]
          Ở pH 3,80 thế giảm khoảng 0,36 V so với E<sup>0</sup>: KMnO<sub>4</sub> oxi hóa mạnh nhất trong môi trường acid mạnh.
        </details></div>
      <div class="vi-du"><b>Ví dụ 4.</b> Viết phương trình Nernst cho điện cực bạc – bạc clorid AgCl(r) + e ⇌ Ag(r) + Cl<sup>−</sup> và tính E<sup>0</sup> của nó từ E<sup>0</sup>(Ag<sup>+</sup>/Ag) = 0,80 V và K<sub>sp</sub>(AgCl) = 1,8·10<sup>−10</sup>.
        <details><summary>Xem lời giải</summary>
          Thế của điện cực do cặp Ag<sup>+</sup>/Ag quyết định, với [Ag<sup>+</sup>] = K<sub>sp</sub>/[Cl<sup>−</sup>]:
          \[ \begin{aligned} E &= 0,80 + 0,059\lg\frac{K_\mathrm{sp}}{[\mathrm{Cl^-}]} \\ &= \underbrace{0,80 + 0,059\lg K_\mathrm{sp}}_{E^0(\mathrm{AgCl/Ag})} - 0,059\lg[\mathrm{Cl^-}] \end{aligned} \]
          \[ \begin{aligned} E^0(\mathrm{AgCl/Ag}) &= 0,80 + 0,059\lg K_\mathrm{sp} \\ &= 0,80 + 0,059\cdot(-9,74) \\ &= \mathbf{0,22\ V} \end{aligned} \]
          Đây là điện cực so sánh Ag/AgCl dùng trong máy đo pH (Chương 12).
        </details></div>

      <h3>3. Thế khử chuẩn và hằng số cân bằng</h3>
      <p>Tại cân bằng, thế của hai cặp bằng nhau (E của pin = 0) và Q = K, suy ra:</p>
      <div class="cong-thuc"><div class="nhan">E<sup>0</sup><sub>1</sub>: cặp của chất oxi hóa; E<sup>0</sup><sub>2</sub>: cặp của chất khử; n: số electron trao đổi trong phương trình tổng</div>\[ \lg K = \frac{n\left(E^0_1 - E^0_2\right)}{0,059} \]</div>
      <div class="vi-du"><b>Ví dụ 5.</b> Tính hằng số cân bằng của phản ứng MnO<sub>4</sub><sup>−</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> → Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \lg K &= \frac{5\,(1,51 - 0,77)}{0,059} = 62,7 \\ K &= \mathbf{10^{62,7}} \end{aligned} \]
          Tương tự, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> với Fe<sup>2+</sup> (n = 6): lg K = 6(1,33 − 0,77)/0,059 = 56,9. Cả hai phản ứng xảy ra hoàn toàn, dùng để chuẩn độ được.
        </details></div>

      <h3>4. Thế điều kiện E<sup>0</sup>'</h3>
      <p><b>Thế điều kiện</b> E<sup>0</sup>' là thế của cặp khi tổng nồng độ dạng oxi hóa và dạng khử bằng nhau, trong một môi trường cụ thể (pH, chất tạo phức, chất tạo kết tủa đã cố định). Dùng E<sup>0</sup>' thay E<sup>0</sup> sẽ dự đoán đúng chiều phản ứng trong điều kiện thực tế.</p>
      <p><b>a) Ảnh hưởng của pH.</b> Với AsO<sub>4</sub><sup>3−</sup> + 2H<sup>+</sup> + 2e ⇌ AsO<sub>3</sub><sup>3−</sup> + H<sub>2</sub>O:</p>
      <div class="cong-thuc">\[ \begin{aligned} E &= 0,57 + \frac{0,059}{2}\lg\frac{[\mathrm{AsO_4^{3-}}]\Hp^2}{[\mathrm{AsO_3^{3-}}]} \\ E^{0\prime} &= 0,57 - 0,059\,\mathrm{pH} \end{aligned} \]</div>
      <p><b>b) Ảnh hưởng của chất tạo phức.</b> Chất tạo phức làm giảm nồng độ tự do của dạng bị tạo phức. Nếu dạng oxi hóa tạo phức bền (β lớn) thì E<sup>0</sup>' giảm:</p>
      <div class="cong-thuc"><div class="nhan">Fe<sup>3+</sup> tạo phức FeF<sub>6</sub><sup>3−</sup> (β<sub>6</sub>), Fe<sup>2+</sup> không tạo phức, [F<sup>−</sup>] = 1 M</div>\[ E^{0\prime} = E^0 - 0,059\lg\beta_6 \]</div>
      <p><b>c) Ảnh hưởng của chất tạo kết tủa.</b> Nếu dạng khử bị kết tủa (nồng độ tự do rất nhỏ) thì E<sup>0</sup>' tăng. Với Cu<sup>2+</sup>/Cu<sup>+</sup> khi có I<sup>−</sup> (CuI ít tan, tích số tan T):</p>
      <div class="cong-thuc"><div class="nhan">Cu<sup>2+</sup> + I<sup>−</sup> + e ⇌ CuI(r), [I<sup>−</sup>] = 1 M</div>\[ E^{0\prime} = E^0 + 0,059\lg\frac{1}{T_\mathrm{CuI}} \]</div>
      <div class="vi-du"><b>Ví dụ 6.</b> Dùng E<sup>0</sup>(I<sub>2</sub>/I<sup>−</sup>) = 0,54 V, hãy xét: (a) chiều phản ứng giữa AsO<sub>4</sub><sup>3−</sup> và I<sup>−</sup> ở pH 0 và pH 8; (b) Fe<sup>3+</sup> có oxi hóa được I<sup>−</sup> khi có F<sup>−</sup> 1 M không (β<sub>6</sub>(FeF<sub>6</sub><sup>3−</sup>) = 10<sup>16</sup>)? (c) Cu<sup>2+</sup> có oxi hóa được I<sup>−</sup> không (T<sub>CuI</sub> = 10<sup>−12</sup>)?
        <details><summary>Xem lời giải</summary>
          (a) pH 0: E<sup>0</sup>' = 0,57 V &gt; 0,54 V → AsO<sub>4</sub><sup>3−</sup> oxi hóa I<sup>−</sup> thành I<sub>2</sub>. pH 8: E<sup>0</sup>' = 0,57 − 0,059·8 = 0,10 V &lt; 0,54 V → ngược lại, <b>I<sub>2</sub> oxi hóa AsO<sub>3</sub><sup>3−</sup></b>. Chiều phản ứng đảo ngược theo pH.<br>
          (b) E<sup>0</sup>' = 0,77 − 0,059·16 = −0,17 V &lt; 0,54 V → <b>không</b>. F<sup>−</sup> "che" Fe<sup>3+</sup>, dùng khi xác định Cu bằng phương pháp iod trong mẫu có sắt.<br>
          (c) E<sup>0</sup>' = 0,18 + 0,059·12 = 0,89 V &gt; 0,54 V → <b>có</b>: 2Cu<sup>2+</sup> + 4I<sup>−</sup> → 2CuI + I<sub>2</sub>, dù E<sup>0</sup>(Cu<sup>2+</sup>/Cu<sup>+</sup>) = 0,18 V nhỏ hơn 0,54 V.
        </details></div>

      <h3>5. Đường chuẩn độ oxi hóa – khử</h3>
      <p>Đồ thị thế E của dung dịch theo thể tích chất chuẩn. Sau mỗi lần thêm, phản ứng đạt cân bằng nên hai cặp có cùng thế; ta chọn cặp nào dễ tính:</p>
      <ol>
        <li>Tính V<sub>e</sub> từ hợp thức phản ứng.</li>
        <li><b>Trước điểm tương đương</b>: tính E theo cặp của <b>chất phân tích</b> (biết cả hai dạng).</li>
        <li><b>Tại điểm tương đương</b> (khi H<sup>+</sup> không tham gia hoặc [H<sup>+</sup>] = 1 M):
          \[ E_\mathrm{tđ} = \frac{n_1E^0_1 + n_2E^0_2}{n_1 + n_2} \]</li>
        <li><b>Sau điểm tương đương</b>: tính E theo cặp của <b>chất chuẩn</b>.</li>
      </ol>
      <p>Bước nhảy càng lớn khi hiệu E<sup>0</sup> của hai cặp càng lớn. Khi n<sub>1</sub> = n<sub>2</sub> đường chuẩn độ đối xứng quanh E<sub>tđ</sub>; khi n<sub>1</sub> ≠ n<sub>2</sub>, E<sub>tđ</sub> lệch về phía cặp có n lớn hơn.</p>
      <div class="vi-du"><b>Ví dụ 7.</b> Chuẩn độ Fe<sup>2+</sup> bằng Ce<sup>4+</sup> trong HNO<sub>3</sub> 1 M (E<sup>0</sup>'(Ce<sup>4+</sup>/Ce<sup>3+</sup>) = 1,61 V). Tính lg K và E<sub>tđ</sub>.
        <details><summary>Xem lời giải</summary>
          Ce<sup>4+</sup> + Fe<sup>2+</sup> → Ce<sup>3+</sup> + Fe<sup>3+</sup> (n = 1):
          \[ \begin{aligned} \lg K &= \frac{1,61 - 0,77}{0,059} = 14,2 \\ E_\mathrm{tđ} &= \frac{0,77 + 1,61}{2} = \mathbf{1,19\ V} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 8.</b> Chuẩn độ 10,00 mL dung dịch Fe<sup>2+</sup> bằng KMnO<sub>4</sub> 0,0125 M ([H<sup>+</sup>] = 1 M) hết 8,50 mL. (a) Tính [Fe<sup>2+</sup>]. (b) Tính E khi thêm 5,50 mL; 8,50 mL và 10,50 mL KMnO<sub>4</sub>.
        <details><summary>Xem lời giải</summary>
          (a) MnO<sub>4</sub><sup>−</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> → Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O:
          \[ [\mathrm{Fe^{2+}}] = \frac{5\cdot0,0125\cdot8,50}{10,00} = \mathbf{0,0531\ M} \]
          (b) <b>V = 5,50 mL</b>: Fe<sup>3+</sup> tạo thành = 5·0,0125·5,50 = 0,344 mmol; Fe<sup>2+</sup> còn 0,531 − 0,344 = 0,188 mmol:
          \[ E = 0,77 + 0,059\lg\frac{0,344}{0,188} = \mathbf{0,79\ V} \]
          <b>V = 8,50 mL</b> (tương đương):
          \[ E_\mathrm{tđ} = \frac{0,77 + 5\cdot1,51}{6} = \mathbf{1,39\ V} \]
          <b>V = 10,50 mL</b>: MnO<sub>4</sub><sup>−</sup> dư = 0,0125·2,00 = 0,0250 mmol; Mn<sup>2+</sup> = 0,0125·8,50 = 0,106 mmol:
          \[ E = 1,51 + \frac{0,059}{5}\lg\frac{0,0250}{0,106} = \mathbf{1,50\ V} \]
        </details></div>

      <h3>6. Chỉ thị trong chuẩn độ oxi hóa – khử</h3>
      <ul>
        <li><b>Tự chỉ thị</b>: chất chuẩn có màu đậm. KMnO<sub>4</sub> tím bị khử thành Mn<sup>2+</sup> gần như không màu; giọt dư đầu tiên làm dung dịch hồng nhạt.</li>
        <li><b>Chỉ thị đặc hiệu</b>: phản ứng riêng với một chất. Hồ tinh bột tạo phức <b>xanh đậm</b> với I<sub>3</sub><sup>−</sup>.</li>
        <li><b>Chỉ thị oxi hóa – khử thực sự</b>: In<sub>ox</sub> + ne ⇌ In<sub>kh</sub>, hai dạng khác màu. Mắt thấy rõ một màu khi dạng đó nhiều gấp 10 lần dạng kia, nên khoảng đổi màu:
          \[ E = E^0_\mathrm{In} \pm \frac{0,059}{n} \]</li>
      </ul>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Chỉ thị</th><th>E<sup>0</sup> (V)</th><th>Màu (khử → oxi hóa)</th></tr></thead>
          <tbody>
            <tr><td>Xanh methylen</td><td>0,53</td><td>không màu → xanh lam</td></tr>
            <tr><td>Diphenylamin</td><td>0,76</td><td>không màu → tím</td></tr>
            <tr><td>Acid diphenylamin sulfonic</td><td>0,85</td><td>không màu → tím đỏ</td></tr>
            <tr><td>Ferroin</td><td>1,15</td><td>đỏ → xanh nhạt</td></tr>
          </tbody>
        </table>
      </div>
      <p><b>Nguyên tắc chọn</b>: khoảng đổi màu nằm trong bước nhảy, E<sup>0</sup> của chỉ thị càng gần E<sub>tđ</sub> càng tốt. Ví dụ chuẩn Fe<sup>2+</sup> bằng Ce<sup>4+</sup> (E<sub>tđ</sub> = 1,19 V) dùng ferroin. Khi chuẩn Fe<sup>2+</sup> bằng Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> với diphenylamin sulfonic, người ta thêm H<sub>3</sub>PO<sub>4</sub> để tạo phức với Fe<sup>3+</sup>, hạ thế của cặp Fe<sup>3+</sup>/Fe<sup>2+</sup> (mục 4b) cho bước nhảy bắt đầu sớm hơn.</p>

      <h3>7. Điều chỉnh số oxi hóa trước khi chuẩn độ (tự đọc)</h3>
      <p>Chất phân tích phải ở đúng một số oxi hóa trước khi chuẩn độ. Thuốc thử dư phải loại bỏ được dễ dàng.</p>
      <ul>
        <li><b>Tiền oxi hóa</b>: peroxydisulfat S<sub>2</sub>O<sub>8</sub><sup>2−</sup> (dư được phân hủy bằng cách đun sôi), natri bismutat NaBiO<sub>3</sub> (chất rắn, lọc bỏ), H<sub>2</sub>O<sub>2</sub> trong môi trường base (dư được phân hủy khi đun).</li>
        <li><b>Tiền khử</b>: SnCl<sub>2</sub> (khử Fe<sup>3+</sup> thành Fe<sup>2+</sup>, dư được loại bằng HgCl<sub>2</sub>), SO<sub>2</sub>, H<sub>2</sub>S (đuổi bằng cách đun), cột khử Jones (kẽm hỗn hống), cột khử Walden (Ag trong HCl).</li>
      </ul>

      <h3>8. Các phương pháp chuẩn độ oxi hóa – khử</h3>
      <p><b>a) Phương pháp permanganat.</b> KMnO<sub>4</sub> trong H<sub>2</sub>SO<sub>4</sub> (không dùng HCl vì Cl<sup>−</sup> bị oxi hóa). Tự chỉ thị. KMnO<sub>4</sub> không phải chất gốc (có lẫn MnO<sub>2</sub>, bị phân hủy chậm), phải chuẩn hóa bằng Na<sub>2</sub>C<sub>2</sub>O<sub>4</sub> hoặc H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>·2H<sub>2</sub>O, đun nóng khoảng 60 – 70 °C:</p>
      <div class="cong-thuc">\[ \begin{gathered} 2\mathrm{MnO_4^-} + 5\mathrm{C_2O_4^{2-}} + 16\mathrm{H^+} \\ \rightarrow 2\mathrm{Mn^{2+}} + 10\mathrm{CO_2} + 8\mathrm{H_2O} \end{gathered} \]</div>
      <div class="vi-du"><b>Ví dụ 9.</b> Chuẩn hóa KMnO<sub>4</sub>: 0,2010 g Na<sub>2</sub>C<sub>2</sub>O<sub>4</sub> (M = 134,00) phản ứng vừa đủ với 29,85 mL KMnO<sub>4</sub>. Tính nồng độ KMnO<sub>4</sub>.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} n_\mathrm{C_2O_4^{2-}} &= \frac{0,2010}{134,00} = 1,500\cdot10^{-3}\ \mathrm{mol} \\ n_\mathrm{MnO_4^-} &= \frac{2}{5}\cdot1,500\cdot10^{-3} \\ &= 6,000\cdot10^{-4}\ \mathrm{mol} \\ C &= \frac{6,000\cdot10^{-4}}{0,02985} = \mathbf{0,02010\ M} \end{aligned} \]
        </details></div>
      <p><b>b) Phương pháp dicromat.</b> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> là chất gốc, dung dịch rất bền, dùng được trong HCl. Chỉ thị acid diphenylamin sulfonic. Dùng xác định Fe<sup>2+</sup> và nhu cầu oxy hóa học (COD) của nước thải:</p>
      <div class="cong-thuc">\[ \begin{gathered} \mathrm{Cr_2O_7^{2-}} + 6\mathrm{Fe^{2+}} + 14\mathrm{H^+} \\ \rightarrow 2\mathrm{Cr^{3+}} + 6\mathrm{Fe^{3+}} + 7\mathrm{H_2O} \end{gathered} \]</div>
      <p><b>c) Các phương pháp iod.</b> Chỉ thị hồ tinh bột.</p>
      <ul>
        <li><b>Chuẩn độ iod trực tiếp</b> (iodimetry): dùng dung dịch I<sub>2</sub> (trong KI, dạng I<sub>3</sub><sup>−</sup>) chuẩn độ chất khử như vitamin C, SO<sub>3</sub><sup>2−</sup>, As(III). Hồ tinh bột cho vào từ đầu, điểm cuối xuất hiện màu xanh.</li>
        <li><b>Chuẩn độ iod gián tiếp</b> (iodometry): chất oxi hóa + KI dư → giải phóng I<sub>2</sub>, rồi chuẩn I<sub>2</sub> bằng Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>. Hồ tinh bột cho vào <b>gần điểm cuối</b> (khi dung dịch vàng nhạt) để tránh I<sub>2</sub> bị hấp phụ chặt vào tinh bột; điểm cuối mất màu xanh.
          \[ \mathrm{I_2} + 2\mathrm{S_2O_3^{2-}} \rightarrow 2\mathrm{I^-} + \mathrm{S_4O_6^{2-}} \]</li>
        <li>Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> không phải chất gốc, chuẩn hóa bằng KIO<sub>3</sub> hoặc K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (qua I<sub>2</sub> giải phóng từ KI).</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 10.</b> 25,00 mL dung dịch Cu<sup>2+</sup> được thêm KI dư. I<sub>2</sub> sinh ra phản ứng vừa đủ với 12,50 mL Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> 0,1000 M. Tính nồng độ Cu<sup>2+</sup>.
        <details><summary>Xem lời giải</summary>
          2Cu<sup>2+</sup> + 4I<sup>−</sup> → 2CuI + I<sub>2</sub>; I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup>. Vậy 2 Cu<sup>2+</sup> ↔ 1 I<sub>2</sub> ↔ 2 S<sub>2</sub>O<sub>3</sub><sup>2−</sup>, tức n<sub>Cu²⁺</sub> = n<sub>S₂O₃²⁻</sub>:
          \[ C_\mathrm{Cu^{2+}} = \frac{0,1000\cdot12,50}{25,00} = \mathbf{0,05000\ M} \]
        </details></div>
    `,
    baiTap: [
      {
        de: "Tính thế của cặp Fe<sup>3+</sup>/Fe<sup>2+</sup> khi [Fe<sup>3+</sup>] = 0,010 M; [Fe<sup>2+</sup>] = 0,10 M (E<sup>0</sup> = 0,77 V).",
        dapAn: "E = 0,77 + 0,059 × lg(0,010/0,10) = 0,77 − 0,059 = <b>0,71 V</b>",
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
