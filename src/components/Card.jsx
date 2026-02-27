import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../services/cartSlice.js'
import './css/Containers.css'
import './css/Images.css'
import './css/Buttons.css'
import './css/Animations.css'
function Card({ product }) {
    const { name, price, cover } = product;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="cardContainer">
            <img src={cover} alt={name} className="cardImg"></img>
            <h1 className="darkSubText s40">{name}</h1>
            <h2 className="darkSubText s30">${price}</h2>
            <button className="r7 s30 darkPink lightSubText zoomin changecolor"
                onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export default Card