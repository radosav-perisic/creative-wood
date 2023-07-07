import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const state = useSelector((state) => state.addItems);
  const [formError, setFormError] = useState(false);
  const [disable, setDisable] = useState(true);

  const calculateTotalPrice = () => {
    let total = 0;
    state.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const inputs = form.querySelectorAll("input");

    let isValid = true;

    inputs.forEach((input) => {
      if (!input.disabled && !input.value) {
        isValid = false;
      }
    });

    if (isValid) {
      form.submit();
    } else {
      setFormError(true);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-500 md:p-4 flex justify-center items-top">
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://getform.io/f/03a3746f-1821-4ecf-8fd7-1c00d561d7fa"
        className="flex flex-col max-w-[650px] w-full mx-4 mt-16 lg:mt-40"
      >
        <p className="text-5xl mb-2 text-center font-bold inline border-b-8 rounded-full border-[#df0909] text-[#1d1d1c]">
          Checkout
        </p>
        <div className="justify-between inline-table">
          <h4 className="flex justify-between items-center lg:mb-3">
            <span className="text-xl">Vasa korpa</span>
          </h4>
          <ul className="flex flex-col lg:mb-3">
            {state.map((item) => (
              <li
                key={item.id}
                className="py-3 px-5 mb[-1px] bg-white flex justify-between leading-5"
              >
                <div>
                  <h6 className="my-0">
                    {item.title} {item.selectedColor}
                  </h6>
                </div>
                <span className="text-[#484d51]">
                  {item.price}{" "}
                  <span className="text-black font-semibold">rsd</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>{calculateTotalPrice()} rsd</span>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Ime"
            className="my-3 lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Prezime"
            className="my-3 lg:ml-[50px] ml-[28px] lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
            required
          />
        </div>
        <input
          type="text"
          name="adress"
          placeholder="Adresa"
          className="lg:my-3 p-2 rounded-sm outline-[#Here's the continuation of the modified code:

```jsx
838382] outline outline-[0.1px]"
          required
        />
        <input
          disabled={disable}
          type="text"
          name="apartment number"
          placeholder="Sprat & Broj Stana"
          className="my-3 p-2 rounded-sm outline-[#838382] outline outline-[0.1px]"
        />
        <label htmlFor="include-checkbox">
          Da li imate broj stana?
          <input
            onClick={() => setDisable(!disable)}
            type="checkbox"
            id="include-checkbox"
            name="include-checkbox"
            className="ml-2"
          />
        </label>
        <input
          type="text"
          name="city"
          placeholder="Grad"
          className="outline outline-[0.1px] rounded-sm outline-[#838382] lg:my-3 p-2"
          required
        />
        <input
          type="text"
          name="postal-code"
          placeholder="Postanski Kod"
          className="outline outline-[0.1px] rounded-sm outline-[#838382]  lg:my-3 p-2"
          required
        />
        <div className="justify-between inline-table">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-3 lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
            required
          />

          <input
            type="text"
            name="telephone"
            placeholder="Kontakt Telefon"
            className="my-3 lg:ml-[50px] ml-[28px] lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
            required
          />
        </div>
        {formError && (
          <div className="text-red-600 text-center">
            Sva polja moraju biti popunjena.
          </div>
        )}
        <button className="text-white z-prop bg-[#cd1b1b] ring-2 ring-gray-600 border-2 hover:bg-[#871212] hover:border-[#fafafa] duration-500 px-10 py-3 my-4 mx-auto flex items-center">
          Naruci
        </button>
      </form>
    </div>
  );
};

export default Checkout;
