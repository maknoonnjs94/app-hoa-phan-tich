/* Câu hỏi chờ duyệt bổ sung — các chương công cụ (uv-vis, quang-nguyen-tu, dien-hoa, gc-hplc) và chương Đo lường.
   uv-vis "D06 · Định lượng mẫu thật bằng UV-Vis": 10 câu (UV-B001..B010) + chùm UV-C01 (5 câu, UV-B011..B015) = 15 câu.
   quang-nguyen-tu "D05 · Định lượng bằng quang phổ nguyên tử": 6 câu (NT-B001..B006).
   dien-hoa "D03 · Điện cực chọn lọc ion (ISE)": 6 câu (DH-B001..B006).
   gc-hplc "D05 · Định lượng bằng sắc kí": 8 câu (GH-B001..B008).
   do-luong "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc": 10 câu (DL-B001..B010).
   Tổng 45 câu. Hằng số M dùng: PO4 94,97; P2O5 141,94; NO3 62,00; N 14,01; N2 28,02; Fe 55,85; Cd 112,41;
   Co 58,93; F 19,00; NaF 41,99; Ca 40,08; caffeine 194,2; paracetamol 151,2; p-aminophenol 109,13;
   aspirin 180,16; vitamin C (acid ascorbic) 176,12; CH3COOH 60,05; CH3COONa 82,03; NH3 17,03; CaCO3 100,09;
   NaHCO3 84,01; Na2CO3 105,99; NaCl 58,44. Nernst: S = 0,05916/|z| (âm cho anion, dương cho cation). */

