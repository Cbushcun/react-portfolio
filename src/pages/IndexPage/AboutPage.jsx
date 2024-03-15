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
            I am a current Kennesaw State University student set to graduate in
            May 2024 with a Bachelor's of Science in Information Technology.
            During my educational journey, I've gained experience in various
            technologies and applications allowing me to be adaptive and work
            with a team to meet deadlines. Building upon the knowledge I've
            obtained through college and other resources such as{" "}
            <a
              href="https://www.freecodecamp.org/"
              target="_blank"
              className="text-green-400 underline hover:text-green-600"
            >
              freeCodeCamp.org
            </a>{" "}
            and{" "}
            <a
              href="https://icodethis.com/"
              target="_blank"
              className="text-green-400 underline hover:text-green-600"
            >
              iCodeThis.com
            </a>
            , I seek to help build effecient and scalable web applications as I
            continue to develop and grow my skillset
          </p>
          <p>
            In my available time and continuing past graduation, I seek to
            expand my knowledge of new technologies and practice through
            obtaining new certifications to grow myself as a developer. With a
            primary interest in front-end design and development, I seek to
            become a full-stack developer continuing to build upon the knowledge
            I've obtained thus far. I am eager to develop my passion into a
            career and learn new technologies and practices in a professional
            environment with a company who will invest into me and allow me to
            flourish.
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
                  href="https://drive.google.com/file/d/1QHWGP9-4A79VP7QUYIDab2Ms1wQSeriA/view?usp=sharing"
                  target="_blank"
                  onClick={toggleDocList}
                  className="block flex-grow text-xl font-semibold hover:cursor-pointer hover:bg-green-400"
                >
                  .pdf
                </a>
              </li>
              <li className="flex">
                <a
                  href="https://docs.google.com/document/d/1U8Vas8_CEI6PtbXNCh1260x7UMxPfU2v/edit?usp=sharing&ouid=116006880065108284248&rtpof=true&sd=true"
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
