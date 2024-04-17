import React from 'react'
import "./CinemaNavigationBar.css"
import { Link } from 'react-router-dom'

const CinemaNavigationBar = ({ title, product, setTabType }) => {
    return (
        <div className="retailer-nav-white-main">
            <div className="retailer-nav-white-con">
                <Link to="/">Home</Link>
                {product && <Link to="/products"> / Products</Link>}&nbsp;/&nbsp;{title}&nbsp;/&nbsp;<span style={{ color: "#ff8b00", fontWeight: "800" }}>{setTabType}</span>
            </div>
        </div>
    )
}

export default CinemaNavigationBar