"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Mohan Babu University",
    location: "Tirupati, AP",
    period: "2022 – 2026",
    detail: "CGPA: 7.64",
    isCurrent: true,
  },
  {
    degree: "Senior Secondary — Maths, Physics, Chemistry & CS",
    institution: "Sainik School Kalikiri",
    location: "Kalikiri, AP",
    period: "2018 – 2022",
    detail: "Percentage: 76%",
    isCurrent: false,
  },
];

const achievements = [
  {
    title: "Conference Paper Presentation",
    event: "BIDA 2026",
    year: "2026",
    description:
      'Presented "An Intelligent Cloud-Based Framework for Automated Brain Tumor Detection using Deep Learning" at the 3rd International Conference.',
  },
  {
    title: "National Hackathon Participation",
    event: "Samartha 2K25",
    year: "2025",
    description:
      "Competed in a team-based problem-solving competition hosted by Mohan Babu University.",
  },
  {
    title: "State Level Buildathon Qualifier",
    event: "NxtWave Buildathon 2025",
    year: "2025",
    description:
      "Advanced to the state level after securing a top rank in the college-level preliminary round of the NxtWave Buildathon.",
  },
  {
    title: "Core, Registrations Committee",
    event: "Mohana Mantra 2K24",
    year: "2024",
    description:
      "Led coordination for 13,000+ participants — managing payment records, Entry ID workflows, and registration operations during the fest.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;


export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col bg-[#f5f5f7] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="flex-grow">

        {/* ── Hero / Profile Section ──────────────────────────────── */}
        <section className="pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] shrink-0 bg-gray-200"
            >
              <Image
                src="/images/profile.jpg"
                alt="Vasu Paul Jayakar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="flex flex-col"
            >
              <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tighter text-[#1d1d1f] leading-none mb-6">
                About <span className="text-gray-400 italic font-medium font-serif">Me.</span>
              </h1>
              <p className="text-[#1d1d1f] text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-6">
                I&apos;m <span className="font-extrabold">Vasu Paul Jayakar</span> — a developer who thrives at the intersection of <span className="font-serif italic text-[#007AFF]">artificial intelligence</span> and <span className="font-serif italic text-[#007AFF]">clean engineering</span>.
              </p>
              <p className="text-[#6e6e73] text-base md:text-[17px] leading-[1.7] max-w-xl mb-6">
                With a B.Tech in CSE (AI &amp; ML), I design systems that are as elegant under the hood as they are on-screen — from intelligent document analysis and automated testing to real-time surveillance platforms.
              </p>
              <p className="text-[#86868B] text-sm md:text-base leading-relaxed max-w-xl font-medium tracking-wide">
                Code · Design · Ship · Iterate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Education Section ───────────────────────────────────── */}
        <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1d1d1f] leading-none">
              Education<span className="text-gray-400 italic font-medium font-serif">.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => {
              const accents = [
                { gradient: "from-[#007AFF]/[0.04] to-transparent", metric: "text-[#007AFF]", dot: "bg-[#007AFF]" },
                { gradient: "from-[#FF9500]/[0.04] to-transparent", metric: "text-[#FF9500]", dot: "bg-[#FF9500]" },
              ];
              const accent = accents[index % accents.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: index * 0.15 }}
                  className="relative group rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 p-8 md:p-10 hover:shadow-2xl hover:shadow-black/[0.06] transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle gradient tint */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} rounded-3xl pointer-events-none`} />

                  {/* Large accent number */}
                  <span className="absolute -top-5 -right-3 text-[9rem] font-black text-black/[0.025] leading-none select-none pointer-events-none group-hover:text-black/[0.05] transition-colors duration-700 font-serif italic">
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    {/* Period pill */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className={`w-2 h-2 rounded-full ${accent.dot}`} />
                      <span className="text-xs font-semibold text-[#86868B] tracking-widest uppercase">
                        {edu.period}
                      </span>
                    </div>

                    {/* Institution */}
                    <h3 className="text-2xl md:text-[1.75rem] font-extrabold text-[#1d1d1f] tracking-tight leading-tight mb-2">
                      {edu.institution}
                    </h3>

                    {/* Location */}
                    <p className="text-xs text-[#86868B] font-medium tracking-wide mb-4">
                      {edu.location}
                    </p>

                    {/* Degree */}
                    <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-6">
                      {edu.degree}
                    </p>

                    {/* Metric highlight */}
                    <div className="pt-5 border-t border-black/[0.05]">
                      <span className={`text-2xl font-black tracking-tight ${accent.metric}`}>
                        {edu.detail.split(": ")[1]}
                      </span>
                      <span className="text-xs text-[#86868B] font-medium ml-2 tracking-wide">
                        {edu.detail.split(": ")[0]}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Achievements Section ────────────────────────────────── */}
        <section className="pb-32 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1d1d1f] leading-none">
              Achievements<span className="text-gray-400 italic font-medium font-serif">.</span>
            </h2>
          </motion.div>

          <div className="divide-y divide-black/[0.06]">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: index * 0.1 }}
                className="group py-12 md:py-16 first:pt-0"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                  {/* Left: Number + Year */}
                  <div className="flex items-baseline gap-4 md:w-48 shrink-0">
                    <span className="text-5xl md:text-7xl font-black text-black/[0.06] leading-none font-serif italic group-hover:text-black/[0.12] transition-colors duration-500">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#86868B] tracking-widest uppercase">
                      {item.year}
                    </span>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-extrabold text-[#1d1d1f] tracking-tight leading-tight mb-3 group-hover:text-[#007AFF] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#6e6e73] text-base md:text-lg leading-relaxed mb-4 max-w-2xl">
                      {item.description}
                    </p>
                    <span className="text-sm font-semibold text-[#86868B] tracking-wide">
                      {item.event}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
