import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import BackToTop from "@/components/ui/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import OrganizationSection from "@/components/sections/OrganizationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      {/* <EducationSection /> */}
      <OrganizationSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
