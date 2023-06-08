import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import woodenWallLong from '../assets/woodenWallLong.png'
import ClocksComponent from "../components/ClocksComponent";

const Clocks = () => {
  const backgrounds = useMediaQuery("(min-width: 768px)")
    ? woodenWallLong
    : woodenWallLong;

  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds})`,
      }}
      className="lg:bg-cover bg-top bg-cover h-full bg-no-repeat lg:h-full w-full"
    >
      <div className="w-full h-full justify-center flex flex-col p-4 mx-auto max-w-[1500px]">
        <ClocksComponent />
      </div>
    </div>
  );
};

export default Clocks;
