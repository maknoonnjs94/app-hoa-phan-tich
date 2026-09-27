/* Câu hỏi chờ duyệt bổ sung — chương "ket-tua" (Kết tủa và chuẩn độ kết tủa).
   D02 · Độ tan có phản ứng phụ (pH, tạo phức) — 10 câu (KT-B001..B010)
   D04 · Đường chuẩn độ kết tủa: pAg — 6 câu (KT-B011..B016)
   D06 · Định lượng bằng chuẩn độ bạc — 14 câu (KT-B017..B030)
   + 2 câu chùm KT-C01 (D06, Volhard KI, 5 câu KT-B031..B035), KT-C02 (D02, AgI + NH3, 5 câu KT-B036..B040) = 40 câu.
   Hằng số dùng: Ksp ZnS 2·10⁻²⁵, CuS 8·10⁻³⁷, Ag3AsO4 6·10⁻²³, AlPO4 9,84·10⁻²¹, CaC2O4 2,3·10⁻⁹, CaF2 3,2·10⁻¹¹,
   AgCl 1,8·10⁻¹⁰, AgBr 5,4·10⁻¹³, AgI 8,3·10⁻¹⁷, AgSCN 1,1·10⁻¹²; H2S Ka1=9,5·10⁻⁸, Ka2≈1,0·10⁻¹⁴ (gần đúng);
   H3AsO4 Ka1=5,8·10⁻³,Ka2=1,1·10⁻⁷,Ka3=3,2·10⁻¹²; H3PO4 Ka1=7,5·10⁻³,Ka2=6,2·10⁻⁸,Ka3=4,8·10⁻¹³;
   H2C2O4 Ka1=6,5·10⁻²,Ka2=6,46·10⁻⁵; HF Ka=7,1·10⁻⁴; Ag⁺–NH3 lgβ1=3,31, lgβ2=7,22. M: NaCl 58,44; NaBr 102,89;
   Br 79,90; KBr 119,01; NaI 149,89; I 126,90; As2O3 197,84; As 74,92; KI 166,00. */

