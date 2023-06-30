import React from "react";
import ClocksComponent from "../components/ClocksComponent";
import clocksImage from "../assets/clocks.jpg";
import plain from "../assets/plain.png";
// import background from '../assets/clockBackground.jpg'
// style={{backgroundImage: `url(${background})`}} 

const Clocks = () => {

  return (
    <div
      className="bg-blue-800/90 h-full lg:h-full w-full"
    >
        <div className="w-full mx-auto lg:pt-20 pt-10 max-w-[1500px] h-full pb-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        <div className="md:w-2/4 w-4/5 border-4 shadow-2xl shadow-black/80 rounded-3xl border-gray-700 mt-10 lg:m-0 flex justify-center">
          <img src={clocksImage} className="md:h-full object-cover rounded-3xl w-full" />
        </div>
        <div className="w-2/4 h-full bg-transparent ml-2 hidden shadow-2xl shadow-black/80 rounded-3xl p-3 py-2 lg:flex items-end justify-center flex-row">
          
          <h2 style={{ lineHeight: "1.1" }} className="text-white text-[33px] justify-end font-bold">
          <h3 className="text-center text-[#422511f4] uppercase tracking-wide text-[35px]">Ekskluzivni drveni satovi sa unikatnim laserskim sečenjem</h3>
           <p className="my-5"><span className="text-amber-950 font-black">•</span> Dostupni u elegantnoj <span className=" underline underline-offset-4 decoration-amber-950/80"></span>crnoj, čistoj beloj i prirodnoj braon boji</p>
           <p className="my-5"><span className="text-amber-950 font-black">•</span> Materijal: <span className=" underline underline-offset-4 decoration-amber-950/80">Lesonit</span></p>
           <p className="my-5"><span className="text-amber-950 font-black">•</span> Prečnik svih satova:  <span className=" underline underline-offset-4 decoration-amber-950/80">40cm</span></p>
          <p className="my-5"><span className="text-amber-950 font-black">•</span> Za <span className=" underline underline-offset-4 decoration-amber-950/80">dodatne boje i personalizaciju</span>, kontaktirajte nas putem e-maila (dodatna nadoknada se može primeniti)</p>
          </h2>
        </div>
        <div className="md:w-[60%] sm:w-[90%] ml-2 lg:hidden flex place-items-start items-start mb-5 flex-row justify-start">
          
          <h2 style={{ lineHeight: "0.9" }} className="text-white/90 text-sm md:text-lg tracking-tight font-bold"><span className="text-[#52d6eb] text-[22px] ">*</span>
          Udoban prečnik od 40 cm čini naše satove savršenim dodatkom za vaš dom !
          </h2>
        </div>
      </div>
      <div className="w-full h-full pb-10 justify-center flex flex-col mx-auto max-w-[1500px]">
        <ClocksComponent />
      </div>
    </div>
  );
};

export default Clocks;
