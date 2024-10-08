import React from "react";
import products from '../products/HomeProducts.json'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const Products = () => {

  const dispatch = useDispatch();
  const addProduct = (product) => {
   dispatch(addToCart(product))
  };

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
          const imageId = `image-${product.id}`;
          return (
            <div
              key={product.id}
              className="mx-auto my-auto justify-center group outline outline-white/20 items-center container p-1 rounded-sm h-[260px] lg:h-full lg:w-[270px] w-40 text-center"
            >
              <div
                id={imageId}
                style={{
                  "--image-url": `url(${product.image})`,
                  "--image-hover-url": `url(${product.imageHover})`,
                }}
                className="lg:h-[190px] h-[160px] bg-contain bg-center bg-no-repeat hover:scale-[1.15] bg-[image:var(--image-hover-url)] lg:bg-[image:var(--image-url)] group-hover:bg-[image:var(--image-hover-url)] delay-[30ms] group duration-300 object-contain mx-auto rounded-md"
                alt={product.title}
                onClick={() => openFullscreen(imageId)}
              >
                <link rel="prefetch" as="image" href={product.imageHover} /></div>

              <h5 className="lg:text-[1.32rem]  text-sm text-gray-100 font-medium mb-1">
                {product.title}
              </h5>
              <p className=" text-[#c53838] lg:text-lg text-sm font-bold">
                RSD {product.price}
              </p>
              <button
                href="#"
                className="flex flex-row lg:mt-5 mt-2 mx-auto mb-6 bg-[#920f0f] px-2 lg:px-3 lg:py-3 py-2 hover:bg-[#600d0d] duration-300 text-sm lg:text-lg text-white rounded-md"
                onClick={() => addProduct(product)}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </>
    );
  };

  return (

      <div className="flex flex-row mt-10 md:gap-x-[6.4rem] lg:gap-x-[5.5rem]">
  
        <ShowProducts />
      </div>
  );
};

export default Products;
