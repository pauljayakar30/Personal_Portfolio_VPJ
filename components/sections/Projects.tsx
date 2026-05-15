"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const projects = [
    {
      title: "DocuGenie",
      category: "Generative AI",
      description: "AI-powered PDF chat and MCQ generation using RAG architecture, LangChain, Streamlit, and Google Gemini API.",
      tags: ["LangChain", "Streamlit", "Gemini API"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600",
      github: "https://github.com/pauljayakar30/DocuGenie",
    },
    {
      title: "TestForge",
      category: "Testing Framework",
      description: "White-box testing framework for RESTful APIs using Python, Flask, and PyGAD genetic algorithms to automate test cases.",
      tags: ["Python", "Flask", "PyGAD"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1600",
      github: "https://github.com/pauljayakar30/TestForge",
    },
    {
      title: "SmartSurveil",
      category: "Computer Vision",
      description: "Zone-based intelligent video surveillance system for real-time object detection utilizing Ultralytics YOLOv8 and OpenCV.",
      tags: ["OpenCV", "YOLOv8", "Flask API"],
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1600",
      github: "https://github.com/pauljayakar30/SmartSurveil",
    }
  ];

  // 3D Parallax Setup
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  // Glare effect movement
  const glareX = useTransform(smoothX, [-0.5, 0.5], ["100%", "-100%"]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ["100%", "-100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Staggered reveal variants
  const contentVariants = {
    hidden: { height: 0, opacity: 0, marginTop: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1, 
      marginTop: 16, // Reduced from 24
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="work" className="relative w-full pb-20 pt-10 font-['Plus_Jakarta_Sans',sans-serif] bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-16">
          <h2 className="text-5xl md:text-[5.5rem] font-black tracking-tighter text-[#1d1d1f] leading-none mt-4">
            Selected <span className="text-gray-400 italic font-medium font-serif">Works.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start" style={{ perspective: "1500px" }}>
          
          {/* Left Side: Interactive Typography List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative mt-4">
            
            {projects.map((project, index) => {
              const isActive = hoveredIndex === index;
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="group relative py-3 pl-8 cursor-pointer"
                >
                  {/* Active Line Indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-3 bottom-3 w-[4px] bg-[#007AFF]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-baseline mb-2">
                    <h3 className={`text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter leading-none transition-colors duration-300 ${isActive ? 'text-[#1d1d1f]' : 'text-gray-300'}`}>
                      {project.title}
                    </h3>
                  </div>

                  <motion.div 
                    variants={contentVariants}
                    initial="hidden"
                    animate={isActive ? "visible" : "hidden"}
                    className="overflow-hidden"
                  >
                    <motion.p variants={itemVariants} className="text-[#6e6e73] text-base md:text-lg font-medium leading-relaxed max-w-lg mb-6 mt-4">
                      {project.description}
                    </motion.p>
                    
                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#6e6e73] text-[13px] font-bold shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Link 
                        href={project.github} 
                        target="_blank" 
                        className="inline-flex items-center gap-2 text-[#007AFF] font-bold text-base hover:text-blue-700 transition-colors"
                      >
                        <Github size={18} strokeWidth={2.5} /> View Source
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Floating Media Reveal with 3D Parallax Tilt */}
          <motion.div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d"
            }}
            className="w-full lg:w-1/2 relative aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/50 cursor-crosshair group z-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
              >
                <div className="absolute inset-0 bg-gray-100 animate-pulse -z-10" />
                <Image 
                  src={projects[hoveredIndex].image} 
                  alt={projects[hoveredIndex].title} 
                  fill 
                  unoptimized
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Dynamic Light Glare Effect */}
            <motion.div 
              style={{ x: glareX, y: glareY, transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-1000 bg-gradient-to-tr from-white/0 via-white/80 to-white/0 mix-blend-overlay w-[200%] h-[200%] -top-1/2 -left-1/2"
            />
            
            {/* Glass Overlay effect */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] z-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
