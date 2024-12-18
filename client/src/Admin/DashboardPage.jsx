import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';

const DashboardPage = () => {
    const location = useLocation()
    console.log(location);
    return (
        <div className='bg-slate-100 grid grid-cols-5 m-5 gap-5'>
            <div className='col-span-1 bg-white p-5 rounded-lg'>
                <ul className='flex flex-col gap-5'>
                <NavLink to={'all-products'} className={({isActive}) => `${isActive && "bg-purple-400 text-white"} py-3 px-5 rounded-3xl font-bold border text-center`}>All Products</NavLink>
                <NavLink to={'add-product'} className={({isActive}) => `${isActive && "bg-purple-400 text-white"} py-3 px-5 rounded-3xl font-bold border text-center`}>Add Product</NavLink>
                <NavLink to={'order'} className={({isActive}) => `${isActive && "bg-purple-400 text-white"} py-3 px-5 rounded-3xl font-bold border text-center`}>Orders</NavLink>
                    
                </ul>
            </div>

            <div className='col-span-4 bg-white p-5 rounded-lg'>
                
                
                {location.pathname !== '/admin/dashboard' ?  <Outlet/> : <Dashboard/>}
            </div>
        </div>
    );
};

export default DashboardPage;