import React from "react";
import AllLamps from "../components/AllLamps";
import AllLampsWall from "../assets/AllLampsWall.png";
import AllLampsWallMobile from "../assets/AllLampsWallMobile.png";
import { useMediaQuery } from "@react-hook/media-query";
import allLampsImage from "../assets/allLampsImagepng";

const AllLampsPage = () => {
  const backgrounds = useMediaQuery("(min-width: 768px)")
    ? AllLampsWall
    : AllLampsWallMobile;

  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds})`,
      }}
      className="lg:bg-cover bg-top bg-cover h-full bg-no-repeat lg:h-full w-full"
    >
      <div className="w-full h-[280px] absolute mt-16">
        <img
          src={allLampsImage}
          className="h-full object-cover w-full -mt-10  md:hidden"
        />
      </div>
      <div className="w-full h-full justify-center flex flex-col p-4 mx-auto max-w-[1500px]">
        <h2 className="text-6xl mt-16 font-bold text-white tracking-wide hidden md:flex">
          Boris Kralj
        </h2>
        <AllLamps />
      </div>
    </div>
  );
};

export default AllLampsPage;
