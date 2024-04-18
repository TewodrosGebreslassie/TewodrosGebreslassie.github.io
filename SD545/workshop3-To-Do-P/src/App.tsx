import React, { useEffect, useState } from "react";

import "./App.css";
import List from "./List/List";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ToDo from "./Types";
// import axios from "axios";

export default function App() {
  // const [todos, setTodos] = useState<ToDo>();

  useEffect(() => {
    async function getList() {
      try {
        const response = await fetch("http://localhost:3004/todos");
        const data = await response.json();
        console.log(data.data);
        console.log("data");
      } catch (e) {
        console.log("error ___________", e);
      }
    }
    getList();
  }, []);

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
