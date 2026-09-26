/* Service worker: lưu sẵn các file giao diện để app mở được khi mất mạng.
   MỖI LẦN SỬA CODE: tăng số phiên bản bên dưới (v1 → v2 → v3...)
   để điện thoại đã cài app nhận bản mới. */
const PHIEN_BAN = "app-dien-thoai-v34";

const FILE_GIAO_DIEN = [
  "./",
  "index.html",
  "style.css",
  "noi-dung.js",
  "ngan-hang.js",
  "ngan-hang-cho-duyet.js",
  "mo-phong.js",
  "anh/nguon.js",
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
    fetch(e.request)
      .then(res => {
        const banSao = res.clone();
        caches.open(PHIEN_BAN).then(c => c.put(e.request, banSao));
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
