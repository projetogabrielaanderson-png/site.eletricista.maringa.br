"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

interface AnimateProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn" | "scaleIn";
  delay?: number;
  className?: string;
}

const variants = { fadeUp, fadeIn, scaleIn };

// Renderiza visível no SSG (sem initial="hidden") para que crawlers
// e ferramentas de SEO vejam o conteúdo. A animação ocorre apenas
// no browser via whileInView.
export const Animate = ({ children, variant = "fadeUp", delay = 0, className }: AnimateProps) => (
  <motion.div
    variants={variants[variant]}
    initial="visible"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={staggerContainer}
    initial="visible"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={fadeUp}
    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);