// ================= D02 · Độ tan có phản ứng phụ (pH, tạo phức) — 10 câu =================

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B001", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 3,
  de: "Một dung dịch được giữ bão hòa H<sub>2</sub>S ([H<sub>2</sub>S] = 0,10 M không đổi) và duy trì [H<sup>+</sup>] = 0,10 M bằng đệm. Tính độ tan S của ZnS (K<sub>sp</sub> = 2·10<sup>−25</sup>) trong điều kiện này, biết H<sub>2</sub>S có K<sub>a1</sub> = 9,5·10<sup>−8</sup>, coi gần đúng K<sub>a2</sub> ≈ 1,0·10<sup>−14</sup>.",
  phuongAn: ["9,5·10<sup>−21</sup> M", "2,1·10<sup>−5</sup> M", "4,5·10<sup>−13</sup> M", "2,1·10<sup>−4</sup> M"],
  dapAn: "B",
  loiGiai: "[S<sup>2−</sup>] = K<sub>a1</sub>K<sub>a2</sub>[H<sub>2</sub>S]/[H<sup>+</sup>]<sup>2</sup> = 9,5·10<sup>−8</sup>·1,0·10<sup>−14</sup>·0,10/(0,10)<sup>2</sup> = 9,5·10<sup>−21</sup> M; S = K<sub>sp</sub>/[S<sup>2−</sup>] = 2·10<sup>−25</sup>/9,5·10<sup>−21</sup> = <b>2,1·10<sup>−5</sup> M</b>. Lỗi hay gặp: «4,5·10<sup>−13</sup> M» (bỏ qua hoàn toàn ảnh hưởng của pH, tính thẳng S = √K<sub>sp</sub> như trong nước nguyên chất); «2,1·10<sup>−4</sup> M» (quên bình phương [H<sup>+</sup>], dùng công thức [S<sup>2−</sup>] = K<sub>a1</sub>K<sub>a2</sub>[H<sub>2</sub>S]/[H<sup>+</sup>] bậc một); «9,5·10<sup>−21</sup> M» (nhầm lẫn, coi ngay giá trị [S<sup>2−</sup>] vừa tính được là độ tan S, quên chia cho K<sub>sp</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B002", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 3,
  de: "Tương tự câu trên nhưng giữ [H<sup>+</sup>] = 0,30 M (dung dịch HCl, điều kiện tách nhóm sulfide kinh điển), [H<sub>2</sub>S] = 0,10 M. Tính độ tan S của CuS (K<sub>sp</sub> = 8·10<sup>−37</sup>), dùng K<sub>a1</sub> = 9,5·10<sup>−8</sup>, K<sub>a2</sub> ≈ 1,0·10<sup>−14</sup>.",
  phuongAn: ["7,6·10<sup>−16</sup> M", "1,1·10<sup>−21</sup> M", "2,5·10<sup>−15</sup> M", "8,9·10<sup>−19</sup> M"],
  dapAn: "A",
  loiGiai: "[S<sup>2−</sup>] = K<sub>a1</sub>K<sub>a2</sub>[H<sub>2</sub>S]/[H<sup>+</sup>]<sup>2</sup> = 9,5·10<sup>−8</sup>·1,0·10<sup>−14</sup>·0,10/(0,30)<sup>2</sup> = 1,1·10<sup>−21</sup> M; S = 8·10<sup>−37</sup>/1,1·10<sup>−21</sup> = <b>7,6·10<sup>−16</sup> M</b> (cực kì nhỏ — đúng với thực tế CuS kết tủa hoàn toàn ngay cả trong acid mạnh). Lỗi hay gặp: «8,9·10<sup>−19</sup> M» (bỏ qua ảnh hưởng pH, tính S = √K<sub>sp</sub>); «2,5·10<sup>−15</sup> M» (quên bình phương [H<sup>+</sup>]); «1,1·10<sup>−21</sup> M» (nhầm lẫn, coi ngay giá trị [S<sup>2−</sup>] vừa tính được là độ tan S, quên chia cho K<sub>sp</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B003", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 4,
  de: "Tính độ tan S của Ag<sub>3</sub>AsO<sub>4</sub> (K<sub>sp</sub> = 6·10<sup>−23</sup>) trong dung dịch giữ pH = 6,80. Cho H<sub>3</sub>AsO<sub>4</sub>: K<sub>a1</sub> = 5,8·10<sup>−3</sup>; K<sub>a2</sub> = 1,1·10<sup>−7</sup>; K<sub>a3</sub> = 3,2·10<sup>−12</sup>.",
  phuongAn: ["5,2·10<sup>−5</sup> M", "2,7·10<sup>−9</sup> M", "1,2·10<sup>−6</sup> M", "2,3·10<sup>−5</sup> M"],
  dapAn: "D",
  loiGiai: "α<sub>AsO4</sub> = K<sub>a1</sub>K<sub>a2</sub>K<sub>a3</sub>/(h<sup>3</sup> + K<sub>a1</sub>h<sup>2</sup> + K<sub>a1</sub>K<sub>a2</sub>h + K<sub>a1</sub>K<sub>a2</sub>K<sub>a3</sub>) với h = 10<sup>−6,80</sup>, tính được α ≈ 8,3·10<sup>−6</sup>. Ag<sub>3</sub>AsO<sub>4</sub>: K<sub>sp</sub> = (3S)<sup>3</sup>(αS) = 27αS<sup>4</sup> ⇒ S = (K<sub>sp</sub>/27α)<sup>1/4</sup> = <b>2,3·10<sup>−5</sup> M</b>. Lỗi hay gặp: «1,2·10<sup>−6</sup> M» (bỏ qua ảnh hưởng pH, tính S = (K<sub>sp</sub>/27)<sup>1/4</sup>); «2,7·10<sup>−9</sup> M» (nhầm công thức stoichiometry kiểu MA, dùng S = √(K<sub>sp</sub>/α)); «5,2·10<sup>−5</sup> M» (quên hệ số 27 do bỏ qua số mũ 3 của [Ag<sup>+</sup>] = 3S, dùng S = (K<sub>sp</sub>/α)<sup>1/4</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B004", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 3,
  de: "Tính độ tan S của AlPO<sub>4</sub> (K<sub>sp</sub> = 9,84·10<sup>−21</sup>) trong dung dịch giữ pH = 5,00 (chỉ xét phản ứng phụ acid – base của PO<sub>4</sub><sup>3−</sup>, bỏ qua thủy phân Al<sup>3+</sup>). Cho H<sub>3</sub>PO<sub>4</sub>: K<sub>a1</sub> = 7,5·10<sup>−3</sup>; K<sub>a2</sub> = 6,2·10<sup>−8</sup>; K<sub>a3</sub> = 4,8·10<sup>−13</sup>.",
  phuongAn: ["3,3·10<sup>−11</sup> M", "2,1·10<sup>−7</sup> M", "9,9·10<sup>−11</sup> M", "5,8·10<sup>−6</sup> M"],
  dapAn: "D",
  loiGiai: "α<sub>PO4</sub> = K<sub>a1</sub>K<sub>a2</sub>K<sub>a3</sub>/(h<sup>3</sup> + K<sub>a1</sub>h<sup>2</sup> + K<sub>a1</sub>K<sub>a2</sub>h + K<sub>a1</sub>K<sub>a2</sub>K<sub>a3</sub>) với h = 10<sup>−5,00</sup>; số hạng K<sub>a1</sub>h<sup>2</sup> chiếm ưu thế, α ≈ 2,95·10<sup>−10</sup>. AlPO<sub>4</sub> là muối 1:1 nên K<sub>sp</sub> = S·αS ⇒ S = √(K<sub>sp</sub>/α) = <b>5,8·10<sup>−6</sup> M</b>. Lỗi hay gặp: «3,3·10<sup>−11</sup> M» (quên lấy căn bậc hai, dùng trực tiếp S = K<sub>sp</sub>/α); «9,9·10<sup>−11</sup> M» (bỏ qua ảnh hưởng pH, tính S = √K<sub>sp</sub>); «2,1·10<sup>−7</sup> M» (tính D chỉ với số hạng h<sup>3</sup>, bỏ sót số hạng K<sub>a1</sub>h<sup>2</sup> lớn hơn nhiều)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B005", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 3,
  de: "Sỏi thận calcium oxalat (CaC<sub>2</sub>O<sub>4</sub>, K<sub>sp</sub> = 2,3·10<sup>−9</sup>) có thể tan bớt trong môi trường acid của dạ dày. Tính độ tan S của CaC<sub>2</sub>O<sub>4</sub> ở pH = 2,50. Cho H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>: K<sub>a1</sub> = 6,5·10<sup>−2</sup>; K<sub>a2</sub> = 6,46·10<sup>−5</sup>.",
  phuongAn: ["3,5·10<sup>−4</sup> M", "6,0·10<sup>−3</sup> M", "1,2·10<sup>−7</sup> M", "4,8·10<sup>−5</sup> M"],
  dapAn: "A",
  loiGiai: "D = h<sup>2</sup> + K<sub>a1</sub>h + K<sub>a1</sub>K<sub>a2</sub> với h = 10<sup>−2,50</sup>; α<sub>C2O4</sub> = K<sub>a1</sub>K<sub>a2</sub>/D ≈ 1,9·10<sup>−2</sup>. K<sub>sp</sub> = S·αS ⇒ S = √(K<sub>sp</sub>/α) = <b>3,5·10<sup>−4</sup> M</b> (tăng khoảng 7 lần so với trong nước). Lỗi hay gặp: «4,8·10<sup>−5</sup> M» (bỏ qua ảnh hưởng pH, tính S = √K<sub>sp</sub>); «6,0·10<sup>−3</sup> M» (nhầm α = K<sub>a2</sub> trực tiếp, quên chia cho mẫu số D); «1,2·10<sup>−7</sup> M» (quên lấy căn bậc hai, dùng thẳng S = K<sub>sp</sub>/α)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B006", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 4,
  de: "Tính độ tan S của CaF<sub>2</sub> (K<sub>sp</sub> = 3,2·10<sup>−11</sup>) trong dung dịch giữ pH = 2,50. Cho HF: K<sub>a</sub> = 7,1·10<sup>−4</sup>.",
  phuongAn: ["6,2·10<sup>−4</sup> M", "9,8·10<sup>−4</sup> M", "1,3·10<sup>−5</sup> M", "2,0·10<sup>−4</sup> M"],
  dapAn: "A",
  loiGiai: "α<sub>F</sub> = K<sub>a</sub>/(h + K<sub>a</sub>) với h = 10<sup>−2,50</sup>, α ≈ 0,183. CaF<sub>2</sub> là muối MA<sub>2</sub>: K<sub>sp</sub> = S(2αS)<sup>2</sup> = 4α<sup>2</sup>S<sup>3</sup> ⇒ S = (K<sub>sp</sub>/4α<sup>2</sup>)<sup>1/3</sup> = <b>6,2·10<sup>−4</sup> M</b>. Lỗi hay gặp: «9,8·10<sup>−4</sup> M» (quên hệ số 4 do bỏ qua số mũ 2 của [F<sup>−</sup>] = 2αS, dùng S = (K<sub>sp</sub>/α<sup>2</sup>)<sup>1/3</sup>); «1,3·10<sup>−5</sup> M» (nhầm công thức kiểu MA, dùng S = √(K<sub>sp</sub>/α)); «2,0·10<sup>−4</sup> M» (bỏ qua ảnh hưởng pH, tính S = (K<sub>sp</sub>/4)<sup>1/3</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B007", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 2,
  de: "Tính độ tan S của AgCl (K<sub>sp</sub> = 1,8·10<sup>−10</sup>) trong dung dịch NH<sub>3</sub> dư, [NH<sub>3</sub>] tự do = 2,00 M. Cho Ag<sup>+</sup> – NH<sub>3</sub>: lgβ<sub>1</sub> = 3,31; lgβ<sub>2</sub> = 7,22 (phức bão hòa Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>).",
  phuongAn: ["1,3·10<sup>−5</sup> M", "1,1·10<sup>−1</sup> M", "7,7·10<sup>−2</sup> M", "8,6·10<sup>−4</sup> M"],
  dapAn: "B",
  loiGiai: "S = [Ag<sup>+</sup>]<sub>tự do</sub>(1 + β<sub>2</sub>[NH<sub>3</sub>]<sup>2</sup>) và K<sub>sp</sub> = [Ag<sup>+</sup>]<sub>tự do</sub>·S ⇒ S = √(K<sub>sp</sub>(1 + β<sub>2</sub>[NH<sub>3</sub>]<sup>2</sup>)) = √(1,8·10<sup>−10</sup>·(1 + 10<sup>7,22</sup>·2,00<sup>2</sup>)) = <b>1,1·10<sup>−1</sup> M</b>. Lỗi hay gặp: «1,3·10<sup>−5</sup> M» (bỏ qua hoàn toàn tạo phức với NH<sub>3</sub>, tính S = √K<sub>sp</sub>); «7,7·10<sup>−2</sup> M» (quên bình phương [NH<sub>3</sub>], dùng 1 + β<sub>2</sub>[NH<sub>3</sub>] bậc một); «8,6·10<sup>−4</sup> M» (dùng nhầm β<sub>1</sub> đơn phối tử thay vì β<sub>2</sub> của phức bão hòa Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B008", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 3,
  de: "Tính độ tan S của AgBr (K<sub>sp</sub> = 5,4·10<sup>−13</sup>) trong dung dịch NH<sub>3</sub> dư, [NH<sub>3</sub>] tự do = 3,00 M. Cho Ag<sup>+</sup> – NH<sub>3</sub>: lgβ<sub>1</sub> = 3,31; lgβ<sub>2</sub> = 7,22.",
  phuongAn: ["9,0·10<sup>−3</sup> M", "5,8·10<sup>−5</sup> M", "5,2·10<sup>−3</sup> M", "7,3·10<sup>−7</sup> M"],
  dapAn: "A",
  loiGiai: "S = √(K<sub>sp</sub>(1 + β<sub>2</sub>[NH<sub>3</sub>]<sup>2</sup>)) = √(5,4·10<sup>−13</sup>·(1 + 10<sup>7,22</sup>·3,00<sup>2</sup>)) = <b>9,0·10<sup>−3</sup> M</b> (AgBr tan trong NH<sub>3</sub> kém hơn AgCl nhiều do K<sub>sp</sub> nhỏ hơn). Lỗi hay gặp: «5,2·10<sup>−3</sup> M» (quên bình phương [NH<sub>3</sub>]); «7,3·10<sup>−7</sup> M» (bỏ qua tạo phức, tính S = √K<sub>sp</sub>); «5,8·10<sup>−5</sup> M» (dùng nhầm β<sub>1</sub> thay vì β<sub>2</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B009", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 2,
  de: "Hòa tan AgCl (K<sub>sp</sub> = 1,8·10<sup>−10</sup>) trong dung dịch NH<sub>3</sub> dư, [NH<sub>3</sub>] tự do = 2,50 M (Ag<sup>+</sup> – NH<sub>3</sub>: lgβ<sub>2</sub> = 7,22). Tính [Ag<sup>+</sup>] <b>tự do</b> (không kể phần đã tạo phức) trong dung dịch.",
  phuongAn: ["1,4·10<sup>−1</sup> M", "1,3·10<sup>−9</sup> M", "1,3·10<sup>−5</sup> M", "2,1·10<sup>−9</sup> M"],
  dapAn: "B",
  loiGiai: "K<sub>sp</sub> = [Ag<sup>+</sup>]<sub>tự do</sub>·S với S = [Ag<sup>+</sup>]<sub>tự do</sub>(1 + β<sub>2</sub>[NH<sub>3</sub>]<sup>2</sup>) ⇒ [Ag<sup>+</sup>]<sub>tự do</sub> = √(K<sub>sp</sub>/(1 + β<sub>2</sub>[NH<sub>3</sub>]<sup>2</sup>)) = <b>1,3·10<sup>−9</sup> M</b> (pAg = 8,88). Lỗi hay gặp: «1,4·10<sup>−1</sup> M» (nhầm lấy độ tan tổng S thay vì [Ag<sup>+</sup>] tự do); «1,3·10<sup>−5</sup> M» (bỏ qua tạo phức, tính √K<sub>sp</sub>); «2,1·10<sup>−9</sup> M» (quên bình phương [NH<sub>3</sub>] trong mẫu số)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B010", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 1,
  de: "AgI hầu như không tan trong dung dịch NH<sub>3</sub> đậm đặc, trong khi AgCl tan tương đối dễ, dù cả hai đều tạo phức Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> với cùng hằng số bền β<sub>2</sub> (K<sub>sp</sub> AgI = 8,3·10<sup>−17</sup>; K<sub>sp</sub> AgCl = 1,8·10<sup>−10</sup>). Nguyên nhân chính là gì?",
  phuongAn: ["I<sup>−</sup> phản ứng với NH<sub>3</sub> tạo thành NH<sub>4</sub>I, làm giảm mạnh nồng độ NH<sub>3</sub> tự do còn lại trong dung dịch", "K<sub>sp</sub>(AgI) nhỏ hơn K<sub>sp</sub>(AgCl) hàng triệu lần nên độ tan tuyệt đối vẫn rất nhỏ", "NH<sub>3</sub> là một base yếu, nên về nguyên tắc không thể hòa tan được bất kì kết tủa halogenua bạc nào cả", "Phức Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> tạo thành từ AgI kém bền hơn hẳn so với tạo thành từ AgCl, dù cùng chung một hằng số β<sub>2</sub>"],
  dapAn: "B",
  loiGiai: "S = √(K<sub>sp</sub>(1 + β<sub>2</sub>[NH<sub>3</sub>]<sup>2</sup>)); vì K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup> ≪ K<sub>sp</sub>(AgCl) = 1,8·10<sup>−10</sup>, hệ số tăng độ tan như nhau không đủ bù chênh lệch K<sub>sp</sub> quá lớn. Lỗi hay gặp: «I<sup>−</sup> phản ứng với NH<sub>3</sub>...» (I<sup>−</sup> không phải acid, không phản ứng kiểu này); «phức tạo thành từ AgI kém bền hơn...» (β<sub>2</sub> của Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> không phụ thuộc anion nào đang có mặt, không đổi giữa AgCl và AgI); «NH<sub>3</sub> không hòa tan được...» (mâu thuẫn với chính dữ kiện đề: AgCl vẫn tan tốt trong NH<sub>3</sub>)."
});

