import React, { useState } from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./ToDoList.css";
import ListItem from "../ListItem/ListItem";

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
      <div className="show-completed-wrapper">
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
      </div>
      <div className="task-list">
        <TransitionGroup>
          {itemsToShow.map(({ id, text, complete }) => (
            <CSSTransition key={id} timeout={500}>
              <ListItem
                id={id}
                complete={complete}
                text={text}
                completeTodo={completeTodo}
              />
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
