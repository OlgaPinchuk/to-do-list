import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ saveTodo }) => {
  const [todoItem, setTodoItem] = useState({
    text: "",
    id: "",
    complete: false,
  });

  const updateTodoItem = (e) => {
    setTodoItem({
      ...todoItem,
      text: e.target.value,
      id: Date.now(),
      complete: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(todoItem);
    setTodoItem({ ...todoItem, text: "", id: "", complete: false });
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

Header.propTypes = {
  saveTodo: PropTypes.func.isRequired,
};

export default Header;
