/* Câu hỏi chờ duyệt bổ sung — chương "edta" (Tạo phức và chuẩn độ EDTA). Bản sửa vòng 2 theo phản biện.
   Dạng D02 (8 câu), D04 (8 câu), D05 (7 câu), D06 (7 câu + 2 câu chùm ED-C01/ED-C02, 5+5 câu) = 40 câu.
   4 hằng số phân li dùng cho các câu D02 (coi EDTA là acid 4 nấc H4Y, đúng quy ước các đề thi thật):
   pKa1 = 2,00; pKa2 = 2,69; pKa3 = 6,13; pKa4 = 10,37. lg Kf CaY2- = 10,70 (theo TRA_CUU edta-kf). */
var NGAN_HANG_CHO_DUYET = typeof NGAN_HANG_CHO_DUYET !== "undefined" ? NGAN_HANG_CHO_DUYET : [];

// ================= D02 · Hằng số bền điều kiện và điều kiện chuẩn độ (8 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B001", chuong: "edta", dang: "D02 · Hằng số bền điều kiện và điều kiện chuẩn độ", dangMoi: true, mucDo: 1,
  de: "α<sub>Y(H)</sub> (phân số EDTA bị proton hóa, chưa ở dạng Y<sup>4−</sup>) được định nghĩa và biến thiên theo pH như thế nào?",
  phuongAn: [
    "α<sub>Y(H)</sub> = [Y<sup>4−</sup>]/[EDTA]; giảm dần khi pH tăng",
    "α<sub>Y(H)</sub> = [EDTA]/[Y<sup>4−</sup>] = 1/α<sub>Y⁴⁻</sub>; giảm dần khi pH tăng",
    "α<sub>Y(H)</sub> = [EDTA]/[Y<sup>4−</sup>]; tăng dần khi pH tăng",
    "α<sub>Y(H)</sub> = [MY]/([M][Y<sup>4−</sup>]); đó chính là hằng số bền K<sub>f</sub>"
  ],
  dapAn: "B",
  loiGiai: "α<sub>Y(H)</sub> = [EDTA]<sub>tổng</sub>/[Y<sup>4−</sup>] = 1/α<sub>Y⁴⁻</sub>. Vì α<sub>Y⁴⁻</sub> tăng khi pH tăng (EDTA càng ít bị proton hóa) nên α<sub>Y(H)</sub> giảm khi pH tăng. Lỗi hay gặp: «α<sub>Y(H)</sub> = [Y<sup>4−</sup>]/[EDTA]; giảm dần khi pH tăng» (lấy đúng công thức của α<sub>Y⁴⁻</sub> rồi gán nhầm cho α<sub>Y(H)</sub>, không nghịch đảo, đồng thời ghi sai chiều biến thiên); «α<sub>Y(H)</sub> = [EDTA]/[Y<sup>4−</sup>]; tăng dần khi pH tăng» (viết đúng công thức nghịch đảo nhưng ghi sai chiều biến thiên); «α<sub>Y(H)</sub> = [MY]/([M][Y<sup>4−</sup>])» (nhầm α<sub>Y(H)</sub> với hằng số bền K<sub>f</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B002", chuong: "edta", dang: "D02 · Hằng số bền điều kiện và điều kiện chuẩn độ", dangMoi: true, mucDo: 2,
  de: "Tính α<sub>Y⁴⁻</sub> của EDTA ở pH = 3,30, biết coi EDTA là acid 4 nấc H<sub>4</sub>Y với pK<sub>a1</sub> = 2,00; pK<sub>a2</sub> = 2,69; pK<sub>a3</sub> = 6,13; pK<sub>a4</sub> = 10,37.",
  phuongAn: ["1,02·10<sup>−8</sup>", "1,175·10<sup>−3</sup>", "1,00·10<sup>−10</sup>", "1,00·10<sup>10</sup>"],
  dapAn: "C",
  loiGiai: "α<sub>Y⁴⁻</sub> = K<sub>a1</sub>K<sub>a2</sub>K<sub>a3</sub>K<sub>a4</sub>/D với D = h<sup>4</sup> + h<sup>3</sup>K<sub>a1</sub> + h<sup>2</sup>K<sub>a1</sub>K<sub>a2</sub> + hK<sub>a1</sub>K<sub>a2</sub>K<sub>a3</sub> + K<sub>a1</sub>K<sub>a2</sub>K<sub>a3</sub>K<sub>a4</sub>, h = 10<sup>−3,30</sup>. Thay số được α<sub>Y⁴⁻</sub> = <b>1,00·10<sup>−10</sup></b>. Lỗi hay gặp: «1,02·10<sup>−8</sup>» (đảo ngược thứ tự 4 hằng số phân li, dùng pK<sub>a4</sub> làm nấc phân li đầu tiên); «1,175·10<sup>−3</sup>» (quên nấc phân li cuối cùng K<sub>a4</sub>, tính nhầm phân số của dạng HY<sup>3−</sup> thay vì Y<sup>4−</sup>); «1,00·10<sup>10</sup>» (nhầm α<sub>Y⁴⁻</sub> với α<sub>Y(H)</sub>, lấy nghịch đảo của kết quả đúng)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B003", chuong: "edta", dang: "D02 · Hằng số bền điều kiện và điều kiện chuẩn độ", dangMoi: true, mucDo: 2,
  de: "Tính α<sub>Y(H)</sub> của EDTA ở pH = 4,50 (4 hằng số phân li như câu trên: pK<sub>a1</sub> = 2,00; pK<sub>a2</sub> = 2,69; pK<sub>a3</sub> = 6,13; pK<sub>a4</sub> = 10,37).",
  phuongAn: ["3,04·10<sup>−8</sup>", "1,55·10<sup>3</sup>", "1,00", "3,29·10<sup>7</sup>"],
  dapAn: "D",
  loiGiai: "Tính α<sub>Y⁴⁻</sub>(4,50) = 3,04·10<sup>−8</sup> theo công thức 4 nấc, rồi α<sub>Y(H)</sub> = 1/α<sub>Y⁴⁻</sub> = <b>3,29·10<sup>7</sup></b>. Lỗi hay gặp: «3,04·10<sup>−8</sup>» (quên nghịch đảo, báo luôn α<sub>Y⁴⁻</sub> là đáp số); «1,55·10<sup>3</sup>» (đảo ngược thứ tự 4 hằng số K<sub>a1</sub>…K<sub>a4</sub> trước khi tính rồi mới nghịch đảo); «1,00» (nhầm α<sub>Y(H)</sub> = 1 − α<sub>Y⁴⁻</sub>, hiểu sai thành phần bù thay vì nghịch đảo 1/α<sub>Y⁴⁻</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B004", chuong: "edta", dang: "D02 · Hằng số bền điều kiện và điều kiện chuẩn độ", dangMoi: true, mucDo: 3,
  de: "Có thể chuẩn độ Mg<sup>2+</sup> (lg K<sub>f</sub>(MgY<sup>2−</sup>) = 8,79) bằng EDTA ở pH = 6,50 hay không? Tính K<sub>f</sub>' để kết luận (α<sub>Y⁴⁻</sub> tính từ 4 pK<sub>a</sub>: 2,00; 2,69; 6,13; 10,37).",
  phuongAn: ["K<sub>f</sub>' = 5,83·10<sup>4</sup> &lt; 10<sup>8</sup>: không chuẩn độ được", "K<sub>f</sub>' = 6,17·10<sup>8</sup> ≥ 10<sup>8</sup>: chuẩn độ được", "K<sub>f</sub>' = 8,31·10<sup>−4</sup> &lt; 10<sup>8</sup>: không chuẩn độ được", "K<sub>f</sub>' = 6,52·10<sup>12</sup> ≥ 10<sup>8</sup>: chuẩn độ được"],
  dapAn: "A",
  loiGiai: "α<sub>Y⁴⁻</sub>(6,50) = 9,45·10<sup>−5</sup> → K<sub>f</sub>' = α<sub>Y⁴⁻</sub>·K<sub>f</sub> = 9,45·10<sup>−5</sup>·10<sup>8,79</sup> = <b>5,83·10<sup>4</sup> &lt; 10<sup>8</sup></b>: không chuẩn độ được ở pH này (phải lên pH ≈ 10 như trong đệm NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> quen thuộc). Lỗi hay gặp: «K<sub>f</sub>' = 6,17·10<sup>8</sup>» (đảo ngược thứ tự 4 hằng số phân li khi tính α<sub>Y⁴⁻</sub>, dẫn tới kết luận sai); «K<sub>f</sub>' = 8,31·10<sup>−4</sup>» (quên đổi lg K<sub>f</sub> = 8,79 sang K<sub>f</sub> = 10<sup>8,79</sup>, nhân trực tiếp α<sub>Y⁴⁻</sub> với 8,79); «K<sub>f</sub>' = 6,52·10<sup>12</sup>» (nhầm dùng α<sub>Y(H)</sub> thay vì α<sub>Y⁴⁻</sub> trong công thức K<sub>f</sub>' = α<sub>Y⁴⁻</sub>K<sub>f</sub>, dẫn tới kết luận sai)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B005", chuong: "edta", dang: "D02 · Hằng số bền điều kiện và điều kiện chuẩn độ", dangMoi: true, mucDo: 3,
  de: "Có thể chuẩn độ Ca<sup>2+</sup> (lg K<sub>f</sub>(CaY<sup>2−</sup>) = 10,70) bằng EDTA ở pH = 5,00 hay không? Tính K<sub>f</sub>' để kết luận (α<sub>Y⁴⁻</sub> tính từ 4 pK<sub>a</sub> như câu trên).",
  phuongAn: ["K<sub>f</sub>' = 3,04·10<sup>9</sup> ≥ 10<sup>8</sup>: chuẩn độ được", "K<sub>f</sub>' = 3,14·10<sup>−6</sup> &lt; 10<sup>8</sup>: không chuẩn độ được", "K<sub>f</sub>' = 1,47·10<sup>4</sup> &lt; 10<sup>8</sup>: không chuẩn độ được", "K<sub>f</sub>' = 1,71·10<sup>17</sup> ≥ 10<sup>8</sup>: chuẩn độ được"],
  dapAn: "C",
  loiGiai: "α<sub>Y⁴⁻</sub>(5,00) = 2,93·10<sup>−7</sup> → K<sub>f</sub>' = 2,93·10<sup>−7</sup>·10<sup>10,70</sup> = <b>1,47·10<sup>4</sup> &lt; 10<sup>8</sup></b>: không chuẩn độ được ở pH 5,00 (Ca<sup>2+</sup> cần đệm pH ≈ 10). Lỗi hay gặp: «K<sub>f</sub>' = 3,04·10<sup>9</sup>» (đảo ngược thứ tự 4 hằng số phân li khi tính α<sub>Y⁴⁻</sub>, dẫn tới kết luận sai); «K<sub>f</sub>' = 3,14·10<sup>−6</sup>» (quên đổi lg K<sub>f</sub> = 10,70 sang K<sub>f</sub> = 10<sup>10,70</sup>, nhân trực tiếp α<sub>Y⁴⁻</sub> với 10,70); «K<sub>f</sub>' = 1,71·10<sup>17</sup>» (nhầm dùng α<sub>Y(H)</sub> thay vì α<sub>Y⁴⁻</sub> trong công thức K<sub>f</sub>' = α<sub>Y⁴⁻</sub>K<sub>f</sub>, dẫn tới kết luận sai)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B006", chuong: "edta", dang: "D02 · Hằng số bền điều kiện và điều kiện chuẩn độ", dangMoi: true, mucDo: 3,
  de: "Có thể chuẩn độ Fe<sup>3+</sup> (lg K<sub>f</sub>(FeY<sup>−</sup>) = 25,1) bằng EDTA ở pH = 1,50 hay không? Tính K<sub>f</sub>' để kết luận (α<sub>Y⁴⁻</sub> tính từ 4 pK<sub>a</sub> như hai câu trên).",
  phuongAn: ["K<sub>f</sub>' = 8,13·10<sup>9</sup> ≥ 10<sup>8</sup>: chuẩn độ được", "K<sub>f</sub>' = 6,08·10<sup>9</sup> ≥ 10<sup>8</sup>: chuẩn độ được", "K<sub>f</sub>' = 1,21·10<sup>−14</sup> &lt; 10<sup>8</sup>: không chuẩn độ được", "K<sub>f</sub>' = 4,41·10<sup>8</sup> ≥ 10<sup>8</sup>: chuẩn độ được"],
  dapAn: "B",
  loiGiai: "α<sub>Y⁴⁻</sub>(1,50) = 4,83·10<sup>−16</sup> → K<sub>f</sub>' = 4,83·10<sup>−16</sup>·10<sup>25,1</sup> = <b>6,08·10<sup>9</sup> ≥ 10<sup>8</sup></b>: chuẩn độ được — phù hợp việc Fe<sup>3+</sup> có K<sub>f</sub> rất lớn nên chuẩn độ được ngay ở pH thấp. Lỗi hay gặp: «K<sub>f</sub>' = 8,13·10<sup>9</sup>» (đảo ngược thứ tự 4 hằng số phân li khi tính α<sub>Y⁴⁻</sub>); «K<sub>f</sub>' = 1,21·10<sup>−14</sup>» (quên đổi lg K<sub>f</sub> = 25,1 sang K<sub>f</sub> = 10<sup>25,1</sup>, nhân trực tiếp α<sub>Y⁴⁻</sub> với 25,1); «K<sub>f</sub>' = 4,41·10<sup>8</sup>» (dùng nhầm pH = 1,20 — đúng giá trị “pH tối thiểu” của Fe<sup>3+</sup> ghi trong bảng tra cứu K<sub>f</sub> — thay vì pH 1,50 mà đề cho)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B007", chuong: "edta", dang: "D02 · Hằng số bền điều kiện và điều kiện chuẩn độ", dangMoi: true, mucDo: 4,
  de: "Dung dịch chứa Bi<sup>3+</sup> (lg K<sub>f</sub> = 27,8) và Pb<sup>2+</sup> (lg K<sub>f</sub> = 18,04). Trong 4 giá trị pH: 1,00; 2,00; 5,00; 10,00, giá trị <b>lớn nhất</b> còn đảm bảo chuẩn độ chọn lọc Bi<sup>3+</sup> (K<sub>f</sub>'<sub>Bi</sub> ≥ 10<sup>8</sup>) mà Pb<sup>2+</sup> chưa phản ứng đáng kể (K<sub>f</sub>'<sub>Pb</sub> &lt; 10<sup>8</sup>) là bao nhiêu?",
  phuongAn: ["pH = 2,00", "pH = 1,00", "pH = 5,00", "pH = 10,00"],
  dapAn: "A",
  loiGiai: "Ở pH 2,00: α<sub>Y⁴⁻</sub> = 2,93·10<sup>−14</sup> → K<sub>f</sub>'<sub>Bi</sub> = 1,85·10<sup>14</sup> ≥ 10<sup>8</sup> (chuẩn độ được) nhưng K<sub>f</sub>'<sub>Pb</sub> = 3,21·10<sup>4</sup> &lt; 10<sup>8</sup> (Pb<sup>2+</sup> chưa phản ứng đáng kể) → chọn lọc tốt. Ở pH 5,00, K<sub>f</sub>'<sub>Pb</sub> = 3,21·10<sup>11</sup> ≥ 10<sup>8</sup>: Pb<sup>2+</sup> đã phản ứng, mất chọn lọc. pH 1,00 cũng chọn lọc được nhưng không phải giá trị lớn nhất trong 4 lựa chọn (bước nhảy kém hơn pH 2,00). Lỗi hay gặp: «pH = 1,00» (chọn được nhưng bỏ qua yêu cầu giá trị lớn nhất); «pH = 5,00» (chỉ kiểm tra điều kiện của Bi<sup>3+</sup> mà quên kiểm tra Pb<sup>2+</sup> đã đủ bền để phản ứng theo); «pH = 10,00» (nhầm dùng pH quen thuộc dành cho chuẩn độ Ca<sup>2+</sup>/Mg<sup>2+</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B008", chuong: "edta", dang: "D02 · Hằng số bền điều kiện và điều kiện chuẩn độ", dangMoi: true, mucDo: 4,
  de: "Dung dịch chứa Fe<sup>3+</sup> (lg K<sub>f</sub> = 25,1) và Al<sup>3+</sup> (lg K<sub>f</sub> = 16,4). Chỉ xét điều kiện K<sub>f</sub>' (bỏ qua ảnh hưởng thủy phân và tốc độ phản ứng). Trong 4 giá trị pH: 1,00; 1,50; 2,50; 5,00, giá trị <b>lớn nhất</b> còn đảm bảo chuẩn độ chọn lọc Fe<sup>3+</sup> mà Al<sup>3+</sup> chưa phản ứng đáng kể (K<sub>f</sub>'<sub>Al</sub> &lt; 10<sup>8</sup>) là bao nhiêu?",
  phuongAn: ["pH = 1,00", "pH = 1,50", "pH = 5,00", "pH = 2,50"],
  dapAn: "D",
  loiGiai: "Ở pH 2,50: α<sub>Y⁴⁻</sub> = 1,04·10<sup>−12</sup> → K<sub>f</sub>'<sub>Fe</sub> = 1,31·10<sup>13</sup> ≥ 10<sup>8</sup> (chuẩn độ được, đúng khoảng pH 1,5 – 2,5 thường dùng cho Fe<sup>3+</sup>) và K<sub>f</sub>'<sub>Al</sub> = 2,61·10<sup>4</sup> &lt; 10<sup>8</sup> (Al<sup>3+</sup> chưa phản ứng đáng kể). Ở pH 5,00, K<sub>f</sub>'<sub>Al</sub> = 7,36·10<sup>9</sup> ≥ 10<sup>8</sup>: mất chọn lọc. Ở pH 1,00, ngay cả Fe<sup>3+</sup> cũng chưa đạt K<sub>f</sub>' ≥ 10<sup>8</sup> (K<sub>f</sub>'<sub>Fe</sub> = 7,38·10<sup>7</sup>). Lỗi hay gặp: «pH = 1,00» (chọn pH thấp cho an toàn nhưng quên kiểm tra điều kiện K<sub>f</sub>'<sub>Fe</sub> ≥ 10<sup>8</sup> chưa đạt ở pH này); «pH = 1,50» (chọn được nhưng bỏ qua yêu cầu giá trị lớn nhất); «pH = 5,00» (chỉ kiểm tra điều kiện của Fe<sup>3+</sup> mà quên Al<sup>3+</sup> lúc này cũng đã đủ bền để phản ứng)."
});

