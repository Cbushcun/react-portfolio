import { useRef } from "react";
import nameIcon from "/src/assets/icons/personal-icon.png";
import { Link } from "react-scroll";

function NavBar() {
  const navListRef = useRef(null);

  function toggleNav() {
    if (navListRef.current) {
      navListRef.current.classList.toggle("-translate-y-full");
    }
  }

  return (
    <nav
      id="navBar"
      className="fixed top-0 z-[100] flex w-screen flex-col overflow-hidden font-bold text-stone-200 backdrop-blur-sm"
    >
      <div className="flex justify-between bg-slate-950 text-xl lg:bg-transparent">
        <Link
          to="landing"
          spy={true}
          smooth={true}
          className="ml-2 flex gap-2 hover:cursor-pointer"
        >
          <img src={nameIcon} alt="" className="my-auto h-9 rounded-full" />
          <p className="my-auto font-semibold">Christian Bush</p>
        </Link>
        <ul className="hidden place-content-center gap-5 px-5 lg:flex">
          <li className="flex">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={1}
              activeClass="text-green-400"
              className="place-self-center transition duration-150 hover:cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li className="flex">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={1}
              activeClass="text-green-400"
              className="place-self-center transition duration-150 hover:cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
          <li className="flex">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={1}
              activeClass="text-green-400"
              className="place-self-center transition duration-150 hover:cursor-pointer"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <button className="px-5 py-2 lg:hidden" onClick={toggleNav}>
          <i className="fa-solid fa-bars text-4xl"></i>
        </button>
      </div>
      <ul
        ref={navListRef}
        id="navList"
        className="fixed top-[53px] -z-50 w-full -translate-y-full bg-slate-900 text-center  text-3xl font-semibold transition duration-150 lg:top-0"
      >
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            onClick={toggleNav}
            offset={-52}
            className="block py-2 hover:cursor-pointer hover:bg-slate-800"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            onClick={toggleNav}
            offset={-52}
            className="block py-2 hover:cursor-pointer hover:bg-slate-800"
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            onClick={toggleNav}
            offset={20}
            className="block py-2 hover:cursor-pointer hover:bg-slate-800"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
