import React from "react";
import woodenwall from "../assets/woodenwall.png";
import Products from "../components/Products";


const Home = () => {
  return (
<div className="bg-gray-200">
  <div className="bg-gray-600 text-transparent border-0">
    <img src={woodenwall} className ="flex w-full h-full"/>
    <div className="flex absolute top-[47%] left-[2.5%] flex-col justify-center items-center ">
      <div className="container mx-auto px-4">

         <Products />

      </div>
    </div>

  </div>
 
</div>

  );
};


export default Home;
