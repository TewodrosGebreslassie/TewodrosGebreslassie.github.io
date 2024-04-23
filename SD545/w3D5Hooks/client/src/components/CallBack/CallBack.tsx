import React, { useCallback, useState } from "react";
import Todo from "./Todo";

export default function CallBack() {
  const [count, setCount] = useState(0);
  const [todos, setTodo] = useState<string[]>([]);

  const todoHandler = useCallback(
    () => () => {
      console.log("insid todo handler");
      setTodo([...todos, "NewTodo"]);
    },
    [todos]
  );

  return (
    <div>
      <p>count: {count}</p>
      todo:{todos}
      <p>
        <button onClick={() => setCount((priv) => priv + 1)}>+1</button>
      </p>
      <Todo todo={todos} onAddtodo={todoHandler} />
    </div>
  );
}
