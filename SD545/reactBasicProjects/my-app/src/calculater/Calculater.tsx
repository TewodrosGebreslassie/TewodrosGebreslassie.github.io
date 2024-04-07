import React, { useRef, useState } from "react";
export default function Calculater(){
    const [numOne, setNUmOne]= useState(0);
    const [numTwo, SetNumTwo]= useState(0);

    

    const num1= useRef<HTMLInputElement>(null)
    const num2= useRef<HTMLInputElement>(null)
if(parseFloat(num1.current!.value)>0 && parseFloat(num2.current!.value)>0){

const handleValue=()=>{
    setNUmOne(parseFloat(num1.current!.value));
    SetNumTwo(parseFloat(num1.current!?.value))
}
// const result=num1+num2;
    return (<div>
 

        <span>{numOne} {numTwo}</span>
        <input ref={num1} type="text" />
        <input ref={num2} type="text" />

        <button onClick={handleValue} >addMe</button>
        <p>result:{numOne+numTwo}</p>
    </div>)
}
}