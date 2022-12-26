import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import eli from "../public/profile-image.jpeg";

const AboutMe = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-5 text-teal-600 font-medium">Eliezer Encarnacion</h2>
        <h3 className="text-2xl py-2">Web Development</h3>
        <p className="text-base py-5 leading-8 text-gray-800">
          A Front-End Web Developer passionate about creating interactive applications and new experiences on the web!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-20 py-3 text-gray-600">
        {/* use <a></a> to add link */}
        <a href="https://www.linkedin.com/in/eliezer-encarnacion/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/eliel15000" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
        {/* <Image src={eli} className="rounded-full" fill  /> */}
        <Image src={eli} fill />
      </div>
    </div>
  );
}

export default AboutMe;