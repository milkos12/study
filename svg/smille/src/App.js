import logo from './logo.svg'
import './App.css'
import './Smille'
import Smille from './Smille'

function App() {
  let smile = <Smille
    width={960}
    height={600}
    centerX={960 / 2}
    centerY={600 / 2}
    stroke={"black"}
    strokeWidth={10}
    fill={"yellow"}
    radio={(960 / 2 - 600 / 2) / 2}>

  </Smille>

  let silles = Array.from({ length: 10 }).map(() => smile);
  return (

    <div className="App">

      {silles}
    </div >
  )
}

export default App
