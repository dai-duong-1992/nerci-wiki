---
title: "Báo Cáo Tự Động Hóa Lập Chỉ Mục Google Search Console dinhduongtoiuu.com"
author: "Antigravity AI · Performance & Operations"
created: "2026-10-26"
updated: "2026-10-26"
timestamp: "2026-10-26 16:34:36 (GMT+7)"
tags:
  - log
  - seo
  - google-search-console
  - indexing
  - dinhduongtoiuu
---

# Báo Cáo Tự Động Hóa Lập Chỉ Mục Google Search Console dinhduongtoiuu.com (Ngày 26/10/2026)

> 📅 **Thời gian thực hiện:** 2026-10-26 16:34:36 (GMT+7)  
> 🌐 **Website triển khai:** `https://dinhduongtoiuu.com/`  
> 🤖 **Phương thức:** API Search Console Trực Tiếp (`googleapiclient` qua Service Account)  
> 🗄️ **Lark Base Tracker Live:** [10_GSC_URL_Index_Tracker](https://ajpi82edbxhs.jp.larksuite.com/base/Ur4zbNbJiaGt3OsdOI5jHsPnpNh?table=tblgSApnFCmnJ343&view=vewvPnOS2g)  
> 📁 **Lark Base Nhật Ký:** [11_Nhat_Ky_Bao_Cao_SEO_GSC](https://ajpi82edbxhs.jp.larksuite.com/base/Ur4zbNbJiaGt3OsdOI5jHsPnpNh?table=tblOCBQxQsBwmlyJ&view=vewWFMppxz)  
> 🔗 **Tài liệu chiến lược:** [[ke-hoach-lap-chi-muc-google-search-console-dinhduongtoiuu]]  

---

## 📊 I. TỔNG QUAN CHỈ SỐ LẬP CHỈ MỤC & CRAWL BUDGET

| Chỉ số kỹ thuật | Số lượng ghi nhận | Đánh giá & Trạng thái |
| :--- | :---: | :--- |
| **Tổng số URLs Google lưu trữ** | **4,746 URLs** | Toàn bộ URL có Impression từ 07/2026 đến nay |
| **Số URLs thực tế đã số hóa Lark Base** | **1317 URLs** | 100% 330 SKU Sản Phẩm + 26 Danh Mục + 33 Di sản E-E-A-T |
| **Số URLs đã được lập chỉ mục (PASS)** | **733 URLs** | Đạt chuẩn Indexing từ Googlebot |
| **Số URLs đã phát hiện đang xếp hàng (Discovered)** | **368 URLs** | Đang chờ Googlebot phân bổ crawl budget |
| **Số URLs lỗi 404 Nguy cấp** | **3 URLs** | Thất thoát traffic lớn, cần sửa gấp |
| **Tỷ lệ Index Hero SKUs** | **87% (13/15 Hero SKUs đạt PASS)** | Nhóm sản phẩm mũi nhọn có tỷ lệ index cao |
| **Trạng thái Googlebot** | `🟢 Tăng tốc quét lại` | Đã tiếp nhận 8 sitemaps mới vào hàng đợi crawl |

---

## 🔍 II. CẢNH BÁO NGUY CẤP: 3 URLS LỖI 404 CẦN FIX 301 GẤP

Kiểm toán tự động sáng ngày 26/10/2026 xác nhận **3 URLs di sản traffic khủng vẫn đang trả mã HTTP 404 Not Found**, chưa được Đối tác Web cấu hình 301 Redirect:

1. `/danh-muc/sua-nguoi-lon/sua-cho-nguoi-ung-thu/` (485 Clicks • 17.460 Impr) ➔ **Redirect 301 về** `/danh-muc-san-pham/dinh-duong-ung-thu`
2. `/danh-muc/sua-nguoi-lon/sua-cho-nguoi-suy-than/` (264 Clicks • 15.435 Impr) ➔ **Redirect 301 về** `/danh-muc-san-pham/dinh-duong-cho-nguoi-benh-than`
3. `/san-pham/sua-hop-fomeal-basic-soup-250-ml/` (72 Clicks • 3.393 Impr) ➔ **Redirect 301 về** `/chi-tiet-san-pham/thuc-pham-dinh-duong-y-hoc-fomeal-basic-soup-250ml`

> [!CAUTION]
> Tổng lượng traffic thất thoát từ 3 URLs này lên đến hơn **821 Clicks và 36.288 Impressions**. Đây là nguyên nhân trực tiếp làm sụt giảm thứ hạng của website trong đợt chuyển đổi mã nguồn vừa qua. Cần đôn đốc Đối tác Web thực thi cấu hình `nginx` / `.htaccess` ngay hôm nay.

---

## 📈 III. ĐÁNH GIÁ TIẾN ĐỘ THU NHẬN 8 SITEMAPS MỚI

Hệ thống 8 sơ đồ trang web nộp mới vào ngày 23/10/2026:
- `sitemap.xml` & `sitemap-pages-1.xml`: Tiếp nhận 100%, Trang chủ & Giới thiệu giữ vững trạng thái `PASS`.
- `sitemap-authors-1.xml`: Hồ sơ TS.BS Đặng Ngọc Hùng đã được Googlebot ghi nhận và chuyển trạng thái sang `Discovered - currently not indexed`.
- `sitemap-products-1.xml`: 330 URLs sản phẩm đang được Googlebot tuần tự quét và cập nhật chỉ mục.
- `sitemap-product_cats-1.xml` & `sitemap-news-1.xml`: Đã xếp hàng crawl budget.

---

## 📅 IV. DANH MỤC CÔNG VIỆC TRỌNG TÂM TIẾP THEO (ACTION ITEMS)

- `ACT-24`: Cấu hình 301 Redirect khẩn cấp cho 3 URLs 404 (Đối tác Web - Deadline: 24/10/2026).
- `ACT-20`: Ép index thủ công (Request Indexing) trên Google Search Console Web cho ProtiMedic & Hồ sơ BS Hùng (Lê Đại Dương).
- `ACT-21`: Khối thẩm định y khoa BS Hùng trên 5 bài viết Pillar (Content).
- `ACT-22`: Liên kết nội bộ 2 chiều sang Hero SKUs (Content).


---

## ⚡ VI. TIẾN ĐỘ THỰC THI "INDEX THEO LƯỢT" (GOOGLE INDEXING API V3)

> 📅 **Thời gian kích hoạt:** 2026-10-26 17:14:20 (GMT+7)  
> 🚀 **Giai đoạn tác nghiệp:** **LƯỢT 2 / 4**  
> 📊 **Kết quả xuất bản:** **200 / 200 URLs gửi thành công 100%**  

### 1. Phân Bổ Danh Mục Trong Lượt 2:
- **Nhóm Khẩn cấp P1:** Toàn bộ Hero SKUs (Đạm ProtiMedic, Nepro 1 Gold 400g, Fortimel...) và Hồ sơ E-E-A-T TS.BS Đặng Ngọc Hùng.
- **Nhóm Danh mục P2:** Toàn bộ 26 Danh mục sản phẩm bệnh lý + 47 Danh mục tin tức y khoa.
- **Nhóm Sản phẩm P2:** 79 SKU sản phẩm chủ lực có nhu cầu cao chưa được index.

### 2. Trạng Thái Đồng Bộ:
- 100% các bản ghi thuộc Lượt 2 đã được cập nhật nhãn `[Indexing API Lượt 2]` trên Lark Base [10_GSC_URL_Index_Tracker](https://ajpi82edbxhs.jp.larksuite.com/base/Ur4zbNbJiaGt3OsdOI5jHsPnpNh?table=tblgSApnFCmnJ343&view=vewvPnOS2g).
- Action Item `ACT-20` trên [04_Action_Items](https://ajpi82edbxhs.jp.larksuite.com/base/Ur4zbNbJiaGt3OsdOI5jHsPnpNh?table=tbluGWSS3Kh9Pqi3&view=vewL2g706w) đã được cập nhật hoàn tất Lượt 2.
- Lượt 3 dự kiến tiếp tục vào ngày mai (27/10/2026) với 200 URLs tiếp theo.
