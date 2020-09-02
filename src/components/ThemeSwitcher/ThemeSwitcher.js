import React from "react";
import PropTypes from "prop-types";
import "./ThemeSwitcher.css";
import { toggleTheme } from "../../behavior/theme";
import { connect } from "react-redux";
import { THEME_LIGHT, THEME_DARK } from "../../behavior/theme/themeConstants";

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  const themeToSwitch = theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

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
