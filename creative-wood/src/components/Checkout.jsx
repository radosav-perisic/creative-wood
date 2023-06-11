import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItems)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="py-3 px-5 mb[-1px] bg-white flex justify-between leading-5">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-[#484d51]">{item.price} <span className='text-black font-semibold'>rsd</span></span>
            </li>
        );
    }

    return (
        <>
            <div className="w-full md:h-screen h-full bg-gray-500 md:p-4 flex justify-center items-top">
      <form
        method="POST"
        action="https://getform.io/f/03a3746f-1821-4ecf-8fd7-1c00d561d7fa"
        className="flex flex-col max-w-[650px] w-full mx-4 mt-16 lg:mt-40"
      >
        <p className="text-5xl mb-2 text-center font-bold inline  border-b-8 rounded-full border-[#df0909] text-[#1d1d1c]">
          Checkout
        </p>
        <div className="justify-between inline-table">
          <h4 className="flex justify-between items-center lg:mb-3">
                            <span className="text-xl">Vasa korpa</span>
                        </h4>
                        <ul className="flex flex-col lg:mb-3">
                        
                        {state.map(item => (
      <li key={item.id} className="list-group-item flex lg:mt-1 justify-content-between">
        <span className='font-bold text-ellipsis'>{item.title}</span>
        <span className='font-bold text-ellipsis'>Price: {item.price}</span>
        {/* Hidden input fields to store item data */}
        <input type="hidden" name={`items[${item.title}].title`} value={item.title} />
        <input type="hidden" name={`items[${item.title}].price`} value={item.price} />
      </li>
    ))}
                        </ul>
                        
          <input
            type="firstname"
            name="name"
            placeholder="Ime"
            className="my-3 lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
          />
          <input
            type="lastname"
            name="Lastname"
            placeholder="Prezime"
            className="my-3 lg:ml-[50px] ml-[28px] lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
          />
        </div>
        <input
          type="adress"
          name="Adress"
          placeholder="Adresa"
          className=" lg:my-3 p-2 rounded-sm outline-[#838382] outline outline-[0.1px]"
        />
        <input
          type="apartment number "
          name="apartment number"
          placeholder="Sprat & Broj Stana"
          className="my-3 p-2 rounded-sm outline-[#838382] outline outline-[0.1px]"
        />
        <input
          type="postal code"
          name="postal code"
          placeholder="Postanski Kod"
          className="outline outline-[0.1px] rounded-sm outline-[#838382]  lg:my-3 p-2"
        />
        <div className="justify-between inline-table">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-3 lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
          />
          <input
            type="telephone"
            name="telephone"
            placeholder="Kontakt Telefon"
            className="my-3 lg:ml-[50px] ml-[28px] lg:w-[300px] w-[150px] rounded-sm outline-[#838382] outline outline-[0.1px] p-2"
          />
        </div>
        <button className='text-white z-prop bg-[#cd1b1b] ring-2 ring-gray-600 border-2 hover:bg-[#871212] hover:border-[#fafafa] duration-500 px-10 py-3 my-4 mx-auto flex items-center'>Naruci</button>
      </form>
    </div>
        </>
    )
}

export default Checkout