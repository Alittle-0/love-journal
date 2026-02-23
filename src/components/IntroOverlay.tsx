"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dancing_Script, Montserrat } from "next/font/google";
import { Heart, MailOpen } from "lucide-react";

// Cấu hình font chữ
const dancing = Dancing_Script({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleButtonClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  // Các biến animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: -30, // Bay lên nhẹ hơn một chút
      scale: 0.98,
      transition: { ease: "easeInOut", duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    // LỚP NỀN MỜ BAO PHỦ TOÀN MÀN HÌNH
    // Giữ lại bg-black/... để làm tối nền giúp chữ trắng dễ đọc, kết hợp backdrop-blur
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/50 backdrop-blur-lg dark:bg-black/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.1 } }}
    >
        {/* Hiệu ứng trái tim bay bay toàn màn hình */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingHearts />
        </div>

      {/* KHUNG CHỨA NỘI DUNG CHÍNH - ĐÃ XÓA BỎ BACKGROUND BOX */}
      <motion.div
        // Chỉ giữ lại các class để căn giữa layout, xóa bỏ bg-, shadow-, border-, padding lớn
        className="relative z-10 flex flex-col items-center text-center max-w-xl w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isExiting ? "exit" : "visible"}
      >

        <div className="flex flex-col items-center">
          {/* Icon trái tim chính */}
          <motion.div variants={itemVariants} className="mb-6">
            {/* Bỏ background tròn, chỉ để trái tim phát sáng */}
            <div className="p-2 inline-block drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]">
               <Heart className="w-12 h-12 md:w-14 md:h-14 text-rose-500 fill-rose-500 animate-pulse" />
            </div>
          </motion.div>

          {/* Tiêu đề lãng mạn */}
          <motion.h1
            variants={itemVariants}
            // Đổi màu chữ sang trắng và thêm drop-shadow để nổi bật trên nền mờ
            className={`${dancing.className} text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg`}
          >
            Gửi người thương...
          </motion.h1>

          {/* Lời nhắn nhủ */}
          <motion.p
            variants={itemVariants}
            // Đổi màu chữ sang trắng, tăng độ đậm và thêm shadow
            className={`${montserrat.className} text-base md:text-lg text-white/90 font-medium mb-12 leading-relaxed max-w-md italic drop-shadow-md`}
          >
            "Anh có chuẩn bị một không gian nhỏ, nơi lưu giữ những khoảnh khắc ngọt ngào của chúng mình. Hy vọng em sẽ thích..."
          </motion.p>

          {/* Nút bấm tương tác */}
          <motion.button
            variants={itemVariants}
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(244,63,94,0.8)" }}
            whileTap={{ scale: 0.95 }}
            // Tăng kích thước nút một chút và làm cho nó nổi bật hơn
            className="group relative px-10 py-4 md:px-12 md:py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full shadow-[0_8px_25px_-8px_rgba(244,63,94,0.6)] transition-all duration-300 flex items-center gap-3 overflow-hidden font-bold tracking-wider text-base md:text-lg"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full opacity-0 group-hover:opacity-100"></span>
            <MailOpen size={24} className="group-hover:-rotate-12 transition-transform duration-300" />
            <span className={`${montserrat.className}`}>Mở Thư Ngay</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Component phụ để tạo hiệu ứng trái tim bay nền
const FloatingHearts = () => {
  const [hearts, setHearts] = useState<any[]>([]);

  // Chỉ sinh ra số ngẫu nhiên sau khi component đã mount ở Client (trình duyệt)
  useEffect(() => {
    const generatedHearts = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "vw",
      scale: Math.random() * 0.8 + 0.3,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 5,
      left: `-${Math.random() * 20}%`,
      size: Math.random() * 40 + 15,
      rotateTo: Math.random() * 360 - 180,
    }));
    setHearts(generatedHearts);
  }, []);

  // Trong lúc Server đang render (chưa có data random), không hiển thị gì cả để tránh lỗi mismatch
  if (hearts.length === 0) return null;

  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-400/40 dark:text-rose-500/30 layer"
          initial={{
            opacity: 0,
            y: "110vh",
            x: heart.x,
            scale: heart.scale,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: "-10vh",
            rotate: [0, heart.rotateTo],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            left: heart.left,
          }}
        >
          <Heart fill="currentColor" size={heart.size} />
        </motion.div>
      ))}
    </>
  );
};