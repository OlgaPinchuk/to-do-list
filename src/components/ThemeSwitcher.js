import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      Current theme is: {theme}
      <div>
        <button onClick={toggleTheme}>
          Change theme
        </button>
      </div>
    </div>
  )
}

export default ThemeSwitcher;
