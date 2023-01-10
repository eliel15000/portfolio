import React from "react";
import { BsEnvelopeFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="pt-20 pb-10 md:px-20" id="contact">
      <div>
        <h1 className="section-heading flex md:text-3xl text-2xl font-ubuntu">Contact</h1>
      </div>

      <div className="section-content">

        <div className="bg-white rounded-2xl shadow-md p-5 border-gray-100 border-[1px] text-center">
          <BsEnvelopeFill className="text-3xl sm:text-5xl mx-auto mb-3"/>
          <a href="mailto:eliezercoding@gmail.com" className="underline text-xs sm:text-base">eliezercoding@gmail.com</a>
          <p className="text-gray-500 text-xs sm:text-base mt-2">Email Me</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;