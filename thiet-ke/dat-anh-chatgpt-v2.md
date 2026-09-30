# Đặt ảnh ChatGPT vẽ – Bản 2 (3D chibi kiểu đồ chơi, có chiều sâu, đồng bộ)

## 0. Vì sao ảnh cũ nhìn giả và lệch nhau
- Mỗi ảnh vẽ ở một lần chat khác nhau, nên mỗi ảnh một phong cách (chỗ 3D bóng, chỗ ảnh chụp, chỗ tranh vẽ).
- Ảnh có quá nhiều chi tiết, bóng đổ, hiệu ứng phát sáng → thấy "AI".
- Icon (emoji) trộn với ảnh minh họa nên không ăn nhập.

**Cách sửa:** chọn MỘT phong cách **3D cách điệu kiểu đồ chơi đất sét/nhựa mờ** (không phải 3D chân thực; 3D chân thực mới bị "giả trân"), khóa bảng màu, luôn đính kèm ảnh chuẩn khi đặt ảnh mới, và vẽ theo **bảng nhiều hình trong 1 ảnh** (ChatGPT giữ đồng bộ tốt hơn). Phần nút, thẻ, chữ, thanh menu do app tự dựng bằng mã, ChatGPT chỉ vẽ **minh họa và icon**.

---

## 0b. Phẳng hay 3D?
- **3D đồ chơi (bản này):** bắt mắt, có chiều sâu, hợp Gen Z; rủi ro là ChatGPT dễ trượt sang 3D bóng bẩy chân thực. Đã khóa bằng câu "nhựa mờ, không bóng gương" và luôn đính kèm ảnh chuẩn.
- **Phẳng anime:** đồng bộ dễ hơn, nhẹ hơn, nhưng ít chiều sâu. Nếu 3D vẽ lệch nhiều lần, hãy quay lại phẳng.

---

## 1. Quy trình (làm đúng thứ tự)
1. Mở **một cuộc chat mới** trong ChatGPT, đặt tên "Hóa phân tích – Art". Chỉ dùng chat này cho mọi ảnh.
2. Dán **Mục 2 (Bộ phong cách)** → chờ ChatGPT vẽ **bảng phong cách**. Chọn bản ưng nhất, rồi nói: *"Đây là ảnh chuẩn. Mọi ảnh sau phải giống đúng phong cách, độ dày nét, bảng màu này."*
3. Gửi lần lượt **Đợt A → E** ở Mục 4. Mỗi lần: dán kèm **Mục 3 (Quy định xuất)** và nhắc *"giống ảnh chuẩn"*.
4. Nếu ảnh nào lệch phong cách: nói *"vẽ lại, giữ đúng nét viền dày 3px và bảng màu như ảnh chuẩn, không thêm bóng đổ/hiệu ứng phát sáng"*. Đừng sửa từng chi tiết nhỏ, cứ vẽ lại cả ảnh.
5. Tải **ảnh gốc** (bấm nút tải xuống, không chụp màn hình), giữ nguyên tên file như bảng, gửi lại cho Claude (đính kèm trong chat hoặc nén zip).
6. Claude sẽ cắt bảng thành từng hình, tách nền, nén WebP, gắn vào app, chỉnh giao diện cho ăn màu.

> Mẹo: mỗi tin nhắn 1 bảng thôi. Nếu ChatGPT vẽ chưa đủ số hình trong bảng thì bảo nó "thiếu hình số …, vẽ lại cả bảng".

---

## 2. Bộ phong cách (dán ở tin nhắn đầu)

