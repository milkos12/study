import React, { useState, useCallback } from 'react';

const width = 600;
const height = 600;
const initialPosition = { x: width / 2, y: height / 2 };

export const Boble = () => {

    const [mousePosition, setMousePostion] = useState(initialPosition)
    const mouseEventHandle = useCallback((event) => {
        const { clientX, clientY } = event
        setMousePostion({ x: clientX, y: clientY })

    }, [setMousePostion])
    return (
        <div>
            <h1 id='hola'>Hola Como van?</h1>
            <svg width={width} height={height} onMouseMove={mouseEventHandle}>
                <circle cx={mousePosition.x} cy={mousePosition.y} stroke='black' stroke-width="1" r={10} />
            </svg>
        </div>


    );
}

export default Boble;