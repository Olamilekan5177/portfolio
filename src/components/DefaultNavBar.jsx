import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Home_Bg from "../assets/home-bg.jpg";
// import First from "../assets/bainary.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars, // Import the faBars icon
  faTimes,
  faHouse,
  faUser,
  faCodeCompare,
  faBookBookmark,
  faBlog,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Brand icons package

function DefaultNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <section className=" flex justify-center items-center">
      <nav className="BigscreenNav hidden lg:block bg-[hsl(232,23%,12%)] w-full fixed z-50 mt-[4.2rem]">
        {/* mid-md-lg:ml-40 lg-plus:ml-44 */}
        <ul className="text-white flex lg:gap-20  my-4 font-semibold justify-center items-center -ml-1">
          <li className="pr-14 md:pr-0">
            <Link to="/" className="" onClick={toggleMenu}>
              <p className="text-[hsl(283,91%,67%)] font-bold text-3xl">Ad.</p>
            </Link>
          </li>
          <Link to="/" onClick={toggleMenu}>
            <li className="flex space-x-2 mt-1 cursor-pointer">
              <FontAwesomeIcon icon={faHouse} className="pt-1" />
              <p>Home</p>
            </li>
          </Link>

          <Link to="/about">
            <li className="flex space-x-2 mt-1">
              <FontAwesomeIcon icon={faUser} className="pt-1" />
              <p>About</p>
            </li>
          </Link>
          <Link to="/projects">
            <li className="flex space-x-2 mt-1">
              <FontAwesomeIcon icon={faTv} className="pt-1" />
              <p>Projects</p>
            </li>
          </Link>
          <Link to="/resume">
            <li className="flex space-x-2 mt-1">
              <FontAwesomeIcon icon={faBookBookmark} className="pt-1" />
              <p>Resume</p>
            </li>
          </Link>
          <li className="flex space-x-2 mt-1">
            <FontAwesomeIcon icon={faBlog} className="pt-1" />
            <a
              href="https://dev.to/not_the_regular_freelancer"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className=""
            >
              <p>Blogs</p>
            </a>
          </li>

          <li className="text-white bg-[hsl(266,39%,28%)] px-6 py-2 rounded-md border border-solid border-[hsl(283,100%,69%)] font-semibold">
            <a
              href="https://github.com/Olamilekan5177/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-2"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faCodeCompare} />
            </a>
          </li>
        </ul>
      </nav>

      <div className="motherdiv z-[9999] absolute text-white top-0 mt-7 w-full h-screen md:block lg:hidden">
        <div className="flex fixed top-0 px-10 py-3 bg-[hsl(232,23%,12%)] w-screen justify-between">
          <h1 className="text-[hsl(283,91%,67%)] font-bold text-3xl">Ad.</h1>
          <button
            className="text-[hsl(283,91%,67%)] text-4xl"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="z-50 fixed top-0 left-0 bg-[hsl(232,23%,12%)] w-full h-[65vh] flex items-center justify-center ">
            <div className="flex flex-row">
              <h1 className="text-[hsl(283,91%,67%)] z-50 absolute top-0 left-10 mt-4 font-bold text-3xl">
                Ad.
              </h1>
              <button
                className="absolute top-5 right-4 text-3xl text-[hsl(283,91%,67%)]"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <ul className="absolute top-0 text-white space-y-7 mt-16 font-semibold flex flex-col items-center justify-center ">
              <li className="flex space-x-2">
                <FontAwesomeIcon icon={faHouse} className="pt-1" />
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>{" "}
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon icon={faUser} className="pt-1" />
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>{" "}
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon icon={faTv} className="pt-1" />
                <Link to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>{" "}
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon icon={faBookBookmark} className="pt-1" />
                <Link to="/resume" onClick={toggleMenu}>
                  Resume
                </Link>{" "}
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon icon={faBlog} className="pt-1" />
                <a
                  href="https://dev.to/not_the_regular_freelancer"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className=""
                >
                  <p>Blogs</p>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
export default DefaultNavBar;
