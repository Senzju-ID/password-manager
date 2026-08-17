"use client";


interface ButtonToggleProps {
  children?: React.ReactNode;
  className?: string;
  onToggle?: () => void;
  type?: "button" | "submit" | "reset";
}

const ButtonToggle = ({ className, onToggle, children, type }: ButtonToggleProps) => {

  return (
    <button
      type={type}
      onClick={onToggle}
      className={`w-full bg-accent text-primary font-medium py-2.5 rounded-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-150 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonToggle;
