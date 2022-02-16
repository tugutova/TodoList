import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
  todos: {
    loading: false,
    error: null,
    data: [],
  },
};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware()));

export default store;
