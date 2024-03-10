import backgroundImage from "../assets/images/background1.jpg";
import portrait from "../assets/images/portrait.jpg";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function LandingPage() {
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    // used for checking window width on resize to ensure offset is properly set for link scrolling
    const handleResize = () => {
      const newOffset = window.innerWidth > 1024 ? 1 : -52;
      setOffset(newOffset);
    };
    // call to ensure resize state is captured on load
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        id="landing"
        className="h-screen w-screen bg-cover bg-fixed bg-center text-stone-200"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="grid h-full w-full grid-cols-12 grid-rows-6 justify-between overflow-hidden pt-14 backdrop-blur">
          <div className="col-span-9 ml-10 mt-5 sm:col-span-8 sm:row-start-2 lg:col-start-2 lg:row-span-2 lg:row-start-3 xl:col-start-3 2xl:col-start-4">
            <h6 className="text-md text-green-400">HELLO, MY NAME IS...</h6>
            <h1 className="text-7xl font-bold">CHRISTIAN BUSH</h1>
            <h4 className="text-3xl font-thin text-green-400">
              FRONT-END DEVELOPER
            </h4>
            <h5 className="opacity-50">
              <i className="fa-solid fa-location-dot"></i> Powder Springs, GA
            </h5>
            <div className="flex gap-5 text-7xl md:text-6xl">
              <a
                href="https://www.linkedin.com/in/chrisbushcun/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin transition duration-150 hover:scale-110"></i>
              </a>
              <a href="https://github.com/Cbushcun" target="_blank">
                <i className="fa-brands fa-square-github transition duration-150 hover:scale-110"></i>
              </a>
            </div>
          </div>
          <img
            src={portrait}
            alt="portrait of christian bush"
            loading="lazy"
            className="col-start-7 row-start-4 ml-auto max-h-52 min-h-52 min-w-52 max-w-52 translate-x-10 scale-150 rounded-full object-cover object-top shadow-[0_0_10px_1px] shadow-fuchsia-600/50 sm:col-start-9 sm:row-start-3 md:translate-x-0"
          />
          <div className="col-span-2 col-start-6 row-start-6 mx-auto my-2 animate-bounce place-self-end">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={offset}
              className="my-2 place-self-center text-6xl hover:cursor-pointer"
            >
              <i className="fa-solid fa-circle-arrow-down"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
