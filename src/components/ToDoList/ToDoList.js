import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./ToDoList.css";
import ListItem from "../ListItem/ListItem";
import Checkbox from "../common/Checkbox/Checkbox";
import { connect } from "react-redux";
import { showCompleted } from '../../behavior/completedShown';

const ToDoList = ({todos, completedShown, showCompleted}) => {

  const itemsToShow = completedShown
    ? todos
    : todos.filter((item) => !item.completed);

  const clickHandler = (checked) => {
    showCompleted(checked);
  };

  return (
    <>
      <div className="show-completed-wrapper">
        <Checkbox
          id="showCompletedItems"
          name="show-completed"
          className="show-completed-checkbox"
          initialIsChecked={completedShown}
          onChanged={clickHandler}
        />
        <label htmlFor="showCompletedItems" className="show-completed-label">
          Show Completed Tasks
        </label>
      </div>
      <div className="task-list">
        <TransitionGroup>
          {itemsToShow.map((item) => (
            <CSSTransition key={item.id} timeout={300}>
              <ListItem item={item} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
  completedShown: PropTypes.bool.isRequired,
  showCompleted: PropTypes.func.isRequired,
};

export default connect(({todos, completedShown}) => ({todos, completedShown}), {showCompleted})(ToDoList);
