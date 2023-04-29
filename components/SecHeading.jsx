import React from "react";
import { Zoom } from "react-reveal";

const SecHeading = ({ title }) => {
  return (
    <Zoom>
      <div>
        <h1 className="section-heading flex md:text-3xl text-2xl font-ubuntu">{title}</h1>
      </div>
    </Zoom>
  )
}

export default SecHeading;