// ================= CHƯƠNG uv-vis — D06 · Định lượng mẫu thật bằng UV-Vis (10 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B001", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 2,
  de: "Xác định PO<sub>4</sub><sup>3−</sup> trong nước thải bằng phương pháp molybden xanh (890 nm), dùng thêm chuẩn trong bình định mức. Bình 1: hút 10,00 mL mẫu nước, thêm thuốc thử tạo màu, định mức 50,0 mL, đo được A<sub>1</sub> = 0,180. Bình 2: hút 10,00 mL mẫu như trên + 2,00 mL dung dịch chuẩn PO<sub>4</sub><sup>3−</sup> 20,0 ppm, thêm cùng lượng thuốc thử, định mức tới cùng 50,0 mL, đo được A<sub>2</sub> = 0,315. Tính nồng độ PO<sub>4</sub><sup>3−</sup> trong mẫu nước thải ban đầu.",
  phuongAn: ["9,33 ppm", "5,33 ppm", "2,29 ppm", "53,3 ppm"],
  dapAn: "B",
  loiGiai: "Vì hai bình có cùng thể tích cuối, A tỉ lệ thẳng với nồng độ tại thời điểm đo: C<sub>x</sub> = C<sub>s</sub>V<sub>s</sub>A<sub>1</sub>/[(A<sub>2</sub>−A<sub>1</sub>)V<sub>x</sub>] = 20,0·2,00·0,180/[(0,315−0,180)·10,00] = <b>5,33 ppm</b>. Lỗi hay gặp: «9,33 ppm» (dùng nhầm A<sub>2</sub> thay vì A<sub>1</sub> ở tử số công thức); «2,29 ppm» (quên trừ A<sub>1</sub> ở mẫu số, dùng nguyên A<sub>2</sub> làm mẫu số); «53,3 ppm» (quên chia cho thể tích mẫu V<sub>x</sub> = 10,00 mL, tức bỏ sót toàn bộ bước quy đổi về mẫu gốc)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B002", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 4,
  de: "Xác định NO<sub>3</sub><sup>−</sup> trong nước đóng chai bằng phương pháp brucin, có pha loãng mẫu trước khi thêm chuẩn. Hút 5,00 mL mẫu, định mức thành 50,0 mL (dung dịch B). Hai bình định mức 25,0 mL: bình 1 cho 5,00 mL dung dịch B; bình 2 cho 5,00 mL dung dịch B + 1,00 mL dung dịch chuẩn NO<sub>3</sub><sup>−</sup> 2,00·10<sup>−4</sup> M; cả hai thêm cùng lượng brucin và định mức tới vạch, đo được A<sub>1</sub> = 0,176 và A<sub>2</sub> = 0,289. Tính hàm lượng N (từ NO<sub>3</sub><sup>−</sup>) trong mẫu nước đóng chai ban đầu, theo ppm.",
  phuongAn: ["0,873 ppm N", "14,3 ppm N", "38,6 ppm N", "8,73 ppm N"],
  dapAn: "D",
  loiGiai: "Nồng độ NO<sub>3</sub><sup>−</sup> trong dung dịch B: C<sub>B</sub> = C<sub>s</sub>V<sub>s</sub>A<sub>1</sub>/[(A<sub>2</sub>−A<sub>1</sub>)V<sub>x</sub>] = 2,00·10<sup>−4</sup>·1,00·0,176/[(0,289−0,176)·5,00] = 6,23·10<sup>−5</sup> M. Nồng độ trong mẫu gốc: C<sub>B</sub>·(50,0/5,00) = 6,23·10<sup>−4</sup> M NO<sub>3</sub><sup>−</sup>, tương đương 6,23·10<sup>−4</sup>·62,00·10<sup>3</sup> = 38,6 ppm NO<sub>3</sub><sup>−</sup>; quy theo N: 38,6·(14,01/62,00) = <b>8,73 ppm N</b>. Lỗi hay gặp: «0,873 ppm N» (quên nhân hệ số pha loãng 50,0/5,00 khi quy từ dung dịch B về mẫu gốc — thiếu đúng một bậc 10); «38,6 ppm N» (báo nhầm hàm lượng NO<sub>3</sub><sup>−</sup> là hàm lượng N, quên nhân hệ số khối lượng mol 14,01/62,00); «14,3 ppm N» (dùng nhầm A<sub>2</sub> thay vì A<sub>1</sub> ở tử số công thức thêm chuẩn)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B003", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 2,
  de: "Xác định Fe<sup>2+</sup> trong nước ngầm bằng phenanthrolin, dùng thêm chuẩn trong bình định mức. Hai bình định mức 50,0 mL: bình 1 cho 10,00 mL mẫu nước, thêm thuốc thử, định mức, đo được A<sub>1</sub> = 0,198; bình 2 cho 10,00 mL mẫu như trên + 4,00 mL dung dịch chuẩn Fe<sup>2+</sup> 15,0 ppm, cùng thuốc thử, định mức tới cùng 50,0 mL, đo được A<sub>2</sub> = 0,361. Tính nồng độ Fe<sup>2+</sup> trong mẫu nước ngầm ban đầu.",
  phuongAn: ["7,29 ppm", "13,3 ppm", "45,6 ppm", "72,9 ppm"],
  dapAn: "A",
  loiGiai: "C<sub>x</sub> = C<sub>s</sub>V<sub>s</sub>A<sub>1</sub>/[(A<sub>2</sub>−A<sub>1</sub>)V<sub>x</sub>] = 15,0·4,00·0,198/[(0,361−0,198)·10,00] = <b>7,29 ppm</b> (mức Fe khá cao nhưng vẫn gặp trong nước ngầm nhiễm sắt). Lỗi hay gặp: «13,3 ppm» (dùng nhầm A<sub>2</sub> thay vì A<sub>1</sub> ở tử số); «72,9 ppm» (quên chia cho thể tích mẫu V<sub>x</sub> = 10,00 mL); «45,6 ppm» (hoán đổi vai trò V<sub>x</sub> và V<sub>s</sub> trong công thức, dùng 15,0·10,00·0,198/[(0,361−0,198)·4,00])."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B004", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 3,
  de: "Xác định SO<sub>4</sub><sup>2−</sup> trong nước thải bằng phương pháp đo độ đục BaSO<sub>4</sub>, dùng thêm chuẩn trong bình định mức. Hai bình định mức 50,0 mL: bình 1 cho 20,00 mL mẫu nước + huyền phù BaCl<sub>2</sub>, định mức, đo được A<sub>1</sub> = 0,145; bình 2 cho 20,00 mL mẫu như trên + 1,00 mL dung dịch chuẩn SO<sub>4</sub><sup>2−</sup> 50,0 mg/100 mL, cùng huyền phù BaCl<sub>2</sub>, định mức tới cùng 50,0 mL, đo được A<sub>2</sub> = 0,302. Tính nồng độ SO<sub>4</sub><sup>2−</sup> trong mẫu nước thải ban đầu (ppm).",
  phuongAn: ["48,1 ppm", "12,0 ppm", "23,1 ppm", "2,31 ppm"],
  dapAn: "C",
  loiGiai: "Đổi nồng độ chuẩn: 50,0 mg/100 mL = 500 ppm (mg/L). C<sub>x</sub> = C<sub>s</sub>V<sub>s</sub>A<sub>1</sub>/[(A<sub>2</sub>−A<sub>1</sub>)V<sub>x</sub>] = 500·1,00·0,145/[(0,302−0,145)·20,00] = <b>23,1 ppm</b>. Lỗi hay gặp: «48,1 ppm» (dùng nhầm A<sub>2</sub> thay vì A<sub>1</sub> ở tử số); «12,0 ppm» (quên trừ A<sub>1</sub> ở mẫu số, dùng nguyên A<sub>2</sub> làm mẫu số); «2,31 ppm» (quên đổi 50,0 mg/100 mL sang ppm — dùng thẳng số 50,0 làm C<sub>s</sub> theo mg/L, thiếu đúng hệ số 10)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B005", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 3,
  de: "Xác định Co trong phân bón vi lượng bằng phức màu với thuốc thử, dùng thêm chuẩn. Cân 4,00 g phân bón vi lượng, hòa tan và định mức thành 250,0 mL (dung dịch A). Hai bình định mức 50,0 mL: bình 1 cho 20,00 mL dung dịch A + thuốc thử, định mức, đo được A<sub>1</sub> = 0,352; bình 2 cho 20,00 mL dung dịch A như trên + 4,00 mL dung dịch chuẩn Co<sup>2+</sup> 4,00·10<sup>−4</sup> M, cùng thuốc thử, định mức tới cùng 50,0 mL, đo được A<sub>2</sub> = 0,487. Tính % khối lượng Co trong phân bón vi lượng (M<sub>Co</sub> = 58,93).",
  phuongAn: ["0,106 %", "0,0213 %", "1,54 %", "0,0768 %"],
  dapAn: "D",
  loiGiai: "Nồng độ Co<sup>2+</sup> trong dung dịch A: C<sub>A</sub> = C<sub>s</sub>V<sub>s</sub>A<sub>1</sub>/[(A<sub>2</sub>−A<sub>1</sub>)V<sub>x</sub>] = 4,00·10<sup>−4</sup>·4,00·0,352/[(0,487−0,352)·20,00] = 2,086·10<sup>−4</sup> M. Khối lượng Co trong 250,0 mL A: 2,086·10<sup>−4</sup>·0,2500·58,93 = 3,073·10<sup>−3</sup> g ⇒ %Co = 3,073·10<sup>−3</sup>/4,00·100 = <b>0,0768 %</b>. Lỗi hay gặp: «0,106 %» (dùng nhầm A<sub>2</sub> thay vì A<sub>1</sub> ở tử số); «0,0213 %» (quên trừ A<sub>1</sub> ở mẫu số, dùng nguyên A<sub>2</sub>); «1,54 %» (quên chia cho thể tích mẫu V<sub>x</sub> = 20,00 mL khi tính C<sub>A</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B006", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 2,
  de: "Xác định NH<sub>4</sub><sup>+</sup> trong nước ao nuôi bằng phương pháp indophenol, dùng thêm chuẩn trong bình định mức. Hai bình định mức 25,0 mL: bình 1 cho 10,00 mL mẫu nước, thêm thuốc thử, định mức, đo được A<sub>1</sub> = 0,310; bình 2 cho 10,00 mL mẫu như trên + 1,50 mL dung dịch chuẩn NH<sub>4</sub><sup>+</sup> 4,00·10<sup>−3</sup> M, cùng thuốc thử, định mức tới cùng 25,0 mL, đo được A<sub>2</sub> = 0,575. Tính nồng độ NH<sub>4</sub><sup>+</sup> trong mẫu nước ao ban đầu.",
  phuongAn: ["1,30·10<sup>−3</sup> M", "7,02·10<sup>−4</sup> M", "3,23·10<sup>−4</sup> M", "4,68·10<sup>−4</sup> M"],
  dapAn: "B",
  loiGiai: "C<sub>x</sub> = C<sub>s</sub>V<sub>s</sub>A<sub>1</sub>/[(A<sub>2</sub>−A<sub>1</sub>)V<sub>x</sub>] = 4,00·10<sup>−3</sup>·1,50·0,310/[(0,575−0,310)·10,00] = <b>7,02·10<sup>−4</sup> M</b>. Lỗi hay gặp: «1,30·10<sup>−3</sup> M» (dùng nhầm A<sub>2</sub> thay vì A<sub>1</sub> ở tử số); «3,23·10<sup>−4</sup> M» (quên trừ A<sub>1</sub> ở mẫu số, dùng nguyên A<sub>2</sub>); «4,68·10<sup>−4</sup> M» (quên hệ số thể tích chuẩn V<sub>s</sub> = 1,50 mL, coi như V<sub>s</sub> = 1)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B007", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 4,
  de: "Một dược liệu chứa hai hoạt chất X, Y có phổ chồng lên nhau. Từ các chuẩn riêng đo được ε (L·mol<sup>−1</sup>cm<sup>−1</sup>): ở λ′, ε<sub>X</sub>′ = 12500, ε<sub>Y</sub>′ = 2800; ở λ″, ε<sub>X</sub>″ = 3100, ε<sub>Y</sub>″ = 8600. Cân 0,8000 g bột dược liệu, chiết và định mức thành 100,0 mL, đo được A′ = 0,685 và A″ = 0,512 (cuvet 1,00 cm). Tính % khối lượng X trong dược liệu (M<sub>X</sub> = 302,0; M<sub>Y</sub> = 286,0).",
  phuongAn: ["0,163 %", "0,280 %", "0,170 %", "0,161 %"],
  dapAn: "C",
  loiGiai: "Giải hệ A′ = ε<sub>X</sub>′[X] + ε<sub>Y</sub>′[Y]; A″ = ε<sub>X</sub>″[X] + ε<sub>Y</sub>″[Y] bằng định thức: D = 12500·8600 − 2800·3100 = 9,882·10<sup>7</sup>; [X] = (0,685·8600 − 0,512·2800)/D = 4,511·10<sup>−5</sup> M. Khối lượng X trong 100,0 mL: 4,511·10<sup>−5</sup>·0,1000·302,0·1000 = 1,362 mg ⇒ %X = 1,362/(0,8000·1000)·100 = <b>0,170 %</b>. Lỗi hay gặp: «0,163 %» (nhầm lẫn kết quả của Y cho X khi thay vào M<sub>X</sub> — tính đúng hệ nhưng báo nhầm giá trị [Y] là [X]); «0,280 %» (sai dấu trong quy tắc Cramer, cộng thay vì trừ hai số hạng ở tử số: (0,685·8600 + 0,512·2800)/D); «0,161 %» (dùng nhầm M của Y cho khối lượng X, dù đã tính đúng [X])."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B008", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 3,
  de: "Xác định Cd bằng phức màu với dithizon, dùng thêm chuẩn để suy ra ε. Hai bình định mức 50,0 mL: bình 1 cho 10,00 mL mẫu nước, thêm thuốc thử, định mức, đo được A<sub>1</sub> = 0,226; bình 2 cho 10,00 mL mẫu như trên + 3,00 mL dung dịch chuẩn Cd<sup>2+</sup> 8,00 ppm, cùng thuốc thử, định mức tới cùng 50,0 mL, đo được A<sub>2</sub> = 0,407. Tính ε của phức màu (cuvet 1,00 cm, M<sub>Cd</sub> = 112,41).",
  phuongAn: ["4,24·10<sup>4</sup>", "8,48·10<sup>3</sup>", "7,63·10<sup>4</sup>", "0,377"],
  dapAn: "A",
  loiGiai: "Nồng độ mẫu gốc: C<sub>x</sub> = 8,00·3,00·0,226/[(0,407−0,226)·10,00] = 3,00 ppm; nồng độ trong bình 1: C<sub>1</sub> = C<sub>x</sub>V<sub>x</sub>/V<sub>bình</sub> = 3,00·10,00/50,0 = 0,599 ppm = 5,33·10<sup>−6</sup> M (chia cho M<sub>Cd</sub> sau khi đổi mg/L sang g/L). ε = A<sub>1</sub>/(b·C<sub>1</sub>) = 0,226/5,33·10<sup>−6</sup> = <b>4,24·10<sup>4</sup></b>. Lỗi hay gặp: «8,48·10<sup>3</sup>» (quên hệ số pha loãng V<sub>x</sub>/V<sub>bình</sub> khi suy nồng độ trong bình đo, dùng thẳng C<sub>x</sub> của mẫu gốc); «7,63·10<sup>4</sup>» (dùng A<sub>2</sub> nhưng vẫn lấy nồng độ C<sub>1</sub> cũ của bình 1, quên rằng nồng độ đã tăng thêm sau khi thêm chuẩn); «0,377» (quên đổi nồng độ ppm sang mol/L trước khi tính ε, dùng thẳng số ppm)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B009", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 4,
  de: "Xác định P<sub>2</sub>O<sub>5</sub> trong phân bón NPK bằng phương pháp molybden xanh. Cân 1,000 g phân bón, hòa tan và định mức thành 250,0 mL (dung dịch A). Hai bình định mức 50,0 mL: bình 1 cho 10,00 mL dung dịch A + thuốc thử, định mức, đo được A<sub>1</sub> = 0,210; bình 2 cho 10,00 mL dung dịch A như trên + 2,00 mL dung dịch chuẩn PO<sub>4</sub><sup>3−</sup> 100,0 ppm, cùng thuốc thử, định mức tới cùng 50,0 mL, đo được A<sub>2</sub> = 0,398. Tính % khối lượng P<sub>2</sub>O<sub>5</sub> trong phân bón (M<sub>PO4</sub> = 94,97; M<sub>P2O5</sub> = 141,94; cứ 2 PO<sub>4</sub><sup>3−</sup> ứng với 1 P<sub>2</sub>O<sub>5</sub>).",
  phuongAn: ["0,559 %", "0,791 %", "0,835 %", "0,417 %"],
  dapAn: "D",
  loiGiai: "C<sub>A</sub> = 100,0·2,00·0,210/[(0,398−0,210)·10,00] = 22,34 ppm PO<sub>4</sub><sup>3−</sup> ⇒ khối lượng PO<sub>4</sub><sup>3−</sup> trong 250,0 mL A: 22,34·0,2500 = 5,585 mg ⇒ %PO<sub>4</sub><sup>3−</sup> = 5,585/(1,000·1000)·100 = 0,559 %; quy sang P<sub>2</sub>O<sub>5</sub> theo hệ số M<sub>P2O5</sub>/(2M<sub>PO4</sub>) = 141,94/189,94 = 0,7473 ⇒ %P<sub>2</sub>O<sub>5</sub> = 0,559·0,7473 = <b>0,417 %</b>. Lỗi hay gặp: «0,559 %» (quên quy đổi từ %PO<sub>4</sub><sup>3−</sup> sang %P<sub>2</sub>O<sub>5</sub>, báo nhầm kết quả trung gian); «0,791 %» (dùng nhầm A<sub>2</sub> thay vì A<sub>1</sub> ở tử số công thức thêm chuẩn); «0,835 %» (quên hệ số 2 do bỏ qua tỉ lệ 2 PO<sub>4</sub><sup>3−</sup> : 1 P<sub>2</sub>O<sub>5</sub>, dùng hệ số M<sub>P2O5</sub>/M<sub>PO4</sub> thay vì M<sub>P2O5</sub>/(2M<sub>PO4</sub>))."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B010", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 1,
  de: "Chuẩn paracetamol 20,0 mg/L (M = 151,2) đo được %T = 22,0 % trong cuvet 1,00 cm. Tính ε.",
  phuongAn: ["4,97", "3588", "4971", "12531"],
  dapAn: "C",
  loiGiai: "A = 2 − lg(22,0) = 0,658; C = 20,0·10<sup>−3</sup>/151,2 = 1,323·10<sup>−4</sup> M ⇒ ε = A/(bC) = 0,658/1,323·10<sup>−4</sup> = <b>4971</b>. Lỗi hay gặp: «3588» (dùng nhầm M = 109,13 của p-aminophenol thay vì M = 151,2 của paracetamol); «4,97» (quên đổi mg/L sang g/L trước khi chia cho M — dùng thẳng 20,0/151,2 làm nồng độ mol); «12531» (đổi %T sang T sai, chia %T cho 1000 thay vì 100 rồi mới lấy −lg, được A sai = 1,658)."
});