```
Bạn là họa sĩ minh họa cho một ứng dụng học Hóa phân tích trên điện thoại, dành cho sinh viên đại học (18–22 tuổi). Tôi muốn giao diện thời thượng, trẻ trung, vui, không gò bó.

PHONG CÁCH DUY NHẤT (áp dụng mọi ảnh):
- 3D cách điệu kiểu đồ chơi "blind box" / hoạt hình 3D dễ thương: chất liệu nhựa mờ hoặc đất sét mềm (matte), bề mặt mịn, bo tròn mọi cạnh, KHÔNG bóng gương, KHÔNG kim loại thật, KHÔNG da người thật, KHÔNG ảnh chụp.
- Ánh sáng mềm, một nguồn sáng chính từ trên-trái, bóng đổ nhẹ mịn dưới chân, viền sáng nhẹ (rim light) tạo chiều sâu. Độ sâu trường ảnh nhẹ ở nền (mờ nhẹ xa). Không hiệu ứng glow quá đà, không lens flare, không hạt nhiễu.
- Nhân vật chibi đầu to (khoảng 3 đầu), mắt to kiểu anime, má hồng, bàn tay đơn giản như đồ chơi, tóc thành mảng khối lớn (không sợi tóc chi tiết).
- Đồ vật (buret, bình nón, pipet, cân, điện cực…) đúng hình dạng thật nhưng dày dặn, bo tròn, như mô hình đồ chơi; chất lỏng dạng thạch trong mờ, đơn giản.
- Bảng màu cố định (chỉ dùng các màu này và dạng nhạt/đậm của chúng):
  • Tím chàm #6D5EF6 (màu chủ đạo)   • Hồng đào #FF6FA8 (nhấn)
  • Xanh ngọc #22D3B6 (dung dịch, thành công)   • Vàng kem #FFD65A (điểm sáng, sao)
  • Xanh navy #1B1A47 (nền tối, nét viền)   • Trắng kem #FFF8F0 (nền sáng)
  • Cam san hô #FF8A5B (cảnh báo nhẹ)
- Không dùng nét viền đen; đường biên do khối và bóng tạo ra. Các màu chỉ ở dạng nhạt/đậm của bảng màu, không thêm màu lạ.
- Không có chữ, số, logo thương hiệu, watermark trong ảnh (app tự chèn chữ).
- Đúng an toàn phòng thí nghiệm: áo blouse, kính bảo hộ.

Bước 1: vẽ MỘT "bảng phong cách" (ảnh ngang 1536×1024, nền trắng kem) gồm: (a) mascot, (b) 3 đồ dụng cụ (buret, bình nón, pipet), (c) 4 icon nhỏ (sách, bút chì, máy tính, ngôi nhà), (d) bảng 7 ô màu đúng mã trên. Tất cả cùng chất liệu và cùng kiểu ánh sáng.

Mascot "Chuẩn": robot nhỏ tròn trịa hình bình nón, bụng trong suốt chứa dung dịch hồng đào (như phenolphtalein), nắp đầu tím chàm, 2 mắt LED to xanh ngọc, má hồng, tay chân ngắn, có ăng-ten nhỏ hình giọt nước.
```

Sau đó gửi thêm để chốt nhân vật người:

```
Bây giờ vẽ "bảng nhân vật" (ảnh ngang 1536×1024, nền trắng kem), cùng phong cách với ảnh chuẩn, 4 nhân vật chibi đứng cạnh nhau, mỗi người vẽ mặt trước:
1) Sinh viên nữ: tóc dài buộc nửa, áo blouse trắng, kính bảo hộ đeo trên đầu, cầm tablet.
2) Sinh viên nam: tóc ngắn cá tính, áo blouse, cầm pipet, đeo balo.
3) Cô giảng viên khoảng 35 tuổi: tóc búi, kính cận, blouse, cầm bảng kẹp hồ sơ.
4) Thầy giảng viên khoảng 40 tuổi: blouse, cà vạt, cầm cốc đong.
Từ giờ mọi ảnh có người phải giữ ĐÚNG ngoại hình các nhân vật này.
```

---

## 3. Quy định xuất (dán kèm mỗi đợt)

```
Quy định xuất ảnh:
- Vẽ dạng BẢNG LƯỚI: các hình đặt đều trong lưới (nêu ở từng đợt), mỗi hình nằm gọn trong ô, cách nhau ít nhất 8% bề rộng ô, KHÔNG chạm nhau, KHÔNG chồng nhau.
- Nền của bảng là MỘT MÀU PHẲNG #FF00FF (hồng magenta), không có bóng đổ lên nền (bóng chỉ nằm sát dưới chân từng hình, màu tối trong suốt nhẹ), không viền trắng quanh hình. (Tôi sẽ tách nền tự động, không cần PNG trong suốt.)
- Riêng ảnh nền/phong cảnh (không phải bảng): nền đầy đủ, không trong suốt, kích thước như đã nêu; chừa 22% phía trên và 20% phía dưới bằng trời/mặt đất đơn giản vì app đặt thanh tiêu đề và menu lên đó.
- Icon: khối 3D bo tròn, nhìn rõ khi thu còn 48 px: ít chi tiết, 1 vật chủ đạo mỗi icon, cùng góc nhìn (nghiêng nhẹ từ trên xuống).
- Không chữ, số, watermark.
- Ghi số thứ tự ô 1,2,3… trong LỜI trả lời của bạn (không vẽ số lên ảnh) kèm tên file tôi đặt.
```

