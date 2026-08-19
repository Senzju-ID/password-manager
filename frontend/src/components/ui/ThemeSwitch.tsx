"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeSwitchProps {
  className?: string;
  sizeIcon: number;
}

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false;
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "light";
}

const ThemeSwitch = ({ className, sizeIcon }: ThemeSwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      setIsLight(getInitialTheme());
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isLight) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [isLight, mounted]);

  function toggleTheme() {
    if (!mounted || isTransitioning) return;
    setIsTransitioning(true);
    setIsLight((prev) => {
        const newTheme = !prev;
        localStorage.setItem("theme", newTheme ? "light" : "dark");
        return newTheme;
      });
    setTimeout(() => {
      setIsTransitioning(false);
    }, 2000);
  }

  const isLoading = !mounted || isTransitioning;
  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={isLoading}
      className={`group border border-white/22 light:border-black/70 rounded-4xl transition-all duration-300 ${
        isLoading
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 scale-100"
      } ${className}`}
      aria-label="Toggle Theme"
    >
      {isLight ? (
        <Moon
          size={sizeIcon}
          className={`text-center text-black group-hover:text-white m-2 duration-1000 transition-transform `}
        />
      ) : (
        <Sun
          size={sizeIcon}
          className={`text-center m-2 duration-1000 transition-transform`}
        />
      )}
    </button>
  );
};

export default ThemeSwitch;
