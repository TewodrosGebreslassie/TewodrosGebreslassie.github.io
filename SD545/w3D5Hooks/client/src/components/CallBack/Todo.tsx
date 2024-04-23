import React, { memo } from "react";

type Props = {
  onAddtodo: () => void;
  todo: string[];
};

export default function Todo({ onAddtodo, todo }: Props) {
  return (
    <div>
      <button>
        <ul>
          {todo.map((str, index) => (
            <li key={index}>{str}</li>
          ))}
        </ul>
      </button>

      <button onClick={onAddtodo}>AddTodo</button>
    </div>
  );
}
// export default memo(Todo);
