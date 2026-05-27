"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Globe, Hexagon, ExternalLink, Github, Linkedin, FileText, Link2, Box } from "lucide-react";

const categories = [
  { id: "software", label: "Software Engineering", icon: Code2 },
  { id: "digital", label: "Digital Presence & UX", icon: Globe },
  { id: "web3", label: "Creative / Web3", icon: Hexagon },
];

type ProofLink = {
  type: "live" | "github" | "contract" | "linkedin" | "casestudy" | "website";
  url: string;
  label?: string;
};

const proofLinkConfig = {
  live: { icon: ExternalLink, label: "Live Site" },
  github: { icon: Github, label: "GitHub" },
  contract: { icon: Box, label: "Smart Contract" },
  linkedin: { icon: Linkedin, label: "LinkedIn Post" },
  casestudy: { icon: FileText, label: "Case Study" },
  website: { icon: Link2, label: "Website" },
};

const projects = {
  software: [
    {
      title: "National Real-time Hydrological Monitoring Platform",
      problem: "Government agencies needed real-time water resource monitoring across the entire national territory with standardized data exchange.",
      solution: "Built a comprehensive monitoring platform with REST APIs, interactive maps, real-time dashboards, and automated data processing pipelines.",
      impact: "Enabled real-time decision-making for water resource management and drought response across national agencies.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "OpenLayers", "ECharts"],
      proof: [
        { type: "live", url: "#", label: "Platform" },
        { type: "linkedin", url: "#" },
      ] as ProofLink[],
    },
    {
      title: "REST APIs for Hydrological & Meteorological Data",
      problem: "Fragmented data sources made it difficult for researchers and agencies to access environmental data programmatically.",
      solution: "Designed and implemented RESTful APIs with proper authentication, rate limiting, and comprehensive documentation.",
      impact: "Standardized data access for multiple downstream applications and third-party integrations.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Data Processing"],
      proof: [
        { type: "casestudy", url: "#" },
      ] as ProofLink[],
    },
    {
      title: "Automated Drought Protocol Calculations",
      problem: "Manual drought assessment processes were slow and inconsistent, delaying critical response decisions.",
      solution: "Developed automated calculation systems for drought indices with forecasting support and alert mechanisms.",
      impact: "Reduced assessment time from days to minutes while improving accuracy and consistency.",
      technologies: ["Java", "PostgreSQL", "Data Processing", "Automation"],
      proof: [] as ProofLink[],
    },
    {
      title: "WMO Data Exchange Automation",
      problem: "International data sharing required manual formatting and submission to WMO standards.",
      solution: "Built automated pipelines using standardized data flows compliant with World Meteorological Organization protocols.",
      impact: "Achieved seamless international data exchange with zero manual intervention.",
      technologies: ["Java", "REST APIs", "Data Processing", "Automation"],
      proof: [] as ProofLink[],
    },
  ],
  digital: [
    {
      title: "Dental Clinic Digital Optimization",
      challenge: "Geneva-based dental clinic struggled with online visibility, booking friction, and inconsistent digital presence.",
      solution: "Comprehensive digital optimization including website UX improvements, booking flow redesign, Google Business Profile optimization, and content strategy.",
      outcome: "Improved online discoverability and streamlined patient acquisition funnel.",
      deliverables: ["Website Updates", "Booking Flow Improvements", "SEO Structure", "Google Business Optimization", "Content Calendar"],
      proof: [
        { type: "website", url: "#", label: "Clinic Website" },
        { type: "casestudy", url: "#" },
      ] as ProofLink[],
    },
    {
      title: "Wakeboard Business Web & Digital Presence",
      challenge: "Seasonal sports business needed to maximize online visibility during peak booking periods.",
      solution: "Developed web presence with focus on local SEO, booking integration, and social media alignment.",
      outcome: "Increased booking inquiries through improved digital touchpoints.",
      deliverables: ["Landing Pages", "Local SEO", "Performance Tracking", "Social Media Management"],
      proof: [
        { type: "website", url: "#" },
      ] as ProofLink[],
    },
  ],
  web3: [
    {
      title: "CO2X Carbon Technologies",
      problem: "Carbon credit verification and tokenization lacked transparency and standardized digital MRV (Measurement, Reporting, Verification).",
      solution: "Developed blockchain-based dMRV and tokenization concept with ERC-20 smart contracts on Polygon, Web3 interface with wallet connection, and IPFS metadata storage.",
      impact: "Created proof-of-concept for transparent carbon credit lifecycle management.",
      technologies: ["Solidity", "ethers.js", "Hardhat", "Polygon", "IPFS", "React"],
      proof: [
        { type: "github", url: "#" },
        { type: "contract", url: "#", label: "Polygon" },
        { type: "linkedin", url: "#" },
      ] as ProofLink[],
    },
    {
      title: "NFT & Tokenization Experiments",
      problem: "Exploring tokenization possibilities for music, automotive assets, and digital collectibles.",
      solution: "Built multiple experimental projects exploring ERC-721 and ERC-1155 standards with custom metadata and marketplace integrations.",
      impact: "Gained deep understanding of Web3 patterns and decentralized application architecture.",
      technologies: ["Solidity", "ethers.js", "Hardhat", "Polygon", "IPFS"],
      proof: [
        { type: "github", url: "#" },
      ] as ProofLink[],
    },
  ],
};

function ProofLinks({ links }: { links: ProofLink[] }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
      {links.map((link, index) => {
        const config = proofLinkConfig[link.type];
        const Icon = config.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary/40 rounded-full hover:bg-accent/20 hover:text-accent transition-all duration-200 group"
          >
            <Icon size={12} className="group-hover:text-accent transition-colors" />
            <span>{link.label || config.label}</span>
            <ExternalLink size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        );
      })}
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("software");

  return (
    <section id="projects" className="py-32 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-accent mb-4 tracking-wide uppercase">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            Projects & Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of technical projects, digital products, and experimental work across different domains.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-foreground text-background"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <category.icon size={16} />
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6"
          >
            {projects[activeCategory as keyof typeof projects].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-background border border-border rounded-xl hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {"problem" in project && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Problem</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
                      </div>
                    )}
                    {"challenge" in project && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Business Challenge</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{project.challenge}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                        {"challenge" in project ? "Digital Solution" : "Solution"}
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {"impact" in project && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Impact</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{project.impact}</p>
                      </div>
                    )}
                    {"outcome" in project && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Expected Outcome</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{project.outcome}</p>
                      </div>
                    )}
                    {"technologies" in project && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary/50 text-xs text-muted-foreground rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {"deliverables" in project && (
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Deliverables</p>
                        <div className="flex flex-wrap gap-2">
                          {project.deliverables.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1 bg-secondary/50 text-xs text-muted-foreground rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {"proof" in project && <ProofLinks links={project.proof} />}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
