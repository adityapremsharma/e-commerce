import React from 'react'
import menuBar from "../images/menu-bar.png"

const Navigation = (props) => {
    return (
        <nav className="login-navbar">
            <h3 className="logo">CultMusic</h3>
            <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
            </ul>
            <a href="#"><button onClick={props.onClick} className="solid-button">{props.button}</button></a>
            <a className="menu-bar"><img src={menuBar} alt="menu-bar-logo" /></a>
        </nav>
    )
}

export default Navigation