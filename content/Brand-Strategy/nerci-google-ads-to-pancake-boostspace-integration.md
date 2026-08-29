---
title: "Kiến Trúc & Hướng Dẫn Cấu Hình Webhook Tích Hợp Google Ads Lead Form Sang Pancake CRM Qua Boostspace"
author: "Đại Dương · Performance & Operations"
date: 2026-08-27
tags:
  - project
  - nerci
  - google-ads
  - pancake
  - boostspace
  - automation
  - webhook
  - crm
summary: "Tài liệu thiết kế kiến trúc trực tiếp (Direct Pipeline), sơ đồ Excalidraw và hướng dẫn từng bước cấu hình Webhook Relay trên Boostspace Integrator (Make) để tự động thu thập Lead từ Google Ads Search/PMax và đẩy trực tiếp vào Pancake CRM 10 Kênh."
sources: []
source_count: 0
---

<div style="background: linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%); padding: 28px 32px; border-radius: 16px; color: white; margin-bottom: 24px; box-shadow: 0 10px 25px rgba(194, 65, 12, 0.25);">
  <div style="font-size: 11px; font-weight: 800; letter-spacing: 1.5px; opacity: 0.9; text-transform: uppercase; margin-bottom: 6px; background: rgba(255,255,255,0.15); display: inline-block; padding: 4px 10px; border-radius: 20px;">
    NERCI DIRECT AUTOMATION PIPELINE · BOOSTSPACE INTEGRATOR
  </div>
  <h1 style="margin: 4px 0 10px 0; color: white; border: none; padding: 0; font-size: 26px; font-weight: 800;">
    ⚡ GOOGLE ADS LEAD FORM ➔ PANCAKE CRM DIRECT
  </h1>
  <div style="font-size: 14px; opacity: 0.92; line-height: 1.6;">
    Quy trình tinh gọn: Bóc tách dữ liệu từ Google Ads Lead Form, chuẩn hóa số điện thoại và đẩy thẳng vào Pancake CRM (10 Kênh) qua Boostspace Integrator
  </div>
  <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.2); display: flex; flex-wrap: wrap; gap: 20px; font-size: 12px;">
    <span>🎯 <strong>Nguồn:</strong> Google Ads Lead Form</span>
    <span>⚡ <strong>Middleware:</strong> Boostspace Integrator (Make)</span>
    <span>💬 <strong>Đích:</strong> Pancake CRM (10 Kênh Tương Tác)</span>
    <span>📊 <strong>Sơ đồ:</strong> [[NERCI-Google-Ads-To-Pancake-Boostspace-Pipeline.excalidraw|Mở Sơ Đồ Excalidraw]]</span>
  </div>
</div>

> [!abstract] TỔNG QUAN QUY TRÌNH TINH GỌN (DIRECT PIPELINE)
> Quy trình được tối ưu hóa trực tiếp: Khi khách gửi Lead Form trên Google Ads, **Boostspace Integrator** lập tức nhận Webhook POST, xác thực bảo mật, chuẩn hóa số điện thoại và gọi thẳng vào API của **Pancake CRM** (`pages.fm`), giúp đội ngũ tư vấn viên/bác sĩ nhận Lead và xử lý ngay lập tức trên giao diện Pancake.

---

## 🎨 1. SƠ ĐỒ KIẾN TRÚC LUỒNG DỮ LIỆU TRỰC TIẾP (EXCALIDRAW & MERMAID)

👉 **Mở Bản đồ Visual Excalidraw trực tiếp:** [[NERCI-Google-Ads-To-Pancake-Boostspace-Pipeline.excalidraw|NERCI-Google-Ads-To-Pancake-Boostspace-Pipeline.excalidraw]]

```mermaid
sequenceDiagram
    autonumber
    actor Khach as 👤 Khách Hàng
    participant GAds as 🎯 Google Ads (Lead Form Asset)
    participant Boost as ⚡ Boostspace Integrator (Webhook Relay)
    participant Pancake as 💬 Pancake CRM (pages.fm)

    Khach->>GAds: 1. Điền Form (Họ tên, SĐT, Nhu cầu khám bệnh)
    GAds->>Boost: 2. Bắn Webhook POST (Kèm google_key xác thực)
    Note over Boost: 3. Lọc bảo mật & Chuẩn hóa SĐT (+84 ➔ 0...)
    Boost->>Pancake: 4. POST /api/v1/pages/{id}/customers (Tạo Khách + Gắn Tag)
    Boost-->>GAds: 5. Phản hồi HTTP 200 OK (< 10 giây)
    Note over Pancake: 6. Bác sĩ / Tư vấn viên nhận Lead & Gọi ngay
```

