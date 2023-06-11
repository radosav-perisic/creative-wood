import React from 'react'
import services from "../assets/services.png";
import servicesMobile from "../assets/uslugePozadina.png";
import Products from "../components/Products";
import Products2 from "../components/Products2";
import {MobileBrowser, BrowserView} from 'react-device-detect'
import clock from '../assets/zidnisaticon.png'
import alllamps from '../assets/ledlampeicon.png'
import anime from '../assets/animeledlampeicon.png'
import { NavLink } from 'react-router-dom';
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

  return (
    <div name='services' className="bg-gray-600 text-transparent border-0">
      <img src={backgrounds} className ="flex w-full h-full"/>
      
      <img src={clock} className ="md:hidden absolute top-[166%] left-[30%] w-38 h-28"/>
      <div className='top-[130%] absolute md:hidden grid grid-cols-2 gap-[75px]'>
      <img src={alllamps} className ="md:hidden w-[160px]"/>
      <img src={anime} className ="md:hidden w-[160px]"/>
      </div>
      <div className='grid grid-cols-3 absolute top-[134.7%] lg:top-[138%] left-[15.5%] lg:left-[22.7%] gap-[81px] lg:gap-[335px]'>
      <NavLink onClick={handleClick} to='/animelamps' className='lg:h-[72px] lg:w-[72px] h-7 w-7 rounded-full bg-blue-800/50 animation-ping'></NavLink>
      <NavLink onClick={handleClick} to='/clocks' className='lg:h-[72px] lg:w-[72px] lg:mt-0 mt-[232px] h-7 w-7 rounded-full bg-blue-800/50 animation-ping'></NavLink>
      <NavLink onClick={handleClick} to='/alllamps' className='lg:h-[72px] lg:w-[72px] h-7 w-7 rounded-full bg-blue-800/50 animation-ping'></NavLink>
      </div>
      <div className='grid grid-cols-3 absolute top-[134.7%] lg:top-[138%] left-[15.5%] lg:left-[22.7%] gap-[81px] lg:gap-[335px]'>
      <NavLink onClick={handleClick} to='/animelamps' className='lg:h-[72px] lg:w-[72px] h-7 w-7 rounded-full bg-blue-800/50 animation-ping2'></NavLink>
      <NavLink onClick={handleClick} to='/clocks' className='lg:h-[72px] lg:w-[72px] lg:mt-0 mt-[232px] h-7 w-7 rounded-full bg-blue-800/50 animation-ping2'></NavLink>
      <NavLink onClick={handleClick} to='/alllamps' className='lg:h-[72px] lg:w-[72px] h-7 w-7 rounded-full bg-blue-800/50 animation-ping2'></NavLink>
      </div>
      <div className='absolute top-[145.5%] lg:top-[155%] lg:left-[16.5%] left-[4.1%]'>
      <Products />
      </div>
      <div className='absolute top-[182%] lg:top-[155%] md:left-[41.5%] left-[33.5%]'> 
      <Products2 />
      </div>
    </div>
  )
}

export default Services