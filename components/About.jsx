import React from "react";

const About = () => {
  return (
    <section className="pt-20 md:px-20" id="about">

      <div>
        <h1 className="section-heading flex md:text-3xl text-2xl font-ubuntu">About Me</h1>
      </div>

      <div className="section-content">
        <p className="text-base sm:text-lg md:text-xl smd:p-10">Hello World! I’m Eliezer Encarnacion, a Front-End Web Developer, recently graduated from the <a href="https://www.umass.edu/" target="_blank" rel="noreferrer" className="text-teal-500 hover:underline" title="UMass Amherst">University of Massachusetts Amherst</a> with a B.S. in computer science. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
      </div>
      
    </section>
  );
}

export default About;