---
tags:
  - "log"
  - "google-ads"
  - "pma"
  - "thegioinem"
topics: []
status: seed
created: 2026-08-11
updated: 2026-08-11
sources: []
source_count: 0
aliases: []
---

<div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 30px; border-radius: 20px; color: #ffffff; margin-bottom: 25px; box-shadow: 0 10px 20px rgba(0,0,0,0.15);">
    <div style="background: #ef4444; color: #ffffff; font-size: 10px; font-weight: 800; padding: 5px 12px; border-radius: 20px; display: inline-block; margin-bottom: 15px; letter-spacing: 1px;">PMA — GOOGLE ADS MONITORING AGENT · THẾ GIỚI NỆM</div>
    <div style="font-size: 30px; font-weight: 800; margin: 0 0 10px 0;">Báo Cáo Phân Tích Ma Trận Hiệu Quả Google Ads</div>
    <div style="font-size: 15px; opacity: 0.9; margin-bottom: 20px;">Đánh giá toàn diện PMax, Shopping & GA4 Traffic Conversion (11/08/2026)</div>
    <div style="display: flex; gap: 30px; border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 20px;">
        <div><span style="font-size: 9px; font-weight: 700; text-transform: uppercase; opacity: 0.8;">Người báo cáo</span><br><span style="font-size: 14px; font-weight: 700;">Đại Dương</span></div>
        <div><span style="font-size: 9px; font-weight: 700; text-transform: uppercase; opacity: 0.8;">Ngày báo cáo</span><br><span style="font-size: 14px; font-weight: 700;">11/08/2026</span></div>
        <div><span style="font-size: 9px; font-weight: 700; text-transform: uppercase; opacity: 0.8;">Tài khoản Ads ID</span><br><span style="font-size: 14px; font-weight: 700;">412-626-0781 (Thế Giới Nệm)</span></div>
    </div>
</div>

> [!abstract] NHẬN XÉT CHIẾN LƯỢC TỔNG QUAN TỪ AI PERFORMANCE AGENT
> 1. **Hiệu suất Đầu tư (ROAS):** Tổng doanh thu đạt **6.459.346.309đ**. ROAS trung bình toàn mạng đạt **429.3%**. dẫn dắt bởi nhóm PMax Dunlopillo (ROAS >660%).
> 2. **Hiệu quả Chi phí Chuyển đổi (CPA):** CPA trung bình toàn tài khoản ghi nhận **520.757đ/chuyển đổi**. trong khi CPC trung bình là **4.363đ/click**.
> 3. **Phân bổ Ngân sách Vùng:** Miền Nam chiếm 72% tổng chi tiêu và tạo ra 78% tổng doanh thu. Miền Bắc có tiềm năng tăng trưởng tốt nhưng cần tối ưu CPA nhóm Shopping.

> [!danger] BIẾN ĐỘNG TIÊU CỰC & ĐIỂM NÓNG CẦN XỬ LÝ (ALERT)
> ### ⚠️ 1. Chiến dịch ROAS Báo động & CPA Quá Cao
> | Tên Chiến Dịch | Trạng Thái | CPA Hiện Tại | ROAS | Vấn Đề Ghi Nhận |
> | :--- | :--- | :--- | :--- | :--- |
> | **tk1-mn-adwords-pmax-tu-hao-nem-viet #3** | `ENABLED` | **93.660đ** | **21.3%** | Doanh thu tạo ra quá thấp so với ngân sách chi (ROAS chìm nặng) |
> | **tk1-mn-hanoi-shopping-giuong** | `ENABLED` | **1.571.672đ** | **106.3%** | CPA ngành Giường cao gấp 3.0x CPA trung bình, biên lợi nhuận mỏng |
> | **tk1-mn-adwords-pmax-tu-hao-nem-viet #2** | `ENABLED` | **1.742.287đ** | **161.4%** | Chi phí/conversion cao bất thường, cần check lại vị trí hiển thị Vàng/Kênh |
> 
> ### ⚠️ 2. Cảnh báo Kỹ thuật & Hạ tầng Đo lường
> - **Google API Token Expiration:** Quá trình sync tự động gặp lỗi `invalid_grant: Token has been expired or revoked`. Cần refresh lại OAuth Token khẩn cấp.
> - **Chiến dịch PAUSED bị lãng phí cơ hội:** Chiến dịch PMax Phụ Kiện T4 (ROAS **514.7%**) và PMax SP Chính GA (ROAS **480.2%**) đang bị tạm dừng dù hiệu quả cực tốt.

