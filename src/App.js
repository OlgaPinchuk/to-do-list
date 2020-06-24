import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import { ThemeContext, THEME_LIGHT, THEME_DARK } from './ThemeContext';

function App() {
  // console.log("App is rendered");
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(THEME_LIGHT);
  // const [, setRenderCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setRenderCount((toggle) => !toggle);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

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
    <ThemeContext.Provider value={{
      theme,
      toggleTheme: () => {
        if (theme === THEME_DARK)
          setTheme(THEME_LIGHT)
        else
          setTheme(THEME_DARK)
      }
    }}>
      <Header saveTodo={saveTodo} />
      <ToDoList todos={todos} completeTodo={completeTodo} />
    </ThemeContext.Provider>

  );
}

export default App;
