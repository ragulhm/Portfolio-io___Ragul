"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardSpotlight({ children, className }: CardSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl glass-card overflow-hidden transition-all duration-500",
        "hover:scale-[1.02] hover:-translate-y-1",
        className
      )}
    >
      {/* Spotlight radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, hsl(271 76% 63% / 0.12), transparent 60%)`,
        }}
      />

      {/* Top edge glow */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(200px at ${position.x}px 0px, hsl(271 91% 72% / 0.5), transparent)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
