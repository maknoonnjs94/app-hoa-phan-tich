# Quy tắc bổ sung lí thuyết (bắt buộc)
- Nguồn: báo cáo độ đầy đủ scratchpad/pbdd/bao-cao.md (làm đúng các mục của chương được giao), tom-tat-slides.md, phan-tich-de-thi.md (dạng đề), Harris. Hằng số theo quy ước app (xem TRA_CUU cuối noi-dung.js và chương đó).
- KHÔNG sửa /home/user/app-hoa-phan-tich/*. Đọc chương hiện tại từ noi-dung.js (trường lyThuyet của CHUONG có id tương ứng), viết BẢN MỚI ĐẦY ĐỦ của lyThuyet vào scratchpad/lt/<id>.html (chỉ nội dung bên trong String.raw`...`, không có dấu ` và không có ${ ).
- GIỮ toàn bộ nội dung đúng đang có, mọi <div class="mo-phong" data-loai=...>, cấu trúc <h3> đánh số mục, class hiện có (muc-tieu, cong-thuc, nhan, vi-du, loi-giai…, bang-cuon/bang, luu-y). Bắt chước đúng cách viết ví dụ + lời giải ẩn hiện của chương hiện tại. Nếu chương có mảng baiTap, không đụng.
- Viết thêm: phần thiếu, giải thích "vì sao", điều kiện áp dụng, mục "Lỗi hay gặp", ví dụ giải mẫu đúng dạng đề (số liệu mới, đáp án tự tính lại bằng Python, pH 2 chữ số thập phân, số khác theo chữ số có nghĩa, không sát ranh giới làm tròn).
- Hình tĩnh: SVG inline bọc trong <div class="gian-do"><svg viewBox="..."> ... </svg></div>, dùng màu var(--mau-chinh), var(--chu), var(--chu-phu), var(--vien), var(--xanh), var(--vang) để hợp cả nền sáng/tối; chữ trong SVG ≥ 10px theo viewBox rộng ~320; chú thích tiếng Việt.
- KaTeX: toán chỉ trong \( \) hoặc \[ \]; không HTML trong đó; hóa chất \mathrm{...}; công thức dài tách aligned/gathered để vừa màn 360px; dấu phẩy thập phân viết "0,059" (KaTeX ok). Dùng dấu "−" trong văn bản.
- Không ghi tên giảng viên/môn/trường. Tiếng Việt đơn giản, rõ ràng.
- Tự kiểm: chạy thử render: copy noi-dung.js sang scratchpad/lt/thu/, thay lyThuyet chương bằng file mới, rồi dùng Playwright (chromium tại /opt/pw-browsers/chromium) mở một bản sao app phục vụ bằng python http.server ở cổng riêng (8770+) để kiểm tra không lỗi KaTeX (.katex-error), không tràn ngang ở 360px. Hoặc tham khảo scratchpad/tatca.mjs.
- Báo cáo cuối ngắn: đã thêm gì mỗi chương (số ví dụ, hình, mục).

## CẬP NHẬT (bắt buộc) về hình SVG
- Bọc hình bằng <div class="hinh-tinh"><svg viewBox="0 0 320 H">…</svg><p class="chu-thich">…</p></div> (CSS app đã có sẵn .hinh-tinh: reset width/fill/stroke). KHÔNG dùng class "gian-do" (JS vẽ đè), KHÔNG thêm <style> bên trong SVG (CSS lan ra cả trang), KHÔNG dùng class tự đặt trong SVG — mọi màu/nét/cỡ chữ ghi thẳng thuộc tính (fill, stroke, font-size) trên từng thẻ.
- Chữ không đè nhau, không bị cắt; mũi tên chỉ đúng vào hộp; markerUnits="userSpaceOnUse".
- Chụp ảnh Playwright từng hình (360px, nền sáng và tối) và tự xem lại trước khi báo cáo.
