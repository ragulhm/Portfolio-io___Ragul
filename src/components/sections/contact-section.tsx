"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Download, Send, ExternalLink } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site-config";

const quickLinks = [
  {
    icon: Download,
    label: "Download Resume",
    description: "Get my latest CV",
    href: siteConfig.resume,
    download: true,
    primary: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    description: "Let's connect",
    href: siteConfig.linkedin,
    download: false,
    primary: false,
  },
  {
    icon: Github,
    label: "GitHub Profile",
    description: "View my code",
    href: siteConfig.github,
    download: false,
    primary: false,
  },
  {
    icon: Mail,
    label: "Send Email",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    download: false,
    primary: false,
  },
  {
    icon: Phone,
    label: "Call Me",
    description: "+91 8438173391",
    href: `tel:${siteConfig.phone}`,
    download: false,
    primary: false,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteConfig.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
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
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Let&apos;s build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:shadow-[0_0_30px_hsl(271_91%_72%/0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right — Recruiter Fast-Track */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="glass-card rounded-2xl p-6 mb-4">
              <h3 className="text-lg font-bold text-white mb-1">
                ⚡ Recruiter Fast-Track
              </h3>
              <p className="text-sm text-white/40 mb-4">
                Quick access to everything you need
              </p>
            </div>

            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.download ? undefined : "_blank"}
                  rel={link.download ? undefined : "noopener noreferrer"}
                  download={link.download ? true : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    link.primary
                      ? "bg-gradient-to-r from-purple-600/20 to-violet-500/20 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-[0_0_30px_hsl(271_91%_72%/0.15)]"
                      : "glass-card hover:scale-[1.02]"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl ${
                      link.primary
                        ? "bg-gradient-to-br from-purple-600 to-violet-500"
                        : "bg-white/5 group-hover:bg-purple-500/10"
                    } transition-colors`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        link.primary
                          ? "text-white"
                          : "text-white/50 group-hover:text-purple-400"
                      } transition-colors`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">
                      {link.label}
                    </div>
                    <div className="text-xs text-white/40">
                      {link.description}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
