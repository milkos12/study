import React from "react";

const SmilleConteiner = (props) => {
    let { children, width, height, centerX, centerY } = props
    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
                {children}
            </g>
        </svg>
    );
}

export default SmilleConteiner;