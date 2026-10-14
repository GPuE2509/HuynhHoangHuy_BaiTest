## 📌 Mục Lục

1. [Công Nghệ Sử Dụng (Tech Stack)](#-1-công-nghệ-sử-dụng-tech-stack)
2. [Cấu Trúc Thư Mục & Tổ Chức Mã Nguồn](#-2-cấu-trúc-thư-mục--tổ-chức-mã-nguồn)
3. [Kiến Trúc Ứng Dụng & Mô Hình Lean MVC](#-3-kiến-trúc-ứng-dụng--mô-hình-lean-mvc)
4. [Chi Tiết Các Section & Tính Năng Giao Diện](#-4-chi-tiết-các-section--tính-năng-giao-diện)
5. [Tối Ưu Giao Diện Đa Thiết Bị (Responsive Design)](#-5-tối-ưu-giao-diện-đa-thiết-bị-responsive-design)
6. [Bảng Màu Quy Chuẩn (Design Tokens)](#-6-bảng-màu-quy-chuẩn-design-tokens)
7. [Hướng Dẫn Cài Đặt & Khởi Chạy](#-7-hướng-dẫn-cài-đặt--khởi-chạy)

---

## 💻 1. Công Nghệ Sử Dụng (Tech Stack)

| Hạng mục | Công nghệ | Phiên bản | Vai trò & Mục đích |
| :--- | :--- | :--- | :--- |
| **Frontend Core** | **React** | `^19.2.8` | Xây dựng UI Component hóa hiện đại, tối ưu hiệu năng render |
| **DOM Renderer** | **ReactDOM** | `^19.2.8` | Quản lý DOM ảo và hydration |
| **Build Tool & Dev Server** | **Vite** | `^8.3.0` | Khởi động server cực nhanh, Hot Module Replacement (HMR) tức thì |
| **CSS Styling** | **Tailwind CSS** | `^4.3.3` | Tiện ích tiện dụng thế hệ mới nhất, tích hợp trực tiếp qua `@tailwindcss/vite` |
| **Routing** | **React Router DOM** | `^7.18.4` | Định tuyến client-side giữa `HomePage` (`/`) và `DetailPage` (`/detail`) |
| **State Management** | **React Context + useReducer** | Chuẩn React 19 | Quản lý trạng thái giỏ hàng (Cart State) toàn cục |
| **Design Pattern** | **Lean MVC** | Kiến trúc module | Phân tách rành mạch Model, View và Controller cho luồng tìm kiếm & dữ liệu |
| **Linting & Code Quality** | **ESLint** | `^10.10.0` | Đảm bảo tiêu chuẩn code sạch và phát hiện lỗi sớm |

---

## 📂 2. Cấu Trúc Thư Mục & Tổ Chức Mã Nguồn

```
xtech789Test/
├── index.html                   # Entry HTML chính của ứng dụng
├── vite.config.js               # Cấu hình Vite & Tailwind CSS v4 plugin
├── package.json                 # Khai báo dependencies và scripts
├── design-analysis.md           # Tài liệu phân tích thiết kế ban đầu
├── README.md                    # Tài liệu miêu tả tổng thể dự án
├── public/                      # Static assets công khai
└── src/
    ├── main.jsx                 # Điểm khởi chạy React DOM
    ├── App.jsx                  # Bọc CartProvider và AppRoutes
    ├── index.css                # CSS toàn cục, container-custom, scrollbar utilities
    ├── assets/                  # Tài nguyên hình ảnh, biểu tượng & banner gốc
    │   ├── awardSeal/           # Huy hiệu các giải thưởng quốc tế (AVIF, PNG)
    │   ├── banner/              # Banner Hero, Sub-banners, LumiSpa, SideBanner
    │   ├── images/              # Ảnh sản phẩm tách nền, seal khách hàng thân thiết
    │   ├── logoFooter/          # Logo các cổng thanh toán (Visa, Mastercard, PayPal...)
    │   └── news/                # Hình ảnh bài viết tin tức và banner tin tức
    ├── components/              # Các UI Component độc lập, tái sử dụng
    │   ├── common/              # Component dùng chung (SectionTitle, Icons)
    │   ├── header/              # TopBar, MainHeader, SearchBar, Navbar
    │   ├── hero/                # HeroSlider, SubBanners
    │   ├── products/            # MostPopularSection, SideBanner, ProductTabs, ProductCarousel, ProductCard
    │   ├── promotional/         # LumiSpaBanner (khối quảng bá ageLOC LumiSpa iO)
    │   ├── awards/              # AwardsSection (Euromonitor banner + dải giải thưởng)
    │   ├── brandStory/          # NuSkinWaySection (Stats counter + 2 câu chuyện thương hiệu)
    │   ├── news/                # NewsSection (Carousel tin tức + vertical banner)
    │   └── footer/              # FooterTop (3 cột thông tin), FooterBottom (Bản quyền & Payment)
    ├── context/
    │   └── CartContext.jsx      # Quản lý giỏ hàng toàn cục qua useReducer (Action/Dispatcher)
    ├── controllers/
    │   └── searchController.js  # Controller điều hướng tìm kiếm và giải mã URL
    ├── models/
    │   └── searchModel.js       # Model chuẩn hóa chuỗi, validate và mã hóa query
    ├── data/                    # Mock Data độc lập tách biệt khỏi UI
    │   ├── productsData.js      # Danh mục & danh sách sản phẩm bán chạy
    │   ├── awardsData.js        # Dữ liệu giải thưởng và tổ chức trao giải
    │   └── newsData.js          # Dữ liệu các bài báo và tạp chí làm đẹp
    ├── layouts/
    │   └── MainLayout.jsx       # Layout khung chung gồm Header + Content + Footer
    ├── pages/
    │   ├── HomePage.jsx         # Trang chủ lắp ghép toàn bộ các section
    │   └── DetailPage.jsx       # Trang chi tiết hiển thị truy vấn tìm kiếm
    ├── routes/
    │   └── AppRoutes.jsx        # Cấu hình BrowserRouter và danh sách route
    └── styles/
        └── tokens.css           # Định nghĩa Design Tokens (màu sắc, typography)
```

---

## 🏛️ 3. Kiến Trúc Ứng Dụng & Mô Hình Lean MVC

Dự án áp dụng chặt chẽ nguyên lý **Separation of Concerns (Phân tách trách nhiệm)**:

```
[ User Input / Click ]
         │
         ▼
 ┌──────────────┐          calls          ┌──────────────────────┐
 │     VIEW     │ ──────────────────────► │      CONTROLLER      │
 │ (SearchBar / │                         │ (searchController.js)│
 │  DetailPage) │ ◄────────────────────── │                      │
 └──────────────┘      supplies data      └──────────────────────┘
                                                     │
                                                     │ validates & normalizes
                                                     ▼
                                          ┌──────────────────────┐
                                          │        MODEL         │
                                          │   (searchModel.js)   │
                                          └──────────────────────┘
```

### 3.1 Tầng Model (`src/models/searchModel.js`)
- Là một **Pure JavaScript Module**, hoàn toàn độc lập với React, JSX và DOM.
- **Trách nhiệm cốt lõi**:
  - `normalizeQuery(rawQuery)`: Làm sạch khoảng trắng thừa ở hai đầu và gộp nhiều dấu cách liên tiếp.
  - `isValidQuery(query)`: Kiểm tra tính hợp lệ của chuỗi tìm kiếm trước khi thực thi.
  - `encodeParam(query)`: Mã hóa an toàn chuỗi ký tự theo chuẩn URL query parameter (`encodeURIComponent`).
  - `decodeParam(rawParam)`: Giải mã an toàn chuỗi từ URL (`decodeURIComponent`) có bọc cơ chế chống lỗi `try/catch`.

### 3.2 Tầng Controller (`src/controllers/searchController.js`)
- Đóng vai trò cầu nối điều phối giữa người dùng (View) và dữ liệu (Model).
- **Trách nhiệm cốt lõi**:
  - `handleSearch(rawQuery, navigate)`: Tiếp nhận sự kiện tìm kiếm từ View, gọi Model kiểm tra tính hợp lệ và mã hóa, sau đó ra lệnh cho Router điều hướng sang `/detail?q=...`.
  - `getSearchQueryFromUrl(searchParams)`: Đọc tham số URL từ SearchParams, chuyển tới Model để giải mã và cung cấp chuỗi dữ liệu sạch cho View hiển thị.
- **Nguyên tắc bất biến**: View không bao giờ gọi trực tiếp vào Model; tất cả đều thông qua Controller.

### 3.3 Tầng View (`src/components/` & `src/pages/`)
- `SearchBar.jsx`: Nhận tương tác nhập liệu và sự kiện form submit của người dùng, ủy quyền toàn bộ cho Controller xử lý.
- `DetailPage.jsx`: Đọc từ khóa tìm kiếm thông qua Controller và hiển thị trực tiếp vào khung kết quả (`textarea`).

### 3.4 Quản Lý Trạng Thái Giỏ Hàng (`src/context/CartContext.jsx`)
- Sử dụng mô hình `useReducer` chuẩn:
  - **State Model**: `{ cartItems: [], totalCount: 0 }`.
  - **Actions**: `ADD_TO_CART`, `REMOVE_FROM_CART`, `CLEAR_CART`.
  - Khi người dùng click nút `Add to Cart` ở bất kỳ thẻ sản phẩm nào (`ProductCard.jsx`), action được dispatch và `MainHeader.jsx` lập tức cập nhật badge giỏ hàng `🛒 {totalCount}` trong thời gian thực.

---

## 🎨 4. Chi Tiết Các Section & Tính Năng Giao Diện

1. **TopBar** (`TopBar.jsx`):
   - Nền màu tím `#551760`, thanh menu phụ gồm các link `FAQs | Help | Support`.
   - Cụm 5 icon mạng xã hội: Facebook, Twitter, LinkedIn, Instagram, YouTube.
   - Khoảng cách được tối ưu chống tràn và không bị dính vào nhau trên màn hình di động nhỏ.

2. **MainHeader** (`MainHeader.jsx` & `SearchBar.jsx`):
   - Ô tìm kiếm linh hoạt hỗ trợ tìm kiếm sản phẩm và nhấn Enter/Icon để chuyển trang.
   - Nút Wishlist (`♥ 0`) và Nút Cart (`🛒 {totalCount}`).
   - **Tối ưu Mobile**: Thanh tìm kiếm và giỏ hàng nằm gọn gàng trên **cùng 1 hàng**, tiết kiệm diện tích màn hình.

3. **Navbar & Categories** (`Navbar.jsx`):
   - **Desktop**: Nút `Categories` với menu con danh mục sản phẩm (bên trái) và danh sách điều hướng ngang `Home`, `Shop`, `Shop Detail`, `Pages ▾`, `Contact`, `Login`, `Register` (bên phải).
   - **Mobile / Tablet**: Nút `Categories` dạng accordion và nút **Hamburger Menu** (`☰` / `✕`) tiện lợi, mở rộng danh mục và menu điều hướng chỉ với một chạm.

4. **Hero Slider** (`HeroSlider.jsx`):
   - Khối banner trượt ấn tượng với thông điệp *"10% OFF YOUR FIRST ORDER"* và tiêu đề *"Reasonable Price"*.
   - Nút bấm điều hướng trước/sau `<` `>` và các chấm indicator chuyển đổi slide mượt mà.

5. **Dual Promotional Sub-Banners** (`SubBanners.jsx`):
   - 2 banner song song phong cách mùa đông *"PREFER CUSTOMER 2025 - Winter Collection"*.
   - Phối màu gradient tinh xảo kết hợp hiệu ứng mặt nạ `maskImage: linear-gradient(...)` giúp hình ảnh người mẫu hòa trộn tự nhiên vào dải màu nền.

6. **Most Popular Products Section** (`MostPopularSection.jsx`):
   - Khung nền màu xám xanh nhạt `#f3f7f8` được căn chỉnh chính xác bên trong `container-custom`, thẳng hàng tuyệt đối với các khối trên và dưới.
   - **Side Banner**: Hoa văn xanh ngọc mint/teal (`sideBanner.png`) với slogan *"Find out what everyone's talking about"*.
   - **Tabs Chuyển Đổi**: `DESCRIPTION` và `SPECIFICATIONS` (khi chọn tab thông số, các card sẽ tự động hiển thị Brand, Origin, Volume, Usage).
   - **Link "View All >>"**: Có gạch chân theo chuẩn thiết kế.
   - **Product Carousel**: Hỗ trợ kéo chuột tự do (drag-to-scroll) mượt mà + 2 nút mũi tên `<` `>` tròn + thanh chỉ số trang.
   - **Product Card**: Hiển thị badge `SALE`, ảnh sản phẩm, danh mục, tên sản phẩm, giá bán khuyến mãi màu vàng cam (`#f39c12`), giá gạch ngang và nút `Add to Cart`.

7. **LumiSpa Promotional Banner** (`LumiSpaBanner.jsx`):
   - Khối quảng bá máy rửa mặt công nghệ cao `ageLOC® LumiSpa® iO`.
   - Nền màu be nhạt `#f3f2ee`, góc phải ảnh có huy hiệu tròn nổi bật *"Sale Of $29.99"*.
   - Bố cục 2 cột cân đối, tối ưu hóa khoảng đệm (padding) trên di động để loại bỏ hoàn toàn khoảng trống thừa.

8. **Award And Recognition** (`AwardsSection.jsx`):
   - Banner Euromonitor ngang với chứng nhận *"World's #1 Company for Beauty & Wellness Device Systems"*.
   - Dải các huy hiệu giải thưởng quốc tế danh giá (NewBeauty, Beauty Bible Awards, Global Makeup Awards, Global Green Beauty Awards...).
   - Carousel hỗ trợ cuộn kéo tự do và hệ thống chấm tròn chuyển trang (pagination dots).

9. **The Nu Skin Way** (`NuSkinWaySection.jsx`):
   - Khối số liệu sứ mệnh cộng đồng: `25+ Years of Giving`, `20+ Current Social Projects`, `850M+ Meals Donated`.
   - 2 khối câu chuyện thương hiệu xen kẽ hình ảnh và nội dung: *"Being a Force for Good"* và *"Nature + Science"*.

10. **Nu Skin In The News** (`NewsSection.jsx`):
    - Carousel các bài viết trên các tạp chí làm đẹp hàng đầu.
    - Banner dọc thương hiệu *"Nu Skin In The News"*.

11. **Footer Toàn Diện** (`FooterTop.jsx` & `FooterBottom.jsx`):
    - **Footer Top** (Nền tím `#551760`): Giới thiệu công ty, địa chỉ, email, số hotline và 2 cột liên kết nhanh (Quick Links).
    - **Footer Bottom** (Nền tím đậm `#44124d`): Thông tin bản quyền chuẩn và 6 biểu tượng thanh toán quốc tế (Visa, MasterCard, PayPal, American Express, Visa Electron, Maestro).

---

## 📱 5. Tối Ưu Giao Diện Đa Thiết Bị (Responsive Design)

Hệ thống được thiết kế và kiểm thử nghiêm ngặt trên nhiều dải kích thước màn hình:

- **Mobile Nhỏ (< 480px - iPhone SE, Android 360px - 390px)**:
  - TopBar co dãn hợp lý, chữ và icon MXH không bị va chạm hay chồng lấn.
  - Ô tìm kiếm và giỏ hàng nằm cùng 1 hàng ngang, tối ưu không gian cuộn.
  - Nút Categories & Hamburger menu giúp duyệt trang nhanh chóng.
  - Bỏ triệt để các khoảng đệm thừa lớn trên mobile ở banner LumiSpa.
  - Nút bấm carousel nằm gọn trong màn hình, không gây ra hiện tượng tràn ngang (`overflow-x: hidden`).
- **Tablet (768px - 1024px - iPad, Tablets)**:
  - Bố cục lưới tự động chuyển đổi thông minh: Sub-banners hiển thị 2 cột, 2 cột Quick Links ở Footer chia đôi đều đặn.
  - Side Banner và Carousel thích ứng linh hoạt theo độ rộng màn hình.
- **Desktop (>= 1280px - Laptops, Màn hình Full HD/4K)**:
  - Khung nội dung chuẩn `container-custom` giới hạn tối đa `1440px` với căn giữa tự động.
  - Khung nền `#f3f7f8` của MostPopularSection nằm bằng phẳng, thẳng hàng tuyệt đối với các khối xung quanh.

---

## 🎨 6. Bảng Màu Quy Chuẩn (Design Tokens)

Toàn bộ hệ thống màu sắc được cấu hình tập trung trong `src/styles/tokens.css` và `src/index.css`:

| Tên Token / Biến | Mã Màu HEX | Vị trí áp dụng chính |
| :--- | :--- | :--- |
| `--color-primary` | `#551760` | Nền TopBar, nút Categories, Header Action icons, nút CTA, nền chính Footer |
| `--color-copyright-bg` | `#44124d` | Dải bản quyền & danh sách cổng thanh toán dưới cùng Footer |
| `--color-bg-popular` | `#f3f7f8` | Khung nền khối Most Popular Products |
| `--color-bg-lumispa` | `#f3f2ee` | Khung nền khối quảng cáo LumiSpa iO |
| `--color-bg-story` | `#f7f7f7` | Khung nền 2 câu chuyện thương hiệu The Nu Skin Way |
| `--color-price-gold` | `#f39c12` | Màu giá bán khuyến mãi, vạch viền trên của Active Tab |
| `--color-badge-sale` | `#5cb85c` | Màu xanh lá của badge "SALE" sản phẩm |

---

## 🚀 7. Hướng Dẫn Cài Đặt & Khởi Chạy

### Yêu Cầu Môi Trường
- **Node.js**: Phiên bản `>= 18.0.0` (Khuyên dùng Node 20+ hoặc 22+)
- **NPM**: Phiên bản `>= 9.0.0`

### Các Bước Thực Hiện

1. **Clone hoặc mở thư mục dự án**:
   ```bash
   cd xtech789Test
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies)**:
   ```bash
   npm install
   ```

3. **Khởi chạy máy chủ phát triển (Development Server)**:
   ```bash
   npm run dev
   ```
   Sau khi chạy, mở trình duyệt tại địa chỉ: `http://localhost:5173/`

4. **Kiểm tra và biên dịch cho môi trường Production (Build)**:
   ```bash
   npm run build
   ```
   Kết quả tối ưu hóa sẽ được xuất vào thư mục `dist/`.

5. **Xem trước bản dựng Production (Preview)**:
   ```bash
   npm run preview
   ```

6. **Kiểm tra Linter (Code Style)**:
   ```bash
   npm run lint
   ```
