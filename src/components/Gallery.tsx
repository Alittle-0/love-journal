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
  category: "couple" | "scenery";
}

// Dữ liệu mẫu
const memories: Memory[] = [
  // ================= ẢNH ĐÔI (COUPLE) =================
  {
    src: "/quynhon.jpeg",
    caption: "Đôi ta - Quy Nhơn",
    date: "16/01/2026",
    description: "Biển xanh, mây trắng và nụ cười rạng ngời của em. Giữa biển trời Eo Gió mênh mông, cái ôm từ phía sau hòa cùng vị ngọt ngào của đóa hồng ngát hương... anh biết mình đang ôm trọn cả thế giới vào lòng.",
    rotate: "-rotate-1",
    category: "couple",
  },
  {
    src: "https://res.cloudinary.com/dgdvl4vfn/image/upload/v1771817861/IMG_6204_m3p9wf.jpg",
    caption: "Sinh nhật của em",
    date: "10/10/2025",
    description: "Ngày em thêm tuổi mới, anh chỉ muốn gom cả thế giới dịu dàng mang đến trước mặt em. Cảm ơn thiên thần nhỏ đã xuất hiện, thắp sáng cuộc đời anh và dạy anh cách yêu thương một người trọn vẹn nhất.",
    rotate: "rotate-2",
    category: "couple",
  },
  {
    src: "https://res.cloudinary.com/dgdvl4vfn/image/upload/v1771817854/000031_hufwzu.jpg",
    caption: "Tay trong tay",
    date: "02/09/2025",
    description: "Hơi ấm từ bàn tay nhỏ bé truyền sang tim anh. Chỉ cần tay mình đan chặt, dù đường có xa, giông bão có lớn, anh cũng nguyện thay em che chắn vạn dặm dài. Nắm tay anh đi khắp thế gian em nhé.",
    rotate: "-rotate-2",
    category: "couple",
  },

  // ================= PHONG CẢNH (SCENERY) =================
  {
    src: "https://res.cloudinary.com/dgdvl4vfn/image/upload/v1771817863/000012_sy5xzh.jpg",
    caption: "Chuyến Vũng Tàu thứ hai",
    date: "25/11/2025",
    description: "Cùng nhau trốn khỏi phố thị ồn ào. Chuyến đi đầy ắp tiếng cười và những cái ôm siết chặt. Nhìn em vui đùa trước biển, anh nhận ra hạnh phúc đôi khi đơn giản chỉ là có em kề bên.",
    rotate: "-rotate-3",
    category: "scenery",
  },
  {
    src: "https://res.cloudinary.com/dgdvl4vfn/image/upload/v1771817859/000058_kidcyp.jpg",
    caption: "Đoá hoa ngày ấy",
    date: "14/08/2025",
    description: "Không cần một dịp quá đặc biệt, chỉ là anh muốn dành tặng em những điều ngọt ngào nhất. Dù hoa có rực rỡ đến đâu cũng chẳng thể sánh bằng nét e ấp và xinh đẹp của người con gái anh thương.",
    rotate: "rotate-2",
    category: "scenery",
  },
  {
    src: "https://res.cloudinary.com/dgdvl4vfn/image/upload/v1771817752/000003_oyogva.jpg",
    caption: "Biển Quy Nhơn",
    date: "15/01/2026",
    description: "Sóng vỗ rì rào, gió mang hương biển mặn mòi. Dưới bầu trời Quy Nhơn rực rỡ ngày hôm đó, được đèo em đi khắp các nẻo đường, anh nhận ra mảnh ghép bình yên nhất của mình chính là em.",
    rotate: "rotate-1",
    category: "scenery",
  },
];

