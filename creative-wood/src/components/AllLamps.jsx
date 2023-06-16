import React from 'react'
import { useDispatch } from 'react-redux';
import products from "../products/allLedLamps.json";

const AllLamps = () => {
    const dispatch = useDispatch();
 const addProduct = (product) => {
  dispatch(addToCart(product))
 }
 const openFullscreen = (id) => {
  const element = document.getElementById(id);
  if (element && element.requestFullscreen) {
    element.requestFullscreen();
  }
};

  const ShowAllLamps = () => {
    return (
      <>
        {products.map((product) => {
          const imageId = `image-${product.id}`; // Generate unique id for each product image
          return (
            <div
              key={product.id}
              className="mx-auto my-auto justify-center group outline outline-white/10 items-center container shadow-2xl p-1 shadow-black bg-white/5 backdrop-blur-[3px] rounded-2xl h-[260px] lg:h-full lg:w-[270px] w-40 text-center"
            >
              <div
                id={imageId}
                style={{
                  "--image-url": `url(${product.image})`,
                  "--image-hover-url": `url(${product.imageHover})`,
                }}
                className="lg:h-[190px] h-[160px] bg-contain bg-center bg-no-repeat hover:scale-[1.15] bg-[image:var(--image-hover-url)] lg:bg-[image:var(--image-url)] group-hover:bg-[image:var(--image-hover-url)] delay-[30ms] group duration-300 object-contain mx-auto rounded-md"
                alt={product.title}
                onClick={() => openFullscreen(imageId)} // Pass imageId as parameter
              ><link rel="preload" as="image" href={product.imageHover} /></div>

              <h5 className="lg:text-[1.6rem] text-lg text-gray-100 font-medium mb-1">
                {product.title}
              </h5>
              <p className=" text-[#c53838] lg:text-md text-sm font-bold">
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
}

return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-8 lg:gap-16 py-8 mx-auto mt-56 lg:mt-96">
      <ShowAllLamps />
    </div>
  );
}

export default AllLamps;