import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import eli from "../public/profile-image.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-5 text-teal-600 font-medium bg-white">Eliezer Encarnacion</h2>
        <div className="pic-bg mx-auto bg-gradient-to-b from-teal-300 to-teal-500 rounded-full relative my-7">
          <div className="relative mx-auto rounded-full w-80 h-80 overflow-hidden">
            <Image src={eli} fill />
          </div>
        </div>
        <h3 className="text-2xl py-2">Web Developer</h3>
        <p className="text-base py-5 leading-8 text-gray-800">
          A <span className="text-teal-500">Front-End Web Developer</span> passionate about creating interactive applications and new experiences on the web!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-20 py-3 text-gray-600">
        {/* use <a></a> to add link */}
        <a href="https://www.linkedin.com/in/eliezer-encarnacion/" target="_blank">
          <AiFillLinkedin className="hover:bg-sky-200 hover:rounded-lg" />
        </a>
        <a href="https://github.com/eliel15000" target="_blank">
          <AiFillGithub className="hover:bg-violet-200 hover:rounded-lg" />
        </a>
      </div>
    </div>
  );
}

export default AboutMe;