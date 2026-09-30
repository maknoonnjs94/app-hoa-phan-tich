# Quy tắc soạn ngân hàng câu hỏi chờ duyệt (bắt buộc)

Bối cảnh: app PWA "Hóa phân tích" tại /home/user/app-hoa-phan-tich. Lí thuyết từng chương nằm trong noi-dung.js (mảng CHUONG, mỗi chương có id). Câu hỏi PHẢI bám đúng lí thuyết, kí hiệu, hằng số của chương trong noi-dung.js (đọc kĩ chương đó trước khi soạn). Bảng tra cứu TRA_CUU cuối noi-dung.js (pKa, Ksp, E°, chỉ thị).

Quy ước: pKa CH3COOH 4,75; pKb NH3 4,75; hệ số Nernst 0,059; E° MnO4⁻/Mn²⁺ = 1,51 V; metyl da cam 3,1–4,4; pH 2 chữ số thập phân; số khác theo chữ số có nghĩa; dấu phẩy thập phân kiểu Việt Nam; dấu trừ "−".

KHÔNG ghi tên môn/giảng viên/trường. KHÔNG sửa file nào trong repo. Mọi file làm việc trong thư mục scratchpad được giao.

## Cách làm
- Viết generator Python (tham khảo khung: scratchpad/nh3/khung.py — hàm cau(), P(), Q(), sci(), rd(), xa_bien(), _naked_latex, kiểm tra độ dài). Có thể copy khung vào thư mục của mình.
- Kết quả: một file JS dạng
  /* Câu hỏi chờ duyệt: ... */
  NGAN_HANG_CHO_DUYET.push( {id, chuong, dang, mucDo, de, phuongAn:[4], dapAn:"A".."D", loiGiai}, ... );
  id dạng "XX-DDNN" (XX = mã chương, DD = số dạng, NN = số câu). dang: "D01 · Tên dạng". mucDo 1/2/3.
- Mỗi chương khoảng 10–16 dạng, mỗi dạng 6–8 câu (≈ 100–120 câu/chương). Có cả câu lí thuyết (khái niệm, dụng cụ, thiết bị, quy trình, nhận định đúng/sai) lẫn câu tính toán nếu chương có tính toán.

## Chất lượng (Opus sẽ phản biện theo đúng các điểm này)
1. Đáp án đúng tuyệt đối; tính đáp án từ ĐÚNG các số đã làm tròn hiển thị trong đề. Tự kiểm lại bằng script độc lập.
2. Đề đủ dữ kiện để giải (tên chất, hằng số cần thiết). Số liệu thực tế, chất thật.
3. Nhiễu là LỖI THẬT của sinh viên (quên hệ số, nhầm công thức, nhầm đơn vị, nhầm khái niệm...), nhãn lỗi trong lời giải phải khớp đúng con số. Không có nhiễu vô lí tự lộ (pH > 14, nồng độ 100 M, phần trăm > 100...). Không có hai phương án trùng nhau.
4. Chống đoán mẹo: đáp án KHÔNG phải phương án dài nhất; vị trí đáp án rải đều A–D; mỗi câu tối đa MỘT nhiễu kiểu "sai một bậc/×10"; đáp án không luôn nằm giữa hoặc ở cực trị; hạng (thứ tự lớn–nhỏ) của đáp án thay đổi giữa các câu cùng dạng; với câu định tính, đáp án phải đổi (không cùng một đáp án cho cả dạng).
5. Độ khó đồng đều trong mỗi dạng (cùng số bước).
6. Không lấy lại y nguyên số liệu ví dụ trong noi-dung.js.
7. Không sát ranh giới làm tròn (xa_bien).
8. Hiển thị: LaTeX chỉ nằm trong \( \) hoặc \[ \]; ngoài đó dùng HTML <sub>, <sup>, "·10<sup>−5</sup>". Không để mất chỉ số (viết Ca<sup>2+</sup>, H<sub>2</sub>O hoặc ký tự ⁺ ₂). Công thức dài không tràn màn 360px.
9. Lời giải ngắn, nêu cách giải và giải thích các nhiễu đã chọn.

