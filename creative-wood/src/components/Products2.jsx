import React from 'react'
import products from '../products/HomeProducts2.json'


const Products2 = () => {
    const ShowProducts2 = () => {
        return (
          <>
            
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="mx-auto justify-center group items-center container lg:pb-6 shadow-2xl p-1 shadow-black bg-white/5 backdrop-blur-[3px] rounded-2xl lg:my-3 h-[188px] lg:h-full lg:w-[270px] w-[118px] text-center"
                >
                  <div
                    style={{
                      "--image-url": `url(${product.image})`,
                      "--image-hover-url": `url(${product.imageHover})`,
                                     
                    }}
                    className="lg:h-[200px] h-[80px] bg-contain bg-center bg-no-repeat hover:scale-[1.2] bg-[image:var(--image-hover-url)] lg:bg-[image:var(--image-url)] group-hover:bg-[image:var(--image-hover-url)] delay-[30ms] group duration-300 object-contain mx-auto rounded-md"
                    alt={product.title}
                  ></div>
    
                  <h5 className="lg:text-[1.6rem] text-md lg:text-lg text-gray-100 font-medium lg:mb-1 ">
                    {product.title}
                  </h5>
                  <p className=" text-[#c53838] lg:text-md mt-1 text-sm font-bold">
                    RSD {product.price}
                  </p>
                  <button
                    href="#"
                    className="flex flex-row lg:mt-5 mt-2 mx-auto  bg-[#261111] px-1 lg:px-3 lg:py-3 py-1 hover:bg-[#600d0d] duration-300 text-sm lg:text-lg text-white rounded-md"
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
    
          <div className="justify-center flex flex-row lg:gap-[158px]">
            <ShowProducts2 />
          </div>
      );
}

export default Products2