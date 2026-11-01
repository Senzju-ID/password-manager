"use client";
import { ButtonToggle } from "@/components";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface SidebarProps {
  sizeIcon: number;
}

const Sidebar = ({ sizeIcon }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeTimerRef.current = setTimeout(() => {
          setIsOpen(false);
        }, 150);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const toggleSidebar = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={sidebarRef}>
      <div className="flex items-center justify-center pr-4 relative z-20">
        <ButtonToggle
          type="button"
          aria-label={isOpen ? "Tutup sidebar" : "Buka sidebar"}
          aria-expanded={isOpen}
          onClick={toggleSidebar}
          className="cursor-pointer"
        >
          {isOpen ? (
            <PanelLeftOpen size={sizeIcon} />
          ) : (
            <PanelLeftClose size={sizeIcon} />
          )}
        </ButtonToggle>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`
          fixed top-16 bottom-0 left-0 z-10
          w-44 md:w-64
          bg-surface border-r border-ui-border shadow-md p-4
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        <p className="text-lg font-bold mb-4">Sidebar Content</p>

        <ul>
          <li className="mb-2">Item 1</li>
          <li className="mb-2">Item 2</li>
          <li className="mb-2">Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;