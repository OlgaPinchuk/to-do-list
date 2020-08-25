import React from "react";
import "./ThemeSwitcher.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../behavior/theme";

const ThemeSwitcher = () => {
  const theme = useSelector(({ theme }) => theme);
  const themeToSwitch = theme === "dark" ? "light" : "dark";
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="theme-switch-btn"
    >
      Switch theme to {themeToSwitch}
    </button>
  );
};

export default React.memo(ThemeSwitcher);
