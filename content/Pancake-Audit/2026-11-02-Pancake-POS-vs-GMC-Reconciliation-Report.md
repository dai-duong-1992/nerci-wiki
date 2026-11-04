---
title: "Báo Cáo Đối Soát Danh Mục: Pancake POS vs Google Merchant Center — H&H Nutrition"
author: "Antigravity AI · Performance & Operations"
created: "2026-11-02"
updated: "2026-11-02"
timestamp: "2026-11-02 15:05:00 (GMT+7)"
tags:
  - log
  - pancake
  - gmc
  - google-merchant-center
  - inventory-reconciliation
  - dinhduongtoiuu
  - ecommerce
---

<div style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%); color: #ffffff; padding: 28px 32px; border-radius: 14px; margin-bottom: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.12);">
  <div style="font-size: 13px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; opacity: 0.85; margin-bottom: 6px;">H&H NUTRITION · OMNICHANNEL INVENTORY & GMC AUDIT</div>
  <h1 style="color: #ffffff; margin: 0 0 12px 0; font-size: 26px; font-weight: 800; line-height: 1.3;">BÁO CÁO ĐỐI SOÁT DANH MỤC SẢN PHẨM: PANCAKE POS vs GMC</h1>
  <div style="font-size: 14px; opacity: 0.92; margin-bottom: 12px;">Rà soát toàn diện giữa kho hàng thực tế Pancake POS (Shop 1022021128) và Feed Google Merchant Center (343115825)</div>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 13px; opacity: 0.95; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.25);">
    <div>🏬 <strong>Pancake POS Shop:</strong> <code>1022021128</code> (H&H Nutrition)</div>
    <div>🆔 <strong>Merchant ID:</strong> <code>343115825</code></div>
    <div>👤 <strong>Phụ trách:</strong> Lê Đại Dương · Performance & Operations</div>
    <div>🕒 <strong>Thời gian rà soát:</strong> 2026-11-02 15:05:00 (GMT+7)</div>
  </div>
</div>

> [!abstract] **Tóm Tắt Điều Hành (Executive Summary)**
> Hệ thống vừa thực hiện phiên đối soát dữ liệu 2 chiều tự động giữa **Pancake POS** (kết nối trực tiếp qua POS API) và **Google Merchant Center** (kết nối qua Google Merchant API v1):
> 1. **Quy mô danh mục Pancake POS:** Kéo thành công **834 biến thể** sản phẩm. Trong đó có **208 biến thể** đang còn tồn kho thực tế (`remain_quantity > 0`), không bị ẩn và không phải dịch vụ tư vấn/khám bệnh.
> 2. **Tỷ lệ phủ sóng trên GMC:** Đã có **160 / 208 biến thể (76.9%)** xuất hiện trên Google Merchant Center (bao gồm khớp chính xác SKU, khớp mã thành phần đóng gói Lốc/Thùng và khớp nhận diện tên sản phẩm).
> 3. **Nhóm Quà tặng & Vật phẩm Phi thương mại (16 mặt hàng):** Hàng tặng kèm, quà khuyến mãi (áo mưa, túi vải, sticker, khăn nén, sổ tay...) có giá 0đ đang được quản lý tồn kho nội bộ, **được tách riêng và không đưa lên GMC**.
> 4. **Nhóm Vi phạm Chính sách Google (2 mặt hàng):** Sản phẩm chứa Melatonin (`SP-TPCN-NB-MEL` - Melatonin 5mg) **tuyệt đối không được đưa lên Google Shopping**.
> 5. **Nhóm Sản Phẩm Thương Mại Còn Tồn Kho Thực Tế Nhưng CHƯA CÓ TRÊN GMC:** Phát hiện **30 biến thể (thuộc 26 dòng sản phẩm)** đang có sẵn hàng tại kho nhưng chưa được đồng bộ hoặc chưa tạo bài đăng trên website/GMC Feed, nổi bật nhất là **Fomeal O'ricmeal peptide (tồn 193)**, **Peptamen 400g (tồn 50)**, **Fresubin 2kcal Apricot-Peach (tồn 30)** và **Biolizin kẽm hữu cơ (tồn 19)**.

---

## 📊 I. BẢNG PHÂN BỔ TRẠNG THÁI ĐỐI SOÁT (POS VS GMC)

