'use client';
import React, { useState, useEffect } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function TimeTogether() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 });
  
  useEffect(() => {
    // Sửa ngày bắt đầu yêu của bạn ở đây: Năm, Tháng (bắt đầu từ 0), Ngày
    const START_DATE = new Date(2025, 6, 2); 

    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - START_DATE.getTime();
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Đã xóa bg-foreground/5 và các loại border để nền trong suốt
    <section className="py-20 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-10 uppercase text-foreground/80 tracking-widest">
        Chúng mình đã bên nhau
      </h3>
      
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto px-4">
        {[
          { label: 'Ngày', val: time.days },
          { label: 'Giờ', val: time.hours },
          { label: 'Phút', val: time.minutes }
        ].map((item) => (
          <div key={item.label} className="bg-card p-6 rounded-2xl shadow-xl ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1">
            <span className="block text-4xl md:text-6xl font-bold text-rose-500 dark:text-rose-400">
              {item.val}
            </span>
            <span className={`${montserrat.className} uppercase text-xs md:text-sm tracking-widest text-foreground/60 mt-3 block`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}