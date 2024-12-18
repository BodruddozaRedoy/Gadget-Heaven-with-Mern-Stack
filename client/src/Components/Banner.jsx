import React from 'react';
import { Link, useNavigate } from 'react-router-dom/dist';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='md:relative md:mx-10 p-5'>
            <div className='bg-purple-400 flex flex-col gap-10 items-center md:pt-[100px] md:px-[400px] md:pb-[250px] rounded-2xl md:mt-10 p-5 md:p-0'>
            <h1 className='text-2xl md:text-6xl font-bold text-white text-center'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className='text-white text-xs md:text-sm text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <Link to='/dashboard'><button className='bg-white py-3 px-5 rounded-3xl text-purple-400 font-bold cursor-pointer scale-100 transition-all hover:scale-110'>Shop Now</button></Link>
            </div>
            <div className=' w-full md:w-[60%] mx-auto p-5 rounded-xl border-2 bg-[#ebf5fb8c] md:absolute md:top-[65%] md:right-[20%]'>
                <img className='w-full md:h-[400px] rounded-xl object-cover z-10 ' src="/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;