| Phân Loại Danh Mục | Số Lượng Biến Thể | Tỷ Lệ (%) | Đánh Giá Vận Hành |
| :--- | :---: | :---: | :--- |
| **Tổng biến thể còn hàng trên Pancake POS** | **208** | **100%** | Biến thể có tồn kho > 0 và đang kinh doanh |
| **Đã xuất hiện trên Google Merchant Center** | **160** | **`76.9%`** | 🟢 Đang được quảng bá và tìm kiếm trên Google |
| **Quà tặng kèm / Phi thương mại (Giá 0đ, Hàng tặng)** | **16** | **`7.7%`** | ⚪ Giữ quản lý kho nội bộ, không đưa lên GMC |
| **Chính sách cấm của Google (Melatonin)** | **2** | **`1.0%`** | 🔴 Không đăng Shopping để tránh bị khóa tài khoản |
| **Sản phẩm thương mại THỰC SỰ THIẾU TRÊN GMC** | **30** | **`14.4%`** | ⚠️ **Cần bổ sung lên website và nạp vào GMC Feed** |

---

## 📋 II. CHI TIẾT 26 DÒNG SẢN PHẨM THƯƠNG MẠI CÒN TỒN KHO NHƯNG CHƯA ĐĂNG GMC

*(Được sắp xếp theo thứ tự số lượng tồn kho giảm dần để ưu tiên xử lý các Hero SKUs)*