// ================= D04 · Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm (8 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B009", chuong: "edta", dang: "D04 · Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm", dangMoi: true, mucDo: 2,
  de: "Chuẩn độ 50,00 mL nước giếng ở pH 10 (chỉ thị ET-OO) hết 7,25 mL EDTA 0,01020 M. Tính độ cứng của nước theo mg CaCO<sub>3</sub>/L (M(CaCO<sub>3</sub>) = 100,09).",
  phuongAn: ["148 mg/L", "7,40 mg/L", "59,3 mg/L", "0,37 mg/L"],
  dapAn: "A",
  loiGiai: "n(EDTA) = 0,01020·7,25 = 0,07395 mmol = n(Ca<sup>2+</sup>+Mg<sup>2+</sup>) → khối lượng CaCO<sub>3</sub> = 0,07395·100,09 = 7,402 mg trong 50,00 mL → quy về 1 L: 7,402·1000/50,00 = <b>148 mg/L</b>. Lỗi hay gặp: «7,40 mg/L» (quên quy đổi thể tích mẫu về 1 lít, báo luôn khối lượng CaCO<sub>3</sub> trong 50,00 mL); «59,3 mg/L» (dùng nhầm M(Ca) = 40,08 thay vì M(CaCO<sub>3</sub>) = 100,09); «0,37 mg/L» (đảo ngược hệ số quy đổi thể tích, nhân với 50,00/1000 thay vì 1000/50,00)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B010", chuong: "edta", dang: "D04 · Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm", dangMoi: true, mucDo: 2,
  de: "Chuẩn độ 50,00 mL nước máy ở pH 10 (chỉ thị ET-OO) hết 15,40 mL EDTA 0,01205 M. Tính tổng nồng độ [Ca<sup>2+</sup> + Mg<sup>2+</sup>] trong mẫu.",
  phuongAn: ["1,21·10<sup>−2</sup> M", "2,84·10<sup>−3</sup> M", "3,71·10<sup>−3</sup> M", "0,186 M"],
  dapAn: "C",
  loiGiai: "Tỉ lệ EDTA : (Ca<sup>2+</sup>+Mg<sup>2+</sup>) là 1 : 1 → [Ca<sup>2+</sup>+Mg<sup>2+</sup>] = 0,01205·15,40/50,00 = <b>3,71·10<sup>−3</sup> M</b>. Lỗi hay gặp: «1,21·10<sup>−2</sup> M» (dùng nhầm luôn nồng độ EDTA 0,01205 M đổi đơn vị nhầm, báo thẳng là đáp số mà không tính qua thể tích mẫu và thể tích chuẩn độ); «2,84·10<sup>−3</sup> M» (cộng nhầm thể tích EDTA vào mẫu số như chuẩn độ acid–base, dùng 50,00+15,40 thay vì 50,00); «0,186 M» (quên chia cho thể tích mẫu 50,00 mL, báo luôn số mol EDTA tính bằng mmol là nồng độ mol/L)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B011", chuong: "edta", dang: "D04 · Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm", dangMoi: true, mucDo: 4,
  de: "Nghiền 10 viên thuốc Magie-B6, hòa tan hoàn toàn và định mức thành 250,0 mL (dung dịch A). Hút 10,00 mL A, chuẩn độ ở pH 10 (ET-OO) hết 16,50 mL EDTA 0,1000 M. Tính khối lượng Mg (mg) trong mỗi viên (M(Mg) = 24,31).",
  phuongAn: ["4,01 mg/viên", "0,160 mg/viên", "1003 mg/viên", "100 mg/viên"],
  dapAn: "D",
  loiGiai: "n(Mg) trong 10,00 mL A = 0,1000·16,50 = 1,650 mmol → trong cả 250,0 mL: 1,650·(250,0/10,00) = 41,25 mmol → khối lượng Mg tổng = 41,25·24,31 = 1002,8 mg, chia cho 10 viên: <b>100 mg/viên</b>. Lỗi hay gặp: «4,01 mg/viên» (quên hệ số pha loãng 250,0/10,00 = 25, dùng thẳng lượng Mg trong 10,00 mL rồi mới chia 10 viên); «1003 mg/viên» (tính đúng tổng khối lượng Mg trong cả lọ nhưng quên chia cho 10 viên); «0,160 mg/viên» (đảo ngược hệ số pha loãng, nhân với 10,00/250,0 thay vì 250,0/10,00)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B012", chuong: "edta", dang: "D04 · Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm", dangMoi: true, mucDo: 3,
  de: "Cân 0,2000 g mẫu kẽm oxide kĩ thuật (kì vọng độ tinh khiết cao), hòa tan và định mức thành 100,0 mL (dung dịch A). Hút 10,00 mL A, chỉnh pH 5 (xylenol da cam), chuẩn độ hết 11,28 mL EDTA 0,02000 M. Tính %ZnO trong mẫu (M(ZnO) = 81,38).",
  phuongAn: ["9,18 %", "91,8 %", "45,9 %", "73,7 %"],
  dapAn: "B",
  loiGiai: "n(Zn<sup>2+</sup>) trong 10,00 mL A = 0,02000·11,28 = 0,2256 mmol → trong cả 100,0 mL: 0,2256·(100,0/10,00) = 2,256 mmol → khối lượng ZnO = 2,256·81,38 = 183,6 mg = 0,1836 g → % = 0,1836/0,2000·100 = <b>91,8 %</b>. Lỗi hay gặp: «9,18 %» (quên hệ số pha loãng 100,0/10,00 = 10, dùng thẳng lượng Zn<sup>2+</sup> trong 10,00 mL); «73,7 %» (dùng nhầm M(Zn) = 65,38 thay vì M(ZnO) = 81,38); «45,9 %» (nhầm tưởng EDTA phản ứng với Zn<sup>2+</sup> theo tỉ lệ 1 : 2 (mỗi Zn<sup>2+</sup> cần 2 EDTA) nên chỉ tính ra một nửa lượng Zn<sup>2+</sup> thật — thực tế EDTA luôn tạo phức 1 : 1 với mọi kim loại)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B013", chuong: "edta", dang: "D04 · Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm", dangMoi: true, mucDo: 3,
  de: "Chuẩn độ 100,0 mL mẫu nước thải ở pH 10 (đệm NH<sub>3</sub>/tartrat, chỉ thị ET-OO) hết 6,40 mL EDTA 0,005000 M (chỉ Pb<sup>2+</sup> có mặt đáng kể). Tính hàm lượng Pb<sup>2+</sup> trong mẫu theo ppm (mg/L), M(Pb) = 207,2.",
  phuongAn: ["71,4 ppm", "1,04 ppm", "66,3 ppm", "6,63 ppm"],
  dapAn: "C",
  loiGiai: "n(Pb<sup>2+</sup>) = 0,005000·6,40 = 0,03200 mmol → khối lượng Pb = 0,03200·207,2 = 6,630 mg trong 100,0 mL → quy về 1 L: 6,630·1000/100,0 = <b>66,3 ppm</b>. Lỗi hay gặp: «6,63 ppm» (quên quy đổi thể tích mẫu về 1 lít, báo luôn khối lượng Pb trong 100,0 mL); «71,4 ppm» (dùng nhầm M(PbO) = 223,2 thay vì M(Pb<sup>2+</sup>) = 207,2); «1,04 ppm» (bỏ sót thể tích EDTA đã dùng, nhân thẳng nồng độ EDTA với M(Pb) mà quên nhân với thể tích chuẩn độ)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B014", chuong: "edta", dang: "D04 · Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm", dangMoi: true, mucDo: 3,
  de: "Chuẩn độ 50,00 mL nước ở pH 10 (ET-OO) hết 12,80 mL EDTA 0,01000 M (tổng Ca<sup>2+</sup>+Mg<sup>2+</sup>). Chuẩn độ 50,00 mL nước cùng loại này ở pH 12–13 (murexit, Mg<sup>2+</sup> đã kết tủa) hết 8,30 mL cùng dung dịch EDTA (riêng Ca<sup>2+</sup>). Tính hàm lượng Mg<sup>2+</sup> theo mg/L (M(Mg) = 24,31).",
  phuongAn: ["21,9 mg/L", "36,1 mg/L", "103 mg/L", "62,2 mg/L"],
  dapAn: "A",
  loiGiai: "n(Ca<sup>2+</sup>+Mg<sup>2+</sup>) = 0,01000·12,80 = 0,1280 mmol; n(Ca<sup>2+</sup>) = 0,01000·8,30 = 0,0830 mmol → n(Mg<sup>2+</sup>) = 0,1280 − 0,0830 = 0,0450 mmol → mg Mg/L = 0,0450·24,31·1000/50,00 = <b>21,9 mg/L</b>. Lỗi hay gặp: «62,2 mg/L» (quên trừ, dùng nhầm toàn bộ kết quả nấc ET-OO (tổng Ca+Mg) làm lượng Mg<sup>2+</sup>); «36,1 mg/L» (dùng nhầm M(Ca) = 40,08 thay vì M(Mg) = 24,31); «103 mg/L» (cộng nhầm hai kết quả chuẩn độ thay vì lấy hiệu số)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B015", chuong: "edta", dang: "D04 · Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm", dangMoi: true, mucDo: 2,
  de: "Hòa tan 5 viên thuốc bổ sung canxi, định mức thành 500,0 mL (dung dịch A). Hút 10,00 mL A, chuẩn độ ở pH 13 (murexit) hết 12,50 mL EDTA 0,1000 M. Tính khối lượng Ca (mg) trong mỗi viên (M(Ca) = 40,08).",
  phuongAn: ["10,0 mg/viên", "0,200 mg/viên", "2505 mg/viên", "501 mg/viên"],
  dapAn: "D",
  loiGiai: "n(Ca<sup>2+</sup>) trong 10,00 mL A = 0,1000·12,50 = 1,250 mmol → trong cả 500,0 mL: 1,250·(500,0/10,00) = 62,50 mmol → khối lượng Ca tổng = 62,50·40,08 = 2505 mg, chia cho 5 viên: <b>501 mg/viên</b>. Lỗi hay gặp: «10,0 mg/viên» (quên hệ số pha loãng 500,0/10,00 = 50, dùng thẳng lượng Ca trong 10,00 mL rồi mới chia 5 viên); «2505 mg/viên» (tính đúng tổng khối lượng Ca trong cả lọ nhưng quên chia cho 5 viên); «0,200 mg/viên» (đảo ngược hệ số pha loãng, nhân với 10,00/500,0 thay vì 500,0/10,00)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B016", chuong: "edta", dang: "D04 · Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm", dangMoi: true, mucDo: 4,
  de: "Xác định độ cứng nước máy: lấy 50,00 mL mẫu, thêm KCN để che các ion kim loại nặng (Cu<sup>2+</sup>, Zn<sup>2+</sup>...), chỉnh pH 10 (ET-OO), chuẩn độ hết 7,60 mL EDTA 0,01275 M. Tính độ cứng theo mg CaCO<sub>3</sub>/L (M(CaCO<sub>3</sub>) = 100,09).",
  phuongAn: ["9,70 mg/L", "194 mg/L", "77,7 mg/L", "0,485 mg/L"],
  dapAn: "B",
  loiGiai: "KCN chỉ có vai trò che kim loại nặng, không ảnh hưởng phép tính: n(EDTA) = 0,01275·7,60 = 0,09690 mmol = n(Ca<sup>2+</sup>+Mg<sup>2+</sup>) → khối lượng CaCO<sub>3</sub> = 0,09690·100,09 = 9,699 mg trong 50,00 mL → quy về 1 L: 9,699·1000/50,00 = <b>194 mg/L</b>. Lỗi hay gặp: «9,70 mg/L» (quên quy đổi thể tích mẫu về 1 lít, báo luôn khối lượng CaCO<sub>3</sub> trong 50,00 mL); «77,7 mg/L» (dùng nhầm M(Ca) = 40,08 thay vì M(CaCO<sub>3</sub>) = 100,09); «0,485 mg/L» (đảo ngược hệ số quy đổi thể tích, nhân với 50,00/1000 thay vì 1000/50,00)."
});

