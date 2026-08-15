"use client";


interface ButtonToggleProps {
  children?: React.ReactNode;
  className?: string;
  onToggle?: () => void;
}

const ButtonToggle = ({ className, onToggle, children }: ButtonToggleProps) => {

  return (
    <button
      type="button"
      onClick={onToggle}
      className={className}
    >
      {children}
    </button>
  );
};

export default ButtonToggle;
