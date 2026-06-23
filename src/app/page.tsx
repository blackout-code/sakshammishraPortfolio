import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UnifiedBackground } from "@/components/background/UnifiedBackground";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <UnifiedBackground />
      <Navbar />
      <main className="relative z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-[60vh] h-[180vh] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.055),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-[190vh] h-[190vh] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_62%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[160vh] bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.045),transparent_62%)] blur-3xl" />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
