import React, { useState, useMemo } from 'react'
import Query from './Components/Query'
import Canvas from './Components/Canvas'

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState([])
  
  const handleSubmit = (ansArray) => {
    setResults(ansArray);
    setSubmitted(true);
  };
  const { xPosition, yPosition } = useMemo(() => {
    if (results.length === 0) return { xPosition: 0, yPosition: 0 };
  
    let xTotal = 0;
    let yTotal = 0;
    
    results.forEach((response) => {
      if (response && typeof response.xValue === 'number' && typeof response.yValue === 'number') {
        xTotal += response.xValue;
        yTotal += response.yValue;
      }
    });
    
    return {
      xPosition: xTotal / results.length,
      yPosition: yTotal / results.length
    };
  }, [results]);
  return (
    <>
      <h1>Modi Ideology</h1>
      <div>
        {!submitted && <Query handleSubmit={handleSubmit}/>}
        {submitted && <Canvas xPosition={xPosition} yPosition={yPosition}/>}
      </div>
    </>
  )
}

export default App