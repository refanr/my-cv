import React from "react";
import Card from "./Card";


export default function Rolo2(props) {
    const jobArray = props.jobs.map(item => {
        return (
            <Card 
                key={item.company}
                {...item}
            />
        )
    })
    return (
        <div className="rolo2">
            {jobArray}
        </div>

    )
}