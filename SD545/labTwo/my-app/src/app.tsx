import React, { useState, ChangeEvent } from "react";

import "./App.css";
// 1. Create a simple React component called Counter that displays a counter value initialized to 0.
//Include two buttons: one for incrementing the counter  and another for decrementing it.
//Use useState to manage the counter state.
function Counter() {
  let [count, setcount] = useState<number>(0);
  const incriment = () => {
    setcount(++count);
  };
  const decriment = () => {
    setcount(--count);
  };
  return (
    <div className="App">
      <h2>Incrementing counter and Decrementing counter</h2>
      {count}
      <div>
        <button style={{ backgroundColor: "blue", fontSize: "20px", color: "white" }} onClick={incriment}>
          incriment
        </button>
      </div>

      <div>
        <button style={{ backgroundColor: "yellow", fontSize: "20px" }} onClick={decriment}>
          decriment
        </button>
      </div>
    </div>
  );
}

// 2. Create a temperature converter component that allows users to enter a temperature in
// Celsius and converts it to Fahrenheit when a button is clicked.
//Use useState to manage the temperature input and output.

function TempConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCelsius(parseInt(e.target.value));
  };

  const convertToFahrenheit = (e: ChangeEvent<HTMLInputElement>) => {
    const celsiusValue = parseFloat(e.target.value);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue);
    }
  };

  //   const handlefahrenheitChange = (e:ChangeEvent<HTMLInputElement>) => {
  //     setCelsius(e.target.value);
  //   };
  //   const converterToCelius=()=>{
  //     const fahrenheitvalue =parseFloat(fahrenheit)
  //   }
  return (
    <div>
      <h2>Temperature Converter</h2>
      <label>
        Celsius:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      {fahrenheit && (
        <div>
          <label>
            Fahrenheit:
            <input type="number" value={fahrenheit} readOnly />
          </label>
        </div>
      )}
    </div>
  );
}

// 3. Build a component that generates a random number between
// 1 and 100 when a button is clicked. Display the generated number using useState.

function RandomNumGenerator() {
  const [randomNum, setRandomNum] = useState<number | null>(null);

  const generateRandomNum = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNum(random);
  };

  return (
    <div>
      <h2> generates a random number between 1 and 100 </h2>
      <button onClick={generateRandomNum}>Generate Random Number</button>
      {randomNum !== null && <div>Generated Number: {randomNum}</div>}
    </div>
  );
}

export { RandomNumGenerator, Counter, TempConverter };