// ================= D04 · Đường chuẩn độ kết tủa: pAg — 6 câu =================

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B011", chuong: "ket-tua", dang: "D04 · Đường chuẩn độ kết tủa: pAg", dangMoi: true, mucDo: 2,
  de: "Chuẩn độ 25,00 mL Cl<sup>−</sup> 0,1000 M bằng Ag<sup>+</sup> 0,1000 M (K<sub>sp</sub> AgCl = 1,8·10<sup>−10</sup>). Tính pCl khi đã thêm 8,00 mL Ag<sup>+</sup> (Cl<sup>−</sup> còn dư).",
  phuongAn: ["1,29", "1,12", "8,46", "1,17"],
  dapAn: "A",
  loiGiai: "n(Cl<sup>−</sup>) dư = 0,1000·25,00 − 0,1000·8,00 = 1,700 mmol; V<sub>tổng</sub> = 33,00 mL ⇒ [Cl<sup>−</sup>] = 0,05152 M ⇒ pCl = <b>1,29</b>. Lỗi hay gặp: «1,17» (quên cộng thể tích Ag<sup>+</sup> đã thêm, chia cho V<sub>0</sub> = 25,00 mL thay vì 33,00 mL); «1,12» (quên trừ lượng Ag<sup>+</sup> đã phản ứng, chia n(Cl<sup>−</sup>) ban đầu cho V<sub>tổng</sub>); «8,46» (nhầm tính pAg qua K<sub>sp</sub>/[Cl<sup>−</sup>] rồi báo nhầm là pCl)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B012", chuong: "ket-tua", dang: "D04 · Đường chuẩn độ kết tủa: pAg", dangMoi: true, mucDo: 3,
  de: "Vẫn phép chuẩn độ ở câu trên (25,00 mL Cl<sup>−</sup> 0,1000 M bằng Ag<sup>+</sup> 0,1000 M, K<sub>sp</sub> AgCl = 1,8·10<sup>−10</sup>). Tính pCl khi đã thêm 40,00 mL Ag<sup>+</sup> (Ag<sup>+</sup> dư).",
  phuongAn: ["1,64", "8,11", "11,38", "8,53"],
  dapAn: "B",
  loiGiai: "n(Ag<sup>+</sup>) dư = 0,1000·40,00 − 0,1000·25,00 = 1,500 mmol; V<sub>tổng</sub> = 65,00 mL ⇒ [Ag<sup>+</sup>] = 0,02308 M (pAg = 1,64) ⇒ [Cl<sup>−</sup>] = K<sub>sp</sub>/[Ag<sup>+</sup>] = 7,8·10<sup>−9</sup> M ⇒ pCl = <b>8,11</b>. Lỗi hay gặp: «1,64» (nhầm lấy luôn [Ag<sup>+</sup>] dư làm [Cl<sup>−</sup>], bỏ qua liên hệ qua K<sub>sp</sub>); «8,53» (quên trừ n(Cl<sup>−</sup>) ban đầu, coi toàn bộ Ag<sup>+</sup> đã thêm là lượng dư); «11,38» (cộng nhầm pK<sub>sp</sub> với pAg thay vì trừ: pCl = pK<sub>sp</sub> − pAg chứ không phải pK<sub>sp</sub> + pAg)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B013", chuong: "ket-tua", dang: "D04 · Đường chuẩn độ kết tủa: pAg", dangMoi: true, mucDo: 2,
  de: "Chuẩn độ Br<sup>−</sup> bằng Ag<sup>+</sup> (K<sub>sp</sub> AgBr = 5,4·10<sup>−13</sup>; K<sub>sp</sub> AgCl = 1,8·10<sup>−10</sup>; K<sub>sp</sub> AgI = 8,3·10<sup>−17</sup>). Tính pAg tại điểm tương đương.",
  phuongAn: ["12,27", "4,87", "6,13", "8,04"],
  dapAn: "C",
  loiGiai: "Tại tương đương [Ag<sup>+</sup>] = [Br<sup>−</sup>] = √K<sub>sp</sub>(AgBr) ⇒ pAg = ½pK<sub>sp</sub>(AgBr) = ½·12,27 = <b>6,13</b>. Lỗi hay gặp: «12,27» (báo nguyên pK<sub>sp</sub>, quên nhân hệ số ½ khi lấy căn bậc hai); «4,87» (có nhân hệ số ½ nhưng dùng nhầm pK<sub>sp</sub> của AgCl thay vì AgBr); «8,04» (có nhân hệ số ½ nhưng dùng nhầm pK<sub>sp</sub> của AgI thay vì AgBr, nhầm lẫn giữa ba hằng số cho sẵn)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B014", chuong: "ket-tua", dang: "D04 · Đường chuẩn độ kết tủa: pAg", dangMoi: true, mucDo: 3,
  de: "Trộn 15,00 mL AgNO<sub>3</sub> 0,0400 M với 20,00 mL KI 0,0500 M (K<sub>sp</sub> AgI = 8,3·10<sup>−17</sup>). Tính pI của dung dịch thu được (I<sup>−</sup> còn dư).",
  phuongAn: ["1,54", "1,70", "14,14", "1,94"],
  dapAn: "D",
  loiGiai: "n(Ag<sup>+</sup>) = 0,600 mmol; n(I<sup>−</sup>) = 1,000 mmol ⇒ I<sup>−</sup> dư 0,400 mmol trong V<sub>tổng</sub> = 35,00 mL ⇒ [I<sup>−</sup>] = 0,01143 M ⇒ pI = <b>1,94</b>. Lỗi hay gặp: «1,70» (quên cộng thể tích AgNO<sub>3</sub>, chia I<sup>−</sup> dư cho 20,00 mL thay vì 35,00 mL); «1,54» (bỏ qua phản ứng kết tủa, tính thẳng nồng độ I<sup>−</sup> ban đầu chia cho V<sub>tổng</sub> mà không trừ Ag<sup>+</sup>); «14,14» (nhầm tính pAg qua K<sub>sp</sub>/[I<sup>−</sup>] rồi báo là pI)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B015", chuong: "ket-tua", dang: "D04 · Đường chuẩn độ kết tủa: pAg", dangMoi: true, mucDo: 4,
  de: "Chuẩn độ riêng biệt 25,00 mL Cl<sup>−</sup> 0,1000 M và 25,00 mL I<sup>−</sup> 0,1000 M, cùng bằng Ag<sup>+</sup> 0,1000 M (K<sub>sp</sub> AgCl = 1,8·10<sup>−10</sup>; K<sub>sp</sub> AgI = 8,3·10<sup>−17</sup>). Bước nhảy (từ 99,9 % đến 100,1 % V<sub>tđ</sub>, theo pAg) của phép chuẩn I<sup>−</sup> lớn hơn phép chuẩn Cl<sup>−</sup> bao nhiêu đơn vị pAg?",
  phuongAn: ["1,14", "6,34", "7,48", "−6,34"],
  dapAn: "B",
  loiGiai: "Ở 99,9 % và 100,1 % V<sub>tđ</sub>, nồng độ ion dư/dư Ag<sup>+</sup> giống nhau cho cả hai phép chuẩn (cùng C, V); chỉ khác qua K<sub>sp</sub>. Tính được bước nhảy pAg(AgCl) ≈ 1,14 và pAg(AgI) ≈ 7,48 (đúng bằng hiệu pK<sub>sp</sub> hai chất: 16,08 − 9,74 = 6,34). Chênh lệch = 7,48 − 1,14 = <b>6,34</b>. Lỗi hay gặp: «1,14» (chỉ lấy bước nhảy của riêng phép chuẩn Cl<sup>−</sup>); «7,48» (chỉ lấy bước nhảy của riêng phép chuẩn I<sup>−</sup>); «−6,34» (lấy đúng độ lớn nhưng để sai dấu, tức tính (bước nhảy Cl<sup>−</sup>) − (bước nhảy I<sup>−</sup>) rồi không lấy trị tuyệt đối)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B016", chuong: "ket-tua", dang: "D04 · Đường chuẩn độ kết tủa: pAg", dangMoi: true, mucDo: 3,
  de: "Trộn 12,00 mL AgNO<sub>3</sub> 0,0600 M với 25,00 mL NaCl 0,0400 M (K<sub>sp</sub> AgCl = 1,8·10<sup>−10</sup>). Tính pAg của dung dịch thu được.",
  phuongAn: ["1,71", "8,41", "7,62", "7,79"],
  dapAn: "C",
  loiGiai: "n(Ag<sup>+</sup>) = 0,720 mmol; n(Cl<sup>−</sup>) = 1,000 mmol ⇒ Cl<sup>−</sup> dư 0,280 mmol trong V<sub>tổng</sub> = 37,00 mL ⇒ [Cl<sup>−</sup>] = 7,57·10<sup>−3</sup> M ⇒ [Ag<sup>+</sup>] = K<sub>sp</sub>/[Cl<sup>−</sup>] = 2,38·10<sup>−8</sup> M ⇒ pAg = <b>7,62</b>. Lỗi hay gặp: «7,79» (quên cộng thể tích AgNO<sub>3</sub>, chia lượng Cl<sup>−</sup> dư cho 25,00 mL thay vì 37,00 mL); «1,71» (bỏ qua phản ứng kết tủa, tính thẳng [Ag<sup>+</sup>] = n(Ag<sup>+</sup>)/V<sub>tổng</sub>); «8,41» (cộng nhầm n(Ag<sup>+</sup>) và n(Cl<sup>−</sup>) thay vì trừ khi tính lượng Cl<sup>−</sup> dư)."
});

