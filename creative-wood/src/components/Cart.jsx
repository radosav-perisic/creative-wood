import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/actions";
import { NavLink } from "react-router-dom";
import cartBg from "../assets/plain.png";

function Cart() {
  const state = useSelector((state) => state.addItems);
  console.log("state value in cart ", state);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const delProduct = (product) => {
    dispatch(deleteFromCart(product));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    state.forEach((product) => {
      total += product.qty * product.price;
    });
    return total;
  };

  const ShowProducts = () => {
    return (
      <>
        {state.map((product) => {
          return (
            <div
              className="flex items-center justify-between border-b-2 border-gray-800"
              key={product.id}
            >
              <div className="flex items-center">
                <div
                  className="w-24 h-16 bg-contain bg-center bg-no-repeat rounded-md"
                  style={{ backgroundImage: `url(${product.imageHover})` }}
                ></div>
                <div className="lg:ml-4 ml-1 flex items-center justify-between lg:flex-row flex-col">
                  <h3 className="lg:text-black text-indigo-100 lg:w-60 text-lg font-bold md:px-10">
                    {product.title}
                  </h3>
                  <p className="text-sm flex text-black md:px-10">
                    <span className="text-green-500 font-bold">
                      <span className="text-black">Kom</span> {product.price}
                    </span>
                    <span>rsd</span>
                  </p>
                  <p className="text-sm text-black font-medium lg:pl-32">
                    Total <span className="text-black font-bold">{product.qty} </span>= <span className="text-green-500">
                      {product.qty * product.price}
                    </span>
                    rsd
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 items-center">
                <button
                  className="px-2.5 bg-[#7f4343] rounded-md"
                  onClick={() => addProduct(product)}
                >
                  <i className="text-2xl text-gray-200 font-serif font-black">+</i>
                </button>
                <button
                  className="px-2.5 bg-[#7f4343] rounded-md"
                  onClick={() => delProduct(product)}
                >
                  <i className="text-2xl text-gray-200 lg:font-mono font-sans font-black">-</i>
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  
  const emptyCart = () => {
    return (
      <div className="md:px-4 px-1 my-5 bg-white/60 rounded-lg py-1 md:py-5">
        <div className="container py-1 md:py-4">
          <div className="flex flex-row justify-center">
            <h3 className="text-black text-2xl md:text-5xl">Vasa korpa je prazna.</h3>
          </div>
        </div>
      </div>
    );
  };
  
  const button = () => {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="font-semibold text-xl rounded-md mb-2">
          Ukupno : <span className="text-white font-bold italic">
            {calculateTotalPrice().toFixed(2)}
          </span> rsd
        </p>
        <div className="flex items-center">
          <NavLink
            to="/checkout"
            className="px-5 py-2 ring-4 ring-white font-semibold text-lg duration-300 bg-red-600 hover:bg-red-700 text-white mb-5 w-25 mx-auto"
          >
            Zavrsi Kupovinu
          </NavLink>
        </div>
      </div>
    );
  };
  
  return (
    <div
      style={{
        backgroundImage: `url(${cartBg})`,
      }}
      className="bg-cover bg-no-repeat h-full lg:h-screen w-screen lg:w-full flex flex-col items-center justify-center"
    >
              <h1 className="text-red-700 text-3xl md:text-7xl mb-6">Vasa Korpa</h1>
      <div className="lg:w-3/5 w-[95%] bg-white/60  p-5 lg:max-h-[1500px] rounded-lg">

        <div className="grid grid-cols-1 gap-6 ">
          {state.length === 0 ? emptyCart() : <ShowProducts />}
        </div>
      </div>    
      {state.length !== 0 && button()}
    </div>
  );
    }

  export default Cart;