import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = (props) => {
  const { id, name, value, disabled, className, onChange, checked } = props;

  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      value={value}
      disabled={disabled}
      checked={checked}
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
