import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {TbCross} from 'react-icons/tb'
import { NavLink } from "react-router-dom";

function classNames(...classes) {

  return classes.filter(Boolean).join(" ");
}

export default function Kolekcije() {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex text-[#ffffff] outline outline-blue-500/80 lg:py-0.3 px-0.5 lg:px-1.5  font-bold w-full justify-center gap-x-1.5 rounded-md bg-transparent text-sm lg:text-base hover:bg-blue-500/80 duration-300">
          Kolekcije
          <ChevronDownIcon
            className="-mr-1 mt-[0.04rem] lg:h-6 lg:w-6 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right bg-white shadow-lg">
          <div className="pb-1.5">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                as={NavLink}
                  to='/animelamps'
                  className={classNames(
                    active ? "hover:text-red-500 duration-150" : "bg-gray-100  text-gray-900",
                    "block pl-3.5 pr-4 pt-2  text-sm"
                  )}
                >
                 <span className="bg-[#fb3b51] text-white rounded-md px-0.5 mr-1 "> Anime </span><span className="text-sky-500">L</span>
                  <span className="text-red-600">E</span>
                  <span className="text-green-500">D</span> Lampe
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                as={NavLink}
                to='/alllamps'
                  className={classNames(
                    active ? "hover:text-red-500 duration-150" : "bg-gray-100  text-gray-900",
                    "block px-4 my-2 text-sm ml-0"
                  )}
                >
                  Razne <span className="text-sky-500">L</span>
                  <span className="text-red-600">E</span>
                  <span className="text-green-500">D</span> Lampe
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                as={NavLink}
                to='/clocks'
                  className={classNames(
                    active ? "hover:text-red-500 duration-150" : "bg-gray-100  text-gray-900",
                    "block px-4 my-2 text-sm ml-0"
                  )}
                >
                  Zidni Satovi
                </NavLink>
              )}
            </Menu.Item>
          </div>
       
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
