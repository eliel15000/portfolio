import React from "react";
import Image from "next/image";

const Skills = () => {

  const skillSrc = "/images/skills/"

  const skillList = [
    { name: "HTML", src: skillSrc + "html.png"},
    { name: "CSS", src: skillSrc + "css.png"},
    { name: "JavaScript", src: skillSrc + "javascript.png"},
    { name: "React", src: skillSrc + "react.png"},
    { name: "Java", src: skillSrc + "java.png"},
    { name: "REST API", src: skillSrc + "api.png"},
    { name: "MySQL", src: skillSrc + "mysql.png"},
    { name: "MongoDB", src: skillSrc + "mongodb3.png"},
    { name: "Git", src: skillSrc + "git.png"},
    { name: "VS Code", src: skillSrc + "vscode.png"},
    { name: "IntelliJ", src: skillSrc + "intellij.png"},
  ]

  return (
    <section className="pt-20 md:px-20" id="skills">
      
      <div>
        <h1 className="sectionHeading flex md:text-3xl text-2xl font-ubuntu">Skills</h1>
      </div>

      <div className="sectionContent">

        <ul className="skillsGrid">
          {
            skillList.map((skill) => (
              <li>
                <div className="w-[92px] h-[92px] p-[10px] bg-white rounded-2xl shadow-md text-center border-gray-100 border-[1px] hover:shadow-2xl duration-500">
                  <Image src={skill.src} width={48} height={48} className="mx-auto" />
                  <p className="text-sm">{skill.name}</p>
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