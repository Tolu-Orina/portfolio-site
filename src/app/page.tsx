import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import TechStackBar from "@/components/TechStackBar";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <TechStackBar />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
