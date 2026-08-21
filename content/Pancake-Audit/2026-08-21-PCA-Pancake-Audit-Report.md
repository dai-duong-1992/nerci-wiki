---
title: 'Báo Cáo Đánh Giá Hiện Trạng & Kiểm Toán Pancake 4 Kênh (21/08/2026)'
date: 2026-08-21
author: Pancake Audit Agent
tags:
  - log
  - nerci
  - pancake
  - crm-audit
sources: []
---

<div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); padding: 24px; border-radius: 12px; margin-bottom: 24px; color: white; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
  <div style="font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; opacity: 0.85; margin-bottom: 6px;">
    PCA — PANCAKE CONVERSATION AUDIT AGENT
  </div>
  <div style="font-size: 26px; font-weight: 800; margin-bottom: 12px; line-height: 1.3;">
    Báo Cáo Đánh Giá Hiện Trạng & Kiểm Toán Vận Hành Pancake 4 Kênh
  </div>
  <div style="display: flex; gap: 18px; font-size: 13px; opacity: 0.9; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px; flex-wrap: wrap;">
    <span><b>Người Báo Cáo:</b> Đại Dương & Pancake Audit Agent</span>
    <span><b>Ngày Báo Cáo:</b> 21/08/2026</span>
    <span><b>Hệ Sinh Thái:</b> NERCI & H&H Nutrition</span>
    <span><b>Phạm Vi:</b> 4 Kênh (TikTok, Zalo OA, Web NERCI, Web H&H)</span>
  </div>
</div>

> [!abstract] NHẬN XÉT CHIẾN LƯỢC TỪ PCA AGENT
> 1. **Độ phủ kênh đa nền tảng tốt:** Hệ thống đang kết nối thành công 4 kênh tương tác trọng yếu (TikTok Shop/Chat, Zalo OA, Website NERCI, Website H&H) với 11 nhân sự tư vấn thường trực.
> 2. **Điểm nghẽn phân luồng nghiêm trọng trên TikTok (93.3% Unassigned):** Kênh TikTok *BS Hùng Dinh Dưỡng - NERCI* phát sinh lưu lượng chat rất lớn nhưng có đến **56/60 hội thoại (93.3%) chưa được gán cho nhân viên phụ trách**, dẫn đến nguy cơ phản hồi chậm trễ và bỏ sót khách hàng tiềm năng.
> 3. **Zalo OA là kênh vận hành chuẩn mực nhất (100% Assigned):** Toàn bộ 60/60 hội thoại trên Zalo OA đều được phân bổ chính xác cho đội ngũ chuyên viên chăm sóc.
> 4. **Hệ thống Tags 25 nhãn cần tái cấu trúc:** Bộ tag hiện tại tập trung nặng vào lý do từ chối cước gọi/telesale (15 nhãn tiền tố ), thiếu hoàn toàn các tag phân loại chuyên khoa bệnh lý (*Thận CKD, Đái tháo đường, Dinh dưỡng Nhi*) và phân loại phễu (*Khóa học Sơ cấp nghề, Menu 1-1*).

---

> [!danger] CÁC ĐIỂM NGHẼN & RỦI RO CẦN XỬ LÝ GẤP (BOTTLENECKS)
> - **Tồn đọng Lead TikTok chưa gán nhân viên:** 56/60 hội thoại gần nhất trên TikTok  () rơi vào trạng thái vô chủ (Unassigned), nhân viên chỉ trực thụ động thay vì nhận phân bổ tự động.
> - **Thiếu cơ chế Webhook đồng bộ tự động sang Lark CRM:** Toàn bộ lead phát sinh trên Pancake hiện chưa được đẩy tự động sang bảng **** trên Lark Suite, làm gián đoạn luồng chăm sóc của Bác sĩ.
> - **Lệch pha thuật ngữ Tag:** Nhãn tag trên Pancake chưa đồng bộ với quy chuẩn DO/DON'T và 6 Trụ Cột Truyền Thông của Viện NERCI.

---

> [!success] ĐIỂM SÁNG VẬN HÀNH & HIỆU SUẤT TÍCH CỰC
> - **Tỷ lệ phản hồi tin nhắn đạt 100% (Unreplied = 0):** Toàn bộ các hội thoại trên cả 4 kênh đều đã được trả lời (không có tin nhắn bị bỏ rơi).
> - **Đội ngũ tư vấn đông đảo:** 11 chuyên viên hoạt động tích cực trên hệ thống sẵn sàng tiếp nhận lead (Emma Pham, Phương Uyên, Anna Đậu, Hồng Yến, Xuân Diệu, Bảo Như, Dương Ngọc, Đặng Thư, Thiện Nhân, Thảo My, Lê Đại).
> - **API Token hoạt động ổn định:** User Access Token và Page Access Tokens kết nối hoàn hảo với OpenAPI 3.0 của Pancake.

