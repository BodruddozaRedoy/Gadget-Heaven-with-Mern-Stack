import React, { useContext, useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const {handleAddToCart, handleAddToWishlist, ToastContainer, disable} = useContext(CartContext)

    const filteredData = [...data].find(item => item._id == id)
    // console.log(data)
    // console.log(id);

    
    
    return (
      <div className="flex flex-col items-center mb-[400px]">
        <div className="bg-purple-400 full-width pt-10 px-80 pb-[300px] space-y-5 relative">
          <h1 className="text-white text-center text-2xl font-bold">
            Product Details
          </h1>
          <p className="text-white text-center">
            Explore the latest gadgets that will take your experience to the
            next level. Form smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
        <div className="bg-white grid grid-cols-5 p-10 rounded-3xl gap-5 w-[70%] absolute top-40">
          <div className="col-span-2 rounded-xl flex items-center justify-center">
            <img src={filteredData.image} className="w-full" alt="" />
          </div>
          <div className="col-span-3 space-y-5">
            <h1 className="font-bold text-3xl">{filteredData.title}</h1>
            <p className="font-bold ">Price: {filteredData.price}$</p>
            <button
              className={`border ${
                filteredData.quantity > 0
                  ? "border-green-400 bg-green-50 text-green-500"
                  : "border-red-400 bg-red-50 text-red-500"
              }  py-1 px-3 text-xs   rounded-3xl`}
            >
              {filteredData.quantity ? "In Stock" : "Out of Stock"}
            </button>
            <p className="text-gray-400">{filteredData.details}</p>
            <p className='font-bold'>Tags: <p className='text-gray-400'>{filteredData.tags.join(" ")}</p></p>
            <p className="font-bold">list:</p>
            <ul>
              {filteredData.list.map((i, index) => (
                <li key={index} className="list-disc ml-10 text-gray-400">{i}</li>
              ))}
            </ul>
            <div>
              <p className="font-bold">Ratings</p>
              <div className="flex items-center gap-5">
                <ReactStars
                  count={5}
                  // onChange={}
                  value={filteredData.rating}
                  size={24}
                  activeColor="#ffd700"
                />
                <div className="py-2 px-3 bg-slate-100 rounded-xl font-bold">
                  {filteredData.rating}
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <button onClick={() => handleAddToCart(filteredData)} className="bg-purple-400 py-3 px-5 rounded-3xl text-white font-bold flex items-center gap-3 cursor-pointer scale-100 transition-all hover:scale-110">
                Add To Card <FaShoppingCart />
              </button>
              <button onClick={() => {handleAddToWishlist(filteredData)}} disabled={disable} className="p-3 bg-white border rounded-full cursor-pointer scale-100 transition-all hover:scale-110">
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;