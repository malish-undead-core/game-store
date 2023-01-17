import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/orderItem/orderItem'
import { calcTotalPrice } from '../../components/utils'
import './orderPage.css'

const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if (items.length < 1) {
        return <h1>Сart is empty</h1>
    }

    return (
        <div className="order-page">
            <div className="order-page__left">
                {items.map(game => <OrderItem key={game.id} game={game} />)}
            </div>
            <div className="order-right">
                <div className="order-page__total-price">
                    <span>
                        {items.length} goods worth: {calcTotalPrice(items)}$
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OrderPage