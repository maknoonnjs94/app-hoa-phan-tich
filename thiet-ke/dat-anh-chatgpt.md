# Đặt ảnh cho app Hóa phân tích (gửi ChatGPT vẽ)

## 0. Cách làm (cho người đặt ảnh)
1. Mở ChatGPT, tạo **một cuộc chat riêng** cho việc vẽ ảnh (để nó nhớ phong cách, nhân vật).
2. Dán nguyên **mục 1 (Bộ phong cách)** vào tin nhắn đầu. Chờ nó vẽ **ảnh mẫu phong cách** + **bảng nhân vật**. Duyệt đến khi ưng.
3. Sau đó gửi **từng đợt** ở mục 3 (mỗi tin 1–4 ảnh). Luôn nhắc: *"giữ đúng phong cách và nhân vật như bảng đã duyệt"*.
4. Tải ảnh gốc về (bấm tải, **không chụp màn hình**), đổi tên đúng như bảng, gửi lại cho Claude (đính kèm trong chat, hoặc nén zip).
5. Claude sẽ tự cắt, nén sang WebP, gắn vào app. Anh/chị không cần chỉnh gì thêm.

> Ưu tiên đợt 1 trước (logo, mascot, nền trang chủ, icon thanh dưới). Các đợt sau làm dần.

---

## 1. Bộ phong cách (dán cho ChatGPT ở tin nhắn đầu)

```
Bạn sẽ vẽ bộ ảnh cho một ứng dụng học Hóa phân tích trên điện thoại, dành cho sinh viên đại học.
Phong cách chung (áp dụng cho MỌI ảnh sau này):
- Minh họa 2D kiểu anime/Ghibli nhẹ, tươi sáng, nét viền mềm, tô màu mịn, có chiều sâu nhẹ.
- Bảng màu chính: xanh ngọc (#14B8A6), xanh dương (#3B82F6), tím nhạt (#8B5CF6), vàng ấm (#FBBF24), nền trời xanh nhạt; ban đêm: xanh navy (#1E1B4B) + tím + ánh sáng neon xanh ngọc.
- Chủ đề: phòng thí nghiệm hóa phân tích – buret, pipet, bình nón, cân phân tích, máy quang phổ, cột sắc kí, điện cực pH, dung dịch đổi màu chỉ thị.
- Thế giới giả tưởng: các "đảo nổi" trên mây, mỗi đảo là một khu thí nghiệm.
- TUYỆT ĐỐI KHÔNG có chữ, số, logo thương hiệu, watermark trong ảnh (app sẽ tự chèn chữ).
- Dụng cụ vẽ đúng thực tế (buret có khóa, bình nón miệng hẹp, pipet bầu…), an toàn phòng thí nghiệm (kính bảo hộ, áo blouse).

Bước 1: Vẽ 1 ảnh "mẫu phong cách" (khung dọc 1024×1536): một đảo nổi phòng thí nghiệm, trời ban ngày.
Bước 2: Vẽ "bảng nhân vật" (character sheet, nền trắng, khung ngang 1536×1024) gồm:
  (a) Mascot "Chuẩn": robot nhỏ hình bình nón tròn trịa, trong bụng là dung dịch màu hồng nhạt (như phenolphtalein), đầu có nắp xanh ngọc, 2 mắt LED to dễ thương, tay nhỏ. Vẽ mặt trước, nghiêng, sau.
  (b) Sinh viên nữ: tóc dài buộc, áo blouse trắng, kính bảo hộ đeo trên trán, cầm tablet.
  (c) Sinh viên nam: tóc ngắn, áo blouse, kính bảo hộ, cầm pipet.
  (d) Giảng viên (nữ, khoảng 35 tuổi, tóc búi, kính cận, blouse, cầm bảng kẹp hồ sơ) và giảng viên nam (khoảng 40 tuổi, blouse, cà vạt).
Mọi ảnh sau này phải giữ ĐÚNG ngoại hình các nhân vật trong bảng này.
```

