# App Hóa phân tích — ghi chú cho phiên làm việc mới

PWA tĩnh (HTML/CSS/JS), chạy trên GitHub Pages từ nhánh `main`: https://maknoonnjs94.github.io/app-hoa-phan-tich/

## Cách làm việc với người dùng (bắt buộc)
- Trả lời bằng tiếng Việt đơn giản; người dùng không chuyên kĩ thuật, chủ yếu dùng điện thoại Android.
- **Tiết kiệm token**: việc tốn (cử agent, Opus phản biện, đọc file lớn) phải hỏi trước. Tối đa 1–2 agent cùng lúc. Không tự ý mở việc mới.
- Soạn theo input (đề thi, bảng dạng đã duyệt) để ít phải sửa. Không tự ý đưa câu vào kho đã duyệt (`ngan-hang.js`).
- Model agent: soạn/sửa = Sonnet; phản biện = Opus, **một lần**, chỉ trên câu mới. Không dùng Haiku.
- Không đưa nội dung đề thi gốc hay tên môn/giảng viên/trường vào repo (repo công khai).
- Commit kết thúc bằng hai dòng: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` và dòng `Claude-Session:` của phiên.
- Mỗi thay đổi file app: tăng `PHIEN_BAN` trong `sw.js` (và `BAN_APP` trong `giao-bai.js` cho khớp); file mới phải thêm vào danh sách precache của `sw.js` và thẻ `<script>` trong `index.html`.

## Cấu trúc
- `noi-dung.js`: lí thuyết 15 chương (`CHUONG`, trường `lyThuyet` là HTML + KaTeX) và `TRA_CUU` (36 bảng hằng số, có nguồn).
- **Kho câu hỏi có khóa**: toàn bộ câu trắc nghiệm (`nganHang`, `choDuyet`) và bài tự luận (`baiTap` theo id chương) nằm trong `kho.bin` (gzip + AES-GCM, PBKDF2 250 000 vòng). Không còn file `ngan-hang*.js`; `noi-dung.js` để `baiTap: []`. `kho-khoa.js` khai báo `MUC_DO`, `NGAN_HANG`, `NGAN_HANG_CHO_DUYET`, giải kho nếu máy có khóa đã lưu (localStorage `khoa-kho`) rồi mới nạp phan-dang.js, app.js, tao-de.js, Firebase, tai-khoan.js, giao-bai.js.
- Sửa/thêm câu: xin người dùng **mật khẩu kho** → `node cong-cu/kho.mjs mo <mk> <thư mục scratchpad>` → sửa `kho.json` (câu mới đưa vào `choDuyet`) → `node cong-cu/kho.mjs dong <kho.json> <mk>` → commit `kho.bin`. TUYỆT ĐỐI không commit `kho.json` hay mật khẩu.
- `phan-dang.js`: bảng dạng đã duyệt cho từng chương; câu cũ tự đổi nhãn dạng theo mã Dxx; câu mới có `dangMoi: true`.
- Câu chùm: các câu cùng trường `chum` và `dan` (đề dẫn chung).
- `app.js`: màn hình, kho câu hỏi, luyện tập, tra cứu kiểu thư viện. `tao-de.js`: tạo đề = ĐỀ MẪU theo dạng (mỗi vị trí là một dạng; 🎲 câu khác cùng dạng, 🔁 đổi dạng, ✋ chọn tay, ＋ thêm theo dạng) rồi SINH N MÃ: mỗi mã `ma[k].cau` lấy câu KHÁC cùng dạng (không trùng mã nào, `canhBao` khi hết câu), thứ tự câu/phương án xáo riêng; làm bài có hạn giờ, in PDF, chia sẻ link. Giao lớp nhiều mã: `deGiao.maDe=[{ma,cau}]`, SV nhận mã theo hash(uid+id) rồi xáo riêng; `baiNop.maDe` ghi mã.
- `mo-phong.js`: mô phỏng tương tác. `anh/`: ảnh thật (Wikimedia, có ghi nguồn trong `anh/nguon.js`).
- Hình SVG tĩnh trong lí thuyết: `<div class="hinh-tinh"><svg>…</svg><p class="chu-thich">…</p></div>`; không dùng class `gian-do`, không `<style>` trong SVG.

## Quy ước chuyên môn
- pKa CH3COOH 4,75; pKb NH3 4,75; Nernst 0,059; E° MnO4⁻ 1,51 V; metyl da cam 3,1–4,4; lg Kf CaY 10,70; Cu²⁺/Cu⁺ 0,18 V. Lệch 0,01–0,02 so với đề thi là chấp nhận, miễn đáp án khớp số ghi trong đề.
- pH 2 chữ số thập phân; số khác theo chữ số có nghĩa; dấu phẩy thập phân; dấu trừ "−". Công thức chữ đứng thẳng.
- Mức độ: 1 Nhận biết, 2 Thông hiểu, 3 Vận dụng, 4 Vận dụng cao. Mục tiêu cả chương ≈ 20/30/35/15 %.

## Loại câu và mức độ
- Mỗi câu có `loai`: `lt` (lí thuyết/khái niệm) hoặc `tt` (phải tính: đáp án số, hoặc tính rồi mới kết luận); phan-dang.js tự gán theo đề/đáp án, có thể ghi đè bằng trường `loai`. Tạo đề thay câu theo cùng dạng + cùng loại + cùng mức.
- Thang mức cho câu tính: 2 = 1–2 bước; 3 = nhiều bước trên một hệ; 4 (Vận dụng cao) = mẫu thật/quy trình nhiều công đoạn (định mức, hút, chuẩn độ ngược/gián tiếp, công thức dài, câu chùm).

## Quy tắc soạn câu hỏi (rút từ các vòng phản biện)
- Nhiễu chỉ là lỗi thật của sinh viên (quên pha loãng, quên cộng thể tích, nhầm pKa↔pKb, sai tỉ lượng thật, quên bình phương/căn/log…). Cấm ×2/÷2 vô căn cứ, "đọc nhầm số", M của chất không liên quan, ghép hai lỗi.
- Không số nào sát ranh giới làm tròn; tối đa 1 nhiễu sai bậc 10/câu; không nhiễu vô lí (%>100, nồng độ âm…); số liệu mẫu thực tế.
- Mọi hằng số/M dùng tới phải có trong đề câu đó. Lời giải không gọi "phương án 1/2/A/B" (app xáo thứ tự).
- Vị trí đáp án xáo ngẫu nhiên cân bằng trong từng dạng; hạng đáp án không lặp một phía; câu định tính cân độ dài.

## Trạng thái
- Người dùng đã duyệt toàn bộ: 15 chương lí thuyết (bỏ cờ `choDuyet`) và 2 093 câu trắc nghiệm đã duyệt (`NGAN_HANG`); 180 câu bổ sung mức 3–4 (id BS1-, BS2-) đang chờ duyệt trong `choDuyet`.
- Giao diện: trang chủ nền tối kiểu phòng lab (ảnh trong `anh/giao-dien/`, cắt từ ảnh mẫu người dùng gửi), logo robot linh vật; hướng dẫn đặt ảnh ChatGPT ở `thiet-ke/dat-anh-chatgpt.md`.
- Báo lỗi: nút "⚑ Báo lỗi" ở cuối mỗi mục lí thuyết, câu hỏi (kho, làm bài, xem lại), bài tự luận; lưu localStorage "bao-loi", màn `#/bao-loi` (gửi qua Chia sẻ). Mã: `chuong/muc-N`, mã câu, `chuong/bai-N`. Khi có Firebase thì đẩy báo lỗi lên chung.
- Tài khoản (Firebase dự án hoa-phan-tich, gói Spark, SDK compat trong `vendor/firebase/`): `tai-khoan.js` (đăng nhập, đổi MK lần đầu, trang quản trị), `giao-bai.js` (GV giao đề cho lớp, bảng điểm + tải CSV; HS làm bài được giao có chống gian lận: rời app, hình mờ, đảo câu theo HS, chặn chép, toàn màn hình, một máy). Mô hình lớp: LỚP HỌC PHẦN do GV tạo (`lop/{id}` = ten, gv[], taoBoi), SV nhiều ngành: `nguoiDung.lopHoc` = [id lớp HP], `nganh` = lớp hành chính; GV `lopDay` = [id lớp dạy]; `deGiao.lop`/`baiNop.lop`/`dapAnDe.lop` = id lớp HP (+ `lopTen`). Trang lớp `#/lop?id=`, thêm SV `#/nhap-lop?id=` (link Google Sheets qua gviz CSV / Excel / dán / theo mã; có TK thì chỉ thêm vào lớp). Kết quả: `so-diem.js` (chốt điểm → baiNop.diemChot; sửa điểm → diemSua + ghiChuDiem; điểm cuối = diemSua ?? diemChot ?? tính; xem bài làm `#/bai-lam`; sổ điểm lớp `#/so-diem`). Nhập danh sách lớp từ Excel/CSV (SheetJS `vendor/xlsx/`, tải khi cần) trong Quản trị → Nhập danh sách. Luật bảo mật ở `firestore.rules` — sửa xong phải nhắc người dùng dán lại vào Firestore → Rules → Publish. QTV đầu tiên theo UID trong luật. Sinh viên đăng nhập bằng mã SV → `<mã>@<tên miền>`; tên miền ở Firestore `cauHinh/chung` (đọc công khai), mật khẩu khởi tạo ở `cauHinh/rieng` (mặc định 123456) — đặt trong Quản trị → Cài đặt, KHÔNG ghi tên trường vào mã nguồn.
