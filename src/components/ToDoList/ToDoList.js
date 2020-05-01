import React from "react";
import PropTypes from "prop-types";
import "./ToDoList.css";
import Input from "../common/Input";

const ToDoList = ({ activeTodos, completeTodo }) => {
  return (
    <ol className="task-list">
      {activeTodos.map((item) => (
        <div
          className="list-item"
          key={item.id}
          onClick={() => completeTodo(item.id)}
        >
          <Input
            type="checkbox"
            name="select-done"
            id={item.id}
            className="done-checkbox"
          />
          <label
            htmlFor={item.id}
            className="done-checkbox-label"
            data-content={item.text}
          >
            <li>{item.text}</li>
          </label>
        </div>
      ))}
    </ol>
  );
};

ToDoList.propTypes = {
  completeTodo: PropTypes.func.isRequired,
  activeTodos: PropTypes.array.isRequired,
};

export default ToDoList;
