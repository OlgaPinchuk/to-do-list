import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Input from "../common/Input/Input";
import { saveTodo } from "../../behavior/todos";
import { connect } from "react-redux";

const Header = ({ saveTodo, theme, todosNumber }) => {
  const [todoItem, setTodoItem] = useState("");

  const updateTodoItem = (e) => setTodoItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(todoItem);
    setTodoItem("");
  };

  return (
    <header className={`header ${theme}`}>
      <h1>Your tasks</h1>
      <form className="task-input-container" onSubmit={handleSubmit}>
        <Input
          name="task-input"
          className="task-input"
          onChange={updateTodoItem}
          value={todoItem}
          placeholder={`Add new task (total: ${todosNumber})`}
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
      <ThemeSwitcher />
    </header>
  );
};

Header.propTypes = {
  saveTodo: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  todosNumber: PropTypes.array.isRequired,
};

export default connect(
  ({ theme, todos }) => ({ theme, todosNumber: todos.length }),
  { saveTodo }
)(Header);
