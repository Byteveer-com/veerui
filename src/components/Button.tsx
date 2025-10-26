type ButtonType = "primary" | "secondary";
import "../index.css";

export const Button = (
    { 
        children,
        type,
    }: { 
        children: React.ReactNode;
        type: ButtonType;
    }
) => {
    const primaryStyle ="bg-blue-600 text-white"
    const secondaryStyle ="bg-slate-600 text-white"

    return (
        <button className={type === "primary" ? primaryStyle : secondaryStyle}>
            {children}
        </button>
    );
};