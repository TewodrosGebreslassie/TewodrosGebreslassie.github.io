import { ChangeEvent, useState } from "react";
import "./App.css";

// 2. Create a temperature converter component that allows users to enter a temperature in
// Celsius and converts it to Fahrenheit when a button is clicked.
//Use useState to manage the temperature input and output.

function TempConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    setCelsius(celsius);
  };

  const convertToFahrenheit = () => {
    const celsiusValue = parseFloat(celsius);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      setFahrenheit("");
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

export { RandomNumGenerator };
export default TempConverter;
