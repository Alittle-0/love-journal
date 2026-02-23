"use client";
import React, { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function TimeTogether() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Ngày bắt đầu: Năm 2025, Tháng 6 (tháng 7 trong JS), Ngày 2, 15 giờ, 0 phút, 0 giây
    const START_DATE = new Date(2025, 6, 2, 15, 0, 0);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - START_DATE.getTime();
      
      // Nếu thời gian hiện tại chưa tới mốc thì hiển thị toàn số 0 để tránh lỗi số âm
      if (diff < 0) {
        setTime({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 text-center px-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 uppercase text-foreground/80 tracking-wider sm:tracking-widest">
        Chúng mình đã bên nhau
      </h3>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto">
        {[
          { label: "Ngày", val: time.days },
          { label: "Giờ", val: time.hours },
          { label: "Phút", val: time.minutes },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-card p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-rose-500 dark:text-rose-400">
              {item.val}
            </span>
            <span
              className={`${montserrat.className} uppercase text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-wider sm:tracking-widest text-foreground/60 mt-1.5 sm:mt-2 md:mt-3 block`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}