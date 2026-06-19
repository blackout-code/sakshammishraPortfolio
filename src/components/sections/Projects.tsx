"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { staggerContainer, fadeUp, sectionHeader } from "@/lib/animations";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div variants={fadeUp} className="group relative h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
        style={{
          transform: `perspective(1000px) rotateX(${-mousePos.y * 6}deg) rotateY(${mousePos.x * 6}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Gradient header bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradientBorder}`} />

        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

        {/* Spotlight effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${50 + mousePos.x * 50}% ${50 + mousePos.y * 50}%, rgba(255,255,255,0.05), transparent 60%)`,
          }}
        />

        <div className="relative p-6 sm:p-8 flex flex-col flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-white/[0.04] text-text-tertiary border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-white/[0.04] text-text-tertiary border border-white/[0.06]">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors mb-1.5">
            {project.title}
          </h3>
          <p className="text-[11px] text-text-tertiary font-mono uppercase tracking-wider mb-4">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-6 flex-1">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 mb-5">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center p-2 rounded-lg bg-white/[0.02] border border-white/[0.03]">
                  <span className="block text-xs font-bold font-display text-gradient">{metric.value}</span>
                  <span className="block text-[9px] text-text-tertiary mt-0.5 uppercase tracking-wider">{metric.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
            <a
              href={project.links.live}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-primary transition-colors group/link"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={project.links.github}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-primary transition-colors group/link"
            >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="relative section-spacing">
      {/* Background connector */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] via-accent/[0.01] to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionHeader}
          className="section-header"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-text-secondary text-base">
            Enterprise-grade backend systems, modern API platforms, and AI-powered workflow solutions 
            built for scale and reliability.
          </p>
        </motion.div>

        {/* Featured projects grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* Other projects */}
        {other.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-20"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <span className="text-xs font-semibold text-text-tertiary uppercase tracking-widest">More Projects</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {other.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}