---

## 2. Quy định file xuất ra (bắt buộc – dán kèm mỗi đợt)

```
Quy định xuất ảnh:
- Nền trong suốt (transparent PNG) cho: logo, icon, nhân vật, mascot. Không bóng đổ ra ngoài, không viền trắng quanh hình.
- Ảnh nền (background): PNG, KHÔNG trong suốt, khung dọc 1024×1536 (điện thoại) hoặc ngang 1536×1024 (máy tính bảng/PC) như ghi trong bảng.
- Ảnh nền: để trống 25% phía trên và 20% phía dưới (chỉ trời/mây/mặt đất đơn giản) vì app sẽ đặt thanh tiêu đề và thanh menu lên đó. Chi tiết chính đặt ở giữa.
- Icon: khung vuông 1024×1024, hình nằm gọn trong vòng tròn chiếm 80% ở giữa, cùng độ dày nét, cùng góc nhìn, nhìn rõ khi thu nhỏ còn 48 px.
- Nhân vật: khung dọc 1024×1536, toàn thân, đứng giữa, chân chạm cách đáy khoảng 5%.
- Mỗi ảnh là MỘT file riêng (không ghép nhiều hình vào 1 ảnh, trừ khi tôi yêu cầu "bảng").
- Không chữ, không số, không watermark.
- Sau khi vẽ, ghi rõ tên file tôi đặt cho từng ảnh ở ngay dưới ảnh.
```

---

## 3. Danh sách ảnh cần vẽ (theo đợt)

### Đợt 1 – Nhận diện & trang chủ (quan trọng nhất)
| Tên file | Khung | Nội dung (gửi ChatGPT) |
|---|---|---|
| `logo.png` | 1024×1024, trong suốt | Biểu tượng app: bình nón có dung dịch chuyển màu hồng→xanh ngọc, phía trên là giọt rơi từ đầu buret, vòng tròn nền xanh ngọc đậm. Đơn giản, nhận ra ở cỡ nhỏ. |
| `icon-app.png` | 1024×1024, nền đặc xanh ngọc | Như logo nhưng có nền màu đặc kín khung, hình chỉ chiếm 60% giữa (để Android cắt tròn/bo góc). |
| `nen-trang-chu-ngay.png` | 1024×1536 | Quần đảo nổi trên mây ban ngày: 5 đảo nhỏ (xem Đợt 3) nối bằng cầu thang/cầu treo, xa xa có tia nắng. |
| `nen-trang-chu-dem.png` | 1024×1536 | Cùng cảnh trên, ban đêm, sao, dải ngân hà, đèn neon xanh ngọc trong các phòng thí nghiệm. |
| `nen-trang-chu-ngang.png` | 1536×1024 | Cùng cảnh ban ngày, khung ngang cho máy tính bảng. |
| `mascot-chao.png` | 1024×1536, trong suốt | Mascot Chuẩn vẫy tay chào, mắt cười. |

### Đợt 2 – Mascot biểu cảm (dùng khi làm bài, thông báo)
Tất cả 1024×1536, trong suốt, cùng một mascot:
| Tên file | Tư thế |
|---|---|
| `mascot-dung.png` | Nhảy lên vui, dung dịch trong bụng chuyển xanh lá, có tia lấp lánh. |
| `mascot-sai.png` | Gãi đầu bối rối, dung dịch chuyển cam nhạt (không buồn quá). |
| `mascot-suy-nghi.png` | Tay chống cằm, dấu "?" nhỏ bằng hình bong bóng (không chữ). |
| `mascot-chi-tay.png` | Chỉ tay sang phải, như đang hướng dẫn. |
| `mascot-an-mung.png` | Cầm cúp, pháo giấy (khi hoàn thành bài/đạt điểm cao). |
| `mascot-ngu.png` | Ngủ gật, mũ ngủ (màn hình trống / ban đêm). |
| `mascot-dong-ho.png` | Cầm đồng hồ cát, hơi vội (bài kiểm tra có hạn giờ). |

