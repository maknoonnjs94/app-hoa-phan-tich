/* Câu hỏi chờ duyệt bổ sung — chương "oxi-hoa-khu" (Oxi hóa – khử và chuẩn độ).
   D03 · Thế điều kiện E°' (6 câu) — D04 · Đường chuẩn độ và chọn chỉ thị (8 câu)
   D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp (16 câu + 2 câu chùm OK-C01, OK-C02, 5+5 câu) = 40 câu.
   Hằng số dùng: E°(MnO4-/Mn2+)=1,51 V (n=5, 8H+); E°(Cr2O7 2-/Cr3+)=1,33 V (n=6, 14H+); E°(Fe3+/Fe2+)=0,77 V;
   E°'(Ce4+/Ce3+ trong HNO3)=1,61 V; E°(I2/I-)=0,54 V; E°(Cu2+/Cu+)=0,18 V; pKsp(CuI)≈12; pKsp(CuSCN)=13,40;
   Ksp(AgCl)=1,8e-10; SCE=0,241 V so SHE; hệ số Nernst 0,059. */

// ================= D03 · Thế điều kiện E°' (6 câu) =================

NGAN_HANG.push({
  id: "OK-B001", chuong: "oxi-hoa-khu", dang: "D03 · Thế điều kiện E°'", dangMoi: true, mucDo: 2,
  de: "Tính E°'(MnO<sub>4</sub><sup>−</sup>/Mn<sup>2+</sup>) ở pH = 2,35 (coi [MnO<sub>4</sub><sup>−</sup>] = [Mn<sup>2+</sup>] = 1 M; E° = 1,51 V).",
  phuongAn: ["1,48 V", "1,73 V", "1,29 V", "1,12 V"],
  dapAn: "C",
  loiGiai: "MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> ⇌ Mn<sup>2+</sup> + 4H<sub>2</sub>O nên E°' = E° − (8·0,059/5)·pH = 1,51 − 0,0944·2,35 = <b>1,29 V</b>. Lỗi hay gặp: «1,48 V» (quên số mũ 8 của [H<sup>+</sup>], chỉ dùng hệ số (1·0,059/5)·pH); «1,73 V» (sai dấu, cộng thay vì trừ số hạng pH); «1,12 V» (nhầm lẫn với số mũ 14 của [H<sup>+</sup>] trong bán phản ứng Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/Cr<sup>3+</sup>, dùng hệ số (14·0,059/5)·pH thay vì (8·0,059/5)·pH)."
});

NGAN_HANG.push({
  id: "OK-B002", chuong: "oxi-hoa-khu", dang: "D03 · Thế điều kiện E°'", dangMoi: true, mucDo: 3,
  de: "Tính E°'(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/Cr<sup>3+</sup>) ở pH = 1,75 (coi nồng độ dạng oxi hóa bằng dạng khử; E° = 1,33 V).",
  phuongAn: ["1,09 V", "1,31 V", "0,85 V", "1,57 V"],
  dapAn: "A",
  loiGiai: "Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e<sup>−</sup> ⇌ 2Cr<sup>3+</sup> + 7H<sub>2</sub>O nên E°' = 1,33 − (14·0,059/6)·pH = 1,33 − 0,1377·1,75 = <b>1,09 V</b>. Lỗi hay gặp: «1,31 V» (quên số mũ 14 của [H<sup>+</sup>], chỉ dùng hệ số (1·0,059/6)·pH); «0,85 V» (nhầm số electron trao đổi n = 3, tưởng chỉ 1 nguyên tử Cr phản ứng, dùng hệ số (14·0,059/3)·pH); «1,57 V» (sai dấu, cộng thay vì trừ số hạng pH)."
});

NGAN_HANG.push({
  id: "OK-B003", chuong: "oxi-hoa-khu", dang: "D03 · Thế điều kiện E°'", dangMoi: true, mucDo: 2,
  de: "Khi có mặt I<sup>−</sup> 1 M, Cu<sup>2+</sup> bị khử thành kết tủa CuI: Cu<sup>2+</sup> + I<sup>−</sup> + e<sup>−</sup> ⇌ CuI(r). Tính E°'(Cu<sup>2+</sup>/CuI) biết E°(Cu<sup>2+</sup>/Cu<sup>+</sup>) = 0,18 V và pK<sub>sp</sub>(CuI) ≈ 12.",
  phuongAn: ["−0,53 V", "0,71 V", "0,18 V", "0,89 V"],
  dapAn: "D",
  loiGiai: "E°' = E° + 0,059·lg(1/T<sub>CuI</sub>) = E° + 0,059·pK<sub>sp</sub> = 0,18 + 0,059·12 = <b>0,89 V</b> (kết tủa hóa dạng khử làm E°' tăng mạnh so với E° tự do). Lỗi hay gặp: «−0,53 V» (sai dấu, dùng E° − 0,059·pK<sub>sp</sub> tức lg T thay vì lg 1/T); «0,71 V» (quên cộng E° ban đầu, chỉ báo số hạng 0,059·pK<sub>sp</sub>); «0,18 V» (quên hoàn toàn ảnh hưởng của kết tủa CuI, báo nguyên giá trị E° chuẩn ban đầu chưa hiệu chỉnh)."
});

NGAN_HANG.push({
  id: "OK-B004", chuong: "oxi-hoa-khu", dang: "D03 · Thế điều kiện E°'", dangMoi: true, mucDo: 3,
  de: "Khi có mặt SCN<sup>−</sup> 1 M, Cu<sup>2+</sup> bị khử thành kết tủa CuSCN: Cu<sup>2+</sup> + SCN<sup>−</sup> + e<sup>−</sup> ⇌ CuSCN(r), pK<sub>sp</sub>(CuSCN) = 13,40. So sánh E°'(Cu<sup>2+</sup>/CuSCN) với E°(I<sub>2</sub>/I<sup>−</sup>) = 0,54 V để xét chiều phản ứng giữa Cu<sup>2+</sup> và I<sup>−</sup> khi có SCN<sup>−</sup>.",
  phuongAn: ["E°' = −0,61 V < 0,54 V: I<sup>−</sup> oxi hóa được Cu<sup>+</sup>", "E°' = 0,97 V > 0,54 V: Cu<sup>2+</sup> oxi hóa được I<sup>−</sup>", "E°' = 0,79 V > 0,54 V: Cu<sup>2+</sup> oxi hóa được I<sup>−</sup>", "E°' = 0,18 V < 0,54 V: I<sup>−</sup> oxi hóa được Cu<sup>2+</sup>"],
  dapAn: "B",
  loiGiai: "E°' = E°(Cu<sup>2+</sup>/Cu<sup>+</sup>) + 0,059·pK<sub>sp</sub>(CuSCN) = 0,18 + 0,059·13,40 = <b>0,97 V &gt; 0,54 V</b>: Cu<sup>2+</sup> oxi hóa được I<sup>−</sup> (SCN<sup>−</sup> làm phản ứng thuận lợi hơn cả trường hợp có I<sup>−</sup> tạo CuI). Lỗi hay gặp: «E°' = −0,61 V...» (sai dấu, dùng E° − 0,059·pK<sub>sp</sub>, dẫn tới kết luận ngược); «E°' = 0,79 V...» (quên cộng E° ban đầu, chỉ lấy số hạng 0,059·pK<sub>sp</sub>, tuy kết luận chiều phản ứng vẫn đúng nhưng thế tính sai); «E°' = 0,18 V...» (quên hoàn toàn ảnh hưởng của kết tủa CuSCN, báo nguyên E° chuẩn ban đầu, dẫn tới kết luận ngược)."
});

NGAN_HANG.push({
  id: "OK-B005", chuong: "oxi-hoa-khu", dang: "D03 · Thế điều kiện E°'", dangMoi: true, mucDo: 4,
  de: "Điện cực Ag/AgCl: AgCl(r) + e<sup>−</sup> ⇌ Ag(r) + Cl<sup>−</sup>, E°(Ag<sup>+</sup>/Ag) = 0,80 V, K<sub>sp</sub>(AgCl) = 1,8·10<sup>−10</sup>. Tính thế của điện cực này trong dung dịch có [Cl<sup>−</sup>] = 0,125 M.",
  phuongAn: ["1,32 V", "0,85 V", "0,28 V", "−0,30 V"],
  dapAn: "C",
  loiGiai: "E = E°(Ag<sup>+</sup>/Ag) + 0,059·lg([Ag<sup>+</sup>]) với [Ag<sup>+</sup>] = K<sub>sp</sub>/[Cl<sup>−</sup>]: E = 0,80 + 0,059·lg(1,8·10<sup>−10</sup>/0,125) = 0,80 + 0,059·(−8,84) = <b>0,28 V</b>. Lỗi hay gặp: «1,32 V» (sai dấu, dùng E = E°(Ag<sup>+</sup>/Ag) − 0,059·lg(K<sub>sp</sub>/[Cl<sup>−</sup>]) thay vì cộng); «0,85 V» (quên hẳn số hạng K<sub>sp</sub>, tính trực tiếp E = 0,80 − 0,059·lg[Cl<sup>−</sup>] = 0,80 − 0,059·lg 0,125, coi như [Cl<sup>−</sup>] tham gia trực tiếp theo Nernst mà bỏ qua liên hệ qua tích số tan); «−0,30 V» (tính trùng lặp: dùng luôn E°'(AgCl/Ag) = 0,222 V tra bảng ở [Cl<sup>−</sup>] = 1 M làm thế gốc rồi còn cộng thêm 0,059·lg(K<sub>sp</sub>/[Cl<sup>−</sup>]) một lần nữa, tính ảnh hưởng của K<sub>sp</sub> hai lần)."
});

