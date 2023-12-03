"use client";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
