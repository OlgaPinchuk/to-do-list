import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = (props) => {
  const {
    id,
    name,
    disabled = false,
    initialIsChecked = false,
    className,
    onChanged,
  } = props;

  const [isChecked, setIsChecked] = useState(initialIsChecked);

  const onChange = ({ target: { checked } }) => {
    setIsChecked(checked);
    onChanged && onChanged(checked);
  };

  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      disabled={disabled}
      checked={isChecked}
      className={`default ${className}`}
      onChange={onChange}
    />
  );
};

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  initialIsChecked: PropTypes.bool,
  className: PropTypes.string,
  onChanged: PropTypes.func,
};

export default Checkbox;
