"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <p className="text-sm text-accent mb-4 tracking-wide uppercase">About</p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Background
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              {"I'm a software developer with experience building backend systems, data platforms, dashboards, and web applications."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My background includes public-sector environmental technology, blockchain prototypes, and digital operations for businesses. I understand both the technical and product sides of building software.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"I'm currently based near Geneva and looking for remote opportunities where I can combine software engineering, product thinking, and execution."}
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Open to:</span> Remote software roles, startup projects, and selected freelance collaborations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
