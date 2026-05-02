import ContactSection from "@/components/ContactSection";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";

export default function Page() {
  return (
    <main className="space-y-32">
      <HomeSection />
      <AboutSection />
      <ProjectSection/>
      <SkillSection/>
       <ContactSection/>
    </main>
  );
}
