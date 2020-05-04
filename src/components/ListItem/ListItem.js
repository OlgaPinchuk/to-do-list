import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../common/Checkbox/Checkbox";

const ListItem = ({ id, complete, text, completeTodo }) => {
  return (
    <div className="list-item" onClick={() => completeTodo(id)}>
      <Checkbox
        name="select-done"
        id={id}
        className="done-checkbox"
        disabled={complete}
      />
      <label htmlFor={id} className="done-checkbox-label" data-content={text}>
        {text}
      </label>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default ListItem;
