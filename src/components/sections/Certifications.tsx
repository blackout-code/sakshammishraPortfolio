"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Code2, Server, Brain, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { staggerContainer, fadeUp, sectionHeader } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  cloud: Cloud,
  code: Code2,
  server: Server,
  brain: Brain,
};

export function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="relative section-spacing">
      {/* Background connector */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionHeader}
          className="section-header"
        >
          <span className="section-label">Credentials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Certifications &{" "}
            <span className="text-gradient">Accreditations</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-text-secondary text-base">
            Industry-recognized certifications validating expertise in cloud architecture, 
            backend engineering, and enterprise development.
          </p>
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Code2;
            return (
              <motion.div
                key={cert.name}
                variants={fadeUp}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative p-6 sm:p-7">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                  <div className="relative">
                    {/* Icon */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cert.gradient} text-primary`}>
                        <Icon size={18} />
                      </div>
                      <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-white/[0.04] text-text-tertiary border border-white/[0.06]">
                        {cert.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors mb-2 leading-snug">
                      {cert.name}
                    </h3>

                    {/* Issuer & Date */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.04]">
                      <span className="text-xs text-text-tertiary font-medium">{cert.issuer}</span>
                      <span className="text-[11px] font-mono text-text-quaternary">{cert.date}</span>
                    </div>

                    {/* Hover overlay footer with CTA */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-primary hover:text-primary-hover transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View Credential</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}