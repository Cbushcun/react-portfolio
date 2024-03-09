import NavBar from "/src/components/NavBar";
import AboutPage from "/src/pages/AboutPage";
import LandingPage from "/src/pages/LandingPage";
import ProjectsPage from "/src/pages/ProjectsPage/ProjectsPage.jsx";
import ContactPage from "/src/pages/ContactPage";

function App() {
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

export default App;
