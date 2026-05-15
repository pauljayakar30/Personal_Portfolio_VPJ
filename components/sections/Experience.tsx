"use client";

import { motion } from "motion/react";
import ImageCarousel from "../ui/ImageCarousel";

export default function Experience() {
  const experiences = [
    {
      company: "MohanaMantra 2k24",
      role: "Core, Registrations Team",
      date: "2024",
      description: "Orchestrated the entire registration lifecycle for 12,000+ attendees, including form design, payment processing, and data tracking. Streamlined on-site operations to ensure a seamless check-in experience and efficient resolution of attendee queries.",
      images: [
        "/images/MohanaMantra-1.webp",
        "/images/MohanaMantra-2.webp",
        "/images/MohanaMantra-3.webp",
        "/images/MohanaMantra-4.webp"
      ],
      bgColor: "bg-[#007AFF]/85 backdrop-blur-3xl border border-white/20",
      textColor: "text-white",
    }
  ];

  return (
    <section id="experience" className="relative w-full min-h-screen pb-32 pt-24" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      {/* Sticky Background Text */}
      <div className="sticky top-32 w-full overflow-hidden z-0 flex justify-center pointer-events-none">
        <h2 className="text-[18vw] md:text-[12vw] font-bold whitespace-nowrap leading-none text-black/[0.03] select-none" style={{ letterSpacing: '-0.06em' }}>Experience</h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-12 relative z-10 mt-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`sticky flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-16 p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[3rem] lg:rounded-[3.5rem] ${exp.bgColor} backdrop-saturate-150 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] overflow-hidden`}
            style={{ 
              top: `calc(1rem + ${index * 1.5}rem)`,
              zIndex: index + 1
            }}
          >
            <div className={`flex-1 flex flex-col justify-center text-center lg:text-left ${exp.textColor} w-full`}>
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                {exp.company}
              </h4>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 opacity-90 tracking-tight">
                {exp.role}
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-medium mb-6 sm:mb-8 opacity-60 uppercase tracking-widest">
                {exp.date}
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-80 font-medium">
                {exp.description}
              </p>
            </div>

            <div className="flex-1 w-full max-w-xl lg:max-w-none relative aspect-video sm:aspect-[16/10] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-black/10">
              <ImageCarousel images={exp.images} alt={exp.company} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
