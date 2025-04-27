import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import home_main from "../assets/home-main.svg";
import First from "../assets/bainary.avif";
import avatar from "../assets/avatar.svg";
import Backgroundcontainer from "./Backgroundcontainer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedditAlien,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Brand icons package

const texts = [
  "Software Developer",
  "Freelancer",
  "Founder",
  "Geographer",
  "Open Source Contributor",
  "WordPress Developer",
];

const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true); // ✅ Fixed: Defined showCursor

  useEffect(() => {
    const currentText = texts[index];

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50); // Deleting speed

      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, isDeleting, index]);

  // ✅ Fixed: Added cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blinks every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="text-[hsl(283,91%,67%)] font-semibold text-2xl h-12 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[hsl(283,91%,67%)] font-semibold text-2xl h-12 flex items-center"
      >
        <span>{text}</span>
        <span
          className="text-[hsl(283,91%,67%)]"
          style={{ opacity: showCursor ? 1 : 0 }} // ✅ Fixed: No undefined variable
        >
          |
        </span>
      </motion.div>
    </div>
  );
};

const HomeMain = () => {
  return (
    // <section className="relative text-white top-0 mt-7 flex flex-col w-full h-screen  lg:hidden">
    <Backgroundcontainer image={First}>
      <div className="INTRO mt-64 md:flex lg:flex md:flex-row lg:flex-row md:justify-between lg:justify-between">
        <div className="">
          <h1 className="font-semibold text-4xl pb-5 pl-14 text-white">
            Hi There! 👋🏻
          </h1>
          <h1 className="font-semibold text-4xl pl-14 text-white">
            I'M
            <span className="text-[hsl(283,91%,67%)] pl-2 ">
              ADELALU <br /> WAHAB
            </span>
          </h1>

          {/* Typewriter Text */}
          <div className="pt-14 pl-14">
            <TypewriterText />
          </div>
        </div>
        <div className=" sm:hidden cst:hidden md:block lg:block md:-mt-28 lg:-mt-28">
          <img
            src={home_main}
            alt="home_main"
            className=" md:h-[30rem] lg:h-[30rem] w-full"
          />
        </div>
        <div className="bg-gradient-to-t from-[hsla(280,29%,8%,0.7)] to-transparent sm:block cst:block md:hidden lg:hidden">
          <img src={home_main} alt="home_main" className="h-[30rem] w-full" />
        </div>
      </div>

      {/* <div className="bg-[#320d40c2] px-10 pt-32 h-[80rem] Min-md:h-[83rem] Sl:h-[97.5rem] La:h-[91rem] Mi:h-[94rem]  md:h-[69.5rem] text-[20px]"> */}
      <div className="bg-[#320d40c2] px-10 pt-16 pb-16 h-auto flex-1 text-[20px] text-white">
        <h1 style={{ fontSize: "2em" }} className="text-center ">
          LET ME <span className="text-[hsl(283,91%,67%)]">INTRODUCE</span>{" "}
          MYSELF
        </h1>
        <br />
        <br />

        <p className="home-about-body pb-7">
          I discovered my passion for programming and have been on a continuous
          journey of learning and growth ever since... 🤷‍♂️
          <br />
          <br />I am proficient in languages like{" "}
          <span className="text-[hsl(283,91%,67%)] italic">
            JavaScript and Python,
          </span>{" "}
          with a keen interest in crafting{" "}
          <span className="text-[hsl(283,91%,67%)] italic">
            innovative web technologies,&nbsp;
          </span>
          developing cutting-edge products and exploring the exciting world of{" "}
          <span className="text-[hsl(283,91%,67%)] italic">Blockchain.</span>{" "}
          <br />
          <br />
          Whenever possible, I also apply my passion for developing products
          with &nbsp;
          <span className="text-[hsl(283,91%,67%)] italic">
            Python Django
          </span>{" "}
          and &nbsp;
          <span className="text-[hsl(283,91%,67%)] italic">
            Modern JavaScript Libraries and Frameworks &nbsp;
          </span>
          like &nbsp;
          <span className="purple">React.js</span>
        </p>

        <div className="mt-10 flex justify-center">
          <img src={avatar} alt="avatar" />
        </div>

        <div className="pt-6 flex flex-col justify-center text-center">
          <h1 className="font-semibold text-3xl">FIND ME ON</h1>
          <p className="text-lg pt-2">
            Feel free to{" "}
            <span className="text-[hsl(283,91%,67%)] italic">connect</span> with
            me
          </p>
          <div className="flex space-x-5 justify-center pt-8">
            <a
              href="https://www.reddit.com/user/khalidmain0/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white relative flex justify-center items-center rounded-3xl">
                <FontAwesomeIcon
                  icon={faRedditAlien}
                  className="absolute text-[hsl(283,91%,67%)]"
                />
              </div>
            </a>

            <a
              href="https://x.com/devadeola?s=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white relative flex justify-center items-center rounded-3xl">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="absolute text-[hsl(283,91%,67%)]"
                />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/wahab-adelalu-201595285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white relative flex justify-center items-center rounded-3xl">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="absolute text-[hsl(283,91%,67%)]"
                />
              </div>
            </a>

            <a
              href="https://www.instagram.com/invites/contact/?igsh=2su3vtkese3p&utm_content=38fyopp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white relative flex justify-center items-center rounded-3xl">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="absolute text-[hsl(283,91%,67%)]"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Backgroundcontainer>
  );
};

export default HomeMain;
