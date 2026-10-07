# Nhật ký phát triển giao diện / tính năng (v167 → v182)

Phiên "Giao diện & tính năng". Không đụng `kho.bin`, `noi-dung.js`, `phan-dang.js`. Mỗi thay đổi app: tăng `PHIEN_BAN` (sw.js) + `BAN_APP` (giao-bai.js). File mới: thêm vào precache `sw.js` và danh sách script trong `kho-khoa.js` (không phải thẻ `<script>` — app nạp qua kho-khoa.js). Luật Firestore sửa xong **phải nhắc người dùng dán lại Rules → Publish** (người dùng dùng điện thoại: gửi file bằng SendUserFile).

## Quy trình làm việc đã dùng
1. `git pull --rebase origin main` trước khi làm và trước khi push; commit kèm `Co-Authored-By` + `Claude-Session`.
2. Kiểm tra: `node --check` từng file; hàm thuần (thống kê, sinh lịch, OCR…) thử bằng script node/Playwright trong thư mục scratchpad; giao diện chụp bằng Playwright (Chromium có sẵn `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, module ở `$(npm root -g)/playwright`, serve repo bằng `http-server -p 8099`).
3. Việc cần đăng nhập Firebase không chạy được trong sandbox → mô phỏng bằng stub, rồi nói rõ với người dùng "chưa thử trên máy thật".
4. Trả lời tiếng Việt đơn giản, nêu rõ việc người dùng phải làm (dán luật, đăng nhập lại, tải lại trang).

## Tính năng đã thêm
| Phiên bản | Nội dung | File chính |
|---|---|---|
| v167 | Biểu tượng app = linh vật bình tam giác (icons/*.png, manifest nền kem) | icons/, manifest.webmanifest |
| v168–169 | **Thống kê chi tiết lớp** `#/thong-ke-lop?id=`: TB, trung vị, phương sai (mẫu, n−1), độ lệch chuẩn, Q1–Q3, độ lệch; histogram + đường chuẩn Gauss; biến động qua các bài; so sánh 1 SV với lớp; chọn gộp nhiều bài; tải CSV | thong-ke.js |
| v170 | Tab "Dạng bài & báo động": % đúng theo dạng/chương/LT–TT, ngưỡng xanh ≥70 / vàng / đỏ <40 (sửa được); đề xuất báo động (đúng <40% khi ≥5 câu, ≥3 dạng đỏ, vắng ≥2 bài); GV bấm 🚨 → `nguoiDung.canhBaoHoc` {luc,boi,lop,tl,dang[],ghiChu}; SV thấy khung đỏ ở trang chủ (`theCanhBaoHoc`, ẩn bằng localStorage `cb-hoc-xem`) | thong-ke.js, giao-bai.js |
| v171 | **Điểm danh** `#/diem-danh?lop=`: lịch cố định hằng tuần `lop.lich` {tu,tuan,buoi[{thu,bd,kt,ten,dd}]}; bản ghi `diemDanh/{lop}_{yyyymmdd}_{slot}` {lop,ngay,slot,dd?,kq{uid:c/v/p/m/a},luc,boi}; tự lưu sau 0,7 s; tổng hợp chuyên cần (vàng ≥10%, đỏ ≥20% vắng); CSV | diem-danh.js |
| v171 | **STT + ngày sinh** theo danh sách đầu vào: `lop.danhSach` {uid:{s,ns}}; nhập Excel nhận cột STT / Ngày sinh (`chuanNgaySinh` → dd/mm/yyyy, đọc ngày Excel qua `cellDates` + `dateNF`); lớp trống → STT theo thứ tự dòng, lớp đã có người → nối tiếp / giữ STT cũ. Lớp cũ phải nạp lại file Excel để có STT/ngày sinh | tai-khoan.js (`ghiThuTuLop`), so-diem.js |
| v172, v174 | QTV gán **nhiều GV** cho một lớp bằng danh sách tick (`khungGanGv`), có ở Quản trị → Lớp học phần và ngay trong trang lớp (nút "Giáo viên của lớp"); ghi nhật ký `gan-gv` | tai-khoan.js, so-diem.js |
| v173, v175 | Sửa lệch cột danh sách lớp (`.dong-gon.co-stt` 5 cột); đầu trang lớp gọn: lưới 6 ô thao tác + menu "Khác" | so-diem.js, style.css |
| v176–178 | **Kho ảnh đề thi** `#/kho-de-thi`: làm đẹp ảnh trên máy (`xu-ly-anh.js`), OCR tự điền năm học/kì/đề số/học phần (`doc-thong-tin.js`, Tesseract.js + dữ liệu tiếng Việt trong `vendor/tesseract/`, ~13 MB, chỉ tải khi dùng); lưu Firestore `khoAnhDe/{id}` + `khoAnhDe/{id}/trang/{nn}` (dataURL ≤ ~800 KB) — **không đưa ảnh đề vào repo công khai** | kho-de-thi.js |
| v179 | Điểm danh tự động: SV đã **nộp bài kiểm tra** (không phải bài tập) mở trùng giờ học (±30 phút) → trạng thái `a` "có mặt (tự động)"; không đè dấu GV đã đánh; lưu luôn | diem-danh.js (`ddTuDien`) |
| v180 | **Theo dõi trực tiếp** làm lại: 4 ô số + thanh tiến độ, lọc theo trạng thái (chưa vào / đang làm / đã nộp / ngoài app / mất kết nối / vi phạm), tìm tên-mã-STT, sắp "cần chú ý trước", nhãn màu từng em, tự làm tươi 15 s | giao-bai.js (`tdVe`, `tdTrangThai`) |
| v181 | **Mã đề** của từng SV hiện ở bảng điểm (cột), Excel, theo dõi (nhãn + lọc), mục "Phân mã đề"; `maDeSV(d,id,uid,b)` = `b.maDe` hoặc tính trước `d.maDe[hatTu(uid+id) % len]` | giao-bai.js |
| v182 | **Giao diện máy tính** (≥1024 px): thanh bên trái thay tab đáy, `html{zoom:1.12}`, khung 1220 px, lưới 4 ô; tablet 700–1023 px khung 760 px; điện thoại không đổi | style.css (cuối file) |

## Quyết định kĩ thuật cần nhớ
- **Xử lý ảnh đề** (`xu-ly-anh.js`), thứ tự: xoay đúng chiều → xám → `boNenBan` (Otsu + vùng sáng lớn nhất, **bỏ qua nếu phần bị loại còn có chữ** — lỗi cũ làm mất nửa trang khi giấy bị bóng đổ) → `lamDeuNen` (chia cho nền ước lượng bằng lọc max) → kéo tương phản → `docGoc` thẳng lại (chiếu ngang, ±6°) → `catVien` → phóng to (×2 nếu <1800 px) → làm mượt + làm nét → nén WebP ≤ 600 KB. Không phải AI siêu phân giải; chữ viết tay trên giấy vẫn còn.
- OCR: Tesseract.js 7, `workerBlobURL:false`, đường dẫn cục bộ `vendor/tesseract/`; CSP đã có `wasm-unsafe-eval`. Parse bằng regex (`DOC.phanTich`). Chỉ điền ô còn trống.
- Luật Firestore đã thêm: `diemDanh`, `khoAnhDe` (+ `trang`), `lop` cho GV sửa `ten/danhSach/lich`, `nguoiDung` cho GV ghi `canhBaoHoc` (chỉ SV lớp mình). Điểm danh/Kho đề dùng chung cho mọi GV; xóa kho đề chỉ người thêm hoặc QTV.
- Điểm danh dùng mã `a` để khỏi sửa luật (không thêm trường `tuDong`).
- Thống kê theo dạng cần kho câu hỏi đã mở khóa trên máy (`CAU_THEO_ID`).
- Giao diện máy tính dùng `zoom` (Chrome/Edge/Safari/Firefox ≥126); thanh bên là `position: sticky` trong lưới, không dùng `fixed` để khỏi lệch khi zoom.

## Tên miền riêng (đã làm, ngoài repo)
Website chính của GV là một Cloudflare Worker; app (vẫn nằm trên GitHub Pages) được nhúng vào đường dẫn `/hoaphantich/` bằng cách thêm vào đầu hàm `fetch` của Worker, ngay sau `const url = new URL(request.url);` và trước nhánh `/api/`. Bản đầu chép nguyên header của GitHub nên một lần Chrome báo `ERR_INVALID_RESPONSE`; bản hiện dùng (chỉ chép `content-type`, `etag`, `last-modified`, đặt `Cache-Control: no-cache`, bỏ body khi 204/304):
```js
if (url.pathname === "/hoaphantich") return Response.redirect(url.origin + "/hoaphantich/", 301);
if (url.pathname.startsWith("/hoaphantich/")) {
  const goc = "https://maknoonnjs94.github.io/app-hoa-phan-tich/";
  const r = await fetch(goc + url.pathname.slice("/hoaphantich/".length) + url.search, { headers: { Accept: request.headers.get("Accept") || "*/*" } });
  const h = new Headers();
  for (const k of ["content-type", "etag", "last-modified"]) if (r.headers.get(k)) h.set(k, r.headers.get(k));
  h.set("Cache-Control", "no-cache");
  return new Response(r.status === 304 || r.status === 204 ? null : r.body, { status: r.status, headers: h });
}
```
Nếu `/hoaphantich/` lỗi mà `maknoonnjs94.github.io/app-hoa-phan-tich/` vẫn chạy → lỗi nằm ở Worker (kiểm tra còn đoạn trên không, có bị dán đè không). Phương án dự phòng không cần Worker: CNAME tên miền phụ → `maknoonnjs94.github.io` (DNS only) + file `CNAME` trong repo + Custom domain ở GitHub Pages + thêm tên miền vào Firebase Authorized domains. Firebase đã thêm tên miền riêng; SV phải đăng nhập lại ở mỗi địa chỉ mới (localStorage theo origin). Mã nguồn Worker và khóa Supabase **không** được đưa vào repo.

## Việc người dùng còn phải làm / có thể làm tiếp
- Dán `firestore.rules` mới nhất vào Firebase (nếu chưa) — thiếu thì Điểm danh, Kho đề thi, STT/ngày sinh, báo động báo "không có quyền".
- Lớp cũ: nạp lại file Excel (＋ Thêm SV) để có STT + ngày sinh.
- Ý tưởng chưa làm: GV tự thêm đồng nghiệp vào lớp (cần sửa luật); báo động tự động theo ngưỡng; nới điều kiện giờ cho điểm danh tự động; so sánh hai lớp; chỉnh các màn GV cho màn rộng (bảng điểm, danh sách lớp 2 cột); đọc thêm thông tin từ ảnh đề.
- v187: Theo mẫu mockup: thanh tab nổi 5 mục (Trang chủ, Học tập, Luyện tập [GV `#/bai-tap`, SV `#/bai-duoc-giao` qua `.tab-gv`/`.tab-hs`], Lớp học [GV], Tài khoản; Tạo đề và Tra cứu chỉ còn ở ô trang chủ); danh sách 15 chương gọn (`theChuong`: icon, số tròn, thanh tiến độ, ✓ khi ≥95%, nhãn "Đang học" theo `docGanNhat()`), banner đảo theo nhóm (`BIA_NHOM`, `theoNhom(..., true)`); màn làm bài mới (thẻ `.lam-tien-do`, đồng hồ 3D, linh vật nhắc/mừng theo kết quả, ẩn thanh tab khi `body.dang-lam`).
- v188–v189: Làm gọn cho điện thoại (≤700 px): `.btn`, thẻ, chữ nhỏ hơn; danh sách lớp học `.lh-lop` (5 nút một hàng `.lh-nut`); thống kê chi tiết gọn (hàng chọn bài ngang `.tk-hang-chon`, nhãn Vắng=0); `.nut-hang` thành lưới chia đều một hàng (≥4 nút → 2 cột; loại trừ `.hai-nut`, `.day-chon`, `.nh-tuy`); nhãn nút rút ngắn; tiêu đề một/hai dòng. Nguyên tắc: tránh xuống dòng thừa, ưu tiên hàng cuộn ngang và lưới đều.
- v190: `thamGiaBai(b)` (giao-bai.js): chỉ tính SV đã trả lời ≥1 câu hoặc GV đã chấm tay vào TB / phân bố / Gauss / dạng bài / báo động; mở bài mà chưa làm câu nào = không tham gia (hiện "vắng"). Nhãn **Vắng=0** để tính 0 cho người không tham gia.
