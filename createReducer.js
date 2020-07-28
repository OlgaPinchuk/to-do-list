export const createReducer = (initialState, actionHandlers) => {
  return function reducer(state = initialState, action) {
    const handler = actionHandlers[action.type];

    if (!handler) {
      return state;
    }
    return handler(state, action);
  };
};
