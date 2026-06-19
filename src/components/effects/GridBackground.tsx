"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Grid with subtle movement
      const spacing = 64;
      const offsetY = (time * 10) % spacing;
      
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= w; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = -spacing + offsetY; y <= h; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Floating gradient orbs with enhanced colors
      const orbs = [
        { 
          x: w * 0.15, y: h * 0.25, r: 300, 
          color1: "rgba(99, 102, 241, 0.06)", 
          color2: "rgba(99, 102, 241, 0.02)" 
        },
        { 
          x: w * 0.85, y: h * 0.55, r: 350, 
          color1: "rgba(6, 182, 212, 0.05)", 
          color2: "rgba(6, 182, 212, 0.015)" 
        },
        { 
          x: w * 0.5, y: h * 0.8, r: 280, 
          color1: "rgba(139, 92, 246, 0.04)", 
          color2: "rgba(139, 92, 246, 0.01)" 
        },
        { 
          x: w * 0.7, y: h * 0.15, r: 220, 
          color1: "rgba(99, 102, 241, 0.035)", 
          color2: "rgba(99, 102, 241, 0.01)" 
        },
      ];

      orbs.forEach((orb, i) => {
        const pulse = Math.sin(time * 1.5 + i * 1.8) * 30;
        const floatY = Math.sin(time * 0.8 + i * 2.2) * 15;
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y + floatY, 0,
          orb.x, orb.y + floatY, orb.r + pulse
        );
        gradient.addColorStop(0, orb.color1);
        gradient.addColorStop(0.4, orb.color2);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      });

      // Subtle horizontal line glow effect
      for (let i = 0; i < 3; i++) {
        const y = h * (0.3 + i * 0.2) + Math.sin(time * 0.5 + i) * 20;
        const gradient = ctx.createLinearGradient(0, y, w, y);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.3, "rgba(99, 102, 241, 0.02)");
        gradient.addColorStop(0.5, "rgba(99, 102, 241, 0.03)");
        gradient.addColorStop(0.7, "rgba(99, 102, 241, 0.02)");
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, y - 1, w, 2);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}