NGAN_HANG.push({
  id: "OK-B006", chuong: "oxi-hoa-khu", dang: "D03 · Thế điều kiện E°'", dangMoi: true, mucDo: 3,
  de: "Fe<sup>3+</sup> tạo phức bền FeF<sub>6</sub><sup>3−</sup> với F<sup>−</sup> (lgβ<sub>6</sub> = 14,8), trong khi Fe<sup>2+</sup> không tạo phức. Tính E°'(Fe<sup>3+</sup>/Fe<sup>2+</sup>) khi [F<sup>−</sup>] = 1 M (E° = 0,77 V).",
  phuongAn: ["−0,10 V", "1,64 V", "−0,91 V", "0,33 V"],
  dapAn: "A",
  loiGiai: "Dạng oxi hóa (Fe<sup>3+</sup>) tạo phức bền làm giảm E°': E°' = E° − 0,059·lgβ<sub>6</sub> = 0,77 − 0,059·14,8 = <b>−0,10 V</b> (F<sup>−</sup> \"che\" Fe<sup>3+</sup> rất mạnh). Lỗi hay gặp: «1,64 V» (sai dấu, cộng thay vì trừ số hạng 0,059·lgβ<sub>6</sub>); «−0,91 V» (nhầm bán phản ứng, dùng E°(Fe<sup>3+</sup>/Fe) = −0,04 V — cặp Fe<sup>3+</sup>/Fe kim loại cũng có trong bảng tra cứu — thay vì E°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = 0,77 V); «0,33 V» (nhầm số electron trao đổi n = 2 thay vì n = 1 của cặp Fe<sup>3+</sup>/Fe<sup>2+</sup>, dùng hệ số 0,059/2)."
});

// ================= D04 · Đường chuẩn độ và chọn chỉ thị (8 câu) =================

NGAN_HANG.push({
  id: "OK-B007", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 2,
  de: "Chuẩn độ Fe<sup>2+</sup> bằng Ce<sup>4+</sup> 0,1000 M trong HNO<sub>3</sub> cần 18,00 mL để đạt điểm tương đương (E°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = 0,77 V; E°'(Ce<sup>4+</sup>/Ce<sup>3+</sup>) = 1,61 V). Tính E khi đã thêm 9,00 mL Ce<sup>4+</sup>.",
  phuongAn: ["0,77 V", "1,61 V", "1,19 V", "0,75 V"],
  dapAn: "A",
  loiGiai: "Tại 9,00 mL (đúng 50 % thể tích tương đương), [Fe<sup>3+</sup>] = [Fe<sup>2+</sup>] nên E = E°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = <b>0,77 V</b>, không phụ thuộc nồng độ. Lỗi hay gặp: «1,61 V» (nhầm dùng E°'(Ce<sup>4+</sup>/Ce<sup>3+</sup>) thay vì cặp chất phân tích Fe<sup>3+</sup>/Fe<sup>2+</sup>); «1,19 V» (nhầm công thức tính tại điểm tương đương (0,77+1,61)/2 áp dụng sai cho điểm 50 %); «0,75 V» (dùng nhầm tỉ lệ thể tích V/V<sub>e</sub> = 9,00/18,00 = 0,5 để tính lg thay vì tỉ lệ đúng [Fe<sup>3+</sup>]/[Fe<sup>2+</sup>] = 1)."
});

NGAN_HANG.push({
  id: "OK-B008", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 4,
  de: "Chuẩn độ Fe<sup>2+</sup> bằng KMnO<sub>4</sub> trong dung dịch đệm ở pH = 1,20 (E° = 0,77 V và 1,51 V). Tính E tại điểm tương đương.",
  phuongAn: ["1,39 V", "1,29 V", "1,48 V", "1,27 V"],
  dapAn: "B",
  loiGiai: "E<sub>tđ</sub> = (E°<sub>Fe</sub> + 5E°<sub>Mn</sub>)/6 − (8·0,059/6)·pH = (0,77+5·1,51)/6 − 0,0787·1,20 = 1,387 − 0,094 = <b>1,29 V</b>. Lỗi hay gặp: «1,39 V» (quên số hạng hiệu chỉnh theo pH, dùng công thức cho [H<sup>+</sup>] = 1 M); «1,48 V» (sai dấu, cộng thay vì trừ số hạng pH); «1,27 V» (nhầm số electron n = 6 của tổng phản ứng với số electron n = 5 riêng của MnO<sub>4</sub><sup>−</sup> khi tính hệ số hiệu chỉnh, dùng (8·0,059/5)·pH)."
});

NGAN_HANG.push({
  id: "OK-B009", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 3,
  de: "Chuẩn độ Fe<sup>2+</sup> bằng KMnO<sub>4</sub> 0,02000 M ([H<sup>+</sup>] = 1 M) cần 10,00 mL để đạt điểm tương đương. Tính E khi đã thêm 10,05 mL KMnO<sub>4</sub> (E° = 0,77 V và 1,51 V).",
  phuongAn: ["1,54 V", "1,51 V", "1,48 V", "1,50 V"],
  dapAn: "C",
  loiGiai: "Sau tương đương dùng cặp MnO<sub>4</sub><sup>−</sup>/Mn<sup>2+</sup>: n(MnO<sub>4</sub><sup>−</sup> dư) = 0,02000·0,05 = 1,0·10<sup>−3</sup> mmol; n(Mn<sup>2+</sup>) = 0,02000·10,00 = 0,200 mmol. E = 1,51 + (0,059/5)·lg(1,0·10<sup>−3</sup>/0,200) = <b>1,48 V</b>. Lỗi hay gặp: «1,54 V» (đảo ngược tỉ số trong log, dùng [Mn<sup>2+</sup>]/[MnO<sub>4</sub><sup>−</sup>] thay vì ngược lại); «1,51 V» (quên trừ lượng MnO<sub>4</sub><sup>−</sup> đã phản ứng tới tương đương, coi toàn bộ 10,05 mL vừa thêm là lượng dư nên tỉ số ≈ 1); «1,50 V» (nhầm đơn vị: lấy thẳng giá trị nồng độ KMnO<sub>4</sub>, 0,02000, làm số mmol MnO<sub>4</sub><sup>−</sup> dư mà quên phải nhân với thể tích dư thực 0,05 mL trước khi lập tỉ số)."
});

NGAN_HANG.push({
  id: "OK-B010", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 1,
  de: "Một điện cực platin đo được thế 0,65 V so với điện cực calomel bão hòa (SCE, E = 0,241 V so với SHE). Tính thế đó so với điện cực hydro chuẩn (SHE).",
  phuongAn: ["0,41 V", "0,85 V", "0,89 V", "1,13 V"],
  dapAn: "C",
  loiGiai: "E(so SHE) = E(so SCE) + E(SCE so SHE) = 0,65 + 0,241 = <b>0,89 V</b>. Lỗi hay gặp: «0,41 V» (sai dấu, trừ thay vì cộng 0,241 V); «0,85 V» (dùng nhầm hằng số của điện cực Ag/AgCl bão hòa, 0,197 V, thay vì SCE 0,241 V); «1,13 V» (cộng nhầm hai lần hằng số SCE, 0,65 + 0,241 + 0,241, tưởng phải quy đổi lặp lại)."
});

NGAN_HANG.push({
  id: "OK-B011", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 2,
  de: "Thế tại điểm tương đương của một phép chuẩn độ oxi hóa – khử là 1,39 V so với điện cực hydro chuẩn (SHE). Tính giá trị đó nếu đo bằng điện cực calomel bão hòa (SCE, E = 0,241 V so với SHE).",
  phuongAn: ["1,63 V", "1,15 V", "1,11 V", "1,39 V"],
  dapAn: "B",
  loiGiai: "E(so SCE) = E(so SHE) − E(SCE so SHE) = 1,39 − 0,241 = <b>1,15 V</b>. Lỗi hay gặp: «1,63 V» (sai dấu, cộng thay vì trừ 0,241 V); «1,11 V» (dùng nhầm hằng số của calomen 1 M (NCE), 0,280 V, thay vì SCE 0,241 V); «1,39 V» (quên đổi thang, báo luôn giá trị đo so với SHE)."
});

NGAN_HANG.push({
  id: "OK-B012", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 3,
  de: "Chuẩn độ Fe<sup>2+</sup> bằng K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, có thêm hỗn hợp H<sub>2</sub>SO<sub>4</sub> – H<sub>3</sub>PO<sub>4</sub> (H<sub>3</sub>PO<sub>4</sub> tạo phức với Fe<sup>3+</sup>, hạ thấp E°'(Fe<sup>3+</sup>/Fe<sup>2+</sup>) xuống dưới nhiều so với giá trị chuẩn 0,77 V dùng để tính E<sub>tđ</sub> ≈ 1,25 V ở [H<sup>+</sup>] = 1 M). Trong 4 chỉ thị oxi hóa – khử sau (E<sup>0</sup><sub>In</sub>: xanh metylen 0,53 V; acid diphenylamin sulfonic 0,85 V; ferroin 1,15 V; hồ tinh bột — chỉ thị đặc hiệu cho I<sub>2</sub>), chỉ thị nào là lựa chọn kinh điển, phù hợp thực tế nhất?",
  phuongAn: ["Xanh metylen (E<sup>0</sup> = 0,53 V, không màu → xanh lam)", "Ferroin (E<sup>0</sup> = 1,15 V, đỏ → xanh nhạt)", "Hồ tinh bột (chỉ thị đặc hiệu cho I<sub>2</sub>)", "Diphenylamin sulfonic (E<sup>0</sup> = 0,85 V)"],
  dapAn: "D",
  loiGiai: "Khi có H<sub>3</sub>PO<sub>4</sub>, E°'(Fe<sup>3+</sup>/Fe<sup>2+</sup>) hạ thấp đáng kể so với 0,77 V nên bước nhảy thế thực tế thấp hơn nhiều so với E<sub>tđ</sub> ≈ 1,25 V tính theo E° chưa hiệu chỉnh; cần chỉ thị có E<sup>0</sup> phù hợp vùng thấp đó: acid diphenylamin sulfonic (E<sup>0</sup> = 0,85 V) là lựa chọn kinh điển, thực dùng cho phương pháp dicromat có H<sub>3</sub>PO<sub>4</sub>. Lỗi hay gặp: chọn «xanh metylen» (E<sup>0</sup> = 0,53 V quá thấp, đổi màu sớm trước bước nhảy); chọn «ferroin» (E<sup>0</sup> = 1,15 V có vẻ gần giá trị E<sub>tđ</sub> = 1,25 V tính theo E° chuẩn hơn, nhưng đó là hiểu sai bản chất — chính H<sub>3</sub>PO<sub>4</sub> đã hạ bước nhảy xuống thấp hơn nhiều nên ferroin đổi màu quá muộn, không phù hợp thực tế); chọn «hồ tinh bột» (nhầm với chỉ thị của phương pháp iod, không phải chỉ thị oxi hóa – khử thực sự cho phản ứng này)."
});