## Tự kiểm cuối
Viết script kiểm: đếm câu/dạng, vị trí đáp án, tỉ lệ đáp án dài nhất (< 25%), LaTeX ngoài delimiter = 0, trùng phương án = 0, tính lại đáp án. Chạy `node -e` load file (định nghĩa NGAN_HANG_CHO_DUYET=[] trước) để chắc cú pháp đúng.
Báo cáo cuối (ngắn): số câu mỗi chương, danh sách dạng, điểm còn nghi ngờ.
10. KHÔNG để thẻ HTML (<sub>, <sup>, <b>) bên trong \( \) — KaTeX sẽ hiện nguyên chữ. Trong LaTeX dùng \mathrm{CO_3^{2-}}.
11. Lời giải phải khớp đúng hằng số và số đã dùng để tính đáp án (không thay hằng số khác trong lời giải).

## BÀI HỌC TỪ CÁC VÒNG PHẢN BIỆN (bắt buộc)
- Nhiễu CHỈ là lỗi thật: quên/đảo hệ số pha loãng, quên cộng thể tích, nhầm pKa↔pKb, nhầm Ka↔Kb, dùng sai dạng ion, nhầm V tương đương với V đã thêm, quên tỉ lượng thật, quên bình phương/căn/lấy log, dùng công thức gần đúng khi không đủ điều kiện. CẤM: ×2, ÷2, ×1,5 vô căn cứ; "đọc nhầm số" với số tự đặt; M của chất không liên quan; ghép hai lỗi.
- Không số nào (đáp án và nhiễu) sát ranh giới làm tròn (…5).
- Nếu hạng đáp án (thứ tự lớn nhỏ trong 4 phương án) lặp lại trong dạng: đổi SỐ LIỆU hoặc chọn lỗi thật khác; không bịa nhiễu.
- Lời giải: nêu cách giải + mỗi nhiễu một ý lỗi thật, số trong lời giải khớp đáp án.
- Câu chùm: các câu cùng trường chum và dan (đề dẫn đầy đủ quy trình); de của câu con ngắn; câu sau dùng kết quả ĐÃ LÀM TRÒN của câu trước.
- Câu mới thêm trường dangMoi: true và dang đúng chuỗi "Dxx · tên" của bảng dạng (/home/user/app-hoa-phan-tich/phan-dang.js).
- Lời giải KHÔNG gọi "phương án 1/2/3" hay "A/B" theo thứ tự (sẽ lệch khi app xáo) — nêu thẳng giá trị/nội dung nhiễu.
- Vị trí đáp án xáo NGẪU NHIÊN có cân bằng trong từng dạng, không lặp chu kì ABCD.
- Mỗi câu tối đa MỘT nhiễu sai bậc 10. Số liệu mẫu thật phải thực tế (hàm lượng không vượt giới hạn lí thuyết, thuốc/mẫu có hàm lượng cỡ thật).
- Câu định tính: cân độ dài, đáp án không dài nhất rõ rệt.
- File kết quả CHỈ gồm các lệnh NGAN_HANG_CHO_DUYET.push(...); KHÔNG khai báo var/let/const NGAN_HANG_CHO_DUYET (sẽ làm hỏng app).
- Không khai báo BẤT KÌ biến toàn cục nào trong file kết quả (nhúng chuỗi đề dẫn thẳng vào trường dan).
- Mọi hằng số/khối lượng mol mà đáp án hoặc nhiễu dùng tới phải có trong đề của CHÍNH câu đó (hoặc đề dẫn của chùm).
- Chọn chỉ thị: đáp án là chỉ thị có E° (hoặc khoảng đổi màu) gần/nằm trong bước nhảy theo đúng dữ kiện đề; môi trường của E°' phải khớp bảng (Ce⁴⁺ 1,61 V là trong HNO3).
- Không nhiễu vô lí về mặt vật lí (thế tại tương đương nằm ngoài khoảng hai E°, nồng độ âm, % > 100…).
