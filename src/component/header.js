import React from "react";
import './header.css'
import logo from  '../imgs/logo.svg'
import avatar from '../imgs/image-avatar.png'
import cart from '../imgs/icon-cart.svg'

export default function Header(){
    return(
      
    <div className="header-continer">
        <div className="header">
            <div className="navbar-left">
                <div style={{backgroundImage: `url(/imgs/logo.svg)` } } className="logo"></div>
                <ul className="navalist">
                    <li className="list-item"><a> Collections</a></li>
                    <li className="list-item"><a> Menu</a></li>
                    <li className="list-item"><a>Women</a></li>
                    <li className="list-item"><a>About</a></li>
                    <li className="list-item"><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <div style={{backgroundImage : `url(/imgs/icon-cart.svg)`}} className="cart"></div>
                <div style={{backgroundImage : `url(/imgs/image-avatar.png)`}} className="avatar"></div>
            </div>
        </div>
    </div>
    )
}