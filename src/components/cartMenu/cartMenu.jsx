import React from 'react'
import Button from '../button/button'
import CartItem from '../cartItem/cartItem'
import { calcTotalPrice } from '../utils'
import './cartMenu.css'

const CartMenu = ({ items, onClick }) => {
    return (
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                {
                    items.length > 0 ? items.map((game) => (
                        <CartItem
                            key={game.title}
                            image={game.image}
                            price={game.price}
                            title={game.title}
                            id={game.id}
                        />
                    )) : "Cart is empty"
                }
            </div>
            {
                items.length > 0 ? (
                    <div className="cart-menu__arrange">
                        <div className="cart-menu__total-price">
                            <span>Total:</span>
                            <span>{calcTotalPrice(items)} $</span>
                        </div>
                        <Button type="medium" size="medium" onClick={onClick}>
                            Checkout
                        </Button>
                    </div>
                ) : null
            }
        </div>
    )
}

export default CartMenu