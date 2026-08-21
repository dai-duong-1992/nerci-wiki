---
title: Báo Cáo Đề Xuất & Đặc Tả Kỹ Thuật Chuyên Sâu Hệ Sinh Thái Số NERCI
author: Đại Dương
date: 2026-08-21
tags:
  - project
  - nerci
  - specification
  - medical-ux
  - lead-automation
summary: Báo cáo đặc tả kiến trúc kỹ thuật chuyên sâu, Medical UX, công cụ tính toán dinh dưỡng tương tác và hệ thống phễu chuyển đổi thông minh cho hệ sinh thái số NERCI & H&H Nutrition.
---

<div style="background: linear-gradient(135deg, #0f4c3a 0%, #1e7e61 100%); padding: 24px 28px; border-radius: 12px; color: white; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
  <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; opacity: 0.85; text-transform: uppercase; margin-bottom: 4px;">NERCI ARCHITECTURE & SPECIFICATION REPORT</div>
  <h1 style="margin: 0 0 8px 0; color: white; border: none; padding: 0; font-size: 24px;">ĐẶC TẢ KỸ THUẬT CHUYÊN SÂU & CHIẾN LƯỢC ĐỘT PHÁ HỆ SINH THÁI SỐ NERCI</h1>
  <div style="font-size: 13px; opacity: 0.9;">
    <strong>Người lập:</strong> Lê Đại Dương • <strong>Ngày lập:</strong> 21/08/2026 • <strong>Phạm vi:</strong> Web NERCI, Web H&H, Pancake & CRM Pipeline
  </div>
</div>

> [!abstract] TÓM TẮT ĐỊNH HƯỚNG CHIẾN LƯỢC
> Báo cáo này chuẩn hóa toàn bộ kiến trúc kỹ thuật, quy chuẩn trải nghiệm thị giác y khoa (Medical UX), bộ công cụ tính toán dinh dưỡng tương tác (Interactive Calculators), phễu thu thập dữ liệu lũy tiến (Progressive Lead Profiling) và trợ lý kê thực đơn tự động (AI Nutrition Copilot). Mục tiêu đưa nền tảng đạt chuẩn Google Speed Mobile **≥ 90 điểm**, tối ưu thời gian phản hồi đầu tiên **< 30 giây** và gia tăng tỷ lệ chuyển đổi từ traffic sang lead tư vấn **đạt 9% – 12%**.

---

## 🎨 1. QUY CHUẨN MEDICAL UX & TÂM LÝ HỌC THỊ GIÁC (VISUAL PSYCHOLOGY)

### 1.1. Hệ thống Mã màu Phân định Chuyên khoa (Disease Color-Coding)
Mọi bài viết chuyên môn, landing page và nhãn danh mục phải tuân thủ nghiêm ngặt bảng mã màu định danh y khoa:

| Nhóm Bệnh Lý / Chuyên Khoa | Mã Màu Chủ Đạo | Mã Màu Nền Nhẹ (Tag/Box) | Ứng Dụng Giao Diện |
| :--- | :---: | :---: | :--- |
| **Bệnh Thận Mạn (CKD) & Tiết Niệu** |  *(Tím Thạch Anh)* |  | Viền bài viết, huy hiệu tag , nút CTA tư vấn thận |
| **Đái Tháo Đường & Chuyển Hóa** |  *(Cam Đất Y Tế)* |  | Thẻ sản phẩm đường huyết, bảng chỉ số Glycemic Load |
| **Dinh Dưỡng Ung Bướu & Hồi Phục** |  *(Xanh Ngọc Lục)* |  | Chuyên trang chăm sóc giảm nhẹ, phác đồ dinh dưỡng phục hồi |
| **Dinh Dưỡng Nhi Khoa & Biếng Ăn** |  *(Xanh Hy Vọng)* |  | Chuyên mục tăng trưởng chiều cao, cân nặng cho trẻ |

### 1.2. Tiêu chuẩn Tiếp cận & Khả năng Đọc An toàn (Accessibility WCAG 2.1 AA)
- **Kích thước Typography:** Font  cho Body Text, tối thiểu  (Mobile) và  (Desktop); .
- **Độ tương phản (Contrast Ratio):** Tỷ lệ tương phản chữ/nền tối thiểu  (đạt mức AA).
- **Khối Neo Niềm Tin Vi Mô (Micro-Trust Anchor):** Bắt buộc đặt ở vị trí dưới tiêu đề H1 của mọi bài viết chuyên sâu:
  - *Cấu trúc HTML:* Khối chứng thực gồm: .

---

## 🧮 2. BỘ CÔNG CỤ TÍNH TOÁN DINH DƯỠNG TƯƠNG TÁC (INTERACTIVE CALCULATORS)

