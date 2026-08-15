"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ButtonThemeSwitchProps {
  className?: string;
}

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false; // SSR guard
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "light";
}

const ButtonThemeSwitch = ({ className }: ButtonThemeSwitchProps) => {
  const [isLight, setIsLight] = useState(getInitialTheme());

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [isLight]);

  function toggleTheme() {
    setIsLight((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "light" : "dark");
      return newTheme;
    });
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-4xl  hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      aria-label="Toggle Theme"
    >
      {isLight ? <Moon size={20} color="black" /> : <Sun size={20} />}
    </button>
  );
};

export default ButtonThemeSwitch;
