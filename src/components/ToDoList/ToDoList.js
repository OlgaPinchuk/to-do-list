import React from "react";
import "./ToDoList.css";

export default ({ todos }) => {
  return (
    <ol className="task-list">
      {todos.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ol>
  );
};
