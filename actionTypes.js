export const INCREMENT = "INCREMENT";
export const increment = (counter) => ({
  type: INCREMENT,
  counter,
});

export const DECREMENT = "DECREMENT";
export const decrement = (counter) => ({
  type: DECREMENT,
  counter,
});
