import React, { useState, createContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
  import {auth} from '../../firebase.init'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] =useState([])
    const [total, setTotal] = useState(0)
    const [disable, setDisable] = useState(false)
    const [purDisable, setPurDisable] = useState(true)
    const [user, setUser] = useState()
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState(null)
    const [loading, setLoading] = useState(true)

    // console.log(user);



    const handleAddToCart = item => {
        const sameProduct = cart.find(prev => prev._id === item._id)
        if(item.quantity === false){
          toast.error("Out of Stock", {
            position: "top-center",
            autoClose: 3000
          });
        return
        }
        if(sameProduct){
            toast.error("Product already added", {
                position: "top-center",
                autoClose: 3000
              });
            return
        }
        toast.success("Product added to cart", {
            position: "top-center",
            autoClose: 3000
          });
        setCart([...cart,item]);
        setTotal(total + Math.round(item.price))
        // console.log(total);
    }

    const handleAddToWishlist = item => {
        toast.success("Product added to wishlist", {
            position: "top-center",
            autoClose: 3000
          });
        setWishlist([...wishlist, item])
        setDisable(true)
    }

    const handleRemoveFromCart = item => {
        const remove = cart.filter(prev => prev._id !== item._id)
        setCart(remove)
        toast.success("Product removed", {
            position: "top-center",
            autoClose: 3000
          });
        setTotal(total - item.price)
    }
    const handleRemoveFromWishlist = item => {
        const remove = wishlist.filter(prev => prev._id !== item)
        setWishlist(remove)
        toast.success("Product removed", {
            position: "top-center",
            autoClose: 3000
          });
    }

    const handleSort= () => {
      const filteredItems = [...cart].sort((a, b)=> b.price - a.price)
      setCart(filteredItems)
    }

    // user related functions 
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updateUser) => {
      return updateProfile(auth.currentUser, updateUser)
  }

    const loginWithGmail = () => {
      return signInWithPopup(auth, provider)
    }

    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setLoading(false)
         console.log("state changed");
 
      })
      return () => {
         unsubscribe()
      }
     }, [])

     const logOut = () => {
      return signOut(auth)
  }
  const updatePass = () => {
    return sendPasswordResetEmail(auth, email)
}

    

    
    const value = {
        createUser,
        loading,
        setLoading,
        setEmail,
        updatePass,
        logOut,
        updateUser,
        user,
        setUser,
        loginWithGmail,
        loginUser,
        cart, 
        setCart,
        handleAddToCart,
        handleAddToWishlist,
        wishlist,
        handleRemoveFromCart,
        handleRemoveFromWishlist,
        ToastContainer,
        handleSort,
        total,
        setTotal,
        disable,
        setDisable,
        purDisable,
        setPurDisable
        
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};


export default CartContextProvider