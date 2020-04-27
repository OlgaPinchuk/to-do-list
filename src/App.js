import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const saveTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };

  return (
    <>
      <Header onFormSubmit={saveTodo} />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