// ================= D05 · Chuẩn độ ngược, gián tiếp, thay thế; chọn kĩ thuật (7 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B017", chuong: "edta", dang: "D05 · Chuẩn độ ngược, gián tiếp, thay thế; chọn kĩ thuật", dangMoi: true, mucDo: 2,
  de: "Vì sao Al<sup>3+</sup> trong xi măng hoặc phèn nhôm không được chuẩn độ trực tiếp bằng EDTA (dù phức AlY<sup>−</sup> khá bền, lg K<sub>f</sub> = 16,4), mà phải dùng kĩ thuật chuẩn độ ngược?",
  phuongAn: [
    "Vì phức AlY<sup>−</sup> kém bền hơn phức của hầu hết các ion cản trở nên EDTA không phản ứng được với Al<sup>3+</sup>",
    "Vì Al<sup>3+</sup> phản ứng với EDTA rất chậm, không kịp đạt cân bằng trong thời gian chuẩn độ trực tiếp",
    "Vì Al<sup>3+</sup> không tạo phức theo tỉ lệ 1 : 1 với EDTA như các ion kim loại khác mà tạo phức theo tỉ lệ 1 : 2",
    "Vì không tồn tại chỉ thị kim loại nào phản ứng được với Al<sup>3+</sup> ở bất kì pH nào, kể cả khi chuẩn độ ngược"
  ],
  dapAn: "B",
  loiGiai: "Al<sup>3+</sup> tạo phức 1 : 1 khá bền với EDTA nhưng phản ứng động học chậm, cần đun nóng và chờ lâu mới đạt cân bằng — không phù hợp chuẩn độ trực tiếp (đòi hỏi phản ứng nhanh, tức thời). Vì vậy thêm EDTA dư, đun sôi cho phản ứng hoàn toàn rồi chuẩn lượng dư bằng ion kim loại khác. Lỗi hay gặp: «phức AlY<sup>−</sup> kém bền...» sai vì lg K<sub>f</sub>(AlY<sup>−</sup>) = 16,4 khá lớn, phức khá bền chứ không kém bền; «Al<sup>3+</sup> không tạo phức tỉ lệ 1 : 1...» sai vì EDTA luôn tạo phức 1 : 1 với hầu hết kim loại kể cả Al<sup>3+</sup>; «không tồn tại chỉ thị nào...» quá tuyệt đối, thực tế vẫn dùng được chỉ thị (như xylenol da cam) khi chuẩn độ ngược đúng cách."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B018", chuong: "edta", dang: "D05 · Chuẩn độ ngược, gián tiếp, thay thế; chọn kĩ thuật", dangMoi: true, mucDo: 3,
  de: "Hòa tan mẫu xi măng, thêm 25,50 mL EDTA 0,05000 M (dư), đun sôi, chỉnh pH 5, chuẩn độ EDTA dư bằng 8,50 mL dung dịch Zn<sup>2+</sup> 0,04800 M. Tính %Al<sub>2</sub>O<sub>3</sub> trong 0,5000 g mẫu (M(Al<sub>2</sub>O<sub>3</sub>) = 101,96).",
  phuongAn: ["8,84 %", "4,68 %", "13,0 %", "17,7 %"],
  dapAn: "A",
  loiGiai: "n(EDTA) dư ban đầu = 0,05000·25,50 = 1,275 mmol; n(Zn<sup>2+</sup>) = 0,04800·8,50 = 0,4080 mmol = n(EDTA) dư thật → n(Al<sup>3+</sup>) = 1,275 − 0,4080 = 0,8670 mmol → n(Al<sub>2</sub>O<sub>3</sub>) = 0,8670/2 = 0,4335 mmol → khối lượng = 0,4335·101,96 = 44,20 mg = 0,04420 g → % = 0,04420/0,5000·100 = <b>8,84 %</b>. Lỗi hay gặp: «13,0 %» (quên trừ lượng Zn<sup>2+</sup> đã chuẩn độ, dùng thẳng toàn bộ 1,275 mmol EDTA ban đầu làm lượng phản ứng với Al<sup>3+</sup>); «4,68 %» (dùng nhầm M(Al) = 26,98 của kim loại thay vì M(Al<sub>2</sub>O<sub>3</sub>) = 101,96); «17,7 %» (quên chia 2 khi đổi số mol Al<sup>3+</sup> sang số mol Al<sub>2</sub>O<sub>3</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B019", chuong: "edta", dang: "D05 · Chuẩn độ ngược, gián tiếp, thay thế; chọn kĩ thuật", dangMoi: true, mucDo: 4,
  de: "Cân 1,000 g phèn nhôm-kali kĩ thuật, hòa tan và định mức thành 250,0 mL (dung dịch A). Hút 25,00 mL A, thêm 20,00 mL EDTA 0,02000 M (dư), đun sôi, chỉnh pH 5 (xylenol da cam), chuẩn độ EDTA dư bằng 14,05 mL Pb<sup>2+</sup> 0,01500 M. Tính %Al (khối lượng) trong mẫu phèn (M(Al) = 26,98).",
  phuongAn: ["0,511 %", "9,65 %", "10,8 %", "5,11 %"],
  dapAn: "D",
  loiGiai: "Trong 25,00 mL A: n(EDTA) dư ban đầu = 0,02000·20,00 = 0,4000 mmol; n(Pb<sup>2+</sup>) = 0,01500·14,05 = 0,2108 mmol → n(Al<sup>3+</sup>) = 0,4000 − 0,2108 = 0,1893 mmol trong 25,00 mL → trong cả 250,0 mL: 0,1893·(250,0/25,00) = 1,893 mmol → khối lượng Al = 1,893·26,98 = 51,07 mg = 0,05107 g → % = 0,05107/1,000·100 = <b>5,11 %</b> (hợp lí vì phèn KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O tinh khiết chỉ chứa tối đa 5,69 %Al). Lỗi hay gặp: «0,511 %» (quên hệ số pha loãng 250,0/25,00 = 10, dùng thẳng lượng Al<sup>3+</sup> trong 25,00 mL); «9,65 %» (dùng nhầm M(Al<sub>2</sub>O<sub>3</sub>)/2 = 50,98 thay vì M(Al) = 26,98); «10,8 %» (quên trừ lượng Pb<sup>2+</sup> đã chuẩn độ, dùng thẳng toàn bộ EDTA ban đầu nhân hệ số pha loãng làm lượng Al<sup>3+</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B020", chuong: "edta", dang: "D05 · Chuẩn độ ngược, gián tiếp, thay thế; chọn kĩ thuật", dangMoi: true, mucDo: 3,
  de: "Xác định Ag<sup>+</sup> bằng phương pháp thay thế: cho 50,00 mL dung dịch Ag<sup>+</sup> phản ứng với lượng dư Ni(CN)<sub>4</sub><sup>2−</sup> theo 2Ag<sup>+</sup> + Ni(CN)<sub>4</sub><sup>2−</sup> → 2Ag(CN)<sub>2</sub><sup>−</sup> + Ni<sup>2+</sup>, rồi chuẩn độ Ni<sup>2+</sup> giải phóng bằng EDTA 0,01000 M (murexit, pH 8) hết 7,50 mL. Tính [Ag<sup>+</sup>] ban đầu.",
  phuongAn: ["1,50·10<sup>−3</sup> M", "7,50·10<sup>−4</sup> M", "3,00·10<sup>−3</sup> M", "2,00·10<sup>−2</sup> M"],
  dapAn: "C",
  loiGiai: "n(Ni<sup>2+</sup>) = n(EDTA) = 0,01000·7,50 = 0,0750 mmol. Theo tỉ lệ phản ứng thay thế, n(Ag<sup>+</sup>) = 2·n(Ni<sup>2+</sup>) = 0,1500 mmol → [Ag<sup>+</sup>] = 0,1500/50,00 = <b>3,00·10<sup>−3</sup> M</b>. Lỗi hay gặp: «1,50·10<sup>−3</sup> M» (quên hệ số 2 trong phản ứng thay thế, coi n(Ag<sup>+</sup>) = n(Ni<sup>2+</sup>)); «7,50·10<sup>−4</sup> M» (dùng ngược hệ số, chia 2 thay vì nhân 2 khi suy ra n(Ag<sup>+</sup>) từ n(Ni<sup>2+</sup>)); «2,00·10<sup>−2</sup> M» (dùng nhầm thể tích EDTA 7,50 mL làm mẫu số thay vì thể tích mẫu Ag<sup>+</sup> ban đầu 50,00 mL)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B021", chuong: "edta", dang: "D05 · Chuẩn độ ngược, gián tiếp, thay thế; chọn kĩ thuật", dangMoi: true, mucDo: 3,
  de: "Xác định SO<sub>4</sub><sup>2−</sup> gián tiếp: kết tủa hoàn toàn bằng Ba<sup>2+</sup>, lọc lấy BaSO<sub>4</sub>, hòa tan kết tủa bằng 21,30 mL EDTA 0,02000 M (dư) ở pH 10, rồi chuẩn độ EDTA dư bằng 5,15 mL Mg<sup>2+</sup> 0,01500 M. Tính khối lượng SO<sub>4</sub><sup>2−</sup> (mg) có trong mẫu (M(SO<sub>4</sub>) = 96,06).",
  phuongAn: ["33,5 mg", "40,9 mg", "81,4 mg", "7,42 mg"],
  dapAn: "A",
  loiGiai: "n(EDTA) dư ban đầu = 0,02000·21,30 = 0,4260 mmol; n(Mg<sup>2+</sup>) = 0,01500·5,15 = 0,07725 mmol = n(EDTA) dư thật → n(Ba<sup>2+</sup> trong kết tủa) = n(SO<sub>4</sub><sup>2−</sup>) = 0,4260 − 0,07725 = 0,3488 mmol → khối lượng SO<sub>4</sub><sup>2−</sup> = 0,3488·96,06 = <b>33,5 mg</b>. Lỗi hay gặp: «40,9 mg» (quên trừ lượng Mg<sup>2+</sup> đã chuẩn độ, dùng thẳng toàn bộ 0,4260 mmol EDTA làm lượng SO<sub>4</sub><sup>2−</sup>); «81,4 mg» (dùng nhầm M(BaSO<sub>4</sub>) = 233,4 thay vì M(SO<sub>4</sub>) = 96,06); «7,42 mg» (đảo chiều chuẩn độ ngược, coi lượng Mg<sup>2+</sup> dùng để chuẩn lại chính là lượng SO<sub>4</sub><sup>2−</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B022", chuong: "edta", dang: "D05 · Chuẩn độ ngược, gián tiếp, thay thế; chọn kĩ thuật", dangMoi: true, mucDo: 4,
  de: "Cân 1,000 g mẫu xi măng, hòa tan, định mức thành 100,0 mL (dung dịch A). Hút 10,00 mL A, thêm 15,00 mL EDTA 0,05000 M (dư), đun sôi, chỉnh pH 5, chuẩn độ EDTA dư bằng 12,00 mL Zn<sup>2+</sup> 0,04500 M. Tính %Al<sub>2</sub>O<sub>3</sub> trong mẫu (M(Al<sub>2</sub>O<sub>3</sub>) = 101,96).",
  phuongAn: ["1,07 %", "38,2 %", "21,4 %", "10,7 %"],
  dapAn: "D",
  loiGiai: "Trong 10,00 mL A: n(EDTA) dư ban đầu = 0,05000·15,00 = 0,7500 mmol; n(Zn<sup>2+</sup>) = 0,04500·12,00 = 0,5400 mmol → n(Al<sup>3+</sup>) = 0,7500 − 0,5400 = 0,2100 mmol trong 10,00 mL → trong cả 100,0 mL: 0,2100·(100,0/10,00) = 2,100 mmol → n(Al<sub>2</sub>O<sub>3</sub>) = 2,100/2 = 1,050 mmol → khối lượng = 1,050·101,96 = 107,1 mg = 0,1071 g → % = 0,1071/1,000·100 = <b>10,7 %</b>. Lỗi hay gặp: «38,2 %» (quên trừ lượng Zn<sup>2+</sup> đã chuẩn độ, dùng thẳng toàn bộ EDTA ban đầu nhân hệ số pha loãng làm lượng Al<sup>3+</sup>); «21,4 %» (quên chia 2 khi đổi số mol Al<sup>3+</sup> sang số mol Al<sub>2</sub>O<sub>3</sub>); «1,07 %» (quên hệ số pha loãng 100,0/10,00 = 10, dùng thẳng lượng Al<sup>3+</sup> trong 10,00 mL)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B023", chuong: "edta", dang: "D05 · Chuẩn độ ngược, gián tiếp, thay thế; chọn kĩ thuật", dangMoi: true, mucDo: 2,
  de: "Trong quy trình xác định Al<sup>3+</sup> bằng cách thêm EDTA dư rồi chuẩn độ ngược bằng Zn<sup>2+</sup>, tại sao phải đun sôi dung dịch ngay sau khi thêm EDTA dư (trước khi chuẩn độ ngược)?",
  phuongAn: [
    "Để đuổi hết khí CO<sub>2</sub> hòa tan có thể làm sai lệch pH của dung dịch đệm trong quá trình chuẩn độ ngược",
    "Để phá hủy chỉ thị kim loại còn dư trước khi thêm chỉ thị mới cho bước chuẩn độ ngược",
    "Để thúc đẩy phản ứng chậm của Al<sup>3+</sup> với EDTA đạt cân bằng trước khi chuẩn độ lượng dư",
    "Để chuyển toàn bộ Al<sup>3+</sup> thành kết tủa Al(OH)<sub>3</sub> trước khi chuẩn độ ngược lượng EDTA dư"
  ],
  dapAn: "C",
  loiGiai: "Al<sup>3+</sup> phản ứng rất chậm với EDTA ở nhiệt độ thường; đun sôi cung cấp năng lượng để phản ứng đạt cân bằng gần như hoàn toàn trong thời gian hợp lý, đảm bảo lượng EDTA dư đo được bằng chuẩn độ ngược phản ánh đúng lượng Al<sup>3+</sup> đã phản ứng. Lỗi hay gặp: «đuổi khí CO<sub>2</sub>...» và «phá hủy chỉ thị dư...» nêu vai trò không liên quan tới lý do thật của bước đun sôi trong kĩ thuật này; «chuyển Al<sup>3+</sup> thành kết tủa Al(OH)<sub>3</sub>...» sai vì mục đích thật là giữ Al<sup>3+</sup> ở dạng phức tan AlY<sup>−</sup>, kết tủa Al(OH)<sub>3</sub> sẽ làm hỏng phép chuẩn độ."
});

