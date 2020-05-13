import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    id,
    type = "text",
    name,
    value,
    className,
    onChange,
    placeholder,
    disabled,
  } = props;

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      className={className}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "submit"]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
