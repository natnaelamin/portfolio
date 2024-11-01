import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pb-10 bg-cover bg-[#121212]">
      <Navbar/>
      <div className="flex flex-col container mt-24 mx-auto px-2 md:px-12 py-4 gap-y-20">
        <HeroSection/>
        <AboutSection id="about"/>
        <ProjectSection id="projects"/>
        <ContactSection id="contact"/>
      </div>
    </main>
  );
}
