"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroScene } from "@/components/three/FloatingGeometry";

export function UnifiedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create subtle gradient shifts as user scrolls through the whole page
  const bgOpacity1 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.03, 0.04, 0.03, 0.04, 0.03]);
  const bgOpacity2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.02, 0.02, 0.03, 0.02, 0.02]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base dark background */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle radial center glow — always present, shifts intensity with scroll */}
      <motion.div
        style={{ opacity: bgOpacity1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-primary/[0.04] blur-[120px] rounded-full"
      />

      {/* Secondary accent glow that shifts as you scroll */}
      <motion.div
        style={{ opacity: bgOpacity2 }}
        className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/[0.03] blur-[100px] rounded-full"
      />

      {/* Violet accent layer */}
      <motion.div
        style={{ opacity: bgOpacity1 }}
        className="absolute top-1/2 left-0 w-[700px] h-[500px] bg-violet-accent/[0.03] blur-[100px] rounded-full -translate-y-1/2"
      />

      {/* 3D scene rendered only on client side */}
      <HeroScene />

      {/* Subtle top/bottom vignette to frame content */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  );
}