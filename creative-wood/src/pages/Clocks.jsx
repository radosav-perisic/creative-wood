import React from "react";
import ClocksComponent from "../components/ClocksComponent";
import clocksImage from "/clocks.jpg";
import { Link } from "react-scroll";

const Clocks = () => {

  return (
    <div
      className="bg-[#171717] h-full lg:h-full w-full"
    >
      <div className="bg-[#171717]">
        <div className="w-full  mx-auto  lg:pt-24 pt-10 max-w-[1500px] h-full pb-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        
        <div className="w-2/4 h-full pr-28 bg-transparent ml-2 hidden mx-auto lg:flex items-end justify-center flex-row">
          
          <h2 style={{ lineHeight: "1.1" }} className="text-white/80 text-[20px] justify-end font-light">
          <h3 className="text-start mb-10 text-white uppercase tracking-wide text-[45px] font-semibold">ZIDNI SATOVI</h3>
           <p className="my-4"> Dostupni u elegantnoj <span className=" font-bold text-white">crnoj, čistoj beloj i prirodnoj braon boji</span>. Ovi satovi će se savršeno uklopiti u bilo koji enterijer i pružiti vam elegantan dodatak za vaš dom.</p>
           <p className="my-4"> Materijal: <span className="font-bold text-white">Lesonit</span>. Izrađeni su od visokokvalitetnog materijala - lesonita. Ovaj materijal je izdržljiv i lagan, što ga čini idealnim za satove koji će biti istovremeno funkcionalni i dekorativni.</p>
           <p className="my-4"> Prečnik svih satova:  <span className=" font-bold text-white">40cm</span>. Svi satovi imaju prečnik od 40cm, što ih čini dovoljno velikim da budu primetni, ali ne previše dominantnim, idealnim za bilo koju prostoriju u kući ili kancelariji.</p>
          <p className="my-4"> Za <span className=" font-bold text-white">dodatne boje i personalizaciju</span>, kontaktirajte nas putem e-maila. Naša ekipa će vam pružiti informacije o opcijama i mogućnostima, uz dodatnu nadoknadu za personalizaciju.</p>
          </h2>
         
        </div>
        <div className="md:w-2/4 w-11/12 mt-10 mb-2 flex justify-center">
          <img src={clocksImage} className="md:h-full object-cover  w-full" />
        </div>
        <div className="md:w-[60%] sm:w-[90%] ml-2 lg:hidden flex text-center place-items-center items-center flex-row justify-center">
          
          <div style={{ lineHeight: "1.1" }} className="text-white/80 text-[14px] justify-center font-light">
          <h3 className="text-center text-white uppercase tracking-wide text-[25px] font-semibold">ZIDNI SATOVI</h3>
           <p className="my-2"> Dostupni u elegantnoj <span className=" font-bold text-white">crnoj, čistoj beloj i prirodnoj braon boji</span>. Ovi satovi će se savršeno uklopiti u bilo koji enterijer i pružiti vam elegantan dodatak za vaš dom.</p>
           <p className="my-2"> Materijal: <span className="font-bold text-white">Lesonit</span>. Izrađeni su od visokokvalitetnog materijala - lesonita. Ovaj materijal je izdržljiv i lagan, što ga čini idealnim za satove koji će biti istovremeno funkcionalni i dekorativni.</p>
           <p className="my-2"> Prečnik svih satova:  <span className=" font-bold text-white">40cm</span>. Svi satovi imaju prečnik od 40cm, što ih čini dovoljno velikim da budu primetni, ali ne previše dominantnim, idealnim za bilo koju prostoriju u kući ili kancelariji.</p>
          <p className="my-2"> Za <span className=" font-bold text-white">dodatne boje i personalizaciju</span>, kontaktirajte nas putem e-maila. Naša ekipa će vam pružiti informacije o opcijama i mogućnostima, uz dodatnu nadoknadu za personalizaciju.</p>
          </div>
        </div>
      </div>
      </div>
      <div name='clocklist' className="w-full h-full pb-5 md:py-10 justify-center flex flex-col mx-auto max-w-[1500px]">
        <ClocksComponent />
      </div>
    </div>
  );
};

export default Clocks;
