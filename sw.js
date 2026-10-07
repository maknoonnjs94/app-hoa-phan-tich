/* Service worker: lưu sẵn các file giao diện để app mở được khi mất mạng.
   MỖI LẦN SỬA CODE: tăng số phiên bản bên dưới (v1 → v2 → v3...)
   để điện thoại đã cài app nhận bản mới. */
const PHIEN_BAN = "app-dien-thoai-v191";

const FILE_GIAO_DIEN = [
  "./",
  "index.html",
  "style.css",
  "anh/3d/bao-loi.webp",
  "anh/3d/chia-se.webp",
  "anh/3d/chuoi-ngay.webp",
  "anh/3d/co-giao.webp",
  "anh/3d/dong-ho.webp",
  "anh/3d/gop-y.webp",
  "anh/3d/hero.webp",
  "anh/3d/mascot-ngu.webp",
  "anh/3d/mascot-cho.webp",
  "anh/3d/nhom-chao.webp",
  "anh/3d/thay-giao.webp",
  "anh/3d/sv-nu-lam.webp",
  "anh/3d/sv-nam-lam.webp",
  "anh/3d/mascot-chao.webp",
  "anh/3d/mascot-dung.webp",
  "anh/3d/mascot-sai.webp",
  "anh/3d/mascot-an-mung.webp",
  "anh/3d/ch/mo-dau.webp",
  "anh/3d/ch/do-luong.webp",
  "anh/3d/ch/thong-ke.webp",
  "anh/3d/ch/can-bang.webp",
  "anh/3d/ch/axit-bazo.webp",
  "anh/3d/ch/chuan-do-axit-bazo.webp",
  "anh/3d/ch/edta.webp",
  "anh/3d/ch/ket-tua.webp",
  "anh/3d/ch/oxi-hoa-khu.webp",
  "anh/3d/ch/dien-hoa.webp",
  "anh/3d/ch/uv-vis.webp",
  "anh/3d/ch/quang-nguyen-tu.webp",
  "anh/3d/ch/sac-ki.webp",
  "anh/3d/ch/gc-hplc.webp",
  "anh/3d/in.webp",
  "anh/3d/lop-hoc.webp",
  "anh/3d/luu.webp",
  "anh/3d/luyen-tap.webp",
  "anh/3d/ly-thuyet.webp",
  "anh/3d/may-tinh.webp",
  "anh/3d/sv-nam.webp",
  "anh/3d/sv-nu.webp",
  "anh/3d/tai-khoan.webp",
  "anh/3d/tao-de.webp",
  "anh/3d/tra-cuu.webp",
  "anh/3d/trang-chu.webp",
  "noi-dung.js",
  "mo-phong.js",
  "kho-khoa.js",
  "phan-dang.js",
  "anh/nguon.js",
  "anh/giao-dien/canh-trang-chu.webp",
  "anh/giao-dien/o-doc-tiep.webp",
  "anh/giao-dien/o-ly-thuyet.webp",
  "anh/giao-dien/o-tao-de.webp",
  "anh/giao-dien/o-luyen-tap.webp",
  "anh/giao-dien/moc-mam.webp",
  "anh/giao-dien/moc-tinh-the.webp",
  "anh/giao-dien/bia-can.webp",
  "anh/giao-dien/bia-buret.webp",
  "anh/giao-dien/bia-ph.webp",
  "anh/giao-dien/bia-quang-pho.webp",
  "anh/giao-dien/bia-sac-ki.webp",
  "anh/binh-dinh-muc.webp",
  "anh/binh-non.webp",
  "anh/bop-cao-su.webp",
  "anh/buret.webp",
  "anh/can-phan-tich.webp",
  "anh/coc-co-mo.webp",
  "anh/cuvet.webp",
  "anh/den-catot-rong.webp",
  "anh/may-aas.webp",
  "anh/may-do-ph.webp",
  "anh/may-gc.webp",
  "anh/may-hplc.webp",
  "anh/may-uv-vis.webp",
  "anh/micropipet.webp",
  "anh/ong-dong.webp",
  "anh/pipet-bau.webp",
  "anh/pipet-chia-do.webp",
  "vendor/be-vietnam-pro/fonts.css",
  "vendor/be-vietnam-pro/be-vietnam-pro-latin-400-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-latin-500-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-latin-600-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-latin-700-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-latin-ext-400-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-latin-ext-500-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-latin-ext-600-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-latin-ext-700-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-vietnamese-400-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-vietnamese-500-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-vietnamese-600-normal.woff2",
  "vendor/be-vietnam-pro/be-vietnam-pro-vietnamese-700-normal.woff2",
  "vendor/katex/katex.min.css",
  "vendor/katex/katex.min.js",
  "vendor/katex/mhchem.min.js",
  "vendor/katex/fonts/KaTeX_AMS-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff2",
  "vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Fraktur-Bold.woff2",
  "vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Main-Bold.woff2",
  "vendor/katex/fonts/KaTeX_Main-BoldItalic.woff2",
  "vendor/katex/fonts/KaTeX_Main-Italic.woff2",
  "vendor/katex/fonts/KaTeX_Main-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Math-BoldItalic.woff2",
  "vendor/katex/fonts/KaTeX_Math-Italic.woff2",
  "vendor/katex/fonts/KaTeX_SansSerif-Bold.woff2",
  "vendor/katex/fonts/KaTeX_SansSerif-Italic.woff2",
  "vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Script-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Size1-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Size2-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Size3-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Size4-Regular.woff2",
  "vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2",
  "app.js",
  "tao-de.js",
  "tai-khoan.js",
  "giao-bai.js",
  "so-diem.js",
  "thong-ke.js",
  "diem-danh.js",
  "xu-ly-anh.js",
  "doc-thong-tin.js",
  "kho-de-thi.js",
  "vendor/firebase/firebase-app-compat.js",
  "vendor/firebase/firebase-auth-compat.js",
  "vendor/firebase/firebase-firestore-compat.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(PHIEN_BAN).then(c => c.addAll(FILE_GIAO_DIEN)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== PHIEN_BAN).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Có mạng: lấy bản mới nhất và cập nhật bộ nhớ. Mất mạng: dùng bản đã lưu.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: "no-cache" })   // bỏ qua bộ nhớ đệm HTTP để luôn lấy bản mới khi có mạng
      .then(res => {
        const banSao = res.clone();
        caches.open(PHIEN_BAN).then(c => c.put(e.request, banSao));
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
