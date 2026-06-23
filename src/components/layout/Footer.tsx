"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

const footerNavItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.04] bg-background/30 pt-16 pb-8 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-violet-accent flex items-center justify-center">
              <span className="text-xs font-bold text-white font-display">SM</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-text-primary">{personalInfo.name}</p>
              <p className="text-xs text-text-tertiary">{personalInfo.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-8" aria-label="Footer navigation">
            {footerNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-1 text-sm text-text-tertiary transition-colors duration-200 hover:text-text-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Bottom bar */}
          <div className="w-full pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-text-quaternary">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-xs text-text-quaternary">
                Built with Next.js, Tailwind CSS & Framer Motion
              </p>
              <button
                type="button"
                onClick={scrollToTop}
                className="group p-2 rounded-lg text-text-quaternary hover:text-text-primary hover:bg-white/[0.04] transition-all duration-200 border border-white/[0.04] hover:border-white/[0.08]"
                aria-label="Scroll to top"
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="block"
                >
                  <ArrowUp size={14} />
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
