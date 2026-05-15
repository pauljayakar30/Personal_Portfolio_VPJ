"use client";

import { motion } from "motion/react";
import { GraduationCap, Trophy, Award, Users } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Mohan Babu University, Tirupati",
    period: "2022 – 2026",
    description:
      "Specializing in Artificial Intelligence and Machine Learning with a focus on building intelligent systems and beautiful interfaces.",
    isCurrent: true,
  },
  {
    degree: "Secondary School & Higher Secondary School",
    institution: "Sainik School Kalikiri",
    period: "2018 – 2022",
    description:
      "A disciplined foundation in academics, sports, and leadership at one of India's premier residential military schools.",
    isCurrent: false,
  },
];

const featuredAchievement = {
  badge: "Finalist",
  title: "Hackathon Finalist",
  event: "Samartha 2k25",
  year: "2025",
  description:
    "Selected for Samartha 2k25 (National Hackathon). Collaborated with a cross-functional team to conceptualize a product under a 36-hour deadline.",
  tags: ["Python", "AI/ML", "Teamwork"],
};

const secondaryAchievements = [
  {
    icon: <Award size={22} />,
    title: "State Level Qualifier",
    subtitle:
      "NxtWave State Level Buildathon 2024. Advanced after securing a top rank in the college-level preliminary round.",
    color: "text-[#FF9500]",
    bgColor: "bg-[#FF9500]/10",
  },
  {
    icon: <Users size={22} />,
    title: "MohanaMantra 2k24",
    subtitle:
      "Core, Registrations Team. Orchestrated registration for 12,000+ attendees including form design, payment processing, and data tracking.",
    color: "text-[#0066cc]",
    bgColor: "bg-[#0066cc]/10",
  },
];

// Shared easing curve (Apple-style deceleration)
const ease = [0.16, 1, 0.3, 1] as const;

export default function EducationAchievements() {
  return (
    <section className="pt-24 sm:pt-32 pb-32 max-w-7xl mx-auto px-4 md:px-8">
      {/* ── Page Header ─────────────────────────────────────────── */}
      <motion.header
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className="mb-16 md:mb-20"
      >
        <span className="text-[#0066cc] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          Qualifications
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1d1d1f] mb-6 leading-[1.1]">
          Education &amp; Achievements
        </h1>
        <p className="text-[#86868B] text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
          A curated journey through formal learning and competitive milestones
          that shaped my technical foundation.
        </p>
      </motion.header>

      {/* ── Two-Column Grid ─────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* ▸ LEFT — Academic Background ─────────────────────────── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-[#1d1d1f]">
            <span className="w-10 h-10 rounded-xl bg-[#0066cc]/10 flex items-center justify-center">
              <GraduationCap size={22} className="text-[#0066cc]" />
            </span>
            Academic Background
          </h2>

          {/* Timeline */}
          <div className="space-y-14 border-l-2 border-black/[0.06] pl-8 ml-5">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease,
                  delay: 0.2 + index * 0.15,
                }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full ring-[6px] ring-[#f5f5f7] transition-colors duration-300 ${edu.isCurrent ? "bg-[#0066cc]" : "bg-black/[0.1]"
                    }`}
                />

                {/* Head row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <span className="self-start inline-flex items-center px-3 py-1 text-[11px] font-bold bg-black/[0.04] rounded-full text-[#86868B] uppercase tracking-wider whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <p className="text-lg text-[#0066cc] font-medium mb-3">
                  {edu.institution}
                </p>
                <p className="text-[#86868B] leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ▸ RIGHT — Key Milestones ─────────────────────────────── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-[#1d1d1f]">
            <span className="w-10 h-10 rounded-xl bg-[#34C759]/10 flex items-center justify-center">
              <Trophy size={22} className="text-[#34C759]" />
            </span>
            Key Milestones
          </h2>

          {/* Featured Achievement Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="relative overflow-hidden rounded-[2rem] bg-[#34C759]/[0.08] p-6 sm:p-8 group transition-all duration-500 hover:shadow-2xl hover:shadow-[#34C759]/10 border border-[#34C759]/10"
          >
            {/* Gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#34C759]/5 to-transparent opacity-50" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-xl flex items-center justify-center mb-6 shadow-sm">
                <Trophy size={28} className="text-[#34C759]" />
              </div>

              {/* Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-[#34C759] text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                {featuredAchievement.badge}
              </span>

              {/* Title & event */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-1 tracking-tight">
                {featuredAchievement.title}
              </h3>
              <p className="text-lg text-[#34C759] font-semibold mb-3">
                {featuredAchievement.event} &middot;{" "}
                {featuredAchievement.year}
              </p>
              <p className="text-[#86868B] leading-relaxed mb-6">
                {featuredAchievement.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {featuredAchievement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/40 text-[#34C759] text-xs font-semibold backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative background icon */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.06] group-hover:scale-110 transition-transform duration-700">
              <Trophy size={160} className="text-[#34C759]" />
            </div>
          </motion.div>

          {/* Secondary Achievement Cards */}
          {secondaryAchievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease,
                delay: 0.4 + index * 0.1,
              }}
              className="bg-black/[0.02] rounded-2xl p-5 sm:p-6 flex gap-4 sm:gap-5 items-start hover:bg-black/[0.04] transition-colors duration-300 border border-black/[0.04]"
            >
              <div
                className={`w-11 h-11 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0`}
              >
                <span className={item.color}>{item.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-[#1d1d1f] mb-1 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-[#86868B] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
