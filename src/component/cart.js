import React from "react";
import './cart.css'
export default function Cart(props){
    return(
        <div className="modal" style={{display: props.state ? "block" : "none"}}>
            <p style={{borderBottom: "1px solid", width:"100%", fontWeight:"800"}} >cart</p>
            <div style={{display: props.number===0 ? "block" : "none"}}>your cart is empty</div>
            <div style={{display: props.number===0 ? "none":"block"}}>
                <div style={{backgroundImage: `${props.img}`}}>
                </div>
                <div>
                <p style={{fontWeight:"300"}}>{props.name}</p>
                <p>${props.price}<span>  *{props.number}</span><span style={{fontWeight:"800"}}>  ${props.price*props.number}</span></p>
                </div>
                <button className="checkout">Checkout</button>
            </div>
        </div>
    )
}