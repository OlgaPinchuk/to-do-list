import React, { useState } from "react";
import "./Header.css";

export default ({ onFormSubmit }) => {
  const [todoItem, setTodoItem] = useState({
    text: "",
    id: "",
  });

  const updateTodoItem = (e) => {
    setTodoItem({
      ...todoItem,
      text: e.target.value,
      id: Date.now(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(todoItem);
    setTodoItem({ ...todoItem, text: "", id: "" });
  };

  return (
    <header className="header">
      <h1>Your tasks</h1>
      <form className="task-input-container" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          placeholder="Add new task"
          onChange={updateTodoItem}
          value={todoItem.text}
        />
        <button className="add-btn" disabled={!todoItem.text}>
          Add task
        </button>
      </form>
    </header>
  );
};
