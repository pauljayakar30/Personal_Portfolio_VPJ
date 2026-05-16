import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import { DotGlowBackground } from "@/components/ui/dot-glow-background";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <DotGlowBackground>
        <Hero />
      </DotGlowBackground>
      <Footer />
    </main>
  );
}
