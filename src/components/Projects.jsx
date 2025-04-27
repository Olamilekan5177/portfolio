import React from "react";
import First from "../assets/bainary.avif";
import Firstpic from "../assets/Screenshot1.png";
import Screenshot2 from "../assets/Screenshot2.png";
import Screenshot3 from "../assets/Screenshot3.png";
import Screenshot4 from "../assets/Screenshot4.png";
import Screenshot5 from "../assets/Screenshot5.png";
import Backgroundcontainer from "./Backgroundcontainer"; // Make sure this is defined elsewhere


const Projects = () => {
  return (
    <Backgroundcontainer image={First}>
      <div className="flex flex-col items-center justify-center min-h-screen pb-24 gap-5">
        <h1 className="text-2xl font-bold text-white mt-24">
          <span className="text-[hsl(283,91%,67%)] italic ">My </span> Projects
        </h1>
        <p className="text-xl font-normal text-white mb-12 italic">
          Here are few projects I've worked on...{" "}
          <a
            href="https://github.com/Olamilekan5177"
            className="text-[hsl(283,91%,67%)] italic hover:underline hover:decoration-[hsl(283,91%,67%)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here for more...
          </a>
        </p>

        <div className="grid gap-6 gap-y-20 lg:grid-cols-[2fr_2fr_2fr] md:grid-cols-[2fr_2fr] sm:grid-cols-[1fr]">
          <div className="p-4 rounded-lg shadow-[0_4px_30px_#8a4af3] h-72 max-w-sm w-full text-center">
            <img src={Firstpic} className="w-full h-56 rounded-md mb-2" />
            <a
              href="https://django1-nine-self.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline "
            >
              Visit Website
            </a>
          </div>

          <div className="p-4 rounded-lg shadow-[0_4px_30px_#8a4af3] h-72 max-w-sm w-full text-center">
            <img src={Screenshot2} className="w-full h-56 rounded-md mb-2" />
            <a
              href="https://furniture-one-flax.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline "
            >
              Visit Website
            </a>
          </div>
          <div className="p-4 rounded-lg shadow-[0_4px_30px_#8a4af3] h-72 max-w-sm w-full text-center">
            <img src={Screenshot3} className="w-full h-56 rounded-md mb-2" />
            <a
              href="https://realestateapp-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline "
            >
              Visit Website
            </a>
          </div>
          {/* </div> */}

          {/* <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-2"> */}
          <div className="p-4 rounded-lg shadow-[0_4px_30px_#8a4af3] h-72 max-w-sm w-full text-center">
            <img src={Screenshot4} className="w-full h-56 rounded-md mb-2" />
            <a
              href="https://staff.geoinfotech.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline "
            >
              Visit Website
            </a>
          </div>

          <div className="p-4 rounded-lg shadow-[0_4px_30px_#8a4af3] h-72 max-w-sm w-full text-center">
            <img src={Screenshot5} className="w-full h-56 rounded-md mb-2" />
            <a
              href="https://github.com/Olamilekan5177/url-shortening-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline "
            >
              Visit Website
            </a>
          </div>
          <div className="p-4 rounded-lg shadow-[0_4px_30px_#8a4af3] h-72 max-w-sm w-full text-center">
            <img src={Firstpic} className="w-full h-56 rounded-md mb-2" />
            <a
              href="https://django1-nine-self.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline "
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </Backgroundcontainer>
  );
};

export default Projects;
