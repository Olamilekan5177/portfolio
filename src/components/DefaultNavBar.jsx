import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home_Bg from "../assets/home-bg.jpg";
import First from "../assets/bainary.avif";
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
    <section className="">
      <div className="relative w-full Mi:h-[342.6vh] ">
        {/* Fixed background image */}
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src={First}
          alt="First"
        />
        {/* Scrollable transparent image */}
        <img
          className="w-full h-full object-cover opacity-30 absolute"
          src={Home_Bg}
          alt="Home_Bg"
        />
      </div>

      <nav className="BigscreenNav hidden lg:block">
        <h1 className="text-[hsl(283,91%,67%)] z-50 absolute top-0 lg-plus:pl-32 mt-10 font-bold text-3xl mid-md-lg:pl-16">
          Ad.
        </h1>
        <div className=" text-center mid-md-lg:ml-40 lg-plus:ml-80">
          <ul className="absolute top-0 text-white flex row gap-20 mt-12 font-semibold ">
            <li className="flex space-x-2">
              <FontAwesomeIcon icon={faHouse} className="pt-1" />
              <Link to="/" className="" onClick={toggleMenu}>
                <p>Home</p>
              </Link>
            </li>
            <li className="flex space-x-2">
              <FontAwesomeIcon icon={faUser} className="pt-1" />
              <Link to="/about" className="" onClick={toggleMenu}>
                <p>About</p>
              </Link>
            </li>
            <li className="flex space-x-2">
              <FontAwesomeIcon icon={faTv} className="pt-1" />
              <Link to="/projects" className="" onClick={toggleMenu}>
                <p>Projects</p>
              </Link>
            </li>
            <li className="flex space-x-2">
              <FontAwesomeIcon icon={faBookBookmark} className="pt-1" />
              <Link to="/resume" className="" onClick={toggleMenu}>
                <p>Resume</p>
              </Link>
            </li>
            <li className="flex space-x-2">
              <FontAwesomeIcon icon={faBlog} className="pt-1" />
              <Link to="/blogs" className="" onClick={toggleMenu}>
                <p>Blogs</p>
              </Link>
            </li>
          </ul>

          <ul className="absolute top-0 flex row gap-20 mt-11 font-semibold right-0 pr-20 mid-md-lg:pr-10 lg-plus:pr-16">
            <li className="text-white bg-[hsl(266,39%,28%)] px-6 py-2 rounded-md border border-solid border-[hsl(283,100%,69%)] ">
              <Link
                to="/Github"
                className="flex space-x-2"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faCodeCompare} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="motherdiv z-[9999] absolute text-white top-0 mt-7 w-full h-screen lg:hidden">
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
                <Link to="/blogs" onClick={toggleMenu}>
                  Blogs
                </Link>{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
export default DefaultNavBar;
