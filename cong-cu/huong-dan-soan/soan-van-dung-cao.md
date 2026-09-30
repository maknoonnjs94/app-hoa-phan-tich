# Soạn thêm câu Vận dụng cao (mức 4) cho app Hóa phân tích (đại học)

Bối cảnh: app trắc nghiệm 4 phương án cho sinh viên đại học, môn Hóa phân tích, 15 chương. Kho đã có 2 445 câu; cần thêm câu **Vận dụng cao (mucDo = 4)** cho các chương còn thiếu. Câu mới sẽ vào hàng "chờ duyệt", người dùng duyệt sau.

## Thế nào là Vận dụng cao (mức 4)
Mẫu thật / quy trình nhiều công đoạn: định mức + hút + pha loãng nhiều lần, chuẩn độ ngược / gián tiếp / thay thế, chuỗi phản ứng nhiều giai đoạn, xử lí số liệu nhiều bước (đường chuẩn, thêm chuẩn, nội chuẩn, độ thu hồi, LOD/LOQ), công thức dài, phân tích một tình huống thực tế. KHÔNG phải mức 4: tính pH một dung dịch, một phép thế công thức, một bước quy đổi. Mỗi câu tính phải cần ≥ 4 bước hoặc ≥ 2 hệ/công đoạn. Dạng lí thuyết (loai "lt") chỉ dùng tối đa 15 % số câu (ví dụ: chọn quy trình đúng cho mẫu cho trước, đánh giá nguyên nhân sai số của quy trình có số liệu).
Đề phải thực tế: mẫu có thật (nước, thực phẩm, dược phẩm, đất, kim loại, môi trường), số liệu hợp lí, KHÔNG bịa hóa chất/quy trình không có thật. Tham khảo phương pháp chuẩn (TCVN, AOAC, USP, Skoog, Harris, Christian, giáo trình ĐH).

## Quy tắc bắt buộc
1. Mọi hằng số, khối lượng mol, E°, pKa, Ksp, lg K... cần để giải PHẢI ghi trong đề (sinh viên bị khóa, không tra cứu). Ghi dạng "(Cho: M(CaCO<sub>3</sub>) = 100,09 g/mol.)". Không ghi hằng số không dùng.
2. KHÔNG ghi trong đề: công thức tính, tỉ lệ phản ứng đơn giản (HCl+NaOH, 1:1...), gợi ý cách giải, thể tích điểm tương đương "Vₑ" (nếu cần thì viết V<sub>tđ</sub>), giai đoạn chuẩn độ (trước/tại/sau điểm tương đương; chỉ nêu thể tích đã thêm). CHỈ được ghi phương trình phản ứng khi nó phức tạp, sinh viên không thể tự viết cân bằng (chuỗi oxi hóa – khử nhiều bước, phản ứng lạ).
3. Phương pháp Mohr, Volhard, Fajans: sinh viên phải nhớ, không kèm bảng. Bảng thông tin (trường "bang", HTML table) chỉ dùng cho câu CHỌN chỉ thị; đừng dùng.
4. Phương án nhiễu = lỗi thật của sinh viên (quên pha loãng, quên cộng thể tích, nhầm tỉ lượng thật, dùng nhầm M, quên bình phương/căn/log, bỏ sót một công đoạn, đảo tử/mẫu). CẤM: nhân đôi/chia đôi vô căn cứ, "đọc nhầm số", M của chất không liên quan, ghép hai lỗi trong một phương án, số âm cho đại lượng luôn dương (nồng độ, khối lượng, pK, %), pH ngoài 0–14, % hàm lượng > 100 (trừ độ thu hồi thật trong 80–120 %), nồng độ vô lí (> 15 M). Tối đa 1 phương án sai bậc 10 mỗi câu. 3 nhiễu phải khác nhau và không sát đáp án đúng quá (chênh ≥ 3 % và không sát ranh giới làm tròn).
5. Không có số nào sát ranh giới làm tròn (…5 ở chữ số bị làm tròn). Dùng quy tắc chữ số có nghĩa: pH 2 chữ số thập phân; số khác 3–4 chữ số có nghĩa. Dấu phẩy thập phân, dấu trừ "−" (U+2212), công thức dùng <sub>, <sup>. Công thức chữ đứng thẳng.
6. Lời giải (loiGiai) ngắn gọn từng bước, KHÔNG gọi "phương án A/B/1/2" (app xáo thứ tự), rồi "Lỗi hay gặp: «giá trị» (lí do); ..." cho 3 nhiễu.
7. Vị trí đáp án xáo ngẫu nhiên cân bằng (dùng build.py mẫu). Câu định tính: 4 phương án dài tương đương.
8. Mỗi câu là một biến thể mới, KHÔNG trùng ý với câu đã có (xem vdc-hien-co.json) và không trùng nhau. Đa dạng mẫu và số liệu.
9. Chỉ dùng "dang" có sẵn trong dang-list.json (đúng nguyên văn nhãn "Dxx · tên dạng") của chương tương ứng; chọn dạng hợp nhất về nội dung. Không tạo dạng mới. Mọi câu: mucDo = 4, dangMoi = true.
10. Không đưa tên trường, tên môn học cụ thể, tên giảng viên, hay nội dung đề thi gốc vào câu.

