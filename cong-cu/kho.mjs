// Khóa / mở ngân hàng câu hỏi (dùng cho người soạn, chạy bằng Node 18+)
//   node cong-cu/kho.mjs dong <kho.json> <mat-khau>     → ghi kho.bin (đã nén gzip + mã hóa AES-GCM)
//   node cong-cu/kho.mjs mo <mat-khau> <thu-muc-ra>     → giải kho.bin ra <thu-muc-ra>/kho.json để sửa
// kho.json = { nganHang: [...câu đã duyệt], choDuyet: [...câu chờ duyệt], baiTap: { idChuong: [...bài tự luận] } }
// Định dạng kho.bin: 16 byte muối | 12 byte iv | bản mã. Khóa = PBKDF2-SHA256(mật khẩu, muối, 250 000 vòng), 256 bit.
// KHÔNG đưa kho.json (bản rõ) vào kho mã công khai.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { gzipSync, gunzipSync } from "node:zlib";
import { webcrypto } from "node:crypto";
const { subtle } = webcrypto, getRandomValues = a => webcrypto.getRandomValues(a);

const VONG = 250000;
async function taoKhoa(matKhau, muoi) {
  const goc = await subtle.importKey("raw", new TextEncoder().encode(matKhau), "PBKDF2", false, ["deriveKey"]);
  return subtle.deriveKey({ name: "PBKDF2", salt: muoi, iterations: VONG, hash: "SHA-256" }, goc, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}
const [lenh, a, b] = process.argv.slice(2);
if (lenh === "dong") {
  const du = JSON.parse(readFileSync(a, "utf8"));
  if (!Array.isArray(du.nganHang)) throw new Error("kho.json thiếu nganHang");
  const muoi = getRandomValues(new Uint8Array(16)), iv = getRandomValues(new Uint8Array(12));
  const ma = new Uint8Array(await subtle.encrypt({ name: "AES-GCM", iv }, await taoKhoa(b, muoi), gzipSync(JSON.stringify(du), { level: 9 })));
  writeFileSync("kho.bin", Buffer.concat([muoi, iv, ma]));
  console.log(`Đã khóa ${du.nganHang.length} câu + ${du.choDuyet?.length || 0} chờ duyệt → kho.bin (${ma.length} byte)`);
} else if (lenh === "mo") {
  const t = readFileSync("kho.bin");
  const ro = await subtle.decrypt({ name: "AES-GCM", iv: t.subarray(16, 28) }, await taoKhoa(a, t.subarray(0, 16)), t.subarray(28));
  mkdirSync(b, { recursive: true });
  writeFileSync(`${b}/kho.json`, JSON.stringify(JSON.parse(gunzipSync(Buffer.from(ro))), null, 1));
  console.log(`Đã mở kho ra ${b}/kho.json`);
} else console.log("Cách dùng: dong <kho.json> <mat-khau> | mo <mat-khau> <thu-muc>");
