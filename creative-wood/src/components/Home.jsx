import React from "react";
import woodenwall from "../assets/woodenwall.jpg";

const Home = () => {
  return (
<div className="bg-gray-200">
  <div class="bg-gray-600 text-white border-0">
    <img src={woodenwall} className="flex w-screen h-screen"/>
    <div class="flex absolute top-[40%] left-[3%] flex-col justify-center items-center ">
      <div class="container mx-auto px-4">
        <h5 class="text-[75px] font-bold mb-2">NEW ANIME COLLECTION</h5>
        <p class="text-2xl text-gray-200  ">We got the best laser cut wood products on the web!</p>
      </div>
    </div>
  </div>
  <Products />
</div>

  );
};


export default Home;
