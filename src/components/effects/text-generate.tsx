"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextGenerate({ text, className, delay = 0 }: TextGenerateProps) {
  const words = text.split(" ");

  return (
    <motion.p className={cn("", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            delay: delay + i * 0.06,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