NGAN_HANG.push({
  id: "OK-B013", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 4,
  de: "Chuẩn độ Fe<sup>2+</sup> bằng Ce<sup>4+</sup> trong H<sub>2</sub>SO<sub>4</sub> 1 M (E°'(Ce<sup>4+</sup>/Ce<sup>3+</sup>) = 1,44 V; E°'(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = 0,68 V trong cùng môi trường H<sub>2</sub>SO<sub>4</sub> 1 M, E<sub>tđ</sub> = (0,68+1,44)/2 = 1,06 V). Trong 4 chỉ thị (E<sup>0</sup><sub>In</sub>: xanh metylen 0,53 V; acid diphenylamin sulfonic 0,85 V; nitroferroin 1,25 V; ferroin 1,15 V), chỉ thị nào phù hợp nhất?",
  phuongAn: ["Nitroferroin (E<sup>0</sup> = 1,25 V)", "Acid diphenylamin sulfonic (E<sup>0</sup> = 0,85 V)", "Xanh metylen (E<sup>0</sup> = 0,53 V)", "Ferroin (E<sup>0</sup> = 1,15 V)"],
  dapAn: "D",
  loiGiai: "|1,15 − 1,06| = 0,09 V nhỏ hơn |1,25 − 1,06| = 0,19 V nên ferroin gần E<sub>tđ</sub> hơn nitroferroin: ferroin là chỉ thị kinh điển cho phép chuẩn độ Fe<sup>2+</sup> bằng Ce<sup>4+</sup>. Lỗi hay gặp: chọn «nitroferroin» (E<sup>0</sup> cao hơn ferroin nhưng lại xa E<sub>tđ</sub> hơn, không so sánh khoảng cách thực tế); chọn «acid diphenylamin sulfonic» (E<sup>0</sup> = 0,85 V quá thấp so với bước nhảy, đây là chỉ thị dùng cho Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> chứ không phải Ce<sup>4+</sup>); chọn «xanh metylen» (E<sup>0</sup> = 0,53 V quá thấp, đổi màu sớm trước bước nhảy)."
});

NGAN_HANG.push({
  id: "OK-B014", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 3,
  de: "Chuẩn độ 20,00 mL Fe<sup>2+</sup> 0,1000 M bằng Ce<sup>4+</sup> 0,1000 M trong H<sub>2</sub>SO<sub>4</sub> (điểm tương đương tại 20,00 mL; E° = 0,77 V). Tính E khi đã thêm 14,00 mL Ce<sup>4+</sup>.",
  phuongAn: ["0,79 V", "0,75 V", "0,76 V", "0,81 V"],
  dapAn: "A",
  loiGiai: "Trước tương đương dùng cặp Fe<sup>3+</sup>/Fe<sup>2+</sup>: n(Fe<sup>3+</sup>) = 0,1000·14,00 = 1,400 mmol; n(Fe<sup>2+</sup> còn) = 0,1000·20,00 − 1,400 = 0,600 mmol. E = 0,77 + 0,059·lg(1,400/0,600) = <b>0,79 V</b>. Lỗi hay gặp: «0,75 V» (đảo ngược tỉ số trong log, dùng [Fe<sup>2+</sup>]/[Fe<sup>3+</sup>] thay vì ngược lại); «0,76 V» (quên trừ lượng Fe<sup>2+</sup> đã phản ứng, dùng tỉ số V/V<sub>e</sub> = 14,00/20,00 thay vì tỉ số nồng độ Fe<sup>3+</sup>/Fe<sup>2+</sup> còn lại); «0,81 V» (nhầm lẫn bình phương tỉ số nồng độ, dùng lg[(1,400/0,600)<sup>2</sup>] thay vì lg(1,400/0,600))."
});

// ================= D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp (16 câu) =================

NGAN_HANG.push({
  id: "OK-B015", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 3,
  de: "Nghiền 20 viên thuốc sắt (II), hòa tan hoàn toàn trong H<sub>2</sub>SO<sub>4</sub> loãng, định mức thành 500,0 mL dung dịch (dung dịch A). Hút 25,00 mL A, chuẩn độ bằng KMnO<sub>4</sub> 0,01000 M hết 8,45 mL. Tính khối lượng Fe (mg) trong mỗi viên (M(Fe) = 55,85).",
  phuongAn: ["1,18 mg/viên", "472 mg/viên", "4,72 mg/viên", "23,6 mg/viên"],
  dapAn: "D",
  loiGiai: "n(MnO<sub>4</sub><sup>−</sup>) = 0,01000·8,45 = 0,0845 mmol → n(Fe<sup>2+</sup>) trong 25,00 mL = 5·0,0845 = 0,4225 mmol → trong cả 500,0 mL: 0,4225·(500,0/25,00) = 8,450 mmol → khối lượng Fe = 8,450·55,85 = 472,0 mg, chia 20 viên: <b>23,6 mg/viên</b>. Lỗi hay gặp: «1,18 mg/viên» (quên hệ số pha loãng 500,0/25,00 = 20, dùng thẳng lượng Fe<sup>2+</sup> trong 25,00 mL rồi mới chia 20 viên); «472 mg/viên» (tính đúng tổng khối lượng Fe trong cả lọ nhưng quên chia cho 20 viên); «4,72 mg/viên» (quên hệ số tỉ lượng 5 giữa Fe<sup>2+</sup> và MnO<sub>4</sub><sup>−</sup>, coi tỉ lệ phản ứng 1 : 1)."
});

NGAN_HANG.push({
  id: "OK-B016", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 4,
  de: "Cân 1,000 g quặng sắt, hòa tan hoàn toàn, định mức thành 250,0 mL (dung dịch A). Hút 25,00 mL A, chuẩn độ bằng KMnO<sub>4</sub> 0,01000 M hết 7,30 mL. Tính %Fe trong quặng (M(Fe) = 55,85; M(Fe<sub>2</sub>O<sub>3</sub>) = 159,7).",
  phuongAn: ["2,04 %", "20,4 %", "4,08 %", "58,3 %"],
  dapAn: "B",
  loiGiai: "n(MnO<sub>4</sub><sup>−</sup>) = 0,01000·7,30 = 0,0730 mmol → n(Fe<sup>2+</sup>) trong 25,00 mL = 5·0,0730 = 0,3650 mmol → trong cả 250,0 mL: 0,3650·10 = 3,650 mmol → khối lượng Fe = 3,650·55,85 = 203,85 mg = 0,20385 g → % = 0,20385/1,000·100 = <b>20,4 %</b>. Lỗi hay gặp: «2,04 %» (quên hệ số pha loãng 250,0/25,00 = 10, dùng thẳng lượng Fe<sup>2+</sup> trong 25,00 mL); «4,08 %» (quên hệ số tỉ lượng 5 giữa Fe<sup>2+</sup> và MnO<sub>4</sub><sup>−</sup>, coi tỉ lệ phản ứng 1 : 1); «58,3 %» (dùng nhầm M(Fe<sub>2</sub>O<sub>3</sub>) = 159,7 thay vì M(Fe) = 55,85, quên đổi số mol Fe<sub>2</sub>O<sub>3</sub> ra số mol Fe (chia 2))."
});

NGAN_HANG.push({
  id: "OK-B017", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 3,
  de: "Chuẩn độ 50,00 mL mẫu nước thải công nghiệp bằng K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,001000 M hết 10,50 mL. Tính hàm lượng Fe trong mẫu theo ppm (M(Fe) = 55,85; M(Fe<sub>2</sub>O<sub>3</sub>) = 159,7).",
  phuongAn: ["11,7 ppm", "3,52 ppm", "70,4 ppm", "201 ppm"],
  dapAn: "C",
  loiGiai: "n(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>) = 0,001000·10,50 = 0,01050 mmol → n(Fe<sup>2+</sup>) = 6·0,01050 = 0,06300 mmol → khối lượng Fe = 0,06300·55,85 = 3,519 mg trong 50,00 mL → quy về 1 L: 3,519·1000/50,00 = <b>70,4 ppm</b>. Lỗi hay gặp: «11,7 ppm» (quên hệ số tỉ lượng 6 giữa Fe<sup>2+</sup> và Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>, coi tỉ lệ phản ứng 1 : 1); «3,52 ppm» (quên quy đổi thể tích mẫu về 1 lít, báo luôn khối lượng Fe trong 50,00 mL); «201 ppm» (dùng nhầm M(Fe<sub>2</sub>O<sub>3</sub>) = 159,7 nhân trực tiếp với số mol Fe đã tính đúng, quên rằng số mol đó cần chia 2 mới ra số mol Fe<sub>2</sub>O<sub>3</sub>)."
});

