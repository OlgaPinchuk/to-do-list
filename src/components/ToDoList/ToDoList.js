import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./ToDoList.css";
import ListItem from "../ListItem/ListItem";
import Checkbox from "../common/Checkbox/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { showCompleted } from '../../behavior/completedShown';

const ToDoList = () => {
  const todos = useSelector(({ todos }) => todos);
  const completedShown = useSelector(({ completedShown }) => completedShown);
  const dispatch = useDispatch();

  const itemsToShow = completedShown
    ? todos
    : todos.filter((item) => !item.completed);

  const clickHandler = (checked) => {
    dispatch(showCompleted(checked));
  };

  return (
    <>
      <div className="show-completed-wrapper">
        <Checkbox
          id="showCompleted"
          name="show-completed"
          className="show-completed-checkbox"
          initialIsChecked={completedShown}
          onChanged={clickHandler}
        />
        <label htmlFor="showCompleted" className="show-completed-label">
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

export default ToDoList;
