import EducationAchievements from "@/components/EducationAchievements";
import Link from "next/link";

export default function OthersPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="flex-grow">
        <EducationAchievements />
      </div>

      {/* Footer with social links */}
      <footer className="w-full py-16 flex flex-col items-center gap-6 border-t border-black/[0.06]">
        <div className="flex items-center gap-8">
          <Link
            href="https://www.linkedin.com/in/pauljayakar30/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#86868B] hover:text-[#1d1d1f] transition-colors font-medium"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/pauljayakar30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#86868B] hover:text-[#1d1d1f] transition-colors font-medium"
          >
            GitHub
          </Link>
          <Link
            href="https://drive.google.com/file/d/1dyv2QNH8ya-YHJi6Qo0Q09UzP8JanR5g/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#86868B] hover:text-[#1d1d1f] transition-colors font-medium"
          >
            Resume
          </Link>
        </div>
        <p className="text-sm text-[#86868B] font-medium">
          © {new Date().getFullYear()} Vasu Paul Jayakar
        </p>
      </footer>
    </main>
  );
}
