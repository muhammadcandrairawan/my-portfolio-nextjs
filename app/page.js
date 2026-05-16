import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import SkillSection from "@/components/sections/Skills";
import ProjectSection from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <Contact />
    </main>
  );
}
