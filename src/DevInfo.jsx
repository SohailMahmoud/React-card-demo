import React from "react";
import Name from "./Name"
import Buttons from "./Buttons"
import About from "./About"
import Interest from "./Interest"

export default function DevInfo () {
    return (
        <div className="dev-info">
            <Name />
            <Buttons />
            <About />
            <Interest />
        </div>
    )
}