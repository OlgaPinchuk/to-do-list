import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = `${todos.length} items in list`;
    console.log(`${todos.length} items to do`);
  }, [todos.length]);

  const saveTodo = useCallback((todoItem) => {
    setTodos((stateTodos) => {
      const newTodos = [todoItem, ...stateTodos];
      return newTodos;
    });
  }, []);

  const completeTodo = useCallback((todoId) => {
    setTodos((stateTodos) => {
      const newTodoIndex = stateTodos.findIndex((item) => item.id === todoId);

      if (newTodoIndex !== -1) {
        const newTodos = [...stateTodos];
        newTodos[newTodoIndex] = { ...newTodos[newTodoIndex], complete: true };
        return newTodos;
      }

      return stateTodos;
    });
  }, []);

  return (
    <>
      <Header saveTodo={saveTodo} />
      <ToDoList todos={todos} completeTodo={completeTodo} />
    </>
  );
}

export default App;
