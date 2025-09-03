import content from "./data/content.json";
import { ModernHeader } from "./components/ModernHeader";
import { ModernWhatIDo } from "./components/ModernWhatIDo";
import { ModernProjects } from "./components/ModernProjects";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

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
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};
