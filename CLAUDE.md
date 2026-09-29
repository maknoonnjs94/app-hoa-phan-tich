# App Hóa phân tích — ghi chú cho phiên làm việc mới

PWA tĩnh (HTML/CSS/JS), chạy trên GitHub Pages từ nhánh `main`: https://maknoonnjs94.github.io/app-hoa-phan-tich/

## Cách làm việc với người dùng (bắt buộc)
- Trả lời bằng tiếng Việt đơn giản; người dùng không chuyên kĩ thuật, chủ yếu dùng điện thoại Android.
- **Tiết kiệm token**: việc tốn (cử agent, Opus phản biện, đọc file lớn) phải hỏi trước. Tối đa 1–2 agent cùng lúc. Không tự ý mở việc mới.
- Soạn theo input (đề thi, bảng dạng đã duyệt) để ít phải sửa. Không tự ý đưa câu vào kho đã duyệt (`ngan-hang.js`).
- Model agent: soạn/sửa = Sonnet; phản biện = Opus, **một lần**, chỉ trên câu mới. Không dùng Haiku.
- Không đưa nội dung đề thi gốc hay tên môn/giảng viên/trường vào repo (repo công khai).
- Commit kết thúc bằng hai dòng: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` và dòng `Claude-Session:` của phiên.
- Mỗi thay đổi file app: tăng `PHIEN_BAN` trong `sw.js`; file mới phải thêm vào danh sách precache của `sw.js` và thẻ `<script>` trong `index.html`.

## Cấu trúc
- `noi-dung.js`: lí thuyết 15 chương (`CHUONG`, trường `lyThuyet` là HTML + KaTeX) và `TRA_CUU` (36 bảng hằng số, có nguồn).
- `ngan-hang.js` (khai báo `NGAN_HANG`) + `ngan-hang-1…13.js` (chỉ `NGAN_HANG.push(...)`): câu đã duyệt. `ngan-hang-cho-duyet.js`: khai báo `NGAN_HANG_CHO_DUYET = []` cho câu mới; file chờ duyệt mới chỉ dùng `NGAN_HANG_CHO_DUYET.push(...)`, KHÔNG khai báo biến.
- `phan-dang.js`: bảng dạng đã duyệt cho từng chương; câu cũ tự đổi nhãn dạng theo mã Dxx; câu mới có `dangMoi: true`.
- Câu chùm: các câu cùng trường `chum` và `dan` (đề dẫn chung).
- `app.js`: màn hình, kho câu hỏi, luyện tập, tra cứu kiểu thư viện. `tao-de.js`: tạo đề nhiều mã, làm bài có hạn giờ, in PDF, chia sẻ link.
- `mo-phong.js`: mô phỏng tương tác. `anh/`: ảnh thật (Wikimedia, có ghi nguồn trong `anh/nguon.js`).
- Hình SVG tĩnh trong lí thuyết: `<div class="hinh-tinh"><svg>…</svg><p class="chu-thich">…</p></div>`; không dùng class `gian-do`, không `<style>` trong SVG.

## Quy ước chuyên môn
- pKa CH3COOH 4,75; pKb NH3 4,75; Nernst 0,059; E° MnO4⁻ 1,51 V; metyl da cam 3,1–4,4; lg Kf CaY 10,70; Cu²⁺/Cu⁺ 0,18 V. Lệch 0,01–0,02 so với đề thi là chấp nhận, miễn đáp án khớp số ghi trong đề.
- pH 2 chữ số thập phân; số khác theo chữ số có nghĩa; dấu phẩy thập phân; dấu trừ "−". Công thức chữ đứng thẳng.
- Mức độ: 1 Nhận biết, 2 Thông hiểu, 3 Vận dụng, 4 Vận dụng cao. Mục tiêu cả chương ≈ 20/30/35/15 %.

## Quy tắc soạn câu hỏi (rút từ các vòng phản biện)
- Nhiễu chỉ là lỗi thật của sinh viên (quên pha loãng, quên cộng thể tích, nhầm pKa↔pKb, sai tỉ lượng thật, quên bình phương/căn/log…). Cấm ×2/÷2 vô căn cứ, "đọc nhầm số", M của chất không liên quan, ghép hai lỗi.
- Không số nào sát ranh giới làm tròn; tối đa 1 nhiễu sai bậc 10/câu; không nhiễu vô lí (%>100, nồng độ âm…); số liệu mẫu thực tế.
- Mọi hằng số/M dùng tới phải có trong đề câu đó. Lời giải không gọi "phương án 1/2/A/B" (app xáo thứ tự).
- Vị trí đáp án xáo ngẫu nhiên cân bằng trong từng dạng; hạng đáp án không lặp một phía; câu định tính cân độ dài.

## Trạng thái
- Người dùng đã duyệt toàn bộ: 15 chương lí thuyết (bỏ cờ `choDuyet`) và 1 981 câu trắc nghiệm (đã chuyển sang `NGAN_HANG`).
- Giao diện: trang chủ nền tối kiểu phòng lab (ảnh trong `anh/giao-dien/`, cắt từ ảnh mẫu người dùng gửi), logo robot linh vật; hướng dẫn đặt ảnh ChatGPT ở `thiet-ke/dat-anh-chatgpt.md`.
- Báo lỗi: nút "⚑ Báo lỗi" ở cuối mỗi mục lí thuyết, câu hỏi (kho, làm bài, xem lại), bài tự luận; lưu localStorage "bao-loi", màn `#/bao-loi` (gửi qua Chia sẻ). Mã: `chuong/muc-N`, mã câu, `chuong/bai-N`. Khi có Firebase thì đẩy báo lỗi lên chung.
- Tài khoản (Firebase dự án hoa-phan-tich, gói Spark, SDK compat trong `vendor/firebase/`): `tai-khoan.js` (đăng nhập, đổi MK lần đầu, trang quản trị), `giao-bai.js` (GV giao đề cho lớp, bảng điểm + tải CSV; HS làm bài được giao có chống gian lận: rời app, hình mờ, đảo câu theo HS, chặn chép, toàn màn hình, một máy). Luật bảo mật ở `firestore.rules` — sửa xong phải nhắc người dùng dán lại vào Firestore → Rules → Publish. QTV đầu tiên theo UID trong luật.
