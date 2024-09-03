import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {TbCross} from 'react-icons/tb'
import { NavLink } from "react-router-dom";

function classNames(...classes) {

   

  return classes.filter(Boolean).join(" ");
}

export default function Kolekcije() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };


  return (
    <Menu   onMouseEnter={() => setIsMenuOpen(true)}
    onMouseLeave={() => setIsMenuOpen(false)} as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex tracking-widest text-[#ffffff] hover:text-blue-500/80 lg:py-0.3 px-0.5 lg:px-1.5  w-full justify-center md:gap-x-1.5 rounded-md bg-transparent text-xs md:text-lg  font-semibold duration-300">
        CATEGORIES
          <ChevronDownIcon
            className="-mr-1 md:mt-[0.2rem] h-4 w-4 md:h-6 md:w-6 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
      show={isMenuOpen}
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right bg-white shadow-lg">
          <div className="pb-1.5 ">
            <Menu.Item>
              {({ active }) => (
                <NavLink onClick={handleClick}
                as={NavLink}
                  to='/animelamps'
                  className={classNames(
                    active ? "duration-150" : "bg-white text-gray-900",
                    "block pl-3.5 pr-4 py-1.5 pt-2.5  text-base"
                  )}
                >
                 <span className="text-black hover:text-blue-700 duration-200 px-0.5 mr-1 text-[15px]  font-bold"> Anime LED Lamps</span>
                </NavLink>
              )}
            </Menu.Item>
            <div className="border-b-2 border-[#828080]"/>
            <Menu.Item onClick={handleClick}>
              {({ active }) => (
                <NavLink 
                as={NavLink}
                to='/alllamps'
                  className={classNames(
                    active ? "duration-150" : "bg-white  text-gray-900",
                    "block pl-3.5 pr-4 py-1.5  text-base"
                  )}
                ><span className="text-black px-0.5 mr-1 hover:text-blue-700 duration-200 text-[15px] font-bold">Various LED Lamps</span>
                </NavLink>
              )}
            </Menu.Item>
            <div className="border-b-2 border-[#828080]"/>
            <Menu.Item>
              {({ active }) => (
                <NavLink onClick={handleClick}
                as={NavLink}
                to='/clocks'
                  className={classNames(
                    active ? "duration-150" : "bg-white  text-gray-900",
                    "block pl-3.5 pr-4 py-1.5  text-base"
                  )}
                >
                 <span className="text-black px-0.5 mr-1 hover:text-blue-700 duration-200 text-[15px] font-bold">Wall Clocks</span>
                </NavLink>
              )}
            </Menu.Item>
          </div>
       
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
