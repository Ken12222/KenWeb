import AboutMe from "./Components/About";
import BrandWorked from "./Components/brands";
import Footer from "./Components/footer";
import HeroSection from "./Components/hero_section";
import NewProject from "./Components/newProject";
import ProjectCard from "./Components/project/project_card";
import TechStack from "./Components/techStack";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProjectCard />
      <BrandWorked />
      <NewProject />
      <TechStack />
      <AboutMe />
    </div>
  );
}
