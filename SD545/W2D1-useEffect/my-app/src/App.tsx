import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const forLoop = () => {
    for (let i = 0; i > 100; i++) {
      console.log("this is " + i);
      return "this is " + i;
    }
  };
  return (
    <div className="App">
      {count}
      {forLoop()}
      <button onClick={() => setCount(count + 1)}>+1 {forLoop()}</button>
    </div>
  );
}

export default App;
