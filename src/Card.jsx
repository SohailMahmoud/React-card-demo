import React from "react";
import Photo from "./Photo"
import DevInfo from "./DevInfo";
import Footer from "./Footer"

export default function Card () {
    return (
        <div className="card">
            <Photo />
            <DevInfo />
            <Footer />
        </div>
    )
}