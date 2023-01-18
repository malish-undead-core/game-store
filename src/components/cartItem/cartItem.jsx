import React from 'react'
import './cartItem.css'

const CartItem = ({
    image,
    title,
    price
}) => {
    return (
        <div className="cart-item" >
            <div className="cart-item__image" style={{ backgroundImage: `url(${image})` }}></div>
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} $</span>
            </div>
        </div>
    )
}

export default CartItem