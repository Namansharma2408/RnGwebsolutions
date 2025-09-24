"use client";
import { useRouter } from "next/navigation";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  route?: string; // 👈 optional, triggers router.push if provided
  trackClick?: boolean; // 👈 optional, for logging / analytics
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  route,
  trackClick = false,
  onClick,
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (trackClick) {
      console.log("Button clicked:", route || "(no route)");
      // 👉 here you can call an analytics API instead
    }

    if (route) {
      router.push(`/${route}`);
    }

    // Run any custom onClick passed from parent
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={` ${className || ""}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
