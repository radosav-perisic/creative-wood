import React from "react";
import Kolekcije from "./Categories";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {BsCart3} from 'react-icons/bs'
import { Link } from "react-scroll";



const Navbar = () => {
const state = useSelector((state) => state.addItems)
const totalQty = state.reduce((total, item) => total + item.qty, 0);

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


  return (
    <div className="">
      <div className="fixed place-items-center z-10">
        <section className="relative mx-auto">
          {/* Navbar  */}
          <nav className="flex justify-between bg-transparent backdrop-blur-[15px] shadow-md shadow-black/20 text-white w-screen">
            <div className="lg:px-5 xl:px-12  py-7 flex w-full items-center">
              {/*  Nav Links  */}
              <ul className="hidden md:flex px-4 mx-auto gap-14 font-semibold font-heading space-x-12">
                <li>
                  <NavLink onClick={handleClick} className="text-xl font  tracking-widest hover:text-blue-500/80 duration-200 text-[#ffffff]/90  " as={NavLink} to="/">
                    HOME
                  </NavLink>
                </li>
                <li>
                <Kolekcije />
                </li>
                <li>
                <NavLink className="text-xl font hover:text-blue-500/80  tracking-widest duration-200 text-[#ffffff]/90 " to="about">
                    O NAMA
                  </NavLink>
                </li>
              </ul>
              {/*  Header Icons  */}
              <div className="hidden xl:flex place-items-center space-x-5 items-center">

   
                <NavLink onClick={handleClick}  as={NavLink}
                to='/cart'><BsCart3 className="h-7 w-7"/>
                  <span className="flex absolute text-center -mt-8 ml-5">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#e61c1c] text-white text-lg opacity-75"></span>
                    <span className="relative text-center text-sm font-medium rounded-full h-4 w-4 bg-[#e61c1c]">{totalQty}</span>
                  </span>
             </NavLink>
              </div>
            </div>
            {/*  Responsive navbar  */}
            <ul className="md:hidden gap-10 inline-flex mx-auto items-center font-semibold font-heading ">
                <li>
                  <NavLink onClick={handleClick} className="text-base text-[#ffffff]/90 " as={NavLink} to="/">
                    HOME
                  </NavLink>
                </li>
                <li>
                <Kolekcije />
                </li>
                <li>
                <NavLink onClick={handleClick} className="text-base whitespace-nowrap text-[#ffffff]/90 " as={NavLink} to="/about">
                    O NAMA
                  </NavLink>
                </li>
            <div className="lg:hidden flex mr-6 items-center" href="#">
            <NavLink  as={NavLink}
                to='/cart'><BsCart3 className="lg:h-7 lg:w-7 w-6 h-6"/></NavLink>
              <span className="flex absolute -mt-8 lg:-mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#e61c1c] text-white text-lg opacity-75"></span>
                <span className="relative flex items-center text-sm font-medium justify-center rounded-full h-4 w-4 bg-[#e61c1c]">{totalQty}</span>
              </span>
            </div>         
              </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
