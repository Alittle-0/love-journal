"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Import thêm IntroOverlay vào
import IntroOverlay from '@/components/IntroOverlay';
import HeroSection from '@/components/HeroSection';
import TimeTogether from '@/components/TimeTogether';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';
import LoveLetter from '@/components/LoveLetter';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
       document.body.style.overflow = 'unset';
    }
  }, [showIntro]);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      
      {/* 1. COMPONENT INTRO LÃNG MẠN */}
      {/* AnimatePresence giúp IntroOverlay từ từ mờ đi khi biến mất */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroOverlay key="intro-overlay" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* 2. KHUNG NỘI DUNG CHÍNH CỦA TRANG WEB */}
      {/* Nếu showIntro = true -> Làm mờ (blur), thu nhỏ nhẹ (scale-[0.98]), vô hiệu hoá click (pointer-events-none) */}
      {/* Nếu showIntro = false -> Trở lại bình thường mượt mà (duration-1000) */}
      <div 
        className={`relative ${
          showIntro 
            ? "blur-md scale-[0.98] h-screen overflow-hidden pointer-events-none transition-all duration-700" 
            : "transition-all duration-1000"
        }`}
      >
        {/* Vân giấy (Texture) chung cho cả trang */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-0 mix-blend-multiply dark:mix-blend-normal"></div>
        
        <div className="relative z-10">
          <HeroSection />
          <TimeTogether />
          <Gallery />
          <VideoSection />
          <LoveLetter />
        </div>
      </div>
      
    </main>
  );
}