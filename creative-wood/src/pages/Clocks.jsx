import React from "react";
import ClocksComponent from "../components/ClocksComponent";
import clocksImage from "../assets/clocks.jpg";
import plain from "../assets/plain.png";
// import background from '../assets/clockBackground.jpg'
// style={{backgroundImage: `url(${background})`}} 

const Clocks = () => {

  return (
    <div
      className="bg-[#FFFDFA] h-full lg:h-full w-full"
    >
      <div className=" content-div">
        <div className="w-full  mx-auto lg:pt-24 pt-10 max-w-[1500px] h-full pb-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        
        <div className="w-2/4 h-full pr-28 bg-transparent ml-2 hidden mx-auto lg:flex items-end justify-center flex-row">
          
          <h2 style={{ lineHeight: "1.1" }} className="text-black/90 text-[20px] justify-end">
          <h3 className="text-start mb-10 text-black uppercase tracking-wide text-[40px] font-semibold">ZIDNI SATOVI</h3>
           <p className="my-4"> Dostupni u elegantnoj <span className=" font-bold ">crnoj, čistoj beloj i prirodnoj braon boji</span>. Ovi satovi će se savršeno uklopiti u bilo koji enterijer i pružiti vam elegantan dodatak za vaš dom.</p>
           <p className="my-4"> Materijal: <span className=" font-bold ">Lesonit</span>. Izrađeni su od visokokvalitetnog materijala - lesonita. Ovaj materijal je izdržljiv i lagan, što ga čini idealnim za satove koji će biti istovremeno funkcionalni i dekorativni.</p>
           <p className="my-4"> Prečnik svih satova:  <span className=" font-bold ">40cm</span>. Svi satovi imaju prečnik od 40cm, što ih čini dovoljno velikim da budu primetni, ali ne previše dominantnim, idealnim za bilo koju prostoriju u kući ili kancelariji.</p>
          <p className="my-4"> Za <span className=" font-bold ">dodatne boje i personalizaciju</span>, kontaktirajte nas putem e-maila. Naša ekipa će vam pružiti informacije o opcijama i mogućnostima, uz dodatnu nadoknadu za personalizaciju.</p>
          </h2>
         
        </div>
        <div className="md:w-2/4 w-4/5 shadow-2xl shadow-black/50 mt-10 my-10 flex justify-center">
          <img src={clocksImage} className="md:h-full object-cover  w-full" />
        </div>
        <div className="md:w-[60%] sm:w-[90%] ml-2 lg:hidden flex place-items-start items-start mb-5 flex-row justify-start">
          
          <h2 style={{ lineHeight: "0.9" }} className="text-white/90 text-sm md:text-lg tracking-tight font-bold"><span className="text-[#52d6eb] text-[22px] ">*</span>
          Udoban prečnik od 40 cm čini naše satove savršenim dodatkom za vaš dom !
          </h2>
        </div>
      </div>
      </div>
      <div className="w-full h-full py-10 justify-center flex flex-col mx-auto max-w-[1500px]">
        <ClocksComponent />
      </div>
    </div>
  );
};

export default Clocks;
