import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ParallaxBackground } from "@/components/effects/ParallaxBackground";
import { SnowfallEffect } from "@/components/effects/SnowfallEffect";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Default to dark mode
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParallaxBackground />
      <SnowfallEffect />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection emailJsConfig={emailJsConfig} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
