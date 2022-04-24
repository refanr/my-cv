import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import Rolo from "./components/Rolo";
import Rolo2 from "./components/Rolo2"
import mainData from "./mainData"


export default function App() {

    return (
        <div className="container">
            <Header />
            <Hero bio={mainData.bio} />
            <Rolo />
            <Rolo2 jobs={mainData.jobs} />
            <Footer />
        </div>
    )
}