import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LiquidButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export function LiquidButton({
  variant = "primary",
  className,
  children,
  onMouseMove,
  ...props
}: LiquidButtonProps) {
  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
    onMouseMove?.(e);
  };

  return (
    <button
      onMouseMove={handleMove}
      className={cn(variant === "primary" ? "btn-liquid" : "btn-liquid-ghost", className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface LiquidLinkProps {
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  download?: boolean | string;
  "aria-label"?: string;
}

export function LiquidLink({
  href,
  variant = "primary",
  className,
  children,
  target,
  rel,
  ...rest
}: LiquidLinkProps) {
  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMove}
      className={cn(variant === "primary" ? "btn-liquid" : "btn-liquid-ghost", className)}
      {...rest}
    >
      {children}
    </a>
  );
}
