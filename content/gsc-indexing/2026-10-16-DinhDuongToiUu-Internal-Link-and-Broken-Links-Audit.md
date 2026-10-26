---
title: "Báo Cáo Kiểm Toán Broken Links & Mạng Lưới Liên Kết Nội Bộ dinhduongtoiuu.com (2026-10-16)"
tags:
  - log
  - seo
  - technical-seo
  - broken-links
  - internal-links
  - audit
topics:
  - "[[ke-hoach-seo-tong-the-website-dinhduongtoiuu]]"
  - "[[quan-tri-du-an-website-dinhduongtoiuu]]"
status: completed
created: 2026-10-16
updated: 2026-10-16
updated_at: "2026-10-16 11:12:41 (GMT+7)"
author: "Lê Đại Dương · Performance & Operations"
sources: []
source_count: 0
---

# 🛡️ Báo Cáo Kiểm Toán Broken Links & Đồ Thị Internal Links dinhduongtoiuu.com

> 🕒 **Thời gian thực hiện:** 2026-10-16 11:12:41 (GMT+7)  
> 🌐 **Domain kiểm toán:** `https://dinhduongtoiuu.com/`  
> 🛠️ **Công cụ phối hợp:** **Lychee v0.24.2 (Rust Engine)** & **Python Internal Network Parser**  
> 🔗 **Lark Base Kế Hoạch Đồng Bộ:** [08_SEO_Action_Plan_2026 (`tblqjf0xiDEBbDgu`)](https://ajpi82edbxhs.jp.larksuite.com/base/Ur4zbNbJiaGt3OsdOI5jHsPnpNh?table=tblqjf0xiDEBbDgu)  

---

## ⚡ I. KẾT QUẢ QUÉT BROKEN LINKS BẰNG LYCHEE (SITEMAP SẢN PHẨM & DANH MỤC)

> [!abstract] **Nhận định từ Lychee Engine:**  
> Hệ thống đường dẫn tĩnh của **336 Sản phẩm** và **27 Danh mục** trên website đạt độ phản hồi HTTP xuất sắc (100% trả về mã `200 OK`). Không phát hiện lỗi chết trang diện rộng (404/500/Timeout) trong sitemap gốc.

```markdown
# Summary

| Status         | Count |
|----------------|-------|
| 🔍 Total       | 363   |
| 🔗 Unique      | 363   |
| ✅ Successful  | 363   |
| ⏳ Timeouts    | 0     |
| 🔀 Redirected  | 0     |
| 👻 Excluded    | 0     |
| ❓ Unknown     | 0     |
| 🚫 Errors      | 0     |
| ⛔ Unsupported | 0     |



```

---

## 🕸️ II. PHÂN TÍCH ĐỒ THỊ LIÊN KẾT NỘI BỘ (INTERNAL LINK GRAPH SNAPSHOT)

### 2.1. Kiểm Tra Sức Mạnh Liên Kết Trỏ Về Hero SKUs (Inbound Links Audit)
Trong mô hình SEO Topic Clusters, các bài viết cẩm nang bệnh lý (Pillar & Cluster Posts) bắt buộc phải trỏ link nội bộ trực tiếp về các sản phẩm giải pháp:

| Hero SKU | URL Sản Phẩm Trên Web | Số Inlink Từ Mẫu Bài Viết | Trạng Thái Phân Bổ Sức Mạnh | Khuyến Nghị On-Page |
| :--- | :--- | :---: | :---: | :--- |
| **nepro-1-gold** | [`/chi-tiet-san-pham/sua-bot-danh-cho-nguoi-tieu-duong-nepro-1-gold-900g`](https://dinhduongtoiuu.com/chi-tiet-san-pham/sua-bot-danh-cho-nguoi-tieu-duong-nepro-1-gold-900g) | **0** | 🔴 Nguy cơ Mồ Côi (Chưa được trỏ link) | Bổ sung ngay box CTA & Anchor text trong các bài viết bệnh thận |
| **nutricare-kidney-2** | [`/chi-tiet-san-pham/nutricare-kidney-2`](https://dinhduongtoiuu.com/chi-tiet-san-pham/nutricare-kidney-2) | **0** | 🔴 Nguy cơ Mồ Côi (Chưa được trỏ link) | Bổ sung ngay box CTA & Anchor text trong các bài viết bệnh thận |
| **cudo-forte** | [`/chi-tiet-san-pham/cudo-forte`](https://dinhduongtoiuu.com/chi-tiet-san-pham/cudo-forte) | **0** | 🔴 Nguy cơ Mồ Côi (Chưa được trỏ link) | Bổ sung ngay box CTA & Anchor text trong các bài viết bệnh thận |
| **delisoup** | [`/chi-tiet-san-pham/thuc-pham-dinh-duong-delisoup`](https://dinhduongtoiuu.com/chi-tiet-san-pham/thuc-pham-dinh-duong-delisoup) | **40** | 🟢 Đã có liên kết | Tối ưu hóa anchor text giàu từ khóa y khoa |

---

### 2.2. Kiểm Toán Chất Lượng Anchor Text (Cảnh Báo Anchor Text Vô Nghĩa)

> [!warning] **Quy chuẩn Neo Liên Kết Y Khoa (Medical Anchor Text Guidelines):**  
> Tuyệt đối không dùng các từ neo mơ hồ như *"tại đây"*, *"xem thêm"*, *"ở đây"*. Google thuật toán Helpful Content & Medic Update chỉ truyền sức mạnh ngữ nghĩa khi văn bản liên kết chứa rõ ràng **thực thể sản phẩm và đối tượng bệnh lý**.

* **Số lượng liên kết cần sửa đổi cấu trúc:** Phát hiện các bài viết cũ đang dùng anchor text ngắn hoặc chung chung trỏ nội bộ.
* **Quy tắc chuyển đổi bắt buộc cho đội ngũ Dược sĩ Content:**
  * ❌ `Tham khảo thêm chế độ ăn cho người bệnh thận [tại đây].`
  * ✅ `Tham khảo thêm [Thực đơn 7 ngày cho người suy thận giai đoạn 3] được xây dựng bởi TS.BS Đặng Ngọc Hùng.`
  * ❌ `Mua sữa nepro 1 chính hãng [ở đây].`
  * ✅ `Mua [Sữa bột Nepro 1 Gold 900g giảm đạm cho người suy thận] chính hãng tại H&H Nutrition.`

---

## 📋 III. 2 NHIỆM VỤ MỚI BỔ SUNG VÀO LARK BASE (`tblqjf0xiDEBbDgu`)

1. **`SEO-D03` (Technical SEO):** *Thiết lập Kịch bản Quét Tự Động Định Kỳ Bằng Lychee (Broken Link Health Check)*  
   * **Mục tiêu:** Chạy tự động hàng tuần, quét sạch các link 404 phát sinh khi xóa sản phẩm hết hàng hoặc sửa đổi URL.
   * **Phụ trách:** Dev Kỹ thuật · *Pha 1*.
2. **`SEO-D04` (Technical SEO & Content):** *Kiểm Toán Mạng Lưới Internal Links & Xóa Sổ 100% Trang Mồ Côi (Orphan Pages)*  
   * **Mục tiêu:** Đảm bảo 100% trong số 336 SKU sản phẩm đều có tối thiểu $\ge 3$ liên kết nội bộ từ các bài viết kiến thức trỏ tới; riêng Top 20 Hero SKU phải có $\ge 15$ inlinks.
   * **Phụ trách:** Lê Đại Dương & Dược sĩ Content · *Pha 1*.

---

## 🎯 IV. KẾT LUẬN & HÀNH ĐỘNG TIẾP THEO

* Công cụ **`lychee`** đã được cấu hình hoàn chỉnh tại [`scripts/lychee.toml`](file:///Users/ledaiduong/Library/CloudStorage/OneDrive-Personal/Duong%20Obsidian%20Vault/scripts/lychee.toml) và sẵn sàng chạy kiểm tra toàn bộ website bất kỳ lúc nào chỉ bằng lệnh:
  ```bash
  lychee --config scripts/lychee.toml "https://dinhduongtoiuu.com/sitemap.xml"
  ```
* Báo cáo này đã được lưu trữ và sẵn sàng để đội ngũ kỹ thuật và nội dung rà soát các liên kết yếu.
