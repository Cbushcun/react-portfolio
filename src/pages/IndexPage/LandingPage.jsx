import backgroundImage from "../../assets/images/background1.jpg";
import characterImg from "../../assets/images/sitting-character.png";
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
          <div className="col-span-9 ml-10 mt-5 sm:col-span-7 sm:row-start-2  lg:col-start-2 lg:row-span-2 lg:row-start-3 xl:col-start-3 2xl:col-start-4">
            <h6 className="text-md text-green-400">HELLO, MY NAME IS...</h6>
            <h1 className="text-7xl font-bold">CHRISTIAN BUSH</h1>
            <h4 className="font-semibold text-green-400">
              BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY | MAY 2024
            </h4>
            <h5 className="flex">
              <div className="mr-2 flex gap-2 text-2xl md:text-3xl">
                <a
                  href="https://www.linkedin.com/in/chrisbushcun/"
                  target="_blank"
                  className="opacity-60 transition duration-500 hover:scale-110 hover:opacity-100"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Cbushcun"
                  target="_blank"
                  className="opacity-60 transition duration-500 hover:scale-110 hover:opacity-100"
                >
                  <i className="fa-brands fa-square-github"></i>
                </a>
              </div>
              <span className="my-auto flex gap-1 opacity-60">
                <i className="fa-solid fa-location-dot my-auto"></i>
                <span>Powder Springs, GA</span>
              </span>
            </h5>
          </div>
          <img
            src={characterImg}
            alt="drawn image of an characters sitting on the floor resembling the developer"
            loading="lazy"
            className="col-span-7 col-start-6 row-start-3 w-full sm:col-span-6 sm:row-start-2 lg:col-span-3 lg:col-start-8 lg:row-span-3 lg:row-start-3 xl:col-span-3 xl:col-start-8 xl:row-start-3 2xl:col-span-3 2xl:col-start-8 2xl:row-span-2 2xl:row-start-2
            "
          />
          <div className="col-span-2 col-start-6 row-start-6 mx-auto my-2 animate-bounce place-self-end">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={offset}
              className="my-2 place-self-center text-6xl opacity-60 transition duration-500 ease-in-out hover:scale-110 hover:cursor-pointer hover:opacity-100 sm:text-5xl lg:text-3xl"
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
