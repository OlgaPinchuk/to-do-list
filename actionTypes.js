export const INCREMENT = "INCREMENT";
export const increment = (counter = 1) => ({
  type: INCREMENT,
  counter,
});

export const DECREMENT = "DECREMENT";
export const decrement = (counter = 1) => ({
  type: DECREMENT,
  counter,
});
