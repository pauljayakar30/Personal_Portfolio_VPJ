import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

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
