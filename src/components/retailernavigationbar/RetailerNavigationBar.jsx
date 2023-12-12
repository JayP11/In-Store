import React from 'react'
import { Link } from 'react-router-dom'

const RetailerNavigationBar = ({ title, product, setTabType }) => {
    return (
        <div className="retailer-nav-white-main">
            <div className="retailer-nav-white-con">
                <Link to="/">Home</Link>
                {product && <Link to="/products"> / Products</Link>}&nbsp;/&nbsp;{title}&nbsp;/&nbsp;<span style={{ color: "#ff8b00", fontWeight: "800" }}>{setTabType}</span>
            </div>
        </div>
    )
}

export default RetailerNavigationBar