---

## 4. Danh sách đặt ảnh (theo đợt)

### Đợt A – Bộ icon menu & tính năng (làm đầu tiên vì đổi được toàn app)
**A1. Thanh menu dưới + ô chính** – bảng 4 cột × 2 hàng = 8 icon, cùng kiểu, mỗi icon 1 vật + 1 nền tròn nhỏ tím chàm:
1 Trang chủ (ngôi nhà mái bình nón) · 2 Lí thuyết (quyển sách mở, phân tử bay lên) · 3 Luyện tập (bút chì + dấu tích) · 4 Tạo đề (tập đề kẹp ghim + bánh răng) · 5 Lớp học (3 chiếc ghế/3 bạn nhỏ) · 6 Tài khoản (đầu người + kính bảo hộ) · 7 Tra cứu (kính lúp trên sổ) · 8 Mô phỏng (buret giọt nước + đường cong).
File: `icon-menu.png`.

**A2. Tính năng nhỏ** – bảng 5×2 = 10 icon: máy tính cầm tay · đồng hồ bấm giờ · máy in · chia sẻ · lưu (bookmark) · báo lỗi (cờ) · góp ý (bóng đèn) · ngọn lửa chuỗi ngày · sao/xu · huy hiệu.
File: `icon-tinh-nang.png`.

**A3. 15 chương** – bảng 5 cột × 3 hàng = 15 icon:
1 Mở đầu (bình nón + kính lúp) · 2 Đo lường (cân phân tích) · 3 Thống kê (đường cong chuông) · 4 Cân bằng (cân hai đĩa) · 5 Axit–bazơ (giấy quỳ đỏ/xanh) · 6 Chuẩn độ axit–bazơ (buret nhỏ vào bình hồng) · 7 EDTA (ion kim loại được "ôm" bởi phân tử càng cua) · 8 Kết tủa (ống nghiệm có kết tủa trắng) · 9 Oxi hóa–khử (mũi tên electron giữa 2 ion) · 10 Điện hóa (máy đo pH + điện cực) · 11 UV-Vis (cuvet + chùm sáng) · 12 Quang phổ nguyên tử (ngọn lửa màu) · 13 Sắc kí (cột có dải màu) · 14 GC-HPLC (sắc kí đồ nhiều đỉnh) · 15 Tách chiết (phễu chiết 2 lớp màu).
File: `icon-chuong.png`.

### Đợt B – Mascot biểu cảm (dùng khi làm bài, báo kết quả, trạng thái trống)
Bảng 4 cột × 2 hàng = 8 tư thế của mascot Chuẩn: 1 vẫy tay chào · 2 nhảy lên vui, dung dịch chuyển xanh ngọc, sao lấp lánh · 3 gãi đầu bối rối, dung dịch chuyển cam nhạt · 4 chống cằm suy nghĩ (bong bóng "?" bằng hình, không chữ) · 5 chỉ tay hướng dẫn · 6 ôm cúp + pháo giấy · 7 ngủ gật đội mũ ngủ · 8 cầm đồng hồ cát hơi vội.
File: `mascot-8.png`.

### Đợt C – Nhân vật sinh viên/giảng viên
Bảng 3 cột × 2 hàng = 6 tư thế (đúng bảng nhân vật): 1 SV nữ vẫy chào · 2 SV nam giơ ngón cái · 3 SV nữ làm bài trên tablet · 4 SV nam chỉnh khóa buret chuẩn độ · 5 cô giảng viên cầm bảng kẹp · 6 thầy giảng viên chỉ vào bảng trắng trống.
File: `nhan-vat-6.png`.
Thêm 1 ảnh ngang 1536×1024 `nhom-chao.png`: 2 SV + 1 GV + mascot đứng cạnh nhau, vẫy tay, nền magenta phẳng (màn đăng nhập/chào mừng).

