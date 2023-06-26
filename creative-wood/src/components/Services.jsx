import React from "react";
import services from "../assets/services.png";
import servicesMobile from "../assets/ServicesBg.png";
import Products from "./Products";
import { MobileBrowser, BrowserView } from "react-device-detect";
import clock from "../assets/zidnisaticon.png";
import alllamps from "../assets/ledlampeicon.png";
import anime from "../assets/animeledlampeicon.png";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";

const Services = () => {
  const backgrounds = useMediaQuery("(min-width: 768px)")
    ? services
    : servicesMobile;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const bgStyle = {
    backgroundImage: `url(${backgrounds})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={bgStyle}
      name="services"
      className="w-full h-screen flex flex-col"
    >
      <div className="flex justify-center">
      <h1 className="text-white font-medium text-7xl text-center justify-center tracking-[0.2em] hidden md:block" style={{ transform: 'translateY(8rem)' }}>USLUGE</h1>
      </div>
      <div className="flex md:items-end lg:gap-0 justify-center h-screen">
      
        <div className="items-center justify-items-center justify-end md:justify-center md:grid-cols-3 md:gap-x-[2rem] lg:gap-x-[8rem] md:gap-y-2 gap-y-[1rem] md:grid flex-cols-3 flex flex-col lg:gap-6">
           <NavLink to='/animelamps' onClick={handleClick} ><img src={anime} alt="Anime" className="color-changing-image h-auto max-w-[120px]" /></NavLink>
          <h2 className="text-xl font-bold text-white block md:hidden">Izrada Anime LED Lampi</h2>
          <NavLink to='/clocks' onClick={handleClick}><img src={clock} alt="Clock" className="color-changing-image h-auto max-w-[120px]" /></NavLink>
          <h2 className="text-xl font-bold text-white block md:hidden">Izrada LED Lampi</h2>
           <NavLink  to='/alllamps'  onClick={handleClick}><img src={alllamps} alt="All Lamps" className="color-changing-image h-auto max-w-[120px]" /></NavLink>
          <h2 className="text-xl font-bold text-white block md:hidden md:mb-0 mb-10">Izrada Zidnih Satova</h2>
          
        <h2 className="text-xl font-bold text-white hidden md:block">Izrada Anime LED Lampi</h2>
        <h2 className="text-xl font-bold text-white hidden md:block">Izrada Zidnih Satova</h2>
        <h2 className="text-xl font-bold text-white hidden md:block">Izrada LED Lampi</h2>

        </div>
      </div>
      <div className="hidden md:flex-grow md:flex h-screen md:items-start  justify-center lg:items-center">
        <Products />
      </div>
    </div>
  );
};

export default Services;
