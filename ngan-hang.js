/* =========================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM (A, B, C, D)
   Mỗi câu:
     id       mã câu, không trùng (ví dụ "DC-001")
     chuong   id chương trong noi-dung.js (ví dụ "dai-cuong")
     dang     tên dạng bài (dùng để lọc, bốc đề theo dạng)
     mucDo    1 Nhận biết · 2 Thông hiểu · 3 Vận dụng · 4 Vận dụng cao
     de       đề bài (được viết công thức \( ... \) như phần lý thuyết)
     phuongAn 4 phương án theo thứ tự A, B, C, D
     dapAn    "A" | "B" | "C" | "D"
     loiGiai  lời giải ngắn (hiện sau khi làm)
   Khi làm bài, app tự xáo thứ tự phương án nên cứ viết đáp án ở vị trí bất kì.
   ========================================================= */
const MUC_DO = ["", "Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao"];

const NGAN_HANG = [
  /* ===================== CHƯƠNG 1: ĐẠI CƯƠNG & SAI SỐ ===================== */
  {
    id: "DC-001", chuong: "dai-cuong", dang: "Các loại nồng độ", mucDo: 1,
    de: "Trong dung dịch nước loãng, nồng độ 1 ppm tương ứng với",
    phuongAn: ["1 mg/L", "1 g/L", "1 µg/L", "1 mg/mL"],
    dapAn: "A",
    loiGiai: "1 ppm = 1 mg/kg; dung dịch nước loãng có khối lượng riêng ≈ 1 kg/L nên 1 ppm ≈ 1 mg/L.",
  },
  {
    id: "DC-002", chuong: "dai-cuong", dang: "Đổi nồng độ", mucDo: 3,
    de: "Dung dịch HNO<sub>3</sub> 65%, khối lượng riêng 1,40 g/mL (M = 63,01). Nồng độ mol của dung dịch là",
    phuongAn: ["14,4 M", "10,3 M", "1,44 M", "20,2 M"],
    dapAn: "A",
    loiGiai: String.raw`\( C_\mathrm{M} = \dfrac{10\cdot1,40\cdot65}{63,01} = 14,4\ \mathrm{M} \). Phương án 10,3 M là do quên nhân khối lượng riêng.`,
  },
  {
    id: "DC-003", chuong: "dai-cuong", dang: "Pha chế từ chất rắn", mucDo: 3,
    de: "Khối lượng K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (M = 294,18) cần để pha 250,0 mL dung dịch 0,02000 M là",
    phuongAn: ["1,471 g", "5,884 g", "0,1471 g", "14,71 g"],
    dapAn: "A",
    loiGiai: String.raw`\( m = 0,02000\cdot0,2500\cdot294,18 = 1,471\ \mathrm{g} \). Nhớ đổi 250,0 mL = 0,2500 L.`,
  },
  {
    id: "DC-004", chuong: "dai-cuong", dang: "Pha loãng", mucDo: 3,
    de: "Cần lấy bao nhiêu mL dung dịch HCl 12,0 M để pha thành 250,0 mL dung dịch HCl 0,500 M?",
    phuongAn: ["10,4 mL", "6,0 mL", "24 mL", "104 mL"],
    dapAn: "A",
    loiGiai: String.raw`\( V_1 = \dfrac{C_2V_2}{C_1} = \dfrac{0,500\cdot250,0}{12,0} = 10,4\ \mathrm{mL} \)`,
  },
  {
    id: "DC-005", chuong: "dai-cuong", dang: "Các loại sai số", mucDo: 1,
    de: "Sai số hệ thống chủ yếu ảnh hưởng đến",
    phuongAn: ["độ đúng của kết quả", "độ chụm của kết quả", "số chữ số có nghĩa của kết quả", "số lần đo cần thực hiện"],
    dapAn: "A",
    loiGiai: "Sai số hệ thống làm kết quả lệch về một phía so với giá trị thật, tức ảnh hưởng độ đúng. Sai số ngẫu nhiên mới ảnh hưởng độ chụm.",
  },
  {
    id: "DC-006", chuong: "dai-cuong", dang: "Các loại sai số", mucDo: 2,
    de: "Loại sai số nào có thể giảm bằng cách tăng số lần đo lặp lại?",
    phuongAn: ["Sai số ngẫu nhiên", "Sai số hệ thống do dụng cụ", "Sai số hệ thống do phương pháp", "Sai số thô"],
    dapAn: "A",
    loiGiai: "Sai số ngẫu nhiên lệch cả hai phía nên bù trừ nhau khi lấy trung bình nhiều lần đo. Sai số hệ thống không giảm khi đo lặp lại.",
  },
  {
    id: "DC-007", chuong: "dai-cuong", dang: "Thống kê kết quả", mucDo: 3,
    de: "Bốn lần đo cho kết quả: 5,12 ; 5,16 ; 5,10 ; 5,14. Độ lệch chuẩn s của dãy số liệu là",
    phuongAn: ["0,026", "0,022", "0,0067", "0,060"],
    dapAn: "A",
    loiGiai: String.raw`\( \bar{x} = 5,13 \); \( s = \sqrt{\dfrac{\sum(x_i - \bar{x})^2}{n - 1}} = \sqrt{\dfrac{0,0020}{3}} = 0,026 \). Phương án 0,022 là do chia cho n thay vì n − 1.`,
  },
  {
    id: "DC-008", chuong: "dai-cuong", dang: "Loại số liệu ngờ", mucDo: 3,
    de: "Bốn kết quả chuẩn độ: 0,512 ; 0,520 ; 0,515 ; 0,545. Với độ tin cậy 95% (Q<sub>bảng</sub> = 0,829 khi n = 4), giá trị 0,545",
    phuongAn: ["được giữ lại vì Q<sub>tính</sub> = 0,758 < 0,829", "bị loại vì Q<sub>tính</sub> = 0,758 > 0,5", "bị loại vì Q<sub>tính</sub> = 1,32 > 0,829", "được giữ lại vì Q<sub>tính</sub> = 0,242 < 0,829"],
    dapAn: "A",
    loiGiai: String.raw`Xếp tăng dần: 0,512 ; 0,515 ; 0,520 ; 0,545. \( Q = \dfrac{0,545 - 0,520}{0,545 - 0,512} = 0,758 < 0,829 \) nên phải giữ lại.`,
  },
  {
    id: "DC-009", chuong: "dai-cuong", dang: "Chữ số có nghĩa", mucDo: 2,
    de: "Số 0,02050 có bao nhiêu chữ số có nghĩa?",
    phuongAn: ["4", "3", "5", "6"],
    dapAn: "A",
    loiGiai: "Các số 0 đứng đầu (0,0) không có nghĩa. Còn lại 2, 0, 5, 0 đều có nghĩa (số 0 ở giữa và số 0 cuối phần thập phân) → 4 chữ số có nghĩa.",
  },
  {
    id: "DC-010", chuong: "dai-cuong", dang: "Chữ số có nghĩa", mucDo: 3,
    de: "Dung dịch có [H<sup>+</sup>] = 3,2·10<sup>−4</sup> M. Giá trị pH được ghi đúng số chữ số có nghĩa là",
    phuongAn: ["3,49", "3,5", "3,495", "3,4949"],
    dapAn: "A",
    loiGiai: "[H⁺] có 2 chữ số có nghĩa nên pH lấy 2 chữ số thập phân: pH = −lg(3,2·10⁻⁴) = 3,49.",
  },
  {
    id: "DC-011", chuong: "dai-cuong", dang: "Thống kê kết quả", mucDo: 3,
    de: "Ba lần phân tích cho x̄ = 25,40% và s = 0,12%. Với t = 4,30 (f = 2, độ tin cậy 95%), khoảng tin cậy của giá trị thật là",
    phuongAn: ["25,40 ± 0,30 %", "25,40 ± 0,52 %", "25,40 ± 0,12 %", "25,40 ± 0,07 %"],
    dapAn: "A",
    loiGiai: String.raw`\( \mu = \bar{x} \pm \dfrac{ts}{\sqrt{n}} = 25,40 \pm \dfrac{4,30\cdot0,12}{\sqrt{3}} = 25,40 \pm 0,30\ \% \)`,
  },
  {
    id: "DC-012", chuong: "dai-cuong", dang: "Đổi nồng độ", mucDo: 3,
    de: "Dung dịch Cu<sup>2+</sup> 2,00·10<sup>−4</sup> M (Cu = 63,55) có nồng độ tính theo ppm là",
    phuongAn: ["12,7 ppm", "0,0127 ppm", "127 ppm", "1,27 ppm"],
    dapAn: "A",
    loiGiai: String.raw`\( \mathrm{ppm} = C_\mathrm{M}\cdot M\cdot1000 = 2,00\cdot10^{-4}\cdot63,55\cdot1000 = 12,7\ \mathrm{mg/L} \)`,
  },

  /* ===================== CHƯƠNG 2: CÂN BẰNG ACID – BASE ===================== */
  {
    id: "AB-001", chuong: "axit-bazo", dang: "Hằng số acid – base", mucDo: 1,
    de: "Trong các acid có cùng nồng độ, acid mạnh nhất là acid có",
    phuongAn: ["pK<sub>a</sub> nhỏ nhất", "pK<sub>a</sub> lớn nhất", "K<sub>a</sub> nhỏ nhất", "pK<sub>b</sub> của base liên hợp nhỏ nhất"],
    dapAn: "A",
    loiGiai: "pKₐ càng nhỏ thì Kₐ càng lớn, acid càng mạnh (và base liên hợp càng yếu, tức pK_b càng lớn).",
  },
  {
    id: "AB-002", chuong: "axit-bazo", dang: "Thuyết Brønsted", mucDo: 2,
    de: "Khi HCO<sub>3</sub><sup>−</sup> đóng vai trò acid, base liên hợp của nó là",
    phuongAn: ["CO<sub>3</sub><sup>2−</sup>", "H<sub>2</sub>CO<sub>3</sub>", "CO<sub>2</sub>", "OH<sup>−</sup>"],
    dapAn: "A",
    loiGiai: "Acid cho proton: HCO₃⁻ ⇌ H⁺ + CO₃²⁻. Vậy base liên hợp là CO₃²⁻. (H₂CO₃ là acid liên hợp khi HCO₃⁻ đóng vai trò base.)",
  },
  {
    id: "AB-003", chuong: "axit-bazo", dang: "pH acid, base mạnh", mucDo: 2,
    de: "pH của dung dịch HCl 0,0050 M là",
    phuongAn: ["2,30", "11,70", "2,00", "5,30"],
    dapAn: "A",
    loiGiai: "[H⁺] = 0,0050 M → pH = −lg 0,0050 = 2,30.",
  },
  {
    id: "AB-004", chuong: "axit-bazo", dang: "pH acid, base mạnh", mucDo: 2,
    de: "pH của dung dịch NaOH 0,0020 M là",
    phuongAn: ["11,30", "2,70", "12,30", "11,70"],
    dapAn: "A",
    loiGiai: "[OH⁻] = 0,0020 M → pOH = 2,70 → pH = 14 − 2,70 = 11,30.",
  },
  {
    id: "AB-005", chuong: "axit-bazo", dang: "pH acid yếu", mucDo: 3,
    de: "pH của dung dịch HCOOH 0,30 M (pK<sub>a</sub> = 3,75) là",
    phuongAn: ["2,14", "1,87", "4,27", "2,64"],
    dapAn: "A",
    loiGiai: String.raw`\( \dfrac{\Ca}{\Ka} \approx 1\,690 \ge 400 \) nên dùng công thức căn: \( \mathrm{pH} = \tfrac{1}{2}(3,75 - \lg0,30) = \tfrac{1}{2}(3,75 + 0,52) = 2,14 \). Phương án 4,27 là do quên chia 2.`,
  },
  {
    id: "AB-006", chuong: "axit-bazo", dang: "pH dung dịch muối", mucDo: 3,
    de: "pH của dung dịch NH<sub>4</sub>Cl 0,10 M (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,24) là",
    phuongAn: ["5,12", "8,88", "4,62", "9,24"],
    dapAn: "A",
    loiGiai: String.raw`NH₄⁺ là acid yếu: \( \mathrm{pH} = \tfrac{1}{2}(9,24 - \lg0,10) = \tfrac{1}{2}(9,24 + 1) = 5,12 \)`,
  },
  {
    id: "AB-007", chuong: "axit-bazo", dang: "Dung dịch đệm", mucDo: 3,
    de: "pH của dung dịch đệm gồm NH<sub>3</sub> 0,20 M và NH<sub>4</sub>Cl 0,10 M (pK<sub>a</sub> của NH<sub>4</sub><sup>+</sup> = 9,24) là",
    phuongAn: ["9,54", "8,94", "9,24", "4,46"],
    dapAn: "A",
    loiGiai: String.raw`\( \mathrm{pH} = \pKa + \lg\dfrac{C_\mathrm{NH_3}}{C_\mathrm{NH_4^+}} = 9,24 + \lg\dfrac{0,20}{0,10} = 9,54 \)`,
  },
  {
    id: "AB-008", chuong: "axit-bazo", dang: "Dung dịch đệm", mucDo: 2,
    de: "Để pha dung dịch đệm có pH ≈ 7, nên chọn cặp nào?",
    phuongAn: ["H<sub>2</sub>PO<sub>4</sub><sup>−</sup> / HPO<sub>4</sub><sup>2−</sup> (pK<sub>a</sub> = 7,20)", "CH<sub>3</sub>COOH / CH<sub>3</sub>COO<sup>−</sup> (pK<sub>a</sub> = 4,76)", "NH<sub>4</sub><sup>+</sup> / NH<sub>3</sub> (pK<sub>a</sub> = 9,24)", "H<sub>3</sub>PO<sub>4</sub> / H<sub>2</sub>PO<sub>4</sub><sup>−</sup> (pK<sub>a</sub> = 2,15)"],
    dapAn: "A",
    loiGiai: "Chọn cặp có pKₐ gần pH cần pha nhất (khoảng đệm pKₐ ± 1): pKₐ = 7,20 là phù hợp.",
  },
  {
    id: "AB-009", chuong: "axit-bazo", dang: "Chất lưỡng tính", mucDo: 3,
    de: "pH của dung dịch NaHCO<sub>3</sub> 0,10 M (H<sub>2</sub>CO<sub>3</sub>: pK<sub>a1</sub> = 6,35 ; pK<sub>a2</sub> = 10,33) xấp xỉ bằng",
    phuongAn: ["8,34", "6,35", "10,33", "7,00"],
    dapAn: "A",
    loiGiai: String.raw`Chất lưỡng tính: \( \mathrm{pH} = \dfrac{6,35 + 10,33}{2} = 8,34 \)`,
  },
  {
    id: "AB-010", chuong: "axit-bazo", dang: "pH acid yếu", mucDo: 2,
    de: "Khi tính pH của acid yếu HA nồng độ C<sub>a</sub>, phải giải phương trình bậc hai (không dùng được công thức căn) khi",
    phuongAn: ["C<sub>a</sub>/K<sub>a</sub> < 400", "C<sub>a</sub>/K<sub>a</sub> ≥ 400", "K<sub>a</sub>·C<sub>a</sub> ≫ K<sub>w</sub>", "C<sub>a</sub> > 0,1 M"],
    dapAn: "A",
    loiGiai: "Công thức căn chỉ đúng khi acid phân li ≤ 5%, tức Cₐ/Kₐ ≥ 400. Khi Cₐ/Kₐ < 400 phải giải phương trình bậc hai.",
  },
  {
    id: "AB-011", chuong: "axit-bazo", dang: "pH dung dịch muối", mucDo: 3,
    de: "pH của dung dịch CH<sub>3</sub>COONa 0,010 M (pK<sub>a</sub> của CH<sub>3</sub>COOH = 4,76) là",
    phuongAn: ["8,38", "5,62", "3,38", "8,88"],
    dapAn: "A",
    loiGiai: String.raw`\( \Kb = 10^{-9,24} \); \( \OH = \sqrt{10^{-9,24}\cdot0,010} = 2,40\cdot10^{-6} \) → pOH = 5,62 → pH = 8,38.`,
  },
  {
    id: "AB-012", chuong: "axit-bazo", dang: "Dung dịch đệm", mucDo: 4,
    de: "Thêm 0,0050 mol NaOH vào 1,00 L dung dịch đệm CH<sub>3</sub>COOH 0,10 M + CH<sub>3</sub>COONa 0,10 M (pK<sub>a</sub> = 4,76; coi thể tích không đổi). pH sau khi thêm là",
    phuongAn: ["4,80", "4,72", "4,76", "11,70"],
    dapAn: "A",
    loiGiai: String.raw`OH⁻ phản ứng với CH₃COOH: \( C_\mathrm{HA} = 0,095 \); \( C_\mathrm{A^-} = 0,105 \). \( \mathrm{pH} = 4,76 + \lg\dfrac{0,105}{0,095} = 4,80 \)`,
  },
];
