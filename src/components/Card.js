import React from "react";


export default function Card(props) {
    const title = props.name ? props.name : props.company
    return (
        <div className="card">
            <p className="card--title">{title}</p>
            <p>{props.years}</p>
            <p>{props.description}</p>
            
        </div>
    )
}