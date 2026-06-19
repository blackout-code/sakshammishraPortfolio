"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Cloud, Brain, Database } from "lucide-react";
import { skills } from "@/lib/data";
import { staggerContainer, fadeUp, sectionHeader } from "@/lib/animations";

const categoryIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  code: Code2,
  server: Server,
  cloud: Cloud,
  brain: Brain,
  database: Database,
};

function RadialProgress({ value, size = 52, strokeWidth = 4 }: { value: number; size?: number; strokeWidth?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute text-[10px] font-semibold font-mono text-text-secondary"
      >
        {value}%
      </motion.span>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative section-spacing">
      {/* Subtle background connector */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionHeader}
          className="section-header"
        >
          <span className="section-label">Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Skills &{" "}
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-text-secondary text-base">
            A curated matrix of technologies I work with daily to architect and deliver enterprise-grade backend systems.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {skills.map((category) => {
            const Icon = categoryIcons[category.icon] || Code2;
            return (
              <motion.div
                key={category.category}
                variants={fadeUp}
                className="glass-card rounded-2xl p-7 group"
              >
                <div className="flex items-center gap-3 mb-7">
                  <div className="p-2.5 rounded-xl bg-primary/[0.08] text-primary group-hover:bg-primary/[0.12] transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center justify-between group/skill"
                    >
                      <span className="text-sm text-text-secondary group-hover/skill:text-text-primary transition-colors duration-200">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="hidden sm:block w-20 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              duration: 1,
                              delay: 0.3 + i * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                        <span className="text-[11px] font-mono text-text-tertiary min-w-[2rem] text-right">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}