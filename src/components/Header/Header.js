import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";

import Input from "../common/Input/Input";

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
