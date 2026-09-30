# Soạn thêm câu LÍ THUYẾT về bản chất hóa học (loai "lt") — app Hóa phân tích (đại học)

Bối cảnh: app trắc nghiệm 4 phương án cho sinh viên đại học (bị khóa máy, không tra cứu). Kho đã có 2 678 câu. Người dùng thấy thiếu câu lí thuyết hỏi về **điều kiện, màu sắc, hiện tượng, tính chất** trong các phép phân tích. Câu mới vào hàng "chờ duyệt".

## Trọng tâm (yêu cầu của người dùng)
- Ưu tiên **BẢN CHẤT HÓA HỌC**: vì sao phải làm như vậy (môi trường, thuốc thử, đệm, đun nóng, thứ tự thêm, che, bảo quản), hiện tượng/màu quan sát được và nguyên nhân, chất nào cản trở và vì sao, phản ứng phụ xảy ra nếu làm sai điều kiện.
- **KHÔNG soạn** câu điều kiện kiểu toán học (C·Ka ≥ 10⁻⁸, ΔpK ≥ 4, lg K' ≥ 8, ΔE ≥ 0,35 V, điều kiện tuyến tính Beer dạng số, bất đẳng thức…). Không có câu tính toán.
- Kiến thức chuẩn giáo trình (Skoog, Harris, Christian, giáo trình ĐH Việt Nam). KHÔNG bịa hóa chất, phản ứng, màu. Màu chỉ thị và điều kiện phải đúng như sách. Nếu không chắc chắn một chi tiết thì không dùng nó.

## Quy tắc bắt buộc
1. Mỗi câu: {id, chuong, dang, dangMoi: true, mucDo (1 hoặc 2; mức 3 chỉ khi phải suy luận từ tình huống/quy trình cụ thể, tối đa ~20 %), loai: "lt", de, phuongAn[4], dapAn "A".."D", loiGiai}.
   Tỉ lệ mục tiêu: mức 1 ≈ 40 %, mức 2 ≈ 45 %, mức 3 ≈ 15 %.
2. "dang": CHỈ dùng nhãn có sẵn, đúng nguyên văn, trong ltb/dang.json (chương → nhãn). Không tạo dạng mới.
3. Phương án nhiễu = **quan niệm sai thật** của sinh viên (nhầm môi trường, nhầm chất che, nhầm màu hai dạng chỉ thị, nhầm vai trò thuốc thử, đảo nguyên nhân–kết quả, lẫn giữa các phương pháp Mohr/Volhard/Fajans…). Không nhiễu vô lí tự lộ, không nhiễu "đùa". Không dùng "Tất cả đều đúng/sai", "Cả A và B".
4. 4 phương án **dài tương đương** (đáp án KHÔNG được là phương án dài nhất một cách lộ; tỉ lệ đáp án dài nhất < 30 % trong mỗi file). Đáp án đúng phải đúng tuyệt đối, 3 nhiễu phải sai rõ ràng (không có phương án "cũng đúng một phần").
5. Câu hỏi dạng "vì sao/để làm gì": phương án là các lí do hóa học cụ thể, không chung chung.
6. Phương pháp Mohr, Volhard, Fajans: HS phải nhớ, KHÔNG kèm bảng. Không dùng trường "bang" (câu chọn chỉ thị theo bảng đã đủ).
7. Mỗi câu một ý mới, KHÔNG trùng ý với câu đã có (xem ltb/lt-hien-co.md — danh sách đề + đáp án câu lí thuyết hiện có của 9 chương) và không trùng nhau.
8. Trình bày: tiếng Việt đơn giản; "acid", "base" (không "axit/bazơ"); công thức dùng <sub>, <sup> (MnO<sub>4</sub><sup>−</sup>, Ca<sup>2+</sup>), không LaTeX; dấu phẩy thập phân, dấu trừ "−". Câu hỏi phủ định ("KHÔNG") viết hoa chữ KHÔNG, tối đa 15 %.
9. Lời giải (loiGiai): 1–3 câu giải thích bản chất, rồi "Nhầm lẫn hay gặp: …" nói ngắn vì sao các nhiễu sai. KHÔNG gọi "phương án A/B/1/2" (app xáo thứ tự).
10. Vị trí đáp án: xáo ngẫu nhiên cân bằng A–D trong từng file (dùng Python random với seed, đếm lại).
11. Không đưa tên trường, tên môn, tên giảng viên, nội dung đề thi gốc.

## Cách làm
- Làm trong thư mục được giao. Viết dữ liệu câu bằng Python (danh sách dict, đáp án đúng đặt ở phuongAn[0] rồi build.py xáo), xuất `cauhoi.json`.
- Tạo `cho-duyet.js` = `NGAN_HANG_CHO_DUYET.push(...<cauhoi.json>);` (chỉ .push) rồi chạy `node ../loc-nhanh.js cho-duyet.js`, sửa mọi cảnh báo hợp lệ.
- Tự kiểm bằng script: đếm câu theo chương/dạng/mức, phân bố vị trí đáp án, tỉ lệ đáp án dài nhất, trùng phương án, dạng có trong dang.json, không có "phương án A/B" trong lời giải.
- Tự đọc lại từng câu như một giảng viên khó tính: kiến thức có chắc đúng không? nhiễu có "cũng đúng" không? Sửa trước khi báo cáo.
- Báo cáo cuối (ngắn, dưới 250 từ): số câu theo chương/dạng/mức, đường dẫn cauhoi.json, điểm còn nghi ngờ.