// ================= Câu chùm UV-C01 (D06, 5 câu, UV-B011..B015) =================

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B011", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 2,
  chum: "UV-C01",
  dan: "Xác định NO<sub>3</sub><sup>−</sup> trong mẫu nước giếng khoan bằng phương pháp brucin (đo ở khoảng 410 nm). Hút 10,00 mL mẫu, định mức thành 100,0 mL (dung dịch B) để đưa nồng độ về khoảng đo phù hợp. Lấy hai bình định mức 25,0 mL: bình 1 cho 5,00 mL dung dịch B; bình 2 cho 5,00 mL dung dịch B + 2,00 mL dung dịch chuẩn NO<sub>3</sub><sup>−</sup> 1,50·10<sup>−4</sup> M; cả hai bình được thêm cùng lượng thuốc thử brucin và định mức tới vạch, đo được A<sub>1</sub> = 0,190 (bình 1) và A<sub>2</sub> = 0,398 (bình 2). Cho M(NO<sub>3</sub><sup>−</sup>) = 62,00; M(N) = 14,01.",
  de: "Tính nồng độ NO<sub>3</sub><sup>−</sup> trong dung dịch B.",
  phuongAn: ["1,15·10<sup>−4</sup> M", "5,48·10<sup>−5</sup> M", "2,86·10<sup>−5</sup> M", "2,74·10<sup>−4</sup> M"],
  dapAn: "B",
  loiGiai: "C<sub>B</sub> = C<sub>s</sub>V<sub>s</sub>A<sub>1</sub>/[(A<sub>2</sub>−A<sub>1</sub>)V<sub>x</sub>] = 1,50·10<sup>−4</sup>·2,00·0,190/[(0,398−0,190)·5,00] = <b>5,48·10<sup>−5</sup> M</b>. Lỗi hay gặp: «1,15·10<sup>−4</sup> M» (dùng nhầm A<sub>2</sub> thay vì A<sub>1</sub> ở tử số); «2,86·10<sup>−5</sup> M» (quên trừ A<sub>1</sub> ở mẫu số, dùng nguyên A<sub>2</sub>); «2,74·10<sup>−4</sup> M» (quên chia cho thể tích mẫu V<sub>x</sub> = 5,00 mL)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B012", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 3,
  chum: "UV-C01",
  dan: "Xác định NO<sub>3</sub><sup>−</sup> trong mẫu nước giếng khoan bằng phương pháp brucin (đo ở khoảng 410 nm). Hút 10,00 mL mẫu, định mức thành 100,0 mL (dung dịch B) để đưa nồng độ về khoảng đo phù hợp. Lấy hai bình định mức 25,0 mL: bình 1 cho 5,00 mL dung dịch B; bình 2 cho 5,00 mL dung dịch B + 2,00 mL dung dịch chuẩn NO<sub>3</sub><sup>−</sup> 1,50·10<sup>−4</sup> M; cả hai bình được thêm cùng lượng thuốc thử brucin và định mức tới vạch, đo được A<sub>1</sub> = 0,190 (bình 1) và A<sub>2</sub> = 0,398 (bình 2). Cho M(NO<sub>3</sub><sup>−</sup>) = 62,00; M(N) = 14,01.",
  de: "Dùng kết quả câu trước (C<sub>B</sub> = 5,48·10<sup>−5</sup> M), tính nồng độ NO<sub>3</sub><sup>−</sup> trong mẫu nước giếng khoan ban đầu.",
  phuongAn: ["5,48·10<sup>−4</sup> M", "5,48·10<sup>−5</sup> M", "2,74·10<sup>−4</sup> M", "6,68·10<sup>−4</sup> M"],
  dapAn: "A",
  loiGiai: "Mẫu đã được định mức 10,00 mL → 100,0 mL, vậy nồng độ mẫu gốc gấp 100,0/10,00 = 10 lần dung dịch B: 5,48·10<sup>−5</sup>·10 = <b>5,48·10<sup>−4</sup> M</b>. Lỗi hay gặp: «5,48·10<sup>−5</sup> M» (quên hoàn toàn hệ số pha loãng của bước định mức đầu tiên, coi C<sub>B</sub> là nồng độ mẫu gốc); «2,74·10<sup>−4</sup> M» (nhầm hệ số pha loãng, dùng tỉ lệ thể tích của hai bình đo 25,0/5,00 = 5 thay vì 100,0/10,00 = 10); «6,68·10<sup>−4</sup> M» (cộng thêm nồng độ phần chuẩn đã thêm vào bình 2 rồi mới nhân hệ số 10, tính trùng lặp phần đóng góp của chuẩn)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B013", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 3,
  chum: "UV-C01",
  dan: "Xác định NO<sub>3</sub><sup>−</sup> trong mẫu nước giếng khoan bằng phương pháp brucin (đo ở khoảng 410 nm). Hút 10,00 mL mẫu, định mức thành 100,0 mL (dung dịch B) để đưa nồng độ về khoảng đo phù hợp. Lấy hai bình định mức 25,0 mL: bình 1 cho 5,00 mL dung dịch B; bình 2 cho 5,00 mL dung dịch B + 2,00 mL dung dịch chuẩn NO<sub>3</sub><sup>−</sup> 1,50·10<sup>−4</sup> M; cả hai bình được thêm cùng lượng thuốc thử brucin và định mức tới vạch, đo được A<sub>1</sub> = 0,190 (bình 1) và A<sub>2</sub> = 0,398 (bình 2). Cho M(NO<sub>3</sub><sup>−</sup>) = 62,00; M(N) = 14,01.",
  de: "Dùng kết quả câu trước (nồng độ mẫu gốc = 5,48·10<sup>−4</sup> M), tính hàm lượng NO<sub>3</sub><sup>−</sup> trong mẫu, theo ppm (mg/L).",
  phuongAn: ["3,40 ppm", "0,548 ppm", "7,68 ppm", "34,0 ppm"],
  dapAn: "D",
  loiGiai: "ppm = C·M·10<sup>3</sup> = 5,48·10<sup>−4</sup>·62,00·10<sup>3</sup> = <b>34,0 ppm</b>. Lỗi hay gặp: «3,40 ppm» (dùng nhầm nồng độ dung dịch B (5,48·10<sup>−5</sup> M) thay vì nồng độ mẫu gốc đã nhân hệ số 10 — sai đúng một bậc 10); «0,548 ppm» (quên nhân khối lượng mol M, chỉ nhân 1000 để đổi mol/L thành mmol/L rồi báo nhầm là ppm); «7,68 ppm» (dùng nhầm M(N) = 14,01 thay vì M(NO<sub>3</sub><sup>−</sup>) = 62,00 ngay ở bước này)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B014", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 3,
  chum: "UV-C01",
  dan: "Xác định NO<sub>3</sub><sup>−</sup> trong mẫu nước giếng khoan bằng phương pháp brucin (đo ở khoảng 410 nm). Hút 10,00 mL mẫu, định mức thành 100,0 mL (dung dịch B) để đưa nồng độ về khoảng đo phù hợp. Lấy hai bình định mức 25,0 mL: bình 1 cho 5,00 mL dung dịch B; bình 2 cho 5,00 mL dung dịch B + 2,00 mL dung dịch chuẩn NO<sub>3</sub><sup>−</sup> 1,50·10<sup>−4</sup> M; cả hai bình được thêm cùng lượng thuốc thử brucin và định mức tới vạch, đo được A<sub>1</sub> = 0,190 (bình 1) và A<sub>2</sub> = 0,398 (bình 2). Cho M(NO<sub>3</sub><sup>−</sup>) = 62,00; M(N) = 14,01.",
  de: "Dùng kết quả câu trước (NO<sub>3</sub><sup>−</sup> = 34,0 ppm), tính hàm lượng N (tính theo NO<sub>3</sub><sup>−</sup>) trong mẫu, theo ppm.",
  phuongAn: ["0,768 ppm", "34,0 ppm", "7,68 ppm", "150 ppm"],
  dapAn: "C",
  loiGiai: "ppm N = ppm NO<sub>3</sub><sup>−</sup>·M(N)/M(NO<sub>3</sub><sup>−</sup>) = 34,0·14,01/62,00 = <b>7,68 ppm</b>. Lỗi hay gặp: «34,0 ppm» (quên quy đổi sang N, báo nhầm hàm lượng NO<sub>3</sub><sup>−</sup> là hàm lượng N); «150 ppm» (dùng ngược hệ số quy đổi, nhân với M(NO<sub>3</sub><sup>−</sup>)/M(N) thay vì M(N)/M(NO<sub>3</sub><sup>−</sup>)); «0,768 ppm» (áp dụng đúng hệ số quy đổi nhưng lại dùng nhầm nồng độ NO<sub>3</sub><sup>−</sup> của dung dịch B (3,40 ppm) thay vì của mẫu gốc (34,0 ppm))."
});

NGAN_HANG_CHO_DUYET.push({
  id: "UV-B015", chuong: "uv-vis", dang: "D06 · Định lượng mẫu thật bằng UV-Vis", dangMoi: true, mucDo: 3,
  chum: "UV-C01",
  dan: "Xác định NO<sub>3</sub><sup>−</sup> trong mẫu nước giếng khoan bằng phương pháp brucin (đo ở khoảng 410 nm). Hút 10,00 mL mẫu, định mức thành 100,0 mL (dung dịch B) để đưa nồng độ về khoảng đo phù hợp. Lấy hai bình định mức 25,0 mL: bình 1 cho 5,00 mL dung dịch B; bình 2 cho 5,00 mL dung dịch B + 2,00 mL dung dịch chuẩn NO<sub>3</sub><sup>−</sup> 1,50·10<sup>−4</sup> M; cả hai bình được thêm cùng lượng thuốc thử brucin và định mức tới vạch, đo được A<sub>1</sub> = 0,190 (bình 1) và A<sub>2</sub> = 0,398 (bình 2). Cho M(NO<sub>3</sub><sup>−</sup>) = 62,00; M(N) = 14,01.",
  de: "Quy chuẩn kĩ thuật quốc gia về nước ngầm quy định NO<sub>3</sub><sup>−</sup> (tính theo N) không vượt quá 15 mg/L. Dùng kết quả câu trước (N = 7,68 ppm), mẫu nước giếng khoan này có đạt quy chuẩn không?",
  phuongAn: ["Không đạt, vì nồng độ NO<sub>3</sub><sup>−</sup> tính được là 34,0 mg/L đã vượt 15 mg/L", "Đạt, vì hàm lượng N tính được là 7,68 mg/L, nhỏ hơn 15 mg/L", "Không đạt, vì hàm lượng N tính được là 150 mg/L", "Đạt, vì N tính được chỉ 0,768 mg/L"],
  dapAn: "B",
  loiGiai: "Hàm lượng N tính đúng ở câu trước là 7,68 mg/L, nhỏ hơn giới hạn 15 mg/L nên mẫu <b>đạt</b> quy chuẩn. Lỗi hay gặp: «Không đạt... 34,0 mg/L» (nhầm lẫn nồng độ NO<sub>3</sub><sup>−</sup> với nồng độ N, trong khi quy chuẩn tính theo N); «Không đạt... 150 mg/L» (dùng ngược hệ số quy đổi N/NO<sub>3</sub><sup>−</sup>); «Đạt... 0,768 mg/L» (quên nhân hệ số pha loãng 10 lần khi quy từ dung dịch B về mẫu gốc, tuy kết luận đúng chiều nhưng số liệu sai)."
});

