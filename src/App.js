import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  // console.log("App is rendered");
  const [todos, setTodos] = useState([]);
  // const [, setRenderCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setRenderCount((toggle) => !toggle);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

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

export default React.memo(App);
