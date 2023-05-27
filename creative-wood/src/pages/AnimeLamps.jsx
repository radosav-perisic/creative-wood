import React from 'react'
import AnimeProducts from '../components/AnimeProducts';
import AnimeWall from "../assets/AnimeWall.png";
import { useMediaQuery } from '@react-hook/media-query';

const AnimeLamps = () => {
 
  const backgrounds = useMediaQuery('(min-width: 768px)') ? AnimeWall : AnimeWall;

  return (
    <div  style={{
      backgroundImage: `url(${backgrounds})`,
      }} className="lg:bg-cover bg-top bg-contain bg-no-repeat lg:h-full w-full">
    <div className="w-full h-full justify-center flex flex-col p-4 mx-auto max-w-[1500px]">
      <h2 className="text-6xl mt-16 font-bold text-white tracking-wide">Geopasinci</h2>     
         <AnimeProducts />
      </div>
    </div>

  )
}

export default AnimeLamps