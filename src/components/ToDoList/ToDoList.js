import React from "react";
import PropTypes from "prop-types";
import "./ToDoList.css";

const ToDoList = ({ todos }) => {
  return (
    <ol className="task-list">
      {todos.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ol>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default ToDoList;
