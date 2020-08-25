import React from "react";
import PropTypes from "prop-types";
import "./ThemeSwitcher.css";
import { toggleTheme } from "../../behavior/theme";
import { connect } from "react-redux";

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  const themeToSwitch = theme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => toggleTheme()}
      className="theme-switch-btn"
    >
      Switch theme to {themeToSwitch}
    </button>
  );
};

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default connect(({ theme }) => ({ theme }), { toggleTheme })(ThemeSwitcher);
