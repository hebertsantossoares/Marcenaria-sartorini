"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") setTheme("dark");
      else if (saved === "light") setTheme("light");
      else {
        const prefers = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefers ? "dark" : "light");
      }
    } catch (e) {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    try {
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  return (
    <div className="theme-toggle">
      <button
        aria-label="Alternar tema"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{ padding: 10, borderRadius: 999, border: "1px solid currentColor", background: "transparent", color: "inherit" }}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
