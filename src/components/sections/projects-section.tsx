"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Radio } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/effects/bento-grid";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass text-sm text-purple-300 mb-4"
          >
            Featured Work
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Building the future with AI and Web Technologies
          </p>
        </motion.div>

        {/* Bento grid */}
        <BentoGrid>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className={
                project.gridSpan === 2
                  ? "md:col-span-2"
                  : project.gridSpan === 3
                  ? "md:col-span-2 lg:col-span-3"
                  : ""
              }
            >
              <BentoCard className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      {project.status === "live" && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                          <Radio className="w-3 h-3" />
                          LIVE
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/15 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-white/40 flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-0.5 text-xs">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white text-sm font-medium hover:shadow-[0_0_20px_hsl(271_91%_72%/0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/60 text-sm font-medium hover:border-white/25 hover:text-white/80 transition-all duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </BentoGrid>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