// ================= D06 · Chuẩn độ hai nấc pH trong cùng dung dịch (7 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B024", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 3,
  de: "50,00 mL dung dịch chứa Bi<sup>3+</sup> và Pb<sup>2+</sup> được chỉnh pH ≈ 1 (dư HNO<sub>3</sub> loãng), thêm xylenol da cam, chuẩn độ Bi<sup>3+</sup> (màu đỏ tím → vàng) hết 6,40 mL EDTA 0,01500 M. Tính [Bi<sup>3+</sup>] trong mẫu.",
  phuongAn: ["1,92·10<sup>−3</sup> M", "1,50·10<sup>−2</sup> M", "9,60·10<sup>−2</sup> M", "1,70·10<sup>−3</sup> M"],
  dapAn: "A",
  loiGiai: "Ở pH ≈ 1, chỉ Bi<sup>3+</sup> (K<sub>f</sub> rất lớn) phản ứng với EDTA: [Bi<sup>3+</sup>] = 0,01500·6,40/50,00 = <b>1,92·10<sup>−3</sup> M</b>. Lỗi hay gặp: «9,60·10<sup>−2</sup> M» (quên chia cho thể tích mẫu 50,00 mL, báo luôn số mol EDTA tính bằng mmol là nồng độ mol/L); «1,70·10<sup>−3</sup> M» (cộng nhầm thể tích EDTA vào mẫu số, dùng 50,00+6,40 thay vì 50,00); «1,50·10<sup>−2</sup> M» (dùng nhầm luôn nồng độ gốc của EDTA (0,01500 M) làm đáp số, quên tính qua thể tích mẫu và thể tích chuẩn độ)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B025", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 2,
  de: "Khi xác định đồng thời Fe<sup>3+</sup> và Zn<sup>2+</sup> trong cùng một mẫu bằng EDTA ở hai nấc pH, thứ tự tiến hành và chỉ thị hợp lý là gì?",
  phuongAn: ["Chuẩn cả Fe<sup>3+</sup> và Zn<sup>2+</sup> đồng thời ở pH 10 với ET-OO rồi tính riêng từng ion bằng cách khử Fe<sup>3+</sup>", "Chuẩn Fe<sup>3+</sup> trước ở pH thấp, sau đó nâng pH lên 5 để chuẩn Zn<sup>2+</sup> với xylenol da cam", "Chuẩn Fe<sup>3+</sup> trước ở pH 10 với ET-OO, sau đó hạ pH xuống 2 để chuẩn Zn<sup>2+</sup> với sulfosalicylic", "Chuẩn Zn<sup>2+</sup> trước ở pH thấp (≈ 2) với sulfosalicylic, sau đó nâng pH lên 5 để chuẩn Fe<sup>3+</sup> với xylenol da cam"],
  dapAn: "B",
  loiGiai: "Fe<sup>3+</sup> có K<sub>f</sub> rất lớn nên K<sub>f</sub>' vẫn đủ lớn ở pH thấp (≈ 2), trong khi Zn<sup>2+</sup> cần pH cao hơn (≈ 5) mới đạt K<sub>f</sub>' ≥ 10<sup>8</sup>; vì vậy phải chuẩn Fe<sup>3+</sup> riêng trước ở pH thấp (sulfosalicylic, tím đỏ → vàng nhạt), sau đó nâng pH lên 5 và đổi chỉ thị (xylenol da cam) để chuẩn tiếp Zn<sup>2+</sup> mà không phải tách mẫu. Lỗi hay gặp: «chuẩn Zn<sup>2+</sup> trước ở pH thấp...» đảo ngược vai trò hai ion so với K<sub>f</sub> thực tế; «chuẩn đồng thời ở pH 10 với ET-OO...» sai vì Fe<sup>3+</sup> khóa chỉ thị ET-OO, không dùng được khi còn Fe<sup>3+</sup> trong dung dịch; «chuẩn Fe<sup>3+</sup> ở pH 10 rồi hạ pH...» đảo ngược thứ tự pH hợp lý (phải đi từ pH thấp lên cao)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B026", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 3,
  de: "50,00 mL dung dịch chứa Bi<sup>3+</sup> và Pb<sup>2+</sup>: nấc 1 (pH ≈ 2, xylenol da cam) tốn 5,20 mL EDTA 0,01000 M (chuẩn riêng Bi<sup>3+</sup>); thêm đệm acetat lên pH ≈ 5, tốn thêm 9,80 mL cùng dung dịch EDTA (chuẩn riêng Pb<sup>2+</sup>). Tính [Pb<sup>2+</sup>] trong mẫu.",
  phuongAn: ["3,00·10<sup>−3</sup> M", "1,64·10<sup>−3</sup> M", "1,96·10<sup>−3</sup> M", "1,04·10<sup>−3</sup> M"],
  dapAn: "C",
  loiGiai: "Chỉ thể tích EDTA thêm <b>ở nấc 2</b> ứng với Pb<sup>2+</sup>: [Pb<sup>2+</sup>] = 0,01000·9,80/50,00 = <b>1,96·10<sup>−3</sup> M</b>. Lỗi hay gặp: «3,00·10<sup>−3</sup> M» (cộng nhầm cả thể tích nấc 1 lẫn nấc 2 (5,20+9,80) vào lượng Pb<sup>2+</sup>); «1,64·10<sup>−3</sup> M» (cộng nhầm thể tích EDTA nấc 2 vào mẫu số, dùng 50,00+9,80 thay vì 50,00); «1,04·10<sup>−3</sup> M» (nhầm dùng thể tích của nấc 1 (Bi<sup>3+</sup>, 5,20 mL) thay vì nấc 2 (Pb<sup>2+</sup>, 9,80 mL))."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B027", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 1,
  de: "50,00 mL dung dịch chứa Fe<sup>3+</sup> và Zn<sup>2+</sup>: nấc 1 (pH ≈ 2, sulfosalicylic) chuẩn Fe<sup>3+</sup> hết 7,30 mL EDTA 0,02000 M. Tính [Fe<sup>3+</sup>] trong mẫu.",
  phuongAn: ["2,55·10<sup>−3</sup> M", "1,46·10<sup>−1</sup> M", "2,92·10<sup>−6</sup> M", "2,92·10<sup>−3</sup> M"],
  dapAn: "D",
  loiGiai: "Ở pH ≈ 2 chỉ Fe<sup>3+</sup> phản ứng: [Fe<sup>3+</sup>] = 0,02000·7,30/50,00 = <b>2,92·10<sup>−3</sup> M</b>. Lỗi hay gặp: «2,55·10<sup>−3</sup> M» (cộng nhầm thể tích EDTA đã dùng vào mẫu số, dùng 50,00+7,30 thay vì 50,00); «1,46·10<sup>−1</sup> M» (quên chia cho thể tích mẫu, báo luôn số mol EDTA tính bằng mmol là nồng độ mol/L); «2,92·10<sup>−6</sup> M» (sai đơn vị, chia nhầm thêm 1000 lần)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B028", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 3,
  de: "50,00 mL dung dịch chứa Fe<sup>3+</sup> và Al<sup>3+</sup>: nấc 1 (pH ≈ 2, salicylic) chuẩn trực tiếp Fe<sup>3+</sup> hết 9,40 mL EDTA 0,02500 M. Tính [Fe<sup>3+</sup>] trong mẫu.",
  phuongAn: ["2,50·10<sup>−2</sup> M", "4,70·10<sup>−3</sup> M", "2,35·10<sup>−1</sup> M", "4,70·10<sup>−6</sup> M"],
  dapAn: "B",
  loiGiai: "Ở pH ≈ 2 chỉ Fe<sup>3+</sup> phản ứng trực tiếp: [Fe<sup>3+</sup>] = 0,02500·9,40/50,00 = <b>4,70·10<sup>−3</sup> M</b>. Lỗi hay gặp: «2,35·10<sup>−1</sup> M» (quên chia cho thể tích mẫu, báo luôn số mol EDTA tính bằng mmol là nồng độ mol/L); «2,50·10<sup>−2</sup> M» (chia nhầm số mol EDTA cho thể tích EDTA đã dùng thay vì thể tích mẫu, tức vô tình chỉ còn lại đúng nồng độ gốc của EDTA); «4,70·10<sup>−6</sup> M» (sai đơn vị, chia nhầm thêm 1000 lần thay vì giữ nguyên)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B029", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 4,
  de: "Tiếp mẫu Fe<sup>3+</sup>/Al<sup>3+</sup> ở câu trên (50,00 mL, đã chuẩn Fe<sup>3+</sup> ở pH 2 hết 9,40 mL EDTA 0,02500 M): thêm tiếp 25,00 mL EDTA 0,02500 M (dư), đun sôi, chỉnh pH 5, chuẩn độ EDTA dư bằng 8,75 mL dung dịch Fe<sup>3+</sup> chuẩn 0,02000 M. Tính [Al<sup>3+</sup>] trong mẫu ban đầu.",
  phuongAn: ["1,25·10<sup>−2</sup> M", "3,50·10<sup>−3</sup> M", "9,00·10<sup>−3</sup> M", "5,37·10<sup>−3</sup> M"],
  dapAn: "C",
  loiGiai: "n(EDTA) dư thêm vào = 0,02500·25,00 = 0,6250 mmol; n(Fe<sup>3+</sup> chuẩn lại) = 0,02000·8,75 = 0,1750 mmol = n(EDTA) dư thật → n(Al<sup>3+</sup>) = 0,6250 − 0,1750 = 0,4500 mmol → [Al<sup>3+</sup>] = 0,4500/50,00 (thể tích mẫu ban đầu) = <b>9,00·10<sup>−3</sup> M</b>. Lỗi hay gặp: «1,25·10<sup>−2</sup> M» (quên trừ lượng Fe<sup>3+</sup> chuẩn lại, dùng thẳng 0,6250 mmol EDTA dư ban đầu làm lượng Al<sup>3+</sup>); «3,50·10<sup>−3</sup> M» (đảo chiều chuẩn độ ngược, coi lượng Fe<sup>3+</sup> chuẩn lại chính là lượng Al<sup>3+</sup>); «5,37·10<sup>−3</sup> M» (chia nhầm cho tổng thể tích dung dịch tại thời điểm chuẩn độ ngược (50,00+25,00+8,75 mL) thay vì thể tích mẫu ban đầu 50,00 mL)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B030", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 4,
  de: "Hòa tan hoàn toàn 1,000 g hợp kim chứa Bi và Pb trong HNO<sub>3</sub>, định mức thành 100,0 mL (dung dịch A). Hút 10,00 mL A, chuẩn hai nấc bằng EDTA 0,01000 M với xylenol da cam: nấc 1 (pH ≈ 1–2) tốn 6,55 mL (Bi); nấc 2 (pH ≈ 5) tốn thêm 7,80 mL (Pb). Tính %Bi (khối lượng) trong hợp kim (M(Bi) = 209,0).",
  phuongAn: ["1,37 %", "30,0 %", "16,3 %", "13,7 %"],
  dapAn: "D",
  loiGiai: "n(Bi<sup>3+</sup>) trong 10,00 mL A = 0,01000·6,55 = 0,0655 mmol → trong cả 100,0 mL: 0,0655·(100,0/10,00) = 0,655 mmol → khối lượng Bi = 0,655·209,0 = 136,9 mg = 0,1369 g → % = 0,1369/1,000·100 = <b>13,7 %</b>. Lỗi hay gặp: «1,37 %» (quên hệ số pha loãng 100,0/10,00 = 10, dùng thẳng lượng Bi<sup>3+</sup> trong 10,00 mL); «30,0 %» (cộng nhầm cả thể tích nấc Pb (7,80 mL) vào lượng Bi, tính như thể cả 6,55+7,80 mL đều là Bi); «16,3 %» (nhầm dùng thể tích nấc 2 (Pb<sup>2+</sup>, 7,80 mL) thay vì thể tích nấc 1 (Bi<sup>3+</sup>, 6,55 mL))."
});

