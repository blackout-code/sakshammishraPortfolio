"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download, Server } from "lucide-react";
import { personalInfo } from "@/lib/data";

const heroStats = personalInfo.stats.slice(0, 3);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.8, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.6], [0, -48]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden px-4 pt-28 pb-28 sm:px-6 sm:pt-32 sm:pb-32 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-[-8rem] h-72 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent blur-2xl" />
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl items-center"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary shadow-glass backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {personalInfo.status === "available" ? "Available for new opportunities" : "Open to work"}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <Server size={14} strokeWidth={2.2} />
              Backend Systems & Cloud Architecture
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] -tracking-[0.035em] text-text-primary sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">{personalInfo.name}</span>
              <span className="mt-2 block bg-gradient-to-r from-primary via-violet-accent to-accent bg-[length:200%_100%] text-gradient animate-gradient-shift">
                {personalInfo.role}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="group relative inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-glow active:scale-[0.98]"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowUpRight size={16} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-7 py-3 text-sm font-semibold text-text-secondary transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-text-primary active:scale-[0.98]"
            >
              <span>View Resume</span>
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid w-full max-w-3xl grid-cols-3 divide-x divide-white/[0.06] rounded-lg border border-white/[0.06] bg-white/[0.025] shadow-glass backdrop-blur-xl"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="px-3 py-5 sm:px-6">
                <div className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase leading-tight tracking-[0.1em] text-text-tertiary sm:text-[11px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
