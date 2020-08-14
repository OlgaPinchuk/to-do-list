import { reducer as todosReducer } from './todos'
import { reducer as themeReducer } from './theme'
import { reducer as completedShownReducer } from './completedShown'
import { combineReducers } from 'redux';

export default combineReducers({
  todos: todosReducer,
  theme: themeReducer,
  completedShown: completedShownReducer,
});
