"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { GraduationCap, Trophy, FileText, Users, Rocket } from "lucide-react";
import Footer from "@/components/layout/Footer";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Mohan Babu University",
    period: "Sep 2022 – May 2026",
    detail: "CGPA: 7.48",
    isCurrent: true,
  },
  {
    degree: "Senior Secondary — Maths, Physics, Chemistry & Computer Science",
    institution: "Sainik School Kalikiri",
    period: "Apr 2018 – Jul 2022",
    detail: "Percentage: 76%",
    isCurrent: false,
  },
];

const achievements = [
  {
    icon: <FileText size={24} />,
    title: "Conference Paper Presentation",
    event: "3rd International Conference on BIDA 2026",
    description:
      'Presented the research paper titled "An Intelligent Cloud-Based Framework for Automated Brain Tumor Detection using Deep Learning."',
    color: "text-[#AF52DE]",
    bgColor: "bg-[#AF52DE]/10",
    borderColor: "border-[#AF52DE]/10",
    featured: true,
  },
  {
    icon: <Users size={24} />,
    title: "Core, Registrations Committee",
    event: "Mohana Mantra 2K24 · 13,000+ Participants",
    description:
      "Led participant coordination and managed payment records and Entry ID workflows during the fest.",
    color: "text-[#007AFF]",
    bgColor: "bg-[#007AFF]/10",
    borderColor: "border-[#007AFF]/10",
    featured: false,
  },
  {
    icon: <Rocket size={24} />,
    title: "National Hackathon Participation",
    event: "Samartha 2K25",
    description:
      "Participated in a team-based problem-solving competition hosted by Mohan Babu University.",
    color: "text-[#34C759]",
    bgColor: "bg-[#34C759]/10",
    borderColor: "border-[#34C759]/10",
    featured: false,
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
              <p className="text-[#6e6e73] text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-8">
                I&apos;m Vasu Paul Jayakar — a software developer and AI enthusiast pursuing B.Tech in CSE (AI &amp; ML). I build clean, performant systems and craft interfaces that feel alive.
              </p>
              <p className="text-[#86868B] text-base font-medium leading-relaxed max-w-xl">
                From intelligent document analysis to automated testing frameworks and real-time surveillance, I bring ideas to life through code, design, and relentless iteration.
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

          <div className="space-y-12 border-l-[3px] border-gray-200 pl-10 ml-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[46px] top-2 w-4 h-4 rounded-full ring-[5px] ring-[#f5f5f7] ${edu.isCurrent ? "bg-[#007AFF]" : "bg-gray-300"}`}
                />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <span className="self-start inline-flex items-center px-3 py-1 text-[11px] font-bold bg-black/[0.04] rounded-full text-[#86868B] uppercase tracking-wider whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <p className="text-lg text-[#007AFF] font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-[#86868B] leading-relaxed">
                  {edu.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Achievements Section ────────────────────────────────── */}
        <section className="pb-32 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1d1d1f] leading-none">
              Achievements<span className="text-gray-400 italic font-medium font-serif">.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-3xl p-8 group transition-all duration-500 border ${item.borderColor} ${item.featured ? `${item.bgColor.replace('/10', '/[0.06]')} hover:shadow-2xl` : 'bg-white/50 hover:bg-white/80'}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-6`}>
                  <span className={item.color}>{item.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className={`text-sm font-semibold mb-4 ${item.color}`}>
                  {item.event}
                </p>
                <p className="text-[#86868B] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