// ================= Câu chùm ED-C01 · Bi3+/Pb2+ hai nấc pH (5 câu, dạng D06) =================

var DAN_C01 = "Hòa tan m gam hỗn hợp muối Bi(NO<sub>3</sub>)<sub>3</sub> và Pb(NO<sub>3</sub>)<sub>2</sub>, định mức thành 250,0 mL dung dịch. Hút 50,00 mL dung dịch này, chỉnh pH ≈ 1–2 bằng HNO<sub>3</sub> loãng, thêm chỉ thị xylenol da cam, chuẩn độ Bi<sup>3+</sup> bằng EDTA 0,01000 M đến khi màu chuyển từ đỏ tím sang vàng, hết 8,20 mL. Sau đó thêm dung dịch đệm acetat để nâng pH lên khoảng 5 (dung dịch chuyển lại màu đỏ tím do Pb<sup>2+</sup> tạo phức với chỉ thị), chuẩn độ tiếp bằng cùng dung dịch EDTA đến khi chuyển sang vàng, hết thêm 9,60 mL.";

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B031", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 2,
  de: "Nấc chuẩn độ thứ nhất trong quy trình trên tiến hành ở pH khoảng bao nhiêu và dùng để xác định riêng ion nào, khi Pb<sup>2+</sup> chưa phản ứng đáng kể với EDTA?",
  phuongAn: ["pH ≈ 1–2, xác định riêng Bi<sup>3+</sup>", "pH ≈ 5, xác định riêng Pb<sup>2+</sup>", "pH ≈ 10, xác định riêng cả Bi<sup>3+</sup> và Pb<sup>2+</sup>", "pH ≈ 1–2, xác định riêng Pb<sup>2+</sup>"],
  dapAn: "A",
  loiGiai: "Bi<sup>3+</sup> có K<sub>f</sub> rất lớn (lg K<sub>f</sub> = 27,8) nên đạt K<sub>f</sub>' ≥ 10<sup>8</sup> ngay ở pH thấp (≈ 1–2), trong khi Pb<sup>2+</sup> (lg K<sub>f</sub> = 18,04) cần pH cao hơn (≈ 5) mới đủ điều kiện chuẩn độ — vì vậy nấc 1 ở pH ≈ 1–2 xác định chọn lọc Bi<sup>3+</sup> mà Pb<sup>2+</sup> chưa phản ứng đáng kể. Lỗi hay gặp: «pH ≈ 5, xác định riêng Pb<sup>2+</sup>» và «pH ≈ 10, xác định cả hai» gán sai pH và/hoặc sai ion cho nấc 1; «pH ≈ 1–2, xác định riêng Pb<sup>2+</sup>» đúng pH nhưng gán nhầm cho Pb<sup>2+</sup> (đảo vai trò hai ion).",
  chum: "ED-C01", dan: DAN_C01
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B032", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 3,
  de: "Tính [Bi<sup>3+</sup>] trong dung dịch 50,00 mL đem chuẩn độ.",
  phuongAn: ["8,20·10<sup>−2</sup> M", "1,92·10<sup>−3</sup> M", "1,64·10<sup>−3</sup> M", "1,41·10<sup>−3</sup> M"],
  dapAn: "C",
  loiGiai: "[Bi<sup>3+</sup>] = 0,01000·8,20/50,00 = <b>1,64·10<sup>−3</sup> M</b>. Lỗi hay gặp: «8,20·10<sup>−2</sup> M» (quên chia cho thể tích mẫu 50,00 mL, báo luôn số mol EDTA tính bằng mmol là nồng độ mol/L); «1,92·10<sup>−3</sup> M» (dùng nhầm thể tích của nấc 2 (9,60 mL, dành cho Pb<sup>2+</sup>) thay vì nấc 1); «1,41·10<sup>−3</sup> M» (cộng nhầm thể tích EDTA đã dùng vào mẫu số, dùng 50,00+8,20 thay vì 50,00).",
  chum: "ED-C01", dan: DAN_C01
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B033", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 3,
  de: "Tính [Pb<sup>2+</sup>] trong dung dịch 50,00 mL đem chuẩn độ.",
  phuongAn: ["3,56·10<sup>−3</sup> M", "1,61·10<sup>−3</sup> M", "1,64·10<sup>−3</sup> M", "1,92·10<sup>−3</sup> M"],
  dapAn: "D",
  loiGiai: "Chỉ thể tích EDTA thêm <b>ở nấc 2</b> ứng với Pb<sup>2+</sup>: [Pb<sup>2+</sup>] = 0,01000·9,60/50,00 = <b>1,92·10<sup>−3</sup> M</b>. Lỗi hay gặp: «3,56·10<sup>−3</sup> M» (cộng nhầm cả thể tích nấc 1 lẫn nấc 2 (8,20+9,60) vào lượng Pb<sup>2+</sup>); «1,61·10<sup>−3</sup> M» (cộng nhầm thể tích EDTA nấc 2 vào mẫu số, dùng 50,00+9,60 thay vì 50,00); «1,64·10<sup>−3</sup> M» (nhầm dùng thể tích của nấc 1 (Bi<sup>3+</sup>, 8,20 mL) thay vì nấc 2).",
  chum: "ED-C01", dan: DAN_C01
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B034", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 2,
  de: "Màu dung dịch quan sát được tại điểm cuối của mỗi nấc chuẩn độ trên là gì?",
  phuongAn: ["Nấc 1: vàng; nấc 2: vàng (cả hai nấc đều dùng xylenol da cam)", "Nấc 1: xanh chàm; nấc 2: xanh lam (cả hai đều dùng chỉ thị ET-OO)", "Nấc 1: vàng; nấc 2: tím (đổi sang chỉ thị murexit ở nấc 2)", "Nấc 1: đỏ tím; nấc 2: đỏ tím (không đổi màu vì chỉ thị đã bị khóa)"],
  dapAn: "A",
  loiGiai: "Xylenol da cam dùng được cho cả Bi<sup>3+</sup> (pH 1–3) và Pb<sup>2+</sup> (pH 5–6), đổi màu đỏ tím → vàng ở cả hai nấc: nấc 1 kết thúc màu vàng (hết Bi<sup>3+</sup>), sau khi nâng pH dung dịch trở lại đỏ tím do Pb<sup>2+</sup> tạo phức với chỉ thị, rồi nấc 2 lại chuyển về vàng khi hết Pb<sup>2+</sup>. Lỗi hay gặp: «xanh chàm; xanh lam» và «vàng; tím» nhầm sang chỉ thị khác (ET-OO, murexit) không dùng trong quy trình này; «đỏ tím; đỏ tím» sai vì cho rằng chỉ thị bị khóa, không đổi màu được — trái với mô tả đề bài.",
  chum: "ED-C01", dan: DAN_C01
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B035", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 4,
  de: "Từ [Bi<sup>3+</sup>] = 1,64·10<sup>−3</sup> M vừa tính được, tính khối lượng Bi (mg) có trong toàn bộ 250,0 mL dung dịch định mức ban đầu (M(Bi) = 209,0).",
  phuongAn: ["17,1 mg", "85,7 mg", "185 mg", "100 mg"],
  dapAn: "B",
  loiGiai: "Vì 50,00 mL đem chuẩn độ chỉ là một phần của 250,0 mL, nồng độ [Bi<sup>3+</sup>] tính được cũng chính là nồng độ trong cả bình định mức: n(Bi) = 1,64·10<sup>−3</sup>·0,2500 = 4,10·10<sup>−4</sup> mol → khối lượng = 4,10·10<sup>−4</sup>·209,0·1000 = <b>85,7 mg</b>. Lỗi hay gặp: «17,1 mg» (quên nhân với thể tích cả bình định mức 250,0 mL, chỉ tính khối lượng Bi tương ứng với 50,00 mL đã chuẩn độ); «100 mg» (dùng nhầm [Pb<sup>2+</sup>] = 1,92·10<sup>−3</sup> M thay vì [Bi<sup>3+</sup>] khi tính khối lượng Bi); «185 mg» (cộng nhầm khối lượng Bi và khối lượng Pb trong cả bình định mức vào làm một).",
  chum: "ED-C01", dan: DAN_C01
});

