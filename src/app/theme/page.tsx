"use client";
import { useTheme } from "next-themes";

export default function Theme() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="flex flex-col">
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark mode
      </button>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        Light mode
      </button>
    </main>
  );
}
