"use client";
import { useState } from "react";
import { Dancing_Script, Montserrat } from "next/font/google";
import { Play, X, Clapperboard, ChevronLeft, ChevronRight } from "lucide-react";

const dancing = Dancing_Script({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

interface Video {
  id: string;
  title: string;
  date?: string;
}

// Thêm nhiều video để test chức năng chuyển trang
const videos: Video[] = [
  { id: "dQw4w9WgXcQ", title: "Ngày mình gặp nhau", date: "02/07/2025" },
  { id: "jfKfPfyJRdk", title: "Chuyến đi Đà Lạt", date: "12/08/2025" },
  { id: "5qap5aO4i9A", title: "Sinh nhật em", date: "20/10/2025" },
  { id: "M7lc1UVf-VE", title: "Video Thứ 4", date: "01/01/2026" },
  { id: "jNQXAC9IVRw", title: "Video Thứ 5", date: "02/01/2026" },
];

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // --- LOGIC PHÂN TRANG (CAROUSEL) ---
  const [startIndex, setStartIndex] = useState(0);
  const VIDEO_LIMIT = 1; // Hiển thị 1 video, lướt để xem thêm

  const nextSlide = () => {
    if (startIndex + VIDEO_LIMIT < videos.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const darkArrowBtnClass =
    "p-4 transition-all duration-300 text-white opacity-40 hover:opacity-100 hover:scale-125 disabled:opacity-5 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:opacity-5";

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden  border-line bg-video-bg text-white text-center py-12 sm:py-16 md:py-20 px-3 sm:px-4 select-none">
      <div className="absolute inset-0 bg-paper-texture opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center gap-12">
        <div className="space-y-3 sm:space-y-4 px-4">
          <div className="flex justify-center items-center gap-2 opacity-70">
            <Clapperboard size={18} className="text-rose-400 sm:w-5 sm:h-5" />
            <span
              className={`${montserrat.className} text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase`}
            >
              Our Cinema
            </span>
          </div>
          <h3
            className={`${dancing.className} text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-rose-300 drop-shadow-lg`}
          >
            Thước Phim Của Chúng Mình
          </h3>
          <p className="opacity-60 text-xs sm:text-sm max-w-lg mx-auto italic">
            "Mỗi thước phim là một mảnh ghép ký ức..."
          </p>
        </div>

        {/* --- CAROUSEL KHU VỰC VIDEO --- */}
        <div className="flex items-center gap-4 w-full">
          {/* Nút Prev */}
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className={`hidden md:block ${darkArrowBtnClass}`}
          >
            <ChevronLeft className="text-white" size={40} />
          </button>

          {/* Grid hiển thị video - responsive */}
          <div className="flex-1 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full">
            {videos
              .slice(startIndex, startIndex + VIDEO_LIMIT)
              .map((video, index) => (
                <div
                  key={`${video.id}-${index}`}
                  onClick={() => setPlayingVideo(video.id)}
                  className="w-full max-w-2xl mx-auto group cursor-pointer flex flex-col gap-3 sm:gap-4 animate-in fade-in slide-in-from-right-4 duration-500"
                >
                  <div className="relative aspect-video w-full rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-zinc-900 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-rose-900/20 ring-1 ring-white/5">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-500/80 transition-all duration-300">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        Now Showing
                      </span>
                    </div>
                  </div>
                  <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                    <h4
                      className={`${dancing.className} text-2xl sm:text-2xl md:text-3xl text-rose-200 group-hover:text-rose-400 transition-colors`}
                    >
                      {video.title}
                    </h4>
                    {video.date && (
                      <p
                        className={`${montserrat.className} text-[9px] sm:text-[10px] tracking-widest opacity-50 uppercase mt-1`}
                      >
                        {video.date}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Nút Next */}
          <button
            onClick={nextSlide}
            disabled={startIndex + VIDEO_LIMIT >= videos.length}
            className={`hidden md:block ${darkArrowBtnClass}`}
          >
            <ChevronRight className="text-white" size={40} />
          </button>
        </div>

        {/* Nút điều hướng cho Mobile (Hiện dưới grid) */}
        <div className="flex md:hidden gap-4 mt-4">
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="p-3 rounded-full bg-zinc-800 hover:bg-rose-600 disabled:opacity-20 transition-all"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={startIndex + VIDEO_LIMIT >= videos.length}
            className="p-3 rounded-full bg-zinc-800 hover:bg-rose-600 disabled:opacity-20 transition-all"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>

      {/* --- POP-UP PLAYER (Giữ nguyên) --- */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-4 md:p-10"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-in zoom-in-95 duration-300 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-rose-500 text-white rounded-full transition-colors backdrop-blur-md group"
            >
              <X
                size={24}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&rel=0`}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)] z-20"></div>
    </section>
  );
}