NGAN_HANG.push({
  id: "OK-B018", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 3,
  de: "Xác định Ca<sup>2+</sup> gián tiếp: kết tủa hoàn toàn 0,5000 g mẫu dưới dạng CaC<sub>2</sub>O<sub>4</sub>, lọc rửa, hòa tan kết tủa bằng H<sub>2</sub>SO<sub>4</sub> nóng thu được H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>, chuẩn độ dung dịch này bằng KMnO<sub>4</sub> 0,02000 M hết 9,00 mL (5C<sub>2</sub>O<sub>4</sub><sup>2−</sup> : 2MnO<sub>4</sub><sup>−</sup>). Tính %Ca trong mẫu (M(Ca) = 40,08; M(CaC<sub>2</sub>O<sub>4</sub>) = 128,10).",
  phuongAn: ["3,61 %", "1,44 %", "0,577 %", "11,5 %"],
  dapAn: "A",
  loiGiai: "n(MnO<sub>4</sub><sup>−</sup>) = 0,02000·9,00 = 0,1800 mmol → n(C<sub>2</sub>O<sub>4</sub><sup>2−</sup>) = n(Ca<sup>2+</sup>) = (5/2)·0,1800 = 0,4500 mmol → khối lượng Ca = 0,4500·40,08 = 18,04 mg = 0,01804 g → % = 0,01804/0,5000·100 = <b>3,61 %</b>. Lỗi hay gặp: «1,44 %» (quên hệ số tỉ lượng 5/2, coi tỉ lệ Ca<sup>2+</sup> : MnO<sub>4</sub><sup>−</sup> là 1 : 1); «0,577 %» (đảo ngược tỉ lượng, dùng hệ số 2/5 thay vì 5/2); «11,5 %» (dùng nhầm M(CaC<sub>2</sub>O<sub>4</sub>) = 128,10 thay vì M(Ca) = 40,08, quên đổi khối lượng oxalat sang khối lượng Ca nguyên tố)."
});

NGAN_HANG.push({
  id: "OK-B019", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 4,
  de: "Cân 2,000 g sữa bột, hòa tan, định mức thành 100,0 mL (dung dịch A). Hút 25,00 mL A, kết tủa hoàn toàn Ca<sup>2+</sup> dưới dạng CaC<sub>2</sub>O<sub>4</sub>, lọc rửa, hòa tan bằng H<sub>2</sub>SO<sub>4</sub> nóng, chuẩn độ H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> giải phóng bằng KMnO<sub>4</sub> 0,01000 M hết 5,75 mL. Tính %Ca trong sữa bột (M(Ca) = 40,08; M(CaC<sub>2</sub>O<sub>4</sub>) = 128,10).",
  phuongAn: ["0,288 %", "0,461 %", "0,0720 %", "1,15 %"],
  dapAn: "D",
  loiGiai: "n(MnO<sub>4</sub><sup>−</sup>) = 0,01000·5,75 = 0,0575 mmol → n(Ca<sup>2+</sup>) trong 25,00 mL = (5/2)·0,0575 = 0,14375 mmol → trong cả 100,0 mL: 0,14375·4 = 0,5750 mmol → khối lượng Ca = 0,5750·40,08 = 23,05 mg = 0,02305 g → % = 0,02305/2,000·100 = <b>1,15 %</b>. Lỗi hay gặp: «0,288 %» (quên hệ số pha loãng 100,0/25,00 = 4, dùng thẳng lượng Ca<sup>2+</sup> trong 25,00 mL); «0,461 %» (quên hệ số tỉ lượng 5/2, coi tỉ lệ Ca<sup>2+</sup> : MnO<sub>4</sub><sup>−</sup> là 1 : 1); «0,0720 %» (đảo ngược hệ số pha loãng, nhân với 25,00/100,0 thay vì 100,0/25,00)."
});

NGAN_HANG.push({
  id: "OK-B020", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 4,
  de: "Xác định Cr(VI) trong nước thải: lấy 50,00 mL mẫu (đã acid hóa), thêm chính xác 25,00 mL Fe<sup>2+</sup> 0,02000 M (dư), để phản ứng hoàn toàn, chuẩn độ lượng Fe<sup>2+</sup> dư bằng KMnO<sub>4</sub> 0,004000 M hết 11,30 mL. Tính hàm lượng Cr trong mẫu theo mg/L (M(Cr) = 52,00; Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 6Fe<sup>2+</sup> + 14H<sup>+</sup> → 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup> + 7H<sub>2</sub>O).",
  phuongAn: ["173 mg/L", "47,5 mg/L", "4,75 mg/L", "95,0 mg/L"],
  dapAn: "D",
  loiGiai: "n(Fe<sup>2+</sup> ban đầu) = 0,02000·25,00 = 0,5000 mmol; n(Fe<sup>2+</sup> dư) = 5·n(MnO<sub>4</sub><sup>−</sup>) = 5·0,004000·11,30 = 0,2260 mmol → n(Fe<sup>2+</sup> đã phản ứng với Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>) = 0,5000 − 0,2260 = 0,2740 mmol → n(Cr) = 2·n(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>) = 2·(0,2740/6) = 0,09133 mmol → khối lượng Cr = 0,09133·52,00 = 4,749 mg trong 50,00 mL → quy về 1 L: 4,749·1000/50,00 = <b>95,0 mg/L</b>. Lỗi hay gặp: «173 mg/L» (quên trừ lượng Fe<sup>2+</sup> dư đã chuẩn độ, dùng thẳng toàn bộ 0,5000 mmol Fe<sup>2+</sup> ban đầu làm lượng đã phản ứng với Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>); «47,5 mg/L» (quên hệ số 2 khi đổi từ số mol Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> sang số mol Cr, coi n(Cr) = n(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>)); «4,75 mg/L» (quên quy đổi thể tích mẫu về 1 lít, báo luôn khối lượng Cr trong 50,00 mL)."
});

NGAN_HANG.push({
  id: "OK-B021", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 4,
  de: "Xác định độ cồn: hút 2,00 mL rượu, định mức thành 250,0 mL (dung dịch A). Hút 10,00 mL A, thêm 20,00 mL K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,03000 M (dư), đun sôi cho phản ứng hoàn toàn (2Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 3C<sub>2</sub>H<sub>5</sub>OH + 16H<sup>+</sup> → 4Cr<sup>3+</sup> + 3CH<sub>3</sub>COOH + 11H<sub>2</sub>O), chuẩn độ lượng Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> dư bằng Fe<sup>2+</sup> 0,1000 M hết 13,70 mL. Tính độ rượu (%V/V), biết d(C<sub>2</sub>H<sub>5</sub>OH) = 0,789 g/mL, M = 46,07.",
  phuongAn: ["1,63 %", "65,7 %", "40,7 %", "27,1 %"],
  dapAn: "C",
  loiGiai: "n(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> ban đầu, trong 10,00 mL A) = 0,03000·20,00 = 0,6000 mmol; n(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> dư) = n(Fe<sup>2+</sup>)/6 = 0,1000·13,70/6 = 0,2283 mmol → n(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> đã phản ứng) = 0,6000 − 0,2283 = 0,3717 mmol → n(C<sub>2</sub>H<sub>5</sub>OH) trong 10,00 mL A = (3/2)·0,3717 = 0,5575 mmol → trong cả 250,0 mL: 0,5575·25 = 13,94 mmol → khối lượng = 13,94·46,07/1000 = 0,6423 g → thể tích = 0,6423/0,789 = 0,8141 mL → %V/V = 0,8141/2,00·100 = <b>40,7 %</b>. Lỗi hay gặp: «1,63 %» (quên hệ số pha loãng 250,0/10,00 = 25, dùng thẳng lượng ethanol trong 10,00 mL); «65,7 %» (quên trừ lượng Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> đã chuẩn độ ngược bằng Fe<sup>2+</sup>, dùng thẳng toàn bộ 0,6000 mmol Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> ban đầu làm lượng đã phản ứng); «27,1 %» (quên hệ số tỉ lượng 3/2 giữa ethanol và Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>, coi tỉ lệ phản ứng 1 : 1)."
});

NGAN_HANG.push({
  id: "OK-B022", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 3,
  de: "Cân 0,5000 g hợp kim đồng, hòa tan hoàn toàn (Cu → Cu<sup>2+</sup>), định mức thành 100,0 mL (dung dịch A). Hút 20,00 mL A, thêm KI dư (2Cu<sup>2+</sup> + 4I<sup>−</sup> → 2CuI(r) + I<sub>2</sub>), chuẩn độ I<sub>2</sub> giải phóng bằng Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> 0,02000 M hết 42,50 mL. Tính %Cu trong hợp kim (M(Cu) = 63,55; M(CuO) = 79,55).",
  phuongAn: ["54,0 %", "10,8 %", "27,0 %", "67,6 %"],
  dapAn: "A",
  loiGiai: "Vì 2Cu<sup>2+</sup> tạo 1 I<sub>2</sub> cần 2 S<sub>2</sub>O<sub>3</sub><sup>2−</sup> để chuẩn độ nên n(Cu<sup>2+</sup>) = n(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) (tỉ lệ 1 : 1). n(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) trong 20,00 mL = 0,02000·42,50 = 0,8500 mmol → n(Cu<sup>2+</sup>) trong cả 100,0 mL: 0,8500·5 = 4,250 mmol → khối lượng Cu = 4,250·63,55 = 270,1 mg = 0,2701 g → % = 0,2701/0,5000·100 = <b>54,0 %</b>. Lỗi hay gặp: «10,8 %» (quên hệ số pha loãng 100,0/20,00 = 5, dùng thẳng lượng Cu<sup>2+</sup> trong 20,00 mL); «27,0 %» (nhầm tưởng n(Cu<sup>2+</sup>) = (1/2)·n(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>), không nhận ra tỉ lệ thật là 1 : 1); «67,6 %» (dùng nhầm M(CuO) = 79,55 thay vì M(Cu) = 63,55)."
});

NGAN_HANG.push({
  id: "OK-B023", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 2,
  de: "Chuẩn hóa Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>: cân 0,3000 g KIO<sub>3</sub> chuẩn gốc (M = 214,00; M(KI) = 166,00), hòa tan, định mức thành 250,0 mL. Hút 25,00 mL, thêm KI dư và H<sub>2</sub>SO<sub>4</sub> (IO<sub>3</sub><sup>−</sup> + 5I<sup>−</sup> + 6H<sup>+</sup> → 3I<sub>2</sub> + 3H<sub>2</sub>O), chuẩn độ I<sub>2</sub> giải phóng bằng Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> cần chuẩn hóa hết 16,00 mL (1 IO<sub>3</sub><sup>−</sup> ↔ 6 S<sub>2</sub>O<sub>3</sub><sup>2−</sup>). Tính C<sub>M</sub>(Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>).",
  phuongAn: ["0,526 M", "8,76·10<sup>−3</sup> M", "0,0678 M", "0,0526 M"],
  dapAn: "D",
  loiGiai: "n(IO<sub>3</sub><sup>−</sup>) tổng = 0,3000/214,00·1000 = 1,402 mmol → trong 25,00 mL (1/10 tổng): 0,1402 mmol → n(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) = 6·0,1402 = 0,8411 mmol → C = 0,8411/16,00 = <b>0,0526 M</b>. Lỗi hay gặp: «0,526 M» (quên hệ số pha loãng 1/10 khi lấy 25,00 mL từ 250,0 mL, dùng thẳng n(IO<sub>3</sub><sup>−</sup>) tổng); «8,76·10<sup>−3</sup> M» (quên hệ số tỉ lượng 6 giữa IO<sub>3</sub><sup>−</sup> và S<sub>2</sub>O<sub>3</sub><sup>2−</sup>, coi tỉ lệ 1 : 1); «0,0678 M» (dùng nhầm M(KI) = 166,00 thay vì M(KIO<sub>3</sub>) = 214,00)."
});

