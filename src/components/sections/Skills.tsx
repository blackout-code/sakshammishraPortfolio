"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Cloud, Brain, Database } from "lucide-react";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  code: Code2,
  server: Server,
  cloud: Cloud,
  brain: Brain,
  database: Database,
};

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="group flex items-center gap-3">
      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200 min-w-[100px]">
        {name}
      </span>
      <div className="flex-1 h-2 rounded-full bg-white/[0.03] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
      <span className="text-[11px] font-mono text-text-tertiary min-w-[2.5rem] text-right">
        {level}%
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative -mt-10 min-h-screen py-24 sm:-mt-16 sm:py-32 flex items-center">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-transparent via-primary/[0.025] to-transparent blur-2xl" />
      <div className="pointer-events-none absolute right-[-12rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/[0.035] blur-[120px]" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Full-stack engineering capability,{" "}
            <span className="text-gradient">measured in depth</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {skills.map((category, ci) => {
            const Icon = categoryIcons[category.icon] || Code2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: ci * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-white/[0.025] border border-white/[0.045] shadow-glass hover:bg-white/[0.045] hover:border-white/[0.085] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-primary/[0.08] text-primary group-hover:bg-primary/[0.12] transition-colors">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-semibold text-text-primary">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