| STT | Tên Sản Phẩm Trên POS                      |                              SKU POS                               | Tồn Kho | Giá Bán (VNĐ) | Quy Cách Đóng Gói / Biến Thể Tồn                                        | Phân Khúc / Đề Xuất Xử Lý                                                                             |
| :-: | :----------------------------------------- | :----------------------------------------------------------------: | :-----: | :-----------: | :---------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
|  1  | **Fomeal_O'ricmeal peptide**               | `SPSUAFMPEPTIC125T`<br>`SPSUAFMPEPTIC125LOC`<br>`SPSUAFMPEPTIC125` | **193** |  1,350,000 đ  | • Hộp lẻ 125ml: Tồn 162<br>• Lốc 6 hộp: Tồn 27<br>• Thùng 36 hộp: Tồn 4 | 🥛 **Sữa đạm thủy phân Orgalife** (Tiêu hóa kém, hậu phẫu). Cần đưa ngay lên web.                     |
|  2  | **Peptamen**                               |                           *Chưa gắn SKU*                           | **50**  |   540,000 đ   | • Lon 400g: Tồn 50                                                      | 🥛 **Nestlé Health Science** (Sữa peptide cực hot cho ung thư/kém hấp thu). Gắn SKU và đăng web ngay! |
|  3  | **Calcium Citrate Caps**                   |                           *Chưa gắn SKU*                           | **35**  |   650,000 đ   | • Lọ 100 viên: Tồn 35                                                   | 💊 **Canxi hữu cơ Citrate** (Hấp thu cao, không lắng cặn). Cần gán mã SKU trên POS.                   |
|  4  | **Fresubin 2kcal Fibre Apricot-Peach**     |                      `SPSUAFKF2KFA200LOC1943`                      | **30**  |   420,000 đ   | • Chai 200ml: Tồn 24<br>• Lốc 4 chai: Tồn 6                             | 🥛 **Fresenius Kabi vị Mơ - Đào**. Trên GMC mới chỉ có vị Vani thường, thiếu vị Mơ Đào.               |
|  5  | **Fenugreek & Cinnamon Complex**           |                              `VTH_01`                              | **25**  |   365,500 đ   | • Hộp 30 viên: Tồn 25                                                   | 💊 **VitaHealth Cỏ cà ri & Quế** (Hạ đường huyết, kiểm soát tiểu đường).                              |
|  6  | **Cerebio** (Hộp 30 gói)                   |                               `0302`                               | **23**  |   690,000 đ   | • Hộp 30 gói: Tồn 23                                                    | 💊 **Men vi sinh Winclove B.B**. GMC đang có hộp 14 gói (`0303`), cần tạo thêm SKU hộp 30 gói.        |
|  7  | **Multivitamin Syrup Lysine & Prebiotics** |                              `VTH_02`                              | **22**  |   323,000 đ   | • Chai 120ml: Tồn 22                                                    | 👶 **Siro vitamin VitaHealth** kích thích trẻ ăn ngon, tăng đề kháng.                                 |
|  8  | **Life-Space Probiotic Baby Sachet 30PK**  |                              `IBS_4`                               | **19**  |   979,000 đ   | • Hộp 30 gói: Tồn 19                                                    | 👶 **Men vi sinh Úc cho trẻ sơ sinh & trẻ nhỏ**. (GMC mới chỉ có men IBS người lớn `IBS_3`).          |
|  9  | **Biolizin**                               |                            `TPBVSKB01`                             | **19**  |   315,000 đ   | • Chai 50ml: Tồn 19                                                     | 👶 **Kẽm sinh học hữu cơ cho trẻ em** (Sản phẩm mẹ & bé bán chạy).                                    |
| 10  | **Fomeal Peptide**                         |           `SPSUAORGFP250LOC0417`<br>`SPSUAORGFP250T0417`           | **18**  |  2,670,000 đ  | • Lốc 3 hộp: Tồn 17<br>• Thùng 30 hộp: Tồn 1                            | 🥛 **Dinh dưỡng y học Orgalife** dạng đóng lốc/thùng.                                                 |
| 11  | **Zinc Citrate 30 mg**                     |                            `ZINC_MADI`                             | **15**  |   786,000 đ   | • Lọ 100 viên: Tồn 15                                                   | 💊 **Kẽm hữu cơ Madi**. Bổ sung vi chất miễn dịch.                                                    |
| 12  | **Enzymax Duo Biotics**                    |                        `SP-TPCN-MHD-EZDUO`                         | **13**  |   500,000 đ   | • Hộp 20 viên: Tồn 13                                                   | 💊 **Men tiêu hóa & vi sinh Tây Ban Nha**.                                                            |
| 13  | **Kinder Omega-3 Syrup**                   |                           *Chưa gắn SKU*                           | **10**  |   550,000 đ   | • Chai 100ml: Tồn 10                                                    | 👶 **Siro Omega-3 Doppelherz cho trẻ**. Cần gắn mã SKU POS.                                           |
| 14  | **Bambi Nano Curcumin**                    |                            `TPBVSKNC01`                            |  **8**  |   360,000 đ   | • Hộp 30 viên: Tồn 8                                                    | 💊 **Nano Curcumin nghệ**. Hỗ trợ dạ dày, liền sẹo.                                                   |
| 15  | **Lean Pro Thyro LID**                     |                               `0875`                               |  **8**  |   748,000 đ   | • Lon 900g: Tồn 8                                                       | 🥛 **Sữa kiêng iod Nutricare** cho bệnh nhân ung thư tuyến giáp xạ trị I-131.                         |
| 16  | **PEG 3350 Baby**                          |                             `BNTS3350`                             |  **7**  |   270,000 đ   | • Hộp 20 gói: Tồn 7                                                     | 👶 **Nhuận tràng điều trị táo bón cho trẻ nhỏ**.                                                      |
| 17  | **Leanmax Ligos**                          |                           *Chưa gắn SKU*                           |  **6**  |   320,000 đ   | • Lon 400g: Tồn 6                                                       | 🥛 **Sữa dinh dưỡng cho bệnh nhân gan** (Nutricare).                                                  |
| 18  | **Ginkgo 2500 with DHA**                   |                              `VTH_03`                              |  **5**  |   785,000 đ   | • Lọ 60 viên: Tồn 5                                                     | 💊 **VitaHealth Ginkgo tuần hoàn não**.                                                               |
| 19  | **Blackmores - Cholesterol Health**        |                            `BLM_CHOLES`                            |  **5**  |   690,000 đ   | • Lọ 60 viên: Tồn 5                                                     | 💊 **Viên uống hạ mỡ máu Blackmores**.                                                                |
| 20  | **Mequib 1**                               |                           *Chưa gắn SKU*                           |  **4**  |   140,000 đ   | • Chai 10ml: Tồn 4                                                      | 👶 **Vitamin K2 (MK7) + D3 nhỏ giọt**.                                                                |
| 21  | **Infogos** (Hộp 30 gói)                   |                               `1037`                               |  **2**  |   130,000 đ   | • Hộp 30 gói: Tồn 2                                                     | 💊 **Chất xơ hòa tan**. (GMC có hộp 90 gói `1038`, thiếu hộp 30 gói).                                 |
| 22  | **Diben Powder Vanilla**                   |                           *Chưa gắn SKU*                           |  **2**  |   650,000 đ   | • Lon 500g: Tồn 2                                                       | 🥛 **Sữa bột tiểu đường Fresenius Kabi**.                                                             |
| 23  | **Kidney 2**                               |                           *Chưa gắn SKU*                           |  **1**  |   599,000 đ   | • Lon 900g: Tồn 1                                                       | 🥛 **Sữa cho người suy thận chạy thận**.                                                              |
| 24  | **Laxi Plus LezEnfant**                    |                           *Chưa gắn SKU*                           |  **1**  |   286,000 đ   | • Hộp 12 lọ: Tồn 1                                                      | 👶 **Nhuận tràng thảo dược Ý cho trẻ**.                                                               |
| 25  | **Doppelherz aktiv Coenzyme Q10**          |                           *Chưa gắn SKU*                           |  **1**  |   373,000 đ   | • Hộp 30 viên: Tồn 1                                                    | 💊 **CoQ10 Doppelherz tim mạch**.                                                                     |
| 26  | **Doppelherz aktiv Belle Anti-Aging**      |                           *Chưa gắn SKU*                           |  **1**  |   330,000 đ   | • Hộp 30 viên: Tồn 1                                                    | 💊 **Viên chống lão hóa Doppelherz**.                                                                 |

