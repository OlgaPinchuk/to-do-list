import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";

import Input from "../common/Input/Input";

const Header = ({ saveTodo }) => {
  const [todoItem, setTodoItem] = useState("");

  const updateTodoItem = (e) => setTodoItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo({ text: todoItem, id: Date.now(), complete: false });
    setTodoItem("");
  };

  return (
    <header className="header">
      <h1>Your tasks</h1>
      <form className="task-input-container" onSubmit={handleSubmit}>
        <Input
          name="task-input"
          className="task-input"
          onChange={updateTodoItem}
          value={todoItem}
          placeholder="Add new task"
        />
        <Input
          id="submitButton"
          name="submit-btn"
          type="submit"
          className="add-btn"
          value="Add task"
          disabled={!todoItem}
        />
      </form>
    </header>
  );
};

Header.propTypes = {
  saveTodo: PropTypes.func.isRequired,
};

export default Header;
