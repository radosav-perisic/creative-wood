import React from "react";
import AllLamps from "../components/AllLamps";
import blackwall from '../assets/blackwall.png'
import alllampslogo from '../assets/alllampslogo.png'



const AllLampsPage = () => {


  return (
    <div name='alllamps'
      style={{
        backgroundImage: `url(${blackwall})`,
      }}
      className="lg:bg-cover bg-top bg-cover justify-center items-center h-full bg-no-repeat lg:h-full w-full"
    >
      <link rel="prefetch" as="image" href={blackwall} />
    <link rel="prefetch" as="image" href={alllampslogo} />
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        <div className="w-[20%] h-full ml-2 hidden lg:flex items-start flex-row">
          <span className="text-[#52d6eb] text-3xl "> * </span>
          <h2 style={{ lineHeight: "1.1" }} className="text-white/90 md:text-lg text-sm justify-end tracking-tight font-bold">
          Naše lampe dolaze sa ugrađenim RGB-LED svetlima, omogućavajući korisnicima da putem priloženog daljinskog upravljača promene boju svetla po želji.
          </h2>
        </div>
        <div className="md:w-[60%] w-full  mt-10 lg:m-0 flex justify-center">
          <img src={alllampslogo} className="md:h-full object-cover w-full" />
        </div>
        <div className="md:w-[60%] sm:w-[90%] ml-2 lg:hidden flex place-items-start items-start mb-5 flex-row justify-start">
          
          <h2 style={{ lineHeight: "0.9" }} className="text-white/90 text-sm md:text-lg tracking-tight font-bold"><span className="text-[#52d6eb] text-[22px] ">*</span>
          Naše lampe dolaze sa ugrađenim RGB-LED svetlima, omogućavajući korisnicima da putem priloženog daljinskog upravljača promene boju svetla po želji.
          </h2>
        </div>
      </div>
      
      <div className="w-full h-full pb-10 justify-center flex flex-col mx-auto max-w-[1500px]">
        <AllLamps />
      </div>
    </div>
  );
};

export default AllLampsPage;
