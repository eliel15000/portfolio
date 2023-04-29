import React from "react";
import ProjectCard from "./ProjectCard";
import SecHeading from "./SecHeading";

import restaurantImage from "../public/images/projects/eliandzer.png";
import realzerImage from "../public/images/projects/realzer.png";
import shoestoreImage from "../public/images/projects/shoestore.png";
import recipeImage from "../public/images/projects/recipe.png";
import edgetrackImage from "../public/images/projects/edgetrack.jpeg";
import employeeImage from "../public/images/projects/employee.png";

const Projects = () => {

  return (
    <section className="pt-20 md:px-20" id="projects">

      <SecHeading title="Projects" />

      <div className="section-content">

        <div className="grid gap-y-10">
          {
            projectList.map((project, i) => (
              <ProjectCard 
                key={i + "_" + project.name}
                name={project.name}
                image={project.image}
                tech={project.tech}
                desc={project.desc}
                live={project.live}
                repo={project.repo}
              />
            ))
          }
        </div>

      </div>

    </section>
  );
}

const projectList = [
  {
    name: "Eli&Zer Restaurant",
    image: restaurantImage,
    tech: "React, Headless UI, CSS, Node.js",
    desc: [
      "Modern UI/UX Restaurant Landing Page Website.",
      "Figma design used to build a beautiful website.",
      "Developed reusable React Functional components.",
      "Fundamental CSS properties to master flex & grid.",
      "Perfectly placed media queries for satisfactory responsiveness covering almost all devices."
    ],
    live: "https://eliel15000.github.io/eli-zer-restaurant/",
    repo: "https://github.com/eliel15000/eli-zer-restaurant"
  },
  {
    name: "Realzer",
    image: realzerImage,
    tech: "React, Next.js, Chakra UI, Tailwind CSS, REST API, Axios, Node.js",
    desc: [
      "Real Estate Website App with rental home and sale properties.",
      "Developed User Interface using Chakra UI.",
      "Static Generation and Server Side Rendering with Next.js",
      "Implemented advanced property filtering.",
      "Real Estate Data fetched from Rapid API."
    ],
    live: "https://realzer.vercel.app/",
    repo: "https://github.com/eliel15000/realzer"
  },
  {
    name: "Ecommerce - shoes store",
    image: shoestoreImage,
    tech: "React, Next.js, Tailwind CSS, Sanity, Stripe, REST API, Node.js",
    desc: [
      "Implemented the functioning of an E-commerce Website that performs various functions like adding products to cart, billing, and much more.",
      "Used Next.js to performs server-side rendering, whereas React focuses on rendering towards the DOM.",
      "Used Sanity to manage the information of the products (images, text, details, and more) with APIs.",
      "Used Stripe for powering the online payment processing."
    ],
    live: "https://ez-shoes-store.vercel.app/",
    repo: "https://github.com/eliel15000/ez-shoes-store"
  },
  {
    name: "Recipe App",
    image: recipeImage,
    tech: "React, Bootstrap, REST API, Node.js",
    desc: [
      "Developed a Website App to search for food recipes using React.",
      "Data fetched from Edamam (Recipe Search API)."
    ],
    live: "https://eliel15000.github.io/recipe-app/",
    repo: "https://github.com/eliel15000/recipe-app/"
  },
  {
    name: "EdgeTrack",
    image: edgetrackImage,
    tech: "JavaScript, Bootstrap, PostgreSQL, Express.js, Node.js",
    desc: [
      "Collaborated with peers to develop an online trading journal.",
      "Co-implemented front-end pages with JavaScript and Bootstrap CSS.",
      "Co-implemented Express API that fetches data with SQL queries."
    ],
    live: "",
    repo: "https://github.com/nszczepura/cs326-final-upsilon/"
  },
  {
    name: "Employee Management App",
    image: employeeImage,
    tech: "Java, Spring Boot, Maven, React, Bootstrap, Axios, MySQL, Node.js",
    desc: [
      "Developed a full stack application that manages a list of employees and their details.",
      "Used React Hooks to update employees table based on user actions.",
      "Implemented page navigation with React Routers.",
      "Used Axios to make REST API calls from the client (React) to the server (Spring Boot).",
      "Used Spring Boot and some dependencies (like Spring MVC, Spring Data JPA, MySQL Driver, and more) to interact with the client and the database (MySQL)."
    ],
    live: "",
    repo: "https://github.com/eliel15000/employee-management/"
  },
];

export default Projects;