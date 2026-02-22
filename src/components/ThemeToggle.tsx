"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      // Đã xoá padding (p-3) và đổi sang ép cứng width/height: w-10 h-10 (mobile), w-12 h-12 (desktop) để tạo thành vòng tròn hoàn hảo
      // Vị trí đồng bộ 100% lề phải với MusicPlayer
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#5d4037] text-[#5d4037] dark:text-[#f4eee8] shadow-xl border border-gray-200 dark:border-gray-700 transition-all hover:scale-110 cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 md:h-6 md:w-6" />
      ) : (
        <Moon className="h-5 w-5 md:h-6 md:w-6" />
      )}
    </button>
  );
}