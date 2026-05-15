import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col bg-[#f5f5f7]">
      <div className="flex-grow">
        <Projects />
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
