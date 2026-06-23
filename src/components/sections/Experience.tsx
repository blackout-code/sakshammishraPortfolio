"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

function TechPill({ name }: { name: string }) {
  return (
    <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-primary/[0.06] text-primary/80 border border-primary/[0.1]">
      {name}
    </span>
  );
}

function ExperienceCard({
  item,
  index,
  scrollYProgress,
}: {
  item: (typeof experience)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const progressStart = index * 0.4;
  const progressEnd = index * 0.4 + 0.3;

  const y = useTransform(scrollYProgress, [progressStart, progressEnd], [80, 0]);
  const opacity = useTransform(scrollYProgress, [progressStart, progressEnd], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative pl-0 pb-16 last:pb-0"
    >
      <div className="relative">
        <div className="p-7 sm:p-9 rounded-2xl bg-white/[0.025] border border-white/[0.045] shadow-glass hover:bg-white/[0.045] hover:border-white/[0.085] transition-all duration-500">
          {/* Meta row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-text-tertiary font-mono">
                <Calendar size={12} />
                <span>{item.period}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Building2 size={14} className="text-text-tertiary" />
              <span className="font-medium">{item.company}</span>
            </div>
          </div>

          {/* Role */}
          <h3 className="text-xl font-semibold text-text-primary mb-4">{item.role}</h3>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2.5 mb-5">
            {item.highlights.slice(0, 4).map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-text-tertiary"
              >
                <span className="mt-2 h-1 w-1 rounded-full bg-primary/60 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          {item.technologies && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
              {item.technologies.map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Connector line */}
      {index < experience.length - 1 && (
        <div className="ml-4 mt-4 w-px h-8 bg-gradient-to-b from-primary/20 to-transparent" />
      )}
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section id="experience" ref={ref} className="relative -mt-8 min-h-screen py-24 sm:-mt-12 sm:py-32 flex items-center">
      <div className="pointer-events-none absolute inset-x-0 -top-44 h-96 bg-gradient-to-b from-transparent via-accent/[0.022] to-transparent blur-2xl" />
      <div className="pointer-events-none absolute left-[-14rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-primary/[0.032] blur-[120px]" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            5+ years of{" "}
            <span className="text-gradient">enterprise evolution</span>
          </h2>
          <p className="mt-5 text-base text-text-secondary max-w-2xl">
            From software engineer to senior backend architect — each role building on the last,
            scaling systems, teams, and impact.
          </p>
        </motion.div>

        <div className="mt-14 space-y-5 sm:space-y-6">
          {experience.map((item, index) => (
            <ExperienceCard
              key={item.company}
              item={item}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
