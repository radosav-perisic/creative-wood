import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import products from "../products/clocks.json";

const ClocksComponent = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [errorProductId, setErrorProductId] = useState(null);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    const selectedColor = selectedColors[product.id];
    if (!selectedColor) {
      setErrorProductId(product.id);
      alert("Izaberite Boju!")
      return;
    }
    dispatch(addToCart({ ...product, selectedColor }));
    setErrorProductId(null);
  };

  const handleColorChange = (productId, color) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [productId]: color,
    }));
  };

  const ClockProducts = () => {
    return (
      <>
        {products.map((product) => {
          const imageId = `image-${product.id}`;
          const showError = errorProductId === product.id;

          return (
            <div
              key={product.id}
              className="mx-auto my-auto rounded-sm bg-white/20 lg:bg-white/5 outline outline-2 outline-white/50 lg:outline-white/20 justify-center group items-center container p-1 shadow-2xl shadow-black/80 h-[260px] lg:h-full lg:w-[270px] w-40 text-center"
            >
              <div
                id={imageId}
                style={{
                  "--image-url": `url(${product.image})`,
                  "--image-hover-url": `url(${product.imageHover})`,
                }}
                className="lg:h-[190px] h-[130px] bg-contain bg-center bg-no-repeat hover:scale-[1.15] bg-[image:var(--image-hover-url)] lg:bg-[image:var(--image-url)] group-hover:bg-[image:var(--image-hover-url)] delay-[30ms] group duration-300 object-contain mx-auto rounded-md"
                alt={product.title}
              >
                <link rel="prefetch" as="image" href={product.imageHover} />
              </div>

              <h5 className="lg:text-[1.5rem] text-sm text-white/90 font-semibold lg:mb-3 mb-1">
                {product.title}
              </h5>
             <select
  className={`rounded-lg px-3 outline-black outline-1 outline bg-white font-semibold ${
    showError ? "text-red-600 error-message" : ""
  }`}
  value={selectedColors[product.id]}
  onChange={(e) => handleColorChange(product.id, e.target.value)}
>
  <option value="" disabled selected>
    {showError ? "Izaberite Boju" : "Izaberite Boju"}
  </option>
                <option value="Crna" className="text-white bg-black">
                  Crna
                </option>
                <option value="Bela" className="text-black bg-white">
                  Bela
                </option>
                <option value="Braon" className="text-black bg-[#78350f]/90">
                  Braon
                </option>
              </select>
              <p className="text-[#b03030] lg:text-lg text-sm font-extrabold underline-offset-4 decoration-red-600">
                RSD {product.price},<span className="text-xs">00</span>
              </p>
              <button
                href="#"
                className="flex flex-row lg:mt-5 mt-2 mx-auto mb-6 bg-[#920f0f] px-2 lg:px-3 lg:py-3 py-2 hover:bg-[#600d0d] duration-300 text-sm lg:text-lg text-white rounded-md"
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
    <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-8 lg:gap-16 mx-auto my-auto">
      <ClockProducts />
    </div>
  );
};

export default ClocksComponent;
