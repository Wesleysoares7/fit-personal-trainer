import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

const ButtonPrimary = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-8 py-1 bg-primary1 text-white rounded flex items-center justify-center gap-2 transition hover:bg-primary2 ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default ButtonPrimary;
