import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="flex-grow">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
