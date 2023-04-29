import React from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import SecHeading from "./SecHeading";
import { Flip } from "react-reveal";

const Contact = () => {
  return (
    <section className="pt-20 pb-10 md:px-20" id="contact">

      <SecHeading title="Contact" />

      <div className="section-content">

        <div className="bg-white rounded-2xl shadow-md p-5 border-gray-100 border-[1px] text-center">
          <Flip>
            <div>
              <BsEnvelopeFill className="text-3xl sm:text-5xl mx-auto mb-3"/>
              <a href="mailto:eliezercoding@gmail.com" className="underline text-xs sm:text-base  hover:text-blue-500">eliezercoding@gmail.com</a>
              <p className="text-gray-500 text-xs sm:text-base mt-2">Hit me up! <span className="text-xl">👆</span></p>
            </div>
          </Flip>
        </div>

      </div>
    </section>
  );
}

export default Contact;