NGAN_HANG.push({
  id: "OK-B024", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 3,
  de: "Xác định iod trong muối iod hóa: cân 10,00 g muối, hòa tan, acid hóa, thêm KI dư (IO<sub>3</sub><sup>−</sup> + 5I<sup>−</sup> + 6H<sup>+</sup> → 3I<sub>2</sub> + 3H<sub>2</sub>O), chuẩn độ I<sub>2</sub> giải phóng bằng Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> 0,001000 M hết 19,00 mL. Tính hàm lượng I trong muối theo ppm (M(I) = 126,90; M(I<sub>2</sub>) = 253,80).",
  phuongAn: ["241 ppm", "40,2 ppm", "0,402 ppm", "80,4 ppm"],
  dapAn: "B",
  loiGiai: "n(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) = 0,001000·19,00 = 0,0190 mmol → n(IO<sub>3</sub><sup>−</sup>) = 0,0190/6 = 3,167·10<sup>−3</sup> mmol → khối lượng I = 3,167·10<sup>−3</sup>·126,90 = 0,4019 mg trong 10,00 g → ppm = 0,4019·1000/10,00 = <b>40,2 ppm</b>. Lỗi hay gặp: «241 ppm» (quên hệ số tỉ lượng 6 giữa IO<sub>3</sub><sup>−</sup> và S<sub>2</sub>O<sub>3</sub><sup>2−</sup>, coi tỉ lệ 1 : 1); «0,402 ppm» (quên đổi đơn vị mg/kg, thiếu hệ số 1000/m(g) khi quy đổi ppm); «80,4 ppm» (dùng nhầm M(I<sub>2</sub>) = 253,80 thay vì M(I) = 126,90, quên rằng mỗi IO<sub>3</sub><sup>−</sup> chỉ chứa 1 nguyên tử I chứ không phải phân tử I<sub>2</sub>)."
});

NGAN_HANG.push({
  id: "OK-B025", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 2,
  de: "Chuẩn độ trực tiếp 10,00 mL dung dịch H<sub>2</sub>O<sub>2</sub> bằng KMnO<sub>4</sub> 0,1000 M ([H<sup>+</sup>] dư, 2MnO<sub>4</sub><sup>−</sup> + 5H<sub>2</sub>O<sub>2</sub> + 6H<sup>+</sup> → 2Mn<sup>2+</sup> + 5O<sub>2</sub> + 8H<sub>2</sub>O) hết 26,10 mL. Tính %H<sub>2</sub>O<sub>2</sub> (khối lượng/thể tích, d ≈ 1,00 g/mL, M(H<sub>2</sub>O<sub>2</sub>) = 34,01; M(O<sub>2</sub>) = 32,00).",
  phuongAn: ["0,888 %", "2,22 %", "0,355 %", "2,09 %"],
  dapAn: "B",
  loiGiai: "n(MnO<sub>4</sub><sup>−</sup>) = 0,1000·26,10 = 2,610 mmol → n(H<sub>2</sub>O<sub>2</sub>) = (5/2)·2,610 = 6,525 mmol → khối lượng = 6,525·34,01/1000 = 0,2219 g trong 10,00 mL → %m/V = 0,2219/10,00·100 = <b>2,22 %</b>. Lỗi hay gặp: «0,888 %» (quên hệ số tỉ lượng 5/2, coi tỉ lệ H<sub>2</sub>O<sub>2</sub> : MnO<sub>4</sub><sup>−</sup> là 1 : 1); «0,355 %» (đảo ngược hệ số tỉ lượng, dùng 2/5 thay vì 5/2); «2,09 %» (dùng nhầm M(O<sub>2</sub>) = 32,00 — chất khí sinh ra trong phản ứng — thay vì M(H<sub>2</sub>O<sub>2</sub>) = 34,01 của chất cần định lượng)."
});

NGAN_HANG.push({
  id: "OK-B026", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 3,
  de: "Hút 10,00 mL nước oxy già, chuẩn độ trực tiếp bằng KMnO<sub>4</sub> 0,08000 M (2MnO<sub>4</sub><sup>−</sup> + 5H<sub>2</sub>O<sub>2</sub> + 6H<sup>+</sup> → 2Mn<sup>2+</sup> + 5O<sub>2</sub> + 8H<sub>2</sub>O) hết 24,55 mL. Tính \"thể tích oxy\" của mẫu, tức số mL O<sub>2</sub> (đktc) do 1 mL dung dịch giải phóng khi phân hủy hoàn toàn (2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>).",
  phuongAn: ["5,50", "2,20", "11,0", "0,880"],
  dapAn: "A",
  loiGiai: "n(MnO<sub>4</sub><sup>−</sup>) = 0,08000·24,55 = 1,964 mmol → n(H<sub>2</sub>O<sub>2</sub>) = (5/2)·1,964 = 4,910 mmol trong 10,00 mL → C(H<sub>2</sub>O<sub>2</sub>) = 0,4910 mol/L. n(O<sub>2</sub>) = n(H<sub>2</sub>O<sub>2</sub>)/2 nên mỗi lít dung dịch giải phóng 0,4910/2·22400 = 5500 mL O<sub>2</sub>, tức mỗi mL dung dịch giải phóng <b>5,50</b> mL O<sub>2</sub>. Lỗi hay gặp: «2,20» (quên hệ số tỉ lượng 5/2 giữa H<sub>2</sub>O<sub>2</sub> và MnO<sub>4</sub><sup>−</sup>, coi tỉ lệ 1 : 1); «11,0» (quên chia 2 trong phản ứng phân hủy 2H<sub>2</sub>O<sub>2</sub> → O<sub>2</sub>, coi n(O<sub>2</sub>) = n(H<sub>2</sub>O<sub>2</sub>)); «0,880» (đảo ngược hệ số tỉ lượng, dùng 2/5 thay vì 5/2 khi tính n(H<sub>2</sub>O<sub>2</sub>))."
});

NGAN_HANG.push({
  id: "OK-B027", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 3,
  de: "Nghiền 10 viên vitamin C, hòa tan hoàn toàn, định mức thành 500,0 mL (dung dịch A). Hút 25,00 mL A, thêm hồ tinh bột, chuẩn độ trực tiếp bằng I<sub>2</sub> 0,05000 M (C<sub>6</sub>H<sub>8</sub>O<sub>6</sub> + I<sub>2</sub> → C<sub>6</sub>H<sub>6</sub>O<sub>6</sub> + 2HI) đến khi xuất hiện màu xanh bền, hết 25,20 mL. Tính khối lượng vitamin C (mg) trong mỗi viên (M = 176,12).",
  phuongAn: ["22,2 mg/viên", "222 mg/viên", "439 mg/viên", "444 mg/viên"],
  dapAn: "D",
  loiGiai: "n(I<sub>2</sub>) = n(vitamin C) (tỉ lệ 1 : 1) trong 25,00 mL = 0,05000·25,20 = 1,260 mmol → trong cả 500,0 mL: 1,260·20 = 25,20 mmol → khối lượng = 25,20·176,12 = 4438 mg, chia 10 viên: <b>444 mg/viên</b>. Lỗi hay gặp: «22,2 mg/viên» (quên hệ số pha loãng 500,0/25,00 = 20, dùng thẳng lượng vitamin C trong 25,00 mL rồi mới chia 10 viên); «222 mg/viên» (nhầm hệ số cân bằng, coi 1 vitamin C phản ứng với 2 I<sub>2</sub> do nhầm hệ số \"2\" trước HI trong phương trình, dùng n(vitamin C) = (1/2)n(I<sub>2</sub>) thay vì đúng tỉ lệ 1 : 1); «439 mg/viên» (dùng nhầm M = 174,11 của dạng oxi hóa acid dehydroascorbic — sản phẩm C<sub>6</sub>H<sub>6</sub>O<sub>6</sub> trong phương trình — thay vì M = 176,12 của acid ascorbic đã cho)."
});

NGAN_HANG.push({
  id: "OK-B028", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 1,
  de: "Vì sao xác định độ cồn bằng K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> phải dùng kĩ thuật chuẩn độ ngược (thêm dư K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, chuẩn lại bằng Fe<sup>2+</sup>) mà không chuẩn độ trực tiếp ethanol bằng K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>?",
  phuongAn: [
    "Vì ethanol hoàn toàn không phản ứng được với Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> ở bất kì điều kiện nào",
    "Vì ethanol phản ứng chậm với Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>, cần đun nóng, không phù hợp chuẩn độ trực tiếp",
    "Vì không tồn tại bất kì chỉ thị nào cho phản ứng này dù chuẩn độ theo kiểu nào",
    "Vì tỉ lệ phản ứng giữa ethanol và Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> không cố định, thay đổi theo nồng độ mẫu"
  ],
  dapAn: "B",
  loiGiai: "Phản ứng oxi hóa ethanol thành acid acetic bằng Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> cần đun nóng và thời gian mới đạt cân bằng gần hoàn toàn, không thể nhỏ giọt chuẩn độ trực tiếp rồi dừng đúng lúc bằng mắt (đòi hỏi phản ứng nhanh, tức thời) — nên phải thêm dư, đun sôi, rồi chuẩn lại lượng dư bằng Fe<sup>2+</sup>. Lỗi hay gặp: «ethanol hoàn toàn không phản ứng được...» sai vì phản ứng vẫn xảy ra hoàn toàn khi có đủ thời gian và nhiệt; «không tồn tại chỉ thị nào...» quá tuyệt đối, thực tế vẫn dùng được chỉ thị (như diphenylamin sulfonic hoặc ferroin) khi chuẩn độ ngược bằng Fe<sup>2+</sup>; «tỉ lệ phản ứng không cố định...» sai vì tỉ lệ 3 ethanol : 2 Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> là cố định theo phương trình cân bằng electron."
});

