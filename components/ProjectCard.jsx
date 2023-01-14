import React from "react";
import Image from "next/image";

const ProjectCard = ({ name, image, tech, desc, live, repo }) => {
  return (
    <article>
      <div className="smd:flex bg-white rounded-2xl shadow-md hover:shadow-2xl duration-500 smd:p-5 border-gray-100 border-[1px]">

        <div className="flex-[0_0_400px]">
          <Image src={image} alt={`${name} project`} width={500} height={278} className="rounded-2xl mx-auto border-[1px]" />
        </div>

        <div className="smd:ml-5 p-5 smd:p-0">
          <h3 className="font-ubuntu text-xl mb-2">{name}</h3>
          <h4 className="sm:text-lg mb-5">Technologies Used: <span className="text-teal-600">{tech}</span></h4>

          <ul className="list-disc list-inside">
            {
              desc.map((detail, i) => (
                <li key={`${i}_${detail.length}`} className="mb-2 text-sm sm:text-base">{detail}</li>
              ))
            }
          </ul>

          <div className="text-teal-600 text-lg underline mt-10">
            {live && (
              <a href={live} target={(live[0] === "#") ? "" : "_blank"} rel="noreferrer" className="mr-10">Live</a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer">Repo</a>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;