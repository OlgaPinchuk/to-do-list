let todoId = 0;
export const SAVE_TODO = "SAVE_TODO";
export const saveTodo = (text) => ({
  type: SAVE_TODO,
  text,
  id: todoId++,
});

export const COMPLETE_TODO = "COMPLETE_TODO";
export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id,
});
