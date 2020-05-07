import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = (props) => {
  const {
    id,
    name,
    disabled,
    initialIsChecked = false,
    className,
    onChanged,
  } = props;
  const [isChecked, setIsChecked] = useState(initialIsChecked);

  const onChange = ({ target: { checked } }) => {
    setIsChecked(checked);
    onChanged && onChanged(checked);
  }

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
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  disabled: false,
};

export default Checkbox;
