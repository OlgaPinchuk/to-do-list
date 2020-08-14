import reducer from "./reducer";
import { showCompleted, } from "./actions";

describe("reducer tests", () => {
  for (const { initial, expected } of [
    { initial: false, expected: true },
    { initial: true, expected: false },
  ]) {
    test(`turns completedShown to ${expected}`, () => {
      const state = initial;
      const action = showCompleted(expected);

      const result = reducer(state, action);

      expect(result).toBe(expected);
    });
  }

  test("ignores setting completedShown into the same value", () => {
    const state = true;
    const action = showCompleted(true);
    const result = reducer(state, action);

    expect(result).toBe(state);
  });
});