### Đợt 3 – 5 "thế giới" cho nhóm chương (ảnh bìa)
Mỗi thế giới 2 ảnh: dọc `…-doc.png` 1024×1536 và ngang `…-ngang.png` 1536×1024. Là một đảo nổi riêng, cùng phong cách.
| Tên file (gốc) | Nhóm chương | Nội dung |
|---|---|---|
| `the-gioi-dai-cuong` | Mở đầu, Đo lường, Thống kê | Đảo có cân phân tích lớn, bình định mức, bảng biểu đồ phân bố chuông, thước đo. |
| `the-gioi-chuan-do` | Acid–base, EDTA, Kết tủa, Oxi hóa–khử | Đảo "rừng buret": buret khổng lồ nhỏ giọt xuống hồ đổi màu hồng; tinh thể kết tủa trắng như đá. |
| `the-gioi-dien-hoa` | Điện hóa | Đảo có máy đo pH, điện cực thủy tinh như tháp, tia điện xanh, pin Galvani như cây cầu hai bờ. |
| `the-gioi-quang-pho` | UV-Vis, Quang phổ nguyên tử | Đảo có lăng kính tách cầu vồng, cuvet trong suốt, ngọn lửa màu (đỏ, vàng, tím) của các nguyên tố. |
| `the-gioi-sac-ki` | GC-HPLC, Sắc kí | Đảo có cột sắc kí như tháp các dải màu tách rời, bản mỏng TLC như ruộng bậc thang nhiều vệt màu. |

### Đợt 4 – Nhân vật người (HS/GV)
Tất cả 1024×1536, trong suốt, đúng bảng nhân vật:
| Tên file | Nội dung |
|---|---|
| `hs-nu-chao.png` | Sinh viên nữ vẫy chào, tươi cười. |
| `hs-nam-chao.png` | Sinh viên nam giơ ngón cái. |
| `hs-nu-lam-bai.png` | Sinh viên nữ ngồi làm bài trên tablet, tập trung. |
| `hs-nam-thi-nghiem.png` | Sinh viên nam chuẩn độ: tay chỉnh khóa buret, bình nón bên dưới. |
| `gv-nu.png` | Giảng viên nữ cầm bảng kẹp, mỉm cười (màn hình Tạo đề / Giáo viên). |
| `gv-nam.png` | Giảng viên nam chỉ vào bảng trắng trống (không chữ). |
| `nhom-hs-gv.png` | 1536×1024: 2 sinh viên + 1 giảng viên + mascot đứng cạnh nhau (màn hình đăng nhập/chào mừng). |

### Đợt 5 – Bộ icon (thay emoji hiện nay)
Tất cả 1024×1024, trong suốt, **cùng một bộ**: phong cách 3D nhẹ bóng bẩy, viền mềm, bảng màu như mục 1. Gửi ChatGPT tối đa 4 icon/lần, nhắc "cùng bộ với các icon trước".

Thanh menu dưới & ô trang chủ:
| Tên file | Hình |
|---|---|
| `ic-trang-chu.png` | Ngôi nhà nhỏ có mái hình bình nón. |
| `ic-ly-thuyet.png` | Quyển sách mở, có phân tử bay lên. |
| `ic-bai-tap.png` | Tờ bài làm + bút chì + dấu tích. |
| `ic-tao-de.png` | Tập đề kẹp ghim + bánh răng nhỏ. |
| `ic-tra-cuu.png` | Kính lúp trên quyển sổ bảng. |
| `ic-mo-phong.png` | Buret có giọt nước + đường cong chuẩn độ. |
| `ic-may-tinh.png` | Máy tính cầm tay. |

