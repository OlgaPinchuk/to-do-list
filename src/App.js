import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const saveTodo = (todoItem) => {
    setTodos([...todos, todoItem]);
  };

  return (
    <>
      <Header onFormSubmit={saveTodo} />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
