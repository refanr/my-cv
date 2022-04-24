import React from "react";
import me from "../images/reynir.png"

export default function Hero(props) {
    return (
    
        <div className="hero">
            <img src={me} alt="" className="hero--image" />
            <div className="hero--data">
                <h1 className="hero--title">Reynir Gunnarsson</h1>
                <h2 className="hero--edu">Software Engineering BSc</h2>
                <p className="hero--bio">{props.bio}</p>
            </div>
        </div>
        

    )
}