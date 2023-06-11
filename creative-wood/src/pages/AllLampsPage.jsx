import React from "react";
import AllLamps from "../components/AllLamps";
// import AllLampsWall from "../assets/AllLampsWall.png";
// import AllLampsWallMobile from "../assets/AllLampsWallMobile.png";
import woodenWallLong from '../assets/woodenWallLong.png'
import { useMediaQuery } from "@react-hook/media-query";
// import allLampsImage from "../assets/allLampsImagepng";

const AllLampsPage = () => {
  const backgrounds = useMediaQuery("(min-width: 768px)")
    ? woodenWallLong
    : woodenWallLong;

  return (
    <div name='alllamps'
      style={{
        backgroundImage: `url(${backgrounds})`,
      }}
      className="lg:bg-cover bg-top bg-cover h-full bg-no-repeat lg:h-full w-full"
    >

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
