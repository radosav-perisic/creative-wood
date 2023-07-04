import React from "react";
import AnimeProducts from "../components/AnimeProducts";
import blackwall from "/blackwall.png";

import animeSection from "/animelampeslika.png";

const AnimeLamps = () => {


  return (
    <div
      style={{
        backgroundImage: `url(${blackwall})`,
      }}
      className="lg:bg-cover bg-top bg-cover justify-center items-center h-full bg-no-repeat lg:h-full w-full"
    ><link rel="prefetch" as="image" href={blackwall} />
    <link rel="prefetch" as="image" href={animeSection} />
    <div className="w-full  mx-auto lg:pt-24 pt-10 max-w-[1500px] h-full pb-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        
        <div className="w-2/4 h-full pr-28 bg-transparent ml-2 hidden mx-auto lg:flex items-end justify-center flex-row">
          
          <h2 style={{ lineHeight: "1.1" }} className="text-white/80 text-[20px] font-light justify-end">
          <h3 className="text-start mb-10 text-white/90 uppercase tracking-wide text-[45px] font-semibold">ANIME <span className="neon">LED LAMPE</span></h3>
           <p className="my-4">Anime LED lampe su jedinstveni komadi dekorativne rasvete koji su izrađeni od visokokvalitetnog lesonita.Naše lampe dolaze sa <span className="font-bold text-[#3cf2f9]">ugrađenim RGB-LED svetlima</span>, omogućavajući korisnicima da putem priloženog daljinskog upravljača <span className="font-bold text-[#3cf2f9]">promene boju svetla po želji</span>. Svetlosni izvor omogućava postizanje različitih osvetljenja i efekata, pružajući dinamičan doživljaj.</p>
           <p className="my-4"> Dimenzije ovih lampi  <span className="font-bold text-[#3cf2f9]">variraju od 40x20cm do 40x30cm</span>, što ih čini idealnim za postavljanje na zid, policu ili radni sto. Anime motive na lampama često prikazuju omiljene likove iz anime serija, filma ili video igara. Ovi motivi su pažljivo odabrani i detaljno oslikani, pružajući autentičan i estetski privlačan izgled.</p>
           <p className="my-4">Ove lampe su višenamenske i mogu se koristiti kao rasveta za stvaranje atmosfere, dekoracija za sobu ili kao poklon za ljubitelje anime kulture. Sa svojim živopisnim bojama i mogućnošću prilagođavanja osvetljenja, anime LED lampe su siguran način da unesete malo magije i zabave u svoj prostor.</p>
         
          </h2>
         
        </div>
        <div className="md:w-8/12 w-full mt-10 my-10 flex justify-center">
          <img src={animeSection} className="md:h-full object-cover  w-full" />
        </div>
        <div className="md:w-[60%] sm:w-[90%] ml-2 lg:hidden flex text-center place-items-center items-center flex-row justify-center">
          
          <h2 style={{ lineHeight: "1.1" }} className="text-white/80 text-[14px] font-light justify-end">
          <h3 className="text-center mb-10 text-white/90 uppercase tracking-wide text-[32px] font-semibold">ANIME <span className="neon">LED LAMPE</span></h3>
           <p className="my-4">Anime LED lampe su jedinstveni komadi dekorativne rasvete koji su izrađeni od visokokvalitetnog lesonita.Naše lampe dolaze sa <span className="font-bold text-[#3cf2f9]">ugrađenim RGB-LED svetlima</span>, omogućavajući korisnicima da putem priloženog daljinskog upravljača <span className="font-bold text-[#3cf2f9]">promene boju svetla po želji</span>. Svetlosni izvor omogućava postizanje različitih osvetljenja i efekata, pružajući dinamičan doživljaj.</p>
           <p className="my-4"> Dimenzije ovih lampi  <span className="font-bold text-[#3cf2f9]">variraju od 40x20cm do 40x30cm</span>, što ih čini idealnim za postavljanje na zid, policu ili radni sto. Anime motive na lampama često prikazuju omiljene likove iz anime serija, filma ili video igara. Ovi motivi su pažljivo odabrani i detaljno oslikani, pružajući autentičan i estetski privlačan izgled.</p>
           <p className="my-4">Ove lampe su višenamenske i mogu se koristiti kao rasveta za stvaranje atmosfere, dekoracija za sobu ili kao poklon za ljubitelje anime kulture. Sa svojim živopisnim bojama i mogućnošću prilagođavanja osvetljenja, anime LED lampe su siguran način da unesete malo magije i zabave u svoj prostor.</p>
         
          </h2>
         
        </div>
        </div>
      <div className="w-full h-full pb-5 md:py-10 justify-center flex flex-col mx-auto max-w-[1500px]">
        <AnimeProducts />
      </div>
    </div>
    
  );
};

export default AnimeLamps;
