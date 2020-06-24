import React, { useState, useCallback, useContext } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import ThemeSwitcher from '../ThemeSwitcher';
import Input from "../common/Input/Input";
import { ThemeContext } from "../../ThemeContext";
const MemoizedInput = React.memo(Input);

const Header = ({ saveTodo }) => {
  const [todoItem, setTodoItem] = useState("");
  const { theme } = useContext(ThemeContext);

  const updateTodoItem = useCallback((e) => setTodoItem(e.target.value), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo({ text: todoItem, id: Date.now(), complete: false });
    setTodoItem("");
  };

  return (
    <header className={`header ${theme}`}>
      <h1>Your tasks</h1>
      <form className="task-input-container" onSubmit={handleSubmit}>
        <MemoizedInput
          name="task-input"
          className="task-input"
          onChange={updateTodoItem}
          value={todoItem}
          placeholder="Add new task"
        />
        <MemoizedInput
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
};

export default Header;
