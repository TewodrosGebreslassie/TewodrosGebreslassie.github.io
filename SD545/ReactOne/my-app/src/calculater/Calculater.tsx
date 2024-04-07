import React, { useRef, useState } from "react";

export default function Calculater() {
    const [sum, setsum] = useState(0);
   

    const num1 = useRef<HTMLInputElement>(null);
    const num2 = useRef<HTMLInputElement>(null);


    return (
        <div>
            <input ref={num1} type="text" />
            <input ref={num2} type="text" />
            <button onClick={}>Add</button>
            <span>{numOne}+{numTwo} = {numOne + numTwo}</span>
            <p>{numOne}</p>
        </div>
    );
}
