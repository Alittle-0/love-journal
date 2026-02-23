"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); 
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

  // PHÁT NHẠC KHI NGƯỜI DÙNG TƯƠNG TÁC LẦN ĐẦU TIÊN (CLICK / CHẠM)
  useEffect(() => {
    let hasStarted = false; // Biến cờ để đảm bảo chỉ chạy 1 lần

    const handleFirstInteraction = async () => {
      if (hasStarted) return;

      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          hasStarted = true; // Đánh dấu là đã phát

          // Gỡ bỏ sự kiện sau khi đã phát nhạc thành công để tối ưu hiệu suất
          document.removeEventListener("click", handleFirstInteraction);
          document.removeEventListener("touchstart", handleFirstInteraction);
          document.removeEventListener("keydown", handleFirstInteraction);
        } catch (error) {
          console.log("Trình duyệt vẫn chặn hoặc chưa sẵn sàng phát nhạc:", error);
        }
      }
    };

    // Lắng nghe các thao tác của người dùng trên toàn bộ trang
    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  // XỬ LÝ CHẠM RA NGOÀI ĐỂ ĐÓNG VOLUME TRÊN MOBILE
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
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
      {/* Đã xóa thuộc tính autoPlay để chờ user tương tác */}
      <audio ref={audioRef} src="/background-music.mp3" loop />

      <motion.div
        ref={containerRef} 
        className="fixed bottom-[4.5rem] right-4 md:bottom-[5.5rem] md:right-6 z-50 flex items-center bg-white dark:bg-[#5d4037] text-[#5d4037] dark:text-[#f4eee8] shadow-xl border border-gray-200 dark:border-gray-700 rounded-full h-10 md:h-12 transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(true)} 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <div
          className={`flex items-center justify-start overflow-hidden transition-all duration-500 ease-in-out h-full ${
            isHovered ? "w-24 md:w-28 opacity-100 pl-3 md:pl-4" : "w-0 opacity-0 pl-0"
          }`}
          onClick={(e) => e.stopPropagation()} 
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