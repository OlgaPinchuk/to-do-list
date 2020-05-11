import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";

import Input from "../common/Input/Input";

const Header = ({ saveTodo }) => {
  const [todoItem, setTodoItem] = useState({
    text: "",
  });

  const updateTodoItem = (e) => {
    setTodoItem({
      ...todoItem,
      text: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo({ ...todoItem, id: Date.now(), complete: false });
    setTodoItem({ ...todoItem, text: "" });
  };

  return (
    <header className="header">
      <h1>Your tasks</h1>
      <form className="task-input-container" onSubmit={handleSubmit}>
        <Input
          name="task-input"
          className="task-input"
          onChange={updateTodoItem}
          value={todoItem.text}
          placeholder="Add new task"
        />
        <Input
          id="submitButton"
          name="submit-btn"
          type="submit"
          className="add-btn"
          value="Add task"
          disabled={!todoItem.text}
        />
      </form>
    </header>
  );
};

Header.propTypes = {
  saveTodo: PropTypes.func.isRequired,
};

export default Header;
