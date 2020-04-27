import React from "react";
import "./ToDoList.css";

export default ({ todos }) => {
  return (
    <ol className="task-list">
      {todos.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
};
