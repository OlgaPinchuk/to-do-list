import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  let activeTodos = todos.filter((item) => !item.complete);

  const saveTodo = (todoItem) => {
    setTodos([...todos, todoItem]);
  };

  const completeTodo = (todoId) => {
    const newTodos = [...todos];
    const newTodoIndex = newTodos.findIndex((item) => item.id === todoId);
    newTodos[newTodoIndex].complete = true;
    setTodos([...newTodos]);
  };

  return (
    <>
      <Header saveTodo={saveTodo} />
      <ToDoList activeTodos={activeTodos} completeTodo={completeTodo} />
    </>
  );
}

export default App;