// ================= CHƯƠNG quang-nguyen-tu — D05 · Định lượng bằng quang phổ nguyên tử (6 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "NT-B001", chuong: "quang-nguyen-tu", dang: "D05 · Định lượng bằng quang phổ nguyên tử", dangMoi: true, mucDo: 2,
  de: "Xác định Cd trong nước máy bằng GF-AAS, dùng đường chuẩn ngoại A = 0,00842 + 0,0246·C (C tính theo µg/L). Mẫu đo được A = 0,0842. Tính nồng độ Cd trong mẫu.",
  phuongAn: ["3,42 µg/L", "1,86·10<sup>−3</sup> µg/L", "3,08 µg/L", "3,77 µg/L"],
  dapAn: "C",
  loiGiai: "C = (A − a)/b = (0,0842 − 0,00842)/0,0246 = <b>3,08 µg/L</b>. Lỗi hay gặp: «3,42 µg/L» (quên trừ tung độ gốc a, dùng C = A/b); «1,86·10<sup>−3</sup> µg/L» (đảo ngược công thức, nhân (A−a) với b thay vì chia); «3,77 µg/L» (nhầm dấu tung độ gốc, dùng C = (A+a)/b)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "NT-B002", chuong: "quang-nguyen-tu", dang: "D05 · Định lượng bằng quang phổ nguyên tử", dangMoi: true, mucDo: 2,
  de: "Xác định Pb trong nước đóng chai bằng GF-AAS, đường chuẩn A = 0,0028 + 0,02050·C (C tính theo µg/L). Mẫu đo được A = 0,1252. Quy chuẩn quy định Pb trong nước đóng chai không vượt quá 10 µg/L. Kết luận nào đúng?",
  phuongAn: ["C = 5,97 µg/L, đạt quy chuẩn", "C = 6,24 µg/L, đạt quy chuẩn", "C = 6,11 µg/L, đạt quy chuẩn", "C = 37,4 µg/L, không đạt quy chuẩn"],
  dapAn: "A",
  loiGiai: "C = (A − a)/b = (0,1252 − 0,0028)/0,02050 = 5,97 µg/L, nhỏ hơn 10 µg/L nên <b>đạt</b> quy chuẩn. Lỗi hay gặp: «6,11 µg/L» (quên trừ tung độ gốc, dùng C = A/b); «6,24 µg/L» (nhầm dấu tung độ gốc, dùng C = (A+a)/b); «37,4 µg/L» (nhầm lẫn vai trò hệ số góc và tung độ gốc trong phương trình đường chuẩn, dùng C = (A−b)/a)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "NT-B003", chuong: "quang-nguyen-tu", dang: "D05 · Định lượng bằng quang phổ nguyên tử", dangMoi: true, mucDo: 3,
  de: "Xác định Cd trong gạo bằng GF-AAS. Cân 2,000 g gạo, tro hóa, hòa tan và định mức thành 50,0 mL; hút 5,00 mL dung dịch này, định mức tiếp thành 25,0 mL rồi đo, dùng đường chuẩn ngoại A = 0,0015 + 0,0524·C (C tính theo µg/L). Mẫu đo được A = 0,0684. Tính hàm lượng Cd trong gạo (mg/kg).",
  phuongAn: ["0,0319 mg/kg", "159,6 mg/kg", "0,3192 mg/kg", "0,1596 mg/kg"],
  dapAn: "D",
  loiGiai: "C trong dung dịch đo: (0,0684 − 0,0015)/0,0524 = 1,277 µg/L; quy về dung dịch 50,0 mL (nhân hệ số pha loãng 25,0/5,00 = 5): 1,277·5 = 6,384 µg/L; khối lượng Cd trong 50,0 mL: 6,384·0,0500 = 0,3192 µg; hàm lượng = 0,3192 µg/(2,000 g) = 0,1596 µg/g = <b>0,1596 mg/kg</b>. Lỗi hay gặp: «0,0319 mg/kg» (quên hệ số pha loãng 25,0/5,00 khi quy về dung dịch 50,0 mL); «159,6 mg/kg» (quên đổi µg sang mg, để nguyên đơn vị µg/g báo là mg/kg); «0,3192 mg/kg» (nhầm dùng hệ số pha loãng 50,0/5,00 = 10 thay vì 25,0/5,00 = 5)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "NT-B004", chuong: "quang-nguyen-tu", dang: "D05 · Định lượng bằng quang phổ nguyên tử", dangMoi: true, mucDo: 3,
  de: "Xác định Cu trong nước thải bằng F-AAS, dùng thêm chuẩn một điểm để loại ảnh hưởng nền. Hai bình định mức bằng nhau: bình 1 chứa 20,00 mL mẫu, đo được A<sub>1</sub> = 0,152; bình 2 chứa 20,00 mL mẫu như trên + 2,00 mL dung dịch chuẩn Cu<sup>2+</sup> 10,0 ppm, đo được A<sub>2</sub> = 0,244. Tính nồng độ Cu trong mẫu nước thải.",
  phuongAn: ["2,65 ppm", "1,65 ppm", "0,623 ppm", "33,0 ppm"],
  dapAn: "B",
  loiGiai: "C<sub>x</sub> = C<sub>s</sub>V<sub>s</sub>A<sub>1</sub>/[(A<sub>2</sub>−A<sub>1</sub>)V<sub>x</sub>] = 10,0·2,00·0,152/[(0,244−0,152)·20,00] = <b>1,65 ppm</b>. Lỗi hay gặp: «2,65 ppm» (dùng nhầm A<sub>2</sub> thay vì A<sub>1</sub> ở tử số); «0,623 ppm» (quên trừ A<sub>1</sub> ở mẫu số, dùng nguyên A<sub>2</sub>); «33,0 ppm» (quên chia cho thể tích mẫu V<sub>x</sub> = 20,00 mL)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "NT-B005", chuong: "quang-nguyen-tu", dang: "D05 · Định lượng bằng quang phổ nguyên tử", dangMoi: true, mucDo: 4,
  de: "Xác định Zn trong nước thải bằng F-AAS, dùng thêm chuẩn nhiều mức. Lấy 5,00 mL mẫu vào mỗi bình định mức 25,00 mL trong năm bình, thêm lần lượt các lượng chuẩn Zn 8,00 mg/L tăng dần rồi định mức, đo được tín hiệu A. Hồi quy A theo nồng độ chuẩn thêm vào [S]<sub>f</sub> (đã tính theo mg/L trong từng bình) cho phương trình A = 0,2873 + 0,1520·[S]<sub>f</sub>. Tính nồng độ Zn trong mẫu nước thải ban đầu.",
  phuongAn: ["1,89 mg/L", "0,378 mg/L", "9,45 mg/L", "1,44 mg/L"],
  dapAn: "C",
  loiGiai: "Ngoại suy tới trục hoành: [Zn]<sub>f</sub> = b/m = 0,2873/0,1520 = 1,890 mg/L (nồng độ Zn trong bình 25,00 mL, ứng với 5,00 mL mẫu ban đầu); quy về mẫu gốc: 1,890·(25,00/5,00) = <b>9,45 mg/L</b>. Lỗi hay gặp: «1,89 mg/L» (quên nhân hệ số pha loãng 25,00/5,00 = 5, báo nhầm [Zn]<sub>f</sub> là nồng độ mẫu gốc); «0,378 mg/L» (đảo ngược hệ số pha loãng, nhân với 5,00/25,00 thay vì 25,00/5,00); «1,44 mg/L» (nhầm tung độ gốc b = 0,2873 của phương trình hồi quy chính là [Zn]<sub>f</sub>, quên chia cho hệ số góc m rồi mới nhân hệ số pha loãng)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "NT-B006", chuong: "quang-nguyen-tu", dang: "D05 · Định lượng bằng quang phổ nguyên tử", dangMoi: true, mucDo: 4,
  de: "Xác định Cd trong gạo dùng làm thực phẩm cho trẻ nhỏ bằng GF-AAS. Cân 1,500 g gạo, tro hóa, hòa tan và định mức thành 25,0 mL rồi đo trực tiếp, dùng đường chuẩn ngoại A = 0,0080 + 0,0610·C (C tính theo µg/L). Mẫu đo được A = 0,0870. Biết giới hạn cho phép của Cd trong gạo dùng cho trẻ nhỏ là 0,050 mg/kg, mẫu gạo này có đạt không?",
  phuongAn: ["0,0238 mg/kg, đạt", "21,6 mg/kg, không đạt", "0,0542 mg/kg, không đạt", "0,0216 mg/kg, đạt"],
  dapAn: "D",
  loiGiai: "C = (A−a)/b = (0,0870−0,0080)/0,0610 = 1,295 µg/L; khối lượng Cd trong 25,0 mL: 1,295·0,0250 = 0,0324 µg; hàm lượng = 0,0324 µg/(1,500 g) = 0,0216 µg/g = 0,0216 mg/kg, nhỏ hơn 0,050 mg/kg nên <b>đạt</b>. Lỗi hay gặp: «0,0238 mg/kg» (quên trừ tung độ gốc a, dùng C = A/b — vẫn đạt, nhưng số liệu sai); «21,6 mg/kg» (quên đổi µg sang mg khi tính mg/kg, để nguyên đơn vị µg/g — vượt xa giới hạn); «0,0542 mg/kg» (hoán đổi vai trò hệ số góc và tung độ gốc, dùng C = (A−b)/a — vượt nhẹ giới hạn 0,050 mg/kg nên kết luận cũng sai theo)."
});

