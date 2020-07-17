import { createStore } from 'redux';

const store = createStore(state => state);

console.log(store);
console.log(store.getState());
store.dispatch({ type: 'TEST' })
console.log(store.getState());
