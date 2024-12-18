import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const ShopSection = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        if(id){
            const filteredItems = [...data].filter(item => item.category === id)
            setItems(filteredItems)
        }else{
            setItems((data.sort(() => Math.random() - 0.5).slice(0,6)))
        }
    }, [])
    
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {items.map(item => <Card key={item._id} item={item}/>)}
        </div>
    );
};

export default ShopSection;