"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10 overflow-hidden">
      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[40vw] font-bold whitespace-nowrap leading-none text-black/[0.03] select-none tracking-tighter">
          404
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center z-10 liquid-glass p-10 md:p-16 rounded-[3rem] max-w-2xl w-full mx-auto"
      >
        <div className="w-20 h-20 mb-8 rounded-full bg-black/5 flex items-center justify-center">
          <svg className="w-10 h-10 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Page Not Found</h2>
        <p className="text-lg text-black/60 mb-10 max-w-md font-medium">
          The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-[#1d1d1f] text-white rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
