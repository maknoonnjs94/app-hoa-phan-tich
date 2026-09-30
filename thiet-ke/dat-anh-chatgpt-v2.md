# Đặt ảnh ChatGPT vẽ – Bản 2 (3D chibi kiểu đồ chơi, có chiều sâu, đồng bộ)

## 0. Vì sao ảnh cũ nhìn giả và lệch nhau
- Mỗi ảnh vẽ ở một lần chat khác nhau, nên mỗi ảnh một phong cách (chỗ 3D bóng, chỗ ảnh chụp, chỗ tranh vẽ).
- Ảnh có quá nhiều chi tiết, bóng đổ, hiệu ứng phát sáng → thấy "AI".
- Icon (emoji) trộn với ảnh minh họa nên không ăn nhập.

**Cách sửa:** chọn MỘT phong cách **3D cách điệu kiểu đồ chơi đất sét/nhựa mờ** (không phải 3D chân thực; 3D chân thực mới bị "giả trân"), khóa bảng màu, luôn đính kèm ảnh chuẩn khi đặt ảnh mới, và **mỗi lần chỉ vẽ MỘT ảnh, MỘT hình** (không ghép nhiều hình, nên không bị lẫn hay sót). Phần nút, thẻ, chữ, thanh menu do app tự dựng bằng mã, ChatGPT chỉ vẽ **minh họa và icon**.

---

## 0b. Phẳng hay 3D?
- **3D đồ chơi (bản này):** bắt mắt, có chiều sâu, hợp Gen Z; rủi ro là ChatGPT dễ trượt sang 3D bóng bẩy chân thực. Đã khóa bằng câu "nhựa mờ, không bóng gương" và luôn đính kèm ảnh chuẩn.
- **Phẳng anime:** đồng bộ dễ hơn, nhẹ hơn, nhưng ít chiều sâu. Nếu 3D vẽ lệch nhiều lần, hãy quay lại phẳng.

---

## 1. Quy trình (làm đúng thứ tự)
1. Mở **một cuộc chat mới** trong ChatGPT, đặt tên "Hóa phân tích – Art". Chỉ dùng chat này cho mọi ảnh.
2. Dán **Mục 2 (Bộ phong cách)** → chờ ChatGPT vẽ **ảnh chuẩn**. Chọn bản ưng nhất, rồi nói: *"Đây là ảnh chuẩn. Mọi ảnh sau phải giống đúng phong cách, chất liệu, ánh sáng, bảng màu này."*
3. Gửi lần lượt từng ảnh ở **Mục 4**, theo đợt A → E. Mỗi tin nhắn = **1 ảnh**: đính kèm ảnh chuẩn, dán **khung mẫu ở Mục 3** với phần [MÔ TẢ] thay bằng dòng mô tả của ảnh đó.
4. Nếu ảnh nào lệch phong cách: nói *"vẽ lại, giữ đúng chất liệu nhựa mờ, kiểu ánh sáng và bảng màu như ảnh chuẩn, không thêm bóng gương hay hiệu ứng phát sáng"*. Đừng sửa từng chi tiết nhỏ, cứ vẽ lại cả ảnh.
5. Tải **ảnh gốc** (bấm nút tải xuống, không chụp màn hình), giữ nguyên tên file như bảng, gửi lại cho Claude (đính kèm trong chat hoặc nén zip).
6. Claude sẽ tách nền từng ảnh, nén WebP, gắn vào app, chỉnh giao diện cho ăn màu.

> Mẹo: đặt tên file ngay khi tải về (đúng tên trong bảng), tránh nhầm. Mỗi đợt xong nên gửi tôi xem thử vài ảnh trước khi vẽ tiếp, lệch thì sửa sớm.

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

Bước 1: vẽ MỘT ảnh chuẩn (ngang 1536×1024, nền trắng kem): mascot ở giữa, bên cạnh là buret, bình nón, pipet và một quyển sách mở, cùng chất liệu và cùng kiểu ánh sáng.

