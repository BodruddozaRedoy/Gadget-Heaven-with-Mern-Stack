import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import WishlistItem from "./WishlistItem";

const WishlistPage = () => {
    const {wishlist} = useContext(CartContext)
  return (
    <div className="mx-60 my-10 mb-10">
      <h1 className="text-2xl font-bold">WishList</h1>
      <div className="mt-10 space-y-5">
        {wishlist.map((item) => (
          <WishlistItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
