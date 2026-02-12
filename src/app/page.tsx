"use client";
import HeroSection from '@/components/HeroSection';
import TimeTogether from '@/components/TimeTogether';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative">
        {/* Vân giấy (Texture) chung cho cả 3 section đầu */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-0 mix-blend-multiply dark:mix-blend-normal"></div>
        
        <div className="relative z-10">
          <HeroSection />
          <TimeTogether />
          <Gallery />
        </div>
      </div>
      <VideoSection />
    </main>
  );
}