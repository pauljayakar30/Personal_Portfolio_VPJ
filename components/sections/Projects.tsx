"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      company: "Sign & Speak",
      role: "ML Developer",
      date: "Jan 2023 – Jun 2023",
      description: "A functional prototype to capture real-time hand gestures using MediaPipe Hands. Integrated detection logic with a frontend UI to display gesture labels.",
      image: "https://picsum.photos/seed/signspeak/800/600",
      bgColor: "bg-[#1C1C1E]/85 backdrop-blur-3xl border border-white/15",
      textColor: "text-white",
    }
  ];

  return (
    <section id="work" className="relative w-full min-h-screen pb-32 pt-24" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      {/* Sticky Background Text */}
      <div className="sticky top-32 w-full overflow-hidden z-0 flex justify-center pointer-events-none">
        <h2 className="text-[20vw] md:text-[15vw] font-bold whitespace-nowrap leading-none text-black/[0.03] select-none" style={{ letterSpacing: '-0.06em' }}>Work</h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-12 relative z-10 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`sticky flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-16 p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[3rem] lg:rounded-[3.5rem] ${project.bgColor} backdrop-saturate-150 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] overflow-hidden`}
            style={{ 
              top: `calc(1rem + ${index * 1.5}rem)`,
              zIndex: index + 1
            }}
          >
            <div className={`flex-1 flex flex-col justify-center text-center lg:text-left ${project.textColor} w-full`}>
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                {project.company}
              </h4>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 opacity-90 tracking-tight">
                {project.role}
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-medium mb-6 sm:mb-8 opacity-60 uppercase tracking-widest">
                {project.date}
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-80 font-medium">
                {project.description}
              </p>
            </div>

            <div className="flex-1 w-full max-w-xl lg:max-w-none relative aspect-video sm:aspect-[16/10] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-black/10">
              <Image 
                src={project.image} 
                alt={project.company} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