## Cách làm (giống các đợt trước; mẫu ở scratchpad/bs3a)
- Đọc `bs3a/lib.py` (hàm add, v, sg, sc, xa), `bs3a/p1.py` (ví dụ), `bs3a/build.py`, `bs3a/verify.py`.
- Tạo thư mục riêng (được giao ở dưới), COPY lib.py sửa: SP trỏ tới scratchpad, `DG(ch, code)` đọc từ `../vdc/dang-list.json` theo tiền tố mã "Dxx " của nhãn dạng, prefix id đúng (được giao). Viết các p1.py, p2.py... (mỗi file ~10 câu), mọi đáp số TÍNH BẰNG PYTHON từ số liệu trong đề, nhiễu cũng tính bằng Python theo đúng lỗi mô tả (không gõ tay số).
- build.py xáo vị trí đáp án và ghi `cauhoi.json` (trường: id, chuong, dang, dangMoi, mucDo, loai, de, phuongAn, dapAn, loiGiai).
- Viết `verify.py` tính lại độc lập (công thức khác cách viết) cho MỌI câu và in OK/FAIL; sửa đến khi tất cả OK.
- Cuối cùng chạy `node ../loc-nhanh.js <file js>` — để làm được, tạo file js: `NGAN_HANG_CHO_DUYET.push(...(<nội dung cauhoi.json>));` (chỉ .push, không tự khai báo biến) và sửa mọi cảnh báo hợp lệ.
- Báo cáo cuối: số câu theo chương, đường dẫn cauhoi.json, các cảnh báo còn lại và lí do chấp nhận.

## Bổ sung (đợt 2)
11. Câu tính pH/pM/pAg/E theo thể tích đã thêm: KHÔNG nói giai đoạn, KHÔNG ghi V<sub>tđ</sub> hay "thì hết … mL" (cho nồng độ chất phân tích thay vào), và LUÔN ghi đủ hằng số của hệ (pKa/pKb các nấc, Ksp, pH + α<sub>Y⁴⁻</sub> + lg K<sub>f</sub>, E° cả hai cặp) kể cả khi giai đoạn đó không dùng.
12. Nếu có cách giải gần đúng hợp lí cho đáp số khác đáp án thì phải đổi số liệu để hai cách trùng nhau (hoặc bỏ nhiễu đó).
13. Dùng "acid", "base" (không "axit/bazơ") như kho hiện có.
14. Khuôn đề thi thật (chỉ để tham khảo phong cách, độ khó, loại mẫu/quy trình; KHÔNG chép nguyên văn, luôn đổi mẫu và số liệu): scratchpad/phan-tich-de-thi.md, scratchpad/de-thi-acid-base.md, scratchpad/de-thi-cac-chu-de.md. Đề thi gốc là tự luận nhiều ý theo quy trình phân tích → chuyển mỗi ý có đáp số rõ thành một câu trắc nghiệm VDC độc lập (đủ dữ kiện).