// ================= D06 · Định lượng bằng chuẩn độ bạc — 14 câu =================

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B017", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 2,
  de: "Hút 5,00 mL nước biển, định mức thành 250,0 mL. Hút 25,00 mL dung dịch này, chuẩn độ Mohr bằng AgNO<sub>3</sub> 0,05000 M hết 5,50 mL. Tính hàm lượng NaCl (g/L, coi toàn bộ Cl<sup>−</sup> ở dạng NaCl) trong nước biển ban đầu (M NaCl = 58,44).",
  phuongAn: ["0,643 g/L", "19,5 g/L", "32,1 g/L", "6,43 g/L"],
  dapAn: "C",
  loiGiai: "n(Cl<sup>−</sup>) hút = 0,05000·5,50 = 0,275 mmol ⇒ C trong dd pha loãng = 0,275/25,00 = 0,01100 M ⇒ C gốc = 0,01100·250,0/5,00 = 0,5500 M ⇒ 0,5500·58,44 = <b>32,1 g/L</b>. Lỗi hay gặp: «6,43 g/L» (nhầm dùng thể tích hút để chuẩn độ (25,00 mL) làm mẫu số của hệ số pha loãng, thay vì thể tích hút nước biển ban đầu (5,00 mL)); «0,643 g/L» (quên hoàn toàn hệ số pha loãng bình định mức, coi nồng độ đã pha loãng là nồng độ gốc); «19,5 g/L» (dùng nhầm M(Cl) = 35,45 thay vì M(NaCl) = 58,44)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B018", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 2,
  de: "Cân 1,000 g muối ăn, hòa tan, định mức 250,0 mL. Hút 5,00 mL, chuẩn độ Mohr bằng AgNO<sub>3</sub> 0,1000 M hết 3,35 mL. Tính % NaCl trong muối ăn (M NaCl = 58,44).",
  phuongAn: ["1,96 %", "97,9 %", "0,0391 %", "59,4 %"],
  dapAn: "B",
  loiGiai: "n(Cl<sup>−</sup>) hút = 0,1000·3,35 = 0,335 mmol ⇒ tổng trong 250,0 mL = 0,335·(250,0/5,00) = 16,75 mmol ⇒ m(NaCl) = 0,01675·58,44 = 0,9789 g ⇒ % = 0,9789/1,000·100 = <b>97,9 %</b>. Lỗi hay gặp: «1,96 %» (quên nhân hệ số pha loãng 250,0/5,00); «0,0391 %» (đảo ngược hệ số pha loãng, nhân với 5,00/250,0); «59,4 %» (dùng nhầm M(Cl) = 35,45 thay vì M(NaCl) = 58,44)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B019", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 3,
  de: "Chuẩn độ Mohr 25,00 mL mẫu chứa NaCl hết 22,50 mL AgNO<sub>3</sub> 0,05000 M. Mẫu trắng (huyền phù CaCO<sub>3</sub> cùng lượng chỉ thị, không có Cl<sup>−</sup>) tốn 0,30 mL AgNO<sub>3</sub> cùng loại. Tính [NaCl] trong mẫu, đã hiệu chỉnh mẫu trắng.",
  phuongAn: ["0,04440 M", "0,04500 M", "0,05631 M", "0,04560 M"],
  dapAn: "A",
  loiGiai: "Thể tích thực dùng cho Cl<sup>−</sup> = 22,50 − 0,30 = 22,20 mL ⇒ [NaCl] = 0,05000·22,20/25,00 = <b>0,04440 M</b>. Lỗi hay gặp: «0,04500 M» (quên trừ mẫu trắng, dùng nguyên 22,50 mL); «0,04560 M» (cộng nhầm mẫu trắng thay vì trừ, dùng 22,80 mL); «0,05631 M» (đảo tỉ lệ thể tích trong công thức, tính 25,00·0,05000/22,20 thay vì 0,05000·22,20/25,00)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B020", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 3,
  de: "Hút 25,00 mL dung dịch NaBr công nghiệp, định mức 500,0 mL. Hút 50,00 mL, chuẩn độ Mohr bằng AgNO<sub>3</sub> 0,02000 M hết 14,80 mL; mẫu trắng tốn 0,20 mL. Tính hàm lượng NaBr (g/L) trong mẫu gốc (M NaBr = 102,89).",
  phuongAn: ["12,0 g/L", "12,3 g/L", "1,20 g/L", "12,2 g/L"],
  dapAn: "A",
  loiGiai: "Thể tích thực = 14,80 − 0,20 = 14,60 mL ⇒ n(Br<sup>−</sup>) hút = 0,02000·14,60 = 0,2920 mmol ⇒ tổng trong 500,0 mL (= lượng trong 25,00 mL mẫu gốc) = 0,2920·10 = 2,920 mmol ⇒ m = 0,3004 g trong 25,00 mL ⇒ <b>12,0 g/L</b>. Lỗi hay gặp: «12,2 g/L» (quên trừ mẫu trắng, dùng nguyên 14,80 mL); «12,3 g/L» (cộng nhầm mẫu trắng thay vì trừ, dùng 15,00 mL); «1,20 g/L» (quên hệ số pha loãng 500,0/50,00)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B021", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 2,
  de: "Hút 2,00 mL nước mắm, định mức 100,0 mL (giữ pH trung tính bằng CaCO<sub>3</sub>). Hút 10,00 mL dung dịch này, chuẩn độ Mohr bằng AgNO<sub>3</sub> 0,1000 M hết 6,85 mL. Tính hàm lượng NaCl (g/L) trong nước mắm nguyên chất (M NaCl = 58,44).",
  phuongAn: ["121 g/L", "200 g/L", "40,0 g/L", "20,0 g/L"],
  dapAn: "B",
  loiGiai: "n(Cl<sup>−</sup>) hút = 0,1000·6,85 = 0,685 mmol ⇒ tổng trong 100,0 mL (= lượng trong 2,00 mL mẫu) = 0,685·10 = 6,850 mmol ⇒ m = 0,4003 g trong 2,00 mL ⇒ <b>200 g/L</b> (phù hợp nước mắm ngon, độ mặn 200 – 280 g NaCl/L). Lỗi hay gặp: «20,0 g/L» (quên hệ số pha loãng 100,0/10,00); «40,0 g/L» (nhầm dùng thể tích hút dung dịch pha loãng (10,00 mL) làm thể tích nước mắm gốc, thay vì 2,00 mL); «121 g/L» (dùng nhầm M(Cl) = 35,45 thay vì M(NaCl) = 58,44)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B022", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 2,
  de: "Thêm 50,00 mL AgNO<sub>3</sub> 0,1000 M vào 20,00 mL dung dịch chứa Cl<sup>−</sup>, lọc bỏ AgCl, chuẩn độ Ag<sup>+</sup> dư bằng KSCN 0,08000 M (chỉ thị Fe<sup>3+</sup>) hết 21,50 mL. Tính [Cl<sup>−</sup>] trong mẫu.",
  phuongAn: ["0,3360 M", "0,0656 M", "0,0860 M", "0,1640 M"],
  dapAn: "D",
  loiGiai: "n(Ag<sup>+</sup>) = 0,1000·50,00 = 5,000 mmol; n(Ag<sup>+</sup>) dư = 0,08000·21,50 = 1,720 mmol ⇒ n(Cl<sup>−</sup>) = 3,280 mmol ⇒ [Cl<sup>−</sup>] = 3,280/20,00 = <b>0,1640 M</b>. Lỗi hay gặp: «0,3360 M» (cộng nhầm n(Ag<sup>+</sup>) dư vào thay vì trừ); «0,0656 M» (dùng nhầm V = 50,00 mL thay vì 20,00 mL ở mẫu số); «0,0860 M» (nhầm lấy trực tiếp n(Ag<sup>+</sup>) dư chia cho V mẫu, coi như đó là n(Cl<sup>−</sup>))."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B023", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 3,
  de: "Cân 0,4000 g mẫu KBr kỹ thuật, hòa tan, thêm 40,00 mL AgNO<sub>3</sub> 0,1000 M (dư, không cần lọc AgBr), chuẩn độ Ag<sup>+</sup> dư bằng KSCN 0,05000 M hết 15,40 mL. Tính % Br (theo khối lượng) trong mẫu (M Br = 79,90; M KBr = 119,01).",
  phuongAn: ["96,1 %", "79,9 %", "64,5 %", "49,1 %"],
  dapAn: "C",
  loiGiai: "n(Ag<sup>+</sup>) = 0,1000·40,00 = 4,000 mmol; n(Ag<sup>+</sup>) dư = 0,05000·15,40 = 0,7700 mmol ⇒ n(Br<sup>−</sup>) = 3,230 mmol ⇒ m(Br) = 0,2581 g ⇒ % = 0,2581/0,4000·100 = <b>64,5 %</b>. Lỗi hay gặp: «79,9 %» (quên trừ Ag<sup>+</sup> dư, coi toàn bộ 4,000 mmol Ag<sup>+</sup> đã phản ứng với Br<sup>−</sup>); «96,1 %» (dùng nhầm M(KBr) = 119,01 thay vì M(Br) = 79,90); «49,1 %» (nhầm nồng độ AgNO<sub>3</sub> (0,1000 M) khi tính n(Ag<sup>+</sup>) dư thay vì nồng độ KSCN (0,05000 M))."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B024", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 3,
  de: "Thêm 30,00 mL AgNO<sub>3</sub> 0,1200 M vào 25,00 mL mẫu chứa Cl<sup>−</sup>, lọc bỏ AgCl, chuẩn độ Ag<sup>+</sup> dư bằng KSCN 0,1000 M hết 14,20 mL; mẫu trắng (không mẫu, chỉ chỉ thị) tốn 0,15 mL KSCN cùng loại. Tính [Cl<sup>−</sup>] đã hiệu chỉnh mẫu trắng.",
  phuongAn: ["0,08720 M", "0,07317 M", "0,08660 M", "0,08780 M"],
  dapAn: "D",
  loiGiai: "Thể tích KSCN thực dùng cho Ag<sup>+</sup> dư = 14,20 − 0,15 = 14,05 mL ⇒ n(Ag<sup>+</sup>) dư = 1,405 mmol; n(Ag<sup>+</sup>) ban đầu = 3,600 mmol ⇒ n(Cl<sup>−</sup>) = 2,195 mmol ⇒ [Cl<sup>−</sup>] = 2,195/25,00 = <b>0,08780 M</b>. Lỗi hay gặp: «0,08720 M» (quên trừ mẫu trắng, dùng nguyên 14,20 mL); «0,08660 M» (cộng nhầm mẫu trắng thay vì trừ, dùng 14,35 mL); «0,07317 M» (dùng nhầm V = 30,00 mL AgNO<sub>3</sub> làm mẫu số thay vì 25,00 mL thể tích mẫu)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B025", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 3,
  de: "Hút 10,00 mL dung dịch NaI dùng làm thuốc, thêm 35,00 mL AgNO<sub>3</sub> 0,1000 M (dư, không cần lọc AgI), chuẩn độ Ag<sup>+</sup> dư bằng KSCN 0,1000 M hết 12,60 mL. Tính hàm lượng NaI (g/L) trong dung dịch (M NaI = 149,89; M I = 126,90).",
  phuongAn: ["9,59 g/L", "71,3 g/L", "28,4 g/L", "33,6 g/L"],
  dapAn: "D",
  loiGiai: "n(Ag<sup>+</sup>) = 0,1000·35,00 = 3,500 mmol; n(Ag<sup>+</sup>) dư = 0,1000·12,60 = 1,260 mmol ⇒ n(I<sup>−</sup>) = 2,240 mmol ⇒ [I<sup>−</sup>] = 0,2240 M ⇒ 0,2240·149,89 = <b>33,6 g/L</b> NaI. Lỗi hay gặp: «71,3 g/L» (cộng nhầm n(Ag<sup>+</sup>) dư vào thay vì trừ); «9,59 g/L» (dùng nhầm V = 35,00 mL AgNO<sub>3</sub> làm mẫu số thay vì 10,00 mL thể tích mẫu); «28,4 g/L» (dùng nhầm M(I) = 126,90 thay vì M(NaI) = 149,89)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B026", chuong: "ket-tua", dang: "D05 · Phương pháp Mohr, Volhard, Fajans", dangMoi: true, mucDo: 1,
  de: "Trong phương pháp Volhard xác định Cl<sup>−</sup> bằng chuẩn độ ngược (thêm Ag<sup>+</sup> dư, chuẩn lượng dư bằng SCN<sup>−</sup>), vì sao phải lọc bỏ kết tủa AgCl trước khi chuẩn độ, trong khi xác định Br<sup>−</sup> hay I<sup>−</sup> thì không cần? Cho K<sub>sp</sub>: AgCl = 1,8·10<sup>−10</sup>; AgBr = 5,4·10<sup>−13</sup>; AgI = 8,3·10<sup>−17</sup>; AgSCN = 1,1·10<sup>−12</sup>.",
  phuongAn: ["Vì K<sub>sp</sub>(AgCl) > K<sub>sp</sub>(AgSCN), AgCl có thể chuyển hóa thành AgSCN, tiêu tốn thêm SCN<sup>−</sup>; AgBr, AgI có K<sub>sp</sub> nhỏ hơn nên không xảy ra", "Vì Cl<sup>−</sup> phản ứng với Ag<sup>+</sup> chậm hơn nhiều so với Br<sup>−</sup>, I<sup>−</sup>, nên cần lọc bỏ để đảm bảo phản ứng xảy ra hoàn toàn trước khi chuẩn độ", "Vì kết tủa AgCl có thể tan trở lại trong môi trường HNO<sub>3</sub> đặc, trong khi AgBr và AgI thì hoàn toàn không tan trong acid này", "Vì kết tủa AgCl có màu trắng, dễ lẫn với màu nền của dung dịch chỉ thị Fe<sup>3+</sup>, nên phải lọc bỏ để quan sát điểm cuối rõ ràng hơn"],
  dapAn: "A",
  loiGiai: "K<sub>sp</sub>(AgCl) = 1,8·10<sup>−10</sup> > K<sub>sp</sub>(AgSCN) = 1,1·10<sup>−12</sup> nên AgCl tan ra rồi kết tủa lại thành AgSCN, làm SCN<sup>−</sup> mất thêm ⇒ kết quả Cl<sup>−</sup> tính được sẽ thấp hơn thực tế nếu không lọc. Với Br<sup>−</sup>, I<sup>−</sup>: K<sub>sp</sub>(AgBr), K<sub>sp</sub>(AgI) đều nhỏ hơn K<sub>sp</sub>(AgSCN) nên hiện tượng này không xảy ra. Lỗi hay gặp: nhầm lí do sang tốc độ phản ứng, độ tan trong HNO<sub>3</sub> hoặc màu sắc chỉ thị — đều không phải bản chất của hiện tượng (cả ba kết tủa AgX đều không tan đáng kể trong HNO<sub>3</sub> loãng)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B027", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 3,
  de: "Cân 1,000 g thuốc trừ sâu chứa As, oxi hóa As thành AsO<sub>4</sub><sup>3−</sup>, thêm 30,00 mL AgNO<sub>3</sub> 0,1000 M để kết tủa Ag<sub>3</sub>AsO<sub>4</sub>, chuẩn độ Ag<sup>+</sup> dư bằng KSCN 0,1000 M hết 12,50 mL. Tính % As<sub>2</sub>O<sub>3</sub> trong mẫu (M As<sub>2</sub>O<sub>3</sub> = 197,84).",
  phuongAn: ["17,3 %", "5,77 %", "14,0 %", "11,5 %"],
  dapAn: "B",
  loiGiai: "n(Ag<sup>+</sup>) = 3,000 mmol; n(Ag<sup>+</sup>) dư = 1,250 mmol ⇒ n(Ag<sup>+</sup>) đã pư = 1,750 mmol. Theo tỉ lệ Ag<sub>3</sub>AsO<sub>4</sub> (3 Ag<sup>+</sup> : 1 AsO<sub>4</sub><sup>3−</sup> ≡ 1 As, 2 As : 1 As<sub>2</sub>O<sub>3</sub>): n(As) = 1,750/3 = 0,5833 mmol ⇒ n(As<sub>2</sub>O<sub>3</sub>) = 0,2917 mmol ⇒ m = 0,05770 g ⇒ % = <b>5,77 %</b>. Lỗi hay gặp: «17,3 %» (quên chia 3, coi tỉ lệ Ag<sup>+</sup> : AsO<sub>4</sub><sup>3−</sup> là 1:1); «11,5 %» (quên chia 2 giữa As và As<sub>2</sub>O<sub>3</sub>, coi n(As<sub>2</sub>O<sub>3</sub>) = n(As)); «14,0 %» (cộng nhầm n(Ag<sup>+</sup>) dư vào thay vì trừ khi tính n(Ag<sup>+</sup>) đã phản ứng)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B028", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 4,
  de: "Cân 0,8000 g mẫu chứa As, oxi hóa thành AsO<sub>4</sub><sup>3−</sup>, thêm 25,00 mL AgNO<sub>3</sub> 0,08000 M để kết tủa Ag<sub>3</sub>AsO<sub>4</sub>, chuẩn độ Ag<sup>+</sup> dư bằng KSCN 0,05000 M hết 10,20 mL. Tính % As (nguyên tố) trong mẫu (M As = 74,92; M As<sub>2</sub>O<sub>3</sub> = 197,84).",
  phuongAn: ["4,65 %", "2,31 %", "14,0 %", "7,84 %"],
  dapAn: "A",
  loiGiai: "n(Ag<sup>+</sup>) = 2,000 mmol; n(Ag<sup>+</sup>) dư = 0,5100 mmol ⇒ n(Ag<sup>+</sup>) đã pư = 1,490 mmol ⇒ n(As) = 1,490/3 = 0,4967 mmol ⇒ m(As) = 0,03721 g ⇒ % = <b>4,65 %</b>. Lỗi hay gặp: «14,0 %» (quên chia 3, coi n(As) = n(Ag<sup>+</sup>) đã phản ứng); «7,84 %» (cộng nhầm n(Ag<sup>+</sup>) dư vào thay vì trừ); «2,31 %» (nhầm nồng độ, dùng 0,05000 M của KSCN để tính cả n(Ag<sup>+</sup>) ban đầu thay vì 0,08000 M của AgNO<sub>3</sub>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B029", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 4,
  de: "Cân 2,000 g mẫu chứa As, oxi hóa thành AsO<sub>4</sub><sup>3−</sup>, thêm 50,00 mL AgNO<sub>3</sub> 0,1000 M, chuẩn độ Ag<sup>+</sup> dư bằng KSCN 0,1000 M hết 28,40 mL; mẫu trắng (không có As) tốn 0,20 mL KSCN cùng loại. Tính % As<sub>2</sub>O<sub>3</sub> trong mẫu (M As<sub>2</sub>O<sub>3</sub> = 197,84).",
  phuongAn: ["3,56 %", "3,59 %", "10,8 %", "3,53 %"],
  dapAn: "B",
  loiGiai: "Thể tích KSCN thực = 28,40 − 0,20 = 28,20 mL ⇒ n(Ag<sup>+</sup>) dư = 2,820 mmol; n(Ag<sup>+</sup>) ban đầu = 5,000 mmol ⇒ n(Ag<sup>+</sup>) đã pư = 2,180 mmol ⇒ n(As) = 0,7267 mmol ⇒ n(As<sub>2</sub>O<sub>3</sub>) = 0,3633 mmol ⇒ m = 0,07188 g ⇒ % = <b>3,59 %</b>. Lỗi hay gặp: «3,56 %» (quên trừ mẫu trắng, dùng nguyên 28,40 mL); «3,53 %» (cộng nhầm mẫu trắng thay vì trừ, dùng 28,60 mL); «10,8 %» (quên chia 3 khi chuyển từ n(Ag<sup>+</sup>) đã phản ứng sang n(As))."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B030", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 2,
  de: "Một dung dịch gốc thuốc bảo vệ thực vật chứa As: lấy 25,00 mL, thêm 20,00 mL AgNO<sub>3</sub> 0,05000 M, chuẩn độ Ag<sup>+</sup> dư bằng KSCN 0,04000 M hết 6,80 mL. Tính hàm lượng As<sub>2</sub>O<sub>3</sub> (g/L) trong dung dịch (M As<sub>2</sub>O<sub>3</sub> = 197,84).",
  phuongAn: ["1,92 g/L", "1,68 g/L", "2,88 g/L", "0,960 g/L"],
  dapAn: "D",
  loiGiai: "n(Ag<sup>+</sup>) = 1,000 mmol; n(Ag<sup>+</sup>) dư = 0,2720 mmol ⇒ n(Ag<sup>+</sup>) đã pư = 0,7280 mmol ⇒ n(As) = 0,2427 mmol ⇒ n(As<sub>2</sub>O<sub>3</sub>) = 0,1213 mmol ⇒ m = 0,02400 g trong 25,00 mL ⇒ <b>0,960 g/L</b>. Lỗi hay gặp: «1,92 g/L» (quên chia 2 giữa As và As<sub>2</sub>O<sub>3</sub>); «2,88 g/L» (quên chia 3 khi chuyển từ Ag<sup>+</sup> sang As); «1,68 g/L» (cộng nhầm n(Ag<sup>+</sup>) dư vào thay vì trừ)."
});

