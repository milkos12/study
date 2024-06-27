import React from 'react';
import { arc } from 'd3';
import CircleBackground from './CircleBackground';
import Eyes from './Eyes';
import Mouth from './Mouth';
import SmilleConteiner from './SmilleConteiner';

console.log(arc)


const Smille = () => {
    const width = 960;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;
    const stroke = "black";
    const strokeWidth = 10;
    const fill = "yellow";
    const radio = (centerX - strokeWidth) / 2;


    const mouthArc = arc()
        .innerRadius(140)
        .outerRadius(150)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2);

    console.log("Radio de inicio ", Math.PI / 2)
    console.log("Radio de finalizacion ", Math.PI * 3 / 2)
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