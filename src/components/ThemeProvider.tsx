'use client';
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Dùng type 'any' hoặc ComponentProps để tránh lỗi TypeScript khắt khe
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}