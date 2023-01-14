import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Image from "next/image";
import EcLogo from "../public/images/icon-ec-67.png";

const Navbar = () => {

  const links = [
    {name: "HOME", link:"#home"},
    {name: "ABOUT", link:"#about"},
    {name: "SKILLS", link:"#skills"},
    {name: "PROJECTS", link:"#projects"},
    {name: "CONTACT", link:"#contact"},
  ]

  const [open, setOpen] = useState(false);

  return (

    <div className="shadow-md w-full z-[99] fixed top-0 left-0">
      <div className="md:flex justify-between bg-white py-4 md:px-10 px-7">
        <div className="flex text-4xl items-center font-inconsolata ">
          <a href="#home" className="flex">
            <Image src={EcLogo} alt="EliezerCoding logo" className="w-10 h-10 hover:cursor-pointer" />
            <h1 className="pt-0 pl-2 hover:cursor-pointer">EliezerCoding</h1>
          </a>
        </div>

        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <IoMenu />}
        </div>

        <ul className={`md:flex md:items-center md:pt-2 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-16 opacity-100" : "top-[-490px] opacity-0"} md:opacity-100`}>
          {
            links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a href={link.link} className="text-gray-800 hover:text-teal-500 font-inconsolata text-3xl" onClick={() => (setOpen(false))}>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    
  );
}

export default Navbar;