---

## 📊 I. BẢNG TỔNG HỢP KIỂM TOÁN 4 KÊNH PANCAKE

| STT | Tên Kênh / Trang | Nền Tảng | Page ID | Số Users | Tỉ Lệ Đã Gán (Assigned) | Tồn Chưa Gán (Unassigned) | Tồn Chưa Trả Lời (Unreplied) | Đánh Giá Vận Hành |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **1** | **BS Hùng Dinh Dưỡng - NERCI** | TikTok Shop / Chat |  | 11 | 4/60 (**6.7%**) | 🔴 **56** | 0 | ⚠️ Cần bật Round Robin ngay |
| **2** | **Viện Nghiên cứu & Tư vấn dinh dưỡng** | Zalo Official Account |  | 9 | 60/60 (**100%**) | 🟢 **0** | 0 | 🏆 Vận hành xuất sắc |
| **3** | **Nerci** | Website Chat Plugin |  | 8 | 53/60 (**88.3%**) | 🟡 **7** | 0 | Ổn định |
| **4** | **H&H** | Website Chat Plugin |  | 5 | 57/60 (**95.0%**) | 🟢 **3** | 0 | Ổn định |

---

## 👥 II. MA TRẬN PHÂN BỔ NHÂN SỰ TƯ VẤN TRÊN CÁC KÊNH

| Tên Nhân Viên Tư Vấn | TikTok () | Zalo OA () | Web NERCI | Web H&H | Tổng Kênh Trực |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Dương Lê Đại** | ✅ | ✅ | ✅ | ✅ | **4/4** |
| **Đặng Thư** | ✅ | ✅ | ✅ | ✅ | **4/4** |
| **Emma Pham** | ✅ | ✅ | ✅ | ❌ | **3/4** |
| **Nguyễn Phương Uyên** | ✅ | ✅ | ✅ | ❌ | **3/4** |
| **Anna Đậu** | ✅ | ✅ | ✅ | ❌ | **3/4** |
| **Nguyễn Vũ Bảo Như** | ✅ | ✅ | ✅ | ❌ | **3/4** |
| **Nguyễn Thiện Nhân** | ✅ | ✅ | ✅ | ❌ | **3/4** |
| **Hồ Dương Xuân Diệu** | ✅ | ✅ | ❌ | ✅ | **3/4** |
| **Nguyễn Thị Hồng Yến** | ✅ | ✅ | ❌ | ✅ | **3/4** |
| **Thảo My** | ✅ | ❌ | ✅ | ✅ | **3/4** |
| **Dương Ngọc** | ✅ | ❌ | ❌ | ❌ | **1/4** |

---

## 🏷️ III. CƠ CẤU 25 NHÃN (TAGS) HIỆN HÀNH & ĐỀ XUẤT CHUẨN HÓA

### 1. Phân Tích Cơ Cấu Tags Hiện Tại:
- **Nhóm Xử Lý Liên Hệ (6 tags):** , , , , , .
- **Nhóm Lý Do Thất Bại / Không Chốt (15 tags ):** , , , , , , , , , , , , , , .
- **Nhóm Chuyển Đổi & Tiềm Năng (4 tags):** , , , .

### 2. Đề Xuất Bổ Sung Bộ Tag Chuyên Môn NERCI (6 Trụ Cột):


---

## 🚀 IV. LỘ TRÌNH TỐI ƯU HÓA AUTOMATION & AI TIẾP THEO

1. **Bước 1 (Gấp): Cấu hình Round Robin cho TikTok Channel:**
   - Kích hoạt endpoint  để tự động xoay vòng chia khách đều cho 11 nhân sự.
2. **Bước 2: Thiết lập Webhook Receiver kết nối Lark CRM:**
   - Đăng ký Webhook  và  trên Pancake gửi dữ liệu về Server trung gian để tự động tạo bản ghi mới tại ****.
3. **Bước 3: Tích hợp AI Bot Sàng Lọc Sơ Bộ:**
   - Sử dụng AI lọc nhanh tin nhắn có số điện thoại hoặc nhu cầu can thiệp dinh dưỡng để gắn tag và chuyển thẳng cho Bác sĩ.

---

> [!warning] ⚠️ TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM (DISCLAIMER)
> Báo cáo này được trích xuất và tổng hợp tự động từ hệ thống Pancake API chính thức (Pages.fm) vào ngày 21/08/2026. Số liệu đo lường dựa trên mẫu dữ liệu hội thoại thực tế của từng kênh. Báo cáo nhằm phục vụ mục đích kiểm toán quy trình vận hành và hoạch định chiến lược tự động hóa của Viện NERCI & H&H Nutrition.
