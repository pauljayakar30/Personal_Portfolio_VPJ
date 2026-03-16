import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="flex-grow">
        <Projects />
        <Experience />
        <Achievements />
      </div>
      <Footer />
    </main>
  );
}
