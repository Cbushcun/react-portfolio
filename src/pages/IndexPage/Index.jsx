import NavBar from "../../components/NavBar";
import AboutPage from "./AboutPage.jsx";
import LandingPage from "./LandingPage.jsx";
import ProjectsPage from "./ProjectsPage/ProjectsPage.jsx";
import ContactPage from "./ContactPage.jsx";

function Index() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}

export default Index;
