import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
     fetch('https://gadget-heaven-server-henna.vercel.app/products')
     .then(res => res.json())
     .then(data => {
        setProducts(data);
     })
    }, [])

    const handleDelete = (id) => {
        fetch(`https://gadget-heaven-server-henna.vercel.app/product/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            alert("Deleted")
            const filter = products.filter(prev => prev._id !== id)
            setProducts(filter)
        })
    }
    return (
        <div>
            <h1 className=' font-bold my-3 text-3xl'>Product Length: {products.length}</h1>
            {
                products.map(product => (
                    <div key={product._id} className='border rounded-lg p-3 my-2 flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                        <img className='w-20' src={product.image} alt="" />
                        <h1>{product.title}</h1>
                        </div>
                        <p>Price: {product.price}$</p>
                        <button onClick={() => handleDelete(product._id)} className='bg-red-500 py-1 text-white rounded-3xl px-3'>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default AllProducts;