import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  console.log("App is rendered");
  const [todos, setTodos] = useState([]);
  //const [, setRenderCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setRenderCount((toggle) => !toggle);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  const saveTodo = useCallback(
    (todoItem) => {
      setTodos([todoItem, ...todos]);
    },
    [todos]
  );

  const completeTodo = useCallback((todoId) => {
    setTodos((stateTodos) => {
      console.log("stateTodos", stateTodos);
      const newTodoIndex = stateTodos.findIndex((item) => item.id === todoId);
      console.log("newTodoIndex", newTodoIndex);
      if (newTodoIndex !== -1) {
        const newTodos = [...stateTodos];
        console.log("newTodos", newTodos);
        newTodos[newTodoIndex].complete = true;
        return newTodos;
      }

      return stateTodos;
    });
  }, []);
  // const completeTodo = useCallback(
  //   (todoId) => {
  //     const newTodoIndex = todos.findIndex((item) => item.id === todoId);
  //     console.log("newTodoIndex", newTodoIndex);
  //     if (newTodoIndex !== -1) {
  //       const newTodos = [...todos];
  //       newTodos[newTodoIndex].complete = true;
  //       setTodos([...newTodos]);
  //     }
  //   },
  //   [todos]
  // );

  return (
    <>
      <Header saveTodo={saveTodo} />
      <ToDoList todos={todos} completeTodo={completeTodo} />
    </>
  );
}

export default React.memo(App);