15 chương (mỗi chương 1 icon):
| Tên file | Hình |
|---|---|
| `ch-mo-dau.png` | Bình nón + kính lúp. |
| `ch-do-luong.png` | Cân phân tích. |
| `ch-thong-ke.png` | Biểu đồ đường cong chuông. |
| `ch-can-bang.png` | Cân hai đĩa thăng bằng với hai phân tử. |
| `ch-acid-base.png` | Giấy quỳ nửa đỏ nửa xanh. |
| `ch-chuan-do-acid-base.png` | Buret nhỏ giọt vào bình nón hồng. |
| `ch-edta.png` | Ion kim loại được "ôm" bởi phân tử càng cua. |
| `ch-ket-tua.png` | Ống nghiệm có kết tủa trắng lắng đáy. |
| `ch-oxh-k.png` | Mũi tên electron chạy giữa hai ion, tia lửa nhỏ. |
| `ch-dien-hoa.png` | Máy đo pH có điện cực. |
| `ch-uv-vis.png` | Cuvet + chùm sáng màu. |
| `ch-quang-nguyen-tu.png` | Ngọn lửa màu. |
| `ch-sac-ki.png` | Cột sắc kí có các dải màu. |
| `ch-gc-hplc.png` | Sắc kí đồ nhiều đỉnh nhọn. |
| `ch-tach-chiet.png` | Phễu chiết hai lớp màu. |

> Nếu tên chương của app khác danh sách trên, Claude sẽ tự ghép; anh/chị cứ gửi đủ 15 icon.

Icon tính năng nhỏ:
`ic-dong-ho.png` (đồng hồ bấm giờ), `ic-in.png` (máy in), `ic-chia-se.png` (mũi tên chia sẻ), `ic-luu.png` (đĩa/bookmark), `ic-cau-chum.png` (3 tờ giấy chồng kẹp), `ic-xu.png` (đồng xu hình phân tử), `ic-chuoi-ngay.png` (ngọn lửa), `ic-huy-hieu.png` (huy hiệu ngôi sao), `ic-tai-khoan.png` (hình người đội kính bảo hộ), `ic-cai-dat.png` (bánh răng), `ic-dang-xuat.png` (cửa + mũi tên).

### Đợt 6 – Màn hình đặc biệt
| Tên file | Khung | Nội dung |
|---|---|---|
| `nen-dang-nhap.png` | 1024×1536 | Cổng vào phòng thí nghiệm trên đảo nổi, cửa mở ánh sáng; phần giữa để trống cho ô đăng nhập. |
| `nen-ket-qua-tot.png` | 1024×1536 | Pháo hoa màu các ngọn lửa nguyên tố, trời đêm. |
| `nen-trong.png` | 1024×1024, trong suốt | Bình nón rỗng, mạng nhện nhỏ dễ thương (màn hình "chưa có dữ liệu"). |

---

## 4. Tin nhắn mẫu cho mỗi đợt
```
Giữ đúng phong cách và nhân vật đã duyệt. Áp dụng "Quy định xuất ảnh" ở trên.
Vẽ lần lượt các ảnh sau, mỗi ảnh một file riêng, ghi tên file dưới mỗi ảnh:
1. <tên file> – <khung> – <nội dung>
2. ...
```
Nếu ảnh có chữ / sai nhân vật / nền không trong suốt: trả lời *"Vẽ lại <tên file>: bỏ hết chữ, nền trong suốt, giữ đúng nhân vật như bảng"*.

---

## 5. Gửi lại cho Claude
- Gửi file PNG gốc (tải từ ChatGPT), đã đổi đúng tên. Có thể nén 1 file zip mỗi đợt: `dot-1.zip`, `dot-2.zip`…
- Không cần chỉnh kích thước. Claude sẽ nén sang WebP (nền ≈ 150–250 KB, icon ≈ 10–20 KB), đặt vào thư mục `anh/giao-dien/` và cập nhật app.
