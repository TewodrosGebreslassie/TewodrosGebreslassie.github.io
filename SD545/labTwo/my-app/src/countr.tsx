import React, { useState } from 'react';

import './App.css';
// 1. Create a simple React component called Counter that displays a counter value initialized to 0.
//Include two buttons: one for incrementing the counter  and another for decrementing it. 
//Use useState to manage the counter state.
function Counter() {
let [count,setcount]=useState<number>(0)
const incriment=()=>{
  setcount(++count);
}
const decriment=()=>{
  setcount(--count);
}
  return (
    <div className="App">
      <h2>Incrementing counter  and Decrementing counter</h2>
      {count}
      <div ><button style={{backgroundColor:'blue', fontSize:'20px',color: 'white'}} onClick={incriment}>incriment</button></div>
      
      <div ><button style={{backgroundColor:'yellow', fontSize:'20px'}} onClick={decriment}>decriment</button></div>

    </div>
  );
}

export default Counter;