// ================= Câu chùm ED-C02 · Fe3+/Zn2+ hai nấc trong mẫu rắn (5 câu, dạng D06) =================

var DAN_C02 = "Cân 0,5000 g mẫu hợp kim chứa Fe và Zn, hòa tan hoàn toàn trong acid, định mức thành 250,0 mL dung dịch A. Hút 25,00 mL A, chỉnh pH ≈ 2, thêm chỉ thị acid sulfosalicylic, chuẩn độ Fe<sup>3+</sup> bằng EDTA 0,01000 M đến khi màu chuyển từ tím đỏ sang vàng nhạt, hết 5,55 mL. Sau đó thêm đệm để nâng pH lên khoảng 5, thêm chỉ thị xylenol da cam, chuẩn độ tiếp Zn<sup>2+</sup> bằng cùng dung dịch EDTA đến khi chuyển từ đỏ tím sang vàng, hết thêm 7,42 mL.";

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B036", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 2,
  de: "Ở nấc 1 (pH ≈ 2, chỉ thị sulfosalicylic) của quy trình trên, chỉ ion nào phản ứng với EDTA? Vì sao Zn<sup>2+</sup> chưa phản ứng đáng kể ở nấc này?",
  phuongAn: ["Zn<sup>2+</sup> phản ứng trước vì tạo phức với EDTA nhanh hơn Fe<sup>3+</sup> ở mọi giá trị pH", "Fe<sup>3+</sup> phản ứng vì bị chỉ thị sulfosalicylic khóa hoàn toàn nên không còn cản trở Zn<sup>2+</sup>", "Cả Fe<sup>3+</sup> và Zn<sup>2+</sup> đều phản ứng ngay ở nấc 1, chỉ thị chỉ đổi màu khi cả hai đã phản ứng hết", "Fe<sup>3+</sup> có K<sub>f</sub> lớn nên K<sub>f</sub>' ≥ 10<sup>8</sup> ở pH thấp; Zn<sup>2+</sup> có K<sub>f</sub> nhỏ hơn, K<sub>f</sub>' ở pH 2 chưa đạt ngưỡng"],
  dapAn: "D",
  loiGiai: "Fe<sup>3+</sup> có lg K<sub>f</sub> = 25,1 rất lớn nên K<sub>f</sub>' = α<sub>Y⁴⁻</sub>K<sub>f</sub> vẫn vượt 10<sup>8</sup> ngay ở pH thấp (≈ 2); Zn<sup>2+</sup> có lg K<sub>f</sub> = 16,50 nhỏ hơn nhiều, ở pH 2 giá trị α<sub>Y⁴⁻</sub> quá nhỏ khiến K<sub>f</sub>' chưa đạt 10<sup>8</sup>, phải nâng pH lên ≈ 5 mới chuẩn độ được. Lỗi hay gặp: «Zn<sup>2+</sup> phản ứng trước...» và «cả hai đều phản ứng...» mô tả sai cơ chế chọn lọc theo K<sub>f</sub>'; «bị chỉ thị khóa hoàn toàn...» hiểu sai khái niệm khóa chỉ thị (đó là hiện tượng chỉ thị bị giữ chặt bởi ion kim loại làm mất khả năng đổi màu, không liên quan tới việc Fe<sup>3+</sup> phản ứng trước Zn<sup>2+</sup> ở đây).",
  chum: "ED-C02", dan: DAN_C02
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B037", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 3,
  de: "Tính %Fe (khối lượng) trong mẫu hợp kim (M(Fe) = 55,85).",
  phuongAn: ["0,620 %", "7,26 %", "6,20 %", "8,29 %"],
  dapAn: "C",
  loiGiai: "n(Fe<sup>3+</sup>) trong 25,00 mL A = 0,01000·5,55 = 0,0555 mmol → trong cả 250,0 mL: 0,0555·(250,0/25,00) = 0,555 mmol → khối lượng Fe = 0,555·55,85 = 30,99 mg = 0,03099 g → % = 0,03099/0,5000·100 = <b>6,20 %</b>. Lỗi hay gặp: «0,620 %» (quên hệ số pha loãng 250,0/25,00 = 10, dùng thẳng lượng Fe<sup>3+</sup> trong 25,00 mL); «8,29 %» (nhầm dùng thể tích của nấc Zn<sup>2+</sup> (7,42 mL) thay vì nấc Fe<sup>3+</sup> (5,55 mL)); «7,26 %» (dùng nhầm M(Zn) = 65,38 thay vì M(Fe) = 55,85).",
  chum: "ED-C02", dan: DAN_C02
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B038", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 3,
  de: "Tính %Zn (khối lượng) trong mẫu hợp kim (M(Zn) = 65,38).",
  phuongAn: ["9,70 %", "0,970 %", "8,29 %", "7,26 %"],
  dapAn: "A",
  loiGiai: "n(Zn<sup>2+</sup>) trong 25,00 mL A (thể tích EDTA thêm ở nấc 2) = 0,01000·7,42 = 0,0742 mmol → trong cả 250,0 mL: 0,0742·(250,0/25,00) = 0,742 mmol → khối lượng Zn = 0,742·65,38 = 48,51 mg = 0,04851 g → % = 0,04851/0,5000·100 = <b>9,70 %</b>. Lỗi hay gặp: «0,970 %» (quên hệ số pha loãng 250,0/25,00 = 10, dùng thẳng lượng Zn<sup>2+</sup> ở nấc 2); «7,26 %» (nhầm dùng thể tích của nấc Fe<sup>3+</sup> (5,55 mL) thay vì nấc Zn<sup>2+</sup> (7,42 mL)); «8,29 %» (dùng nhầm M(Fe) = 55,85 thay vì M(Zn) = 65,38).",
  chum: "ED-C02", dan: DAN_C02
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B039", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 2,
  de: "Màu dung dịch quan sát được tại điểm cuối của mỗi nấc chuẩn độ trên là gì?",
  phuongAn: ["Nấc 1 (sulfosalicylic): xanh lam; nấc 2 (xylenol da cam): xanh chàm", "Nấc 1: tím đỏ → vàng nhạt; nấc 2: đỏ tím → vàng", "Cả hai nấc đều chuyển từ vàng sang tím vì dùng chung một chỉ thị", "Nấc 1 (sulfosalicylic): đỏ nho → xanh chàm; nấc 2 (xylenol da cam): đỏ → tím"],
  dapAn: "B",
  loiGiai: "Theo bảng chỉ thị kim loại: acid sulfosalicylic (dùng cho Fe<sup>3+</sup>, pH 2–3) đổi màu tím đỏ → vàng nhạt; xylenol da cam (dùng cho Zn<sup>2+</sup>, pH 5–6) đổi màu đỏ tím → vàng. Lỗi hay gặp: «xanh lam; xanh chàm» và «đỏ nho → xanh chàm; đỏ → tím» lấy nhầm màu của ET-OO hoặc các chỉ thị khác không dùng trong quy trình này; «chuyển từ vàng sang tím, dùng chung một chỉ thị» sai vì hai nấc dùng hai chỉ thị khác nhau, không chung một loại.",
  chum: "ED-C02", dan: DAN_C02
});

