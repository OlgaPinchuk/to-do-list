import { todosReducer } from "../todosReducer";
import { saveTodo, completeTodo } from "../actionTypes";

describe("todosReducer tests", () => {
  test("returns state by default", () => {
    const state = [];

    let result = todosReducer(state, {});
    expect(result).toBe(state); // assert

    result = todosReducer(state, { type: "" });
    expect(result).toBe(state); // assert

    result = todosReducer(state, { type: "UNKNOWN" });
    expect(result).toBe(state); // assert
  });

  describe("saveTodo tests", () => {
    test("return new array state", () => {
      const state = [];
      const action = saveTodo("Todo");
      const result = todosReducer(state, action);

      expect(result).not.toBe(state);
    });

    test("new item is added", () => {
      const state = [];
      const action = saveTodo("First todo");
      const expected = [{ text: "First todo", id: 1, completed: false }];
      const result = todosReducer(state, action);

      expect(result).toEqual(expected);
    });

    test("new item is added first", () => {
      const state = [
        { text: "Second to do", id: 2, completed: true },
        { text: "First to do", id: 1, completed: true },
      ];
      const action = saveTodo("Some to do");
      const expected = "Some to do";
      const result = todosReducer(state, action);

      expect(result[0].text).toBe(expected);
    });

    test("existing items are preserved", () => {
      const state = [
        { text: "Second to do", id: 2, completed: true },
        { text: "First to do", id: 1, completed: true },
      ];
      const action = saveTodo("Some to do");
      const result = todosReducer(state, action);
      expect(result.length).toBe(3);
      expect(result[2].id).toBe(1);
    });
  });

  describe("completeTodo tests", () => {
    it("updates existing todo and returns new state", () => {
      const state = [
        { id: 1, completed: false },
        { id: 2, completed: false },
      ];

      const action = completeTodo(1);

      const result = todosReducer(state, action);

      expect(result).not.toBe(state);
      expect(result[1].completed).toBeFalsy();
      expect(result[0].completed).toBeTruthy();
    });

    it("returns new object during update of existing todo item", () => {
      const todo = { id: 1, completed: false };
      const state = [todo];

      const action = completeTodo(1);

      const result = todosReducer(state, action);

      expect(result).not.toBe(state);
      expect(result[0]).not.toBe(todo);
      expect(result[0].completed).toBeTruthy();
    });

    it("doesn't update state if todo doesn't exist", () => {
      const state = [{ id: 0, completed: false }];

      const action = completeTodo(2);

      const result = todosReducer(state, action);

      expect(result).toBe(state);
    });

    it("preserves existing todos during update", () => {
      const state = [
        { text: "Second to do", id: 2, completed: true },
        { text: "First to do", id: 1, completed: false },
      ];
      const action = completeTodo(2);
      const result = todosReducer(state, action);
      expect(result.length).toBe(2);
      expect(result[1].completed).toBeFalsy();
    });
  });
});