export default function Gallery() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const [coupleIndex, setCoupleIndex] = useState(0);
  const [sceneryIndex, setSceneryIndex] = useState(0);

  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth >= 1024) {
        setLimit(3); 
      } else if (window.innerWidth >= 640) {
        setLimit(2); 
      } else {
        setLimit(1); 
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const coupleImages = memories.filter((m) => m.category === "couple");
  const sceneryImages = memories.filter((m) => m.category === "scenery");

  const nextSlide = (category: "couple" | "scenery") => {
    if (category === "couple") {
      if (coupleIndex + limit < coupleImages.length) {
        setCoupleIndex(coupleIndex + 1);
      }
    } else {
      if (sceneryIndex + limit < sceneryImages.length) {
        setSceneryIndex(sceneryIndex + 1);
      }
    }
  };

  const prevSlide = (category: "couple" | "scenery") => {
    if (category === "couple") {
      if (coupleIndex > 0) setCoupleIndex(coupleIndex - 1);
    } else {
      if (sceneryIndex > 0) setSceneryIndex(sceneryIndex - 1);
    }
  };

  const arrowBtnClass =
    "p-3 transition-all duration-300 hover:scale-125 text-foreground/40 hover:text-rose-500 disabled:opacity-10 disabled:cursor-not-allowed disabled:hover:scale-100 shrink-0 bg-secondary/30 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-full";

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto select-none overflow-hidden">
      <div className="text-center mb-16 md:mb-24">
        <h3 className="text-4xl md:text-5xl font-bold uppercase text-foreground mb-4 tracking-tighter">
          Khoảnh Khắc Ngọt Ngào
        </h3>
        <p className="text-lg italic opacity-70 text-foreground">
          "Lưu giữ những thước phim thanh xuân đẹp nhất của đôi ta..."
        </p>
      </div>

      {/* ================= KHU VỰC 1: ẢNH ĐÔI ================= */}
      {coupleImages.length > 0 && (
        <div className="relative mb-24 md:mb-32 w-full">
          
          <div className="flex items-center justify-between gap-4 md:gap-6 w-full">
            <button onClick={() => prevSlide("couple")} disabled={coupleIndex === 0} className={arrowBtnClass}>
              <ChevronLeft size={32} />
            </button>

            <div className="flex-1 flex justify-center w-full px-2">
               {/* Giữ nguyên cấu trúc Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl items-start">
                {coupleImages.slice(coupleIndex, coupleIndex + limit).map((item) => (
                  <div
                    key={item.src}
                    onClick={() => setSelectedMemory(item)}
                    // FIX MẤU CHỐT 1: Đã xoá các khoảng đệm thừa thãi (pb-10...), chỉ giữ p-3 md:p-4 để khung ảnh ôm sát
                    className={`w-full group bg-white dark:bg-[#e4e0d9] p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${item.rotate} hover:rotate-0 hover:scale-105 cursor-pointer ring-1 ring-black/5 flex flex-col animate-in fade-in slide-in-from-right-4`}
                  >
                    {/* Giữ ảnh to và chuẩn với aspect-[4/3] */}
                    <div className="overflow-hidden bg-gray-200 relative aspect-[4/3] shadow-inner">
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* FIX MẤU CHỐT 2: Đã xoá h-full, mt-auto. Căn chỉnh lề vừa phải để chữ sát lên ảnh */}
                    <div className="text-center mt-4 md:mt-5 mb-1 md:mb-2">
                      <p className={`${dancing.className} text-2xl md:text-3xl text-slate-800 leading-tight`}>
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => nextSlide("couple")} disabled={coupleIndex + limit >= coupleImages.length} className={arrowBtnClass}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}

      {/* ================= KHU VỰC 2: PHONG CẢNH ================= */}
      {sceneryImages.length > 0 && (
        <div className="relative w-full">

          <div className="flex items-center justify-between gap-4 md:gap-6 w-full">
            <button onClick={() => prevSlide("scenery")} disabled={sceneryIndex === 0} className={arrowBtnClass}>
              <ChevronLeft size={32} />
            </button>

             <div className="flex-1 flex justify-center w-full px-2">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl items-start">
                {sceneryImages.slice(sceneryIndex, sceneryIndex + limit).map((item) => (
                  <div
                    key={item.src}
                    onClick={() => setSelectedMemory(item)}
                    // Xoá khoảng đệm dưới tương tự khu vực 1
                    className={`w-full group bg-white dark:bg-[#e4e0d9] p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${item.rotate} hover:rotate-0 hover:scale-105 cursor-pointer ring-1 ring-black/5 flex flex-col animate-in fade-in slide-in-from-right-4`}
                  >
                    <div className="overflow-hidden bg-gray-200 relative aspect-[4/3] shadow-inner">
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Kéo chữ sát lên */}
                    <div className="text-center mt-4 md:mt-5 mb-1 md:mb-2">
                      <p className={`${dancing.className} text-2xl md:text-3xl text-slate-800 leading-tight`}>
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => nextSlide("scenery")} disabled={sceneryIndex + limit >= sceneryImages.length} className={arrowBtnClass}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}

      {/* --- POP-UP CHI TIẾT --- */}
      {selectedMemory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="bg-card max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 flex flex-col md:flex-row relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 z-20 p-2.5 bg-black/20 hover:bg-rose-500 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              <X size={20} />
            </button>

            <div className="flex-1 relative min-h-[300px] md:min-h-[500px]">
              <img
                src={selectedMemory.src}
                alt={selectedMemory.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-[420px] shrink-0 p-8 md:p-10 flex flex-col bg-card overflow-y-auto max-h-[45vh] md:max-h-[90vh]">
              <div className="border-b border-border pb-5 mb-6">
                <span className={`${montserrat.className} text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60 flex items-center gap-2 text-rose-500 mb-3`}>
                  <Calendar size={14} className="mb-0.5" />
                  {selectedMemory.date}
                </span>
                <h2 className={`${dancing.className} text-4xl md:text-5xl text-foreground mt-1`}>
                  {selectedMemory.caption}
                </h2>
              </div>
              
              <div className="flex-1">
                <p className={`${montserrat.className} text-sm md:text-base leading-relaxed opacity-80 text-foreground text-justify whitespace-pre-line`}>
                  {selectedMemory.description}
                </p>
              </div>

              <div className="mt-8 pt-6 flex items-center justify-center gap-2 opacity-60 text-sm text-foreground border-t border-border">
                <Heart size={14} className="text-rose-400 fill-rose-400 animate-pulse" />
                <span className="italic">Kỷ niệm lưu giữ mãi mãi</span>
                <Heart size={14} className="text-rose-400 fill-rose-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}