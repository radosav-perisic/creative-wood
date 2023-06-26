import React from "react";
import products from '../products/HomeProducts.json'

const Products = () => {

  const openFullscreen = (id) => {
    const element = document.getElementById(id);
    if (element && element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  const ShowProducts = () => {
    return (
      <>
        
        {products.map((product) => {
          const imageId = `image-${product.id}`
          return (
            <div
              key={product.id}
              className="justify-center group outline outline-white/10 items-center container shadow-2xl p-1 shadow-black bg-white/5 backdrop-blur-[3px] rounded-2xl h-[260px] md:h-full md:w-[200px] lg:w-[270px] w-32 text-center"
            >
              <div
                id={imageId}
                style={{
                  "--image-url": `url(${product.image})`,
                  "--image-hover-url": `url(${product.imageHover})`,
                }}
                className="md:h-[190px] h-[160px] bg-contain bg-center bg-no-repeat hover:scale-[1.15] bg-[image:var(--image-hover-url)] md:bg-[image:var(--image-url)] group-hover:bg-[image:var(--image-hover-url)] delay-[30ms] group duration-300 object-contain mx-auto rounded-md"
                alt={product.title}
                onClick={() => openFullscreen(imageId)}
              ><link rel="preload" as="image" href={product.imageHover} /></div>
              <h5 className="md:text-[1.6rem] text-md md:text-md text-gray-100 font-medium md:mb-1 ">
                {product.title}
              </h5>
              <p className=" text-[#c53838] md:text-md mt-1 text-sm font-bold">
                RSD {product.price}
              </p>
              <button
                href="#"
                className="flex flex-row md:mt-5 mt-2 mx-auto  bg-[#261111] px-1 md:px-3 md:py-3 py-1 hover:bg-[#600d0d] duration-300 text-sm md:text-md text-white rounded-md"
                onClick={() => addProduct(product)}
              >
                Dodaj u korpu
              </button>
            </div>
          );
        })}
      </>
    );
  };

  return (

      <div className="flex flex-row mt-10 md:gap-x-[3.75rem] lg:gap-x-[5.5rem]">
  
        <ShowProducts />
      </div>
  );
};

export default Products;
