"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Thêm ref để quản lý vùng click
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Cập nhật âm lượng
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Tự động phát nhạc
  useEffect(() => {
    const attemptAutoplay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch {
          console.log("Trình duyệt chặn tự động phát. Chờ người dùng click.");
          setIsPlaying(false);
        }
      }
    };
    attemptAutoplay();
  }, []);

  // XỬ LÝ CHẠM RA NGOÀI ĐỂ ĐÓNG VOLUME (FIX LỖI TRÊN MOBILE)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Nếu click xảy ra bên ngoài vùng của containerRef thì thu gọn player lại
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };

    // Lắng nghe cả sự kiện click chuột (desktop) và chạm (mobile)
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      // Clean up event listener khi component unmount
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
    if (isMuted && parseFloat(e.target.value) > 0) {
      setIsMuted(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/background-music.mp3" loop autoPlay />

      <motion.div
        ref={containerRef} // Gắn ref vào container chính
        className="fixed bottom-[4.5rem] right-4 md:bottom-[5.5rem] md:right-6 z-50 flex items-center bg-white dark:bg-[#5d4037] text-[#5d4037] dark:text-[#f4eee8] shadow-xl border border-gray-200 dark:border-gray-700 rounded-full h-10 md:h-12 transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(true)} // Khi chạm vào thì mở ra
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <div
          className={`flex items-center justify-start overflow-hidden transition-all duration-500 ease-in-out h-full ${
            isHovered ? "w-24 md:w-28 opacity-100 pl-3 md:pl-4" : "w-0 opacity-0 pl-0"
          }`}
          onClick={(e) => e.stopPropagation()} // Ngăn sự kiện khi đang kéo thanh âm lượng
        >
          <button onClick={toggleMute} className="hover:opacity-70 transition-opacity shrink-0">
            {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-12 md:w-16 ml-2 accent-[#5d4037] dark:accent-[#f4eee8] h-1.5 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shrink-0 transition-transform hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 md:h-6 md:w-6" />
          ) : (
            <Play className="h-5 w-5 md:h-6 md:w-6 ml-0.5" />
          )}
        </button>
      </motion.div>
    </>
  );
}