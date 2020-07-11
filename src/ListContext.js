import React from "react";

export const ListContext = React.createContext({
  todos: [],
  completeToDo: () => {},
});
