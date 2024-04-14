import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

import "./App.css";
import { useEffect, useState } from "react";
import Todo from "./types";

export default App;

function App() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  useEffect(() => {
    async function getList() {
      const res = await fetch("http://localhost:3004/todos");
      const data = await res.json();
      setTodos(data);
    }
    getList();
  }, []);
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List todos={todos} />
        <Footer />
      </div>
    </div>
  );
}
