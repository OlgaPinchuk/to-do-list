import React from 'react';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

export const ThemeContext = React.createContext({
  theme: THEME_LIGHT,
  toggleTheme: () => { },
});
