"use client";

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

  // Don't render on home page — Hero has its own top bar
  if (pathname === "/") return null;

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-40">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center p-4 sm:p-6 md:p-10 w-full max-w-7xl mx-auto"
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
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="https://drive.google.com/file/d/1dyv2QNH8ya-YHJi6Qo0Q09UzP8JanR5g/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1d1d1f] text-white shadow-lg relative flex items-center justify-center w-32 h-10 rounded-full text-[14px] font-medium group transition-transform duration-300 hover:scale-105"
          >
            <BorderGlow gradient="conic-gradient(from 0deg, transparent 0%, transparent 30%, #ff4545 50%, #00ff99 65%, #006aff 80%, #ff0095 95%, transparent 100%)" />
            <div className="absolute inset-0 overflow-hidden rounded-full flex items-center justify-center">
              <span className="absolute flex items-center gap-1.5 transition-all duration-300 transform group-hover:-translate-y-10 group-hover:opacity-0">
                <FileText size={16} />
                Resume
              </span>
              <span className="absolute flex items-center gap-1.5 transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <Download size={16} />
                Download
              </span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
