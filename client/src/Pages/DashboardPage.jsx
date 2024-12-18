import React, { useContext, useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import CartItem from "../Components/CartItem";
import CartPage from "../Components/CartPage";
import WishlistPage from "../Components/WishlistPage";
import { useLocation } from "react-router-dom";
import {Helmet} from "react-helmet";


const DashboardPage = () => {
    const {cart} = useContext(CartContext)
    const [tab, setTab] = useState('cart')
    const currentPath = useLocation()
    const title = "Dashboard | Gadget Heaven"
    // useEffect(() => {
    //     document.title = title
    // },[title])
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <div className="bg-purple-400 py-10 px-[300x] space-y-5 flex flex-col items-center w-full">
        <h1 className=" text-white font-bold text-center text-4xl">
          Dashboard
        </h1>
        <p className="text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. Form smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setTab("cart")}
            className={`py-3 px-10 font-bold rounded-3xl border text-white ${
              tab === "cart" && "bg-white !text-purple-400"
            } `}
          >
            Cart
          </button>
          <button
            onClick={() => setTab("wishlist")}
            className={`py-3 px-10 font-bold rounded-3xl border bg-transparent text-white ${
              tab === "wishlist" && "bg-white !text-purple-400"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      {tab === "cart" ? <CartPage /> : <WishlistPage />}
    </div>
  );
};

export default DashboardPage;
