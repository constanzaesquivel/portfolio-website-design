"use client";

import { motion } from "framer-motion";

const techStack = {
  Backend: ["Java", "Spring Boot", "PostgreSQL", "JPA", "REST APIs"],
  Frontend: ["React", "JavaScript", "TypeScript", "Next.js", "HTML", "CSS"],
  "Data & Visualization": ["OpenLayers", "ECharts", "Dashboards", "Data Processing"],
  Digital: ["SEO", "UX/UI", "Google Business Profile", "Analytics", "Content Systems"],
  Blockchain: ["Solidity", "ethers.js", "Hardhat", "Polygon", "IPFS"],
  Tools: ["Git", "GitHub", "Vercel", "Docker basics"],
};

export function TechStack() {
  return (
    <section id="tech" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-accent mb-4 tracking-wide uppercase">Technologies</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Tools and technologies I work with regularly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm font-medium text-foreground mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary/50 border border-border text-sm text-foreground/80 rounded-lg hover:border-accent/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
