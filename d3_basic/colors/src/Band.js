import React, { useEffect, useState } from "react";
import { scaleBand, text, csv, scaleLinear, max } from "d3";

export const Band = () => {
    const [data, setData] = useState(null);
    const [scalerBandY, setscalerBandY] = useState(null);
    const [scalerLinearX, setScalerLinearX] = useState(null);
    const ulrData = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';
    const [keys, setKesy] = useState([])
    const sizes = { width: 600, height: 600 }
    const margins = { top: 20, rigth: 20, bottom: 20, left: 200 }
    const innerWidth = sizes.width - (margins.left + margins.rigth);
    const innerHeigth = sizes.height - (margins.top + margins.bottom);

    /* hago un llamado a al URL que tiene el csv y la funcion csv de d3 transforma los datos al
       formato con el cual voy a poder usarlo en d3 es una funcoin asincronica por esa razon use then */
    useEffect(() => {
        csv(ulrData).then(
            data => {
                setData(data.slice(0, 9))
            }
        )
    }, []);

    useEffect(() => {
        //ese if espor que en el primer renderizado se ejecuata de todos modos
        //pero la idea es que se ejecuante el cuando la variable data cambie de null
        if (data) {

            /*aca extraigo los nombres de los paises porque en la documentacion de d3
              dice que debo pasarle un array con la cantiadad de valores(en este caso filas)
              para poder determinar la psosicion en x de cada rectangulo
              en este caso use el nombre del país porque los valores deben ser diferentes (key)
              para lugo poder ver el scadle de cada uno con el nombre del país*/
            const keysNew = data.map(data => {
                return data.Country
            })

            /*quíe simplemente hago lo que la documetnacion dice para generar el secaler para cada uno de los
            paises mando primer paramentro los kyes(país nombres), y lugo el rango de 0 550 px q va ser dividido para entre todos los pasis el espacio*/
            setKesy(keysNew)
            const scaleBanY = scaleBand()
                .domain(keysNew)
                .range([0, innerHeigth])
                .padding(.1)


            /*por qué con arrow function? por que de esa  manera estoy devolvindo la referencia en memoria
            de un objento compuesto como en este caso lo es la funcion scale tambise si solo devulvo si arrow function
            me devuelve undefined por que no estoy devolviendo un objeto compuesto sino un valor primitivo*/
            setscalerBandY(() => scaleBanY);


            /**/
            const poblation = data.map((row) => +row["2020"])
            const scaleLinearX = scaleLinear()
                .domain([0, max(poblation)])
                .range([0, innerWidth]);


            console.log("..........> ", scaleLinearX.ticks())
            setScalerLinearX(() => scaleLinearX)

        }


    }, [data])

    return (<svg width={sizes.width} height={sizes.height} style={{ border: '2px solid black' }}>
        <g transform={`translate(${margins.left},${margins.top})`}>

            {
                scalerBandY ?
                    scalerLinearX.ticks().map(tick =>
                        <g transform={`translate(${scalerLinearX(tick)},${0})`}>
                            <line y2={innerHeigth} stroke="black" />
                            <text transform={`translate(${0},${innerHeigth + 15})`} style={{textAnchor: "middle"}}>{tick}</text>
                        </g>
                    
                    )
                    :
                    <p>Loading Ticks</p>
            }

            {
                scalerBandY ?
                    data.map((row) =>
                        <g>
                            <text  transform={`translate(${-4},${scalerBandY(row['Country'])+(scalerBandY.bandwidth()/2)})`} style={{textAnchor: "end"}}>{row['Country']}</text> 
                            <rect y={scalerBandY(row['Country'])} width={scalerLinearX(+row[2020])} height={scalerBandY.bandwidth()} fill="blue" />
                        </g>
                    )
                    :
                    <p>Loading...</p>
            }
        </g>

    </svg>);
}


export default Band;