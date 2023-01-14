import React from "react";
import Image from "next/image";
// import Icon from "/images/skills/";
import htmlIcon from "../public/images/skills/html.png";
import cssIcon from "/images/skills/css.png";
import javascriptIcon from "/images/skills/javascript.png";
import reactIcon from "/images/skills/react.png";
import javaIcon from "/images/skills/java.png";
import springBootIcon from "/images/skills/springboot.png";
import apiIcon from "/images/skills/api.png";
import mysqpIcon from "/images/skills/mysql.png";
import mongodbIcon from "/images/skills/mongodb.png";
import gitIcon from "/images/skills/git.png";
import vscodeIcon from "/images/skills/vscode.png";
import intellijIcon from "/images/skills/intellij.png";

const Skills = () => {

  const skillSrc = "/images/skills/"

  const skillsList = [
    { name: "HTML", src: htmlIcon},
    { name: "CSS", src: skillSrc + "css.png"},
    { name: "JavaScript", src: skillSrc + "javascript.png"},
    { name: "React", src: skillSrc + "react.png"},
    { name: "Java", src: skillSrc + "java.png"},
    { name: "Spring Boot", src: skillSrc + "springboot.png"},
    { name: "REST API", src: skillSrc + "api.png"},
    { name: "MySQL", src: skillSrc + "mysql.png"},
    { name: "MongoDB", src: skillSrc + "mongodb.png"},
    { name: "Git", src: skillSrc + "git.png"},
    { name: "VS Code", src: skillSrc + "vscode.png"},
    { name: "IntelliJ IDEA", src: skillSrc + "intellij.png"},
  ]

  return (
    <section className="pt-20 md:px-20" id="skills">
      
      <div>
        <h1 className="section-heading flex md:text-3xl text-2xl font-ubuntu">Skills</h1>
      </div>

      <div className="section-content">

        <ul className="skills-grid">
          {
            skillsList.map((skill) => (
              <li key={skill.name}>
                <div className="w-[92px] h-[92px] p-[10px] bg-white rounded-2xl shadow-md text-center border-gray-100 border-[1px] hover:shadow-2xl duration-500">
                  <Image src={skill.src} alt="coding skill" width={48} height={48} className="mx-auto" priority />
                  <p className={`whitespace-nowrap ${(skill.name.length > 10 ? "text-xs mt-1" : "text-sm")}`}>{skill.name}</p>
                </div>
              </li>
            ))
          }
        </ul>
        
      </div>

    </section>
  );
}

export default Skills;