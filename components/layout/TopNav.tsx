"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Download } from "lucide-react";



export default function TopNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't render on home page — Hero has its own top bar
  if (pathname === "/") return null;

  return (
    <div className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white/60 backdrop-blur-md border-b border-black/5 shadow-sm" : "bg-transparent border-transparent"}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 md:py-5 w-full max-w-7xl mx-auto"
      >
        {/* Left — Portfolio brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/"
            className="text-xl font-bold text-[#1d1d1f] tracking-tight hover:opacity-70 transition-opacity"
          >
            Portfolio
          </Link>
        </motion.div>

        {/* Right — Resume button (same as Hero) */}
        {pathname !== "/resume" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/resume"
              className="bg-[#1d1d1f] text-white shadow-lg relative flex items-center justify-center gap-1.5 w-32 h-10 rounded-full text-[14px] font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_-6px_rgba(45,15,65,0.6)]"
            >
              <FileText size={16} />
              Resume
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
