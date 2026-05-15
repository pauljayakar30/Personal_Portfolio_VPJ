"use client";

import { motion } from "motion/react";

export default function Skills() {
  const categories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "Java", "JavaScript", "HTML/CSS", "Bash"]
    },
    {
      title: "Frameworks",
      skills: ["Django", "Flask", "FastAPI", "Streamlit", "React", "Node.js"]
    },
    {
      title: "Libraries",
      skills: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "NLTK", "Hugging Face", "OpenCV"]
    },
    {
      title: "Data Visualization",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Jupyter Notebook", "RESTful APIs"]
    },
    {
      title: "Professional Traits",
      skills: ["Leadership", "Teamwork", "Communication", "Problem-Solving", "Adaptability"]
    }
  ];

  // Animation for the blur reveal
  const dropReveal = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20, scale: 0.9 },
    visible: (index: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    })
  };

  return (
    <section id="skills" className="relative w-full pb-40 pt-20 font-['Plus_Jakarta_Sans',sans-serif] bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900">
            Core <span className="text-gray-400 italic font-light font-serif">Capabilities.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {categories.map((category, catIndex) => (
            <div key={category.title} className="flex flex-col items-center">
              
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8"
              >
                {category.title}
              </motion.h3>

              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={dropReveal}
                    // Liquid droplet effect: Organic border radius + glass/water styling
                    className="relative px-6 py-3 bg-white/70 backdrop-blur-md border border-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),_0_8px_20px_rgba(0,0,0,0.03)]"
                    style={{
                      borderRadius: "40px 40px 40px 40px",
                    }}
                    animate={{
                      y: [0, -5, 0],
                      borderRadius: [
                        "30px 40px 50px 30px", 
                        "50px 30px 40px 50px", 
                        "30px 40px 50px 30px"
                      ]
                    }}
                    transition={{
                      y: { duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut" },
                      borderRadius: { duration: 6 + (index % 2), repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <span className="text-gray-800 font-medium text-lg tracking-wide relative z-10">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Inspirational Quote / Personality Section */}
      <div className="mt-40 mb-10 flex flex-col items-center text-center px-6">
        <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight text-[#1d1d1f] leading-tight max-w-5xl font-serif italic">
          "First, solve the problem. <br className="hidden md:block"/> Then, write the code."
        </h3>
        <div className="mt-10 flex items-center gap-6">
          <div className="w-12 h-[1px] bg-gray-300" />
          <span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">
            John Johnson
          </span>
          <div className="w-12 h-[1px] bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
