"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { experience } from "@/lib/data";
import { staggerContainer, fadeUp, sectionHeader } from "@/lib/animations";

function TimelineLine() {
  return (
    <div className="absolute left-[23px] top-0 bottom-0 w-px hidden md:block">
      <div className="h-full w-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
    </div>
  );
}

function MetricsBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.04] min-w-[80px]">
      <span className="text-sm font-bold font-display text-gradient">{value}</span>
      <span className="text-[10px] text-text-tertiary mt-0.5 uppercase tracking-wider font-medium">{label}</span>
    </div>
  );
}

function TechPill({ name }: { name: string }) {
  return (
    <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-primary/[0.06] text-primary/80 border border-primary/[0.1]">
      {name}
    </span>
  );
}

function TimelineCard({
  item,
  index,
}: {
  item: (typeof experience)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-14 md:pl-14 pb-20 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-[14px] top-1.5 w-[19px] h-[19px] hidden md:flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: index * 0.2 + 0.3,
          }}
          className="w-full h-full rounded-full border-2 border-primary/50 bg-background flex items-center justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
        </motion.div>
      </div>

      <div className="relative">
        {/* Glass card */}
        <div className="glass-card rounded-2xl p-7 sm:p-9">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-text-primary">{item.role}</h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/[0.08] text-primary border border-primary/[0.12]">
                  Current
                </span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Building2 size={14} className="text-text-tertiary" />
                <span className="text-sm font-medium">{item.company}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-tertiary font-mono bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.04] self-start">
              <Calendar size={12} />
              <span>{item.period}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-3 mb-6">
            {item.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.3 + i * 0.06,
                }}
                className="flex items-start gap-3 text-sm text-text-tertiary"
              >
                <span className="mt-2 h-1 w-1 rounded-full bg-primary/60 flex-shrink-0" />
                {highlight}
              </motion.li>
            ))}
          </ul>

          {/* Metrics grid */}
          {item.metrics && (
            <div className="flex flex-wrap gap-3 mb-6">
              {item.metrics.map((metric) => (
                <MetricsBadge key={metric.label} label={metric.label} value={metric.value} />
              ))}
            </div>
          )}

          {/* Technologies */}
          {item.technologies && (
            <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.04]">
              {item.technologies.map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
            </div>
          )}
        </div>

        {/* Connecting gradient line for non-last items */}
        {index < experience.length - 1 && (
          <div className="absolute -bottom-10 left-[23px] w-px h-10 hidden md:block bg-gradient-to-b from-primary/20 to-transparent" />
        )}
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative section-spacing">
      {/* Background connector */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-accent/[0.02] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionHeader}
          className="section-header"
        >
          <span className="section-label">Career</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Experience{" "}
            <span className="text-gradient">Timeline</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-text-secondary text-base">
            5+ years of architecting enterprise backend systems, leading modernization initiatives, 
            and building scalable microservices on Azure.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <TimelineLine />
          {experience.map((item, index) => (
            <TimelineCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}