// ================= Câu chùm KT-C01 (D06 · Volhard xác định KI, 5 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B031", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 2,
  de: "Tính số mmol Ag<sup>+</sup> đã thêm vào ở bước trên.",
  phuongAn: ["0,400 mmol", "1,000 mmol", "0,500 mmol", "0,800 mmol"],
  dapAn: "B",
  loiGiai: "n(Ag<sup>+</sup>) = 0,05000·20,00 = <b>1,000 mmol</b>. Lỗi hay gặp: «0,800 mmol» (nhầm dùng nồng độ KSCN 0,04000 M thay vì nồng độ AgNO<sub>3</sub> 0,05000 M); «0,500 mmol» (nhầm lẫn thể tích mẫu hút 10,00 mL với thể tích AgNO<sub>3</sub> đã thêm 20,00 mL); «0,400 mmol» (nhầm với số mmol Ag<sup>+</sup> đã phản ứng với I<sup>−</sup> = 1,000 − 0,600, trong khi đề hỏi lượng Ag<sup>+</sup> đã thêm vào);",
  chum: "KT-C01", dan: "Xác định hàm lượng KI trong một chế phẩm y tế bằng phương pháp Volhard: cân 2,000 g mẫu, hòa tan, định mức thành 250,0 mL (dung dịch A). Hút 10,00 mL dung dịch A, thêm 20,00 mL AgNO<sub>3</sub> 0,05000 M (dư) để kết tủa hoàn toàn AgI, thêm vài giọt chỉ thị phèn sắt amoni (Fe<sup>3+</sup>), chuẩn độ lượng Ag<sup>+</sup> dư bằng dung dịch KSCN 0,04000 M đến khi xuất hiện màu đỏ nâu bền của phức FeSCN<sup>2+</sup>, hết 15,00 mL. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; K<sub>sp</sub>(AgSCN) = 1,1·10<sup>−12</sup>; M(KI) = 166,00."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B032", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 2,
  de: "Tính số mmol Ag<sup>+</sup> còn dư (xác định qua thể tích KSCN đã dùng).",
  phuongAn: ["0,400 mmol", "0,800 mmol", "0,6000 mmol", "0,750 mmol"],
  dapAn: "C",
  loiGiai: "n(Ag<sup>+</sup>) dư = 0,04000·15,00 = <b>0,6000 mmol</b>. Lỗi hay gặp: «0,750 mmol» (dùng nhầm nồng độ AgNO<sub>3</sub> 0,05000 M thay vì nồng độ KSCN 0,04000 M); «0,800 mmol» (nhầm lẫn thể tích AgNO<sub>3</sub> đã thêm (20,00 mL) với thể tích KSCN, tính 0,04000·20,00); «0,400 mmol» (nhầm lẫn thể tích mẫu hút (10,00 mL) với thể tích KSCN, tính 0,04000·10,00).",
  chum: "KT-C01", dan: "Xác định hàm lượng KI trong một chế phẩm y tế bằng phương pháp Volhard: cân 2,000 g mẫu, hòa tan, định mức thành 250,0 mL (dung dịch A). Hút 10,00 mL dung dịch A, thêm 20,00 mL AgNO<sub>3</sub> 0,05000 M (dư) để kết tủa hoàn toàn AgI, thêm vài giọt chỉ thị phèn sắt amoni (Fe<sup>3+</sup>), chuẩn độ lượng Ag<sup>+</sup> dư bằng dung dịch KSCN 0,04000 M đến khi xuất hiện màu đỏ nâu bền của phức FeSCN<sup>2+</sup>, hết 15,00 mL. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; K<sub>sp</sub>(AgSCN) = 1,1·10<sup>−12</sup>; M(KI) = 166,00."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B033", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 3,
  de: "Từ hai kết quả trên (n(Ag<sup>+</sup>) ban đầu = 1,000 mmol; n(Ag<sup>+</sup>) dư = 0,6000 mmol), tính nồng độ KI trong dung dịch A.",
  phuongAn: ["0,04000 M", "0,1000 M", "0,02500 M", "0,1600 M"],
  dapAn: "A",
  loiGiai: "n(I<sup>−</sup>) trong 10,00 mL = 1,000 − 0,6000 = 0,4000 mmol ⇒ [KI]<sub>A</sub> = 0,4000/10,00 = <b>0,04000 M</b>. Lỗi hay gặp: «0,1000 M» (quên trừ n(Ag<sup>+</sup>) dư, coi n(I<sup>−</sup>) = n(Ag<sup>+</sup>) ban đầu); «0,1600 M» (cộng nhầm hai giá trị thay vì trừ); «0,02500 M» (nếu lỡ dùng nhầm n(Ag<sup>+</sup>) dư = 0,750 mmol ở bước trước, kết quả sẽ sai theo).",
  chum: "KT-C01", dan: "Xác định hàm lượng KI trong một chế phẩm y tế bằng phương pháp Volhard: cân 2,000 g mẫu, hòa tan, định mức thành 250,0 mL (dung dịch A). Hút 10,00 mL dung dịch A, thêm 20,00 mL AgNO<sub>3</sub> 0,05000 M (dư) để kết tủa hoàn toàn AgI, thêm vài giọt chỉ thị phèn sắt amoni (Fe<sup>3+</sup>), chuẩn độ lượng Ag<sup>+</sup> dư bằng dung dịch KSCN 0,04000 M đến khi xuất hiện màu đỏ nâu bền của phức FeSCN<sup>2+</sup>, hết 15,00 mL. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; K<sub>sp</sub>(AgSCN) = 1,1·10<sup>−12</sup>; M(KI) = 166,00."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B034", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 4,
  de: "Từ [KI]<sub>A</sub> = 0,04000 M, tính % KI trong 2,000 g mẫu cân ban đầu.",
  phuongAn: ["3,32 %", "51,9 %", "0,133 %", "83,0 %"],
  dapAn: "D",
  loiGiai: "Vì hút 10,00 mL dung dịch A trực tiếp (không pha loãng thêm), nồng độ trong A cũng chính là 0,04000 M; tổng số mol KI trong cả 250,0 mL dung dịch A = 0,04000·0,2500 = 0,01000 mol ⇒ m(KI) = 0,01000·166,00 = 1,660 g ⇒ % = 1,660/2,000·100 = <b>83,0 %</b>. Lỗi hay gặp: «3,32 %» (quên hệ số 250,0/10,00, tính khối lượng chỉ từ 0,4000 mmol I<sup>−</sup> trong 10,00 mL rồi chia thẳng cho 2,000 g); «0,133 %» (đảo ngược hệ số pha loãng, nhân với 10,00/250,0 thay vì dùng thẳng thể tích 250,0 mL); «51,9 %» (nếu lỡ dùng nhầm n(Ag<sup>+</sup>) dư = 0,750 mmol ở câu trước, [KI]<sub>A</sub> sẽ sai thành 0,02500 M và kéo theo % sai theo).",
  chum: "KT-C01", dan: "Xác định hàm lượng KI trong một chế phẩm y tế bằng phương pháp Volhard: cân 2,000 g mẫu, hòa tan, định mức thành 250,0 mL (dung dịch A). Hút 10,00 mL dung dịch A, thêm 20,00 mL AgNO<sub>3</sub> 0,05000 M (dư) để kết tủa hoàn toàn AgI, thêm vài giọt chỉ thị phèn sắt amoni (Fe<sup>3+</sup>), chuẩn độ lượng Ag<sup>+</sup> dư bằng dung dịch KSCN 0,04000 M đến khi xuất hiện màu đỏ nâu bền của phức FeSCN<sup>2+</sup>, hết 15,00 mL. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; K<sub>sp</sub>(AgSCN) = 1,1·10<sup>−12</sup>; M(KI) = 166,00."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B035", chuong: "ket-tua", dang: "D06 · Định lượng bằng chuẩn độ bạc", dangMoi: true, mucDo: 3,
  de: "Có cần lọc bỏ kết tủa AgI trước khi chuẩn độ Ag<sup>+</sup> dư bằng KSCN không? Vì sao?",
  phuongAn: ["Không cần lọc, vì phản ứng giữa Ag<sup>+</sup> dư và SCN<sup>−</sup> diễn ra rất chậm khi có mặt AgI nên kết tủa không kịp gây ảnh hưởng gì đến kết quả", "Cần lọc, vì bề mặt kết tủa AgI hấp phụ mạnh chỉ thị Fe<sup>3+</sup> khiến điểm cuối bị sai lệch, giống hệt lí do phải lọc bỏ AgCl", "Không cần, vì K<sub>sp</sub>(AgI) ≪ K<sub>sp</sub>(AgSCN) nên AgI không chuyển hóa thành AgSCN, khác với trường hợp AgCl", "Cần lọc, vì AgI có màu vàng nhạt đặc trưng, rất dễ gây nhầm lẫn với màu đỏ nâu xuất hiện tại điểm cuối chuẩn độ"],
  dapAn: "C",
  loiGiai: "Vì K<sub>sp</sub>(AgI) ≪ K<sub>sp</sub>(AgSCN), kết tủa AgI bền hơn AgSCN nên không hòa tan để chuyển thành AgSCN trong quá trình chuẩn độ ngược — khác hẳn AgCl (K<sub>sp</sub> lớn hơn K<sub>sp</sub>(AgSCN)) buộc phải lọc bỏ trước. Lỗi hay gặp: nhầm lí do sang màu sắc kết tủa hoặc tốc độ phản ứng — cả hai đều không phải bản chất; câu về hấp phụ chỉ thị cũng sai vì đó không phải lí do của việc lọc bỏ trong phương pháp Volhard.",
  chum: "KT-C01", dan: "Xác định hàm lượng KI trong một chế phẩm y tế bằng phương pháp Volhard: cân 2,000 g mẫu, hòa tan, định mức thành 250,0 mL (dung dịch A). Hút 10,00 mL dung dịch A, thêm 20,00 mL AgNO<sub>3</sub> 0,05000 M (dư) để kết tủa hoàn toàn AgI, thêm vài giọt chỉ thị phèn sắt amoni (Fe<sup>3+</sup>), chuẩn độ lượng Ag<sup>+</sup> dư bằng dung dịch KSCN 0,04000 M đến khi xuất hiện màu đỏ nâu bền của phức FeSCN<sup>2+</sup>, hết 15,00 mL. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; K<sub>sp</sub>(AgSCN) = 1,1·10<sup>−12</sup>; M(KI) = 166,00."
});