---

## ⚙️ 2. HƯỚNG DẪN CẤU HÌNH 5 MODULES TRÊN BOOSTSPACE INTEGRATOR (MAKE)

### 🔹 Module 1: Webhook Trigger (Custom Webhook)
1. Trong Boostspace Integrator, tạo một Scenario mới đặt tên: **`NERCI - Google Ads Lead Form to Pancake CRM Direct`**.
2. Thêm module đầu tiên: **`Custom Webhook`** (Trigger).
3. Đặt tên Webhook: `Google Ads Leads Receiver`.
4. Sao chép đường dẫn Webhook URL được cấp, ví dụ:  
   `https://hook.eu1.boost.space/abcxyz123456789`

### 🔹 Module 2: Xác Thực Bảo Mật & Lọc Dữ Liệu (Security Filter)
* Thiết lập bộ lọc giữa Module 1 và Module 3:
  * Điều kiện: `1.google_key` **Equal to** `nerci_secure_lead_key_2026`
  * Ngăn chặn các request giả mạo hoặc spam không phải từ Google Ads.

### 🔹 Module 3: Chuẩn Hóa & Bóc Tách Dữ Liệu (Tools - Set Variables)
Gói tin Google Ads gửi về có cấu trúc mảng `user_column_data`. Sử dụng hàm của Make/Boostspace để trích xuất:

| Biến Cần Gán | Công Thức Trích Xuất Trên Boostspace | Ý Nghĩa Dữ Liệu |
| :--- | :--- | :--- |
| `FullName` | `get(map(1.user_column_data; "string_value"; "column_id"; "FULL_NAME"); 1)` | Họ và tên khách hàng |
| `RawPhone` | `get(map(1.user_column_data; "string_value"; "column_id"; "PHONE_NUMBER"); 1)` | Số điện thoại gốc |
| `CleanPhone` | `replace(RawPhone; "^(\+84|84)"; "0")` | Chuẩn hóa số điện thoại về dạng `09...` |
| `Email` | `get(map(1.user_column_data; "string_value"; "column_id"; "EMAIL"); 1)` | Địa chỉ Email |
| `Inquiry` | `get(map(1.user_column_data; "string_value"; "column_id"; "CUSTOM_QUESTION_1"); 1)` | Bệnh lý / Nhu cầu tư vấn |
| `CampaignID` | `1.campaign_id` | ID chiến dịch quảng cáo |

### 🔹 Module 4: Đẩy Dữ Liệu Sang Pancake CRM (HTTP Request)
Thêm module **`HTTP - Make a request`**:
* **URL:** `https://pages.fm/api/v1/pages/684724838048995/customers` *(hoặc Page ID tương ứng)*
* **Method:** `POST`
* **Headers:**
  * `Authorization`: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` *(Pancake User Token)*
  * `Content-Type`: `application/json`
* **Body Type:** `Raw (JSON)`
* **Request Content:**
```json
{
  "name": "{{FullName}}",
  "phone_number": "{{CleanPhone}}",
  "notes": "🎯 Google Ads Lead Form | Chiến dịch ID: {{CampaignID}} | Nhu cầu: {{Inquiry}} | Thời gian: {{formatDate(now; 'YYYY-MM-DD HH:mm')}}",
  "tags": [
    "Google Ads",
    "Hot Lead",
    "Khám Bệnh"
  ]
}
```

### 🔹 Module 5: Phản Hồi HTTP 200 Cho Google Ads (Webhook Response)
* **Module:** `Webhook - Webhook Response`
* **Status:** `200`
* **Body:** `{"status": "success", "message": "Lead received successfully"}`
* ⚠️ **Lưu ý tối quan trọng:** Google Ads yêu cầu phản hồi HTTP 200 trong vòng **dưới 10 giây**. Nếu phản hồi chậm, Google sẽ báo lỗi xác thực Webhook.

---

## 🎯 3. CÁCH CÀI ĐẶT TRÊN GIAO DIỆN GOOGLE ADS

1. Đăng nhập tài khoản Google Ads **Viện Dinh Dưỡng NERCI (615-344-1915)** hoặc **H&H Nutrition (605-311-2652)**.
2. Điều hướng đến: **Quảng cáo & Thành phần** ➔ **Thành phần (Assets)** ➔ **Biểu mẫu khách hàng tiềm năng (Lead Form)**.
3. Kéo xuống mục **"Tùy chọn phân phối khách hàng tiềm năng khác"**:
   * Tích chọn **"Quản lý khách hàng tiềm năng bằng webhook"**.
   * **URL Webhook:** Dán URL lấy từ Module 1 của Boostspace (`https://hook.eu1.boost.space/...`).
   * **Khóa xác thực (Key):** Nhập `nerci_secure_lead_key_2026`.
