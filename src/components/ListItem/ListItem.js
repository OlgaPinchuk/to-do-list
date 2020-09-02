import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../common/Checkbox/Checkbox";
import { connect } from "react-redux";
import { completeTodo } from "../../behavior/todos";

const ListItem = ({ item: { id, completed, text }, completeTodo }) => {
  return (
    <div className="list-item" onClick={() => completeTodo(id)}>
      <Checkbox
        name="select-done"
        id={id}
        className="done-checkbox"
        disabled={completed}
        initialIsChecked={completed}
      />
      <label htmlFor={id} className="done-checkbox-label" data-content={text}>
        {text}
      </label>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default connect(null, { completeTodo })(ListItem);
