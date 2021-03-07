import React from 'react'
import menuBar from "../images/menu-bar.png"

const Navigation = () => {
    return (
        <nav className="auth-nav">
            <div className="auth-nav__logo-container">
                <h3 className="logo">CultMusic</h3>
            </div>
            <div className="auth-nav__menu-container">
                <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className="auth-nav__button-container">
                <a href="#"><button className="button-secondary">Log In</button></a>
            </div>
            <div className="auth-nav__menu-bar-container">
                <a className="auth-nav__menu-bar"><img src={menuBar} alt="menu-bar" /></a>
            </div>
        </nav>
    )
}

export default Navigation