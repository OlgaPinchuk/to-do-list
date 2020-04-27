import React, { useState } from "react";
import "./Header.css";

export default ({ onFormSubmit }) => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(todoValue);
    setTodoValue("");
  };

  return (
    <header className="header">
      <h1>Your tasks</h1>
      <form className="task-input-container" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          placeholder="Add new task"
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <button className="add-btn" disabled={!todoValue}>
          Add task
        </button>
      </form>
    </header>
  );
};
