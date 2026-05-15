import EducationAchievements from "@/components/sections/EducationAchievements";
import Footer from "@/components/layout/Footer";

export default function EducationPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="flex-grow">
        <EducationAchievements />
      </div>
      <Footer />
    </main>
  );
}
