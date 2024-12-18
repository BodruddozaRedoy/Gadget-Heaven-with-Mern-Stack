import React, { useContext, useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom/dist';
import { motion } from "framer-motion";




const Navbar = () => {
    const {cart, wishlist, user, setUser, logOut} = useContext(CartContext)
    const [dbUser, setDbUser] = useState([])
    const handleLogOut = () => {
        logOut()
        .then((result) => {
            alert("Log out")
        })
    }
    useEffect(() => {
    fetch("https://gadget-heaven-server-henna.vercel.app/users")
    .then(res => res.json())
    .then(data => {
        setDbUser(data);
    })
    }, [])
    // console.log(user.email);
    const findUser = dbUser.find(prev => prev.email === user?.email)
    console.log(findUser?.admin);

    return (

        <div className=' bg-transparent py-5 md:absolute top-[60px] w-full md:px-20 z-10'>
            <div className='flex justify-between items-center'>
            <Link><div className='text-xl font-bold text-black md:text-white'>Gadget Heaven</div></Link>
            <ul className='hidden md:flex gap-10 items-center navbar-main'>
                <NavLink to={'/'} className={`font-bold text-white`}><motion.p initial={{scale:0.9,opacity:0}} animate={{scale: 1, opacity:1}} whileHover={{scale: 1.2}} whileTap={{scale: 0.95}} transition={{type: 'spring', stiffness: 300}}>Home</motion.p></NavLink>
                <NavLink to={'/statistics'} className={`font-bold text-white`}><motion.p initial={{scale:0.9,opacity:0}} animate={{scale: 1, opacity:1}} whileHover={{scale: 1.2}} whileTap={{scale: 0.95}} transition={{type: 'spring', stiffness: 300}}>Statistics</motion.p></NavLink>
                <NavLink to={'/dashboard'} className={`font-bold text-white`}><motion.p initial={{scale:0.9,opacity:0}} animate={{scale: 1, opacity:1}} whileHover={{scale: 1.2}} whileTap={{scale: 0.95}} transition={{type: 'spring', stiffness: 300}}>Dashboard</motion.p></NavLink>
                <NavLink to={'/about'} className={`font-bold text-white`}><motion.p initial={{scale:0.9,opacity:0}} animate={{scale: 1, opacity:1}} whileHover={{scale: 1.2}} whileTap={{scale: 0.95}} transition={{type: 'spring', stiffness: 300}}>About Us</motion.p></NavLink>
                
            </ul>
            <div className='flex gap-3 items-center'>
                <Link to='/cart'><div className='p-3 bg-white rounded-full relative flex items-center gap-2 cursor-pointer scale-100 transition-all hover:scale-110'>
                <FaShoppingCart />
                <div className=' text-purple-400 font-bold  top-0'>{cart.length}</div>
                </div></Link>
                <Link to='/wishlist'><div className='p-3 bg-white rounded-full cursor-pointer scale-100 transition-all hover:scale-110 flex items-center gap-2'>
                <FaRegHeart />
                <div className=' text-purple-400 font-bold  top-0'>{wishlist.length}</div>
                </div></Link>
                {
                    findUser?.admin && <Link to={'/admin/dashboard'}> <div className='py-3 px-5 font-semibold text-purple-400 bg-white rounded-full relative flex items-center gap-2 cursor-pointer scale-100 transition-all hover:scale-110'>Admin Panel</div></Link>
                }
                {
                    user ? <Link><div onClick={handleLogOut} className='py-3 px-5 font-semibold text-purple-400 bg-white rounded-full relative flex items-center gap-2 cursor-pointer scale-100 transition-all hover:scale-110'>Logout</div></Link> : <Link to={'/login'}><div className='py-3 px-5 font-semibold text-purple-400 bg-white rounded-full relative flex items-center gap-2 cursor-pointer scale-100 transition-all hover:scale-110'>Login</div></Link>
                }
            </div>
            </div>
        </div>
    );
};

export default Navbar;