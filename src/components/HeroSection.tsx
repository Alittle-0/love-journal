"use client";
import { Playfair_Display, Dancing_Script, Montserrat } from "next/font/google";
import { Heart } from "lucide-react";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });
const dancing = Dancing_Script({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section
      // Dùng h-screen (hoặc min-h-[100dvh]) để ép gọn vào 1 màn hình
      // Thêm min-h-[600px] để tránh bị lỗi hiển thị nếu xem ở màn hình ngang quá nhỏ
      className={`h-screen min-h-[600px] flex flex-col p-4 md:p-6 relative overflow-hidden ${playfair.className}`}
    >
      {/* Header nhỏ - Giữ nguyên nhưng bỏ margin bottom quá lớn */}
      <div
        className={`flex justify-between items-center text-xs md:text-sm tracking-widest border-b border-border pb-3 shrink-0 ${montserrat.className} opacity-70`}
      >
        <span>SAI GON</span>
        <span className="hidden md:block">LOVE MEMORY</span>
        <span>QUY NHON</span>
      </div>

      {/* Wrapper bọc toàn bộ nội dung chính: Tự động dùng không gian còn lại (flex-1) và căn giữa (justify-center) */}
      <div className="flex-1 flex flex-col justify-center items-center z-10 w-full">
        
        {/* Phần Tiêu đề: Giảm nhẹ size chữ xuống 1 bậc */}
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
            Hành Trình
          </h1>
          {/* Dịch dòng chữ "Mình Yêu Nhau" xích lên một chút bằng -mt-2 */}
          <h2
            className={`${dancing.className} text-6xl md:text-8xl text-rose-400 dark:text-rose-300 -mt-2 md:-mt-4`}
          >
            Mình Yêu Nhau
          </h2>
        </div>

        {/* Divider: Thu nhỏ khoảng cách my-6 thành my-4 */}
        <div className="flex items-center justify-center gap-4 my-4 md:my-5 opacity-80 w-full max-w-2xl px-4 shrink-0">
          <div className="h-[1px] flex-1 bg-line"></div>
          <Heart className="w-5 h-5 text-border fill-border shrink-0" />
          <div className="h-[1px] flex-1 bg-line"></div>
        </div>

        {/* Quote */}
        <p className="italic text-lg md:text-xl font-medium text-foreground/80 shrink-0">
          “Cảm ơn vì đã đến và yêu anh.”
        </p>

        {/* Ảnh Polaroid: Thu nhỏ khung ảnh (w-80 -> w-64) và giảm margin top */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-6 md:mt-8 shrink-0">
          
          {/* Khung ảnh Bạn nữ */}
          <div className="bg-card p-3 shadow-2xl -rotate-3 hover:rotate-0 transition-all w-48 md:w-64 ring-1 ring-black/5 dark:ring-white/10 flex flex-col items-center">
            <Image
              src="https://res.cloudinary.com/dgdvl4vfn/image/upload/v1771482396/female_rtl9kg.jpg"
              alt="Bạn nữ"
              width={600}
              height={600}
              quality={100}
              className="w-full h-auto object-contain bg-gray-200 rounded-sm"
            />
            <p className={`${dancing.className} text-xl md:text-2xl text-foreground/70 mt-3 md:mt-4 mb-1`}>
              [Ten Ban Nu] 🌸
            </p>
          </div>

          <Heart className="w-12 h-12 text-rose-400 fill-rose-500 hidden md:block animate-pulse shrink-0" />

          {/* Khung ảnh Bạn nam */}
          <div className="bg-card p-3 shadow-2xl rotate-3 hover:rotate-0 transition-all w-48 md:w-64 ring-1 ring-black/5 dark:ring-white/10 flex flex-col items-center">
            <Image
              src="https://res.cloudinary.com/dgdvl4vfn/image/upload/v1771482397/male_hyldxk.jpg"
              alt="Bạn nam"
              width={600}
              height={600}
              quality={100}
              className="w-full h-auto object-contain bg-gray-200 rounded-sm"
            />
            <p className={`${dancing.className} text-xl md:text-2xl text-foreground/70 mt-3 md:mt-4 mb-1`}>
              [Ten Ban Nam] 🍂
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}