import React from "react";
import AllLamps from "../components/AllLamps";
// import AllLampsWall from "../assets/AllLampsWall.png";
// import AllLampsWallMobile from "../assets/AllLampsWallMobile.png";
import background from '../assets/ledlampebackground.png'
import blackwall from '../assets/blackwall.png'
import Logo from '../assets/2.png'
import { useMediaQuery } from "@react-hook/media-query";
import Footer from "../components/Footer";
// import allLampsImage from "../assets/allLampsImagepng";

const AllLampsPage = () => {
  const backgrounds = useMediaQuery("(min-width: 768px)")
    ? background
    : blackwall;

  return (
    <div name='alllamps'
      style={{
        backgroundImage: `url(${backgrounds})`,
      }}
      className="lg:bg-cover bg-top bg-cover h-full bg-no-repeat lg:h-full w-full"
    >
<div className="w-full h-[280px] md:hidden -mt-40 absolute"><img
          src={Logo}
          className="h-[250px] object-contain w-full"
        /></div>
      <div className="w-full h-full justify-center flex flex-col p-4 mx-auto max-w-[1500px]">
        <h2 className="md:text-2xl text-sm lg:leading-8 leading-4 tracking-tight  font-bold lg:w-[960px] text-white flex">
          * Sve nase lampe dolaze sa RGB-LED svetlima i svaki korisnik preko daljinskog upravljaca koji se dobija u kompletu sa lampom moze da menja boju svetla po zelji 
        </h2>
        <AllLamps />
      </div>
      <Footer />
    </div>
  );
};

export default AllLampsPage;
