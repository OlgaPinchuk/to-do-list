import { reducer } from './reducer';
import { toggleTheme, showCompleted } from './actionTypes';

describe('reducer tests', () => {
  test('returns state by default', () => {
    const state = { todos: [] };

    let result = reducer(state, {});
    expect(result).toBe(state); // assert

    result = reducer(state, { type: '' });
    expect(result).toBe(state); // assert

    result = reducer(state, { type: 'UNKNOWN' });
    expect(result).toBe(state); // assert
  });

  describe('completedShown tests', () => {
    for (const { initial, expected } of [
      { initial: false, expected: true },
      { initial: true, expected: false },
    ]) {
      test(`turns completedShown to ${expected}`, () => {
        const state = { completedShown: initial };
        const action = showCompleted(expected);

        const result = reducer(state, action);

        expect(result.completedShown).toBe(expected);
      })
    }

    test('ignores setting completedShown into the same value', () => {
      const state = { completedShown: true };
      const action = showCompleted(true);
      const result = reducer(state, action);

      expect(result).toBe(state);
    });
  });

  describe('theme tests', () => {
    test('preserves state during theme switch', () => {
      const todo = { id: 1 };
      const state = {
        theme: 'light',
        todos: [todo],
        completedShown: true,
      };
      const action = toggleTheme();

      const result = reducer(state, action);

      expect(result.todos).not.toBeFalsy();
      expect(result.todos.length).toBe(1);
      expect(result.todos[0]).toBe(todo);

      expect(result.completedShown).toBe(true);
    });

    test('changes theme to dark from light', () => {
      const state = { theme: 'light' };
      const action = toggleTheme();

      let result = reducer(state, action);
      expect(result.theme).toBe('dark');
    });

    test('changes theme to light from dark', () => {
      const state = { theme: 'dark' };
      const action = toggleTheme();

      let result = reducer(state, action);
      expect(result.theme).toBe('light');
    });

    test('should always return new object', () => {
      const state = {};
      const action = toggleTheme();

      const result = reducer(state, action);

      expect(result).not.toBe(state);
    });
  });
});
