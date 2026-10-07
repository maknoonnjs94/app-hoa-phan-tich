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
          <li>Nắm 6 giai đoạn của một quy trình phân tích (đúng như cách đề bài thường hỏi), cách bảo quản và xử lí mẫu, và các tiêu chí chọn phương pháp.</li>
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
      <p><b>Vì sao phương pháp công cụ thường kém chính xác hơn?</b> Vì tín hiệu đo (dòng, thế, độ hấp thụ...) chỉ <b>tỉ lệ gián tiếp</b> với nồng độ qua một đường chuẩn dựng từ vài điểm chuẩn — mọi sai số khi pha chuẩn, sai số của đường chuẩn và nhiễu nền đều cộng dồn vào kết quả. Phương pháp khối lượng và chuẩn độ thì cân hoặc đo thể tích trực tiếp lượng chất, không qua khâu trung gian nào, nên sai số chỉ đến từ dụng cụ đo (cân, buret).</p>

      <h3>4. Sáu giai đoạn của một quy trình phân tích</h3>
      <p>Một quy trình phân tích đầy đủ gồm 6 giai đoạn sau (cách chia này khớp với cách đề bài thường hỏi):</p>
      <ol>
        <li><b>Xác định vấn đề, chọn phương pháp</b>: cần đo chất gì, trong nền mẫu nào, cần độ chính xác bao nhiêu, ngân sách và thời gian ra sao.</li>
        <li><b>Lấy mẫu và bảo quản mẫu</b>: lấy được <b>mẫu đại diện</b>, rồi giữ mẫu không đổi cho đến lúc đo (mục 5).</li>
        <li><b>Xử lí mẫu</b>: chuyển mẫu về dạng đo được (hòa tan, phá mẫu, tách, làm giàu, loại hoặc che chất cản).</li>
        <li><b>Phân tích (đo)</b>: đo tín hiệu của mẫu và của các chuẩn (đường chuẩn), lặp lại nhiều lần.</li>
        <li><b>Xử lí số liệu và đánh giá</b>: tính kết quả, đánh giá độ chụm, độ đúng và độ không đảm bảo đo (Chương 3).</li>
        <li><b>Báo cáo và kết luận</b>: trình bày kết quả kèm độ không đảm bảo đo, trả lời câu hỏi ban đầu.</li>
      </ol>
      <p>Một số sách gộp các bước trên gọn hơn; bảng dưới đối chiếu hai cách chia để không bỡ ngỡ khi gặp cách hỏi khác:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Cách chia 6 giai đoạn (dùng trong bài này)</th><th>Cách chia gộp (một số tài liệu khác)</th></tr></thead>
          <tbody>
            <tr><td>1. Xác định vấn đề, chọn phương pháp</td><td>Lập kế hoạch</td></tr>
            <tr><td>2. Lấy mẫu và bảo quản mẫu</td><td>Lấy mẫu</td></tr>
            <tr><td>3. Xử lí mẫu</td><td>Chuẩn bị mẫu</td></tr>
            <tr><td>4. Phân tích (đo)</td><td>Đo</td></tr>
            <tr><td>5. Xử lí số liệu và đánh giá</td><td>Báo cáo và diễn giải</td></tr>
            <tr><td>6. Báo cáo và kết luận</td><td>Kết luận</td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 2.</b> Xác định caffeine trong chocolate bằng HPLC. Hãy chỉ ra các bước theo 6 giai đoạn ở trên.
        <details><summary>Xem lời giải</summary>
          <ol>
            <li>Chọn phương pháp HPLC vì tách được caffeine khỏi theobromine có cấu trúc gần giống — nếu chỉ đo UV-Vis trực tiếp, hai chất sẽ chồng phổ lên nhau.</li>
            <li>Lấy mẫu: nghiền nhiều thanh chocolate, trộn đều rồi lấy phần đại diện; bảo quản mẫu nghiền trong túi kín, tránh ẩm, ở nơi mát nếu chưa phân tích ngay.</li>
            <li>Xử lí mẫu: loại chất béo bằng dung môi không phân cực, chiết caffeine bằng nước nóng, lọc bỏ bã rắn.</li>
            <li>Phân tích: tiêm dung dịch chuẩn caffeine và dịch chiết mẫu vào HPLC, so sánh diện tích pic.</li>
            <li>Xử lí số liệu: tính hàm lượng từ đường chuẩn, lặp lại ít nhất 3 lần, tính độ lệch chuẩn tương đối.</li>
            <li>Báo cáo: hàm lượng caffeine (mg/g) kèm độ lệch chuẩn; so sánh với mức công bố trên nhãn để kết luận.</li>
          </ol>
        </details></div>

      <div class="hinh-tinh">
        <svg viewBox="0 0 320 165" role="img" aria-label="Sắc đồ HPLC minh họa caffeine và theobromine trong chocolate">
          <line x1="30" y1="130" x2="300" y2="130" stroke="var(--vien)" stroke-width="1.5"/>
          <line x1="30" y1="130" x2="30" y2="20" stroke="var(--vien)" stroke-width="1.5"/>
          <path d="M100,130 C108.8,130 108.8,25 117.5,25 C126.3,25 126.3,130 135,130" fill="none" stroke="var(--mau-chinh)" stroke-width="2.2"/>
          <path d="M176.3,130 C184.4,130 184.4,115 192.5,115 C200.6,115 200.6,130 208.8,130" fill="none" stroke="var(--xanh)" stroke-width="2.2"/>
          <text x="117.5" y="17" text-anchor="middle" font-size="10" fill="var(--chu)">Theobromine</text>
          <text x="192.5" y="106" text-anchor="middle" font-size="10" fill="var(--chu)">Caffeine</text>
          <text x="30" y="145" text-anchor="middle" font-size="10" fill="var(--chu-phu)">0</text>
          <text x="80" y="145" text-anchor="middle" font-size="10" fill="var(--chu-phu)">2</text>
          <text x="130" y="145" text-anchor="middle" font-size="10" fill="var(--chu-phu)">4</text>
          <text x="180" y="145" text-anchor="middle" font-size="10" fill="var(--chu-phu)">6</text>
          <text x="230" y="145" text-anchor="middle" font-size="10" fill="var(--chu-phu)">8</text>
          <text x="280" y="145" text-anchor="middle" font-size="10" fill="var(--chu-phu)">10</text>
          <text x="290" y="158" text-anchor="end" font-size="10" fill="var(--chu-phu)">Thời gian (phút)</text>
          <text x="14" y="40" text-anchor="middle" transform="rotate(-90 14 40)" font-size="10" fill="var(--chu-phu)">Tín hiệu</text>
        </svg>
        <p class="chu-thich">Sắc đồ minh họa: theobromine ra trước caffeine, mỗi pic ứng với một chất — diện tích pic tỉ lệ với hàm lượng.</p>
      </div>

      <div class="mo-phong" data-loai="sap-xep-quy-trinh"></div>

      <div class="hinh-tinh">
        <svg viewBox="0 0 320 300" role="img" aria-label="Sơ đồ vòng 6 giai đoạn của quy trình phân tích">
          <defs>
            <marker id="mt-md-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--mau-chinh)"/>
            </marker>
            <marker id="mt-md-2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--chu-phu)"/>
            </marker>
          </defs>
          <line x1="191.8" y1="60.4" x2="221.7" y2="77.6" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-md-1)"/>
          <line x1="253.5" y1="132.7" x2="253.5" y2="167.3" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-md-1)"/>
          <line x1="221.7" y1="222.4" x2="191.8" y2="239.6" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-md-1)"/>
          <line x1="128.2" y1="239.6" x2="98.3" y2="222.4" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-md-1)"/>
          <line x1="66.5" y1="167.3" x2="66.5" y2="132.7" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-md-1)"/>
          <path d="M66.5,79 Q95,20 125,42" fill="none" stroke="var(--chu-phu)" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#mt-md-2)"/>
          <text x="95" y="12" text-anchor="middle" font-size="10" fill="var(--chu-phu)">lặp lại nếu cần</text>
          <rect x="125" y="25" width="70" height="34" rx="8" fill="var(--nen)" stroke="var(--mau-chinh)" stroke-width="1.5"/>
          <text x="160" y="40" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">1. Chọn</text>
          <text x="160" y="52" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">phương pháp</text>
          <rect x="218.5" y="79" width="70" height="34" rx="8" fill="var(--nen)" stroke="var(--mau-chinh)" stroke-width="1.5"/>
          <text x="253.5" y="94" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">2. Lấy &amp; BQ</text>
          <text x="253.5" y="106" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">mẫu</text>
          <rect x="218.5" y="187" width="70" height="34" rx="8" fill="var(--nen)" stroke="var(--mau-chinh)" stroke-width="1.5"/>
          <text x="253.5" y="202" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">3. Xử lí</text>
          <text x="253.5" y="214" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">mẫu</text>
          <rect x="125" y="241" width="70" height="34" rx="8" fill="var(--nen)" stroke="var(--mau-chinh)" stroke-width="1.5"/>
          <text x="160" y="256" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">4. Phân tích</text>
          <text x="160" y="268" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">(đo)</text>
          <rect x="31.5" y="187" width="70" height="34" rx="8" fill="var(--nen)" stroke="var(--mau-chinh)" stroke-width="1.5"/>
          <text x="66.5" y="202" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">5. Xử lí</text>
          <text x="66.5" y="214" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">số liệu</text>
          <rect x="31.5" y="79" width="70" height="34" rx="8" fill="var(--nen)" stroke="var(--mau-chinh)" stroke-width="1.5"/>
          <text x="66.5" y="94" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">6. Báo cáo,</text>
          <text x="66.5" y="106" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">kết luận</text>
        </svg>
        <p class="chu-thich">Quy trình khép vòng: kết luận ở bước 6 có thể dẫn tới việc lấy thêm mẫu hoặc điều chỉnh phương pháp (đường nét đứt).</p>
      </div>

      <h3>5. Lấy mẫu, bảo quản và xử lí mẫu</h3>
      <ul>
        <li><b>Mẫu đồng nhất</b> (dung dịch đã khuấy đều): lấy một phần bất kì là đại diện.</li>
        <li><b>Mẫu không đồng nhất</b> (đất, quặng, thực phẩm): chia thành nhiều phần, lấy ngẫu nhiên nhiều phần nhỏ, gộp và trộn đều thành <b>mẫu gộp</b> (composite sample).</li>
        <li>Sai số do lấy mẫu không đại diện <b>không thể</b> sửa được ở các bước sau, dù máy đo chính xác đến đâu.</li>
      </ul>
      <p><b>Bảo quản mẫu</b> (preservation) nhằm giữ mẫu không đổi từ lúc lấy đến lúc đo — nếu bảo quản sai, chất phân tích có thể mất đi hoặc biến đổi trước khi đến phòng thí nghiệm, và sai số này <b>cũng không sửa được</b> ở bước đo:</p>
      <ul>
        <li><b>Nhiệt độ</b>: làm lạnh 2 – 4 °C (giữ được vài ngày) hoặc đông lạnh −20 °C (giữ lâu hơn) để chậm phản ứng sinh học, hóa học và sự bay hơi.</li>
        <li><b>Acid hóa</b>: mẫu nước phân tích kim loại thường được thêm HNO<sub>3</sub> đến pH &lt; 2 để kim loại không hấp phụ lên thành bình hoặc kết tủa thành hydroxide.</li>
        <li><b>Vật liệu chai đựng</b>: chai <b>PE</b> (polyethylene) dùng cho mẫu chứa F<sup>−</sup> hoặc kiềm mạnh (tránh hòa tan SiO<sub>2</sub> từ thủy tinh làm sai kết quả); chai <b>thủy tinh tối màu</b> cho chất dễ bị quang phân (dễ phân hủy dưới ánh sáng); tránh chai nhựa khi mẫu là dung môi hữu cơ (có thể hòa tan nhựa, gây nhiễm mẫu).</li>
        <li><b>Thời gian giữ mẫu tối đa</b> (holding time): mỗi phép đo có một mốc thời gian quy định — quá mốc này, kết quả không còn đáng tin dù mẫu chưa hỏng rõ rệt.</li>
      </ul>
      <p><b>Xử lí mẫu</b> (sample preparation) chuyển mẫu về dạng đo được, gồm các nhóm kĩ thuật sau:</p>
      <ul>
        <li><b>Hòa tan</b> mẫu: bằng nước, dung môi hữu cơ, acid mạnh (HCl, HNO<sub>3</sub>...) hoặc nung chảy với kiềm.</li>
        <li><b>Làm giàu</b>: tăng nồng độ chất phân tích khi quá thấp (chiết, cô đặc...).</li>
        <li><b>Loại chất cản</b> (interference) hoặc <b>che</b> (masking): dùng thuốc thử tạo phức bền với chất cản để nó không tham gia phản ứng đo.</li>
      </ul>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Kĩ thuật</th><th>Cách làm</th><th>Dùng khi</th></tr></thead>
          <tbody>
            <tr><td>Phá mẫu ướt bằng acid</td><td>Đun mẫu với HNO<sub>3</sub>, HCl, H<sub>2</sub>SO<sub>4</sub> đặc (có thể thêm H<sub>2</sub>O<sub>2</sub>)</td><td>Mẫu hữu cơ, sinh học cần phá hủy chất nền để đo kim loại</td></tr>
            <tr><td>Phá mẫu bằng lò vi sóng</td><td>Đun mẫu với acid trong bình kín, gia nhiệt bằng vi sóng dưới áp suất</td><td>Cần nhanh, kín (không mất chất dễ bay hơi như As, Hg), tốn ít acid hơn phá ướt hở</td></tr>
            <tr><td>Nung chảy với kiềm</td><td>Trộn mẫu rắn khó tan (quặng, gốm, thủy tinh) với Na<sub>2</sub>CO<sub>3</sub> hoặc NaOH, nung ở nhiệt độ cao rồi hòa tan khối nung chảy bằng acid</td><td>Mẫu vô cơ khó tan trong acid thông thường (silicat, oxide bền)</td></tr>
            <tr><td>Tro hóa khô</td><td>Nung mẫu hữu cơ trong không khí (400 – 700 °C) để đốt hết chất hữu cơ, còn lại tro vô cơ đem hòa tan</td><td>Mẫu thực phẩm, sinh học cần xác định khoáng, kim loại; đơn giản nhưng dễ mất chất dễ bay hơi (As, Hg, Se)</td></tr>
            <tr><td>Chiết lỏng – lỏng</td><td>Lắc mẫu với dung môi hữu cơ không tan trong nước để chuyển chất phân tích sang pha hữu cơ</td><td>Tách hoặc làm giàu chất phân tích khỏi nền mẫu nước phức tạp</td></tr>
            <tr><td>Chiết pha rắn (SPE)</td><td>Cho mẫu chảy qua cột nhồi chất hấp phụ, chất phân tích giữ lại rồi rửa giải bằng một lượng nhỏ dung môi</td><td>Làm giàu mẫu ở lượng vết, dùng ít dung môi hữu cơ hơn chiết lỏng – lỏng</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y"><b>Lỗi hay gặp:</b> nhầm mẫu (sample) với chất phân tích (analyte); quên xét nền mẫu khi đánh giá chất cản; để mẫu nước ở nhiệt độ phòng nhiều ngày hoặc không acid hóa mẫu kim loại trước khi đo — sai số do bảo quản sai không sửa được bằng cách đo lại cẩn thận hơn.</p>

      <h3>6. Phân loại theo lượng mẫu và theo hàm lượng cấu tử</h3>
      <p>Ngoài phân loại theo phương pháp, một phép phân tích còn được gọi tên theo hai cách sau:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Theo lượng mẫu đem phân tích</th><th>Khối lượng mẫu</th></tr></thead>
          <tbody>
            <tr><td>Phân tích lượng lớn (macro)</td><td>&gt; 0,1 g</td></tr>
            <tr><td>Phân tích bán vi lượng (semimicro)</td><td>0,01 – 0,1 g</td></tr>
            <tr><td>Phân tích vi lượng (micro)</td><td>&lt; 0,01 g</td></tr>
          </tbody>
        </table>
      </div>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Theo hàm lượng cấu tử trong mẫu</th><th>Khoảng hàm lượng</th></tr></thead>
          <tbody>
            <tr><td>Đa lượng (major)</td><td>&gt; 1%</td></tr>
            <tr><td>Vi lượng (minor)</td><td>0,01% – 1%</td></tr>
            <tr><td>Vết (trace)</td><td>&lt; 0,01% (khoảng 1 ppb – 100 ppm)</td></tr>
            <tr><td>Siêu vết (ultratrace)</td><td>&lt; 1 ppb</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Hàm lượng càng thấp thì càng cần phương pháp công cụ nhạy (Chương 11 – 15); phương pháp khối lượng và chuẩn độ (Chương 2) chỉ phù hợp với mức đa lượng trở lên, vì cần lượng chất đủ lớn để cân hoặc để bước nhảy chuẩn độ rõ ràng.</p>

      <div class="vi-du"><b>Ví dụ 3.</b> Một mẫu tương ớt bị nghi ngờ có phẩm màu công nghiệp Rhodamine B (chất cấm dùng trong thực phẩm). (a) Nếu chỉ cần biết "có hay không có" Rhodamine B, đây là loại câu hỏi phân tích nào? (b) Nếu cơ quan quản lí muốn biết cụ thể có bao nhiêu mg/kg, cần thêm loại câu hỏi nào, và nên xếp hàm lượng đó vào mức nào (đa lượng, vi lượng hay vết)? (c) Nên chọn phương pháp hóa học hay phương pháp công cụ?
        <details><summary>Xem lời giải</summary>
          (a) Câu hỏi "có hay không" là câu hỏi <b>định tính</b>.<br>
          (b) Cần thêm câu hỏi <b>định lượng</b>. Rhodamine B trộn trái phép vào thực phẩm thường ở mức mg/kg (ppm), tức mức <b>vết</b>.<br>
          (c) Ở mức vết và cần phân biệt Rhodamine B khỏi các phẩm màu khác có cấu trúc gần giống, nên chọn <b>phương pháp công cụ</b> có khả năng tách và phát hiện chọn lọc — ví dụ HPLC kèm detector huỳnh quang hoặc UV-Vis (Rhodamine B hấp thụ mạnh quanh 550 – 560 nm, Chương 11).
        </details></div>

      <div class="vi-du"><b>Ví dụ 4.</b> Ba phòng thí nghiệm cần xác định: (1) hàm lượng NaCl trong nước biển (khoảng 3,5%); (2) hàm lượng nitrat trong nước giếng (khoảng 15 mg/L); (3) hàm lượng thủy ngân trong cá biển (khoảng 0,05 µg/g). Với mỗi trường hợp, nên ưu tiên phương pháp hóa học hay phương pháp công cụ? Vì sao?
        <details><summary>Xem lời giải</summary>
          (1) NaCl 3,5% là mức <b>đa lượng</b> (&gt; 1%): dùng được <b>phương pháp hóa học</b>, ví dụ chuẩn độ kết tủa kiểu Mohr (Chương 8) — vừa rẻ vừa đủ chính xác.<br>
          (2) Nitrat 15 mg/L = 15 ppm = 0,0015% là mức <b>vết</b> (dưới 0,01%): lượng chất trong một mẫu vừa phải đã quá nhỏ để cân hay chuẩn độ chính xác, nên chọn <b>phương pháp công cụ</b> (UV-Vis với brucin, hoặc điện cực chọn lọc ion — Chương 11 và 13).<br>
          (3) Hg 0,05 µg/g = 0,05 ppm = 50 ppb là mức <b>vết</b>: bắt buộc dùng phương pháp công cụ có độ nhạy rất cao, ví dụ AAS hóa hơi lạnh hoặc ICP-MS (Chương 12).
        </details></div>

      <h3>7. Tiêu chí chọn phương pháp</h3>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Tiêu chí</th><th>Ý nghĩa</th><th>Đo bằng gì</th></tr></thead>
          <tbody>
            <tr><td>Độ đúng</td><td>Kết quả gần giá trị thật (accuracy)</td><td>So với mẫu chuẩn chứng nhận (CRM) hoặc độ thu hồi (Chương 10)</td></tr>
            <tr><td>Độ chụm</td><td>Các lần đo lặp lại gần nhau (precision)</td><td>Độ lệch chuẩn tương đối RSD (Chương 3)</td></tr>
            <tr><td>Độ nhạy</td><td>Tín hiệu thay đổi nhiều khi nồng độ thay đổi ít (sensitivity)</td><td>Độ dốc đường chuẩn</td></tr>
            <tr><td>Giới hạn phát hiện</td><td>Lượng chất nhỏ nhất phát hiện được một cách tin cậy (LOD)</td><td>LOD ≈ 3s/độ dốc (Chương 10)</td></tr>
            <tr><td>Độ chọn lọc</td><td>Đo được chất phân tích mà ít bị chất khác trong mẫu cản trở (selectivity)</td><td>Độ thu hồi khi thêm chất cản vào mẫu</td></tr>
            <tr><td>Độ bền vững</td><td>Kết quả ít bị ảnh hưởng khi điều kiện thay đổi nhỏ (robustness)</td><td>So sánh kết quả giữa các điều kiện, người làm khác nhau</td></tr>
          </tbody>
        </table>
      </div>
      <p>Ngoài ra còn cân nhắc: thời gian, chi phí, lượng mẫu cần dùng, mức độ an toàn.</p>
      <div class="vi-du"><b>Ví dụ 5.</b> Cần xác định Pb ở mức vài ppb trong nước uống. Nên chọn phương pháp chuẩn độ hay phương pháp công cụ? Vì sao?
        <details><summary>Xem lời giải</summary>
          Chọn <b>phương pháp công cụ</b> (ví dụ AAS lò graphit hoặc ICP-MS). Ở mức ppb, lượng Pb quá nhỏ để chuẩn độ hay cân; cần phương pháp có giới hạn phát hiện thấp và độ nhạy cao.
        </details></div>
`,
    baiTap: [],
  },
  {
    id: "do-luong",
    nhom: "Cơ sở",
    icon: "📏",
    ten: "Đo lường hóa học",
    moTa: "Nồng độ, dụng cụ, pha chế, hợp thức, giới thiệu chuẩn độ",
    dayDu: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Đổi qua lại giữa các loại nồng độ: C<sub>M</sub>, C%, ppm, ppb (cả mẫu lỏng và mẫu rắn).</li>
          <li>Biết dùng đúng dụng cụ đo lường, dung sai của chúng, và tính lượng hóa chất để pha dung dịch.</li>
          <li>Tính kết quả phân tích khối lượng và chuẩn độ (trực tiếp, ngược, gián tiếp) từ hợp thức phản ứng.</li>
          <li>Tính hàm lượng chất trong mẫu gốc qua một chuỗi pha loãng — aliquot — chuẩn độ, ra đúng đơn vị đề yêu cầu (mg/viên, %, g/L, ppm...).</li>
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
      <p><b>Nồng độ formal</b> F: nồng độ tính theo <b>công thức ban đầu</b> đem hòa tan, không quan tâm chất đó có phân li hay chuyển dạng trong dung dịch hay không. Ví dụ hòa tan 0,10 mol CH<sub>3</sub>COOH vào nước thành 1 L thì nồng độ formal là 0,10 F, nhưng vì acid yếu phân li một phần nên [CH<sub>3</sub>COOH] thực tế nhỏ hơn 0,10 M. Nhiều tài liệu (kể cả trong app này) vẫn viết C hoặc [ ] cho nồng độ formal khi nói "dung dịch pha ra nồng độ C" — cần phân biệt với nồng độ cân bằng thực sự khi tính pH (Chương 5).</p>

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

      <div class="vi-du"><b>Ví dụ 4.</b> Bốn bài đổi đơn vị thường gặp: (a) nước có Ni<sup>2+</sup> 10 ppm (M = 58,69), đổi sang M; (b) dung dịch thuốc amikacin 2,0·10<sup>−6</sup> M (M = 585,6), đổi sang ppm; (c) một mẫu đất 1 tấn nhiễm dioxin 150 ppb, tính khối lượng dioxin có trong cả mẫu; (d) mẫu sáp ong có C<sub>29</sub>H<sub>60</sub> (M = 408,8) ở mức 34 ppb, đổi sang mol/kg.
        <details><summary>Xem lời giải</summary>
          (a) 10 ppm = 10 mg/L = 1,0·10<sup>−2</sup> g/L:
          \[ C_\mathrm{M} = \frac{1,0\cdot10^{-2}}{58,69} = \mathbf{1,7\cdot10^{-4}\ M} \]
          (b) \[ \begin{aligned} \mathrm{ppm} &= 2,0\cdot10^{-6}\cdot585,6\cdot10^{3} \\ &= \mathbf{1,2\ ppm} \end{aligned} \]
          (c) 150 ppb (đất) = 150 µg/kg; 1 tấn = 1000 kg:
          \[ m = 150\cdot1000 = 1,5\cdot10^{5}\ \mathrm{\mu g} = \mathbf{0,150\ g} \]
          (d) 34 ppb (rắn) = 34 µg/kg = 34·10<sup>−6</sup> g/kg:
          \[ \frac{34\cdot10^{-6}}{408,8} = \mathbf{8,3\cdot10^{-8}\ mol/kg} \]
          Lỗi hay gặp: dùng đúng ppm = mg/L cho <b>dung dịch loãng</b> (a, b) nhưng lại quên ppm = mg/kg cho <b>mẫu rắn</b> (c, d) — hai định nghĩa không hoán đổi cho nhau (mục 1).
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
      <div class="vi-du"><b>Ví dụ 5.</b> Tính khối lượng CuSO<sub>4</sub>·5H<sub>2</sub>O (M = 249,68) cần để pha 500,0 mL dung dịch Cu<sup>2+</sup> 0,0500 M.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} m &= 0,0500\cdot0,5000\cdot249,68 \\ &= \mathbf{6,24\ g} \end{aligned} \]
          Cân chính xác khoảng 6,24 g, hòa tan rồi định mức tới vạch trong bình định mức 500 mL.
        </details></div>
      <div class="vi-du"><b>Ví dụ 6.</b> Cần bao nhiêu mL H<sub>2</sub>SO<sub>4</sub> 98% (d = 1,84 g/mL, M = 98,08) để pha 500,0 mL H<sub>2</sub>SO<sub>4</sub> 0,100 M?
        <details><summary>Xem lời giải</summary>
          \[ C_\mathrm{M} = \frac{10\cdot1,84\cdot98}{98,08} = 18,4\ \mathrm{M} \]
          \[ \begin{aligned} V_1 &= \frac{C_2V_2}{C_1} = \frac{0,100\cdot500,0}{18,4} \\ &= \mathbf{2,72\ mL} \end{aligned} \]
          Nhớ: rót từ từ acid vào nước, không làm ngược lại.
        </details></div>
      <div class="vi-du"><b>Ví dụ 7.</b> Trộn 100,0 mL HCl 0,200 M với 300,0 mL HCl 0,100 M. Tính nồng độ dung dịch thu được.
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
      <p><b>Cân theo hiệu</b> (weighing by difference) dùng khi chất hút ẩm hoặc dễ bay hơi, để tránh sai số do bì (cốc rỗng) đổi khối lượng theo thời gian nếu cân bì riêng trước:</p>
      <ol>
        <li>Cân cốc (hoặc lọ) đã chứa sẵn chất rắn: được khối lượng m<sub>1</sub>.</li>
        <li>Rót hoặc gạt một phần chất sang bình pha, không cần rót hết và không cần cân riêng phần đã rót.</li>
        <li>Cân lại cốc còn lại: được khối lượng m<sub>2</sub>. Khối lượng chất đã lấy = m<sub>1</sub> − m<sub>2</sub>.</li>
      </ol>

      <p><b>Dung sai dụng cụ loại A</b> (class A) — dùng khi ước lượng sai số dụng cụ trong lan truyền sai số (Chương 3):</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Dụng cụ</th><th>Dung sai</th></tr></thead>
          <tbody>
            <tr><td>Buret 50 mL</td><td>±0,05 mL</td></tr>
            <tr><td>Pipet bầu 10 mL</td><td>±0,02 mL</td></tr>
            <tr><td>Pipet bầu 25 mL</td><td>±0,03 mL</td></tr>
            <tr><td>Bình định mức 100 mL</td><td>±0,08 mL</td></tr>
            <tr><td>Bình định mức 250 mL</td><td>±0,12 mL</td></tr>
          </tbody>
        </table>
      </div>
      <p><b>Hiệu chuẩn dụng cụ bằng cân nước</b>: cân khối lượng nước cất mà dụng cụ chứa hoặc chảy ra, rồi đổi sang thể tích thật bằng khối lượng riêng của nước ở nhiệt độ phòng. Vì cân trong không khí, khối lượng cân được (biểu kiến) nhỏ hơn khối lượng thật do <b>lực đẩy Ácsimét</b> của không khí đẩy lên cả vật cân lẫn quả cân — cần hiệu chỉnh:</p>
      <div class="cong-thuc"><div class="nhan">m: khối lượng thật; m′: khối lượng cân được; d<sub>kk</sub> ≈ 0,0012 g/mL; d<sub>qc</sub>: khối lượng riêng quả cân chuẩn (thép không gỉ, ≈ 8,0 g/mL); d: khối lượng riêng nước ở nhiệt độ cân</div>\[ m = m'\cdot\frac{1-\dfrac{d_\text{kk}}{d_\text{qc}}}{1-\dfrac{d_\text{kk}}{d}} \]</div>
      <div class="vi-du"><b>Ví dụ 8.</b> Cân nước cất ở 20 °C (d = 0,9982 g/mL) chứa trong một bình định mức ghi 10 mL, được khối lượng biểu kiến 9,982 g (quả cân thép, d<sub>qc</sub> = 8,0 g/mL; d<sub>kk</sub> = 0,0012 g/mL). Tính thể tích thật của bình.
        <details><summary>Xem lời giải</summary>
          \[ m = 9,982\cdot\frac{1-\frac{0,0012}{8,0}}{1-\frac{0,0012}{0,9982}} = 9,993\ \mathrm{g} \]
          \[ V = \frac{m}{d} = \frac{9,993}{0,9982} = \mathbf{10,01\ mL} \]
          Bình ghi 10 mL thực tế chứa 10,01 mL — sai lệch nhỏ nhưng đáng kể khi cần độ chính xác cao.
        </details></div>

      <div class="hinh-tinh">
        <svg viewBox="0 0 320 195" role="img" aria-label="Vạch TC trên bình định mức và vạch TD trên pipet">
          <path d="M70,50 L60,148 Q77,167 94,148 L84,50 Z" fill="none" stroke="var(--chu-phu)" stroke-width="1.8"/>
          <rect x="70" y="15" width="14" height="35" fill="none" stroke="var(--chu-phu)" stroke-width="1.8"/>
          <line x1="66" y1="40" x2="88" y2="40" stroke="var(--mau-chinh)" stroke-width="2" stroke-dasharray="3 2"/>
          <text x="94" y="43" font-size="10" fill="var(--mau-chinh)">vạch mức</text>
          <text x="77" y="185" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">TC</text>
          <rect x="216" y="15" width="8" height="45" fill="none" stroke="var(--chu-phu)" stroke-width="1.8"/>
          <ellipse cx="220" cy="90" rx="22" ry="28" fill="none" stroke="var(--chu-phu)" stroke-width="1.8"/>
          <path d="M212,116 L228,116 L220,165 Z" fill="none" stroke="var(--chu-phu)" stroke-width="1.8"/>
          <line x1="212" y1="27" x2="228" y2="27" stroke="var(--mau-chinh)" stroke-width="2" stroke-dasharray="3 2"/>
          <circle cx="220" cy="170" r="2.4" fill="var(--chu-phu)"/>
          <text x="232" y="30" font-size="10" fill="var(--mau-chinh)">vạch mức</text>
          <text x="232" y="163" font-size="10" fill="var(--chu-phu)">không thổi</text>
          <text x="232" y="174" font-size="10" fill="var(--chu-phu)">giọt cuối</text>
          <text x="220" y="185" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">TD</text>
        </svg>
        <p class="chu-thich"><b>TC</b> (to contain, bình định mức): thể tích đúng khi dung dịch nằm trong bình, tới vạch. <b>TD</b> (to deliver, pipet, buret): thể tích đúng là lượng chất lỏng <i>đã chảy ra</i> — để giọt tự chảy hết theo thành, không thổi giọt cuối.</p>
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
      <p><b>Vì sao lại pha loãng, đun nóng, thêm chậm khi tạo kết tủa tinh thể?</b> Theo quy tắc Von Weimarn, kích thước hạt kết tủa phụ thuộc <b>độ quá bão hòa tương đối</b>:</p>
      <div class="cong-thuc"><div class="nhan">Q: nồng độ tức thời ngay sau khi trộn; S: độ tan lúc cân bằng</div>\[ \text{RSS} = \frac{Q-S}{S} \]</div>
      <p>RSS càng nhỏ, tốc độ tạo mầm tinh thể càng chậm so với tốc độ lớn lên của mầm sẵn có, nên hạt lớn thành tinh thể to, dễ lọc rửa. Pha loãng dung dịch làm <b>Q giảm</b> (cùng số mol chất tan trong thể tích lớn hơn); đun nóng làm <b>S tăng</b> (hầu hết chất rắn tan tốt hơn khi nóng) — cả hai đều làm RSS giảm. Thêm thuốc thử từ từ, khuấy đều và để yên cho "muồi" (digestion) cũng làm giảm RSS. Kết tủa vô định hình (như Fe(OH)<sub>3</sub>) có S rất nhỏ (gần như không tan) nên RSS luôn lớn dù pha loãng cỡ nào — phải thêm chất điện li (ví dụ NH<sub>4</sub>NO<sub>3</sub>) để các hạt keo hút nhau kết tụ lại thay vì lơ lửng.</p>
      <div class="vi-du"><b>Ví dụ 9.</b> Xác định sắt trong viên bổ sung sắt fumarat: 15 viên được hòa tan trong HCl, oxi hóa Fe<sup>2+</sup> thành Fe<sup>3+</sup> bằng H<sub>2</sub>O<sub>2</sub>, kết tủa Fe(OH)<sub>3</sub> bằng NH<sub>3</sub>, lọc, nung thu được 0,277 g Fe<sub>2</sub>O<sub>3</sub> (M = 159,69). Tính khối lượng Fe (55,845) trung bình trong mỗi viên.
        <details><summary>Xem lời giải</summary>
          \[ m_\mathrm{Fe} = 0,277\cdot\frac{2\cdot55,845}{159,69} = 0,194\ \mathrm{g} \]
          Mỗi viên chứa: \[ \frac{0,194}{15} = 0,0129\ \mathrm{g} = \mathbf{12,9\ mg} \]
        </details></div>

      <div class="hinh-tinh">
        <svg viewBox="0 0 320 175" role="img" aria-label="Sơ đồ khối phân tích khối lượng sắt fumarat">
          <defs>
            <marker id="mt-dl-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--mau-chinh)"/>
            </marker>
          </defs>
          <line x1="100" y1="40" x2="118" y2="40" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-dl-1)"/>
          <line x1="202" y1="40" x2="220" y2="40" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-dl-1)"/>
          <line x1="262" y1="60" x2="262" y2="110" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-dl-1)"/>
          <line x1="220" y1="130" x2="202" y2="130" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-dl-1)"/>
          <line x1="118" y1="130" x2="100" y2="130" stroke="var(--mau-chinh)" stroke-width="2" marker-end="url(#mt-dl-1)"/>
          <rect x="16" y="20" width="84" height="40" rx="8" fill="var(--nen)" stroke="var(--vien)" stroke-width="1.5"/>
          <text x="58" y="37" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">1. Hòa tan</text>
          <text x="58" y="49" text-anchor="middle" font-size="10" fill="var(--chu-phu)">(HCl)</text>
          <rect x="118" y="20" width="84" height="40" rx="8" fill="var(--nen)" stroke="var(--vien)" stroke-width="1.5"/>
          <text x="160" y="35" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">2. Oxi hóa</text>
          <text x="160" y="48" text-anchor="middle" font-size="10" fill="var(--chu-phu)">Fe²⁺→Fe³⁺</text>
          <rect x="220" y="20" width="84" height="40" rx="8" fill="var(--nen)" stroke="var(--vien)" stroke-width="1.5"/>
          <text x="262" y="35" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">3. Kết tủa</text>
          <text x="262" y="48" text-anchor="middle" font-size="9.5" fill="var(--chu-phu)">Fe(OH)₃ (NH₃)</text>
          <rect x="220" y="110" width="84" height="40" rx="8" fill="var(--nen)" stroke="var(--vien)" stroke-width="1.5"/>
          <text x="262" y="134" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">4. Lọc, rửa</text>
          <rect x="118" y="110" width="84" height="40" rx="8" fill="var(--nen)" stroke="var(--vien)" stroke-width="1.5"/>
          <text x="160" y="127" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">5. Nung</text>
          <text x="160" y="140" text-anchor="middle" font-size="9.5" fill="var(--chu-phu)">→ Fe₂O₃</text>
          <rect x="16" y="110" width="84" height="40" rx="8" fill="var(--nen)" stroke="var(--vien)" stroke-width="1.5"/>
          <text x="58" y="134" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">6. Cân</text>
        </svg>
        <p class="chu-thich">Sơ đồ khối của Ví dụ 8: dạng cân cuối cùng là Fe₂O₃, từ đó tính ngược ra khối lượng Fe bằng hệ số chuyển F.</p>
      </div>

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
      <div class="vi-du"><b>Ví dụ 10.</b> Chuẩn độ 10,00 mL dung dịch HCl bằng NaOH 0,02000 M (chỉ thị phenolphtalein) hết 9,46 mL. Tính nồng độ HCl.
        <details><summary>Xem lời giải</summary>
          \[ C_\mathrm{HCl} = \frac{0,02000\cdot9,46}{10,00} = \mathbf{0,0189\ M} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 11.</b> <i>(Chuẩn độ ngược)</i> Hòa tan 0,2500 g đá vôi trong 50,00 mL HCl 0,1000 M. Lượng HCl dư chuẩn độ hết 10,00 mL NaOH 0,1000 M. Tính %CaCO<sub>3</sub> (M = 100,09).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} n_\text{HCl ban đầu} &= 5,000\cdot10^{-3}\ \mathrm{mol} \\ n_\text{HCl dư} &= 1,000\cdot10^{-3}\ \mathrm{mol} \\ n_\text{HCl phản ứng} &= 4,000\cdot10^{-3}\ \mathrm{mol} \end{aligned} \]
          CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O, nên n<sub>CaCO₃</sub> = 2,000·10<sup>−3</sup> mol:
          \[ \begin{aligned} \%\mathrm{CaCO_3} &= \frac{2,000\cdot10^{-3}\cdot100,09}{0,2500}\cdot100\% \\ &= \mathbf{80,07\%} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 12.</b> <i>(Chuẩn độ gián tiếp)</i> Ca<sup>2+</sup> trong 5,00 mL mẫu được kết tủa hết dưới dạng CaC<sub>2</sub>O<sub>4</sub>. Lọc, rửa, hòa tan kết tủa trong H<sub>2</sub>SO<sub>4</sub>, rồi chuẩn độ H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> sinh ra bằng KMnO<sub>4</sub> 0,00200 M hết 4,80 mL. Tính nồng độ Ca<sup>2+</sup>.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} &\ce{5H2C2O4 + 2MnO4- + 6H+} \\ &\qquad\ce{-> 10CO2 + 2Mn^2+ + 8H2O} \end{aligned} \]
          \[ \begin{aligned} n_\mathrm{MnO_4^-} &= 0,00200\cdot4,80\cdot10^{-3} \\ &= 9,60\cdot10^{-6}\ \mathrm{mol} \\ n_\mathrm{Ca^{2+}} &= n_\mathrm{H_2C_2O_4} = \tfrac{5}{2}\cdot9,60\cdot10^{-6} \\ &= 2,40\cdot10^{-5}\ \mathrm{mol} \\ C_\mathrm{Ca^{2+}} &= \frac{2,40\cdot10^{-5}}{5,00\cdot10^{-3}} \\ &= \mathbf{4,80\cdot10^{-3}\ M} \end{aligned} \]
        </details></div>

      <h3>7. Chuỗi pha loãng và quy về mẫu gốc</h3>
      <p>Rất nhiều bài toán thực tế có chung một khung: mẫu gốc (viên thuốc, mẫu rắn, mẫu lỏng) được hòa tan hoặc pha loãng thành một bình định mức, rồi chỉ lấy ra một phần nhỏ (<b>aliquot</b>) đem phản ứng hoặc chuẩn độ. Kết quả đo được trên phần nhỏ đó phải <b>quy ngược lại</b> về mẫu gốc ban đầu — đây cũng là dạng bài hay bị mất điểm nhất vì bỏ sót bước quy đổi này.</p>
      <p>Làm theo đúng thứ tự bốn bước sau:</p>
      <ol>
        <li>Từ số liệu chuẩn độ (hoặc phản ứng) trên thể tích lấy ra V<sub>aliquot</sub>, tính số mol chất phân tích n<sub>aliquot</sub> bằng hợp thức phản ứng (mục 6).</li>
        <li>Quy về lượng có trong <b>cả bình định mức</b> V<sub>bình</sub> (nơi lấy aliquot ra) bằng hệ số pha loãng:
          \[ n_\text{trong bình} = n_\text{aliquot}\times\frac{V_\text{bình}}{V_\text{aliquot}} \]
        </li>
        <li>Nếu có nhiều bình pha loãng liên tiếp (mẫu gốc → bình A → lấy ra pha thành bình B), nhân thêm hệ số pha loãng của từng bước.</li>
        <li>Đổi sang đơn vị đề bài yêu cầu, chia cho khối lượng/thể tích/số đơn vị của <b>mẫu gốc</b> ban đầu:
          \[ \%X = \frac{n_\text{trong bình}\cdot M}{m_\text{mẫu gốc}}\cdot100\% \]
          \[ C_\text{mẫu gốc} = \frac{n_\text{trong bình}}{V_\text{mẫu gốc}} \]
        </li>
      </ol>
      <div class="cong-thuc"><div class="nhan">Khung chung: chuẩn độ tỉ lệ a (chất phân tích) : b (chất chuẩn)</div>\[ n_\text{mẫu gốc} = C_\text{chuẩn}\cdot V_\text{chuẩn}\cdot\frac{a}{b}\cdot\frac{V_\text{bình}}{V_\text{aliquot}} \]</div>
      <p class="luu-y"><b>Lỗi hay gặp:</b> quên nhân hệ số pha loãng V<sub>bình</sub>/V<sub>aliquot</sub> (coi lượng đo trên aliquot là của cả mẫu); nhân <b>ngược</b> hệ số pha loãng (lấy V<sub>aliquot</sub>/V<sub>bình</sub>); dùng khối lượng mol của muối khan thay cho muối ngậm nước hoặc ngược lại; sai tỉ lượng phản ứng (quên hệ số a : b); ghi kết quả cuối với số chữ số có nghĩa không khớp với dữ kiện đề bài; nhầm mg/L (ppm) với %.</p>

      <div class="vi-du"><b>Ví dụ 13.</b> Hòa tan 10 viên sắt(II) fumarat trong HCl, định mức thành 250,0 mL (bình B). Lấy 5,00 mL dung dịch B, chuẩn độ Fe<sup>2+</sup> bằng K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,008000 M hết 3,75 mL. Tính khối lượng Fe (M = 55,845) trung bình trong mỗi viên (mg/viên).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} &\ce{6Fe^2+ + Cr2O7^2- + 14H+} \\ &\qquad\ce{-> 6Fe^3+ + 2Cr^3+ + 7H2O} \end{aligned} \]
          \[ \begin{aligned} n_\mathrm{Cr_2O_7^{2-}} &= 0,008000\cdot3,75\cdot10^{-3} \\ &= 3,00\cdot10^{-5}\ \mathrm{mol} \\ n_\mathrm{Fe^{2+}} &= 6\cdot3,00\cdot10^{-5} \\ &= 1,80\cdot10^{-4}\ \mathrm{mol}\ (5,00\ \mathrm{mL}) \end{aligned} \]
          \[ \begin{aligned} m_\mathrm{Fe}\,(5,00\ \mathrm{mL}) &= 1,80\cdot10^{-4}\cdot55,845\ \mathrm{g} \\ &= 1,005\cdot10^{-2}\ \mathrm{g} \\ &= \mathbf{10,05\ mg} \end{aligned} \]
          Hệ số pha loãng \( \dfrac{250,0}{5,00} = 50,0 \):
          \[ \begin{aligned} m_\mathrm{Fe}\,(10\ \text{viên}) &= 10,05\cdot50,0 \\ &= 502,6\ \mathrm{mg} \end{aligned} \]
          \[ \frac{m_\mathrm{Fe}}{\text{viên}} = \frac{502,6}{10} = \mathbf{50,3\ mg/viên} \]
        </details></div>

      <div class="vi-du"><b>Ví dụ 14.</b> Lấy 25,00 mL mẫu nước thải (dung dịch A), định mức thành 250,0 mL (dung dịch B). Lấy 50,00 mL dung dịch B, chuẩn độ Cl<sup>−</sup> bằng AgNO<sub>3</sub> 0,1000 M (phương pháp Mohr) hết 15,20 mL. Tính nồng độ Cl<sup>−</sup> (M = 35,45) trong mẫu gốc A theo g/L.
        <details><summary>Xem lời giải</summary>
          \[ \ce{Ag+ + Cl- -> AgCl v} \]
          \[ \begin{aligned} n_\mathrm{Ag^+} &= 0,1000\cdot15,20\cdot10^{-3} \\ &= 1,520\cdot10^{-3}\ \mathrm{mol} \\ &= n_\mathrm{Cl^-}\ (50,00\ \mathrm{mL\ B}) \end{aligned} \]
          \[ C_\mathrm{Cl^-}(B) = \frac{1,520\cdot10^{-3}}{0,05000} = 0,03040\ \mathrm{M} \]
          Hệ số pha loãng khi tạo B từ A: \( \dfrac{250,0}{25,00} = 10,00 \)
          \[ \begin{aligned} C_\mathrm{Cl^-}(A) &= 0,03040\cdot10,00 = 0,3040\ \mathrm{M} \\ &\to 0,3040\cdot35,45 = \mathbf{10,78\ g/L} \end{aligned} \]
        </details></div>

      <div class="vi-du"><b>Ví dụ 15.</b> Hòa tan 1,2345 g mẫu quặng sắt, định mức thành 100,0 mL. Lấy 10,00 mL, khử toàn bộ Fe<sup>3+</sup> về Fe<sup>2+</sup> (ví dụ bằng SnCl<sub>2</sub>), rồi chuẩn độ hết Fe<sup>2+</sup> bằng KMnO<sub>4</sub> 0,02000 M hết 8,20 mL. Tính %Fe (M = 55,845) trong quặng.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} &\ce{5Fe^2+ + MnO4- + 8H+} \\ &\qquad\ce{-> 5Fe^3+ + Mn^2+ + 4H2O} \end{aligned} \]
          \[ \begin{aligned} n_\mathrm{MnO_4^-} &= 0,02000\cdot8,20\cdot10^{-3} \\ &= 1,640\cdot10^{-4}\ \mathrm{mol} \\ n_\mathrm{Fe^{2+}} &= 5\cdot1,640\cdot10^{-4} \\ &= 8,20\cdot10^{-4}\ \mathrm{mol}\ (10,00\ \mathrm{mL}) \end{aligned} \]
          \[ \begin{aligned} m_\mathrm{Fe} &= 8,20\cdot10^{-4}\cdot55,845 \\ &= 4,579\cdot10^{-2}\ \mathrm{g} = 45,79\ \mathrm{mg} \end{aligned} \]
          Hệ số pha loãng \( \dfrac{100,0}{10,00} = 10,00 \)
          \[ \begin{aligned} m_\mathrm{Fe}\,(\text{cả mẫu}) &= 45,79\cdot10,00 \\ &= 457,9\ \mathrm{mg} = 0,4579\ \mathrm{g} \end{aligned} \]
          \[ \%\mathrm{Fe} = \frac{0,4579}{1,2345}\cdot100 = \mathbf{37,1\%} \]
        </details></div>

      <h3>8. Tóm tắt công thức</h3>
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
            <tr><td>Chuỗi pha loãng → hàm lượng</td><td>\( n_\text{gốc} = C_\text{chuẩn}V_\text{chuẩn}\dfrac{a}{b}\dfrac{V_\text{bình}}{V_\text{aliquot}} \)</td><td>Nhân đúng chiều hệ số pha loãng</td></tr>
          </tbody>
        </table>
      </div>
`,
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "thong-ke",
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
                  <li>Hiểu phân bố Gauss, phân biệt s và σ, diễn giải đúng khoảng tin cậy.</li>
                  <li>Tra đúng bảng t, Q, G, F theo bậc tự do hoặc n; kiểm tra số liệu ngờ bằng Q hoặc Grubbs.</li>
                  <li>So sánh hai phương pháp đúng thứ tự (F rồi t; t cặp) và tính sai số của kết quả chuẩn độ.</li>
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
          <tbody><tr><td>1</td><td>12,71</td></tr><tr><td>2</td><td>4,30</td></tr><tr><td>3</td><td>3,18</td></tr><tr><td>4</td><td>2,78</td></tr><tr><td>5</td><td>2,57</td></tr><tr><td>6</td><td>2,45</td></tr><tr><td>7</td><td>2,36</td></tr><tr><td>8</td><td>2,31</td></tr><tr><td>9</td><td>2,26</td></tr><tr><td>10</td><td>2,23</td></tr></tbody>
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
      <h3>7. Phân bố Gauss: s, σ và ý nghĩa của khoảng tin cậy</h3>
      <p>Sai số ngẫu nhiên của nhiều phép đo lặp thường theo <b>phân bố chuẩn (Gauss)</b>: kết quả tập trung quanh giá trị trung bình, càng xa càng hiếm, hai phía đối xứng. Hai đại lượng mô tả đường cong:</p>
      <ul>
        <li><b>μ</b> (trung bình tổng thể) và <b>σ</b> (độ lệch chuẩn tổng thể): giá trị lí thuyết khi làm vô số lần đo. Chia cho <b>n</b>.</li>
        <li><b>x̄</b> và <b>s</b>: ước lượng từ n lần đo thật. s chia cho <b>n − 1</b>, vì x̄ đã dùng mất một bậc tự do (các độ lệch x<sub>i</sub> − x̄ luôn có tổng bằng 0), và nếu chia cho n thì s sẽ nhỏ hơn thực tế.</li>
      </ul>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 240" role="img" aria-label="Đường cong phân bố Gauss với các khoảng ±1σ, ±2σ, ±3σ">
<polygon points="55.0,140.0 55.0,138.9 58.5,138.5 62.0,138.0 65.5,137.4 69.0,136.6 72.5,135.6 76.0,134.4 79.5,132.9 83.0,131.1 86.5,129.0 90.0,126.5 93.5,123.6 97.0,120.2 100.5,116.4 104.0,112.2 107.5,107.5 111.0,102.5 114.5,97.0 118.0,91.3 121.5,85.4 125.0,79.3 128.5,73.3 132.0,67.4 135.5,61.7 139.0,56.5 142.5,51.8 146.0,47.7 149.5,44.4 153.0,42.0 156.5,40.5 160.0,40.0 163.5,40.5 167.0,42.0 170.5,44.4 174.0,47.7 177.5,51.8 181.0,56.5 184.5,61.7 188.0,67.4 191.5,73.3 195.0,79.3 198.5,85.4 202.0,91.3 205.5,97.0 209.0,102.5 212.5,107.5 216.0,112.2 219.5,116.4 223.0,120.2 226.5,123.6 230.0,126.5 233.5,129.0 237.0,131.1 240.5,132.9 244.0,134.4 247.5,135.6 251.0,136.6 254.5,137.4 258.0,138.0 261.5,138.5 265.0,138.9 265.0,140.0" fill="var(--mau-chinh)" fill-opacity="0.1" stroke="none"/>
<polygon points="90.0,140.0 90.0,126.5 92.3,124.6 94.7,122.5 97.0,120.2 99.3,117.7 101.7,115.1 104.0,112.2 106.3,109.1 108.7,105.9 111.0,102.5 113.3,98.9 115.7,95.2 118.0,91.3 120.3,87.4 122.7,83.4 125.0,79.3 127.3,75.3 129.7,71.3 132.0,67.4 134.3,63.6 136.7,59.9 139.0,56.5 141.3,53.3 143.7,50.3 146.0,47.7 148.3,45.4 150.7,43.5 153.0,42.0 155.3,40.9 157.7,40.2 160.0,40.0 162.3,40.2 164.7,40.9 167.0,42.0 169.3,43.5 171.7,45.4 174.0,47.7 176.3,50.3 178.7,53.3 181.0,56.5 183.3,59.9 185.7,63.6 188.0,67.4 190.3,71.3 192.7,75.3 195.0,79.3 197.3,83.4 199.7,87.4 202.0,91.3 204.3,95.2 206.7,98.9 209.0,102.5 211.3,105.9 213.7,109.1 216.0,112.2 218.3,115.1 220.7,117.7 223.0,120.2 225.3,122.5 227.7,124.6 230.0,126.5 230.0,140.0" fill="var(--mau-chinh)" fill-opacity="0.18" stroke="none"/>
<polygon points="125.0,140.0 125.0,79.3 126.2,77.3 127.3,75.3 128.5,73.3 129.7,71.3 130.8,69.3 132.0,67.4 133.2,65.5 134.3,63.6 135.5,61.7 136.7,59.9 137.8,58.2 139.0,56.5 140.2,54.8 141.3,53.3 142.5,51.8 143.7,50.3 144.8,49.0 146.0,47.7 147.2,46.5 148.3,45.4 149.5,44.4 150.7,43.5 151.8,42.7 153.0,42.0 154.2,41.4 155.3,40.9 156.5,40.5 157.7,40.2 158.8,40.1 160.0,40.0 161.2,40.1 162.3,40.2 163.5,40.5 164.7,40.9 165.8,41.4 167.0,42.0 168.2,42.7 169.3,43.5 170.5,44.4 171.7,45.4 172.8,46.5 174.0,47.7 175.2,49.0 176.3,50.3 177.5,51.8 178.7,53.3 179.8,54.8 181.0,56.5 182.2,58.2 183.3,59.9 184.5,61.7 185.7,63.6 186.8,65.5 188.0,67.4 189.2,69.3 190.3,71.3 191.5,73.3 192.7,75.3 193.8,77.3 195.0,79.3 195.0,140.0" fill="var(--mau-chinh)" fill-opacity="0.3" stroke="none"/>
<polyline points="20.0,140.0 21.8,140.0 23.5,140.0 25.2,139.9 27.0,139.9 28.8,139.9 30.5,139.9 32.2,139.9 34.0,139.8 35.8,139.8 37.5,139.8 39.2,139.7 41.0,139.7 42.8,139.6 44.5,139.6 46.2,139.5 48.0,139.4 49.8,139.3 51.5,139.2 53.2,139.0 55.0,138.9 56.8,138.7 58.5,138.5 60.2,138.3 62.0,138.0 63.8,137.7 65.5,137.4 67.2,137.0 69.0,136.6 70.8,136.1 72.5,135.6 74.2,135.0 76.0,134.4 77.8,133.7 79.5,132.9 81.2,132.0 83.0,131.1 84.8,130.1 86.5,129.0 88.2,127.8 90.0,126.5 91.8,125.1 93.5,123.6 95.2,121.9 97.0,120.2 98.8,118.4 100.5,116.4 102.2,114.4 104.0,112.2 105.8,109.9 107.5,107.5 109.2,105.0 111.0,102.5 112.8,99.8 114.5,97.0 116.2,94.2 118.0,91.3 119.8,88.4 121.5,85.4 123.2,82.4 125.0,79.3 126.8,76.3 128.5,73.3 130.2,70.3 132.0,67.4 133.8,64.5 135.5,61.7 137.2,59.0 139.0,56.5 140.8,54.0 142.5,51.8 144.2,49.6 146.0,47.7 147.8,45.9 149.5,44.4 151.2,43.1 153.0,42.0 154.8,41.1 156.5,40.5 158.2,40.1 160.0,40.0 161.8,40.1 163.5,40.5 165.2,41.1 167.0,42.0 168.8,43.1 170.5,44.4 172.2,45.9 174.0,47.7 175.8,49.6 177.5,51.8 179.2,54.0 181.0,56.5 182.8,59.0 184.5,61.7 186.2,64.5 188.0,67.4 189.8,70.3 191.5,73.3 193.2,76.3 195.0,79.3 196.8,82.4 198.5,85.4 200.2,88.4 202.0,91.3 203.8,94.2 205.5,97.0 207.2,99.8 209.0,102.5 210.8,105.0 212.5,107.5 214.2,109.9 216.0,112.2 217.8,114.4 219.5,116.4 221.2,118.4 223.0,120.2 224.8,121.9 226.5,123.6 228.2,125.1 230.0,126.5 231.8,127.8 233.5,129.0 235.2,130.1 237.0,131.1 238.8,132.0 240.5,132.9 242.2,133.7 244.0,134.4 245.8,135.0 247.5,135.6 249.2,136.1 251.0,136.6 252.8,137.0 254.5,137.4 256.2,137.7 258.0,138.0 259.8,138.3 261.5,138.5 263.2,138.7 265.0,138.9 266.8,139.0 268.5,139.2 270.2,139.3 272.0,139.4 273.8,139.5 275.5,139.6 277.2,139.6 279.0,139.7 280.8,139.7 282.5,139.8 284.2,139.8 286.0,139.8 287.8,139.9 289.5,139.9 291.2,139.9 293.0,139.9 294.8,139.9 296.5,140.0 298.2,140.0 300.0,140.0" fill="none" stroke="var(--mau-chinh)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
<line x1="20.0" y1="140.0" x2="300.0" y2="140.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<line x1="55.0" y1="140.0" x2="55.0" y2="144.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="55.0" y="156.0" text-anchor="middle" font-size="10" fill="var(--chu)">−3σ</text>
<line x1="90.0" y1="140.0" x2="90.0" y2="144.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="90.0" y="156.0" text-anchor="middle" font-size="10" fill="var(--chu)">−2σ</text>
<line x1="125.0" y1="140.0" x2="125.0" y2="144.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="125.0" y="156.0" text-anchor="middle" font-size="10" fill="var(--chu)">−1σ</text>
<line x1="160.0" y1="140.0" x2="160.0" y2="144.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="160.0" y="156.0" text-anchor="middle" font-size="10" fill="var(--chu)">μ</text>
<line x1="195.0" y1="140.0" x2="195.0" y2="144.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="195.0" y="156.0" text-anchor="middle" font-size="10" fill="var(--chu)">+1σ</text>
<line x1="230.0" y1="140.0" x2="230.0" y2="144.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="230.0" y="156.0" text-anchor="middle" font-size="10" fill="var(--chu)">+2σ</text>
<line x1="265.0" y1="140.0" x2="265.0" y2="144.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="265.0" y="156.0" text-anchor="middle" font-size="10" fill="var(--chu)">+3σ</text>
<text x="160.0" y="34.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">μ: trung bình tổng thể</text>
<text x="160.0" y="62.0" text-anchor="middle" font-size="11" fill="var(--chu)" font-weight="600">68,3 %</text>
<line x1="125.0" y1="172.0" x2="195.0" y2="172.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<line x1="125.0" y1="168.0" x2="125.0" y2="176.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<line x1="195.0" y1="168.0" x2="195.0" y2="176.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<text x="160.0" y="167.0" text-anchor="middle" font-size="10" fill="var(--chu)">μ ± 1σ: 68,3 %</text>
<line x1="90.0" y1="192.0" x2="230.0" y2="192.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<line x1="90.0" y1="188.0" x2="90.0" y2="196.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<line x1="230.0" y1="188.0" x2="230.0" y2="196.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<text x="160.0" y="187.0" text-anchor="middle" font-size="10" fill="var(--chu)">μ ± 2σ: 95,5 %</text>
<line x1="55.0" y1="212.0" x2="265.0" y2="212.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<line x1="55.0" y1="208.0" x2="55.0" y2="216.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<line x1="265.0" y1="208.0" x2="265.0" y2="216.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<text x="160.0" y="207.0" text-anchor="middle" font-size="10" fill="var(--chu)">μ ± 3σ: 99,7 %</text>
<text x="160.0" y="232.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">Diện tích dưới đường cong trong khoảng = tỉ lệ kết quả rơi vào đó</text>
</svg>
        <p class="chu-thich">Phân bố Gauss: 68,3% kết quả nằm trong μ ± σ; 95,5% trong μ ± 2σ; 99,7% trong μ ± 3σ. Với mức 95% thì cụ thể là μ ± 1,96σ.</p>
      </div>
      <div class="cong-thuc"><div class="nhan">Chuẩn hóa: z cho biết kết quả cách μ bao nhiêu độ lệch chuẩn</div>\[ z = \frac{x - \mu}{\sigma} \]</div>
      <p><b>Khoảng tin cậy nói gì?</b> Khoảng x̄ ± ts/√n <b>không</b> có nghĩa là "95% kết quả đo nằm trong khoảng này" và cũng không nói μ "dao động". Nghĩa đúng: nếu lặp lại cả quá trình làm n thí nghiệm nhiều lần và mỗi lần dựng một khoảng như vậy, thì <b>95% số khoảng chứa μ</b>. Khoảng hẹp theo √n: muốn hẹp đi một nửa phải tăng số lần đo lên khoảng 4 lần. Khi σ đã biết chính xác dùng z (95%: 1,96); khi chỉ có s từ ít lần đo dùng t, và t lớn hơn z nên khoảng rộng hơn.</p>
      <div class="vi-du"><b>Ví dụ 8.</b> Một phương pháp có σ = 0,25 mg/L (biết chắc từ rất nhiều phép đo); mẫu chuẩn có μ = 50,00 mg/L. (a) Khoảng chứa 95% kết quả đơn lẻ? (b) Một lần đo cho 51,00 mg/L: có đáng ngờ không? (c) Khoảng chứa 95% giá trị trung bình của 5 lần đo? (d) Nếu 0,25 chỉ là s tính từ 5 lần đo thì khoảng tin cậy 95% của μ (x̄ ± ts/√n) rộng bao nhiêu (t = 2,78, f = 4)?
        <details><summary>Xem lời giải</summary>
          (a) μ ± 1,96σ = 50,00 ± 0,49 → <b>49,51 đến 50,49 mg/L</b>.<br>
          (b)
          \[ z = \frac{51,00 - 50,00}{0,25} = 4,0 \]
          |z| = 4,0 &gt; 3: xác suất gặp kết quả như vậy chưa tới 0,3%, nên <b>rất đáng ngờ</b> (nhiều khả năng là sai số thô).<br>
          (c)
          \[ \begin{aligned} \mu \pm \frac{1,96\,\sigma}{\sqrt{n}} &= 50,00 \pm \frac{1,96\cdot0,25}{\sqrt{5}} \\ &= 50,00 \pm \mathbf{0,22} \end{aligned} \]
          (d)
          \[ \pm\frac{2,78\cdot0,25}{\sqrt{5}} = \pm\mathbf{0,31\ mg/L} \]
          Rộng hơn ở (c), vì chưa biết σ và chỉ có 5 lần đo nên phải "trả giá" bằng t &gt; z.
        </details></div>

      <h3>8. Cách tra bảng t, Q, G, F</h3>
      <p>Bốn bảng cho bốn bài toán khác nhau. Sai lầm phổ biến nhất là <b>vào bảng bằng sai đại lượng</b> (n thay cho f, hoặc ngược lại). Các bảng đầy đủ nằm trong mục <b>Tra cứu</b> của app: <i>Bảng t (Student)</i>, <i>Bảng Q</i>, <i>Bảng G (Grubbs)</i>, <i>Bảng F (95%)</i> và <i>Bảng F (97,5%)</i>.</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Bảng</th><th>Vào bảng bằng</th><th>Ghi chú</th></tr></thead>
          <tbody>
            <tr><td>t (một mẫu, khoảng tin cậy)</td><td>f = n − 1, cột mức tin cậy</td><td>Hai phía; 95% cho ra t = 2,78 khi n = 5</td></tr>
            <tr><td>t (hai trung bình, độ chụm gộp)</td><td>f = n<sub>1</sub> + n<sub>2</sub> − 2</td><td>n<sub>1</sub> = 5, n<sub>2</sub> = 6 → f = 9, t = 2,26</td></tr>
            <tr><td>t (cặp)</td><td>f = n − 1 với n = <b>số cặp</b></td><td>Xem mục 10</td></tr>
            <tr><td>Q (Dixon)</td><td><b>n</b> (số giá trị), không phải f</td><td>3 ≤ n ≤ 10; cột 95% (hoặc theo đề)</td></tr>
            <tr><td>G (Grubbs)</td><td><b>n</b>, cột mức tin cậy</td><td>Dùng cho n từ 3 trở lên</td></tr>
            <tr><td>F</td><td>Cột f<sub>1</sub> = n<sub>tử</sub> − 1, hàng f<sub>2</sub> = n<sub>mẫu</sub> − 1</td><td>Tử số là phương sai <b>lớn hơn</b> (F ≥ 1)</td></tr>
          </tbody>
        </table>
      </div>
      <p>Bảng t rút gọn (giá trị hai phía). Thêm các dòng f khác và cột 98%, 99,9% trong bảng đầy đủ:</p>
      <div class="bang-cuon">
        <table class="bang bang-hep">
          <thead><tr><th>f</th><th>90%</th><th>95%</th><th>99%</th></tr></thead>
          <tbody><tr><td>1</td><td>6,31</td><td>12,71</td><td>63,66</td></tr><tr><td>2</td><td>2,92</td><td>4,30</td><td>9,92</td></tr><tr><td>3</td><td>2,35</td><td>3,18</td><td>5,84</td></tr><tr><td>4</td><td>2,13</td><td>2,78</td><td>4,60</td></tr><tr><td>5</td><td>2,02</td><td>2,57</td><td>4,03</td></tr><tr><td>6</td><td>1,94</td><td>2,45</td><td>3,71</td></tr><tr><td>7</td><td>1,89</td><td>2,36</td><td>3,50</td></tr><tr><td>8</td><td>1,86</td><td>2,31</td><td>3,36</td></tr><tr><td>9</td><td>1,83</td><td>2,26</td><td>3,25</td></tr><tr><td>10</td><td>1,81</td><td>2,23</td><td>3,17</td></tr><tr><td>20</td><td>1,72</td><td>2,09</td><td>2,85</td></tr><tr><td>∞</td><td>1,64</td><td>1,96</td><td>2,58</td></tr></tbody>
        </table>
      </div>
      <ul>
        <li>Khi f bạn cần không có trong bảng, lấy dòng có f <b>nhỏ hơn gần nhất</b> (t lớn hơn, an toàn hơn); đề thi thường cho sẵn giá trị cần dùng, khi đó luôn dùng số của đề.</li>
        <li><b>F một phía và hai phía</b>: bảng F 95% ghi giá trị tới hạn một phía 5% (dùng khi đề hỏi "phương pháp 1 có kém chụm hơn không"). Kiểm định hai phía mức 95% ("hai độ chụm có khác nhau không") dùng bảng F 97,5%. Nếu đề cho sẵn bảng F thì theo bảng đó.</li>
        <li><b>Q hay G?</b> Cả hai loại một giá trị ngờ nhất mỗi lần. Q tính nhanh bằng tay nhưng chỉ dùng cho n từ 3 đến 10; Grubbs (mục 9) dùng cả x̄ và s nên phản ánh toàn bộ số liệu và được Harris khuyên dùng hơn.</li>
      </ul>
      <p><b>Sơ đồ chọn phép kiểm định:</b> (1) có giá trị ngờ → Q hoặc G, loại <b>trước</b>; (2) tính x̄, s, RSD; (3) muốn so hai phương pháp → F trước (độ chụm), rồi t hai trung bình; (4) muốn so với giá trị thật hoặc mẫu chuẩn → t một mẫu hoặc khoảng tin cậy.</p>

      <h3>9. Loại số liệu ngờ bằng chuẩn Grubbs</h3>
      <div class="cong-thuc"><div class="nhan">x̄ và s tính từ <u>tất cả</u> n giá trị, kể cả giá trị ngờ</div>\[ G_\text{tính} = \frac{\left|x_\text{ngờ} - \bar{x}\right|}{s} \]</div>
      <p>Nếu G<sub>tính</sub> &gt; G<sub>bảng</sub> (theo n, mức 95%) thì loại giá trị ngờ. Khác Q: Grubbs dùng độ lệch so với <b>trung bình</b>, không chỉ khoảng cách tới giá trị lân cận, nên ít bị ảnh hưởng khi có hai giá trị đều lệch một phía. Sau khi loại phải tính lại x̄ và s cho dãy còn lại, và không lặp lại kiểm tra liên tục để "lọc" đến khi đẹp.</p>
      <div class="vi-du"><b>Ví dụ 9.</b> Sáu lần xác định hàm lượng (%): 15,33 ; 15,29 ; 15,24 ; 15,66 ; 15,27 ; 15,33. Kiểm tra giá trị ngờ bằng Grubbs (95%; G<sub>bảng</sub> = 1,822 với n = 6), so với chuẩn Q, rồi tính x̄, s và khoảng tin cậy 95% cho dãy còn lại.
        <details><summary>Xem lời giải</summary>
          Giá trị ngờ là 15,66. Với cả 6 giá trị: x̄ = 15,353 ; s = 0,1542.
          \[ G_\text{tính} = \frac{15,66 - 15,353}{0,1542} = 1,99 > 1,822 \]
          → <b>loại 15,66</b>. Với chuẩn Q: Q = (15,66 − 15,33)/(15,66 − 15,24) = 0,79 &gt; 0,625 (n = 6) cho cùng kết luận.<br>
          Năm giá trị còn lại (f = 4, t = 2,78):
          \[ \begin{aligned} \bar{x} &= 15,29 \\ s &= 0,039 \\ \mu &= 15,29 \pm \frac{2,78\cdot0,039}{\sqrt{5}} \\ &= \mathbf{15,29 \pm 0,05\ \%} \end{aligned} \]
        </details></div>

      <h3>10. So sánh hai phương pháp đầy đủ và t cặp</h3>
      <p><b>Quy trình bắt buộc theo thứ tự:</b> (1) F để so độ chụm; (2a) nếu F<sub>tính</sub> &lt; F<sub>bảng</sub>: gộp s, dùng t với f = n<sub>1</sub> + n<sub>2</sub> − 2; (2b) nếu F<sub>tính</sub> &gt; F<sub>bảng</sub>: <b>không</b> gộp s (độ chụm khác nhau có ý nghĩa; phải dùng t hiệu chỉnh Welch, bậc tự do tính riêng, thường đề cho sẵn); (3) so t<sub>tính</sub> với t<sub>bảng</sub> ở f tương ứng.</p>
      <div class="vi-du"><b>Ví dụ 10.</b> Xác định cùng một chỉ tiêu (mg/L) bằng hai phương pháp. Phương pháp A (5 lần): 25,40 ; 25,27 ; 25,25 ; 25,40 ; 25,12. Phương pháp B (6 lần): 25,55 ; 25,71 ; 25,57 ; 25,49 ; 25,58 ; 25,58. Hai phương pháp có cho kết quả khác nhau có ý nghĩa ở mức 95% không? Cho F<sub>bảng</sub>(4; 5) = 5,19 (một phía) hoặc 7,39 (hai phía) ; t<sub>bảng</sub>(f = 9) = 2,26.
        <details><summary>Xem lời giải</summary>
          Tính riêng: A: x̄<sub>A</sub> = 25,29 ; s<sub>A</sub> = 0,117 (n = 5). B: x̄<sub>B</sub> = 25,58 ; s<sub>B</sub> = 0,072 (n = 6).<br>
          <b>Bước 1: F.</b> s<sub>A</sub> lớn hơn nên đặt ở tử: f<sub>1</sub> = 4 (cột), f<sub>2</sub> = 5 (hàng).
          \[ F_\text{tính} = \frac{0,117^2}{0,072^2} = 2,65 \]
          F<sub>tính</sub> = 2,65 &lt; 5,19 (và &lt; 7,39) → độ chụm <b>không khác nhau đáng kể</b>, được gộp.<br>
          <b>Bước 2: t.</b> f = 5 + 6 − 2 = 9.
          \[ \begin{aligned} s_\text{gộp} &= \sqrt{\frac{0,117^2\cdot4 + 0,072^2\cdot5}{9}} = 0,095 \\ t_\text{tính} &= \frac{\left|25,29 - 25,58\right|}{0,095}\sqrt{\frac{5\cdot6}{5 + 6}} = 5,08 \end{aligned} \]
          t<sub>tính</sub> = 5,08 &gt; 2,26 → <b>hai phương pháp cho kết quả khác nhau có ý nghĩa</b>.
        </details></div>
      <p><b>t cặp (paired)</b>: khi hai phương pháp đo trên <b>cùng các mẫu khác nhau</b> (mỗi mẫu một cặp kết quả), sự khác nhau giữa các mẫu lớn hơn sự khác nhau giữa hai phương pháp, nên không trộn hai dãy mà tính hiệu số d<sub>i</sub> của từng cặp:</p>
      <div class="cong-thuc"><div class="nhan">n: số cặp; f = n − 1; \( \bar{d} \), \( s_d \): trung bình và độ lệch chuẩn của các hiệu số</div>\[ t_\text{tính} = \frac{\left|\bar{d}\right|}{s_d/\sqrt{n}} \]</div>
      <div class="vi-du"><b>Ví dụ 11.</b> Đo 6 mẫu nước bằng hai phương pháp, hiệu số (A − B, mg/L) từng mẫu: 0,13 ; 0,14 ; 0,18 ; 0,17 ; 0,05 ; 0,05. Hai phương pháp có sai khác hệ thống không (t<sub>bảng</sub> = 2,57, f = 5)?
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \bar{d} &= 0,120 \qquad s_d = 0,0573 \\ t_\text{tính} &= \frac{0,120}{0,0573/\sqrt{6}} = 5,13 \end{aligned} \]
          5,13 &gt; 2,57 → <b>có sai khác hệ thống</b> giữa hai phương pháp.
        </details></div>

      <h3>11. Lan truyền sai số trong một phép chuẩn độ thực</h3>
      <p>Quy trình tính s của kết quả cuối:</p>
      <ol>
        <li>Viết công thức tính kết quả từ các đại lượng đo.</li>
        <li>Xác định s của mỗi đại lượng (độc lập nhau). Buret đọc hai lần (đầu và cuối), mỗi lần s = 0,02 mL nên s<sub>V</sub> = √2·0,02 = 0,03 mL. Cân trên cân phân tích cũng là hiệu hai lần cân.</li>
        <li>Đi từ trong ra ngoài theo thứ tự phép tính. <b>Cộng, trừ</b>: cộng bình phương s <b>tuyệt đối</b>. <b>Nhân, chia</b>: cộng bình phương s <b>tương đối</b>. Kết quả của một bước thành đầu vào của bước sau.</li>
        <li>Đổi về s tuyệt đối của kết quả cuối, làm tròn s đến 1 chữ số có nghĩa rồi làm tròn kết quả theo s.</li>
      </ol>
      <div class="vi-du"><b>Ví dụ 12.</b> Chuẩn hóa NaOH bằng kali hiđro phtalat (KHP, M = 204,22 g/mol; phản ứng 1 : 1): cân 0,5105 g (s = 0,0002 g) hòa tan, chuẩn độ hết 25,40 mL NaOH (s = 0,03 mL). Tính nồng độ NaOH kèm độ lệch chuẩn. Đại lượng nào đóng góp sai số lớn nhất?
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} C &= \frac{m}{M\cdot V} = \frac{0,5105}{204,22\cdot0,02540} \\ &= 0,09842\ \mathrm{M} \end{aligned} \]
          Chỉ có phép chia nên cộng bình phương s tương đối (M coi như không có sai số):
          \[ \begin{aligned} \frac{s_C}{C} &= \sqrt{\left(\frac{0,0002}{0,5105}\right)^2 + \left(\frac{0,03}{25,40}\right)^2} \\ &= \sqrt{(3,9\cdot10^{-4})^2 + (1,18\cdot10^{-3})^2} \\ &= 1,24\cdot10^{-3} \end{aligned} \]
          \[ \begin{aligned} s_C &= 0,09842\cdot1,24\cdot10^{-3} = 1,2\cdot10^{-4} \\ C &= \mathbf{0,0984 \pm 0,0001\ M} \end{aligned} \]
          Thể tích buret góp 0,118% so với 0,039% của khối lượng: chiếm khoảng 90% phương sai. Muốn giảm sai số, cân nhiều KHP hơn để chuẩn độ hết thể tích buret lớn hơn (sai số tuyệt đối 0,03 mL không đổi nên sai số tương đối giảm).
        </details></div>
      <div class="vi-du"><b>Ví dụ 13.</b> (Phép tính hỗn hợp cộng, trừ và nhân, chia.) Xác định Cl<sup>−</sup> theo Volhard: 25,00 mL mẫu (s = 0,03) + 40,00 mL AgNO<sub>3</sub> 0,1000 M (s = 0,03 mL ; s<sub>C</sub> = 0,0002 M), chuẩn Ag<sup>+</sup> dư hết 33,20 mL KSCN 0,0500 M (s<sub>V</sub> = 0,03 mL ; s<sub>C</sub> = 0,0001 M). Tính [Cl<sup>−</sup>] kèm s.
        <details><summary>Xem lời giải</summary>
          Công thức: \( C = \dfrac{C_\mathrm{Ag}V_\mathrm{Ag} - C_\mathrm{SCN}V_\mathrm{SCN}}{V_\text{mẫu}} \). Đi theo thứ tự: hai tích (nhân), hiệu (trừ), thương (chia).<br>
          <b>Tích 1</b>: n<sub>Ag</sub> = 0,1000·40,00 = 4,000 mmol.
          \[ \begin{aligned} \frac{s_1}{n_1} &= \sqrt{\left(\tfrac{0,0002}{0,1000}\right)^2 + \left(\tfrac{0,03}{40,00}\right)^2} \\ &= 2,14\cdot10^{-3} \\ s_1 &= 4,000\cdot2,14\cdot10^{-3} = 0,00854 \end{aligned} \]
          <b>Tích 2</b>: n<sub>SCN</sub> = 0,0500·33,20 = 1,660 mmol.
          \[ \begin{aligned} \frac{s_2}{n_2} &= \sqrt{\left(\tfrac{0,0001}{0,0500}\right)^2 + \left(\tfrac{0,03}{33,20}\right)^2} \\ &= 2,19\cdot10^{-3} \\ s_2 &= 1,660\cdot2,19\cdot10^{-3} = 0,00364 \end{aligned} \]
          <b>Hiệu</b> (cộng bình phương s <b>tuyệt đối</b>):
          \[ \begin{aligned} n_\mathrm{Cl} &= 4,000 - 1,660 = 2,340\ \mathrm{mmol} \\ s_n &= \sqrt{0,00854^2 + 0,00364^2} \\ &= 0,0093 \end{aligned} \]
          <b>Thương</b> (cộng bình phương s <b>tương đối</b>):
          \[ \begin{aligned} C &= \frac{2,340}{25,00} = 0,09360\ \mathrm{M} \\ \frac{s_C}{C} &= \sqrt{\left(\tfrac{0,0093}{2,340}\right)^2 + \left(\tfrac{0,03}{25,00}\right)^2} \\ &= 4,1\cdot10^{-3} \\ s_C &= 0,09360\cdot4,1\cdot10^{-3} \\ &= 3,9\cdot10^{-4} \end{aligned} \]
          \[ [\mathrm{Cl^-}] = \mathbf{0,0936 \pm 0,0004\ M} \]
          Chú ý: hai tích liên quan đến các đại lượng khác nhau nên được xem độc lập, và phép trừ dùng s tuyệt đối 0,00854 và 0,00364 (đơn vị mmol), không dùng s tương đối.
        </details></div>

      <h3>12. Tính x̄ và s bằng máy tính cầm tay</h3>
      <p>Máy tính cầm tay có chức năng thống kê (các đời máy khác nhau thì tên phím và đường vào menu khác nhau, xem hướng dẫn của máy mình dùng):</p>
      <ol>
        <li>Vào chế độ <b>thống kê một biến</b>.</li>
        <li>Nhập lần lượt từng số liệu vào cột dữ liệu.</li>
        <li>Mở phần kết quả thống kê, đọc <b>x̄</b> (trung bình) và độ lệch chuẩn <b>s<sub>x</sub></b> (thường kí hiệu xσ<sub>n−1</sub> hoặc sx, chia cho n − 1).</li>
      </ol>
      <p class="luu-y"><b>Chú ý:</b> máy có hai độ lệch chuẩn. Dùng <b>s<sub>x</sub> (xσ<sub>n−1</sub>)</b> cho số liệu thực nghiệm; <b>σ<sub>x</sub> (xσ<sub>n</sub>)</b> chỉ dùng khi có toàn bộ tổng thể. Kiểm tra lại số lượng dữ liệu n trên máy trước khi đọc kết quả; giữ nguyên đủ chữ số khi nhập và chỉ làm tròn ở kết quả cuối.</p>

      <h3>13. Tóm tắt công thức</h3>
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
            <tr><td>Grubbs</td><td>\( G = \dfrac{|x_\text{ngờ} - \bar{x}|}{s} \)</td><td>x̄, s tính cả giá trị ngờ; G<sub>tính</sub> &gt; G<sub>bảng</sub> (theo n) → loại</td></tr>
            <tr><td>Chuẩn hóa Gauss</td><td>\( z = \dfrac{x - \mu}{\sigma} \)</td><td>μ ± 1,96σ chứa 95% kết quả</td></tr>
            <tr><td>t cặp</td><td>\( t = \dfrac{|\bar{d}|}{s_d/\sqrt{n}} \)</td><td>f = n − 1, n: số cặp</td></tr>
          </tbody>
        </table>
      </div>
      <h3>14. Lỗi hay gặp</h3>
      <ul>
        <li><b>Vào bảng sai đại lượng</b>: dùng n thay cho f = n − 1 với bảng t; dùng f thay cho n với bảng Q và G; với hai trung bình quên rằng f = n<sub>1</sub> + n<sub>2</sub> − 2.</li>
        <li><b>Thứ tự</b>: tính x̄, s rồi mới kiểm tra số liệu ngờ (phải Q hoặc G <b>trước</b>); loại xong nhưng không tính lại x̄, s; dùng Q khi n &gt; 10 hoặc loại hai giá trị cùng một lúc.</li>
        <li><b>Grubbs</b>: tính x̄ và s của dãy đã <b>bỏ</b> giá trị ngờ (đúng là tính trên cả dãy).</li>
        <li><b>Bỏ bước F</b> khi so hai trung bình; đặt phương sai <b>nhỏ</b> ở tử làm F &lt; 1; vẫn gộp s dù F có ý nghĩa.</li>
        <li><b>Nhầm s với σ</b> trên máy tính (dùng σ<sub>x</sub> chia n thay cho s<sub>x</sub> chia n − 1).</li>
        <li><b>Diễn giải khoảng tin cậy sai</b>: "95% kết quả đo nằm trong khoảng" hoặc "xác suất 95% μ nằm trong khoảng vừa tính". Đúng: 95% các khoảng dựng theo cách này chứa μ.</li>
        <li><b>Lan truyền</b>: dùng s tương đối cho cộng, trừ (hoặc s tuyệt đối cho nhân, chia); quên bình phương và căn; cộng thẳng s của các phép đo độc lập; dùng cộng bình phương cho sai số hệ thống của cùng một pipet chưa hiệu chuẩn (phải cộng thẳng).</li>
        <li><b>Dùng t hai trung bình cho số liệu ghép cặp</b> (các mẫu khác nhau nhiều): sai khác giữa mẫu che mất sai khác giữa phương pháp; dùng t cặp.</li>
        <li><b>Chữ số có nghĩa</b>: làm tròn ở bước trung gian; ghi s với 3 – 4 chữ số rồi ghi x̄ nhiều chữ số hơn s cho phép (đúng: s làm tròn đến 1 – 2 chữ số, x̄ cùng chữ số thập phân với s).</li>
      </ul>
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
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "axit-bazo",
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
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "chuan-do-axit-bazo",
    nhom: "Cân bằng và chuẩn độ",
    icon: "🧪",
    ten: "Chuẩn độ acid – base",
    moTa: "Đường chuẩn độ, bước nhảy, chỉ thị, Gran, chất gốc, Kjeldahl",
    dayDu: true,
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
        <li><b>Nồng độ</b>: dung dịch càng loãng thì bước nhảy càng ngắn. Chuẩn độ acid mạnh – base mạnh 0,1 M có bước nhảy (ứng với sai số ±0,1%) từ pH 4,3 đến 9,7; ở 0,001 M chỉ còn khoảng 6,3 – 7,7. Khi C &lt; 10<sup>−4</sup> M, bước nhảy quá nhỏ, không chuẩn độ được bằng chỉ thị màu. Cách tính pH tại 99,9 % và 100,1 % (hai đầu bước nhảy) nằm ở mục 11.</li>
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
          <thead><tr><th>Chỉ thị</th><th>Khoảng đổi màu (pH)</th><th>pT</th><th>Màu (acid → base)</th></tr></thead>
          <tbody>
            <tr><td>Metyl da cam</td><td>3,1 – 4,4</td><td>4</td><td>đỏ → vàng</td></tr>
            <tr><td>Bromocresol lục</td><td>3,8 – 5,4</td><td>4,6</td><td>vàng → xanh lam</td></tr>
            <tr><td>Metyl đỏ</td><td>4,4 – 6,2</td><td>5</td><td>đỏ → vàng</td></tr>
            <tr><td>Bromthymol xanh</td><td>6,0 – 7,6</td><td>7</td><td>vàng → xanh lam</td></tr>
            <tr><td>Phenol đỏ</td><td>6,4 – 8,4</td><td>7,4</td><td>vàng → đỏ</td></tr>
            <tr><td>Cresol đỏ</td><td>7,2 – 8,8</td><td>8</td><td>vàng → đỏ</td></tr>
            <tr><td>Thymol xanh (nấc 2)</td><td>8,0 – 9,6</td><td>8,8</td><td>vàng → xanh lam</td></tr>
            <tr><td>Phenolphtalein</td><td>8,2 – 10,0</td><td>9</td><td>không màu → hồng</td></tr>
            <tr><td>Thymolphtalein</td><td>9,3 – 10,5</td><td>10</td><td>không màu → xanh lam</td></tr>
          </tbody>
        </table>
      </div>
      <p><b>pT</b> (chuẩn độ điểm cuối) là pH mà tại đó ta dừng chuẩn độ, xấp xỉ giữa khoảng đổi màu. Bảng dùng pT thường gặp trong đề (metyl da cam 4, metyl đỏ 5, phenolphtalein 9); đề có thể ghi giá trị khác (ví dụ phenolphtalein 9,6), khi đó dùng số của đề.</p>
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
      <p>Chuỗi tính từ chất gốc đến kết quả (ví dụ chuẩn hóa NaOH bằng acid oxalic, rồi dùng NaOH đó chuẩn giấm) xem Ví dụ 13 ở mục 14.</p>
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
        <li>Bình hứng cũng có thể chứa H<sub>2</sub>SO<sub>4</sub> dư đã biết (đề thi hay dùng). Vì H<sub>2</sub>SO<sub>4</sub> cho 2 H<sup>+</sup> nên n<sub>H⁺</sub> = 2n<sub>H₂SO₄</sub>; xem Ví dụ 14 và sơ đồ ở mục 14.</li>
      </ol>
      <div class="vi-du"><b>Ví dụ 8.</b> 0,5000 g mẫu thực phẩm được xử lí theo Kjeldahl. NH<sub>3</sub> được hấp thụ vào 50,00 mL HCl 0,1000 M; lượng HCl dư chuẩn độ hết 22,40 mL NaOH 0,1000 M. Tính %N và % protein (hệ số 6,25).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} n_\mathrm{NH_3} &= 0,1000\cdot(50,00 - 22,40) \\ &= 2,760\ \mathrm{mmol} \\ \%\mathrm{N} &= \frac{2,760\cdot10^{-3}\cdot14,007}{0,5000}\cdot100 \\ &= \mathbf{7,732\%} \\ \%\,\text{protein} &= 6,25\cdot7,732 = \mathbf{48,3\%} \end{aligned} \]
        </details></div>
      <p><b>c) Các ứng dụng khác</b>: xác định độ acid (giấm, sữa, dầu mỡ), độ kiềm của nước, xác định khối lượng đương lượng và K<sub>a</sub> của acid chưa biết (pH tại nửa tương đương).</p>

      <h3>11. Bước nhảy tại 99,9 % và 100,1 %: ảnh hưởng của C và K<sub>a</sub></h3>
      <p>Đề thi hay hỏi "pH khi thêm 99,9 % và 100,1 % lượng base". Hai điểm này là hai đầu của <b>bước nhảy</b> ứng với sai số chuẩn độ ±0,1 %. Chỉ thị nào đổi màu trong khoảng này thì dùng được.</p>
      <div class="cong-thuc"><div class="nhan">Chuẩn độ acid yếu HA bằng NaOH (V<sub>e</sub>: thể tích tương đương; n<sub>e</sub>: số mmol NaOH tại V<sub>e</sub>)</div>\[ \begin{aligned} \text{99,9 \%}:\ & \mathrm{pH} = \pKa + \lg 10^{3} = \pKa + 3 \\ \text{100,1 \%}:\ & \OH = \frac{0,001\,n_e}{V_0 + 1,001\,V_e} \\ & \mathrm{pH} = 14 + \lg\OH \end{aligned} \]</div>
      <p>Ở 99,9 %, còn 0,1 % HA chưa phản ứng nên dung dịch là đệm với tỉ số A<sup>−</sup>/HA = 10<sup>3</sup>. Ở 100,1 %, chỉ còn OH<sup>−</sup> dư 0,1 % quyết định pH (A<sup>−</sup> quá yếu để đóng góp). Với chuẩn độ base yếu bằng HCl thì đối xứng: 99,9 % có pH = pK<sub>a</sub>(BH<sup>+</sup>) − 3; 100,1 % do H<sup>+</sup> dư.</p>
      <div class="vi-du"><b>Ví dụ 9.</b> Chuẩn độ 25,00 mL acid lactic 0,0800 M (pK<sub>a</sub> = 3,85) bằng NaOH 0,0800 M. Tính pH ban đầu, pH tại 99,9 %, 100 %, 100,1 % và chọn chỉ thị trong bảng ở mục 7.
        <details><summary>Xem lời giải</summary>
          V<sub>e</sub> = 25,00 mL; n<sub>e</sub> = 2,000 mmol.<br>
          <b>Ban đầu</b> (C/K<sub>a</sub> ≥ 400): \( \mathrm{pH} = \tfrac{1}{2}(3,85 - \lg 0,0800) = 2,47 \)<br>
          <b>99,9 %</b> (V = 24,975 mL): \( \mathrm{pH} = 3,85 + 3 = \mathbf{6,85} \)<br>
          <b>100 %</b>: C<sub>A⁻</sub> = 2,000/50,00 = 0,04000 M; pK<sub>b</sub> = 10,15:
          \[ \begin{aligned} \mathrm{pOH} &= \tfrac{1}{2}(10,15 - \lg 0,04000) = 5,77 \\ \mathrm{pH} &= \mathbf{8,23} \end{aligned} \]
          <b>100,1 %</b> (V = 25,025 mL): OH<sup>−</sup> dư = 0,001·2,000 = 0,002000 mmol trong 50,025 mL:
          \[ \begin{aligned} \OH &= 4,00\cdot10^{-5}\ \mathrm{M} \\ \mathrm{pH} &= 14 + \lg\left(4,00\cdot10^{-5}\right) = \mathbf{9,60} \end{aligned} \]
          Bước nhảy: <b>pH 6,85 → 9,60</b>. Trong bảng, bromthymol xanh (pT 7), cresol đỏ (pT 8), thymol xanh (pT 8,8) và phenolphtalein (pT 9) đều nằm trong bước nhảy; <b>cresol đỏ</b> gần pH tương đương 8,23 nhất (vàng → đỏ khi thêm base). Metyl đỏ (pT 5) nằm ngoài: dừng ở pH 5 thì
          \[ \begin{aligned} \frac{n_\mathrm{A^-}}{n_\mathrm{HA}} &= 10^{5 - 3,85} = 14,1 \\ \text{sai số} &= \frac{14,1}{15,1} - 1 = \mathbf{-6,6\ \%} \end{aligned} \]
          Với phenolphtalein (pT 9), sai số chỉ khoảng khoảng +0,03 %.
        </details></div>

      <div class="hinh-tinh">
        <svg viewBox="0 0 320 236" role="img" aria-label="Đường chuẩn độ acid mạnh, acid yếu pKa 4,75 và acid rất yếu pKa 9 bằng NaOH, với vùng đổi màu của hai chỉ thị">
<defs><marker id="cd-mt" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--chu-phu)"/></marker></defs>
<text x="160" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">Đường chuẩn độ: acid càng yếu, bước nhảy càng ngắn</text>
<rect x="38" y="105.6" width="262" height="19.3" fill="var(--vang)" fill-opacity="0.18"/>
<rect x="38" y="64.9" width="262" height="19.3" fill="var(--mau-chinh)" fill-opacity="0.16"/>
<line x1="38" y1="172.0" x2="300" y2="172.0" stroke="var(--vien)" stroke-width="0.8"/>
<text x="33" y="175.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">0</text>
<line x1="38" y1="150.6" x2="300" y2="150.6" stroke="var(--vien)" stroke-width="0.8"/>
<text x="33" y="154.1" text-anchor="end" font-size="10" fill="var(--chu-phu)">2</text>
<line x1="38" y1="129.1" x2="300" y2="129.1" stroke="var(--vien)" stroke-width="0.8"/>
<text x="33" y="132.6" text-anchor="end" font-size="10" fill="var(--chu-phu)">4</text>
<line x1="38" y1="107.7" x2="300" y2="107.7" stroke="var(--vien)" stroke-width="0.8"/>
<text x="33" y="111.2" text-anchor="end" font-size="10" fill="var(--chu-phu)">6</text>
<line x1="38" y1="86.3" x2="300" y2="86.3" stroke="var(--vien)" stroke-width="0.8"/>
<text x="33" y="89.8" text-anchor="end" font-size="10" fill="var(--chu-phu)">8</text>
<line x1="38" y1="64.9" x2="300" y2="64.9" stroke="var(--vien)" stroke-width="0.8"/>
<text x="33" y="68.4" text-anchor="end" font-size="10" fill="var(--chu-phu)">10</text>
<line x1="38" y1="43.4" x2="300" y2="43.4" stroke="var(--vien)" stroke-width="0.8"/>
<text x="33" y="46.9" text-anchor="end" font-size="10" fill="var(--chu-phu)">12</text>
<line x1="38" y1="22.0" x2="300" y2="22.0" stroke="var(--vien)" stroke-width="0.8"/>
<text x="33" y="25.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">14</text>
<line x1="38.0" y1="172" x2="38.0" y2="176" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="38.0" y="187" text-anchor="middle" font-size="10" fill="var(--chu-phu)">0</text>
<line x1="103.5" y1="172" x2="103.5" y2="176" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="103.5" y="187" text-anchor="middle" font-size="10" fill="var(--chu-phu)">50</text>
<line x1="169.0" y1="172" x2="169.0" y2="176" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="169.0" y="187" text-anchor="middle" font-size="10" fill="var(--chu-phu)">100</text>
<line x1="234.5" y1="172" x2="234.5" y2="176" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="234.5" y="187" text-anchor="middle" font-size="10" fill="var(--chu-phu)">150</text>
<line x1="300.0" y1="172" x2="300.0" y2="176" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="300.0" y="187" text-anchor="middle" font-size="10" fill="var(--chu-phu)">200</text>
<line x1="38" y1="172" x2="300" y2="172" stroke="var(--chu-phu)" stroke-width="1.2"/>
<line x1="38" y1="172" x2="38" y2="18" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="169" y="200" text-anchor="middle" font-size="10" fill="var(--chu-phu)">% NaOH đã thêm (100 % = điểm tương đương)</text>
<text x="10" y="97" text-anchor="middle" font-size="10" fill="var(--chu-phu)" transform="rotate(-90 10 97)">pH</text>
<line x1="169.0" y1="22" x2="169.0" y2="172" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="3 3"/>
<path d="M38.0,161.3 L39.3,161.2 L40.6,161.1 L41.9,161.0 L43.2,160.9 L44.5,160.8 L45.9,160.7 L47.2,160.6 L48.5,160.5 L49.8,160.4 L51.1,160.4 L52.4,160.3 L53.7,160.2 L55.0,160.1 L56.3,160.0 L57.6,159.9 L59.0,159.8 L60.3,159.7 L61.6,159.6 L62.9,159.5 L64.2,159.4 L65.5,159.3 L66.8,159.2 L68.1,159.1 L69.4,159.0 L70.8,158.9 L72.1,158.8 L73.4,158.7 L74.7,158.6 L76.0,158.5 L77.3,158.4 L78.6,158.3 L79.9,158.2 L81.2,158.1 L82.5,158.0 L83.8,157.9 L85.2,157.8 L86.5,157.7 L87.8,157.6 L89.1,157.5 L90.4,157.3 L91.7,157.2 L93.0,157.1 L94.3,157.0 L95.6,156.9 L97.0,156.8 L98.3,156.7 L99.6,156.5 L100.9,156.4 L102.2,156.3 L103.5,156.2 L104.8,156.0 L106.1,155.9 L107.4,155.8 L108.7,155.7 L110.1,155.5 L111.4,155.4 L112.7,155.3 L114.0,155.1 L115.3,155.0 L116.6,154.8 L117.9,154.7 L119.2,154.5 L120.5,154.4 L121.8,154.2 L123.2,154.1 L124.5,153.9 L125.8,153.7 L127.1,153.6 L128.4,153.4 L129.7,153.2 L131.0,153.0 L132.3,152.8 L133.6,152.6 L134.9,152.4 L136.2,152.2 L137.6,152.0 L138.9,151.8 L140.2,151.6 L141.5,151.3 L142.8,151.1 L144.1,150.8 L145.4,150.5 L146.7,150.2 L148.0,149.9 L149.3,149.6 L150.7,149.2 L152.0,148.9 L153.3,148.5 L154.6,148.1 L155.9,147.6 L157.2,147.1 L158.5,146.5 L159.8,145.9 L161.1,145.1 L162.4,144.2 L163.8,143.2 L165.1,141.8 L166.4,139.9 L167.7,136.7 L168.3,133.4 L168.9,125.9 L169.0,97.0 L169.1,68.1 L169.7,60.6 L170.3,57.4 L171.6,54.2 L172.9,52.3 L174.2,51.0 L175.6,50.0 L176.9,49.2 L178.2,48.5 L179.5,47.9 L180.8,47.3 L182.1,46.9 L183.4,46.5 L184.7,46.1 L186.0,45.7 L187.3,45.4 L188.6,45.1 L190.0,44.8 L191.3,44.6 L192.6,44.3 L193.9,44.1 L195.2,43.9 L196.5,43.7 L197.8,43.5 L199.1,43.3 L200.4,43.1 L201.8,42.9 L203.1,42.8 L204.4,42.6 L205.7,42.5 L207.0,42.3 L208.3,42.2 L209.6,42.1 L210.9,41.9 L212.2,41.8 L213.5,41.7 L214.8,41.6 L216.2,41.5 L217.5,41.4 L218.8,41.3 L220.1,41.1 L221.4,41.1 L222.7,41.0 L224.0,40.9 L225.3,40.8 L226.6,40.7 L227.9,40.6 L229.3,40.5 L230.6,40.4 L231.9,40.4 L233.2,40.3 L234.5,40.2 L235.8,40.1 L237.1,40.1 L238.4,40.0 L239.7,39.9 L241.1,39.9 L242.4,39.8 L243.7,39.7 L245.0,39.7 L246.3,39.6 L247.6,39.5 L248.9,39.5 L250.2,39.4 L251.5,39.4 L252.8,39.3 L254.2,39.3 L255.5,39.2 L256.8,39.1 L258.1,39.1 L259.4,39.0 L260.7,39.0 L262.0,38.9 L263.3,38.9 L264.6,38.9 L265.9,38.8 L267.2,38.8 L268.6,38.7 L269.9,38.7 L271.2,38.6 L272.5,38.6 L273.8,38.5 L275.1,38.5 L276.4,38.5 L277.7,38.4 L279.0,38.4 L280.4,38.3 L281.7,38.3 L283.0,38.3 L284.3,38.2 L285.6,38.2 L286.9,38.2 L288.2,38.1 L289.5,38.1 L290.8,38.1 L292.1,38.0 L293.4,38.0 L294.8,38.0 L296.1,37.9 L297.4,37.9 L298.7,37.9 L300.0,37.8" fill="none" stroke="var(--xanh)" stroke-width="2"/>
<path d="M38.0,141.1 L39.3,139.4 L40.6,137.9 L41.9,136.5 L43.2,135.4 L44.5,134.5 L45.9,133.7 L47.2,133.0 L48.5,132.3 L49.8,131.8 L51.1,131.2 L52.4,130.8 L53.7,130.3 L55.0,129.9 L56.3,129.5 L57.6,129.1 L59.0,128.8 L60.3,128.5 L61.6,128.1 L62.9,127.8 L64.2,127.5 L65.5,127.2 L66.8,127.0 L68.1,126.7 L69.4,126.5 L70.8,126.2 L72.1,126.0 L73.4,125.7 L74.7,125.5 L76.0,125.3 L77.3,125.0 L78.6,124.8 L79.9,124.6 L81.2,124.4 L82.5,124.2 L83.8,124.0 L85.2,123.8 L86.5,123.6 L87.8,123.4 L89.1,123.2 L90.4,123.0 L91.7,122.8 L93.0,122.6 L94.3,122.4 L95.6,122.2 L97.0,122.0 L98.3,121.8 L99.6,121.7 L100.9,121.5 L102.2,121.3 L103.5,121.1 L104.8,120.9 L106.1,120.7 L107.4,120.5 L108.7,120.4 L110.1,120.2 L111.4,120.0 L112.7,119.8 L114.0,119.6 L115.3,119.4 L116.6,119.2 L117.9,119.0 L119.2,118.8 L120.5,118.6 L121.8,118.4 L123.2,118.2 L124.5,118.0 L125.8,117.8 L127.1,117.6 L128.4,117.4 L129.7,117.2 L131.0,116.9 L132.3,116.7 L133.6,116.5 L134.9,116.2 L136.2,116.0 L137.6,115.7 L138.9,115.5 L140.2,115.2 L141.5,114.9 L142.8,114.7 L144.1,114.4 L145.4,114.0 L146.7,113.7 L148.0,113.4 L149.3,113.0 L150.7,112.7 L152.0,112.3 L153.3,111.8 L154.6,111.4 L155.9,110.9 L157.2,110.3 L158.5,109.7 L159.8,109.1 L161.1,108.3 L162.4,107.4 L163.8,106.3 L165.1,104.9 L166.4,103.0 L167.7,99.7 L168.3,96.5 L168.9,89.0 L169.0,78.5 L169.1,68.0 L169.7,60.6 L170.3,57.4 L171.6,54.2 L172.9,52.3 L174.2,51.0 L175.6,50.0 L176.9,49.2 L178.2,48.5 L179.5,47.9 L180.8,47.3 L182.1,46.9 L183.4,46.5 L184.7,46.1 L186.0,45.7 L187.3,45.4 L188.6,45.1 L190.0,44.8 L191.3,44.6 L192.6,44.3 L193.9,44.1 L195.2,43.9 L196.5,43.7 L197.8,43.5 L199.1,43.3 L200.4,43.1 L201.8,42.9 L203.1,42.8 L204.4,42.6 L205.7,42.5 L207.0,42.3 L208.3,42.2 L209.6,42.1 L210.9,41.9 L212.2,41.8 L213.5,41.7 L214.8,41.6 L216.2,41.5 L217.5,41.4 L218.8,41.3 L220.1,41.1 L221.4,41.1 L222.7,41.0 L224.0,40.9 L225.3,40.8 L226.6,40.7 L227.9,40.6 L229.3,40.5 L230.6,40.4 L231.9,40.4 L233.2,40.3 L234.5,40.2 L235.8,40.1 L237.1,40.1 L238.4,40.0 L239.7,39.9 L241.1,39.9 L242.4,39.8 L243.7,39.7 L245.0,39.7 L246.3,39.6 L247.6,39.5 L248.9,39.5 L250.2,39.4 L251.5,39.4 L252.8,39.3 L254.2,39.3 L255.5,39.2 L256.8,39.1 L258.1,39.1 L259.4,39.0 L260.7,39.0 L262.0,38.9 L263.3,38.9 L264.6,38.9 L265.9,38.8 L267.2,38.8 L268.6,38.7 L269.9,38.7 L271.2,38.6 L272.5,38.6 L273.8,38.5 L275.1,38.5 L276.4,38.5 L277.7,38.4 L279.0,38.4 L280.4,38.3 L281.7,38.3 L283.0,38.3 L284.3,38.2 L285.6,38.2 L286.9,38.2 L288.2,38.1 L289.5,38.1 L290.8,38.1 L292.1,38.0 L293.4,38.0 L294.8,38.0 L296.1,37.9 L297.4,37.9 L298.7,37.9 L300.0,37.8" fill="none" stroke="var(--mau-chinh)" stroke-width="2"/>
<path d="M38.0,116.2 L39.3,97.0 L40.6,93.7 L41.9,91.7 L43.2,90.4 L44.5,89.3 L45.9,88.4 L47.2,87.6 L48.5,86.9 L49.8,86.3 L51.1,85.8 L52.4,85.3 L53.7,84.8 L55.0,84.4 L56.3,84.0 L57.6,83.6 L59.0,83.3 L60.3,83.0 L61.6,82.6 L62.9,82.3 L64.2,82.0 L65.5,81.7 L66.8,81.5 L68.1,81.2 L69.4,80.9 L70.8,80.7 L72.1,80.4 L73.4,80.2 L74.7,80.0 L76.0,79.7 L77.3,79.5 L78.6,79.3 L79.9,79.1 L81.2,78.9 L82.5,78.7 L83.8,78.5 L85.2,78.3 L86.5,78.0 L87.8,77.9 L89.1,77.7 L90.4,77.5 L91.7,77.3 L93.0,77.1 L94.3,76.9 L95.6,76.7 L97.0,76.5 L98.3,76.3 L99.6,76.1 L100.9,75.9 L102.2,75.8 L103.5,75.6 L104.8,75.4 L106.1,75.2 L107.4,75.0 L108.7,74.8 L110.1,74.6 L111.4,74.5 L112.7,74.3 L114.0,74.1 L115.3,73.9 L116.6,73.7 L117.9,73.5 L119.2,73.3 L120.5,73.1 L121.8,72.9 L123.2,72.7 L124.5,72.5 L125.8,72.3 L127.1,72.1 L128.4,71.9 L129.7,71.6 L131.0,71.4 L132.3,71.2 L133.6,71.0 L134.9,70.7 L136.2,70.5 L137.6,70.2 L138.9,70.0 L140.2,69.7 L141.5,69.4 L142.8,69.1 L144.1,68.8 L145.4,68.5 L146.7,68.2 L148.0,67.9 L149.3,67.5 L150.7,67.2 L152.0,66.8 L153.3,66.4 L154.6,65.9 L155.9,65.4 L157.2,64.9 L158.5,64.3 L159.8,63.7 L161.1,63.0 L162.4,62.2 L163.8,61.3 L165.1,60.2 L166.4,58.9 L167.7,57.4 L168.3,56.6 L168.9,56.0 L169.0,55.8 L169.1,55.6 L169.7,55.0 L170.3,54.2 L171.6,52.7 L172.9,51.5 L174.2,50.5 L175.6,49.7 L176.9,48.9 L178.2,48.3 L179.5,47.7 L180.8,47.2 L182.1,46.8 L183.4,46.4 L184.7,46.0 L186.0,45.7 L187.3,45.4 L188.6,45.1 L190.0,44.8 L191.3,44.5 L192.6,44.3 L193.9,44.1 L195.2,43.8 L196.5,43.6 L197.8,43.4 L199.1,43.3 L200.4,43.1 L201.8,42.9 L203.1,42.8 L204.4,42.6 L205.7,42.5 L207.0,42.3 L208.3,42.2 L209.6,42.0 L210.9,41.9 L212.2,41.8 L213.5,41.7 L214.8,41.6 L216.2,41.5 L217.5,41.3 L218.8,41.2 L220.1,41.1 L221.4,41.0 L222.7,40.9 L224.0,40.9 L225.3,40.8 L226.6,40.7 L227.9,40.6 L229.3,40.5 L230.6,40.4 L231.9,40.4 L233.2,40.3 L234.5,40.2 L235.8,40.1 L237.1,40.1 L238.4,40.0 L239.7,39.9 L241.1,39.8 L242.4,39.8 L243.7,39.7 L245.0,39.7 L246.3,39.6 L247.6,39.5 L248.9,39.5 L250.2,39.4 L251.5,39.4 L252.8,39.3 L254.2,39.3 L255.5,39.2 L256.8,39.1 L258.1,39.1 L259.4,39.0 L260.7,39.0 L262.0,38.9 L263.3,38.9 L264.6,38.8 L265.9,38.8 L267.2,38.8 L268.6,38.7 L269.9,38.7 L271.2,38.6 L272.5,38.6 L273.8,38.5 L275.1,38.5 L276.4,38.5 L277.7,38.4 L279.0,38.4 L280.4,38.3 L281.7,38.3 L283.0,38.3 L284.3,38.2 L285.6,38.2 L286.9,38.2 L288.2,38.1 L289.5,38.1 L290.8,38.1 L292.1,38.0 L293.4,38.0 L294.8,38.0 L296.1,37.9 L297.4,37.9 L298.7,37.9 L300.0,37.8" fill="none" stroke="var(--vang)" stroke-width="2"/>
<text x="297" y="118.7" text-anchor="end" font-size="10" fill="var(--chu)">metyl đỏ</text>
<text x="297" y="78.0" text-anchor="end" font-size="10" fill="var(--chu)">phenolphtalein</text>
<line x1="176.0" y1="68.1" x2="176.0" y2="89.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<line x1="173.0" y1="68.1" x2="179.0" y2="68.1" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<line x1="173.0" y1="89.0" x2="179.0" y2="89.0" stroke="var(--mau-chinh)" stroke-width="1.6"/>
<text x="182.0" y="103.0" font-size="10" fill="var(--mau-chinh)">7,75 → 9,70</text>
<text x="182.0" y="115.0" font-size="10" fill="var(--mau-chinh)">(±0,1 %)</text>
<line x1="40" y1="216" x2="58" y2="216" stroke="var(--xanh)" stroke-width="2.4"/>
<text x="62" y="219.5" font-size="10" fill="var(--chu)">HCl (mạnh)</text>
<line x1="135" y1="216" x2="153" y2="216" stroke="var(--mau-chinh)" stroke-width="2.4"/>
<text x="157" y="219.5" font-size="10" fill="var(--chu)">pKa = 4,75</text>
<line x1="228" y1="216" x2="246" y2="216" stroke="var(--vang)" stroke-width="2.4"/>
<text x="250" y="219.5" font-size="10" fill="var(--chu)">pKa = 9</text>
</svg>
        <p class="chu-thich">Ba đường chuẩn độ 20,0 mL acid 0,1 M bằng NaOH 0,1 M. Acid yếu bắt đầu ở pH cao hơn và bước nhảy ngắn lại; acid có pK<sub>a</sub> = 9 gần như không còn bước nhảy. Vùng màu là khoảng đổi màu của metyl đỏ và phenolphtalein.</p>
      </div>

      <p><b>Bước nhảy phụ thuộc thế nào vào C và K<sub>a</sub>?</b> (chuẩn độ acid nồng độ C bằng NaOH cùng nồng độ C, sai số ±0,1 %)</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Acid</th><th>C (M)</th><th>pH 99,9 %</th><th>pH 100,1 %</th><th>Nhận xét</th></tr></thead>
          <tbody>
            <tr><td>HCl (mạnh)</td><td>0,1</td><td>4,30</td><td>9,70</td><td>Rộng nhất</td></tr>
            <tr><td>HCl (mạnh)</td><td>0,01</td><td>5,30</td><td>8,70</td><td>Ngắn đi 2 đơn vị</td></tr>
            <tr><td>HCl (mạnh)</td><td>0,001</td><td>6,30</td><td>7,70</td><td>Chỉ còn 1,4 đơn vị</td></tr>
            <tr><td>pK<sub>a</sub> = 3,85</td><td>0,1</td><td>6,85</td><td>9,70</td><td>Bắt đầu từ pK<sub>a</sub> + 3</td></tr>
            <tr><td>pK<sub>a</sub> = 4,75</td><td>0,1</td><td>7,75</td><td>9,70</td><td>Còn 1,95 đơn vị</td></tr>
            <tr><td>pK<sub>a</sub> = 4,75</td><td>0,01</td><td>7,75</td><td>8,70</td><td>Còn 0,95 đơn vị</td></tr>
            <tr><td>pK<sub>a</sub> = 6,5</td><td>0,1</td><td>9,50</td><td>9,70</td><td>Gần như không dùng được</td></tr>
            <tr><td>pK<sub>a</sub> = 7,0</td><td>0,1</td><td>10,00</td><td>9,70</td><td>Không còn bước nhảy</td></tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><b>Đầu dưới</b> của bước nhảy phụ thuộc <b>K<sub>a</sub></b> (pK<sub>a</sub> + 3), không phụ thuộc C. Acid mạnh thì đầu dưới do H<sup>+</sup> dư: −lg(5·10<sup>−4</sup>C).</li>
        <li><b>Đầu trên</b> phụ thuộc <b>C</b>: 14 + lg(5·10<sup>−4</sup>C), không phụ thuộc K<sub>a</sub>. Đó là lí do bảng có cùng "9,70" ở C = 0,1 M.</li>
        <li>Bước nhảy tồn tại khi pK<sub>a</sub> + 3 &lt; 14 + lg(5·10<sup>−4</sup>C). Với C = 0,1 M thì pK<sub>a</sub> &lt; 6,7, tương ứng gần đúng tiêu chí C·K<sub>a</sub> ≥ 10<sup>−8</sup> ở mục 5.</li>
      </ul>

      <h3>12. Base yếu khác NH<sub>3</sub>: methylamine</h3>
      <p>Mọi amin đều chuẩn độ bằng HCl giống NH<sub>3</sub>. Chỉ cần đổi hằng số: pK<sub>a</sub> của acid liên hợp BH<sup>+</sup> bằng 14 − pK<sub>b</sub>. Base càng mạnh (pK<sub>b</sub> nhỏ) thì BH<sup>+</sup> càng yếu, pH tương đương càng cao và bước nhảy bắt đầu ở pH cao hơn.</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Base</th><th>pK<sub>b</sub></th><th>pK<sub>a</sub> (BH<sup>+</sup>)</th><th>Chỉ thị thường dùng</th></tr></thead>
          <tbody>
            <tr><td>NH<sub>3</sub></td><td>4,75</td><td>9,25</td><td>metyl đỏ</td></tr>
            <tr><td>CH<sub>3</sub>NH<sub>2</sub> (methylamine)</td><td>3,35</td><td>10,65</td><td>metyl đỏ, bromocresol lục</td></tr>
            <tr><td>(CH<sub>3</sub>)<sub>2</sub>NH (dimethylamine)</td><td>3,23</td><td>10,77</td><td>metyl đỏ</td></tr>
            <tr><td>Tris</td><td>5,93</td><td>8,07</td><td>bromocresol lục, metyl da cam</td></tr>
            <tr><td>Pyridine</td><td>8,80</td><td>5,20</td><td>không chuẩn độ được trong nước (C·K<sub>b</sub> &lt; 10<sup>−8</sup>)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Khi C/K<sub>b</sub> &lt; 400 (base không quá yếu, dung dịch không quá đặc) thì không dùng được công thức gần đúng \( \OH \approx \sqrt{K_\mathrm{b}C} \). Giải phương trình bậc hai: \( \OH = \tfrac{1}{2}\left(-K_\mathrm{b} + \sqrt{K_\mathrm{b}^2 + 4K_\mathrm{b}C}\right) \).</p>
      <div class="vi-du"><b>Ví dụ 10.</b> Chuẩn độ 20,00 mL dung dịch CH<sub>3</sub>NH<sub>2</sub> (pK<sub>b</sub> = 3,35) bằng HCl 0,05200 M, hết 16,55 mL. (a) Tính nồng độ CH<sub>3</sub>NH<sub>2</sub>. (b) pH ban đầu. (c) pH tại 99,9 %, tại điểm tương đương và tại 100,1 %. (d) Chọn chỉ thị; nếu dùng phenolphtalein (pT 9) thì sai số bao nhiêu?
        <details><summary>Xem lời giải</summary>
          <b>(a)</b> Tỉ lệ 1 : 1:
          \[ C = \frac{0,05200\cdot16,55}{20,00} = \mathbf{0,04303\ M} \]
          <b>(b)</b> K<sub>b</sub> = 10<sup>−3,35</sup> = 4,47·10<sup>−4</sup>; C/K<sub>b</sub> = 96 &lt; 400 nên giải bậc hai:
          \[ \begin{aligned} \OH &= \tfrac{1}{2}\left(-K_\mathrm{b} + \sqrt{K_\mathrm{b}^2 + 4K_\mathrm{b}C}\right) \\ &= 4,17\cdot10^{-3}\ \mathrm{M} \;\Rightarrow\; \mathrm{pOH} = 2,38 \\ \mathrm{pH} &= \mathbf{11,62} \end{aligned} \]
          Công thức gần đúng cho [OH<sup>−</sup>] = 4,38·10<sup>−3</sup> M, lệch hơn 5 % (pH 11,64).<br>
          <b>(c)</b> pK<sub>a</sub>(CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>) = 14 − 3,35 = 10,65.<br>
          <b>99,9 %</b>: đệm B/BH<sup>+</sup> = 0,1/99,9 → \( \mathrm{pH} = 10,65 - 3 = \mathbf{7,65} \)<br>
          <b>100 %</b>: n = 0,05200·16,55 = 0,8606 mmol trong 36,55 mL → C<sub>BH⁺</sub> = 0,02355 M:
          \[ \mathrm{pH} = \tfrac{1}{2}(10,65 - \lg 0,02355) = \mathbf{6,14} \]
          <b>100,1 %</b>: H<sup>+</sup> dư = 0,001·0,8606 = 8,61·10<sup>−4</sup> mmol trong 36,57 mL → [H<sup>+</sup>] = 2,35·10<sup>−5</sup> M → <b>pH = 4,63</b>.<br>
          <b>(d)</b> Bước nhảy pH 7,65 → 4,63, nằm ở vùng acid: dùng <b>metyl đỏ</b> (pT 5) hoặc bromocresol lục (pT 4,6). Nếu dùng phenolphtalein, dừng ở pH 9:
          \[ \begin{aligned} \frac{n_\mathrm{B}}{n_\mathrm{BH^+}} &= 10^{9 - 10,65} = 0,0224 \\ \text{sai số} &\approx \frac{1}{1,0224} - 1 = \mathbf{-2,2\ \%} \end{aligned} \]
          (dừng quá sớm: khi chuẩn độ bằng acid, dung dịch chuyển từ hồng sang không màu).
        </details></div>

      <h3>13. Đa acid: citric và H<sub>3</sub>PO<sub>4</sub></h3>
      <p>Với acid nhiều nấc, tự hỏi hai câu: (1) nấc nào đủ mạnh để chuẩn độ (pK<sub>a</sub> &lt; khoảng 7 với C ≈ 0,1 M); (2) các nấc có cách nhau đủ xa để tách bước nhảy không (ΔpK<sub>a</sub> ≥ 4)? Nếu không tách thì các nấc bị chuẩn độ cùng lúc, chỉ có một bước nhảy ứng với tất cả số H<sup>+</sup> đủ mạnh.</p>
      <p><b>Acid citric H<sub>3</sub>Cit</b> (pK<sub>a</sub> = 3,13; 4,76; 6,40): các nấc cách nhau chỉ 1,6 đơn vị nên <b>ba H<sup>+</sup> bị chuẩn độ cùng lúc</b>, chỉ có một bước nhảy tại V<sub>e</sub>. Phản ứng: H<sub>3</sub>Cit + 3OH<sup>−</sup> → Cit<sup>3−</sup> + 3H<sub>2</sub>O, tỉ lượng <b>1 : 3</b>, chỉ thị phenolphtalein.</p>
      <div class="vi-du"><b>Ví dụ 11.</b> Lấy 25,00 mL nước quả, chuẩn độ bằng NaOH 0,1052 M (phenolphtalein) hết 11,32 mL. Tính nồng độ acid citric theo g/L (M = 192,124). Tính pH tại điểm tương đương và bước nhảy ±0,1 %, rồi cho biết phenolphtalein (pT 9) có phù hợp không.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} n_\mathrm{NaOH} &= 0,1052\cdot11,32 = 1,191\ \mathrm{mmol} \\ n_\mathrm{H_3Cit} &= \frac{1,191}{3} = 0,3970\ \mathrm{mmol} \\ C &= \frac{0,3970}{25,00} = 0,01588\ \mathrm{M} \\ \rho &= 0,01588\cdot192,124 = \mathbf{3,05\ g/L} \end{aligned} \]
          <b>Tại V<sub>e</sub></b>: dung dịch chỉ có Cit<sup>3−</sup> (base yếu, K<sub>b</sub> = K<sub>w</sub>/K<sub>a3</sub>, pK<sub>b</sub> = 7,60), C = 0,3970/36,32 = 0,01093 M:
          \[ \begin{aligned} \mathrm{pOH} &= \tfrac{1}{2}(7,60 - \lg 0,01093) = 4,78 \\ \mathrm{pH} &= \mathbf{9,22} \end{aligned} \]
          <b>Bước nhảy ±0,1 %</b> (tính bằng cân bằng điện tích; gần đúng bằng đệm HCit<sup>2−</sup>/Cit<sup>3−</sup> cho khoảng 8,9): pH <b>8,84 → 9,60</b>. Bước nhảy hẹp vì pK<sub>a3</sub> = 6,40 khá cao (gần giới hạn chuẩn độ được) và dung dịch loãng (khoảng 0,011 M). Phenolphtalein (pT 9) nằm trong bước nhảy nên phù hợp; thymolphtalein (pT 10) sẽ dừng quá muộn.
        </details></div>
      <p><b>Acid phosphoric H<sub>3</sub>PO<sub>4</sub></b> (pK<sub>a</sub> = 2,12; 7,21; 12,32): ΔpK<sub>a</sub> &gt; 4 nên <b>hai bước nhảy rõ</b>; nấc 3 (pK<sub>a</sub> = 12,32) quá yếu, không chuẩn độ được bằng NaOH trong nước.</p>
      <ul>
        <li>Điểm tương đương 1 (H<sub>2</sub>PO<sub>4</sub><sup>−</sup>, lưỡng tính): pH ≈ ½(pK<sub>a1</sub> + pK<sub>a2</sub>) ≈ 4,7 → metyl da cam hoặc bromocresol lục. V<sub>e2</sub> = 2V<sub>e1</sub>.</li>
        <li>Điểm tương đương 2 (HPO<sub>4</sub><sup>2−</sup>, lưỡng tính): pH ≈ ½(pK<sub>a2</sub> + pK<sub>a3</sub>) ≈ 9,8 → phenolphtalein hoặc thymolphtalein.</li>
        <li>Muối <b>KH<sub>2</sub>PO<sub>4</sub></b> chuẩn độ bằng NaOH chỉ có một bước nhảy (H<sub>2</sub>PO<sub>4</sub><sup>−</sup> → HPO<sub>4</sub><sup>2−</sup>), tỉ lượng 1 : 1.</li>
      </ul>
      <div class="bang-cuon"><table class="bang">
        <thead><tr><th>V<sub>NaOH</sub> (mL)</th><th>0</th><th>10,0</th><th>20,0</th><th>30,0</th><th>40,0</th><th>50,0</th><th>60,0</th></tr></thead>
        <tbody><tr><td>pH</td><td>1,62</td><td>2,26</td><td><b>4,70</b></td><td>7,21</td><td><b>9,66</b></td><td>11,85</td><td>12,17</td></tr></tbody>
      </table></div>
      <p class="luu-y">Bảng: 20,0 mL H<sub>3</sub>PO<sub>4</sub> 0,100 M bằng NaOH 0,100 M (V<sub>e1</sub> = 20,0 mL, V<sub>e2</sub> = 40,0 mL). Sau V<sub>e2</sub> đường cong không còn bước nhảy thứ ba.</p>
      <div class="vi-du"><b>Ví dụ 12.</b> Cân 0,4610 g KH<sub>2</sub>PO<sub>4</sub> kĩ thuật (M = 136,09), hòa tan trong nước rồi chuẩn độ bằng NaOH 0,1050 M, hết 29,85 mL. (a) Tính % độ tinh khiết. (b) Đường cong có mấy bước nhảy? Chọn chỉ thị.
        <details><summary>Xem lời giải</summary>
          <b>(a)</b> H<sub>2</sub>PO<sub>4</sub><sup>−</sup> + OH<sup>−</sup> → HPO<sub>4</sub><sup>2−</sup> + H<sub>2</sub>O (1 : 1):
          \[ \begin{aligned} n &= 0,1050\cdot29,85 \\ &= 3,134\ \mathrm{mmol} \\ m &= 3,134\cdot10^{-3}\cdot136,09 \\ &= 0,4265\ \mathrm{g} \\ \text{Độ tinh khiết} &= \frac{0,4265}{0,4610}\cdot100 = \mathbf{92,5\ \%} \end{aligned} \]
          <b>(b)</b> Chỉ có <b>một</b> bước nhảy: nấc 2 (pK<sub>a2</sub> = 7,21) chuẩn độ được, nấc 3 (pK<sub>a3</sub> = 12,32) không chuẩn độ được. Điểm tương đương ứng với HPO<sub>4</sub><sup>2−</sup> có pH ≈ ½(7,21 + 12,32) ≈ 9,8, nên dùng <b>phenolphtalein</b> (không màu → hồng).
        </details></div>

      <h3>14. Công thức khung: từ mẫu gốc đến kết quả</h3>
      <p>Hầu hết bài thi có cùng một chuỗi thao tác: <b>mẫu → định mức → hút → chuẩn độ → quy về mẫu gốc</b>. Chỉ cần đi đúng thứ tự dưới đây:</p>
      <ol>
        <li>Chuẩn độ V<sub>h</sub> mL dung dịch (hút từ bình định mức) hết V<sub>ch</sub> mL chất chuẩn nồng độ C<sub>ch</sub>. Số mmol chất phân tích trong V<sub>h</sub>: <b>n = a·C<sub>ch</sub>·V<sub>ch</sub></b>, với a là tỉ lượng (mol chất phân tích/mol chất chuẩn).</li>
        <li>Nồng độ trong bình định mức: C<sub>đm</sub> = n/V<sub>h</sub>.</li>
        <li>Quy về mẫu gốc: nhân hệ số pha loãng V<sub>đm</sub>/V<sub>g</sub> (V<sub>g</sub>: thể tích mẫu gốc đem pha).</li>
        <li>Đổi đơn vị: g/L = C·M; % w/w = (g/L)/(10·d); % độ tinh khiết = (m tính được/m cân)·100.</li>
      </ol>
      <div class="cong-thuc">\[ \begin{aligned} C_\text{gốc} &= \frac{a\,C_\mathrm{ch}V_\mathrm{ch}}{V_\mathrm{h}}\cdot\frac{V_\text{đm}}{V_\mathrm{g}} \\[4pt] \rho\ (\mathrm{g/L}) &= C_\text{gốc}\,M \qquad \%\,(w/w) = \frac{\rho}{10\,d} \end{aligned} \]</div>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Chất phân tích</th><th>Phản ứng với chất chuẩn</th><th>Tỉ lượng a (mol chất/mol chuẩn)</th></tr></thead>
          <tbody>
            <tr><td>CH<sub>3</sub>COOH, HCl, KHP, KH<sub>2</sub>PO<sub>4</sub></td><td>1 H<sup>+</sup> : 1 OH<sup>−</sup></td><td>1</td></tr>
            <tr><td>H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>·2H<sub>2</sub>O (chuẩn hóa NaOH)</td><td>2 H<sup>+</sup> : 2 OH<sup>−</sup></td><td>1/2</td></tr>
            <tr><td>Acid citric</td><td>3 H<sup>+</sup> : 3 OH<sup>−</sup></td><td>1/3</td></tr>
            <tr><td>H<sub>2</sub>SO<sub>4</sub> (Kjeldahl)</td><td>2 H<sup>+</sup> : 2 OH<sup>−</sup></td><td>1/2 (n<sub>H⁺</sub> = 2n<sub>H₂SO₄</sub>)</td></tr>
            <tr><td>Na<sub>2</sub>CO<sub>3</sub> (đến metyl da cam)</td><td>CO<sub>3</sub><sup>2−</sup> + 2H<sup>+</sup></td><td>1/2 (chuẩn bằng HCl)</td></tr>
          </tbody>
        </table>
      </div>
      <p><b>Chuẩn hóa NaOH</b> theo đúng khung trên: cân chính xác chất gốc (KHP hoặc acid oxalic), n<sub>H⁺</sub> = a'·m/M (a' = số H<sup>+</sup> của chất gốc), rồi C<sub>NaOH</sub> = n<sub>H⁺</sub>/V<sub>NaOH</sub>. Dùng luôn nồng độ vừa chuẩn hóa cho các phép chuẩn độ sau.</p>
      <div class="vi-du"><b>Ví dụ 13.</b> (a) Chuẩn hóa NaOH: cân 0,1582 g H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>·2H<sub>2</sub>O (M = 126,07), chuẩn độ hết 25,05 mL NaOH. (b) Lấy 10,00 mL giấm (d = 1,02 g/mL) pha thành 100,0 mL (dung dịch B). Chuẩn độ 10,00 mL B bằng NaOH trên (phenolphtalein) hết 7,85 mL. Tính nồng độ acid acetic trong B và trong giấm; g/L và % w/w (M = 60,05). (c) Với pK<sub>a</sub> = 4,75, tính pH của B ban đầu, pH khi thêm 7,20 mL, tại điểm tương đương và khi thêm 8,50 mL NaOH.
        <details><summary>Xem lời giải</summary>
          <b>(a)</b> Acid oxalic có 2 H<sup>+</sup>:
          \[ \begin{aligned} n_{\mathrm{H^+}} &= 2\cdot\frac{0,1582}{126,07} = 2,510\cdot10^{-3}\ \mathrm{mol} \\ C_\mathrm{NaOH} &= \frac{2,510\cdot10^{-3}}{0,02505} = \mathbf{0,1002\ M} \end{aligned} \]
          <b>(b)</b> n(CH<sub>3</sub>COOH) trong 10,00 mL B = 0,1002·7,85 = 0,7866 mmol:
          \[ \begin{aligned} C_\mathrm{B} &= \frac{0,7866}{10,00} = \mathbf{0,07866\ M} \\ C_\text{giấm} &= 0,07866\cdot\frac{100,0}{10,00} = \mathbf{0,7866\ M} \\ \rho &= 0,7866\cdot60,05 = \mathbf{47,2\ g/L} \\ \%\,(w/w) &= \frac{47,23}{10\cdot1,02} = \mathbf{4,63\ \%} \end{aligned} \]
          <b>(c)</b> Trong 10,00 mL B: n<sub>HA</sub> = 0,7866 mmol, V<sub>e</sub> = 7,85 mL.<br>
          <b>Ban đầu</b>: \( \mathrm{pH} = \tfrac{1}{2}(4,75 - \lg 0,07866) = \mathbf{2,93} \)<br>
          <b>V = 7,20 mL</b>: n<sub>A⁻</sub> = 0,1002·7,20 = 0,7214 mmol; n<sub>HA</sub> còn = 0,7866 − 0,7214 = 0,0652 mmol:
          \[ \mathrm{pH} = 4,75 + \lg\frac{0,7214}{0,0652} = \mathbf{5,79} \]
          <b>V = 7,85 mL</b>: C<sub>A⁻</sub> = 0,7866/17,85 = 0,04407 M (đã pha loãng: 10,00 + 7,85 mL):
          \[ \begin{aligned} \mathrm{pOH} &= \tfrac{1}{2}(9,25 - \lg 0,04407) = 5,30 \\ \mathrm{pH} &= \mathbf{8,70} \end{aligned} \]
          <b>V = 8,50 mL</b>: OH<sup>−</sup> dư = 0,1002·0,65 = 0,0651 mmol trong 18,50 mL → 3,52·10<sup>−3</sup> M → <b>pH = 11,55</b>.
        </details></div>
      <div class="vi-du"><b>Ví dụ 14.</b> 5,00 mL nước mắm được vô cơ hóa, pha thành 100,0 mL (dung dịch A). Hút 10,00 mL A, kiềm hóa bằng NaOH đặc, cất NH<sub>3</sub> vào 25,00 mL H<sub>2</sub>SO<sub>4</sub> 0,0500 M. Chuẩn độ H<sub>2</sub>SO<sub>4</sub> dư bằng NaOH 0,1002 M (metyl đỏ) hết 13,60 mL. Tính độ đạm theo g N/L (N = 14,007).
        <details><summary>Xem lời giải</summary>
          H<sub>2</sub>SO<sub>4</sub> cho <b>2 H<sup>+</sup></b>, nên tính theo mmol H<sup>+</sup>:
          \[ \begin{aligned} n_\text{tổng} &= 2\cdot0,0500\cdot25,00 = 2,500\ \mathrm{mmol} \\ n_\text{dư} &= 0,1002\cdot13,60 = 1,363\ \mathrm{mmol} \\ n_\mathrm{NH_3} &= 2,500 - 1,363 = 1,137\ \mathrm{mmol} \end{aligned} \]
          Đây là lượng N trong 10,00 mL A. Toàn bộ 100,0 mL A (từ 5,00 mL nước mắm):
          \[ \begin{aligned} n_\mathrm{N} &= 1,137\cdot\frac{100,0}{10,00} = 11,37\ \mathrm{mmol} \\ \rho_\mathrm{N} &= \frac{11,37\cdot14,007}{5,00} = \mathbf{31,9\ g/L} \end{aligned} \]
          (mg/mL = g/L). Nếu coi H<sub>2</sub>SO<sub>4</sub> chỉ cho 1 H<sup>+</sup> thì n(H<sup>+</sup>) tổng = 1,250 mmol &lt; 1,363 mmol, ra n(NH<sub>3</sub>) âm: dấu hiệu nhầm tỉ lượng.
        </details></div>

      <div class="hinh-tinh">
        <svg viewBox="0 0 320 256" role="img" aria-label="Sơ đồ cất Kjeldahl: bình cất, ống sinh hàn, bình hứng chứa H2SO4 dư">
<defs><marker id="kj-mt" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--chu-phu)"/></marker></defs>
<text x="160" y="13" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">Cất NH₃ trong phương pháp Kjeldahl</text>
<rect x="22" y="150" width="70" height="8" rx="2" fill="var(--chu-phu)"/>
<path d="M46,146 q3,-9 6,0 q3,-9 6,0 q3,-9 6,0" fill="none" stroke="var(--vang)" stroke-width="2"/>
<path d="M49,64 L49,88 A32,32 0 1 0 79,88 L79,64" fill="none" stroke="var(--chu)" stroke-width="1.8"/>
<path d="M34,120 A32,32 0 0 0 94,120 A32,32 0 0 0 91,109 L37,109 A32,32 0 0 0 34,120 Z" fill="var(--vang)" fill-opacity="0.28"/>
<line x1="47" y1="64" x2="81" y2="64" stroke="var(--chu)" stroke-width="1.8"/>
<path d="M64,64 L64,44 L132,44" fill="none" stroke="var(--chu)" stroke-width="1.8"/>
<rect x="132" y="34" width="72" height="20" rx="3" fill="var(--xanh)" fill-opacity="0.16" stroke="var(--chu)" stroke-width="1.6"/>
<line x1="132" y1="44" x2="204" y2="44" stroke="var(--chu)" stroke-width="1.6"/>
<line x1="196" y1="66" x2="196" y2="56" stroke="var(--xanh)" stroke-width="1.6" marker-end="url(#kj-mt)"/>
<line x1="140" y1="32" x2="140" y2="22" stroke="var(--xanh)" stroke-width="1.6" marker-end="url(#kj-mt)"/>
<text x="204" y="72" font-size="10" fill="var(--xanh)">nước lạnh</text>
<path d="M204,44 L262,44 L262,142" fill="none" stroke="var(--chu)" stroke-width="1.8"/>
<path d="M252,96 L252,116 L228,176 L296,176 L272,116 L272,96" fill="none" stroke="var(--chu)" stroke-width="1.8"/>
<path d="M238,144 L231,168 Q230,174 236,174 L288,174 Q294,174 292,168 L286,144 Z" fill="var(--mau-chinh)" fill-opacity="0.28"/>
<line x1="250" y1="96" x2="274" y2="96" stroke="var(--chu)" stroke-width="1.8"/>
<line x1="92" y1="44" x2="122" y2="44" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#kj-mt)"/>
<line x1="222" y1="44" x2="246" y2="44" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#kj-mt)"/>
<line x1="262" y1="70" x2="262" y2="88" stroke="var(--chu-phu)" stroke-width="1.4" marker-end="url(#kj-mt)"/>
<circle cx="20" cy="120" r="8" fill="var(--mau-chinh)"/><text x="20" y="123.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">1</text>
<circle cx="168" cy="74" r="8" fill="var(--mau-chinh)"/><text x="168" y="77.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">2</text>
<circle cx="300" cy="140" r="8" fill="var(--mau-chinh)"/><text x="300" y="143.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">3</text>
<circle cx="16" cy="193" r="6.5" fill="var(--mau-chinh)"/><text x="16" y="196.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">1</text>
<text x="28" y="196" font-size="10" fill="var(--chu)">Bình cất: NH₄⁺ + OH⁻ → NH₃↑ (đun sôi)</text>
<circle cx="16" cy="207" r="6.5" fill="var(--mau-chinh)"/><text x="16" y="210.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">2</text>
<text x="28" y="210" font-size="10" fill="var(--chu)">Ống sinh hàn: làm lạnh, dẫn NH₃ đi</text>
<circle cx="16" cy="221" r="6.5" fill="var(--mau-chinh)"/><text x="16" y="224.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">3</text>
<text x="28" y="224" font-size="10" fill="var(--chu)">Bình hứng: H₂SO₄ dư (đã biết) giữ NH₃</text>
<circle cx="16" cy="235" r="6.5" fill="var(--mau-chinh)"/><text x="16" y="238.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">4</text>
<text x="28" y="238" font-size="10" fill="var(--chu)">Chuẩn ngược H₂SO₄ dư bằng NaOH (metyl đỏ)</text>
</svg>
        <p class="chu-thich">Sơ đồ cất trong Kjeldahl. Mẫu đã được vô cơ hóa bằng H<sub>2</sub>SO<sub>4</sub> đặc (N hữu cơ thành NH<sub>4</sub><sup>+</sup>), kiềm hóa rồi đun; NH<sub>3</sub> bay sang bình hứng chứa H<sub>2</sub>SO<sub>4</sub> dư đã biết chính xác.</p>
      </div>

      <h3>15. Lỗi hay gặp</h3>
      <ul>
        <li><b>Dùng nồng độ ban đầu thay cho nồng độ sau pha loãng</b> khi tính pH tại điểm tương đương và sau đó. Phải chia số mmol cho <b>tổng thể tích</b> (V<sub>0</sub> + V thêm). Ví dụ 13: dùng 0,07866 M thay vì 0,04407 M sẽ ra pH 8,82 thay vì 8,70.</li>
        <li><b>Chọn phenolphtalein cho base yếu</b> (NH<sub>3</sub>, methylamine chuẩn bằng HCl): pH tương đương ở vùng acid (6,14 trong Ví dụ 10), phải dùng metyl đỏ hoặc bromocresol lục.</li>
        <li><b>Quên tỉ lượng</b>: H<sub>2</sub>SO<sub>4</sub> : NaOH = 1 : 2, acid oxalic : NaOH = 1 : 2, acid citric : NaOH = 1 : 3. Dùng 1 : 1 cho những chất này sai gấp 2 hoặc 3 lần.</li>
        <li><b>Nhầm pK<sub>a</sub> và pK<sub>b</sub></b>: NH<sub>3</sub> có pK<sub>b</sub> = 4,75 (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,25); methylamine có pK<sub>b</sub> = 3,35 (pK<sub>a</sub> = 10,65). Với acid liên hợp phải dùng pK<sub>a</sub>.</li>
        <li><b>Dùng pH = 7</b> cho điểm tương đương của acid yếu hay base yếu. Chỉ acid mạnh – base mạnh mới có pH<sub>tđ</sub> = 7,00.</li>
        <li><b>Dùng công thức gần đúng khi C/K &lt; 400</b> (methylamine 0,043 M: C/K<sub>b</sub> = 96). Phải giải bậc hai.</li>
        <li><b>Quên hệ số pha loãng</b> (bước "định mức" và "hút"): ví dụ quên nhân 100,0/10,00 = 10 ở Ví dụ 13 và 14 làm kết quả nhỏ đi 10 lần.</li>
        <li><b>Kjeldahl</b>: quên trừ lượng acid dư chuẩn ngược; dùng phenolphtalein cho chuẩn ngược (NaOH sẽ chuẩn luôn NH<sub>4</sub><sup>+</sup>); quên nhân hệ số pha loãng và đổi mg/mL thành g/L.</li>
        <li><b>Đa acid</b>: nghĩ H<sub>3</sub>PO<sub>4</sub> chuẩn độ được cả 3 nấc bằng NaOH (nấc 3 không chuẩn độ được); nghĩ citric có 3 bước nhảy (thực tế chỉ 1).</li>
        <li><b>Bước nhảy</b>: dùng pK<sub>a</sub> − 3 thay cho pK<sub>a</sub> + 3 khi chuẩn độ acid yếu bằng base (ở 99,9 % thì A<sup>−</sup> nhiều gấp 1 000 lần HA, nên pH cao hơn pK<sub>a</sub>); quên rằng 100,1 % tính theo OH<sup>−</sup> dư trong tổng thể tích mới.</li>
        <li><b>Chữ số có nghĩa</b>: pH giữ 2 chữ số thập phân; nồng độ và khối lượng giữ số chữ số có nghĩa của số liệu đo kém chính xác nhất (thường 4 chữ số ở nồng độ chuẩn, 3 chữ số ở kết quả cuối).</li>
      </ul>
    `,
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "tao-phuc",
    nhom: "Cân bằng và chuẩn độ",
    icon: "🧩",
    ten: "Cân bằng tạo phức",
    moTa: "Hằng số bền β, α của EDTA theo pH, hằng số bền điều kiện β', chất tạo phức phụ",
    dayDu: true,
    choDuyet: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Viết đúng cân bằng tạo phức và biểu thức hằng số bền β; đổi qua lại giữa β và lg β.</li>
          <li>Tính α<sub>Y⁴⁻</sub> và α<sub>Y(H)</sub> của EDTA từ K<sub>1</sub>…K<sub>4</sub> và pH.</li>
          <li>Tính hằng số bền điều kiện β' (theo pH) và β'' (khi có thêm chất tạo phức phụ); so sánh độ bền của các phức và biết khi nào đủ bền để chuẩn độ (lg β' ≥ 8).</li>
        </ul>
      </div>
      <h3>1. Phức chất và hằng số bền</h3>
      <p>Ion kim loại M tạo phức với phối tử L theo từng nấc. Hằng số bền từng nấc K<sub>i</sub> và hằng số bền tổng β<sub>n</sub> (β<sub>n</sub> = K<sub>1</sub>K<sub>2</sub>…K<sub>n</sub>):</p>
      <div class="cong-thuc">\[ \mathrm{M} + n\mathrm{L} \rightleftharpoons \mathrm{ML}_n \qquad \beta_n = \frac{[\mathrm{ML}_n]}{[\mathrm{M}][\mathrm{L}]^n} \qquad \lg\beta_n = \sum \lg K_i \]</div>
      <p>β càng lớn thì phức càng bền. β chỉ phụ thuộc bản chất phức, nhiệt độ và lực ion, <b>không phụ thuộc pH</b>.</p>
      <h3>2. EDTA: dạng Y<sup>4−</sup> mới tạo phức</h3>
      <p>EDTA (H<sub>4</sub>Y) phân li bốn nấc với các hằng số K<sub>1</sub>…K<sub>4</sub> (pK<sub>1</sub> = 2,00; pK<sub>2</sub> = 2,69; pK<sub>3</sub> = 6,13; pK<sub>4</sub> = 10,37 ở 25 °C, μ = 0,1 M). Chỉ dạng Y<sup>4−</sup> tạo phức 1 : 1 với ion kim loại:</p>
      <div class="cong-thuc">\[ \mathrm{M}^{n+} + \mathrm{Y}^{4-} \rightleftharpoons \mathrm{MY}^{n-4} \qquad \beta_{\mathrm{MY}} = \frac{[\mathrm{MY}^{n-4}]}{[\mathrm{M}^{n+}][\mathrm{Y}^{4-}]} \]</div>
      <div class="bang-cuon">
        <table class="bang">
          <thead><tr><th>Ion</th><th>lg β<sub>MY</sub></th><th>Ion</th><th>lg β<sub>MY</sub></th></tr></thead>
          <tbody>
            <tr><td>Mg<sup>2+</sup></td><td>8,79</td><td>Zn<sup>2+</sup></td><td>16,50</td></tr>
            <tr><td>Ca<sup>2+</sup></td><td>10,70</td><td>Pb<sup>2+</sup></td><td>18,04</td></tr>
            <tr><td>Fe<sup>2+</sup></td><td>14,30</td><td>Cu<sup>2+</sup></td><td>18,78</td></tr>
            <tr><td>Al<sup>3+</sup></td><td>16,4</td><td>Fe<sup>3+</sup></td><td>25,1</td></tr>
          </tbody>
        </table>
      </div>
      <h3>3. Phân số α của EDTA theo pH</h3>
      <p>Gọi [Y'] là tổng nồng độ các dạng EDTA chưa tạo phức (Y<sup>4−</sup>, HY<sup>3−</sup>, H<sub>2</sub>Y<sup>2−</sup>, H<sub>3</sub>Y<sup>−</sup>, H<sub>4</sub>Y):</p>
      <div class="cong-thuc">\[ \alpha_{\mathrm{Y^{4-}}} = \frac{[\mathrm{Y^{4-}}]}{[\mathrm{Y'}]} = \frac{K_1K_2K_3K_4}{[\mathrm{H^+}]^4 + K_1[\mathrm{H^+}]^3 + K_1K_2[\mathrm{H^+}]^2 + K_1K_2K_3[\mathrm{H^+}] + K_1K_2K_3K_4} \qquad \alpha_{\mathrm{Y(H)}} = \frac{1}{\alpha_{\mathrm{Y^{4-}}}} \ge 1 \]</div>
      <p>pH càng cao thì α<sub>Y⁴⁻</sub> càng lớn:</p>
      <div class="bang-cuon">
        <table class="bang">
          <thead><tr><th>pH</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th></tr></thead>
          <tbody><tr><td>α<sub>Y⁴⁻</sub></td><td>3,0·10<sup>−9</sup></td><td>2,9·10<sup>−7</sup></td><td>1,8·10<sup>−5</sup></td><td>3,8·10<sup>−4</sup></td><td>4,2·10<sup>−3</sup></td><td>0,041</td><td>0,30</td><td>0,81</td><td>0,98</td></tr></tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 1.</b> Tính α<sub>Y⁴⁻</sub> và α<sub>Y(H)</sub> ở pH 10 và ở pH 8 (dùng các pK ở mục 2).
        <p>Thay [H<sup>+</sup>] = 10<sup>−10</sup> M vào công thức: α<sub>Y⁴⁻</sub> = 0,30, α<sub>Y(H)</sub> = 1/0,30 = 3,3. Ở pH 8: α<sub>Y⁴⁻</sub> = 4,2·10<sup>−3</sup>, α<sub>Y(H)</sub> = 2,4·10<sup>2</sup>.</p></div>
      <h3>4. Hằng số bền điều kiện β'</h3>
      <p>Vì chỉ Y<sup>4−</sup> tạo phức, ở một pH xác định cần dùng hằng số bền <b>điều kiện</b> tính theo [Y']:</p>
      <div class="cong-thuc">\[ \beta' = \frac{[\mathrm{MY}]}{[\mathrm{M}][\mathrm{Y'}]} = \beta_{\mathrm{MY}}\,\alpha_{\mathrm{Y^{4-}}} = \frac{\beta_{\mathrm{MY}}}{\alpha_{\mathrm{Y(H)}}} \qquad \lg\beta' = \lg\beta_{\mathrm{MY}} + \lg\alpha_{\mathrm{Y^{4-}}} \]</div>
      <div class="vi-du"><b>Ví dụ 2.</b> Tính lg β' của CaY<sup>2−</sup> ở pH 10 và của MgY<sup>2−</sup> ở pH 5 (lg β<sub>CaY</sub> = 10,70; lg β<sub>MgY</sub> = 8,79; α<sub>Y⁴⁻</sub> = 0,30 ở pH 10 và 2,9·10<sup>−7</sup> ở pH 5).
        <p>CaY<sup>2−</sup>: lg β' = 10,70 + lg 0,30 = 10,18. MgY<sup>2−</sup>: lg β' = 8,79 + lg(2,9·10<sup>−7</sup>) = 8,79 − 6,54 = 2,25.</p></div>
      <h3>5. Chất tạo phức phụ</h3>
      <p>Khi trong dung dịch còn phối tử L khác (NH<sub>3</sub>, tartrat…) tạo phức với M, [M] tự do giảm. Gọi α<sub>M(L)</sub> = [M']/[M] (M' là tổng nồng độ M chưa tạo phức với EDTA):</p>
      <div class="cong-thuc">\[ \alpha_{\mathrm{M(L)}} = 1 + \beta_1[\mathrm{L}] + \beta_2[\mathrm{L}]^2 + \dots + \beta_n[\mathrm{L}]^n \qquad \beta'' = \frac{\beta_{\mathrm{MY}}\,\alpha_{\mathrm{Y^{4-}}}}{\alpha_{\mathrm{M(L)}}} \]</div>
      <div class="vi-du"><b>Ví dụ 3.</b> Tính lg β'' của ZnY<sup>2−</sup> ở pH 10 (α<sub>Y⁴⁻</sub> = 0,30) khi [NH<sub>3</sub>] tự do = 0,10 M (lg β<sub>1</sub> = 2,18; lg β<sub>2</sub> = 4,43; lg β<sub>3</sub> = 6,74; lg β<sub>4</sub> = 8,70; lg β<sub>ZnY</sub> = 16,50).
        <p>α<sub>Zn(NH₃)</sub> = 1 + 10<sup>2,18</sup>·0,10 + 10<sup>4,43</sup>·0,10<sup>2</sup> + 10<sup>6,74</sup>·0,10<sup>3</sup> + 10<sup>8,70</sup>·0,10<sup>4</sup> = 5,6·10<sup>4</sup> (lg = 4,75). lg β'' = 16,50 − 0,52 − 4,75 = 11,23.</p></div>
      <h3>6. So sánh độ bền và điều kiện chuẩn độ</h3>
      <ul>
        <li>So sánh độ bền của hai phức phải dùng β' <b>ở pH đã cho</b>, không dùng β: ZnY<sup>2−</sup> có β lớn hơn CaY<sup>2−</sup> nhưng ở pH 4 lg β' = 16,50 − 8,52 = 7,98, còn CaY<sup>2−</sup> ở pH 10 có lg β' = 10,18 nên bền điều kiện hơn.</li>
        <li>Ion kim loại chuẩn độ chính xác được bằng EDTA khi lg β' ≥ 8 (nồng độ cỡ 0,01 M). Từ đó suy ra pH tối thiểu cho từng ion (Mg<sup>2+</sup> cần pH ≈ 10, Ca<sup>2+</sup> pH ≈ 8, Zn<sup>2+</sup> pH ≈ 4–5).</li>
        <li>Phản ứng tạo phức giải phóng H<sup>+</sup> (M<sup>n+</sup> + H<sub>2</sub>Y<sup>2−</sup> ⇌ MY<sup>n−4</sup> + 2H<sup>+</sup>), nên phải dùng dung dịch đệm để pH không giảm làm α<sub>Y⁴⁻</sub> và β' giảm.</li>
      </ul>
      <p class="luu-y"><b>Lỗi hay gặp:</b> dùng β thay cho β' khi so sánh độ bền ở các pH khác nhau; lấy nghịch đảo α<sub>Y⁴⁻</sub> (nhầm với α<sub>Y(H)</sub>); sai dấu khi cộng lg α (phải <i>cộng</i> lg α<sub>Y⁴⁻</sub> và <i>trừ</i> lg α<sub>M(L)</sub>); quên hiệu chỉnh theo pH hoặc theo chất tạo phức phụ; quên lấy mũ khi đổi lg β sang β; quên các nấc β<sub>2</sub>, β<sub>3</sub>… khi tính α<sub>M(L)</sub>.</p>
      <p class="luu-y">Các bài chuẩn độ EDTA (đường chuẩn độ, chỉ thị kim loại, định lượng) ở chương sau.</p>
    `,
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "edta",
    nhom: "Cân bằng và chuẩn độ",
    icon: "🔗",
    ten: "Tạo phức và chuẩn độ EDTA",
    moTa: "EDTA, α_Y4−, hằng số bền điều kiện, đường chuẩn độ, chỉ thị kim loại",
    dayDu: true,
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
      <p>Để chuẩn độ đạt yêu cầu, phản ứng tạo phức phải gần như hoàn toàn tại điểm tương đương. Quy ước thường dùng: <b>K<sub>f</sub>' ≳ 10<sup>8</sup></b> (với C ≈ 0,01 M, lúc đó khoảng 99,9% ion kim loại đã tạo phức; dạng tổng quát lg(C·K<sub>f</sub>') ≥ 6). Vì vậy mỗi ion có một <b>pH tối thiểu</b> để chuẩn độ: ion tạo phức càng bền (K<sub>f</sub> lớn như Fe<sup>3+</sup>) thì chuẩn độ được ở pH càng thấp. Dựa vào đó có thể <b>chuẩn độ chọn lọc</b> bằng cách chỉnh pH (mục 10). Đề thi thường viết β, β' thay cho K<sub>f</sub>, K<sub>f</sub>' và α<sub>Y(H)</sub> = 1/α<sub>Y⁴⁻</sub>; bảng đối chiếu ở mục 9.</p>
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
        <li>Bảng chỉ thị kim loại kèm màu và pH dùng ở mục 12.</li>
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

      <h3>9. Kí hiệu trong đề thi và cách tự tính α<sub>Y⁴⁻</sub> từ pK<sub>a</sub></h3>
      <p>Đề thi và tài liệu khác nhau dùng kí hiệu khác nhau cho cùng một đại lượng. Bảng dưới đối chiếu các kí hiệu để bạn đọc đề không bị lạc:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Trong app</th><th>Thường ghi trong đề</th><th>Ý nghĩa</th></tr></thead>
          <tbody>
            <tr><td>K<sub>f</sub></td><td>β (β<sub>MY</sub>)</td><td>Hằng số bền của phức MY (Y<sup>4−</sup> tự do)</td></tr>
            <tr><td>K<sub>f</sub>'</td><td>β'</td><td>Hằng số bền điều kiện tại một pH cố định</td></tr>
            <tr><td>α<sub>Y⁴⁻</sub></td><td>1/α<sub>Y(H)</sub></td><td>Phân số EDTA ở dạng Y<sup>4−</sup> (≤ 1)</td></tr>
            <tr><td>1/α<sub>Y⁴⁻</sub></td><td>α<sub>Y(H)</sub></td><td>Hệ số phản ứng phụ của EDTA với H<sup>+</sup> (≥ 1)</td></tr>
          </tbody>
        </table>
      </div>
      <div class="cong-thuc"><div class="nhan">Hai kí hiệu, một quan hệ</div>\[ \beta' = \frac{\beta}{\alpha_\mathrm{Y(H)}} \qquad \lg\beta' = \lg\beta - \lg\alpha_\mathrm{Y(H)} \]</div>
      <p>Khi đề ghi "α<sub>Y(H)</sub> = 10<sup>2</sup> ở pH 8" nghĩa là lg α<sub>Y(H)</sub> = 2, tức α<sub>Y⁴⁻</sub> = 10<sup>−2</sup>. β' luôn <b>nhỏ hơn</b> β; nếu tính ra β' lớn hơn β là bạn đã nhân nhầm chiều.</p>
      <p>Đề thường cho <b>4 giá trị pK<sub>a</sub> của H<sub>4</sub>Y</b> (2,00; 2,69; 6,13; 10,37) và yêu cầu tự tính α<sub>Y(H)</sub> (hai nấc đầu pK = 0 và 1,5 của H<sub>6</sub>Y<sup>2+</sup> chỉ ảnh hưởng ở pH &lt; 1). Với K<sub>1</sub>…K<sub>4</sub> là các hằng số phân li lần lượt của H<sub>4</sub>Y, H<sub>3</sub>Y<sup>−</sup>, H<sub>2</sub>Y<sup>2−</sup>, HY<sup>3−</sup>:</p>
      <div class="cong-thuc">\[ \begin{aligned} \alpha_\mathrm{Y(H)} = {} & 1 + \frac{\Hp}{K_4} + \frac{\Hp^2}{K_3K_4} \\ & + \frac{\Hp^3}{K_2K_3K_4} + \frac{\Hp^4}{K_1K_2K_3K_4} \end{aligned} \]</div>
      <div class="vi-du"><b>Ví dụ 7.</b> Tính α<sub>Y(H)</sub> và α<sub>Y⁴⁻</sub> của EDTA ở pH 5 từ pK<sub>a</sub> = 2,00; 2,69; 6,13; 10,37. Suy ra β' của CuY<sup>2−</sup> (lg β = 18,78) và của CaY<sup>2−</sup> (lg β = 10,70) rồi cho biết ion nào chuẩn độ được ở pH 5. Tính ppm Cu<sup>2+</sup> nếu 25,00 mL nước thải tốn 6,85 mL EDTA 0,01000 M (PAN, pH 5; Cu = 63,55).
        <details><summary>Xem lời giải</summary>
          [H<sup>+</sup>] = 10<sup>−5</sup>; K<sub>4</sub> = 10<sup>−10,37</sup>, K<sub>3</sub> = 10<sup>−6,13</sup>, K<sub>2</sub> = 10<sup>−2,69</sup>, K<sub>1</sub> = 10<sup>−2,00</sup>. Từng số hạng:
          \[ \begin{aligned} \frac{\Hp}{K_4} &= 10^{5,37} = 2,34\cdot10^{5} \\ \frac{\Hp^2}{K_3K_4} &= 10^{6,50} = 3,16\cdot10^{6} \\ \frac{\Hp^3}{K_2K_3K_4} &= 10^{4,19} = 1,55\cdot10^{4} \\ \frac{\Hp^4}{K_1K_2K_3K_4} &= 10^{1,19} = 15 \end{aligned} \]
          \[ \begin{aligned} \alpha_\mathrm{Y(H)} &= 1 + 2,34\cdot10^{5} + 3,16\cdot10^{6} \\ &\quad + 1,55\cdot10^{4} + 15 \\ &= 3,41\cdot10^{6} \quad (\lg = 6,53) \\ \alpha_\mathrm{Y^{4-}} &= \frac{1}{3,41\cdot10^{6}} = 2,9\cdot10^{-7} \end{aligned} \]
          Kết quả khớp bảng α<sub>Y⁴⁻</sub> ở mục 3. Hằng số bền điều kiện:
          \[ \begin{aligned} \lg\beta'_\mathrm{CuY} &= 18,78 - 6,53 = 12,25 \\ \beta'_\mathrm{CuY} &= 1,8\cdot10^{12} \\ \lg\beta'_\mathrm{CaY} &= 10,70 - 6,53 = 4,17 \\ \beta'_\mathrm{CaY} &= 1,5\cdot10^{4} \end{aligned} \]
          β'<sub>CuY</sub> ≥ 10<sup>8</sup>: Cu<sup>2+</sup> chuẩn độ được ở pH 5. β'<sub>CaY</sub> ≪ 10<sup>8</sup>: Ca<sup>2+</sup> không chuẩn độ được (cũng không cản trở phép đo Cu<sup>2+</sup>).<br>
          Hàm lượng Cu<sup>2+</sup>: n = 0,01000·6,85 = 0,0685 mmol trong 25,00 mL:
          \[ \begin{aligned} \rho &= \frac{0,0685\cdot63,55}{25,00}\cdot10^{3} \\ &= \mathbf{174\ mg/L\ (ppm)} \end{aligned} \]
        </details></div>

      <h3>10. Chuẩn độ chọn lọc theo pH</h3>
      <p>Với một ion kim loại M, phản ứng chuẩn độ chỉ định lượng khi lg β' ≥ 8. Suy ra <b>pH tối thiểu</b>: lg α<sub>Y⁴⁻</sub> ≥ 8 − lg β, nghĩa là lg α<sub>Y(H)</sub> ≤ lg β − 8. Ví dụ Pb<sup>2+</sup>: lg α<sub>Y(H)</sub> ≤ 18,04 − 8 = 10,04, tương ứng pH ≥ 3,3. Tương tự Bi<sup>3+</sup> ≥ khoảng 0,6 và Zn<sup>2+</sup> ≥ khoảng 4,0 (hình dưới; cột "pH tối thiểu" trong bảng tra cứu hằng số EDTA).</p>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 250" role="img" aria-label="Đồ thị lg K'f theo pH của các phức EDTA với Mg, Ca, Zn, Pb, Fe3+ và Bi3+, kèm đường ngang lg K'f = 8">
<clipPath id="ed-cl"><rect x="32" y="20" width="244" height="160"/></clipPath>
<text x="160" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="var(--chu)">lg K'f theo pH (phức M–EDTA)</text>
<line x1="32" y1="180.0" x2="276" y2="180.0" stroke="var(--vien)" stroke-width="0.8"/>
<text x="28" y="183.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">0</text>
<line x1="32" y1="157.4" x2="276" y2="157.4" stroke="var(--vien)" stroke-width="0.8"/>
<text x="28" y="160.9" text-anchor="end" font-size="10" fill="var(--chu-phu)">4</text>
<line x1="32" y1="134.9" x2="276" y2="134.9" stroke="var(--vien)" stroke-width="0.8"/>
<text x="28" y="138.4" text-anchor="end" font-size="10" fill="var(--chu-phu)">8</text>
<line x1="32" y1="112.3" x2="276" y2="112.3" stroke="var(--vien)" stroke-width="0.8"/>
<text x="28" y="115.8" text-anchor="end" font-size="10" fill="var(--chu-phu)">12</text>
<line x1="32" y1="89.7" x2="276" y2="89.7" stroke="var(--vien)" stroke-width="0.8"/>
<text x="28" y="93.2" text-anchor="end" font-size="10" fill="var(--chu-phu)">16</text>
<line x1="32" y1="67.1" x2="276" y2="67.1" stroke="var(--vien)" stroke-width="0.8"/>
<text x="28" y="70.6" text-anchor="end" font-size="10" fill="var(--chu-phu)">20</text>
<line x1="32" y1="44.6" x2="276" y2="44.6" stroke="var(--vien)" stroke-width="0.8"/>
<text x="28" y="48.1" text-anchor="end" font-size="10" fill="var(--chu-phu)">24</text>
<line x1="32" y1="22.0" x2="276" y2="22.0" stroke="var(--vien)" stroke-width="0.8"/>
<text x="28" y="25.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">28</text>
<line x1="32.0" y1="180" x2="32.0" y2="184" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="32.0" y="195" text-anchor="middle" font-size="10" fill="var(--chu-phu)">0</text>
<line x1="72.7" y1="180" x2="72.7" y2="184" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="72.7" y="195" text-anchor="middle" font-size="10" fill="var(--chu-phu)">2</text>
<line x1="113.3" y1="180" x2="113.3" y2="184" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="113.3" y="195" text-anchor="middle" font-size="10" fill="var(--chu-phu)">4</text>
<line x1="154.0" y1="180" x2="154.0" y2="184" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="154.0" y="195" text-anchor="middle" font-size="10" fill="var(--chu-phu)">6</text>
<line x1="194.7" y1="180" x2="194.7" y2="184" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="194.7" y="195" text-anchor="middle" font-size="10" fill="var(--chu-phu)">8</text>
<line x1="235.3" y1="180" x2="235.3" y2="184" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="235.3" y="195" text-anchor="middle" font-size="10" fill="var(--chu-phu)">10</text>
<line x1="276.0" y1="180" x2="276.0" y2="184" stroke="var(--chu-phu)" stroke-width="1"/>
<text x="276.0" y="195" text-anchor="middle" font-size="10" fill="var(--chu-phu)">12</text>
<line x1="32" y1="180" x2="276" y2="180" stroke="var(--chu-phu)" stroke-width="1.2"/>
<line x1="32" y1="180" x2="32" y2="18" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="154" y="209" text-anchor="middle" font-size="10" fill="var(--chu-phu)">pH</text>
<line x1="72.7" y1="22" x2="72.7" y2="180" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="2 3"/>
<line x1="133.7" y1="22" x2="133.7" y2="180" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="2 3"/>
<path d="M32.0,152.9 L33.0,151.4 L34.0,149.8 L35.0,148.3 L36.1,146.8 L37.1,145.3 L38.1,143.8 L39.1,142.3 L40.1,140.8 L41.1,139.4 L42.2,137.9 L43.2,136.5 L44.2,135.0 L45.2,133.6 L46.2,132.2 L47.2,130.8 L48.3,129.4 L49.3,128.0 L50.3,126.6 L51.3,125.2 L52.3,123.9 L53.3,122.5 L54.4,121.2 L55.4,119.8 L56.4,118.5 L57.4,117.2 L58.4,115.9 L59.5,114.7 L60.5,113.4 L61.5,112.2 L62.5,111.0 L63.5,109.8 L64.5,108.6 L65.5,107.4 L66.6,106.3 L67.6,105.1 L68.6,104.0 L69.6,102.9 L70.6,101.9 L71.7,100.8 L72.7,99.8 L73.7,98.8 L74.7,97.9 L75.7,96.9 L76.7,96.0 L77.8,95.1 L78.8,94.2 L79.8,93.3 L80.8,92.4 L81.8,91.6 L82.8,90.8 L83.8,90.0 L84.9,89.2 L85.9,88.4 L86.9,87.7 L87.9,86.9 L88.9,86.2 L89.9,85.5 L91.0,84.8 L92.0,84.1 L93.0,83.4 L94.0,82.8 L95.0,82.1 L96.0,81.5 L97.1,80.8 L98.1,80.2 L99.1,79.6 L100.1,78.9 L101.1,78.3 L102.2,77.7 L103.2,77.1 L104.2,76.5 L105.2,75.9 L106.2,75.3 L107.2,74.7 L108.2,74.1 L109.3,73.5 L110.3,73.0 L111.3,72.4 L112.3,71.8 L113.3,71.2 L114.3,70.7 L115.4,70.1 L116.4,69.5 L117.4,68.9 L118.4,68.4 L119.4,67.8 L120.4,67.2 L121.5,66.7 L122.5,66.1 L123.5,65.5 L124.5,65.0 L125.5,64.4 L126.6,63.9 L127.6,63.3 L128.6,62.7 L129.6,62.2 L130.6,61.6 L131.6,61.1 L132.6,60.5 L133.7,60.0 L134.7,59.4 L135.7,58.9 L136.7,58.4 L137.7,57.8 L138.8,57.3 L139.8,56.8 L140.8,56.2 L141.8,55.7 L142.8,55.2 L143.8,54.7 L144.9,54.2 L145.9,53.7 L146.9,53.2 L147.9,52.7 L148.9,52.2 L149.9,51.7 L150.9,51.2 L152.0,50.8 L153.0,50.3 L154.0,49.9 L155.0,49.4 L156.0,49.0 L157.1,48.6 L158.1,48.2 L159.1,47.8 L160.1,47.4 L161.1,47.0 L162.1,46.6 L163.2,46.2 L164.2,45.8 L165.2,45.5 L166.2,45.1 L167.2,44.8 L168.2,44.4 L169.2,44.1 L170.3,43.7 L171.3,43.4 L172.3,43.1 L173.3,42.8 L174.3,42.5 L175.3,42.1 L176.4,41.8 L177.4,41.5 L178.4,41.2 L179.4,40.9 L180.4,40.6 L181.4,40.3 L182.5,40.0 L183.5,39.7 L184.5,39.4 L185.5,39.1 L186.5,38.8 L187.6,38.6 L188.6,38.3 L189.6,38.0 L190.6,37.7 L191.6,37.4 L192.6,37.1 L193.7,36.8 L194.7,36.5 L195.7,36.3 L196.7,36.0 L197.7,35.7 L198.7,35.4 L199.8,35.1 L200.8,34.8 L201.8,34.6 L202.8,34.3 L203.8,34.0 L204.8,33.7 L205.9,33.4 L206.9,33.2 L207.9,32.9 L208.9,32.6 L209.9,32.3 L210.9,32.1 L212.0,31.8 L213.0,31.5 L214.0,31.2 L215.0,31.0 L216.0,30.7 L217.0,30.4 L218.0,30.2 L219.1,29.9 L220.1,29.6 L221.1,29.4 L222.1,29.1 L223.1,28.9 L224.1,28.6 L225.2,28.3 L226.2,28.1 L227.2,27.9 L228.2,27.6 L229.2,27.4 L230.2,27.2 L231.3,26.9 L232.3,26.7 L233.3,26.5 L234.3,26.3 L235.3,26.1 L236.4,25.9 L237.4,25.7 L238.4,25.5 L239.4,25.4 L240.4,25.2 L241.4,25.0 L242.5,24.9 L243.5,24.7 L244.5,24.6 L245.5,24.5 L246.5,24.4 L247.5,24.3 L248.5,24.2 L249.6,24.1 L250.6,24.0 L251.6,23.9 L252.6,23.8 L253.6,23.8 L254.6,23.7 L255.7,23.6 L256.7,23.6 L257.7,23.5 L258.7,23.5 L259.7,23.5 L260.8,23.4 L261.8,23.4 L262.8,23.4 L263.8,23.3 L264.8,23.3 L265.8,23.3 L266.9,23.3 L267.9,23.3 L268.9,23.3 L269.9,23.2 L270.9,23.2 L271.9,23.2 L273.0,23.2 L274.0,23.2 L275.0,23.2 L276.0,23.2" fill="none" stroke="var(--mau-chinh)" stroke-width="1.9" clip-path="url(#ed-cl)"/>
<path d="M32.0,168.1 L33.0,166.6 L34.0,165.1 L35.0,163.5 L36.1,162.0 L37.1,160.5 L38.1,159.0 L39.1,157.6 L40.1,156.1 L41.1,154.6 L42.2,153.2 L43.2,151.7 L44.2,150.3 L45.2,148.8 L46.2,147.4 L47.2,146.0 L48.3,144.6 L49.3,143.2 L50.3,141.8 L51.3,140.5 L52.3,139.1 L53.3,137.7 L54.4,136.4 L55.4,135.1 L56.4,133.8 L57.4,132.5 L58.4,131.2 L59.5,129.9 L60.5,128.7 L61.5,127.4 L62.5,126.2 L63.5,125.0 L64.5,123.8 L65.5,122.6 L66.6,121.5 L67.6,120.4 L68.6,119.3 L69.6,118.2 L70.6,117.1 L71.7,116.1 L72.7,115.1 L73.7,114.1 L74.7,113.1 L75.7,112.1 L76.7,111.2 L77.8,110.3 L78.8,109.4 L79.8,108.5 L80.8,107.7 L81.8,106.8 L82.8,106.0 L83.8,105.2 L84.9,104.4 L85.9,103.7 L86.9,102.9 L87.9,102.2 L88.9,101.5 L89.9,100.7 L91.0,100.0 L92.0,99.4 L93.0,98.7 L94.0,98.0 L95.0,97.3 L96.0,96.7 L97.1,96.1 L98.1,95.4 L99.1,94.8 L100.1,94.2 L101.1,93.6 L102.2,92.9 L103.2,92.3 L104.2,91.7 L105.2,91.1 L106.2,90.5 L107.2,90.0 L108.2,89.4 L109.3,88.8 L110.3,88.2 L111.3,87.6 L112.3,87.0 L113.3,86.5 L114.3,85.9 L115.4,85.3 L116.4,84.7 L117.4,84.2 L118.4,83.6 L119.4,83.0 L120.4,82.5 L121.5,81.9 L122.5,81.3 L123.5,80.8 L124.5,80.2 L125.5,79.7 L126.6,79.1 L127.6,78.5 L128.6,78.0 L129.6,77.4 L130.6,76.9 L131.6,76.3 L132.6,75.8 L133.7,75.2 L134.7,74.7 L135.7,74.1 L136.7,73.6 L137.7,73.1 L138.8,72.5 L139.8,72.0 L140.8,71.5 L141.8,71.0 L142.8,70.4 L143.8,69.9 L144.9,69.4 L145.9,68.9 L146.9,68.4 L147.9,67.9 L148.9,67.4 L149.9,67.0 L150.9,66.5 L152.0,66.0 L153.0,65.6 L154.0,65.1 L155.0,64.7 L156.0,64.2 L157.1,63.8 L158.1,63.4 L159.1,63.0 L160.1,62.6 L161.1,62.2 L162.1,61.8 L163.2,61.4 L164.2,61.1 L165.2,60.7 L166.2,60.4 L167.2,60.0 L168.2,59.7 L169.2,59.3 L170.3,59.0 L171.3,58.7 L172.3,58.3 L173.3,58.0 L174.3,57.7 L175.3,57.4 L176.4,57.1 L177.4,56.8 L178.4,56.5 L179.4,56.2 L180.4,55.9 L181.4,55.6 L182.5,55.3 L183.5,55.0 L184.5,54.7 L185.5,54.4 L186.5,54.1 L187.6,53.8 L188.6,53.5 L189.6,53.2 L190.6,52.9 L191.6,52.6 L192.6,52.4 L193.7,52.1 L194.7,51.8 L195.7,51.5 L196.7,51.2 L197.7,50.9 L198.7,50.6 L199.8,50.4 L200.8,50.1 L201.8,49.8 L202.8,49.5 L203.8,49.2 L204.8,49.0 L205.9,48.7 L206.9,48.4 L207.9,48.1 L208.9,47.8 L209.9,47.6 L210.9,47.3 L212.0,47.0 L213.0,46.7 L214.0,46.5 L215.0,46.2 L216.0,45.9 L217.0,45.7 L218.0,45.4 L219.1,45.1 L220.1,44.9 L221.1,44.6 L222.1,44.3 L223.1,44.1 L224.1,43.8 L225.2,43.6 L226.2,43.3 L227.2,43.1 L228.2,42.9 L229.2,42.6 L230.2,42.4 L231.3,42.2 L232.3,41.9 L233.3,41.7 L234.3,41.5 L235.3,41.3 L236.4,41.1 L237.4,40.9 L238.4,40.8 L239.4,40.6 L240.4,40.4 L241.4,40.3 L242.5,40.1 L243.5,40.0 L244.5,39.8 L245.5,39.7 L246.5,39.6 L247.5,39.5 L248.5,39.4 L249.6,39.3 L250.6,39.2 L251.6,39.1 L252.6,39.1 L253.6,39.0 L254.6,38.9 L255.7,38.9 L256.7,38.8 L257.7,38.8 L258.7,38.7 L259.7,38.7 L260.8,38.7 L261.8,38.6 L262.8,38.6 L263.8,38.6 L264.8,38.6 L265.8,38.5 L266.9,38.5 L267.9,38.5 L268.9,38.5 L269.9,38.5 L270.9,38.5 L271.9,38.5 L273.0,38.4 L274.0,38.4 L275.0,38.4 L276.0,38.4" fill="none" stroke="var(--xanh)" stroke-width="1.9" clip-path="url(#ed-cl)"/>
<path d="M32.0,208.0 L33.0,206.4 L34.0,204.9 L35.0,203.4 L36.1,201.9 L37.1,200.4 L38.1,198.9 L39.1,197.4 L40.1,195.9 L41.1,194.4 L42.2,193.0 L43.2,191.5 L44.2,190.1 L45.2,188.7 L46.2,187.3 L47.2,185.8 L48.3,184.4 L49.3,183.0 L50.3,181.7 L51.3,180.3 L52.3,178.9 L53.3,177.6 L54.4,176.2 L55.4,174.9 L56.4,173.6 L57.4,172.3 L58.4,171.0 L59.5,169.7 L60.5,168.5 L61.5,167.3 L62.5,166.0 L63.5,164.8 L64.5,163.6 L65.5,162.5 L66.6,161.3 L67.6,160.2 L68.6,159.1 L69.6,158.0 L70.6,157.0 L71.7,155.9 L72.7,154.9 L73.7,153.9 L74.7,152.9 L75.7,152.0 L76.7,151.0 L77.8,150.1 L78.8,149.2 L79.8,148.4 L80.8,147.5 L81.8,146.7 L82.8,145.9 L83.8,145.1 L84.9,144.3 L85.9,143.5 L86.9,142.8 L87.9,142.0 L88.9,141.3 L89.9,140.6 L91.0,139.9 L92.0,139.2 L93.0,138.5 L94.0,137.8 L95.0,137.2 L96.0,136.5 L97.1,135.9 L98.1,135.3 L99.1,134.6 L100.1,134.0 L101.1,133.4 L102.2,132.8 L103.2,132.2 L104.2,131.6 L105.2,131.0 L106.2,130.4 L107.2,129.8 L108.2,129.2 L109.3,128.6 L110.3,128.0 L111.3,127.5 L112.3,126.9 L113.3,126.3 L114.3,125.7 L115.4,125.2 L116.4,124.6 L117.4,124.0 L118.4,123.4 L119.4,122.9 L120.4,122.3 L121.5,121.7 L122.5,121.2 L123.5,120.6 L124.5,120.1 L125.5,119.5 L126.6,118.9 L127.6,118.4 L128.6,117.8 L129.6,117.3 L130.6,116.7 L131.6,116.2 L132.6,115.6 L133.7,115.1 L134.7,114.5 L135.7,114.0 L136.7,113.4 L137.7,112.9 L138.8,112.4 L139.8,111.8 L140.8,111.3 L141.8,110.8 L142.8,110.3 L143.8,109.8 L144.9,109.2 L145.9,108.7 L146.9,108.2 L147.9,107.8 L148.9,107.3 L149.9,106.8 L150.9,106.3 L152.0,105.9 L153.0,105.4 L154.0,105.0 L155.0,104.5 L156.0,104.1 L157.1,103.7 L158.1,103.2 L159.1,102.8 L160.1,102.4 L161.1,102.0 L162.1,101.7 L163.2,101.3 L164.2,100.9 L165.2,100.5 L166.2,100.2 L167.2,99.8 L168.2,99.5 L169.2,99.2 L170.3,98.8 L171.3,98.5 L172.3,98.2 L173.3,97.8 L174.3,97.5 L175.3,97.2 L176.4,96.9 L177.4,96.6 L178.4,96.3 L179.4,96.0 L180.4,95.7 L181.4,95.4 L182.5,95.1 L183.5,94.8 L184.5,94.5 L185.5,94.2 L186.5,93.9 L187.6,93.6 L188.6,93.3 L189.6,93.1 L190.6,92.8 L191.6,92.5 L192.6,92.2 L193.7,91.9 L194.7,91.6 L195.7,91.3 L196.7,91.1 L197.7,90.8 L198.7,90.5 L199.8,90.2 L200.8,89.9 L201.8,89.6 L202.8,89.4 L203.8,89.1 L204.8,88.8 L205.9,88.5 L206.9,88.2 L207.9,88.0 L208.9,87.7 L209.9,87.4 L210.9,87.1 L212.0,86.9 L213.0,86.6 L214.0,86.3 L215.0,86.0 L216.0,85.8 L217.0,85.5 L218.0,85.2 L219.1,85.0 L220.1,84.7 L221.1,84.4 L222.1,84.2 L223.1,83.9 L224.1,83.7 L225.2,83.4 L226.2,83.2 L227.2,82.9 L228.2,82.7 L229.2,82.5 L230.2,82.2 L231.3,82.0 L232.3,81.8 L233.3,81.6 L234.3,81.4 L235.3,81.2 L236.4,81.0 L237.4,80.8 L238.4,80.6 L239.4,80.4 L240.4,80.3 L241.4,80.1 L242.5,80.0 L243.5,79.8 L244.5,79.7 L245.5,79.6 L246.5,79.4 L247.5,79.3 L248.5,79.2 L249.6,79.1 L250.6,79.1 L251.6,79.0 L252.6,78.9 L253.6,78.8 L254.6,78.8 L255.7,78.7 L256.7,78.7 L257.7,78.6 L258.7,78.6 L259.7,78.5 L260.8,78.5 L261.8,78.5 L262.8,78.4 L263.8,78.4 L264.8,78.4 L265.8,78.4 L266.9,78.4 L267.9,78.3 L268.9,78.3 L269.9,78.3 L270.9,78.3 L271.9,78.3 L273.0,78.3 L274.0,78.3 L275.0,78.3 L276.0,78.3" fill="none" stroke="var(--vang)" stroke-width="1.9" clip-path="url(#ed-cl)"/>
<path d="M32.0,216.7 L33.0,215.1 L34.0,213.6 L35.0,212.1 L36.1,210.6 L37.1,209.1 L38.1,207.6 L39.1,206.1 L40.1,204.6 L41.1,203.1 L42.2,201.7 L43.2,200.2 L44.2,198.8 L45.2,197.4 L46.2,195.9 L47.2,194.5 L48.3,193.1 L49.3,191.7 L50.3,190.4 L51.3,189.0 L52.3,187.6 L53.3,186.3 L54.4,184.9 L55.4,183.6 L56.4,182.3 L57.4,181.0 L58.4,179.7 L59.5,178.4 L60.5,177.2 L61.5,175.9 L62.5,174.7 L63.5,173.5 L64.5,172.3 L65.5,171.2 L66.6,170.0 L67.6,168.9 L68.6,167.8 L69.6,166.7 L70.6,165.6 L71.7,164.6 L72.7,163.6 L73.7,162.6 L74.7,161.6 L75.7,160.7 L76.7,159.7 L77.8,158.8 L78.8,157.9 L79.8,157.1 L80.8,156.2 L81.8,155.4 L82.8,154.5 L83.8,153.7 L84.9,153.0 L85.9,152.2 L86.9,151.4 L87.9,150.7 L88.9,150.0 L89.9,149.3 L91.0,148.6 L92.0,147.9 L93.0,147.2 L94.0,146.5 L95.0,145.9 L96.0,145.2 L97.1,144.6 L98.1,144.0 L99.1,143.3 L100.1,142.7 L101.1,142.1 L102.2,141.5 L103.2,140.9 L104.2,140.3 L105.2,139.7 L106.2,139.1 L107.2,138.5 L108.2,137.9 L109.3,137.3 L110.3,136.7 L111.3,136.1 L112.3,135.6 L113.3,135.0 L114.3,134.4 L115.4,133.8 L116.4,133.3 L117.4,132.7 L118.4,132.1 L119.4,131.6 L120.4,131.0 L121.5,130.4 L122.5,129.9 L123.5,129.3 L124.5,128.7 L125.5,128.2 L126.6,127.6 L127.6,127.1 L128.6,126.5 L129.6,126.0 L130.6,125.4 L131.6,124.9 L132.6,124.3 L133.7,123.8 L134.7,123.2 L135.7,122.7 L136.7,122.1 L137.7,121.6 L138.8,121.1 L139.8,120.5 L140.8,120.0 L141.8,119.5 L142.8,119.0 L143.8,118.4 L144.9,117.9 L145.9,117.4 L146.9,116.9 L147.9,116.4 L148.9,116.0 L149.9,115.5 L150.9,115.0 L152.0,114.5 L153.0,114.1 L154.0,113.6 L155.0,113.2 L156.0,112.8 L157.1,112.3 L158.1,111.9 L159.1,111.5 L160.1,111.1 L161.1,110.7 L162.1,110.3 L163.2,110.0 L164.2,109.6 L165.2,109.2 L166.2,108.9 L167.2,108.5 L168.2,108.2 L169.2,107.8 L170.3,107.5 L171.3,107.2 L172.3,106.9 L173.3,106.5 L174.3,106.2 L175.3,105.9 L176.4,105.6 L177.4,105.3 L178.4,105.0 L179.4,104.7 L180.4,104.4 L181.4,104.1 L182.5,103.8 L183.5,103.5 L184.5,103.2 L185.5,102.9 L186.5,102.6 L187.6,102.3 L188.6,102.0 L189.6,101.7 L190.6,101.5 L191.6,101.2 L192.6,100.9 L193.7,100.6 L194.7,100.3 L195.7,100.0 L196.7,99.7 L197.7,99.5 L198.7,99.2 L199.8,98.9 L200.8,98.6 L201.8,98.3 L202.8,98.0 L203.8,97.8 L204.8,97.5 L205.9,97.2 L206.9,96.9 L207.9,96.7 L208.9,96.4 L209.9,96.1 L210.9,95.8 L212.0,95.5 L213.0,95.3 L214.0,95.0 L215.0,94.7 L216.0,94.5 L217.0,94.2 L218.0,93.9 L219.1,93.7 L220.1,93.4 L221.1,93.1 L222.1,92.9 L223.1,92.6 L224.1,92.4 L225.2,92.1 L226.2,91.9 L227.2,91.6 L228.2,91.4 L229.2,91.1 L230.2,90.9 L231.3,90.7 L232.3,90.5 L233.3,90.3 L234.3,90.1 L235.3,89.9 L236.4,89.7 L237.4,89.5 L238.4,89.3 L239.4,89.1 L240.4,89.0 L241.4,88.8 L242.5,88.6 L243.5,88.5 L244.5,88.4 L245.5,88.3 L246.5,88.1 L247.5,88.0 L248.5,87.9 L249.6,87.8 L250.6,87.7 L251.6,87.7 L252.6,87.6 L253.6,87.5 L254.6,87.5 L255.7,87.4 L256.7,87.4 L257.7,87.3 L258.7,87.3 L259.7,87.2 L260.8,87.2 L261.8,87.2 L262.8,87.1 L263.8,87.1 L264.8,87.1 L265.8,87.1 L266.9,87.0 L267.9,87.0 L268.9,87.0 L269.9,87.0 L270.9,87.0 L271.9,87.0 L273.0,87.0 L274.0,87.0 L275.0,87.0 L276.0,86.9" fill="none" stroke="var(--chu)" stroke-width="1.9" clip-path="url(#ed-cl)"/>
<path d="M32.0,249.4 L33.0,247.9 L34.0,246.3 L35.0,244.8 L36.1,243.3 L37.1,241.8 L38.1,240.3 L39.1,238.8 L40.1,237.3 L41.1,235.9 L42.2,234.4 L43.2,233.0 L44.2,231.5 L45.2,230.1 L46.2,228.7 L47.2,227.3 L48.3,225.9 L49.3,224.5 L50.3,223.1 L51.3,221.7 L52.3,220.4 L53.3,219.0 L54.4,217.7 L55.4,216.3 L56.4,215.0 L57.4,213.7 L58.4,212.4 L59.5,211.2 L60.5,209.9 L61.5,208.7 L62.5,207.4 L63.5,206.2 L64.5,205.1 L65.5,203.9 L66.6,202.7 L67.6,201.6 L68.6,200.5 L69.6,199.4 L70.6,198.4 L71.7,197.3 L72.7,196.3 L73.7,195.3 L74.7,194.3 L75.7,193.4 L76.7,192.5 L77.8,191.5 L78.8,190.7 L79.8,189.8 L80.8,188.9 L81.8,188.1 L82.8,187.3 L83.8,186.5 L84.9,185.7 L85.9,184.9 L86.9,184.2 L87.9,183.4 L88.9,182.7 L89.9,182.0 L91.0,181.3 L92.0,180.6 L93.0,179.9 L94.0,179.3 L95.0,178.6 L96.0,178.0 L97.1,177.3 L98.1,176.7 L99.1,176.1 L100.1,175.4 L101.1,174.8 L102.2,174.2 L103.2,173.6 L104.2,173.0 L105.2,172.4 L106.2,171.8 L107.2,171.2 L108.2,170.6 L109.3,170.0 L110.3,169.5 L111.3,168.9 L112.3,168.3 L113.3,167.7 L114.3,167.1 L115.4,166.6 L116.4,166.0 L117.4,165.4 L118.4,164.9 L119.4,164.3 L120.4,163.7 L121.5,163.2 L122.5,162.6 L123.5,162.0 L124.5,161.5 L125.5,160.9 L126.6,160.4 L127.6,159.8 L128.6,159.2 L129.6,158.7 L130.6,158.1 L131.6,157.6 L132.6,157.0 L133.7,156.5 L134.7,155.9 L135.7,155.4 L136.7,154.9 L137.7,154.3 L138.8,153.8 L139.8,153.3 L140.8,152.7 L141.8,152.2 L142.8,151.7 L143.8,151.2 L144.9,150.7 L145.9,150.2 L146.9,149.7 L147.9,149.2 L148.9,148.7 L149.9,148.2 L150.9,147.7 L152.0,147.3 L153.0,146.8 L154.0,146.4 L155.0,145.9 L156.0,145.5 L157.1,145.1 L158.1,144.7 L159.1,144.3 L160.1,143.9 L161.1,143.5 L162.1,143.1 L163.2,142.7 L164.2,142.3 L165.2,142.0 L166.2,141.6 L167.2,141.3 L168.2,140.9 L169.2,140.6 L170.3,140.2 L171.3,139.9 L172.3,139.6 L173.3,139.3 L174.3,138.9 L175.3,138.6 L176.4,138.3 L177.4,138.0 L178.4,137.7 L179.4,137.4 L180.4,137.1 L181.4,136.8 L182.5,136.5 L183.5,136.2 L184.5,135.9 L185.5,135.6 L186.5,135.3 L187.6,135.0 L188.6,134.8 L189.6,134.5 L190.6,134.2 L191.6,133.9 L192.6,133.6 L193.7,133.3 L194.7,133.0 L195.7,132.8 L196.7,132.5 L197.7,132.2 L198.7,131.9 L199.8,131.6 L200.8,131.3 L201.8,131.1 L202.8,130.8 L203.8,130.5 L204.8,130.2 L205.9,129.9 L206.9,129.7 L207.9,129.4 L208.9,129.1 L209.9,128.8 L210.9,128.6 L212.0,128.3 L213.0,128.0 L214.0,127.7 L215.0,127.5 L216.0,127.2 L217.0,126.9 L218.0,126.7 L219.1,126.4 L220.1,126.1 L221.1,125.9 L222.1,125.6 L223.1,125.3 L224.1,125.1 L225.2,124.8 L226.2,124.6 L227.2,124.4 L228.2,124.1 L229.2,123.9 L230.2,123.6 L231.3,123.4 L232.3,123.2 L233.3,123.0 L234.3,122.8 L235.3,122.6 L236.4,122.4 L237.4,122.2 L238.4,122.0 L239.4,121.8 L240.4,121.7 L241.4,121.5 L242.5,121.4 L243.5,121.2 L244.5,121.1 L245.5,121.0 L246.5,120.9 L247.5,120.8 L248.5,120.7 L249.6,120.6 L250.6,120.5 L251.6,120.4 L252.6,120.3 L253.6,120.3 L254.6,120.2 L255.7,120.1 L256.7,120.1 L257.7,120.0 L258.7,120.0 L259.7,120.0 L260.8,119.9 L261.8,119.9 L262.8,119.9 L263.8,119.8 L264.8,119.8 L265.8,119.8 L266.9,119.8 L267.9,119.8 L268.9,119.7 L269.9,119.7 L270.9,119.7 L271.9,119.7 L273.0,119.7 L274.0,119.7 L275.0,119.7 L276.0,119.7" fill="none" stroke="var(--xanh)" stroke-width="1.9" clip-path="url(#ed-cl)"/>
<path d="M32.0,260.2 L33.0,258.6 L34.0,257.1 L35.0,255.6 L36.1,254.1 L37.1,252.6 L38.1,251.1 L39.1,249.6 L40.1,248.1 L41.1,246.6 L42.2,245.2 L43.2,243.7 L44.2,242.3 L45.2,240.9 L46.2,239.5 L47.2,238.0 L48.3,236.6 L49.3,235.2 L50.3,233.9 L51.3,232.5 L52.3,231.1 L53.3,229.8 L54.4,228.4 L55.4,227.1 L56.4,225.8 L57.4,224.5 L58.4,223.2 L59.5,221.9 L60.5,220.7 L61.5,219.4 L62.5,218.2 L63.5,217.0 L64.5,215.8 L65.5,214.7 L66.6,213.5 L67.6,212.4 L68.6,211.3 L69.6,210.2 L70.6,209.2 L71.7,208.1 L72.7,207.1 L73.7,206.1 L74.7,205.1 L75.7,204.2 L76.7,203.2 L77.8,202.3 L78.8,201.4 L79.8,200.6 L80.8,199.7 L81.8,198.9 L82.8,198.1 L83.8,197.3 L84.9,196.5 L85.9,195.7 L86.9,195.0 L87.9,194.2 L88.9,193.5 L89.9,192.8 L91.0,192.1 L92.0,191.4 L93.0,190.7 L94.0,190.0 L95.0,189.4 L96.0,188.7 L97.1,188.1 L98.1,187.5 L99.1,186.8 L100.1,186.2 L101.1,185.6 L102.2,185.0 L103.2,184.4 L104.2,183.8 L105.2,183.2 L106.2,182.6 L107.2,182.0 L108.2,181.4 L109.3,180.8 L110.3,180.2 L111.3,179.7 L112.3,179.1 L113.3,178.5 L114.3,177.9 L115.4,177.4 L116.4,176.8 L117.4,176.2 L118.4,175.6 L119.4,175.1 L120.4,174.5 L121.5,173.9 L122.5,173.4 L123.5,172.8 L124.5,172.3 L125.5,171.7 L126.6,171.1 L127.6,170.6 L128.6,170.0 L129.6,169.5 L130.6,168.9 L131.6,168.4 L132.6,167.8 L133.7,167.3 L134.7,166.7 L135.7,166.2 L136.7,165.6 L137.7,165.1 L138.8,164.6 L139.8,164.0 L140.8,163.5 L141.8,163.0 L142.8,162.5 L143.8,162.0 L144.9,161.4 L145.9,160.9 L146.9,160.4 L147.9,160.0 L148.9,159.5 L149.9,159.0 L150.9,158.5 L152.0,158.1 L153.0,157.6 L154.0,157.2 L155.0,156.7 L156.0,156.3 L157.1,155.9 L158.1,155.4 L159.1,155.0 L160.1,154.6 L161.1,154.2 L162.1,153.9 L163.2,153.5 L164.2,153.1 L165.2,152.7 L166.2,152.4 L167.2,152.0 L168.2,151.7 L169.2,151.4 L170.3,151.0 L171.3,150.7 L172.3,150.4 L173.3,150.0 L174.3,149.7 L175.3,149.4 L176.4,149.1 L177.4,148.8 L178.4,148.5 L179.4,148.2 L180.4,147.9 L181.4,147.6 L182.5,147.3 L183.5,147.0 L184.5,146.7 L185.5,146.4 L186.5,146.1 L187.6,145.8 L188.6,145.5 L189.6,145.2 L190.6,145.0 L191.6,144.7 L192.6,144.4 L193.7,144.1 L194.7,143.8 L195.7,143.5 L196.7,143.2 L197.7,143.0 L198.7,142.7 L199.8,142.4 L200.8,142.1 L201.8,141.8 L202.8,141.6 L203.8,141.3 L204.8,141.0 L205.9,140.7 L206.9,140.4 L207.9,140.2 L208.9,139.9 L209.9,139.6 L210.9,139.3 L212.0,139.1 L213.0,138.8 L214.0,138.5 L215.0,138.2 L216.0,138.0 L217.0,137.7 L218.0,137.4 L219.1,137.2 L220.1,136.9 L221.1,136.6 L222.1,136.4 L223.1,136.1 L224.1,135.9 L225.2,135.6 L226.2,135.4 L227.2,135.1 L228.2,134.9 L229.2,134.7 L230.2,134.4 L231.3,134.2 L232.3,134.0 L233.3,133.8 L234.3,133.6 L235.3,133.4 L236.4,133.2 L237.4,133.0 L238.4,132.8 L239.4,132.6 L240.4,132.5 L241.4,132.3 L242.5,132.2 L243.5,132.0 L244.5,131.9 L245.5,131.8 L246.5,131.6 L247.5,131.5 L248.5,131.4 L249.6,131.3 L250.6,131.3 L251.6,131.2 L252.6,131.1 L253.6,131.0 L254.6,131.0 L255.7,130.9 L256.7,130.9 L257.7,130.8 L258.7,130.8 L259.7,130.7 L260.8,130.7 L261.8,130.7 L262.8,130.6 L263.8,130.6 L264.8,130.6 L265.8,130.6 L266.9,130.6 L267.9,130.5 L268.9,130.5 L269.9,130.5 L270.9,130.5 L271.9,130.5 L273.0,130.5 L274.0,130.5 L275.0,130.5 L276.0,130.5" fill="none" stroke="var(--mau-chinh)" stroke-width="1.9" clip-path="url(#ed-cl)"/>
<line x1="32" y1="134.9" x2="276" y2="134.9" stroke="var(--chu)" stroke-width="1.6" stroke-dasharray="6 3"/>
<text x="272" y="148.4" text-anchor="end" font-size="10" font-weight="700" fill="var(--chu)">lg K'f = 8</text>
<circle cx="72.7" cy="99.8" r="3.2" fill="var(--chu)"/>
<circle cx="72.7" cy="154.9" r="3.2" fill="var(--chu)"/>
<circle cx="133.7" cy="115.1" r="3.2" fill="var(--chu)"/>
<text x="280" y="26.7" font-size="10" fill="var(--mau-chinh)" font-weight="700"><tspan>Bi</tspan><tspan dy="-3.5" font-size="8">3+</tspan></text>
<text x="280" y="41.9" font-size="10" fill="var(--xanh)" font-weight="700"><tspan>Fe</tspan><tspan dy="-3.5" font-size="8">3+</tspan></text>
<text x="280" y="77.8" font-size="10" fill="var(--vang)" font-weight="700"><tspan>Pb</tspan><tspan dy="-3.5" font-size="8">2+</tspan></text>
<text x="280" y="96.4" font-size="10" fill="var(--chu)" font-weight="700"><tspan>Zn</tspan><tspan dy="-3.5" font-size="8">2+</tspan></text>
<text x="280" y="119.2" font-size="10" fill="var(--xanh)" font-weight="700"><tspan>Ca</tspan><tspan dy="-3.5" font-size="8">2+</tspan></text>
<text x="280" y="141.0" font-size="10" fill="var(--mau-chinh)" font-weight="700"><tspan>Mg</tspan><tspan dy="-3.5" font-size="8">2+</tspan></text>
<text x="75.7" y="30" font-size="10" fill="var(--chu-phu)">pH 2</text>
<text x="136.7" y="30" font-size="10" fill="var(--chu-phu)">pH 5</text>
<text x="160" y="226" text-anchor="middle" font-size="10" fill="var(--chu)">Đường cong nằm trên vạch 8: chuẩn độ được</text>
<text x="160" y="240" text-anchor="middle" font-size="10" fill="var(--chu)">Nằm dưới vạch: không chuẩn độ được (sai số lớn)</text>
</svg>
        <p class="chu-thich">lg K<sub>f</sub>' = lg K<sub>f</sub> + lg α<sub>Y⁴⁻</sub> tăng theo pH. Ion nào có đường cong nằm trên vạch lg K<sub>f</sub>' = 8 (tức K<sub>f</sub>' = 10<sup>8</sup>) thì chuẩn độ được. Ba chấm đen: Bi<sup>3+</sup> và Pb<sup>2+</sup> ở pH 2, Pb<sup>2+</sup> ở pH 5 (Ví dụ 8).</p>
      </div>
      <p><b>Điều kiện chuẩn độ chọn lọc</b> ion M<sub>1</sub> khi có ion M<sub>2</sub>: tại pH chọn, β'<sub>1</sub> ≥ 10<sup>8</sup> và β'<sub>2</sub> &lt; 10<sup>8</sup> (M<sub>2</sub> không phản ứng). Thường hai ion cần có lg β cách nhau khoảng 5 đơn vị trở lên. Bi<sup>3+</sup>/Pb<sup>2+</sup> (cách 9,8) và Fe<sup>3+</sup>/Al<sup>3+</sup> (cách 8,7) làm được; Zn<sup>2+</sup>/Pb<sup>2+</sup> (cách 1,5) và Ca<sup>2+</sup>/Mg<sup>2+</sup> (cách 1,9) thì không làm được bằng cách chỉnh pH thông thường.</p>
      <div class="vi-du"><b>Ví dụ 8.</b> Chứng minh có thể chuẩn độ riêng Bi<sup>3+</sup> (lg β = 27,8) ở pH 2 khi có Pb<sup>2+</sup> (lg β = 18,04), rồi chuẩn độ Pb<sup>2+</sup> ở pH 5. Dùng lg α<sub>Y(H)</sub> = 13,53 ở pH 2 và 6,53 ở pH 5 (tính từ pK<sub>a</sub> như Ví dụ 7).
        <details><summary>Xem lời giải</summary>
          <b>Ở pH 2</b> (α<sub>Y⁴⁻</sub> = 10<sup>−13,53</sup> = 2,9·10<sup>−14</sup>):
          \[ \begin{aligned} \lg\beta'_\mathrm{BiY} &= 27,8 - 13,53 = 14,27 \\ \beta'_\mathrm{BiY} &= 1,9\cdot10^{14} \geq 10^{8} \\ \lg\beta'_\mathrm{PbY} &= 18,04 - 13,53 = 4,51 \\ \beta'_\mathrm{PbY} &= 3,2\cdot10^{4} < 10^{8} \end{aligned} \]
          Bi<sup>3+</sup> chuẩn độ được, Pb<sup>2+</sup> chưa phản ứng nên không cản trở.<br>
          <b>Ở pH 5</b> (α<sub>Y⁴⁻</sub> = 2,9·10<sup>−7</sup>):
          \[ \begin{aligned} \lg\beta'_\mathrm{PbY} &= 18,04 - 6,53 = 11,51 \\ \beta'_\mathrm{PbY} &= 3,2\cdot10^{11} \geq 10^{8} \end{aligned} \]
          Pb<sup>2+</sup> chuẩn độ được ở pH 5. Bi<sup>3+</sup> phải chuẩn độ trước ở pH 2, vì ở pH cao hơn Bi<sup>3+</sup> dễ thủy phân thành muối bazơ kết tủa.
        </details></div>
      <div class="vi-du"><b>Ví dụ 9.</b> Chuẩn độ hai nấc pH trong <b>cùng một dung dịch</b>: lấy 25,00 mL dung dịch chứa Bi<sup>3+</sup> và Pb<sup>2+</sup>. Ở pH 2 (chỉ thị xylenol da cam), chuẩn độ hết 12,35 mL EDTA 0,01000 M. Thêm urotropin để chỉnh lên pH 5 rồi chuẩn độ tiếp, hết thêm 17,80 mL. Tính nồng độ mỗi ion (M và mg/L; Bi = 208,98; Pb = 207,2) và [Bi<sup>3+</sup>] tự do tại điểm tương đương thứ nhất.
        <details><summary>Xem lời giải</summary>
          Nấc 1 (pH 2) chỉ có Bi<sup>3+</sup>; nấc 2 (pH 5) chỉ tính <b>thể tích thêm</b> vì Pb<sup>2+</sup>:
          \[ \begin{aligned} C_\mathrm{Bi} &= \frac{0,01000\cdot12,35}{25,00} = \mathbf{4,940\cdot10^{-3}\ M} \\ &= 1,032\cdot10^{3}\ \mathrm{mg/L} \\ C_\mathrm{Pb} &= \frac{0,01000\cdot17,80}{25,00} = \mathbf{7,120\cdot10^{-3}\ M} \\ &= 1,475\cdot10^{3}\ \mathrm{mg/L} \end{aligned} \]
          <b>[Bi<sup>3+</sup>] tại điểm tương đương 1</b>: [BiY<sup>−</sup>] = 0,01000·12,35/37,35 = 3,31·10<sup>−3</sup> M; β'<sub>BiY</sub> = 1,9·10<sup>14</sup>:
          \[ [\mathrm{Bi^{3+}}] = \sqrt{\frac{3,31\cdot10^{-3}}{1,9\cdot10^{14}}} = \mathbf{4,2\cdot10^{-9}\ M} \]
          <b>Màu</b>: ở pH 2, Bi – xylenol da cam đỏ → vàng (XO tự do). Sau khi chỉnh pH 5, Pb<sup>2+</sup> tạo phức Pb – XO nên dung dịch trở lại đỏ tím; chuẩn tiếp đến khi đỏ tím → vàng.
        </details></div>

      <h3>11. Chuẩn độ ngược: Al<sup>3+</sup> trong xi măng</h3>
      <p>Al<sup>3+</sup> không chuẩn độ trực tiếp được: phản ứng với EDTA chậm ở nhiệt độ thường, Al<sup>3+</sup> khóa xylenol da cam và dễ thủy phân ở pH chuẩn độ. Cách làm là <b>chuẩn độ ngược</b>: thêm EDTA dư đã biết chính xác, đun sôi để tạo hết AlY<sup>−</sup>, chỉnh pH 5, rồi chuẩn EDTA dư bằng Pb<sup>2+</sup>. PbY<sup>2−</sup> bền hơn AlY<sup>−</sup> nhưng AlY<sup>−</sup> trơ về động học nên Pb<sup>2+</sup> không lấy Y ra khỏi AlY<sup>−</sup> trong thời gian chuẩn độ.</p>
      <p>Trình tự tổng quát cho mẫu có Fe<sup>3+</sup> và Al<sup>3+</sup> (Ví dụ 4 dùng cho dung dịch; Ví dụ dưới là mẫu rắn):</p>
      <ol>
        <li>pH 1,8 – 2, chỉ thị acid sulfosalicylic: chuẩn độ trực tiếp <b>Fe<sup>3+</sup></b> (lg β' rất lớn, Al<sup>3+</sup> chưa phản ứng).</li>
        <li>Thêm EDTA dư (V, C biết), đun sôi, chỉnh pH 5 bằng đệm acetate hoặc urotropin: tạo AlY<sup>−</sup>.</li>
        <li>Chuẩn độ ngược EDTA dư bằng Pb<sup>2+</sup> (xylenol da cam, vàng → đỏ tím): n<sub>Al</sub> = n<sub>EDTA thêm</sub> − n<sub>Pb</sub>.</li>
      </ol>
      <div class="vi-du"><b>Ví dụ 10.</b> Hòa tan hết 0,6250 g xi măng rồi định mức thành 250,0 mL. Hút 50,00 mL: ở pH 2 (acid sulfosalicylic) chuẩn độ hết 8,60 mL EDTA 0,01000 M. Thêm tiếp 25,00 mL EDTA 0,01000 M, đun sôi, chỉnh pH 5, chuẩn độ EDTA dư bằng Pb<sup>2+</sup> 0,01020 M (xylenol da cam) hết 15,60 mL. Tính % Fe<sub>2</sub>O<sub>3</sub> và % Al<sub>2</sub>O<sub>3</sub> (M = 159,69 và 101,96).
        <details><summary>Xem lời giải</summary>
          <b>Fe<sup>3+</sup></b> (trong 50,00 mL): n = 0,01000·8,60 = 0,0860 mmol. Trong 250,0 mL: 0,0860·5 = 0,4300 mmol Fe → 0,2150 mmol Fe<sub>2</sub>O<sub>3</sub>:
          \[ \begin{aligned} \%\,\mathrm{Fe_2O_3} &= \frac{0,2150\cdot159,69}{625,0}\cdot100 \\ &= \mathbf{5,49\ \%} \end{aligned} \]
          <b>Al<sup>3+</sup></b> (trong 50,00 mL):
          \[ \begin{aligned} n_\text{thêm} &= 0,01000\cdot25,00 = 0,2500\ \mathrm{mmol} \\ n_\mathrm{Pb} &= 0,01020\cdot15,60 = 0,1591\ \mathrm{mmol} \\ n_\mathrm{Al} &= 0,2500 - 0,1591 = 0,0909\ \mathrm{mmol} \end{aligned} \]
          Trong 250,0 mL: 0,0909·5 = 0,4544 mmol Al → 0,2272 mmol Al<sub>2</sub>O<sub>3</sub> (2 Al : 1 Al<sub>2</sub>O<sub>3</sub>):
          \[ \begin{aligned} \%\,\mathrm{Al_2O_3} &= \frac{0,2272\cdot101,96}{625,0}\cdot100 \\ &= \mathbf{3,71\ \%} \end{aligned} \]
          Lượng EDTA ở bước 1 chỉ dùng cho Fe<sup>3+</sup> nên <b>không</b> tính vào n<sub>Al</sub>.
        </details></div>

      <h3>12. Bảng chỉ thị kim loại</h3>
      <p>Cột màu ghi theo thứ tự: <b>màu trước điểm tương đương</b> (phức M–In) → <b>màu sau điểm tương đương</b> (In tự do, ở pH của phép chuẩn độ).</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Chỉ thị</th><th>pH dùng</th><th>Màu</th><th>Dùng cho</th><th>Lưu ý</th></tr></thead>
          <tbody>
            <tr><td>ET-OO (eriocrom đen T)</td><td>10</td><td>đỏ nho → xanh chàm</td><td>Mg<sup>2+</sup>, Zn<sup>2+</sup>, Pb<sup>2+</sup>, tổng Ca<sup>2+</sup> + Mg<sup>2+</sup></td><td>Bị khóa bởi Cu<sup>2+</sup>, Ni<sup>2+</sup>, Fe<sup>3+</sup>, Al<sup>3+</sup></td></tr>
            <tr><td>Calmagit</td><td>10</td><td>đỏ → xanh lam</td><td>Ca<sup>2+</sup> + Mg<sup>2+</sup></td><td>Bền hơn ET-OO</td></tr>
            <tr><td>Murexit</td><td>12 – 13</td><td>đỏ → tím</td><td>Ca<sup>2+</sup> riêng</td><td>Mg<sup>2+</sup> kết tủa Mg(OH)<sub>2</sub> nên không cản</td></tr>
            <tr><td>Acid calconcarboxylic</td><td>12 – 13</td><td>đỏ → xanh lam</td><td>Ca<sup>2+</sup> riêng</td><td>Điểm cuối rõ hơn murexit</td></tr>
            <tr><td>Xylenol da cam</td><td>1 – 3 (Bi<sup>3+</sup>); 5 – 6 (Zn<sup>2+</sup>, Pb<sup>2+</sup>)</td><td>đỏ tím → vàng</td><td>Bi<sup>3+</sup>, Pb<sup>2+</sup>, Zn<sup>2+</sup></td><td>Chỉ dùng ở pH &lt; 6,4; pH 5 – 6 dùng đệm urotropin; bị Al<sup>3+</sup> khóa</td></tr>
            <tr><td>Acid sulfosalicylic</td><td>2 – 3</td><td>tím đỏ → vàng nhạt</td><td>Fe<sup>3+</sup></td><td>Chuẩn độ ở 40 – 60 °C, gần điểm cuối thêm EDTA chậm</td></tr>
            <tr><td>PAN</td><td>2 – 11 (thường pH 5 – 6)</td><td>đỏ tím → vàng lục</td><td>Cu<sup>2+</sup></td><td>Tan kém trong nước, dùng dung dịch ethanol</td></tr>
            <tr><td>Pyrocatechol tím</td><td>2 – 3</td><td>xanh lam → vàng</td><td>Bi<sup>3+</sup></td><td>Dùng ở pH thấp</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Một số tài liệu ghi PAN "đỏ → vàng", đề thi có thể ghi "tím → vàng lục". Đây là cùng chuyển màu, khác cách mô tả. Khi thi, dùng mô tả của đề.</p>

      <h3>13. Lỗi hay gặp</h3>
      <ul>
        <li><b>Nhầm chiều giữa α<sub>Y(H)</sub> và α<sub>Y⁴⁻</sub></b>: β' = β·α<sub>Y⁴⁻</sub> = β/α<sub>Y(H)</sub>. Nhân β với α<sub>Y(H)</sub> (≥ 1) làm β' lớn hơn β, vô lí.</li>
        <li><b>Quên dấu trừ khi đổi lg</b>: lg α<sub>Y(H)</sub> = 13,53 thì α<sub>Y⁴⁻</sub> = 10<sup>−13,53</sup>, không phải 10<sup>13,53</sup>.</li>
        <li><b>Dùng K<sub>f</sub> thay cho K<sub>f</sub>'</b> để kết luận chuẩn độ được: K<sub>f</sub> của Pb<sup>2+</sup> = 10<sup>18,04</sup> nhưng ở pH 2 chỉ còn 10<sup>4,51</sup>.</li>
        <li><b>Chỉ kiểm tra ion cần chuẩn độ</b>, quên kiểm tra ion cản có β' &lt; 10<sup>8</sup> ở <b>cùng pH</b> hay không (Ví dụ 8).</li>
        <li><b>Quên tổng thể tích</b> khi tính [MY] tại điểm tương đương và [M] tự do (Ví dụ 9: 25,00 + 12,35 mL).</li>
        <li><b>Chuẩn độ hai nấc</b>: dùng tổng thể tích EDTA của cả hai nấc để tính nồng độ ion thứ hai. Nấc 2 chỉ dùng phần thể tích <b>thêm</b>.</li>
        <li><b>Chuẩn độ ngược</b>: quên trừ lượng chuẩn ngược (n<sub>Al</sub> = n<sub>EDTA thêm</sub> − n<sub>Pb</sub>); cộng cả lượng EDTA đã dùng cho Fe<sup>3+</sup> vào n<sub>Al</sub>.</li>
        <li><b>Quên hệ số định mức</b> (250,0/50,00 = 5 ở Ví dụ 10) và quên đổi 2 Al → 1 Al<sub>2</sub>O<sub>3</sub>, 2 Fe → 1 Fe<sub>2</sub>O<sub>3</sub> (chia đôi).</li>
        <li><b>Dùng xylenol da cam ở pH &gt; 6,4</b>: dạng tự do chuyển sang đỏ tím, không thấy đổi màu. <b>Chuẩn độ Bi<sup>3+</sup> ở pH cao</b>: Bi<sup>3+</sup> thủy phân.</li>
        <li><b>Ca<sup>2+</sup> với ET-OO</b> không thêm MgY<sup>2−</sup>: điểm cuối không rõ. Chuẩn độ Ca<sup>2+</sup> riêng phải dùng pH 12 – 13 (murexit) để Mg<sup>2+</sup> kết tủa.</li>
        <li><b>Độ cứng</b>: quên đổi mol thành mg CaCO<sub>3</sub> (M = 100,09) hoặc quên chia cho thể tích mẫu (L).</li>
        <li><b>Nhầm điểm cuối</b>: màu trước điểm tương đương là màu phức M–In, sau điểm tương đương là màu In tự do. Ngược lại với chuẩn độ ngược bằng ion kim loại (vàng → đỏ tím).</li>
      </ul>
    `,
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "ket-tua",
    nhom: "Cân bằng và chuẩn độ",
    icon: "🧂",
    ten: "Kết tủa và chuẩn độ kết tủa",
    moTa: "Độ tan theo pH và tạo phức, đường chuẩn độ bạc, Mohr, Volhard, Fajans",
    dayDu: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Tính độ tan khi có ion chung, khi pH thay đổi; xét thứ tự kết tủa phân đoạn.</li>
          <li>Tính pAg trên đường chuẩn độ kết tủa.</li>
          <li>Nắm nguyên tắc, điều kiện và cách tính của ba phương pháp Mohr, Volhard, Fajans.</li>
                  <li>Tính độ tan khi anion nhiều nấc (PO<sub>4</sub><sup>3−</sup>, AsO<sub>4</sub><sup>3−</sup>, S<sup>2−</sup>) bị proton hóa và khi Ag<sup>+</sup> tạo phức với NH<sub>3</sub>; tính [Ag<sup>+</sup>] tự do.</li>
                  <li>Tính [Ag<sup>+</sup>] và [X<sup>−</sup>] (pAg, pX) ở mọi điểm của đường chuẩn độ; xét hỗn hợp halogenua.</li>
                  <li>Làm bài Volhard chuẩn ngược (I<sup>−</sup>, Cl<sup>−</sup>, tỉ lượng 3 : 1 của Ag<sub>3</sub>AsO<sub>4</sub>), biết khi nào phải lọc; làm bài Mohr qua bình định mức có mẫu trắng.</li>
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

      <h3>8. Độ tan khi anion nhiều nấc bị proton hóa (theo pH)</h3>
      <p><b>Vì sao phải tính α?</b> Trong dung dịch acid, một phần anion A<sup>n−</sup> do kết tủa tan ra bị H<sup>+</sup> giữ lại thành HA, H<sub>2</sub>A… Tích số tan chỉ chứa phần A<sup>n−</sup> <b>tự do</b>, còn lượng chất tan ra được tính theo <b>tổng</b> các dạng của anion. Gọi C<sub>A</sub> là tổng nồng độ các dạng của anion, thì [A<sup>n−</sup>] = α·C<sub>A</sub>.</p>
      <div class="cong-thuc"><div class="nhan">Kết tủa M<sub>m</sub>A<sub>n</sub> (S: độ tan; α: phân số của dạng A<sup>n−</sup> tự do ở pH đã cho)</div>\[ \begin{gathered} [\mathrm{M}] = mS \qquad C_\mathrm{A} = nS \qquad [\mathrm{A}] = \alpha\, nS \\ K_\mathrm{sp} = (mS)^m(\alpha\, nS)^n \\ S = \sqrt[m+n]{\frac{K_\mathrm{sp}}{m^m n^n \alpha^n}} \end{gathered} \]</div>
      <p>Phân số α của dạng anion cuối cùng, tính từ các hằng số K<sub>a</sub> của acid liên hợp (h = [H<sup>+</sup>], Chương 5, mục 4):</p>
      <div class="cong-thuc"><div class="nhan">A<sup>2−</sup> (S<sup>2−</sup>, C<sub>2</sub>O<sub>4</sub><sup>2−</sup>) và A<sup>3−</sup> (PO<sub>4</sub><sup>3−</sup>, AsO<sub>4</sub><sup>3−</sup>)</div>\[ \begin{aligned} D_2 &= h^2 + K_\mathrm{a1}h + K_\mathrm{a1}K_\mathrm{a2} \\ \alpha_{\mathrm{A^{2-}}} &= \frac{K_\mathrm{a1}K_\mathrm{a2}}{D_2} \\ D_3 &= h^3 + K_\mathrm{a1}h^2 \\ &\quad + K_\mathrm{a1}K_\mathrm{a2}h + K_\mathrm{a1}K_\mathrm{a2}K_\mathrm{a3} \\ \alpha_{\mathrm{A^{3-}}} &= \frac{K_\mathrm{a1}K_\mathrm{a2}K_\mathrm{a3}}{D_3} \end{aligned} \]</div>
      <p>Cách nhớ mẫu số: số hạng đầu chỉ có h<sup>n</sup>, mỗi số hạng sau thay bớt một h bằng một K<sub>a</sub> theo thứ tự K<sub>a1</sub>, K<sub>a2</sub>… Ở pH đã cho thường chỉ một, hai số hạng lớn hơn hẳn: bỏ các số hạng nhỏ hơn 1% số hạng lớn nhất cũng được, nhưng nên viết đủ để không sót.</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Kết tủa</th><th>K<sub>sp</sub></th><th>Acid liên hợp của anion (pK<sub>a</sub>)</th><th>Biểu thức K<sub>sp</sub> theo S</th></tr></thead>
          <tbody>
            <tr><td>MgNH<sub>4</sub>PO<sub>4</sub></td><td>3·10<sup>−13</sup></td><td>H<sub>3</sub>PO<sub>4</sub>: 2,12; 7,21; 12,32 (và NH<sub>4</sub><sup>+</sup>: 9,25)</td><td>\( S\cdot\alpha_\mathrm{NH_4}S\cdot\alpha_\mathrm{PO_4}S \)</td></tr>
            <tr><td>Ag<sub>3</sub>AsO<sub>4</sub></td><td>6·10<sup>−23</sup></td><td>H<sub>3</sub>AsO<sub>4</sub>: 2,24; 6,96; 11,50</td><td>\( (3S)^3\cdot\alpha_\mathrm{AsO_4}S = 27\,\alpha S^4 \)</td></tr>
            <tr><td>ZnS</td><td>2·10<sup>−25</sup></td><td>H<sub>2</sub>S: 7,02; ≈ 14</td><td>\( S\cdot\alpha_\mathrm{S}S \)</td></tr>
            <tr><td>MgC<sub>2</sub>O<sub>4</sub></td><td>4,8·10<sup>−6</sup></td><td>H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>: K<sub>a1</sub> = 6,5·10<sup>−2</sup>; K<sub>a2</sub> = 6,46·10<sup>−5</sup></td><td>\( S\cdot\alpha S \)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">pK<sub>a2</sub> của H<sub>2</sub>S rất không chắc chắn (14 hoặc lớn hơn), nên độ tan sulfide chỉ đáng tin về bậc độ lớn. Khi đề bài cho hằng số hoặc giá trị α, luôn dùng số của đề.</p>
      <div class="vi-du"><b>Ví dụ 7.</b> Tính độ tan của MgNH<sub>4</sub>PO<sub>4</sub> (K<sub>sp</sub> = 3·10<sup>−13</sup>) trong dung dịch đệm pH = 7,50. Cho H<sub>3</sub>PO<sub>4</sub>: pK<sub>a1</sub> = 2,12; pK<sub>a2</sub> = 7,21; pK<sub>a3</sub> = 12,32; NH<sub>4</sub><sup>+</sup>: pK<sub>a</sub> = 9,25. So sánh với độ tan trong nước tinh khiết khi bỏ qua phản ứng phụ.
        <details><summary>Xem lời giải</summary>
          Cân bằng: MgNH<sub>4</sub>PO<sub>4</sub> ⇌ Mg<sup>2+</sup> + NH<sub>4</sub><sup>+</sup> + PO<sub>4</sub><sup>3−</sup>. Cả phosphate và amoni đều bị proton hóa (amoni tạo NH<sub>3</sub> ít, phosphate tạo HPO<sub>4</sub><sup>2−</sup>, H<sub>2</sub>PO<sub>4</sub><sup>−</sup>). h = 10<sup>−7,50</sup> = 3,16·10<sup>−8</sup> M; K<sub>a1</sub> = 7,59·10<sup>−3</sup>; K<sub>a2</sub> = 6,17·10<sup>−8</sup>; K<sub>a3</sub> = 4,79·10<sup>−13</sup>.
          \[ \begin{aligned} D &= h^3 + K_\mathrm{a1}h^2 + K_\mathrm{a1}K_\mathrm{a2}h \\ &\quad + K_\mathrm{a1}K_\mathrm{a2}K_\mathrm{a3} \\ &= 3\cdot10^{-23} + 7,59\cdot10^{-18} \\ &\quad + 1,48\cdot10^{-17} + 2,2\cdot10^{-22} \\ &= 2,24\cdot10^{-17} \end{aligned} \]
          \[ \begin{aligned} \alpha_\mathrm{PO_4} &= \frac{2,24\cdot10^{-22}}{2,24\cdot10^{-17}} = 1,0\cdot10^{-5} \\ \alpha_\mathrm{NH_4} &= \frac{h}{h + K_\mathrm{a}} = 0,98 \end{aligned} \]
          Với [Mg<sup>2+</sup>] = C<sub>NH₄</sub> = C<sub>PO₄</sub> = S:
          \[ \begin{aligned} K_\mathrm{sp} &= S\cdot(0,98\,S)\cdot(1,0\cdot10^{-5}\,S) \\ S &= \sqrt[3]{\frac{3\cdot10^{-13}}{0,98\cdot1,0\cdot10^{-5}}} = \mathbf{3,1\cdot10^{-3}\ M} \end{aligned} \]
          Trong nước tinh khiết (bỏ qua phản ứng phụ): \( S = \sqrt[3]{3\cdot10^{-13}} = 6,7\cdot10^{-5} \) M. Ở pH 7,50 độ tan lớn hơn khoảng <b>47 lần</b>, vì gần như toàn bộ phosphate nằm ở dạng HPO<sub>4</sub><sup>2−</sup> và H<sub>2</sub>PO<sub>4</sub><sup>−</sup>.
        </details></div>
      <p>Tương tự, ZnS ở pH 5,00: với K<sub>a1</sub> = 9,5·10<sup>−8</sup>, K<sub>a2</sub> ≈ 10<sup>−14</sup> thì α<sub>S²⁻</sub> = 9,4·10<sup>−12</sup> và S = \( \sqrt{2\cdot10^{-25}/9,4\cdot10^{-12}} \) = 1,5·10<sup>−7</sup> M (gấp hơn 10<sup>5</sup> lần giá trị 4,5·10<sup>−13</sup> M khi bỏ qua pH). Vì vậy sulfide dễ tan trong acid mạnh hơn được dùng để tách nhóm cation: CuS, CdS, PbS kết tủa cả ở pH thấp, còn ZnS, MnS chỉ kết tủa khi pH cao.</p>

      <h3>9. Độ tan khi tạo phức</h3>
      <p>Phối tử L (NH<sub>3</sub>, CN<sup>−</sup>, S<sub>2</sub>O<sub>3</sub><sup>2−</sup>…) giữ cation M<sup>+</sup> thành phức nên [M<sup>+</sup>] tự do nhỏ hơn tổng nồng độ M trong dung dịch. Với Ag<sup>+</sup> và NH<sub>3</sub> (lg β<sub>1</sub> = 3,31; lg β<sub>2</sub> = 7,22), hệ số phản ứng phụ:</p>
      <div class="cong-thuc"><div class="nhan">C<sub>Ag</sub>: tổng nồng độ mọi dạng của bạc; [NH<sub>3</sub>]: nồng độ NH<sub>3</sub> <u>tự do</u></div>\[ \begin{gathered} \alpha_\mathrm{Ag(NH_3)} = 1 + \beta_1[\mathrm{NH_3}] + \beta_2[\mathrm{NH_3}]^2 \\ [\mathrm{Ag^+}] = \frac{C_\mathrm{Ag}}{\alpha_\mathrm{Ag(NH_3)}} \end{gathered} \]</div>
      <div class="cong-thuc"><div class="nhan">Độ tan của AgX trong NH<sub>3</sub> (S = [X<sup>−</sup>] = C<sub>Ag</sub>)</div>\[ \begin{aligned} K_\mathrm{sp} &= [\mathrm{Ag^+}][\mathrm{X^-}] = \frac{S}{\alpha}\cdot S \\ S &= \sqrt{K_\mathrm{sp}\,\alpha_\mathrm{Ag(NH_3)}} \end{aligned} \]</div>
      <p>Cách làm: (1) tính [NH<sub>3</sub>] tự do (thường coi bằng nồng độ NH<sub>3</sub> ban đầu nếu lượng Ag nhỏ so với NH<sub>3</sub>); (2) tính α; (3) tính [Ag<sup>+</sup>] tự do hoặc S; (4) so tích [Ag<sup>+</sup>][X<sup>−</sup>] với K<sub>sp</sub> để xem có kết tủa không.</p>
      <div class="vi-du"><b>Ví dụ 8.</b> (a) Tính độ tan của AgI (K<sub>sp</sub> = 8,3·10<sup>−17</sup>) và AgCl (K<sub>sp</sub> = 1,8·10<sup>−10</sup>) trong NH<sub>3</sub> 0,10 M. (b) Dung dịch chứa Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> có tổng nồng độ bạc 0,0100 M và NH<sub>3</sub> tự do 0,50 M. Tính [Ag<sup>+</sup>] tự do. Thêm Cl<sup>−</sup> 0,010 M hoặc I<sup>−</sup> 1,0·10<sup>−3</sup> M vào dung dịch đó thì có kết tủa không?
        <details><summary>Xem lời giải</summary>
          <b>(a)</b> [NH<sub>3</sub>] = 0,10 M:
          \[ \begin{aligned} \alpha &= 1 + 10^{3,31}\cdot0,10 \\ &\quad + 10^{7,22}\cdot0,10^2 \\ &= 1 + 205 + 1,66\cdot10^{5} \\ &= 1,66\cdot10^{5} \\ S_\mathrm{AgI} &= \sqrt{8,3\cdot10^{-17}\cdot1,66\cdot10^{5}} \\ &= \mathbf{3,7\cdot10^{-6}\ M} \\ S_\mathrm{AgCl} &= \sqrt{1,8\cdot10^{-10}\cdot1,66\cdot10^{5}} \\ &= \mathbf{5,5\cdot10^{-3}\ M} \end{aligned} \]
          AgCl tan trong NH<sub>3</sub> nhiều hơn AgI khoảng 1 500 lần. Với AgCl, lượng NH<sub>3</sub> bị dùng (2S ≈ 0,011 M) đã đáng kể so với 0,10 M; tính lặp với [NH<sub>3</sub>] = 0,089 M cho S ≈ 4,9·10<sup>−3</sup> M. Với AgI thì S nhỏ, coi [NH<sub>3</sub>] = 0,10 M là đúng.<br>
          <b>(b)</b> \( \alpha = 1 + 10^{3,31}\cdot0,50 + 10^{7,22}\cdot0,50^2 = 4,1\cdot10^{6} \):
          \[ [\mathrm{Ag^+}] = \frac{0,0100}{4,1\cdot10^{6}} = \mathbf{2,4\cdot10^{-9}\ M} \]
          Gần như toàn bộ bạc (99,98%) ở dạng Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>.<br>
          Với Cl<sup>−</sup>: 2,4·10<sup>−9</sup>·0,010 = 2,4·10<sup>−11</sup> &lt; 1,8·10<sup>−10</sup> → <b>không kết tủa</b> AgCl.<br>
          Với I<sup>−</sup>: 2,4·10<sup>−9</sup>·1,0·10<sup>−3</sup> = 2,4·10<sup>−12</sup> ≫ 8,3·10<sup>−17</sup> → <b>kết tủa AgI</b> (vàng).<br>
          Đây là cách phân biệt AgCl với AgI: AgCl tan trong NH<sub>3</sub> loãng, AgI không tan.
        </details></div>
      <p class="luu-y">Khi dùng CN<sup>−</sup> hoặc EDTA làm chất tạo phức cho sulfide (ví dụ CuS trong KCN), độ tan có <b>hai</b> phản ứng phụ: α của cation (tạo phức) và α của S<sup>2−</sup> (proton hóa). Khi đó K<sub>sp</sub> = S·α<sub>S²⁻</sub>·S/α<sub>M</sub>, tức S = \( \sqrt{K_\mathrm{sp}\,\alpha_\mathrm{M}/\alpha_\mathrm{S}} \).</p>

      <h3>10. Đường chuẩn độ bạc: [Ag<sup>+</sup>] và [X<sup>−</sup>] ở mọi điểm</h3>
      <p>Đề thi thường hỏi <b>cả hai</b> đại lượng, pAg và pX (pCl, pBr, pI). Hai đại lượng luôn liên hệ bởi K<sub>sp</sub> nên chỉ cần tính một, rồi suy ra cái còn lại:</p>
      <div class="cong-thuc">\[ \begin{gathered} [\mathrm{Ag^+}][\mathrm{X^-}] = K_\mathrm{sp} \\ \mathrm{pAg} + \mathrm{pX} = \mathrm{p}K_\mathrm{sp} \end{gathered} \]</div>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Vùng</th><th>Tính đại lượng nào trước</th><th>Suy ra đại lượng còn lại</th></tr></thead>
          <tbody>
            <tr><td>V &lt; V<sub>e</sub></td><td>\( [\mathrm{X^-}] = \dfrac{n_\mathrm{X} - n_\mathrm{Ag}}{V_\text{tổng}} \)</td><td>[Ag<sup>+</sup>] = K<sub>sp</sub>/[X<sup>−</sup>]</td></tr>
            <tr><td>V = V<sub>e</sub></td><td>[Ag<sup>+</sup>] = [X<sup>−</sup>] = √K<sub>sp</sub></td><td>pAg = pX = ½pK<sub>sp</sub></td></tr>
            <tr><td>V &gt; V<sub>e</sub></td><td>\( [\mathrm{Ag^+}] = \dfrac{n_\mathrm{Ag} - n_\mathrm{X}}{V_\text{tổng}} \)</td><td>[X<sup>−</sup>] = K<sub>sp</sub>/[Ag<sup>+</sup>]</td></tr>
          </tbody>
        </table>
      </div>
      <p>Công thức trên chỉ đúng khi cách V<sub>e</sub> đủ xa (lượng chất dư lớn hơn nhiều so với lượng tan ra từ kết tủa). Rất gần V<sub>e</sub> (trong khoảng ±0,1%) phải giải đủ: [Ag<sup>+</sup>] − [X<sup>−</sup>] = (n<sub>Ag</sub> − n<sub>X</sub>)/V<sub>tổng</sub>.</p>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 236" role="img" aria-label="Đường chuẩn độ pAg của Cl⁻, Br⁻, I⁻ bằng AgNO3">
<defs><marker id="mt-kt-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--chu-phu)"/></marker></defs>
<line x1="42.0" y1="180.0" x2="306.0" y2="180.0" stroke="var(--vien)" stroke-width="1"/>
<text x="37.0" y="183.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">0</text>
<line x1="42.0" y1="140.0" x2="306.0" y2="140.0" stroke="var(--vien)" stroke-width="1"/>
<text x="37.0" y="143.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">4</text>
<line x1="42.0" y1="100.0" x2="306.0" y2="100.0" stroke="var(--vien)" stroke-width="1"/>
<text x="37.0" y="103.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">8</text>
<line x1="42.0" y1="60.0" x2="306.0" y2="60.0" stroke="var(--vien)" stroke-width="1"/>
<text x="37.0" y="63.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">12</text>
<line x1="42.0" y1="20.0" x2="306.0" y2="20.0" stroke="var(--vien)" stroke-width="1"/>
<text x="37.0" y="23.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">16</text>
<text x="42.0" y="194.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">0</text>
<text x="108.0" y="194.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">25</text>
<text x="174.0" y="194.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">50</text>
<text x="240.0" y="194.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">75</text>
<text x="306.0" y="194.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">100</text>
<line x1="42.0" y1="180.0" x2="306.0" y2="180.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<line x1="42.0" y1="20.0" x2="42.0" y2="180.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="174.0" y="209.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">V(Ag⁺) thêm vào, mL</text>
<text x="42.0" y="13.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">pAg</text>
<line x1="174.0" y1="22.0" x2="174.0" y2="180.0" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="3 3"/>
<text x="174.0" y="13.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">V<tspan font-size="8" dy="2">e</tspan><tspan dy="-2"> = 50</tspan></text>
<polyline points="43.3,29.3 44.6,29.4 46.0,29.5 47.3,29.5 48.6,29.6 49.9,29.7 51.2,29.8 52.6,29.9 53.9,30.0 55.2,30.1 56.5,30.1 57.8,30.2 59.2,30.3 60.5,30.4 61.8,30.5 63.1,30.6 64.4,30.7 65.8,30.8 67.1,30.9 68.4,31.0 69.7,31.1 71.0,31.1 72.4,31.2 73.7,31.3 75.0,31.4 76.3,31.5 77.6,31.6 79.0,31.7 80.3,31.8 81.6,31.9 82.9,32.0 84.2,32.1 85.6,32.2 86.9,32.3 88.2,32.4 89.5,32.5 90.8,32.6 92.2,32.7 93.5,32.8 94.8,32.9 96.1,33.0 97.4,33.1 98.8,33.2 100.1,33.3 101.4,33.4 102.7,33.5 104.0,33.6 105.4,33.7 106.7,33.8 108.0,34.0 109.3,34.1 110.6,34.2 112.0,34.3 113.3,34.4 114.6,34.6 115.9,34.7 117.2,34.8 118.6,34.9 119.9,35.1 121.2,35.2 122.5,35.3 123.8,35.5 125.2,35.6 126.5,35.8 127.8,35.9 129.1,36.1 130.4,36.2 131.8,36.4 133.1,36.6 134.4,36.7 135.7,36.9 137.0,37.1 138.4,37.3 139.7,37.4 141.0,37.6 142.3,37.8 143.6,38.1 145.0,38.3 146.3,38.5 147.6,38.7 148.9,39.0 150.2,39.2 151.6,39.5 152.9,39.8 154.2,40.1 155.5,40.4 156.8,40.8 158.2,41.1 159.5,41.5 160.8,42.0 162.1,42.5 163.4,43.0 164.8,43.6 166.1,44.3 167.4,45.1 168.7,46.1 170.0,47.4 171.4,49.1 172.7,52.2 174.0,99.6 175.3,147.0 176.6,150.0 178.0,151.7 179.3,152.9 180.6,153.9 181.9,154.6 183.2,155.3 184.6,155.9 185.9,156.3 187.2,156.8 188.5,157.2 189.8,157.5 191.2,157.9 192.5,158.2 193.8,158.4 195.1,158.7 196.4,158.9 197.8,159.2 199.1,159.4 200.4,159.6 201.7,159.8 203.0,160.0 204.4,160.1 205.7,160.3 207.0,160.5 208.3,160.6 209.6,160.8 211.0,160.9 212.3,161.0 213.6,161.2 214.9,161.3 216.2,161.4 217.6,161.5 218.9,161.6 220.2,161.7 221.5,161.8 222.8,161.9 224.2,162.0 225.5,162.1 226.8,162.2 228.1,162.3 229.4,162.4 230.8,162.5 232.1,162.6 233.4,162.6 234.7,162.7 236.0,162.8 237.4,162.9 238.7,162.9 240.0,163.0 241.3,163.1 242.6,163.1 244.0,163.2 245.3,163.3 246.6,163.3 247.9,163.4 249.2,163.5 250.6,163.5 251.9,163.6 253.2,163.6 254.5,163.7 255.8,163.7 257.2,163.8 258.5,163.8 259.8,163.9 261.1,163.9 262.4,164.0 263.8,164.0 265.1,164.1 266.4,164.1 267.7,164.2 269.0,164.2 270.4,164.3 271.7,164.3 273.0,164.4 274.3,164.4 275.6,164.4 277.0,164.5 278.3,164.5 279.6,164.6 280.9,164.6 282.2,164.6 283.6,164.7 284.9,164.7 286.2,164.7 287.5,164.8 288.8,164.8 290.2,164.9 291.5,164.9 292.8,164.9 294.1,165.0 295.4,165.0 296.8,165.0 298.1,165.0 299.4,165.1 300.7,165.1 302.0,165.1 303.4,165.2 304.7,165.2" fill="none" stroke="var(--mau-chinh)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
<polyline points="43.3,67.4 44.6,67.5 46.0,67.6 47.3,67.7 48.6,67.8 49.9,67.8 51.2,67.9 52.6,68.0 53.9,68.1 55.2,68.2 56.5,68.3 57.8,68.4 59.2,68.5 60.5,68.5 61.8,68.6 63.1,68.7 64.4,68.8 65.8,68.9 67.1,69.0 68.4,69.1 69.7,69.2 71.0,69.3 72.4,69.4 73.7,69.5 75.0,69.5 76.3,69.6 77.6,69.7 79.0,69.8 80.3,69.9 81.6,70.0 82.9,70.1 84.2,70.2 85.6,70.3 86.9,70.4 88.2,70.5 89.5,70.6 90.8,70.7 92.2,70.8 93.5,70.9 94.8,71.0 96.1,71.1 97.4,71.2 98.8,71.3 100.1,71.4 101.4,71.5 102.7,71.6 104.0,71.8 105.4,71.9 106.7,72.0 108.0,72.1 109.3,72.2 110.6,72.3 112.0,72.4 113.3,72.6 114.6,72.7 115.9,72.8 117.2,72.9 118.6,73.1 119.9,73.2 121.2,73.3 122.5,73.5 123.8,73.6 125.2,73.8 126.5,73.9 127.8,74.1 129.1,74.2 130.4,74.4 131.8,74.5 133.1,74.7 134.4,74.9 135.7,75.0 137.0,75.2 138.4,75.4 139.7,75.6 141.0,75.8 142.3,76.0 143.6,76.2 145.0,76.4 146.3,76.6 147.6,76.9 148.9,77.1 150.2,77.4 151.6,77.6 152.9,77.9 154.2,78.2 155.5,78.6 156.8,78.9 158.2,79.3 159.5,79.7 160.8,80.1 162.1,80.6 163.4,81.1 164.8,81.7 166.1,82.4 167.4,83.2 168.7,84.2 170.0,85.5 171.4,87.3 172.7,90.3 174.0,118.7 175.3,147.0 176.6,150.0 178.0,151.7 179.3,152.9 180.6,153.9 181.9,154.6 183.2,155.3 184.6,155.9 185.9,156.3 187.2,156.8 188.5,157.2 189.8,157.5 191.2,157.9 192.5,158.2 193.8,158.4 195.1,158.7 196.4,158.9 197.8,159.2 199.1,159.4 200.4,159.6 201.7,159.8 203.0,160.0 204.4,160.1 205.7,160.3 207.0,160.5 208.3,160.6 209.6,160.8 211.0,160.9 212.3,161.0 213.6,161.2 214.9,161.3 216.2,161.4 217.6,161.5 218.9,161.6 220.2,161.7 221.5,161.8 222.8,161.9 224.2,162.0 225.5,162.1 226.8,162.2 228.1,162.3 229.4,162.4 230.8,162.5 232.1,162.6 233.4,162.6 234.7,162.7 236.0,162.8 237.4,162.9 238.7,162.9 240.0,163.0 241.3,163.1 242.6,163.1 244.0,163.2 245.3,163.3 246.6,163.3 247.9,163.4 249.2,163.5 250.6,163.5 251.9,163.6 253.2,163.6 254.5,163.7 255.8,163.7 257.2,163.8 258.5,163.8 259.8,163.9 261.1,163.9 262.4,164.0 263.8,164.0 265.1,164.1 266.4,164.1 267.7,164.2 269.0,164.2 270.4,164.3 271.7,164.3 273.0,164.4 274.3,164.4 275.6,164.4 277.0,164.5 278.3,164.5 279.6,164.6 280.9,164.6 282.2,164.6 283.6,164.7 284.9,164.7 286.2,164.7 287.5,164.8 288.8,164.8 290.2,164.9 291.5,164.9 292.8,164.9 294.1,165.0 295.4,165.0 296.8,165.0 298.1,165.0 299.4,165.1 300.7,165.1 302.0,165.1 303.4,165.2 304.7,165.2" fill="none" stroke="var(--xanh)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
<polyline points="43.3,92.6 44.6,92.7 46.0,92.8 47.3,92.9 48.6,93.0 49.9,93.1 51.2,93.2 52.6,93.2 53.9,93.3 55.2,93.4 56.5,93.5 57.8,93.6 59.2,93.7 60.5,93.8 61.8,93.9 63.1,94.0 64.4,94.0 65.8,94.1 67.1,94.2 68.4,94.3 69.7,94.4 71.0,94.5 72.4,94.6 73.7,94.7 75.0,94.8 76.3,94.9 77.6,95.0 79.0,95.1 80.3,95.1 81.6,95.2 82.9,95.3 84.2,95.4 85.6,95.5 86.9,95.6 88.2,95.7 89.5,95.8 90.8,95.9 92.2,96.0 93.5,96.1 94.8,96.2 96.1,96.3 97.4,96.4 98.8,96.5 100.1,96.7 101.4,96.8 102.7,96.9 104.0,97.0 105.4,97.1 106.7,97.2 108.0,97.3 109.3,97.4 110.6,97.6 112.0,97.7 113.3,97.8 114.6,97.9 115.9,98.0 117.2,98.2 118.6,98.3 119.9,98.4 121.2,98.6 122.5,98.7 123.8,98.9 125.2,99.0 126.5,99.1 127.8,99.3 129.1,99.4 130.4,99.6 131.8,99.8 133.1,99.9 134.4,100.1 135.7,100.3 137.0,100.4 138.4,100.6 139.7,100.8 141.0,101.0 142.3,101.2 143.6,101.4 145.0,101.6 146.3,101.9 147.6,102.1 148.9,102.3 150.2,102.6 151.6,102.9 152.9,103.2 154.2,103.5 155.5,103.8 156.8,104.1 158.2,104.5 159.5,104.9 160.8,105.3 162.1,105.8 163.4,106.4 164.8,107.0 166.1,107.6 167.4,108.5 168.7,109.5 170.0,110.7 171.4,112.5 172.7,115.5 174.0,131.3 175.3,147.0 176.6,150.0 178.0,151.7 179.3,152.9 180.6,153.9 181.9,154.6 183.2,155.3 184.6,155.9 185.9,156.3 187.2,156.8 188.5,157.2 189.8,157.5 191.2,157.9 192.5,158.2 193.8,158.4 195.1,158.7 196.4,158.9 197.8,159.2 199.1,159.4 200.4,159.6 201.7,159.8 203.0,160.0 204.4,160.1 205.7,160.3 207.0,160.5 208.3,160.6 209.6,160.8 211.0,160.9 212.3,161.0 213.6,161.2 214.9,161.3 216.2,161.4 217.6,161.5 218.9,161.6 220.2,161.7 221.5,161.8 222.8,161.9 224.2,162.0 225.5,162.1 226.8,162.2 228.1,162.3 229.4,162.4 230.8,162.5 232.1,162.6 233.4,162.6 234.7,162.7 236.0,162.8 237.4,162.9 238.7,162.9 240.0,163.0 241.3,163.1 242.6,163.1 244.0,163.2 245.3,163.3 246.6,163.3 247.9,163.4 249.2,163.5 250.6,163.5 251.9,163.6 253.2,163.6 254.5,163.7 255.8,163.7 257.2,163.8 258.5,163.8 259.8,163.9 261.1,163.9 262.4,164.0 263.8,164.0 265.1,164.1 266.4,164.1 267.7,164.2 269.0,164.2 270.4,164.3 271.7,164.3 273.0,164.4 274.3,164.4 275.6,164.4 277.0,164.5 278.3,164.5 279.6,164.6 280.9,164.6 282.2,164.6 283.6,164.7 284.9,164.7 286.2,164.7 287.5,164.8 288.8,164.8 290.2,164.9 291.5,164.9 292.8,164.9 294.1,165.0 295.4,165.0 296.8,165.0 298.1,165.0 299.4,165.1 300.7,165.1 302.0,165.1 303.4,165.2 304.7,165.2" fill="none" stroke="var(--vang)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
<text x="65.8" y="22.0" text-anchor="start" font-size="11" fill="var(--mau-chinh)" font-weight="600">I⁻</text>
<text x="65.8" y="58.0" text-anchor="start" font-size="11" fill="var(--xanh)" font-weight="600">Br⁻</text>
<text x="65.8" y="108.0" text-anchor="start" font-size="11" fill="var(--vang)" font-weight="600">Cl⁻</text>
<text x="242.6" y="108.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">Sau điểm tương đương:</text>
<text x="242.6" y="120.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">ba đường trùng nhau</text>
<line x1="242.6" y1="125.0" x2="242.6" y2="150.0" stroke="var(--chu-phu)" stroke-width="1" marker-end="url(#mt-kt-1)"/>
</svg>
        <p class="chu-thich">Chuẩn độ 50,0 mL X<sup>−</sup> 0,100 M bằng Ag<sup>+</sup> 0,100 M. K<sub>sp</sub> càng nhỏ thì đoạn đường trước V<sub>e</sub> càng cao (pAg lớn) và bước nhảy càng dài. Sau V<sub>e</sub> cả ba đường trùng nhau vì chỉ còn Ag<sup>+</sup> dư quyết định.</p>
      </div>
      <div class="vi-du"><b>Ví dụ 9.</b> Chuẩn độ 50,00 mL Br<sup>−</sup> 0,0500 M bằng Ag<sup>+</sup> 0,0500 M (K<sub>sp</sub>(AgBr) = 5,4·10<sup>−13</sup>). Tính [Ag<sup>+</sup>], pAg, [Br<sup>−</sup>] và pBr khi thêm 25,00; 50,00 và 55,00 mL Ag<sup>+</sup>.
        <details><summary>Xem lời giải</summary>
          n<sub>Br</sub> = 2,500 mmol; V<sub>e</sub> = 50,00 mL; pK<sub>sp</sub> = 12,27.<br>
          <b>25,00 mL</b> (trước V<sub>e</sub>): Br<sup>−</sup> dư = (2,500 − 1,250)/75,00 = 1,67·10<sup>−2</sup> M:
          \[ \begin{aligned} \mathrm{pBr} &= 1,78 \\ [\mathrm{Ag^+}] &= \frac{5,4\cdot10^{-13}}{1,67\cdot10^{-2}} = 3,2\cdot10^{-11}\ \mathrm{M} \\ \mathrm{pAg} &= 10,49 \end{aligned} \]
          <b>50,00 mL</b> (V<sub>e</sub>): [Ag<sup>+</sup>] = [Br<sup>−</sup>] = √(5,4·10<sup>−13</sup>) = 7,3·10<sup>−7</sup> M → pAg = pBr = <b>6,13</b>.<br>
          <b>55,00 mL</b> (sau V<sub>e</sub>): Ag<sup>+</sup> dư = (2,750 − 2,500)/105,0 = 2,38·10<sup>−3</sup> M:
          \[ \begin{aligned} \mathrm{pAg} &= 2,62 \\ [\mathrm{Br^-}] &= \frac{5,4\cdot10^{-13}}{2,38\cdot10^{-3}} = 2,3\cdot10^{-10}\ \mathrm{M} \\ \mathrm{pBr} &= 12,27 - 2,62 = 9,64 \end{aligned} \]
          Kiểm tra: ở mọi điểm pAg + pBr = 12,27.
        </details></div>
      <p><b>Hỗn hợp halogenua</b> (ví dụ I<sup>−</sup> và Cl<sup>−</sup>): kết tủa ít tan nhất (AgI) hình thành trước; AgCl chỉ bắt đầu xuất hiện khi [Ag<sup>+</sup>] = K<sub>sp</sub>(AgCl)/[Cl<sup>−</sup>]. Lúc đó lượng I<sup>−</sup> còn lại là</p>
      <div class="cong-thuc">\[ \begin{aligned} [\mathrm{I^-}] &= [\mathrm{Cl^-}]\cdot\frac{K_\mathrm{sp}(\mathrm{AgI})}{K_\mathrm{sp}(\mathrm{AgCl})} \\ &= [\mathrm{Cl^-}]\cdot4,6\cdot10^{-7} \end{aligned} \]</div>
      <p>Tỉ số K<sub>sp</sub> rất nhỏ nên I<sup>−</sup> đã kết tủa gần như hoàn toàn: có hai bước nhảy tách biệt, V<sub>e1</sub> ứng với I<sup>−</sup>, V<sub>e2</sub> ứng với tổng I<sup>−</sup> + Cl<sup>−</sup>. Ví dụ 25,00 mL chứa I<sup>−</sup> 0,0400 M và Cl<sup>−</sup> 0,0600 M chuẩn bằng Ag<sup>+</sup> 0,1000 M: V<sub>e1</sub> = 1,000/0,1000 = 10,00 mL; V<sub>e2</sub> = (1,000 + 1,500)/0,1000 = 25,00 mL. Tại V<sub>e1</sub>, [Cl<sup>−</sup>] = 1,500/35,00 = 0,0429 M nên I<sup>−</sup> còn lại chỉ khoảng 2·10<sup>−8</sup> M.</p>

      <h3>11. Volhard nâng cao: chuẩn ngược, tỉ lượng 3 : 1, lọc hay không lọc</h3>
      <p><b>Vì sao có chỗ phải lọc, có chỗ không?</b> Điều quyết định là kết tủa bạc ban đầu có bị SCN<sup>−</sup> làm tan không. Phản ứng chuyển AgX + SCN<sup>−</sup> ⇌ AgSCN + X<sup>−</sup> có hằng số K = K<sub>sp</sub>(AgX)/K<sub>sp</sub>(AgSCN), với K<sub>sp</sub>(AgSCN) = 1,1·10<sup>−12</sup>:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Kết tủa</th><th>K<sub>sp</sub></th><th>K = K<sub>sp</sub>/K<sub>sp</sub>(AgSCN)</th><th>Kết luận khi chuẩn ngược</th></tr></thead>
          <tbody>
            <tr><td>AgCl</td><td>1,8·10<sup>−10</sup></td><td>≈ 160 (≫ 1)</td><td>AgCl bị SCN<sup>−</sup> lấy Ag<sup>+</sup>: điểm cuối phai, tốn dư SCN<sup>−</sup>. <b>Phải lọc</b> hoặc bọc bằng nitrobenzen.</td></tr>
            <tr><td>AgBr</td><td>5,4·10<sup>−13</sup></td><td>≈ 0,5</td><td>Chuyển hóa không đáng kể vì [SCN<sup>−</sup>] tại điểm cuối rất nhỏ: không cần lọc.</td></tr>
            <tr><td>AgI</td><td>8,3·10<sup>−17</sup></td><td>≈ 8·10<sup>−5</sup></td><td>AgI bền hơn AgSCN rất nhiều: <b>không lọc</b>. Chỉ thêm Fe<sup>3+</sup> sau khi Ag<sup>+</sup> đã dư, vì Fe<sup>3+</sup> oxi hóa I<sup>−</sup>.</td></tr>
            <tr><td>Ag<sub>3</sub>AsO<sub>4</sub></td><td>6·10<sup>−23</sup></td><td>—</td><td>Trong HNO<sub>3</sub> arsenate bị proton hóa nên kết tủa tan, giải phóng thêm Ag<sup>+</sup> làm sai kết quả: <b>phải lọc</b> ở pH trung tính trước rồi mới acid hóa nước lọc.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Với arsenate, ion AsO<sub>4</sub><sup>3−</sup> kết tủa Ag<sup>+</sup> theo tỉ lượng <b>3 : 1</b>: 3Ag<sup>+</sup> + AsO<sub>4</sub><sup>3−</sup> → Ag<sub>3</sub>AsO<sub>4</sub>(r), nên n<sub>As</sub> = n<sub>Ag đã dùng</sub>/3. Một mol As<sub>2</sub>O<sub>3</sub> cho 2 mol As, nên n<sub>As₂O₃</sub> = n<sub>As</sub>/2.</p>
      <div class="vi-du"><b>Ví dụ 10.</b> Lấy 5,00 mL dung dịch KI, pha thành 100,0 mL. Hút 10,00 mL dung dịch đó, thêm 25,00 mL AgNO<sub>3</sub> 0,1000 M (dư), rồi thêm chỉ thị Fe<sup>3+</sup> và chuẩn Ag<sup>+</sup> dư hết 14,80 mL KSCN 0,0900 M. (a) Tính nồng độ KI trong mẫu ban đầu. (b) Ngay sau khi thêm AgNO<sub>3</sub> (trước khi chuẩn độ ngược), tính pAg và pI của dung dịch (K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>).
        <details><summary>Xem lời giải</summary>
          <b>(a)</b>
          \[ \begin{aligned} n_\mathrm{Ag^+,\,thêm} &= 0,1000\cdot25,00 = 2,500\ \mathrm{mmol} \\ n_\mathrm{Ag^+,\,dư} &= 0,0900\cdot14,80 = 1,332\ \mathrm{mmol} \\ n_\mathrm{I^-} &= 2,500 - 1,332 = 1,168\ \mathrm{mmol} \end{aligned} \]
          Đây là lượng trong 10,00 mL hút ra. Nhân hệ số pha loãng 100,0/10,00 = 10 rồi chia cho 5,00 mL mẫu:
          \[ C_\mathrm{KI} = \frac{1,168\cdot10}{5,00} = \mathbf{2,336\ M} \]
          <b>(b)</b> Sau khi thêm Ag<sup>+</sup> dư, thể tích 10,00 + 25,00 = 35,00 mL và Ag<sup>+</sup> dư là 1,332 mmol:
          \[ \begin{aligned} [\mathrm{Ag^+}] &= \frac{1,332}{35,00} = 3,81\cdot10^{-2}\ \mathrm{M} \\ \mathrm{pAg} &= \mathbf{1,42} \\ \mathrm{pI} &= 16,08 - 1,42 = \mathbf{14,66} \end{aligned} \]
          Không cần lọc AgI. Lỗi thường gặp: quên hệ số 10 (pha loãng) hoặc dùng 5,00 mL thay cho 10,00 mL.
        </details></div>
      <div class="vi-du"><b>Ví dụ 11.</b> Hòa tan 2,000 g mẫu quặng, chuyển toàn bộ arsenic thành AsO<sub>4</sub><sup>3−</sup> rồi thêm 25,00 mL AgNO<sub>3</sub> 0,1000 M ở pH trung tính để kết tủa Ag<sub>3</sub>AsO<sub>4</sub>. Lọc bỏ kết tủa, acid hóa nước lọc bằng HNO<sub>3</sub>, chuẩn Ag<sup>+</sup> dư hết 9,35 mL KSCN 0,1000 M. Tính % As<sub>2</sub>O<sub>3</sub> trong mẫu (M = 197,84 g/mol).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} n_\mathrm{Ag}^{\text{dùng}} &= 2,500 - 0,935 = 1,565\ \mathrm{mmol} \\ n_\mathrm{As} &= \frac{1,565}{3} = 0,5217\ \mathrm{mmol} \\ n_\mathrm{As_2O_3} &= \frac{0,5217}{2} = 0,2608\ \mathrm{mmol} \\ m_\mathrm{As_2O_3} &= 0,2608\cdot197,84 = 51,60\ \mathrm{mg} \end{aligned} \]
          \[ \%\mathrm{As_2O_3} = \frac{0,05160}{2,000}\cdot100\% = \mathbf{2,58\ \%} \]
          Nếu dùng nhầm tỉ lượng 1 : 1 (n<sub>As</sub> = n<sub>Ag</sub>) sẽ ra 7,74%, gấp 3 lần.
        </details></div>

      <h3>12. Mohr nâng cao: qua bình định mức, mẫu trắng, sai số chỉ thị</h3>
      <p>Với mẫu đặc như nước mắm, ta pha loãng trong bình định mức rồi mới hút một phần (aliquot) để chuẩn độ. Các bước tính luôn theo thứ tự: (1) trừ mẫu trắng; (2) n<sub>Cl</sub> trong aliquot = C<sub>Ag</sub>·V<sub>thực</sub>; (3) nhân hệ số V<sub>bình</sub>/V<sub>aliquot</sub>; (4) chia cho thể tích mẫu ban đầu; (5) đổi sang g/L hoặc mg/100 mL.</p>
      <p><b>Sai số chỉ thị</b>: Ag<sub>2</sub>CrO<sub>4</sub> chỉ bắt đầu kết tủa khi [Ag<sup>+</sup>] = \( \sqrt{K_\mathrm{sp}/[\mathrm{CrO_4^{2-}}]} \). Với [CrO<sub>4</sub><sup>2−</sup>] = 5·10<sup>−3</sup> M: [Ag<sup>+</sup>] = 1,5·10<sup>−5</sup> M, hơi cao hơn [Ag<sup>+</sup>] tại điểm tương đương (√K<sub>sp</sub>(AgCl) = 1,3·10<sup>−5</sup> M), lúc đó [Cl<sup>−</sup>] = 1,2·10<sup>−5</sup> M. Thêm nữa cần một lượng Ag<sub>2</sub>CrO<sub>4</sub> đủ nhiều để mắt thấy: đó là lí do điểm cuối luôn muộn một chút và phải trừ mẫu trắng.</p>
      <div class="vi-du"><b>Ví dụ 12.</b> Lấy 5,00 mL nước mắm pha thành 250,0 mL. Hút 5,00 mL dung dịch đó, thêm nước và chỉ thị K<sub>2</sub>CrO<sub>4</sub>, chuẩn bằng AgNO<sub>3</sub> 0,02500 M hết 17,40 mL. Mẫu trắng (CaCO<sub>3</sub> + chỉ thị) tốn 0,15 mL. Tính nồng độ NaCl trong nước mắm theo g/L (M = 58,44 g/mol).
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} V_\text{thực} &= 17,40 - 0,15 \\ &= 17,25\ \mathrm{mL} \\ n_\text{aliquot} &= 0,02500\cdot17,25 \\ &= 0,4313\ \mathrm{mmol} \\ n_\text{mẫu} &= 0,4313\cdot\frac{250,0}{5,00} \\ &= 21,56\ \mathrm{mmol} \end{aligned} \]
          \[ \begin{aligned} C_\mathrm{NaCl} &= \frac{21,56}{5,00} = 4,313\ \mathrm{M} \\ &= 4,313\cdot58,44 = \mathbf{252\ g/L} \end{aligned} \]
          Kết quả hợp lí: nước mắm thường chứa khoảng 200 – 300 g/L NaCl. Nếu quên trừ mẫu trắng sẽ ra 254 g/L (cao hơn khoảng 0,9%). Nếu quên hệ số pha loãng 250,0/5,00 sẽ ra kết quả nhỏ hơn 50 lần.
        </details></div>

      <h3>13. Lỗi hay gặp</h3>
      <ul>
        <li><b>Nhầm chiều của α</b>: α ≤ 1 nên S = √(K<sub>sp</sub>/α) <b>lớn hơn</b> độ tan bỏ qua pH. Nếu ra nhỏ hơn thì đã nhân thay vì chia.</li>
        <li><b>Dùng sai số nấc</b>: α của PO<sub>4</sub><sup>3−</sup> cần cả K<sub>a1</sub>K<sub>a2</sub>K<sub>a3</sub> ở tử số; dùng K<sub>a3</sub> một mình hoặc quên K<sub>a1</sub> trong mẫu số làm α sai nhiều bậc.</li>
        <li><b>Kết tủa M<sub>3</sub>A</b> (Ag<sub>3</sub>AsO<sub>4</sub>): [Ag<sup>+</sup>] = 3S chứ không phải S; K<sub>sp</sub> = 27αS<sup>4</sup>, không phải S<sup>2</sup>.</li>
        <li><b>Tạo phức</b>: dùng nồng độ NH<sub>3</sub> tổng thay cho NH<sub>3</sub> <b>tự do</b> khi NH<sub>3</sub> bị dùng đáng kể (Ví dụ 8a với AgCl); quên rằng [Ag<sup>+</sup>] tự do = C<sub>Ag</sub>/α, không phải C<sub>Ag</sub>.</li>
        <li><b>Quên tổng thể tích</b> khi tính pAg, pX trên đường chuẩn độ (Ví dụ 9: 75,00 và 105,0 mL).</li>
        <li><b>Quên tính cả hai ion</b>: đề hỏi pBr mà chỉ tính pAg (hoặc ngược lại); nhớ pAg + pX = pK<sub>sp</sub>.</li>
        <li><b>Volhard</b>: không lọc AgCl hoặc Ag<sub>3</sub>AsO<sub>4</sub> trước khi chuẩn ngược; thêm Fe<sup>3+</sup> quá sớm khi có I<sup>−</sup>; quên rằng lượng Ag<sup>+</sup> đã dùng = tổng thêm − lượng SCN<sup>−</sup> chuẩn ngược.</li>
        <li><b>Tỉ lượng</b>: dùng 1 : 1 cho Ag<sub>3</sub>AsO<sub>4</sub> (đúng là 3 : 1); quên chia 2 khi đổi mol As sang As<sub>2</sub>O<sub>3</sub>.</li>
        <li><b>Mohr</b>: quên trừ mẫu trắng; quên hệ số pha loãng V<sub>bình</sub>/V<sub>aliquot</sub>; làm ở pH acid (điểm cuối muộn) hoặc có NH<sub>3</sub> mà không hạ pH về 6,5 – 7,2.</li>
        <li><b>Đơn vị</b>: mmol hay mol; mL hay L; g/L hay mg/100 mL (1 g/L = 100 mg/100 mL).</li>
      </ul>

    `,
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "oxi-hoa-khu",
    nhom: "Cân bằng và chuẩn độ",
    icon: "⚡",
    ten: "Oxi hóa – khử và chuẩn độ",
    moTa: "Thế khử chuẩn, Nernst, thế điều kiện, đường chuẩn độ, chỉ thị, KMnO₄ – Cr₂O₇²⁻ – iod",
    dayDu: true,
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
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "hieu-chuan",
    nhom: "Phân tích công cụ",
    icon: "📈",
    ten: "Các phương pháp hiệu chuẩn",
    moTa: "Đường chuẩn, bình phương tối thiểu, độ không đảm bảo, thêm chuẩn, nội chuẩn, QA/QC",
    dayDu: true,
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
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "uv-vis",
    nhom: "Phân tích công cụ",
    icon: "🌈",
    ten: "Quang phổ UV-Vis và huỳnh quang",
    moTa: "Bức xạ điện từ, định luật Beer, sai lệch, cách đo, hỗn hợp, huỳnh quang",
    dayDu: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Đổi qua lại bước sóng, tần số, số sóng, năng lượng photon.</li>
          <li>Dùng định luật Beer để tính nồng độ, ε, độ truyền qua; đổi kết quả sang ppm; phân tích hỗn hợp hai chất hấp thụ; dùng thêm chuẩn khi cần.</li>
          <li>Biết các nguyên nhân sai lệch định luật Beer, khoảng đo tối ưu theo A, cách đo chính xác và nguyên tắc của huỳnh quang phân tử.</li>
        </ul>
      </div>
      <h3>1. Các phương pháp phổ</h3>
      <p>Phương pháp phổ dựa trên tương tác giữa bức xạ điện từ và vật chất. Các phương pháp chính:</p>
      <ul>
        <li><b>Hấp thụ phân tử UV – Vis</b> (chương này).</li>
        <li><b>Huỳnh quang phân tử</b> (mục 11).</li>
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
        <li><b>Phát quang</b>: phân tử ở trạng thái kích thích trở về trạng thái cơ bản và phát ra photon. Nếu trạng thái kích thích tạo ra do hấp thụ ánh sáng thì gọi là <b>quang phát quang</b> (huỳnh quang, lân quang — mục 11); nếu do phản ứng hóa học thì gọi là <b>hóa phát quang</b>.</li>
        <li><b>Phát xạ</b>: nguyên tử, phân tử được kích thích bằng nhiệt (ngọn lửa, plasma) rồi phát bức xạ (Chương 12).</li>
      </ul>
      <p>Màu của dung dịch là <b>màu phụ</b> (bù) của màu ánh sáng bị hấp thụ — xem bảng và vòng màu ở mục 4.</p>

      <h3>4. Màu sắc dung dịch và vòng màu bù</h3>
      <p>Ánh sáng trắng gồm đủ các màu. Khi dung dịch hấp thụ một vùng bước sóng, phần ánh sáng còn lại truyền qua tạo ra <b>màu quan sát được</b> — đúng bằng màu <b>bù</b> (complementary) của màu bị hấp thụ.</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Bước sóng hấp thụ (nm)</th><th>Màu hấp thụ</th><th>Màu quan sát (màu bù)</th></tr></thead>
          <tbody>
            <tr><td>400 – 435</td><td>Tím</td><td>Vàng lục</td></tr>
            <tr><td>435 – 480</td><td>Lam</td><td>Vàng</td></tr>
            <tr><td>480 – 490</td><td>Lam lục</td><td>Cam</td></tr>
            <tr><td>490 – 500</td><td>Lục lam</td><td>Đỏ</td></tr>
            <tr><td>500 – 560</td><td>Lục</td><td>Đỏ tía (đỏ cánh sen)</td></tr>
            <tr><td>560 – 580</td><td>Vàng lục</td><td>Tím</td></tr>
            <tr><td>580 – 595</td><td>Vàng</td><td>Lam</td></tr>
            <tr><td>595 – 650</td><td>Cam</td><td>Lục lam</td></tr>
            <tr><td>650 – 750</td><td>Đỏ</td><td>Lam lục (cyan)</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Bảng trên chỉ để <b>đoán màu</b> — không dùng để tính toán. Muốn định lượng vẫn phải đo A ở đúng λ<sub>max</sub> của chất, không suy từ màu mắt thấy.</p>

      <div class="hinh-tinh">
        <svg viewBox="0 0 300 250" role="img" aria-label="Vòng màu hấp thụ, 9 dải đúng theo bảng ở trên">
          <path d="M140,128 L140.0,64.0 A64,64 0 0 1 181.1,79.0 Z" fill="#7c3aed" stroke="none"/>
          <path d="M140,128 L181.1,79.0 A64,64 0 0 1 203.0,116.9 Z" fill="#2563eb" stroke="none"/>
          <path d="M140,128 L203.0,116.9 A64,64 0 0 1 195.4,160.0 Z" fill="#0891b2" stroke="none"/>
          <path d="M140,128 L195.4,160.0 A64,64 0 0 1 161.9,188.1 Z" fill="#06b6d4" stroke="none"/>
          <path d="M140,128 L161.9,188.1 A64,64 0 0 1 118.1,188.1 Z" fill="#16a34a" stroke="none"/>
          <path d="M140,128 L118.1,188.1 A64,64 0 0 1 84.6,160.0 Z" fill="#84cc16" stroke="none"/>
          <path d="M140,128 L84.6,160.0 A64,64 0 0 1 77.0,116.9 Z" fill="#eab308" stroke="none"/>
          <path d="M140,128 L77.0,116.9 A64,64 0 0 1 98.9,79.0 Z" fill="#f97316" stroke="none"/>
          <path d="M140,128 L98.9,79.0 A64,64 0 0 1 140.0,64.0 Z" fill="#dc2626" stroke="none"/>
          <circle cx="140" cy="128" r="64" fill="none" stroke="var(--the)" stroke-width="2"/>
          <text x="168.0" y="50.9" font-size="10" fill="var(--chu)">Tím</text>
          <text x="168.0" y="61.9" font-size="10" fill="var(--chu-phu)">400-435</text>
          <text x="211.0" y="87.0" font-size="10" fill="var(--chu)">Lam</text>
          <text x="211.0" y="98.0" font-size="10" fill="var(--chu-phu)">435-480</text>
          <text x="220.8" y="142.2" font-size="10" fill="var(--chu)">Lam lục</text>
          <text x="220.8" y="153.2" font-size="10" fill="var(--chu-phu)">480-490</text>
          <text x="192.7" y="190.8" font-size="10" fill="var(--chu)">Lục lam</text>
          <text x="192.7" y="201.8" font-size="10" fill="var(--chu-phu)">490-500</text>
          <text x="140.0" y="214" text-anchor="middle" font-size="10" fill="var(--chu)">Lục</text>
          <text x="140.0" y="225" text-anchor="middle" font-size="10" fill="var(--chu-phu)">500-560</text>
          <text x="87.3" y="190.8" text-anchor="end" font-size="10" fill="var(--chu)">Vàng lục</text>
          <text x="87.3" y="201.8" text-anchor="end" font-size="10" fill="var(--chu-phu)">560-580</text>
          <text x="59.2" y="142.2" text-anchor="end" font-size="10" fill="var(--chu)">Vàng</text>
          <text x="59.2" y="153.2" text-anchor="end" font-size="10" fill="var(--chu-phu)">580-595</text>
          <text x="69.0" y="87.0" text-anchor="end" font-size="10" fill="var(--chu)">Cam</text>
          <text x="69.0" y="98.0" text-anchor="end" font-size="10" fill="var(--chu-phu)">595-650</text>
          <text x="112.0" y="50.9" text-anchor="end" font-size="10" fill="var(--chu)">Đỏ</text>
          <text x="112.0" y="61.9" text-anchor="end" font-size="10" fill="var(--chu-phu)">650-750</text>
        </svg>
        <p class="chu-thich">Vòng xếp đúng 9 dải màu hấp thụ như bảng ở trên (theo chiều bước sóng tăng dần). Muốn biết màu <b>quan sát được</b> (màu bù) khi chất hấp thụ ở một dải, tra cột thứ ba của bảng.</p>
      </div>

      <h3>5. Độ truyền qua, độ hấp thụ và định luật Beer</h3>
      <p>Chùm sáng đơn sắc có cường độ P<sub>0</sub> đi qua dung dịch, ra khỏi dung dịch còn cường độ P.</p>
      <div class="cong-thuc"><div class="nhan">Độ truyền qua T và độ hấp thụ A</div>\[ \begin{gathered} T = \frac{P}{P_0} \qquad \%T = 100\,T \\ A = -\lg T = \lg\frac{P_0}{P} = 2 - \lg\%T \end{gathered} \]</div>
      <div class="cong-thuc"><div class="nhan">Định luật Beer (ε: hệ số hấp thụ mol, M<sup>−1</sup>cm<sup>−1</sup>; b: bề dày cuvet, cm; C: nồng độ, M)</div>\[ A = \varepsilon bC \]</div>
      <ul>
        <li>ε đặc trưng cho từng chất và <b>phụ thuộc bước sóng</b>. Phổ hấp thụ là đồ thị A (hoặc ε) theo λ.</li>
        <li>Thường đo ở <b>λ<sub>max</sub></b> (đỉnh hấp thụ): độ nhạy cao nhất, và A ít thay đổi khi λ lệch chút ít (đỉnh phổ "phẳng" hơn hai bên sườn).</li>
        <li><b>Tính cộng tính</b>: dung dịch có nhiều chất hấp thụ thì A = Σε<sub>i</sub>bC<sub>i</sub> ở mỗi bước sóng.</li>
        <li><b>Điều kiện áp dụng</b>: bức xạ đơn sắc; dung dịch loãng (thường ≲ 0,01 M); dung dịch trong, không tán xạ; chất hấp thụ không tham gia cân bằng hay tương tác làm đổi dạng hấp thụ.</li>
      </ul>

      <div class="hinh-tinh">
        <svg viewBox="0 0 320 180" role="img" aria-label="Phổ hấp thụ minh họa, đo ở đỉnh λmax">
          <line x1="40" y1="150" x2="300" y2="150" stroke="var(--vien)" stroke-width="1.5"/>
          <line x1="40" y1="150" x2="40" y2="15" stroke="var(--vien)" stroke-width="1.5"/>
          <path d="M40,150 C70,150 80,130 92,111 C104,92 120,42 135,29 C150,16 165,60 179,99 C193,138 215,150 250,150 L300,150" fill="none" stroke="var(--mau-chinh)" stroke-width="2.2"/>
          <line x1="135" y1="29" x2="135" y2="150" stroke="var(--chu-phu)" stroke-width="1.3" stroke-dasharray="3 3"/>
          <text x="140" y="24" font-size="10" font-weight="600" fill="var(--chu)">λ<tspan baseline-shift="sub" font-size="7">max</tspan> ≈ 510 nm</text>
          <line x1="203" y1="93" x2="184" y2="103" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="2 2"/>
          <text x="207" y="92" font-size="10" fill="var(--chu-phu)">sườn phổ</text>
          <text x="40" y="164" text-anchor="middle" font-size="10" fill="var(--chu-phu)">400</text>
          <text x="127" y="164" text-anchor="middle" font-size="10" fill="var(--chu-phu)">500</text>
          <text x="213" y="164" text-anchor="middle" font-size="10" fill="var(--chu-phu)">600</text>
          <text x="300" y="164" text-anchor="middle" font-size="10" fill="var(--chu-phu)">700</text>
          <text x="296" y="177" text-anchor="end" font-size="10" fill="var(--chu-phu)">λ (nm)</text>
          <text x="11" y="85" text-anchor="middle" transform="rotate(-90 11 85)" font-size="10" fill="var(--chu-phu)">A</text>
          <text x="34" y="153" text-anchor="end" font-size="10" fill="var(--chu-phu)">0</text>
          <text x="34" y="88" text-anchor="end" font-size="10" fill="var(--chu-phu)">0,5</text>
          <text x="34" y="23" text-anchor="end" font-size="10" fill="var(--chu-phu)">1,0</text>
        </svg>
        <p class="chu-thich">Đo ở λ<sub>max</sub> vì ở đó ε lớn nhất (nhạy nhất) và đường cong gần như nằm ngang — sai số do lệch bước sóng một vài nm gần như không ảnh hưởng đến A.</p>
      </div>

      <div class="vi-du"><b>Ví dụ 2.</b> Dung dịch có A = 0,450 trong cuvet 1,00 cm, ε = 1,50·10<sup>4</sup> M<sup>−1</sup>cm<sup>−1</sup>. Tính C và %T.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} C &= \frac{A}{\varepsilon b} = \frac{0,450}{1,50\cdot10^{4}\cdot1,00} \\ &= \mathbf{3,00\cdot10^{-5}\ M} \\ \%T &= 100\cdot10^{-0,450} = \mathbf{35,5\%} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 3.</b> Dung dịch chuẩn 2,00·10<sup>−5</sup> M của một chất có A = 0,312 trong cuvet 1,00 cm. Tính ε. Mẫu cùng chất đo trong cuvet 2,00 cm có A = 0,540; tính nồng độ mẫu.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} \varepsilon &= \frac{0,312}{1,00\cdot2,00\cdot10^{-5}} \\ &= 1,56\cdot10^{4}\ \mathrm{M^{-1}cm^{-1}} \\ C &= \frac{0,540}{1,56\cdot10^{4}\cdot2,00} \\ &= \mathbf{1,73\cdot10^{-5}\ M} \end{aligned} \]
          Lỗi hay gặp: quên bề dày cuvet mới là 2,00 cm.
        </details></div>
      <div class="vi-du"><b>Ví dụ 4.</b> Hòa tan 4,0 mg một chất X (M = 220 g/mol) thành 100,0 mL dung dịch. Đo trong cuvet 1,00 cm được %T = 43,0%. Tính A và ε của X.
        <details><summary>Xem lời giải</summary>
          \[ A = 2 - \lg43,0 = \mathbf{0,367} \]
          \[ C = \frac{4,0\cdot10^{-3}/220}{0,1000} = 1,8\cdot10^{-4}\ \mathrm{M} \]
          \[ \begin{aligned} \varepsilon &= \frac{A}{bC} = \frac{0,367}{1,00\cdot1,8\cdot10^{-4}} \\ &= \mathbf{2,0\cdot10^{3}\ M^{-1}cm^{-1}} \end{aligned} \]
          Lỗi hay gặp: tính C bằng mg/L rồi chia thẳng cho A để ra "ε" — phải đổi sang <b>mol/L</b> trước vì ε có đơn vị M<sup>−1</sup>cm<sup>−1</sup>; giữ đúng 2 chữ số có nghĩa vì 4,0 mg chỉ có 2 CSCN.
        </details></div>
      <div class="vi-du"><b>Ví dụ 5.</b> Dung dịch caffeine 50,0 mg/L (M = 194,19 g/mol) đo trong cuvet 1,00 cm được A = 2,439. Tính ε. Phép đo này có đáng tin không?
        <details><summary>Xem lời giải</summary>
          \[ C = \frac{50,0\cdot10^{-3}}{194,19} = 2,575\cdot10^{-4}\ \mathrm{M} \]
          \[ \begin{aligned} \varepsilon &= \frac{2,439}{1,00\cdot2,575\cdot10^{-4}} \\ &= \mathbf{9,47\cdot10^{3}\ M^{-1}cm^{-1}} \end{aligned} \]
          A = 2,439 tương ứng %T ≈ 0,36% — quá thấp, hầu như không còn ánh sáng tới detector: sai số của phép đo này rất lớn (mục 7). Nên <b>pha loãng mẫu</b> (ví dụ 10 lần) để A rơi vào khoảng 0,2 – 0,8 rồi đo lại.
        </details></div>
      <div class="vi-du"><b>Ví dụ 6.</b> NO<sub>3</sub><sup>−</sup> trong nước ngầm được xác định trực tiếp ở 220 nm (đã hiệu chỉnh nền hữu cơ), ε = 7,24·10<sup>3</sup> M<sup>−1</sup>cm<sup>−1</sup>. Mẫu đo trong cuvet 1,00 cm có A = 0,256. Tính nồng độ NO<sub>3</sub><sup>−</sup> (M = 62,00) theo M và theo ppm.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} C &= \frac{A}{\varepsilon b} = \frac{0,256}{7,24\cdot10^{3}\cdot1,00} \\ &= \mathbf{3,54\cdot10^{-5}\ M} \end{aligned} \]
          \[ \begin{aligned} \mathrm{ppm} &= C\cdot M\cdot10^{3} \\ &= 3,536\cdot10^{-5}\cdot62,00\cdot10^{3} \\ &= \mathbf{2,19\ ppm} \end{aligned} \]
        </details></div>
      <p class="luu-y"><b>Lỗi hay gặp:</b> dùng nhầm công thức A = −lg(43,0) thay vì A = 2 − lg(%T) (bỏ quên đổi %T sang T = %T/100); tính ε hoặc C bằng mg/L thay vì đổi sang mol/L; cộng trừ trực tiếp hai giá trị %T (chỉ có A mới cộng tính, %T thì không); quên nhân hệ số pha loãng đã thực hiện trước khi đo; đọc nhầm chiều A2/A1 khi so hai phép đo cùng chất.</p>

      <h3>6. Sai lệch khỏi định luật Beer</h3>
      <ul>
        <li><b>Dung dịch quá đặc</b> (thường &gt; 0,01 M): các phân tử tương tác với nhau, ε thay đổi.</li>
        <li><b>Nguyên nhân hóa học</b>: chất hấp thụ tham gia cân bằng (kết hợp, phân li, cân bằng acid – base, phản ứng với dung môi), nên nồng độ dạng hấp thụ không tỉ lệ với tổng nồng độ. Ví dụ một chỉ thị acid – base có dạng acid và base liên hợp hấp thụ khác nhau: nếu pH dung dịch trôi trong lúc đo, tỉ lệ hai dạng đổi theo, làm A đo được không còn tỉ lệ thẳng với tổng nồng độ chỉ thị — vì vậy phải đo trong dung dịch đệm ổn định pH.</li>
        <li><b>Nguyên nhân thiết bị</b>: ánh sáng không thật đơn sắc (nhất là khi đo ở sườn dốc của phổ, xem hình ở mục 5); <b>ánh sáng lạc</b> (stray light) lọt vào detector làm A đo được thấp hơn thực tế ở A cao. Ví dụ máy có 0,5% ánh sáng lạc thì %T đo được không bao giờ xuống dưới khoảng 0,5%, nên A đo được không thể vượt quá A ≈ lg(100/0,5) ≈ 2,3 dù dung dịch có đặc đến đâu — đường Beer "gãy" ở vùng A cao.</li>
      </ul>

      <h3>7. Sai số phép đo trắc quang theo A</h3>
      <p>Với một sai số đọc %T tuyệt đối cố định của máy (thường lấy s<sub>T</sub> ≈ 0,44%T là giá trị điển hình), sai số tương đối của nồng độ tính ra phụ thuộc vào A theo một đường cong hình chữ U, nhỏ nhất khi %T ≈ 36,8% (tức A ≈ 0,43):</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>%T</th><th>A</th><th>Sai số tương đối của C</th></tr></thead>
          <tbody>
            <tr><td>10%</td><td>1,00</td><td>1,9%</td></tr>
            <tr><td>20%</td><td>0,70</td><td>1,4%</td></tr>
            <tr><td>36,8%</td><td>0,43</td><td>1,2% (nhỏ nhất)</td></tr>
            <tr><td>63%</td><td>0,20</td><td>1,5%</td></tr>
            <tr><td>80%</td><td>0,10</td><td>2,5%</td></tr>
            <tr><td>90%</td><td>0,05</td><td>4,6%</td></tr>
          </tbody>
        </table>
      </div>
      <p class="luu-y">Vì lí do này, thực hành thường pha loãng hoặc cô đặc mẫu (đổi cuvet, đổi thể tích định mức) để A rơi vào khoảng <b>0,2 – 0,8</b> (một số tài liệu ghi rộng hơn, 0,3 – 2); A quá thấp thì tín hiệu quá yếu so với nhiễu nền, A quá cao thì gần hết ánh sáng tới detector (mục 6) — cả hai đầu đều làm sai số tương đối tăng vọt.</p>

      <h3>8. Máy quang phổ và cách đo</h3>
      <p><b>Sơ đồ</b>: nguồn sáng → bộ đơn sắc → cuvet → detector → bộ xử lí.</p>
      <div class="mo-phong" data-loai="uv-vis"></div>
      <div class="mo-phong" data-loai="anh-that" data-anh="may-uv-vis,cuvet"></div>
      <ul>
        <li>Nguồn: đèn deuteri (vùng UV), đèn wolfram – halogen (vùng Vis).</li>
        <li>Bộ đơn sắc: cách tử. Detector: ống nhân quang, dãy diode (đo cả phổ một lúc).</li>
        <li>Máy <b>một chùm tia</b>: đo mẫu trắng và mẫu lần lượt tại cùng một vị trí cuvet — rẻ, nhưng nếu cường độ nguồn trôi giữa hai lần đo thì sai số. Máy <b>hai chùm tia</b>: tách chùm sáng thành hai đường (mẫu và trắng) đo gần như đồng thời, tự bù được dao động của nguồn và thường có sẵn khả năng quét phổ nhanh.</li>
        <li><b>Cuvet</b>: thạch anh (dùng được cả UV); thủy tinh, nhựa (chỉ vùng Vis); NaCl, KBr (vùng IR); cuvet 10 cm cho mẫu khí.</li>
      </ul>
      <p><b>Cách đo</b>: chọn bước sóng; đặt cuvet chứa <b>mẫu trắng</b> để đo P<sub>0</sub> (chỉnh A = 0); thay bằng cuvet chứa mẫu để đo P.</p>
      <p class="luu-y"><b>Để đo chính xác</b>: đo trong khoảng <b>A ≈ 0,2 – 0,8</b> (mục 7); đóng kín buồng đo; lọc bỏ hạt lơ lửng; cầm cuvet ở mặt nhám hoặc bằng giấy mềm, lau sạch mặt quang học; đặt cuvet đúng chiều, lặp lại vị trí.</p>
      <p>Chất không hấp thụ hoặc hấp thụ yếu có thể cho phản ứng với <b>thuốc thử tạo màu</b> rồi đo:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Thuốc thử</th><th>Xác định</th><th>Màu phức</th><th>λ<sub>max</sub></th></tr></thead>
          <tbody>
            <tr><td>1,10-Phenanthrolin</td><td>Fe<sup>2+</sup></td><td>Đỏ cam</td><td>510 nm</td></tr>
            <tr><td>Brucin (hoặc acid phenoldisulfonic)</td><td>NO<sub>3</sub><sup>−</sup></td><td>Vàng</td><td>~410 nm</td></tr>
            <tr><td>Phenol + hypoclorit (phương pháp indophenol)</td><td>NH<sub>4</sub><sup>+</sup>/NH<sub>3</sub></td><td>Xanh lam (indophenol)</td><td>~630 nm</td></tr>
            <tr><td>SCN<sup>−</sup> (thiocyanat)</td><td>Fe<sup>3+</sup></td><td>Đỏ máu (FeSCN<sup>2+</sup>)</td><td>~480 nm</td></tr>
            <tr><td>1,5-Diphenylcarbazide</td><td>Cr(VI) (CrO<sub>4</sub><sup>2−</sup>)</td><td>Tím đỏ</td><td>~540 nm</td></tr>
            <tr><td>DPD (N,N-diethyl-p-phenylenediamin)</td><td>Cl<sub>2</sub> dư trong nước</td><td>Hồng</td><td>~515 nm</td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 7.</b> <i>(Thêm chuẩn trong bình định mức, xem thêm Chương 10)</i> Lấy hai bình định mức 50,0 mL. Bình 1: 10,00 mL mẫu nước chứa Fe<sup>2+</sup>, tạo phức với phenanthrolin, định mức, đo được A<sub>1</sub> = 0,216. Bình 2: 10,00 mL mẫu như trên + 5,00 mL dung dịch chuẩn Fe<sup>2+</sup> 10,0 ppm, cùng thuốc thử, định mức tới cùng 50,0 mL, đo được A<sub>2</sub> = 0,402. Tính nồng độ Fe<sup>2+</sup> trong mẫu gốc (ppm).
        <details><summary>Xem lời giải</summary>
          Vì hai bình có cùng thể tích cuối và cùng bề dày cuvet, A tỉ lệ thẳng với nồng độ tại thời điểm đo. Gọi C<sub>x</sub> là nồng độ mẫu gốc:
          \[ \frac{A_1}{C_\mathrm{x}V_\mathrm{x}} = \frac{A_2}{C_\mathrm{x}V_\mathrm{x} + C_\mathrm{s}V_\mathrm{s}} \]
          \[ \Rightarrow\ C_\mathrm{x} = \frac{C_\mathrm{s}V_\mathrm{s}A_1}{(A_2-A_1)V_\mathrm{x}} \]
          \[ \begin{aligned} C_\mathrm{x} &= \frac{10,0\cdot5,00\cdot0,216}{(0,402-0,216)\cdot10,00} \\ &= \mathbf{5,81\ ppm} \end{aligned} \]
          Lỗi hay gặp: quên rằng hai bình phải được định mức tới <b>cùng một thể tích cuối</b> — nếu không, phải đưa V<sub>bình</sub> vào công thức.
        </details></div>

      <h3>9. Phân tích hỗn hợp hai chất</h3>
      <p>Hỗn hợp X và Y có phổ chồng lên nhau: đo A ở hai bước sóng λ' và λ'', biết ε của từng chất ở từng bước sóng (từ dung dịch chuẩn riêng), rồi giải hệ hai phương trình:</p>
      <div class="cong-thuc">\[ \begin{aligned} A' &= \varepsilon_\mathrm{X}'b[\mathrm{X}] + \varepsilon_\mathrm{Y}'b[\mathrm{Y}] \\ A'' &= \varepsilon_\mathrm{X}''b[\mathrm{X}] + \varepsilon_\mathrm{Y}''b[\mathrm{Y}] \end{aligned} \]</div>
      <p>Nên chọn hai bước sóng mà ở đó hai chất có ε chênh nhau nhiều (mỗi chất hấp thụ mạnh ở một bước sóng).</p>
      <div class="vi-du"><b>Ví dụ 8.</b> Hai chất X, Y có ε (M<sup>−1</sup>cm<sup>−1</sup>): ở λ': ε<sub>X</sub> = 16 440, ε<sub>Y</sub> = 3 990; ở λ'': ε<sub>X</sub> = 3 870, ε<sub>Y</sub> = 6 420. Hỗn hợp đo trong cuvet 1,000 cm có A' = 0,957 và A'' = 0,559. Tính [X] và [Y].
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} 0,957 &= 16\,440[\mathrm{X}] + 3\,990[\mathrm{Y}] \\ 0,559 &= 3\,870[\mathrm{X}] + 6\,420[\mathrm{Y}] \end{aligned} \]
          Giải hệ (ví dụ bằng định thức):
          \[ \begin{aligned} D &= 16\,440\cdot6\,420 - 3\,990\cdot3\,870 \\ &= 9,01\cdot10^{7} \\ [\mathrm{X}] &= \frac{0,957\cdot6\,420 - 0,559\cdot3\,990}{D} \\ &= \mathbf{4,34\cdot10^{-5}\ M} \\ [\mathrm{Y}] &= \frac{16\,440\cdot0,559 - 3\,870\cdot0,957}{D} \\ &= \mathbf{6,09\cdot10^{-5}\ M} \end{aligned} \]
        </details></div>
      <div class="vi-du"><b>Ví dụ 9.</b> <i>(Tự tính ε từ chuẩn riêng rồi giải hỗn hợp)</i> Chuẩn X 3,00·10<sup>−5</sup> M cho A' = 0,522 ở λ' và A'' = 0,129 ở λ''. Chuẩn Y 4,00·10<sup>−5</sup> M cho A' = 0,152 ở λ' và A'' = 0,284 ở λ'' (cuvet 1,00 cm cho cả bốn phép đo). Hỗn hợp X, Y đo được A' = 0,610 và A'' = 0,390. Tính [X] và [Y] trong hỗn hợp.
        <details><summary>Xem lời giải</summary>
          Tính ε từ mỗi chuẩn riêng (ε = A/(bC)):
          \[ \begin{gathered} \varepsilon_\mathrm{X}' = \frac{0,522}{3,00\cdot10^{-5}} = 17\,400 \\ \varepsilon_\mathrm{X}'' = \frac{0,129}{3,00\cdot10^{-5}} = 4\,300 \\ \varepsilon_\mathrm{Y}' = \frac{0,152}{4,00\cdot10^{-5}} = 3\,800 \\ \varepsilon_\mathrm{Y}'' = \frac{0,284}{4,00\cdot10^{-5}} = 7\,100 \end{gathered} \]
          Giải hệ như Ví dụ 8:
          \[ \begin{aligned} 0,610 &= 17\,400[\mathrm{X}] + 3\,800[\mathrm{Y}] \\ 0,390 &= 4\,300[\mathrm{X}] + 7\,100[\mathrm{Y}] \end{aligned} \]
          \[ \begin{aligned} D &= 17\,400\cdot7\,100 - 3\,800\cdot4\,300 \\ &= 1,072\cdot10^{8} \end{aligned} \]
          \[ \begin{aligned} [\mathrm{X}] &= \frac{0,610\cdot7\,100 - 0,390\cdot3\,800}{D} \\ &= \mathbf{2,66\cdot10^{-5}\ M} \end{aligned} \]
          \[ \begin{aligned} [\mathrm{Y}] &= \frac{17\,400\cdot0,390 - 4\,300\cdot0,610}{D} \\ &= \mathbf{3,88\cdot10^{-5}\ M} \end{aligned} \]
        </details></div>
      <p class="luu-y">Muốn biết tỉ lệ mol chính xác của phức tạo thành (ví dụ M : L trong phức kim loại — thuốc thử) mà chưa biết trước, có thể dùng <b>phương pháp Job</b> (phương pháp biến thiên liên tục): pha một dãy dung dịch giữ tổng số mol (C<sub>M</sub> + C<sub>L</sub>) không đổi nhưng đổi tỉ lệ mol từng cặp, đo A của mỗi dung dịch ở λ<sub>max</sub> của phức; đỉnh của đồ thị A theo phần mol x<sub>M</sub> = C<sub>M</sub>/(C<sub>M</sub>+C<sub>L</sub>) cho biết tỉ lệ mol trong phức (đỉnh ở x<sub>M</sub> = 1/3 ứng với phức ML<sub>2</sub>, đỉnh ở x<sub>M</sub> = 1/2 ứng với ML).</p>

      <h3>10. Chuẩn độ trắc quang</h3>
      <p>Thay vì chỉ đo A của một dung dịch, có thể vừa chuẩn độ vừa đo A sau mỗi lần thêm chất chuẩn (chất phân tích, chất chuẩn hoặc sản phẩm phải hấp thụ ánh sáng ở bước sóng đo). Vẽ đồ thị A (đã hiệu chỉnh pha loãng) theo V<sub>chuẩn</sub>: đồ thị gồm hai đoạn thẳng có độ dốc khác nhau, giao điểm của hai đoạn kéo dài là <b>điểm tương đương</b>.</p>
      <div class="cong-thuc"><div class="nhan">Hiệu chỉnh pha loãng khi thể tích tăng đáng kể (V<sub>0</sub>: thể tích ban đầu; V: thể tích đã thêm)</div>\[ A_\text{hiệu chỉnh} = A_\text{đo được}\cdot\frac{V_0+V}{V_0} \]</div>
      <p class="luu-y">Ưu điểm so với chuẩn độ dùng chỉ thị màu: xác định điểm tương đương bằng đồ thị (ngoại suy hai đoạn thẳng) nên chính xác hơn ở gần điểm tương đương, không cần chọn chỉ thị đổi màu đúng lúc; dùng được cả khi chưa có bước nhảy rõ (phản ứng không hoàn toàn).</p>

      <h3>11. Huỳnh quang và lân quang</h3>
      <p>Phân tử hấp thụ photon lên trạng thái kích thích, mất bớt một phần năng lượng dưới dạng nhiệt (dao động) rồi phát photon khi trở về trạng thái cơ bản. Vì mất bớt năng lượng, <b>bức xạ phát ra có bước sóng dài hơn</b> bức xạ kích thích.</p>
      <ul>
        <li><b>Huỳnh quang</b>: phát xạ rất nhanh (cỡ ns), tắt ngay khi ngừng chiếu sáng; xảy ra giữa hai trạng thái cùng độ bội spin (singlet – singlet).</li>
        <li><b>Lân quang</b>: phát xạ chậm (ms đến vài phút), qua trạng thái kích thích có spin khác (triplet) nhờ <b>chuyển hệ</b> (intersystem crossing).</li>
      </ul>

      <div class="hinh-tinh">
        <svg viewBox="0 0 320 200" role="img" aria-label="Giản đồ Jablonski">
          <line x1="30" y1="175" x2="290" y2="175" stroke="var(--chu)" stroke-width="2.4"/>
          <text x="18" y="179" text-anchor="end" font-size="10.5" font-weight="600" fill="var(--chu)">S₀</text>
          <line x1="40" y1="55" x2="160" y2="55" stroke="var(--chu)" stroke-width="2.2"/>
          <text x="30" y="59" text-anchor="end" font-size="10.5" font-weight="600" fill="var(--chu)">S₁</text>
          <line x1="40" y1="37" x2="160" y2="37" stroke="var(--chu-phu)" stroke-width="1.4"/>
          <line x1="40" y1="95" x2="160" y2="95" stroke="var(--chu)" stroke-width="2.2"/>
          <text x="30" y="99" text-anchor="end" font-size="10.5" font-weight="600" fill="var(--chu)">T₁</text>
          <defs>
            <marker id="mt-uv-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--mau-chinh)"/>
            </marker>
            <marker id="mt-uv-2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--xanh)"/>
            </marker>
            <marker id="mt-uv-3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--vang)"/>
            </marker>
            <marker id="mt-uv-4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--chu)"/>
            </marker>
            <marker id="mt-uv-5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--chu-phu)"/>
            </marker>
          </defs>
          <line x1="65" y1="175" x2="65" y2="39" stroke="var(--mau-chinh)" stroke-width="2.2" marker-end="url(#mt-uv-1)"/>
          <path d="M65,37 L61,41 L69,45 L61,49 L69,53 L65,55" fill="none" stroke="var(--chu-phu)" stroke-width="1.3" stroke-dasharray="2 2" marker-end="url(#mt-uv-5)"/>
          <line x1="95" y1="55" x2="95" y2="173" stroke="var(--xanh)" stroke-width="2.2" marker-end="url(#mt-uv-2)"/>
          <line x1="130" y1="57" x2="130" y2="93" stroke="var(--chu)" stroke-width="1.6" stroke-dasharray="3 2" marker-end="url(#mt-uv-4)"/>
          <line x1="150" y1="95" x2="150" y2="173" stroke="var(--vang)" stroke-width="2" stroke-dasharray="1 2.5" marker-end="url(#mt-uv-3)"/>
        </svg>
        <div style="display:flex;flex-wrap:wrap;gap:8px 14px;margin-top:6px;font-size:11px;color:var(--chu-phu)">
          <span><i style="display:inline-block;width:10px;height:10px;background:var(--mau-chinh);border-radius:2px;vertical-align:-1px;margin-right:4px"></i>Hấp thụ</span>
          <span><i style="display:inline-block;width:10px;height:10px;background:var(--chu-phu);border-radius:2px;vertical-align:-1px;margin-right:4px"></i>Giãn động (mất nhiệt)</span>
          <span><i style="display:inline-block;width:10px;height:10px;background:var(--xanh);border-radius:2px;vertical-align:-1px;margin-right:4px"></i>Huỳnh quang</span>
          <span><i style="display:inline-block;width:10px;height:10px;background:var(--chu);border-radius:2px;vertical-align:-1px;margin-right:4px"></i>Chuyển hệ (ISC)</span>
          <span><i style="display:inline-block;width:10px;height:10px;background:var(--vang);border-radius:2px;vertical-align:-1px;margin-right:4px"></i>Lân quang</span>
        </div>
        <p class="chu-thich">Hấp thụ đưa phân tử lên mức dao động cao của S₁; phân tử giãn động (mất nhiệt) về đáy S₁ rồi mới phát huỳnh quang — vì vậy huỳnh quang luôn có bước sóng dài hơn ánh sáng kích thích. Lân quang qua T₁ nên chậm và có bước sóng dài hơn huỳnh quang.</p>
      </div>

      <div class="cong-thuc"><div class="nhan">Cường độ huỳnh quang ở nồng độ thấp (Φ: hiệu suất lượng tử; P<sub>0</sub>: công suất chiếu tới)</div>\[ I = k\,\Phi\,P_0\,C \]</div>
      <ul>
        <li>Detector đặt vuông góc với chùm kích thích nên đo tín hiệu trên nền tối: <b>nhạy hơn</b> đo hấp thụ nhiều bậc.</li>
        <li><b>Chọn lọc hơn</b>: chọn được cả bước sóng kích thích và bước sóng phát xạ.</li>
        <li>Tín hiệu tỉ lệ với P<sub>0</sub>: tăng cường độ nguồn thì tăng độ nhạy (điều không làm được với đo hấp thụ).</li>
        <li>Chỉ tuyến tính ở nồng độ thấp; nồng độ cao bị tự hấp thụ và <b>dập tắt</b> (quenching, mục dưới).</li>
      </ul>
      <p><b>Hai loại phổ huỳnh quang</b>: <b>phổ kích thích</b> (excitation spectrum) là đồ thị cường độ phát xạ (đo ở một λ<sub>phát xạ</sub> cố định) theo λ kích thích quét qua — hình dạng gần giống phổ hấp thụ UV-Vis của chất đó, dùng để chọn bước sóng kích thích tối ưu. <b>Phổ phát xạ</b> (emission spectrum) là đồ thị cường độ theo λ phát xạ khi giữ λ kích thích cố định (thường ở λ<sub>kích thích, max</sub>) — dùng để chọn bước sóng đo và luôn nằm ở vùng bước sóng dài hơn phổ kích thích.</p>
      <p><b>Dập tắt huỳnh quang</b> (quenching): cường độ huỳnh quang giảm khi có mặt một chất khác (chất dập tắt, ví dụ O<sub>2</sub> hòa tan, I<sup>−</sup>, ion kim loại nặng) do va chạm làm phân tử kích thích mất năng lượng không phát xạ (dập tắt động, va chạm) hoặc do tạo phức không huỳnh quang với chất phân tích (dập tắt tĩnh). Đây vừa là <b>hạn chế</b> (làm nồng độ cao lệch khỏi tuyến tính, mục trên) vừa là <b>nguyên tắc đo</b> của một số phương pháp (đo độ giảm huỳnh quang để định lượng chất dập tắt, ví dụ cảm biến oxy hòa tan).</p>

      <div class="hinh-tinh">
        <svg viewBox="0 0 320 165" role="img" aria-label="Sơ đồ máy đo huỳnh quang, detector đặt vuông góc 90° với chùm kích thích">
          <rect x="152" y="2" width="96" height="32" rx="6" fill="var(--nen)" stroke="var(--xanh)" stroke-width="1.5"/>
          <text x="200" y="22" text-anchor="middle" font-size="10" font-weight="600" fill="var(--chu)">Detector</text>
          <line x1="200" y1="34" x2="200" y2="48" stroke="var(--xanh)" stroke-width="2"/>
          <rect x="164" y="48" width="72" height="36" rx="6" fill="var(--nen)" stroke="var(--xanh)" stroke-width="1.5"/>
          <text x="200" y="63" text-anchor="middle" font-size="9.5" fill="var(--chu)">Đơn sắc</text>
          <text x="200" y="75" text-anchor="middle" font-size="9.5" fill="var(--chu)">phát xạ</text>
          <line x1="200" y1="84" x2="200" y2="98" stroke="var(--xanh)" stroke-width="2"/>
          <text x="207" y="94" font-size="9.5" fill="var(--xanh)">90°</text>
          <rect x="16" y="101" width="46" height="34" rx="6" fill="var(--nen)" stroke="var(--mau-chinh)" stroke-width="1.5"/>
          <text x="39" y="122" text-anchor="middle" font-size="10" fill="var(--chu)">Nguồn</text>
          <line x1="62" y1="118" x2="98" y2="118" stroke="var(--mau-chinh)" stroke-width="2"/>
          <rect x="98" y="98" width="56" height="40" rx="6" fill="var(--nen)" stroke="var(--mau-chinh)" stroke-width="1.5"/>
          <text x="126" y="115" text-anchor="middle" font-size="9.5" fill="var(--chu)">Đơn sắc</text>
          <text x="126" y="127" text-anchor="middle" font-size="9.5" fill="var(--chu)">kích thích</text>
          <line x1="154" y1="118" x2="184" y2="118" stroke="var(--mau-chinh)" stroke-width="2"/>
          <rect x="184" y="98" width="32" height="40" fill="none" stroke="var(--chu-phu)" stroke-width="1.6"/>
          <text x="200" y="152" text-anchor="middle" font-size="10" fill="var(--chu-phu)">Cuvet</text>
          <line x1="216" y1="118" x2="260" y2="118" stroke="var(--vien)" stroke-width="2" stroke-dasharray="3 3"/>
          <text x="264" y="121" font-size="9.5" fill="var(--chu-phu)">(không đo)</text>
        </svg>
        <p class="chu-thich">Detector đặt vuông góc (90°) với chùm kích thích nên không "nhìn" thẳng vào nguồn — chỉ thu ánh sáng phát xạ, đo được tín hiệu nhỏ trên nền tối gần như bằng 0, nhạy hơn nhiều so với đo hấp thụ (đo P trên nền P₀ lớn).</p>
      </div>

      <p><b>Ứng dụng</b>: xác định Se trong hạt ngũ cốc. Mẫu được phá bằng HNO<sub>3</sub> trong lò vi sóng; Se(VI) được khử về Se(IV) bằng NH<sub>2</sub>OH; Se(IV) phản ứng với thuốc thử tạo dẫn xuất huỳnh quang; kích thích ở 378 nm, đo phát xạ ở 518 nm; đường chuẩn tuyến tính đến khoảng 0,1 µg/mL.</p>
`,
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "quang-nguyen-tu",
    nhom: "Phân tích công cụ",
    icon: "🔥",
    ten: "Quang phổ nguyên tử",
    moTa: "Nguyên tử hóa (ngọn lửa, lò graphit, ICP), AAS, AES, cản trở, ICP-MS",
    dayDu: true,
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
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "dien-hoa",
    nhom: "Phân tích công cụ",
    icon: "🔋",
    ten: "Điện hóa: điện cực và đo thế",
    moTa: "Pin điện hóa, điện cực so sánh và chỉ thị, ISE, đo pH, chuẩn độ điện thế, điện lượng",
    dayDu: true,
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
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "sac-ki",
    nhom: "Phân tích công cụ",
    icon: "📉",
    ten: "Sắc kí đại cương",
    moTa: "Pha tĩnh – pha động, cơ chế, t_R, k, N, H, Rs, α, Van Deemter, định lượng",
    dayDu: true,
    lyThuyet: String.raw`
      <div class="muc-tieu"><b>Sau chương này bạn cần:</b>
        <ul>
          <li>Hiểu nguyên tắc tách sắc kí, các cơ chế tương tác và cách phân loại.</li>
          <li>Tính các đại lượng trên sắc đồ: t<sub>R</sub>, t<sub>R</sub>', k, α, N, H, R<sub>s</sub>.</li>
          <li>Giải thích sự giãn rộng pic bằng phương trình Van Deemter và biết cách cải thiện độ phân giải.</li>
                  <li>Đọc sắc đồ có chú thích; giải thích hệ số 16 và 5,55; tính N trung bình từ nhiều pic.</li>
                  <li>Dùng phương trình Purnell để chọn cách cải thiện R<sub>s</sub>; so sánh Van Deemter của GC và HPLC.</li>
                  <li>Định lượng bằng diện tích pic với đường chuẩn và tính % khối lượng.</li>
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

      <h3>8. Đọc sắc đồ có chú thích</h3>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 254" role="img" aria-label="Sắc đồ có chú thích t_m, t_R, w, w1/2, h">
<defs><marker id="mt-sk-1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--chu)"/></marker></defs>
<polyline points="24.0,176.0 25.0,176.0 26.0,176.0 27.0,176.0 28.0,176.0 29.0,176.0 30.0,176.0 31.0,176.0 32.0,176.0 33.0,176.0 34.0,176.0 35.0,176.0 36.0,176.0 37.0,176.0 38.0,176.0 39.0,176.0 40.0,176.0 41.0,176.0 42.0,176.0 43.0,176.0 44.0,176.0 45.0,176.0 46.0,176.0 47.0,176.0 48.0,175.9 49.0,175.8 50.0,175.7 51.0,175.3 52.0,174.7 53.0,173.8 54.0,172.3 55.0,170.0 56.0,166.9 57.0,162.9 58.0,157.9 59.0,152.3 60.0,146.4 61.0,140.8 62.0,136.1 63.0,133.1 64.0,132.0 65.0,133.1 66.0,136.1 67.0,140.8 68.0,146.4 69.0,152.3 70.0,157.9 71.0,162.9 72.0,166.9 73.0,170.0 74.0,172.3 75.0,173.8 76.0,174.7 77.0,175.3 78.0,175.7 79.0,175.8 80.0,175.9 81.0,176.0 82.0,176.0 83.0,176.0 84.0,176.0 85.0,176.0 86.0,176.0 87.0,176.0 88.0,176.0 89.0,176.0 90.0,176.0 91.0,176.0 92.0,176.0 93.0,176.0 94.0,176.0 95.0,176.0 96.0,176.0 97.0,176.0 98.0,176.0 99.0,176.0 100.0,176.0 101.0,176.0 102.0,176.0 103.0,176.0 104.0,176.0 105.0,176.0 106.0,176.0 107.0,176.0 108.0,176.0 109.0,176.0 110.0,176.0 111.0,176.0 112.0,176.0 113.0,176.0 114.0,176.0 115.0,176.0 116.0,176.0 117.0,176.0 118.0,176.0 119.0,176.0 120.0,176.0 121.0,176.0 122.0,176.0 123.0,175.9 124.0,175.9 125.0,175.9 126.0,175.8 127.0,175.7 128.0,175.6 129.0,175.4 130.0,175.2 131.0,174.9 132.0,174.5 133.0,173.9 134.0,173.2 135.0,172.3 136.0,171.1 137.0,169.7 138.0,167.9 139.0,165.7 140.0,163.1 141.0,160.0 142.0,156.4 143.0,152.2 144.0,147.4 145.0,142.1 146.0,136.2 147.0,129.7 148.0,122.9 149.0,115.6 150.0,108.2 151.0,100.7 152.0,93.2 153.0,86.1 154.0,79.3 155.0,73.3 156.0,68.0 157.0,63.7 158.0,60.6 159.0,58.7 160.0,58.0 161.0,58.7 162.0,60.6 163.0,63.7 164.0,68.0 165.0,73.3 166.0,79.3 167.0,86.1 168.0,93.2 169.0,100.7 170.0,108.2 171.0,115.6 172.0,122.9 173.0,129.7 174.0,136.2 175.0,142.1 176.0,147.4 177.0,152.2 178.0,156.4 179.0,160.0 180.0,163.1 181.0,165.7 182.0,167.9 183.0,169.7 184.0,171.1 185.0,172.3 186.0,173.2 187.0,173.9 188.0,174.5 189.0,174.9 190.0,175.2 191.0,175.4 192.0,175.5 193.0,175.6 194.0,175.7 195.0,175.7 196.0,175.7 197.0,175.6 198.0,175.5 199.0,175.3 200.0,175.1 201.0,174.9 202.0,174.5 203.0,174.1 204.0,173.5 205.0,172.8 206.0,171.9 207.0,170.8 208.0,169.5 209.0,168.0 210.0,166.2 211.0,164.1 212.0,161.7 213.0,158.9 214.0,155.8 215.0,152.3 216.0,148.4 217.0,144.3 218.0,139.8 219.0,135.1 220.0,130.2 221.0,125.2 222.0,120.1 223.0,115.1 224.0,110.2 225.0,105.5 226.0,101.3 227.0,97.4 228.0,94.2 229.0,91.5 230.0,89.6 231.0,88.4 232.0,88.0 233.0,88.4 234.0,89.6 235.0,91.5 236.0,94.2 237.0,97.4 238.0,101.3 239.0,105.5 240.0,110.2 241.0,115.1 242.0,120.1 243.0,125.2 244.0,130.2 245.0,135.1 246.0,139.8 247.0,144.3 248.0,148.4 249.0,152.3 250.0,155.8 251.0,158.9 252.0,161.7 253.0,164.1 254.0,166.2 255.0,168.0 256.0,169.5 257.0,170.8 258.0,171.9 259.0,172.8 260.0,173.5 261.0,174.1 262.0,174.5 263.0,174.9 264.0,175.2 265.0,175.4 266.0,175.5 267.0,175.7 268.0,175.8 269.0,175.8 270.0,175.9 271.0,175.9 272.0,175.9 273.0,176.0 274.0,176.0 275.0,176.0 276.0,176.0 277.0,176.0 278.0,176.0 279.0,176.0 280.0,176.0 281.0,176.0 282.0,176.0 283.0,176.0 284.0,176.0 285.0,176.0 286.0,176.0 287.0,176.0 288.0,176.0 289.0,176.0 290.0,176.0 291.0,176.0 292.0,176.0 293.0,176.0 294.0,176.0 295.0,176.0 296.0,176.0 297.0,176.0 298.0,176.0 299.0,176.0 300.0,176.0 301.0,176.0 302.0,176.0 303.0,176.0 304.0,176.0" fill="none" stroke="var(--mau-chinh)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
<line x1="24.0" y1="176.0" x2="308.0" y2="176.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<line x1="24.0" y1="176.0" x2="24.0" y2="14.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="26.0" y="11.0" text-anchor="start" font-size="10" fill="var(--chu-phu)">Tín hiệu</text>
<text x="308.0" y="171.0" text-anchor="end" font-size="10" fill="var(--chu-phu)">t</text>
<text x="22.0" y="188.0" text-anchor="end" font-size="10" fill="var(--chu-phu)">0</text>
<text x="64.0" y="126.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">không lưu giữ</text>
<text x="150.0" y="52.0" text-anchor="middle" font-size="10" fill="var(--chu)" font-weight="600">chất 1</text>
<text x="242.0" y="82.0" text-anchor="start" font-size="10" fill="var(--chu)" font-weight="600">chất 2</text>
<line x1="64.0" y1="133.0" x2="64.0" y2="181.0" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="160.0" y1="59.0" x2="160.0" y2="181.0" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="232.0" y1="89.0" x2="232.0" y2="181.0" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="24.0" y1="176.0" x2="24.0" y2="226.0" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="24.0" y1="192.0" x2="64.0" y2="192.0" stroke="var(--chu)" stroke-width="1" marker-end="url(#mt-sk-1)" marker-start="url(#mt-sk-1)"/><text x="44.0" y="189.0" text-anchor="middle" font-size="10" fill="var(--chu)">t<tspan font-size="8" dy="2">m</tspan></text>
<line x1="64.0" y1="192.0" x2="160.0" y2="192.0" stroke="var(--chu)" stroke-width="1" marker-end="url(#mt-sk-1)" marker-start="url(#mt-sk-1)"/><text x="112.0" y="189.0" text-anchor="middle" font-size="10" fill="var(--chu)">t<tspan font-size="8" dy="2">R1</tspan><tspan dy="-2">' = t</tspan><tspan font-size="8" dy="2">R1</tspan><tspan dy="-2"> − t</tspan><tspan font-size="8" dy="2">m</tspan></text>
<line x1="24.0" y1="208.0" x2="160.0" y2="208.0" stroke="var(--chu)" stroke-width="1" marker-end="url(#mt-sk-1)" marker-start="url(#mt-sk-1)"/><text x="92.0" y="205.0" text-anchor="middle" font-size="10" fill="var(--chu)">t<tspan font-size="8" dy="2">R1</tspan></text>
<line x1="24.0" y1="224.0" x2="232.0" y2="224.0" stroke="var(--chu)" stroke-width="1" marker-end="url(#mt-sk-1)" marker-start="url(#mt-sk-1)"/><text x="128.0" y="221.0" text-anchor="middle" font-size="10" fill="var(--chu)">t<tspan font-size="8" dy="2">R2</tspan></text>
<line x1="221.5" y1="122.6" x2="211.0" y2="176.0" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="3 2"/>
<line x1="242.5" y1="122.6" x2="253.0" y2="176.0" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="3 2"/>
<line x1="211.0" y1="179.0" x2="253.0" y2="179.0" stroke="var(--chu)" stroke-width="1" marker-end="url(#mt-sk-1)" marker-start="url(#mt-sk-1)"/>
<text x="258.0" y="188.0" text-anchor="start" font-size="10" fill="var(--chu)">w</text>
<line x1="219.6" y1="132.0" x2="244.4" y2="132.0" stroke="var(--chu)" stroke-width="1.4" marker-end="url(#mt-sk-1)" marker-start="url(#mt-sk-1)"/>
<text x="258.4" y="135.5" text-anchor="start" font-size="10" fill="var(--chu)">w<tspan font-size="8" dy="2">1/2</tspan></text>
<line x1="196.0" y1="176.0" x2="196.0" y2="58.0" stroke="var(--chu)" stroke-width="1" marker-end="url(#mt-sk-1)" marker-start="url(#mt-sk-1)"/>
<line x1="160.0" y1="58.0" x2="196.0" y2="58.0" stroke="var(--chu-phu)" stroke-width="1" stroke-dasharray="3 3"/>
<text x="200.0" y="118.0" text-anchor="start" font-size="10" fill="var(--chu)">h</text>
<text x="232.0" y="14.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">Rs = (t<tspan font-size="8" dy="2">R2</tspan><tspan dy="-2"> − t</tspan><tspan font-size="8" dy="2">R1</tspan><tspan dy="-2">) / w</tspan><tspan font-size="8" dy="2">tb</tspan></text>
</svg>
        <p class="chu-thich">Sắc đồ minh họa: pic đầu là chất không lưu giữ (đỉnh tại t<sub>m</sub>); chất 1 và chất 2 có t<sub>R1</sub>, t<sub>R2</sub> đo từ lúc tiêm mẫu (t = 0). w: độ rộng đáy (giữa hai tiếp tuyến ở điểm uốn cắt đường nền); w<sub>1/2</sub>: độ rộng ở nửa chiều cao; h: chiều cao pic.</p>
      </div>
      <ul>
        <li><b>t<sub>m</sub></b> đọc từ pic của chất không lưu giữ (metan trong GC, uracil hoặc thành phần pha động trong HPLC). Nếu đề không cho pic này thì không tính được k và α.</li>
        <li><b>t<sub>R</sub></b> đo từ lúc tiêm đến <b>đỉnh</b> pic. <b>t<sub>R</sub>'</b> = t<sub>R</sub> − t<sub>m</sub> đo từ t<sub>m</sub>.</li>
        <li><b>w</b> và <b>w<sub>1/2</sub></b> đo theo trục thời gian và cùng đơn vị với t<sub>R</sub> (phút hoặc giây, không trộn lẫn).</li>
      </ul>
      <p><b>Vì sao có hệ số 16 và 5,55?</b> Pic gần như đường Gauss có độ lệch chuẩn σ (đơn vị thời gian). Đường Gauss có độ rộng đáy w = 4σ (giữa hai tiếp tuyến) và độ rộng nửa chiều cao w<sub>1/2</sub> = 2,355σ. Số đĩa được định nghĩa N = (t<sub>R</sub>/σ)<sup>2</sup>:</p>
      <div class="cong-thuc">\[ \begin{aligned} N &= \left(\frac{t_R}{\sigma}\right)^2 \\ &= \left(\frac{4\,t_R}{w}\right)^2 = 16\left(\frac{t_R}{w}\right)^2 \\ &= (2,355)^2\left(\frac{t_R}{w_{1/2}}\right)^2 \\ &= 5,55\left(\frac{t_R}{w_{1/2}}\right)^2 \end{aligned} \]</div>
      <p><b>Hình dạng pic.</b> Pic lí tưởng đối xứng. Pic <b>kéo đuôi</b> (đuôi phía sau dài) thường do tương tác phụ với pha tĩnh (ví dụ nhóm silanol tự do với amin) hoặc quá tải cột; pic <b>trán</b> (fronting, mặt trước thoải) thường do quá tải mẫu hoặc mẫu hòa tan trong dung môi mạnh hơn pha động. Đo bằng hệ số bất đối xứng A<sub>s</sub> = b/a (a, b: nửa trước và nửa sau của pic đo tại 10% chiều cao); A<sub>s</sub> gần 1 là tốt, A<sub>s</sub> &gt; 1,2 là kéo đuôi, A<sub>s</sub> &lt; 0,9 là trán. Với pic không đối xứng, N và R<sub>s</sub> tính theo w chỉ là gần đúng.</p>
      <div class="vi-du"><b>Ví dụ 5.</b> Trên sắc đồ của một cột dài 15,0 cm, đọc được t<sub>m</sub> = 1,10 min; chất 1: t<sub>R1</sub> = 6,30 min, w<sub>1</sub> = 0,50 min; chất 2: t<sub>R2</sub> = 6,90 min, w<sub>2</sub> = 0,50 min, w<sub>1/2</sub> = 0,294 min. Tính k, α, N, H và R<sub>s</sub>. So sánh N của chất 2 tính từ w và từ w<sub>1/2</sub>.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} k_1 &= \frac{6,30 - 1,10}{1,10} = \mathbf{4,73} \\ k_2 &= \frac{6,90 - 1,10}{1,10} = \mathbf{5,27} \\ \alpha &= \frac{5,80}{5,20} = \mathbf{1,12} \end{aligned} \]
          \[ \begin{aligned} N_1 &= 16\left(\frac{6,30}{0,50}\right)^2 = 2,54\cdot10^{3} \\ N_2 &= 16\left(\frac{6,90}{0,50}\right)^2 = \mathbf{3,05\cdot10^{3}} \\ H &= \frac{150\ \mathrm{mm}}{3\,047} = \mathbf{0,049\ mm} \\ R_s &= \frac{6,90 - 6,30}{(0,50 + 0,50)/2} = \mathbf{1,20} \end{aligned} \]
          Từ w<sub>1/2</sub>: N<sub>2</sub> = 5,55·(6,90/0,294)<sup>2</sup> = 3,06·10<sup>3</sup>, gần với 3,05·10<sup>3</sup> (lệch do số liệu đọc bằng mắt). R<sub>s</sub> = 1,20 &lt; 1,5: chưa tách hoàn toàn.
        </details></div>
      <div class="vi-du"><b>Ví dụ 6.</b> (N trung bình.) Trên cột dài 25,0 cm, bốn pic có t<sub>R</sub> (min) và w (min): (3,05; 0,20), (4,32; 0,27), (6,10; 0,37), (8,47; 0,50). Tính N của từng pic, N trung bình, độ lệch chuẩn của N và H trung bình.
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} N_1 &= 16\left(\tfrac{3,05}{0,20}\right)^2 = 3\,721 \\ N_2 &= 16\left(\tfrac{4,32}{0,27}\right)^2 = 4\,096 \\ N_3 &= 16\left(\tfrac{6,10}{0,37}\right)^2 = 4\,349 \\ N_4 &= 16\left(\tfrac{8,47}{0,50}\right)^2 = 4\,591 \end{aligned} \]
          \[ \begin{aligned} \bar{N} &= \frac{3\,721 + 4\,096 + 4\,349 + 4\,591}{4} \\ &= \mathbf{4,19\cdot10^{3}} \\ s_N &= \mathbf{3,7\cdot10^{2}} \quad(\mathrm{RSD} = 8,9\%) \\ \bar{H} &= \frac{250\ \mathrm{mm}}{4\,189} = \mathbf{0,060\ mm} \end{aligned} \]
          N tăng dần theo t<sub>R</sub> là bình thường (pic ra sớm chịu ảnh hưởng nhiều của thể tích tiêm và ống nối ngoài cột), vì vậy báo cáo N trung bình ± s.
        </details></div>

      <h3>9. Cải thiện độ phân giải theo phương trình Purnell</h3>
      <p>Trong \( R_s = \frac{\sqrt{N}}{4}\cdot\frac{\alpha - 1}{\alpha}\cdot\frac{k_2}{1 + k_2} \), ba thừa số độc lập nhau nên có thể xét riêng:</p>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Yếu tố</th><th>Cách thay đổi</th><th>Tác dụng lên R<sub>s</sub></th><th>Cái giá phải trả</th></tr></thead>
          <tbody>
            <tr><td>N</td><td>Cột dài hơn, hạt nhỏ hơn, tốc độ gần u<sub>opt</sub></td><td>R<sub>s</sub> ∝ √N: gấp đôi R<sub>s</sub> cần N gấp 4</td><td>Thời gian phân tích tăng theo L; áp suất tăng nếu hạt nhỏ</td></tr>
            <tr><td>α</td><td>Đổi pha tĩnh, thành phần pha động, pH, nhiệt độ</td><td>Mạnh nhất khi α gần 1 (α từ 1,05 lên 1,10 gần gấp đôi thừa số (α − 1)/α)</td><td>Phải thử nhiều điều kiện</td></tr>
            <tr><td>k</td><td>Pha động yếu hơn (HPLC), nhiệt độ thấp hơn (GC)</td><td>k/(1 + k) tăng nhanh đến k ≈ 2 – 5, sau đó gần như phẳng (tiệm cận 1)</td><td>Pic muộn, rộng, thời gian dài</td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 7.</b> Với hai chất trong Ví dụ 5 (R<sub>s</sub> = 1,20; N<sub>2</sub> = 3,05·10<sup>3</sup>; α = 1,115; k<sub>2</sub> = 5,27; L = 15,0 cm; t<sub>R2</sub> = 6,90 min), cần đạt R<sub>s</sub> = 1,5. Tính (a) chiều dài cột và t<sub>R2</sub> mới nếu chỉ tăng N (H giữ nguyên); (b) α cần đạt nếu chỉ đổi α; (c) chỉ tăng k thì có đạt được không?
        <details><summary>Xem lời giải</summary>
          (a) R<sub>s</sub> ∝ √N ∝ √L nên L phải nhân với (1,5/1,20)<sup>2</sup> = 1,56:
          \[ \begin{aligned} L &= 15,0\cdot1,56 = \mathbf{23,4\ cm} \\ t_{R2} &= 6,90\cdot1,56 = \mathbf{10,8\ min} \end{aligned} \]
          (b) Thừa số (α − 1)/α hiện là 0,1154/1,1154 = 0,1035; cần tăng thêm 1,5/1,20 = 1,25 lần, tức 0,1293:
          \[ \begin{aligned} \frac{\alpha - 1}{\alpha} &= 0,1293 \\ \alpha &= \frac{1}{1 - 0,1293} = \mathbf{1,15} \end{aligned} \]
          Chỉ cần tăng α từ 1,12 lên 1,15 mà không tốn thêm thời gian.<br>
          (c) Thừa số k<sub>2</sub>/(1 + k<sub>2</sub>) hiện là 5,27/6,27 = 0,841 và tối đa chỉ là 1. Khi đó R<sub>s</sub> tối đa = 1,20/0,841 = 1,43 &lt; 1,5: <b>không đạt</b>, dù tăng k bao nhiêu.
        </details></div>

      <h3>10. Van Deemter nâng cao: GC và HPLC</h3>
      <div class="hinh-tinh">
        <svg viewBox="0 0 320 248" role="img" aria-label="Đường cong Van Deemter H theo u với các thành phần A, B/u, C·u">
<line x1="44.0" y1="178.0" x2="306.0" y2="178.0" stroke="var(--vien)" stroke-width="1"/>
<text x="39.0" y="181.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">0,00</text>
<line x1="44.0" y1="139.0" x2="306.0" y2="139.0" stroke="var(--vien)" stroke-width="1"/>
<text x="39.0" y="142.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">0,25</text>
<line x1="44.0" y1="100.0" x2="306.0" y2="100.0" stroke="var(--vien)" stroke-width="1"/>
<text x="39.0" y="103.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">0,50</text>
<line x1="44.0" y1="61.0" x2="306.0" y2="61.0" stroke="var(--vien)" stroke-width="1"/>
<text x="39.0" y="64.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">0,75</text>
<line x1="44.0" y1="22.0" x2="306.0" y2="22.0" stroke="var(--vien)" stroke-width="1"/>
<text x="39.0" y="25.5" text-anchor="end" font-size="10" fill="var(--chu-phu)">1,00</text>
<text x="44.0" y="192.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">0</text>
<text x="131.3" y="192.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">10</text>
<text x="218.7" y="192.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">20</text>
<text x="306.0" y="192.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">30</text>
<line x1="44.0" y1="178.0" x2="306.0" y2="178.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<line x1="44.0" y1="22.0" x2="44.0" y2="178.0" stroke="var(--chu-phu)" stroke-width="1.2"/>
<text x="175.0" y="220.0" text-anchor="middle" font-size="10" fill="var(--chu-phu)">u, tốc độ pha động (mm/s)</text>
<text x="44.0" y="14.0" text-anchor="start" font-size="10" fill="var(--chu-phu)">H (mm)</text>
<polyline points="44.0,162.4 306.0,162.4" fill="none" stroke="var(--chu-phu)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="5 3"/>
<polyline points="54.5,48.0 56.2,66.6 58.0,80.5 59.7,91.3 61.5,100.0 63.2,107.1 65.0,113.0 66.7,118.0 68.5,122.3 70.2,126.0 71.9,129.2 73.7,132.1 75.4,134.7 77.2,136.9 78.9,139.0 80.7,140.9 82.4,142.5 84.2,144.1 85.9,145.5 87.7,146.8 89.4,148.0 91.2,149.1 92.9,150.1 94.7,151.1 96.4,152.0 98.1,152.8 99.9,153.6 101.6,154.4 103.4,155.1 105.1,155.7 106.9,156.3 108.6,156.9 110.4,157.5 112.1,158.0 113.9,158.5 115.6,159.0 117.4,159.4 119.1,159.9 120.9,160.3 122.6,160.7 124.3,161.0 126.1,161.4 127.8,161.8 129.6,162.1 131.3,162.4 133.1,162.7 134.8,163.0 136.6,163.3 138.3,163.6 140.1,163.8 141.8,164.1 143.6,164.3 145.3,164.6 147.1,164.8 148.8,165.0 150.5,165.2 152.3,165.4 154.0,165.6 155.8,165.8 157.5,166.0 159.3,166.2 161.0,166.4 162.8,166.5 164.5,166.7 166.3,166.9 168.0,167.0 169.8,167.2 171.5,167.3 173.3,167.5 175.0,167.6 176.7,167.7 178.5,167.9 180.2,168.0 182.0,168.1 183.7,168.2 185.5,168.4 187.2,168.5 189.0,168.6 190.7,168.7 192.5,168.8 194.2,168.9 196.0,169.0 197.7,169.1 199.5,169.2 201.2,169.3 202.9,169.4 204.7,169.5 206.4,169.6 208.2,169.7 209.9,169.8 211.7,169.9 213.4,170.0 215.2,170.0 216.9,170.1 218.7,170.2 220.4,170.3 222.2,170.4 223.9,170.4 225.7,170.5 227.4,170.6 229.1,170.6 230.9,170.7 232.6,170.8 234.4,170.8 236.1,170.9 237.9,171.0 239.6,171.0 241.4,171.1 243.1,171.2 244.9,171.2 246.6,171.3 248.4,171.3 250.1,171.4 251.9,171.4 253.6,171.5 255.3,171.6 257.1,171.6 258.8,171.7 260.6,171.7 262.3,171.8 264.1,171.8 265.8,171.9 267.6,171.9 269.3,172.0 271.1,172.0 272.8,172.0 274.6,172.1 276.3,172.1 278.1,172.2 279.8,172.2 281.5,172.3 283.3,172.3 285.0,172.3 286.8,172.4 288.5,172.4 290.3,172.5 292.0,172.5 293.8,172.5 295.5,172.6 297.3,172.6 299.0,172.7 300.8,172.7 302.5,172.7 304.3,172.8 306.0,172.8" fill="none" stroke="var(--xanh)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="5 3"/>
<polyline points="44.0,178.0 306.0,131.2" fill="none" stroke="var(--vang)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="5 3"/>
<polyline points="54.5,30.5 56.2,48.8 58.0,62.4 59.7,72.9 61.5,81.3 63.2,88.1 65.0,93.7 66.7,98.3 68.5,102.3 70.2,105.7 71.9,108.7 73.7,111.2 75.4,113.5 77.2,115.4 78.9,117.2 80.7,118.7 82.4,120.1 84.2,121.3 85.9,122.4 87.7,123.4 89.4,124.3 91.2,125.1 92.9,125.8 94.7,126.5 96.4,127.0 98.1,127.6 99.9,128.0 101.6,128.5 103.4,128.9 105.1,129.2 106.9,129.5 108.6,129.8 110.4,130.0 112.1,130.2 113.9,130.4 115.6,130.6 117.4,130.7 119.1,130.8 120.9,130.9 122.6,131.0 124.3,131.1 126.1,131.1 127.8,131.2 129.6,131.2 131.3,131.2 133.1,131.2 134.8,131.2 136.6,131.1 138.3,131.1 140.1,131.1 141.8,131.0 143.6,130.9 145.3,130.9 147.1,130.8 148.8,130.7 150.5,130.6 152.3,130.5 154.0,130.4 155.8,130.2 157.5,130.1 159.3,130.0 161.0,129.9 162.8,129.7 164.5,129.6 166.3,129.4 168.0,129.3 169.8,129.1 171.5,128.9 173.3,128.8 175.0,128.6 176.7,128.4 178.5,128.2 180.2,128.1 182.0,127.9 183.7,127.7 185.5,127.5 187.2,127.3 189.0,127.1 190.7,126.9 192.5,126.7 194.2,126.5 196.0,126.3 197.7,126.1 199.5,125.9 201.2,125.7 202.9,125.4 204.7,125.2 206.4,125.0 208.2,124.8 209.9,124.5 211.7,124.3 213.4,124.1 215.2,123.9 216.9,123.6 218.7,123.4 220.4,123.2 222.2,122.9 223.9,122.7 225.7,122.5 227.4,122.2 229.1,122.0 230.9,121.7 232.6,121.5 234.4,121.2 236.1,121.0 237.9,120.7 239.6,120.5 241.4,120.2 243.1,120.0 244.9,119.7 246.6,119.5 248.4,119.2 250.1,119.0 251.9,118.7 253.6,118.5 255.3,118.2 257.1,117.9 258.8,117.7 260.6,117.4 262.3,117.2 264.1,116.9 265.8,116.6 267.6,116.4 269.3,116.1 271.1,115.8 272.8,115.6 274.6,115.3 276.3,115.0 278.1,114.8 279.8,114.5 281.5,114.2 283.3,114.0 285.0,113.7 286.8,113.4 288.5,113.1 290.3,112.9 292.0,112.6 293.8,112.3 295.5,112.1 297.3,111.8 299.0,111.5 300.8,111.2 302.5,111.0 304.3,110.7 306.0,110.4" fill="none" stroke="var(--mau-chinh)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
<line x1="131.3" y1="131.2" x2="131.3" y2="178.0" stroke="var(--chu)" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="44.0" y1="131.2" x2="131.3" y2="131.2" stroke="var(--chu)" stroke-width="1" stroke-dasharray="3 3"/>
<circle cx="131.3" cy="131.2" r="3.5" fill="var(--mau-chinh)" stroke="var(--nen)" stroke-width="1.2"/>
<text x="136.3" y="123.2" text-anchor="start" font-size="10" fill="var(--chu)" font-weight="600">H<tspan font-size="8" dy="2">min</tspan><tspan dy="-2"> = 0,30</tspan></text>
<text x="131.3" y="205.0" text-anchor="middle" font-size="10" fill="var(--chu)" font-weight="600">u<tspan font-size="8" dy="2">opt</tspan></text>
<line x1="150.0" y1="34.0" x2="172.0" y2="34.0" stroke="var(--mau-chinh)" stroke-width="2.4"/>
<text x="178.0" y="37.5" text-anchor="start" font-size="10" fill="var(--chu)">H = A + B/u + C·u</text>
<line x1="150.0" y1="49.0" x2="172.0" y2="49.0" stroke="var(--chu-phu)" stroke-width="1.6" stroke-dasharray="5 3"/>
<text x="178.0" y="52.5" text-anchor="start" font-size="10" fill="var(--chu)">A: khuếch tán xoáy</text>
<line x1="150.0" y1="64.0" x2="172.0" y2="64.0" stroke="var(--xanh)" stroke-width="1.6" stroke-dasharray="5 3"/>
<text x="178.0" y="67.5" text-anchor="start" font-size="10" fill="var(--chu)">B/u: khuếch tán dọc</text>
<line x1="150.0" y1="79.0" x2="172.0" y2="79.0" stroke="var(--vang)" stroke-width="1.6" stroke-dasharray="5 3"/>
<text x="178.0" y="82.5" text-anchor="start" font-size="10" fill="var(--chu)">C·u: chuyển khối</text>
</svg>
        <p class="chu-thich">Đường cong Van Deemter với A = 0,10 mm; B = 1,0 mm<sup>2</sup>/s; C = 0,010 s (số của Ví dụ 4). Đường liền là tổng H; ba đường nét đứt là ba thành phần. Cực tiểu tại u<sub>opt</sub> = 10 mm/s: bên trái do B/u (khuếch tán dọc), bên phải do C·u (chuyển khối).</p>
      </div>
      <div class="bang-cuon">
        <table class="bang bang-the">
          <thead><tr><th>Số hạng</th><th>Sắc kí khí (GC)</th><th>HPLC</th></tr></thead>
          <tbody>
            <tr><td>A (khuếch tán xoáy)</td><td>Bằng 0 với cột mao quản rỗng</td><td>Giảm khi hạt nhỏ và đồng đều</td></tr>
            <tr><td>B/u (khuếch tán dọc)</td><td>Lớn: hệ số khuếch tán trong khí lớn hơn trong lỏng nhiều bậc; đường cong có cực tiểu rõ</td><td>Nhỏ, gần như bỏ qua ở tốc độ dùng thường ngày</td></tr>
            <tr><td>C·u (chuyển khối)</td><td>Nhỏ với khí mang nhẹ (H<sub>2</sub>, He): vẫn chạy nhanh được</td><td>Quan trọng: H tăng theo u; muốn chạy nhanh phải giảm kích thước hạt (UHPLC)</td></tr>
            <tr><td>Chọn tốc độ</td><td>N<sub>2</sub> cho H<sub>min</sub> nhỏ nhất nhưng đường cong dốc; H<sub>2</sub>, He phẳng hơn ở tốc độ cao</td><td>Thường chạy hơi trên u<sub>opt</sub> để tiết kiệm thời gian, chấp nhận N giảm ít</td></tr>
          </tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 8.</b> Cột HPLC dài 150 mm có A = 0,0100 mm; B = 0,0060 mm<sup>2</sup>/s; C = 0,0040 s. Tính u<sub>opt</sub>, H<sub>min</sub> và N lớn nhất. Nếu chạy ở u = 3,5 mm/s thì H, N và thời gian chết t<sub>m</sub> = L/u thay đổi thế nào?
        <details><summary>Xem lời giải</summary>
          \[ \begin{aligned} u_\text{opt} &= \sqrt{\frac{0,0060}{0,0040}} = \mathbf{1,22\ mm/s} \\ H_\text{min} &= 0,0100 + 2\sqrt{0,0060\cdot0,0040} \\ &= \mathbf{0,0198\ mm} \\ N_\text{max} &= \frac{150}{0,0198} = 7,6\cdot10^{3} \end{aligned} \]
          Ở u<sub>opt</sub>, t<sub>m</sub> = 150/1,22 ≈ 2,0 min. Ở u = 3,5 mm/s:
          \[ \begin{aligned} H &= 0,0100 + \frac{0,0060}{3,5} + 0,0040\cdot3,5 \\ &= 0,0257\ \mathrm{mm} \\ N &= \frac{150}{0,0257} = 5,8\cdot10^{3} \\ t_m &= \frac{150}{3,5} = 43\ \mathrm{s} \end{aligned} \]
          Tốc độ tăng gấp 2,9 lần (thời gian giảm từ khoảng 2,0 min còn 43 s), còn N chỉ giảm khoảng 23%: đánh đổi chấp nhận được. Phần lớn H tăng đến từ C·u, đúng với đặc điểm HPLC.
        </details></div>

      <h3>11. Định lượng bằng diện tích pic</h3>
      <ul>
        <li>Diện tích pic tỉ lệ với lượng chất và <b>ít nhạy hơn chiều cao</b> với sự thay đổi độ rộng pic (do nhiệt độ, tốc độ dòng…). Nên dùng diện tích cho định lượng chính xác; chiều cao chỉ dùng cho pic hẹp, cân đối và không chồng nhau.</li>
        <li><b>Đường chuẩn ngoại</b>: pha dãy chuẩn (thường 5 nồng độ), đo diện tích A theo nồng độ c, hồi quy A = a·c + b. Kiểm tra hệ số tương quan r<sup>2</sup> (thường yêu cầu &gt; 0,999), rồi tính c của mẫu từ diện tích đo được. Nồng độ mẫu phải nằm <b>trong</b> khoảng chuẩn, không ngoại suy.</li>
        <li>Từ c trong dung dịch tiêm suy ra % (m/m) trong mẫu: nhân các hệ số pha loãng, nhân thể tích định mức, chia khối lượng mẫu, đổi đơn vị.</li>
        <li><b>Chuẩn ngoại</b> chịu sai số thể tích tiêm; nội chuẩn (Chương 10, mục 6) bù sai số đó.</li>
      </ul>
      <div class="bang-cuon">
        <table class="bang bang-hep">
          <thead><tr><th>c (µg/mL)</th><th>2,00</th><th>5,00</th><th>10,0</th><th>20,0</th><th>40,0</th></tr></thead>
          <tbody><tr><td>Diện tích (mAU·s)</td><td>18,7</td><td>47,7</td><td>96,1</td><td>191,8</td><td>385,5</td></tr></tbody>
        </table>
      </div>
      <div class="vi-du"><b>Ví dụ 9.</b> Định lượng một hoạt chất trong bột thực phẩm chức năng bằng HPLC (cột C18, pha động đệm phosphat pH 3/acetonitril, đầu dò UV). Đường chuẩn từ bảng trên cho A = 9,65c − 0,62 (r<sup>2</sup> &gt; 0,9999). Cân 0,5000 g bột, chiết và định mức 100,0 mL, lọc, hút 5,00 mL định mức thành 50,00 mL rồi tiêm; diện tích pic hoạt chất là 208,6 mAU·s. Tính % (m/m) hoạt chất trong bột.
        <details><summary>Xem lời giải</summary>
          \[ c = \frac{208,6 + 0,62}{9,65} = 21,7\ \mu\mathrm{g/mL} \]
          Đây là nồng độ trong dung dịch tiêm (đã pha loãng 50,00/5,00 = 10 lần). Trong dung dịch 100,0 mL chiết từ mẫu:
          \[ \begin{aligned} c_{100} &= 21,7\cdot10 = 217\ \mu\mathrm{g/mL} \\ m &= 217\cdot100,0 = 21\,700\ \mu\mathrm{g} = 21,7\ \mathrm{mg} \\ \% &= \frac{21,7\ \mathrm{mg}}{500,0\ \mathrm{mg}}\cdot100\% = \mathbf{4,34\ \%} \end{aligned} \]
          Nồng độ 21,7 µg/mL nằm giữa 10,0 và 40,0 µg/mL của dãy chuẩn nên phép nội suy hợp lệ.
        </details></div>
      <p><b>Câu hỏi định tính hay gặp (HPLC C18, pH 3):</b></p>
      <ul>
        <li><b>Vì sao dùng pH 3?</b> Chất phân tích là acid yếu hoặc base yếu cần được giữ ở một dạng xác định: acid yếu ở pH 3 chủ yếu dạng phân tử, ít phân cực, bị C18 giữ tốt; pH thấp cũng ức chế sự ion hóa nhóm silanol nên giảm kéo đuôi với hợp chất amin.</li>
        <li><b>Thứ tự rửa giải pha đảo</b>: chất phân cực ra <b>trước</b>, chất ít phân cực ra sau; tăng tỉ lệ acetonitril làm mọi chất ra sớm hơn.</li>
        <li><b>Vai trò cột</b> là nơi diễn ra sự tách; <b>đầu dò UV</b> là đầu dò phân tử, đo độ hấp thụ của chất rửa giải ở bước sóng chọn (không tách chất). Pic đến sớm là chất phân cực hoặc chất không lưu giữ; pic phụ khác t<sub>R</sub> so với chuẩn là tạp chất hoặc chất nền.</li>
      </ul>

      <h3>12. Lỗi hay gặp</h3>
      <ul>
        <li><b>Không trừ t<sub>m</sub></b>: dùng t<sub>R</sub> thay cho t<sub>R</sub>' khi tính k và α. α tính từ t<sub>R</sub> thô (6,90/6,30 = 1,10) khác α đúng (1,12).</li>
        <li><b>Lẫn đơn vị</b> giữa t<sub>R</sub> và w (một bên phút, một bên giây) hoặc giữa L (cm) và H (mm).</li>
        <li><b>Nhầm w với w<sub>1/2</sub></b>: dùng 16 với w<sub>1/2</sub> hoặc 5,55 với w cho N sai gấp khoảng 3 lần.</li>
        <li><b>Nhầm R<sub>s</sub></b>: chia cho w của một pic thay vì độ rộng trung bình của hai pic; lấy Δt<sub>R</sub> theo t<sub>R</sub>' rồi cộng thêm t<sub>m</sub>.</li>
        <li><b>Tăng N khi cần α</b>: R<sub>s</sub> ∝ √N nên muốn R<sub>s</sub> gấp đôi phải tăng N gấp 4 (chứ không phải gấp 2), rất tốn thời gian; đổi α thường hiệu quả hơn.</li>
        <li><b>Van Deemter</b>: nhầm B/u là chuyển khối (đó là khuếch tán dọc); quên rằng ở tốc độ thấp thì B/u chi phối, ở tốc độ cao thì C·u chi phối; cho rằng u<sub>opt</sub> cho thời gian ngắn nhất (nó chỉ cho H nhỏ nhất).</li>
        <li><b>Định lượng</b>: ngoại suy ngoài khoảng chuẩn; quên hệ số pha loãng và thể tích định mức (Ví dụ 9: nhân 10 và nhân 100,0 mL); dùng chiều cao thay diện tích với pic không đối xứng.</li>
        <li><b>Kết luận từ t<sub>R</sub> đơn độc</b>: hai chất khác nhau có thể cùng t<sub>R</sub>; định tính chắc chắn cần thêm chuẩn vào mẫu hoặc đầu dò cho thông tin cấu trúc.</li>
      </ul>
    `,
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
  },
  {
    id: "gc-hplc",
    nhom: "Phân tích công cụ",
    icon: "🧫",
    ten: "Sắc kí khí và sắc kí lỏng",
    moTa: "Sắc kí khí, HPLC pha thường – pha đảo, thiết bị, detector, thứ tự rửa giải",
    dayDu: true,
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
    baiTap: [],   // bài tự luận nằm trong kho có khóa (kho.bin)
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
