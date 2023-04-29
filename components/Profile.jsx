import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import eli from "../public/profile-image.jpg";
import { Fade } from "react-reveal";

const links = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/eliezer-encarnacion/",
    icon: <AiFillLinkedin className="hover:bg-sky-200 hover:rounded-lg duration-300" />
  },
  {
    name: "Github",
    link: "https://github.com/eliel15000",
    icon: <AiFillGithub className="hover:bg-violet-200 hover:rounded-lg duration-300" />
  }
];

const Profile = () => {

  return (
    <section className="md:pt-0 pt-20" id="home">
      <div className="md:h-screen md:flex justify-center md:w-9/12 mx-auto">

        <Fade top distance="80px">
          <div className="md:my-auto md:pr-5">
            <div className="pic-bg mx-auto bg-gradient-to-b from-teal-300 to-teal-500 rounded-full relative my-7">
              <div className="relative mx-auto rounded-full w-64 h-64 sm:w-80 sm:h-80 overflow-hidden">
                <Image src={eli} alt="Eliezer Encarnacion's picture" priority />
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom distance="80px">
          <div className="md:text-left text-center md:w-6/12 md:pl-12 md:my-auto">
            <div>
              <h2 className="profile-name text-5xl py-5 text-teal-600 font-medium">Eliezer Encarnacion</h2>
              <p className=" md:text-xl text-lg py-5 leading-8 text-gray-800">
                A <span className="text-teal-500">Front-End Web Developer</span> passionate about creating interactive applications and new experiences on the web!
              </p>
            </div>
            <div className="flex justify-center py-5">
              <a href="https://drive.google.com/file/d/1YMyaJk1YYFrUC2uj5vfK0tJP4bNWTOOi/view?usp=sharing" target="_blank" rel="noreferrer">
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-lg hover:scale-110 duration-300">
                  Resume
                </button>
              </a>
              <ul className="text-5xl flex text-gray-600 text-center md:mx-auto ml-12">
                  {links.map((link) => (
                    <li key={link.name} className="mx-3">
                      <a href={link.link} target="_blank" rel="noreferrer">
                        {link.icon}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Fade>

      </div>
    </section>
  );
}

export default Profile;