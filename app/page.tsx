import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pb-10 bg-cover bg-[#121212]">
      <Navbar/>
      <div className="flex flex-col container mt-24 mx-auto px-12 py-4 gap-y-20">
        <HeroSection/>
        <AboutSection />
        <ProjectSection/>
      </div>
    </main>
  );
}
