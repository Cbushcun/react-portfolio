import { useRef } from "react";

// logo imports
import ScrollingSkills from "../../components/ScrollingSkills/ScrollingSkills";
import bootstrapLogo from "../../assets/icons/bootstrap-logo-shadow.png";
import cssLogo from "../../assets/icons/color-css3.svg";
import githubLogo from "../../assets/icons/color-github.svg";
import jsLogo from "../../assets/icons/color-js.svg";
import reactLogo from "../../assets/icons/color-react.svg";
import tailwindLogo from "../../assets/icons/color-tailwind.svg";
import tsLogo from "../../assets/icons/color-ts.svg";
import viteLogo from "../../assets/icons/color-vite.svg";
import vscodeLogo from "../../assets/icons/color-vscode.svg";
import javaLogo from "../../assets/icons/color-words-java.svg";
import pythonLogo from "../../assets/icons/color-python.svg";
import sassLogo from "../../assets/icons/color-words-sass.svg";
import sqlLogo from "../../assets/icons/color-words-sql-file.svg";

function AboutPage() {
  const iconHeight = "h-24";
  const docListRef = useRef(null);

  function toggleDocList() {
    if (docListRef.current) {
      docListRef.current.classList.toggle("-translate-y-full");
    }
  }

  return (
    <section
      id="about"
      className="grid-auto-rows mx-auto grid w-screen max-w-7xl auto-rows-min gap-5 p-3 text-stone-200 lg:grid-cols-2 lg:py-10"
    >
      <div className="flex">
        <div className="flex min-w-14 max-w-14 justify-center overflow-hidden bg-green-400">
          <p className="my-auto -rotate-90 place-self-end text-6xl font-black text-stone-800">
            ABOUT
          </p>
        </div>
        <div className="my-auto flex flex-col gap-3 p-5 indent-8 font-semibold sm:text-lg ">
          <p>
            I'm currently a student at Kennesaw State University set to graduate
            in May 2024 with a Bachelor's of Science in Information Technology.
            During my journey, I've gained experience in various technologies,
            applications, and team-focused work. Building upon the knowledge
            I've obtained through college and in my free time through resources
            such as{" "}
            <a
              href="https://www.freecodecamp.org/cbushcun"
              target="_blank"
              className="text-green-400 underline hover:text-green-600"
            >
              freeCodeCamp.org
            </a>{" "}
            and{" "}
            <a
              href="https://icodethis.com/Chrizztian"
              target="_blank"
              className="text-green-400 underline hover:text-green-600"
            >
              iCodeThis.com
            </a>
            , I would like to take what skills I have learned and apply them to
            my daily life as I strive to reach new heights and expand my
            skillset.
          </p>
          <p>
            Following my graduation, I will be expanding my knowledge of new
            technologies and practices through obtaining certifications, growing
            myself as a developer. With my primary interest being in front-end
            design and development, I am also capable of utilizing SQL for
            database queries with some full-stack webapp experience. I am eager
            to turn my passion into a career and learn new technologies in a
            professional environment willing to invest in my growth.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex min-w-14 max-w-14 justify-center overflow-hidden bg-green-400 xl:py-32">
          <p className="my-auto -rotate-90 place-self-end text-6xl font-black text-stone-800">
            EXPERIENCE
          </p>
        </div>
        <div className="flex flex-col justify-between gap-10 p-5 pb-0">
          <div className="flex flex-col gap-3">
            <div>
              <h4 className="text-3xl font-bold">
                AI Limitations in Web Development Research
              </h4>
              <h5 className="text-2xl font-semibold underline opacity-75">
                <a
                  href="https://clayson1.wixsite.com/capstoneproject"
                  className="transition duration-150 hover:text-green-400"
                  target="_blank"
                >
                  Kennesaw State University | IT Capstone Course
                </a>
              </h5>
              <h6 className="text-xl opacity-75">Dec 2023</h6>
            </div>
            <div>
              <h4 className="text-3xl font-bold">
                Responsive Web Design Certification
              </h4>
              <h5 className="text-2xl font-semibold underline opacity-75">
                <a
                  href="https://www.freecodecamp.org/certification/cbushcun/responsive-web-design"
                  target="_blank"
                  className="transition duration-150 hover:text-green-400"
                >
                  freeCodeCamp.org
                </a>
              </h5>
              <h6 className="text-xl opacity-75">Jan 2024</h6>
            </div>
            <div>
              <h4 className="text-3xl font-bold">
                Bachelor's of Science in Information Technology
              </h4>
              <h5 className="text-2xl font-semibold underline opacity-75">
                <a
                  href="https://www.kennesaw.edu/degrees-programs/bachelor-degrees/information-technology.php?major=Bachelor+of+Science+in+Information+Technology+&url=https%3A%2F%2Fwww.kennesaw.edu%2Fdegrees-programs%2Fbachelor-degrees%2Finformation-technology.php"
                  target="_blank"
                  className="transition duration-150 hover:text-green-400"
                >
                  Kennesaw State University
                </a>
              </h5>
              <h6 className="text-xl opacity-75">May 2024</h6>
            </div>
          </div>
          <div className="mx-auto mt-10 overflow-hidden lg:mt-0">
            <button
              onClick={toggleDocList}
              className="slide slide-down relative z-10 bg-green-400 p-2 text-2xl font-semibold text-stone-800 transition duration-200 ease-in-out hover:scale-105"
            >
              Download My Resume
            </button>
            <ul
              ref={docListRef}
              className="-translate-y-full flex-col bg-green-300 text-center text-stone-800 transition-all duration-150"
            >
              <li className="flex">
                <a
                  href="https://drive.google.com/file/d/1823FkmkwXFK7lhv6lAkCW6uwdaz2BH18/view?usp=sharing"
                  target="_blank"
                  onClick={toggleDocList}
                  className="block flex-grow text-xl font-semibold hover:cursor-pointer hover:bg-green-400"
                >
                  .pdf
                </a>
              </li>
              <li className="flex">
                <a
                  href="https://docs.google.com/document/d/17lgdAvf2L7BGlq0tKhB6wNXi6XP0UsG0/edit?usp=sharing&ouid=116006880065108284248&rtpof=true&sd=true"
                  target="_blank"
                  onClick={toggleDocList}
                  className="block flex-grow text-xl font-semibold hover:cursor-pointer hover:bg-green-400"
                >
                  .docx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden lg:col-span-2 lg:col-start-1 lg:max-h-80">
        <div className="flex min-w-14 max-w-14 justify-center overflow-hidden bg-green-400 xl:py-32">
          <p className="my-auto -rotate-90 place-self-end text-6xl font-black text-stone-800">
            SKILLS
          </p>
        </div>
        <div className="fill-14 my-auto flex flex-col py-3">
          <div className="flex flex-wrap justify-center gap-5">
            <img
              src={bootstrapLogo}
              alt="bootstrap 5 logo"
              className={`${iconHeight}`}
            />
            <img src={cssLogo} alt="css3 logo" className={`${iconHeight}`} />
            <img
              src={githubLogo}
              alt="github logo"
              className={`${iconHeight}`}
            />
            <img
              src={jsLogo}
              alt="javascript logo"
              className={`${iconHeight}`}
            />
            <img src={reactLogo} alt="react logo" className={`${iconHeight}`} />
            <img
              src={tsLogo}
              alt="typescript logo"
              className={`${iconHeight}`}
            />
            <img
              src={tailwindLogo}
              alt="tailwind logo"
              className={`${iconHeight}`}
            />
            <img src={viteLogo} alt="vite logo" className={`${iconHeight}`} />
            <img
              src={vscodeLogo}
              alt="vs code logo"
              className={`${iconHeight}`}
            />
            <img src={javaLogo} alt="java logo" className={`${iconHeight}`} />
            <img
              src={pythonLogo}
              alt="python logo"
              className={`${iconHeight}`}
            />
            <img src={sassLogo} alt="sass logo" className={`${iconHeight}`} />
            <img src={sqlLogo} alt="sql logo" className={`${iconHeight}`} />
          </div>
          <ScrollingSkills />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
