import reducer from "./reducer";
import { toggleTheme } from "./actionTypes";

describe("theme tests", () => {
  test("changes theme to dark from light", () => {
    const state = "light";
    const action = toggleTheme();

    let result = reducer(state, action);
    expect(result).toBe("dark");
  });

  test("changes theme to light from dark", () => {
    const state = "dark";
    const action = toggleTheme();

    let result = reducer(state, action);
    expect(result).toBe("light");
  });
});
