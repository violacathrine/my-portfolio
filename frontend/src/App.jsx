import content from "./data/content.json";
import { ModernHeader } from "./components/ModernHeader";
import { ModernWhatIDo } from "./components/ModernWhatIDo";
import { Skills } from "./components/Skills";
import { ModernProjects } from "./components/ModernProjects";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <ModernHeader
        nav={content.headerSection.nav}
        email={content.headerSection.email}
        mailtoText={content.headerSection.mailtoText}
      />

      <ModernWhatIDo />


      <ModernProjects />

      <AboutMe />

      <Footer />
    </>
  );
};
