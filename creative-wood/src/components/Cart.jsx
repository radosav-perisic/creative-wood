import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/actions";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
  const state = useSelector((state) => state.addItems);
  const [newState, setNewState] = useState(state || []);
  console.log("state value in cart ", state);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    setNewState(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(newState));
  }, [newState]);

  const addProduct = (product) => {
    dispatch(addToCart(product, product.selectedColor));
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
              className="flex md:items-center justify-between border-b-2 border-gray-800"
              key={product.id}
            >
              <div className="flex items-center">
                <div
                  className="w-24 h-16 bg-contain bg-center bg-no-repeat rounded-md"
                  style={{ backgroundImage: `url(${product.imageHover})` }}
                ></div>
                <div className="lg:ml-4 ml-1 flex items-start md:items-center justify-between lg:flex-row flex-col">
                  <div className="flex flex-col"><h3 className="lg:w-60  text-lg font-bold md:px-10">
                    {product.title}
                  </h3>
                  <p className="lg:w-20  text-lg md:px-10">
                    {product.selectedColor}
                  </p>
                  </div>
                  <p className="flex  md:px-10">
                    <span className="text-green-600 font-semibold">
                      <span className="text-black text-[15px]">Kom</span> {product.price}
                    </span>
                    <span>rsd </span>
                  </p>
                  <p className="font-medium lg:pl-32">
                    Total <span className=" font-bold">{product.qty} </span>= <span className="text-green-600 font-semibold">
                      {product.qty * product.price}
                    </span>
                    rsd
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 items-center">
                <button
                  className="px-2.5 rounded-sm"
                  onClick={() => addProduct(product)}
                >
                  <p className="text-2xl text-black outline-1  hover:bg-black hover:text-white duration-200 outline px-2 rounded-sm font-serif font-black">+</p>
                </button>
                <button
                  className="px-2.5 rounded-sm"
                  onClick={() => delProduct(product)}
                >
                  <p className="text-2xl text-black outline-1 hover:bg-black hover:text-white duration-200 outline px-2 rounded-sm font-serif font-black">-</p>
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
      <div className="md:px-4 px-1 my-5 bg-white rounded-lg py-1 md:py-5">
        <div className="container py-1 md:py-4">
          <div className="flex flex-row justify-center">
            <h3 className=" text-2xl md:text-5xl">Vaša korpa je prazna.</h3>
          </div>
        </div>
        
      </div>
    );
  };
  
  const button = () => {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="font-semibold text-xl text-white  rounded-md mb-2">
          Ukupno : <span className="text-green-500 font-bold italic">
            {calculateTotalPrice().toFixed(2)}
          </span> rsd
        </p>
        <div className="flex items-center">
          <NavLink
            to="/checkout"
            className="px-5 py-2 ring-4 ring-white font-semibold text-lg duration-300 bg-red-600 hover:bg-red-700 text-white mb-5 w-25 mx-auto"
          >
            Završi Kupovinu
          </NavLink>
        </div>
      </div>
    );
  };
  
  return (
    <div
      
      className="h-full min-h-screen w-full bg-blue-950 flex flex-col items-center justify-center"
    >
              <h1 className="text-red-700 text-3xl md:text-7xl mb-6 mt-20">Vaša Korpa</h1>
      <div className="lg:w-3/5 w-[95%] bg-white p-5 rounded-lg">

        <div className="grid grid-cols-1 gap-6 ">
          {state.length === 0 ? emptyCart() : <ShowProducts />}
        </div>
      </div>    
      {state.length !== 0 && button()}
    </div>
  );
    }

  export default Cart;