export const INCREMENT = 'INCREMENT';
export const increment = by => ({
  type: INCREMENT,
  by,
});

export const DECREMENT = 'DECREMENT';
export const decrement = by => ({
  type: DECREMENT,
  by,
});
