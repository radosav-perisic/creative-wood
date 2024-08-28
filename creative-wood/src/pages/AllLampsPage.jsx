import React from "react";
import AllLamps from "../components/AllLamps";
import blackwall from '/blackwall.png';
import alllampslogo from '/alllampslogo.png';

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
      <div className="w-full  mx-auto lg:pt-24 pt-10 max-w-[1500px] h-full pb-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        
        <div className="w-2/4 h-full pr-28 bg-transparent ml-2 hidden mx-auto lg:flex items-end justify-center flex-row">
          
          <h2 style={{ lineHeight: "1.1" }} className="text-white/80 text-[20px] font-light justify-end">
            <h3 className="text-start mb-10 text-white/90 uppercase tracking-wide text-[45px] font-semibold">VARIOUS <span className="neon">LED LAMPS</span></h3>
            <p className="my-4">Available in <span className="neon-2">elegant black, pure white, and natural brown</span> colors. These lamps will perfectly fit into any interior, providing you with an elegant addition to your home.</p>
            <p className="my-4">Material: <span className="neon-2">High-quality MDF</span>. These lamps are made from durable and lightweight MDF, making them both functional and decorative.</p>
            <p className="my-4">Dimensions: <span className="neon-2">Varies by design</span>. Whether you’re looking for something smaller for a shelf or a larger statement piece for the wall, we have options to suit every need.</p>
            <p className="my-4">For <span className="neon-2">additional colors and personalization</span>, contact us via email. Our team will provide you with information on available options and customization possibilities.</p>
          </h2>
         
        </div>
        <div className="md:w-8/12 w-4/5 mt-10 my-10 flex justify-center">
          <img src={alllampslogo} className="md:h-full object-cover  w-full" />
        </div>
        <div className="md:w-[60%] sm:w-[90%] ml-2 lg:hidden flex text-center place-items-center items-center flex-row justify-center">
          
          <h2 style={{ lineHeight: "1.1" }} className="text-white/80 text-[14px] font-light justify-end">
            <h3 className="text-center mb-10 text-white/90 uppercase tracking-wide text-[32px] font-semibold">DESIGNER <span className="neon">LED LAMPS</span></h3>
            <p className="my-4">Our designer LED lamps combine unique shapes and innovative lighting. Equipped with <span className="neon-2 ">built-in RGB-LED lights</span>, users can change the light color as desired using the included remote control, providing dynamic and adaptable lighting for any space.</p>
            <p className="my-4">The dimensions of these lamps <span className="neon-2 ">vary depending on the design</span>, allowing you to choose between smaller and larger options that perfectly suit your needs.</p>
            <p className="my-4">These lamps are perfect for creating an ambiance in your home or office, and they also make unique gifts for lovers of contemporary design and art.</p>
          </h2>
         
        </div>
      </div>
      
      <div className="w-full h-full pb-5 md:py-10 justify-center flex flex-col mx-auto max-w-[1500px]">
        <AllLamps />
      </div>
    </div>
  );
};

export default AllLampsPage;
