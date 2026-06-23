"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setIsVisible(currentY < lastScrollY.current || currentY < 100);
        lastScrollY.current = currentY;
        setScrolled(currentY > 20);

        const sections = navItems.map((item) => item.href.slice(1));
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`mt-4 rounded-2xl px-5 py-2.5 transition-colors duration-500 ${
              scrolled
                ? "bg-black/70 backdrop-blur-2xl border border-white/[0.06] shadow-glass-xl"
                : "bg-transparent"
            }`}
          >
            <nav className="flex items-center justify-between">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#home");
                }}
                className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-offset-4"
              >
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-violet-accent flex items-center justify-center overflow-hidden">
                  <span className="text-xs font-bold text-white font-display">SM</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
                </div>
                <span className="hidden sm:inline text-sm font-semibold text-text-primary">
                  Saksham Mishra
                </span>
                <span className="hidden sm:inline text-sm text-text-tertiary font-mono">/</span>
                <span className="hidden sm:inline text-xs text-text-tertiary font-mono">engineer</span>
              </a>

              <ul className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleClick(item.href)}
                      className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        activeSection === item.href.slice(1)
                          ? "text-text-primary"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {activeSection === item.href.slice(1) && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 bg-white/[0.07] rounded-lg border border-white/[0.06]"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <a
                href={personalInfo.resumeUrl}
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors duration-300 border border-primary/20"
              >
                <span>Resume</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </nav>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-start justify-center pt-24 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              id="mobile-navigation"
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl mx-4 w-full max-w-sm overflow-hidden border border-white/[0.06] bg-black/90 backdrop-blur-2xl"
            >
              <div className="p-2">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    type="button"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleClick(item.href)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.href.slice(1)
                        ? "bg-white/[0.08] text-text-primary border border-white/[0.06]"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <div className="p-4 border-t border-white/[0.06]">
                <a
                  href={personalInfo.resumeUrl}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors duration-300 border border-primary/20"
                >
                  <span>Download Resume</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}