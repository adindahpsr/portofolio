import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import BackToTop from "@/components/ui/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
