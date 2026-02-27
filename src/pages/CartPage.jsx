import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart } from '../services/cartSlice.js'
import '../components/css/Containers.css'
import '../components/css/Buttons.css'
import '../components/css/Animations.css'
import '../components/css/Headings.css'
import '../components/css/Images.css'
import '../components/css/Cart.css'

function CartPage() {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

    if (items.length === 0) {
        return (
            <div className="cartContainer">
                <h1 className="darkSubText s40">Cart</h1>
                <p className="darkSubText s30">Cart is empty</p>
            </div>
        );
    }

    return (
        <div className="cartContainer">
            <h1 className="darkSubText s40">Cart ({totalQuantity})</h1>

            <div className="cartItems">
                {items.map((item) => (
                    <div key={item.id} className="cartItem">
                        <img src={item.cover} alt={item.name} className="cartItemImg" />
                        <div className="cartItemInfo">
                            <h2 className="darkSubText s30">{item.name}</h2>
                            <p className="darkSubText s20">${item.price} x {item.quantity}</p>
                        </div>
                        <button
                            className="darkPink r7 s20 p10 lightSubText zoomin changecolor"
                            onClick={() => dispatch(removeFromCart(item.id))}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="cartTotal">
                <h2 className="darkSubText s30">Total: ${totalPrice}</h2>
                <button
                    className="r7 s20 p10 darkPink lightSubText zoomin changecolor"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    );
}

export default CartPage;