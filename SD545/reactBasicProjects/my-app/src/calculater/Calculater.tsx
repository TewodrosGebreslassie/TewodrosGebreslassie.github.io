import React, { ChangeEvent, MouseEvent, useRef, useState } from "react";

export default function Calculator() {
    const [inputNumbers, setInputNumbers] = useState({ num1: 0, num2: 0 });
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(0);

    const refInputOne = useRef<HTMLInputElement>(null);
    const refInputTwo = useRef<HTMLInputElement>(null);
 

    const addButRef = useRef<HTMLButtonElement>(null);
    const subButRef = useRef<HTMLButtonElement>(null);
    const divReff = useRef<HTMLButtonElement>(null);
    const mulReff = useRef<HTMLButtonElement>(null);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value}=e.target
        setInputNumbers({...inputNumbers,[name]:Number(value)})
    }

    const handleButton = (operation: string) => {
        if (operation === "+") {
            setOperation('+');
            setResult(inputNumbers.num1 + inputNumbers.num2);
        } else if (operation === "-") {
            setOperation('-');
            setResult(inputNumbers.num1 - inputNumbers.num2);
        }
     else if (operation === "*") {
        setOperation('*');
        setResult(inputNumbers.num1 * inputNumbers.num2);
    }
    else if (operation === "/") {
        setOperation('/');
        setResult(inputNumbers.num1 / inputNumbers.num2);
    }
    }

    return (
        <div>
            <div>
                <span>
                    <input name="num1" ref={refInputOne} type="text" onChange={handleInput} /> {operation}<input name="num2" ref={refInputTwo} type="text" onChange={handleInput} /> result: {result}
                </span>
            </div>

            <div>
                <button ref={addButRef} onClick={() => handleButton('+')}><div>+</div> Addition</button>
            </div>

            <div>
                <button ref={subButRef} onClick={() => handleButton('-')}><div>-</div> subtraction</button>
            </div>
            <div>
                <button ref={mulReff} onClick={() => handleButton('*')}> <div>*</div> Multiplication</button>
            </div>
            <div>
                <button ref={divReff} onClick={() => handleButton('/')}><div>/</div> division</button>
            </div>
        </div>
    );
}
