import React from "react";
import ClocksComponent from "../components/ClocksComponent";
import clocksImage from "/clocks.jpg";
import { Link } from "react-scroll";

const Clocks = () => {

  return (
    <div
      className="bg-[#171717] h-full lg:h-full w-full"
    >
      <div className="bg-[#171717]">
        <div className="w-full  mx-auto  lg:pt-24 pt-10 max-w-[1500px] h-full pb-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        
        <div className="w-2/4 h-full pr-28 bg-transparent ml-2 hidden mx-auto lg:flex items-end justify-center flex-row">
          
          <h2 style={{ lineHeight: "1.1" }} className="text-white/80 text-[20px] justify-end font-light">
          <h3 className="text-start mb-10 text-white uppercase tracking-wide text-[45px] font-semibold">WALL CLOCKS</h3>
           <p className="my-4"> Available in elegant <span className=" font-bold text-white">black, pure white, and natural brown colors</span>. These clocks will perfectly fit into any interior and provide you with an elegant addition to your home.</p>
           <p className="my-4"> Material: <span className="font-bold text-white">Fiberboard</span>. They are made from high-quality material - fiberboard. This material is durable and lightweight, making it ideal for clocks that will be both functional and decorative.</p>
           <p className="my-4"> Diameter of all clocks:  <span className=" font-bold text-white">40cm</span>. All clocks have a diameter of 40cm, making them large enough to be noticeable but not overly dominant, ideal for any room in the house or office.</p>
          <p className="my-4"> For <span className=" font-bold text-white">additional colors and personalization</span>, contact us via email. Our team will provide you with information on options and possibilities, with an additional charge for personalization.</p>
          </h2>
         
        </div>
        <div className="md:w-2/4 w-11/12 mt-10 mb-2 flex justify-center">
          <img src={clocksImage} className="md:h-full object-cover  w-full" />
        </div>
        <div className="md:w-[60%] sm:w-[90%] ml-2 lg:hidden flex text-center place-items-center items-center flex-row justify-center">
          
          <div style={{ lineHeight: "1.1" }} className="text-white/80 text-[14px] justify-center font-light">
          <h3 className="text-center text-white uppercase tracking-wide text-[25px] font-semibold">WALL CLOCKS</h3>
           <p className="my-2"> Available in elegant <span className=" font-bold text-white">black, pure white, and natural brown colors</span>. These clocks will perfectly fit into any interior and provide you with an elegant addition to your home.</p>
           <p className="my-2"> Material: <span className="font-bold text-white">Fiberboard</span>. They are made from high-quality material - fiberboard. This material is durable and lightweight, making it ideal for clocks that will be both functional and decorative.</p>
           <p className="my-2"> Diameter of all clocks:  <span className=" font-bold text-white">40cm</span>. All clocks have a diameter of 40cm, making them large enough to be noticeable but not overly dominant, ideal for any room in the house or office.</p>
          <p className="my-2"> For <span className=" font-bold text-white">additional colors and personalization</span>, contact us via email. Our team will provide you with information on options and possibilities, with an additional charge for personalization.</p>
          </div>
        </div>
      </div>
      </div>
      <div name='clocklist' className="w-full h-full pb-5 md:py-10 justify-center flex flex-col mx-auto max-w-[1500px]">
        <ClocksComponent />
      </div>
    </div>
  );
};

export default Clocks;
