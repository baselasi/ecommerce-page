import React from "react";
import './header.css'


export default function Header(props){
    const [state,setState] = React.useState(true)

    function Click(){
        setState((prev)=>!prev)
        props.State(state)
    }
    function hide(){
        if(props.show){
            setState((prev)=>!prev)
            props.State(state)
        }
    }
    return( 
    <div className="header-continer" >
        <div className="header"  >
            <div className="navbar-left" onClick={hide}>
                <div style={{backgroundImage: `url(/imgs/logo.svg)` } } className="logo"></div>
                <ul className="navalist" >
                    <li className="list-item"><a> Collections</a></li>
                    <li className="list-item"><a> Menu</a></li>
                    <li className="list-item"><a>Women</a></li>
                    <li className="list-item"><a>About</a></li>
                    <li className="list-item"><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <div onClick={Click} style={{backgroundImage : `url(/imgs/icon-cart.svg)`}} className="cart"></div>
                <div style={{backgroundImage : `url(/imgs/image-avatar.png)`}} className="avatar"></div>
            </div>
        </div>
    </div>
    )
}