// ================= CHƯƠNG dien-hoa — D03 · Điện cực chọn lọc ion (ISE) (6 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "DH-B001", chuong: "dien-hoa", dang: "D03 · Điện cực chọn lọc ion (ISE)", dangMoi: true, mucDo: 2,
  de: "Xác định F<sup>−</sup> trong kem đánh răng bằng điện cực chọn lọc ion. Cân 0,3350 g kem đánh răng, hòa tan cùng TISAB và định mức thành 50,0 mL; lấy toàn bộ 50,0 mL này (V<sub>x</sub>) cho vào cốc đo, điện cực F<sup>−</sup> cho E<sub>1</sub> = −0,0950 V. Thêm V<sub>s</sub> = 0,400 mL dung dịch chuẩn F<sup>−</sup> 1,00·10<sup>−2</sup> M, đo được E<sub>2</sub> = −0,1030 V. Tính %NaF trong kem đánh răng (S = −0,05916 V cho anion; M<sub>F</sub> = 19,00; M<sub>NaF</sub> = 41,99).",
  phuongAn: ["0,0603 %", "0,0364 %", "0,1373 %", "0,1333 %"],
  dapAn: "D",
  loiGiai: "ΔE = E<sub>2</sub>−E<sub>1</sub> = −0,0080 V. C<sub>x</sub> = C<sub>s</sub>V<sub>s</sub>/[(V<sub>x</sub>+V<sub>s</sub>)·10<sup>ΔE/S</sup> − V<sub>x</sub>] = 1,00·10<sup>−2</sup>·0,400/[(50,4)·10<sup>−0,0080/−0,05916</sup> − 50,0] = 2,126·10<sup>−4</sup> M ⇒ %F<sup>−</sup> = 2,126·10<sup>−4</sup>·19,00·(50,0/1000)/0,3350·100 = 0,0603 % ⇒ %NaF = 0,0603·(41,99/19,00) = <b>0,1333 %</b>. Lỗi hay gặp: «0,0603 %» (quên quy đổi từ %F<sup>−</sup> sang %NaF theo hệ số khối lượng mol); «0,0364 %» (quên trừ V<sub>x</sub> ở mẫu số của công thức thêm chuẩn); «0,1373 %» (dùng nhầm V<sub>x</sub> thay vì (V<sub>x</sub>+V<sub>s</sub>) ở số hạng lũy thừa)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DH-B002", chuong: "dien-hoa", dang: "D03 · Điện cực chọn lọc ion (ISE)", dangMoi: true, mucDo: 2,
  de: "Xác định F<sup>−</sup> trong nước máy bằng điện cực chọn lọc ion. Lấy 40,0 mL mẫu nước (đã thêm TISAB) vào cốc đo, điện cực F<sup>−</sup> cho E<sub>1</sub> = −0,0680 V. Thêm 1,00 mL dung dịch chuẩn F<sup>−</sup> 5,00·10<sup>−3</sup> M, đo được E<sub>2</sub> = −0,0745 V. Tính hàm lượng F<sup>−</sup> trong mẫu nước (mg/L; S = −0,05916 V; M<sub>F</sub> = 19,00).",
  phuongAn: ["1,80 mg/L", "7,42 mg/L", "8,25 mg/L", "0,391 mg/L"],
  dapAn: "B",
  loiGiai: "ΔE = −0,0065 V. C<sub>x</sub> = 5,00·10<sup>−3</sup>·1,00/[(41,0)·10<sup>−0,0065/−0,05916</sup> − 40,0] = 3,905·10<sup>−4</sup> M ⇒ mg/L = 3,905·10<sup>−4</sup>·19,00·1000 = <b>7,42 mg/L</b>. Lỗi hay gặp: «1,80 mg/L» (quên trừ V<sub>x</sub> ở mẫu số của công thức thêm chuẩn); «8,25 mg/L» (dùng nhầm V<sub>x</sub> thay vì (V<sub>x</sub>+V<sub>s</sub>) ở số hạng lũy thừa); «0,391 mg/L» (quên nhân khối lượng mol M<sub>F</sub>, báo nhầm số mmol/L nhân 1000 là mg/L)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DH-B003", chuong: "dien-hoa", dang: "D03 · Điện cực chọn lọc ion (ISE)", dangMoi: true, mucDo: 3,
  de: "Xác định NO<sub>3</sub><sup>−</sup> trong nước ép rau bằng điện cực chọn lọc ion. Cân 5,000 g nước ép rau (đã thêm TISAB) vào cốc đo với thể tích tổng 25,0 mL, điện cực NO<sub>3</sub><sup>−</sup> cho E<sub>1</sub> = 0,0850 V. Thêm 1,00 mL dung dịch chuẩn NO<sub>3</sub><sup>−</sup> 0,100 M, đo được E<sub>2</sub> = 0,0320 V. Tính % khối lượng NO<sub>3</sub><sup>−</sup> trong nước ép (S = −0,05916 V; M<sub>NO3</sub> = 62,00).",
  phuongAn: ["0,01726 %", "0,01515 %", "0,01805 %", "17,26 %"],
  dapAn: "A",
  loiGiai: "ΔE = −0,0530 V. C<sub>x</sub> = 0,100·1,00/[(26,0)·10<sup>−0,0530/−0,05916</sup> − 25,0] = 5,569·10<sup>−4</sup> M ⇒ khối lượng NO<sub>3</sub><sup>−</sup> trong 25,0 mL: 5,569·10<sup>−4</sup>·62,00·0,0250·1000 = 0,8632 mg ⇒ % = 0,8632/(5,000·1000)·100 = <b>0,01726 %</b>. Lỗi hay gặp: «0,01515 %» (quên trừ V<sub>x</sub> ở mẫu số của công thức thêm chuẩn); «0,01805 %» (dùng nhầm V<sub>x</sub> thay vì (V<sub>x</sub>+V<sub>s</sub>) ở số hạng lũy thừa); «17,26 %» (quên đổi mg sang g khi tính %, chia khối lượng mẫu tính bằng g cho khối lượng NO<sub>3</sub><sup>−</sup> tính bằng mg mà không nhân thêm hệ số 1000)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DH-B004", chuong: "dien-hoa", dang: "D03 · Điện cực chọn lọc ion (ISE)", dangMoi: true, mucDo: 3,
  de: "Xác định Ca<sup>2+</sup> trong nước cứng bằng điện cực chọn lọc ion Ca<sup>2+</sup> (điện cực màng lỏng). Lấy 50,0 mL mẫu nước (đã thêm dung dịch điều chỉnh lực ion) vào cốc đo, điện cực cho E<sub>1</sub> = 0,0150 V. Thêm 2,00 mL dung dịch chuẩn Ca<sup>2+</sup> 1,00·10<sup>−2</sup> M, đo được E<sub>2</sub> = 0,0350 V. Tính hàm lượng Ca<sup>2+</sup> trong mẫu nước (mg/L; Ca<sup>2+</sup> hóa trị 2 nên S = +0,05916/2 V; M<sub>Ca</sub> = 40,08).",
  phuongAn: ["3,25 mg/L", "4,28 mg/L", "4,08 mg/L", "12,7 mg/L"],
  dapAn: "C",
  loiGiai: "ΔE = 0,0200 V; S = 0,05916/2 = 0,02958 V (vì Ca<sup>2+</sup> hóa trị 2). C<sub>x</sub> = 1,00·10<sup>−2</sup>·2,00/[(52,0)·10<sup>0,0200/0,02958</sup> − 50,0] = 1,017·10<sup>−4</sup> M ⇒ mg/L = 1,017·10<sup>−4</sup>·40,08·1000 = <b>4,08 mg/L</b>. Lỗi hay gặp: «3,25 mg/L» (quên trừ V<sub>x</sub> ở mẫu số của công thức thêm chuẩn); «4,28 mg/L» (dùng nhầm V<sub>x</sub> thay vì (V<sub>x</sub>+V<sub>s</sub>) ở số hạng lũy thừa); «12,7 mg/L» (quên chia S cho hóa trị z = 2, dùng thẳng S = 0,05916 V như với ion hóa trị 1)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DH-B005", chuong: "dien-hoa", dang: "D03 · Điện cực chọn lọc ion (ISE)", dangMoi: true, mucDo: 4,
  de: "Xác định F<sup>−</sup> trong kem đánh răng. Cân 0,4200 g kem đánh răng, hòa tan cùng TISAB và định mức thành 100,0 mL. Lấy 20,0 mL dung dịch này (V<sub>x</sub>, không phải toàn bộ) cho vào cốc đo, điện cực F<sup>−</sup> cho E<sub>1</sub> = −0,1120 V. Thêm 0,500 mL dung dịch chuẩn F<sup>−</sup> 1,00·10<sup>−2</sup> M, đo được E<sub>2</sub> = −0,1280 V. Tính %NaF trong kem đánh răng (S = −0,05916 V; M<sub>F</sub> = 19,00; M<sub>NaF</sub> = 41,99).",
  phuongAn: ["0,0549 %", "0,1308 %", "0,1242 %", "0,274 %"],
  dapAn: "D",
  loiGiai: "ΔE = −0,0160 V. C<sub>x</sub> = 1,00·10<sup>−2</sup>·0,500/[(20,5)·10<sup>−0,0160/−0,05916</sup> − 20,0] = 2,745·10<sup>−4</sup> M (trong 20,0 mL đã lấy) ⇒ khối lượng F<sup>−</sup> trong 20,0 mL: 2,745·10<sup>−4</sup>·19,00·0,0200·1000 = 0,1043 mg; vì chỉ lấy 20,0/100,0 dung dịch định mức, khối lượng F<sup>−</sup> trong toàn bộ 100,0 mL: 0,1043·(100,0/20,0) = 0,5217 mg ⇒ %F<sup>−</sup> = 0,5217/0,4200/1000·100 = 0,1242 % ⇒ %NaF = 0,1242·(41,99/19,00) = <b>0,274 %</b> (phù hợp hàm lượng NaF thường gặp trong kem đánh răng, 0,22 − 0,32 %). Lỗi hay gặp: «0,0549 %» (quên nhân hệ số 100,0/20,0 để quy từ phần đã lấy về toàn bộ dung dịch định mức); «0,1308 %» (quên trừ V<sub>x</sub> ở mẫu số của công thức thêm chuẩn); «0,1242 %» (quên quy đổi từ %F<sup>−</sup> sang %NaF theo hệ số khối lượng mol)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DH-B006", chuong: "dien-hoa", dang: "D03 · Điện cực chọn lọc ion (ISE)", dangMoi: true, mucDo: 4,
  de: "Xác định F<sup>−</sup> trong kem đánh răng trẻ em. Cân 0,3080 g kem đánh răng, hòa tan cùng TISAB và định mức thành 50,0 mL; lấy toàn bộ 50,0 mL cho vào cốc đo, điện cực F<sup>−</sup> cho E<sub>1</sub> = −0,0870 V. Thêm 0,300 mL dung dịch chuẩn F<sup>−</sup> 1,00·10<sup>−2</sup> M, đo được E<sub>2</sub> = −0,0955 V. Biết quy định giới hạn NaF trong kem đánh răng trẻ em không vượt quá 0,15 %, kem này có đạt không (S = −0,05916 V; M<sub>F</sub> = 19,00; M<sub>NaF</sub> = 41,99)?",
  phuongAn: ["0,102 %, đạt", "46,2 %, không đạt", "0,0462 %, đạt", "0,0292 %, đạt"],
  dapAn: "A",
  loiGiai: "ΔE = −0,0085 V. C<sub>x</sub> = 1,00·10<sup>−2</sup>·0,300/[(50,3)·10<sup>−0,0085/−0,05916</sup> − 50,0] = 1,498·10<sup>−4</sup> M ⇒ khối lượng F<sup>−</sup> trong 50,0 mL: 1,498·10<sup>−4</sup>·19,00·0,0500·1000 = 0,1423 mg ⇒ %F<sup>−</sup> = 0,1423/0,3080·100 = 0,0462 % (đổi 0,3080 g = 308,0 mg trước khi chia) ⇒ %NaF = 0,0462·(41,99/19,00) = <b>0,102 %</b>, nhỏ hơn 0,15 % nên đạt. Lỗi hay gặp: «0,0462 %» (quên quy đổi từ %F<sup>−</sup> sang %NaF); «0,0292 %» (quên trừ V<sub>x</sub> ở mẫu số của công thức thêm chuẩn); «46,2 %» (quên đổi khối lượng mẫu 0,3080 g sang mg (308,0 mg) trước khi chia, chia khối lượng F<sup>−</sup> tính bằng mg nhầm trực tiếp cho 0,3080 — dẫn tới kết luận sai hẳn thành không đạt)."
});

