
import React from "react";
import { cn } from "@/lib/utils";

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
  dark?: boolean;
}

const BlurCard = ({ 
  className, 
  children, 
  hoverEffect = false,
  dark = false,
  ...props 
}: BlurCardProps) => {
  return (
    <div
      className={cn(
        dark ? "glass-card-dark" : "glass-card",
        "p-6 transition-all duration-300",
        hoverEffect ? "hover:shadow-lg hover:scale-[1.02] hover:bg-opacity-90" : "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurCard;
