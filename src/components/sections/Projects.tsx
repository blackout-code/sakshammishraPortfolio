"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.045] shadow-glass h-full flex flex-col overflow-hidden transition-all duration-500 hover:bg-white/[0.045] hover:border-white/[0.1]"
        style={{
          transform: `perspective(1000px) rotateX(${-mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* Gradient bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradientBorder}`} />

        {/* Spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${50 + mousePos.x * 50}% ${50 + mousePos.y * 50}%, rgba(255,255,255,0.04), transparent 60%)`,
          }}
        />

        <div className="relative flex flex-col flex-1 z-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/[0.04] text-text-tertiary border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors mb-1">
            {project.title}
          </h3>
          <p className="text-[11px] text-text-tertiary font-mono uppercase tracking-wider mb-4">
            {project.subtitle}
          </p>

          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-6 flex-1">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex flex-wrap gap-3 mb-5">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.03]">
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
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
            >
              <ExternalLink size={12} />
              <span>Live Demo</span>
            </a>
            <a
              href={project.links.github}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
            >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative -mt-8 min-h-screen py-24 sm:-mt-12 sm:py-32 flex items-center">
      <div className="pointer-events-none absolute inset-x-0 -top-44 h-96 bg-gradient-to-b from-transparent via-violet-accent/[0.024] to-transparent blur-2xl" />
      <div className="pointer-events-none absolute right-[-16rem] top-1/4 h-[34rem] w-[34rem] rounded-full bg-accent/[0.03] blur-[130px]" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Systems I&apos;ve{" "}
            <span className="text-gradient">architected & delivered</span>
          </h2>
          <p className="mt-5 text-base text-text-secondary max-w-2xl">
            Enterprise-grade backend systems, modern API platforms, and AI-powered workflow solutions
            built for scale and reliability.
          </p>
        </motion.div>

        {/* Featured grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 my-10 sm:my-12"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
              <span className="text-xs font-semibold text-text-tertiary uppercase tracking-widest">More Projects</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {other.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i + featured.length} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
