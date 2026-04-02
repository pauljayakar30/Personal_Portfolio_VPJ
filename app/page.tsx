import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <InfiniteGrid>
        <Hero />
      </InfiniteGrid>
      <Footer />
    </main>
  );
}
