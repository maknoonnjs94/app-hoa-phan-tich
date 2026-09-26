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

      <div class="mo-phong" data-loai="sap-xep-quy-trinh"></div>
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
      <div class="mo-phong" data-loai="dung-cu"></div>
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

      <div class="mo-phong" data-loai="doc-buret"></div>
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

      <div class="mo-phong" data-loai="bia-ban"></div>
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
<div class="mo-phong" data-loai="q-test"></div>
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
      <div class="mo-phong" data-loai="le-chatelier"></div>

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
      <div class="mo-phong" data-loai="phan-bo"></div>
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
      <div class="mo-phong" data-loai="chuan-do"></div>
      <div class="mo-phong" data-loai="anh-that" data-anh="buret,binh-non"></div>
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
      <div class="mo-phong" data-loai="edta-3d"></div>
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
      <div class="mo-phong" data-loai="chuan-do-edta"></div>
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
        de: "Chuẩn độ 40,0 mL Ca<sup>2+</sup> 0,0120 M bằng EDTA 0,0120 M ở pH 13 (α<sub>Y⁴⁻</sub> = 0,998; lg K<sub>f</sub> = 10,70). Tính pCa khi thêm 20,0 mL; 40,0 mL và 60,0 mL EDTA.",
        dapAn: "K<sub>f</sub>' = 0,998·10<sup>10,70</sup> = 5,00·10<sup>10</sup>; V<sub>e</sub> = 40,0 mL<br>20,0 mL: [Ca<sup>2+</sup>] = 0,240 mmol/60,0 mL = 4,00·10<sup>−3</sup> M → <b>pCa = 2,40</b><br>40,0 mL: [CaY] = 0,00600 M → [Ca<sup>2+</sup>] = √(0,00600/5,00·10<sup>10</sup>) = 3,46·10<sup>−7</sup> M → <b>pCa = 6,46</b><br>60,0 mL: [EDTA]<sub>dư</sub> = 2,40·10<sup>−3</sup> M; [CaY] = 4,80·10<sup>−3</sup> M → [Ca<sup>2+</sup>] = 4,00·10<sup>−11</sup> M → <b>pCa = 10,40</b>",
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

      <div class="mo-phong" data-loai="mohr"></div>
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
      <p class="luu-y">Bài giảng có chỗ dùng E<sup>0</sup>(MnO<sub>4</sub><sup>−</sup>/Mn<sup>2+</sup>) = 1,55 V và E<sup>0</sup>(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/Cr<sup>3+</sup>) = 1,36 V. App dùng 1,51 V và 1,33 V (giá trị tra bảng thông dụng). Khi làm bài, dùng số đề bài cho.</p>
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
          \[ \begin{aligned} E^0(\mathrm{AgCl/Ag}) &= 0,80 + 0,059\lg K_\mathrm{sp} \\ &= 0,80 + 0,059\cdot(-9,74) \\ &= 0,225 \approx \mathbf{0,23\ V} \end{aligned} \]
          Giá trị tra bảng 0,222 V hơi khác vì dùng E<sup>0</sup>(Ag<sup>+</sup>/Ag) = 0,799 V và hệ số 0,05916. Đây là điện cực so sánh Ag/AgCl dùng trong máy đo pH (Chương 13).
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
      <p><b>Thế điều kiện</b> E<sup>0</sup>' là thế của cặp khi nồng độ tổng (phân tích) của dạng oxi hóa bằng nồng độ tổng của dạng khử (C<sub>Ox</sub> = C<sub>Kh</sub>), trong một môi trường cụ thể (pH, chất tạo phức, chất tạo kết tủa đã cố định). Dùng E<sup>0</sup>' thay E<sup>0</sup> sẽ dự đoán đúng chiều phản ứng trong điều kiện thực tế.</p>
      <p><b>a) Ảnh hưởng của pH.</b> Với AsO<sub>4</sub><sup>3−</sup> + 2H<sup>+</sup> + 2e ⇌ AsO<sub>3</sub><sup>3−</sup> + H<sub>2</sub>O:</p>
      <div class="cong-thuc">\[ \begin{aligned} E &= 0,57 + \frac{0,059}{2}\lg\frac{[\mathrm{AsO_4^{3-}}]\Hp^2}{[\mathrm{AsO_3^{3-}}]} \\ E^{0\prime} &= 0,57 - 0,059\,\mathrm{pH} \end{aligned} \]</div>
      <p><b>b) Ảnh hưởng của chất tạo phức.</b> Chất tạo phức làm giảm nồng độ tự do của dạng bị tạo phức. Nếu dạng oxi hóa tạo phức bền (β lớn) thì E<sup>0</sup>' giảm:</p>
      <div class="cong-thuc"><div class="nhan">Fe<sup>3+</sup> tạo phức FeF<sub>6</sub><sup>3−</sup> (β<sub>6</sub>), Fe<sup>2+</sup> không tạo phức, [F<sup>−</sup>] = 1 M</div>\[ E^{0\prime} = E^0 - 0,059\lg\beta_6 \]</div>
      <p><b>c) Ảnh hưởng của chất tạo kết tủa.</b> Nếu dạng khử bị kết tủa (nồng độ tự do rất nhỏ) thì E<sup>0</sup>' tăng. Với Cu<sup>2+</sup>/Cu<sup>+</sup> khi có I<sup>−</sup> (CuI ít tan, tích số tan T):</p>
      <div class="cong-thuc"><div class="nhan">Cu<sup>2+</sup> + I<sup>−</sup> + e ⇌ CuI(r), [I<sup>−</sup>] = 1 M</div>\[ E^{0\prime} = E^0 + 0,059\lg\frac{1}{T_\mathrm{CuI}} \]</div>
      <div class="vi-du"><b>Ví dụ 6.</b> Dùng E<sup>0</sup>(I<sub>2</sub>/I<sup>−</sup>) = 0,54 V, hãy xét: (a) chiều phản ứng giữa AsO<sub>4</sub><sup>3−</sup> và I<sup>−</sup> ở pH 0 và pH 8; (b) Fe<sup>3+</sup> có oxi hóa được I<sup>−</sup> khi có F<sup>−</sup> 1 M không (β<sub>6</sub>(FeF<sub>6</sub><sup>3−</sup>) = 10<sup>16</sup>)? (c) Cu<sup>2+</sup> có oxi hóa được I<sup>−</sup> không (T<sub>CuI</sub> = 10<sup>−12</sup>)?
        <details><summary>Xem lời giải</summary>
          (a) pH 0: E<sup>0</sup>' = 0,57 V &gt; 0,54 V → AsO<sub>4</sub><sup>3−</sup> oxi hóa I<sup>−</sup> thành I<sub>2</sub>. Vì hai thế chỉ chênh 0,03 V (lg K ≈ 1), phản ứng chỉ xảy ra đáng kể khi [H<sup>+</sup>] cao và I<sup>−</sup> dư. Ở pH 2: E<sup>0</sup>' = 0,45 V. pH 8: E<sup>0</sup>' = 0,57 − 0,059·8 = 0,10 V &lt; 0,54 V → ngược lại, <b>I<sub>2</sub> oxi hóa AsO<sub>3</sub><sup>3−</sup></b> (chuẩn độ As(III) bằng I<sub>2</sub> trong đệm NaHCO<sub>3</sub> pH ≈ 8). Chiều phản ứng đảo ngược theo pH.<br>
          (b) E<sup>0</sup>' = 0,77 − 0,059·16 = −0,17 V &lt; 0,54 V → <b>không</b>. F<sup>−</sup> "che" Fe<sup>3+</sup>, dùng khi xác định Cu bằng phương pháp iod trong mẫu có sắt.<br>
          (c) E<sup>0</sup>' = 0,18 + 0,059·12 = 0,89 V &gt; 0,54 V → <b>có</b>: 2Cu<sup>2+</sup> + 4I<sup>−</sup> → 2CuI + I<sub>2</sub>, dù E<sup>0</sup>(Cu<sup>2+</sup>/Cu<sup>+</sup>) = 0,18 V nhỏ hơn 0,54 V.
        </details></div>

      <h3>5. Đường chuẩn độ oxi hóa – khử</h3>
      <p>Đồ thị thế E của dung dịch theo thể tích chất chuẩn. Sau mỗi lần thêm, phản ứng đạt cân bằng nên hai cặp có cùng thế; ta chọn cặp nào dễ tính:</p>
      <ol>
        <li>Tính V<sub>e</sub> từ hợp thức phản ứng.</li>
        <li><b>Trước điểm tương đương</b>: tính E theo cặp của <b>chất phân tích</b> (biết cả hai dạng).</li>
        <li><b>Tại điểm tương đương</b> (khi H<sup>+</sup> không tham gia hoặc [H<sup>+</sup>] = 1 M, và mỗi cặp có hệ số dạng Ox bằng hệ số dạng Kh; với Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/2Cr<sup>3+</sup> công thức có thêm số hạng phụ thuộc nồng độ):
          \[ E_\mathrm{tđ} = \frac{n_1E^0_1 + n_2E^0_2}{n_1 + n_2} \]</li>
        <li><b>Sau điểm tương đương</b>: tính E theo cặp của <b>chất chuẩn</b>.</li>
      </ol>
      <p>Khi [H<sup>+</sup>] ≠ 1, ví dụ với MnO<sub>4</sub><sup>−</sup>: E<sub>tđ</sub> = (E<sup>0</sup><sub>Fe</sub> + 5E<sup>0</sup><sub>Mn</sub>)/6 − (8·0,059/6)·pH. Bước nhảy càng lớn khi hiệu E<sup>0</sup> của hai cặp càng lớn; với các cặp đối xứng, đường chuẩn độ gần như không phụ thuộc độ pha loãng. Khi n<sub>1</sub> = n<sub>2</sub> đường chuẩn độ đối xứng quanh E<sub>tđ</sub>; khi n<sub>1</sub> ≠ n<sub>2</sub>, E<sub>tđ</sub> lệch về phía cặp có n lớn hơn.</p>
      <div class="mo-phong" data-loai="chuan-do-oxh"></div>
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
          \[ \begin{aligned} E &= 0,77 + 0,059\lg\frac{0,344}{0,188} \\ &= 0,786 \approx \mathbf{0,79\ V} \end{aligned} \]
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
      <p>Chỉ thị có H<sup>+</sup> tham gia bán phản ứng (xanh methylen, diphenylamin) có thế phụ thuộc pH; số trong bảng ứng với [H<sup>+</sup>] = 1 M.</p>
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
      <p><b>b) Phương pháp dicromat.</b> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> là chất gốc, dung dịch rất bền, dùng được trong HCl. Chỉ thị acid diphenylamin sulfonic. Dùng xác định Fe<sup>2+</sup> và nhu cầu oxy hóa học (COD) của nước thải (COD: đun mẫu với K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> dư, rồi chuẩn ngược lượng dư bằng muối Mohr Fe<sup>2+</sup> với chỉ thị ferroin):</p>
      <div class="cong-thuc">\[ \begin{gathered} \mathrm{Cr_2O_7^{2-}} + 6\mathrm{Fe^{2+}} + 14\mathrm{H^+} \\ \rightarrow 2\mathrm{Cr^{3+}} + 6\mathrm{Fe^{3+}} + 7\mathrm{H_2O} \end{gathered} \]</div>
      <p><b>c) Các phương pháp iod.</b> Chỉ thị hồ tinh bột.</p>
      <ul>
        <li><b>Chuẩn độ iod trực tiếp</b> (iodimetry): dùng dung dịch I<sub>2</sub> (trong KI, dạng I<sub>3</sub><sup>−</sup>) chuẩn độ chất khử như vitamin C, SO<sub>3</sub><sup>2−</sup>, As(III). Hồ tinh bột cho vào từ đầu, điểm cuối xuất hiện màu xanh.</li>
        <li><b>Chuẩn độ iod gián tiếp</b> (iodometry): chất oxi hóa + KI dư → giải phóng I<sub>2</sub>, rồi chuẩn I<sub>2</sub> bằng Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>. Hồ tinh bột cho vào <b>gần điểm cuối</b> (khi dung dịch vàng nhạt) để tránh I<sub>2</sub> bị hấp phụ chặt vào tinh bột; điểm cuối mất màu xanh.
          \[ \mathrm{I_2} + 2\mathrm{S_2O_3^{2-}} \rightarrow 2\mathrm{I^-} + \mathrm{S_4O_6^{2-}} \]</li>
        <li>Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> không phải chất gốc, chuẩn hóa bằng KIO<sub>3</sub> hoặc K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> qua I<sub>2</sub> giải phóng từ KI: IO<sub>3</sub><sup>−</sup> + 5I<sup>−</sup> + 6H<sup>+</sup> → 3I<sub>2</sub> + 3H<sub>2</sub>O, tức 1 IO<sub>3</sub><sup>−</sup> ↔ 6 S<sub>2</sub>O<sub>3</sub><sup>2−</sup>.</li>
        <li><b>Điều kiện</b>: chuẩn I<sub>2</sub> bằng S<sub>2</sub>O<sub>3</sub><sup>2−</sup> trong môi trường trung tính hoặc acid yếu (acid mạnh phân hủy S<sub>2</sub>O<sub>3</sub><sup>2−</sup>; pH cao làm I<sub>2</sub> tự oxi hóa – khử và oxi hóa S<sub>2</sub>O<sub>3</sub><sup>2−</sup> lên SO<sub>4</sub><sup>2−</sup>). Dùng KI dư để I<sub>2</sub> nằm ở dạng I<sub>3</sub><sup>−</sup>, ít bay hơi, và chuẩn nhanh vì I<sup>−</sup> bị oxi của không khí oxi hóa trong acid.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 10.</b> 25,00 mL dung dịch Cu<sup>2+</sup> được thêm KI dư. I<sub>2</sub> sinh ra phản ứng vừa đủ với 12,50 mL Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> 0,1000 M. Tính nồng độ Cu<sup>2+</sup>.
        <details><summary>Xem lời giải</summary>
          2Cu<sup>2+</sup> + 4I<sup>−</sup> → 2CuI + I<sub>2</sub>; I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup>. Vậy 2 Cu<sup>2+</sup> ↔ 1 I<sub>2</sub> ↔ 2 S<sub>2</sub>O<sub>3</sub><sup>2−</sup>, tức n<sub>Cu²⁺</sub> = n<sub>S₂O₃²⁻</sub>:
          \[ C_\mathrm{Cu^{2+}} = \frac{0,1000\cdot12,50}{25,00} = \mathbf{0,05000\ M} \]
          Thực tế: thêm SCN<sup>−</sup> gần điểm cuối để giải phóng I<sub>2</sub> bị CuI hấp phụ; nếu mẫu có Fe<sup>3+</sup> thì thêm F<sup>−</sup> (NH<sub>4</sub>HF<sub>2</sub>) để che (Ví dụ 6b).
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
    moTa: "Đường chuẩn, bình phương tối thiểu, độ không đảm bảo, thêm chuẩn, nội chuẩn, QA/QC",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Dựng đường chuẩn bằng bình phương tối thiểu, báo cáo hệ số kèm khoảng tin cậy và tính nồng độ mẫu kèm độ không đảm bảo.</li>
          <li>Chọn và tính toán theo ba cách hiệu chuẩn: ngoại chuẩn, thêm chuẩn, nội chuẩn.</li>
          <li>Hiểu các khái niệm bảo đảm chất lượng: mẫu trắng, CRM, độ thu hồi, LOD/LOQ, thẩm định phương pháp.</li>
        </ul>
      </div>
      <h3>1. Đường chuẩn</h3>
      <p><b>Đường chuẩn</b> (calibration curve) biểu diễn đáp ứng của phương pháp (tín hiệu y) theo lượng chất phân tích đã biết (x). Các khái niệm:</p>
      <ul>
        <li><b>Dung dịch chuẩn</b>: chứa lượng chất phân tích đã biết chính xác.</li>
        <li><b>Mẫu trắng</b> (blank): chứa mọi thuốc thử, dung môi trừ chất phân tích; tín hiệu của nó là tín hiệu nền cần trừ đi.</li>
        <li><b>Khoảng tuyến tính</b>: vùng nồng độ mà tín hiệu tỉ lệ thuận với nồng độ. <b>Khoảng động học</b> (dynamic range): vùng mà tín hiệu còn thay đổi theo nồng độ (có thể không tuyến tính).</li>
      </ul>
      <p><b>Các bước dựng đường chuẩn</b>:</p>
      <ol>
        <li>Pha dãy chuẩn có nồng độ <b>bao trùm</b> nồng độ dự kiến của mẫu, đo tín hiệu (nên đo lặp). Đo cả mẫu trắng.</li>
        <li>Trừ tín hiệu trung bình của mẫu trắng khỏi mọi tín hiệu.</li>
        <li>Vẽ đồ thị, dùng bình phương tối thiểu tìm đường thẳng trong khoảng tuyến tính.</li>
      </ol>
      <p>Mẫu phải nằm trong khoảng nồng độ của dãy chuẩn: <b>không ngoại suy</b>. Mẫu đặc quá thì pha loãng rồi đo lại.</p>

      <h3>2. Phương pháp bình phương tối thiểu</h3>
      <p>Tìm đường thẳng y = mx + b sao cho <b>tổng bình phương độ lệch theo phương thẳng đứng</b> giữa điểm đo và đường thẳng là nhỏ nhất (giả thiết sai số của x không đáng kể so với y).</p>
      <div class="cong-thuc"><div class="nhan">n điểm (x<sub>i</sub>, y<sub>i</sub>)</div>\[ \begin{aligned} D &= n\sum x_i^2 - \left(\sum x_i\right)^2 \\ m &= \frac{n\sum x_iy_i - \sum x_i\sum y_i}{D} \\ b &= \frac{\sum x_i^2\sum y_i - \sum x_iy_i\sum x_i}{D} \end{aligned} \]</div>
      <div class="cong-thuc"><div class="nhan">Độ lệch chuẩn (bậc tự do n − 2); d<sub>i</sub> = y<sub>i</sub> − (mx<sub>i</sub> + b)</div>\[ \begin{gathered} s_y = \sqrt{\frac{\sum d_i^2}{n - 2}} \\ s_m = s_y\sqrt{\frac{n}{D}} \qquad s_b = s_y\sqrt{\frac{\sum x_i^2}{D}} \end{gathered} \]</div>
      <p>Khoảng tin cậy: m ± t·s<sub>m</sub>, b ± t·s<sub>b</sub>, với t tra ở bậc tự do <b>n − 2</b>. Báo cáo dạng y = (b ± t·s<sub>b</sub>) + (m ± t·s<sub>m</sub>)x kèm R<sup>2</sup>. R<sup>2</sup> càng gần 1 càng tốt, nhưng R<sup>2</sup> cao chưa chứng minh được tính tuyến tính: nên xem thêm đồ thị phần dư d<sub>i</sub> (phải phân bố ngẫu nhiên quanh 0). b nên gần 0 (khoảng tin cậy của b chứa 0).</p>
      <div class="cong-thuc"><div class="nhan">Nồng độ mẫu và độ lệch chuẩn của nó (ȳ<sub>0</sub>: trung bình k lần đo mẫu; ȳ: trung bình các y<sub>i</sub> của dãy chuẩn)</div>\[ \begin{gathered} x_0 = \frac{\bar{y}_0 - b}{m} \\ s_x = \frac{s_y}{|m|}\sqrt{\frac{1}{k} + \frac{1}{n} + \frac{(\bar{y}_0 - \bar{y})^2}{m^2\sum(x_i - \bar{x})^2}} \end{gathered} \]</div>
      <p class="luu-y">Trong Excel nên dùng <b>Data Analysis → Regression</b> (cho cả s<sub>b</sub>, s<sub>m</sub>, s<sub>y</sub>, R<sup>2</sup>). Không nên chỉ dùng Add Trendline trên đồ thị, vì nó không cho độ không đảm bảo của các hệ số.</p>
      <div class="mo-phong" data-loai="duong-chuan"></div>
      <div class="vi-du"><b>Ví dụ 1.</b> Dãy chuẩn cho kết quả (tín hiệu đã trừ mẫu trắng):
        <div class="bang-cuon"><table class="bang">
          <thead><tr><th>x (ppm)</th><th>0,00</th><th>2,00</th><th>4,00</th><th>6,00</th><th>8,00</th></tr></thead>
          <tbody><tr><td>A</td><td>0,003</td><td>0,127</td><td>0,251</td><td>0,372</td><td>0,498</td></tr></tbody>
        </table></div>
        Tìm phương trình đường chuẩn kèm khoảng tin cậy 95% (t = 3,18 với 3 bậc tự do). Mẫu đo 3 lần có A trung bình 0,300; tính nồng độ.
        <details><summary>Xem lời giải</summary>
          Σx = 20,00; Σy = 1,251; Σx<sup>2</sup> = 120,0; Σxy = 7,474; n = 5:
          \[ \begin{aligned} D &= 5\cdot120,0 - 20,00^2 = 200,0 \\ m &= \frac{5\cdot7,474 - 20,00\cdot1,251}{200,0} \\ &= 0,06175 \\ b &= \frac{120,0\cdot1,251 - 7,474\cdot20,00}{200,0} \\ &= 0,0032 \end{aligned} \]
          Từ các độ lệch d<sub>i</sub>: s<sub>y</sub> = 0,0012; s<sub>m</sub> = 1,9·10<sup>−4</sup>; s<sub>b</sub> = 9,3·10<sup>−4</sup>; R<sup>2</sup> = 0,99997.
          \[ \begin{gathered} A = (0,0032 \pm 0,0030) \\ + (0,0618 \pm 0,0006)\,x \end{gathered} \]
          Nồng độ mẫu:
          \[ \begin{aligned} x_0 &= \frac{0,300 - 0,0032}{0,06175} = 4,81\ \mathrm{ppm} \\ s_x &= 0,014\ \mathrm{ppm} \end{aligned} \]
          Kết quả: <b>4,81 ± 0,05 ppm</b> (± t·s<sub>x</sub>, độ tin cậy 95%).
        </details></div>

      <h3>3. Giới hạn phát hiện và giới hạn định lượng</h3>
      <div class="cong-thuc"><div class="nhan">s: độ lệch chuẩn tín hiệu của mẫu trắng (hoặc mẫu nồng độ rất thấp); m: độ dốc đường chuẩn</div>\[ \mathrm{LOD} = \frac{3s}{m} \qquad \mathrm{LOQ} = \frac{10s}{m} \]</div>
      <ul>
        <li><b>LOD</b> (giới hạn phát hiện): nồng độ nhỏ nhất phân biệt được với mẫu trắng, chưa định lượng tin cậy.</li>
        <li><b>LOQ</b> (giới hạn định lượng): nồng độ nhỏ nhất định lượng được với độ chính xác chấp nhận.</li>
        <li><b>Độ nhạy</b> là độ dốc m của đường chuẩn: m lớn thì một thay đổi nhỏ về nồng độ cho thay đổi lớn về tín hiệu.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 2.</b> Đo lặp 10 lần mẫu trắng được độ lệch chuẩn s = 0,0020. Với đường chuẩn ở Ví dụ 1, tính LOD và LOQ.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \mathrm{LOD} &= \frac{3\cdot0,0020}{0,06175} = \mathbf{0,097\ ppm} \\ \mathrm{LOQ} &= \frac{10\cdot0,0020}{0,06175} = \mathbf{0,32\ ppm} \end{aligned} \]
        </details></div>

      <h3>4. Ba phương pháp hiệu chuẩn</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Phương pháp</th><th>Cách làm</th><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead>
          <tbody>
            <tr><td>Ngoại chuẩn</td><td>Đường chuẩn pha riêng, đo mẫu rồi nội suy</td><td>Đơn giản, một đường chuẩn dùng cho nhiều mẫu</td><td>Nền chuẩn khác nền mẫu gây sai số hệ thống (ảnh hưởng nền)</td></tr>
            <tr><td>Thêm chuẩn</td><td>Thêm lượng chuẩn biết trước vào chính mẫu</td><td>Loại trừ ảnh hưởng nền</td><td>Mỗi mẫu cần một bộ thêm chuẩn: tốn mẫu, tốn thời gian</td></tr>
            <tr><td>Nội chuẩn</td><td>Thêm chất nội chuẩn vào mọi dung dịch, dùng tỉ số tín hiệu</td><td>Bù dao động của máy, của thể tích tiêm, mất mẫu khi xử lí</td><td>Phải tìm được chất nội chuẩn phù hợp</td></tr>
          </tbody>
        </table>
      </div>

      <h3>5. Phương pháp thêm chuẩn</h3>
      <p>Thêm chuẩn vào chính mẫu nên chất phân tích và chuẩn chịu cùng ảnh hưởng của nền. Giả thiết tín hiệu tỉ lệ thuận với nồng độ (đường thẳng đi qua gốc).</p>
      <div class="cong-thuc"><div class="nhan">Thêm chuẩn một lần: V<sub>0</sub> mL mẫu + V<sub>s</sub> mL chuẩn [S]<sub>i</sub>, định mức thành V mL</div>\[ \begin{gathered} \frac{[\mathrm{X}]_i}{[\mathrm{S}]_f + [\mathrm{X}]_f} = \frac{I_\mathrm{X}}{I_\mathrm{S+X}} \\ [\mathrm{X}]_f = [\mathrm{X}]_i\frac{V_0}{V} \qquad [\mathrm{S}]_f = [\mathrm{S}]_i\frac{V_s}{V} \end{gathered} \]</div>
      <p>I<sub>X</sub>: tín hiệu của mẫu ban đầu; I<sub>S+X</sub>: tín hiệu sau khi thêm chuẩn.</p>
      <div class="vi-du"><b>Ví dụ 3.</b> Xác định Cu<sup>2+</sup> bằng AAS. Mẫu có A = 0,262. Lấy 95,0 mL mẫu, thêm 1,00 mL chuẩn Cu<sup>2+</sup> 100,0 ppm, định mức 100,0 mL, đo được A = 0,500. Tính [Cu<sup>2+</sup>] trong mẫu.
        <details><summary>Xem lời giải</summary>
          [Cu<sup>2+</sup>]<sub>f</sub> = 0,950[Cu<sup>2+</sup>]<sub>i</sub>; [S]<sub>f</sub> = 100,0·1,00/100,0 = 1,00 ppm:
          \[ \begin{gathered} \frac{[\mathrm{Cu^{2+}}]_i}{1,00 + 0,950[\mathrm{Cu^{2+}}]_i} = \frac{0,262}{0,500} \\ [\mathrm{Cu^{2+}}]_i = \mathbf{1,04\ ppm} \end{gathered} \]
        </details></div>
      <p><b>Thêm chuẩn liên tiếp vào cùng một bình</b> (thể tích thay đổi): vẽ I·(V/V<sub>0</sub>) theo [S]<sub>i</sub>·(V<sub>s</sub>/V<sub>0</sub>); giao điểm với trục hoành là −[X]<sub>i</sub>.</p>
      <p><b>Thêm chuẩn nhiều mức</b> (chính xác hơn): chia mẫu vào nhiều bình cùng thể tích, thêm các lượng chuẩn tăng dần, định mức bằng nhau. Vẽ tín hiệu I theo [S]<sub>f</sub>; kéo dài đường thẳng cắt trục hoành tại <b>−[X]<sub>f</sub></b>, tức [X]<sub>f</sub> = b/m.</p>
      <div class="vi-du"><b>Ví dụ 4.</b> Năm bình 50,00 mL, mỗi bình có 10,00 mL mẫu và lượng chuẩn thêm vào sao cho [S]<sub>f</sub> = 0; 0,40; 0,80; 1,20; 1,60 ppm. Tín hiệu đo được 0,241; 0,299; 0,362; 0,419; 0,481. Tính nồng độ chất phân tích trong mẫu.
        <details><summary>Xem lời giải</summary>
          Hồi quy I theo [S]<sub>f</sub>: m = 0,150; b = 0,2404; s<sub>y</sub> = 0,0016.
          \[ \begin{aligned} [\mathrm{X}]_f &= \frac{b}{m} = \frac{0,2404}{0,150} = 1,603\ \mathrm{ppm} \\ [\mathrm{X}]_i &= 1,603\cdot\frac{50,00}{10,00} = 8,01\ \mathrm{ppm} \end{aligned} \]
          Độ không đảm bảo khi ngoại suy tới trục hoành:
          \[ \begin{aligned} s_x &= \frac{s_y}{|m|}\sqrt{\frac{1}{n} + \frac{\bar{y}^2}{m^2\sum(x_i - \bar{x})^2}} \\ &= 0,020\ \mathrm{ppm} \end{aligned} \]
          Nhân 5 (hệ số pha loãng) được 0,10 ppm; với t = 3,18: [X]<sub>i</sub> = <b>8,0 ± 0,3 ppm</b> (95%).
        </details></div>

      <h3>6. Phương pháp nội chuẩn</h3>
      <p><b>Nội chuẩn</b> (S) là chất khác chất phân tích nhưng có tính chất gần giống, không có trong mẫu, được thêm một lượng biết trước vào cả chuẩn và mẫu. Nếu tín hiệu máy dao động hoặc một phần mẫu bị mất, tín hiệu của X và S thay đổi cùng tỉ lệ, nên <b>tỉ số tín hiệu</b> không đổi. Thường dùng trong sắc kí và quang phổ nguyên tử.</p>
      <div class="cong-thuc"><div class="nhan">Hệ số đáp ứng F, xác định từ một hỗn hợp chuẩn đã biết [X] và [S]</div>\[ \frac{A_\mathrm{X}}{[\mathrm{X}]} = F\cdot\frac{A_\mathrm{S}}{[\mathrm{S}]} \]</div>
      <div class="vi-du"><b>Ví dụ 5.</b> Hỗn hợp chuẩn chứa X 0,0837 M và S 0,0666 M cho diện tích pic 423 (X) và 347 (S). Lấy 10,0 mL mẫu, thêm 10,0 mL S 0,146 M, pha thành 25,0 mL; diện tích pic đo được 553 (X) và 582 (S). Tính [X] trong mẫu.
        <details><summary>Xem lời giải</summary>
          \[ F = \frac{423/0,0837}{347/0,0666} = 0,970 \]
          Trong dung dịch đo: [S] = 0,146·10,0/25,0 = 0,0584 M:
          \[ \begin{aligned} [\mathrm{X}] &= \frac{A_\mathrm{X}}{A_\mathrm{S}}\cdot\frac{[\mathrm{S}]}{F} = \frac{553}{582}\cdot\frac{0,0584}{0,970} \\ &= 0,0572\ \mathrm{M} \end{aligned} \]
          Trong mẫu ban đầu (pha loãng 25,0/10,0 lần): [X] = 0,0572·2,50 = <b>0,143 M</b>.
        </details></div>

      <h3>7. Bảo đảm chất lượng</h3>
      <p>Bảo đảm chất lượng (QA) trả lời câu hỏi: kết quả có đủ tin cậy cho mục đích sử dụng không? Gồm xác định <b>mục tiêu sử dụng</b>, đặt <b>tiêu chí kĩ thuật</b> (độ đúng, độ chụm, giới hạn phát hiện, chi phí...) và <b>đánh giá</b> xem đã đạt chưa.</p>
      <ul>
        <li><b>Dương tính giả</b>: kết luận có chất phân tích (hoặc vượt ngưỡng) trong khi thực tế không có. <b>Âm tính giả</b>: ngược lại, bỏ sót. Mục tiêu sử dụng quyết định loại sai lầm nào nguy hiểm hơn.</li>
        <li><b>Độ chọn lọc</b>: khả năng phân biệt chất phân tích với các chất khác trong mẫu.</li>
        <li><b>Chất chuẩn được chứng nhận</b> (CRM): mẫu có hàm lượng đã được chứng nhận, dùng kiểm tra độ đúng.</li>
        <li><b>Các loại mẫu trắng</b>: mẫu trắng phương pháp (đi qua toàn bộ quy trình), mẫu trắng thuốc thử (chỉ có thuốc thử), mẫu trắng hiện trường (mang ra hiện trường cùng mẫu thật, phát hiện nhiễm bẩn khi lấy mẫu và vận chuyển).</li>
        <li><b>Độ thu hồi</b> (spike recovery): thêm lượng biết trước chất phân tích vào mẫu, xem đo lại được bao nhiêu phần trăm:
          \[ R = \frac{C_\text{mẫu thêm} - C_\text{mẫu}}{C_\text{thêm}}\cdot100\% \]</li>
        <li><b>Biểu đồ kiểm soát</b>: đo định kì một mẫu kiểm tra, vẽ kết quả theo thời gian cùng các đường μ ± 2σ (cảnh báo) và μ ± 3σ (hành động) để phát hiện quy trình bị trôi.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 6.</b> Mẫu nước đo được 5,0 ppm Pb. Thêm chuẩn làm tăng 2,0 ppm, đo được 6,8 ppm. Tính độ thu hồi.
        <details><summary>Xem lời giải</summary>
          \[ R = \frac{6,8 - 5,0}{2,0}\cdot100\% = \mathbf{90\%} \]
        </details></div>

      <h3>8. Thẩm định phương pháp</h3>
      <p>Thẩm định phương pháp (method validation) chứng minh phương pháp phù hợp với mục đích sử dụng:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Chỉ tiêu</th><th>Kiểm tra bằng</th></tr></thead>
          <tbody>
            <tr><td>Độ tuyến tính, khoảng làm việc</td><td>Dãy chuẩn, R<sup>2</sup>, độ lệch của các điểm so với đường thẳng</td></tr>
            <tr><td>Độ đúng</td><td>CRM, độ thu hồi, so sánh với phương pháp chuẩn (t-test, Chương 3)</td></tr>
            <tr><td>Độ chụm</td><td>RSD của phép đo lặp: lặp lại (cùng ngày), trung gian (khác ngày, khác người)</td></tr>
            <tr><td>LOD, LOQ</td><td>Mẫu trắng lặp lại (3s/m, 10s/m)</td></tr>
            <tr><td>Độ chọn lọc</td><td>Thêm các chất có thể cản trở</td></tr>
            <tr><td>Độ bền (robustness)</td><td>Thay đổi nhỏ điều kiện (pH, nhiệt độ, thời gian) xem kết quả có ổn định</td></tr>
          </tbody>
        </table>
      </div>
    `,
    baiTap: [
      {
        de: "Đường chuẩn A = 0,0525x + 0,0021 (x: ppm). Mẫu pha loãng 10 lần có A = 0,367. Tính nồng độ trong mẫu ban đầu.",
        dapAn: "x = (0,367 − 0,0021)/0,0525 = 6,95 ppm → mẫu ban đầu: 6,95 × 10 = <b>69,5 ppm</b>",
      },
      {
        de: "Mẫu có tín hiệu 0,180. Thêm chuẩn một lần (thể tích thêm không đáng kể) làm nồng độ tăng 2,00 ppm thì tín hiệu là 0,300. Tính nồng độ mẫu.",
        dapAn: "C<sub>x</sub>/(C<sub>x</sub> + 2,00) = 0,180/0,300 → C<sub>x</sub> = <b>3,00 ppm</b>",
      },
    ],
  },
  {
    id: "uv-vis",
    nhom: "Phân tích công cụ",
    icon: "🌈",
    ten: "Quang phổ UV-Vis và huỳnh quang",
    moTa: "Bức xạ điện từ, định luật Beer, sai lệch, cách đo, hỗn hợp, huỳnh quang",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Đổi qua lại bước sóng, tần số, số sóng, năng lượng photon.</li>
          <li>Dùng định luật Beer để tính nồng độ, ε, độ truyền qua; phân tích hỗn hợp hai chất hấp thụ.</li>
          <li>Biết các nguyên nhân sai lệch định luật Beer, cách đo chính xác và nguyên tắc của huỳnh quang phân tử.</li>
        </ul>
      </div>
      <h3>1. Các phương pháp phổ</h3>
      <p>Phương pháp phổ dựa trên tương tác giữa bức xạ điện từ và vật chất. Các phương pháp chính:</p>
      <ul>
        <li><b>Hấp thụ phân tử UV – Vis</b> (chương này).</li>
        <li><b>Huỳnh quang phân tử</b> (mục 8).</li>
        <li><b>Hấp thụ nguyên tử (AAS), phát xạ nguyên tử (AES)</b> (Chương 12).</li>
        <li><b>Hồng ngoại (IR), Raman</b>: dao động liên kết, dùng nhận biết nhóm chức.</li>
      </ul>

      <h3>2. Bức xạ điện từ</h3>
      <p>Ánh sáng vừa có tính sóng vừa có tính hạt (photon).</p>
      <div class="cong-thuc"><div class="nhan">λ: bước sóng; ν: tần số; ν̃: số sóng; c = 2,998·10<sup>8</sup> m/s; h = 6,626·10<sup>−34</sup> J·s</div>\[ \begin{gathered} \nu = \frac{c}{\lambda} \qquad \tilde{\nu} = \frac{1}{\lambda} \\ E = h\nu = \frac{hc}{\lambda} = hc\tilde{\nu} \end{gathered} \]</div>
      <p>Bước sóng càng ngắn, năng lượng photon càng lớn. Số sóng thường tính bằng cm<sup>−1</sup>.</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Vùng</th><th>Bước sóng</th><th>Quá trình gây ra</th></tr></thead>
          <tbody>
            <tr><td>Tử ngoại (UV)</td><td>200 – 400 nm</td><td>Chuyển mức năng lượng electron</td></tr>
            <tr><td>Khả kiến (Vis)</td><td>400 – 750 nm</td><td>Chuyển mức năng lượng electron</td></tr>
            <tr><td>Hồng ngoại (IR)</td><td>2,5 – 25 µm (4000 – 400 cm<sup>−1</sup>)</td><td>Dao động liên kết</td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 1.</b> Tính tần số, số sóng và năng lượng (J/photon và kJ/mol) của ánh sáng có λ = 500 nm.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \nu &= \frac{2,998\cdot10^{8}}{500\cdot10^{-9}} = 6,00\cdot10^{14}\ \mathrm{Hz} \\ \tilde{\nu} &= \frac{1}{500\cdot10^{-7}\ \mathrm{cm}} = 2,00\cdot10^{4}\ \mathrm{cm^{-1}} \\ E &= \frac{hc}{\lambda} = \frac{6,626\cdot10^{-34}\cdot2,998\cdot10^{8}}{500\cdot10^{-9}} \\ &= 3,97\cdot10^{-19}\ \mathrm{J} \end{aligned} \]
          Nhân với N<sub>A</sub> = 6,022·10<sup>23</sup>: E = <b>239 kJ/mol</b>, cùng cỡ năng lượng liên kết hóa học.
        </details></div>

      <h3>3. Tương tác giữa bức xạ và vật chất</h3>
      <ul>
        <li><b>Hấp thụ</b>: phân tử nhận năng lượng photon, chuyển lên trạng thái kích thích. Chỉ hấp thụ photon có năng lượng đúng bằng hiệu hai mức năng lượng.</li>
        <li><b>Phát quang</b>: phân tử ở trạng thái kích thích trở về trạng thái cơ bản và phát ra photon. Nếu trạng thái kích thích tạo ra do hấp thụ ánh sáng thì gọi là <b>quang phát quang</b> (huỳnh quang, lân quang); nếu do phản ứng hóa học thì gọi là <b>hóa phát quang</b>.</li>
        <li><b>Phát xạ</b>: nguyên tử, phân tử được kích thích bằng nhiệt (ngọn lửa, plasma) rồi phát bức xạ (Chương 12).</li>
      </ul>
      <p><b>Màu của dung dịch</b> là <b>màu phụ</b> của màu ánh sáng bị hấp thụ. Ví dụ dung dịch hấp thụ ánh sáng xanh lục (khoảng 500 – 560 nm) sẽ có màu đỏ tím.</p>

      <h3>4. Độ truyền qua, độ hấp thụ và định luật Beer</h3>
      <p>Chùm sáng đơn sắc có cường độ P<sub>0</sub> đi qua dung dịch, ra khỏi dung dịch còn cường độ P.</p>
      <div class="cong-thuc"><div class="nhan">Độ truyền qua T và độ hấp thụ A</div>\[ \begin{gathered} T = \frac{P}{P_0} \qquad \%T = 100\,T \\ A = -\lg T = \lg\frac{P_0}{P} = 2 - \lg\%T \end{gathered} \]</div>
      <div class="cong-thuc"><div class="nhan">Định luật Beer (ε: hệ số hấp thụ mol, M<sup>−1</sup>cm<sup>−1</sup>; b: bề dày cuvet, cm; C: nồng độ, M)</div>\[ A = \varepsilon bC \]</div>
      <ul>
        <li>ε đặc trưng cho từng chất và <b>phụ thuộc bước sóng</b>. Phổ hấp thụ là đồ thị A (hoặc ε) theo λ.</li>
        <li>Thường đo ở <b>λ<sub>max</sub></b> (đỉnh hấp thụ): độ nhạy cao nhất, và A ít thay đổi khi λ lệch chút ít.</li>
        <li><b>Tính cộng tính</b>: dung dịch có nhiều chất hấp thụ thì A = Σε<sub>i</sub>bC<sub>i</sub> ở mỗi bước sóng.</li>
        <li><b>Điều kiện áp dụng</b>: bức xạ đơn sắc; dung dịch loãng (thường ≲ 0,01 M); dung dịch trong, không tán xạ; chất hấp thụ không tham gia cân bằng hay tương tác làm đổi dạng hấp thụ.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 2.</b> Dung dịch có A = 0,450 trong cuvet 1,00 cm, ε = 1,50·10<sup>4</sup> M<sup>−1</sup>cm<sup>−1</sup>. Tính C và %T.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} C &= \frac{A}{\varepsilon b} = \frac{0,450}{1,50\cdot10^{4}\cdot1,00} \\ &= \mathbf{3,00\cdot10^{-5}\ M} \\ \%T &= 100\cdot10^{-0,450} = \mathbf{35,5\%} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 3.</b> Dung dịch chuẩn 2,00·10<sup>−5</sup> M của một chất có A = 0,312 trong cuvet 1,00 cm. Tính ε. Mẫu cùng chất đo trong cuvet 2,00 cm có A = 0,540; tính nồng độ mẫu.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \varepsilon &= \frac{0,312}{1,00\cdot2,00\cdot10^{-5}} \\ &= 1,56\cdot10^{4}\ \mathrm{M^{-1}cm^{-1}} \\ C &= \frac{0,540}{1,56\cdot10^{4}\cdot2,00} \\ &= \mathbf{1,73\cdot10^{-5}\ M} \end{aligned} \]
          Lỗi hay gặp: quên bề dày cuvet mới là 2,00 cm.
        </details></div>

      <h3>5. Sai lệch khỏi định luật Beer</h3>
      <ul>
        <li><b>Dung dịch quá đặc</b> (thường &gt; 0,01 M): các phân tử tương tác với nhau, ε thay đổi.</li>
        <li><b>Nguyên nhân hóa học</b>: chất hấp thụ tham gia cân bằng (kết hợp, phân li, cân bằng acid – base, phản ứng với dung môi), nên nồng độ dạng hấp thụ không tỉ lệ với tổng nồng độ.</li>
        <li><b>Nguyên nhân thiết bị</b>: ánh sáng không thật đơn sắc (nhất là khi đo ở sườn dốc của phổ); ánh sáng lạc (stray light) lọt vào detector làm A đo được thấp hơn thực tế ở A cao.</li>
      </ul>

      <h3>6. Máy quang phổ và cách đo</h3>
      <p><b>Sơ đồ</b>: nguồn sáng → bộ đơn sắc → cuvet → detector → bộ xử lí.</p>
      <div class="mo-phong" data-loai="uv-vis"></div>
      <div class="mo-phong" data-loai="anh-that" data-anh="may-uv-vis,cuvet"></div>
      <ul>
        <li>Nguồn: đèn deuteri (vùng UV), đèn wolfram – halogen (vùng Vis).</li>
        <li>Bộ đơn sắc: cách tử. Detector: ống nhân quang, dãy diode (đo cả phổ một lúc).</li>
        <li>Máy một chùm tia đo mẫu trắng và mẫu lần lượt; máy hai chùm tia đo đồng thời, bù được dao động của nguồn.</li>
        <li><b>Cuvet</b>: thạch anh (dùng được cả UV); thủy tinh, nhựa (chỉ vùng Vis); NaCl, KBr (vùng IR); cuvet 10 cm cho mẫu khí.</li>
      </ul>
      <p><b>Cách đo</b>: chọn bước sóng; đặt cuvet chứa <b>mẫu trắng</b> để đo P<sub>0</sub> (chỉnh A = 0); thay bằng cuvet chứa mẫu để đo P.</p>
      <p class="luu-y"><b>Để đo chính xác</b>: đo trong khoảng <b>A ≈ 0,3 – 2</b> (mẫu đặc quá thì pha loãng, loãng quá thì dùng cuvet dài hơn hoặc làm giàu); đóng kín buồng đo; lọc bỏ hạt lơ lửng; cầm cuvet ở mặt nhám hoặc bằng giấy mềm, lau sạch mặt quang học; đặt cuvet đúng chiều, lặp lại vị trí.</p>
      <p>Chất không hấp thụ hoặc hấp thụ yếu có thể cho phản ứng với <b>thuốc thử tạo màu</b> rồi đo. Ví dụ Fe<sup>2+</sup> + 1,10-phenanthrolin tạo phức đỏ cam (λ<sub>max</sub> 510 nm).</p>

      <h3>7. Phân tích hỗn hợp hai chất</h3>
      <p>Hỗn hợp X và Y có phổ chồng lên nhau: đo A ở hai bước sóng λ' và λ'', biết ε của từng chất ở từng bước sóng (từ dung dịch chuẩn riêng), rồi giải hệ hai phương trình:</p>
      <div class="cong-thuc">\[ \begin{aligned} A' &= \varepsilon_\mathrm{X}'b[\mathrm{X}] + \varepsilon_\mathrm{Y}'b[\mathrm{Y}] \\ A'' &= \varepsilon_\mathrm{X}''b[\mathrm{X}] + \varepsilon_\mathrm{Y}''b[\mathrm{Y}] \end{aligned} \]</div>
      <p>Nên chọn hai bước sóng mà ở đó hai chất có ε chênh nhau nhiều (mỗi chất hấp thụ mạnh ở một bước sóng).</p>
      <div class="vi-du"><b>Ví dụ 4.</b> Hai chất X, Y có ε (M<sup>−1</sup>cm<sup>−1</sup>): ở λ': ε<sub>X</sub> = 16 440, ε<sub>Y</sub> = 3 990; ở λ'': ε<sub>X</sub> = 3 870, ε<sub>Y</sub> = 6 420. Hỗn hợp đo trong cuvet 1,000 cm có A' = 0,957 và A'' = 0,559. Tính [X] và [Y].
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} 0,957 &= 16\,440[\mathrm{X}] + 3\,990[\mathrm{Y}] \\ 0,559 &= 3\,870[\mathrm{X}] + 6\,420[\mathrm{Y}] \end{aligned} \]
          Giải hệ (ví dụ bằng định thức):
          \[ \begin{aligned} D &= 16\,440\cdot6\,420 - 3\,990\cdot3\,870 \\ &= 9,01\cdot10^{7} \\ [\mathrm{X}] &= \frac{0,957\cdot6\,420 - 0,559\cdot3\,990}{D} \\ &= \mathbf{4,34\cdot10^{-5}\ M} \\ [\mathrm{Y}] &= \frac{16\,440\cdot0,559 - 3\,870\cdot0,957}{D} \\ &= \mathbf{6,09\cdot10^{-5}\ M} \end{aligned} \]
        </details></div>

      <h3>8. Huỳnh quang và lân quang</h3>
      <p>Phân tử hấp thụ photon lên trạng thái kích thích, mất bớt một phần năng lượng dưới dạng nhiệt (dao động) rồi phát photon khi trở về trạng thái cơ bản. Vì mất bớt năng lượng, <b>bức xạ phát ra có bước sóng dài hơn</b> bức xạ kích thích.</p>
      <ul>
        <li><b>Huỳnh quang</b>: phát xạ rất nhanh (cỡ ns), tắt ngay khi ngừng chiếu sáng.</li>
        <li><b>Lân quang</b>: phát xạ chậm (ms đến vài phút), qua trạng thái kích thích có spin khác.</li>
      </ul>
      <div class="cong-thuc"><div class="nhan">Cường độ huỳnh quang ở nồng độ thấp (Φ: hiệu suất lượng tử; P<sub>0</sub>: công suất chiếu tới)</div>\[ I = k\,\Phi\,P_0\,C \]</div>
      <ul>
        <li>Detector đặt vuông góc với chùm kích thích nên đo tín hiệu trên nền tối: <b>nhạy hơn</b> đo hấp thụ nhiều bậc.</li>
        <li><b>Chọn lọc hơn</b>: chọn được cả bước sóng kích thích và bước sóng phát xạ.</li>
        <li>Tín hiệu tỉ lệ với P<sub>0</sub>: tăng cường độ nguồn thì tăng độ nhạy (điều không làm được với đo hấp thụ).</li>
        <li>Chỉ tuyến tính ở nồng độ thấp; nồng độ cao bị tự hấp thụ và dập tắt.</li>
      </ul>
      <p><b>Ứng dụng</b>: xác định Se trong hạt ngũ cốc. Mẫu được phá bằng HNO<sub>3</sub> trong lò vi sóng; Se(VI) được khử về Se(IV) bằng NH<sub>2</sub>OH; Se(IV) phản ứng với thuốc thử tạo dẫn xuất huỳnh quang; kích thích ở 378 nm, đo phát xạ ở 518 nm; đường chuẩn tuyến tính đến khoảng 0,1 µg/mL.</p>
    `,
    baiTap: [
      {
        de: "Dung dịch có %T = 25,0% trong cuvet 1,00 cm. Tính A. Nếu ε = 8,20·10<sup>3</sup> M<sup>−1</sup>cm<sup>−1</sup>, tính nồng độ.",
        dapAn: "A = 2 − lg 25,0 = 0,602<br>C = 0,602/(8,20·10<sup>3</sup> × 1,00) = <b>7,34·10<sup>−5</sup> M</b>",
      },
      {
        de: "Pha loãng dung dịch ở bài trên 2 lần rồi đo trong cuvet 1,00 cm. Tính A và %T mới.",
        dapAn: "A tỉ lệ thuận với C: A = 0,602/2 = <b>0,301</b> → %T = 100·10<sup>−0,301</sup> = <b>50,0%</b>.<br>%T không tăng gấp đôi theo kiểu tuyến tính: T mới = √(T cũ) = √0,250 = 0,500.",
      },
    ],
  },
  {
    id: "quang-nguyen-tu",
    nhom: "Phân tích công cụ",
    icon: "🔥",
    ten: "Quang phổ nguyên tử",
    moTa: "Nguyên tử hóa (ngọn lửa, lò graphit, ICP), AAS, AES, cản trở, ICP-MS",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Hiểu các cách nguyên tử hóa: ngọn lửa, lò graphit, plasma ICP, và ưu nhược điểm của từng cách.</li>
          <li>Nắm nguyên tắc, sơ đồ máy AAS, AES; so sánh hai phương pháp; giải thích vai trò của nhiệt độ qua phân bố Boltzmann.</li>
          <li>Biết các loại cản trở và cách khắc phục; chọn kĩ thuật nguyên tử hóa phù hợp với bài toán thực tế.</li>
        </ul>
      </div>
      <h3>1. Phổ nguyên tử</h3>
      <ul>
        <li>Trong phổ nguyên tử, mẫu bị phân hủy ở nhiệt độ cao thành <b>nguyên tử tự do ở pha khí</b>. Nồng độ nguyên tố được xác định qua sự hấp thụ (AAS), phát xạ (AES) hoặc huỳnh quang (AFS) của các nguyên tử này.</li>
        <li>Nguyên tử không có mức dao động, quay, nên cho <b>vạch phổ rất hẹp</b> (cỡ vài pm), đặc trưng cho từng nguyên tố. Nhờ vậy phổ nguyên tử rất chọn lọc. Phổ phân tử (Chương 11) cho <b>dải phổ</b> rộng.</li>
        <li>Phổ nguyên tử dùng để xác định kim loại và một số á kim ở hàm lượng ppm đến ppt.</li>
      </ul>

      <h3>2. Nguyên tử hóa</h3>
      <p><b>a) Ngọn lửa.</b> Dung dịch mẫu được hút bằng ống mao dẫn nhờ hiệu ứng Venturi rồi đi qua <b>bộ phun sương</b> (nebulizer): dòng khí oxi hóa thổi qua đầu mao dẫn làm mẫu vỡ thành các giọt rất nhỏ. Trong <b>buồng trộn</b> (spray chamber), các giọt to và nặng va vào vách, chảy ra ống thải; chỉ sương mù thật mịn (thường chỉ khoảng <b>5% lượng mẫu hút vào</b>) đi tiếp lên đầu đốt cùng khí oxi hóa (không khí – axetilen khoảng <b>2300 °C</b>, N<sub>2</sub>O – axetilen khoảng <b>2700 °C</b>) và khí nhiên liệu. Đây là lí do chính khiến F-AAS kém nhạy hơn GF-AAS: phần lớn mẫu bị loại bỏ trước khi tới ngọn lửa. Kĩ thuật này <b>nhanh, rẻ, độ lặp lại tốt</b>, nhưng vì chỉ một phần nhỏ mẫu vào ngọn lửa và nguyên tử lưu lại rất ngắn, độ nhạy chỉ cỡ <b>ppm</b>.</p>
      <p>Ngọn lửa có ba vùng, nhiệt độ và thành phần khác nhau: <b>vùng đốt sơ cấp</b> (lớp mỏng sát đầu đốt, cháy chưa hoàn toàn); <b>vùng liên vùng</b> (interzone, ngay phía trên, nhiệt độ cao nhất và giàu nguyên tử tự do — đây là nơi đặt chùm sáng đo AAS/AES); <b>vùng đốt thứ cấp</b> (phía ngoài, nơi sản phẩm cháy khuếch tán ra không khí, có thể oxi hóa lại một phần nguyên tử thành oxide). Chọn đúng chiều cao ngọn lửa để chùm sáng đi qua vùng liên vùng là một yếu tố tối ưu tín hiệu.</p>
      <p>Trong ngọn lửa, mẫu trải qua chuỗi biến đổi: dung môi bay hơi → hạt rắn nóng chảy, bay hơi → phân tử bị phân li thành nguyên tử tự do M. Song song đó, một phần M có thể bị <b>ion hóa</b> (M ⇌ M<sup>+</sup> + e<sup>−</sup>) hoặc <b>tạo oxide bền</b> (M + O → MO rắn/khí), cả hai đều làm giảm số nguyên tử M đo được (xem cản trở ion hóa và cản trở hóa học, mục 6).</p>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 158" role="img" aria-label="Sơ đồ các giai đoạn của mẫu trong ngọn lửa AAS/AES, kèm hai nhánh phụ ion hóa và tạo oxide">
          <defs>
            <marker id="qnt-mt" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--chu-phu)"/>
            </marker>
          </defs>
          <text x="160" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">Các giai đoạn trong ngọn lửa (AAS/AES)</text>

          <rect x="6" y="26" width="68" height="46" rx="6" fill="var(--the)" stroke="var(--vien)"/>
          <text x="40" y="44" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="40">Sương mù</tspan><tspan x="40" dy="12">(giọt mịn,</tspan><tspan x="40" dy="12">~5% mẫu)</tspan></text>

          <rect x="82" y="26" width="68" height="46" rx="6" fill="var(--the)" stroke="var(--vien)"/>
          <text x="116" y="40" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="116">Bay hơi</tspan><tspan x="116" dy="12">dung môi →</tspan><tspan x="116" dy="12">hạt rắn</tspan></text>

          <rect x="158" y="26" width="68" height="46" rx="6" fill="var(--the)" stroke="var(--vien)"/>
          <text x="192" y="40" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="192">Nóng chảy,</tspan><tspan x="192" dy="12">bay hơi →</tspan><tspan x="192" dy="12">phân tử khí</tspan></text>

          <rect x="234" y="26" width="80" height="46" rx="6" fill="color-mix(in srgb, var(--mau-chinh) 14%, var(--the))" stroke="var(--mau-chinh)"/>
          <text x="274" y="40" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="274">Phân li →</tspan><tspan x="274" dy="12" font-weight="700">nguyên tử M</tspan><tspan x="274" dy="12">(đo tại đây)</tspan></text>

          <line x1="74" y1="49" x2="81" y2="49" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#qnt-mt)"/>
          <line x1="150" y1="49" x2="157" y2="49" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#qnt-mt)"/>
          <line x1="226" y1="49" x2="233" y2="49" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#qnt-mt)"/>

          <text x="40" y="88" text-anchor="middle" font-size="9.5" fill="var(--chu-phu)"><tspan x="40">Bộ phun sương loại</tspan><tspan x="40" dy="11">giọt to; chỉ ~5%</tspan><tspan x="40" dy="11">mẫu tới ngọn lửa</tspan></text>

          <circle cx="273" cy="90" r="2.6" fill="var(--chu-phu)"/>
          <line x1="273" y1="72" x2="273" y2="90" stroke="var(--chu-phu)" stroke-width="1.4"/>
          <line x1="273" y1="90" x2="79" y2="114" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#qnt-mt)"/>
          <line x1="273" y1="90" x2="236" y2="114" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#qnt-mt)"/>

          <rect x="14" y="116" width="130" height="34" rx="6" fill="color-mix(in srgb, var(--vang) 16%, var(--the))" stroke="var(--vang)"/>
          <text x="79" y="130" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="79">Ion hóa: M ⇌ M⁺+e⁻</tspan><tspan x="79" dy="12">(mất bớt M, mục 6)</tspan></text>

          <rect x="170" y="116" width="134" height="34" rx="6" fill="color-mix(in srgb, var(--vang) 16%, var(--the))" stroke="var(--vang)"/>
          <text x="237" y="130" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="237">Oxide: M+O→MO(r)</tspan><tspan x="237" dy="12">(khó nguyên tử hóa)</tspan></text>
        </svg>
        <p class="chu-thich">Cả hai nhánh phụ đều làm giảm số nguyên tử M đo được (khắc phục: mục 6 — chất giải phóng / chất khử ion hóa).</p>
      </div>
      <p><b>b) Lò graphit</b> (GF-AAS). Một lượng mẫu rất nhỏ (vài µL) được bơm vào ống graphit, gia nhiệt bằng dòng điện theo chương trình:</p>
      <ol>
        <li><b>Sấy</b>: đuổi dung môi (khoảng 100 °C, giữ vài chục giây để tránh bắn tóe mẫu).</li>
        <li><b>Tro hóa</b>: phân hủy chất hữu cơ và nền dễ bay hơi (vài trăm đến hơn 1000 °C).</li>
        <li><b>Nguyên tử hóa</b>: tăng nhiệt rất nhanh (2000 – 3000 °C), đo tín hiệu lúc này.</li>
        <li><b>Làm sạch</b>: nung ở nhiệt độ cao nhất để loại cặn, tránh <b>hiệu ứng nhớ</b> (mẫu trước ảnh hưởng mẫu sau).</li>
      </ol>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 218" role="img" aria-label="Đồ thị nhiệt độ theo thời gian của chương trình lò graphit GF-AAS, bốn giai đoạn">
          <text x="160" y="11" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">Chương trình nhiệt độ lò graphit (GF-AAS)</text>

          <rect x="40" y="20" width="97" height="145" fill="color-mix(in srgb, var(--chu-phu) 10%, transparent)"/>
          <rect x="137" y="20" width="60" height="145" fill="color-mix(in srgb, var(--mau-chinh) 10%, transparent)"/>
          <rect x="197" y="20" width="27" height="145" fill="color-mix(in srgb, var(--vang) 16%, transparent)"/>
          <rect x="224" y="20" width="59" height="145" fill="color-mix(in srgb, var(--xanh) 12%, transparent)"/>

          <line x1="40" y1="20" x2="40" y2="165" stroke="var(--chu-phu)" stroke-width="1.2"/>
          <line x1="40" y1="165" x2="310" y2="165" stroke="var(--chu-phu)" stroke-width="1.2"/>
          <text x="12" y="168" font-size="9.5" fill="var(--chu-phu)">0</text>
          <text x="4" y="117" font-size="9.5" fill="var(--chu-phu)">1000</text>
          <text x="4" y="69" font-size="9.5" fill="var(--chu-phu)">2000</text>
          <text x="4" y="24" font-size="9.5" fill="var(--chu-phu)">3000</text>
          <text x="10" y="95" font-size="10" fill="var(--chu-phu)" text-anchor="middle" transform="rotate(-90 10 95)">T (°C)</text>
          <text x="304" y="162" font-size="10" fill="var(--chu-phu)" text-anchor="end">t (s)</text>

          <polyline points="40,163.8 67,159.2 121,159.2 137.2,126.3 191.2,126.3 196.6,44.2 218.2,44.2 223.6,34.5 245.2,34.5 250.6,163.8 283,163.8" fill="none" stroke="var(--mau-chinh)" stroke-width="2.2"/>

          <line x1="207" y1="20" x2="207" y2="165" stroke="var(--vang)" stroke-width="1.3" stroke-dasharray="3 3"/>
          <text x="207" y="177" text-anchor="middle" font-size="9.5" fill="var(--vang)" font-weight="700">đo tín hiệu</text>

          <rect x="8" y="188" width="8" height="8" fill="color-mix(in srgb, var(--chu-phu) 10%, transparent)"/><text x="20" y="196" font-size="10" fill="var(--chu-phu)">1 Sấy (~100 °C)</text>
          <rect x="165" y="188" width="8" height="8" fill="color-mix(in srgb, var(--mau-chinh) 10%, transparent)"/><text x="177" y="196" font-size="10" fill="var(--chu-phu)">2 Tro hóa (vài trăm °C)</text>
          <rect x="8" y="206" width="8" height="8" fill="color-mix(in srgb, var(--vang) 16%, transparent)"/><text x="20" y="214" font-size="10" fill="var(--chu-phu)">3 Nguyên tử hóa</text>
          <rect x="165" y="206" width="8" height="8" fill="color-mix(in srgb, var(--xanh) 12%, transparent)"/><text x="177" y="214" font-size="10" fill="var(--chu-phu)">4 Làm sạch (cao nhất)</text>
        </svg>
      </div>
      <p>Nguyên tử lưu lại lâu trong ống và gần như toàn bộ mẫu được nguyên tử hóa, nên GF-AAS <b>nhạy hơn ngọn lửa khoảng 100 – 1000 lần</b> (cỡ ppb) và cần ít mẫu. <b>Chất cải biến nền</b> (NH<sub>4</sub>NO<sub>3</sub>, Pd(NO<sub>3</sub>)<sub>2</sub>) được thêm vào để nền bay hơi sớm hoặc giữ chất phân tích bền hơn ở bước tro hóa. Nếu đặt nhiệt độ tro hóa quá thấp, nền hữu cơ chưa bay hết sẽ gây hấp thụ/tán xạ nền khi đo; nếu đặt quá cao, chất phân tích dễ bay hơi (Cd, Pb) có thể mất bớt trước khi đến bước nguyên tử hóa, làm tín hiệu thấp giả tạo — vì vậy cần dò nhiệt độ tro hóa tối ưu (đường cong tro hóa) trước khi phân tích thật.</p>
      <p><b>c) Plasma cảm ứng cao tần (ICP).</b> Khí Ar được ion hóa và duy trì bằng từ trường cao tần, tạo plasma 6000 – 10 000 K. Nhiệt độ rất cao nên nguyên tử hóa gần như hoàn toàn, ít cản trở hóa học, kích thích được nhiều nguyên tố. Dùng làm nguồn cho phát xạ (ICP-OES) và làm nguồn ion cho khối phổ (ICP-MS).</p>

      <h3>3. Quang phổ hấp thụ nguyên tử (AAS)</h3>
      <p>Nguyên tử tự do ở trạng thái cơ bản hấp thụ bức xạ có bước sóng đúng bằng vạch đặc trưng của nó. Trong khoảng tuyến tính:</p>
      <div class="cong-thuc">\[ A = k\,C \]</div>
      <p><b>Sơ đồ máy</b>: nguồn đèn catot rỗng → bộ nguyên tử hóa (ngọn lửa hoặc lò) → bộ đơn sắc → detector.</p>
      <div class="mo-phong" data-loai="keo-tha-aas"></div>
      <div class="mo-phong" data-loai="anh-that" data-anh="may-aas,den-catot-rong"></div>
      <ul>
        <li><b>Đèn catot rỗng</b> (HCL): catot làm bằng chính nguyên tố cần xác định, đèn chứa khí trơ áp suất thấp. Điện áp cao ion hóa khí; ion khí bắn phá catot làm bật các nguyên tử kim loại ra (sự phún xạ); các nguyên tử này bị kích thích và phát đúng các vạch đặc trưng của nguyên tố đó.</li>
        <li>Vạch phát ra từ đèn hẹp hơn vạch hấp thụ của nguyên tử trong ngọn lửa, nên định luật Beer được thỏa mãn. Mỗi nguyên tố cần một đèn riêng.</li>
        <li>Bộ đơn sắc đặt <b>sau</b> ngọn lửa để loại bớt bức xạ do chính ngọn lửa phát ra. Ngoài ra tia sáng của đèn được <b>điều biến</b> (bộ ngắt quãng hoặc đèn xung) để máy tách tín hiệu của đèn khỏi phát xạ liên tục của ngọn lửa.</li>
      </ul>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 128" role="img" aria-label="Cấu tạo đèn catot rỗng: vỏ thủy tinh chứa khí trơ, catot rỗng, anot">
          <rect x="26" y="28" width="268" height="58" rx="26" fill="color-mix(in srgb, var(--mau-chinh) 6%, var(--the))" stroke="var(--vien)"/>
          <path d="M118,44 L100,44 A14,14 0 0 0 100,72 L118,72" fill="none" stroke="var(--mau-chinh)" stroke-width="4"/>
          <line x1="180" y1="44" x2="180" y2="72" stroke="var(--chu-phu)" stroke-width="3"/>
          <line x1="294" y1="57" x2="312" y2="57" stroke="var(--vang)" stroke-width="2"/>
          <path d="M312,57 L304,52 L304,62 Z" fill="var(--vang)"/>

          <line x1="109" y1="28" x2="109" y2="10" stroke="var(--chu-phu)" stroke-width="0.9" stroke-dasharray="2 2"/>
          <text x="109" y="9" text-anchor="middle" font-size="10" fill="var(--chu)">Catot rỗng (kim loại cần đo)</text>

          <line x1="180" y1="28" x2="220" y2="10" stroke="var(--chu-phu)" stroke-width="0.9" stroke-dasharray="2 2"/>
          <text x="222" y="9" text-anchor="start" font-size="10" fill="var(--chu)">Anot</text>

          <text x="160" y="100" text-anchor="middle" font-size="10" fill="var(--chu-phu)">Khí trơ áp suất thấp (Ne hoặc Ar)</text>
          <text x="316" y="100" text-anchor="end" font-size="9.5" fill="var(--vang)">ánh sáng ra</text>
        </svg>
        <p class="chu-thich">Ion khí trơ bắn phá catot (sự phún xạ), bật nguyên tử kim loại ra khỏi bề mặt; các nguyên tử này bị kích thích và phát đúng vạch đặc trưng của nguyên tố làm catot.</p>
      </div>
      <p>Vì ảnh hưởng nền (độ nhớt, sức căng bề mặt của mẫu thật khác dung dịch chuẩn pha trong nước) có thể làm sai tốc độ hút mẫu, AAS thường được hiệu chuẩn bằng <b>thêm chuẩn</b> thay vì ngoại chuẩn (Chương 10, mục 5). Với thêm chuẩn một điểm, có thể ngoại suy sai số lớn nếu chỉ dùng một mức; <b>thêm chuẩn nhiều mức</b> (chia mẫu vào nhiều bình, thêm lượng chuẩn tăng dần) cho kết quả đáng tin hơn và còn cho phép đánh giá độ tuyến tính.</p>
      <div class="vi-du"><b>Ví dụ 1.</b> Xác định Zn trong một mẫu nước thải bằng F-AAS, dùng thêm chuẩn nhiều mức. Lấy 5,00 mL mẫu cho vào mỗi bình định mức 25,00 mL trong năm bình; thêm lần lượt 0; 1,00; 2,00; 3,00; 4,00 mL dung dịch chuẩn Zn 8,00 mg/L, định mức bằng nước cho mỗi bình, đo được A:
        <div class="bang-cuon"><table class="bang">
          <thead><tr><th>V<sub>s</sub> (mL)</th><th>0,00</th><th>1,00</th><th>2,00</th><th>3,00</th><th>4,00</th></tr></thead>
          <tbody><tr><td>A</td><td>0,298</td><td>0,346</td><td>0,394</td><td>0,442</td><td>0,490</td></tr></tbody>
        </table></div>
        Tính nồng độ Zn trong mẫu nước thải ban đầu (mg/L).
        <details><summary>Xem lời giải</summary>
          Nồng độ Zn chuẩn thêm vào mỗi bình (đã pha loãng đến 25,00 mL):
          \[ \begin{gathered} [\mathrm{S}]_f = \frac{8,00\cdot V_s}{25,00}\ \text{mg/L} \\ = 0;\ 0,320;\ 0,640;\ 0,960;\ 1,280\ \text{mg/L} \end{gathered} \]
          Hồi quy A theo [S]<sub>f</sub> (phương pháp bình phương tối thiểu, Chương 10, mục 2): m = 0,1500 (A trên mg/L); b = 0,2980.
          \[ [\mathrm{Zn}]_f = \frac{b}{m} = \frac{0,2980}{0,1500} = 1,987\ \mathrm{mg/L} \]
          [Zn]<sub>f</sub> là nồng độ Zn trong bình 25,00 mL, ứng với 5,00 mL mẫu ban đầu (hệ số pha loãng 25,00/5,00 = 5,00):
          \[ [\mathrm{Zn}]_\text{mẫu} = 1,987\times5,00 = \mathbf{9,93\ mg/L} \]
          Lỗi hay gặp: quên nhân hệ số pha loãng 5,00 (nhầm nồng độ ngoại suy [Zn]<sub>f</sub> là đáp số cuối).
        </details></div>

      <h3>4. Quang phổ phát xạ nguyên tử (AES)</h3>
      <p>Nguyên tử được nguyên tử hóa rồi <b>kích thích</b> bằng nhiệt (ngọn lửa, plasma); khi trở về trạng thái cơ bản chúng phát ra bức xạ đặc trưng. Cường độ vạch tỉ lệ với nồng độ: I = k·C. Máy giống AAS nhưng <b>không cần nguồn sáng</b>.</p>
      <ul>
        <li><b>Quang kế ngọn lửa</b>: dùng ngọn lửa làm nguồn kích thích, thích hợp cho kim loại kiềm (Na, K) dễ kích thích.</li>
        <li><b>ICP-OES</b>: plasma kích thích được hầu hết nguyên tố; phân tích <b>đồng thời nhiều nguyên tố</b>, khoảng tuyến tính rộng (4 – 6 bậc nồng độ). Vì đo đồng thời và tín hiệu có thể trôi theo thời gian, ICP-OES thường dùng thêm <b>nội chuẩn</b> (một nguyên tố không có trong mẫu, thêm lượng biết trước vào mọi dung dịch) để bù dao động của plasma và của tốc độ hút mẫu — cùng nguyên lí và cách tính như nội chuẩn trong sắc kí (Chương 10, mục 6).</li>
      </ul>
      <p><b>Ảnh hưởng của nhiệt độ</b>: tỉ lệ nguyên tử ở trạng thái kích thích (N*) và cơ bản (N<sub>0</sub>) tuân theo phân bố Boltzmann:</p>
      <div class="cong-thuc"><div class="nhan">g*, g<sub>0</sub>: số trạng thái cùng năng lượng; ΔE: hiệu năng lượng; k = 1,381·10<sup>−23</sup> J/K</div>\[ \frac{N^*}{N_0} = \frac{g^*}{g_0}\,e^{-\Delta E/kT} \]</div>
      <div class="vi-du"><b>Ví dụ 2.</b> Với vạch Na 589,0 nm (g*/g<sub>0</sub> = 3, theo Harris gộp cả mức 3p), tính N*/N<sub>0</sub> ở 2500 K và 2510 K. Nhận xét ảnh hưởng của dao động nhiệt độ ngọn lửa tới AAS và AES.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \Delta E &= \frac{hc}{\lambda} = \frac{6,626\cdot10^{-34}\cdot2,998\cdot10^{8}}{589,0\cdot10^{-9}} \\ &= 3,373\cdot10^{-19}\ \mathrm{J} \end{aligned} \]
          Ở 2500 K: \[ \frac{N^*}{N_0} = 3\,e^{-9,77} = 1,72\cdot10^{-4} \]
          Ở 2510 K: \[ \frac{N^*}{N_0} = 1,78\cdot10^{-4} \]
          Tăng 10 K làm số nguyên tử kích thích tăng khoảng <b>4%</b>, nên tín hiệu <b>AES</b> thay đổi khoảng 4%. Trong khi đó N<sub>0</sub> gần như không đổi (99,98% nguyên tử vẫn ở trạng thái cơ bản), nên tín hiệu <b>AAS</b> hầu như không bị ảnh hưởng. AES đòi hỏi nhiệt độ nguồn rất ổn định.
        </details></div>
      <div class="mo-phong" data-loai="boltzmann"></div>

      <h3>5. So sánh AAS và AES</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Tiêu chí</th><th>AAS</th><th>AES</th></tr></thead>
          <tbody>
            <tr><td>Tín hiệu phụ thuộc</td><td>Số nguyên tử ở trạng thái cơ bản</td><td>Số nguyên tử ở trạng thái kích thích</td></tr>
            <tr><td>Nguồn sáng</td><td>Cần đèn catot rỗng cho từng nguyên tố</td><td>Không cần (nguồn nhiệt vừa nguyên tử hóa vừa kích thích)</td></tr>
            <tr><td>Nhiệt độ</td><td>Vừa đủ để nguyên tử hóa</td><td>Đủ cao để kích thích, phải rất ổn định</td></tr>
            <tr><td>Số nguyên tố mỗi lần đo</td><td>Thường một</td><td>Nhiều nguyên tố đồng thời (ICP-OES)</td></tr>
          </tbody>
        </table>
      </div>

      <h3>6. Cản trở và cách khắc phục</h3>
      <ul>
        <li><b>Cản trở phổ</b>: vạch hoặc dải hấp thụ của chất khác chồng lên vạch chất phân tích; hạt rắn, phân tử trong ngọn lửa hấp thụ hoặc tán xạ ánh sáng (<b>hấp thụ nền</b>). Khắc phục: chọn vạch khác; <b>hiệu chỉnh nền</b> bằng đèn D<sub>2</sub> hoặc hiệu ứng Zeeman.
          <br>— <i>Vì sao đèn D<sub>2</sub> trừ được nền</i>: đèn D<sub>2</sub> (deuteri) phát phổ liên tục (băng rộng), nên hấp thụ của nó qua ngọn lửa chỉ phản ánh <b>nền</b> (vạch của nguyên tử phân tích rất hẹp, hầu như không hấp thụ đáng kể ánh sáng băng rộng này). Đèn catot rỗng (HCL) đo <b>tổng</b> tín hiệu (chất phân tích + nền). Máy chiếu luân phiên HCL và D<sub>2</sub> qua cùng vị trí, rồi lấy hiệu A<sub>HCL</sub> − A<sub>D2</sub> = A của riêng chất phân tích.
          <br>— <i>Hiệu ứng Zeeman</i>: đặt từ trường mạnh quanh ống nguyên tử hóa làm tách vạch của chất phân tích thành các thành phần lệch bước sóng; từ trường được bật và tắt luân phiên rất nhanh tại cùng một vị trí, đo tín hiệu ở cả hai trạng thái rồi lấy hiệu, cho phép trừ nền chính xác hơn D<sub>2</sub> (đặc biệt với nền có cấu trúc, hay gặp trong GF-AAS).</li>
        <li><b>Cản trở hóa học</b>: chất phân tích tạo hợp chất bền khó nguyên tử hóa, ví dụ Ca<sup>2+</sup> với PO<sub>4</sub><sup>3−</sup>. Khắc phục: thêm <b>chất giải phóng</b> (La<sup>3+</sup>, Sr<sup>2+</sup> kết hợp với PO<sub>4</sub><sup>3−</sup> thay cho Ca); thêm chất tạo phức bảo vệ (EDTA); dùng ngọn lửa nóng hơn (N<sub>2</sub>O – axetilen).</li>
        <li><b>Cản trở ion hóa</b>: kim loại kiềm bị ion hóa một phần trong ngọn lửa nóng, làm giảm số nguyên tử. Khắc phục: thêm <b>chất khử ion hóa</b> (K, Cs dễ ion hóa hơn, cung cấp nhiều electron).</li>
        <li><b>Ảnh hưởng nền</b> (độ nhớt, sức căng bề mặt khác nhau giữa mẫu và chuẩn làm tốc độ hút mẫu khác nhau): dùng phương pháp <b>thêm chuẩn</b> (Chương 10, xem Ví dụ 1).</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 3.</b> Xác định Ca<sup>2+</sup> trong mẫu nước có lẫn PO<sub>4</sub><sup>3−</sup> bằng F-AAS. Chuẩn Ca<sup>2+</sup> 5,00 mg/L (không có PO<sub>4</sub><sup>3−</sup>) cho A = 0,250. Mẫu có cùng nồng độ Ca<sup>2+</sup> danh nghĩa 5,00 mg/L nhưng lẫn PO<sub>4</sub><sup>3−</sup> chỉ cho A = 0,087. Sau khi thêm La<sup>3+</sup> 1% (chất giải phóng) vào cả mẫu và chuẩn, đo lại mẫu được A = 0,246. Tính % tín hiệu bị mất do cản trở và % phục hồi sau khi thêm La<sup>3+</sup>.
        <details><summary>Xem lời giải</summary>
          \[ \%\text{mất} = \left(1-\frac{0,087}{0,250}\right)\times100 = \mathbf{65,2\%} \]
          PO<sub>4</sub><sup>3−</sup> tạo với Ca<sup>2+</sup> hợp chất bền (Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>), khó nguyên tử hóa, làm mất hơn 65% tín hiệu — đây là <b>cản trở hóa học</b>, không phải sai số ngẫu nhiên.
          \[ \%\text{phục hồi} = \frac{0,246}{0,250}\times100 = \mathbf{98,4\%} \]
          La<sup>3+</sup> phản ứng với PO<sub>4</sub><sup>3−</sup> mạnh hơn Ca<sup>2+</sup>, giải phóng Ca<sup>2+</sup> trở lại dạng tự do, phục hồi gần như hoàn toàn tín hiệu. Phải thêm La<sup>3+</sup> vào <b>cả chuẩn lẫn mẫu</b> để nền giống nhau.
        </details></div>
      <p class="luu-y"><b>Lỗi hay gặp:</b> tưởng ngọn lửa càng nóng luôn tốt hơn — ngọn lửa N<sub>2</sub>O–C<sub>2</sub>H<sub>2</sub> nóng hơn nhưng ion hóa mạnh kim loại kiềm, có thể làm tín hiệu <i>giảm</i> nếu không thêm chất khử ion hóa; nhầm <b>chất giải phóng</b> (La<sup>3+</sup>, Sr<sup>2+</sup>, phản ứng với chất gây cản trở) với <b>chất khử ion hóa</b> (K<sup>+</sup>, Cs<sup>+</sup>, cung cấp electron); dùng ngoại chuẩn khi mẫu có ảnh hưởng nền đáng kể thay vì thêm chuẩn; đặt nhiệt độ tro hóa trong GF-AAS quá cao làm mất chất phân tích trước khi đo; nhầm rằng tín hiệu AAS phụ thuộc N* (thực ra phụ thuộc N<sub>0</sub>, gần như không đổi theo nhiệt độ).</p>

      <h3>7. ICP-MS</h3>
      <p>Plasma ICP vừa nguyên tử hóa vừa <b>ion hóa</b> mẫu; ion được đưa vào khối phổ kế, tách theo tỉ số khối lượng/điện tích <b>m/z</b> rồi đếm. Đây là phương pháp nhạy nhất trong nhóm (cỡ ppt), phân tích đồng thời nhiều nguyên tố và cả tỉ lệ đồng vị. Cản trở chính là ion đa nguyên tử có cùng m/z, ví dụ <sup>40</sup>Ar<sup>35</sup>Cl<sup>+</sup> trùng với <sup>75</sup>As<sup>+</sup>; khắc phục bằng buồng va chạm/phản ứng hoặc máy phân giải cao.</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Kĩ thuật</th><th>Giới hạn phát hiện điển hình</th><th>Đặc điểm</th></tr></thead>
          <tbody>
            <tr><td>F-AAS (ngọn lửa)</td><td>ppm (mg/L)</td><td>Rẻ, nhanh, một nguyên tố</td></tr>
            <tr><td>GF-AAS (lò graphit)</td><td>ppb (µg/L)</td><td>Ít mẫu, chậm hơn</td></tr>
            <tr><td>ICP-OES</td><td>ppb</td><td>Nhiều nguyên tố, khoảng tuyến tính rộng</td></tr>
            <tr><td>ICP-MS</td><td>ppt (ng/L)</td><td>Nhạy nhất, đồng vị; đắt</td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 4.</b> Xác định Pb trong nước uống bằng GF-AAS. Đường chuẩn A = 0,0184·C + 0,0012 (C: µg/L). Mẫu đo được A = 0,112. Mẫu có đạt quy chuẩn Pb ≤ 10 µg/L không?
        <details><summary>Xem lời giải</summary>
          \[ C = \frac{0,112 - 0,0012}{0,0184} = \mathbf{6,02\ \mu g/L} \]
          6,02 µg/L &lt; 10 µg/L nên <b>đạt</b>. Nồng độ cỡ µg/L này nằm dưới giới hạn phát hiện của F-AAS, vì vậy phải dùng lò graphit (hoặc ICP-MS).
        </details></div>

      <h3>8. Chọn kĩ thuật nguyên tử hóa phù hợp</h3>
      <p>Việc chọn F-AAS, GF-AAS, ICP-OES hay ICP-MS phụ thuộc chủ yếu vào <b>nồng độ dự kiến</b>, <b>số nguyên tố cần đo</b> và <b>lượng mẫu có sẵn</b>:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Tình huống</th><th>Kĩ thuật nên chọn</th></tr></thead>
          <tbody>
            <tr><td>Một nguyên tố, nồng độ cỡ mg/L, mẫu dồi dào, cần nhanh và rẻ</td><td>F-AAS</td></tr>
            <tr><td>Một vài nguyên tố, nồng độ cỡ µg/L, lượng mẫu rất ít (vài chục µL)</td><td>GF-AAS</td></tr>
            <tr><td>Nhiều nguyên tố (&gt; 10) cùng lúc, nồng độ từ µg/L đến mg/L</td><td>ICP-OES</td></tr>
            <tr><td>Nhiều nguyên tố ở mức vết đến siêu vết (ppt–ppb), hoặc cần tỉ lệ đồng vị</td><td>ICP-MS</td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 5.</b> Chọn kĩ thuật phù hợp cho ba tình huống: (a) kiểm tra nhanh Ca, Mg trong 50 mẫu nước máy, nồng độ cỡ chục mg/L; (b) xác định Cd trong 0,50 mL huyết thanh, nồng độ dự kiến cỡ 1 µg/L; (c) xác định đồng thời 20 nguyên tố vết (Pb, Cd, As, Hg...) trong mẫu đất ở mức ppb, cần cả thông tin đồng vị chì.
        <details><summary>Xem lời giải</summary>
          (a) Nồng độ cao, một vài nguyên tố, số mẫu nhiều, cần nhanh rẻ → <b>F-AAS</b>.<br>
          (b) Lượng mẫu rất ít và nồng độ rất thấp (µg/L) → <b>GF-AAS</b> (bơm được vài chục µL, đủ nhạy tới ppb).<br>
          (c) Rất nhiều nguyên tố, mức ppb, cần tỉ lệ đồng vị → <b>ICP-MS</b> (không kĩ thuật nào khác trong bảng cho đồng thời cả độ nhạy ppb–ppt lẫn thông tin đồng vị).
        </details></div>
`,
    baiTap: [
      {
        de: "Vì sao khi xác định Ca bằng F-AAS trong mẫu có nhiều phosphate, người ta thêm LaCl<sub>3</sub> vào cả mẫu và chuẩn?",
        dapAn: "PO<sub>4</sub><sup>3−</sup> tạo với Ca hợp chất bền, khó nguyên tử hóa, làm tín hiệu Ca giảm (cản trở hóa học). La<sup>3+</sup> là <b>chất giải phóng</b>: nó kết hợp với phosphate mạnh hơn, trả Ca về dạng dễ nguyên tử hóa. Thêm vào cả chuẩn để nền của chuẩn và mẫu giống nhau.",
      },
      {
        de: "Tín hiệu của phương pháp nào (AAS hay AES) nhạy hơn với dao động nhiệt độ của ngọn lửa? Giải thích ngắn.",
        dapAn: "<b>AES</b>. Số nguyên tử kích thích tăng theo hàm mũ với nhiệt độ (phân bố Boltzmann), tăng 10 K có thể làm tín hiệu thay đổi vài %. AAS đo nguyên tử ở trạng thái cơ bản, chiếm gần 100% nên hầu như không đổi.",
      },
    ],
  },
  {
    id: "dien-hoa",
    nhom: "Phân tích công cụ",
    icon: "🔋",
    ten: "Điện hóa: điện cực và đo thế",
    moTa: "Pin điện hóa, điện cực so sánh và chỉ thị, ISE, đo pH, chuẩn độ điện thế, điện lượng",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Viết kí hiệu pin, tính thế pin bằng phương trình Nernst; đổi thế giữa các điện cực so sánh.</li>
          <li>Hiểu cấu tạo, phương trình đáp ứng của điện cực chọn lọc ion và điện cực thủy tinh; cách hiệu chuẩn máy đo pH và cách tính thêm chuẩn cho ISE.</li>
          <li>Xác định điểm tương đương bằng đạo hàm trong chuẩn độ điện thế; tính theo định luật Faraday.</li>
        </ul>
      </div>
      <h3>1. Đại cương phân tích điện hóa</h3>
      <p>Các phương pháp điện hóa đo một đại lượng điện (thế, dòng, điện lượng, độ dẫn) liên hệ với nồng độ chất phân tích:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Phương pháp</th><th>Đại lượng đo</th><th>Ví dụ</th></tr></thead>
          <tbody>
            <tr><td>Đo thế</td><td>Thế pin khi dòng gần bằng 0</td><td>Máy đo pH, điện cực F<sup>−</sup>, chuẩn độ điện thế</td></tr>
            <tr><td>Điện lượng (culông)</td><td>Điện lượng Q cần cho phản ứng điện cực</td><td>Chuẩn độ Karl Fischer xác định nước</td></tr>
            <tr><td>Von-ampe</td><td>Dòng theo thế áp vào</td><td>Xác định kim loại vết, cảm biến glucose</td></tr>
            <tr><td>Đo độ dẫn</td><td>Độ dẫn điện của dung dịch</td><td>Kiểm tra độ tinh khiết nước, detector sắc kí ion</td></tr>
          </tbody>
        </table>
      </div>

      <h3>2. Pin điện hóa</h3>
      <p>Pin Galvani gồm hai điện cực nhúng trong dung dịch, nối bằng <b>cầu muối</b> (ví dụ KCl trong gel) để dòng ion đi qua mà hai dung dịch không trộn lẫn. <b>Anot</b> là nơi xảy ra sự oxi hóa, <b>catot</b> là nơi xảy ra sự khử (quy ước này đúng cho cả pin Galvani lẫn bình điện phân, không phụ thuộc dấu điện cực).</p>
      <p><b>Kí hiệu pin</b>: điện cực bên trái viết như nơi xảy ra oxi hóa (anot), bên phải như nơi xảy ra khử (catot); "|" là ranh giới pha, "||" là cầu muối. Ví dụ pin Daniell:</p>
      <div class="cong-thuc">\[ \mathrm{Zn(r)}\,|\,\mathrm{Zn^{2+}(aq)}\,\|\,\mathrm{Cu^{2+}(aq)}\,|\,\mathrm{Cu(r)} \]</div>
      <div class="cong-thuc"><div class="nhan">E<sub>+</sub>: thế điện cực bên phải; E<sub>−</sub>: bên trái (cả hai viết dạng thế khử)</div>\[ E_\text{pin} = E_+ - E_- \]</div>
      <p>E<sub>pin</sub> = E<sub>phải</sub> − E<sub>trái</sub>. E<sub>pin</sub> &gt; 0: phản ứng tự xảy ra theo chiều viết (electron đi từ trái sang phải ở mạch ngoài); E<sub>pin</sub> &lt; 0: chiều thực ngược lại.</p>
      <div class="vi-du"><b>Ví dụ 1.</b> Tính thế của pin Zn | Zn<sup>2+</sup> (0,10 M) || Cu<sup>2+</sup> (0,010 M) | Cu. Biết E<sup>0</sup>(Cu<sup>2+</sup>/Cu) = 0,34 V; E<sup>0</sup>(Zn<sup>2+</sup>/Zn) = −0,76 V.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} E_+ &= 0,34 + \frac{0,059}{2}\lg0,010 \\ &= 0,281\ \mathrm{V} \\ E_- &= -0,76 + \frac{0,059}{2}\lg0,10 \\ &= -0,790\ \mathrm{V} \\ E_\text{pin} &= 0,281 - (-0,790) = \mathbf{1,07\ V} \end{aligned} \]
          E<sub>pin</sub> &gt; 0 nên Zn bị oxi hóa, Cu<sup>2+</sup> bị khử.
        </details></div>
      <div class="mo-phong" data-loai="pin-dien-hoa"></div>

      <h3>3. Điện cực so sánh</h3>
      <p>Điện cực so sánh có thế <b>không đổi</b>, không phụ thuộc dung dịch đo.</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Điện cực</th><th>Cấu tạo</th><th>E so với SHE (25 °C)</th></tr></thead>
          <tbody>
            <tr><td>Hydro chuẩn (SHE)</td><td>Pt | H<sub>2</sub> (1 bar) | H<sup>+</sup> (a = 1)</td><td>0,000 V (quy ước)</td></tr>
            <tr><td>Bạc – bạc clorid</td><td>Ag | AgCl | KCl bão hòa</td><td>0,197 V</td></tr>
            <tr><td>Calomen bão hòa (SCE)</td><td>Hg | Hg<sub>2</sub>Cl<sub>2</sub> | KCl bão hòa</td><td>0,241 V</td></tr>
          </tbody>
        </table>
      </div>
      <p>Đổi thế đo so với điện cực so sánh này sang điện cực khác: E(so với SCE) = E(so với SHE) − 0,241 V.</p>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 132" role="img" aria-label="Trục thế so sánh SHE, Ag/AgCl bão hòa và SCE trên cùng thang đo so với SHE">
          <defs>
            <marker id="dh-mt" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--chu-phu)"/>
            </marker>
          </defs>
          <text x="160" y="13" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">Trục thế so sánh (V so với SHE)</text>

          <line x1="30" y1="66" x2="292" y2="66" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#dh-mt)"/>
          <text x="296" y="70" font-size="10" fill="var(--chu-phu)">E</text>

          <line x1="67" y1="56" x2="67" y2="76" stroke="var(--chu-phu)" stroke-width="1.2"/>
          <circle cx="67" cy="66" r="4" fill="var(--mau-chinh)"/>
          <text x="67" y="48" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">SHE</text>
          <text x="67" y="90" text-anchor="middle" font-size="10" fill="var(--chu-phu)">0,000 V</text>

          <line x1="214" y1="56" x2="214" y2="76" stroke="var(--chu-phu)" stroke-width="1.2"/>
          <circle cx="214" cy="66" r="4" fill="var(--mau-chinh)"/>
          <text x="214" y="98" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">Ag/AgCl</text>
          <text x="214" y="112" text-anchor="middle" font-size="10" fill="var(--chu-phu)">+0,197 V</text>

          <line x1="246" y1="56" x2="246" y2="76" stroke="var(--chu-phu)" stroke-width="1.2"/>
          <circle cx="246" cy="66" r="4" fill="var(--mau-chinh)"/>
          <text x="246" y="48" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">SCE</text>
          <text x="246" y="34" text-anchor="middle" font-size="10" fill="var(--chu-phu)">+0,241 V</text>
        </svg>
        <p class="chu-thich">Đổi thang: E(so với X) = E(so với SHE) − E(X so với SHE).</p>
      </div>
      <div class="vi-du"><b>Ví dụ 2.</b> Một điện cực có thế 0,500 V so với SHE. Thế của nó so với SCE và so với Ag/AgCl (KCl bão hòa) là bao nhiêu?
        <details><summary>Xem lời giải</summary>
          So với SCE: 0,500 − 0,241 = <b>0,259 V</b>. So với Ag/AgCl: 0,500 − 0,197 = <b>0,303 V</b>.
        </details></div>

      <h3>4. Điện cực chỉ thị</h3>
      <ul>
        <li><b>Điện cực kim loại</b>: kim loại nhúng trong dung dịch ion của nó, ví dụ Ag nhúng trong Ag<sup>+</sup>: E = 0,80 + 0,059 lg[Ag<sup>+</sup>]. Dùng trong chuẩn độ kết tủa (Chương 8).</li>
        <li><b>Điện cực trơ</b> (Pt, Au, cacbon): nhận thế của cặp oxi hóa – khử trong dung dịch, dùng trong chuẩn độ oxi hóa – khử (Chương 9).</li>
        <li><b>Điện cực màng chọn lọc ion</b> (ISE): màng chỉ cho một loại ion trao đổi, tạo thế màng phụ thuộc hoạt độ ion đó (mục 5, 6).</li>
      </ul>

      <h3>5. Điện cực chọn lọc ion (ISE)</h3>
      <div class="cong-thuc"><div class="nhan">Ion i có điện tích z (kể cả dấu), 25 °C; K là hằng số của điện cực</div>\[ E = K + \frac{0,059}{z}\lg\mathcal{A}_i \]</div>
      <ul>
        <li>Phương trình viết cho E = E<sub>ISE</sub> − E<sub>so sánh</sub> (ISE nối cực + của máy đo). Hằng số K gộp thế của điện cực so sánh và <b>thế tiếp xúc lỏng</b> ở cầu muối.
          <br>— <i>Vì sao có thế tiếp xúc lỏng</i>: ở chỗ hai dung dịch khác nồng độ/thành phần tiếp xúc nhau qua cầu muối, các ion khuếch tán qua ranh giới với <b>tốc độ khác nhau</b> (linh độ ion khác nhau); điện tích dương và âm tách nhau một chút tạo ra một hiệu thế nhỏ. Thế này thay đổi theo thành phần dung dịch đo nên là nguồn sai số hệ thống chính của phép đo thế trực tiếp (thường cỡ ±0,02 đơn vị pH, tức khoảng ±1 mV cho ISE hóa trị 1).</li>
        <li>Độ dốc lí thuyết: 59 mV khi hoạt độ ion hóa trị 1 thay đổi 10 lần, 29,5 mV với ion hóa trị 2. Với anion (z âm), thế giảm khi nồng độ tăng.</li>
        <li>Các loại màng: thủy tinh (H<sup>+</sup>, Na<sup>+</sup>), tinh thể (F<sup>−</sup> dùng màng đơn tinh thể LaF<sub>3</sub> pha tạp Eu<sup>2+</sup> để tăng độ dẫn ion), màng lỏng/polymer chứa chất mang ion (Ca<sup>2+</sup>, K<sup>+</sup>, NO<sub>3</sub><sup>−</sup>).</li>
        <li>ISE đáp ứng theo <b>hoạt độ</b>. Để đo nồng độ, thêm dung dịch điều chỉnh lực ion (TISAB) như nhau vào mẫu và chuẩn. TISAB của điện cực F<sup>−</sup> còn giữ pH khoảng 5 – 5,5 (tránh HF và OH<sup>−</sup>) và chứa chất tạo phức giải phóng F<sup>−</sup> khỏi Al<sup>3+</sup>, Fe<sup>3+</sup>.</li>
      </ul>
      <p><b>Hệ số chọn lọc và phương trình Nikolsky – Eisenman</b>: khi có ion lạ X cùng dấu điện tích với ion cần đo A, thế điện cực không chỉ phụ thuộc A mà còn phụ thuộc X:</p>
      <div class="cong-thuc"><div class="nhan">z<sub>A</sub>: điện tích ion A; k<sub>A,X</sub>: hệ số chọn lọc; z<sub>X</sub>: điện tích ion X</div>\[ E = K + \frac{0,059}{z_\mathrm{A}}\lg\!\left(\mathcal{A}_\mathrm{A} + k_{\mathrm{A,X}}\,\mathcal{A}_\mathrm{X}^{\,z_\mathrm{A}/z_\mathrm{X}}\right) \]</div>
      <p>k<sub>A,X</sub> càng nhỏ (thường ≪ 1) thì ion lạ X càng ít cản trở phép đo A. Ví dụ điện cực F<sup>−</sup> có k đối với OH<sup>−</sup> khá lớn ở pH cao (vì OH<sup>−</sup> cùng kích thước, cạnh tranh vào màng LaF<sub>3</sub>), đây là lí do TISAB phải khống chế pH dưới khoảng 8.</p>
      <div class="vi-du"><b>Ví dụ 3.</b> Điện cực F<sup>−</sup> cho E = 0,100 V trong chuẩn F<sup>−</sup> 1,00·10<sup>−3</sup> M và E = 0,159 V trong mẫu (cùng TISAB). Tính [F<sup>−</sup>] trong mẫu.
        <details><summary>Xem lời giải</summary>
          Với F<sup>−</sup>, z = −1: E = K − 0,059 lg[F<sup>−</sup>]. Trừ hai phương trình:
          \[ \begin{aligned} \lg[\mathrm{F^-}]_x &= \lg\left(1,00\cdot10^{-3}\right) \\ &\quad - \frac{0,159 - 0,100}{0,059} \\ &= -3,00 - 1,00 = -4,00 \end{aligned} \]
          [F<sup>−</sup>] = <b>1,0·10<sup>−4</sup> M</b>. Thế tăng 59 mV ứng với nồng độ anion giảm 10 lần.
        </details></div>
      <p><b>Thêm chuẩn với ISE</b>: cách này tránh phải pha một dãy chuẩn riêng và tự bù ảnh hưởng nền của mẫu, hay dùng khi mẫu chỉ có sẵn lượng nhỏ (ví dụ dịch chiết). Thêm V<sub>s</sub> dung dịch chuẩn nồng độ C<sub>s</sub> vào V<sub>x</sub> mL mẫu, đo thế trước (E<sub>1</sub>) và sau khi thêm (E<sub>2</sub>); đặt ΔE = E<sub>2</sub> − E<sub>1</sub> và S là độ dốc điện cực (âm cho anion, dương cho cation, đơn vị V):</p>
      <div class="cong-thuc"><div class="nhan">C<sub>x</sub>: nồng độ ion cần tìm trong V<sub>x</sub> mL mẫu ban đầu</div>\[ C_x = \frac{C_s V_s}{(V_x+V_s)\,10^{\Delta E/S} - V_x} \]</div>
      <p class="luu-y">Với <b>anion</b>, S mang dấu âm (S = −0,059/|z|): thêm chuẩn làm tăng nồng độ ion nên thế <i>giảm</i>, tức ΔE &lt; 0. Với <b>cation</b>, S dương và ΔE &gt; 0. Dùng nhầm dấu của S là lỗi hay gặp nhất khi tính công thức này.</p>
      <div class="vi-du"><b>Ví dụ 4.</b> Xác định F<sup>−</sup> trong kem đánh răng. Cân 0,3020 g kem đánh răng, hòa tan cùng TISAB và định mức thành 50,0 mL; lấy toàn bộ 50,0 mL này (V<sub>x</sub>) cho vào cốc, điện cực F<sup>−</sup> cho E<sub>1</sub> = −100,0 mV. Thêm V<sub>s</sub> = 0,500 mL chuẩn F<sup>−</sup> 1,00·10<sup>−2</sup> M, đo được E<sub>2</sub> = −105,2 mV. Tính %F<sup>−</sup> và %NaF trong kem đánh răng (M<sub>F</sub> = 19,00; M<sub>NaF</sub> = 41,99).
        <details><summary>Xem lời giải</summary>
          F<sup>−</sup> là anion hóa trị 1 nên S = −0,05916 V (dùng độ dốc lí thuyết vì đề không cho độ dốc thực); ΔE = −0,1052 − (−0,1000) = −0,0052 V:
          \[ 10^{\Delta E/S} = 10^{\,-0,0052/-0,05916} = 1,224 \]
          \[ \begin{aligned} C_x &= \frac{1,00\cdot10^{-2}\times0,500}{(50,0+0,500)\times1,224 - 50,0} \\ &= \mathbf{4,23\cdot10^{-4}\ M} \end{aligned} \]
          Đây cũng là nồng độ F<sup>−</sup> trong 50,0 mL dung dịch mẫu (V<sub>x</sub> lấy toàn bộ, không pha loãng thêm):
          \[ \begin{aligned} m_{\mathrm{F^-}} &= 4,23\cdot10^{-4}\times19,00\times\frac{50,0}{1000} \\ &= 4,02\cdot10^{-4}\ \mathrm{g} \\ \%\mathrm{F^-} &= \frac{4,02\cdot10^{-4}}{0,3020}\times100 = \mathbf{0,133\%} \end{aligned} \]
          Quy ra %NaF (nhân theo tỉ lệ khối lượng mol M<sub>NaF</sub>/M<sub>F</sub>):
          \[ \%\mathrm{NaF} = 0,133\times\frac{41,99}{19,00} = \mathbf{0,294\%} \]
          Kết quả phù hợp với hàm lượng NaF thường gặp trong kem đánh răng (khoảng 0,2 – 0,3%).
        </details></div>

      <h3>6. Đo pH bằng điện cực thủy tinh</h3>
      <p>Điện cực thủy tinh có màng thủy tinh mỏng, trao đổi H<sup>+</sup> với dung dịch; thường ghép chung với điện cực so sánh Ag/AgCl thành <b>điện cực tổ hợp</b> (combination electrode) để chỉ cần nhúng một đầu dò vào mẫu. Điện cực tổ hợp gồm hai ống lồng nhau: ống trong chứa dây Ag/AgCl nhúng trong dung dịch đệm pH cố định (có Cl<sup>−</sup> cố định), tận cùng là <b>bầu thủy tinh mỏng</b> nhạy với H<sup>+</sup>; ống ngoài chứa dây Ag/AgCl thứ hai nhúng trong dung dịch KCl bão hòa (hoặc gel KCl) làm điện cực so sánh ngoài, tiếp xúc với dung dịch đo qua một <b>cầu nối xốp</b> (gốm hoặc sợi) — chính chỗ này sinh ra thế tiếp xúc lỏng đã nói ở mục 5.</p>
      <div class="hinh-tinh">
        <svg viewBox="0 0 345 250" role="img" aria-label="Mặt cắt điện cực thủy tinh tổ hợp: điện cực trong, điện cực ngoài, màng thủy tinh liền thân và cầu nối xốp trên thành ống ngoài">
          <text x="160" y="10" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">Điện cực thủy tinh (tổ hợp)</text>

          <rect x="100" y="20" width="120" height="174" rx="12" fill="color-mix(in srgb, var(--vang) 10%, var(--the))" stroke="var(--vien)" stroke-width="1.2"/>

          <path d="M140,36 L140,196 Q140,212 150,220 Q160,228 170,220 Q180,212 180,196 L180,36 Z" fill="color-mix(in srgb, var(--mau-chinh) 12%, var(--the))" stroke="var(--mau-chinh)" stroke-width="1.2"/>

          <line x1="160" y1="24" x2="160" y2="54" stroke="var(--chu-phu)" stroke-width="1.3"/>
          <circle cx="160" cy="54" r="5" fill="var(--chu)"/>
          <line x1="118" y1="24" x2="118" y2="66" stroke="var(--chu-phu)" stroke-width="1.3"/>
          <circle cx="118" cy="66" r="5" fill="var(--chu)"/>

          <circle cx="217" cy="172" r="4.5" fill="var(--the)" stroke="var(--xanh)" stroke-width="1.3"/>

          <line x1="160" y1="54" x2="234" y2="54" stroke="var(--chu-phu)" stroke-width="0.9" stroke-dasharray="2 2"/>
          <text x="238" y="58" font-size="10" fill="var(--chu)">Ag/AgCl (trong)</text>

          <line x1="160" y1="110" x2="234" y2="110" stroke="var(--chu-phu)" stroke-width="0.9" stroke-dasharray="2 2"/>
          <text x="238" y="104" font-size="10" fill="var(--chu)">Đệm nội,</text>
          <text x="238" y="116" font-size="10" fill="var(--chu)">Cl⁻ cố định</text>

          <line x1="118" y1="66" x2="20" y2="66" stroke="var(--chu-phu)" stroke-width="0.9" stroke-dasharray="2 2"/>
          <text x="16" y="60" font-size="10" text-anchor="start" fill="var(--chu)">Ag/AgCl</text>
          <text x="16" y="72" font-size="10" text-anchor="start" fill="var(--chu)">(điện cực ngoài)</text>

          <line x1="103" y1="150" x2="20" y2="150" stroke="var(--chu-phu)" stroke-width="0.9" stroke-dasharray="2 2"/>
          <text x="16" y="144" font-size="10" text-anchor="start" fill="var(--chu)">KCl bão hòa</text>
          <text x="16" y="156" font-size="10" text-anchor="start" fill="var(--chu)">(hoặc gel)</text>

          <line x1="220" y1="172" x2="252" y2="172" stroke="var(--chu-phu)" stroke-width="0.9" stroke-dasharray="2 2"/>
          <text x="256" y="166" font-size="10" fill="var(--chu)">Cầu nối xốp</text>
          <text x="256" y="178" font-size="10" fill="var(--chu)">(tiếp xúc lỏng)</text>

          <line x1="160" y1="224" x2="234" y2="224" stroke="var(--chu-phu)" stroke-width="0.9" stroke-dasharray="2 2"/>
          <text x="238" y="220" font-size="10" fill="var(--chu)">Màng thủy tinh</text>
          <text x="238" y="232" font-size="10" fill="var(--chu)">(nhạy với H⁺, liền</text>
          <text x="238" y="244" font-size="10" fill="var(--chu)">thân ống trong)</text>
        </svg>
        <p class="chu-thich">Ống trong chứa dây Ag/AgCl và dung dịch đệm nội, thu hẹp liền mạch thành bầu thủy tinh ở đáy. Ống ngoài chứa dây Ag/AgCl thứ hai trong KCl bão hòa, thông với dung dịch đo qua cầu nối xốp trên thành ống.</p>
      </div>
      <p>Đáp ứng ở 25 °C:</p>
      <div class="cong-thuc">\[ E = K - 0,059\,\mathrm{pH} \]</div>
      <p>K thay đổi theo từng điện cực và theo thời gian, độ dốc thực cũng thường chỉ đạt 95 – 100% giá trị lí thuyết 0,059 V, nên phải <b>hiệu chuẩn</b> bằng dung dịch đệm chuẩn trước khi đo, thường dùng 2 đệm bao quanh pH mẫu (ví dụ 4,01 và 7,00, hoặc 7,00 và 10,01): đệm thứ nhất xác định K, đệm thứ hai xác định độ dốc thực.</p>
      <div class="cong-thuc"><div class="nhan">Đo so với một đệm chuẩn (giả định độ dốc lí thuyết)</div>\[ \mathrm{pH}_x = \mathrm{pH}_\text{chuẩn} + \frac{E_\text{chuẩn} - E_x}{0,059} \]</div>
      <div class="vi-du"><b>Ví dụ 5.</b> Trong đệm pH 4,00 đo được E = 0,250 V; trong mẫu đo được E = 0,132 V. Tính pH mẫu.
        <details><summary>Xem lời giải</summary>
          \[ \mathrm{pH}_x = 4,00 + \frac{0,250 - 0,132}{0,059} = \mathbf{6,00} \]
        </details></div>
      <p><b>Hiệu chuẩn 2 điểm và độ dốc thực</b>: đo thế trong hai đệm chuẩn pH<sub>1</sub>, pH<sub>2</sub> (E<sub>1</sub>, E<sub>2</sub>), tính độ dốc thực S và so với độ dốc Nernst lí thuyết S<sub>Nernst</sub> = 0,05916 V (25 °C) để biết điện cực còn tốt không (thường chấp nhận nếu %Nernst ≥ 95%):</p>
      <div class="cong-thuc"><div class="nhan">S: độ dốc thực (V/đơn vị pH)</div>\[ \begin{gathered} S = \frac{E_1 - E_2}{\mathrm{pH}_2 - \mathrm{pH}_1} \\ \%\text{Nernst} = \frac{S}{0,05916}\times100\% \\ \mathrm{pH}_x = \mathrm{pH}_1 + \frac{E_1 - E_x}{S} \end{gathered} \]</div>
      <div class="vi-du"><b>Ví dụ 6.</b> Hiệu chuẩn máy đo pH bằng hai đệm chuẩn: pH 4,01 cho E<sub>1</sub> = 201,0 mV; pH 7,00 cho E<sub>2</sub> = 29,1 mV. Tính độ dốc thực, %Nernst. Mẫu đo được E<sub>x</sub> = 90,0 mV; tính pH mẫu.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} S &= \frac{0,2010 - 0,0291}{7,00 - 4,01} = \frac{0,1719}{2,99} \\ &= 0,05749\ \mathrm{V} = \mathbf{57,5\ mV} \\ \%\text{Nernst} &= \frac{0,0575}{0,05916}\times100 = \mathbf{97,2\%} \end{aligned} \]
          Độ dốc đạt 97,2% lí thuyết, điện cực còn dùng tốt (thường chấp nhận nếu ≥ 95%).
          \[ \mathrm{pH}_x = 4,01 + \frac{0,2010 - 0,0900}{0,0575} = \mathbf{5,94} \]
          Lỗi hay gặp: dùng thẳng độ dốc lí thuyết 0,059 (bỏ qua bước hiệu chuẩn 2 điểm) thay vì độ dốc thực 0,0575 vừa tính được, sẽ ra pH<sub>x</sub> = 4,01 + 0,1110/0,059 = <b>5,89</b> — lệch 0,05 đơn vị pH so với kết quả đúng (5,94); sai lệch càng lớn khi điện cực càng xuống cấp (%Nernst càng thấp).
        </details></div>
      <ul>
        <li><b>Sai số kiềm</b>: ở pH rất cao (&gt; 11) và có nhiều Na<sup>+</sup>, màng đáp ứng cả với Na<sup>+</sup>, pH đo được <b>thấp hơn</b> thật.</li>
        <li><b>Sai số acid</b>: ở pH rất thấp (&lt; 0,5), pH đo được <b>cao hơn</b> thật.</li>
        <li>Bảo quản: ngâm điện cực trong dung dịch bảo quản (KCl), không để khô, không lau mạnh màng thủy tinh; hiệu chuẩn ở cùng nhiệt độ với mẫu (độ dốc Nernst tỉ lệ thuận với nhiệt độ tuyệt đối T: 0,05916 V ở 25 °C nhưng tăng thành 0,05916×318,15/298,15 = 0,06313 V ở 45 °C).</li>
      </ul>

      <div class="mo-phong" data-loai="anh-that" data-anh="may-do-ph"></div>
      <h3>7. Chuẩn độ điện thế</h3>
      <p>Theo dõi thế của điện cực chỉ thị trong khi chuẩn độ, không cần chỉ thị màu (dùng được với dung dịch đục hoặc có màu). Điểm tương đương là <b>điểm uốn</b> của đường E theo V:</p>
      <ul>
        <li><b>Đạo hàm bậc 1</b>: ΔE/ΔV đạt cực đại tại điểm tương đương.</li>
        <li><b>Đạo hàm bậc 2</b>: Δ²E/ΔV² đổi dấu (bằng 0) tại điểm tương đương.</li>
        <li><b>Đồ thị Gran</b>: biến đổi số liệu trước điểm tương đương thành đường thẳng, kéo dài cắt trục V (Chương 6, mục 8).</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 7.</b> Số liệu gần điểm tương đương:
        <div class="bang-cuon"><table class="bang">
          <thead><tr><th>V (mL)</th><th>24,80</th><th>24,90</th><th>25,00</th><th>25,10</th><th>25,20</th><th>25,30</th></tr></thead>
          <tbody><tr><td>E (V)</td><td>0,412</td><td>0,431</td><td>0,468</td><td>0,559</td><td>0,596</td><td>0,612</td></tr></tbody>
        </table></div>
        Xác định V<sub>e</sub> bằng đạo hàm bậc 1 và bậc 2.
        <details><summary>Xem lời giải</summary>
          ΔE/ΔV tại các điểm giữa (V/mL): 24,85: 0,19; 24,95: 0,37; <b>25,05: 0,91</b>; 25,15: 0,37; 25,25: 0,16. Cực đại ở 25,05 mL.<br>
          Δ²E/ΔV²: tại 25,00: (0,91 − 0,37)/0,10 = +5,4; tại 25,10: (0,37 − 0,91)/0,10 = −5,4. Đổi dấu đúng giữa hai điểm → <b>V<sub>e</sub> = 25,05 mL</b>.
        </details></div>
      <p>Điện cực chỉ thị trong chuẩn độ oxi hóa – khử (điện cực Pt) thường được đo so với <b>SCE</b> chứ không phải SHE, vì SCE bền và tiện dùng hơn điện cực hydro chuẩn. Muốn so sánh với thế tính theo Nernst (vốn viết theo thang SHE), phải đổi thang như mục 3.</p>
      <div class="vi-du"><b>Ví dụ 8.</b> Chuẩn độ điện thế Cu<sup>+</sup> bằng Fe<sup>3+</sup> (Cu<sup>+</sup> + Fe<sup>3+</sup> → Cu<sup>2+</sup> + Fe<sup>2+</sup>), điện cực Pt đo so với SCE. Biết E<sup>0</sup>(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = 0,77 V; E<sup>0</sup>(Cu<sup>2+</sup>/Cu<sup>+</sup>) = 0,16 V (cả hai n = 1). Tính thế đo được (so với SCE) tại điểm tương đương.
        <details><summary>Xem lời giải</summary>
          Tại điểm tương đương, vì n<sub>1</sub> = n<sub>2</sub> = 1 (Chương 9, mục 2), tính E<sub>tđ</sub> so với SHE:
          \[ E_\text{tđ} = \frac{1\times0,77 + 1\times0,16}{1+1} = \mathbf{0,465\ V} \] (so với SHE).
          Đổi sang thang SCE (trừ 0,241 V vì SCE dương hơn SHE):
          \[ E_\text{tđ} = 0,465 - 0,241 = \mathbf{0,224\ V} \] (so với SCE) — đây là giá trị máy đo thực sự hiển thị; nếu quên đổi thang sẽ báo cáo nhầm 0,465 V.
        </details></div>

      <h3>8. Phương pháp điện lượng và von-ampe (giới thiệu)</h3>
      <p><b>Định luật Faraday</b>: lượng chất phản ứng ở điện cực tỉ lệ với điện lượng đi qua.</p>
      <div class="cong-thuc"><div class="nhan">Q = I·t (C); n: số electron trao đổi; F = 96 485 C/mol</div>\[ n_\text{chất} = \frac{Q}{nF} \qquad m = \frac{Q\,M}{nF} \]</div>
      <div class="vi-du"><b>Ví dụ 9.</b> Điện phân dung dịch Cu<sup>2+</sup> với dòng 0,100 A trong 600 s (hiệu suất 100%). Tính khối lượng Cu bám vào catot (M = 63,55).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} Q &= 0,100\cdot600 = 60,0\ \mathrm{C} \\ m &= \frac{60,0\cdot63,55}{2\cdot96\,485} \\ &= 0,0198\ \mathrm{g} = \mathbf{19,8\ mg} \end{aligned} \]
        </details></div>
      <p><b>Von-ampe</b>: áp một thế biến thiên lên điện cực làm việc và đo dòng. Dòng giới hạn tỉ lệ với nồng độ chất bị oxi hóa hoặc khử. Von-ampe hòa tan (làm giàu kim loại lên điện cực rồi hòa tan) xác định được kim loại nặng ở mức ppb.</p>

      <p class="luu-y"><b>Lỗi hay gặp:</b> quên đổi dấu số hạng logarit khi tính cho anion (thế <i>giảm</i> khi nồng độ anion <i>tăng</i>, ngược chiều với cation); dùng thẳng độ dốc lí thuyết 59,16 mV thay vì độ dốc thực vừa hiệu chuẩn bằng 2 đệm; quên thêm TISAB, hoặc thêm không cùng lượng vào mẫu và chuẩn khi đo ISE; đổi thế giữa các điện cực so sánh sai dấu (cộng thay vì trừ, hoặc nhầm chiều SHE → SCE); nhầm anot luôn là cực âm — thực ra anot là nơi xảy ra oxi hóa, dấu điện cực còn tùy pin Galvani hay bình điện phân; trong chuẩn độ điện thế bằng đạo hàm bậc 2, tưởng điểm tương đương là nơi Δ²E/ΔV² <i>lớn nhất</i> (thực ra là nơi nó <i>đổi dấu</i>, tức bằng 0 — thường phải nội suy giữa hai điểm đo có Δ²E/ΔV² trái dấu).</p>
`,
    baiTap: [
      {
        de: "Điện cực Ca<sup>2+</sup> (ISE) cho E = 0,215 V trong chuẩn Ca<sup>2+</sup> 1,00·10<sup>−3</sup> M. Mẫu (cùng lực ion) cho E = 0,186 V. Tính [Ca<sup>2+</sup>].",
        dapAn: "z = +2: E = K + (0,059/2) lg[Ca<sup>2+</sup>]<br>lg[Ca<sup>2+</sup>] = −3,00 + (0,186 − 0,215)/0,0295 = −3,98 → [Ca<sup>2+</sup>] = <b>1,0·10<sup>−4</sup> M</b>",
      },
      {
        de: "Máy đo pH được hiệu chuẩn bằng đệm pH 7,00 (E = −0,012 V). Mẫu cho E = 0,165 V. Tính pH mẫu.",
        dapAn: "pH = 7,00 + (−0,012 − 0,165)/0,059 = 7,00 − 3,00 = <b>4,00</b>",
      },
    ],
  },
  {
    id: "sac-ki",
    nhom: "Phân tích công cụ",
    icon: "📉",
    ten: "Sắc kí đại cương",
    moTa: "Pha tĩnh – pha động, cơ chế, t_R, k, N, H, Rs, α, Van Deemter, định lượng",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Hiểu nguyên tắc tách sắc kí, các cơ chế tương tác và cách phân loại.</li>
          <li>Tính các đại lượng trên sắc đồ: t<sub>R</sub>, t<sub>R</sub>', k, α, N, H, R<sub>s</sub>.</li>
          <li>Giải thích sự giãn rộng pic bằng phương trình Van Deemter và biết cách cải thiện độ phân giải.</li>
        </ul>
      </div>
      <h3>1. Sắc kí là gì?</h3>
      <p>Sắc kí là phương pháp <b>tách</b> các chất dựa trên sự phân bố khác nhau của chúng giữa <b>pha tĩnh</b> (cố định trong cột hoặc trên bản mỏng) và <b>pha động</b> (khí hoặc lỏng chảy qua pha tĩnh). Chất tương tác mạnh với pha tĩnh di chuyển chậm, ra khỏi cột muộn; chất tương tác yếu ra sớm. Detector ở cuối cột ghi tín hiệu theo thời gian, gọi là <b>sắc đồ</b>.</p>
      <p>Ví dụ ứng dụng: tách và định lượng đồng thời các vitamin B1, B2, B3, B6, B12 trong sữa bột bằng HPLC; caffeine và theobromine trong chocolate.</p>
      <p><b>Lịch sử</b>: M. Tswett (1906) tách sắc tố lá cây trên cột CaCO<sub>3</sub>, các vệt màu tách ra nên gọi là "sắc kí" (chroma: màu, graphein: viết). Martin và Synge nhận giải Nobel 1952 cho sắc kí phân bố.</p>

      <h3>2. Cơ chế tương tác và phân loại</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Cơ chế</th><th>Chất bị giữ lại do</th><th>Ví dụ</th></tr></thead>
          <tbody>
            <tr><td>Hấp phụ</td><td>Bám lên bề mặt chất rắn</td><td>Sắc kí lỏng – rắn trên silica, TLC</td></tr>
            <tr><td>Phân bố</td><td>Hòa tan vào lớp lỏng phủ trên chất mang</td><td>GC mao quản, HPLC pha đảo C18</td></tr>
            <tr><td>Trao đổi ion</td><td>Lực hút tĩnh điện với nhóm mang điện trên nhựa</td><td>Sắc kí ion (anion, cation)</td></tr>
            <tr><td>Loại theo kích thước</td><td>Phân tử nhỏ lọt vào lỗ xốp nên đi đường dài hơn; phân tử lớn ra trước</td><td>Tách protein, polymer</td></tr>
          </tbody>
        </table>
      </div>
      <p>Nguyên tắc chung "các chất giống nhau hòa tan tốt trong nhau": chất phân cực bị giữ mạnh trên pha tĩnh phân cực, chất không phân cực bị giữ mạnh trên pha tĩnh không phân cực.</p>
      <ul>
        <li><b>Theo pha động</b>: sắc kí khí (GC), sắc kí lỏng (LC, HPLC), sắc kí lỏng siêu tới hạn (SFC, pha động CO<sub>2</sub> siêu tới hạn).</li>
        <li><b>Theo hình dạng</b>: sắc kí cột; sắc kí phẳng (sắc kí lớp mỏng TLC, sắc kí giấy).</li>
      </ul>

      <h3>3. Sắc đồ và các đại lượng lưu giữ</h3>
      <ul>
        <li><b>Thời gian lưu t<sub>R</sub></b>: từ lúc tiêm mẫu đến đỉnh pic. Dùng để <b>định tính</b> (so với chuẩn trong cùng điều kiện).</li>
        <li><b>Thời gian chết t<sub>m</sub></b>: thời gian lưu của chất không bị pha tĩnh giữ lại (bằng thời gian pha động đi hết cột).</li>
        <li><b>Chiều cao, diện tích pic</b>: dùng để <b>định lượng</b>.</li>
      </ul>
      <div class="cong-thuc"><div class="nhan">Thời gian lưu hiệu chỉnh và thể tích lưu (F: tốc độ dòng pha động)</div>\[ \begin{gathered} t_R' = t_R - t_m \\ V_R = F\,t_R \qquad V_R' = F\,t_R' \end{gathered} \]</div>
      <div class="cong-thuc"><div class="nhan">Hệ số lưu k (K: hệ số phân bố; V<sub>s</sub>, V<sub>m</sub>: thể tích pha tĩnh, pha động)</div>\[ k = \frac{t_R - t_m}{t_m} = K\,\frac{V_s}{V_m} \]</div>
      <p>k cho biết chất ở trong pha tĩnh lâu gấp bao nhiêu lần trong pha động. k quá nhỏ (&lt; 1): tách kém; k quá lớn (&gt; 10 – 20): pic ra muộn, rộng, tốn thời gian.</p>
      <div class="vi-du"><b>Ví dụ 1.</b> Acid butyric có t<sub>R</sub> = 7,63 min, t<sub>m</sub> = 0,31 min. Tính t<sub>R</sub>' và k.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} t_R' &= 7,63 - 0,31 = 7,32\ \mathrm{min} \\ k &= \frac{7,32}{0,31} = \mathbf{24} \end{aligned} \]
          (t<sub>m</sub> chỉ có 2 chữ số có nghĩa nên k lấy 2 chữ số.)
        </details></div>

      <h3>4. Hiệu quả cột: thuyết đĩa lí thuyết</h3>
      <p>Coi cột gồm nhiều "đĩa" nối tiếp, mỗi đĩa là một bước cân bằng phân bố. Cột càng nhiều đĩa (N lớn) thì pic càng hẹp, tách càng tốt.</p>
      <div class="cong-thuc"><div class="nhan">w: độ rộng đáy pic; w<sub>1/2</sub>: độ rộng ở nửa chiều cao; L: chiều dài cột</div>\[ \begin{gathered} N = 16\left(\frac{t_R}{w}\right)^2 = 5,55\left(\frac{t_R}{w_{1/2}}\right)^2 \\ H = \frac{L}{N} \end{gathered} \]</div>
      <p>H là <b>chiều cao đĩa lí thuyết</b>: H càng nhỏ, cột càng hiệu quả. t<sub>R</sub> và w phải cùng đơn vị.</p>
      <div class="vi-du"><b>Ví dụ 2.</b> Hai chất A, B trên cột dài 3,2 m có t<sub>R,A</sub> = 280 s, w<sub>A</sub> = 14 s; t<sub>R,B</sub> = 300 s, w<sub>B</sub> = 15 s. Tính N, H và độ phân giải R<sub>s</sub>.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} N_A &= 16\left(\frac{280}{14}\right)^2 = 6\,400 \\ N_B &= 16\left(\frac{300}{15}\right)^2 = 6\,400 \\ H &= \frac{3,2\ \mathrm{m}}{6\,400} = 5,0\cdot10^{-4}\ \mathrm{m} \\ &= \mathbf{0,50\ mm} \\ R_s &= \frac{300 - 280}{(14 + 15)/2} = \mathbf{1,4} \end{aligned} \]
          R<sub>s</sub> &lt; 1,5 nên hai pic chưa tách hoàn toàn đến đường nền.<br>
          Nếu biết thêm t<sub>m</sub> = 40 s: k<sub>A</sub> = (280 − 40)/40 = 6,0; k<sub>B</sub> = (300 − 40)/40 = 6,5; α = 260/240 = <b>1,08</b>.
        </details></div>

      <h3>5. Độ phân giải và hệ số tách</h3>
      <div class="cong-thuc"><div class="nhan">Độ phân giải (w<sub>tb</sub>: độ rộng đáy trung bình của hai pic)</div>\[ R_s = \frac{\Delta t_R}{w_\text{tb}} = \frac{0,589\,\Delta t_R}{w_{1/2,\text{tb}}} \]</div>
      <div class="cong-thuc"><div class="nhan">Hệ số tách (độ chọn lọc), chất 2 ra sau chất 1</div>\[ \alpha = \frac{t_{R2}'}{t_{R1}'} = \frac{k_2}{k_1} \]</div>
      <ul>
        <li><b>R<sub>s</sub> ≥ 1,5</b>: hai pic tách hoàn toàn đến đường nền. R<sub>s</sub> = 1,0: chồng nhau khoảng 2%.</li>
        <li>α = 1 thì không thể tách dù cột tốt đến đâu; α càng lớn càng dễ tách.</li>
      </ul>
      <div class="cong-thuc"><div class="nhan">Phương trình Purnell: ba yếu tố quyết định độ phân giải</div>\[ R_s = \frac{\sqrt{N}}{4}\cdot\frac{\alpha - 1}{\alpha}\cdot\frac{k_2}{1 + k_2} \]</div>
      <p>Phương trình Purnell là công thức gần đúng (coi hai pic có độ rộng bằng nhau, tính theo k<sub>2</sub>), nên có thể lệch vài phần trăm so với R<sub>s</sub> tính trực tiếp từ sắc đồ. Muốn tăng R<sub>s</sub>: tăng N (cột dài hơn, hạt nhỏ hơn); tăng α (đổi pha tĩnh, pha động, nhiệt độ: hiệu quả nhất); tăng k đến khoảng 2 – 10. Vì R<sub>s</sub> tỉ lệ với √N, muốn tăng R<sub>s</sub> gấp đôi phải tăng N (chiều dài cột) gấp 4.</p>
      <div class="vi-du"><b>Ví dụ 3.</b> Hai chất có α = 1,05; k<sub>2</sub> = 5,0 trên cột có N = 10 000. Tính R<sub>s</sub>. Cần bao nhiêu đĩa để đạt R<sub>s</sub> = 1,5?
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} R_s &= \frac{\sqrt{10\,000}}{4}\cdot\frac{0,05}{1,05}\cdot\frac{5,0}{6,0} = \mathbf{0,99} \\ N &= 10\,000\left(\frac{1,5}{0,99}\right)^2 = \mathbf{2,3\cdot10^{4}} \end{aligned} \]
          Phải dùng cột dài gấp khoảng 2,3 lần, hoặc tìm điều kiện làm α tăng.
        </details></div>
      <div class="mo-phong" data-loai="sac-do"></div>

      <h3>6. Sự giãn rộng pic: phương trình Van Deemter</h3>
      <div class="cong-thuc"><div class="nhan">u: tốc độ dài của pha động</div>\[ H = A + \frac{B}{u} + C\,u \]</div>
      <ul>
        <li><b>A – khuếch tán xoáy</b>: các phân tử đi theo nhiều đường khác nhau qua các hạt nhồi. Phụ thuộc kích thước và độ đồng đều của hạt; bằng 0 với cột mao quản rỗng.</li>
        <li><b>B/u – khuếch tán dọc</b>: chất khuếch tán theo chiều dọc cột; càng lớn khi pha động chảy chậm và hệ số khuếch tán lớn (đáng kể trong GC).</li>
        <li><b>C·u – chuyển khối</b>: cần thời gian để chất đi vào và ra khỏi pha tĩnh; càng lớn khi pha động chảy nhanh, lớp pha tĩnh dày.</li>
      </ul>
      <p>Có một tốc độ tối ưu \( u_\text{opt} = \sqrt{B/C} \) cho H nhỏ nhất: \( H_\text{min} = A + 2\sqrt{BC} \).</p>
      <div class="vi-du"><b>Ví dụ 4.</b> Một cột có A = 0,10 mm; B = 1,0 mm²/s; C = 0,010 s. Tính tốc độ tối ưu và H nhỏ nhất.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} u_\text{opt} &= \sqrt{\frac{1,0}{0,010}} = \mathbf{10\ mm/s} \\ H_\text{min} &= 0,10 + 2\sqrt{1,0\cdot0,010} \\ &= \mathbf{0,30\ mm} \end{aligned} \]
        </details></div>
      <div class="mo-phong" data-loai="van-deemter"></div>

      <h3>7. Định tính và định lượng bằng sắc kí</h3>
      <ul>
        <li><b>Định tính</b>: so t<sub>R</sub> của pic trong mẫu với chuẩn trong cùng điều kiện; chắc chắn hơn khi thêm chuẩn vào mẫu (pic tăng lên mà không tách đôi), hoặc dùng detector cho thông tin cấu trúc (MS, DAD).</li>
        <li><b>Định lượng</b>: diện tích (hoặc chiều cao) pic tỉ lệ với lượng chất. Dùng đường chuẩn ngoại, thêm chuẩn, hoặc <b>nội chuẩn</b> để bù sai lệch thể tích tiêm (Chương 10, mục 6).</li>
      </ul>
    `,
    baiTap: [
      {
        de: "Trên một cột, t<sub>m</sub> = 1,20 min; chất X có t<sub>R</sub> = 6,00 min; chất Y có t<sub>R</sub> = 6,72 min. Tính k của X, k của Y và α.",
        dapAn: "k<sub>X</sub> = (6,00 − 1,20)/1,20 = <b>4,00</b>; k<sub>Y</sub> = (6,72 − 1,20)/1,20 = <b>4,60</b>; α = 4,60/4,00 = <b>1,15</b>",
      },
      {
        de: "Một pic có t<sub>R</sub> = 8,40 min và độ rộng nửa chiều cao 0,21 min trên cột dài 15 cm. Tính N và H.",
        dapAn: "N = 5,55 × (8,40/0,21)<sup>2</sup> = <b>8,9·10<sup>3</sup></b>; H = 150 mm/8 880 = <b>0,017 mm</b>",
      },
    ],
  },
  {
    id: "gc-hplc",
    nhom: "Phân tích công cụ",
    icon: "🧫",
    ten: "Sắc kí khí và sắc kí lỏng",
    moTa: "Sắc kí khí, HPLC pha thường – pha đảo, thiết bị, detector, thứ tự rửa giải",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Nắm nguyên tắc, phạm vi áp dụng và cấu tạo máy GC, HPLC.</li>
          <li>Dự đoán thứ tự rửa giải trong GC và HPLC pha thường, pha đảo.</li>
          <li>Chọn detector, loại cột và chế độ rửa giải phù hợp với bài toán; định lượng bằng đường chuẩn.</li>
        </ul>
      </div>
      <h3>1. Sắc kí khí (GC): nguyên tắc và phạm vi</h3>
      <p>Pha động là <b>khí trơ</b> (khí mang), pha tĩnh là chất rắn hoặc chất lỏng phủ trong cột. Mẫu được <b>hóa hơi</b> ở buồng tiêm rồi được khí mang đưa qua cột.</p>
      <ul>
        <li>Áp dụng cho chất <b>dễ bay hơi và bán bay hơi, bền nhiệt</b>, chủ yếu hữu cơ: dung môi tồn dư, tinh dầu, thuốc trừ sâu, hydrocarbon, chất béo (sau khi chuyển thành ester methyl).</li>
        <li>Chất khó bay hơi hoặc kém bền nhiệt phải được <b>dẫn xuất hóa</b> để tăng độ bay hơi và độ bền nhiệt, hoặc chuyển sang HPLC:</li>
      </ul>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Loại dẫn xuất</th><th>Phản ứng vào nhóm chức</th><th>Ví dụ thuốc thử</th></tr></thead>
          <tbody>
            <tr><td>Silyl hóa</td><td>Thay H linh động (–OH, –NH, –COOH) bằng –Si(CH<sub>3</sub>)<sub>3</sub></td><td>BSTFA, TMCS</td></tr>
            <tr><td>Acyl hóa</td><td>Acyl hóa –OH, –NH<sub>2</sub> thành ester/amide</td><td>Anhydrid acetic, PFPA</td></tr>
            <tr><td>Alkyl hóa (ester hóa)</td><td>–COOH thành ester methyl (dễ bay hơi hơn)</td><td>BF<sub>3</sub>/methanol, diazomethan</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>Sắc kí khí – rắn (hấp phụ): tách khí vô cơ, hydrocarbon mạch ngắn. Sắc kí khí – lỏng (phân bố): phổ biến nhất.</li>
      </ul>

      <h3>2. Thiết bị GC</h3>
      <p>Bình khí mang → bộ điều khiển dòng → buồng tiêm mẫu → cột (trong lò cột) → detector → hệ xử lí số liệu.</p>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 100" role="img" aria-label="Sơ đồ khối máy sắc kí khí: khí mang, buồng tiêm, lò cột, detector, xử lí số liệu">
          <defs>
            <marker id="gc-mt" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--chu-phu)"/>
            </marker>
          </defs>
          <text x="160" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">Sơ đồ khối máy sắc kí khí (GC)</text>

          <rect x="4" y="26" width="58" height="50" rx="6" fill="var(--the)" stroke="var(--vien)"/>
          <text x="33" y="44" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="33">Khí mang</tspan><tspan x="33" dy="12">+ bộ điều</tspan><tspan x="33" dy="12">áp/dòng</tspan></text>

          <rect x="68" y="26" width="58" height="50" rx="6" fill="var(--the)" stroke="var(--vien)"/>
          <text x="97" y="44" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="97">Buồng tiêm</tspan><tspan x="97" dy="12">(split/</tspan><tspan x="97" dy="12">splitless)</tspan></text>

          <rect x="132" y="26" width="58" height="50" rx="6" fill="color-mix(in srgb, var(--mau-chinh) 10%, var(--the))" stroke="var(--mau-chinh)"/>
          <path d="M141,38 q6,-7 12,0 q6,7 12,0 q6,-7 12,0" fill="none" stroke="var(--mau-chinh)" stroke-width="1.6"/>
          <text x="161" y="56" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="161">Lò cột</tspan><tspan x="161" dy="12">(mao quản)</tspan></text>

          <rect x="196" y="26" width="58" height="50" rx="6" fill="var(--the)" stroke="var(--vien)"/>
          <text x="225" y="54" text-anchor="middle" font-size="10" fill="var(--chu)">Detector</text>

          <rect x="260" y="26" width="56" height="50" rx="6" fill="var(--the)" stroke="var(--vien)"/>
          <text x="288" y="46" text-anchor="middle" font-size="10" fill="var(--chu)"><tspan x="288">Xử lí số</tspan><tspan x="288" dy="12">liệu (sắc</tspan><tspan x="288" dy="12">đồ)</tspan></text>

          <line x1="62" y1="51" x2="67" y2="51" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#gc-mt)"/>
          <line x1="126" y1="51" x2="131" y2="51" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#gc-mt)"/>
          <line x1="190" y1="51" x2="195" y2="51" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#gc-mt)"/>
          <line x1="254" y1="51" x2="259" y2="51" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#gc-mt)"/>
        </svg>
      </div>
      <ul>
        <li><b>Khí mang</b>: He, N<sub>2</sub>, H<sub>2</sub>, Ar; phải tinh khiết và khô.</li>
        <li><b>Tiêm mẫu</b>: bằng xi lanh hoặc bộ tiêm tự động vào buồng tiêm được gia nhiệt (hóa hơi mẫu tức thời). Có hai chế độ:
          <ul>
            <li><b>Chia dòng</b> (split): sau khi hóa hơi, chỉ một phần nhỏ dòng khí mang mang mẫu vào cột, phần lớn thoát ra ngoài qua van chia dòng. <b>Tỉ lệ chia dòng</b> (split ratio, dòng ra van : dòng vào cột) thường <b>10:1 đến 100:1</b>, có thể tới vài trăm:1 với mẫu rất đặc. Dùng cho mẫu đặc, tránh <b>quá tải cột</b> (pic doãng, kéo đuôi, mất độ phân giải).</li>
            <li><b>Không chia dòng</b> (splitless): van chia dòng đóng trong một khoảng thời gian đầu (thường 30 – 90 s, gọi là <i>splitless purge time</i>) để gần như toàn bộ mẫu đi vào cột, dùng cho phân tích vết. Sau đó phải mở van để đuổi hết hơi dung môi còn đọng trong buồng tiêm, nếu không dung môi dư sẽ làm doãng pic của các chất ra sớm.</li>
          </ul>
        </li>
      </ul>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 168" role="img" aria-label="So sánh buồng tiêm chế độ chia dòng và không chia dòng, mũi tên thể hiện lượng dòng khí">
          <defs>
            <marker id="gc-mt2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--mau-chinh)"/>
            </marker>
            <marker id="gc-mt3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--chu-phu)"/>
            </marker>
          </defs>
          <line x1="160" y1="20" x2="160" y2="152" stroke="var(--vien)" stroke-width="1" stroke-dasharray="2 3"/>

          <text x="80" y="11" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--chu)">CHIA DÒNG</text>
          <text x="10" y="26" font-size="9.5" fill="var(--chu-phu)">khí mang</text>
          <line x1="12" y1="30" x2="64" y2="42" stroke="var(--mau-chinh)" stroke-width="1.6" marker-end="url(#gc-mt2)"/>
          <text x="150" y="26" text-anchor="end" font-size="9.5" fill="var(--chu-phu)">tiêm mẫu</text>
          <line x1="148" y1="30" x2="96" y2="42" stroke="var(--mau-chinh)" stroke-width="1.6" marker-end="url(#gc-mt2)"/>
          <rect x="66" y="38" width="28" height="46" rx="3" fill="color-mix(in srgb, var(--mau-chinh) 8%, var(--the))" stroke="var(--vien)"/>
          <line x1="80" y1="86" x2="135" y2="110" stroke="var(--mau-chinh)" stroke-width="5" marker-end="url(#gc-mt2)"/>
          <text x="124" y="128" text-anchor="start" font-size="9.5" fill="var(--chu-phu)">ra van chia</text>
          <text x="124" y="140" text-anchor="start" font-size="9.5" fill="var(--chu-phu)">dòng (phần lớn)</text>
          <line x1="80" y1="86" x2="80" y2="132" stroke="var(--mau-chinh)" stroke-width="1.6" marker-end="url(#gc-mt2)"/>
          <text x="80" y="144" text-anchor="middle" font-size="9.5" fill="var(--chu-phu)">vào cột (ít)</text>

          <text x="240" y="11" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--chu)">KHÔNG CHIA DÒNG</text>
          <text x="170" y="26" text-anchor="start" font-size="9.5" fill="var(--chu-phu)">khí mang</text>
          <line x1="172" y1="30" x2="224" y2="42" stroke="var(--mau-chinh)" stroke-width="1.6" marker-end="url(#gc-mt2)"/>
          <text x="310" y="26" text-anchor="end" font-size="9.5" fill="var(--chu-phu)">tiêm mẫu</text>
          <line x1="308" y1="30" x2="256" y2="42" stroke="var(--mau-chinh)" stroke-width="1.6" marker-end="url(#gc-mt2)"/>
          <rect x="226" y="38" width="28" height="46" rx="3" fill="color-mix(in srgb, var(--mau-chinh) 8%, var(--the))" stroke="var(--vien)"/>
          <line x1="240" y1="86" x2="278" y2="98" stroke="var(--chu-phu)" stroke-width="1.3" stroke-dasharray="3 3"/>
          <text x="316" y="96" text-anchor="end" font-size="9.5" fill="var(--chu-phu)">van đóng</text>
          <text x="316" y="108" text-anchor="end" font-size="9.5" fill="var(--chu-phu)">(30–90 s đầu)</text>
          <line x1="240" y1="86" x2="240" y2="132" stroke="var(--chu-phu)" stroke-width="5" marker-end="url(#gc-mt3)"/>
          <text x="240" y="144" text-anchor="middle" font-size="9.5" fill="var(--chu-phu)">vào cột (gần hết mẫu)</text>
        </svg>
        <p class="chu-thich">Độ dày mũi tên ≈ lượng dòng khí; tỉ lệ chia dòng = dòng ra van : dòng vào cột (thường 10:1 – 100:1).</p>
      </div>
      <ul>
        <li><b>Cột nhồi</b>: ống kim loại/thủy tinh nhồi hạt, dung lượng mẫu lớn nhưng hiệu quả thấp.</li>
        <li><b>Cột mao quản</b>: ống silica nung chảy phủ polyimide bên ngoài, pha tĩnh phủ ở thành trong; đường kính trong 0,10 – 0,53 mm (thường 0,25 và 0,32 mm), dài 10 – 100 m (thường 30 m). Hiệu quả rất cao (khoảng 150 000 đĩa) nhưng dung lượng mẫu nhỏ.</li>
        <li><b>Pha tĩnh</b>: chọn theo độ phân cực của chất cần tách và nhiệt độ làm việc:</li>
      </ul>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Pha tĩnh</th><th>Thành phần</th><th>Độ phân cực</th><th>Nhiệt độ tối đa</th></tr></thead>
          <tbody>
            <tr><td>OV-1 / DB-1</td><td>100% dimethylpolysiloxan</td><td>Không phân cực</td><td>≈ 320 – 350 °C</td></tr>
            <tr><td>DB-5</td><td>5% phenyl, 95% methylpolysiloxan</td><td>Phân cực rất nhẹ</td><td>≈ 320 – 350 °C</td></tr>
            <tr><td>OV-17</td><td>50% phenyl methylpolysiloxan</td><td>Phân cực trung bình</td><td>≈ 300 °C</td></tr>
            <tr><td>Cyanopropylphenyl</td><td>Nhóm cyanopropyl</td><td>Phân cực mạnh</td><td>≈ 240 – 275 °C</td></tr>
            <tr><td>Carbowax (PEG)</td><td>Polyethylen glycol</td><td>Phân cực mạnh (có –OH)</td><td>≈ 250 – 260 °C</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Nhiệt độ tối đa là giá trị điển hình, khác nhau đôi chút giữa các hãng sản xuất; luôn tra catalogue cột thật khi làm việc.</p>
      <ul>
        <li><b>Nhiệt độ cột</b>: đẳng nhiệt (thường hơi thấp hơn nhiệt độ sôi của các chất), hoặc <b>chương trình nhiệt độ</b> (tăng dần) cho hỗn hợp có nhiệt độ sôi khác nhau nhiều: chất sôi thấp tách tốt ở đầu, chất sôi cao ra nhanh ở cuối, pic gọn hơn — nguyên lí tương tự rửa giải gradient trong HPLC (mục 6).</li>
      </ul>

      <div class="mo-phong" data-loai="anh-that" data-anh="may-gc"></div>
      <h3>3. Thứ tự rửa giải trong GC</h3>
      <ul>
        <li>Trên pha tĩnh <b>không phân cực</b>: các chất ra theo <b>nhiệt độ sôi tăng dần</b>.</li>
        <li>Khi pha tĩnh có độ phân cực: tương tác với pha tĩnh cũng quan trọng. Pha tĩnh không phân cực giữ chất không phân cực lâu hơn (chất phân cực ra trước nếu nhiệt độ sôi gần nhau); pha tĩnh phân cực giữ chất phân cực lâu hơn.</li>
      </ul>
      <div class="vi-du"><b>Ví dụ 1.</b> Hỗn hợp toluen, benzen, ethyl acetat hòa tan trong n-hexan được tách trên cột OV-17 (50% phenyl methylpolysiloxan, phân cực trung bình). Dự đoán thứ tự các pic. Nhiệt độ sôi: n-hexan 69 °C, ethyl acetat 77 °C, benzen 80,1 °C, toluen 110,6 °C.
        <details><summary>Xem lời giải</summary>
          Các chất này có độ phân cực không chênh nhau nhiều, nên ra chủ yếu theo nhiệt độ sôi: <b>n-hexan (dung môi) → ethyl acetat → benzen → toluen</b>.
        </details></div>

      <h3>4. Detector GC</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Detector</th><th>Nguyên tắc</th><th>Đối tượng, đặc điểm</th><th>LOD điển hình</th><th>Không đáp ứng với</th></tr></thead>
          <tbody>
            <tr><td>TCD (dẫn nhiệt)</td><td>Chất làm thay đổi độ dẫn nhiệt của khí mang</td><td>Vạn năng (cả khí vô cơ), không phá mẫu</td><td>≈ ng (kém nhạy nhất)</td><td>Chất có độ dẫn nhiệt gần bằng khí mang</td></tr>
            <tr><td>FID (ion hóa ngọn lửa)</td><td>Đốt chất hữu cơ trong ngọn lửa H<sub>2</sub>, đo dòng ion</td><td>Hợp chất có C–H; nhạy, khoảng tuyến tính rất rộng</td><td>≈ pg</td><td>H<sub>2</sub>O, CO<sub>2</sub>, CO, khí trơ, CS<sub>2</sub> (không có liên kết C–H)</td></tr>
            <tr><td>ECD (bắt electron)</td><td>Chất hút electron làm giảm dòng electron từ nguồn phóng xạ</td><td>Hợp chất halogen (thuốc trừ sâu clo hữu cơ, PCB): rất nhạy, chọn lọc</td><td>≈ fg (với hợp chất nhiều halogen)</td><td>Hydrocarbon không có nhóm hút electron (halogen, nitro, carbonyl liên hợp)</td></tr>
            <tr><td>NPD (nitơ – phospho)</td><td>Hạt muối kiềm nung nóng ion hóa chọn lọc hợp chất N, P</td><td>Thuốc trừ sâu phospho hữu cơ, dược chất chứa N</td><td>≈ pg</td><td>Hydrocarbon thường (không N, P)</td></tr>
            <tr><td>FPD (quang ngọn lửa)</td><td>Đo phát xạ của S, P trong ngọn lửa</td><td>Hợp chất lưu huỳnh, phospho</td><td>≈ pg (S, P)</td><td>Hợp chất không chứa S, P</td></tr>
            <tr><td>MS (khối phổ)</td><td>Ion hóa, tách ion theo m/z</td><td>Vừa định lượng vừa nhận danh cấu trúc (GC-MS)</td><td>≈ pg (scan), ≈ fg (SIM)</td><td>(hầu như đáp ứng mọi chất ion hóa được)</td></tr>
            <tr><td>FT-IR</td><td>Đo phổ hồng ngoại của từng pic khí</td><td>Nhận danh nhóm chức, phân biệt đồng phân (GC-IR)</td><td>≈ ng</td><td>Chất không có dao động IR đặc trưng</td></tr>
          </tbody>
        </table>
      </div>
      <p>Detector quyết định độ nhạy, độ chọn lọc, LOD và LOQ của phương pháp.</p>

      <h3>5. Sắc kí lỏng hiệu năng cao (HPLC): nguyên tắc và phân loại</h3>
      <p>Mẫu ở dạng lỏng; chất phân bố giữa pha tĩnh (hạt rất nhỏ nhồi trong cột) và pha động lỏng được bơm qua cột ở <b>áp suất cao</b>. HPLC áp dụng cho hầu hết các chất, bay hơi hoặc không, phân tử nhỏ đến rất lớn, kể cả chất kém bền nhiệt.</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Loại</th><th>Pha tĩnh</th><th>Pha động</th><th>Chất ra trước</th></tr></thead>
          <tbody>
            <tr><td>Pha thường (NP)</td><td>Phân cực (silica, –CN, –NH<sub>2</sub>)</td><td>Không phân cực (hexan...)</td><td>Chất <b>kém phân cực</b></td></tr>
            <tr><td>Pha đảo (RP), phổ biến nhất</td><td>Không phân cực (C18, C8)</td><td>Phân cực (nước – methanol, nước – acetonitril)</td><td>Chất <b>phân cực</b></td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><b>Sắc kí ion</b>: tách anion, cation trên nhựa trao đổi ion; dùng detector độ dẫn kèm <b>bộ triệt nền</b> (suppressor) để trung hòa hoặc loại ion của pha động, hạ nền tín hiệu và tăng độ nhạy.</li>
        <li><b>Sắc kí loại theo kích thước</b> (SEC): tách phân tử lớn (M &gt; 10 000) như protein, polymer; phân tử lớn ra trước (không lọt vào lỗ xốp của hạt nhồi). Đường chuẩn SEC là lg M theo thể tích lưu V<sub>R</sub> (gần như tuyến tính nghịch trong một khoảng M), dùng để ước lượng khối lượng phân tử của chất chưa biết từ V<sub>R</sub> đo được.</li>
        <li><b>Sắc kí chiral</b>: tách các đối quang (quan trọng trong dược phẩm).</li>
        <li><b>Sắc kí ái lực</b>: dựa trên tương tác sinh học đặc hiệu, tinh chế protein, kháng thể.</li>
      </ul>
      <p>Trong HPLC pha đảo, độ lưu giữ tăng theo <b>tính kị nước</b>: chất càng phân cực càng ra sớm. Tăng tỉ lệ dung môi hữu cơ trong pha động làm các chất ra nhanh hơn. Với chất có thể ion hóa (acid, base yếu), pH pha động ảnh hưởng mạnh đến độ lưu giữ trên C18: dạng <b>trung hòa</b> (không mang điện) kị nước hơn dạng ion nên bị giữ lâu hơn nhiều. Ví dụ dùng đệm phosphat pH 3 cho acid carboxylic (pK<sub>a</sub> ≈ 4 – 5): ở pH thấp hơn pK<sub>a</sub> nhiều, acid chủ yếu ở dạng phân tử HA (trung hòa) nên bị giữ lại trên C18 lâu hơn, cho pic gọn và tách tốt hơn so với để pH gần trung tính (khi đó acid ion hóa thành A<sup>−</sup>, ra rất sớm và có thể lẫn với các ion khác).</p>
      <div class="vi-du"><b>Ví dụ 2.</b> Caffeine (1,3,7-trimethylxanthin) và theobromine (3,7-dimethylxanthin) được tách trên cột C18, pha động nước – methanol. Chất nào ra trước?
        <details><summary>Xem lời giải</summary>
          Theobromine ít hơn caffeine một nhóm –CH<sub>3</sub> (có N–H tạo liên kết hydro), nên phân cực hơn, kém kị nước hơn. Trên cột pha đảo, <b>theobromine ra trước</b>, caffeine ra sau.
        </details></div>

      <h3>6. Thiết bị HPLC</h3>
      <p>Bình dung môi → bộ khử khí → bơm cao áp → bộ tiêm mẫu → (cột bảo vệ) → cột → detector → hệ xử lí số liệu.</p>
      <div class="mo-phong" data-loai="keo-tha-hplc"></div>
      <div class="mo-phong" data-loai="anh-that" data-anh="may-hplc"></div>
      <ul>
        <li><b>Bơm</b>: tạo dòng ổn định ở áp suất cao (có thể vài trăm bar). <b>Rửa giải đẳng dòng</b> (isocratic): thành phần pha động không đổi. <b>Rửa giải gradient</b>: tăng dần tỉ lệ dung môi mạnh, dùng cho hỗn hợp có độ lưu giữ khác nhau nhiều (tương tự chương trình nhiệt độ trong GC).</li>
        <li><b>Cột nhồi</b>: thép không gỉ, đường kính trong 2,1 – 4,6 mm, dài 30 – 300 mm, hạt silica xốp 3 – 10 µm (40 000 – 60 000 đĩa/m). Hạt càng nhỏ, cột càng hiệu quả nhưng áp suất càng cao (UHPLC dùng hạt dưới 2 µm).</li>
        <li><b>Cột mao quản</b>: silica nung chảy, đường kính trong 44 – 200 µm, dài 50 – 250 mm, hạt 3 – 5 µm (khoảng 250 000 đĩa/m), tốn rất ít dung môi và mẫu.</li>
        <li><b>Chuẩn bị mẫu</b>: luôn <b>lọc qua màng 0,45 µm</b> (hoặc 0,22 µm) trước khi tiêm để không nghẹt cột và đầu bơm; mẫu phức tạp (huyết tương, nước thải) thường được làm sạch và làm giàu bằng <b>chiết pha rắn</b> (SPE): cho mẫu qua cột nhỏ nhồi chất hấp phụ để giữ chất phân tích lại, rửa tạp chất, rồi rửa giải chất phân tích bằng dung môi thích hợp.</li>
      </ul>
      <p><b>Detector HPLC</b>:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Detector</th><th>Đối tượng</th><th>Ghi chú</th></tr></thead>
          <tbody>
            <tr><td>UV – Vis, dãy diode (DAD)</td><td>Chất hấp thụ UV – Vis</td><td>Phổ biến nhất; DAD ghi cả phổ để kiểm tra độ tinh khiết pic</td></tr>
            <tr><td>Huỳnh quang</td><td>Chất phát huỳnh quang (hoặc sau dẫn xuất hóa)</td><td>Rất nhạy, chọn lọc (ví dụ aflatoxin, vitamin B2)</td></tr>
            <tr><td>Chỉ số khúc xạ (RI)</td><td>Hầu như mọi chất (đường, polymer)</td><td>Vạn năng nhưng kém nhạy, không dùng được với gradient</td></tr>
            <tr><td>Độ dẫn điện</td><td>Ion</td><td>Dùng trong sắc kí ion</td></tr>
            <tr><td>Khối phổ (LC-MS)</td><td>Hầu hết các chất</td><td>Nhạy, chọn lọc, nhận danh cấu trúc</td></tr>
          </tbody>
        </table>
      </div>

      <h3>7. So sánh GC và HPLC</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Tiêu chí</th><th>GC</th><th>HPLC</th></tr></thead>
          <tbody>
            <tr><td>Pha động</td><td>Khí trơ, không tham gia tách</td><td>Lỏng, thành phần ảnh hưởng mạnh đến tách</td></tr>
            <tr><td>Đối tượng</td><td>Chất bay hơi, bền nhiệt</td><td>Hầu hết chất, kể cả không bay hơi, kém bền nhiệt</td></tr>
            <tr><td>Điều khiển tách</td><td>Nhiệt độ cột, loại pha tĩnh</td><td>Thành phần pha động, pH, loại pha tĩnh</td></tr>
            <tr><td>Hiệu quả cột</td><td>Rất cao (cột mao quản dài)</td><td>Cao (hạt nhỏ, cột ngắn)</td></tr>
          </tbody>
        </table>
      </div>
      <div class="mo-phong" data-loai="thu-tu-rua-giai"></div>

      <h3>8. Định lượng bằng sắc kí</h3>
      <p>Diện tích (hoặc chiều cao) pic tỉ lệ với lượng chất bơm vào, tương tự tín hiệu quang phổ. Có thể dùng ngoại chuẩn (đường chuẩn), thêm chuẩn, hoặc <b>nội chuẩn</b> để bù sai số thể tích tiêm và biến động của máy — cách tính hoàn toàn giống Chương 10, mục 6 (ví dụ nội chuẩn cho sắc kí đã có ở đó).</p>
      <div class="vi-du"><b>Ví dụ 3.</b> Xác định hàm lượng hoạt chất X trong một mẫu dược liệu bằng HPLC. Đường chuẩn (diện tích pic y theo nồng độ x, mg/mL): y = 1250 + 95 500x (R<sup>2</sup> tốt, đã trừ mẫu trắng). Cân 1,0568 g bột dược liệu, chiết và định mức thành 50,00 mL, lọc qua màng 0,45 µm rồi tiêm sắc kí, được diện tích pic A<sub>x</sub> = 62 480. Tính nồng độ hoạt chất X trong dung dịch và phần trăm khối lượng X trong mẫu.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} x &= \frac{A_x - 1250}{95\,500} = \frac{62\,480-1250}{95\,500} \\ &= 0,6412\ \mathrm{mg/mL} \end{aligned} \]
          Khối lượng X trong bình định mức 50,00 mL:
          \[ m_\mathrm{X} = 0,6412\times50,00 = 32,06\ \mathrm{mg} \]
          Phần trăm khối lượng trong mẫu (m<sub>mẫu</sub> = 1,0568 g = 1056,8 mg):
          \[ \%\mathrm{X} = \frac{32,06}{1056,8}\times100 = \mathbf{3,03\%} \]
          Lỗi hay gặp: quên nhân thể tích định mức 50,00 mL (chỉ báo cáo x = 0,6412 mg/mL là chưa xong bài); quên đổi khối lượng mẫu sang cùng đơn vị (mg) với m<sub>X</sub> trước khi lấy tỉ số.
        </details></div>
      <div class="vi-du"><b>Ví dụ 4.</b> Xác định hexanol (X) trong một mẫu bằng GC-FID, dùng nội chuẩn heptanol (S). Hỗn hợp chuẩn X 0,100 M và S 0,100 M cho diện tích pic A<sub>X</sub> = 850, A<sub>S</sub> = 910. Lấy 5,00 mL mẫu, thêm 1,00 mL S 0,200 M, định mức thành 10,00 mL; đo được A<sub>X</sub> = 620, A<sub>S</sub> = 780. Tính [X] trong mẫu ban đầu.
        <details><summary>Xem lời giải</summary>
          Hệ số đáp ứng F từ hỗn hợp chuẩn (công thức Chương 10, mục 6):
          \[ F = \frac{850/0,100}{910/0,100} = 0,934 \]
          Trong dung dịch đo: [S] = 0,200×1,00/10,00 = 0,0200 M:
          \[ \begin{aligned} [\mathrm{X}]_f &= \frac{A_\mathrm{X}}{A_\mathrm{S}}\cdot\frac{[\mathrm{S}]}{F} = \frac{620}{780}\cdot\frac{0,0200}{0,934} \\ &= 0,01702\ \mathrm{M} \end{aligned} \]
          Quy về mẫu ban đầu (pha loãng 10,00/5,00 = 2,00 lần):
          \[ [\mathrm{X}]_\text{mẫu} = 0,01702\times2,00 = \mathbf{0,0340\ M} \]
        </details></div>
      <p><b>Trả lời nhanh một số câu hay nhầm trong đề:</b></p>
      <ul>
        <li>C18 là pha tĩnh <b>không phân cực</b> (không phải phân cực); trong sắc kí pha đảo, chính <b>pha động</b> mới là thành phần phân cực.</li>
        <li>Detector UV – Vis trong HPLC đo <b>độ hấp thụ</b> (không phải phát xạ); detector huỳnh quang mới đo tín hiệu phát xạ.</li>
        <li>Tín hiệu trong AAS/AES (Chương 12) là tín hiệu <b>nguyên tử</b>; tín hiệu UV-Vis, huỳnh quang trong HPLC là tín hiệu <b>phân tử</b>.</li>
        <li>Thứ tự rửa giải của nitromethane (chỉ số phân cực P' ≈ 6,0), acetone (P' ≈ 5,1) và dichloromethane (P' ≈ 3,1): trên <b>pha đảo C18</b>, chất phân cực hơn ra trước → nitromethane → acetone → dichloromethane. Trên <b>pha thường</b> (silica), thứ tự đảo ngược: dichloromethane → acetone → nitromethane.</li>
      </ul>

      <p class="luu-y"><b>Lỗi hay gặp:</b> nhầm C18 là pha tĩnh phân cực; nhầm detector UV là đo phát xạ; chọn splitless cho mẫu đậm đặc (quá tải cột, pic doãng) hoặc chọn split cho phân tích vết (mất độ nhạy); quên hệ số pha loãng hoặc thể tích định mức khi đổi nồng độ đo được trên đường chuẩn sang % khối lượng trong mẫu ban đầu; dự đoán thứ tự rửa giải GC chỉ dựa vào nhiệt độ sôi mà quên xét độ phân cực khi pha tĩnh phân cực mạnh (Carbowax, cyanopropyl); nhầm SEC — phân tử <i>lớn</i> ra trước chứ không phải phân tử nhỏ.</p>
`,
    baiTap: [
      {
        de: "Cần xác định dư lượng thuốc trừ sâu clo hữu cơ ở mức vết trong rau. Chọn kĩ thuật sắc kí, chế độ tiêm và detector phù hợp.",
        dapAn: "<b>GC</b> (thuốc trừ sâu clo hữu cơ bay hơi được, bền nhiệt), tiêm <b>không chia dòng</b> (phân tích vết), detector <b>ECD</b> (rất nhạy với hợp chất halogen) hoặc GC-MS để khẳng định.",
      },
      {
        de: "Trên cột C18, pha động nước – methanol 50 : 50, thứ tự rửa giải của phenol, toluen và acid benzoic (ở pH 2,5) là gì? Nếu tăng methanol lên 70% thì thời gian lưu thay đổi thế nào?",
        dapAn: "Pha đảo: chất phân cực (log P nhỏ) ra trước: phenol (log P = 1,46) &lt; acid benzoic (1,87) &lt; toluen (2,73). Ở pH 2,5 (pK<sub>a</sub> = 4,19) acid benzoic khoảng 98% ở dạng phân tử. Thứ tự: <b>phenol → acid benzoic → toluen</b>. Tăng methanol làm pha động mạnh hơn: <b>mọi thời gian lưu đều giảm</b>.",
      },
    ],
  },
];

/* Bảng tra cứu (giá trị ở 25 °C, có thể lệch nhẹ giữa các tài liệu) */
const TRA_CUU = [
  {
    "id": "pka",
    "icon": "⚗️",
    "ten": "Hằng số acid vô cơ Ka, pKa",
    "cot": [
      "Acid",
      "K<sub>a</sub>",
      "pK<sub>a</sub>"
    ],
    "dong": [
      [
        "HF (acid fluorhydric) *",
        "7,1·10<sup>−4</sup>",
        "3,15"
      ],
      [
        "HOCl (acid hypochlorơ) *",
        "3,0·10<sup>−8</sup>",
        "7,52"
      ],
      [
        "NH<sub>4</sub><sup>+</sup> (ion amoni) *",
        "5,6·10<sup>−10</sup>",
        "9,25"
      ],
      [
        "HCN (acid cyanhydric) *",
        "4,9·10<sup>−10</sup>",
        "9,31"
      ],
      [
        "H<sub>2</sub>CO<sub>3</sub> (acid carbonic, CO<sub>2</sub> + H<sub>2</sub>O) *",
        "4,2·10<sup>−7</sup> ; 4,8·10<sup>−11</sup>",
        "6,38 ; 10,32"
      ],
      [
        "H<sub>3</sub>PO<sub>4</sub> (acid phosphoric) *",
        "7,5·10<sup>−3</sup> ; 6,2·10<sup>−8</sup> ; 4,8·10<sup>−13</sup>",
        "2,12 ; 7,21 ; 12,32"
      ],
      [
        "HSO<sub>4</sub><sup>−</sup> (ion hydrosulfate; nấc 2 của H<sub>2</sub>SO<sub>4</sub>)",
        "1,0·10<sup>−2</sup>",
        "1,99"
      ],
      [
        "HIO<sub>3</sub> (acid iodic)",
        "1,7·10<sup>−1</sup>",
        "0,77"
      ],
      [
        "HClO<sub>2</sub> (acid chlorơ)",
        "1,1·10<sup>−2</sup>",
        "1,96"
      ],
      [
        "HNO<sub>2</sub> (acid nitrơ)",
        "6,3·10<sup>−4</sup>",
        "3,198"
      ],
      [
        "HN<sub>3</sub> (acid azothydric)",
        "2,2·10<sup>−5</sup>",
        "4,65"
      ],
      [
        "HCrO<sub>4</sub><sup>−</sup> (ion hydrochromate; nấc 2 của H<sub>2</sub>CrO<sub>4</sub>)",
        "3,1·10<sup>−7</sup>",
        "6,51"
      ],
      [
        "H<sub>3</sub>BO<sub>3</sub> (acid boric)",
        "5,8·10<sup>−10</sup>",
        "9,237"
      ],
      [
        "H<sub>3</sub>AsO<sub>3</sub> (acid arsenơ)",
        "5,1·10<sup>−10</sup>",
        "9,29"
      ],
      [
        "H<sub>2</sub>O<sub>2</sub> (hydrogen peroxide)",
        "2,2·10<sup>−12</sup>",
        "11,65"
      ],
      [
        "H<sub>2</sub>SO<sub>3</sub> (acid sulfurơ, SO<sub>2</sub> + H<sub>2</sub>O)",
        "1,4·10<sup>−2</sup> ; 6,7·10<sup>−8</sup>",
        "1,857 ; 7,172"
      ],
      [
        "H<sub>5</sub>IO<sub>6</sub> (acid periodic)",
        "2,3·10<sup>−2</sup> ; 4,4·10<sup>−9</sup>",
        "1,64 ; 8,36"
      ],
      [
        "H<sub>4</sub>SiO<sub>4</sub> (acid silicic)",
        "1,4·10<sup>−10</sup> ; 6,3·10<sup>−14</sup>",
        "9,84 ; 13,2"
      ],
      [
        "H<sub>3</sub>AsO<sub>4</sub> (acid arsenic)",
        "5,8·10<sup>−3</sup> ; 1,1·10<sup>−7</sup> ; 3,2·10<sup>−12</sup>",
        "2,24 ; 6,96 ; 11,50"
      ],
      [
        "H<sub>4</sub>P<sub>2</sub>O<sub>7</sub> (acid diphosphoric, pyrophosphoric)",
        "1,5·10<sup>−1</sup> ; 5,5·10<sup>−3</sup> ; 1,9·10<sup>−7</sup> ; 3,5·10<sup>−10</sup>",
        "0,83 ; 2,26 ; 6,72 ; 9,46"
      ],
      [
        "H<sub>2</sub>S (acid sulfhydric)",
        "9,5·10<sup>−8</sup> ; ≈ 10<sup>−14</sup>",
        "7,02 ; ≈ 14"
      ]
    ],
    "ghiChu": "25 °C, μ = 0 (hằng số nhiệt động). Acid nhiều nấc ghi lần lượt K<sub>a1</sub> ; K<sub>a2</sub> ; … Acid mạnh (HCl, HBr, HI, HNO<sub>3</sub>, HClO<sub>4</sub>, nấc 1 của H<sub>2</sub>SO<sub>4</sub>) phân li hoàn toàn nên không ghi. Dòng có dấu * là giá trị <b>quy ước của bài giảng</b> (dùng thống nhất trong lí thuyết và bài tập của app), có thể lệch nhẹ so với sách. Khi đề bài cho hằng số, luôn dùng số của đề. Giá trị theo Harris của các dòng *: HF 3,17; HOCl 7,53; NH<sub>4</sub><sup>+</sup> 9,24; HCN 9,21; H<sub>2</sub>CO<sub>3</sub> 6,35 ; 10,33; H<sub>3</sub>PO<sub>4</sub> 2,15 ; 7,20 ; 12,38. pK<sub>a2</sub> của H<sub>2</sub>S rất không chắc (tài liệu cũ ghi ≈ 12,9). Nguồn: Harris, <i>Quantitative Chemical Analysis</i> (8th/9th ed.), Appendix G (dẫn từ Martell &amp; Smith, <i>Critical Stability Constants</i>)."
  },
  {
    "id": "pka-huu-co",
    "icon": "🍋",
    "ten": "Hằng số acid hữu cơ Ka, pKa",
    "cot": [
      "Acid",
      "K<sub>a</sub>",
      "pK<sub>a</sub>"
    ],
    "dong": [
      [
        "HCOOH (acid formic) *",
        "1,7·10<sup>−4</sup>",
        "3,77"
      ],
      [
        "CH<sub>3</sub>CH(OH)COOH (acid lactic) *",
        "1,4·10<sup>−4</sup>",
        "3,85"
      ],
      [
        "C<sub>6</sub>H<sub>5</sub>COOH (acid benzoic) *",
        "6,5·10<sup>−5</sup>",
        "4,19"
      ],
      [
        "CH<sub>3</sub>COOH (acid acetic) *",
        "1,8·10<sup>−5</sup> (quy ước 10<sup>−4,75</sup>)",
        "4,75"
      ],
      [
        "H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> (acid oxalic) *",
        "6,5·10<sup>−2</sup> ; 6,46·10<sup>−5</sup>",
        "1,19 ; 4,19"
      ],
      [
        "ClCH<sub>2</sub>COOH (acid chloroacetic)",
        "1,4·10<sup>−3</sup>",
        "2,865"
      ],
      [
        "HOCH<sub>2</sub>COOH (acid glycolic)",
        "1,5·10<sup>−4</sup>",
        "3,831"
      ],
      [
        "CH<sub>3</sub>CH<sub>2</sub>COOH (acid propanoic)",
        "1,3·10<sup>−5</sup>",
        "4,874"
      ],
      [
        "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COOH (acid butanoic)",
        "1,5·10<sup>−5</sup>",
        "4,818"
      ],
      [
        "HOC<sub>6</sub>H<sub>4</sub>COOH (acid salicylic, nhóm –COOH)",
        "1,1·10<sup>−3</sup>",
        "2,972"
      ],
      [
        "C<sub>6</sub>H<sub>5</sub>OH (phenol)",
        "1,0·10<sup>−10</sup>",
        "9,997"
      ],
      [
        "O<sub>2</sub>NC<sub>6</sub>H<sub>4</sub>OH (4-nitrophenol)",
        "7,1·10<sup>−8</sup>",
        "7,149"
      ],
      [
        "CH<sub>2</sub>(COOH)<sub>2</sub> (acid malonic)",
        "1,4·10<sup>−3</sup> ; 2,0·10<sup>−6</sup>",
        "2,847 ; 5,696"
      ],
      [
        "HOOC(CH<sub>2</sub>)<sub>2</sub>COOH (acid succinic)",
        "6,2·10<sup>−5</sup> ; 2,3·10<sup>−6</sup>",
        "4,207 ; 5,636"
      ],
      [
        "HOOCCH=CHCOOH (acid maleic, cis)",
        "1,2·10<sup>−2</sup> ; 5,4·10<sup>−7</sup>",
        "1,92 ; 6,27"
      ],
      [
        "HOOCCH<sub>2</sub>CH(OH)COOH (acid malic)",
        "3,5·10<sup>−4</sup> ; 8,0·10<sup>−6</sup>",
        "3,459 ; 5,097"
      ],
      [
        "HOOC(CHOH)<sub>2</sub>COOH (acid tartaric)",
        "9,2·10<sup>−4</sup> ; 4,3·10<sup>−5</sup>",
        "3,036 ; 4,366"
      ],
      [
        "C<sub>6</sub>H<sub>4</sub>(COOH)<sub>2</sub> (acid phthalic; KHP là dạng HA⁻)",
        "1,1·10<sup>−3</sup> ; 3,9·10<sup>−6</sup>",
        "2,950 ; 5,408"
      ],
      [
        "C<sub>6</sub>H<sub>8</sub>O<sub>6</sub> (acid ascorbic, vitamin C)",
        "7,9·10<sup>−5</sup> ; 1,6·10<sup>−12</sup>",
        "4,10 ; 11,79"
      ],
      [
        "C<sub>3</sub>H<sub>4</sub>(OH)(COOH)<sub>3</sub> (acid citric)",
        "7,4·10<sup>−4</sup> ; 1,7·10<sup>−5</sup> ; 4,0·10<sup>−7</sup>",
        "3,128 ; 4,761 ; 6,396"
      ],
      [
        "H<sub>6</sub>Y<sup>2+</sup> (EDTA, μ = 0,1 M)",
        "1 ; 3·10<sup>−2</sup> ; 1,0·10<sup>−2</sup> ; 2,0·10<sup>−3</sup> ; 7,4·10<sup>−7</sup> ; 4,3·10<sup>−11</sup>",
        "0,0 ; 1,5 ; 2,00 ; 2,69 ; 6,13 ; 10,37"
      ]
    ],
    "ghiChu": "25 °C, μ = 0 (trừ EDTA: μ = 0,1 M). Acid nhiều nấc ghi lần lượt K<sub>a1</sub> ; K<sub>a2</sub> ; … Dòng có dấu * là giá trị <b>quy ước của bài giảng</b> (dùng thống nhất trong lí thuyết và bài tập của app), có thể lệch nhẹ so với sách. Khi đề bài cho hằng số, luôn dùng số của đề. Giá trị theo Harris của các dòng *: HCOOH 3,74; lactic 3,86; benzoic 4,20; CH<sub>3</sub>COOH 4,76; oxalic 1,25 ; 4,27. Nguồn: Harris, <i>Quantitative Chemical Analysis</i> (8th/9th ed.), Appendix G."
  },
  {
    "id": "pka-amin",
    "icon": "🐟",
    "ten": "Ka của ion amoni (acid liên hợp của amin)",
    "cot": [
      "Acid BH<sup>+</sup>",
      "K<sub>a</sub>",
      "pK<sub>a</sub>"
    ],
    "dong": [
      [
        "NH<sub>4</sub><sup>+</sup> (acid liên hợp của amoniac) *",
        "5,6·10<sup>−10</sup>",
        "9,25"
      ],
      [
        "NH<sub>3</sub>OH<sup>+</sup> (acid liên hợp của hydroxylamin)",
        "1,1·10<sup>−6</sup>",
        "5,96"
      ],
      [
        "CH<sub>3</sub>NH<sub>3</sub><sup>+</sup> (acid liên hợp của metylamin)",
        "2,3·10<sup>−11</sup>",
        "10,645"
      ],
      [
        "CH<sub>3</sub>CH<sub>2</sub>NH<sub>3</sub><sup>+</sup> (acid liên hợp của etylamin)",
        "2,3·10<sup>−11</sup>",
        "10,636"
      ],
      [
        "(CH<sub>3</sub>)<sub>2</sub>NH<sub>2</sub><sup>+</sup> (acid liên hợp của đimetylamin)",
        "1,7·10<sup>−11</sup>",
        "10,774"
      ],
      [
        "(CH<sub>3</sub>)<sub>3</sub>NH<sup>+</sup> (acid liên hợp của trimetylamin)",
        "1,6·10<sup>−10</sup>",
        "9,799"
      ],
      [
        "(C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>NH<sup>+</sup> (acid liên hợp của trietylamin)",
        "1,9·10<sup>−11</sup>",
        "10,72"
      ],
      [
        "HOCH<sub>2</sub>CH<sub>2</sub>NH<sub>3</sub><sup>+</sup> (acid liên hợp của etanolamin)",
        "3,2·10<sup>−10</sup>",
        "9,498"
      ],
      [
        "(HOCH<sub>2</sub>CH<sub>2</sub>)<sub>3</sub>NH<sup>+</sup> (acid liên hợp của trietanolamin, TEA)",
        "1,7·10<sup>−8</sup>",
        "7,762"
      ],
      [
        "(HOCH<sub>2</sub>)<sub>3</sub>CNH<sub>3</sub><sup>+</sup> (acid liên hợp của Tris)",
        "8,5·10<sup>−9</sup>",
        "8,072"
      ],
      [
        "C<sub>5</sub>H<sub>10</sub>NH<sub>2</sub><sup>+</sup> (acid liên hợp của piperidin)",
        "7,5·10<sup>−12</sup>",
        "11,125"
      ],
      [
        "C<sub>5</sub>H<sub>5</sub>NH<sup>+</sup> (acid liên hợp của pyridin)",
        "6,3·10<sup>−6</sup>",
        "5,20"
      ],
      [
        "C<sub>6</sub>H<sub>5</sub>NH<sub>3</sub><sup>+</sup> (acid liên hợp của anilin)",
        "2,5·10<sup>−5</sup>",
        "4,601"
      ],
      [
        "C<sub>3</sub>H<sub>4</sub>N<sub>2</sub>H<sup>+</sup> (acid liên hợp của imidazol)",
        "1,0·10<sup>−7</sup>",
        "6,993"
      ],
      [
        "H<sub>3</sub>NCH<sub>2</sub>CH<sub>2</sub>NH<sub>3</sub><sup>2+</sup> (acid liên hợp của etylenđiamin, en)",
        "1,4·10<sup>−7</sup> ; 1,2·10<sup>−10</sup>",
        "6,848 ; 9,928"
      ]
    ],
    "ghiChu": "25 °C, μ = 0. Ví dụ CH<sub>3</sub>NH<sub>3</sub><sup>+</sup> là ion metylamoni; etylenđiamin ghi hai nấc của H<sub>3</sub>NCH<sub>2</sub>CH<sub>2</sub>NH<sub>3</sub><sup>2+</sup>. pK<sub>b</sub> của base = 14,00 − pK<sub>a</sub> (xem bảng K<sub>b</sub>). Dòng có dấu * là giá trị <b>quy ước của bài giảng</b> (dùng thống nhất trong lí thuyết và bài tập của app), có thể lệch nhẹ so với sách. Khi đề bài cho hằng số, luôn dùng số của đề. (Harris: NH<sub>4</sub><sup>+</sup> 9,245.) Nguồn: Harris, <i>Quantitative Chemical Analysis</i> (8th/9th ed.), Appendix G."
  },
  {
    "id": "amino-acid",
    "icon": "🧬",
    "ten": "pKa của amino acid",
    "cot": [
      "Amino acid",
      "pK<sub>a</sub> (từ dạng proton hóa hoàn toàn)",
      "pI"
    ],
    "dong": [
      [
        "Glycin (Gly)",
        "2,350 ; 9,778",
        "6,06"
      ],
      [
        "Alanin (Ala)",
        "2,344 ; 9,868",
        "6,11"
      ],
      [
        "Valin (Val)",
        "2,286 ; 9,719",
        "6,00"
      ],
      [
        "Leucin (Leu)",
        "2,328 ; 9,744",
        "6,04"
      ],
      [
        "Isoleucin (Ile)",
        "2,318 ; 9,758",
        "6,04"
      ],
      [
        "Prolin (Pro)",
        "1,952 ; 10,640",
        "6,30"
      ],
      [
        "Serin (Ser)",
        "2,187 ; 9,209",
        "5,70"
      ],
      [
        "Threonin (Thr)",
        "2,088 ; 9,100",
        "5,59"
      ],
      [
        "Acid aspartic (Asp)",
        "1,990 ; 3,900 ; 10,002",
        "2,95"
      ],
      [
        "Acid glutamic (Glu)",
        "2,16 ; 4,30 ; 9,96",
        "3,23"
      ],
      [
        "Cystein (Cys)",
        "1,9 ; 8,19 ; 10,31",
        "5,05"
      ],
      [
        "Histidin (His)",
        "1,6 ; 5,97 ; 9,28",
        "7,63"
      ],
      [
        "Lysin (Lys)",
        "1,77 ; 9,07 ; 10,82",
        "9,95"
      ],
      [
        "Arginin (Arg)",
        "1,82 ; 8,99 ; &gt; 12",
        "≈ 10,5 (sách hóa sinh: 10,76)"
      ]
    ],
    "ghiChu": "25 °C, μ = 0. pK<sub>a1</sub> là nhóm –COOH, các nấc sau là –NH<sub>3</sub><sup>+</sup> và nhóm bên (Asp, Glu: –COOH bên ≈ 3,9 – 4,3; His: imidazol 5,97; Cys: –SH 8,19; Lys: –NH<sub>3</sub><sup>+</sup> bên 10,82; Arg: guanidini &gt; 12). pI (điểm đẳng điện) = trung bình hai pK<sub>a</sub> kẹp dạng lưỡng cực trung hòa. Sách hóa sinh (μ ≈ 0,1) cho giá trị lệch 0,1 – 0,3. Nguồn: Harris, <i>Quantitative Chemical Analysis</i> (8th/9th ed.), bảng pK<sub>a</sub> amino acid (chương acid – base đa nấc)."
  },
  {
    "id": "pkb",
    "icon": "🧪",
    "ten": "Hằng số base Kb, pKb",
    "cot": [
      "Base",
      "K<sub>b</sub>",
      "pK<sub>b</sub>",
      "pK<sub>a</sub> acid liên hợp"
    ],
    "dong": [
      [
        "NH<sub>3</sub> (amoniac) *",
        "1,8·10<sup>−5</sup>",
        "4,75",
        "9,25"
      ],
      [
        "NH<sub>2</sub>OH (hydroxylamin)",
        "9,1·10<sup>−9</sup>",
        "8,04",
        "5,96"
      ],
      [
        "CH<sub>3</sub>NH<sub>2</sub> (metylamin)",
        "4,4·10<sup>−4</sup>",
        "3,355",
        "10,645"
      ],
      [
        "CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub> (etylamin)",
        "4,3·10<sup>−4</sup>",
        "3,364",
        "10,636"
      ],
      [
        "(CH<sub>3</sub>)<sub>2</sub>NH (đimetylamin)",
        "5,9·10<sup>−4</sup>",
        "3,226",
        "10,774"
      ],
      [
        "(CH<sub>3</sub>)<sub>3</sub>N (trimetylamin)",
        "6,3·10<sup>−5</sup>",
        "4,201",
        "9,799"
      ],
      [
        "(C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N (trietylamin)",
        "5,2·10<sup>−4</sup>",
        "3,28",
        "10,72"
      ],
      [
        "HOCH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> (etanolamin)",
        "3,1·10<sup>−5</sup>",
        "4,502",
        "9,498"
      ],
      [
        "(HOCH<sub>2</sub>CH<sub>2</sub>)<sub>3</sub>N (trietanolamin, TEA)",
        "5,8·10<sup>−7</sup>",
        "6,238",
        "7,762"
      ],
      [
        "(HOCH<sub>2</sub>)<sub>3</sub>CNH<sub>2</sub> (Tris)",
        "1,2·10<sup>−6</sup>",
        "5,928",
        "8,072"
      ],
      [
        "C<sub>5</sub>H<sub>10</sub>NH (piperidin)",
        "1,3·10<sup>−3</sup>",
        "2,875",
        "11,125"
      ],
      [
        "C<sub>5</sub>H<sub>5</sub>N (pyridin)",
        "1,6·10<sup>−9</sup>",
        "8,80",
        "5,20"
      ],
      [
        "C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> (anilin)",
        "4,0·10<sup>−10</sup>",
        "9,399",
        "4,601"
      ],
      [
        "C<sub>3</sub>H<sub>4</sub>N<sub>2</sub> (imidazol)",
        "9,8·10<sup>−8</sup>",
        "7,007",
        "6,993"
      ],
      [
        "H<sub>2</sub>NCH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> (etylenđiamin, en)",
        "8,5·10<sup>−5</sup>",
        "4,072",
        "9,928"
      ],
      [
        "CH<sub>3</sub>COO<sup>−</sup> (ion acetate) *",
        "5,6·10<sup>−10</sup>",
        "9,25",
        "4,75"
      ],
      [
        "HCOO<sup>−</sup> (ion formate) *",
        "5,9·10<sup>−11</sup>",
        "10,23",
        "3,77"
      ],
      [
        "C<sub>6</sub>H<sub>5</sub>COO<sup>−</sup> (ion benzoate) *",
        "1,5·10<sup>−10</sup>",
        "9,81",
        "4,19"
      ],
      [
        "F<sup>−</sup> (ion fluoride) *",
        "1,4·10<sup>−11</sup>",
        "10,85",
        "3,15"
      ],
      [
        "NO<sub>2</sub><sup>−</sup> (ion nitrite)",
        "1,6·10<sup>−11</sup>",
        "10,802",
        "3,198"
      ],
      [
        "CN<sup>−</sup> (ion cyanide) *",
        "2,0·10<sup>−5</sup>",
        "4,69",
        "9,31"
      ],
      [
        "ClO<sup>−</sup> (ion hypochlorite) *",
        "3,3·10<sup>−7</sup>",
        "6,48",
        "7,52"
      ],
      [
        "C<sub>6</sub>H<sub>5</sub>O<sup>−</sup> (ion phenolate)",
        "9,9·10<sup>−5</sup>",
        "4,003",
        "9,997"
      ],
      [
        "B(OH)<sub>4</sub><sup>−</sup> (ion borate)",
        "1,7·10<sup>−5</sup>",
        "4,763",
        "9,237"
      ],
      [
        "HS<sup>−</sup> (ion hydrosulfide)",
        "1,0·10<sup>−7</sup>",
        "6,98",
        "7,02"
      ],
      [
        "SO<sub>3</sub><sup>2−</sup> (ion sulfite)",
        "1,5·10<sup>−7</sup>",
        "6,828",
        "7,172"
      ],
      [
        "HSO<sub>3</sub><sup>−</sup> (ion hydrosulfite)",
        "7,2·10<sup>−13</sup>",
        "12,143",
        "1,857"
      ],
      [
        "CO<sub>3</sub><sup>2−</sup> (ion carbonate) *",
        "2,1·10<sup>−4</sup>",
        "3,68",
        "10,32"
      ],
      [
        "HCO<sub>3</sub><sup>−</sup> (ion hydrocarbonate) *",
        "2,4·10<sup>−8</sup>",
        "7,62",
        "6,38"
      ],
      [
        "PO<sub>4</sub><sup>3−</sup> (ion phosphate) *",
        "2,1·10<sup>−2</sup>",
        "1,68",
        "12,32"
      ],
      [
        "HPO<sub>4</sub><sup>2−</sup> (ion hydrophosphate) *",
        "1,6·10<sup>−7</sup>",
        "6,79",
        "7,21"
      ],
      [
        "H<sub>2</sub>PO<sub>4</sub><sup>−</sup> (ion đihydrophosphate) *",
        "1,3·10<sup>−12</sup>",
        "11,88",
        "2,12"
      ],
      [
        "C<sub>2</sub>O<sub>4</sub><sup>2−</sup> (ion oxalate) *",
        "1,5·10<sup>−10</sup>",
        "9,81",
        "4,19"
      ],
      [
        "HC<sub>2</sub>O<sub>4</sub><sup>−</sup> (ion hydrooxalate) *",
        "1,5·10<sup>−13</sup>",
        "12,81",
        "1,19"
      ]
    ],
    "ghiChu": "pK<sub>b</sub> = 14,00 − pK<sub>a</sub> của acid liên hợp (25 °C). Base nhiều nấc: K<sub>b1</sub> ứng với K<sub>a</sub> nấc cuối, ví dụ K<sub>b1</sub>(CO<sub>3</sub><sup>2−</sup>) = K<sub>w</sub>/K<sub>a2</sub>; K<sub>b</sub> của etylenđiamin ở đây là nấc 1. NH<sub>3</sub> dùng quy ước pK<sub>b</sub> = 4,75. Dòng có dấu * là giá trị <b>quy ước của bài giảng</b> (dùng thống nhất trong lí thuyết và bài tập của app), có thể lệch nhẹ so với sách. Khi đề bài cho hằng số, luôn dùng số của đề. Nguồn pK<sub>a</sub>: Harris, Appendix G."
  },
  {
    "id": "kw",
    "icon": "🌡️",
    "ten": "Tích số ion của nước Kw theo nhiệt độ",
    "cot": [
      "t (°C)",
      "K<sub>w</sub>",
      "pK<sub>w</sub>",
      "pH trung tính"
    ],
    "dong": [
      [
        "0",
        "1,139·10<sup>−15</sup>",
        "14,943",
        "7,47"
      ],
      [
        "5",
        "1,846·10<sup>−15</sup>",
        "14,734",
        "7,37"
      ],
      [
        "10",
        "2,920·10<sup>−15</sup>",
        "14,535",
        "7,27"
      ],
      [
        "15",
        "4,505·10<sup>−15</sup>",
        "14,346",
        "7,17"
      ],
      [
        "20",
        "6,809·10<sup>−15</sup>",
        "14,167",
        "7,08"
      ],
      [
        "25",
        "1,008·10<sup>−14</sup>",
        "13,997",
        "7,00"
      ],
      [
        "30",
        "1,469·10<sup>−14</sup>",
        "13,833",
        "6,92"
      ],
      [
        "35",
        "2,089·10<sup>−14</sup>",
        "13,680",
        "6,84"
      ],
      [
        "40",
        "2,919·10<sup>−14</sup>",
        "13,535",
        "6,77"
      ],
      [
        "45",
        "4,018·10<sup>−14</sup>",
        "13,396",
        "6,70"
      ],
      [
        "50",
        "5,474·10<sup>−14</sup>",
        "13,262",
        "6,63"
      ],
      [
        "60",
        "9,614·10<sup>−14</sup>",
        "13,017",
        "6,51"
      ],
      [
        "100",
        "≈ 4,9·10<sup>−13</sup>",
        "≈ 12,3",
        "≈ 6,15"
      ]
    ],
    "ghiChu": "Nước tinh khiết, μ = 0. Bài tập thường lấy K<sub>w</sub> = 1,0·10<sup>−14</sup> (pK<sub>w</sub> = 14,00) ở 25 °C. Ở nhiệt độ khác, môi trường trung tính có pH = ½pK<sub>w</sub> (ví dụ 30 °C: pH 6,92). Nguồn: Harned &amp; Owen, <i>The Physical Chemistry of Electrolytic Solutions</i> (1958), dẫn lại trong Skoog, <i>Fundamentals of Analytical Chemistry</i> (bảng K<sub>w</sub> theo nhiệt độ); giá trị 100 °C theo Skoog."
  },
  {
    "id": "dem",
    "icon": "🧴",
    "ten": "Dung dịch đệm thông dụng",
    "cot": [
      "Hệ đệm (acid / base liên hợp)",
      "pK<sub>a</sub>",
      "Khoảng pH dùng (≈)",
      "Ứng dụng thường gặp"
    ],
    "dong": [
      [
        "HCl / KCl",
        "—",
        "1,0 – 2,2",
        "đệm acid mạnh (không phải đệm acid yếu)"
      ],
      [
        "Glycin·HCl / glycin",
        "2,35",
        "2,2 – 3,6",
        "sinh hóa"
      ],
      [
        "KHP / HCl (kali hydrophthalat)",
        "2,95",
        "2,2 – 4,0",
        "hiệu chuẩn, vùng acid"
      ],
      [
        "HCOOH / HCOONa (formate) *",
        "3,77",
        "2,8 – 4,8",
        ""
      ],
      [
        "CH<sub>3</sub>COOH / CH<sub>3</sub>COONa (acetate)",
        "4,75 *",
        "3,8 – 5,8",
        "chuẩn độ EDTA ở pH 4 – 5, kết tủa oxalat, Zn/Pb"
      ],
      [
        "KHP / NaOH (hydrophthalat / phthalat)",
        "5,41",
        "4,1 – 5,9",
        ""
      ],
      [
        "Acid citric / natri citrat",
        "3,13 ; 4,76 ; 6,40",
        "3,0 – 6,2",
        "đệm rộng (ba nấc)"
      ],
      [
        "Urotropin (hexametylentetramin) / HCl",
        "≈ 5,1",
        "5 – 6",
        "chuẩn độ EDTA Zn<sup>2+</sup>, Pb<sup>2+</sup> với xylenol da cam"
      ],
      [
        "MES",
        "≈ 6,3",
        "5,5 – 6,7",
        "đệm sinh học (đệm Good)"
      ],
      [
        "NaH<sub>2</sub>PO<sub>4</sub> / Na<sub>2</sub>HPO<sub>4</sub> (phosphate)",
        "7,21 *",
        "6,2 – 8,2",
        "vùng trung tính, sinh học"
      ],
      [
        "MOPS",
        "≈ 7,2",
        "6,5 – 7,9",
        "đệm sinh học (đệm Good)"
      ],
      [
        "HEPES",
        "≈ 7,5",
        "6,8 – 8,2",
        "đệm sinh học (đệm Good)"
      ],
      [
        "Trietanolamin·H<sup>+</sup> / trietanolamin",
        "7,76",
        "6,8 – 8,8",
        "che Al<sup>3+</sup>, Fe<sup>3+</sup> khi chuẩn độ EDTA"
      ],
      [
        "Tris·HCl / Tris",
        "8,07",
        "7,1 – 9,1",
        "sinh hóa; chất gốc chuẩn hóa acid"
      ],
      [
        "H<sub>3</sub>BO<sub>3</sub> / Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> (borate)",
        "9,24",
        "8,2 – 10,2",
        "chưng cất Kjeldahl (hấp thụ NH<sub>3</sub> bằng H<sub>3</sub>BO<sub>3</sub>)"
      ],
      [
        "NH<sub>4</sub>Cl / NH<sub>3</sub> (đệm amoni)",
        "9,25 *",
        "8,3 – 10,3",
        "chuẩn độ EDTA ở pH 10 (Ca, Mg, Zn, độ cứng) với ET-OO"
      ],
      [
        "Glycin / NaOH",
        "9,78",
        "8,6 – 10,6",
        "sinh hóa"
      ],
      [
        "NaHCO<sub>3</sub> / Na<sub>2</sub>CO<sub>3</sub> (carbonate)",
        "10,32 *",
        "9,3 – 11,0",
        "vùng kiềm"
      ],
      [
        "CAPS",
        "≈ 10,4",
        "9,7 – 11,1",
        "đệm sinh học vùng kiềm"
      ],
      [
        "Na<sub>2</sub>HPO<sub>4</sub> / Na<sub>3</sub>PO<sub>4</sub>",
        "12,32 *",
        "11 – 12,5",
        "vùng kiềm mạnh"
      ]
    ],
    "ghiChu": "Khoảng đệm hiệu quả ≈ pK<sub>a</sub> ± 1, đệm mạnh nhất khi C<sub>A⁻</sub> = C<sub>HA</sub> (pH = pK<sub>a</sub>). pK<sub>a</sub> ở 25 °C, μ = 0; ở lực ion thực tế pH đệm lệch vài phần mười. Dấu * là giá trị quy ước của bài giảng. pK<sub>a</sub> của đệm Good (MES, MOPS, HEPES, CAPS) và urotropin phụ thuộc nhiệt độ, chỉ ghi gần đúng. Nguồn: Harris, <i>Quantitative Chemical Analysis</i>, Appendix G và bảng đệm Good (chương đệm)."
  },
  {
    "id": "dem-chuan-ph",
    "icon": "🎚️",
    "ten": "Đệm chuẩn hiệu chuẩn pH (NIST)",
    "cot": [
      "Dung dịch chuẩn",
      "pH ở 25 °C"
    ],
    "dong": [
      [
        "Kali tetraoxalat KH<sub>3</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>2</sub> 0,05 m",
        "1,679"
      ],
      [
        "Kali hydrotartrat KHC<sub>4</sub>H<sub>4</sub>O<sub>6</sub> bão hòa (25 °C)",
        "3,557"
      ],
      [
        "Kali hydrophthalat KHC<sub>8</sub>H<sub>4</sub>O<sub>4</sub> (KHP) 0,05 m",
        "4,005"
      ],
      [
        "KH<sub>2</sub>PO<sub>4</sub> 0,025 m + Na<sub>2</sub>HPO<sub>4</sub> 0,025 m (đệm phosphate)",
        "6,865"
      ],
      [
        "KH<sub>2</sub>PO<sub>4</sub> 0,008695 m + Na<sub>2</sub>HPO<sub>4</sub> 0,03043 m",
        "7,413"
      ],
      [
        "Borax Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O 0,01 m",
        "9,180"
      ],
      [
        "NaHCO<sub>3</sub> 0,025 m + Na<sub>2</sub>CO<sub>3</sub> 0,025 m (đệm carbonate)",
        "10,012"
      ],
      [
        "Ca(OH)<sub>2</sub> bão hòa (25 °C)",
        "12,454"
      ]
    ],
    "ghiChu": "m: nồng độ molan (mol/kg nước). Hiệu chuẩn máy đo pH bằng ít nhất hai đệm kẹp khoảng pH của mẫu (thường 4,01 và 7,00 hoặc 7,00 và 10,01 với đệm thương mại). pH đệm chuẩn thay đổi theo nhiệt độ (mạnh nhất với borax, carbonate, Ca(OH)<sub>2</sub>). Nguồn: NIST (Bates), dẫn lại trong Harris, <i>Quantitative Chemical Analysis</i>, bảng pH của đệm chuẩn NIST (chương điện cực chọn lọc ion / đo pH)."
  },
  {
    "id": "ksp",
    "icon": "🧂",
    "ten": "Tích số tan Ksp (muối)",
    "cot": [
      "Chất",
      "K<sub>sp</sub>",
      "pK<sub>sp</sub>",
      "Nguồn"
    ],
    "dong": [
      [
        "CaF<sub>2</sub> (calcium fluoride)",
        "3,2·10<sup>−11</sup>",
        "10,49",
        "H"
      ],
      [
        "BaF<sub>2</sub> (barium fluoride)",
        "1,84·10<sup>−7</sup>",
        "6,74",
        "C"
      ],
      [
        "MgF<sub>2</sub> (magnesium fluoride)",
        "5,16·10<sup>−11</sup>",
        "10,29",
        "C"
      ],
      [
        "SrF<sub>2</sub> (strontium fluoride)",
        "4,33·10<sup>−9</sup>",
        "8,36",
        "C"
      ],
      [
        "PbF<sub>2</sub> (chì(II) fluoride)",
        "3,3·10<sup>−8</sup>",
        "7,48",
        "C"
      ],
      [
        "AgCl (bạc chloride) *",
        "1,8·10<sup>−10</sup>",
        "9,74",
        "*"
      ],
      [
        "CuCl (đồng(I) chloride)",
        "1,9·10<sup>−7</sup>",
        "6,72",
        "S"
      ],
      [
        "Hg<sub>2</sub>Cl<sub>2</sub> (thủy ngân(I) chloride, calomen)",
        "1,2·10<sup>−18</sup>",
        "17,92",
        "S"
      ],
      [
        "PbCl<sub>2</sub> (chì(II) chloride)",
        "1,7·10<sup>−5</sup>",
        "4,77",
        "S"
      ],
      [
        "TlCl (thali(I) chloride)",
        "1,8·10<sup>−4</sup>",
        "3,74",
        "S"
      ],
      [
        "AgBr (bạc bromide) *",
        "5,4·10<sup>−13</sup>",
        "12,27",
        "*"
      ],
      [
        "CuBr (đồng(I) bromide) *",
        "6,3·10<sup>−9</sup>",
        "8,20",
        "*"
      ],
      [
        "PbBr<sub>2</sub> (chì(II) bromide) *",
        "6,6·10<sup>−6</sup>",
        "5,18",
        "*"
      ],
      [
        "Hg<sub>2</sub>Br<sub>2</sub> (thủy ngân(I) bromide) *",
        "6,4·10<sup>−23</sup>",
        "22,19",
        "*"
      ],
      [
        "AgI (bạc iodide) *",
        "8,3·10<sup>−17</sup>",
        "16,08",
        "*"
      ],
      [
        "CuI (đồng(I) iodide)",
        "1,1·10<sup>−12</sup>",
        "11,96",
        "H"
      ],
      [
        "PbI<sub>2</sub> (chì(II) iodide)",
        "7,9·10<sup>−9</sup>",
        "8,10",
        "S"
      ],
      [
        "Hg<sub>2</sub>I<sub>2</sub> (thủy ngân(I) iodide)",
        "4,7·10<sup>−29</sup>",
        "28,33",
        "S"
      ],
      [
        "AgSCN (bạc thiocyanate)",
        "1,1·10<sup>−12</sup>",
        "11,96",
        "S"
      ],
      [
        "CuSCN (đồng(I) thiocyanate)",
        "4,0·10<sup>−14</sup>",
        "13,40",
        "S"
      ],
      [
        "Hg<sub>2</sub>(SCN)<sub>2</sub> (thủy ngân(I) thiocyanate)",
        "3,0·10<sup>−20</sup>",
        "19,52",
        "S"
      ],
      [
        "AgCN (bạc cyanide)",
        "2,2·10<sup>−16</sup>",
        "15,66",
        "S"
      ],
      [
        "AgIO<sub>3</sub> (bạc iodate)",
        "3,1·10<sup>−8</sup>",
        "7,51",
        "S"
      ],
      [
        "Ba(IO<sub>3</sub>)<sub>2</sub> (barium iodate)",
        "1,57·10<sup>−9</sup>",
        "8,80",
        "S"
      ],
      [
        "Ca(IO<sub>3</sub>)<sub>2</sub> (calcium iodate)",
        "6,47·10<sup>−6</sup>",
        "5,19",
        "C"
      ],
      [
        "La(IO<sub>3</sub>)<sub>3</sub> (lanthan iodate)",
        "1,0·10<sup>−11</sup>",
        "11,00",
        "S"
      ],
      [
        "CaCO<sub>3</sub> (calcium carbonate) *",
        "5,0·10<sup>−9</sup>",
        "8,30",
        "*"
      ],
      [
        "MgCO<sub>3</sub> (magnesium carbonate) *",
        "6,8·10<sup>−6</sup>",
        "5,17",
        "*"
      ],
      [
        "SrCO<sub>3</sub> (strontium carbonate) *",
        "5,6·10<sup>−10</sup>",
        "9,25",
        "*"
      ],
      [
        "NiCO<sub>3</sub> (nickel carbonate) *",
        "1,3·10<sup>−7</sup>",
        "6,89",
        "*"
      ],
      [
        "BaCO<sub>3</sub> (barium carbonate)",
        "5,0·10<sup>−9</sup>",
        "8,30",
        "S"
      ],
      [
        "Ag<sub>2</sub>CO<sub>3</sub> (bạc carbonate)",
        "8,1·10<sup>−12</sup>",
        "11,09",
        "S"
      ],
      [
        "CdCO<sub>3</sub> (cadmi carbonate)",
        "1,8·10<sup>−14</sup>",
        "13,74",
        "S"
      ],
      [
        "FeCO<sub>3</sub> (sắt(II) carbonate)",
        "3,13·10<sup>−11</sup>",
        "10,50",
        "C"
      ],
      [
        "MnCO<sub>3</sub> (mangan(II) carbonate)",
        "5,0·10<sup>−10</sup>",
        "9,30",
        "S"
      ],
      [
        "PbCO<sub>3</sub> (chì(II) carbonate)",
        "7,4·10<sup>−14</sup>",
        "13,13",
        "S"
      ],
      [
        "ZnCO<sub>3</sub> (kẽm carbonate)",
        "1,0·10<sup>−10</sup>",
        "10,00",
        "S"
      ],
      [
        "Hg<sub>2</sub>CO<sub>3</sub> (thủy ngân(I) carbonate)",
        "8,9·10<sup>−17</sup>",
        "16,05",
        "S"
      ],
      [
        "CaC<sub>2</sub>O<sub>4</sub> (calcium oxalate) *",
        "2,3·10<sup>−9</sup>",
        "8,64",
        "*"
      ],
      [
        "MgC<sub>2</sub>O<sub>4</sub> (magnesium oxalate) *",
        "4,8·10<sup>−6</sup>",
        "5,32",
        "*"
      ],
      [
        "SrC<sub>2</sub>O<sub>4</sub> (strontium oxalate) *",
        "5·10<sup>−8</sup>",
        "7,3",
        "*"
      ],
      [
        "FeC<sub>2</sub>O<sub>4</sub> (sắt(II) oxalate) *",
        "2·10<sup>−7</sup>",
        "6,7",
        "*"
      ],
      [
        "NiC<sub>2</sub>O<sub>4</sub> (nickel oxalate) *",
        "1·10<sup>−7</sup>",
        "7,0",
        "*"
      ],
      [
        "BaC<sub>2</sub>O<sub>4</sub> (barium oxalate)",
        "1·10<sup>−6</sup>",
        "6,0",
        "S"
      ],
      [
        "CdC<sub>2</sub>O<sub>4</sub> (cadmi oxalate)",
        "9·10<sup>−8</sup>",
        "7,0",
        "S"
      ],
      [
        "PbC<sub>2</sub>O<sub>4</sub> (chì(II) oxalate)",
        "8,5·10<sup>−9</sup>",
        "8,07",
        "S"
      ],
      [
        "ZnC<sub>2</sub>O<sub>4</sub> (kẽm oxalate)",
        "7,5·10<sup>−9</sup>",
        "8,12",
        "S"
      ],
      [
        "Ag<sub>2</sub>C<sub>2</sub>O<sub>4</sub> (bạc oxalate)",
        "3,5·10<sup>−11</sup>",
        "10,46",
        "S"
      ],
      [
        "Ag<sub>2</sub>CrO<sub>4</sub> (bạc chromate) *",
        "1,1·10<sup>−12</sup>",
        "11,96",
        "*"
      ],
      [
        "BaCrO<sub>4</sub> (barium chromate)",
        "2,1·10<sup>−10</sup>",
        "9,68",
        "S"
      ],
      [
        "PbCrO<sub>4</sub> (chì(II) chromate)",
        "3·10<sup>−13</sup>",
        "12,5",
        "S"
      ],
      [
        "BaSO<sub>4</sub> (barium sulfate) *",
        "1,1·10<sup>−10</sup>",
        "9,96",
        "*"
      ],
      [
        "CaSO<sub>4</sub> (calcium sulfate)",
        "2,4·10<sup>−5</sup>",
        "4,62",
        "H"
      ],
      [
        "SrSO<sub>4</sub> (strontium sulfate)",
        "3,2·10<sup>−7</sup>",
        "6,49",
        "S"
      ],
      [
        "PbSO<sub>4</sub> (chì(II) sulfate)",
        "1,6·10<sup>−8</sup>",
        "7,80",
        "S"
      ],
      [
        "Ag<sub>2</sub>SO<sub>4</sub> (bạc sulfate)",
        "1,20·10<sup>−5</sup>",
        "4,92",
        "C"
      ],
      [
        "Hg<sub>2</sub>SO<sub>4</sub> (thủy ngân(I) sulfate)",
        "6,5·10<sup>−7</sup>",
        "6,19",
        "C"
      ],
      [
        "Ag<sub>3</sub>PO<sub>4</sub> (bạc phosphate)",
        "2,8·10<sup>−18</sup>",
        "17,55",
        "H"
      ],
      [
        "Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (calcium phosphate)",
        "2,07·10<sup>−33</sup>",
        "32,68",
        "C"
      ],
      [
        "Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (magnesium phosphate)",
        "1,04·10<sup>−24</sup>",
        "23,98",
        "C"
      ],
      [
        "MgNH<sub>4</sub>PO<sub>4</sub> (magnesium amoni phosphate)",
        "3·10<sup>−13</sup>",
        "12,5",
        "S"
      ],
      [
        "AlPO<sub>4</sub> (nhôm phosphate)",
        "9,84·10<sup>−21</sup>",
        "20,01",
        "C"
      ],
      [
        "Ag<sub>3</sub>AsO<sub>4</sub> (bạc arsenate)",
        "6·10<sup>−23</sup>",
        "22,2",
        "S"
      ]
    ],
    "ghiChu": "25 °C, μ = 0. Xếp theo anion: fluoride, chloride, bromide, iodide, thiocyanate/cyanide, iodate, carbonate, oxalate, chromate, sulfate, phosphate. Hg<sub>2</sub>X<sub>2</sub>: K<sub>sp</sub> = [Hg<sub>2</sub><sup>2+</sup>][X<sup>−</sup>]<sup>2</sup>. Dòng có dấu * là giá trị <b>quy ước của bài giảng</b> (dùng thống nhất trong lí thuyết và bài tập của app), có thể lệch nhẹ so với sách. Khi đề bài cho hằng số, luôn dùng số của đề. Các tài liệu có thể lệch nhau tới vài lần (ví dụ CaCO<sub>3</sub>: Skoog 4,5·10<sup>−9</sup>, CRC 3,4·10<sup>−9</sup>; PbSO<sub>4</sub>: CRC 2,5·10<sup>−8</sup>). Cột Nguồn: * quy ước bài giảng; S = Skoog, <i>Fundamentals of Analytical Chemistry</i> (9th ed.), Appendix 2; H = Harris, <i>Quantitative Chemical Analysis</i> (8th/9th ed.), Appendix F; C = CRC <i>Handbook of Chemistry and Physics</i>, bảng “Solubility product constants”."
  },
  {
    "id": "ksp-hydroxide",
    "icon": "🫧",
    "ten": "Tích số tan Ksp (hydroxide, oxide)",
    "cot": [
      "Chất",
      "K<sub>sp</sub>",
      "pK<sub>sp</sub>",
      "pH bắt đầu kết tủa ([M] = 0,01 M)",
      "Nguồn"
    ],
    "dong": [
      [
        "Mg(OH)<sub>2</sub> (magnesium hydroxide) *",
        "1,8·10<sup>−11</sup>",
        "10,74",
        "9,6",
        "*"
      ],
      [
        "Ca(OH)<sub>2</sub> (calcium hydroxide)",
        "6,5·10<sup>−6</sup>",
        "5,19",
        "12,4",
        "S"
      ],
      [
        "Ba(OH)<sub>2</sub>·8H<sub>2</sub>O (barium hydroxide)",
        "3·10<sup>−4</sup>",
        "3,5",
        "13,2",
        "S"
      ],
      [
        "Mn(OH)<sub>2</sub> (mangan(II) hydroxide)",
        "2·10<sup>−13</sup>",
        "12,7",
        "8,7",
        "S"
      ],
      [
        "Fe(OH)<sub>2</sub> (sắt(II) hydroxide)",
        "7,9·10<sup>−16</sup>",
        "15,10",
        "7,4",
        "H"
      ],
      [
        "Ni(OH)<sub>2</sub> (nickel(II) hydroxide)",
        "6·10<sup>−16</sup>",
        "15,2",
        "7,4",
        "S"
      ],
      [
        "Cu(OH)<sub>2</sub> (đồng(II) hydroxide)",
        "4,8·10<sup>−20</sup>",
        "19,32",
        "5,3",
        "S"
      ],
      [
        "Zn(OH)<sub>2</sub> (kẽm hydroxide, vô định hình)",
        "3,0·10<sup>−16</sup>",
        "15,52",
        "7,2",
        "S"
      ],
      [
        "Cd(OH)<sub>2</sub> (cadmi hydroxide)",
        "4,5·10<sup>−15</sup>",
        "14,35",
        "7,8",
        "S"
      ],
      [
        "Sn(OH)<sub>2</sub> (thiếc(II) hydroxide)",
        "5,45·10<sup>−27</sup>",
        "26,26",
        "1,9",
        "C"
      ],
      [
        "PbO (chì(II) oxide; PbO + H<sub>2</sub>O ⇌ Pb<sup>2+</sup> + 2OH<sup>−</sup>)",
        "8·10<sup>−16</sup>",
        "15,1",
        "7,5",
        "S"
      ],
      [
        "HgO (thủy ngân(II) oxide; HgO + H<sub>2</sub>O ⇌ Hg<sup>2+</sup> + 2OH<sup>−</sup>)",
        "3,6·10<sup>−26</sup>",
        "25,44",
        "2,3",
        "S"
      ],
      [
        "Al(OH)<sub>3</sub> (nhôm hydroxide)",
        "3·10<sup>−34</sup>",
        "33,5",
        "3,5",
        "S"
      ],
      [
        "Fe(OH)<sub>3</sub> (sắt(III) hydroxide)",
        "1,6·10<sup>−39</sup>",
        "38,80",
        "1,7",
        "H"
      ]
    ],
    "ghiChu": "25 °C, μ = 0. K<sub>sp</sub> = [M<sup>n+</sup>][OH<sup>−</sup>]<sup>n</sup>. Cột pH bắt đầu kết tủa tính đơn giản: [OH<sup>−</sup>] = (K<sub>sp</sub>/0,010)<sup>1/n</sup>, pH = 14 + lg[OH<sup>−</sup>] (bỏ qua phức hydroxo; Al(OH)<sub>3</sub>, Zn(OH)<sub>2</sub>, Pb(OH)<sub>2</sub>, Sn(OH)<sub>2</sub> tan lại trong kiềm dư). K<sub>sp</sub> hydroxide phụ thuộc mạnh dạng kết tủa (vô định hình/tinh thể, độ “già”), sai khác giữa các tài liệu có thể tới 1 – 2 bậc. Dòng có dấu * là giá trị <b>quy ước của bài giảng</b> (dùng thống nhất trong lí thuyết và bài tập của app), có thể lệch nhẹ so với sách. Khi đề bài cho hằng số, luôn dùng số của đề. Nguồn: S = Skoog, Appendix 2; H = Harris, Appendix F; C = CRC Handbook."
  },
  {
    "id": "ksp-sulfide",
    "icon": "🥚",
    "ten": "Tích số tan Ksp (sulfide)",
    "cot": [
      "Chất",
      "K<sub>sp</sub>",
      "pK<sub>sp</sub>",
      "Nguồn"
    ],
    "dong": [
      [
        "MnS (mangan(II) sulfide, dạng hồng)",
        "3·10<sup>−11</sup>",
        "10,5",
        "S"
      ],
      [
        "FeS (sắt(II) sulfide)",
        "8·10<sup>−19</sup>",
        "18,1",
        "S"
      ],
      [
        "NiS (nickel sulfide, dạng α)",
        "4·10<sup>−20</sup>",
        "19,4",
        "S"
      ],
      [
        "Tl<sub>2</sub>S (thali(I) sulfide)",
        "6·10<sup>−22</sup>",
        "21,2",
        "S"
      ],
      [
        "ZnS (kẽm sulfide, dạng α)",
        "2·10<sup>−25</sup>",
        "24,7",
        "S"
      ],
      [
        "CdS (cadmi sulfide)",
        "1·10<sup>−27</sup>",
        "27,0",
        "S"
      ],
      [
        "PbS (chì(II) sulfide)",
        "3·10<sup>−28</sup>",
        "27,5",
        "S"
      ],
      [
        "CuS (đồng(II) sulfide)",
        "8·10<sup>−37</sup>",
        "36,1",
        "S"
      ],
      [
        "Ag<sub>2</sub>S (bạc sulfide)",
        "8·10<sup>−51</sup>",
        "50,1",
        "S"
      ],
      [
        "HgS (thủy ngân(II) sulfide, dạng đen)",
        "2·10<sup>−53</sup>",
        "52,7",
        "S"
      ]
    ],
    "ghiChu": "25 °C. Viết theo MS(r) ⇌ M<sup>2+</sup> + S<sup>2−</sup>. Vì pK<sub>a2</sub> của H<sub>2</sub>S rất không chắc (≈ 14 hoặc lớn hơn), K<sub>sp</sub> sulfide chỉ đáng tin về bậc độ lớn; Harris dùng cách viết khác (MS + H<sub>2</sub>O ⇌ M<sup>2+</sup> + HS<sup>−</sup> + OH<sup>−</sup>) nên số khác. Dùng để so sánh độ tan và tách nhóm cation (nhóm sulfide kết tủa trong acid: CuS, CdS, PbS, HgS; trong môi trường kiềm/NH<sub>3</sub>: ZnS, NiS, FeS, MnS). Nguồn: Skoog, <i>Fundamentals of Analytical Chemistry</i> (9th ed.), Appendix 2."
  },
  {
    "id": "the-dien-cuc",
    "icon": "⚡",
    "ten": "Thế điện cực chuẩn E°",
    "cot": [
      "Bán phản ứng",
      "E° (V)",
      "Nguồn"
    ],
    "dong": [
      [
        "F<sub>2</sub>(g) + 2e<sup>−</sup> ⇌ 2F<sup>−</sup>",
        "+2,87",
        "C"
      ],
      [
        "O<sub>3</sub>(g) + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ O<sub>2</sub>(g) + H<sub>2</sub>O",
        "+2,07",
        "C"
      ],
      [
        "S<sub>2</sub>O<sub>8</sub><sup>2−</sup> + 2e<sup>−</sup> ⇌ 2SO<sub>4</sub><sup>2−</sup> <small>(persulfate)</small>",
        "+2,01",
        "C"
      ],
      [
        "Ag<sup>2+</sup> + e<sup>−</sup> ⇌ Ag<sup>+</sup>",
        "+1,98",
        "C"
      ],
      [
        "Co<sup>3+</sup> + e<sup>−</sup> ⇌ Co<sup>2+</sup>",
        "+1,92",
        "C"
      ],
      [
        "H<sub>2</sub>O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ 2H<sub>2</sub>O <small>(hydrogen peroxide)</small>",
        "+1,78",
        "C"
      ],
      [
        "MnO<sub>4</sub><sup>−</sup> + 4H<sup>+</sup> + 3e<sup>−</sup> ⇌ MnO<sub>2</sub>(r) + 2H<sub>2</sub>O",
        "+1,692",
        "H"
      ],
      [
        "Au<sup>+</sup> + e<sup>−</sup> ⇌ Au",
        "+1,69",
        "C"
      ],
      [
        "PbO<sub>2</sub> + SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> + 2e<sup>−</sup> ⇌ PbSO<sub>4</sub> + 2H<sub>2</sub>O <small>(acquy chì)</small>",
        "+1,69",
        "C"
      ],
      [
        "H<sub>5</sub>IO<sub>6</sub> + H<sup>+</sup> + 2e<sup>−</sup> ⇌ IO<sub>3</sub><sup>−</sup> + 3H<sub>2</sub>O <small>(periodate)</small>",
        "+1,60",
        "C"
      ],
      [
        "BrO<sub>3</sub><sup>−</sup> + 6H<sup>+</sup> + 5e<sup>−</sup> ⇌ ½Br<sub>2</sub>(l) + 3H<sub>2</sub>O <small>(bromate)</small>",
        "+1,52",
        "S"
      ],
      [
        "MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> ⇌ Mn<sup>2+</sup> + 4H<sub>2</sub>O <small>(permanganat, môi trường acid)</small>",
        "+1,51",
        "*"
      ],
      [
        "Au<sup>3+</sup> + 3e<sup>−</sup> ⇌ Au",
        "+1,50",
        "C"
      ],
      [
        "HClO + H<sup>+</sup> + 2e<sup>−</sup> ⇌ Cl<sup>−</sup> + H<sub>2</sub>O <small>(hypochlorơ)</small>",
        "+1,48",
        "C"
      ],
      [
        "PbO<sub>2</sub> + 4H<sup>+</sup> + 2e<sup>−</sup> ⇌ Pb<sup>2+</sup> + 2H<sub>2</sub>O",
        "+1,455",
        "C"
      ],
      [
        "ClO<sub>3</sub><sup>−</sup> + 6H<sup>+</sup> + 6e<sup>−</sup> ⇌ Cl<sup>−</sup> + 3H<sub>2</sub>O <small>(chlorate)</small>",
        "+1,45",
        "C"
      ],
      [
        "BrO<sub>3</sub><sup>−</sup> + 6H<sup>+</sup> + 6e<sup>−</sup> ⇌ Br<sup>−</sup> + 3H<sub>2</sub>O <small>(bromate)</small>",
        "+1,42",
        "C"
      ],
      [
        "Cl<sub>2</sub>(g) + 2e<sup>−</sup> ⇌ 2Cl<sup>−</sup>",
        "+1,36",
        "C"
      ],
      [
        "Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e<sup>−</sup> ⇌ 2Cr<sup>3+</sup> + 7H<sub>2</sub>O <small>(dicromat; Harris 1,36)</small>",
        "+1,33",
        "*"
      ],
      [
        "MnO<sub>2</sub>(r) + 4H<sup>+</sup> + 2e<sup>−</sup> ⇌ Mn<sup>2+</sup> + 2H<sub>2</sub>O",
        "+1,23",
        "C"
      ],
      [
        "O<sub>2</sub>(g) + 4H<sup>+</sup> + 4e<sup>−</sup> ⇌ 2H<sub>2</sub>O",
        "+1,229",
        "C"
      ],
      [
        "IO<sub>3</sub><sup>−</sup> + 6H<sup>+</sup> + 5e<sup>−</sup> ⇌ ½I<sub>2</sub>(r) + 3H<sub>2</sub>O <small>(iodate)</small>",
        "+1,20",
        "C"
      ],
      [
        "Br<sub>2</sub>(l) + 2e<sup>−</sup> ⇌ 2Br<sup>−</sup>",
        "+1,07",
        "C"
      ],
      [
        "VO<sub>2</sub><sup>+</sup> + 2H<sup>+</sup> + e<sup>−</sup> ⇌ VO<sup>2+</sup> + H<sub>2</sub>O",
        "+1,00",
        "C"
      ],
      [
        "HNO<sub>2</sub> + H<sup>+</sup> + e<sup>−</sup> ⇌ NO(g) + H<sub>2</sub>O",
        "+0,98",
        "C"
      ],
      [
        "NO<sub>3</sub><sup>−</sup> + 4H<sup>+</sup> + 3e<sup>−</sup> ⇌ NO(g) + 2H<sub>2</sub>O",
        "+0,96",
        "C"
      ],
      [
        "NO<sub>3</sub><sup>−</sup> + 3H<sup>+</sup> + 2e<sup>−</sup> ⇌ HNO<sub>2</sub> + H<sub>2</sub>O",
        "+0,93",
        "C"
      ],
      [
        "2Hg<sup>2+</sup> + 2e<sup>−</sup> ⇌ Hg<sub>2</sub><sup>2+</sup>",
        "+0,92",
        "C"
      ],
      [
        "HO<sub>2</sub><sup>−</sup> + H<sub>2</sub>O + 2e<sup>−</sup> ⇌ 3OH<sup>−</sup> <small>(H<sub>2</sub>O<sub>2</sub> trong kiềm)</small>",
        "+0,88",
        "C"
      ],
      [
        "Cu<sup>2+</sup> + I<sup>−</sup> + e<sup>−</sup> ⇌ CuI(r) <small>(bảng thế điều kiện ghi ≈ 0,89 V theo quy ước bài giảng)</small>",
        "+0,86",
        "S"
      ],
      [
        "Hg<sup>2+</sup> + 2e<sup>−</sup> ⇌ Hg(l)",
        "+0,85",
        "C"
      ],
      [
        "ClO<sup>−</sup> + H<sub>2</sub>O + 2e<sup>−</sup> ⇌ Cl<sup>−</sup> + 2OH<sup>−</sup> <small>(hypochlorite, môi trường kiềm)</small>",
        "+0,81",
        "C"
      ],
      [
        "Ag<sup>+</sup> + e<sup>−</sup> ⇌ Ag(r) <small>(Harris 0,799)</small>",
        "+0,80",
        "C"
      ],
      [
        "Hg<sub>2</sub><sup>2+</sup> + 2e<sup>−</sup> ⇌ 2Hg(l)",
        "+0,80",
        "C"
      ],
      [
        "Fe<sup>3+</sup> + e<sup>−</sup> ⇌ Fe<sup>2+</sup>",
        "+0,77",
        "C"
      ],
      [
        "C<sub>6</sub>H<sub>4</sub>O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ C<sub>6</sub>H<sub>4</sub>(OH)<sub>2</sub> <small>(quinon/hydroquinon)</small>",
        "+0,699",
        "S"
      ],
      [
        "O<sub>2</sub>(g) + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ H<sub>2</sub>O<sub>2</sub>",
        "+0,695",
        "C"
      ],
      [
        "Hg<sub>2</sub>SO<sub>4</sub>(r) + 2e<sup>−</sup> ⇌ 2Hg(l) + SO<sub>4</sub><sup>2−</sup>",
        "+0,613",
        "C"
      ],
      [
        "MnO<sub>4</sub><sup>−</sup> + 2H<sub>2</sub>O + 3e<sup>−</sup> ⇌ MnO<sub>2</sub>(r) + 4OH<sup>−</sup> <small>(permanganat, môi trường trung tính/kiềm)</small>",
        "+0,60",
        "C"
      ],
      [
        "H<sub>3</sub>AsO<sub>4</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ H<sub>3</sub>AsO<sub>3</sub> + H<sub>2</sub>O <small>(Skoog 0,559; Harris 0,575)</small>",
        "+0,57",
        "*"
      ],
      [
        "MnO<sub>4</sub><sup>−</sup> + e<sup>−</sup> ⇌ MnO<sub>4</sub><sup>2−</sup>",
        "+0,56",
        "C"
      ],
      [
        "I<sub>2</sub>(r) + 2e<sup>−</sup> ⇌ 2I<sup>−</sup> <small>(Harris 0,535)</small>",
        "+0,54",
        "*"
      ],
      [
        "I<sub>3</sub><sup>−</sup> + 2e<sup>−</sup> ⇌ 3I<sup>−</sup>",
        "+0,536",
        "S"
      ],
      [
        "Cu<sup>+</sup> + e<sup>−</sup> ⇌ Cu(r)",
        "+0,52",
        "S"
      ],
      [
        "H<sub>2</sub>SO<sub>3</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> ⇌ S(r) + 3H<sub>2</sub>O",
        "+0,45",
        "C"
      ],
      [
        "Ag<sub>2</sub>CrO<sub>4</sub>(r) + 2e<sup>−</sup> ⇌ 2Ag(r) + CrO<sub>4</sub><sup>2−</sup>",
        "+0,447",
        "C"
      ],
      [
        "O<sub>2</sub>(g) + 2H<sub>2</sub>O + 4e<sup>−</sup> ⇌ 4OH<sup>−</sup>",
        "+0,401",
        "C"
      ],
      [
        "Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> + e<sup>−</sup> ⇌ Ag(r) + 2NH<sub>3</sub>",
        "+0,373",
        "C"
      ],
      [
        "Fe(CN)<sub>6</sub><sup>3−</sup> + e<sup>−</sup> ⇌ Fe(CN)<sub>6</sub><sup>4−</sup> <small>(ferricyanide)</small>",
        "+0,36",
        "S"
      ],
      [
        "Cu<sup>2+</sup> + 2e<sup>−</sup> ⇌ Cu(r)",
        "+0,34",
        "C"
      ],
      [
        "VO<sup>2+</sup> + 2H<sup>+</sup> + e<sup>−</sup> ⇌ V<sup>3+</sup> + H<sub>2</sub>O",
        "+0,337",
        "C"
      ],
      [
        "UO<sub>2</sub><sup>2+</sup> + 4H<sup>+</sup> + 2e<sup>−</sup> ⇌ U<sup>4+</sup> + 2H<sub>2</sub>O",
        "+0,33",
        "S"
      ],
      [
        "Hg<sub>2</sub>Cl<sub>2</sub>(r) + 2e<sup>−</sup> ⇌ 2Hg(l) + 2Cl<sup>−</sup> <small>(calomen, a(Cl⁻) = 1)</small>",
        "+0,268",
        "C"
      ],
      [
        "AgCl(r) + e<sup>−</sup> ⇌ Ag(r) + Cl<sup>−</sup> <small>(a(Cl⁻) = 1)</small>",
        "+0,222",
        "C"
      ],
      [
        "Cu<sup>2+</sup> + e<sup>−</sup> ⇌ Cu<sup>+</sup> <small>(Harris 0,161; CRC 0,153)</small>",
        "+0,18",
        "*"
      ],
      [
        "SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> + 2e<sup>−</sup> ⇌ H<sub>2</sub>SO<sub>3</sub> + H<sub>2</sub>O",
        "+0,172",
        "C"
      ],
      [
        "Sn<sup>4+</sup> + 2e<sup>−</sup> ⇌ Sn<sup>2+</sup>",
        "+0,15",
        "C"
      ],
      [
        "S(r) + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ H<sub>2</sub>S",
        "+0,14",
        "S"
      ],
      [
        "S<sub>4</sub>O<sub>6</sub><sup>2−</sup> + 2e<sup>−</sup> ⇌ 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> <small>(tetrathionat/thiosulfat)</small>",
        "+0,08",
        "C"
      ],
      [
        "AgBr(r) + e<sup>−</sup> ⇌ Ag(r) + Br<sup>−</sup>",
        "+0,071",
        "C"
      ],
      [
        "Ag(S<sub>2</sub>O<sub>3</sub>)<sub>2</sub><sup>3−</sup> + e<sup>−</sup> ⇌ Ag(r) + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup>",
        "+0,017",
        "S"
      ],
      [
        "2H<sup>+</sup> + 2e<sup>−</sup> ⇌ H<sub>2</sub>(g) <small>(điện cực hydro chuẩn, SHE)</small>",
        "0,000",
        "C"
      ],
      [
        "Fe<sup>3+</sup> + 3e<sup>−</sup> ⇌ Fe(r)",
        "−0,04",
        "C"
      ],
      [
        "Pb<sup>2+</sup> + 2e<sup>−</sup> ⇌ Pb(r)",
        "−0,13",
        "C"
      ],
      [
        "CrO<sub>4</sub><sup>2−</sup> + 4H<sub>2</sub>O + 3e<sup>−</sup> ⇌ Cr(OH)<sub>3</sub>(r) + 5OH<sup>−</sup>",
        "−0,13",
        "C"
      ],
      [
        "Sn<sup>2+</sup> + 2e<sup>−</sup> ⇌ Sn(r)",
        "−0,14",
        "C"
      ],
      [
        "AgI(r) + e<sup>−</sup> ⇌ Ag(r) + I<sup>−</sup>",
        "−0,15",
        "C"
      ],
      [
        "CuI(r) + e<sup>−</sup> ⇌ Cu(r) + I<sup>−</sup>",
        "−0,185",
        "C"
      ],
      [
        "Ni<sup>2+</sup> + 2e<sup>−</sup> ⇌ Ni(r) <small>(CRC −0,257)</small>",
        "−0,25",
        "S"
      ],
      [
        "V<sup>3+</sup> + e<sup>−</sup> ⇌ V<sup>2+</sup>",
        "−0,26",
        "C"
      ],
      [
        "Co<sup>2+</sup> + 2e<sup>−</sup> ⇌ Co(r)",
        "−0,28",
        "C"
      ],
      [
        "Tl<sup>+</sup> + e<sup>−</sup> ⇌ Tl(r)",
        "−0,34",
        "C"
      ],
      [
        "PbSO<sub>4</sub>(r) + 2e<sup>−</sup> ⇌ Pb(r) + SO<sub>4</sub><sup>2−</sup> <small>(acquy chì)</small>",
        "−0,36",
        "C"
      ],
      [
        "Cd<sup>2+</sup> + 2e<sup>−</sup> ⇌ Cd(r)",
        "−0,40",
        "C"
      ],
      [
        "Cr<sup>3+</sup> + e<sup>−</sup> ⇌ Cr<sup>2+</sup>",
        "−0,41",
        "C"
      ],
      [
        "Fe<sup>2+</sup> + 2e<sup>−</sup> ⇌ Fe(r) <small>(CRC −0,447)</small>",
        "−0,44",
        "S"
      ],
      [
        "2CO<sub>2</sub>(g) + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> <small>(acid oxalic)</small>",
        "−0,49",
        "S"
      ],
      [
        "Ag<sub>2</sub>S(r) + 2e<sup>−</sup> ⇌ 2Ag(r) + S<sup>2−</sup>",
        "−0,69",
        "C"
      ],
      [
        "Cr<sup>3+</sup> + 3e<sup>−</sup> ⇌ Cr(r)",
        "−0,74",
        "C"
      ],
      [
        "Zn<sup>2+</sup> + 2e<sup>−</sup> ⇌ Zn(r)",
        "−0,76",
        "C"
      ],
      [
        "2H<sub>2</sub>O + 2e<sup>−</sup> ⇌ H<sub>2</sub>(g) + 2OH<sup>−</sup>",
        "−0,83",
        "C"
      ],
      [
        "Mn<sup>2+</sup> + 2e<sup>−</sup> ⇌ Mn(r)",
        "−1,18",
        "C"
      ],
      [
        "Al<sup>3+</sup> + 3e<sup>−</sup> ⇌ Al(r)",
        "−1,66",
        "C"
      ],
      [
        "Mg<sup>2+</sup> + 2e<sup>−</sup> ⇌ Mg(r)",
        "−2,37",
        "C"
      ],
      [
        "Na<sup>+</sup> + e<sup>−</sup> ⇌ Na(r)",
        "−2,71",
        "C"
      ],
      [
        "Ca<sup>2+</sup> + 2e<sup>−</sup> ⇌ Ca(r)",
        "−2,87",
        "C"
      ],
      [
        "Ba<sup>2+</sup> + 2e<sup>−</sup> ⇌ Ba(r)",
        "−2,91",
        "C"
      ],
      [
        "K<sup>+</sup> + e<sup>−</sup> ⇌ K(r)",
        "−2,93",
        "C"
      ],
      [
        "Li<sup>+</sup> + e<sup>−</sup> ⇌ Li(r)",
        "−3,04",
        "C"
      ]
    ],
    "ghiChu": "25 °C, hoạt độ các chất bằng 1, so với điện cực hydro chuẩn (SHE). Xếp từ chất oxi hóa mạnh nhất xuống. (r): rắn, (l): lỏng, (g): khí. Dòng có dấu * là giá trị <b>quy ước của bài giảng</b> (dùng thống nhất trong lí thuyết và bài tập của app), có thể lệch nhẹ so với sách. Khi đề bài cho hằng số, luôn dùng số của đề. Cột Nguồn: C = CRC <i>Handbook of Chemistry and Physics</i>, bảng “Electrochemical series” (Vanýsek); S = Skoog, <i>Fundamentals of Analytical Chemistry</i>, Appendix 5; H = Harris, <i>Quantitative Chemical Analysis</i>, Appendix H. Làm tròn 2 – 3 chữ số thập phân; các tài liệu có thể lệch 0,01 – 0,03 V. Thế trong môi trường cụ thể: xem bảng Thế điều kiện E°'."
  },
  {
    "id": "the-dieu-kien",
    "icon": "🔋",
    "ten": "Thế điều kiện E°' thường dùng",
    "cot": [
      "Cặp",
      "Môi trường",
      "E°' (V)",
      "Nguồn"
    ],
    "dong": [
      [
        "Ce<sup>4+</sup>/Ce<sup>3+</sup>",
        "HClO<sub>4</sub> 1 M",
        "+1,70",
        "S"
      ],
      [
        "Ce<sup>4+</sup>/Ce<sup>3+</sup> *",
        "HNO<sub>3</sub> 1 M",
        "+1,61",
        "*"
      ],
      [
        "Ce<sup>4+</sup>/Ce<sup>3+</sup>",
        "H<sub>2</sub>SO<sub>4</sub> 1 M",
        "+1,44",
        "S"
      ],
      [
        "Ce<sup>4+</sup>/Ce<sup>3+</sup>",
        "HCl 1 M",
        "+1,28",
        "S"
      ],
      [
        "MnO<sub>4</sub><sup>−</sup>/Mn<sup>2+</sup> *",
        "phụ thuộc pH ([Mn], [MnO<sub>4</sub><sup>−</sup>] = 1)",
        "1,51 − 0,0947·pH",
        "*"
      ],
      [
        "Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/Cr<sup>3+</sup>",
        "H<sub>2</sub>SO<sub>4</sub> 2 M",
        "+1,11",
        "H"
      ],
      [
        "Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/Cr<sup>3+</sup>",
        "HCl 1 M",
        "+1,00",
        "H"
      ],
      [
        "Fe<sup>3+</sup>/Fe<sup>2+</sup>",
        "HClO<sub>4</sub> 1 M",
        "+0,732",
        "S"
      ],
      [
        "Fe<sup>3+</sup>/Fe<sup>2+</sup>",
        "HCl 1 M",
        "+0,700",
        "S"
      ],
      [
        "Fe<sup>3+</sup>/Fe<sup>2+</sup>",
        "H<sub>2</sub>SO<sub>4</sub> 1 M",
        "+0,68",
        "S"
      ],
      [
        "Fe(CN)<sub>6</sub><sup>3−</sup>/Fe(CN)<sub>6</sub><sup>4−</sup>",
        "HClO<sub>4</sub> hoặc H<sub>2</sub>SO<sub>4</sub> 1 M",
        "+0,72",
        "S"
      ],
      [
        "Fe(CN)<sub>6</sub><sup>3−</sup>/Fe(CN)<sub>6</sub><sup>4−</sup>",
        "HCl 1 M",
        "+0,71",
        "S"
      ],
      [
        "Ag<sup>+</sup>/Ag",
        "HClO<sub>4</sub> 1 M",
        "+0,792",
        "S"
      ],
      [
        "Ag<sup>+</sup>/Ag (thực chất AgCl/Ag)",
        "HCl 1 M",
        "+0,228",
        "S"
      ],
      [
        "H<sub>3</sub>AsO<sub>4</sub>/H<sub>3</sub>AsO<sub>3</sub>",
        "HCl hoặc HClO<sub>4</sub> 1 M",
        "+0,577",
        "S"
      ],
      [
        "H<sub>3</sub>AsO<sub>4</sub>/H<sub>3</sub>AsO<sub>3</sub> *",
        "phụ thuộc pH",
        "0,57 − 0,059·pH",
        "*"
      ],
      [
        "Cu<sup>2+</sup>/CuI *",
        "[I<sup>−</sup>] = 1 M (tính từ E°(Cu<sup>2+</sup>/Cu<sup>+</sup>) = 0,18 V, pK<sub>sp</sub>(CuI) ≈ 12)",
        "≈ +0,89",
        "*"
      ],
      [
        "Sn<sup>4+</sup>/Sn<sup>2+</sup>",
        "HCl 1 M",
        "+0,14",
        "S"
      ]
    ],
    "ghiChu": "Thế điều kiện (thế hình thức) E°': thế đo được khi tổng nồng độ dạng oxi hóa và dạng khử đều bằng 1 M trong môi trường ghi kèm (đã gộp ảnh hưởng tạo phức, pH, lực ion), 25 °C. Dùng E°' thay E° để tính đường chuẩn độ oxi hóa – khử trong môi trường đó. Dòng * là quy ước/tính theo bài giảng (MnO<sub>4</sub><sup>−</sup>: 8·0,05916/5 = 0,0947). Nguồn: S = Skoog, <i>Fundamentals of Analytical Chemistry</i>, Appendix 5 (cột formal potential); H = Harris, <i>Quantitative Chemical Analysis</i>, chương chuẩn độ oxi hóa – khử (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>)."
  },
  {
    "id": "dien-cuc-so-sanh",
    "icon": "🔌",
    "ten": "Điện cực so sánh",
    "cot": [
      "Điện cực",
      "Sơ đồ",
      "E so với SHE (V, 25 °C)",
      "Nguồn"
    ],
    "dong": [
      [
        "Điện cực hydro chuẩn (SHE)",
        "Pt | H<sub>2</sub> (1 bar) | H<sup>+</sup> (a = 1)",
        "0,000 (quy ước)",
        "—"
      ],
      [
        "Calomen bão hòa (SCE) *",
        "Hg | Hg<sub>2</sub>Cl<sub>2</sub> | KCl bão hòa",
        "+0,241",
        "*"
      ],
      [
        "Calomen 1 M (NCE)",
        "Hg | Hg<sub>2</sub>Cl<sub>2</sub> | KCl 1 M",
        "+0,280",
        "S"
      ],
      [
        "Calomen 0,1 M",
        "Hg | Hg<sub>2</sub>Cl<sub>2</sub> | KCl 0,1 M",
        "+0,336",
        "S"
      ],
      [
        "Bạc – bạc chloride bão hòa *",
        "Ag | AgCl | KCl bão hòa",
        "+0,197",
        "*"
      ],
      [
        "Bạc – bạc chloride 3,5 M",
        "Ag | AgCl | KCl 3,5 M",
        "+0,205",
        "S"
      ],
      [
        "Thủy ngân – thủy ngân(I) sulfate (E°)",
        "Hg | Hg<sub>2</sub>SO<sub>4</sub> | SO<sub>4</sub><sup>2−</sup> (a = 1)",
        "+0,613",
        "C"
      ]
    ],
    "ghiChu": "Đổi thang: E(so với SCE) = E(so với SHE) − 0,241 V; E(so với Ag/AgCl bão hòa) = E(so với SHE) − 0,197 V. Thế điện cực so sánh phụ thuộc nhiệt độ (SCE ≈ −0,7 mV/°C). Skoog ghi SCE 0,244 V và Ag/AgCl bão hòa 0,199 V; bài giảng dùng 0,241 và 0,197 V (dấu *, theo Harris). Nguồn: Harris, <i>Quantitative Chemical Analysis</i>, chương điện cực; S = Skoog, bảng thế điện cực so sánh; C = CRC Handbook."
  },
  {
    "id": "edta-kf",
    "icon": "🔗",
    "ten": "Hằng số bền phức EDTA (lg Kf)",
    "cot": [
      "Ion",
      "lg K<sub>f</sub>",
      "pH tối thiểu (≈)",
      "Nguồn"
    ],
    "dong": [
      [
        "Na<sup>+</sup>",
        "1,86",
        "không đạt",
        "H"
      ],
      [
        "Li<sup>+</sup>",
        "2,95",
        "không đạt",
        "H"
      ],
      [
        "Ag<sup>+</sup>",
        "7,20",
        "không đạt",
        "H"
      ],
      [
        "Ba<sup>2+</sup>",
        "7,88",
        "không đạt",
        "H"
      ],
      [
        "Sr<sup>2+</sup>",
        "8,72",
        "9,7",
        "H"
      ],
      [
        "Mg<sup>2+</sup>",
        "8,79",
        "9,7",
        "H"
      ],
      [
        "Be<sup>2+</sup>",
        "9,7",
        "8,7",
        "H"
      ],
      [
        "Ca<sup>2+</sup> *",
        "10,70",
        "7,7",
        "*"
      ],
      [
        "V<sup>2+</sup>",
        "12,7",
        "6,0",
        "H"
      ],
      [
        "Mn<sup>2+</sup>",
        "13,89",
        "5,3",
        "H"
      ],
      [
        "Fe<sup>2+</sup>",
        "14,30",
        "5,1",
        "H"
      ],
      [
        "Al<sup>3+</sup>",
        "16,4",
        "4,1",
        "H"
      ],
      [
        "Co<sup>2+</sup>",
        "16,45",
        "4,0",
        "H"
      ],
      [
        "Cd<sup>2+</sup>",
        "16,46",
        "4,0",
        "S"
      ],
      [
        "Zn<sup>2+</sup>",
        "16,50",
        "4,0",
        "S"
      ],
      [
        "TiO<sup>2+</sup>",
        "17,3",
        "3,6",
        "H"
      ],
      [
        "Pb<sup>2+</sup>",
        "18,04",
        "3,3",
        "S"
      ],
      [
        "Y<sup>3+</sup>",
        "18,08",
        "3,3",
        "H"
      ],
      [
        "Sn<sup>2+</sup>",
        "18,3",
        "3,2",
        "H"
      ],
      [
        "Ni<sup>2+</sup>",
        "18,52",
        "3,1",
        "H"
      ],
      [
        "Cu<sup>2+</sup>",
        "18,78",
        "3,0",
        "H"
      ],
      [
        "VO<sup>2+</sup>",
        "18,8",
        "3,0",
        "H"
      ],
      [
        "Ga<sup>3+</sup>",
        "20,3",
        "2,4",
        "H"
      ],
      [
        "Ti<sup>3+</sup>",
        "21,3",
        "2,1",
        "H"
      ],
      [
        "Hg<sup>2+</sup>",
        "21,5",
        "2,0",
        "H"
      ],
      [
        "Sc<sup>3+</sup>",
        "23,1",
        "1,6",
        "H"
      ],
      [
        "Cr<sup>3+</sup>",
        "23,4",
        "1,5",
        "H"
      ],
      [
        "In<sup>3+</sup>",
        "24,9",
        "1,2",
        "H"
      ],
      [
        "Fe<sup>3+</sup>",
        "25,1",
        "1,2",
        "H"
      ],
      [
        "V<sup>3+</sup>",
        "25,9",
        "1,0",
        "H"
      ],
      [
        "Bi<sup>3+</sup>",
        "27,8",
        "0,6",
        "H"
      ],
      [
        "Tl<sup>3+</sup>",
        "35,3",
        "< 1",
        "H"
      ],
      [
        "Co<sup>3+</sup>",
        "41,4",
        "< 1",
        "H"
      ]
    ],
    "ghiChu": "M<sup>n+</sup> + Y<sup>4−</sup> ⇌ MY<sup>n−4</sup>; 25 °C, μ = 0,1 M (Skoog: 20 °C). Ca<sup>2+</sup> dùng quy ước 10,70 (Harris 10,65). Cột pH tối thiểu: pH thấp nhất để K<sub>f</sub>' = α<sub>Y⁴⁻</sub>K<sub>f</sub> ≥ 10<sup>8</sup> (tính từ α<sub>Y⁴⁻</sub>, chưa xét kết tủa hydroxide hay chất tạo phức phụ). Al<sup>3+</sup>, Cr<sup>3+</sup>, Co<sup>3+</sup> phản ứng với EDTA rất chậm nên phải dùng chuẩn độ ngược. Đề bài có thể viết β, β' thay cho K<sub>f</sub>, K<sub>f</sub>'; α<sub>Y(H)</sub> = 1/α<sub>Y⁴⁻</sub>. Không liệt kê các nguyên tố đất hiếm (lg K<sub>f</sub> ≈ 15,5 – 19,8). Nguồn: H = Harris, <i>Quantitative Chemical Analysis</i> (8th/9th ed.), bảng hằng số tạo phức kim loại – EDTA (dẫn từ Martell &amp; Smith, NIST Critical Stability Constants); S = Skoog, bảng hằng số tạo phức EDTA."
  },
  {
    "id": "alpha-y",
    "icon": "📈",
    "ten": "Phân số α(Y⁴⁻) theo pH",
    "cot": [
      "pH",
      "α<sub>Y⁴⁻</sub>",
      "lg α<sub>Y⁴⁻</sub>"
    ],
    "dong": [
      [
        "1",
        "1,4·10<sup>−18</sup>",
        "−17,85"
      ],
      [
        "2",
        "2,6·10<sup>−14</sup>",
        "−13,59"
      ],
      [
        "3",
        "2,1·10<sup>−11</sup>",
        "−10,69"
      ],
      [
        "4",
        "3,0·10<sup>−9</sup>",
        "−8,52"
      ],
      [
        "5",
        "2,9·10<sup>−7</sup>",
        "−6,53"
      ],
      [
        "6",
        "1,8·10<sup>−5</sup>",
        "−4,74"
      ],
      [
        "7",
        "3,8·10<sup>−4</sup>",
        "−3,43"
      ],
      [
        "8",
        "4,2·10<sup>−3</sup>",
        "−2,38"
      ],
      [
        "9",
        "0,041",
        "−1,39"
      ],
      [
        "10",
        "0,30",
        "−0,52"
      ],
      [
        "11",
        "0,81",
        "−0,09"
      ],
      [
        "12",
        "0,98",
        "−0,01"
      ],
      [
        "13",
        "0,998",
        "−0,001"
      ],
      [
        "14",
        "0,9998",
        "≈ 0"
      ]
    ],
    "ghiChu": "Tính từ pK<sub>1</sub>…pK<sub>6</sub> của H<sub>6</sub>Y<sup>2+</sup> = 0,0; 1,5; 2,00; 2,69; 6,13; 10,37 (25 °C, μ = 0,1 M; Harris). Khi đề cho α<sub>Y⁴⁻</sub>, dùng số của đề."
  },
  {
    "id": "phuc-beta",
    "icon": "🧿",
    "ten": "Hằng số bền tổng lg β của phức (NH₃, CN⁻, OH⁻, halide…)",
    "cot": [
      "Ion – phối tử",
      "lg β<sub>1</sub> ; lg β<sub>2</sub> ; …",
      "Phức bão hòa",
      "Nguồn"
    ],
    "dong": [
      [
        "Ag<sup>+</sup> – NH<sub>3</sub>",
        "β<sub>1</sub> 3,31 ; β<sub>2</sub> 7,22",
        "Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>",
        "S"
      ],
      [
        "Ag<sup>+</sup> – CN<sup>−</sup>",
        "β<sub>2</sub> 20,48",
        "Ag(CN)<sub>2</sub><sup>−</sup>",
        "S"
      ],
      [
        "Ag<sup>+</sup> – S<sub>2</sub>O<sub>3</sub><sup>2−</sup>",
        "β<sub>1</sub> 8,82 ; β<sub>2</sub> 13,5",
        "Ag(S<sub>2</sub>O<sub>3</sub>)<sub>2</sub><sup>3−</sup>",
        "S"
      ],
      [
        "Ag<sup>+</sup> – Cl<sup>−</sup>",
        "β<sub>1</sub> 3,04 ; β<sub>2</sub> 5,04",
        "AgCl<sub>2</sub><sup>−</sup>",
        "S"
      ],
      [
        "Cu<sup>2+</sup> – NH<sub>3</sub>",
        "β<sub>1</sub> 3,99 ; β<sub>2</sub> 7,33 ; β<sub>3</sub> 10,06 ; β<sub>4</sub> 12,03",
        "Cu(NH<sub>3</sub>)<sub>4</sub><sup>2+</sup>",
        "M"
      ],
      [
        "Zn<sup>2+</sup> – NH<sub>3</sub>",
        "β<sub>1</sub> 2,18 ; β<sub>2</sub> 4,43 ; β<sub>3</sub> 6,74 ; β<sub>4</sub> 8,70",
        "Zn(NH<sub>3</sub>)<sub>4</sub><sup>2+</sup>",
        "H"
      ],
      [
        "Zn<sup>2+</sup> – OH<sup>−</sup>",
        "β<sub>1</sub> 4,40 ; β<sub>2</sub> 11,30 ; β<sub>3</sub> 14,14 ; β<sub>4</sub> 17,66",
        "Zn(OH)<sub>4</sub><sup>2−</sup>",
        "H"
      ],
      [
        "Zn<sup>2+</sup> – CN<sup>−</sup>",
        "β<sub>4</sub> 16,7",
        "Zn(CN)<sub>4</sub><sup>2−</sup>",
        "M"
      ],
      [
        "Cd<sup>2+</sup> – NH<sub>3</sub>",
        "β<sub>1</sub> 2,65 ; β<sub>2</sub> 4,75 ; β<sub>3</sub> 6,19 ; β<sub>4</sub> 7,12",
        "Cd(NH<sub>3</sub>)<sub>4</sub><sup>2+</sup>",
        "M"
      ],
      [
        "Ni<sup>2+</sup> – NH<sub>3</sub>",
        "β<sub>1</sub> 2,67 ; β<sub>2</sub> 4,79 ; β<sub>3</sub> 6,40 ; β<sub>4</sub> 7,47 ; β<sub>5</sub> 8,10 ; β<sub>6</sub> 8,01",
        "Ni(NH<sub>3</sub>)<sub>6</sub><sup>2+</sup>",
        "M"
      ],
      [
        "Ni<sup>2+</sup> – CN<sup>−</sup>",
        "β<sub>4</sub> 31,3",
        "Ni(CN)<sub>4</sub><sup>2−</sup>",
        "M"
      ],
      [
        "Hg<sup>2+</sup> – Cl<sup>−</sup>",
        "β<sub>1</sub> 6,74 ; β<sub>2</sub> 13,22 ; β<sub>3</sub> 14,07 ; β<sub>4</sub> 15,07",
        "HgCl<sub>4</sub><sup>2−</sup>",
        "M"
      ],
      [
        "Hg<sup>2+</sup> – Br<sup>−</sup>",
        "β<sub>1</sub> 9,05 ; β<sub>2</sub> 17,32 ; β<sub>3</sub> 19,74 ; β<sub>4</sub> 21,00",
        "HgBr<sub>4</sub><sup>2−</sup>",
        "M"
      ],
      [
        "Hg<sup>2+</sup> – I<sup>−</sup>",
        "β<sub>1</sub> 12,87 ; β<sub>2</sub> 23,82 ; β<sub>3</sub> 27,60 ; β<sub>4</sub> 29,83",
        "HgI<sub>4</sub><sup>2−</sup>",
        "M"
      ],
      [
        "Hg<sup>2+</sup> – CN<sup>−</sup>",
        "β<sub>4</sub> 41,4",
        "Hg(CN)<sub>4</sub><sup>2−</sup>",
        "M"
      ],
      [
        "Fe<sup>3+</sup> – SCN<sup>−</sup>",
        "β<sub>1</sub> 3,03 ; β<sub>2</sub> 4,33",
        "Fe(SCN)<sub>2</sub><sup>+</sup>",
        "M"
      ],
      [
        "Fe<sup>3+</sup> – F<sup>−</sup>",
        "β<sub>1</sub> 5,28 ; β<sub>2</sub> 9,30 ; β<sub>3</sub> 12,06",
        "FeF<sub>3</sub>",
        "M"
      ]
    ],
    "ghiChu": "β<sub>n</sub> = [ML<sub>n</sub>]/([M][L]<sup>n</sup>) (hằng số bền tổng), 25 °C, μ ≈ 0 – 0,1 M tùy hệ. lg K<sub>n</sub> (từng nấc) = lg β<sub>n</sub> − lg β<sub>n−1</sub>. Chỉ ghi các nấc có số liệu tin cậy. Dùng để tính α<sub>M</sub> khi có chất tạo phức phụ: 1/α<sub>M</sub> = 1 + β<sub>1</sub>[L] + β<sub>2</sub>[L]<sup>2</sup> + … Các tài liệu có thể lệch 0,1 – 0,5 đơn vị lg (ví dụ Ag(CN)<sub>2</sub><sup>−</sup>: 20,5 – 21,1). Fe<sup>3+</sup> – F<sup>−</sup>: β<sub>6</sub> ≈ 10<sup>16</sup> (bài giảng dùng lg β<sub>6</sub> = 16 khi tính E°'). Nguồn: S = Skoog, <i>Fundamentals of Analytical Chemistry</i>, Appendix 4; H = Harris, <i>Quantitative Chemical Analysis</i>, Appendix I và ví dụ α<sub>Zn</sub> trong chương EDTA; M = Martell &amp; Smith, <i>Critical Stability Constants</i> (qua Lange's Handbook / Lur'e)."
  },
  {
    "id": "chi-thi",
    "icon": "🎨",
    "ten": "Chỉ thị acid – base",
    "cot": [
      "Chỉ thị",
      "Khoảng pH",
      "pK<sub>In</sub>",
      "Đổi màu (acid → base)"
    ],
    "dong": [
      [
        "Metyl tím",
        "0,0 – 1,6",
        "—",
        "vàng → tím"
      ],
      [
        "Cresol đỏ (nấc 1)",
        "0,2 – 1,8",
        "—",
        "đỏ → vàng"
      ],
      [
        "Thymol xanh (nấc 1)",
        "1,2 – 2,8",
        "1,65",
        "đỏ → vàng"
      ],
      [
        "Metyl vàng",
        "2,9 – 4,0",
        "3,3",
        "đỏ → vàng"
      ],
      [
        "Bromphenol xanh",
        "3,0 – 4,6",
        "—",
        "vàng → tím"
      ],
      [
        "Đỏ Congo",
        "3,0 – 5,0",
        "—",
        "tím → đỏ"
      ],
      [
        "Metyl da cam *",
        "3,1 – 4,4",
        "3,46",
        "đỏ → vàng"
      ],
      [
        "Etyl da cam",
        "3,4 – 4,8",
        "—",
        "đỏ → vàng"
      ],
      [
        "Bromcresol lục",
        "3,8 – 5,4",
        "4,66",
        "vàng → xanh lam"
      ],
      [
        "Metyl đỏ *",
        "4,4 – 6,2",
        "5,00",
        "đỏ → vàng"
      ],
      [
        "Chlorophenol đỏ",
        "4,8 – 6,4",
        "—",
        "vàng → đỏ"
      ],
      [
        "Quỳ (litmus)",
        "5,0 – 8,0",
        "—",
        "đỏ → xanh lam"
      ],
      [
        "Bromcresol tía",
        "5,2 – 6,8",
        "6,12",
        "vàng → tía"
      ],
      [
        "4-Nitrophenol",
        "5,6 – 7,6",
        "7,15",
        "không màu → vàng"
      ],
      [
        "Bromthymol xanh",
        "6,0 – 7,6",
        "7,10",
        "vàng → xanh lam"
      ],
      [
        "Phenol đỏ",
        "6,4 – 8,0",
        "7,81",
        "vàng → đỏ"
      ],
      [
        "Đỏ trung tính",
        "6,8 – 8,0",
        "—",
        "đỏ → vàng"
      ],
      [
        "Cresol đỏ (nấc 2)",
        "7,2 – 8,8",
        "—",
        "vàng → đỏ"
      ],
      [
        "Cresol tía",
        "7,6 – 9,2",
        "8,32",
        "vàng → tía"
      ],
      [
        "Thymol xanh (nấc 2)",
        "8,0 – 9,6",
        "8,96",
        "vàng → xanh lam"
      ],
      [
        "Phenolphtalein *",
        "8,2 – 10,0",
        "—",
        "không màu → hồng"
      ],
      [
        "Thymolphtalein",
        "9,4 – 10,6",
        "—",
        "không màu → xanh lam"
      ],
      [
        "Alizarin vàng",
        "10,1 – 12,0",
        "—",
        "vàng → cam đỏ"
      ],
      [
        "Chỉ thị hỗn hợp Tashiro (metyl đỏ + xanh metylen)",
        "≈ 5,4",
        "—",
        "tím → xanh lục (chuẩn độ NH<sub>3</sub> trong Kjeldahl)"
      ]
    ],
    "ghiChu": "Chọn chỉ thị có khoảng đổi màu nằm trong bước nhảy pH của đường chuẩn độ. Khoảng đổi màu ≈ pK<sub>In</sub> ± 1; tài liệu khác nhau có thể lệch 0,1 – 0,4 đơn vị pH (ví dụ Harris ghi metyl đỏ 4,8 – 6,0; phenolphtalein 8,0 – 9,6). Dấu *: khoảng quy ước của bài giảng. Chỉ số chuẩn độ pT thường dùng: metyl da cam 4; metyl đỏ 5; bromthymol xanh 7; phenolphtalein 9. Nguồn: Harris, <i>Quantitative Chemical Analysis</i>, bảng chỉ thị acid – base (chương chuẩn độ acid – base); cột pK<sub>In</sub>: Skoog, <i>Fundamentals of Analytical Chemistry</i>, bảng chỉ thị acid – base; metyl vàng và 4-nitrophenol lấy theo pK<sub>a</sub> của chất (“—”: sách không ghi)."
  },
  {
    "id": "chi-thi-kl",
    "icon": "🟣",
    "ten": "Chỉ thị kim loại (EDTA)",
    "cot": [
      "Chỉ thị",
      "pH dùng",
      "Màu (MIn → In)",
      "Dùng cho"
    ],
    "dong": [
      [
        "ET-OO (eriocrom đen T, Erio T)",
        "10",
        "đỏ nho → xanh chàm",
        "Mg<sup>2+</sup>, Zn<sup>2+</sup>, Cd<sup>2+</sup>, Pb<sup>2+</sup>, tổng Ca + Mg (độ cứng); Ca<sup>2+</sup> riêng cho điểm cuối kém, phải thêm ít MgY<sup>2−</sup>"
      ],
      [
        "Calmagit",
        "10",
        "đỏ → xanh lam",
        "Ca<sup>2+</sup> + Mg<sup>2+</sup> (thay ET-OO, dung dịch bền hơn)"
      ],
      [
        "Murexit (amoni purpurat)",
        "12 – 13",
        "đỏ → tím",
        "Ca<sup>2+</sup> riêng (Mg kết tủa Mg(OH)<sub>2</sub>); Ni<sup>2+</sup>, Cu<sup>2+</sup> trong NH<sub>3</sub>"
      ],
      [
        "Acid calconcarboxylic (chỉ thị Patton – Reeder)",
        "12 – 13",
        "đỏ → xanh lam",
        "Ca<sup>2+</sup> riêng khi có Mg<sup>2+</sup>"
      ],
      [
        "Acid sulfosalicylic",
        "2 – 3",
        "tím đỏ → vàng nhạt",
        "Fe<sup>3+</sup>"
      ],
      [
        "Xylenol da cam",
        "1 – 6",
        "đỏ tím → vàng",
        "Bi<sup>3+</sup> (pH 1 – 3), Zn<sup>2+</sup>, Pb<sup>2+</sup>, Cd<sup>2+</sup> (pH 5 – 6, đệm urotropin)"
      ],
      [
        "Pyrocatechol tím",
        "2 – 3",
        "xanh lam → vàng",
        "Bi<sup>3+</sup>, Th<sup>4+</sup>"
      ],
      [
        "PAN (1-(2-pyridylazo)-2-naphtol)",
        "2 – 11",
        "đỏ → vàng",
        "Cu<sup>2+</sup>; chỉ thị gián tiếp qua CuY cho nhiều ion"
      ]
    ],
    "ghiChu": "Phức kim loại – chỉ thị (MIn) phải kém bền hơn phức MY để EDTA đẩy được chỉ thị ra ở điểm tương đương. Màu của In tự do phụ thuộc pH (chỉ thị kim loại đồng thời là chỉ thị acid – base), nên phải giữ đúng pH bằng đệm. Cu<sup>2+</sup>, Ni<sup>2+</sup>, Co<sup>2+</sup>, Fe<sup>3+</sup>, Al<sup>3+</sup> “khóa” ET-OO (phong tỏa chỉ thị) – cần che bằng CN<sup>−</sup> hoặc trietanolamin. Nguồn: Harris, <i>Quantitative Chemical Analysis</i> (chương EDTA, bảng chỉ thị ion kim loại); Skoog, chương chuẩn độ tạo phức."
  },
  {
    "id": "chi-thi-oxh",
    "icon": "🔶",
    "ten": "Chỉ thị oxi hóa – khử",
    "cot": [
      "Chỉ thị",
      "E<sup>0</sup> (V)",
      "Màu (khử → oxi hóa)"
    ],
    "dong": [
      [
        "Phenosafranin",
        "0,28",
        "không màu → đỏ"
      ],
      [
        "Indigo tetrasulfonat",
        "0,36",
        "không màu → xanh lam"
      ],
      [
        "Xanh metylen",
        "0,53",
        "không màu → xanh lam"
      ],
      [
        "Diphenylamin",
        "0,76",
        "không màu → tím"
      ],
      [
        "Acid diphenylamin sulfonic",
        "0,85",
        "không màu → tím đỏ"
      ],
      [
        "Acid diphenylbenzidin sulfonic",
        "0,87",
        "không màu → tím"
      ],
      [
        "Tris(2,2'-bipyridin)sắt(II)",
        "1,12",
        "đỏ → xanh nhạt"
      ],
      [
        "Ferroin (tris(1,10-phenanthrolin)sắt(II))",
        "1,15",
        "đỏ → xanh nhạt"
      ],
      [
        "Nitroferroin",
        "1,25",
        "đỏ → xanh nhạt"
      ],
      [
        "Tris(2,2'-bipyridin)rutheni(II)",
        "1,29",
        "vàng → xanh nhạt"
      ],
      [
        "Hồ tinh bột (với I<sub>2</sub>)",
        "—",
        "I<sub>3</sub><sup>−</sup> + hồ tinh bột: xanh đậm"
      ],
      [
        "KMnO<sub>4</sub> (tự chỉ thị)",
        "—",
        "không màu → hồng nhạt (dư 1 giọt)"
      ]
    ],
    "ghiChu": "Chỉ thị có H<sup>+</sup> tham gia bán phản ứng có thế phụ thuộc pH; số trong bảng ứng với [H<sup>+</sup>] = 1 M. Khoảng đổi màu ≈ E<sup>0</sup><sub>In</sub> ± 0,059/n V; chọn chỉ thị có E<sup>0</sup><sub>In</sub> gần E<sub>tđ</sub>. Ferroin trong H<sub>2</sub>SO<sub>4</sub> 1 M có E°' ≈ 1,06 V. Nguồn: Harris, <i>Quantitative Chemical Analysis</i>, bảng chỉ thị oxi hóa – khử (chương chuẩn độ oxi hóa – khử); Skoog, bảng chỉ thị oxi hóa – khử."
  },
  {
    "id": "chi-thi-ket-tua",
    "icon": "⚪",
    "ten": "Chỉ thị chuẩn độ kết tủa (bạc)",
    "cot": [
      "Phương pháp",
      "Chỉ thị",
      "Điều kiện",
      "Dấu hiệu điểm cuối"
    ],
    "dong": [
      [
        "Mohr",
        "K<sub>2</sub>CrO<sub>4</sub> (≈ 5·10<sup>−3</sup> M)",
        "pH 6,5 – 10 (trung tính, không có NH<sub>3</sub>); chuẩn Cl<sup>−</sup>, Br<sup>−</sup> bằng AgNO<sub>3</sub>",
        "kết tủa đỏ gạch Ag<sub>2</sub>CrO<sub>4</sub>"
      ],
      [
        "Volhard",
        "Fe<sup>3+</sup> (phèn sắt amoni)",
        "môi trường HNO<sub>3</sub>; chuẩn Ag<sup>+</sup> (hoặc Ag<sup>+</sup> dư sau khi kết tủa X<sup>−</sup>) bằng SCN<sup>−</sup>",
        "phức đỏ FeSCN<sup>2+</sup>"
      ],
      [
        "Fajans",
        "Fluorescein",
        "pH 7 – 10; Cl<sup>−</sup>",
        "kết tủa từ vàng lục chuyển hồng"
      ],
      [
        "Fajans",
        "Diclofluorescein",
        "pH 4 – 10; Cl<sup>−</sup>",
        "kết tủa chuyển hồng"
      ],
      [
        "Fajans",
        "Eosin (tetrabromofluorescein)",
        "pH 2 – 10; Br<sup>−</sup>, I<sup>−</sup>, SCN<sup>−</sup> (không dùng cho Cl<sup>−</sup>)",
        "kết tủa chuyển hồng đỏ"
      ]
    ],
    "ghiChu": "Volhard xác định Cl<sup>−</sup> theo kiểu chuẩn độ ngược: phải lọc AgCl hoặc phủ nitrobenzen trước khi chuẩn Ag<sup>+</sup> dư (vì AgSCN kém tan hơn AgCl). Chỉ thị hấp phụ Fajans đổi màu khi hấp phụ lên bề mặt kết tủa tích điện dương sau điểm tương đương. Nguồn: Harris, <i>Quantitative Chemical Analysis</i> (chuẩn độ kết tủa); Skoog, chương chuẩn độ kết tủa."
  },
  {
    "id": "t-student",
    "icon": "📊",
    "ten": "Bảng t (Student)",
    "cot": [
      "f = n − 1",
      "80%",
      "90%",
      "95%",
      "98%",
      "99%",
      "99,9%"
    ],
    "dong": [
      [
        "1",
        "3,08",
        "6,31",
        "12,71",
        "31,82",
        "63,66",
        "636,62"
      ],
      [
        "2",
        "1,89",
        "2,92",
        "4,30",
        "6,96",
        "9,92",
        "31,60"
      ],
      [
        "3",
        "1,64",
        "2,35",
        "3,18",
        "4,54",
        "5,84",
        "12,92"
      ],
      [
        "4",
        "1,53",
        "2,13",
        "2,78",
        "3,75",
        "4,60",
        "8,61"
      ],
      [
        "5",
        "1,48",
        "2,02",
        "2,57",
        "3,36",
        "4,03",
        "6,87"
      ],
      [
        "6",
        "1,44",
        "1,94",
        "2,45",
        "3,14",
        "3,71",
        "5,96"
      ],
      [
        "7",
        "1,41",
        "1,89",
        "2,36",
        "3,00",
        "3,50",
        "5,41"
      ],
      [
        "8",
        "1,40",
        "1,86",
        "2,31",
        "2,90",
        "3,36",
        "5,04"
      ],
      [
        "9",
        "1,38",
        "1,83",
        "2,26",
        "2,82",
        "3,25",
        "4,78"
      ],
      [
        "10",
        "1,37",
        "1,81",
        "2,23",
        "2,76",
        "3,17",
        "4,59"
      ],
      [
        "11",
        "1,36",
        "1,80",
        "2,20",
        "2,72",
        "3,11",
        "4,44"
      ],
      [
        "12",
        "1,36",
        "1,78",
        "2,18",
        "2,68",
        "3,05",
        "4,32"
      ],
      [
        "13",
        "1,35",
        "1,77",
        "2,16",
        "2,65",
        "3,01",
        "4,22"
      ],
      [
        "14",
        "1,35",
        "1,76",
        "2,14",
        "2,62",
        "2,98",
        "4,14"
      ],
      [
        "15",
        "1,34",
        "1,75",
        "2,13",
        "2,60",
        "2,95",
        "4,07"
      ],
      [
        "16",
        "1,34",
        "1,75",
        "2,12",
        "2,58",
        "2,92",
        "4,01"
      ],
      [
        "17",
        "1,33",
        "1,74",
        "2,11",
        "2,57",
        "2,90",
        "3,97"
      ],
      [
        "18",
        "1,33",
        "1,73",
        "2,10",
        "2,55",
        "2,88",
        "3,92"
      ],
      [
        "19",
        "1,33",
        "1,73",
        "2,09",
        "2,54",
        "2,86",
        "3,88"
      ],
      [
        "20",
        "1,33",
        "1,72",
        "2,09",
        "2,53",
        "2,85",
        "3,85"
      ],
      [
        "25",
        "1,32",
        "1,71",
        "2,06",
        "2,49",
        "2,79",
        "3,73"
      ],
      [
        "30",
        "1,31",
        "1,70",
        "2,04",
        "2,46",
        "2,75",
        "3,65"
      ],
      [
        "40",
        "1,30",
        "1,68",
        "2,02",
        "2,42",
        "2,70",
        "3,55"
      ],
      [
        "60",
        "1,30",
        "1,67",
        "2,00",
        "2,39",
        "2,66",
        "3,46"
      ],
      [
        "120",
        "1,29",
        "1,66",
        "1,98",
        "2,36",
        "2,62",
        "3,37"
      ],
      [
        "∞",
        "1,28",
        "1,64",
        "1,96",
        "2,33",
        "2,58",
        "3,29"
      ]
    ],
    "ghiChu": "Giá trị tới hạn hai phía ở mức tin cậy ghi trên cột (tính bằng phân phối t, trùng với Harris Table 4-4 và Skoog). Dùng cho khoảng tin cậy μ = x̄ ± ts/√n và các phép kiểm định t (f = n − 1 với một mẫu; f = n<sub>1</sub> + n<sub>2</sub> − 2 khi so sánh hai trung bình có phương sai gộp)."
  },
  {
    "id": "q-test",
    "icon": "🎯",
    "ten": "Bảng Q (Dixon, loại số liệu ngờ)",
    "cot": [
      "n",
      "90%",
      "95%",
      "99%"
    ],
    "dong": [
      [
        "3",
        "0,941",
        "0,970",
        "0,994"
      ],
      [
        "4",
        "0,765",
        "0,829",
        "0,926"
      ],
      [
        "5",
        "0,642",
        "0,710",
        "0,821"
      ],
      [
        "6",
        "0,560",
        "0,625",
        "0,740"
      ],
      [
        "7",
        "0,507",
        "0,568",
        "0,680"
      ],
      [
        "8",
        "0,468",
        "0,526",
        "0,634"
      ],
      [
        "9",
        "0,437",
        "0,493",
        "0,598"
      ],
      [
        "10",
        "0,412",
        "0,466",
        "0,568"
      ]
    ],
    "ghiChu": "Q<sub>tính</sub> = |x<sub>ngờ</sub> − x<sub>gần nhất</sub>| / (x<sub>max</sub> − x<sub>min</sub>). Q<sub>tính</sub> &gt; Q<sub>bảng</sub> thì loại. Chỉ dùng cho 3 ≤ n ≤ 10, mỗi lần kiểm một giá trị. Nguồn: Rorabacher, <i>Anal. Chem.</i> 63 (1991) 139, dẫn lại trong Skoog và Harris (các ấn bản cũ)."
  },
  {
    "id": "grubbs",
    "icon": "🔎",
    "ten": "Bảng G (Grubbs, loại số liệu ngờ)",
    "cot": [
      "n",
      "90%",
      "95%",
      "99%"
    ],
    "dong": [
      [
        "3",
        "1,148",
        "1,153",
        "1,155"
      ],
      [
        "4",
        "1,425",
        "1,463",
        "1,493"
      ],
      [
        "5",
        "1,602",
        "1,671",
        "1,749"
      ],
      [
        "6",
        "1,729",
        "1,822",
        "1,944"
      ],
      [
        "7",
        "1,828",
        "1,938",
        "2,097"
      ],
      [
        "8",
        "1,909",
        "2,032",
        "2,221"
      ],
      [
        "9",
        "1,977",
        "2,110",
        "2,323"
      ],
      [
        "10",
        "2,036",
        "2,176",
        "2,410"
      ],
      [
        "11",
        "2,088",
        "2,234",
        "2,484"
      ],
      [
        "12",
        "2,134",
        "2,285",
        "2,549"
      ],
      [
        "13",
        "2,176",
        "2,331",
        "2,607"
      ],
      [
        "14",
        "2,213",
        "2,372",
        "2,658"
      ],
      [
        "15",
        "2,248",
        "2,409",
        "2,705"
      ],
      [
        "20",
        "2,385",
        "2,557",
        "2,884"
      ],
      [
        "25",
        "2,486",
        "2,663",
        "3,009"
      ],
      [
        "30",
        "2,565",
        "2,745",
        "3,103"
      ]
    ],
    "ghiChu": "G<sub>tính</sub> = |x<sub>ngờ</sub> − x̄| / s (x̄, s tính cả giá trị ngờ). G<sub>tính</sub> &gt; G<sub>bảng</sub> thì loại. Giá trị tới hạn một phía (kiểm giá trị lớn nhất hoặc nhỏ nhất), tính theo công thức G = (n − 1)/√n·√(t²/(n − 2 + t²)) với t ở mức α/n, bậc tự do n − 2; cột 95% trùng bảng Grubbs trong Harris (lệch ≤ 0,001 do làm tròn). Harris khuyên dùng Grubbs thay cho Q."
  },
  {
    "id": "f-test",
    "icon": "⚖️",
    "ten": "Bảng F (95%, một phía)",
    "cot": [
      "f<sub>2</sub> ↓ f<sub>1</sub> →",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "12",
      "15",
      "20"
    ],
    "dong": [
      [
        "1",
        "161,45",
        "199,50",
        "215,71",
        "224,58",
        "230,16",
        "233,99",
        "236,77",
        "238,88",
        "240,54",
        "241,88",
        "243,91",
        "245,95",
        "248,01"
      ],
      [
        "2",
        "18,51",
        "19,00",
        "19,16",
        "19,25",
        "19,30",
        "19,33",
        "19,35",
        "19,37",
        "19,38",
        "19,40",
        "19,41",
        "19,43",
        "19,45"
      ],
      [
        "3",
        "10,13",
        "9,55",
        "9,28",
        "9,12",
        "9,01",
        "8,94",
        "8,89",
        "8,85",
        "8,81",
        "8,79",
        "8,74",
        "8,70",
        "8,66"
      ],
      [
        "4",
        "7,71",
        "6,94",
        "6,59",
        "6,39",
        "6,26",
        "6,16",
        "6,09",
        "6,04",
        "6,00",
        "5,96",
        "5,91",
        "5,86",
        "5,80"
      ],
      [
        "5",
        "6,61",
        "5,79",
        "5,41",
        "5,19",
        "5,05",
        "4,95",
        "4,88",
        "4,82",
        "4,77",
        "4,74",
        "4,68",
        "4,62",
        "4,56"
      ],
      [
        "6",
        "5,99",
        "5,14",
        "4,76",
        "4,53",
        "4,39",
        "4,28",
        "4,21",
        "4,15",
        "4,10",
        "4,06",
        "4,00",
        "3,94",
        "3,87"
      ],
      [
        "7",
        "5,59",
        "4,74",
        "4,35",
        "4,12",
        "3,97",
        "3,87",
        "3,79",
        "3,73",
        "3,68",
        "3,64",
        "3,57",
        "3,51",
        "3,44"
      ],
      [
        "8",
        "5,32",
        "4,46",
        "4,07",
        "3,84",
        "3,69",
        "3,58",
        "3,50",
        "3,44",
        "3,39",
        "3,35",
        "3,28",
        "3,22",
        "3,15"
      ],
      [
        "9",
        "5,12",
        "4,26",
        "3,86",
        "3,63",
        "3,48",
        "3,37",
        "3,29",
        "3,23",
        "3,18",
        "3,14",
        "3,07",
        "3,01",
        "2,94"
      ],
      [
        "10",
        "4,96",
        "4,10",
        "3,71",
        "3,48",
        "3,33",
        "3,22",
        "3,14",
        "3,07",
        "3,02",
        "2,98",
        "2,91",
        "2,85",
        "2,77"
      ],
      [
        "12",
        "4,75",
        "3,89",
        "3,49",
        "3,26",
        "3,11",
        "3,00",
        "2,91",
        "2,85",
        "2,80",
        "2,75",
        "2,69",
        "2,62",
        "2,54"
      ],
      [
        "15",
        "4,54",
        "3,68",
        "3,29",
        "3,06",
        "2,90",
        "2,79",
        "2,71",
        "2,64",
        "2,59",
        "2,54",
        "2,48",
        "2,40",
        "2,33"
      ],
      [
        "20",
        "4,35",
        "3,49",
        "3,10",
        "2,87",
        "2,71",
        "2,60",
        "2,51",
        "2,45",
        "2,39",
        "2,35",
        "2,28",
        "2,20",
        "2,12"
      ],
      [
        "30",
        "4,17",
        "3,32",
        "2,92",
        "2,69",
        "2,53",
        "2,42",
        "2,33",
        "2,27",
        "2,21",
        "2,16",
        "2,09",
        "2,01",
        "1,93"
      ],
      [
        "∞",
        "3,84",
        "3,00",
        "2,60",
        "2,37",
        "2,21",
        "2,10",
        "2,01",
        "1,94",
        "1,88",
        "1,83",
        "1,75",
        "1,67",
        "1,57"
      ]
    ],
    "ghiChu": "F = s<sub>1</sub><sup>2</sup>/s<sub>2</sub><sup>2</sup> với s<sub>1</sub> ≥ s<sub>2</sub>; f<sub>1</sub>: bậc tự do của tử số (phương sai lớn hơn), f<sub>2</sub>: bậc tự do của mẫu số. F<sub>tính</sub> &gt; F<sub>bảng</sub>: hai độ lệch chuẩn khác nhau có ý nghĩa. Đây là giá trị tới hạn một phía 5% (tương ứng kiểm định hai phía mức 90% khi đặt phương sai lớn ở tử; Harris và Skoog in bảng này). Kiểm định hai phía mức 95%: xem bảng F 97,5%. Tính bằng phân phối F."
  },
  {
    "id": "f-test-975",
    "icon": "⚖️",
    "ten": "Bảng F (97,5%, hai phía 95%)",
    "cot": [
      "f<sub>2</sub> ↓ f<sub>1</sub> →",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "12",
      "15",
      "20"
    ],
    "dong": [
      [
        "1",
        "647,79",
        "799,50",
        "864,16",
        "899,58",
        "921,85",
        "937,11",
        "948,22",
        "956,66",
        "963,28",
        "968,63",
        "976,71",
        "984,87",
        "993,10"
      ],
      [
        "2",
        "38,51",
        "39,00",
        "39,17",
        "39,25",
        "39,30",
        "39,33",
        "39,36",
        "39,37",
        "39,39",
        "39,40",
        "39,41",
        "39,43",
        "39,45"
      ],
      [
        "3",
        "17,44",
        "16,04",
        "15,44",
        "15,10",
        "14,88",
        "14,73",
        "14,62",
        "14,54",
        "14,47",
        "14,42",
        "14,34",
        "14,25",
        "14,17"
      ],
      [
        "4",
        "12,22",
        "10,65",
        "9,98",
        "9,60",
        "9,36",
        "9,20",
        "9,07",
        "8,98",
        "8,90",
        "8,84",
        "8,75",
        "8,66",
        "8,56"
      ],
      [
        "5",
        "10,01",
        "8,43",
        "7,76",
        "7,39",
        "7,15",
        "6,98",
        "6,85",
        "6,76",
        "6,68",
        "6,62",
        "6,52",
        "6,43",
        "6,33"
      ],
      [
        "6",
        "8,81",
        "7,26",
        "6,60",
        "6,23",
        "5,99",
        "5,82",
        "5,70",
        "5,60",
        "5,52",
        "5,46",
        "5,37",
        "5,27",
        "5,17"
      ],
      [
        "7",
        "8,07",
        "6,54",
        "5,89",
        "5,52",
        "5,29",
        "5,12",
        "4,99",
        "4,90",
        "4,82",
        "4,76",
        "4,67",
        "4,57",
        "4,47"
      ],
      [
        "8",
        "7,57",
        "6,06",
        "5,42",
        "5,05",
        "4,82",
        "4,65",
        "4,53",
        "4,43",
        "4,36",
        "4,30",
        "4,20",
        "4,10",
        "4,00"
      ],
      [
        "9",
        "7,21",
        "5,71",
        "5,08",
        "4,72",
        "4,48",
        "4,32",
        "4,20",
        "4,10",
        "4,03",
        "3,96",
        "3,87",
        "3,77",
        "3,67"
      ],
      [
        "10",
        "6,94",
        "5,46",
        "4,83",
        "4,47",
        "4,24",
        "4,07",
        "3,95",
        "3,85",
        "3,78",
        "3,72",
        "3,62",
        "3,52",
        "3,42"
      ],
      [
        "12",
        "6,55",
        "5,10",
        "4,47",
        "4,12",
        "3,89",
        "3,73",
        "3,61",
        "3,51",
        "3,44",
        "3,37",
        "3,28",
        "3,18",
        "3,07"
      ],
      [
        "15",
        "6,20",
        "4,77",
        "4,15",
        "3,80",
        "3,58",
        "3,41",
        "3,29",
        "3,20",
        "3,12",
        "3,06",
        "2,96",
        "2,86",
        "2,76"
      ],
      [
        "20",
        "5,87",
        "4,46",
        "3,86",
        "3,51",
        "3,29",
        "3,13",
        "3,01",
        "2,91",
        "2,84",
        "2,77",
        "2,68",
        "2,57",
        "2,46"
      ],
      [
        "30",
        "5,57",
        "4,18",
        "3,59",
        "3,25",
        "3,03",
        "2,87",
        "2,75",
        "2,65",
        "2,57",
        "2,51",
        "2,41",
        "2,31",
        "2,20"
      ],
      [
        "∞",
        "5,02",
        "3,69",
        "3,12",
        "2,79",
        "2,57",
        "2,41",
        "2,29",
        "2,19",
        "2,11",
        "2,05",
        "1,94",
        "1,83",
        "1,71"
      ]
    ],
    "ghiChu": "Giá trị tới hạn một phía 2,5%, dùng cho kiểm định F hai phía ở mức tin cậy 95% (H<sub>1</sub>: σ<sub>1</sub> ≠ σ<sub>2</sub>), vẫn đặt phương sai lớn ở tử. Tính bằng phân phối F."
  },
  {
    "id": "nguyen-tu-khoi",
    "icon": "🧱",
    "ten": "Khối lượng nguyên tử (Z = 1 – 92)",
    "cot": [
      "Z",
      "Kí hiệu",
      "Nguyên tố",
      "M (g/mol)"
    ],
    "dong": [
      [
        "1",
        "H",
        "hydrogen",
        "1,0080"
      ],
      [
        "2",
        "He",
        "heli (helium)",
        "4,0026"
      ],
      [
        "3",
        "Li",
        "lithi (lithium)",
        "6,94"
      ],
      [
        "4",
        "Be",
        "beri (beryllium)",
        "9,0122"
      ],
      [
        "5",
        "B",
        "bor (boron)",
        "10,81"
      ],
      [
        "6",
        "C",
        "carbon",
        "12,011"
      ],
      [
        "7",
        "N",
        "nitrogen (nitơ)",
        "14,007"
      ],
      [
        "8",
        "O",
        "oxygen (oxi)",
        "15,999"
      ],
      [
        "9",
        "F",
        "fluor (fluorine)",
        "18,998"
      ],
      [
        "10",
        "Ne",
        "neon",
        "20,180"
      ],
      [
        "11",
        "Na",
        "natri (sodium)",
        "22,990"
      ],
      [
        "12",
        "Mg",
        "magnesi (magnesium)",
        "24,305"
      ],
      [
        "13",
        "Al",
        "nhôm (aluminium)",
        "26,982"
      ],
      [
        "14",
        "Si",
        "silic (silicon)",
        "28,085"
      ],
      [
        "15",
        "P",
        "phosphor (phosphorus)",
        "30,974"
      ],
      [
        "16",
        "S",
        "lưu huỳnh (sulfur)",
        "32,06"
      ],
      [
        "17",
        "Cl",
        "chlor (chlorine)",
        "35,45"
      ],
      [
        "18",
        "Ar",
        "argon",
        "39,95"
      ],
      [
        "19",
        "K",
        "kali (potassium)",
        "39,098"
      ],
      [
        "20",
        "Ca",
        "calci (calcium)",
        "40,078"
      ],
      [
        "21",
        "Sc",
        "scandi (scandium)",
        "44,956"
      ],
      [
        "22",
        "Ti",
        "titan (titanium)",
        "47,867"
      ],
      [
        "23",
        "V",
        "vanadi (vanadium)",
        "50,942"
      ],
      [
        "24",
        "Cr",
        "crom (chromium)",
        "51,996"
      ],
      [
        "25",
        "Mn",
        "mangan (manganese)",
        "54,938"
      ],
      [
        "26",
        "Fe",
        "sắt (iron)",
        "55,845"
      ],
      [
        "27",
        "Co",
        "cobalt",
        "58,933"
      ],
      [
        "28",
        "Ni",
        "nickel",
        "58,693"
      ],
      [
        "29",
        "Cu",
        "đồng (copper)",
        "63,546"
      ],
      [
        "30",
        "Zn",
        "kẽm (zinc)",
        "65,38"
      ],
      [
        "31",
        "Ga",
        "gali (gallium)",
        "69,723"
      ],
      [
        "32",
        "Ge",
        "germani (germanium)",
        "72,630"
      ],
      [
        "33",
        "As",
        "arsen (arsenic)",
        "74,922"
      ],
      [
        "34",
        "Se",
        "seleni (selenium)",
        "78,971"
      ],
      [
        "35",
        "Br",
        "brom (bromine)",
        "79,904"
      ],
      [
        "36",
        "Kr",
        "krypton",
        "83,798"
      ],
      [
        "37",
        "Rb",
        "rubidi (rubidium)",
        "85,468"
      ],
      [
        "38",
        "Sr",
        "stronti (strontium)",
        "87,62"
      ],
      [
        "39",
        "Y",
        "yttri (yttrium)",
        "88,906"
      ],
      [
        "40",
        "Zr",
        "zirconi (zirconium)",
        "91,224"
      ],
      [
        "41",
        "Nb",
        "niobi (niobium)",
        "92,906"
      ],
      [
        "42",
        "Mo",
        "molybden (molybdenum)",
        "95,95"
      ],
      [
        "43",
        "Tc",
        "techneti (technetium)",
        "[98]"
      ],
      [
        "44",
        "Ru",
        "rutheni (ruthenium)",
        "101,07"
      ],
      [
        "45",
        "Rh",
        "rhodi (rhodium)",
        "102,91"
      ],
      [
        "46",
        "Pd",
        "paladi (palladium)",
        "106,42"
      ],
      [
        "47",
        "Ag",
        "bạc (silver)",
        "107,87"
      ],
      [
        "48",
        "Cd",
        "cadmi (cadmium)",
        "112,41"
      ],
      [
        "49",
        "In",
        "indi (indium)",
        "114,82"
      ],
      [
        "50",
        "Sn",
        "thiếc (tin)",
        "118,71"
      ],
      [
        "51",
        "Sb",
        "antimon (antimony)",
        "121,76"
      ],
      [
        "52",
        "Te",
        "telu (tellurium)",
        "127,60"
      ],
      [
        "53",
        "I",
        "iod (iodine)",
        "126,90"
      ],
      [
        "54",
        "Xe",
        "xenon",
        "131,29"
      ],
      [
        "55",
        "Cs",
        "cesi (caesium)",
        "132,91"
      ],
      [
        "56",
        "Ba",
        "bari (barium)",
        "137,33"
      ],
      [
        "57",
        "La",
        "lanthan (lanthanum)",
        "138,91"
      ],
      [
        "58",
        "Ce",
        "ceri (cerium)",
        "140,12"
      ],
      [
        "59",
        "Pr",
        "praseodymi (praseodymium)",
        "140,91"
      ],
      [
        "60",
        "Nd",
        "neodymi (neodymium)",
        "144,24"
      ],
      [
        "61",
        "Pm",
        "promethi (promethium)",
        "[145]"
      ],
      [
        "62",
        "Sm",
        "samari (samarium)",
        "150,36"
      ],
      [
        "63",
        "Eu",
        "europi (europium)",
        "151,96"
      ],
      [
        "64",
        "Gd",
        "gadolini (gadolinium)",
        "157,25"
      ],
      [
        "65",
        "Tb",
        "terbi (terbium)",
        "158,93"
      ],
      [
        "66",
        "Dy",
        "dysprosi (dysprosium)",
        "162,50"
      ],
      [
        "67",
        "Ho",
        "holmi (holmium)",
        "164,93"
      ],
      [
        "68",
        "Er",
        "erbi (erbium)",
        "167,26"
      ],
      [
        "69",
        "Tm",
        "thuli (thulium)",
        "168,93"
      ],
      [
        "70",
        "Yb",
        "ytterbi (ytterbium)",
        "173,05"
      ],
      [
        "71",
        "Lu",
        "luteti (lutetium)",
        "174,97"
      ],
      [
        "72",
        "Hf",
        "hafni (hafnium)",
        "178,49"
      ],
      [
        "73",
        "Ta",
        "tantal (tantalum)",
        "180,95"
      ],
      [
        "74",
        "W",
        "wolfram (tungsten)",
        "183,84"
      ],
      [
        "75",
        "Re",
        "rheni (rhenium)",
        "186,21"
      ],
      [
        "76",
        "Os",
        "osmi (osmium)",
        "190,23"
      ],
      [
        "77",
        "Ir",
        "iridi (iridium)",
        "192,22"
      ],
      [
        "78",
        "Pt",
        "platin (platinum)",
        "195,08"
      ],
      [
        "79",
        "Au",
        "vàng (gold)",
        "196,97"
      ],
      [
        "80",
        "Hg",
        "thủy ngân (mercury)",
        "200,59"
      ],
      [
        "81",
        "Tl",
        "thali (thallium)",
        "204,38"
      ],
      [
        "82",
        "Pb",
        "chì (lead)",
        "207,2"
      ],
      [
        "83",
        "Bi",
        "bismuth",
        "208,98"
      ],
      [
        "84",
        "Po",
        "poloni (polonium)",
        "[209]"
      ],
      [
        "85",
        "At",
        "astatin (astatine)",
        "[210]"
      ],
      [
        "86",
        "Rn",
        "radon",
        "[222]"
      ],
      [
        "87",
        "Fr",
        "franci (francium)",
        "[223]"
      ],
      [
        "88",
        "Ra",
        "radi (radium)",
        "[226]"
      ],
      [
        "89",
        "Ac",
        "actini (actinium)",
        "[227]"
      ],
      [
        "90",
        "Th",
        "thori (thorium)",
        "232,04"
      ],
      [
        "91",
        "Pa",
        "protactini (protactinium)",
        "231,04"
      ],
      [
        "92",
        "U",
        "urani (uranium)",
        "238,03"
      ]
    ],
    "ghiChu": "Khối lượng nguyên tử chuẩn IUPAC 2021 (dạng rút gọn, 5 chữ số có nghĩa hoặc theo độ bất định tự nhiên). Số trong ngoặc vuông: số khối của đồng vị bền nhất (nguyên tố không có đồng vị bền). Tên theo danh pháp tiếng Việt, kèm tên IUPAC tiếng Anh. Nguồn: IUPAC CIAAW, <i>Standard Atomic Weights</i> (2021); bảng tuần hoàn trong bìa Harris/Skoog."
  },
  {
    "id": "chat-chuan",
    "icon": "⚖️",
    "ten": "Chất chuẩn, thuốc thử và khối lượng mol",
    "cot": [
      "Chất",
      "M (g/mol)",
      "Dùng làm"
    ],
    "dong": [
      [
        "KHC<sub>8</sub>H<sub>4</sub>O<sub>4</sub> (kali hydrophthalat, KHP)",
        "204,22",
        "chất gốc chuẩn hóa NaOH"
      ],
      [
        "H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>·2H<sub>2</sub>O (acid oxalic ngậm nước)",
        "126,07",
        "chất gốc chuẩn hóa NaOH, KMnO<sub>4</sub>"
      ],
      [
        "C<sub>6</sub>H<sub>5</sub>COOH (acid benzoic)",
        "122,12",
        "chất gốc chuẩn hóa base"
      ],
      [
        "KH(IO<sub>3</sub>)<sub>2</sub> (kali hydroiodat)",
        "389,91",
        "chất gốc chuẩn hóa base"
      ],
      [
        "H<sub>2</sub>NSO<sub>3</sub>H (acid sulfamic)",
        "97,09",
        "chất gốc chuẩn hóa base"
      ],
      [
        "Na<sub>2</sub>CO<sub>3</sub> (natri carbonate)",
        "105,99",
        "chất gốc chuẩn hóa HCl"
      ],
      [
        "Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O (borax)",
        "381,37",
        "chất gốc chuẩn hóa HCl"
      ],
      [
        "(HOCH<sub>2</sub>)<sub>3</sub>CNH<sub>2</sub> (Tris)",
        "121,14",
        "chất gốc chuẩn hóa acid"
      ],
      [
        "Na<sub>2</sub>C<sub>2</sub>O<sub>4</sub> (natri oxalate)",
        "134,00",
        "chất gốc chuẩn hóa KMnO<sub>4</sub>, Ce<sup>4+</sup>"
      ],
      [
        "K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (kali dicromat)",
        "294,18",
        "chất gốc (oxi hóa)"
      ],
      [
        "KIO<sub>3</sub> (kali iodat)",
        "214,00",
        "chất gốc chuẩn hóa Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>"
      ],
      [
        "KBrO<sub>3</sub> (kali bromat)",
        "167,00",
        "chất gốc (phương pháp bromat)"
      ],
      [
        "As<sub>2</sub>O<sub>3</sub> (arsen(III) oxide)",
        "197,84",
        "chất gốc chuẩn hóa I<sub>2</sub>, KMnO<sub>4</sub>"
      ],
      [
        "(NH<sub>4</sub>)<sub>2</sub>Ce(NO<sub>3</sub>)<sub>6</sub> (amoni ceri(IV) nitrat)",
        "548,22",
        "chất gốc Ce<sup>4+</sup>"
      ],
      [
        "Fe kim loại (dây sắt tinh khiết)",
        "55,85",
        "chất gốc chuẩn hóa chất oxi hóa"
      ],
      [
        "NaCl (natri chloride)",
        "58,44",
        "chất gốc chuẩn hóa AgNO<sub>3</sub>"
      ],
      [
        "KCl (kali chloride)",
        "74,55",
        "chất gốc chuẩn hóa AgNO<sub>3</sub>"
      ],
      [
        "AgNO<sub>3</sub> (bạc nitrat)",
        "169,87",
        "dung dịch chuẩn kết tủa (chất gốc nếu tinh khiết, sấy khô)"
      ],
      [
        "CaCO<sub>3</sub> (calcium carbonate)",
        "100,09",
        "chất gốc chuẩn hóa EDTA; đơn vị độ cứng"
      ],
      [
        "Zn kim loại",
        "65,38",
        "chất gốc chuẩn hóa EDTA"
      ],
      [
        "MgSO<sub>4</sub>·7H<sub>2</sub>O (magnesium sulfate)",
        "246,47",
        "dung dịch chuẩn Mg<sup>2+</sup> (chuẩn độ ngược EDTA)"
      ],
      [
        "ZnSO<sub>4</sub>·7H<sub>2</sub>O (kẽm sulfate)",
        "287,55",
        "dung dịch chuẩn Zn<sup>2+</sup> (chuẩn độ ngược EDTA)"
      ],
      [
        "Na<sub>2</sub>H<sub>2</sub>Y·2H<sub>2</sub>O (EDTA dinatri)",
        "372,24",
        "dung dịch chuẩn EDTA"
      ],
      [
        "NaOH (natri hydroxide)",
        "40,00",
        "dung dịch chuẩn base (phải chuẩn hóa)"
      ],
      [
        "KOH (kali hydroxide)",
        "56,11",
        "dung dịch chuẩn base (phải chuẩn hóa)"
      ],
      [
        "HCl (acid hydrochloric)",
        "36,46",
        "dung dịch chuẩn acid (phải chuẩn hóa)"
      ],
      [
        "H<sub>2</sub>SO<sub>4</sub> (acid sulfuric)",
        "98,08",
        "dung dịch chuẩn acid (phải chuẩn hóa)"
      ],
      [
        "KMnO<sub>4</sub> (kali permanganat)",
        "158,03",
        "dung dịch chuẩn oxi hóa (phải chuẩn hóa)"
      ],
      [
        "I<sub>2</sub> (iod)",
        "253,81",
        "dung dịch chuẩn oxi hóa (pha trong KI, phải chuẩn hóa)"
      ],
      [
        "KI (kali iodide)",
        "166,00",
        "thuốc thử phương pháp iod"
      ],
      [
        "Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>·5H<sub>2</sub>O (natri thiosulfat)",
        "248,18",
        "dung dịch chuẩn khử trong phương pháp iod (phải chuẩn hóa)"
      ],
      [
        "(NH<sub>4</sub>)<sub>2</sub>Fe(SO<sub>4</sub>)<sub>2</sub>·6H<sub>2</sub>O (muối Mohr)",
        "392,14",
        "dung dịch chuẩn khử (phải chuẩn hóa, Fe<sup>2+</sup> bị không khí oxi hóa)"
      ],
      [
        "FeSO<sub>4</sub>·7H<sub>2</sub>O (sắt(II) sulfate)",
        "278,01",
        "dung dịch khử (phải chuẩn hóa)"
      ],
      [
        "KSCN (kali thiocyanat)",
        "97,18",
        "dung dịch chuẩn (Volhard)"
      ],
      [
        "NH<sub>4</sub>SCN (amoni thiocyanat)",
        "76,12",
        "dung dịch chuẩn (Volhard)"
      ],
      [
        "K<sub>2</sub>CrO<sub>4</sub> (kali cromat)",
        "194,19",
        "chỉ thị Mohr"
      ],
      [
        "NH<sub>4</sub>Fe(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O (phèn sắt amoni)",
        "482,19",
        "chỉ thị Volhard"
      ],
      [
        "BaCl<sub>2</sub>·2H<sub>2</sub>O (bari chloride)",
        "244,26",
        "tác nhân kết tủa BaSO<sub>4</sub> (phân tích khối lượng)"
      ],
      [
        "BaSO<sub>4</sub>",
        "233,39",
        "dạng cân (sulfate)"
      ],
      [
        "AgCl",
        "143,32",
        "dạng cân (chloride)"
      ],
      [
        "Fe<sub>2</sub>O<sub>3</sub>",
        "159,69",
        "dạng cân (sắt)"
      ],
      [
        "Al<sub>2</sub>O<sub>3</sub>",
        "101,96",
        "dạng cân (nhôm)"
      ],
      [
        "CaO",
        "56,08",
        "dạng cân (calcium, nung CaC<sub>2</sub>O<sub>4</sub>)"
      ],
      [
        "Mg<sub>2</sub>P<sub>2</sub>O<sub>7</sub>",
        "222,55",
        "dạng cân (magnesium, phosphor)"
      ],
      [
        "Ni(C<sub>4</sub>H<sub>7</sub>N<sub>2</sub>O<sub>2</sub>)<sub>2</sub> (nickel dimetylglyoximat)",
        "288,91",
        "dạng cân (nickel)"
      ]
    ],
    "ghiChu": "M tính từ khối lượng nguyên tử IUPAC (dùng đủ chữ số rồi làm tròn 2 chữ số thập phân; có thể lệch 0,01 so với cộng từ bảng Khối lượng nguyên tử rút gọn). Chất gốc: tinh khiết cao, bền, không hút ẩm, M lớn; cân rồi pha trực tiếp được. Các chất còn lại phải chuẩn hóa lại bằng chất gốc. Nguồn danh mục chất gốc: Harris, <i>Quantitative Chemical Analysis</i> (bảng chất chuẩn gốc acid – base, oxi hóa – khử); Skoog."
  },
  {
    "id": "hoa-chat-dac",
    "icon": "🧯",
    "ten": "Acid, base đặc thương mại",
    "cot": [
      "Hóa chất",
      "C% (khối lượng)",
      "d (g/mL, ≈ 20 °C)",
      "C<sub>M</sub> (mol/L)"
    ],
    "dong": [
      [
        "HCl (acid hydrochloric đặc)",
        "37%",
        "1,19",
        "12,1"
      ],
      [
        "HNO<sub>3</sub> (acid nitric đặc)",
        "65%",
        "1,39",
        "14,3"
      ],
      [
        "HNO<sub>3</sub> (acid nitric đặc)",
        "70%",
        "1,42",
        "15,8"
      ],
      [
        "H<sub>2</sub>SO<sub>4</sub> (acid sulfuric đặc)",
        "98%",
        "1,84",
        "18,4"
      ],
      [
        "H<sub>3</sub>PO<sub>4</sub> (acid phosphoric đặc)",
        "85%",
        "1,69",
        "14,7"
      ],
      [
        "CH<sub>3</sub>COOH (acid acetic băng)",
        "99,8%",
        "1,05",
        "17,4"
      ],
      [
        "HClO<sub>4</sub> (acid percloric)",
        "70%",
        "1,67",
        "11,6"
      ],
      [
        "HF (acid fluorhydric)",
        "48%",
        "1,15",
        "27,6"
      ],
      [
        "HBr (acid bromhydric)",
        "48%",
        "1,49",
        "8,8"
      ],
      [
        "HI (acid iodhydric)",
        "57%",
        "1,70",
        "7,6"
      ],
      [
        "NH<sub>3</sub> (dung dịch amoniac)",
        "25%",
        "0,91",
        "13,4"
      ],
      [
        "NH<sub>3</sub> (dung dịch amoniac)",
        "28%",
        "0,90",
        "14,8"
      ],
      [
        "NaOH (dung dịch đặc)",
        "50%",
        "1,52",
        "19,0"
      ],
      [
        "KOH (dung dịch đặc)",
        "45%",
        "1,45",
        "11,6"
      ],
      [
        "H<sub>2</sub>O<sub>2</sub> (hydrogen peroxide)",
        "30%",
        "1,11",
        "9,8"
      ]
    ],
    "ghiChu": "C<sub>M</sub> = 10·C%·d/M (tính từ C% và d ghi ở bảng, M theo IUPAC). C% và d là giá trị ghi nhãn thường gặp; từng lô hóa chất có thể khác vài phần trăm, nên dung dịch pha từ acid/base đặc phải chuẩn hóa lại. Tính nhanh: pha 1 L HCl 0,1 M cần ≈ 8,3 mL HCl 37%. Nguồn: Harris và Skoog (bảng acid, base đặc thương mại ở bìa sau); d theo CRC Handbook, bảng “Concentrative properties of aqueous solutions”."
  },
  {
    "id": "hang-so-vat-li",
    "icon": "🔭",
    "ten": "Hằng số vật lí và đổi đơn vị",
    "cot": [
      "Đại lượng",
      "Kí hiệu",
      "Giá trị"
    ],
    "dong": [
      [
        "Hằng số Avogadro",
        "N<sub>A</sub>",
        "6,02214076·10<sup>23</sup> mol<sup>−1</sup> (chính xác)"
      ],
      [
        "Điện tích nguyên tố",
        "e",
        "1,602176634·10<sup>−19</sup> C (chính xác)"
      ],
      [
        "Hằng số Faraday",
        "F = N<sub>A</sub>e",
        "96 485,33 C/mol"
      ],
      [
        "Hằng số khí",
        "R",
        "8,314463 J/(mol·K) = 0,0820574 L·atm/(mol·K)"
      ],
      [
        "Hằng số Planck",
        "h",
        "6,62607015·10<sup>−34</sup> J·s (chính xác)"
      ],
      [
        "Tốc độ ánh sáng trong chân không",
        "c",
        "2,99792458·10<sup>8</sup> m/s (chính xác)"
      ],
      [
        "Hằng số Boltzmann",
        "k",
        "1,380649·10<sup>−23</sup> J/K (chính xác)"
      ],
      [
        "Hệ số Nernst ở 25 °C",
        "(RT/F)·ln 10",
        "0,05916 V (bài giảng làm tròn 0,059 V)"
      ],
      [
        "RT/F ở 25 °C",
        "RT/F",
        "25,693 mV"
      ],
      [
        "Nhiệt độ tuyệt đối",
        "T",
        "T (K) = t (°C) + 273,15"
      ],
      [
        "Áp suất chuẩn",
        "",
        "1 bar = 10<sup>5</sup> Pa; 1 atm = 101 325 Pa = 760 mmHg"
      ],
      [
        "Thể tích mol khí lí tưởng",
        "V<sub>m</sub>",
        "22,414 L/mol (0 °C, 1 atm); 24,465 L/mol (25 °C, 1 atm)"
      ],
      [
        "Khối lượng riêng của nước",
        "d",
        "0,99820 g/mL (20 °C); 0,99705 g/mL (25 °C)"
      ],
      [
        "Tích số ion của nước ở 25 °C",
        "K<sub>w</sub>",
        "1,01·10<sup>−14</sup> (bài giảng: 1,0·10<sup>−14</sup>)"
      ],
      [
        "Năng lượng photon",
        "E = hc/λ",
        "E (eV) ≈ 1239,84/λ (nm)"
      ],
      [
        "Đơn vị năng lượng",
        "",
        "1 eV = 1,602176634·10<sup>−19</sup> J; 1 cal = 4,184 J"
      ]
    ],
    "ghiChu": "Hằng số theo CODATA 2018 (các hằng số ghi “chính xác” được cố định trong hệ SI 2019). Hệ số Nernst tính từ R, F và T = 298,15 K. Khối lượng riêng của nước theo CRC Handbook. Nguồn: CODATA 2018 (NIST); CRC <i>Handbook of Chemistry and Physics</i>."
  },
  {
    "id": "aas",
    "icon": "🔥",
    "ten": "Vạch phổ AAS thường dùng",
    "cot": [
      "Nguyên tố",
      "λ (nm)",
      "Ngọn lửa / kĩ thuật"
    ],
    "dong": [
      [
        "Li (lithi)",
        "670,8",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Na (natri)",
        "589,0",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "K (kali)",
        "766,5",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Mg (magnesi)",
        "285,2",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Ca (calci)",
        "422,7",
        "không khí – C<sub>2</sub>H<sub>2</sub> (thêm La/Sr che PO<sub>4</sub><sup>3−</sup>) hoặc N<sub>2</sub>O – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Sr (stronti)",
        "460,7",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Ba (bari)",
        "553,6",
        "N<sub>2</sub>O – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Al (nhôm)",
        "309,3",
        "N<sub>2</sub>O – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Si (silic)",
        "251,6",
        "N<sub>2</sub>O – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Ti (titan)",
        "364,3",
        "N<sub>2</sub>O – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "V (vanadi)",
        "318,4",
        "N<sub>2</sub>O – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Mo (molybden)",
        "313,3",
        "N<sub>2</sub>O – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Cr (crom)",
        "357,9",
        "không khí – C<sub>2</sub>H<sub>2</sub> (giàu nhiên liệu)"
      ],
      [
        "Mn (mangan)",
        "279,5",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Fe (sắt)",
        "248,3",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Co (cobalt)",
        "240,7",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Ni (nickel)",
        "232,0",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Cu (đồng)",
        "324,8",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Ag (bạc)",
        "328,1",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Au (vàng)",
        "242,8",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Zn (kẽm)",
        "213,9",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Cd (cadmi)",
        "228,8",
        "không khí – C<sub>2</sub>H<sub>2</sub>; lò graphit"
      ],
      [
        "Pb (chì)",
        "283,3 (hoặc 217,0)",
        "không khí – C<sub>2</sub>H<sub>2</sub>; lò graphit"
      ],
      [
        "Sn (thiếc)",
        "224,6",
        "N<sub>2</sub>O – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Sb (antimon)",
        "217,6",
        "không khí – C<sub>2</sub>H<sub>2</sub>; hydride"
      ],
      [
        "Bi (bismuth)",
        "223,1",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Pt (platin)",
        "265,9",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "Tl (thali)",
        "276,8",
        "không khí – C<sub>2</sub>H<sub>2</sub>"
      ],
      [
        "As (arsen)",
        "193,7",
        "hydride (HG-AAS) hoặc lò graphit"
      ],
      [
        "Se (seleni)",
        "196,0",
        "hydride (HG-AAS) hoặc lò graphit"
      ],
      [
        "Hg (thủy ngân)",
        "253,7",
        "hơi lạnh (CV-AAS)"
      ]
    ],
    "ghiChu": "Vạch cộng hưởng chính (nhạy nhất) dùng với đèn catot rỗng của nguyên tố tương ứng. Nguyên tố tạo oxide bền (Al, Si, Ti, V, Mo, Ba) cần ngọn lửa N<sub>2</sub>O – C<sub>2</sub>H<sub>2</sub> nóng hơn (≈ 2 700 °C so với ≈ 2 300 °C). Nguồn: bảng vạch phân tích AAS trong Skoog, <i>Principles of Instrumental Analysis</i>, và sổ tay phương pháp của các hãng thiết bị (Perkin-Elmer <i>Analytical Methods for AAS</i>)."
  },
  {
    "id": "thuoc-thu-mau",
    "icon": "🧫",
    "ten": "Phương pháp trắc quang thông dụng (λmax)",
    "cot": [
      "Chất phân tích",
      "Thuốc thử / sản phẩm màu",
      "λ<sub>max</sub> (nm)",
      "ε (L·mol<sup>−1</sup>·cm<sup>−1</sup>)"
    ],
    "dong": [
      [
        "Fe<sup>2+</sup> (sắt)",
        "1,10-phenanthrolin → Fe(phen)<sub>3</sub><sup>2+</sup> đỏ cam (khử Fe<sup>3+</sup> bằng hydroxylamin)",
        "510",
        "≈ 1,1·10<sup>4</sup>"
      ],
      [
        "Fe<sup>3+</sup> (sắt)",
        "SCN<sup>−</sup> → FeSCN<sup>2+</sup> đỏ máu",
        "≈ 480",
        "—"
      ],
      [
        "Cr(VI) (cromat)",
        "1,5-diphenylcarbazid (môi trường acid) → phức tím đỏ",
        "540",
        "≈ 4·10<sup>4</sup>"
      ],
      [
        "Mn (mangan)",
        "oxi hóa bằng IO<sub>4</sub><sup>−</sup> → MnO<sub>4</sub><sup>−</sup> tím",
        "525",
        "≈ 2,4·10<sup>3</sup>"
      ],
      [
        "Cu<sup>2+</sup> (đồng)",
        "NH<sub>3</sub> → Cu(NH<sub>3</sub>)<sub>4</sub><sup>2+</sup> xanh lam",
        "≈ 600 – 620",
        "≈ 50 (kém nhạy)"
      ],
      [
        "Ni<sup>2+</sup> (nickel)",
        "dimetylglyoxim + chất oxi hóa, môi trường kiềm",
        "≈ 445",
        "—"
      ],
      [
        "Ti(IV) (titan)",
        "H<sub>2</sub>O<sub>2</sub> (môi trường acid) → phức peroxo vàng",
        "≈ 410",
        "—"
      ],
      [
        "PO<sub>4</sub><sup>3−</sup> (phosphate)",
        "molybdat + acid ascorbic → xanh molybden",
        "880",
        "—"
      ],
      [
        "SiO<sub>2</sub> (silicat)",
        "molybdat → acid molybdosilicic vàng (hoặc khử thành xanh molybden ≈ 815 nm)",
        "≈ 410",
        "—"
      ],
      [
        "NO<sub>2</sub><sup>−</sup> (nitrit)",
        "Griess: sulfanilamid + N-(1-naphtyl)etylenđiamin → thuốc nhuộm azo hồng",
        "543",
        "—"
      ],
      [
        "NO<sub>3</sub><sup>−</sup> (nitrat)",
        "đo trực tiếp UV (hiệu chỉnh chất hữu cơ ở 275 nm)",
        "220",
        "—"
      ],
      [
        "NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> (amoni)",
        "phenat – hypochlorit (Berthelot) → xanh indophenol",
        "≈ 630 – 640",
        "—"
      ],
      [
        "NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> (amoni)",
        "thuốc thử Nessler → vàng nâu",
        "≈ 410 – 425",
        "—"
      ],
      [
        "F<sup>−</sup> (fluoride)",
        "SPADNS – zirconi (làm nhạt màu)",
        "570",
        "—"
      ],
      [
        "Cl<sub>2</sub> tự do (chlor dư)",
        "DPD (N,N-dietyl-p-phenylenđiamin) → hồng",
        "515",
        "—"
      ],
      [
        "B (bor)",
        "curcumin → rosocyanin đỏ",
        "540",
        "—"
      ]
    ],
    "ghiChu": "λ<sub>max</sub> là bước sóng đo khuyến nghị; ε chỉ ghi cho các phương pháp có số liệu ổn định (phụ thuộc điều kiện). Luôn dựng đường chuẩn trong đúng điều kiện phân tích. Nguồn: Standard Methods for the Examination of Water and Wastewater (APHA); Harris và Skoog (chương quang phổ, ví dụ Fe – phenanthrolin); Vogel, <i>Textbook of Quantitative Chemical Analysis</i>."
  },
  {
    "id": "mau-bo-sung",
    "icon": "🌈",
    "ten": "Màu hấp thụ và màu quan sát",
    "cot": [
      "λ hấp thụ (nm)",
      "Màu bị hấp thụ",
      "Màu thấy (bổ sung)"
    ],
    "dong": [
      [
        "380 – 435",
        "tím",
        "vàng lục"
      ],
      [
        "435 – 480",
        "xanh lam",
        "vàng"
      ],
      [
        "480 – 490",
        "lam lục",
        "cam"
      ],
      [
        "490 – 500",
        "lục lam",
        "đỏ"
      ],
      [
        "500 – 560",
        "lục",
        "đỏ tía"
      ],
      [
        "560 – 580",
        "vàng lục",
        "tím"
      ],
      [
        "580 – 595",
        "vàng",
        "xanh lam"
      ],
      [
        "595 – 650",
        "cam",
        "lam lục"
      ],
      [
        "650 – 780",
        "đỏ",
        "lục lam"
      ]
    ],
    "ghiChu": "Dung dịch có màu vì hấp thụ một vùng ánh sáng trắng; mắt thấy màu bổ sung. Ví dụ KMnO<sub>4</sub> hấp thụ lục (≈ 525 nm) nên có màu tím đỏ. Ranh giới giữa các màu chỉ gần đúng. Nguồn: bảng màu phụ theo Skoog, <i>Fundamentals of Analytical Chemistry</i> và Vogel, <i>Quantitative Chemical Analysis</i>; các sách khác chia ranh giới hơi khác."
  },
  {
    "id": "cuvet",
    "icon": "🔬",
    "ten": "Vật liệu cuvet và vùng dùng",
    "cot": [
      "Vật liệu",
      "Vùng dùng (≈ nm)",
      "Ghi chú"
    ],
    "dong": [
      [
        "Thạch anh (silica nóng chảy)",
        "190 – 2500",
        "bắt buộc khi đo UV (&lt; 350 nm)"
      ],
      [
        "Thủy tinh",
        "350 – 2000",
        "chỉ đo vùng khả kiến"
      ],
      [
        "Nhựa (polystyren, PMMA)",
        "380 – 800",
        "rẻ, dùng một lần, không dùng dung môi hữu cơ"
      ],
      [
        "NaCl, KBr (tinh thể muối)",
        "vùng hồng ngoại (IR)",
        "tan trong nước, chỉ dùng mẫu khan"
      ]
    ],
    "ghiChu": "Nguồn sáng: đèn deuteri cho UV (≈ 160 – 380 nm), đèn wolfram – halogen cho vùng khả kiến (≈ 320 – 2500 nm). Nguồn: Skoog, <i>Principles of Instrumental Analysis</i>; Harris (chương thiết bị quang phổ)."
  },
  {
    "id": "detector-gc",
    "icon": "🌫️",
    "ten": "Detector sắc kí khí (GC)",
    "cot": [
      "Detector",
      "Đáp ứng với",
      "Giới hạn phát hiện (bậc)",
      "Ghi chú"
    ],
    "dong": [
      [
        "FID (ion hóa ngọn lửa)",
        "hợp chất hữu cơ có C–H (không nhạy với H<sub>2</sub>O, CO<sub>2</sub>, khí trơ)",
        "pg C/s",
        "phổ biến nhất; khoảng tuyến tính rất rộng (≈ 10<sup>7</sup>); phá hủy mẫu"
      ],
      [
        "TCD (dẫn nhiệt)",
        "vạn năng (mọi chất khác khí mang)",
        "ng",
        "không phá hủy mẫu; kém nhạy; dùng cho khí vô cơ"
      ],
      [
        "ECD (bắt điện tử)",
        "hợp chất halogen, nitro, carbonyl liên hợp",
        "fg – pg",
        "rất nhạy với thuốc trừ sâu clo hữu cơ, PCB; khoảng tuyến tính hẹp"
      ],
      [
        "NPD (nitơ – phospho)",
        "hợp chất chứa N, P",
        "pg",
        "thuốc trừ sâu phospho hữu cơ, dược chất"
      ],
      [
        "FPD (quang kế ngọn lửa)",
        "hợp chất chứa S, P",
        "pg",
        "chọn lọc S (394 nm), P (526 nm)"
      ],
      [
        "MS (khối phổ)",
        "vạn năng hoặc chọn lọc (SIM)",
        "pg – fg",
        "cho thông tin cấu trúc, định danh chất"
      ]
    ],
    "ghiChu": "Bậc độ lớn giới hạn phát hiện chỉ để so sánh, phụ thuộc chất và thiết bị. Nguồn: Harris, <i>Quantitative Chemical Analysis</i>, chương sắc kí khí (bảng detector GC); Skoog, <i>Principles of Instrumental Analysis</i>."
  },
  {
    "id": "detector-hplc",
    "icon": "💧",
    "ten": "Detector sắc kí lỏng (HPLC)",
    "cot": [
      "Detector",
      "Đáp ứng với",
      "Giới hạn phát hiện (bậc)",
      "Ghi chú"
    ],
    "dong": [
      [
        "UV – Vis / DAD (mảng diod)",
        "chất có nhóm mang màu hấp thụ UV – Vis",
        "ng (≈ 0,1 – 1 ng)",
        "phổ biến nhất; dùng được rửa giải gradient; DAD ghi cả phổ"
      ],
      [
        "Huỳnh quang",
        "chất phát huỳnh quang (hoặc dẫn xuất hóa)",
        "pg",
        "rất nhạy và chọn lọc"
      ],
      [
        "Chỉ số khúc xạ (RI)",
        "vạn năng",
        "µg",
        "kém nhạy; không dùng được gradient; nhạy với nhiệt độ"
      ],
      [
        "Điện hóa (ampe)",
        "chất dễ oxi hóa/khử (phenol, catecholamin…)",
        "pg",
        "rất nhạy, chọn lọc"
      ],
      [
        "Độ dẫn điện",
        "ion",
        "ng",
        "sắc kí ion (có cột triệt nền)"
      ],
      [
        "Tán xạ ánh sáng bay hơi (ELSD) / aerosol tích điện (CAD)",
        "chất không bay hơi",
        "ng",
        "gần vạn năng; dùng được gradient; đáp ứng không tuyến tính"
      ],
      [
        "MS (khối phổ, ESI/APCI)",
        "vạn năng hoặc chọn lọc",
        "pg – fg",
        "định danh, định lượng vết (LC-MS/MS)"
      ]
    ],
    "ghiChu": "Bậc độ lớn giới hạn phát hiện chỉ để so sánh, phụ thuộc chất và thiết bị. Nguồn: Harris, <i>Quantitative Chemical Analysis</i>, chương HPLC (bảng detector); Skoog, <i>Principles of Instrumental Analysis</i>."
  }
];
