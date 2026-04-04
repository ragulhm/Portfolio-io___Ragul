"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

const ParticleField = dynamic(
  () => import("@/components/effects/particle-field"),
  { ssr: false }
);

const FloatingDock = dynamic(
  () => import("@/components/effects/floating-dock"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background layer */}
      <ParticleField />

      {/* Navigation overlay */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating social dock */}
      <FloatingDock />
    </div>
  );
}
