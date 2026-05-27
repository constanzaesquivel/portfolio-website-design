"use client";

import { motion } from "framer-motion";
import { Server, Layout, Sparkles, BarChart3, Hexagon } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Systems",
    description: "Reliable, scalable server-side applications and data pipelines.",
    skills: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Data Models", "Automation"],
  },
  {
    icon: Layout,
    title: "Frontend & Dashboards",
    description: "Interactive interfaces that make data accessible and actionable.",
    skills: ["React", "Interactive Maps", "Charts", "Dashboards", "Responsive Interfaces"],
  },
  {
    icon: Sparkles,
    title: "Digital Product & UX",
    description: "User-centered design thinking applied to digital experiences.",
    skills: ["Landing Pages", "Booking Flows", "Website Optimization", "User Journeys"],
  },
  {
    icon: BarChart3,
    title: "Digital Operations",
    description: "Tools and systems that improve online presence and workflows.",
    skills: ["Google Business", "SEO Basics", "Analytics", "Content Workflows"],
  },
  {
    icon: Hexagon,
    title: "Blockchain / Web3",
    description: "Decentralized applications and smart contract development.",
    skills: ["Solidity", "Smart Contracts", "Wallet Integrations", "IPFS", "Polygon"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-accent mb-4 tracking-wide uppercase">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            What I Can Do
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            From backend systems to user interfaces, I build software that solves real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 bg-background border border-border rounded-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-secondary/50 rounded-lg mb-6 group-hover:bg-accent/10 transition-colors">
                <service.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/50 text-xs text-muted-foreground rounded-full"
                  >
                    {skill}
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
