# Love Journal - Kỷ Niệm Tình Yêu

Website lưu giữ những kỷ niệm đẹp của chúng mình.

## 🛠️ Công nghệ sử dụng

-   **Framework:** Next.js 16
-   **Ngôn ngữ:** TypeScript
-   **Styling:** Tailwind CSS v4
-   **Icons:** Lucide React
-   **Fonts:** Google Fonts (Playfair Display, Dancing Script, Montserrat)
-   **Theme:** Next-themes (Dark/Light mode)

## 🚀 Cài đặt & Chạy cục bộ (Local)

1.  **Clone dự án:**

    ```bash
    git clone https://github.com/username/love-journal.git
    cd love-journal
    ```

2.  **Cài đặt dependencies:**

    ```bash
    npm install
    ```

3.  **Chạy server phát triển:**

    ```bash
    npm run dev
    ```

    Truy cập [http://localhost:3000](http://localhost:3000) để xem kết quả.

## ☁️ Deploy lên Vercel (Khuyên dùng)

Cách dễ nhất để deploy dự án Next.js là sử dụng **Vercel** (cùng nhà phát triển với Next.js).

1.  Đẩy code của bạn lên **GitHub**, **GitLab**, hoặc **Bitbucket**.
2.  Truy cập [Vercel Dashboard](https://vercel.com/new).
3.  Đăng nhập và chọn **Add New Project**.
4.  Import repository `love-journal` của bạn.
5.  Vercel sẽ tự động phát hiện Next.js và cài đặt mặc định. Nhấn **Deploy**.
6.  Website của bạn sẽ online sau vài phút!

## 🐳 Deploy bằng Docker

Nếu bạn muốn chạy trên VPS hoặc các nền tảng Container khác (như Railway, Render), bạn có thể sử dụng Docker.

### 1. Build Docker Image

```bash
docker build -t love-journal .
```

### 2. Run Container

```bash
docker run -p 3000:3000 love-journal
```

Truy cập [http://localhost:3000](http://localhost:3000).

---

## 📝 Cấu trúc thư mục

```
├── public/          # Chứa ảnh, static files
├── src/
│   ├── app/         # App Router (page.tsx, layout.tsx, globals.css)
│   ├── components/  # Các component React (HeroSection, Gallery, etc.)
├── Dockerfile       # Cấu hình Docker build
├── next.config.ts   # Cấu hình Next.js
└── ...
```

Made with ❤️ by Alitle
