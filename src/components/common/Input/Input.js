import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const { id, type, name, value, className, onChange, placeholder } = props;

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "submit"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
};

export default Input;