import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const projectList = [
    {
      name: "Headphones Online Store",
      image: "/images/projects/ecommerce.png",
      tech: "Next.js, React, Sanity, Stripe, REST API, Node.js",
      desc: [
        "Implemented the functioning of an E-commerce Website that performs various functions like adding products to cart, billing, and much more.",
        "Used Next.js to performs server-side rendering, whereas React focuses on rendering towards the DOM.",
        "Used Sanity to manage the information of the products (images, text, details, and more) with APIs.",
        "Used Stripe for powering the online payment processing."
      ],
      live: "https://ecommerce-eliel15000.vercel.app/",
      repo: "https://github.com/eliel15000/ecommerce/"
    },
    {
      name: "Recipe App",
      image: "/images/projects/recipe.png",
      tech: "React, Bootstrap, REST API, Node.js",
      desc: [
        "Developed a Website App to search for food recipes using React.",
        "Data fetched from Edamam (Recipe Search API)."
      ],
      live: "https://eliel15000.github.io/recipe-app/",
      repo: "https://github.com/eliel15000/recipe-app/"
    },
    {
      name: "Portfolio",
      image: "/images/projects/portfolio.png",
      tech: "Next.js, React, Tailwind CSS, Node.js",
      desc: ["Developed an interesting portfolio website, where skills and projects are shown.", "Built with hooks and functional components.", "Smooth scrolling effect between sections via navigation bar."],
      live: "#home",
      repo: "https://github.com/eliel15000/portfolio/"
    },
    {
      name: "EdgeTrack",
      image: "/images/projects/edgetrack.jpeg",
      tech: "JavaScript, Bootstrap, PostgreSQL, Express.js, Node.js, Heroku",
      desc: ["Collaborated with peers to develop an online trading journal.", "Co-implemented front-end pages with JavaScript and Bootstrap CSS.", "Co-implemented Express API that fetches data with SQL queries."],
      live: "",
      repo: "https://github.com/nszczepura/cs326-final-upsilon/"
    },
    {
      name: "Employee Management App",
      image: "/images/projects/employee.png",
      tech: "Java, Spring Boot, Maven, React, Bootstrap, Axios, MySQL, Node.js",
      desc: ["Developed a full stack application that manages a list of employees and their details.", "Used React Hooks to update employees table based on user actions.", "Implemented page navigation with React Routers.", "Used Axios to make REST API calls from the client (React) to the server (Spring Boot).", "Used Spring Boot and some dependencies (like Spring MVC, Spring Data JPA, MySQL Driver, and more) to interact with the client and the database (MySQL)."],
      live: "",
      repo: "https://github.com/eliel15000/employee-management/"
    },
    {
      name: "Tinger App",
      image: "/images/projects/tinger.png",
      tech: "HTML, CSS, Bootstrap",
      desc: ["A simulation of a website where you can meet new tigers nearby, instead of people, as on Tinder.", "Organized code, HTML divided into sections, style-sheet modular and readable."],
      live: "https://eliel15000.github.io/tinger/",
      repo: "https://github.com/eliel15000/tinger/"
    }
  ]

  return (
    <section className="pt-20 md:px-20" id="projects">
      <div>
        <h1 className="section-heading flex md:text-3xl text-2xl font-ubuntu">Projects</h1>
      </div>

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

export default Projects;