4. Bấm nút **"Gửi dữ liệu thử nghiệm" (Send test data)**.
5. Kiểm tra lịch sử chạy (History Run) trên Boostspace Integrator: Nếu hiển thị màu xanh và trên Pancake xuất hiện khách hàng test thì đã thành công 100%!

---

## 📋 4. DANH SÁCH THẺ GẮN (TAGS) TỰ ĐỘNG PHÂN LUỒNG TRÊN PANCAKE

Dựa trên chiến dịch khách hàng điền form, hệ thống sẽ tự động gán nhãn chuyển đổi:
* 🟢 `tag_20`: **Đủ tiêu chuẩn (SQL / Lead chất lượng)**
* 🟡 `tag_28`: **Tiềm Năng (MQL)**
* 🎯 Thẻ nguồn: `Google Ads`, `Lead Form Extension`
* 🏥 Thẻ chuyên khoa: `CKD_Thận_Mạn`, `Đái_Tháo_Đường`, `Khám_Nhi`, `Học_Nghề_Dinh_Dưỡng`

---

## 📦 5. TỆP BLUEPRINT JSON & CÔNG CỤ KIỂM THỬ SIMULATOR (1-CLICK SETUP)

Hệ thống đã chuẩn bị sẵn bộ công cụ tự động hóa hoàn chỉnh trong kho lưu trữ:

### 1. File Blueprint JSON Import Thẳng Vào Boostspace Integrator
* 📄 **Đường dẫn tệp:** [`01 Projects/NERCI-Automation/boostspace_google_ads_to_pancake_blueprint.json`](file:///Users/ledaiduong/Library/CloudStorage/OneDrive-Personal/Duong%20Obsidian%20Vault/01%20Projects/NERCI-Automation/boostspace_google_ads_to_pancake_blueprint.json)
* **Cách import vào Boostspace:**
  1. Trong Boostspace Integrator ➔ Tạo Scenario mới.
  2. Bấm vào biểu tượng dấu **3 chấm `...`** ở thanh công cụ dưới cùng ➔ Chọn **Import Blueprint**.
  3. Tải tệp `boostspace_google_ads_to_pancake_blueprint.json` lên ➔ Hệ thống tự động vẽ đầy đủ 4 modules, cấu hình sẵn bộ lọc bảo mật, chuẩn hóa số điện thoại `+84 ➔ 0` và mapping biến vào Pancake CRM!

### 2. Kịch Bản Giả Lập Bắn Thử Lead (Google Lead Simulator)
* 🧪 **Đường dẫn script:** [`01 Projects/NERCI-Automation/scripts/test_google_lead_simulator.py`](file:///Users/ledaiduong/Library/CloudStorage/OneDrive-Personal/Duong%20Obsidian%20Vault/01%20Projects/NERCI-Automation/scripts/test_google_lead_simulator.py)
* **Câu lệnh chạy thử nghiệm với Webhook URL thật:**
  ```bash
  .venv/bin/python "01 Projects/NERCI-Automation/scripts/test_google_lead_simulator.py" "https://hook.eu1.boost.space/YOUR_WEBHOOK_ID" 1
  ```
  *(Tham số `1`: Lead Suy thận CKD, `2`: Lead Tiểu đường, `3`: Lead Đào tạo nghề Academy)*.

---
*Tài liệu kỹ thuật được xây dựng và chuẩn hóa bởi Performance Marketing & Operations Team.*

