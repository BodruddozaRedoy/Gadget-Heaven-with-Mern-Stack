import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  const {
    _id,
    title,
    image,
    category,
    price,
    details,
    list,
    rating,
  } = item;
  return (
    <motion.div
      className="bg-white p-5 rounded-xl space-y-3 shadow-lg relative"
      initial={{scale: 0.9, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      whileHover={{scale:1.05}}
      whileTap={{scale: 0.95}}
      transition={{type: 'spring', stiffness: 300}}
    >
      <p className="py-1 px-2 text-white bg-purple-400 rounded-3xl absolute text-xs font-bold right-5">
        {category}
      </p>
      <img className="w-full h-[350px] inner-element" src={image} alt="" />
      <h1 className="font-bold text-xl inner-element">{title}</h1>
      <p className="text-slate-500 font-bold inner-element">Price: {price}$</p>
      <Link to={`/item/${_id}`}>
        <motion.button 
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-5 rounded-full shadow-md hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-purple-500 mt-5 inner-element"
        initial={{scale: 0.9, opacity:0}}
        animate={{scale: 1, opacity: 1}}
        whileHover={{scale:1.05}}
        whileTap={{scale: 0.95}}
        transition={{type: 'spring', stiffness: 300}}
        >
          View Details
        </motion.button>
      </Link>

    </motion.div>
  );
};

export default Card;
