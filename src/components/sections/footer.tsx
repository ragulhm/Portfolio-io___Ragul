import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — branding */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>© {new Date().getFullYear()}</span>
            <span className="gradient-text font-semibold">{siteConfig.name}</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline-flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> and code
            </span>
          </div>

          {/* Right — social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: siteConfig.github, label: "GitHub" },
              { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/5 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom padding for floating dock */}
      <div className="h-16" />
    </footer>
  );
}