Mascot "Chuẩn": robot nhỏ tròn trịa hình bình nón, bụng trong suốt chứa dung dịch hồng đào (như phenolphtalein), nắp đầu tím chàm, 2 mắt LED to xanh ngọc, má hồng, tay chân ngắn, có ăng-ten nhỏ hình giọt nước.
```

Sau đó gửi thêm để chốt nhân vật người:

```
Bây giờ vẽ nhân vật, MỖI LẦN MỘT NGƯỜI (mỗi người 1 ảnh 1024×1536, đứng thẳng mặt trước, nền trắng kem), cùng phong cách với ảnh chuẩn. Gửi lần lượt 4 tin nhắn, mỗi tin đính kèm ảnh chuẩn + các nhân vật đã duyệt:
1) Sinh viên nữ: tóc dài buộc nửa, áo blouse trắng, kính bảo hộ đeo trên đầu, cầm tablet.
2) Sinh viên nam: tóc ngắn cá tính, áo blouse, cầm pipet, đeo balo.
3) Cô giảng viên khoảng 35 tuổi: tóc búi, kính cận, blouse, cầm bảng kẹp hồ sơ.
4) Thầy giảng viên khoảng 40 tuổi: blouse, cà vạt, cầm cốc đong.
Từ giờ mọi ảnh có người phải giữ ĐÚNG ngoại hình các nhân vật này.
```

---

## 3. Khung mẫu cho MỖI ảnh (dán kèm ảnh chuẩn, thay [MÔ TẢ] và [KÍCH THƯỚC])

```
Vẽ ĐÚNG MỘT ảnh, giống hệt phong cách 3D đồ chơi, chất liệu, ánh sáng và bảng màu của ảnh chuẩn đính kèm.
Nội dung: [MÔ TẢ]
Khung: [KÍCH THƯỚC].
Yêu cầu:
- Chỉ có MỘT chủ thể duy nhất ở giữa, chiếm khoảng 70% khung, chừa lề đều xung quanh.
- Nền là MỘT MÀU PHẲNG #FF00FF (magenta), không hoa văn, không viền trắng quanh hình. Bóng chỉ nằm sát dưới chân vật, mờ nhẹ.
- Không chữ, số, logo, watermark.
- Nhân vật (nếu có) giữ đúng ngoại hình như các ảnh nhân vật đã duyệt.
```

Riêng ảnh phong cảnh / ảnh nền (đợt D, E) thì thay hai dòng "Chỉ có MỘT chủ thể…" và "Nền là MỘT MÀU PHẲNG…" bằng:
```
- Đây là ảnh phong cảnh đầy đủ, KHÔNG dùng nền magenta. Chừa 22% phía trên và 20% phía dưới bằng trời / mặt đất đơn giản (app đặt thanh tiêu đề và menu lên đó); chi tiết chính ở giữa.
```

Icon (đợt A): thêm vào khung "Icon khối 3D bo tròn, 1 vật chủ đạo, nhìn rõ khi thu còn 48 px, góc nhìn nghiêng nhẹ từ trên xuống, kích thước 1024×1024."

---

## 4. Danh sách đặt ảnh (theo đợt)

### Đợt A – Icon (mỗi icon 1 ảnh 1024×1024, cùng kiểu; làm đầu tiên vì đổi được cả app)
**A1. Menu và ô chính** (8 ảnh): `ic-trang-chu` ngôi nhà mái bình nón · `ic-ly-thuyet` quyển sách mở, phân tử bay lên · `ic-luyen-tap` bút chì + dấu tích · `ic-tao-de` tập đề kẹp ghim + bánh răng · `ic-lop-hoc` 3 bạn nhỏ / 3 chiếc ghế · `ic-tai-khoan` đầu người đeo kính bảo hộ · `ic-tra-cuu` kính lúp trên quyển sổ · `ic-mo-phong` buret giọt nước + đường cong chuẩn độ.

**A2. Tính năng nhỏ** (10 ảnh): `ic-may-tinh` máy tính cầm tay · `ic-dong-ho` đồng hồ bấm giờ · `ic-in` máy in · `ic-chia-se` mũi tên chia sẻ · `ic-luu` bookmark · `ic-bao-loi` lá cờ · `ic-gop-y` bóng đèn · `ic-chuoi-ngay` ngọn lửa · `ic-sao` ngôi sao / xu · `ic-huy-hieu` huy hiệu.

**A3. 15 chương** (15 ảnh): `ch-01-mo-dau` bình nón + kính lúp · `ch-02-do-luong` cân phân tích · `ch-03-thong-ke` đường cong chuông · `ch-04-can-bang` cân hai đĩa · `ch-05-axit-bazo` giấy quỳ đỏ/xanh · `ch-06-chuan-do` buret nhỏ vào bình hồng · `ch-07-edta` ion kim loại được phân tử càng cua "ôm" · `ch-08-ket-tua` ống nghiệm có kết tủa trắng · `ch-09-oxh-k` mũi tên electron giữa 2 ion · `ch-10-dien-hoa` máy đo pH + điện cực · `ch-11-uv-vis` cuvet + chùm sáng · `ch-12-quang-nguyen-tu` ngọn lửa màu · `ch-13-sac-ki` cột có dải màu · `ch-14-gc-hplc` sắc kí đồ nhiều đỉnh · `ch-15-tach-chiet` phễu chiết 2 lớp màu.

### Đợt B – Mascot Chuẩn (8 ảnh, mỗi ảnh 1024×1536)
`mascot-chao` vẫy tay chào · `mascot-dung` nhảy lên vui, dung dịch xanh ngọc, sao lấp lánh · `mascot-sai` gãi đầu, dung dịch cam nhạt · `mascot-suy-nghi` chống cằm, bong bóng "?" bằng hình · `mascot-chi-tay` chỉ tay hướng dẫn · `mascot-an-mung` ôm cúp, pháo giấy · `mascot-ngu` ngủ gật, mũ ngủ · `mascot-dong-ho` cầm đồng hồ cát, hơi vội.

### Đợt C – Nhân vật (6 ảnh 1024×1536 + 1 ảnh ngang)
`hs-nu-chao` SV nữ vẫy chào · `hs-nam-chao` SV nam giơ ngón cái · `hs-nu-lam-bai` SV nữ làm bài trên tablet · `hs-nam-chuan-do` SV nam chỉnh khóa buret · `gv-nu` cô giảng viên cầm bảng kẹp · `gv-nam` thầy giảng viên chỉ bảng trắng trống.
`nhom-chao` (1536×1024): 2 SV + 1 GV + mascot đứng cạnh nhau, vẫy tay.

### Đợt D – 5 "thế giới" bìa nhóm chương (ảnh phong cảnh)
Mỗi thế giới là một đảo nổi trên mây, cùng bảng màu, kiểu diorama 3D đồ chơi có chiều sâu. Mỗi cái 1 ảnh dọc 1024×1536 (chừa 22% trên, 20% dưới) và 1 ảnh ngang 1536×1024:
| File | Nhóm chương | Cảnh |
|---|---|---|
| `the-gioi-dai-cuong` | Mở đầu, Đo lường, Thống kê | Cân phân tích khổng lồ, bình định mức, đồi hình đường cong chuông |
| `the-gioi-chuan-do` | Axit–bazơ, EDTA, Kết tủa, Oxi hóa–khử | Rừng buret nhỏ giọt xuống hồ đổi màu hồng, đá kết tủa trắng |
| `the-gioi-dien-hoa` | Điện hóa | Tháp điện cực, cầu Galvani bắc qua hai bờ, tia điện xanh ngọc |
| `the-gioi-quang-pho` | UV-Vis, Quang phổ nguyên tử | Lăng kính tách cầu vồng, cuvet, ngọn lửa đỏ–vàng–tím |
| `the-gioi-sac-ki` | GC-HPLC, Sắc kí | Cột sắc kí như tháp nhiều dải màu, ruộng bậc thang TLC |

### Đợt E – Nền màn hình đặc biệt (phong cảnh)
| File | Khung | Cảnh |
|---|---|---|
| `nen-trang-chu-ngay` | 1024×1536 | Quần đảo 5 đảo nối bằng cầu, trời chiều tím–hồng, mây phẳng |
| `nen-trang-chu-dem` | 1024×1536 | Cùng cảnh ban đêm: navy, sao vàng kem, cửa sổ phòng thí nghiệm sáng xanh ngọc |
| `nen-dang-nhap` | 1024×1536 | Cổng vào phòng thí nghiệm mở, ánh sáng ấm; chừa giữa trống cho ô đăng nhập |
| `nen-ket-qua` | 1024×1536 | Bục trao giải, pháo giấy, sao (dùng khi nộp bài xong) |

---

## 5. Nhờ ChatGPT vẽ thêm "bản thiết kế màn hình" (rất nên làm)
Sau khi có ảnh chuẩn, gửi câu này (mỗi lần 1 màn) để Claude biết bố cục bạn thích:

```
Vẽ MỘT mockup màn hình điện thoại (1080×2340), lần lượt gửi 3 lần cho 3 màn cho app học Hóa phân tích, đúng phong cách 3D đồ chơi và bảng màu ảnh chuẩn, giao diện thời thượng cho Gen Z:
Lần 1 – Trang chủ: lời chào + mascot, thẻ "Tiếp tục học", lưới 6 thẻ chức năng bo góc lớn, thanh menu dưới 5 mục.
Lần 2 – Màn danh sách 15 chương: mỗi chương là một thẻ có icon riêng, thanh tiến độ.
Lần 3 – Màn làm bài trắc nghiệm: câu hỏi, 4 phương án dạng nút bo tròn, thanh tiến độ, đồng hồ, mascot nhỏ ở góc.
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
