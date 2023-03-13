// import { arc } from "d3"
import { useCallback, useState } from "react"
import "./App.css"

const width = 700
const height = 500
const circleRadius = 30

const initialMousePosition = { x: width / 2, y: height / 2 }

function App() {
  const [mousePosition, setMousePosition] = useState(initialMousePosition)
  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event
      console.log({ clientX, clientY })
      setMousePosition({ x: clientX, y: clientY })
    },
    [setMousePosition]
  )
  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <g>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
      </g>
    </svg>
  )
}

export default App
