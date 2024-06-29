import React, { useEffect, useState, useCallback } from 'react';
import { csv, arc, pie, color } from "d3";


const cvsGit = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv"


export const Boble = () => {

    const [data, setData] = useState(null);
    const [arcs, setArcs] = useState(null);

    useEffect(() => {
        // transform csv with d3.csv
        csv(cvsGit).then(data => {
            setData(data)
        });

    }, [])

    //create instance for arc d3

    /**/

    useEffect(() => {
        console.log(data)
        if (data) {
            // determinar el que el tamaño de todos los arco sea igual por eso el 1 
            const pieGraph = pie().value(1)
            // paso lo datos y pie de D3 me genera los end and start agulos con base la cantidad de filas de datos que tiene la variable data 
            const arcsG = pieGraph(data)
            //cambio el estado de la variable arcs para que ahora me imprima los svgs(path) con los agulos ya generados por pie D3 
            setArcs(arcsG)

        }
    }, [data]);
    //instancio arc de D3 para poder usar sus funciones para generar las cordenas y dibujar los arcos en svg path  
    const arcD3 = arc();

    return (
        <svg height={1000} width={1000}>
        {/*este translate alinea en los ejes x e y todos los elementos dentro del el mismo grupo por lo tanto
        ya no engo que especificar esa propidad para cada uno y 500 por que quiero que este en todo el centro del 
        svg que tiene 1000 de heigth y width */}
            <g transform={`translate(${500},500)`}>
                {/*uso este operador ternadorio de jsx para cuando arcs no sea null imprima los arcos
                esto lo logro por que al usar el useEffect lo ejecuto nuevamente el renderizado del componenete al cambiar 
                el estado arcs y como arrcs al volverse a ejecutar ya no es null ahora se va ha ejecutar la impresion del svg con los arcs(phat)
                -luego para poder imprimir uso la etiqueta path con la propiedad p para dibujar 
                el inner radius es dedonde inicia el el radio de los carcos y el outer conde finalizan 
                ya el start y el and angle uso el que me genero pie anteriormente  eso lo que hace es devolver las cordenaas
                que debe usar svg para dibujar el arco y el fill con el parametro hexadecimal que tienen los datos   */}
                {arcs ?
                    
                    arcs.map((color, i) => (

                        <path d={
                            arcD3({
                                innerRadius: 100,
                                outerRadius: 500,
                                startAngle: color.startAngle,
                                endAngle: color.endAngle
                            })

                        }

                            fill={color.data["RGB hex value"]} 
                        />

                    ))


                    : "loading..."}
            </g>
        </svg>
    );
}

export default Boble;