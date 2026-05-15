"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Download } from "lucide-react";

function BorderGlow({ gradient }: { gradient: string }) {
  return (
    <>
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        style={{
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        <div
          className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
          style={{ background: gradient }}
        />
      </div>
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none z-10 blur-[8px]"
        style={{
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        <div
          className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
          style={{ background: gradient }}
        />
      </div>
    </>
  );
}

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
    <div className="fixed top-0 left-0 right-0 w-full z-40 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 md:py-5 w-full max-w-7xl mx-auto pointer-events-auto"
      >
        {/* Left — Portfolio brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Fading blur halo behind Portfolio */}
          <div 
            className={`absolute inset-[-20px] sm:inset-[-30px] w-[200%] transition-opacity duration-300 -z-10 ${isScrolled ? 'opacity-100' : 'opacity-0'} bg-white/70 backdrop-blur-md`}
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
            }}
          />
          <Link
            href="/"
            className="text-xl font-bold text-[#1d1d1f] tracking-tight hover:opacity-70 transition-opacity relative z-10"
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
            className="relative flex items-center justify-center"
          >
            {/* Fading blur halo behind Resume */}
            <div 
              className={`absolute inset-[-20px] sm:inset-[-30px] w-[150%] transition-opacity duration-300 -z-10 ${isScrolled ? 'opacity-100' : 'opacity-0'} bg-white/70 backdrop-blur-md`}
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
              }}
            />
            <Link
              href="/resume"
              className="bg-[#1d1d1f] text-white shadow-lg relative z-10 flex items-center justify-center gap-1.5 w-32 h-10 rounded-full text-[14px] font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_-6px_rgba(45,15,65,0.6)]"
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
