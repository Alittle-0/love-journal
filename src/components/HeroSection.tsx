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
      className={`min-h-screen sm:h-screen sm:min-h-[600px] flex flex-col p-3 sm:p-4 md:p-6 relative overflow-hidden ${playfair.className}`}
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground">
            Hành Trình
          </h1>
          {/* Dịch dòng chữ "Mình Yêu Nhau" xích lên một chút bằng -mt-2 */}
          <h2
            className={`${dancing.className} text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-rose-400 dark:text-rose-300 -mt-1 sm:-mt-2 md:-mt-4`}
          >
            Mình Yêu Nhau
          </h2>
        </div>

        {/* Divider: Thu nhỏ khoảng cách my-6 thành my-4 */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-3 sm:my-4 md:my-5 opacity-80 w-full max-w-2xl px-4 shrink-0">
          <div className="h-[1px] flex-1 bg-line"></div>
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-border fill-border shrink-0" />
          <div className="h-[1px] flex-1 bg-line"></div>
        </div>

        {/* Quote */}
        <p className="italic text-base sm:text-lg md:text-xl font-medium text-foreground/80 shrink-0 px-4">
          “Cảm ơn vì đã đến và yêu anh.”
        </p>

        {/* Ảnh Polaroid: Luôn nằm ngang với heart ở giữa trên mọi screen */}
        <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-8 mt-4 sm:mt-6 md:mt-8 shrink-0">
          {/* Khung ảnh Bạn nữ */}
          <div className="bg-card p-1.5 sm:p-2 md:p-3 shadow-2xl -rotate-3 hover:rotate-0 transition-all w-28 sm:w-36 md:w-48 lg:w-56 ring-1 ring-black/5 dark:ring-white/10 flex flex-col items-center">
            <Image
              src="https://res.cloudinary.com/dgdvl4vfn/image/upload/v1771482396/female_rtl9kg.jpg"
              alt="Bạn nữ"
              width={600}
              height={600}
              quality={100}
              className="w-full h-auto object-contain bg-gray-200 rounded-sm"
            />
            <p
              className={`${dancing.className} text-sm sm:text-base md:text-xl lg:text-2xl text-foreground/70 mt-1.5 sm:mt-2 md:mt-3 mb-0.5`}
            >
              Quỳnh Như 🌸
            </p>
          </div>

          <Heart className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 text-rose-400 fill-rose-500 animate-pulse shrink-0" />

          {/* Khung ảnh Bạn nam */}
          <div className="bg-card p-1.5 sm:p-2 md:p-3 shadow-2xl rotate-3 hover:rotate-0 transition-all w-28 sm:w-36 md:w-48 lg:w-56 ring-1 ring-black/5 dark:ring-white/10 flex flex-col items-center">
            <Image
              src="https://res.cloudinary.com/dgdvl4vfn/image/upload/v1771482397/male_hyldxk.jpg"
              alt="Bạn nam"
              width={600}
              height={600}
              quality={100}
              className="w-full h-auto object-contain bg-gray-200 rounded-sm"
            />
            <p
              className={`${dancing.className} text-sm sm:text-base md:text-xl lg:text-2xl text-foreground/70 mt-1.5 sm:mt-2 md:mt-3 mb-0.5`}
            >
              Minh Quân 🍂
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
