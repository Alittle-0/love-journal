'use client';
import { useState, useEffect } from 'react';
import { Dancing_Script, Montserrat } from 'next/font/google';
import { Mail, Droplets, Waves, Sparkles, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const dancing = Dancing_Script({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function LoveLetter() {
  const [phase, setPhase] = useState<'idle' | 'centering' | 'opening' | 'reading'>('idle');

  useEffect(() => {
    if (phase !== 'idle') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [phase]);

  const handleOpen = () => {
    if (phase !== 'idle') return;
    setPhase('centering');
    setTimeout(() => {
      setPhase('opening');
      setTimeout(() => {
        setPhase('reading');
      }, 800);
    }, 600);
  };

  const handleClose = () => {
    setPhase('opening');
    setTimeout(() => {
      setPhase('centering');
      setTimeout(() => {
        setPhase('idle');
      }, 500);
    }, 500);
  };

  const isCentered = phase !== 'idle';
  const isOpened = phase === 'opening' || phase === 'reading';

  return (
    <>
      <div 
        className={`fixed inset-0 z-[80] transition-all duration-700 pointer-events-none
          ${isCentered ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'}
        `} 
      />

      {/* ================= PHẦN 1: WIDGET PHONG BÌ NHỎ (GIỮ NGUYÊN HIỆU ỨNG 3D) ================= */}
      <div 
        className={`fixed inset-0 z-[90] pointer-events-none flex transition-all duration-700
          ${isCentered ? 'items-center justify-center' : 'items-end justify-start p-4 md:p-8'}
        `}
      >
        <motion.div layout className="pointer-events-auto font-sans z-50">
          
          <motion.div 
            onClick={handleOpen}
            // MẸO: Vì ở góc phong bì rất nhỏ, nên khi ra giữa phải phóng to (scale: 3) để thấy rõ hiệu ứng mở nắp
            animate={isCentered ? { scale: 3, y: 0 } : { scale: 1, y: [0, -5, 0] }}
            transition={isCentered ? { duration: 0.5 } : { y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
            whileHover={phase === 'idle' ? { scale: 1.1, rotate: -5 } : {}}
            
            // KÍCH THƯỚC: w-14 h-10 (Tương đương kích thước nút bấm Theme Toggle)
            className="relative w-14 h-10 cursor-pointer drop-shadow-md"
            style={{ perspective: 1000 }}
          >

            {/* Mặt sau phong bì (Màu hồng nhạt) */}
            <div className="absolute inset-0 bg-rose-200 rounded-md shadow-sm"></div>
            
            {/* Lá thư bên trong (Rút lên khi mở nắp) */}
            <motion.div 
                initial={{ y: 0, height: 28 }}
                animate={{ 
                    y: isOpened ? -20 : 0, 
                    height: isOpened ? 40 : 28 
                }}
                transition={{ duration: 0.6, delay: isOpened ? 0.3 : 0, type: "spring" }}
                className="absolute bottom-0 left-1 right-1 bg-white rounded-t-sm z-10 flex justify-center pt-1 shadow-sm"
            >
                {/* Trái tim trên đỉnh lá thư */}
                <Heart className={`text-rose-400 w-3 h-3 ${isOpened ? 'animate-pulse' : ''}`} />
            </motion.div>

            {/* Mặt trước phong bì (Màu hồng đậm hơn chút) */}
            <div 
                className="absolute inset-0 bg-rose-300 rounded-md z-20 shadow-inner pointer-events-none" 
                style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)' }}
            ></div>

            {/* Nắp phong bì (Hiệu ứng lật 3D giữ nguyên) */}
            <motion.div 
                animate={{ 
                    rotateX: isOpened ? 180 : 0, 
                    zIndex: isOpened ? 5 : 30 
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformOrigin: "top", clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }}
                className="absolute top-0 left-0 w-full h-full bg-rose-400 rounded-md drop-shadow-sm border-b border-rose-500/20"
            ></motion.div>
            
            {/* Con tem hình trái tim trắng */}
            <motion.div 
                animate={{ opacity: isOpened ? 0 : 1, scale: isOpened ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center shadow-md border border-white/50"
            >
                <Heart className="w-3 h-3 text-white fill-white" />
            </motion.div>
            
          </motion.div>
        </motion.div>
      </div>


      {/* ================= PHẦN 2: LÁ THƯ LỚN (GIỮ NGUYÊN) ================= */}
      <AnimatePresence>
        {phase === 'reading' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 pointer-events-none">
              
              <div className="absolute inset-0 pointer-events-auto" onClick={handleClose}></div>

              <motion.div 
                initial={{ scale: 0.8, y: 50, opacity: 0 }} 
                animate={{ scale: 1, y: 0, opacity: 1 }} 
                exit={{ scale: 0.9, y: 50, opacity: 0, transition: { duration: 0.3 } }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="relative w-full max-w-4xl bg-gradient-to-br from-sky-100 via-blue-50 to-sky-200 rounded-[3rem] p-4 md:p-8 shadow-2xl overflow-hidden pointer-events-auto select-none"
              >
                  <div className="absolute top-10 left-10 w-8 h-8 rounded-full border border-white/60 bg-white/20 animate-pulse"></div>
                  <div className="absolute bottom-20 right-12 w-12 h-12 rounded-full border border-white/60 bg-white/20 animate-pulse delay-300"></div>

                  <button 
                      onClick={handleClose}
                      className="absolute top-4 right-4 z-50 p-2 bg-black/10 hover:bg-rose-400 text-slate-600 hover:text-white rounded-full transition-colors"
                  >
                      <X size={20} />
                  </button>

                  <div className="relative w-full h-full border-[3px] border-dashed border-sky-300/70 rounded-[2rem] p-6 md:p-10 flex flex-col bg-white/40 backdrop-blur-md">
                      
                      <div className="flex flex-col md:flex-row justify-between items-center mb-8 relative z-10 gap-4">
                          <div className="bg-teal-200/50 border border-teal-300 text-teal-700 px-4 py-1.5 rounded-sm shadow-sm flex items-center gap-2">
                              <Waves size={16} />
                              <span className={`${montserrat.className} text-xs font-bold uppercase tracking-wider`}>Aquarius</span>
                          </div>

                          <div className="flex items-center gap-3">
                              <Mail className="text-rose-400 fill-rose-200" size={28} />
                              <h2 className={`${dancing.className} text-4xl md:text-5xl text-slate-700 drop-shadow-sm`}>
                                  Gửi người tôi yêu
                              </h2>
                          </div>

                          <div className="hidden md:flex flex-col items-center text-sky-500 animate-bounce">
                              <Droplets size={24} />
                              <Sparkles size={16} className="mt-1" />
                          </div>
                      </div>

                      <div className="flex-1 w-full bg-gradient-to-b from-slate-600 to-slate-800 rounded-3xl shadow-inner p-8 md:p-12 text-white/90 relative overflow-hidden flex flex-col">
                          <p className={`${montserrat.className} text-sm md:text-base leading-relaxed whitespace-pre-line relative z-10 text-justify`}>
                              Chào em, bầu trời xanh của anh.{"\n\n"}
                              Trái đất có 8 tỷ người, nhưng không hiểu sao anh lại chỉ muốn viết những dòng này cho riêng mình em. Cảm ơn em vì đã đến, như một dòng nước mát lành (Aquarius) làm dịu đi những ngày nắng gắt trong cuộc đời anh.{"\n\n"}
                              Hành trình phía trước còn dài, mong rằng chúng ta sẽ luôn nắm chặt tay nhau, cùng nhau tạo nên những thước phim đẹp nhất.{"\n\n"}
                              Thương em nhiều!
                          </p>
                          <Sparkles className="absolute top-10 right-10 text-white/10 w-16 h-16 animate-pulse" />
                          <Sparkles className="absolute bottom-10 left-10 text-white/10 w-24 h-24 animate-pulse delay-500" />
                      </div>

                      <div className="mt-8 flex flex-col md:flex-row justify-between items-end md:items-center relative z-10 gap-6">
                          <div className="flex items-center gap-2 text-sky-500 opacity-80">
                              <Waves size={24} />
                              <span className="italic text-sm text-slate-500">The Water Bearer</span>
                          </div>

                          <div className="flex flex-col items-end">
                              <div className="flex items-center gap-2">
                                  <span className={`${montserrat.className} text-sm text-slate-500`}>Ký tên:</span>
                                  <span className={`${dancing.className} text-3xl text-slate-800 border-b border-slate-300 px-4 pb-1`}>
                                      [Tên của bạn]
                                  </span>
                              </div>
                          </div>
                      </div>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-xs italic flex items-center gap-1 opacity-60">
                          <span className="w-8 h-[1px] bg-slate-300"></span>
                          Made with Aquarius <Waves size={12}/>
                          <span className="w-8 h-[1px] bg-slate-300"></span>
                      </div>

                  </div>
              </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}