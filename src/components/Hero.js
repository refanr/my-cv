import React from "react";
import me from "../images/reynir.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={me} alt="" className="hero--image" />
            <div className="hero--data">
                <h1 className="hero--title">Reynir Gunnarsson</h1>
                <h2 className="hero--edu">Software Engineering BSc - 2 years completed</h2>
                <p className="hero--bio">I am 38, married, father of two beautiful daughters and a dog. I have been studying SWE for the last two years</p>
            </div>

        </div>

    )
}