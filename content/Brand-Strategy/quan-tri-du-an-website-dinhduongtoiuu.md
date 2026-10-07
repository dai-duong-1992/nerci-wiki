---
title: "Quản Trị Dự Án Website dinhduongtoiuu.com (H&H Nutrition) — Đã Xong / Chưa Xong"
tags:
  - "project"
  - "hh-nutrition"
  - "website"
  - "ecommerce"
  - "project-tracker"
topics:
  - "[[nerci-master-project-hub]]"
  - "[[nerci-new-website-internal-survey-spec]]"
  - "[[ke-hoach-chuan-hoa-va-dong-bo-sku-dinhduongtoiuu-pancake]]"
status: "active"
created: 2026-10-07
updated: 2026-10-07
updated_at: "2026-10-07 10:28:30 (GMT+7)"
sources: []
source_count: 0
aliases:
  - "dinhduongtoiuu-project-tracker"
  - "Tracker website dinhduongtoiuu"
  - "/quan-tri-du-an-website-dinhduongtoiuu"
---

# 🛒 Quản Trị Dự Án Website dinhduongtoiuu.com — Cái Gì Được / Chưa Được

> 📅 **Thời gian lập:** 2026-10-07 09:53:30 (GMT+7) · 🕒 **Cập nhật:** 2026-10-07 10:28:30 (GMT+7)
> 👤 **Phụ trách:** Lê Đại Dương · Performance & Operations
> 🏗️ **Đối tác phát triển:** đơn vị làm web (Hợp đồng 136055 ngày 12/08/2026, Phụ lục 01)
> 🔗 **Lark Base SSOT (Master Sheet):** [https://ajpi82edbxhs.jp.larksuite.com/base/Ur4zbNbJiaGt3OsdOI5jHsPnpNh](https://ajpi82edbxhs.jp.larksuite.com/base/Ur4zbNbJiaGt3OsdOI5jHsPnpNh) (Token: `Ur4zbNbJiaGt3OsdOI5jHsPnpNh` — 8 bảng nghiệp vụ)
> 📚 **Cơ sở:** 8 tài liệu báo cáo nhận từ đối tác (05–06/10/2026), liệt kê ở mục 9. Tệp này **chỉ tổng hợp lại những gì tài liệu nêu**; mục nào chưa có bằng chứng được ghi rõ là "chưa xác minh".

## 0. Tóm tắt nhanh

| Hạng mục | Kết quả |
| :--- | :--- |
| Phụ lục hợp đồng: **59** tính năng | ✅ Đã có **39** · 🟡 Một phần **8** · ❌ Chưa có **3** · 🔧 Đang thực hiện/kiểm thử **2** · 🔗 Phụ thuộc Pancake **3** · ⚠️ Khác cam kết **1** · ➖ Không áp dụng **3** |
| Môi trường | **Chỉ có trên site thử nghiệm** `dinhduongtoiuu.edctech.online`. Site chính thức `dinhduongtoiuu.com` **chưa được cập nhật**. |
| Xuất dữ liệu GMC (Mục 10.2) | ❌ **THIẾU HOÀN TOÀN**: Chưa có module xuất feed dữ liệu chuẩn Google (`item_group_id`, `id`, `availability`...) và toàn bộ các file liên quan. |
| Bộ lọc danh mục con | ❌ **CHƯA CÓ HƯỚNG DẪN**: Tài liệu mới chỉ hướng dẫn danh mục cha cấp 1, chưa có hướng dẫn hay ma trận filter cho từng danh mục con. |
| Dữ liệu Sales cho Bộ lọc | ❌ **CHƯA CÓ DỮ LIỆU TỪ SALES**: Dù file Sheet yêu cầu đã có, nhưng đội Sales/Dược sĩ chưa cấp data để tick sản phẩm, khiến bộ lọc tự ẩn. |
| Sửa giao diện điện thoại (06/10) | 13/13 lỗi đã sửa trên site thử nghiệm, **chờ khách xem & đồng ý** |
| Gộp biến thể ở danh sách (06/10) | Đã lập trình, chạy thử **tại máy** (chưa lên site thử nghiệm, chưa lên kho mã nguồn) |
| Bộ lọc sản phẩm theo danh mục | Module đã xong, **dữ liệu lọc chưa nhập hết** (phải gán sản phẩm thủ công) |
| Đồng bộ Website ↔ Pancake POS | Module đã có, **3 công tắc mặc định TẮT** — chưa xác minh đã bật |
| Rủi ro lớn nhất | **Công nghệ khác cam kết** (PHP thuần, không phải WordPress/WooCommerce) — cần khách chấp thuận bằng văn bản |

---

## 1. ✅ ĐÃ ĐƯỢC (có bằng chứng trong tài liệu)

### 1.1. Tính năng thương mại điện tử cốt lõi (Phụ lục 01)

| Nhóm | Đã có |
| :--- | :--- |
| Nội dung | Trang tĩnh (Page CMS), tin tức (danh mục, tác giả, thẻ), liên hệ, bảng giá gói dịch vụ, tuyển dụng, đa ngôn ngữ vi/en |
| Hạ tầng | PHP 8.4, MariaDB 10.11, Nginx, aaPanel (khớp cam kết) |
| Mua hàng | Danh sách → chi tiết → giỏ hàng → đặt hàng; sửa/xóa số lượng giỏ; thông tin giao hàng đủ Tỉnh/Quận/Phường |
| Thanh toán | **OnePay Production** (ATM, Visa/Master, VietQR/QR Pay, iBanking) + QueryDR đối soát; thêm COD & chuyển khoản |
| Tài khoản khách | Đăng nhập/đăng ký/quên mật khẩu/magic login; `/tai-khoan`; `/tai-khoan/don-hang` (xem, hủy, mua lại, thanh toán lại) |
| Sản phẩm | Danh mục cây cha-con, mega-menu, nhãn HOT/NEW, nhiều ảnh, giá KM/Flash Sale, đánh giá & hỏi đáp |
| Khuyến mãi | Mua X tặng Y, free ship theo tổng đơn, 8 loại chương trình KM chạy đồng thời |
| Kho | Nhập/xuất kho (tay + Excel), lô & hạn dùng, nhiều kho, lịch sử nhập xuất, báo cáo kho |
| SEO/Marketing | Facebook Pixel + GA4 Ecommerce, trình quản lý mã nhúng, sitemap/robots/canonical/OG/schema.org JSON-LD |
| Vận hành | Quản lý khách hàng (tổng chi tiêu, lịch sử), 7 trạng thái đơn + in phiếu, phân quyền, nhật ký thao tác, AI hỗ trợ nội dung, SSL/CSRF/XSS/SQLi |
| Tiện ích | Promo bar có nút X + cookie 24h, Zalo OA live chat, liên kết MXH |

### 1.2. Giao diện điện thoại — 13 lỗi đã sửa (báo cáo 06/10/2026)

| # | Trang | Đã sửa |
| :-: | :--- | :--- |
| 1 | Toàn site | Nút nổi gọi/chat 60px → 48px trên điện thoại, sát mép phải |
| 2 | Toàn site | Ô nhập 16px — iPhone không tự phóng to |
| 3 | Trang chủ | Khối "Thực phẩm chức năng": ảnh trái, tên/giá phải |
| 4 | Trang chủ | "Danh mục theo bệnh lý" xếp 2 cột |
| 5 | Chi tiết SP | Giảm lề, cột chữ ~270px → ~338px |
| 6 | Chi tiết SP | Hết cắt dòng "93% \| 13 đánh giá" |
| 7 | Chi tiết SP | "Sản phẩm liên quan" 2 cột |
| 8 | Sản phẩm | Ẩn nút nổi khi mở ngăn lọc |
| 9 | Giỏ hàng | Ẩn dòng tiêu đề cột trên điện thoại |
| 10 | Đặt hàng | Tỉnh 1 hàng; Quận + Phường chung hàng |
| 11 | Tin tức | Nút "Đăng ký" cao 42px |
| 12 | Giới thiệu | Canh trái trên điện thoại |
| 13 | Khảo sát sức khỏe | Tiêu đề về phông Nunito |

### 1.3. Giao diện & quản trị (Báo cáo tính năng v1, không ghi ngày)

- Header điện thoại gọn 1 hàng (☰ · logo icon · tìm kiếm · giỏ · tài khoản), header dính khi cuộn; lề 24px → 6px; 2 cột sản phẩm.
- Hàng icon danh mục trang chủ (2 hàng kiểu Shopee), hàng ô danh mục có icon ở trang Sản phẩm.
- Thanh lọc (Lọc · Danh mục · Mức giá · Khuyến mãi · Đánh giá), sắp xếp 6 kiểu, chip đang chọn + Xóa tất cả.
- FAQ ở trang Sản phẩm và từng danh mục (nhóm `san-pham`, `sp-<danh-mục>`).
- Filter sản phẩm (nhóm dựng sẵn theo bảng khách gửi), bộ lọc giá dạng bảng, hashtag tìm nhanh.
- Ô tìm kiếm chữ gợi ý chạy kiểu Long Châu + hộp gợi ý (banner, lịch sử, hashtag, bán chạy).
- Menu danh mục desktop kiểu Long Châu (danh mục con có ảnh + 5 SP bán chạy).
- Hàng tab trang chủ lấy SP từ Filter/Danh mục/Danh sách; ảnh SP phủ trọn ô.
- Trang sửa sản phẩm gọn lại, thêm **Mã mẫu (Item Group ID)** cạnh **Mã SKU (Item ID)**; Hotline đầu trang; logo SVG + logo riêng điện thoại; quản lý đội ngũ chuyên gia bằng form.

### 1.4. Gộp biến thể ở danh sách sản phẩm (06/10/2026) — chỉ chạy thử tại máy

| Chỉ số (dữ liệu thử) | Tắt | Bật |
| :--- | ---: | ---: |
| Trang Sản phẩm — tất cả | 343 | 245 |
| Danh mục "Sữa" | 272 | 204 |
| Danh mục "Sách & Truyện tranh" | 25 | 3 |

- 46/343 sản phẩm có từ 2 biến thể trở lên; mỗi nhóm hiện biến thể **giá thấp nhất**.
- Bật/tắt ở **Sản phẩm → Filter sản phẩm → "Sản phẩm nhiều biến thể ở các danh sách"**; mặc định BẬT nếu chưa ai lưu.
- Đã kiểm tra: 245/245 nhóm giữ đúng biến thể rẻ nhất; bật/tắt đối chiếu đúng số lượng ngoài web.

### 1.5. Đồng bộ Website ↔ Pancake POS (module đã có theo tài liệu)

| Chiều | Nội dung | Công tắc |
| :--- | :--- | :--- |
| Web → POS | Đơn hàng (khách, dòng hàng theo mã biến thể POS, quà tặng giá 0, phí ship, giảm giá, COD, đã CK, kho, ghi chú `[WEBSITE]`) | "Tự động đẩy đơn web sang POS" |
| POS → Web | Danh mục biến thể, tồn kho (chỉ đọc, gắn cảnh báo THIẾU HÀNG) | "Tự động kéo danh mục, giá, tồn kho từ POS" |
| POS → Web | Giá bán lẻ ghi đè vào giá web | "Ghi giá bán lẻ POS vào giá sản phẩm web" |
| POS → Web | Trạng thái đơn (Xác nhận → Gửi → Nhận / Hủy, chỉ đi tiến), mã vận đơn, thanh toán đủ | "Cập nhật trạng thái đơn web theo POS" |

Thời điểm đẩy đơn: COD/ví → hàng đợi vài phút; chuyển khoản → đẩy ngay (lấy QR từ POS); OnePay → chỉ đẩy **sau khi** cổng báo đã trả tiền. Đơn lỗi hiện ở danh sách lỗi, quản trị bấm **đẩy lại**.

---

## 2. ❌ CHƯA ĐƯỢC / CÒN DỞ

### 2.1. Tính năng trong Phụ lục chưa đạt

| Mã | Tính năng | Hiện trạng | Mức |
| :-: | :--- | :--- | :-: |
| 6.2 | Nhập mã khuyến mãi | Không có ô nhập mã; KM tự áp dụng | 🔧 Đang làm |
| 8.1 | Nhiều mã khuyến mãi | Có 8 loại KM, **không có coupon code** | 🟡 |
| 8.2 | Giảm theo giá cố định | Có ở Flash Sale/combo; KM cấp đơn chỉ giảm % | 🟡 |
| 8.3 | Giảm bậc thang theo số lượng | Chưa có; gần nhất là nhiều mức % theo tổng tiền | 🟡 |
| 6.4 | Tùy chọn xuất hóa đơn ở trang đặt hàng | Chưa có; chỉ có trường MST trong admin (nhập tay) | 🟡 |
| 7.4 | Danh sách SP khuyến mãi (đếm ngược, số lượng còn lại) | Chỉ có Flash Sale theo khung giờ | 🟡 |
| 9.4 | Nhiều đơn vị tính / quy đổi | Mỗi SP 1 ĐVT | 🟡 |
| 10.5 | Công cụ chấm điểm SEO (kiểu Yoast) | Chỉ có AI gợi ý meta | 🟡 |
| 11.6 | Cảnh báo tồn kho thấp chủ động | Có ngưỡng và tô đỏ; **chưa có thông báo chuông/email** | 🟡 |
| 7.2 | Gợi ý SP bằng AI + hiển thị SP đã xem | Chưa có | ❌ |
| 7.3 | Theo dõi SP sắp có hàng | Chưa có (chỉ đánh dấu hết hàng) | ❌ |
| 9.3 | Điều chuyển hàng giữa kho | Phải xuất kho A, nhập kho B thủ công | ❌ |
| 10.2 | Feed sản phẩm tự động lên Google Shopping (GMC) | **Thiếu hoàn toàn** module xuất dữ liệu GMC chuẩn cấu trúc Google (`item_group_id`, `id`, `availability`...). Thiếu toàn bộ các file feed XML/TSV liên quan. | ❌ Chưa có |
| 4.3 / 6.6 | Đơn vị giao nhận (GHN/Ahamove/EMS) | Chưa tích hợp; phí ship **cố định trong code** (`cart_shipping_fee()`); kế hoạch chỉ tính phí, **không tạo vận đơn, không có ViettelPost** (phụ lục yêu cầu GHN, ViettelPost) | 🔗 Chờ |
| 12.4 | Chatbot AI trả lời khách 24/7 | Chưa có, đang hoãn; hướng tích hợp Pancake | 🔗 Chờ |
| 13.1–13.3 | Tiện ích mã QR | Không áp dụng | ➖ |

### 2.2. Việc còn lại theo các báo cáo 06/10

| Nguồn | Việc còn lại |
| :--- | :--- |
| Sửa giao diện điện thoại | ① Cập nhật site chính thức (chờ khách đồng ý) ② Khách xác nhận nút nổi **48px** (60px đã chốt 05/10) ③ Thử lại lỗi tự phóng to trên **iPhone thật** (mới thử bằng Chrome giả lập) ④ **Chưa rà** trang quản trị và các trang tài khoản sau đăng nhập |
| Gộp biến thể | ① Đưa lên site thử nghiệm và site chính thức ② Lưu lên kho mã nguồn ③ Quyết định xử lý bộ truyện Guru (24 biến thể gộp thành 1 thẻ 32.000₫) ④ Cân nhắc ghi "Giá từ…" trên thẻ |
| Bộ lọc theo danh mục | Gán sản phẩm vào giá trị lọc (Abbott, Nutricare…) và nhập mốc giá riêng từng danh mục; nhóm/giá trị 0 sản phẩm sẽ **tự ẩn** nên chưa nhập là không hiện |
| Filter tick thủ công | "Còn hàng", "Giao nhanh 2h", "Chuyên gia khuyên dùng" phải bấm "Chọn sản phẩm" để tick |
| Ngăn lọc | Site thử nghiệm đã khác site chính thức ở thanh trượt giá + nhóm lọc theo danh mục (tính năng đang làm) |
| Huy hiệu thẻ SP | `badge_style` chưa có ô chỉnh trong admin, **phải sửa DB** (mục 5.2) |

### 2.3. Đồng bộ Pancake POS — chưa xác minh / cần làm

- [ ] Xác minh 4 công tắc đã bật trên môi trường production (**mặc định TẮT**).
- [ ] Mỗi quy cách (Lốc, Thùng…) có **mã SKU riêng** khớp đúng biến thể POS — dùng chung SKU làm sai tồn kho và có thể bị ghi đè giá (tiền đơn vẫn đúng). Liên quan kế hoạch [[ke-hoach-chuan-hoa-va-dong-bo-sku-dinhduongtoiuu-pancake]].
- [ ] Đơn **không được đẩy**: đơn đã hủy; SP chưa khớp biến thể POS; tổng quy đổi lệch quá 5đ so với web. Cần quy trình rà danh sách lỗi hằng ngày.
- [ ] **Không đồng bộ**: tên/ảnh/mô tả/ĐVT/cân nặng/giá KM/giá đại lý; sửa hoặc hủy đơn web sau khi đã đẩy (phải sửa tay trên POS); đơn kênh khác (Facebook, Shopee) không về web.
- [ ] Thiết kế quy trình nêu **cron dự phòng** kéo trạng thái đơn (webhook có thể mất) và **đối soát hằng đêm** — tài liệu mô tả như thiết kế, **chưa thấy xác nhận đã triển khai**.

### 2.4. 🚨 Ba Lỗ Hổng Trọng Yếu: GMC Feed, Bộ Lọc Con & Dữ Liệu Sales

1. **Thiếu hoàn toàn module xuất dữ liệu GMC theo cấu trúc chuẩn của Google:**
   - Google Merchant Center yêu cầu chuẩn hóa feed dữ liệu bắt buộc gồm: `id` (mã biến thể SKU con), `item_group_id` (mã mẫu sản phẩm cha), `title`, `description`, `link`, `image_link`, `availability` (`in_stock` / `out_of_stock`), `price`, `sale_price`, `brand`, `google_product_category`, `condition`.
   - **Thực tế:** Trong trang admin sửa sản phẩm mới chỉ bổ sung ô nhập tĩnh "Mã mẫu (Item Group ID)" cạnh Mã SKU, **hoàn toàn chưa có module xuất feed tự động** (URL feed dạng XML RSS 2.0 hoặc TSV) và **thiếu toàn bộ các file mã nguồn/cấu hình liên quan** để Google Merchant Center tự động nạp dữ liệu.
2. **Chưa có tài liệu hướng dẫn và cơ chế phân cấp bộ lọc theo từng danh mục con:**
   - Tài liệu `Huong-dan-bo-loc-san-pham-theo-danh-muc.docx` mới chỉ minh họa cho danh mục cha cấp 1 ("Sữa cho người bệnh").
   - Đối với ngành dinh dưỡng y học, **từng danh mục con có thuộc tính lâm sàng riêng biệt** (ví dụ: *Sữa tiểu đường* cần lọc chỉ số GI, hàm lượng đường Isomaltulose; *Sữa thận* cần lọc hàm lượng Đạm, Natri, Kali, Phốt pho; *Sữa ung thư* cần lọc EPA; *Sữa nhi* cần lọc độ tuổi và cân nặng). Hiện tại **chưa có tài liệu hướng dẫn hay ma trận phân cấp bộ lọc cho từng danh mục con**.
3. **Chưa có dữ liệu từ đội ngũ Sales để tích chọn tiêu chí bộ lọc:**
   - Các bộ lọc giá trị gia tăng như "Chuyên gia khuyên dùng", "Giao nhanh 2h", "Bệnh lý", "Đối tượng sử dụng"... được lập trình theo cơ chế **tick chọn sản phẩm thủ công**.
   - Dù trong file Sheet Excel yêu cầu tính năng ban đầu đã định nghĩa danh mục các filter này, nhưng **đội ngũ Sales / Dược sĩ tư vấn chưa cung cấp dữ liệu phân loại sản phẩm thực tế**. Vì hệ thống có cơ chế tự động ẩn các tiêu chí có 0 sản phẩm, nên toàn bộ các bộ lọc này **đang bị ẩn hoàn toàn ngoài website**, khiến tính năng bộ lọc không phát huy được giá trị thực tế.

---

## 3. ⏳ CẦN QUYẾT ĐỊNH (chờ phía Dương / khách)

| # | Nội dung | Đề xuất của đối tác | Trạng thái |
| :-: | :--- | :--- | :-: |
| D1 | **Công nghệ**: PHP thuần/MVC tự viết thay cho WordPress/WooCommerce/Flatsome + không có Yoast | Cần thống nhất với khách (phụ lục ghi rõ WordPress) | ⏳ |
| D2 | Đã thanh toán nhưng POS báo hết hàng | Liên hệ khách: chờ hàng hoặc hoàn tiền | ⏳ chưa chốt |
| D3 | Khách muốn sửa/hủy đơn | Cho phép trên web khi POS chưa xác nhận; sau đó qua CSKH | ⏳ |
| D4 | Hoàn tiền đơn online bị hủy | Kế toán hoàn thủ công giai đoạn đầu, tự động sau | ⏳ |
| D5 | **Nơi tạo khuyến mãi** (web hay POS) | Chọn **một** nơi duy nhất để tránh lệch giá | ⏳ |
| D6 | Khách trùng số điện thoại | Gộp theo SĐT, ưu tiên thông tin POS | ⏳ |
| D7 | Cỡ nút nổi 48px (điện thoại) | Cần khách xác nhận | ⏳ |
| D8 | Thời điểm đưa bản sửa lên **site chính thức** | Sau khi khách xem và đồng ý | ⏳ |
| D9 | Bật/tắt gộp biến thể mặc định; bộ truyện Guru hiện từng tập hay gộp | Tách nhóm quy cách của bộ Guru nếu muốn hiện riêng | ⏳ |
| D10 | Đơn vị giao nhận: GHN/Ahamove/EMS chỉ tính phí, hay cần tạo vận đơn + ViettelPost như phụ lục | — | ⏳ |
| D11 | **Module Feed GMC chuẩn Google**: Yêu cầu đối tác lập trình endpoint xuất file feed XML/TSV theo chuẩn GMC Help | Đối tác chưa có mã nguồn, đề xuất tích hợp API hoặc file tĩnh | ⏳ Chờ duyệt |
| D12 | **Cung cấp dữ liệu từ Sales cho Bộ lọc**: Tổ chức buổi làm việc với đội ngũ Dược sĩ / Sales để gắn sản phẩm vào các thuộc tính lâm sàng | Sales cần bảng danh mục để tick thủ công | ⏳ Cần họp |
| D13 | **Ma trận bộ lọc danh mục con**: Yêu cầu đối tác bàn giao tài liệu hướng dẫn và cấu hình bộ lọc riêng biệt cho từng danh mục con (Tiểu đường, Thận, Ung thư...) | Đối tác mới viết hướng dẫn chung cho cấp cha | ⏳ Chờ đối tác |

---

## 4. ⚠️ RỦI RO & MÂU THUẪN CẦN LƯU Ý

1. **Lệch hợp đồng về công nghệ (D1)** — nếu khách không chấp thuận, có thể bị coi là không đạt mục 3.1 và 10.5.
2. **Mâu thuẫn trong bảng đối chiếu** (cần đối tác sửa lại để không bị hiểu sai):
   - **9.6** Nhà cung cấp: ghi chú viết "**Chưa có**" nhưng cột trạng thái ghi "**Đã có**".
   - **4.3 / 6.6 / 12.4**: cột trạng thái ghi "Tích hợp/Liên kết Pancake" thay vì trạng thái thực — không biết là đã làm hay chưa.
   - **10.2** Google Shopping: ô hiện trạng để trống, chỉ có nhãn "Đang kiểm thử" nhưng thực tế thiếu hoàn toàn feed GMC.
3. **Hai phiên bản tài liệu đối chiếu** (`...10-05.docx` và `...10-05 (1).docx`) có **nội dung giống hệt nhau** — chỉ cần giữ một bản.
4. **Chưa lên production**: mọi cải tiến 06/10 chưa có trên `dinhduongtoiuu.com`; khách hàng thật vẫn đang thấy bản cũ (các lỗi như nút nổi che nút "Thêm vào giỏ" vẫn tồn tại ở site chính thức).
5. **Mã nguồn chưa lưu** (gộp biến thể): rủi ro mất công nếu máy chạy thử gặp sự cố.
6. **Sai tồn kho/giá nếu trùng SKU** giữa các quy cách (xem 2.3).
7. **Ghi chú đối chiếu với kho tri thức nội bộ:** các ghi chú cũ trong vault (kế hoạch SKU) còn nhắc **WooCommerce** của `dinhduongtoiuu.com` (ID Web WooCommerce, Parent ID…). Site mới do đối tác dựng là **PHP thuần**; cần xác định rõ khi nào chuyển đổi dữ liệu và SKU sẽ gắn vào hệ nào để không lệch kế hoạch.
8. **Độ tin cậy số liệu:** các con số (343/245, 46 SP nhiều biến thể…) là **dữ liệu thử nghiệm** tại máy, không phải dữ liệu production.
9. **Tê liệt chiến dịch Google Shopping / Performance Max do thiếu Feed GMC:** Nếu website không có endpoint xuất dữ liệu Google Merchant Center chuẩn cấu trúc (`item_group_id`, `id`, `availability`...), tài khoản Google Ads NERCI & H&H hoàn toàn không thể nạp sản phẩm để chạy quảng cáo mua sắm tự động (mục 10.2).
10. **Bộ lọc bị "chết lâm sàng" ngoài web do thiếu dữ liệu từ Sales:** Cơ chế web tự ẩn bộ lọc có 0 sản phẩm. Vì đội ngũ Sales chưa cung cấp dữ liệu để tick sản phẩm, nên toàn bộ các filter quan trọng ("Chuyên gia khuyên dùng", "Giao nhanh 2h", "Bệnh lý") đều bị biến mất, khiến trải nghiệm tìm kiếm của khách hàng thất bại.

---

## 5. 📋 DANH SÁCH VIỆC (Action Items)

| # | Việc | Người | Ưu tiên | Trạng thái |
| :-: | :--- | :--- | :-: | :-: |
| A1 | Trình khách xem site thử nghiệm và xin chấp thuận công nghệ PHP thuần (D1) | Dương | 🔴 | ☐ |
| A2 | Khách xem 13 bản sửa giao diện điện thoại, xác nhận nút 48px, sau đó yêu cầu deploy site chính thức | Dương / Khách | 🔴 | ☐ |
| A3 | Test lỗi phóng to ô nhập trên **iPhone thật** | Dương | 🔴 | ☐ |
| A4 | Yêu cầu đối tác lưu mã gộp biến thể lên repo + đưa lên site thử nghiệm | Đối tác | 🔴 | ☐ |
| A5 | Chốt D2–D6 (quy tắc đơn thanh toán/hết hàng, sửa/hủy, hoàn tiền, nơi tạo KM, gộp khách) | Dương + Khách | 🔴 | ☐ |
| A6 | Xác minh 4 công tắc Pancake POS đã bật trên production và chạy thử 1 đơn mỗi loại (COD, chuyển khoản, OnePay, có quà tặng) | Dương / Đối tác | 🟠 | ☐ |
| A7 | Chuẩn hóa mã SKU từng quy cách khớp POS (tiếp nối kế hoạch SKU) | Dương | 🟠 | ☐ |
| A8 | Nhập dữ liệu bộ lọc: nhóm Thương hiệu… + mốc giá từng danh mục + tick "Còn hàng/Giao nhanh 2h/Chuyên gia khuyên dùng" | Dương / Content | 🟠 | ☐ |
| A9 | Xử lý bộ truyện Guru (tách nhóm quy cách nếu cần hiện từng tập) | Đối tác | 🟡 | ☐ |
| A10 | Chốt phương án giao nhận (D10) và lịch làm tính phí ship đa đơn vị | Dương + Đối tác | 🟠 | ☐ |
| A11 | Yêu cầu đối tác hoàn thiện: mã khuyến mãi (6.2/8.1), bậc thang (8.3), hóa đơn (6.4), SP khuyến mãi đếm ngược (7.4) | Đối tác | 🟠 | ☐ |
| A12 | Yêu cầu sửa bảng đối chiếu (9.6, 10.2, cột Pancake) và bỏ bản trùng | Đối tác | 🟡 | ☐ |
| A13 | Rà phần chưa kiểm tra: trang quản trị và trang tài khoản sau đăng nhập | Đối tác | 🟡 | ☐ |
| A14 | Khảo sát nội bộ theo [[nerci-new-website-internal-survey-spec]] sau khi lên production | Dương | 🟡 | ☐ |
| A15 | **Yêu cầu đối tác lập trình module xuất Feed Google Merchant Center (GMC)**: Chuẩn hóa xuất file XML/TSV với đầy đủ `item_group_id`, `id`, giá, tồn kho, link ảnh theo chuẩn Google Help | Đối tác Web | 🔴 | ☐ |
| A16 | **Yêu cầu đối tác bổ sung tài liệu & cơ chế bộ lọc theo từng danh mục con**: Thiết kế ma trận filter chuyên sâu cho từng phân loại bệnh lý (Tiểu đường, Thận, Ung thư...) | Đối tác Web | 🟠 | ☐ |
| A17 | **Họp và thu thập dữ liệu từ đội ngũ Sales / Dược sĩ H&H**: Thu thập bảng phân loại sản phẩm thực tế để tiến hành tick chọn các tiêu chí bộ lọc (Chuyên gia khuyên dùng, Giao nhanh 2h, Bệnh lý) | Dương / Sales | 🔴 | ☐ |

---

## 6. 🗺️ Mốc thời gian đã biết

| Ngày | Sự kiện |
| :--- | :--- |
| 12/08/2026 | Ký Hợp đồng 136055 + Phụ lục 01 |
| 05/10/2026 | Cập nhật bảng đối chiếu tính năng; chốt nút nổi 60px |
| 06/10/2026 | Báo cáo sửa giao diện điện thoại (13 lỗi); báo cáo gộp biến thể |
| (chưa có) | Ngày deploy site chính thức, ngày nghiệm thu |

> Các tài liệu không nêu hạn chót nghiệm thu hay ngày deploy — cần hỏi đối tác để điền vào bảng trên.

---

## 7. 🔗 Liên kết nội bộ

- [[nerci-master-project-hub]] · [[nerci-new-website-internal-survey-spec]] · [[ke-hoach-chuan-hoa-va-dong-bo-sku-dinhduongtoiuu-pancake]]

## 8. Quy tắc bảo trì tệp này

- Mỗi lần có báo cáo mới từ đối tác: cập nhật mục 1 (đã xong), mục 2 (còn dở), chuyển mục D → đã chốt, và **ghi lại mốc thời gian đầy đủ** (ngày giờ GMT+7) ở `updated_at`.
- Khi một việc A# hoàn thành: đổi ☐ thành ☑ và ghi ngày.

## 9. Nguồn tài liệu (tệp .docx người dùng cung cấp)

| # | Tài liệu | Nội dung |
| :-: | :--- | :--- |
| 1 | Bao_cao_chinh_sua_giao_dien_mobile.docx | 13 lỗi giao diện điện thoại (06/10/2026) |
| 2 | Bao_cao_gop_bien_the_danh_sach_san_pham.docx | Gộp biến thể ở danh sách (06/10/2026) |
| 3 | Baocaotinhchinhv1 (1).docx | Báo cáo tính năng v1 (header/lọc/tìm kiếm/admin) |
| 4 | Dong-bo-Website-Pancake-POS.docx | Dữ liệu đồng bộ hai chiều, lưu ý SKU/ĐVT |
| 5 | Quy_trinh_dong_bo_Website_PancakePOS.docx | Kiến trúc, luồng đặt hàng, xử lý lỗi, tình huống cần chốt |
| 6 | H&H_PLHD_DoiChieu_TinhNang10-05.docx và bản (1) | Đối chiếu 59 tính năng với Phụ lục 01 (hai bản giống nhau) |
| 7 | Huong-dan-bo-loc-san-pham-theo-danh-muc.docx | Hướng dẫn cấu hình nhóm lọc, mốc giá, gán sản phẩm |
