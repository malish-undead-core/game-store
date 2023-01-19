import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from '../cartBlock/cartBlock'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/game-store" className="header__store-title">
                    Game Store
                </Link>
            </div>
            <div className="wrapper header-cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    )
}
export default Header;