// ================= Câu chùm KT-C02 (D02 · AgI kết tủa trong dư NH3, 5 câu) =================

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B036", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 3,
  de: "Tính [I<sup>−</sup>] dư trong dung dịch sau khi trộn (coi AgI kết tủa hết trước).",
  phuongAn: ["0,03000 M", "0,01000 M", "0,05000 M", "0,03333 M"],
  dapAn: "B",
  loiGiai: "n(Ag<sup>+</sup>) = 0,1000·20,00 = 2,000 mmol; n(I<sup>−</sup>) = 0,1000·30,00 = 3,000 mmol ⇒ I<sup>−</sup> dư = 1,000 mmol trong V<sub>tổng</sub> = 100,00 mL ⇒ [I<sup>−</sup>] dư = <b>0,01000 M</b>. Lỗi hay gặp: «0,05000 M» (cộng nhầm n(Ag<sup>+</sup>) và n(I<sup>−</sup>) thay vì trừ); «0,03333 M» (quên cộng thể tích NH<sub>3</sub>, chỉ chia I<sup>−</sup> dư cho 30,00 mL); «0,03000 M» (quên trừ n(Ag<sup>+</sup>), chia thẳng n(I<sup>−</sup>) ban đầu cho V<sub>tổng</sub>).",
  chum: "KT-C02", dan: "Trộn 20,00 mL AgNO<sub>3</sub> 0,1000 M với 30,00 mL KI 0,1000 M và 50,00 mL NH<sub>3</sub> 1,000 M. AgI kết tủa gần như hoàn toàn trước; phần Ag<sup>+</sup> còn lại trong dung dịch tồn tại chủ yếu ở dạng phức Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; Ag<sup>+</sup> – NH<sub>3</sub>: lgβ<sub>1</sub> = 3,31, lgβ<sub>2</sub> = 7,22 (phức bão hòa Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B037", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 3,
  de: "Dùng [I<sup>−</sup>] dư = 0,01000 M vừa tìm được, tính [Ag<sup>+</sup>] tự do trong dung dịch (coi gần đúng lượng AgI tan thêm do tạo phức là không đáng kể so với I<sup>−</sup> dư).",
  phuongAn: ["8,3·10<sup>−15</sup> M", "8,3·10<sup>−19</sup> M", "2,8·10<sup>−17</sup> M", "2,8·10<sup>−15</sup> M"],
  dapAn: "A",
  loiGiai: "Vì còn kết tủa AgI, cân bằng dị thể vẫn quyết định [Ag<sup>+</sup>]: [Ag<sup>+</sup>] = K<sub>sp</sub>/[I<sup>−</sup>] = 8,3·10<sup>−17</sup>/0,01000 = <b>8,3·10<sup>−15</sup> M</b>. Lỗi hay gặp: «8,3·10<sup>−19</sup> M» (nhân K<sub>sp</sub> với [I<sup>−</sup>] thay vì chia); «2,8·10<sup>−15</sup> M» (dùng nhầm [I<sup>−</sup>] dư = 0,03000 M — kết quả sai của câu trước — thay vì 0,01000 M); «2,8·10<sup>−17</sup> M» (dùng nhầm số mol I<sup>−</sup> ban đầu 3,000 mmol làm nồng độ, quên chia cho thể tích).",
  chum: "KT-C02", dan: "Trộn 20,00 mL AgNO<sub>3</sub> 0,1000 M với 30,00 mL KI 0,1000 M và 50,00 mL NH<sub>3</sub> 1,000 M. AgI kết tủa gần như hoàn toàn trước; phần Ag<sup>+</sup> còn lại trong dung dịch tồn tại chủ yếu ở dạng phức Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; Ag<sup>+</sup> – NH<sub>3</sub>: lgβ<sub>1</sub> = 3,31, lgβ<sub>2</sub> = 7,22 (phức bão hòa Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B038", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 1,
  de: "Từ [Ag<sup>+</sup>] tự do = 8,3·10<sup>−15</sup> M vừa tính, tính pAg của dung dịch.",
  phuongAn: ["14,56", "18,08", "14,08", "16,56"],
  dapAn: "C",
  loiGiai: "pAg = −lg(8,3·10<sup>−15</sup>) = <b>14,08</b>. Lỗi hay gặp: «18,08», «14,56», «16,56» (đều là pAg tính từ các giá trị [Ag<sup>+</sup>] tự do sai ở câu trước, tương ứng với ba lỗi 8,3·10<sup>−19</sup>; 2,8·10<sup>−15</sup>; 2,8·10<sup>−17</sup> M).",
  chum: "KT-C02", dan: "Trộn 20,00 mL AgNO<sub>3</sub> 0,1000 M với 30,00 mL KI 0,1000 M và 50,00 mL NH<sub>3</sub> 1,000 M. AgI kết tủa gần như hoàn toàn trước; phần Ag<sup>+</sup> còn lại trong dung dịch tồn tại chủ yếu ở dạng phức Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; Ag<sup>+</sup> – NH<sub>3</sub>: lgβ<sub>1</sub> = 3,31, lgβ<sub>2</sub> = 7,22 (phức bão hòa Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B039", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 4,
  de: "Cho [NH<sub>3</sub>] dư ≈ 0,5000 M (= 50,00·1,000/100,00, coi không đổi) và [Ag<sup>+</sup>] tự do = 8,3·10<sup>−15</sup> M, tính [Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>] trong dung dịch.",
  phuongAn: ["6,9·10<sup>−8</sup> M", "1,4·10<sup>−7</sup> M", "8,5·10<sup>−12</sup> M", "3,4·10<sup>−8</sup> M"],
  dapAn: "D",
  loiGiai: "[Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>] = β<sub>2</sub>[Ag<sup>+</sup>][NH<sub>3</sub>]<sup>2</sup> = 10<sup>7,22</sup>·8,3·10<sup>−15</sup>·0,5000<sup>2</sup> = <b>3,4·10<sup>−8</sup> M</b>. Lỗi hay gặp: «6,9·10<sup>−8</sup> M» (quên bình phương [NH<sub>3</sub>]); «1,4·10<sup>−7</sup> M» (quên nhân hệ số pha loãng của NH<sub>3</sub>, dùng nhầm [NH<sub>3</sub>] = 1,000 M ban đầu); «8,5·10<sup>−12</sup> M» (dùng nhầm β<sub>1</sub> thay vì β<sub>2</sub>).",
  chum: "KT-C02", dan: "Trộn 20,00 mL AgNO<sub>3</sub> 0,1000 M với 30,00 mL KI 0,1000 M và 50,00 mL NH<sub>3</sub> 1,000 M. AgI kết tủa gần như hoàn toàn trước; phần Ag<sup>+</sup> còn lại trong dung dịch tồn tại chủ yếu ở dạng phức Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; Ag<sup>+</sup> – NH<sub>3</sub>: lgβ<sub>1</sub> = 3,31, lgβ<sub>2</sub> = 7,22 (phức bão hòa Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>)."
});

