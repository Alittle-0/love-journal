
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Hoặc font bạn đang dùng
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import MusicPlayer from "@/components/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kỷ Niệm Tình Yêu",
  description: "Hành trình của chúng mình",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning là bắt buộc khi dùng next-themes để tránh warning
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          
          {/* Nút chuyển theme nằm ở đây, sẽ hiện nổi ở góc */}
          <ThemeToggle /> 
          <MusicPlayer/>
        </ThemeProvider>
      </body>
    </html>
  );
}