// ================= CHƯƠNG gc-hplc — D05 · Định lượng bằng sắc kí (8 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "GH-B001", chuong: "gc-hplc", dang: "D05 · Định lượng bằng sắc kí", dangMoi: true, mucDo: 1,
  de: "Đường chuẩn HPLC (diện tích pic y theo nồng độ x, mg/mL): y = 850 + 42500x. Mẫu đo được diện tích pic 35680. Tính nồng độ x.",
  phuongAn: ["0,8195 mg/mL", "0,8395 mg/mL", "0,8595 mg/mL", "1,22 mg/mL"],
  dapAn: "A",
  loiGiai: "x = (y − 850)/42500 = (35680 − 850)/42500 = <b>0,8195 mg/mL</b>. Lỗi hay gặp: «0,8395 mg/mL» (quên trừ tung độ gốc, dùng x = y/42500); «0,8595 mg/mL» (nhầm dấu tung độ gốc, dùng x = (y+850)/42500); «1,22 mg/mL» (đảo ngược công thức, dùng x = 42500/(y−850) thay vì (y−850)/42500)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "GH-B002", chuong: "gc-hplc", dang: "D05 · Định lượng bằng sắc kí", dangMoi: true, mucDo: 2,
  de: "Xác định kali sorbat (chất bảo quản) trong tương ớt bằng HPLC. Cân 20,00 g tương ớt, chiết và định mức thành 50,0 mL, đo được diện tích pic 35200, dùng đường chuẩn y = 410 + 68500x (x: mg/mL). Tính % khối lượng kali sorbat trong tương ớt.",
  phuongAn: ["0,1285 %", "0,492 %", "0,1270 %", "0,00254 %"],
  dapAn: "C",
  loiGiai: "x = (35200−410)/68500 = 0,5079 mg/mL ⇒ khối lượng trong 50,0 mL: 0,5079·50,0 = 25,39 mg ⇒ % = 25,39/(20,00·1000)·100 = <b>0,1270 %</b>. Lỗi hay gặp: «0,1285 %» (quên trừ tung độ gốc, dùng x = y/b); «0,00254 %» (quên nhân thể tích định mức 50,0 mL khi tính khối lượng); «0,492 %» (đảo ngược công thức đường chuẩn, dùng x = 68500/(y−410) thay vì (y−410)/68500)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "GH-B003", chuong: "gc-hplc", dang: "D05 · Định lượng bằng sắc kí", dangMoi: true, mucDo: 2,
  de: "Xác định natri benzoat (chất bảo quản) trong nước ngọt bằng HPLC. Cân 25,00 g (0,02500 kg) nước ngọt, định mức thành 50,0 mL, đo được diện tích pic 5720, dùng đường chuẩn y = 620 + 51000x (x: mg/mL). Biết giới hạn cho phép của natri benzoat trong nước giải khát là 300 mg/kg, mẫu này có đạt không?",
  phuongAn: ["224 mg/kg, đạt", "4,00 mg/kg, đạt", "0,200 mg/kg, đạt", "200 mg/kg, đạt"],
  dapAn: "D",
  loiGiai: "x = (5720−620)/51000 = 0,1000 mg/mL ⇒ khối lượng trong 50,0 mL: 0,1000·50,0 = 5,00 mg ⇒ hàm lượng = 5,00 mg/0,02500 kg = <b>200 mg/kg</b>, nhỏ hơn 300 mg/kg nên đạt. Lỗi hay gặp: «224 mg/kg» (quên trừ tung độ gốc, dùng x = y/b); «4,00 mg/kg» (quên nhân thể tích định mức 50,0 mL khi tính khối lượng, coi nồng độ x chính là khối lượng); «0,200 mg/kg» (quên đổi khối lượng mẫu sang kg, chia cho 25,00 (g) thay vì 0,02500 (kg))."
});

NGAN_HANG_CHO_DUYET.push({
  id: "GH-B004", chuong: "gc-hplc", dang: "D05 · Định lượng bằng sắc kí", dangMoi: true, mucDo: 4,
  de: "Xác định paracetamol trong viên nén bằng HPLC-UV. Cân 1 viên (0,6000 g), hòa tan và định mức thành 100,0 mL (dung dịch gốc, nồng độ còn quá đặc so với khoảng làm việc của đường chuẩn); hút 1,00 mL dung dịch gốc, định mức tiếp thành 100,0 mL (dung dịch đo), đo được diện tích pic 91500, dùng đường chuẩn y = 320 + 1850x (x tính theo µg/mL). Tính % khối lượng paracetamol trong viên nén.",
  phuongAn: ["82,43 %", "82,14 %", "0,821 %", "0,0338 %"],
  dapAn: "B",
  loiGiai: "x<sub>đo</sub> = (91500−320)/1850 = 49,29 µg/mL; quy về dung dịch gốc (nhân hệ số pha loãng 100,0/1,00 = 100): 49,29·100 = 4929 µg/mL; khối lượng paracetamol trong 100,0 mL gốc (= trong viên): 4929·100,0 = 492865 µg = 492,9 mg ⇒ % = 492,9/(0,6000·1000)·100 = <b>82,14 %</b>. Lỗi hay gặp: «82,43 %» (quên trừ tung độ gốc, dùng x<sub>đo</sub> = y/b); «0,821 %» (quên hoàn toàn hệ số pha loãng 100,0/1,00 khi quy về dung dịch gốc — sai đúng một bậc 10); «0,0338 %» (đảo ngược công thức đường chuẩn, dùng x<sub>đo</sub> = 1850/(y−320) thay vì (y−320)/1850)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "GH-B005", chuong: "gc-hplc", dang: "D05 · Định lượng bằng sắc kí", dangMoi: true, mucDo: 3,
  de: "Định lượng hoạt chất X trong mẫu bằng GC, dùng nội chuẩn S. Hỗn hợp chuẩn X 0,0680 M và S 0,0540 M cho diện tích pic 388 (X) và 405 (S). Lấy 8,00 mL mẫu, thêm 4,00 mL S 0,148 M, định mức thành 25,00 mL; đo được diện tích pic 460 (X) và 520 (S). Tính [X] trong mẫu ban đầu.",
  phuongAn: ["0,0860 M", "0,0655 M", "0,1100 M", "0,538 M"],
  dapAn: "A",
  loiGiai: "F = (A<sub>X</sub>/[X])/(A<sub>S</sub>/[S]) = (388/0,0680)/(405/0,0540) = 0,7608. Trong dung dịch đo: [S]<sub>f</sub> = 0,148·4,00/25,00 = 0,02368 M; [X]<sub>f</sub> = (A<sub>X</sub>/A<sub>S</sub>)·([S]<sub>f</sub>/F) = (460/520)·(0,02368/0,7608) = 0,02753 M. Quy về mẫu ban đầu (pha loãng 25,00/8,00): [X]<sub>i</sub> = 0,02753·(25,00/8,00) = <b>0,0860 M</b>. Lỗi hay gặp: «0,0655 M» (bỏ qua hệ số đáp ứng F, coi F = 1); «0,1100 M» (đảo ngược tỉ số diện tích pic, dùng A<sub>S</sub>/A<sub>X</sub> thay vì A<sub>X</sub>/A<sub>S</sub>); «0,538 M» (quên nhân hệ số pha loãng V<sub>s</sub>/V khi tính [S]<sub>f</sub>, dùng thẳng nồng độ chuẩn gốc 0,148 M)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "GH-B006", chuong: "gc-hplc", dang: "D05 · Định lượng bằng sắc kí", dangMoi: true, mucDo: 3,
  de: "Định lượng paracetamol (X) trong viên nén bằng HPLC, dùng nội chuẩn S. Hỗn hợp chuẩn X 0,0500 M và S 0,0400 M cho diện tích pic 512 (X) và 460 (S). Cân 1 viên (0,6300 g), hòa tan và định mức thành 50,0 mL; hút 5,00 mL dung dịch này, thêm 2,00 mL S 0,0800 M, định mức thành 25,0 mL; đo được diện tích pic 588 (X) và 410 (S). Tính khối lượng paracetamol trong viên (mg; M<sub>paracetamol</sub> = 151,2).",
  phuongAn: ["346,9 mg", "77,9 mg", "389,6 mg", "189,4 mg"],
  dapAn: "C",
  loiGiai: "F = (512/0,0500)/(460/0,0400) = 0,8904. [S]<sub>f</sub> = 0,0800·2,00/25,0 = 0,00640 M; [X]<sub>f</sub> = (588/410)·(0,00640/0,8904) = 0,01031 M (trong dung dịch 25,0 mL). Quy về dung dịch định mức 50,0 mL (nhân hệ số pha loãng 25,0/5,00 = 5): [X] = 0,01031·5 = 0,05154 M ⇒ khối lượng = 0,05154·0,0500·151,2·1000 = <b>389,6 mg</b>. Lỗi hay gặp: «346,9 mg» (bỏ qua hệ số đáp ứng F, coi F = 1); «77,9 mg» (quên nhân hệ số pha loãng 25,0/5,00 khi quy về dung dịch định mức 50,0 mL); «189,4 mg» (đảo ngược tỉ số diện tích pic, dùng A<sub>S</sub>/A<sub>X</sub> thay vì A<sub>X</sub>/A<sub>S</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "GH-B007", chuong: "gc-hplc", dang: "D05 · Định lượng bằng sắc kí", dangMoi: true, mucDo: 4,
  de: "Định lượng caffeine (X) trong bột chè bằng HPLC, dùng nội chuẩn theobromin (S). Hỗn hợp chuẩn X 0,0850 M và S 0,0620 M cho diện tích pic 430 (X) và 395 (S). Cân 1,0500 g bột chè, chiết, thêm 5,00 mL S 0,0180 M, định mức thành 50,0 mL; đo được diện tích pic 572 (X) và 400 (S). Tính % khối lượng caffeine trong bột chè (M<sub>caffeine</sub> = 194,2).",
  phuongAn: ["2,38 %", "1,47 %", "29,98 %", "3,00 %"],
  dapAn: "D",
  loiGiai: "F = (430/0,0850)/(395/0,0620) = 0,7940. [S]<sub>f</sub> = 0,0180·5,00/50,0 = 0,00180 M; [X]<sub>f</sub> = (572/400)·(0,00180/0,7940) = 3,242·10<sup>−3</sup> M ⇒ khối lượng caffeine trong 50,0 mL: 3,242·10<sup>−3</sup>·0,0500·194,2·1000 = 31,48 mg ⇒ % = 31,48/(1,0500·1000)·100 = <b>3,00 %</b> (phù hợp hàm lượng caffeine thực tế trong chè, 2 − 4 %). Lỗi hay gặp: «2,38 %» (bỏ qua hệ số đáp ứng F, coi F = 1); «1,47 %» (đảo ngược tỉ số diện tích pic, dùng A<sub>S</sub>/A<sub>X</sub> thay vì A<sub>X</sub>/A<sub>S</sub>); «29,98 %» (quên nhân hệ số pha loãng V<sub>s</sub>/V<sub>f</sub> khi tính [S]<sub>f</sub>, dùng thẳng nồng độ chuẩn gốc 0,0180 M — sai đúng một bậc 10)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "GH-B008", chuong: "gc-hplc", dang: "D05 · Định lượng bằng sắc kí", dangMoi: true, mucDo: 3,
  de: "Xác định kali sorbat trong mứt dâu bằng HPLC. Cân 10,00 g mứt, hòa tan và định mức thành 100,0 mL (dung dịch gốc); hút 2,00 mL, định mức tiếp thành 50,0 mL (dung dịch đo), đo được diện tích pic 740, dùng đường chuẩn y = 150 + 185000x (x tính theo mg/mL). Tính % khối lượng kali sorbat trong mứt.",
  phuongAn: ["0,166 %", "0,00319 %", "0,0797 %", "0,100 %"],
  dapAn: "C",
  loiGiai: "x<sub>đo</sub> = (740−150)/185000 = 3,189·10<sup>−3</sup> mg/mL; quy về dung dịch gốc (nhân hệ số pha loãng 50,0/2,00 = 25): 3,189·10<sup>−3</sup>·25 = 0,07973 mg/mL; khối lượng trong 100,0 mL gốc: 0,07973·100,0 = 7,973 mg ⇒ % = 7,973/(10,00·1000)·100 = <b>0,0797 %</b>. Lỗi hay gặp: «0,00319 %» (quên hoàn toàn hệ số pha loãng 50,0/2,00 khi quy về dung dịch gốc — sai đúng một bậc 10); «0,100 %» (quên trừ tung độ gốc, dùng x<sub>đo</sub> = y/b); «0,166 %» (nhầm hệ số pha loãng, lấy tổng hai thể tích 2,00 + 50,0 = 52,0 làm hệ số nhân thay vì tỉ số 50,0/2,00 = 25)."
});

