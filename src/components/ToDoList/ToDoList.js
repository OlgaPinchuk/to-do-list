import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ToDoList.css";

import Checkbox from "../common/Checkbox/Checkbox";

const ToDoList = ({ todos, completeTodo }) => {
  const [completedShown, setCompletedShown] = useState(false);

  const activeTodos = todos.filter((item) => !item.complete);

  const showCompleted = () => {
    setCompletedShown(!completedShown);
  };

  return (
    <>
      <Checkbox
        id="showCompleted"
        name="show-completed"
        className="show-completed-checkbox"
        onChange={showCompleted}
        disabled={!todos.length}
      />
      <label htmlFor="showCompleted" className="show-completed-label">
        Show Completed Tasks
      </label>

      <ol className="task-list">
        {(completedShown ? todos : activeTodos).map((item) => (
          <li
            className="list-item"
            key={item.id}
            onClick={() => completeTodo(item.id)}
          >
            <Checkbox
              name="select-done"
              id={item.id}
              className="done-checkbox"
              disabled={item.complete}
              checked={item.complete}
            />
            <label
              htmlFor={item.id}
              className="done-checkbox-label"
              data-content={item.text}
            >
              {item.text}
            </label>
          </li>
        ))}
      </ol>
    </>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default ToDoList;
