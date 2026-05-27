"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Globe, User, Briefcase } from "lucide-react";

const badges = [
  { icon: Globe, label: "Remote-ready" },
  { icon: MapPin, label: "Based near Geneva" },
  { icon: User, label: "EU citizen" },
  { icon: Briefcase, label: "Available for selected remote roles and freelance collaborations" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Small intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm text-muted-foreground mb-6 tracking-wide uppercase"
          >
            Software Developer / Digital Systems
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-tight mb-6"
          >
            Building digital systems
            <br />
            <span className="text-muted-foreground">and online experiences.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Software Developer focused on backend systems, web platforms, data-driven products, and digital operations for modern businesses.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {badges.map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm text-muted-foreground"
              >
                <badge.icon size={14} className="text-accent" />
                {badge.label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-all duration-200"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-border text-foreground rounded-lg font-medium hover:bg-secondary/50 transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
