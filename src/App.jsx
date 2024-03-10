import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";
import ContactPage from "./pages/ContactPage";

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
