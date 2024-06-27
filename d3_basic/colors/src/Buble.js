import React, { useEffect, useState } from 'react';
import { csv, arc } from "d3";


const cvsGit = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv"


export const Boble = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        // transform csv with d3.csv
        csv(cvsGit).then(data => {
            console.log(data)
            setData(data)
        });

    }, [])

    //create instance for arc d3
    const arcD3 = arc()
    return (
        <svg height={1000} width={1000}>
            <g transform={`translate(${500},500)`}>
            {data ?
                
                data.map((color,i) => (
                    
                    <path d={
                        arcD3({
                            innerRadius:0,
                            outerRadius:500,
                            startAngle: i / data.length * 2 * Math.PI,
                            endAngle: (data.length * 2 * Math.PI) / (i +1)
                        })
                        
                    } 
                    
                    fill={color["RGB hex value"]} 
                    
                    s={data.length}
                    />
                    
                ))

                : "loading..."}
                </g>
        </svg>
    );
}

export default Boble;