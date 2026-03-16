"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-4 md:px-8 pb-24">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col"
      >
        <div className="flex items-center gap-3 mb-10">
          <h3 className="text-3xl font-semibold text-[#1d1d1f] tracking-tight">Education</h3>
        </div>
        
        <div className="space-y-4">
          
          {/* Degree 1 */}
          <div className="p-6 sm:p-8 rounded-[2rem] bg-black/[0.02] border border-black/[0.04] hover:bg-black/[0.04] transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">B.Tech in Computer Science & Engineering (AI & ML)</h4>
                <p className="text-[#86868B] font-medium text-lg">Mohan Babu University, Tirupati</p>
              </div>
              <div className="self-end sm:self-start sm:mt-1">
                <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-[#0066cc] bg-[#0066cc]/10 rounded-full whitespace-nowrap">
                  2022 – 2026
                </span>
              </div>
            </div>
          </div>
          
          {/* Degree 2 */}
          <div className="p-6 sm:p-8 rounded-[2rem] bg-black/[0.02] border border-black/[0.04] hover:bg-black/[0.04] transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">Secondary School & Higher Secondary School</h4>
                <p className="text-[#86868B] font-medium text-lg">Sainik School Kalikiri</p>
              </div>
              <div className="self-end sm:self-start sm:mt-1">
                <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-[#86868B] bg-black/5 rounded-full whitespace-nowrap">
                  2018 – 2022
                </span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
