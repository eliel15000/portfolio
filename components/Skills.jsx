import React from "react";
import Image from "next/image";
// import Icon from "/images/skills/";
import htmlIcon from "../public/images/skills/html.png";
import cssIcon from "../public/images/skills/css.png";
import javascriptIcon from "../public/images/skills/javascript.png";
import reactIcon from "../public/images/skills/react.png";
import nextIcon from "../public/images/skills/nextjs.png";
import tailwindIcon from "../public/images/skills/tailwind.png";
import javaIcon from "../public/images/skills/java.png";
import springbootIcon from "../public/images/skills/springboot.png";
import apiIcon from "../public/images/skills/api.png";
import mysqpIcon from "../public/images/skills/mysql.png";
import mongodbIcon from "../public/images/skills/mongodb.png";
import gitIcon from "../public/images/skills/git.png";
import vscodeIcon from "../public/images/skills/vscode.png";
import intellijIcon from "../public/images/skills/intellij.png";
import SecHeading from "./SecHeading";
import { Fade } from "react-reveal";

const skillsList = [
  { name: "HTML", src: htmlIcon },
  { name: "CSS", src: cssIcon },
  { name: "JavaScript", src: javascriptIcon },
  { name: "React", src: reactIcon },
  { name: "Next.js", src: nextIcon },
  { name: "Tailwind", src: tailwindIcon },
  { name: "Java", src: javaIcon },
  { name: "Spring Boot", src: springbootIcon },
  { name: "REST API", src: apiIcon },
  { name: "MySQL", src: mysqpIcon },
  { name: "MongoDB", src: mongodbIcon },
  { name: "Git", src: gitIcon },
  { name: "VS Code", src: vscodeIcon },
  { name: "IntelliJ IDEA", src: intellijIcon },
];

const Skills = () => {

  return (
    <section className="pt-20 md:px-20" id="skills">

      <SecHeading title="Skills" />

      <Fade bottom duration={1500}>
        <div className="section-content">

          <ul className="skills-grid">
            {
              skillsList.map((skill) => (
                <li key={skill.name}>
                  <div className="w-[92px] h-[92px] p-[10px] bg-white rounded-2xl shadow-md text-center border-gray-100 border-[1px] hover:shadow-2xl duration-500">
                    <Image src={skill.src} alt="coding skill" width={48} height={48} className="mx-auto" />
                    <p className={`whitespace-nowrap ${(skill.name.length > 10 ? "text-xs mt-1" : "text-sm")}`}>{skill.name}</p>
                  </div>
                </li>
              ))
            }
          </ul>
          
        </div>
      </Fade>

    </section>
  );
}

export default Skills;