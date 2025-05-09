import AboutMe from "../components/AboutMe";
import { ContactSection } from "../components/ContactSection";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import StartBackground from "../components/StartBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <ThemeToggle />
      <StartBackground />
      <NavBar />
      <main>
        <HomeSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