NGAN_HANG_CHO_DUYET.push({
  id: "ED-B040", chuong: "edta", dang: "D06 · Chuẩn độ hai nấc pH trong cùng dung dịch", dangMoi: true, mucDo: 4,
  de: "Từ %Zn = 9,70 % vừa tính được, tính hàm lượng Zn theo mg Zn/kg mẫu hợp kim.",
  phuongAn: ["6,20·10<sup>4</sup> mg/kg", "1,59·10<sup>5</sup> mg/kg", "9,70·10<sup>3</sup> mg/kg", "9,70·10<sup>4</sup> mg/kg"],
  dapAn: "D",
  loiGiai: "%Zn = 9,70 % nghĩa là 9,70 g Zn trong 100 g mẫu, tức 9,70·10 = 97,0 g Zn trong 1 kg mẫu = <b>9,70·10<sup>4</sup> mg/kg</b>. Lỗi hay gặp: «6,20·10<sup>4</sup> mg/kg» (dùng nhầm %Fe = 6,20 % đã tính ở câu trước thay vì %Zn); «9,70·10<sup>3</sup> mg/kg» (nhầm hệ số chuyển đổi, coi 1 % ứng với 1000 mg/kg thay vì 10000 mg/kg); «1,59·10<sup>5</sup> mg/kg» (cộng nhầm %Fe và %Zn (6,20 + 9,70 = 15,90 %) trước khi quy đổi sang mg/kg thay vì chỉ dùng %Zn).",
  chum: "ED-C02", dan: DAN_C02
});
