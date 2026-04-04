"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  Award,
  Layers,
} from "lucide-react";
import CardSpotlight from "@/components/effects/card-spotlight";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Database,
  Wrench,
  Award,
  Layers,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
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
            Technical Expertise
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={index >= 3 ? "lg:col-span-1 md:col-span-1" : ""}
              >
                <CardSpotlight className="h-full p-6">
                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-white/70 border border-white/8 hover:border-purple-500/30 hover:text-white hover:bg-purple-500/10 transition-colors duration-200 cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
