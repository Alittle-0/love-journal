"use client";
import { Playfair_Display, Dancing_Script, Montserrat } from "next/font/google";
import { Heart } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const dancing = Dancing_Script({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section
      className={`min-h-screen flex flex-col p-4 md:p-8 relative overflow-hidden ${playfair.className}`}
    >
      {/* Header nhỏ */}
      <div
        className={`flex justify-between items-center text-xs md:text-sm tracking-widest border-b border-border pb-4 mb-8 ${montserrat.className} opacity-70`}
      >
        <span>[TEN BAN NAM]</span>
        <span className="hidden md:block">LOVE MEMORY</span>
        <span>[TEN BAN NU]</span>
      </div>

      {/* Nội dung chính */}
      <div className="text-center space-y-4 z-10">
        <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-foreground">
          Hành Trình
        </h1>

        {/* Màu chữ tự động sáng lên khi ở dark mode */}
        <h2
          className={`${dancing.className} text-6xl md:text-9xl text-rose-400 dark:text-rose-300 mt-2`}
        >
          Mình Yêu Nhau
        </h2>

        <div className="flex items-center justify-center gap-4 my-6 opacity-80 w-full max-w-4xl mx-auto px-4">
          <div className="h-[1px] flex-1 bg-line"></div>

          <Heart className="w-6 h-6 text-border fill-border shrink-0" />

          <div className="h-[1px] flex-1 bg-line"></div>
        </div>

        <p className="italic text-xl md:text-2xl font-medium text-foreground/80">
          “Cảm ơn vì đã đến và yêu anh.”
        </p>
      </div>

      {/* Ảnh Polaroid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12 pb-12">
        {/* Khung ảnh dùng bg-card để đổi màu theo theme */}
        <div className="bg-card p-4 pb-12 shadow-2xl -rotate-3 hover:rotate-0 transition-all w-64 md:w-80 ring-1 ring-black/5 dark:ring-white/10">
          <img
            src="/anh-nu.jpg"
            alt="Bạn nữ"
            className="w-full h-auto object-cover aspect-[3/4] bg-gray-200"
          />
        </div>

        <Heart className="w-16 h-16 text-rose-400 fill-rose-500 hidden md:block animate-pulse" />

        <div className="bg-card p-4 pb-12 shadow-2xl rotate-3 hover:rotate-0 transition-all w-64 md:w-80 ring-1 ring-black/5 dark:ring-white/10">
          <img
            src="/anh-nam.jpg"
            alt="Bạn nam"
            className="w-full h-auto object-cover aspect-[3/4] bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
}
