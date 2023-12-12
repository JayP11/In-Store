import React from 'react'
import "./CustomerBlackNavbar.css"
import { Link } from 'react-router-dom'

const CustomerBlackNavbar = ({ title, product, mallname }) => {
    return (
        <div className="cus-nav-black-main">
            <div className="cus-nav-black-con">
                <Link to="/mallnearme">Mall near me</Link>
                {product && <Link to="/products">/ Products</Link>}/ {mallname} / {title}
            </div>
        </div>
    )
}

export default CustomerBlackNavbar