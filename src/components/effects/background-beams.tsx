"use client";

import { useEffect, useRef } from "react";

export default function BackgroundBeams({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // CSS-only beams — no JS animation needed
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}
    >
      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-purple-500/5 blur-[120px]" />

      {/* Beam lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(271, 76%, 63%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(271, 91%, 72%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Diagonal beams */}
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="url(#beam1)"
          strokeWidth="1"
          className="animate-glow-pulse"
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="url(#beam2)"
          strokeWidth="1"
          className="animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <line
          x1="50%"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="url(#beam1)"
          strokeWidth="0.5"
          className="animate-glow-pulse"
          style={{ animationDelay: "0.75s" }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="30%"
          stroke="url(#beam2)"
          strokeWidth="0.5"
          className="animate-glow-pulse"
          style={{ animationDelay: "2.25s" }}
        />
      </svg>

      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] animate-glow-pulse" />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  );
}
