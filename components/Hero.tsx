"use client";

import { motion } from "motion/react";
import { Linkedin, Mail, Github, MessageCircle, FileText, Download } from "lucide-react";
import Link from "next/link";

function BorderGlow({ gradient }: { gradient: string }) {
  return (
    <>
      {/* Crisp spinning border */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" 
        style={{ 
          padding: '1px', 
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
          WebkitMaskComposite: 'xor', 
          maskComposite: 'exclude' 
        }}
      >
        <div 
          className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]" 
          style={{ background: gradient }} 
        />
      </div>
      
      {/* Blurred outer shadow */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none z-10 blur-[8px]" 
        style={{ 
          padding: '2px', 
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
          WebkitMaskComposite: 'xor', 
          maskComposite: 'exclude' 
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

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
      
      {/* Top Bar: Status (Left) & Resume (Right) */}
      <div className="absolute top-0 left-0 right-0 w-full p-4 sm:p-6 md:p-10 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass flex items-center gap-2 px-4 py-2 rounded-full"
        >
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>
          <span className="text-sm font-medium text-[#86868B] tracking-wide uppercase">Open to Work</span>
        </motion.div>

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
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center mt-20 md:mt-28">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[90px] xl:text-[110px] leading-[1.1] md:leading-[1.05] font-semibold tracking-tighter mb-4 md:mb-6 text-[#1d1d1f] whitespace-normal md:whitespace-nowrap"
        >
          Vasu Paul Jayakar.
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight mb-6 md:mb-8 text-[#0066cc]"
        >
          AI & ML Engineer
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-base sm:text-lg md:text-2xl text-[#86868B] max-w-2xl mx-auto font-medium tracking-tight leading-relaxed mb-10 md:mb-12"
        >
          I build intelligent systems and beautiful interfaces.
          <br /> 
          Currently pursuing B.Tech in Computer Science at <br />
          Mohan Babu University.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <SocialLink 
            href="https://www.linkedin.com/in/pauljayakar30/" 
            icon={<Linkedin size={20} />} 
            gradient="conic-gradient(from 0deg, transparent 0%, transparent 50%, #0077b5 90%, transparent 100%)"
            hoverColor="hover:text-[#0077b5]"
          />
          <SocialLink 
            href="mailto:pauljayakar30@gmail.com" 
            icon={<Mail size={20} />} 
            gradient="conic-gradient(from 0deg, transparent 0%, transparent 30%, #4285F4 55%, #EA4335 70%, #FBBC05 85%, #34A853 95%, transparent 100%)"
            hoverColor="hover:text-[#EA4335]"
          />
          <SocialLink 
            href="https://wa.me/916303599139" 
            icon={<MessageCircle size={20} />} 
            gradient="conic-gradient(from 0deg, transparent 0%, transparent 50%, #25D366 90%, transparent 100%)"
            hoverColor="hover:text-[#25D366]"
          />
          <SocialLink 
            href="https://github.com/pauljayakar30" 
            icon={<Github size={20} />} 
            gradient="conic-gradient(from 0deg, transparent 0%, transparent 50%, #000000 90%, transparent 100%)"
            hoverColor="hover:text-[#000000]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, gradient, hoverColor }: { href: string; icon: React.ReactNode; gradient: string; hoverColor: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      className={`liquid-glass relative group text-[#1d1d1f] ${hoverColor} p-3 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105`}
    >
      <BorderGlow gradient={gradient} />
      <span className="relative z-10 transition-all duration-300 group-hover:scale-110">{icon}</span>
    </Link>
  );
}
