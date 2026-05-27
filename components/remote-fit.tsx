"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const qualities = [
  "Independent execution on complex projects",
  "Experience owning projects end-to-end",
  "Comfortable translating business needs into working software",
  "Used to working with technical and non-technical stakeholders",
  "Strong written communication",
  "International profile and cross-cultural experience",
  "Available immediately",
  "EU citizen",
];

export function RemoteFit() {
  return (
    <section className="py-32 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-sm text-accent mb-4 tracking-wide uppercase">Remote Work</p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Why Remote Works
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {"I've built my career around independent execution and clear communication. Whether working with technical teams or business stakeholders, I deliver results without needing constant supervision."}
            </p>
          </div>

          <div className="space-y-4">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 flex items-center justify-center bg-accent/10 rounded-full mt-0.5">
                  <Check size={12} className="text-accent" />
                </div>
                <span className="text-foreground/90">{quality}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