NGAN_HANG.push({
  id: "OK-B029", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 2,
  de: "Vì sao xác định Ca<sup>2+</sup> bằng phương pháp permanganat phải qua bước kết tủa CaC<sub>2</sub>O<sub>4</sub> rồi hòa tan lại (phương pháp gián tiếp) mà không chuẩn độ Ca<sup>2+</sup> trực tiếp bằng KMnO<sub>4</sub>?",
  phuongAn: [
    "Vì Ca<sup>2+</sup> phản ứng quá chậm với KMnO<sub>4</sub> nên phải kết tủa trước",
    "Vì bước kết tủa CaC<sub>2</sub>O<sub>4</sub> chỉ để làm sạch mẫu khỏi tạp chất, không liên quan đến bản chất oxi hóa – khử",
    "Vì Ca<sup>2+</sup> không có tính oxi hóa – khử, phải chuyển thành oxalat rồi chuẩn độ gián tiếp",
    "Vì KMnO<sub>4</sub> không bền, dễ bị phân hủy khi có mặt Ca<sup>2+</sup> trong dung dịch"
  ],
  dapAn: "C",
  loiGiai: "Ca<sup>2+</sup> là ion kim loại kiềm thổ, không có số oxi hóa nào khác ổn định để tham gia phản ứng oxi hóa – khử với KMnO<sub>4</sub> (không có bán phản ứng phù hợp); phải kết tủa Ca<sup>2+</sup> thành CaC<sub>2</sub>O<sub>4</sub>, hòa tan lại thành H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> (có tính khử, phản ứng được với KMnO<sub>4</sub>) rồi suy ngược ra lượng Ca<sup>2+</sup> ban đầu. Lỗi hay gặp: «Ca<sup>2+</sup> phản ứng quá chậm...» sai vì Ca<sup>2+</sup> không phản ứng được chứ không phải chỉ chậm; «chỉ để làm sạch mẫu...» bỏ qua đúng lý do chính (bản chất Ca<sup>2+</sup> không có tính oxi hóa – khử); «KMnO<sub>4</sub> không bền khi có Ca<sup>2+</sup>...» không đúng, không liên quan đến lý do thật của quy trình."
});

NGAN_HANG.push({
  id: "OK-B030", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 2,
  de: "Khi chuẩn độ Fe<sup>2+</sup> bằng K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> với chỉ thị acid diphenylamin sulfonic, người ta thường thêm H<sub>3</sub>PO<sub>4</sub> trước khi chuẩn độ. Vai trò chính của H<sub>3</sub>PO<sub>4</sub> là gì?",
  phuongAn: [
    "Tạo phức không màu với Fe<sup>3+</sup>, hạ E°'(Fe<sup>3+</sup>/Fe<sup>2+</sup>) cho phù hợp bước nhảy thế",
    "Đóng vai trò chất chỉ thị chính, thay thế hoàn toàn acid diphenylamin sulfonic",
    "Làm tăng E°'(Fe<sup>3+</sup>/Fe<sup>2+</sup>) để phản ứng với Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> xảy ra nhanh hơn",
    "Phản ứng trực tiếp với Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> để tạo môi trường acid cần thiết cho chuẩn độ"
  ],
  dapAn: "A",
  loiGiai: "H<sub>3</sub>PO<sub>4</sub> tạo phức không màu, bền với Fe<sup>3+</sup>, làm giảm E°'(Fe<sup>3+</sup>/Fe<sup>2+</sup>) — bước nhảy thế nhờ đó trùng khớp với khoảng đổi màu của chỉ thị, đồng thời mất màu vàng của Fe<sup>3+</sup> vốn gây khó quan sát điểm chuyển màu. Lỗi hay gặp: «là chỉ thị chính...» sai vì H<sub>3</sub>PO<sub>4</sub> không đổi màu theo thế, chỉ có vai trò tạo phức; «làm tăng E°'...» sai chiều, thực tế H<sub>3</sub>PO<sub>4</sub> hạ E°' chứ không làm tăng; «phản ứng trực tiếp với Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>...» sai bản chất vai trò của H<sub>3</sub>PO<sub>4</sub> trong quy trình này."
});

// ================= Câu chùm OK-C01 · Fe viên thuốc qua Cr2O7 (5 câu, dạng D06/D04) =================
// (dan nhúng thẳng vào từng câu — không khai báo biến toàn cục)

NGAN_HANG.push({
  id: "OK-B031", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 2,
  de: "Tính nồng độ Fe<sup>2+</sup> trong dung dịch A.",
  phuongAn: ["6,40·10<sup>−3</sup> M", "0,0384 M", "0,0192 M", "0,960 M"],
  dapAn: "B",
  loiGiai: "n(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>) = 0,01000·16,00 = 0,1600 mmol → n(Fe<sup>2+</sup>) = 6·0,1600 = 0,9600 mmol trong 25,00 mL → [Fe<sup>2+</sup>] = 0,9600/25,00 = <b>0,0384 M</b>. Lỗi hay gặp: «6,40·10<sup>−3</sup> M» (quên hệ số tỉ lượng 6 giữa Fe<sup>2+</sup> và Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>, coi tỉ lệ 1 : 1); «0,0192 M» (nhầm hệ số tỉ lượng là 3 thay vì 6, có thể do nhầm với số electron của một Cr trong Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>); «0,960 M» (quên chia cho thể tích mẫu 25,00 mL, báo luôn số mmol Fe<sup>2+</sup> là nồng độ mol/L).",
  chum: "OK-C01", dan: "Cân 20 viên thuốc chứa FeSO<sub>4</sub>, nghiền mịn, hòa tan hoàn toàn trong H<sub>2</sub>SO<sub>4</sub> loãng, định mức thành 500,0 mL dung dịch (dung dịch A). Hút 25,00 mL dung dịch A, thêm hỗn hợp H<sub>2</sub>SO<sub>4</sub> – H<sub>3</sub>PO<sub>4</sub> và vài giọt chỉ thị acid diphenylamin sulfonic, chuẩn độ bằng dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,01000 M đến khi xuất hiện màu tím (xanh tím) bền, hết 16,00 mL."
});

NGAN_HANG.push({
  id: "OK-B032", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 3,
  de: "Từ nồng độ Fe<sup>2+</sup> vừa tính (0,0384 M), tính khối lượng Fe (mg) trong mỗi viên (M(Fe) = 55,85).",
  phuongAn: ["2,68 mg/viên", "1070 mg/viên", "56,3 mg/viên", "53,6 mg/viên"],
  dapAn: "D",
  loiGiai: "n(Fe<sup>2+</sup>) trong 25,00 mL = 0,0384·25,00 = 0,9600 mmol → trong cả 500,0 mL: 0,9600·20 = 19,20 mmol → khối lượng Fe = 19,20·55,85 = 1072 mg, chia 20 viên: <b>53,6 mg/viên</b>. Lỗi hay gặp: «2,68 mg/viên» (quên hệ số pha loãng 500,0/25,00 = 20, dùng thẳng lượng Fe<sup>2+</sup> trong 25,00 mL rồi mới chia 20 viên); «1070 mg/viên» (tính đúng tổng khối lượng Fe trong cả lọ nhưng quên chia cho 20 viên); «56,3 mg/viên» (cộng nhầm thể tích hút 25,00 mL vào thể tích bình định mức khi tính hệ số pha loãng, dùng (500,0+25,00)/25,00 = 21 thay vì 500,0/25,00 = 20).",
  chum: "OK-C01", dan: "Cân 20 viên thuốc chứa FeSO<sub>4</sub>, nghiền mịn, hòa tan hoàn toàn trong H<sub>2</sub>SO<sub>4</sub> loãng, định mức thành 500,0 mL dung dịch (dung dịch A). Hút 25,00 mL dung dịch A, thêm hỗn hợp H<sub>2</sub>SO<sub>4</sub> – H<sub>3</sub>PO<sub>4</sub> và vài giọt chỉ thị acid diphenylamin sulfonic, chuẩn độ bằng dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,01000 M đến khi xuất hiện màu tím (xanh tím) bền, hết 16,00 mL."
});

NGAN_HANG.push({
  id: "OK-B033", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 4,
  de: "Từ khối lượng Fe/viên vừa tính (53,6 mg/viên), tính khối lượng FeSO<sub>4</sub> tương đương trong mỗi viên (M(FeSO<sub>4</sub>) = 151,91; M(FeSO<sub>4</sub>·7H<sub>2</sub>O) = 278,02; M(Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>) = 399,88; M(Fe) = 55,85).",
  phuongAn: ["267 mg/viên", "53,6 mg/viên", "146 mg/viên", "192 mg/viên"],
  dapAn: "C",
  loiGiai: "Khối lượng FeSO<sub>4</sub> = khối lượng Fe·(M(FeSO<sub>4</sub>)/M(Fe)) = 53,6·(151,91/55,85) = <b>146 mg/viên</b>. Lỗi hay gặp: «267 mg/viên» (dùng nhầm M(FeSO<sub>4</sub>·7H<sub>2</sub>O) = 278,02 thay vì M(FeSO<sub>4</sub>) = 151,91); «53,6 mg/viên» (quên nhân hệ số quy đổi M(FeSO<sub>4</sub>)/M(Fe), báo luôn khối lượng Fe là khối lượng FeSO<sub>4</sub>); «192 mg/viên» (nhầm hợp chất: quy đổi khối lượng Fe sang Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> — muối sắt(III) sulfat, 2 nguyên tử Fe mỗi phân tử — thay vì FeSO<sub>4</sub> muối sắt(II) sulfat mà đề yêu cầu).",
  chum: "OK-C01", dan: "Cân 20 viên thuốc chứa FeSO<sub>4</sub>, nghiền mịn, hòa tan hoàn toàn trong H<sub>2</sub>SO<sub>4</sub> loãng, định mức thành 500,0 mL dung dịch (dung dịch A). Hút 25,00 mL dung dịch A, thêm hỗn hợp H<sub>2</sub>SO<sub>4</sub> – H<sub>3</sub>PO<sub>4</sub> và vài giọt chỉ thị acid diphenylamin sulfonic, chuẩn độ bằng dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,01000 M đến khi xuất hiện màu tím (xanh tím) bền, hết 16,00 mL."
});

