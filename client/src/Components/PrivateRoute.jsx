import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(CartContext)
    const navigate = useNavigate()
    if(!user) {
        navigate('/login')
    }
    return (
        children
    );
};

export default PrivateRoute;