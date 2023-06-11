import React from "react";
import home from "../assets/hero.png";
import homeMobile from "../assets/homemob.png";
import { Link } from "react-scroll";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Services from "../components/Services";
import { useMediaQuery } from "@react-hook/media-query";


const Home = () => {
  const backgrounds = useMediaQuery("(min-width: 768px)") ? home : homeMobile;

  return (
    <div className="bg-gray-200">
      <div className="bg-gray-600 text-transparent border-0">
        <Link
          className="text-white outline-[6px] outline outline-blue-700/80 hover:bg-blue-700/80 tracking-widest rounded-full py-1 px-3 absolute justify-center cursor-pointer text-center md:top-[80%] top-[80%] left-[36.5%] md:left-[45.7%] text-[1rem] md:text-[1.6rem] duration-300"
          to="services"
          smooth={true}
          duration={500}
        >
          USLUGE
        </Link>

        <Link to="services" smooth={true} duration={500}>
          <ChevronDownIcon
            className="lg:h-16 ml-[58px] md:ml-0 h-12 cursor-pointer animate-down mt-5 text-white absolute top-[83%] lg:left-[48.1%] left-[27.2%]"
            aria-hidden="true"
          />
        </Link>

        <img src={backgrounds} className="flex w-full h-screen lg:h-full" />
      </div>
      <Services />
    </div>
  );
};

export default Home;
