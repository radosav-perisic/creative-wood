import React from "react";
import home from "/hero.png";
import homeMobile from "/homemob.png";
import { Link } from "react-scroll";
import Services from "../components/Services";
import { useMediaQuery } from "@react-hook/media-query";
import Footer from "../components/Footer";

const Home = () => {
  const backgrounds = useMediaQuery("(min-width: 768px)") ? home : homeMobile;
  const bgStyle = {
    backgroundImage: `url(${backgrounds})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (

    <div className="w-full h-screen relative">
      
      <div style={bgStyle} className="w-full h-full" />
      <div className="absolute bottom-1/4  left-1/2 transform -translate-x-1/2">
        <Link
          className="text-white color-changing-link font-semibold cursor-pointer ring-[5.5px] ring-blue-800  hover:bg-blue-950  tracking-widest rounded-full py-1 px-3 text-center text-[1.2  rem] md:text-[1.9rem] duration-300"
          to="services"
          smooth={true}
          duration={500}
        >
          SERVICES
        </Link>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