> [!success] CHIẾN DỊCH NGÔI SAO & CƠ HỘI TĂNG TRƯỞNG (HIGH PERFORMERS)
> ### 🌟 Top 3 Chiến Dịch Mang Lại Lợi Nhuận Cao Nhất (Star Campaigns)
> | Tên Chiến Dịch | Miền | Chi Phí (VNĐ) | Doanh Thu (VNĐ) | ROAS | Yếu Tố Thành Công |
> | :--- | :--- | :--- | :--- | :--- | :--- |
> | **tk1-mn-adwords-pmax-dai-tiec-uu-dai-dunlopillo** | Miền Nam | 222.228.582đ | 1.499.494.112đ | **674.8%** | Tệp intent cao cho Nệm Lò Xo Dunlopillo, Feed chuẩn |
> | **tk1-mb-adwords-pmax-dai-tiec-uu-dai-dunlopillo** | Miền Bắc | 113.671.058đ | 753.466.230đ | **662.8%** | CPC cực rẻ (2.031đ), tối ưu hóa trải nghiệm vùng miền tốt |
> | **tk1-mn-adwords-pmax-tu-hao-nem-viet** | Miền Nam | 403.002.750đ | 1.711.910.448đ | **424.8%** | Đóng góp doanh thu lớn nhất hệ thống (>1.7 tỷ VNĐ) |

## 🎯 MA TRẬN PHÂN TÍCH CHUYÊN SÂU (MULTI-DIMENSIONAL ANALYSIS)

> [!info] Brand Dominance & Phân Bổ Danh Mục Sản Phẩm Trên Ads
> - **Dunlopillo (Nệm Lò Xo):** Là thương hiệu mang lại ROI/ROAS cao nhất toàn bộ tài khoản (chiếm ~35% tổng doanh thu từ Ads nhưng chỉ ngốn ~22% chi phí).
> - **Vạn Thành / Amando / Liên Á (Nệm Cao Su & Foam):** Thu hút lượng Click lớn nhất (trên 120.000 clicks), đóng vai trò phễu kéo khách hàng tiềm năng toàn hệ thống.
> - **Chăn Drap Gối & Phụ Kiện:** Có biên CPA siêu rẻ (~250k - 560k VNĐ), là nhóm phù hợp để tăng gia tăng giá trị đơn hàng (Cross-selling).

> [!info] Phân Tích GA4 Multi-Channel Conversion Funnel
> | Chỉ Số Traffic / Channel | Kênh Google Ads (`google/cpc`) | Toàn Bộ Kênh Trang (All Traffic) | Đánh Giá Tương Quan |
> | :--- | :--- | :--- | :--- |
> | **Lượt Truy Cập (Sessions)** | **797** | **5.804** | Google Ads đóng góp 13.7% lượng truy cập |
> | **Tỷ Lệ Thoát (Bounce Rate)** | **6.0%** | **14.2%** | Google Ads có trải nghiệm tốt gấp 2.3x mức trung bình |
> | **Chuyển Đổi Lead (Key Events)** | **29 Leads** | **104 Leads** | Google Ads trực tiếp đóng góp **27.9% tổng Lead** |
> | **Tỷ Lệ Chuyển Đổi (CVR)** | **3.64%** | **1.79%** | CVR Google Ads vượt trội gấp **2.0x** toàn kênh |

> [!example] HÀNH ĐỘNG TIÊN QUYẾT & GỢI Ý QUYẾT ĐỊNH KINH DOANH (ACTIONABLE RECOMMENDATIONS)
> 1. **Dồn Ngân Sách Cho PMax Dunlopillo:** Tăng thêm **15-20% ngân sách ngày** cho 2 chiến dịch PMax Dunlopillo (Miền Nam & Miền Bắc) vì ROAS đang chạm ngưỡng gần 670%.
> 2. **Tái Kích Hoạt Chiến Dịch PMax Phụ Kiện T4:** Bật lại ngay chiến dịch `tk1-mn-adwords-pmax-phu-kien-t4` (PAUSED) do có CPA cực thấp (**251.742đ**) và ROAS vượt **514%**.
> 3. **Tắt / Tối Ưu Chiến Dịch Tố Kém:** Tạm dừng ngay `tk1-mn-adwords-pmax-tu-hao-nem-viet #3` (ROAS 21.3%) để điều chỉnh lại tín hiệu tệp khách hàng (Asset Group / Audience Signals).
> 4. **Tối Ưu Custom Label 2 Trên GMC:** Tiến hành gắn nhãn phân loại Margin lợi nhuận trực tiếp trên Feed Google Merchant Center để PMax tập trung đẩy sản phẩm biên lợi nhuận cao.

# 📋 CHI TIẾT MA TRẬN TOÀN BỘ CHIẾN DỊCH GOOGLE ADS (11/08/2026)

## 🏪 Phân Loại Theo Loại Hình Chiến Dịch (Performance Max vs Shopping)

