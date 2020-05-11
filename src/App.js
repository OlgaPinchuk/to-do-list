import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const saveTodo = (todoItem) => {
    setTodos([todoItem, ...todos]);
  };

  const completeTodo = (todoId) => {
    const newTodoIndex = todos.findIndex((item) => item.id === todoId);
    if (newTodoIndex !== -1) {
      const newTodos = [...todos];
      newTodos[newTodoIndex].complete = true;
      setTodos([...newTodos]);
    }
  };

  return (
    <>
      <Header saveTodo={saveTodo} />
      <ToDoList todos={todos} completeTodo={completeTodo} />
    </>
  );
}

export default App;
