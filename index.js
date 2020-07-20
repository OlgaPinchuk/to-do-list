import { createStore } from 'redux';
import { increment, decrement } from './src/actions';
import { reducer } from './src/reducer';

const store = createStore(reducer);

console.log(store);
console.log(store.getState());

store.dispatch(increment(50))
console.log(store.getState());

store.dispatch(decrement(100))
console.log(store.getState());

store.dispatch({ type: 'UNKNOWN' })
console.log(store.getState());