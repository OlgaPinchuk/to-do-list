import React, { useState } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./ToDoList.css";
import ListItem from "../ListItem/ListItem";

import Checkbox from "../common/Checkbox/Checkbox";

const ToDoList = ({ todos, completeTodo }) => {
  const [completedShown, setCompletedShown] = useState(false);

  const itemsToShow = completedShown
    ? todos
    : todos.filter((item) => !item.complete);

  const showCompleted = (checked) => {
    setCompletedShown(checked);
  };

  return (
    <>
      <div className="show-completed-wrapper">
        <Checkbox
          id="showCompleted"
          name="show-completed"
          className="show-completed-checkbox"
          initialIsChecked={completedShown}
          onChanged={showCompleted}
        />
        <label htmlFor="showCompleted" className="show-completed-label">
          Show Completed Tasks
        </label>
      </div>
      <div className="task-list">
        <TransitionGroup>
          {itemsToShow.map((item) => (
            <CSSTransition key={item.id} timeout={300}>
              <ListItem item={item} completeTodo={completeTodo} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default ToDoList;
