import React, { useState } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./ToDoList.css";

import Checkbox from "../common/Checkbox/Checkbox";

const ToDoList = ({ todos, completeTodo }) => {
  const [completedShown, setCompletedShown] = useState(false);

  const activeTodos = todos.filter((item) => !item.complete);
  const itemsToShow = completedShown ? todos : activeTodos;

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
        <TransitionGroup className="todo-list task-list">
          {itemsToShow.map(({ id, text, complete }) => (
            <CSSTransition key={id} timeout={500}>
              <li className="list-item" onClick={() => completeTodo(id)}>
                <Checkbox
                  name="select-done"
                  id={id}
                  className="done-checkbox"
                  disabled={complete}
                />
                <label
                  htmlFor={id}
                  className="done-checkbox-label"
                  data-content={text}
                >
                  {text}
                </label>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ol>
    </>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default ToDoList;
