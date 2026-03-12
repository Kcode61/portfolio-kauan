import { AboutSection } from "@/components/AboutSection";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
