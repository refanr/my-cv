import React from "react";
import Card from "./Card";
import courseData from "../courseData";

export default function Rolo() {
    const courses = courseData.courses.map(item => {
        return (
            <Card 
                key={item.name}
                {...item}
            />
        )
    })
    return (
        <div className="rolo">
            {courses}
        </div>

    )
}