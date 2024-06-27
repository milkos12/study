import { React } from 'react';

const CircleBackground = (props) => {
    let {radio, fill, stroke, strokeWidth} = props
    return (
        <circle
            r={radio}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
        />
    );
};

export default CircleBackground;