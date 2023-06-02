import React from "react";
import urls from "./imgsUrl"
import "./main.css"
import data from "./data";
export default function Main(){
    const [img,setImg] = React.useState("/imgs/image-product-1.jpg")
    
    return(
        <div className="main">
            <div className="show">
                <div style={{backgroundImage: `url(${img})`}} className="image"></div>
                <div className="gallery">{urls.map((url)=><div style={{backgroundImage: `url(${url})`}}
                                        onClick={()=>setImg(url)}
                                        className="gellery-img"></div>)}
                </div>
            </div>
            {data.map((obj)=>
                <div className="prodoct-details">
                    <h4 className="company-name">{obj.compnany}</h4>
                    <h2 className="product-name">{obj.name}</h2>
                    <p className="discription">{obj.discription}</p>
                    <div>${obj.offre*obj.price/100}<span>{obj.offre}</span></div>
                    <span>${obj.price}</span>
                    <div><div></div><button><span style={{backgroundImage: "url(/imgs/icon-cart.svg)"}}></span>add to cart</button></div>
                </div>
                )}
        </div>
    )
}