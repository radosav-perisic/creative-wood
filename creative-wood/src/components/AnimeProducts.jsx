import React from "react";
import products from '../animeLamps.json'

const AnimeProducts = () => {



  const ShowAnimeProducts = () => {
    return (
      <>
        
        {products.map((product) => {
          return (
            
             
                <div key={product.id} className="mx-auto justify-center items-center shadow-2xl container p-2 shadow-black bg-cyan-100/10 group rounded-md my-3 lg:h-full h-[170px] lg:w-[270px] w-36 text-center">
                  <img
                    src={product.image}
                    className="lg:h-[210px] h-[110px] lg:group-hover:opacity-0 focus:opacity-0 delay-[70ms] duration-300 object-contain mx-auto rounded-md"
                    alt={product.title}

                  />
                   <img
                    src={product.imageHover}
                    className="lg:h-[210px] h-[110px] lg:hover:scale-[1.20] focus::scale-[1.20] duration-[350ms] opacity-0 absolute group-hover:opacity-100 w-full object-contain mx-auto rounded-md"
                    alt={product.title}

                  />
                  <div className="rounded-lg">
                    <h5 className="text-[1.6rem] text-gray-100 font-medium mb-1">
                      {product.title}
                    </h5>
                    <p className=" text-[#c53838] text-md font-bold">RSD {product.price}</p>
                    <button
                      href="#"
                      className=" flex flex-row mt-2 mx-auto  bg-[#261111] px-1 lg:px-3 py-1 hover:bg-[#600d0d] duration-300 text-sm lg:text-lg text-white rounded-md mb-1 "
                    >
                      Dodaj u korpu
                    </button>
                  </div>
                </div>              
            
          );
        })}
      </>
    );
  };

  return (  
        <ShowAnimeProducts />
  );
};

export default AnimeProducts;
