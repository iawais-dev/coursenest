'use client'
import { ThemeContext } from "@/context/theme_context";
import { useContext } from "react";

export function useTheme() {
    const ctx = useContext(ThemeContext)

     if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}