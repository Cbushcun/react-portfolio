import NavBar from "../../components/NavBar";
import AboutPage from "./AboutPage.jsx";
import LandingPage from "./LandingPage.jsx";
import ProjectsPage from "./ProjectsPage/ProjectsPage.jsx";
import ContactPage from "./ContactPage.jsx";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../components/useContext/LoadingProvider";
import { BeatLoader } from "react-spinners";

function Index() {
  const { loading, setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <section
        className={`${loading ? "opacity-100" : "opacity-0"} pointer-events-none absolute left-0 top-0 z-[100] flex h-screen w-screen bg-stone-950 transition duration-1000`}
      >
        <div className="m-auto">
          <BeatLoader color="#4ADE80" speedMultiplier={0.5} />
        </div>
      </section>
      <div
        className={`${loading ? "opacity-0" : "opacity-100"} transition duration-1000`}
      >
        <NavBar />
        <LandingPage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </div>
    </>
  );
}

export default Index;
