import "../index.css";
import clsx from "clsx";

type ButtonType = "primary" | "secondary" | "red" | "yellow" | "green";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
  children: React.ReactNode;
  variant: ButtonType;
  size: ButtonSize;
};

const variantStyles: Record<ButtonType, string> = {
  primary: "font-semibold text-slate-100 bg-gradient-to-b from-emerald-500 to-emerald-600 shadow-lg shadow-slate-900/20 hover:from-emerald-600",
  secondary: "font-semibold text-slate-100 bg-gradient-to-b from-slate-600 to-slate-700 shadow-lg shadow-slate-900/20 hover:from-slate-700",
  red: "font-semibold text-slate-100 bg-gradient-to-b from-red-600 to-red-700 shadow-lg shadow-slate-900/20 hover:from-red-700",
  yellow: "font-semibold text-slate-900 bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg shadow-slate-900/20 hover:from-yellow-500",
  green: "font-semibold text-slate-100 bg-gradient-to-b from-green-700 to-green-800 shadow-lg shadow-slate-900/20 hover:from-green-800",
};

const sizeStyles: Record<ButtonSize, string> = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-6 py-3 text-lg"
};

export const Button = ({ 
    children, 
    variant = "primary", 
    size = "medium", 
}: ButtonProps) => {
    const baseStyle = "cursor-pointer rounded-lg";
    const appliedTypeStyle = variantStyles[variant];
    const appliedSizeStyle = sizeStyles[size];

    return (
        <>
        <button type="button" className={clsx(baseStyle, appliedSizeStyle, appliedTypeStyle)}>
            {children}
        </button>
        </>
    );
};