import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import ToDoList from "../ToDoList/ToDoList";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../behavior/rootReducer';

const store = createStore(rootReducer);

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
    <Provider store={store}>
      <Header saveTodo={saveTodo} />
      <ToDoList todos={todos} completeTodo={completeTodo} />
    </Provider>
  );
}

export default App;
