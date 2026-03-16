"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-black/10 text-center"
    >
      <p className="text-[#86868B] text-sm font-medium">
        © {new Date().getFullYear()} Vasu Paul Jayakar. All rights reserved.
      </p>
      <p className="text-[#86868B]/60 text-xs mt-2 font-medium">
        Designed with Apple-inspired Minimalist UI
      </p>
    </motion.footer>
  );
}
