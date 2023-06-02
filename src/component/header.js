import React from "react";
import './header.css'
import logo from  '../imgs/logo.svg'
import avatar from '../imgs/image-avatar.png'
import cart from '../imgs/icon-cart.svg'

export default function Header(){
    return(
        <div className="header">
            <div className="navbar-left">
                <div style={{backgroundImage: `url(${logo})` } } className="logo"></div>
                <ul className="navalist">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navbar-right">
                <div style={{backgroundImage : `url(${cart})`}} className="cart"></div>
                <div style={{backgroundImage : `url(${avatar})`}} className="avatar"></div>
            </div>
        </div>
    )
}