---

## 🎁 III. DANH SÁCH 16 QUÀ TẶNG & VẬT PHẨM KÈM THEO (KHÔNG ĐƯA LÊN GMC)

Các mặt hàng sau đây có giá bán 0 VNĐ hoặc là vật phẩm quà tặng phục vụ đóng gói đơn hàng tại kho. Theo chính sách Google Merchant Center (*Inaccurate price / Free items without commercial purpose*), **tuyệt đối không đăng nhóm này lên GMC**:

1. `STICKER`: Sticker Hành trình khám phá dinh dưỡng cùng Guru (Tồn 1.394)
2. `HC101`: C-Care (Vitamin C 1200MG) - Hàng tặng kèm (Tồn 46)
3. `HMPN01`: Áo Mưa Pharma Nord (Tồn 27)
4. `HT_TVORGALIFE`: Túi vải Orgalife (Tồn 25)
5. `HT_KGN`: Khăn giấy nén H&H (Tồn 18)
6. `HT_SO NESTLE`: Sổ ghi chép Nestlé (Tồn 12)
7. `SP-TPCN-BR-OPTIBAC`: Optibac Babies & Children - Gói tặng (Tồn 12)
8. `HHCTS01`: Hộp chia thuốc H&H (Tồn 6)
9. `HT_HUNTE01`: Bình uống nước Trẻ em (Tồn 5)
10. `Z3ND01`: Viên uống bổ sung kẽm Zinc 30 Days (Tồn 3)
11. `DTPF01`: Dây truyền phẩm Flocare (Tồn 3)
12. `HADTE01`: Bát ăn dặm trẻ em (Tồn 2)
13. `HT15N01`: Milk Thistle 1000mg Natures (Tồn 1)
14. `HR6M01`: Bộ Rổ 6 Món (Tồn 1)
15. `HST01`: Sổ tay H&H (Tồn 1)

---

## 💡 IV. 3 NGUYÊN NHÂN CỐT LÕI & ĐỀ XUẤT HÀNH ĐỘNG KỸ THUẬT

### 1. Hiện tượng "Chưa gắn SKU trên POS" (9 / 26 sản phẩm)
* **Vấn đề:** Các sản phẩm như **Peptamen**, **Calcium Citrate Caps**, **Kinder Omega-3**, **Leanmax Ligos**... đang được tạo trên Pancake POS nhưng để trống ô mã SKU (`custom_id`).
* **Hậu quả:** Khi hệ thống website hoặc feed XML tự động đồng bộ theo SKU sẽ không tìm thấy mã đối chiếu, dẫn đến sản phẩm bị bỏ rơi ngoài feed quảng cáo Shopping.
* **Hành động:** Nhân viên kho/vận hành cần điền ngay mã SKU chuẩn vào Pancake POS cho 9 sản phẩm này.

### 2. Thiếu quy cách đóng gói lẻ (Gói lẻ / Chai lẻ vs Lốc / Thùng)
* **Vấn đề:** Nhiều sản phẩm tại kho đang lưu tồn kho dạng chai lẻ hoặc hộp nhỏ (như *Fomeal O'ricmeal peptide 125ml*, *Cerebio hộp 30 gói*, *Infogos 30 gói*), nhưng trên website / GMC Feed chỉ có SKU dạng Lốc hoặc dạng Hộp lớn.
* **Hành động:** Bổ sung các biến thể đóng gói nhỏ lên website WooCommerce và gắn nhãn để plugin Feed đẩy lên GMC. Khách hàng tìm kiếm sản phẩm lẻ trên Google Shopping có tỷ lệ click và chuyển đổi rất cao.

### 3. Ưu tiên hàng đầu (Top Priority)
* Đẩy ngay **3 Hero SKUs có số lượng tồn kho lớn nhất** lên GMC:
  1. **Fomeal_O'ricmeal peptide (Tồn 193)** ➔ Dòng sản phẩm độc quyền giá trị cao.
  2. **Peptamen lon 400g (Tồn 50)** ➔ Sữa Nestlé thương hiệu cực mạnh, nhu cầu tìm kiếm Google cực lớn.
  3. **Biolizin kẽm sinh học (Tồn 19)** ➔ Sản phẩm vi chất trẻ em bán chạy hàng đầu.

---
⚠️ **Báo cáo được khởi tạo tự động từ hệ thống đối soát Pancake POS API và Google Merchant API v1 lúc 2026-11-02 15:05:00 (GMT+7).**