NGAN_HANG.push({
  id: "OK-B034", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 3,
  de: "Tính thế E tại điểm tương đương của phép chuẩn độ trên (E°(Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/Cr<sup>3+</sup>) = 1,33 V; E°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = 0,77 V; [H<sup>+</sup>] = 1 M).",
  phuongAn: ["1,25 V", "1,46 V", "1,69 V", "1,14 V"],
  dapAn: "A",
  loiGiai: "E<sub>tđ</sub> = (n<sub>1</sub>E°<sub>1</sub> + n<sub>2</sub>E°<sub>2</sub>)/(n<sub>1</sub>+n<sub>2</sub>) = (6·1,33 + 1·0,77)/7 = 8,75/7 ≈ <b>1,25 V</b> (giá trị gần đúng vì E° = 1,33 V bản thân là hằng số quy ước, làm tròn). Lỗi hay gặp: «1,46 V» (quên cộng thêm hệ số electron n<sub>2</sub> = 1 của Fe<sup>3+</sup>/Fe<sup>2+</sup> vào mẫu số, dùng (6·1,33+0,77)/6 thay vì /7); «1,69 V» (nhầm lẫn với mô hình quen thuộc MnO<sub>4</sub><sup>−</sup>/Fe<sup>2+</sup> có n<sub>Fe</sub> = 5, dùng (6·1,33+5·0,77)/7 thay vì (6·1,33+1·0,77)/7); «1,14 V» (quên cộng đóng góp của cặp Fe<sup>3+</sup>/Fe<sup>2+</sup> vào tử số, chỉ tính (6·1,33)/7).",
  chum: "OK-C01", dan: "Cân 20 viên thuốc chứa FeSO<sub>4</sub>, nghiền mịn, hòa tan hoàn toàn trong H<sub>2</sub>SO<sub>4</sub> loãng, định mức thành 500,0 mL dung dịch (dung dịch A). Hút 25,00 mL dung dịch A, thêm hỗn hợp H<sub>2</sub>SO<sub>4</sub> – H<sub>3</sub>PO<sub>4</sub> và vài giọt chỉ thị acid diphenylamin sulfonic, chuẩn độ bằng dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,01000 M đến khi xuất hiện màu tím (xanh tím) bền, hết 16,00 mL."
});

NGAN_HANG.push({
  id: "OK-B035", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 2,
  de: "Tại điểm cuối phép chuẩn độ trên, dung dịch chuyển màu như thế nào, và H<sub>3</sub>PO<sub>4</sub> thêm vào có vai trò gì?",
  phuongAn: [
    "Chuyển từ vàng (Fe<sup>3+</sup>) sang xanh lam bền (kiểu kết thúc bằng chỉ thị ET-OO); H<sub>3</sub>PO<sub>4</sub> chỉ có vai trò điều chỉnh pH lên khoảng 10",
    "Chuyển từ không màu sang tím bền do bị oxi hóa; H<sub>3</sub>PO<sub>4</sub> hạ E°'(Fe<sup>3+</sup>/Fe<sup>2+</sup>) cho phù hợp bước nhảy",
    "Chuyển từ đỏ nâu sang vàng nhạt (kiểu kết thúc Volhard); H<sub>3</sub>PO<sub>4</sub> kết tủa Fe<sup>3+</sup> dưới dạng FePO<sub>4</sub>",
    "Không đổi màu rõ rệt vì chỉ thị đã bị khóa bởi Cr<sup>3+</sup>; H<sub>3</sub>PO<sub>4</sub> không có vai trò gì trong phép chuẩn độ này"
  ],
  dapAn: "B",
  loiGiai: "Acid diphenylamin sulfonic không màu (dạng khử) chuyển sang tím (xanh tím) khi bị Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> dư oxi hóa tại điểm cuối; H<sub>3</sub>PO<sub>4</sub> tạo phức không màu, bền với Fe<sup>3+</sup>, hạ E°'(Fe<sup>3+</sup>/Fe<sup>2+</sup>) để bước nhảy thế trùng với khoảng đổi màu chỉ thị và loại màu vàng Fe<sup>3+</sup> gây khó quan sát. Lỗi hay gặp: «chuyển từ vàng sang xanh lam..., H<sub>3</sub>PO<sub>4</sub> chỉ chỉnh pH...» nhầm với chỉ thị ET-OO của EDTA, không phải chỉ thị oxi hóa – khử trong bài này; «chuyển từ đỏ nâu sang vàng nhạt..., H<sub>3</sub>PO<sub>4</sub> kết tủa FePO<sub>4</sub>...» nhầm với kiểu kết thúc Volhard của chuẩn độ kết tủa; «không đổi màu..., H<sub>3</sub>PO<sub>4</sub> không có vai trò...» sai vì thực tế điểm cuối đổi màu rất rõ và H<sub>3</sub>PO<sub>4</sub> có vai trò quan trọng đã nêu.",
  chum: "OK-C01", dan: "Cân 20 viên thuốc chứa FeSO<sub>4</sub>, nghiền mịn, hòa tan hoàn toàn trong H<sub>2</sub>SO<sub>4</sub> loãng, định mức thành 500,0 mL dung dịch (dung dịch A). Hút 25,00 mL dung dịch A, thêm hỗn hợp H<sub>2</sub>SO<sub>4</sub> – H<sub>3</sub>PO<sub>4</sub> và vài giọt chỉ thị acid diphenylamin sulfonic, chuẩn độ bằng dung dịch K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 0,01000 M đến khi xuất hiện màu tím (xanh tím) bền, hết 16,00 mL."
});

// ================= Câu chùm OK-C02 · Ca gián tiếp qua chuẩn hóa KMnO4 (5 câu, dạng D06/D04) =================
// (dan nhúng thẳng vào từng câu — không khai báo biến toàn cục)

NGAN_HANG.push({
  id: "OK-B036", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 2,
  de: "Tính nồng độ C<sub>M</sub> của dung dịch KMnO<sub>4</sub> sau khi chuẩn hóa (5Fe<sup>2+</sup> + MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> → 5Fe<sup>3+</sup> + Mn<sup>2+</sup> + 4H<sub>2</sub>O).",
  phuongAn: ["0,2000 M", "0,01000 M", "0,0141 M", "0,05000 M"],
  dapAn: "B",
  loiGiai: "n(Fe<sup>2+</sup>) = 0,3921/392,14·1000 = 1,000 mmol → n(MnO<sub>4</sub><sup>−</sup>) = 1,000/5 = 0,2000 mmol → C = 0,2000/20,00 = <b>0,01000 M</b>. Lỗi hay gặp: «0,2000 M» (quên chia cho thể tích 20,00 mL, báo luôn số mmol MnO<sub>4</sub><sup>−</sup> là nồng độ); «0,0141 M» (dùng nhầm khối lượng mol của FeSO<sub>4</sub>·7H<sub>2</sub>O, M = 278,02, dễ nhầm với muối Mohr, thay vì M = 392,14 khi tính n(Fe<sup>2+</sup>)); «0,05000 M» (quên hệ số tỉ lượng 5 giữa Fe<sup>2+</sup> và MnO<sub>4</sub><sup>−</sup>, coi tỉ lệ 1 : 1).",
  chum: "OK-C02", dan: "Chuẩn hóa dung dịch KMnO<sub>4</sub> (chưa biết chính xác nồng độ): cân 0,3921 g Fe(NH<sub>4</sub>)<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub>·6H<sub>2</sub>O (muối Mohr, M = 392,14; dễ nhầm với FeSO<sub>4</sub>·7H<sub>2</sub>O, M = 278,02), hòa tan trong H<sub>2</sub>SO<sub>4</sub> loãng, chuẩn độ bằng dung dịch KMnO<sub>4</sub> trên đến khi xuất hiện màu hồng nhạt bền, hết 20,00 mL. Dùng đúng dung dịch KMnO<sub>4</sub> vừa chuẩn hóa này để xác định Ca<sup>2+</sup> trong mẫu: cân 0,5000 g mẫu, kết tủa hoàn toàn Ca<sup>2+</sup> dưới dạng CaC<sub>2</sub>O<sub>4</sub> (M = 128,10), lọc rửa kết tủa, hòa tan bằng H<sub>2</sub>SO<sub>4</sub> nóng thu được H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>, chuẩn độ dung dịch này bằng KMnO<sub>4</sub> vừa chuẩn hóa, hết 18,40 mL."
});

