"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

function GithubSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  );
}

const socialSvgs: Record<string, React.ComponentType> = {
  github: GithubSvg,
  linkedin: LinkedinSvg,
  twitter: XSvg,
};

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative -mt-8 min-h-screen py-24 sm:-mt-12 sm:py-32 flex items-center">
      <div className="pointer-events-none absolute inset-x-0 -top-44 h-96 bg-gradient-to-b from-transparent via-primary/[0.022] to-transparent blur-2xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-accent/[0.03] blur-[130px]" />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Let&apos;s build something{" "}
            <span className="text-gradient">remarkable</span>
          </h2>
          <p className="mt-5 text-base text-text-secondary max-w-2xl">
            Whether you have a project in mind, a question about distributed systems, or just want to connect &mdash; I&apos;m always open to interesting conversations.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-white/[0.025] border border-white/[0.045] shadow-glass hover:bg-white/[0.045] transition-colors space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/[0.08] text-primary">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-text-secondary hover:text-primary transition-colors mt-0.5 block">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/[0.08] text-primary">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Location</p>
                  <p className="text-sm text-text-secondary mt-0.5">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/[0.08] text-primary">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-30" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Status</p>
                  <p className="text-sm text-text-secondary mt-0.5">
                    {personalInfo.status === "available"
                      ? "Available for new projects & opportunities"
                      : "Currently focused on ongoing work"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.025] border border-white/[0.045] shadow-glass">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs text-text-tertiary">Typically responds within 24 hours</span>
            </div>

            <div className="flex items-center gap-2">
              {personalInfo.social.map((social) => {
                const Icon = socialSvgs[social.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-text-quaternary hover:text-text-primary hover:bg-white/[0.04] transition-all duration-300 border border-white/[0.04] hover:border-white/[0.08]"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-7 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.045] shadow-glass space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="name" className="text-[11px] font-semibold text-text-secondary mb-2 block uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-text-primary text-sm placeholder:text-text-quaternary focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                    className="absolute -bottom-px left-3 right-3 h-px bg-gradient-to-r from-primary to-accent origin-left rounded-full"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="text-[11px] font-semibold text-text-secondary mb-2 block uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-text-primary text-sm placeholder:text-text-quaternary focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                    className="absolute -bottom-px left-3 right-3 h-px bg-gradient-to-r from-primary to-accent origin-left rounded-full"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="text-[11px] font-semibold text-text-secondary mb-2 block uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-text-primary text-sm placeholder:text-text-quaternary focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                  className="absolute -bottom-px left-3 right-3 h-px bg-gradient-to-r from-primary to-accent origin-left rounded-full"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group relative w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-glow"
              >
                {submitted ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span>Message sent!</span>
                  </motion.span>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <Send size={14} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-[-20deg]" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
