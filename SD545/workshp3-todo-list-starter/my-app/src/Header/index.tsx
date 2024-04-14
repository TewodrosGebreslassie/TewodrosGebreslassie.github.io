export default function Header() {

  const addTodo = (e:KeyboardEvent<HTMLInputElement>=>{
    const value= e.current.target.
  }
  return (
    <div className="todo-header">
      <input type="text" placeholder="Enter task name"  onKeyDown={addTodo}/>
    </div>
  );
}
