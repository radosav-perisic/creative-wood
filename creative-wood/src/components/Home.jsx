import React from "react";
import woodenwall from "../assets/woodenwall.png";
import Products from "./Products";

const Home = () => {
  return (
<div className="bg-gray-200">
  <div className="bg-gray-600 text-transparent border-0">
    <img src={woodenwall} className ="flex w-full h-full"/>
    <div className="flex absolute top-[40%] left-[3%] flex-col justify-center items-center ">
      <div className="container mx-auto px-4">
        <h5 className="text-[75px] font-bold mb-2 ">NEW ANIME COLLECTION</h5>
        <p className="text-2xl text-gray-200  ">We got the best laser cut wood products on the web!</p>
      </div>
    </div>
  </div>
  <Products />
</div>

  );
};


export default Home;