### Đợt D – 5 "thế giới" bìa nhóm chương (ảnh phong cảnh, KHÔNG dùng bảng)
Mỗi thế giới là một đảo nổi trên mây, cùng bảng màu, kiểu diorama 3D đồ chơi có chiều sâu. Mỗi cái 1 ảnh dọc 1024×1536 (chừa 22% trên, 20% dưới) và 1 ảnh ngang 1536×1024:
| File | Nhóm chương | Cảnh |
|---|---|---|
| `the-gioi-dai-cuong` | Mở đầu, Đo lường, Thống kê | Cân phân tích khổng lồ, bình định mức, đồi hình đường cong chuông |
| `the-gioi-chuan-do` | Axit–bazơ, EDTA, Kết tủa, Oxi hóa–khử | Rừng buret nhỏ giọt xuống hồ đổi màu hồng, đá kết tủa trắng |
| `the-gioi-dien-hoa` | Điện hóa | Tháp điện cực, cầu Galvani bắc qua hai bờ, tia điện xanh ngọc |
| `the-gioi-quang-pho` | UV-Vis, Quang phổ nguyên tử | Lăng kính tách cầu vồng, cuvet, ngọn lửa đỏ–vàng–tím |
| `the-gioi-sac-ki` | GC-HPLC, Sắc kí | Cột sắc kí như tháp nhiều dải màu, ruộng bậc thang TLC |

### Đợt E – Nền màn hình đặc biệt (phong cảnh, không bảng)
| File | Khung | Cảnh |
|---|---|---|
| `nen-trang-chu-ngay` | 1024×1536 | Quần đảo 5 đảo nối bằng cầu, trời chiều tím–hồng, mây phẳng |
| `nen-trang-chu-dem` | 1024×1536 | Cùng cảnh ban đêm: navy, sao vàng kem, cửa sổ phòng thí nghiệm sáng xanh ngọc |
| `nen-dang-nhap` | 1024×1536 | Cổng vào phòng thí nghiệm mở, ánh sáng ấm; chừa giữa trống cho ô đăng nhập |
| `nen-ket-qua` | 1024×1536 | Bục trao giải, pháo giấy, sao (dùng khi nộp bài xong) |

---

## 5. Nhờ ChatGPT vẽ thêm "bản thiết kế màn hình" (rất nên làm)
Sau khi có bảng phong cách, gửi thêm câu này để Claude biết bố cục bạn thích:

```
Vẽ 3 mockup màn hình điện thoại (mỗi màn 1080×2340, xếp cạnh nhau thành 1 ảnh ngang) cho app học Hóa phân tích, đúng phong cách 3D đồ chơi và bảng màu ảnh chuẩn, giao diện thời thượng cho Gen Z:
(1) Trang chủ: lời chào + mascot, thẻ "Tiếp tục học", lưới 6 thẻ chức năng bo góc lớn, thanh menu dưới 5 mục.
(2) Màn danh sách 15 chương: mỗi chương là một thẻ có icon riêng, thanh tiến độ.
(3) Màn làm bài trắc nghiệm: câu hỏi, 4 phương án dạng nút bo tròn, thanh tiến độ, đồng hồ, mascot nhỏ ở góc.
Dùng chữ tiếng Việt giả lập để thấy bố cục (được phép có chữ trong mockup này).
```
Ảnh này chỉ để Claude tham khảo bố cục, màu, độ bo góc, không đưa vào app.

---

## 6. Gợi ý từ phía Claude (sau khi có ảnh)
- Đổi màu chủ đạo app sang tím chàm + hồng đào + xanh ngọc, bo góc lớn hơn, thẻ nổi nhẹ (đổ bóng mềm) cho ăn với ảnh 3D.
- Thay emoji bằng icon vẽ; thêm mascot ở màn trống, kết quả, làm bài.
- Chế độ tối (navy) và sáng (kem) dùng cùng bộ ảnh.
- Giữ app nhẹ: ảnh nén WebP, tổng thêm khoảng 1–1,5 MB, chạy được khi mất mạng.

## 7. Lưu ý
- Kho mã nguồn là công khai: đừng đưa tên trường, tên môn, tên giảng viên thật vào ảnh hoặc tên file.
- Không dùng nhân vật có bản quyền (Ghibli, Naruto…): chỉ mô tả "phong cách anime", không nhắc tên tác phẩm khi đặt ảnh.
- Mỗi lần ChatGPT hết lượt vẽ, cứ chờ rồi dán lại: nhớ dán kèm ảnh chuẩn và câu "giống ảnh chuẩn".
