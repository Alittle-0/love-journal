"use client";
import { useState, useEffect } from "react";
import { Dancing_Script, Montserrat } from "next/font/google";
import { X, Calendar, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const dancing = Dancing_Script({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

interface Memory {
  src: string;
  caption: string;
  date: string;
  description: string;
  rotate: string;
  type: "portrait" | "landscape";
}

// Dữ liệu mẫu
const memories: Memory[] = [
  // --- ẢNH DỌC ---
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop",
    caption: "Lần đầu đi Đà Lạt",
    date: "12/08/2025",
    description: "Chuyến đi xa đầu tiên...",
    rotate: "rotate-2",
    type: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?q=80&w=600&auto=format&fit=crop",
    caption: "Cà phê cuối tuần",
    date: "20/09/2025",
    description: "Những buổi chiều thứ 7 bình yên...",
    rotate: "-rotate-3",
    type: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=600&auto=format&fit=crop",
    caption: "Chụp ảnh Film",
    date: "05/10/2025",
    description: "Tập tành chụp máy film...",
    rotate: "rotate-2",
    type: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    caption: "Dạo phố đêm",
    date: "10/11/2025",
    description: "Phố lên đèn...",
    rotate: "-rotate-2",
    type: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    caption: "Ảnh Dọc Thứ 5",
    date: "11/11/2025",
    description: "Test chức năng slide...",
    rotate: "rotate-1",
    type: "portrait",
  },

  // --- ẢNH NGANG ---
  {
    src: "https://images.unsplash.com/photo-1504280509243-489075f995eb?q=80&w=800&auto=format&fit=crop",
    caption: "Bữa tối lãng mạn",
    date: "15/09/2025",
    description: "Ánh nến lung linh...",
    rotate: "-rotate-1",
    type: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop",
    caption: "Bình minh biển",
    date: "01/06/2025",
    description: "Thức dậy ở một nơi xa...",
    rotate: "rotate-1",
    type: "landscape",
  },
  {
    src: "https://ix-marketing.imgix.net/case-study_lummi_homepage.png?auto=format,compress&w=1946",
    caption: "Hoàng hôn",
    date: "02/06/2025",
    description: "Cảnh đẹp tuyệt vời...",
    rotate: "-rotate-1",
    type: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    caption: "Ảnh Ngang Thứ 4",
    date: "03/06/2025",
    description: "Test chức năng slide...",
    rotate: "rotate-2",
    type: "landscape",
  },
];

export default function Gallery() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  // --- LOGIC PHÂN TRANG ---
  const [portraitIndex, setPortraitIndex] = useState(0);
  const [landscapeIndex, setLandscapeIndex] = useState(0);

  // Giới hạn động tuỳ thuộc vào màn hình
  const [portraitLimit, setPortraitLimit] = useState(4);
  const [landscapeLimit, setLandscapeLimit] = useState(3);

  // Bắt sự kiện thay đổi kích thước màn hình để điều chỉnh Limit
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth >= 768) {
        setPortraitLimit(4); // Desktop: 4 ảnh dọc
        setLandscapeLimit(3); // Desktop: 3 ảnh ngang
      } else {
        setPortraitLimit(2); // Mobile: 2 ảnh dọc
        setLandscapeLimit(1); // Mobile: 1 ảnh ngang
      }
    };

    updateLayout(); // Cập nhật lần đầu khi tải trang
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const portraitImages = memories.filter((m) => m.type === "portrait");
  const landscapeImages = memories.filter((m) => m.type === "landscape");

  const nextSlide = (type: "portrait" | "landscape") => {
    if (type === "portrait") {
      if (portraitIndex + portraitLimit < portraitImages.length) {
        setPortraitIndex(portraitIndex + 1);
      }
    } else {
      if (landscapeIndex + landscapeLimit < landscapeImages.length) {
        setLandscapeIndex(landscapeIndex + 1);
      }
    }
  };

  const prevSlide = (type: "portrait" | "landscape") => {
    if (type === "portrait") {
      if (portraitIndex > 0) setPortraitIndex(portraitIndex - 1);
    } else {
      if (landscapeIndex > 0) setLandscapeIndex(landscapeIndex - 1);
    }
  };

  const arrowBtnClass =
    "p-2 md:p-3 transition-all duration-300 hover:scale-125 text-foreground/30 hover:text-rose-500 disabled:opacity-10 disabled:cursor-not-allowed disabled:hover:scale-100 shrink-0";

  return (
    <section className="py-20 px-4 md:px-12 lg:px-20 max-w-[1400px] mx-auto select-none overflow-hidden">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold uppercase text-foreground mb-4 tracking-tighter">
          Khoảnh Khắc Ngọt Ngào
        </h3>
        <p className="text-lg italic opacity-70 text-foreground">
          "Ghi dấu hành trình tình yêu, từ lần đầu gặp gỡ..."
        </p>
      </div>

      {/* ================= KHU VỰC 1: ẢNH DỌC ================= */}
      {portraitImages.length > 0 && (
        <div className="relative mb-20 w-full">

          <div className="flex items-center gap-2 md:gap-4 w-full">
            <button
              onClick={() => prevSlide("portrait")}
              disabled={portraitIndex === 0}
              className={arrowBtnClass}
            >
              <ChevronLeft size={32} />
            </button>

            {/* SỬ DỤNG CSS GRID thay vì Flex + Calc */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
              {portraitImages
                .slice(portraitIndex, portraitIndex + portraitLimit)
                .map((item, index) => (
                  <div
                    key={item.src}
                    onClick={() => setSelectedMemory(item)}
                    className={`w-full group bg-card p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${item.rotate} hover:rotate-0 hover:scale-105 cursor-pointer ring-1 ring-black/5 dark:ring-white/10 flex flex-col animate-in fade-in slide-in-from-right-4`}
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-3 relative">
                      <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] pointer-events-none z-10"></div>
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center mt-auto">
                      <p className={`${dancing.className} text-xl md:text-2xl text-foreground truncate`}>
                        {item.caption}
                      </p>
                      <p className={`${montserrat.className} text-[10px] md:text-xs text-foreground/50 mt-1 tracking-widest`}>
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={() => nextSlide("portrait")}
              disabled={portraitIndex + portraitLimit >= portraitImages.length}
              className={arrowBtnClass}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}

      {/* ================= KHU VỰC 2: ẢNH NGANG ================= */}
      {landscapeImages.length > 0 && (
        <div className="relative pt-12 border-t border-dashed border-foreground/20 w-full">

          <div className="flex items-center gap-2 md:gap-4 w-full">
            <button
              onClick={() => prevSlide("landscape")}
              disabled={landscapeIndex === 0}
              className={arrowBtnClass}
            >
              <ChevronLeft size={32} />
            </button>

            {/* SỬ DỤNG CSS GRID thay vì Flex + Calc */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
              {landscapeImages
                .slice(landscapeIndex, landscapeIndex + landscapeLimit)
                .map((item, index) => (
                  <div
                    key={item.src}
                    onClick={() => setSelectedMemory(item)}
                    className={`w-full group bg-card p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${item.rotate} hover:rotate-0 hover:scale-105 cursor-pointer ring-1 ring-black/5 dark:ring-white/10 flex flex-col animate-in fade-in slide-in-from-right-4`}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-3 relative">
                      <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] pointer-events-none z-10"></div>
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center mt-auto">
                      <p className={`${dancing.className} text-xl md:text-2xl text-foreground truncate`}>
                        {item.caption}
                      </p>
                      <p className={`${montserrat.className} text-[10px] md:text-xs text-foreground/50 mt-1 tracking-widest`}>
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={() => nextSlide("landscape")}
              disabled={landscapeIndex + landscapeLimit >= landscapeImages.length}
              className={arrowBtnClass}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}

      {/* --- POP-UP (GIỮ NGUYÊN) --- */}
      {selectedMemory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="bg-card max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/20 flex flex-col md:flex-row relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden relative min-h-[300px] md:min-h-[500px]">
              <img
                src={selectedMemory.src}
                alt={selectedMemory.caption}
                className="w-auto h-auto max-w-full max-h-[50vh] md:max-h-[90vh] object-contain shadow-2xl"
              />
            </div>

            <div className="w-full md:w-[400px] shrink-0 p-8 flex flex-col bg-card overflow-y-auto max-h-[40vh] md:max-h-[90vh]">
              <div className="border-b border-border pb-4 mb-6 mt-4 md:mt-0">
                <span className={`${montserrat.className} text-xs uppercase tracking-[0.2em] opacity-60 flex items-center gap-2 text-foreground`}>
                  <Calendar size={14} />
                  {selectedMemory.date}
                </span>
                <h2 className={`${dancing.className} text-4xl mt-2 text-rose-500 dark:text-rose-400`}>
                  {selectedMemory.caption}
                </h2>
              </div>
              <div className="space-y-4 opacity-80 leading-relaxed text-foreground text-justify">
                <p>{selectedMemory.description}</p>
              </div>
              <div className="mt-auto pt-8 flex items-center gap-2 opacity-60 text-sm italic text-foreground">
                <Heart size={16} className="text-rose-400 fill-rose-400 animate-pulse" />
                <span>Kỷ niệm lưu giữ mãi mãi</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}