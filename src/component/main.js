import React from "react";
import urls from "./imgsUrl"
import "./main.css"
import data from "./data";
export default function Main(props){
    const [img,setImg] = React.useState("/imgs/image-product-1.jpg")
    const [number,setNumber] = React.useState(0)
    const [state,setState] = React.useState(true)
    function increaseCount(){
        setNumber((prev)=>prev+1)
    }
    function decreaseCount(){
        if(number>0){
            setNumber((prev)=>prev-1)
        }
    }
    function setCart(name,price,offre){      //after clicking the botton the obj properties will be assgin to the Mian component props
        props.Name(name)                    //passing the value of Main.prorps to the parent commponent (App()) throght function (Name,Price,Numbers) 
        props.Price((price*offre)/100)
        props.Numbers(number)
    }
    function hideCart(){  
        if(props.show){         //if cart is already showing 
            setState(false)     //change the state in Main  to false and pass it value to the parent component
            props.State(state)          
        }
        
    }
    return(
        <>
            <div className="main" onClick={hideCart}>
                <div className="show">
                    <div style={{backgroundImage: `url(${img})`}} className="image"></div>  {/* make sure to movie the image into the public folder so you can use url   in this maner*/}
                    <div className="gallery">{urls.map((url)=><div style={{backgroundImage: `url(${url})`}}
                                            onClick={()=>setImg(url)}
                                            className="gellery-img"></div>)}
                    </div>
                </div>
                {data.map((obj)=>  
                    <div className="prodoct-details">               {/* go throught object properties and assign it values to htm div */}
                        <h4 style={{color:"orange"}}>{obj.compnany}</h4>
                        <h1 >{obj.name}</h1>
                        <p style={{fontWeight:"200"}}>{obj.discription}</p>
                        <div style={{fontWeight:"800"}}>${(obj.offre*obj.price)/100}.00<span className="offre">{obj.offre}%</span></div>
                        <span style={{fontWeight:"200"}}>${obj.price}</span>
                        <div className="tool" >
                            <div className="counter">
                                <span className="sign" onClick={decreaseCount}>&#8722;</span>{/*create the minus simbole and assgin the decreascount function to it to change the number insdie the div */}
                                {number}
                                <span className="sign" onClick={increaseCount}>&#43;</span>{/*create the plus simbole and assgin the increascount function to it to change the number insdie the div  */}
                                </div>
                            <button onClick={()=>setCart(obj.name,obj.price,obj.offre)} className="btn" > {/* onclcik change to cart content given it the obj values */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg> {/* the cart simbol (just copy and past it) */}
                                add to cart{/*the botton content */}
                            </button>
                        </div>
                    </div>
                    )}
            </div>
        </>
        
    )
}