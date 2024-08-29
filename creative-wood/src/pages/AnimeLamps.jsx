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
    >
      <link rel="prefetch" as="image" href={blackwall} />
      <link rel="prefetch" as="image" href={animeSection} />
      <div className="w-full mx-auto lg:pt-24 pt-10 max-w-[1500px] h-full pb-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        
        <div className="w-2/4 h-full pr-28 bg-transparent ml-2 hidden mx-auto lg:flex items-end justify-center flex-row">
          <h2 style={{ lineHeight: "1.1" }} className="text-white/80 text-[20px] font-light justify-end">
            <h3 className="text-start mb-10 text-white/90 uppercase tracking-wide text-[45px] font-semibold">ANIME <span className="neon">LED LAMPS</span></h3>
            <p className="my-4">Anime LED lamps are unique pieces of decorative lighting made from high-quality HDF. Our lamps come with <span className="font-bold neon-2">built-in RGB-LED lights</span>, allowing users to <span className="font-bold neon-2">change the light color at will</span> using the included remote control. The light source enables different lighting and effects, providing a dynamic experience.</p>
            <p className="my-4">The dimensions of these lamps <span className="font-bold neon-2">vary from 40x20cm to 40x30cm</span>, making them ideal for placing on a wall, shelf, or desk. The anime motifs on the lamps often depict favorite characters from anime series, movies, or video games. These motifs are carefully selected and meticulously painted, offering an authentic and aesthetically pleasing look.</p>
            <p className="my-4">These lamps are multipurpose and can be used as ambient lighting, room decoration, or as a gift for anime culture enthusiasts. With their vibrant colors and adjustable lighting, anime LED lamps are a surefire way to bring a touch of magic and fun to your space.</p>
          </h2>
        </div>
        
        <div className="md:w-8/12 w-full mt-10 my-10 flex justify-center">
          <img src={animeSection} className="md:h-full object-cover w-full" />
        </div>
        
        <div className="md:w-[60%] sm:w-[90%] ml-2 lg:hidden flex text-center place-items-center items-center flex-row justify-center">
          <h2 style={{ lineHeight: "1.1" }} className="text-white/80 text-[14px] font-light justify-end">
            <h3 className="text-center mb-10 text-white/90 uppercase tracking-wide text-[32px] font-semibold">ANIME <span className="neon">LED LAMPS</span></h3>
            <p className="my-4">Anime LED lamps are unique pieces of decorative lighting made from high-quality HDF. Our lamps come with <span className="font-bold neon-2">built-in RGB-LED lights</span>, allowing users to <span className="font-bold neon-2">change the light color at will</span> using the included remote control. The light source enables different lighting and effects, providing a dynamic experience.</p>
            <p className="my-4">The dimensions of these lamps <span className="font-bold neon-2">vary from 40x20cm to 40x30cm</span>, making them ideal for placing on a wall, shelf, or desk. The anime motifs on the lamps often depict favorite characters from anime series, movies, or video games. These motifs are carefully selected and meticulously painted, offering an authentic and aesthetically pleasing look.</p>
            <p className="my-4">These lamps are multipurpose and can be used as ambient lighting, room decoration, or as a gift for anime culture enthusiasts. With their vibrant colors and adjustable lighting, anime LED lamps are a surefire way to bring a touch of magic and fun to your space.</p>
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
