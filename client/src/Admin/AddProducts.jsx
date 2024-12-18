import React, { useRef, useState } from 'react';

const AddProducts = () => {
    const [tags, setTags] = useState([])
    const [list, setList] = useState([])
    const tagRef = useRef()
    const listRef = useRef()
    const hashtag = tags.map(tag => `#${tag}`)
    // console.log(list);
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const price = parseInt(form.price.value)
        const image = form.image.value
        const category = form.category.value
        const tags = hashtag
        const quantity = parseInt(form.quantity.value)
        const details = form.details.value
        const rating = 0
        const product = {title, price, image, category, tags, quantity, details, list, rating}
        // console.log(name, price, image, category, tags, quantity, details);
        fetch('https://gadget-heaven-server-henna.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            alert("Product added")
        })

        fetch('https://gadget-heaven-server-henna.vercel.app/products/categories', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({category})
        })
        .then(res => res.json())
        .then(data => {
            alert("Category added")
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5' action="">
                <div className=''>
                    <h2 className='font-semibold mb-2'>Product Title</h2>
                    <input className='bg-slate-100 py-3 px-5 rounded-3xl w-full' required type="text" placeholder='Product title' name="title" id="" />
                </div>
                <div className=''>
                    <h2 className='font-semibold mb-2'>Product Price</h2>
                    <input className='bg-slate-100 py-3 px-5 rounded-3xl w-full' required type="number" placeholder='Product price' name="price" id="" />
                </div>
                <div className=''>
                    <h2 className='font-semibold mb-2'>Product Image Url</h2>
                    <input className='bg-slate-100 py-3 px-5 rounded-3xl w-full' required type="text" placeholder='Product image url' name="image" id="" />
                </div>
                <div className=''>
                    <h2 className='font-semibold mb-2'>Product Category</h2>
                        <select className='bg-slate-100 py-3 px-5 rounded-3xl w-full placeholder-gray-200' required placeholder='Select category' name="category" id="">
                            <option value="Smartphone">Smartphone</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Headphone">Headphone</option>
                        </select>
                </div>
                <div className=''>
                    <h2 className='font-semibold mb-2'>Product Quantity</h2>
                    <input className='bg-slate-100 py-3 px-5 rounded-3xl w-full' required type="number" placeholder='Product quantity' name="quantity" id="" />
                </div>
                <div className=''>
                    <div className='flex items-center gap-3'>
                    <h2 className='font-semibold mb-2'>Product Tags</h2>
                    <div className=' flex items-center gap-2'>{hashtag.map((tag, index) => <div className='border rounded-3xl flex items-start justify-start py-1 px-2 text-xs font-semibold' key={index}><p>{tag}</p></div>)}</div>
                    </div>
                    <div className='flex'>
                    <input className='bg-slate-100 py-3 px-5 rounded-3xl w-full' ref={tagRef} type="text" placeholder='Product tags' name="tags" id="" />
                    <div onClick={() => {setTags([...tags, tagRef.current.value]); tagRef.current.value=""}} className=' px-5 bg-purple-400 rounded-xl ml-3 font-semibold text-white flex justify-center items-center'>Add</div>
                    </div>
                    
                </div>
                <div className='col-span-2'>
                    <h2 className='font-semibold mb-2'>Product Details</h2>
                    <textarea className='bg-slate-100 py-3 px-5 rounded-3xl w-full' required placeholder='Type here' name="details" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <h2 className='font-semibold mb-2'>List Details</h2>
                    <div className='flex'>
                    <input type="text" className='bg-slate-100 py-3 px-5 rounded-3xl w-full' name="list-details" ref={listRef} id="" />
                    <div onClick={() => {setList([...list, listRef.current.value]); listRef.current.value=""}} className=' px-5 bg-purple-400 rounded-xl ml-3 font-semibold text-white flex justify-center items-center'>Add</div>
                    </div>
                    <div className='bg-slate-100 py-3 px-5 rounded-3xl w-full mt-3 h-[200px] overflow-auto'>
                        {
                            list.map((list, index) => (
                                <li key={index} className='text-gray-400'>{list}</li>
                            ))
                        }
                    </div>
                </div>
                <button className='col-span-2 w-full bg-purple-400 py-4 px-5 font-semibold text-white rounded-3xl'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProducts;