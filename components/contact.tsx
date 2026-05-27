"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@constanzaesquivel.com",
    text: "hello@constanzaesquivel.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/constanzaesquivel",
    text: "linkedin.com/in/constanzaesquivel",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/constanzaesquivel",
    text: "github.com/constanzaesquivel",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm text-accent mb-4 tracking-wide uppercase">Contact</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            {"Let's build something useful."}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Available for remote software roles, startup projects, and selected freelance collaborations.
          </p>

          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group flex items-center justify-between p-5 bg-card border border-border rounded-xl hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary/50 rounded-lg group-hover:bg-accent/10 transition-colors">
                    <link.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="text-foreground font-medium">{link.text}</p>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
