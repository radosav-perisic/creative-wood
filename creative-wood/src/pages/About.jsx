import React from "react";
import about from "../assets/aboutus.png";
import aboutMob from "../assets/onamamob.png";
import { useMediaQuery } from "@react-hook/media-query";

const About = () => {

    const backgrounds = useMediaQuery("(min-width: 768px)")
      ? about
      : aboutMob;

  return (
    <div name="about" className="bg-gray-600 text-transparent border-0">
      <img src={backgrounds} className="flex w-screen h-screen md:w-full md:h-full" />
      <div className="absolute text-[13px] leading-tight lg:leading-normal  lg:text-[19px] text-white/70 top-[20%] lg:top-[50%] w-[210px] lg:w-[800px] text-left left-[39.5%] lg:left-[50.5%]">
        <p className="">
          Iskusite čaroliju Creative Wood-ovih laserski izrezanih drvenih
          proizvoda. Od pažljivo izrađenih zidnih satova do zapanjujućih
          zidnih lampi ukrašenih LED osvetljenjem, naša kolekcija obuhvata
          raznovrsne stilizovane dodatke. Sa posvećenošću kvalitetu i zanatstvu,
          donosimo personalizovane dodire svakom kreacijom.
        </p>
        <p className="mt-3">
          Naša radionica se nalazi u prelepom gradu Vrbasu, gde se svaki
          proizvod pažljivo izrađuje od strane našeg tima stručnjaka. Svaki
          komad je rezultat preciznog rada i pažljivog odabira materijala, kako
          bismo vam pružili proizvode vrhunskog kvaliteta.
        </p>
        <p className="mt-3">
          Nudimo vam mogućnost slanja proizvoda brzom poštom širom Srbije, tako
          da vaši omiljeni komadi mogu stići direktno na vašu adresu. Bez obzira
          gde se nalazite, možete uživati u našim jedinstvenim proizvodima i
          uneti toplinu i eleganciju u svoj dom.
        </p>
        <p className="mt-3">
          Pored opcije slanja brzom poštom, takođe vam pružamo mogućnost ličnog
          preuzimanja. Na taj način možete direktno doći u naš grad i preuzeti
          komad koji će upotpuniti vaš prostor.
        </p>
      </div>
    </div>
  );
};

export default About;
