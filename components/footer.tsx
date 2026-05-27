"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <p className="text-foreground font-medium mb-1">Constanza Esquivel</p>
            <p className="text-sm text-muted-foreground">
              Software Developer / Digital Systems
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Remote-ready
            </span>
            <span>Geneva area</span>
            <span>EU citizen</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 pt-8 border-t border-border"
        >
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Constanza Esquivel. Built with Next.js and deployed on Vercel.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
