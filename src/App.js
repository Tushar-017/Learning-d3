import { arc } from "d3";
import "./App.css";

const width = 700;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 140;
const eyeOffsetY = 64;
const eyeRadius = 50;
const mouthWidth = 18;
const mouthRadius = 200;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius - mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * (3 / 2));

function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
        <path d={mouthArc()} />
      </g>
    </svg>
  );
}

export default App;
