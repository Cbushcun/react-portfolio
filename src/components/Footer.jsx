import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="just grid w-full gap-2 text-center text-stone-200 xl:grid-cols-3 xl:gap-0 xl:pb-5">
      <Link
        to="landing"
        smooth={true}
        className="w-fit items-center place-self-center text-xl hover:cursor-pointer hover:text-green-400 xl:col-start-2"
      >
        <i className="fa-solid fa-arrows-up-to-line w-full text-center"></i>
        <p>Back To Top</p>
      </Link>
      <div className="xl:col-start-1">
        Contact Me:{" "}
        <a
          href="mailto:chrizztianbush@gmail.com"
          className="hover:text-green-400 hover:underline"
        >
          chrizztianbush@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/yourprofile"
          className="hover:text-green-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
      <div className="xl:col-start-3">
        &copy; <span className="font-semibold">2024 Christian Bush</span>. All
        rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
