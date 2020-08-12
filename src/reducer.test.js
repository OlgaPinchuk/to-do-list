import { reducer } from "./reducer";
import {
  toggleTheme,
  showCompleted,
  saveTodo,
  completeTodo,
} from "./actionTypes";

describe("reducer tests", () => {
  test("returns state by default", () => {
    const state = { todos: [] };

    let result = reducer(state, {});
    expect(result).toBe(state); // assert

    result = reducer(state, { type: "" });
    expect(result).toBe(state); // assert

    result = reducer(state, { type: "UNKNOWN" });
    expect(result).toBe(state); // assert
  });

  describe("completedShown tests", () => {
    for (const { initial, expected } of [
      { initial: false, expected: true },
      { initial: true, expected: false },
    ]) {
      test(`turns completedShown to ${expected}`, () => {
        const state = { completedShown: initial };
        const action = showCompleted(expected);

        const result = reducer(state, action);

        expect(result.completedShown).toBe(expected);
      });
    }

    test("ignores setting completedShown into the same value", () => {
      const state = { completedShown: true };
      const action = showCompleted(true);
      const result = reducer(state, action);

      expect(result).toBe(state);
    });
  });

  describe("theme tests", () => {
    test("preserves state during theme switch", () => {
      const todo = { id: 1 };
      const state = {
        theme: "light",
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

    test("changes theme to dark from light", () => {
      const state = { theme: "light" };
      const action = toggleTheme();

      let result = reducer(state, action);
      expect(result.theme).toBe("dark");
    });

    test("changes theme to light from dark", () => {
      const state = { theme: "dark" };
      const action = toggleTheme();

      let result = reducer(state, action);
      expect(result.theme).toBe("light");
    });

    test("should always return new object", () => {
      const state = {};
      const action = toggleTheme();

      const result = reducer(state, action);

      expect(result).not.toBe(state);
    });
  });

  describe("saveTodo tests", () => {
    test("return new object state", () => {
      const state = { todos: [] };
      const action = saveTodo("Todo");
      const result = reducer(state, action);

      expect(result).not.toBe(state);
    });

    test("new item is added", () => {
      const state = { todos: [] };
      const action = saveTodo("First todo");
      const expected = [{ text: "First todo", id: 1, completed: false }];
      const result = reducer(state, action);

      expect(result.todos).toEqual(expected);
    });

    test("new item is added first", () => {
      const state = {
        todos: [
          { text: "Second to do", id: 2, completed: true },
          { text: "First to do", id: 1, completed: true },
        ],
      };
      const action = saveTodo("Some to do");
      const expected = "Some to do";
      const result = reducer(state, action);

      expect(result.todos[0].text).toBe(expected);
    });

    test("existing items are preserved", () => {
      const state = {
        todos: [
          { text: "Second to do", id: 2, completed: true },
          { text: "First to do", id: 1, completed: true },
        ],
      };
      const action = saveTodo("Some to do");
      const result = reducer(state, action);
      expect(result.todos.length).toBe(3);
      expect(result.todos[2].id).toBe(1);
    });
  });

  describe("completeTodo tests", () => {
    it("updates existing todo and returns new state", () => {
      const state = {
        theme: "light",
        todos: [
          { id: 1, completed: false },
          { id: 2, completed: false },
        ],
        completedShown: true,
      };

      const action = completeTodo(1);

      const result = reducer(state, action);

      expect(result).not.toBe(state);
      expect(result.todos[1].completed).toBe(false);
      expect(result.todos[0].completed).toBe(true);
      expect(result.theme).toBe("light");
    });

    it("returns new object during update of existing todo item", () => {
      const todo = { id: 1, completed: false };
      const state = {
        todos: [todo],
      };

      const action = completeTodo(1);

      const result = reducer(state, action);

      expect(result).not.toBe(state);
      expect(result.todos[0]).not.toBe(todo);
      expect(result.todos[0].completed).toBe(true);
    });

    it("doesn't update state if todo doesn't exist", () => {
      const state = {
        todos: [{ id: 0, completed: false }],
      };

      const action = completeTodo(2);

      const result = reducer(state, action);

      expect(result).toBe(state);
    });

    it("preserves existing todos during update", () => {
      const state = {
        todos: [
          { text: "Second to do", id: 2, completed: true },
          { text: "First to do", id: 1, completed: false },
        ],
      };
      const action = completeTodo(2);
      const result = reducer(state, action);
      expect(result.todos.length).toBe(2);
      expect(result.todos[1].completed).toBeFalsy();
    });
  });
});
