import React, { useEffect, useState } from "react";
import * as d3 from "d3";

export const Three = () => {
    const [data, setData] = useState(null);
    const sizesMargins = { top: 20, button: 20, rigth: 20, left: 20, width:600, heigth: 600 }
    useEffect(()=>{
        d3.json('/CHL_2015_exante.json').then(data => {
            setData(data)
        })
    },[]);



    useEffect(()=>{
        if(data) {

            const root = d3.hierarchy(data);
            
            const dy = 10;
            const dx = (sizesMargins.width - sizesMargins.left - sizesMargins.rigth) / (1 + root.height);

            //define links shapes and layoud
            const tree = d3.tree().nodeSize([dx, dy]);
            const diagonal = d3.linkVertical().x(d => d.x).y(d => d.y)
           

        }
    },[data])
    return(
        <svg style={{border: '2px solid black'}} width={sizesMargins.width} height={sizesMargins.heigth} viewBox="0 300 10 10">
            <circle r={50} fill="blue" ></circle>
        </svg>
    );
}


export default Three; 