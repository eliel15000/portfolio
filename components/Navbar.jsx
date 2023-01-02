import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import Image from "next/image";
import EcLogo from "../public/images/icon-ec-67.png";

const Navbar = () => {

  let links = [
    {name: "HOME", link:"#home"},
    {name: "ABOUT", link:"#about"},
    {name: "SKILLS", link:"#skills"},
    {name: "PROJECTS", link:"#projects"},
    {name: "CONTACT", link:"#contact"},
  ]

  let [open, setOpen] = useState(false);

  return (
    // <nav className="py-10 flex justify-between">
    //   <h1 className=" text-xl font-burtons">EliezerCoding</h1>
    //   <ul className="flex items-center">
    //     <li><BsFillMoonStarsFill className=" cursor-pointer text-2xl" /></li>
    //     <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
    //   </ul>
    // </nav>

    <div className="shadow-md w-full z-[99] fixed top-0 left-0">
      <div className="md:flex justify-between bg-white py-4 md:px-10 px-7">
        <div className="flex text-2xl items-center font-burtons ">
          <Image src={EcLogo} alt="EliezerCoding logo" priority className="w-10 h-10 hover:cursor-pointer"></Image>
          <h1 className="pt-2 pl-2 hover:cursor-pointer">EliezerCoding</h1>
        </div>

        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <IoMenu />}
        </div>

        <ul className={`md:flex md:items-center md:pt-2 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-16 opacity-100" : "top-[-490px] opacity-0"} md:opacity-100`}>
          {
            links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a href={link.link} className="text-gray-800 hover:text-teal-500 font-burtons" onClick={() => (setOpen(false))}>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    
  );
}

export default Navbar;