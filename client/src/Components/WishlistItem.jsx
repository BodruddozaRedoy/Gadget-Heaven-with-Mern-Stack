import React, { useContext } from 'react';
import { ImCross } from "react-icons/im";
import { CartContext } from '../context/CartContext';


const WishlistItem = ({item}) => {
    const {
        _id,
        title,
        image,
        category,
        price,
        details,
        list,
        quantity,
        rating,
      } = item;
      const {handleRemoveFromWishlist} = useContext(CartContext)
    return (
        <div className='bg-white rounded-xl p-5 flex justify-between items-center'>
            <div className='flex gap-5'>
            <img src={image} className='w-[100px]' alt="" />
            <div className='space-y-3'>
                <h1 className='text-xl font-bold'>{title}</h1>
                <p className='text-gray-400'>{details}</p>
                <p className='font-bold'>Price: {price}$</p>
            </div>
            </div>
            <div className='mr-10'>
            <ImCross className='text-red-500 cursor-pointer' onClick={() =>handleRemoveFromWishlist(_id)}/>
            </div>
        </div>
    );
};

export default WishlistItem;