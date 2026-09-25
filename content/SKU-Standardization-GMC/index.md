---
title: 'Dự Án Chuẩn Hóa SKU & Google Merchant Center'
aliases:
  - /SKU-Standardization-GMC/
  - /SKU-Standardization-GMC
---

# 📦 Dự Án Chuẩn Hóa Danh Mục SKU & Google Merchant Center (GMC)
> *Dự án chuẩn hóa toàn diện 446 mã hàng lưu kho, quy chuẩn mã mẫu (`item_group_id`) và mã SKU biến thể (`item_id` / `id`) theo tiêu chuẩn của Google Merchant Center Help. Đồng bộ dữ liệu xuyên suốt giữa ERP/KiotViet, Website WooCommerce (dinhduongtoiuu.com), Pancake CRM và Google Shopping / Performance Max Ads.*

---

## 📑 Danh Sách Tài Liệu & Kế Hoạch Triển Khai

- 📘 **[[sku-standardization-gmc/quy-chuan-sku-google-merchant-center-nerci|Quy Chuẩn Cấu Trúc SKU & Mindset Quản Trị item_id / item_group_id Theo Google Merchant Center]]** 🚨 *(Tài liệu tiêu chuẩn cốt lõi)*
- 📊 **[[sku-standardization-gmc/2026-09-21-Reconciliation-DinhDuongToUu-SKU|Báo Cáo Rà Soát Chuẩn Hóa SKU & Đối Soát Web Dinhduongtoiuu.com]]**
- 📋 **[[sku-standardization-gmc/ke-hoach-chuan-hoa-va-dong-bo-sku-dinhduongtoiuu-pancake|Kế Hoạch Chuẩn Hóa & Đồng Bộ SKU Hệ Thống (Sheet Đổi SKU 17-9-26)]]**

---

### 🔄 Sơ Đồ Lộ Trình Triển Khai 2 Hàng (Tối Ưu Khổ Trang A4 / PDF)

```mermaid
flowchart TD
    subgraph H1 ["🔹 HÀNG 1: CHUẨN HÓA DỮ LIỆU GỐC & HỆ THỐNG NỘI BỘ"]
        direction LR
        S1["<b>Bước 1: Master Sheet</b><br/>Đối soát 446 SKU chuẩn"] -->|Khóa mã| S2["<b>Bước 2: Đồng Bộ ERP</b><br/>Cập nhật KiotViet/Kho"] -->|Cấp SKU| S3["<b>Bước 3: WooCommerce</b><br/>Gán Parent & Variation"]
    end

    subgraph H2 ["🔹 HÀNG 2: XUẤT BẢN FEED & VẬN HÀNH GOOGLE ADS"]
        direction LR
        S4["<b>Bước 4: Cấu Hình Feed</b><br/>Map item_group_id & id"] -->|Tự động sync 24h| S5["<b>Bước 5: Google Merchant</b><br/>Audit lỗi & Chạy PMax Ads"]
    end

    H1 ==>|Xuất Feed chuẩn| H2

    style S1 fill:#1d3557,color:#fff,stroke:#457b9d
    style S2 fill:#457b9d,color:#fff,stroke:#1d3557
    style S3 fill:#2a9d8f,color:#fff,stroke:#264653
    style S4 fill:#e76f51,color:#fff,stroke:#e63946
    style S5 fill:#e63946,color:#fff,stroke:#d62828
```
