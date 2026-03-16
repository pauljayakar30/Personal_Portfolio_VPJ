"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-12 border-t border-black/10 text-center mt-20"
    >
      <p className="text-[#86868B] text-sm font-medium">
        © {new Date().getFullYear()} Vasu Paul Jayakar. All rights reserved.
      </p>
    </motion.footer>
  );
}
