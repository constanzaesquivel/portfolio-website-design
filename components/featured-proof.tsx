"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Globe, Box, TrendingUp, Heart, MessageCircle, Share2 } from "lucide-react";

type FeaturedItem = {
  type: "linkedin" | "website" | "github" | "contract";
  title: string;
  description: string;
  url: string;
  metrics?: {
    likes?: number;
    comments?: number;
    shares?: number;
    stars?: number;
    forks?: number;
  };
  tags?: string[];
};

const featuredProof: FeaturedItem[] = [
  {
    type: "linkedin",
    title: "Real-time Hydrological Platform Launch",
    description: "Announcing the deployment of a national-scale monitoring system serving government agencies across the country.",
    url: "#",
    metrics: { likes: 247, comments: 32, shares: 18 },
    tags: ["Java", "Spring Boot", "GIS"],
  },
  {
    type: "website",
    title: "Dental Clinic Geneva",
    description: "Complete digital presence optimization for a Geneva-based dental practice with improved booking flows.",
    url: "#",
    tags: ["UX Design", "SEO", "Analytics"],
  },
  {
    type: "github",
    title: "Carbon Credit Tokenization",
    description: "Open-source dMRV and tokenization implementation for transparent carbon credit management.",
    url: "#",
    metrics: { stars: 42, forks: 8 },
    tags: ["Solidity", "Hardhat", "Polygon"],
  },
  {
    type: "contract",
    title: "CO2X Token Contract",
    description: "ERC-20 smart contract deployed on Polygon mainnet for carbon credit tokenization.",
    url: "#",
    tags: ["Polygon", "Verified"],
  },
  {
    type: "linkedin",
    title: "Web3 Carbon Markets Deep Dive",
    description: "Technical breakdown of blockchain-based carbon credit verification and the future of environmental markets.",
    url: "#",
    metrics: { likes: 183, comments: 24, shares: 12 },
    tags: ["Web3", "Sustainability"],
  },
  {
    type: "github",
    title: "NFT Marketplace Integration",
    description: "Experimental ERC-721 and ERC-1155 implementations with custom metadata and IPFS storage.",
    url: "#",
    metrics: { stars: 28, forks: 5 },
    tags: ["Solidity", "IPFS", "React"],
  },
];

const typeConfig = {
  linkedin: { icon: Linkedin, label: "LinkedIn Post", color: "text-[#0A66C2]" },
  website: { icon: Globe, label: "Live Website", color: "text-accent" },
  github: { icon: Github, label: "Repository", color: "text-foreground" },
  contract: { icon: Box, label: "Smart Contract", color: "text-[#8247E5]" },
};

function MetricsBadge({ metrics }: { metrics: FeaturedItem["metrics"] }) {
  if (!metrics) return null;

  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      {metrics.likes && (
        <span className="inline-flex items-center gap-1">
          <Heart size={12} className="text-red-400" />
          {metrics.likes}
        </span>
      )}
      {metrics.comments && (
        <span className="inline-flex items-center gap-1">
          <MessageCircle size={12} />
          {metrics.comments}
        </span>
      )}
      {metrics.shares && (
        <span className="inline-flex items-center gap-1">
          <Share2 size={12} />
          {metrics.shares}
        </span>
      )}
      {metrics.stars && (
        <span className="inline-flex items-center gap-1">
          <TrendingUp size={12} className="text-yellow-400" />
          {metrics.stars}
        </span>
      )}
      {metrics.forks && (
        <span className="inline-flex items-center gap-1">
          <Github size={12} />
          {metrics.forks}
        </span>
      )}
    </div>
  );
}

export function FeaturedProof() {
  return (
    <section className="py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-accent mb-4 tracking-wide uppercase">Verified Work</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            Featured Proof
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Public artifacts, deployed projects, and documented work you can verify.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProof.map((item, index) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;

            return (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 bg-card border border-border rounded-xl hover:border-accent/40 transition-all duration-300"
              >
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${config.color}`}>
                    <Icon size={14} />
                    {config.label}
                  </span>
                  <ExternalLink 
                    size={14} 
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" 
                  />
                </div>

                {/* Content */}
                <h3 className="text-base font-medium text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-secondary/50 text-[10px] text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Metrics */}
                <MetricsBadge metrics={item.metrics} />

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.a>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={16} />
              View LinkedIn Profile
              <ExternalLink size={12} className="opacity-50" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} />
              View GitHub Profile
              <ExternalLink size={12} className="opacity-50" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
