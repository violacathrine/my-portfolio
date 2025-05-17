import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import content from "./data/content.json";
import { Intro } from "./pages/Intro";
import { HeaderSection } from "./components/HeaderSection";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { MyJourney } from "./components/MyJourney";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Startsidan */}
        <Route path="/" element={<Intro />} />

        {/* Sidan med hela portfolion */}
        <Route
          path="/portfolio"
          element={
            <>
              <HeaderSection
                id="header-section"
                heading={content.headerSection.heading}
                text={content.headerSection.text}
                email={content.headerSection.email}
                mailtoText={content.headerSection.mailtoText}
                nav={content.headerSection.nav}
              />

              <Tech heading={content.tech.heading} items={content.tech.items} />

              <Projects
                heading={content.projectsSection.heading}
                projects={content.projectsSection.projects}
              />

              <MyJourney
                heading={content.myJourney.heading}
                text={content.myJourney.text}
              />

              <Skills
                heading={content.skills.heading}
                groups={content.skills.groups}
              />

              <Contact
                name={content.contact.name}
                email={content.contact.email}
                image={content.contact.image}
                slogan={content.contact.slogan}
                socials={content.contact.socials}
                footerText={content.contact.footerText}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
};
