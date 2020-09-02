import reducer from "./reducer";
import { toggleTheme } from "./actionTypes";
import { THEME_LIGHT, THEME_DARK } from "./themeConstants";


describe("theme tests", () => {
  test("changes theme to dark from light", () => {
    const state = THEME_LIGHT;
    const action = toggleTheme();

    let result = reducer(state, action);
    expect(result).toBe(THEME_DARK);
  });

  test("changes theme to light from dark", () => {
    const state = THEME_DARK;
    const action = toggleTheme();

    let result = reducer(state, action);
    expect(result).toBe(THEME_LIGHT);
  });
});
