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
      className={`cursor-pointer ${className} `}
    >
      {children}
    </button>
  );
};

export default ButtonToggle;
