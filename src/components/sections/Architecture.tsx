"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { architectureProjects } from "@/lib/data";
import { staggerContainer, fadeUp, sectionHeader } from "@/lib/animations";
import { Server, Shield, BarChart3, ArrowUpRight } from "lucide-react";

const diagramIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  microservices: Server,
  gateway: Shield,
  observability: BarChart3,
};

function ArchitectureCard({
  item,
  index,
}: {
  item: (typeof architectureProjects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = diagramIcons[item.diagram] || Server;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="glass-card-bordered rounded-2xl overflow-hidden group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative p-6 sm:p-8">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <div className="p-3 rounded-xl bg-primary/[0.08] text-primary group-hover:bg-primary/[0.12] transition-colors flex-shrink-0">
              <Icon size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-text-tertiary font-mono uppercase tracking-wider">
                {item.subtitle}
              </p>
            </div>
            <ArrowUpRight size={16} className="text-text-tertiary group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>

          {/* Description */}
          <p className={`text-sm text-text-secondary leading-relaxed ${isExpanded ? '' : 'line-clamp-2'} mb-5`}>
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-mono rounded-lg bg-white/[0.03] text-text-tertiary border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Impact metrics */}
          <div className="grid grid-cols-3 gap-3">
            {item.impact.map((imp) => (
              <div
                key={imp}
                className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] group/impact"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mx-auto mb-2 group-hover/impact:bg-primary transition-colors" />
                <span className="block text-[11px] text-text-tertiary leading-tight">
                  {imp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" ref={ref} className="relative section-spacing">
      {/* Background connector */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-accent/[0.015] to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionHeader}
          className="section-header"
        >
          <span className="section-label">System Design</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Architecture &{" "}
            <span className="text-gradient">System Design</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-text-secondary text-base">
            Architectural decisions and system designs that have shaped enterprise-scale backend platforms 
            and integration ecosystems.
          </p>
        </motion.div>

        {/* Architecture grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {architectureProjects.map((item, index) => (
            <ArchitectureCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}