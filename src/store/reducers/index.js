import { combineReducers } from 'redux';
import todosReducer from './todos';

const reducersMap = {
  todos: todosReducer,
};

const rootReducer = combineReducers(reducersMap);

export default rootReducer;
