import React from "react";
import Example from "./Categories";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="fixed place-items-center z-10">
        <section className="relative mx-auto">
          {/* <? navbar  */}
          <nav className="flex justify-between bg-transparent backdrop-blur-[5px] shadow-md shadow-black/20 text-white w-screen">
            <div className="px-5 xl:px-12 lg:py-5 py-7 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#"></a>
              {/*  Nav Links  */}
              <ul className="hidden md:flex px-4 mx-auto gap-14 font-semibold font-heading space-x-12">
                <li>
                  <NavLink className="text-base text-[#ffffff]  font-bold" as={NavLink} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                <Example />
                </li>
                <li className="text-base text-[#ffffff]  font-bold" as={NavLink} to="/collections">
                 
                    Kolekcije
                  
                </li>
                <li>
                <NavLink className="text-base text-[#ffffff]  font-bold" as={NavLink} to="/about">
                    O Nama
                  </NavLink>
                </li>
              </ul>
              {/*  Header Icons  */}
              <div className="hidden xl:flex place-items-center space-x-5 items-center">
                <a className="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#e61c1c] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e61c1c]"></span>
                  </span>
                </a>
              </div>
            </div>
            {/*  Responsive navbar  */}
            <a className="lg:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#e61c1c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e61c1c]"></span>
              </span>
            </a>
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
