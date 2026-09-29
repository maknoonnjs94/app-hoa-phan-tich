/* Phân dạng câu hỏi theo từng chương (bản gộp đã duyệt).
   Mỗi chương: danh sách dạng mới; mỗi dạng liệt kê các mã dạng cũ (Dxx của ngân hàng) được gộp vào.
   Khi nạp, trường "dang" của câu hỏi được đổi sang "Dxx · tên dạng mới"; mã cũ giữ trong "dangCu". */
const PHAN_DANG = {
  "mo-dau": [
    ["Khái niệm: chất phân tích, mẫu, nền mẫu; định tính và định lượng", "D01 D02"],
    ["Phân loại phương pháp: hóa học và công cụ", "D03 D04 D05"],
    ["Quy trình phân tích: lấy mẫu, chuẩn bị mẫu, các giai đoạn", "D06 D07 D08"],
    ["Chỉ tiêu phương pháp và chọn phương pháp", "D09 D10 D11 D12"],
  ],
  "do-luong": [
    ["Các loại nồng độ và chuyển đổi", "D01 D02 D03 D04 D05 D06"],
    ["Pha dung dịch: từ chất rắn, pha loãng, trộn", "D07 D08 D09"],
    ["Dụng cụ đo lường", "D10 D11"],
    ["Phân tích khối lượng", "D12"],
    ["Tính toán chuẩn độ: trực tiếp, ngược, gián tiếp", "D13 D14 D15"],
    ["Chuỗi quy trình mẫu thật: định mức, hút, quy về mẫu gốc", ""],
  ],
  "thong-ke": [
    ["Chữ số có nghĩa và làm tròn", "D01 D02 D03"],
    ["Sai số: phân loại, tuyệt đối – tương đối, lan truyền", "D04 D05 D06 D07 D08"],
    ["Trung bình, độ lệch chuẩn, RSD, khoảng tin cậy", "D09 D10 D11"],
    ["Kiểm định Q, t, F", "D12 D13 D14 D15"],
  ],
  "can-bang": [
    ["Biểu thức hằng số cân bằng và biến đổi K", "D01 D02 D03 D04"],
    ["Chiều phản ứng: Q và K, nguyên lí Le Chatelier", "D05 D06"],
    ["Các hằng số: Ka – Kb, Kw theo nhiệt độ, hằng số bền β", "D07 D08 D09"],
    ["Độ tan, Ksp, ion chung, điều kiện kết tủa", "D10 D11 D12 D13 D14"],
    ["Lực ion và các phương trình bảo toàn", "D15 D16 D17"],
  ],
  "axit-bazo": [
    ["Khái niệm acid – base: mạnh/yếu, liên hợp, lưỡng tính, so sánh Ka", "D01 D02 D03 D04 D07"],
    ["pH acid, base mạnh và yếu", "D08 D09 D10 D11 D20 D21"],
    ["pH muối, chất lưỡng tính, acid – base đa chức", "D12 D13 D18 D22 D23"],
    ["pH hỗn hợp và trộn dung dịch", "D24 D25"],
    ["Dung dịch đệm: pH, thêm acid/base, chọn hệ đệm", "D05 D14 D16"],
    ["Pha dung dịch đệm", "D15"],
    ["Phân số mol α và dạng tồn tại theo pH", "D06 D17 D19"],
    ["Bài toán ngược: từ pH suy ra nồng độ, Ka, pKb", ""],
  ],
  "chuan-do-axit-bazo": [
    ["Chuẩn độ acid mạnh – base mạnh", "D01 D02 D03"],
    ["Chuẩn độ acid yếu bằng base mạnh", "D04 D05 D06 D07 D08"],
    ["Chuẩn độ base yếu bằng acid mạnh", "D09 D10"],
    ["Bước nhảy, chọn chỉ thị, sai số chỉ thị", "D11 D12 D13"],
    ["Đa acid và hỗn hợp", "D14 D15 D16"],
    ["Định lượng mẫu thật", "D17"],
    ["Kjeldahl và chuẩn độ ngược", "D18"],
    ["Câu chùm quy trình chuẩn độ", ""],
    ["Chất gốc, pha và chuẩn hóa dung dịch chuẩn (NaOH, HCl)", ""],
  ],
  "edta": [
    ["Phản ứng tạo phức EDTA, chỉ thị kim loại, chất che", "D01 D13 D14"],
    ["Hằng số bền điều kiện và điều kiện chuẩn độ", "D02 D03 D12"],
    ["Đường chuẩn độ: pM trước, tại, sau điểm tương đương", "D09 D10 D11"],
    ["Định lượng trực tiếp: độ cứng, Ca/Mg, mẫu thuốc, thực phẩm", "D04 D05 D06 D15"],
    ["Chuẩn độ ngược, gián tiếp, thay thế; chọn kĩ thuật", "D07 D08 D16"],
    ["Chuẩn độ hai nấc pH trong cùng dung dịch", ""],
    ["Chất gốc, pha và chuẩn hóa dung dịch EDTA", ""],
  ],
  "ket-tua": [
    ["Độ tan: Ksp, so sánh, ion chung", "D01 D02 D03 D04"],
    ["Độ tan có phản ứng phụ (pH, tạo phức)", "D05"],
    ["Kết tủa phân đoạn", "D06 D07"],
    ["Đường chuẩn độ kết tủa: pAg", "D08 D09 D10"],
    ["Phương pháp Mohr, Volhard, Fajans", "D12 D14 D15 D17"],
    ["Định lượng bằng chuẩn độ bạc", "D11 D13 D16"],
    ["Chất gốc, pha và chuẩn hóa dung dịch AgNO₃, NH₄SCN", ""],
  ],
  "oxi-hoa-khu": [
    ["Thế điện cực, chiều phản ứng, phương trình Nernst", "D01 D02 D03 D04 D05"],
    ["Hằng số cân bằng từ ΔE°", "D06"],
    ["Thế điều kiện E°'", "D07"],
    ["Đường chuẩn độ và chọn chỉ thị", "D08 D09 D10 D11"],
    ["Phương pháp permanganat, dicromat, iod", "D12 D13 D14 D15"],
    ["Định lượng mẫu thật: trực tiếp, ngược, gián tiếp", ""],
    ["Chất gốc, pha và chuẩn hóa KMnO₄, Na₂S₂O₃, I₂", ""],
  ],
  "hieu-chuan": [
    ["Đường chuẩn: hồi quy, R², nội suy, độ lệch chuẩn", "D01 D02 D03 D04 D05 D06"],
    ["LOD và LOQ", "D07"],
    ["Ngoại chuẩn, thêm chuẩn, nội chuẩn", "D08 D09 D10 D11"],
    ["Bảo đảm chất lượng: độ thu hồi, mẫu trắng, thẩm định", "D12 D13 D14"],
  ],
  "uv-vis": [
    ["Bức xạ điện từ: vùng phổ, năng lượng, số sóng", "D01 D02 D03"],
    ["Định luật Beer: A, T, ε", "D04 D05 D06 D07"],
    ["Hỗn hợp hai chất hấp thụ", "D08"],
    ["Sai lệch định luật Beer, thiết bị, cách đo, màu bù", "D09 D10 D11 D12"],
    ["Huỳnh quang phân tử", "D13"],
    ["Định lượng mẫu thật bằng UV-Vis", ""],
  ],
  "quang-nguyen-tu": [
    ["Nguyên tắc AAS, AES; đèn catot rỗng", "D01 D06 D07"],
    ["Nguyên tử hóa: ngọn lửa, lò graphit, ICP", "D02 D03 D04 D05 D13"],
    ["Phân bố Boltzmann và ảnh hưởng nhiệt độ", "D08 D09"],
    ["Cản trở và cách khắc phục", "D10 D11 D12"],
    ["Định lượng bằng quang phổ nguyên tử", "D14"],
  ],
  "dien-hoa": [
    ["Pin điện hóa, điện cực so sánh, điện cực chỉ thị", "D01 D02 D04 D05"],
    ["Tính thế theo phương trình Nernst", "D03 D06"],
    ["Điện cực chọn lọc ion (ISE)", "D07 D08 D09"],
    ["Điện cực thủy tinh và đo pH", "D10 D11 D12"],
    ["Chuẩn độ điện thế, định luật Faraday, von-ampe", "D13 D14 D15"],
  ],
  "sac-ki": [
    ["Khái niệm, phân loại, cơ chế sắc kí", "D13"],
    ["Hệ số dung lượng k và độ chọn lọc α", "D01 D02 D03"],
    ["Hiệu năng cột: số đĩa N, chiều cao đĩa H", "D04 D05 D06 D12"],
    ["Độ phân giải Rs và phương trình Purnell", "D07 D08 D09 D10"],
    ["Phương trình Van Deemter", "D11 D14"],
  ],
  "gc-hplc": [
    ["Sắc kí khí: nguyên tắc, thiết bị, cột, chế độ nhiệt", "D01 D02 D03 D04"],
    ["Thứ tự rửa giải trong GC và HPLC", "D05 D08 D09"],
    ["HPLC: nguyên tắc và thiết bị", "D07 D10"],
    ["Detector và chọn kĩ thuật cho mẫu thật", "D06 D11 D12"],
    ["Định lượng bằng sắc kí", "D13"],
  ],
};
(function () {
  const ma = {};
  for (const [ch, ds] of Object.entries(PHAN_DANG))
    ds.forEach(([ten, cu], i) => cu.split(" ").filter(Boolean).forEach(d => (ma[ch + "|" + d] = `D${String(i + 1).padStart(2, "0")} · ${ten}`)));
  const doi = c => {
    if (c.dangCu || c.dangMoi) return;   // câu soạn theo bảng dạng mới thì giữ nguyên
    const d = (c.dang.match(/^(D\d+)/) || [])[1], moi = ma[c.chuong + "|" + d];
    if (moi) { c.dangCu = c.dang; c.dang = moi; }
  };
  [typeof NGAN_HANG !== "undefined" ? NGAN_HANG : [], typeof NGAN_HANG_CHO_DUYET !== "undefined" ? NGAN_HANG_CHO_DUYET : []].forEach(ds => ds.forEach(doi));
})();
