import React from "react";
import './cart.css'

export default function Cart(props){
    return(
        <div className="modal">
            <p style={{borderBottom: "1px solid", width:"100%"}} >cart</p>
            <div>your cart is emty</div>
            <div>
                <div style={{backgroundImage: `${props.img}`}}>
                </div>
                <div>
                <p>{props.name}</p>
                <p>${props.price}<span>{props.number}</span>${props.price*props.number}<span></span></p>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}