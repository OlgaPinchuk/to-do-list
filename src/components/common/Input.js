import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = (props) => {
  const { id, type, name, value, className } = props;

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      className={className}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  type: PropTypes.oneOf([
    "text",
    "password",
    "submit",
    "checkbox",
    "radio",
    "file",
    "hidden",
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  type: "text",
};

export default Input;
