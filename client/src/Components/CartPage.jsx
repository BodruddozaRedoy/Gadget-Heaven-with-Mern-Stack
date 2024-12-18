import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { FaSort } from 'react-icons/fa';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from 'react-router-dom/dist';


const CartPage = () => {
    const {cart, handleSort, total, setTotal, setCart, purDisable, setPurDisable} = useContext(CartContext)
    useEffect(() => {
      if(cart.length !== 0){
        setPurDisable(false)
      }
    }, [])
    const handlePurchase =()=>{
      // if(total === 0){
      //   toast.error("Please purchase first", {
      //     position: "top-center",
      //     autoClose: 3000
      //   });
      //   return
      // }
      document.getElementById('my_modal_5').showModal()
      setCart([])
    }

    return (
      <div className="flex flex-col mb-10">
        <div className="md:mx-60 md:my-10">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="flex items-center gap-4">
              <h1 className="font-bold text-2xl">Total cost: {total}$</h1>
              <button
                onClick={handleSort}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-0.5 px-0.5 rounded-full shadow-md hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <div className="bg-white text-purple-400 rounded-3xl py-3 px-5 flex items-center gap-3">
                  Sort by Price <FaSort />
                </div>
              </button>
              <button disabled={purDisable}
                onClick={handlePurchase}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-full shadow-md hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="mx-60 space-y-5">
          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="flex items-center justify-center">
              <RiVerifiedBadgeFill size={100} className="text-green-500"/>
            </h3>
            <p className="py-4 text-center text-3xl font-bold">Payment Successful</p>
            <p className='text-center text-gray-400'>Thanks for purchasing.</p>
            <p className='text-center text-gray-400'>Total: {total}$</p>
            <div className="modal-action w-full">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to='/'><button onClick={() =>setTotal(0)} className="btn w-[465px] mx-auto text-center rounded-3xl">Close</button></Link>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    );
};

export default CartPage;