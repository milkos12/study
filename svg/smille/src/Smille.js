import React from 'react';
import { arc } from 'd3';
import CircleBackground from './CircleBackground';
import Eyes from './Eyes';
import Mouth from './Mouth';
import SmilleConteiner from './SmilleConteiner';

console.log(arc)


const Smille = (props) => {
    let {
        width, 
        height, 
        centerX, 
        centerY, 
        stroke, 
        strokeWidth, 
        fill, 
        radio
    } = props
    


    return (
        <div>

            <SmilleConteiner width={width} height={height} centerX={centerX} centerY={centerY}>
                <CircleBackground fill={fill} stroke={stroke} strokeWidth={strokeWidth} radio={radio} />
                <Eyes cx={100} cy={100} r={50} />
                <Mouth />
            </SmilleConteiner>

        </div>
    );
}

export default Smille;