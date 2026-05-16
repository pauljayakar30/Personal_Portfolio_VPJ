"use client";

import Link from "next/link";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/pauljayakar30/" },
  { name: "WhatsApp", href: "https://wa.me/916303599139" },
  { name: "GitHub", href: "https://github.com/pauljayakar30" },
  { name: "Email", href: "mailto:vasupauljayakar@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Left: Branding + Copyright */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[#1d1d1f] tracking-tight">
            Portfolio
          </span>
          <span className="text-xs text-[#86868B] font-medium">
            © {new Date().getFullYear()} Vasu Paul Jayakar
          </span>
        </div>

        {/* Right: Social Links */}
        <nav className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              className="text-xs font-medium text-[#86868B] hover:text-[#1d1d1f] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
