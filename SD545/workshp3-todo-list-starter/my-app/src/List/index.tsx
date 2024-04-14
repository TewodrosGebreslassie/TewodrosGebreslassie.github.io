import Item from "../Item";
import Todo from "../types";


type Props={
  todos:Todo[]
}

export default function List(props:Props) {
  const {todos}=props;
  return (
    <div>
        <ul className="todo-main">
      {todos.map(todo=><Item key={todo.id} {...todo} ) </ul>
    </div>
  
  );
}
