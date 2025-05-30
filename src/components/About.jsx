import React from "react";
import First from "../assets/bainary.avif";
import Backgroundcontainer from "./Backgroundcontainer";
import aboutpic from "../assets/aboutpic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faNodeJs,
  faReact,
  faPython,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faDatabase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <Backgroundcontainer image={First}>
      <section className="w-full text-white p-10">
        <div className="lg:grid lg:grid-cols-2 md:flex md:flex-col p-10 gap md:justify-center md:items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl pb-4 ">
              Know Who <span className="text-[hsl(283,91%,67%)] ">I'M </span>
            </p>
            <p className="text-xl mb-7">
              Hi Everyone, I am
              <span className="text-[hsl(283,91%,67%)] "> Wahab Adelalu</span>
              &nbsp; from
              <span className="text-[hsl(283,91%,67%)] "> Lagos, Nigeria.</span>
              &nbsp; I am currently a intern at Geoinfotech.
              <br /> I have completed my Bachelor Degree (Bsc) in Geography and
              Regional Planning at Olabisi Onabanjo University.
            </p>
            <p className="self-start text-xl pb-4">
              Apart from coding, some other activities that I love to do!
            </p>
            <div className="self-start text-xl pb-1 flex items-center gap-2 pl-12">
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>Playing Games</p>
            </div>

            <div className="self-start text-xl pb-1 flex items-center gap-2 pl-12">
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>Writing Tech Blogs</p>
            </div>

            <div className="self-start text-xl pb-5 flex items-center gap-2 pl-12">
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>Travelling</p>
            </div>

            <div className="flex flex-col items-center text-xl text-[hsl(283,65%,71%)] ">
              <p>"Strive to build things that make a difference!"</p>
              <div className="flex items-center gap-0.5">
                <FontAwesomeIcon icon={faMinus} className="mt-1" />
                <p>Adelalu</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[37rem] md:w-[37rem] lg:pt-10 md:pt-10 sm:pt-10">
            <img src={aboutpic} className="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  pt-7">
          <p className="text-3xl pb-5 font-semibold">
            Professional
            <span className="text-[hsl(283,65%,71%)] text-3xl"> Skillset</span>
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center gap-16 mt-4">
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <FontAwesomeIcon icon={faCss3} className="w-24 h-24" />
            </div>
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <FontAwesomeIcon icon={faNodeJs} className="w-24 h-24" />
            </div>
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <FontAwesomeIcon icon={faReact} className="w-24 h-24" />
            </div>
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <FontAwesomeIcon icon={faCodeBranch} className="w-24 h-24" />
            </div>
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <FontAwesomeIcon icon={faDatabase} className="w-24 h-24" />
            </div>
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <FontAwesomeIcon icon={faPython} className="w-24 h-24" />
            </div>
          </div>
        </div>

        <div className="flex flex-col font-semibold justify-center items-center pb-10 pt-10">
          <p className="text-3xl pb-5">
            <span className="text-[hsl(283,65%,71%)] text-3xl">Tools</span> I
            use
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center gap-14 mt-4">
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="w-24 h-24 fill-white"
              >
                <path
                  fill="white"
                  d="M 63.802734 15.404297 C 62.910734 15.404297 62.087562 15.770453 61.476562 16.439453 L 37.859375 38.029297 C 37.450375 38.400297 37.418062 39.034359 37.789062 39.443359 C 37.986063 39.661359 38.25925 39.771484 38.53125 39.771484 C 38.77125 39.771484 39.011125 39.684719 39.203125 39.511719 L 62.863281 17.882812 C 62.889281 17.858812 62.9145 17.832641 62.9375 17.806641 C 63.2315 17.472641 63.570734 17.402344 63.802734 17.402344 C 64.390734 17.402344 64.998047 17.844937 64.998047 18.585938 L 64.998047 34.251953 L 49.675781 45.835938 L 49.681641 45.841797 L 48.839844 46.478516 C 48.399844 46.811516 48.313484 47.437906 48.646484 47.878906 C 48.843484 48.138906 49.142313 48.275391 49.445312 48.275391 C 49.655313 48.275391 49.867828 48.209266 50.048828 48.072266 L 65 36.759766 L 65.003906 62.902344 L 24.701172 32.441406 C 23.206172 31.346406 21.039125 31.387531 19.453125 32.519531 C 18.622125 33.113531 16.563672 35.022453 16.388672 35.189453 C 15.397672 35.983453 14.803766 37.166547 14.759766 38.435547 C 14.714766 39.705547 15.224156 40.925063 16.160156 41.789062 L 61.476562 83.220703 C 62.087562 83.889703 62.911734 84.257812 63.802734 84.257812 C 64.456734 84.257812 65.112062 84.04025 65.664062 83.65625 L 79.933594 77.099609 C 82.365594 76.260609 84 73.981688 84 71.429688 L 84 28.230469 C 84 25.678469 82.366391 23.399656 80.025391 22.597656 L 65.664062 16.003906 C 65.113062 15.619906 64.456734 15.404297 63.802734 15.404297 z M 67 18.816406 L 79.28125 24.451172 C 80.90725 25.012172 82 26.531469 82 28.230469 L 82 71.429688 C 82 73.128687 80.908406 74.648141 79.191406 75.244141 L 67 80.84375 L 67 64.910156 L 66.996094 34.761719 C 66.996094 34.757719 67 34.754 67 34.75 L 67 18.816406 z M 78.5 27.375 C 78.224 27.375 78 27.599 78 27.875 L 78 52.875 C 78 53.151 78.224 53.375 78.5 53.375 C 78.776 53.375 79 53.151 79 52.875 L 79 27.875 C 79 27.599 78.776 27.375 78.5 27.375 z M 22.189453 33.623047 C 22.673453 33.623047 23.134812 33.770922 23.507812 34.044922 L 65 65.408203 L 65 81.074219 C 65 81.814219 64.392687 82.257813 63.804688 82.257812 C 63.572688 82.257812 63.233453 82.187516 62.939453 81.853516 C 62.915453 81.826516 62.890281 81.802344 62.863281 81.777344 L 17.513672 40.316406 C 17.009672 39.851406 16.734813 39.191859 16.757812 38.505859 C 16.781813 37.818859 17.103312 37.181125 17.695312 36.703125 C 18.299312 36.140125 20.000234 34.585484 20.615234 34.146484 C 21.089234 33.807484 21.648453 33.623047 22.189453 33.623047 z M 23.359375 51.703125 C 23.10375 51.691625 22.842672 51.779797 22.638672 51.966797 L 21.560547 52.951172 L 21.550781 52.943359 L 16.158203 57.873047 C 15.225203 58.733047 14.714766 59.955609 14.759766 61.224609 C 14.803766 62.494609 15.397984 63.677828 16.333984 64.423828 C 16.564984 64.639828 18.624078 66.547578 19.455078 67.142578 C 20.266078 67.719578 21.235453 68.037109 22.189453 68.037109 C 23.102453 68.037109 23.970891 67.756891 24.712891 67.212891 L 32.802734 61.111328 C 33.242734 60.778328 33.329094 60.150938 32.996094 59.710938 C 32.661094 59.268938 32.035703 59.181625 31.595703 59.515625 L 23.519531 65.605469 C 22.704531 66.202469 21.514187 66.153672 20.617188 65.513672 C 20.002188 65.074672 18.299672 63.518203 17.638672 62.908203 C 17.102672 62.478203 16.782812 61.839344 16.757812 61.152344 C 16.734813 60.466344 17.008766 59.807703 17.509766 59.345703 L 23.988281 53.441406 C 24.395281 53.069406 24.426734 52.436297 24.052734 52.029297 C 23.866234 51.824297 23.615 51.714625 23.359375 51.703125 z M 78.5 55.375 C 78.224 55.375 78 55.599 78 55.875 L 78 59.875 C 78 60.151 78.224 60.375 78.5 60.375 C 78.776 60.375 79 60.151 79 59.875 L 79 55.875 C 79 55.599 78.776 55.375 78.5 55.375 z M 78.5 61.375 C 78.224 61.375 78 61.599 78 61.875 L 78 62.875 C 78 63.151 78.224 63.375 78.5 63.375 C 78.776 63.375 79 63.151 79 62.875 L 79 61.875 C 79 61.599 78.776 61.375 78.5 61.375 z M 78.5 65.375 C 78.224 65.375 78 65.599 78 65.875 L 78 71.625 C 78 71.901 78.224 72.125 78.5 72.125 C 78.776 72.125 79 71.901 79 71.625 L 79 65.875 C 79 65.599 78.776 65.375 78.5 65.375 z"
                />
              </svg>
            </div>
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <svg
                fill="#000000"
                width="256px"
                height="256px"
                viewBox="-5.44 -5.44 42.88 42.88"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                stroke-width="0.00032"
                className="w-24 h-24 fill-white"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M18.036 0.131c-8.765-1.12-16.781 5.067-17.905 13.833-1.12 8.765 5.067 16.781 13.833 17.905 8.765 1.12 16.781-5.067 17.9-13.833 1.125-8.765-5.061-16.781-13.828-17.905zM21.328 10.115c-0.297 0-0.579 0.12-0.787 0.333l-5.937 5.932-0.411-0.407-0.855-0.859c5.849-5.833 6.907-5.891 7.989-5zM14.849 16.593l5.916-5.921c0.328-0.344 0.875-0.339 1.204 0.005 0.323 0.349 0.291 0.896-0.073 1.197l-6.265 5.5zM15.287 17.521l-1.469 0.317c-0.031 0.005-0.072-0.011-0.088-0.047-0.016-0.032-0.011-0.068 0.016-0.095l0.859-0.859zM11.547 16.907l1.568-1.563 1.172 1.172-2.641 0.567c-0.047 0.011-0.093-0.009-0.115-0.052-0.025-0.041-0.015-0.093 0.016-0.124zM6.688 24.984c-0.057-0.005-0.1-0.057-0.095-0.109 0.005-0.025 0.016-0.047 0.032-0.063h0.005l1.26-1.26 1.631 1.631zM9.921 23.307c-0.124 0.068-0.187 0.209-0.156 0.344l0.271 1.152c0.043 0.167-0.161 0.28-0.281 0.156h-0.005l-1.635-1.636 5.016-5.011 2.427-0.525 1.161 1.167c-1.672 1.468-3.959 2.932-6.797 4.353zM16.959 18.74l-1.12-1.12 6.265-5.5c0.057-0.052 0.109-0.109 0.156-0.167-0.192 1.792-2.703 4.323-5.301 6.787zM21.839 10.125h-0.005c-2.183-2.193 0.901-5.563 3.276-3.584l-2.145 2.152c-0.063 0.061-0.063 0.167 0 0.228l1.661 1.663c-0.932 0.463-2.052 0.276-2.787-0.459zM25.271 10.125c-0.109 0.109-0.229 0.208-0.359 0.291l-1.609-1.609 2.041-2.047c0.885 0.964 0.849 2.443-0.073 3.365zM25.14 8.068c-0.067 0.047-0.093 0.129-0.072 0.208 0.099 0.197 0.072 0.432-0.068 0.599-0.068 0.084-0.052 0.199 0.031 0.265 0.032 0.021 0.068 0.037 0.109 0.037 0.057 0 0.111-0.021 0.141-0.063 0.235-0.281 0.281-0.677 0.12-1.005-0.063-0.083-0.177-0.104-0.261-0.041z"></path>{" "}
                </g>
              </svg>
            </div>
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <FontAwesomeIcon
                icon={faSlack}
                className="w-24
              h-24"
              />
            </div>
            <div className="w-32 h-32 flex justify-center items-center rounded-lg shadow-[0_4px_30px_#8a4af3]">
              <svg
                className="w-24 h-24 fill-white"
                height="15"
                viewBox="0 0 15 15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Backgroundcontainer>
  );
};

export default About;