### 2.1. Bộ Tính Độ Lọc Cầu Thận & Nhu Cầu Đạm (eGFR & Protein Calculator)
- **Công thức tích hợp:** Phương trình  không phân biệt chủng tộc.
- **Dữ liệu đầu vào (Input):** Tuổi (Age), Giới tính (Sex), Chỉ số Creatinine huyết thanh (mg/dL hoặc µmol/L), Cân nặng chuẩn (kg).
- **Kết quả trả về (Instant Output):**
  1. Giai đoạn suy thận ( đến ).
  2. Định mức Protein tối đa được phép nạp mỗi ngày ().
  3. Lượng nước uống khuyến nghị theo độ lọc cầu thận.
- **Cơ chế chuyển đổi (Conversion Trigger):** Hiển thị nút *"Gửi toàn bộ thực đơn chi tiết 7 ngày phù hợp với chỉ số eGFR này về Zalo của tôi"*.

### 2.2. Bộ Tính Tải Lượng Đường Huyết (Glycemic Load & Carb Planner)
- **Cơ chế hoạt động:** Cho phép người dùng chọn danh sách món ăn trong ngày ➔ Hệ thống tự động tính toán tổng Tải lượng đường huyết ().
- **Phân loại kết quả:** Xanh (: An toàn) • Vàng (: Trung bình) • Đỏ (: Nguy cơ cao).

---

## 🎯 3. PHỄU THU THẬP DỮ LIỆU LEAD LŨY TIẾN (PROGRESSIVE LEAD PROFILING)

### 3.1. Cấu trúc Biểu mẫu 2 Bước (2-Step Micro-Commitment)
1. **Bước 1 — Cam kết vi mô (Zero Friction):**
   - Không yêu cầu Họ tên hay Số điện thoại.
   - Chỉ yêu cầu chọn: *Giai đoạn bệnh hiện tại* + *Chỉ số gần nhất* + *Khó khăn lớn nhất trong ăn uống*.
2. **Bước 2 — Thu nhận thông tin chuyển đổi:**
   - *"Hệ thống Chuyên gia NERCI đã tạo xong báo cáo dinh dưỡng riêng cho trường hợp của bạn. Vui lòng nhập Số điện thoại nhận kết quả qua Zalo."*
   - Tích hợp kiểm tra định dạng SĐT Việt Nam (Regex ) và kích hoạt **Cloudflare Turnstile** chống spam bot.

### 3.2. Nút Kêu Gọi Hành Động Động (Dynamic Contextual CTA)
- Hệ thống tự động nhận diện danh mục bài viết để thay đổi thông điệp nút nổi (Floating CTA Bar):
  - Chuyên mục Thận: *"Bác sĩ chuyên khoa Thận đang online • Nhận tư vấn thực đơn CKD"*.
  - Chuyên mục Tiểu đường: *"Kiểm tra thực đơn hạ đường huyết 14 ngày cùng Dược sĩ"*.

---

## 🤖 4. TRỢ LÝ KÊ THỰC ĐƠN TỰ ĐỘNG & BỘ ĐIỀU PHỐI AI (AI NUTRITION COPILOT)

### 4.1. Khung Xử lý Tự động Hóa Phân Phối Lead (Zero-Touch Lead Engine)

| Điểm Chạm (Touchpoint) | Cơ Chế Kỹ Thuật | Thời Gian Thực Thi | Hành Động Hệ Thống |
| :--- | :--- | :---: | :--- |
| **1. Khách điền Form / Tool** | Webhook POST JSON |  | Phản hồi giao diện  trong  |
| **2. Chuẩn hóa Dữ liệu** | Python Engine / Boostspace |  | Định dạng SĐT, phân loại nhóm bệnh lý ,  |
| **3. Phân Phối Pancake** | Pancake API v1/v2 |  | Tạo khách hàng trên Zalo OA (), gán tag bệnh |
| **4. AI Pre-Draft Phác Đồ** | LLM Engine |  | Tạo sẵn 03 gợi ý thực đơn và kịch bản mở đầu hội thoại cho tư vấn viên |
| **5. Đồng bộ Bitable** | Lark CLI Base Upsert |  | Lưu hồ sơ đầy đủ vào CRM () |

---

## 📊 5. BẢNG CAM KẾT CHỈ SỐ KỸ THUẬT & NGHIỆM THU (SLA METRICS)

> [!important] CHỈ SỐ BẮT BUỘC NGHIỆM THU PHÍA DEV
> - **Google PageSpeed Insights Mobile:** Đạt điểm số **≥ 90 / 100**.
> - **Largest Contentful Paint (LCP):** Đạt thời gian **< 2.2 giây** (Mạng 4G di động).
> - **Cumulative Layout Shift (CLS):** Đạt mức **< 0.05** (Tuyệt đối không giật layout khi tải ảnh).
> - **Form Webhook Latency:** Thời gian phản hồi **< 500 ms** (Xử lý đồng bộ nền bất đồng bộ).
> - **Dung lượng Tài nguyên Tĩnh:** Banner Desktop , Thumbnail bài viết , CSS , JS Bundle ban đầu .

---
*Báo cáo được biên soạn và lưu vết tự động trong cơ sở dữ liệu NERCI Wiki. Xuất bản trực tiếp tại nerci.goccuaduong.com.*
