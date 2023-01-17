import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { FaCartArrowDown } from 'react-icons/fa'
import { calcTotalPrice } from '../utils'
import CartMenu from '../cartMenu/cartMenu'
import ItemsInCart from '../itemsInCart/itemsInCart'
import './cartBlock.css'

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate])

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            <FaCartArrowDown
                size={25}
                className="cart-block__icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0 ? <span className="cart-block__total-price">{totalPrice} $</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    )
}
export default CartBlock;