NGAN_HANG.push({
  id: "OK-B037", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 3,
  de: "Dùng nồng độ KMnO<sub>4</sub> vừa tính (0,01000 M), tính số mol Ca<sup>2+</sup> (mmol) trong mẫu (tỉ lượng 5C<sub>2</sub>O<sub>4</sub><sup>2−</sup> : 2MnO<sub>4</sub><sup>−</sup>).",
  phuongAn: ["0,184 mmol", "0,0736 mmol", "0,460 mmol", "46,0 mmol"],
  dapAn: "C",
  loiGiai: "n(MnO<sub>4</sub><sup>−</sup>) = 0,01000·18,40 = 0,1840 mmol → n(C<sub>2</sub>O<sub>4</sub><sup>2−</sup>) = n(Ca<sup>2+</sup>) = (5/2)·0,1840 = <b>0,460 mmol</b>. Lỗi hay gặp: «0,184 mmol» (quên hệ số tỉ lượng 5/2, coi tỉ lệ Ca<sup>2+</sup> : MnO<sub>4</sub><sup>−</sup> là 1 : 1); «0,0736 mmol» (đảo ngược tỉ lượng, dùng hệ số 2/5 thay vì 5/2); «46,0 mmol» (quên nhân với nồng độ C = 0,01000 M, coi thể tích 18,40 mL là số mmol MnO<sub>4</sub><sup>−</sup> trực tiếp).",
  chum: "OK-C02", dan: "Chuẩn hóa dung dịch KMnO<sub>4</sub> (chưa biết chính xác nồng độ): cân 0,3921 g Fe(NH<sub>4</sub>)<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub>·6H<sub>2</sub>O (muối Mohr, M = 392,14; dễ nhầm với FeSO<sub>4</sub>·7H<sub>2</sub>O, M = 278,02), hòa tan trong H<sub>2</sub>SO<sub>4</sub> loãng, chuẩn độ bằng dung dịch KMnO<sub>4</sub> trên đến khi xuất hiện màu hồng nhạt bền, hết 20,00 mL. Dùng đúng dung dịch KMnO<sub>4</sub> vừa chuẩn hóa này để xác định Ca<sup>2+</sup> trong mẫu: cân 0,5000 g mẫu, kết tủa hoàn toàn Ca<sup>2+</sup> dưới dạng CaC<sub>2</sub>O<sub>4</sub> (M = 128,10), lọc rửa kết tủa, hòa tan bằng H<sub>2</sub>SO<sub>4</sub> nóng thu được H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>, chuẩn độ dung dịch này bằng KMnO<sub>4</sub> vừa chuẩn hóa, hết 18,40 mL."
});

NGAN_HANG.push({
  id: "OK-B038", chuong: "oxi-hoa-khu", dang: "D06 · Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", dangMoi: true, mucDo: 4,
  de: "Từ n(Ca<sup>2+</sup>) = 0,460 mmol vừa tính, tính %Ca (khối lượng) trong mẫu (M(Ca) = 40,08).",
  phuongAn: ["3,69 %", "11,8 %", "0,0369 %", "4,70 %"],
  dapAn: "A",
  loiGiai: "Khối lượng Ca = 0,460·40,08 = 18,44 mg = 0,01844 g → % = 0,01844/0,5000·100 = <b>3,69 %</b>. Lỗi hay gặp: «11,8 %» (dùng nhầm M(CaC<sub>2</sub>O<sub>4</sub>) = 128,10 thay vì M(Ca) = 40,08, quên đổi khối lượng oxalat sang khối lượng Ca nguyên tố); «0,0369 %» (quên nhân 100 khi đổi tỉ lệ khối lượng sang phần trăm); «4,70 %» (dùng nhầm khối lượng muối Mohr 0,3921 g thay vì khối lượng mẫu Ca 0,5000 g ở mẫu số).",
  chum: "OK-C02", dan: "Chuẩn hóa dung dịch KMnO<sub>4</sub> (chưa biết chính xác nồng độ): cân 0,3921 g Fe(NH<sub>4</sub>)<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub>·6H<sub>2</sub>O (muối Mohr, M = 392,14; dễ nhầm với FeSO<sub>4</sub>·7H<sub>2</sub>O, M = 278,02), hòa tan trong H<sub>2</sub>SO<sub>4</sub> loãng, chuẩn độ bằng dung dịch KMnO<sub>4</sub> trên đến khi xuất hiện màu hồng nhạt bền, hết 20,00 mL. Dùng đúng dung dịch KMnO<sub>4</sub> vừa chuẩn hóa này để xác định Ca<sup>2+</sup> trong mẫu: cân 0,5000 g mẫu, kết tủa hoàn toàn Ca<sup>2+</sup> dưới dạng CaC<sub>2</sub>O<sub>4</sub> (M = 128,10), lọc rửa kết tủa, hòa tan bằng H<sub>2</sub>SO<sub>4</sub> nóng thu được H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>, chuẩn độ dung dịch này bằng KMnO<sub>4</sub> vừa chuẩn hóa, hết 18,40 mL."
});

NGAN_HANG.push({
  id: "OK-B039", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 3,
  de: "Tính thế E tại điểm tương đương của phép chuẩn hóa KMnO<sub>4</sub> bằng Fe<sup>2+</sup> (bước 1) (E°(MnO<sub>4</sub><sup>−</sup>/Mn<sup>2+</sup>) = 1,51 V; E°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = 0,77 V; [H<sup>+</sup>] = 1 M).",
  phuongAn: ["1,66 V", "1,26 V", "1,39 V", "2,14 V"],
  dapAn: "C",
  loiGiai: "E<sub>tđ</sub> = (E°<sub>Fe</sub> + 5E°<sub>Mn</sub>)/6 = (0,77 + 5·1,51)/6 = 8,32/6 ≈ <b>1,39 V</b>. Lỗi hay gặp: «1,66 V» (quên cộng thêm hệ số electron n<sub>Fe</sub> = 1 vào mẫu số, dùng (0,77+5·1,51)/5 thay vì /6); «1,26 V» (quên cộng đóng góp của cặp Fe<sup>3+</sup>/Fe<sup>2+</sup> vào tử số, chỉ tính (5·1,51)/6); «2,14 V» (nhầm số mũ 8 của [H<sup>+</sup>] trong bán phản ứng MnO<sub>4</sub><sup>−</sup>/Mn<sup>2+</sup> làm hệ số nhân electron, dùng (0,77+8·1,51)/6 thay vì (0,77+5·1,51)/6).",
  chum: "OK-C02", dan: "Chuẩn hóa dung dịch KMnO<sub>4</sub> (chưa biết chính xác nồng độ): cân 0,3921 g Fe(NH<sub>4</sub>)<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub>·6H<sub>2</sub>O (muối Mohr, M = 392,14; dễ nhầm với FeSO<sub>4</sub>·7H<sub>2</sub>O, M = 278,02), hòa tan trong H<sub>2</sub>SO<sub>4</sub> loãng, chuẩn độ bằng dung dịch KMnO<sub>4</sub> trên đến khi xuất hiện màu hồng nhạt bền, hết 20,00 mL. Dùng đúng dung dịch KMnO<sub>4</sub> vừa chuẩn hóa này để xác định Ca<sup>2+</sup> trong mẫu: cân 0,5000 g mẫu, kết tủa hoàn toàn Ca<sup>2+</sup> dưới dạng CaC<sub>2</sub>O<sub>4</sub> (M = 128,10), lọc rửa kết tủa, hòa tan bằng H<sub>2</sub>SO<sub>4</sub> nóng thu được H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>, chuẩn độ dung dịch này bằng KMnO<sub>4</sub> vừa chuẩn hóa, hết 18,40 mL."
});

NGAN_HANG.push({
  id: "OK-B040", chuong: "oxi-hoa-khu", dang: "D04 · Đường chuẩn độ và chọn chỉ thị", dangMoi: true, mucDo: 2,
  de: "Vì sao khi chuẩn độ H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> (giải phóng từ CaC<sub>2</sub>O<sub>4</sub>) bằng KMnO<sub>4</sub> ở bước 2 không cần thêm chỉ thị riêng?",
  phuongAn: [
    "Vì H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> tự đổi màu theo pH nên đóng vai trò chỉ thị",
    "Vì phản ứng này không có điểm dừng rõ ràng nên việc thêm chỉ thị là không cần thiết",
    "Vì Ca<sup>2+</sup> tạo phức có màu với KMnO<sub>4</sub> nên tự báo điểm cuối",
    "Vì KMnO<sub>4</sub> tự làm chỉ thị: Mn<sup>2+</sup> không màu, 1 giọt dư chuyển hồng nhạt"
  ],
  dapAn: "D",
  loiGiai: "KMnO<sub>4</sub> tự làm chỉ thị (tự chỉ thị): màu tím đậm của MnO<sub>4</sub><sup>−</sup> bị mất khi bị khử thành Mn<sup>2+</sup> gần như không màu, nên giọt KMnO<sub>4</sub> dư đầu tiên làm dung dịch chuyển hồng nhạt bền — đúng như đã dùng ở bước 1 để chuẩn hóa bằng Fe<sup>2+</sup>. Lỗi hay gặp: «H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> tự đổi màu theo pH...» sai vì H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> không đổi màu; «không có điểm dừng rõ ràng...» sai, thực tế điểm cuối rất rõ nhờ tự chỉ thị; «Ca<sup>2+</sup> tạo phức có màu với KMnO<sub>4</sub>...» sai, Ca<sup>2+</sup> không tạo phức như vậy và cũng không còn mặt trong dung dịch chuẩn độ (đã lọc bỏ ở dạng kết tủa, chỉ còn H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> hòa tan lại).",
  chum: "OK-C02", dan: "Chuẩn hóa dung dịch KMnO<sub>4</sub> (chưa biết chính xác nồng độ): cân 0,3921 g Fe(NH<sub>4</sub>)<sub>2</sub>(SO<sub>4</sub>)<sub>2</sub>·6H<sub>2</sub>O (muối Mohr, M = 392,14; dễ nhầm với FeSO<sub>4</sub>·7H<sub>2</sub>O, M = 278,02), hòa tan trong H<sub>2</sub>SO<sub>4</sub> loãng, chuẩn độ bằng dung dịch KMnO<sub>4</sub> trên đến khi xuất hiện màu hồng nhạt bền, hết 20,00 mL. Dùng đúng dung dịch KMnO<sub>4</sub> vừa chuẩn hóa này để xác định Ca<sup>2+</sup> trong mẫu: cân 0,5000 g mẫu, kết tủa hoàn toàn Ca<sup>2+</sup> dưới dạng CaC<sub>2</sub>O<sub>4</sub> (M = 128,10), lọc rửa kết tủa, hòa tan bằng H<sub>2</sub>SO<sub>4</sub> nóng thu được H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>, chuẩn độ dung dịch này bằng KMnO<sub>4</sub> vừa chuẩn hóa, hết 18,40 mL."
});
