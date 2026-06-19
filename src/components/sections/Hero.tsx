"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  );
}

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
};

function AnimatedCounter({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="text-2xl sm:text-3xl font-bold font-display text-gradient">
        {value}
      </div>
      <div className="text-xs text-text-tertiary mt-1 font-medium tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.97]);
  const y = useTransform(scrollYProgress, [0, 0.7], [0, 80]);

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.04] via-transparent to-background pointer-events-none" />
      
      {/* Radial glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-primary/[0.08] text-primary border border-primary/[0.15]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {personalInfo.status === "available" ? "Available for new opportunities" : "Open to work"}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={fadeUp} className="max-w-5xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]">
              <span className="text-text-primary">{personalInfo.name}</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-violet-accent to-accent bg-[length:200%_100%] animate-gradient-shift text-gradient">
                {personalInfo.role}
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg sm:text-xl text-text-secondary leading-relaxed font-light"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-sm text-text-tertiary leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-glow active:scale-[0.98]"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-[-20deg]" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-white/[0.08] text-text-secondary text-sm font-semibold hover:bg-white/[0.04] hover:text-text-primary hover:border-white/[0.12] transition-all duration-300 active:scale-[0.98]"
            >
              <span>View Resume</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Stats counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16 sm:mt-20 w-full max-w-2xl"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 py-8 border-t border-white/[0.04]">
              {personalInfo.stats.map((stat, i) => (
                <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
            {personalInfo.social.map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg text-text-quaternary hover:text-text-primary hover:bg-white/[0.04] transition-all duration-300 border border-white/[0.04] hover:border-white/[0.08]"
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToSkills}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-quaternary hover:text-text-tertiary transition-colors"
        aria-label="Scroll to see more"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  );
}