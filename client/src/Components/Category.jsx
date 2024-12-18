import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    return (
        <div className='cursor-pointer w-full'>
            <NavLink to={`/shop/${category.name}`} >{category.name}</NavLink>
        </div>
    );
};

export default Category;