// ================= CHƯƠNG do-luong — D06 · Chuỗi quy trình mẫu thật (10 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B001", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 2,
  de: "Cân 1 viên aspirin, nghiền mịn, hòa tan trong etanol và định mức thành 100,0 mL; hút 10,00 mL dung dịch này, chuẩn độ trực tiếp bằng NaOH chuẩn 0,1000 M hết 1,78 mL (acid acetylsalicylic phản ứng 1 : 1 với NaOH). Tính khối lượng aspirin trong viên (mg; M<sub>aspirin</sub> = 180,16; M<sub>acid salicylic</sub> = 138,12).",
  phuongAn: ["32,07 mg", "3,21 mg", "320,7 mg", "245,9 mg"],
  dapAn: "C",
  loiGiai: "n(NaOH) = 0,1000·1,78 = 0,178 mmol = n(aspirin) trong 10,00 mL ⇒ tổng trong 100,0 mL: 0,178·(100,0/10,00) = 1,78 mmol ⇒ mg = 1,78·180,16 = <b>320,7 mg</b>. Lỗi hay gặp: «32,07 mg» (quên nhân hệ số pha loãng 100,0/10,00); «3,21 mg» (đảo ngược hệ số pha loãng, nhân với 10,00/100,0 thay vì 100,0/10,00); «245,9 mg» (dùng nhầm M = 138,12 của acid salicylic thay vì M = 180,16 của aspirin)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B002", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 3,
  de: "Nghiền mịn và trộn đều 10 viên vitamin C, tổng khối lượng bột thu được là 5,420 g. Cân riêng 0,6250 g bột này, hòa tan và định mức thành 100,0 mL; hút 20,00 mL, chuẩn độ trực tiếp bằng I<sub>2</sub> chuẩn 0,02000 M hết 32,70 mL (acid ascorbic phản ứng 1 : 1 với I<sub>2</sub>). Tính khối lượng vitamin C trung bình mỗi viên (mg; M = 176,12).",
  phuongAn: ["499,4 mg", "575,9 mg", "4994 mg", "6,64 mg"],
  dapAn: "A",
  loiGiai: "n(I<sub>2</sub>) = 0,02000·32,70 = 0,654 mmol = n(vitamin C) trong 20,00 mL ⇒ tổng trong 100,0 mL: 0,654·(100,0/20,00) = 3,270 mmol ⇒ khối lượng trong 0,6250 g bột: 3,270·176,12 = 575,9 mg; vì 0,6250 g chỉ là một phần cân riêng (không đúng bằng 1/10 khối lượng bột), khối lượng vitamin C trung bình mỗi viên = 575,9·(5,420/0,6250)/10 = <b>499,4 mg</b>. Lỗi hay gặp: «575,9 mg» (nhầm tưởng 0,6250 g cân riêng chính là khối lượng của đúng 1 viên, bỏ qua bước quy đổi theo tỉ lệ khối lượng); «4994 mg» (quên chia cho 10 viên sau khi quy đổi theo tỉ lệ khối lượng); «6,64 mg» (đảo ngược tỉ lệ khối lượng, dùng 0,6250/5,420 thay vì 5,420/0,6250)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B003", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 3,
  de: "Hút 5,00 mL giấm ăn, định mức thành 250,0 mL; hút 25,00 mL dung dịch này, chuẩn độ trực tiếp bằng NaOH chuẩn 0,1000 M hết 4,20 mL. Tính % khối lượng/thể tích CH<sub>3</sub>COOH trong giấm ăn ban đầu (coi khối lượng riêng giấm ≈ 1 g/mL; M = 60,05).",
  phuongAn: ["0,504 %", "6,89 %", "1,01 %", "5,04 %"],
  dapAn: "D",
  loiGiai: "n(NaOH) = 0,1000·4,20 = 0,420 mmol = n(CH<sub>3</sub>COOH) trong 25,00 mL ⇒ tổng trong 250,0 mL: 0,420·(250,0/25,00) = 4,20 mmol ⇒ khối lượng trong 5,00 mL giấm gốc: 4,20·60,05 = 252,2 mg ⇒ % = 252,2/(5,00·1000)·100 = <b>5,04 %</b> (phù hợp giấm ăn thông thường, 4 − 5 %). Lỗi hay gặp: «0,504 %» (quên nhân hệ số pha loãng 250,0/25,00); «6,89 %» (dùng nhầm M = 82,03 của CH<sub>3</sub>COONa thay vì M = 60,05 của CH<sub>3</sub>COOH); «1,01 %» (nhầm lẫn, dùng thể tích hút để chuẩn độ 25,00 mL làm mẫu số thay vì thể tích giấm gốc ban đầu 5,00 mL)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B004", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 4,
  de: "Xác định Ca(NO<sub>3</sub>)<sub>2</sub> trong phân bón bằng chuẩn độ complexon. Cân 2,000 g phân bón, hòa tan và định mức thành 250,0 mL; hút 25,00 mL, định mức tiếp thành 100,0 mL; hút 20,00 mL dung dịch này, chỉnh pH 10 (đệm NH<sub>3</sub>/NH<sub>4</sub>Cl), thêm chỉ thị ETOO, chuẩn độ trực tiếp bằng EDTA chuẩn 0,0500 M hết 1,13 mL (Ca<sup>2+</sup> + EDTA phản ứng 1 : 1). Tính % khối lượng Ca(NO<sub>3</sub>)<sub>2</sub> trong phân bón (M<sub>Ca(NO3)2</sub> = 164,09; M<sub>CaCO3</sub> = 100,09).",
  phuongAn: ["2,318 %", "23,18 %", "4,636 %", "14,14 %"],
  dapAn: "B",
  loiGiai: "n(EDTA) = 0,0500·1,13 = 0,0565 mmol = n(Ca<sup>2+</sup>) trong 20,00 mL ⇒ trong 100,0 mL: 0,0565·(100,0/20,00) = 0,2825 mmol ⇒ trong 250,0 mL (= trong 2,000 g mẫu): 0,2825·(250,0/25,00) = 2,825 mmol ⇒ khối lượng Ca(NO<sub>3</sub>)<sub>2</sub> = 2,825·164,09 = 463,6 mg ⇒ % = 463,6/(2,000·1000)·100 = <b>23,18 %</b>. Lỗi hay gặp: «2,318 %» (quên hệ số pha loãng của lần định mức đầu tiên 250,0/25,00); «4,636 %» (quên hệ số pha loãng của lần pha loãng tiếp theo 100,0/20,00); «14,14 %» (dùng nhầm M = 100,09 của CaCO<sub>3</sub> thay vì M = 164,09 của Ca(NO<sub>3</sub>)<sub>2</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B005", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 4,
  de: "Cân 1 viên thuốc kháng acid, nghiền mịn, cho phản ứng với 25,00 mL HCl chuẩn 1,000 M dư (CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>), đun nhẹ cho phản ứng hoàn toàn, lọc bỏ phần không tan, định mức dịch lọc thành 100,0 mL; hút 20,00 mL, chuẩn độ HCl dư bằng NaOH chuẩn 0,2000 M hết 10,08 mL. Tính khối lượng CaCO<sub>3</sub> trong viên (mg; M = 100,09).",
  phuongAn: ["1150 mg", "1756 mg", "746,7 mg", "1493 mg"],
  dapAn: "C",
  loiGiai: "n(HCl) ban đầu = 1,000·25,00 = 25,00 mmol. n(HCl) dư trong 20,00 mL = 0,2000·10,08 = 2,016 mmol ⇒ trong toàn bộ 100,0 mL: 2,016·(100,0/20,00) = 10,08 mmol. n(HCl) đã phản ứng = 25,00−10,08 = 14,92 mmol ⇒ n(CaCO<sub>3</sub>) = 14,92/2 = 7,460 mmol ⇒ mg = 7,460·100,09 = <b>746,7 mg</b>. Lỗi hay gặp: «1150 mg» (quên hệ số pha loãng 100,0/20,00 khi tính lượng HCl dư, dùng thẳng lượng HCl dư trong 20,00 mL); «1756 mg» (cộng nhầm lượng HCl dư vào lượng ban đầu thay vì trừ); «1493 mg» (nhầm tỉ lệ phản ứng CaCO<sub>3</sub> : HCl là 1 : 1 thay vì 1 : 2, quên chia cho 2)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B006", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 2,
  de: "Hút 10,00 mL nước rửa kính, định mức thành 250,0 mL; hút 25,00 mL dung dịch này, chuẩn độ trực tiếp bằng HCl chuẩn 0,1000 M hết 8,40 mL. Tính % khối lượng/thể tích NH<sub>3</sub> trong nước rửa kính ban đầu (coi khối lượng riêng ≈ 1 g/mL; M<sub>NH3</sub> = 17,03; M<sub>Cl</sub> = 35,45).",
  phuongAn: ["1,431 %", "0,1431 %", "0,5722 %", "2,98 %"],
  dapAn: "A",
  loiGiai: "n(HCl) = 0,1000·8,40 = 0,840 mmol = n(NH<sub>3</sub>) trong 25,00 mL ⇒ tổng trong 250,0 mL: 0,840·(250,0/25,00) = 8,40 mmol; đây cũng là lượng NH<sub>3</sub> trong 10,00 mL mẫu gốc ⇒ khối lượng = 8,40·17,03 = 143,1 mg ⇒ % = 143,1/(10,00·1000)·100 = <b>1,431 %</b>. Lỗi hay gặp: «0,1431 %» (quên nhân hệ số pha loãng 250,0/25,00); «0,5722 %» (nhầm lẫn, dùng thể tích hút để chuẩn độ 25,00 mL làm mẫu số thay vì thể tích mẫu gốc ban đầu 10,00 mL); «2,98 %» (dùng nhầm M = 35,45 của Cl thay vì M = 17,03 của NH<sub>3</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B007", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 3,
  de: "Cân 1 viên sắt(II) sulfat, nghiền mịn, hòa tan trong H<sub>2</sub>SO<sub>4</sub> loãng (giữ nguyên dạng Fe<sup>2+</sup>) và định mức thành 100,0 mL; hút 25,00 mL, chuẩn độ trực tiếp bằng KMnO<sub>4</sub> chuẩn 0,02000 M hết 2,91 mL (5Fe<sup>2+</sup> + MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> → 5Fe<sup>3+</sup> + Mn<sup>2+</sup> + 4H<sub>2</sub>O). Tính khối lượng Fe trong viên (mg; M = 55,85).",
  phuongAn: ["16,25 mg", "4,06 mg", "13,00 mg", "65,01 mg"],
  dapAn: "D",
  loiGiai: "n(Fe<sup>2+</sup>) trong 25,00 mL = 5·n(KMnO<sub>4</sub>) = 5·0,02000·2,91 = 0,2910 mmol ⇒ tổng trong 100,0 mL: 0,2910·(100,0/25,00) = 1,164 mmol ⇒ mg = 1,164·55,85 = <b>65,01 mg</b> (phù hợp hàm lượng Fe nguyên tố trong một viên bổ sung sắt thông thường). Lỗi hay gặp: «16,25 mg» (quên nhân hệ số pha loãng 100,0/25,00); «4,06 mg» (đảo ngược hệ số pha loãng, nhân với 25,00/100,0 thay vì 100,0/25,00); «13,00 mg» (nhầm tỉ lệ phản ứng 1 : 1 thay vì 5 : 1 giữa Fe<sup>2+</sup> và MnO<sub>4</sub><sup>−</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B008", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 3,
  de: "Giấm ăn có nồng độ CH<sub>3</sub>COOH 5,00 % (khối lượng/thể tích, coi khối lượng riêng ≈ 1 g/mL; M<sub>CH3COOH</sub> = 60,05; M<sub>CH3COONa</sub> = 82,03). Hút 10,00 mL giấm, định mức thành 250,0 mL; hút 25,00 mL dung dịch này để chuẩn độ trực tiếp bằng NaOH chuẩn 0,1000 M. Cần bao nhiêu mL NaOH để chuẩn độ vừa hết?",
  phuongAn: ["0,833 mL", "8,33 mL", "6,10 mL", "208,2 mL"],
  dapAn: "B",
  loiGiai: "Nồng độ mol giấm gốc: 50,0 g/L : 60,05 = 0,8326 M. Nồng độ trong dung dịch pha loãng: 0,8326·(10,00/250,0) = 0,03331 M. Số mmol CH<sub>3</sub>COOH trong 25,00 mL đem chuẩn độ: 0,03331·25,00 = 0,8326 mmol ⇒ V(NaOH) = 0,8326/0,1000 = <b>8,33 mL</b>. Lỗi hay gặp: «0,833 mL» (quên nhân 10 khi đổi % (kl/tt) sang g/L, dùng thẳng 5,00 g/L thay vì 50,0 g/L); «208,2 mL» (quên hoàn toàn hệ số pha loãng 10,00/250,0, dùng thẳng nồng độ giấm gốc); «6,10 mL» (dùng nhầm M = 82,03 của CH<sub>3</sub>COONa thay vì M = 60,05 của CH<sub>3</sub>COOH khi đổi % sang nồng độ mol)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B009", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 3,
  de: "Cân 1,500 g bột \"thuốc muối\" (hỗn hợp NaHCO<sub>3</sub> và tá dược trơ), hòa tan và định mức thành 100,0 mL; hút 10,00 mL, chuẩn độ trực tiếp bằng HCl chuẩn 0,5000 M hết 2,32 mL. Tính % khối lượng NaHCO<sub>3</sub> trong bột (M = 84,01).",
  phuongAn: ["6,50 %", "9,75 %", "64,97 %", "81,97 %"],
  dapAn: "C",
  loiGiai: "n(HCl) = 0,5000·2,32 = 1,160 mmol = n(NaHCO<sub>3</sub>) trong 10,00 mL ⇒ tổng trong 100,0 mL: 1,160·(100,0/10,00) = 11,60 mmol ⇒ mg = 11,60·84,01 = 974,5 mg ⇒ % = 974,5/(1,500·1000)·100 = <b>64,97 %</b>. Lỗi hay gặp: «6,50 %» (quên nhân hệ số pha loãng 100,0/10,00); «81,97 %» (dùng nhầm M = 105,99 của Na<sub>2</sub>CO<sub>3</sub> thay vì M = 84,01 của NaHCO<sub>3</sub>); «9,75 %» (nhầm lẫn, dùng thể tích hút 10,00 (mL) thay cho khối lượng mẫu 1,500 (g) ở mẫu số khi tính %)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "DL-B010", chuong: "do-luong", dang: "D06 · Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", dangMoi: true, mucDo: 4,
  de: "Cân 2,000 g hỗn hợp bột gồm CaCO<sub>3</sub> và chất trơ, cho phản ứng với 25,00 mL HCl chuẩn 2,000 M dư (CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>), đun nhẹ, lọc bỏ phần không tan, định mức dịch lọc thành 250,0 mL; hút 20,00 mL, định mức tiếp thành 100,0 mL; hút 10,00 mL dung dịch này, chuẩn độ HCl dư bằng NaOH chuẩn 0,1000 M hết 2,72 mL. Tính % khối lượng CaCO<sub>3</sub> trong hỗn hợp bột (M<sub>CaCO3</sub> = 100,09; M<sub>CaO</sub> = 56,08; M<sub>Ca(OH)2</sub> = 74,09).",
  phuongAn: ["22,43 %", "40,04 %", "80,07 %", "29,64 %"],
  dapAn: "B",
  loiGiai: "n(HCl) ban đầu = 2,000·25,00 = 50,00 mmol. n(HCl) dư trong 10,00 mL = 0,1000·2,72 = 0,272 mmol ⇒ trong 100,0 mL: 0,272·(100,0/10,00) = 2,720 mmol; đây cũng là lượng dư trong 20,00 mL đã hút (không đổi khi pha loãng) ⇒ trong toàn bộ 250,0 mL: 2,720·(250,0/20,00) = 34,00 mmol. n(HCl) đã phản ứng = 50,00−34,00 = 16,00 mmol ⇒ n(CaCO<sub>3</sub>) = 8,000 mmol ⇒ mg = 8,000·100,09 = 800,7 mg ⇒ % = 800,7/(2,000·1000)·100 = <b>40,04 %</b>. Lỗi hay gặp: «80,07 %» (nhầm tỉ lệ phản ứng CaCO<sub>3</sub> : HCl là 1 : 1 thay vì 1 : 2, quên chia cho 2); «22,43 %» (dùng nhầm M = 56,08 của CaO thay vì M = 100,09 của CaCO<sub>3</sub>); «29,64 %» (dùng nhầm M = 74,09 của Ca(OH)<sub>2</sub> thay vì M = 100,09 của CaCO<sub>3</sub>)."
});
