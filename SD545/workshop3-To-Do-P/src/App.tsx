import React, { useEffect, useState } from "react";

import "./App.css";
import List from "./List/List";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ToDo from "./Types";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState<ToDo>();

  useEffect(() => {
    async function getTodo() {
      const respons: ToDo = await axios("http://localhost:9000/todos");
      console.log(respons);
      setTodos(respons);
    }
    getTodo();
  }, [todos]);

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List />

        <Footer />
      </div>
    </div>
  );
}
