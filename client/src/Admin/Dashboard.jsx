import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [products, setProducts] = useState([])
    console.log(products);
    useEffect(() => {
     fetch('https://gadget-heaven-server-henna.vercel.app/products')
     .then(res => res.json())
     .then(data => {
        setProducts(data);
        console.log(data);
     })
    }, [])
    return (
        <div className='m-10'>
            
            <div className='grid grid-cols-3 mb-20 gap-5'>
                <div className='shadow-lg border-2 border-purple-400 p-5 font-bold text-2xl rounded-lg flex flex-col items-center justify-center'>
                    <p>Total Items</p>
                    <p className='text-purple-400'>{products.length} Items</p>
                </div>
                <div className='shadow-lg border-2 border-purple-400 p-5 font-bold text-2xl rounded-lg flex flex-col items-center justify-center'>
                    <p>Products Total Value</p>
                    <p className='text-purple-400'>${products.reduce((sum, item)=> sum+item.price, 0)}</p>
                </div>
                <div className='shadow-lg border-2 border-purple-400 p-5 font-bold text-2xl rounded-lg flex flex-col items-center justify-center'>
                    <p>Products Total Stock</p>
                    <p className='text-purple-400'>{products.reduce((sum, item)=> sum+item.quantity, 0)}</p>
                </div>
            </div>

            <div>
            <ResponsiveContainer className={'my-5'} width="100%" height={700}>
                <BarChart
                width={200}
                height={300}
                data={products}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="price" />
                <YAxis/>
                <Tooltip />
                <Legend />
                <Bar dataKey="title" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="rating" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                <Bar dataKey="category" fill="blue" activeBar={<Rectangle fill="blue" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;