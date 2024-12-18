import React, { useContext } from 'react';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom/dist';

const NavbarSecond = () => {
    const {cart, wishlist, user} = useContext(CartContext)

    return (
        <div className=' bg-white py-5 w-full px-20'>
            <div className='flex justify-between items-center'>
            <Link to='/'><div className='text-xl font-bold text-black'>Gadget Heaven</div></Link>
            
            <ul className='flex gap-10 items-center nav-second'>
                <NavLink to={'/'} className={`font-bold text-black`}>Home</NavLink>
                <NavLink to={'/statistics'} className={`font-bold text-black`}>Statistics</NavLink>
                <NavLink to={'/dashboard'} className={`font-bold text-black`}>Dashboard</NavLink>
                <NavLink to={'/about'} className={`font-bold text-black`}>About Us</NavLink>

                
            </ul>
            <div className='flex gap-3'>
            <Link to='/cart'><div className='p-3 bg-white rounded-full relative flex items-center gap-2 cursor-pointer scale-100 transition-all hover:scale-110 border'>
                <FaShoppingCart />
                <div className=' text-purple-400 font-bold  top-0'>{cart.length}</div>
                </div></Link>
                <Link to="/wishlist"><div className='p-3 bg-white rounded-full cursor-pointer scale-100 transition-all hover:scale-110 flex items-center gap-2 border'>
                <FaRegHeart />
                <div className=' text-purple-400 font-bold  top-0'>{wishlist.length}</div>
                </div></Link>
                <Link to={'/admin/dashboard'}> <div className='py-3 px-5 font-semibold text-purple-400 bg-white rounded-full relative flex items-center gap-2 cursor-pointer scale-100 transition-all hover:scale-110 border'>Admin Panel</div></Link>
                {
                    user ? <Link><div className='py-3 px-5 font-semibold text-purple-400 bg-white rounded-full relative flex items-center gap-2 cursor-pointer scale-100 transition-all hover:scale-110 border'>Logout</div></Link> : <Link to={'/login'}><div className='py-3 px-5 font-semibold text-purple-400 bg-white rounded-full relative flex items-center gap-2 cursor-pointer scale-100 transition-all hover:scale-110'>Login</div></Link>
                }
            </div>
            </div>
            
        </div>
    );
};

export default NavbarSecond;