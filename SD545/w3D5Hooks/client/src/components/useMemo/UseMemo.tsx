import React, { useMemo, useState } from "react";

function expensive(num: number) {
  for (let i = 0; i < 10000; i++) {
    num += i;
  }
  console.log("calling expensive function...");
  return num;
}
export default function UseMemoComponent() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState(["tedd", "bin"]);

  const handleName = () => {
    setNames([...names, "newName"]);
  };

  const result = useMemo(() => expensive(count), [count]);

  return (
    <div>
      number:{result}
      count: {count}
      <button
        onClick={() => {
          setCount((priv) => priv + 2);
        }}
      >
        ADD
      </button>
      <ul>
        name:
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={handleName}> addNames</button>
    </div>
  );
}
