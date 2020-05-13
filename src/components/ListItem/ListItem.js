import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../common/Checkbox/Checkbox";

const ListItem = ({ item: { id, complete, text }, completeTodo }) => (
  <div className="list-item" onClick={() => completeTodo(id)}>
    <Checkbox
      name="select-done"
      id={id}
      className="done-checkbox"
      disabled={complete}
      initialIsChecked={complete}
    />
    <label htmlFor={id} className="done-checkbox-label" data-content={text}>
      {text}
    </label>
  </div>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    complete: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }).isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default ListItem;