NGAN_HANG_CHO_DUYET.push({
  id: "KT-B040", chuong: "ket-tua", dang: "D02 · Độ tan có phản ứng phụ (pH, tạo phức)", dangMoi: true, mucDo: 3,
  de: "So sánh nồng độ Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> = 3,4·10<sup>−8</sup> M vừa tính với nồng độ I<sup>−</sup> dư = 0,01000 M để kiểm tra lại giả thiết ban đầu (lượng AgI tan thêm do tạo phức là không đáng kể). Kết luận nào đúng?",
  phuongAn: ["Không thể so sánh trực tiếp hai giá trị này vì chúng được tính theo hai cách hoàn toàn khác nhau", "Nồng độ Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> nhỏ hơn I<sup>−</sup> dư khoảng 3·10<sup>5</sup> lần nên giả thiết hợp lí", "Nồng độ I<sup>−</sup> dư xấp xỉ bằng nồng độ Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>, nên giả thiết ban đầu về lượng AgI tan thêm là không hợp lí", "Nồng độ Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup> lớn hơn nhiều so với nồng độ I<sup>−</sup> dư, nên phần lớn AgI đã tan thêm do tạo phức, cần tính lại toàn bộ bài toán từ đầu"],
  dapAn: "B",
  loiGiai: "Tỉ số [I<sup>−</sup>] dư/[Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>] = 0,01000/3,4·10<sup>−8</sup> ≈ 2,9·10<sup>5</sup>, tức lượng AgI tan thêm (bằng đúng [Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>], vì mỗi Ag<sup>+</sup> hòa tan thêm giải phóng thêm một I<sup>−</sup>) nhỏ hơn I<sup>−</sup> dư hàng trăm nghìn lần — giả thiết ban đầu tự hợp lí (self-consistent). Lỗi hay gặp: kết luận ngược (cho rằng phải tính lại hoặc không hợp lí) hoặc cho rằng không so sánh được — cả hai đều sai vì cả hai đại lượng cùng đơn vị nồng độ mol/L, hoàn toàn so sánh được trực tiếp.",
  chum: "KT-C02", dan: "Trộn 20,00 mL AgNO<sub>3</sub> 0,1000 M với 30,00 mL KI 0,1000 M và 50,00 mL NH<sub>3</sub> 1,000 M. AgI kết tủa gần như hoàn toàn trước; phần Ag<sup>+</sup> còn lại trong dung dịch tồn tại chủ yếu ở dạng phức Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>. Cho K<sub>sp</sub>(AgI) = 8,3·10<sup>−17</sup>; Ag<sup>+</sup> – NH<sub>3</sub>: lgβ<sub>1</sub> = 3,31, lgβ<sub>2</sub> = 7,22 (phức bão hòa Ag(NH<sub>3</sub>)<sub>2</sub><sup>+</sup>)."
});
