import React from "react";
import AnimeProducts from "../components/AnimeProducts";
import AnimeWall from "../assets/animeledlampebackground.png";
import AnimeWallMobile from "../assets/blackwall.png";
import { useMediaQuery } from "@react-hook/media-query";
import animeSection from "../assets/1.png";
import Footer from "../components/Footer";

const AnimeLamps = () => {
  const backgrounds = useMediaQuery("(min-width: 768px)")
    ? AnimeWall
    : AnimeWallMobile;

  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds})`,
      }}
      className="lg:bg-cover bg-top bg-cover h-full bg-no-repeat lg:h-full w-full"
    >
      <div className="w-full h-[280px] absolute mt-16">
        <img
          src={animeSection}
          className="h-[250px] object-cover w-full -mt-10  md:hidden"
        />
      </div>
      <div className="w-full h-full justify-center flex flex-col p-4 mx-auto max-w-[1500px]">
      
        <AnimeProducts />
      </div>
      <Footer />
    </div>
  );
};

export default AnimeLamps;
