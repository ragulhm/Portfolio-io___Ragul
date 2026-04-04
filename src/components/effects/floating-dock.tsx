"use client";

import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

const dockItems = [
  { icon: Github, label: "GitHub", href: siteConfig.github },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", href: `tel:${siteConfig.phone}` },
  { icon: Download, label: "Resume", href: siteConfig.resume, download: true },
];

function DockIcon({
  icon: Icon,
  label,
  href,
  download,
  mouseX,
}: {
  icon: typeof Github;
  label: string;
  href: string;
  download?: boolean;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 150;
    return val - rect.x - rect.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [44, 64, 44]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download ? true : undefined}
      style={{ width, height: width }}
      className={cn(
        "flex items-center justify-center rounded-xl",
        "bg-white/5 backdrop-blur-md border border-white/10",
        "hover:bg-purple-500/20 hover:border-purple-500/40",
        "transition-colors duration-200 relative group/icon"
      )}
    >
      <Icon className="w-5 h-5 text-white/70 group-hover/icon:text-white transition-colors" />

      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-background/90 border border-white/10 text-xs text-foreground whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </motion.a>
  );
}

export default function FloatingDock({ className }: { className?: string }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        "flex items-end gap-2 px-4 py-3 rounded-2xl",
        "glass-strong",
        className
      )}
    >
      {dockItems.map((item) => (
        <DockIcon key={item.label} {...item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}
