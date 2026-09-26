# App Điện Thoại

Đây là một trang web chạy giống app trên điện thoại (PWA): mở toàn màn hình, có thanh tab dưới đáy, cài được ra màn hình chính và mở được cả khi mất mạng. Không cần đưa lên CH Play hay App Store.

Địa chỉ web (sau khi bật GitHub Pages): **https://maknoonnjs94.github.io/app-hoa-phan-tich/**

## 1. Bật GitHub Pages để có địa chỉ web (làm 1 lần)

1. Vào repo trên GitHub, bấm **Settings**, rồi chọn **Pages** ở cột trái.
2. Mục **Build and deployment**:
   - **Source**: chọn *Deploy from a branch*
   - **Branch**: chọn `main` và thư mục `/ (root)`, rồi bấm **Save**
3. Đợi khoảng 1–2 phút rồi tải lại trang. Địa chỉ web sẽ hiện ở đầu trang.

## 2. Cài lên điện thoại

**Android (Chrome):** mở địa chỉ web. Bấm nút **Cài** trong hộp gợi ý hiện lên, hoặc bấm menu ⋮ rồi chọn **Cài đặt ứng dụng** (hay **Thêm vào màn hình chính**).

**iPhone (Safari):** mở địa chỉ web, bấm nút **Chia sẻ** ⬆️, chọn **Thêm vào MH chính**, rồi bấm **Thêm**.

Sau khi cài, app có biểu tượng riêng trên màn hình chính và mở toàn màn hình, không còn thanh địa chỉ.

## 3. Sửa app

| Muốn sửa | Mở file |
|---|---|
| Nội dung các màn hình, thêm màn hình mới | `app.js` (phần `MAN_HINH` ở đầu file) |
| Màu sắc, cỡ chữ | `style.css` (các biến `--mau-chinh`, `--nen`… ở đầu file) |
| Tên các tab dưới đáy | `index.html` (phần `<nav class="tabbar">`) |
| Tên app, màu thanh trạng thái | `manifest.webmanifest` và `index.html` |
| Biểu tượng app | thay các ảnh trong thư mục `icons/`, giữ nguyên tên file và kích thước |

**Sau mỗi lần sửa:** mở `sw.js` và tăng số phiên bản (`v1` thành `v2`, `v3`…). Nếu không tăng, điện thoại đã cài app có thể vẫn hiện bản cũ. Mở lại app 1–2 lần là nhận bản mới.

Cách sửa ngay trên web GitHub: mở file, bấm biểu tượng ✏️, sửa, rồi bấm **Commit changes**. Khoảng 1 phút sau web tự cập nhật.

### Thêm một màn hình mới

Trong `app.js`, thêm một mục vào `MAN_HINH`:

```js
"/lien-he": {
  tieuDe: "Liên hệ",
  manHinhCon: true,          // có nút Quay lại; bỏ dòng này nếu là tab chính
  ve: () => `
    <div class="card">Số điện thoại: 0123 456 789</div>
  `,
},
```

Rồi tạo link tới nó ở chỗ bất kỳ: `<a href="#/lien-he">Liên hệ</a>`.

## 4. Chạy thử trên máy tính

Mở thư mục này trong terminal rồi chạy:

```
python3 -m http.server 8000
```

Sau đó mở http://localhost:8000. Muốn xem giống điện thoại thì bấm F12 và bật chế độ điện thoại (biểu tượng 📱).

## Cấu trúc file

```
index.html            Khung app: thanh tiêu đề, vùng nội dung, thanh tab
style.css             Giao diện (tự đổi nền tối theo điện thoại)
app.js                Các màn hình và điều hướng
manifest.webmanifest  Khai báo để cài được như app
sw.js                 Lưu sẵn giao diện để mở khi mất mạng
icons/                Biểu tượng app
```
