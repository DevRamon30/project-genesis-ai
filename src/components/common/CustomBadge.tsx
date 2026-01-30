import { ReactNode } from "react";

interface CustomBadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "destructive" | "info" | "outline";
  size?: "sm" | "md";
}

export function CustomBadge({ children, variant = "default", size = "sm" }: CustomBadgeProps) {
  const variants = {
    default: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    destructive: "bg-destructive/10 text-destructive",
    info: "bg-info/10 text-info",
    outline: "border bg-transparent text-foreground",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}