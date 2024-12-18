import React, { useState } from 'react';
import Banner from './Banner';
import { NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom';
import Category from './Category';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='bg-slate-100'>
            <Banner/>
            {/* <div className='absolute top-[1000px] w-full mx-auto space-y-5'> */}
            <div className='mt-[300px]'>
                <h1 className='font-bold text-4xl text-center'>Explore Cutting-Edge Gadgets</h1>
                <div className='grid grid-cols-1 md:grid-cols-6 w-[90%] mx-auto items-start'>
                    <div className='col-span-1 p-5 bg-white space-y-5 rounded-2xl m-5 flex flex-col'>
                        <NavLink to={'/'} className={({isActive}) => `${isActive && "bg-purple-400 text-white"} py-3 px-5 rounded-3xl font-bold `}>All Products</NavLink>

                        {data?.map(category => <NavLink to={`/shop/${category.category}`} key={category._id} className={({isActive}) => `${isActive && "bg-purple-400 text-white"} py-3 px-5 rounded-3xl font-bold `}>{category.category}</NavLink>)}
                        
                    </div>
                    <div className='col-span-5 m-5'><Outlet/></div>
                </div>
            </div>
        </div>
    );
};

export default Home;