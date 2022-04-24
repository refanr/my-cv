import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import Rolo from "./components/Rolo";


export default function App() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <Rolo />
            <Footer />
        </div>
    )
}