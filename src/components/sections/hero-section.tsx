"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import BackgroundBeams from "@/components/effects/background-beams";
import TextGenerate from "@/components/effects/text-generate";
import { siteConfig } from "@/data/site-config";

const Globe3D = dynamic(() => import("@/components/effects/globe-3d"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-purple-500/10 animate-glow-pulse blur-xl" />
    </div>
  ),
});

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <BackgroundBeams />

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <div className="text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Available for opportunities</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
            >
              <span className="gradient-text">{siteConfig.name.toUpperCase()}</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-4xl text-white/70 mb-6 font-heading"
            >
              {siteConfig.title}
            </motion.h2>

            {/* Bio with text generate effect */}
            <TextGenerate
              text={siteConfig.bio}
              className="text-lg text-white/50 mb-10 max-w-xl leading-relaxed"
              delay={0.6}
            />

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:shadow-[0_0_40px_hsl(271_91%_72%/0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-500/40 text-white/80 font-medium hover:bg-purple-500/10 hover:border-purple-500/60 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>

              <a
                href={siteConfig.resume}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/10 text-white/60 font-medium hover:border-white/30 hover:text-white/80 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right — 3D element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="hidden lg:block h-[500px]"
          >
            <Globe3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30 tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown className="w-5 h-5 text-purple-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
