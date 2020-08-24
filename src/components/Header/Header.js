import React, { useState } from "react";
import "./Header.css";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Input from "../common/Input/Input";
import { saveTodo } from "../../behavior/todos";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState("");
  const theme = useSelector(({ theme }) => theme);
  const todosNumber = useSelector(({ todos }) => todos).length;

  const updateTodoItem = (e) => setTodoItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveTodo(todoItem));
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

export default Header;
