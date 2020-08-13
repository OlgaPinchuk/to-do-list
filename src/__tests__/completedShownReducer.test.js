import { completedShownReducer } from "../completedShownReducer";
import {
  showCompleted,
} from "../actionTypes";

describe("completedShownReducer tests", () => {
    for (const { initial, expected } of [
      { initial: false, expected: true },
      { initial: true, expected: false },
    ]) {
      test(`turns completedShown to ${expected}`, () => {
        const state = initial;
        const action = showCompleted(expected);

        const result = completedShownReducer(state, action);

        expect(result).toBe(expected);
      });
    }

    test("ignores setting completedShown into the same value", () => {
      const state = true;
      const action = showCompleted(true);
      const result = completedShownReducer(state, action);

      expect(result).toBe(state);
    });
  });
