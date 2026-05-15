"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Others", href: "/others" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
      {/* Home Button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      >
        <Link
          href="/"
          className={`liquid-glass flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${pathname === "/" ? "text-[#1d1d1f] bg-black/5" : "text-[#86868B] hover:text-[#1d1d1f]"
            }`}
        >
          <Home size={20} />
        </Link>
      </motion.div>

      {/* Other Links */}
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="liquid-glass flex items-center gap-1 px-2 py-2 rounded-full"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isActive ? "text-[#1d1d1f]" : "text-[#86868B] hover:text-[#1d1d1f]"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-bubble"
                  className="absolute inset-0 bg-black/5 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.name}
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