### 📂 Danh Mục 1: Performance Max Campaigns (PMax)
| ID Chiến Dịch | Tên Chiến Dịch | Miền | Trạng Thái | Lượt Nhấp (Clicks) | Chi Phí (VNĐ) | Chuyển Đổi | Doanh Thu (VNĐ) | CPA (VNĐ) | ROAS (%) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `22328477449` | **tk1-mn-adwords-pmax-tu-hao-nem-viet** | Miền Nam | `ENABLED` | 70.812 | 403.002.750đ | 714.3 | 1.711.910.448đ | 564.192đ | **424.8%** |
| `22400891423` | **tk1-mn-adwords-pmax-dai-tiec-uu-dai-dunlopillo** | Miền Nam | `ENABLED` | 38.841 | 222.228.582đ | 631.3 | 1.499.494.112đ | 352.017đ | **674.8%** |
| `22857258211` | **tk1-mb-adwords-pmax-dai-tiec-uu-dai-dunlopillo** | Miền Bắc | `ENABLED` | 55.969 | 113.671.058đ | 263.5 | 753.466.230đ | 431.389đ | **662.8%** |
| `22318449720` | **tk1-mn-adwords-pmax-sp-chinh-ga** | Miền Nam | `PAUSED` | 49.097 | 231.062.600đ | 412.5 | 1.109.574.103đ | 560.152đ | **480.2%** |
| `22320713514` | **tk1-mb-adwords-pmax-tu-hao-nem-viet** | Miền Bắc | `ENABLED` | 37.865 | 143.761.240đ | 122.2 | 341.158.986đ | 1.176.442đ | 237.3% |
| `23365157462` | **tk1-mn-adwords-pmax-phu-kien-t4** | Miền Nam | `PAUSED` | 15.748 | 124.813.721đ | 495.8 | 642.367.053đ | 251.742đ | **514.7%** |
| `24008091788` | **tk1-mn-adwords-pmax-tu-hao-nem-viet #2** | Miền Nam | `ENABLED` | 2.038 | 15.680.585đ | 9.0 | 25.304.040đ | 1.742.287đ | 161.4% |
| `24012522211` | **tk1-mn-adwords-pmax-tu-hao-nem-viet #3** | Miền Nam | `ENABLED` | 1.192 | 3.596.554đ | 38.4 | 767.007đ | 93.660đ | 21.3% |

### 📂 Danh Mục 2: Google Shopping Campaigns
| ID Chiến Dịch | Tên Chiến Dịch | Miền | Trạng Thái | Lượt Nhấp (Clicks) | Chi Phí (VNĐ) | Chuyển Đổi | Doanh Thu (VNĐ) | CPA (VNĐ) | ROAS (%) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `20960080312` | **tk1-mn-hanoi-shopping-giuong** | Hà Nội / Miền Bắc | `ENABLED` | 50.919 | 179.799.313đ | 114.4 | 191.131.438đ | 1.571.672đ | 106.3% |
| `20497750442` | **tk1-mn-shopping-all-product** | Miền Nam | `PAUSED` | 22.365 | 66.903.203đ | 87.7 | 184.172.892đ | 762.864đ | 275.3% |

### 📊 Bảng Tổng Hợp Tất Cả Chiến Dịch
| Chỉ Số Dữ Liệu | Tổng Giá Trị Mạng Quảng Cáo | Mức Trung Bình / Ghi Nhận |
| :--- | :---: | :---: |
| **Tổng Chi Phí Ngân Sách** | **1.504.519.606 VNĐ** | -- |
| **Tổng Doanh Thu Ghi Nhận** | **6.459.346.309 VNĐ** | -- |
| **Tổng Lượt Nhấp (Clicks)** | **344.846 Clicks** | Giá CPC trung bình: **4.363 VNĐ** |
| **Tổng Lượt Chuyển Đổi** | **2.889.1 Conversions** | Giá CPA trung bình: **520.757 VNĐ** |
| **ROAS Tổng Mạng Quảng Cáo** | **429.3%** | Vượt benchmark kỳ vọng 400% |

---
⚠️ **TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM (DISCLAIMER):**
Báo cáo phân tích ma trận Google Ads này được truy xuất và tổng hợp tự động từ dữ liệu Google Ads API & GA4 Data API của tài khoản Thế Giới Nệm (ID: 412-626-0781). Các chỉ số về doanh thu, lượt chuyển đổi và ROAS được tính toán theo mô hình gán quyền (Attribution Model) của Google Ads. Báo cáo này phục vụ mục đích phân tích chiến lược kinh doanh và tối ưu vận hành nội bộ, không có giá trị quyết toán tài chính chính thức.

<div style="text-align:center;">Made with ❤️ by Performance Marketing Team</div>