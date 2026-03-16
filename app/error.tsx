"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10 overflow-hidden">
      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[30vw] font-bold whitespace-nowrap leading-none text-black/[0.03] select-none tracking-tighter">
          Error
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center z-10 liquid-glass p-10 md:p-16 rounded-[3rem] max-w-2xl w-full mx-auto"
      >
        <div className="w-20 h-20 mb-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Something went wrong</h2>
        <p className="text-lg text-black/60 mb-10 max-w-md font-medium">
          We apologize for the inconvenience. An unexpected error has occurred in the application.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-[#1d1d1f] text-white rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg w-full sm:w-auto"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-white/50 border border-black/10 text-[#1d1d1f] rounded-full font-medium tracking-wide hover:bg-white transition-colors duration-300 w-full sm:w-auto"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
