import React from "react";
import { arc } from "d3";

export const Mouth = () => {
    let mouthArc = arc()
        .innerRadius(190)
        .outerRadius(200)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2);
    return(
        <path d={mouthArc()}/>
    );

}

export default Mouth;