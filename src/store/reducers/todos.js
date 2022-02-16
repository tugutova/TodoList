import * as types from '../types/todos';

export default function todosReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_TODO:
    case types.DELETE_TODO:
    case types.INIT_TODOS: {
      const newState = { ...state };
      newState.loading = true;
      newState.error = null;
      return newState;
    }

    case types.CREATE_TODO_SUCCESS: {
      console.log(payload);
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.data = [...newState.data, payload.todoData];
      return newState;
    }

    case types.CREATE_TODO_ERROR:
    case types.DELETE_TODO_ERROR:
    case types.INIT_TODOS_ERROR: {
      const newState = { ...state };
      newState.loading = false; // загрузка заканчивается
      newState.error = payload;
      return newState;
    }

    case types.DELETE_TODO_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.data = newState.data.filter((todo) => todo.id !== payload);
      return newState;
    }

    case types.INIT_TODOS_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.data = payload.data; // массив новых todo
      return newState;
    }

    case types.EDIT_TODO: {
      const newState = { ...state };
      newState.loading = true;
      newState.error = null;
      return newState;
    }

    case types.EDIT_TODO_ERROR: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = payload;
      return newState;
    }

    case types.EDIT_TODO_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.data = newState.data.map((todo) => {
        // eslint-disable-next-line no-param-reassign
        if (todo.id === payload.id) todo.title = payload.title;
        return todo;
      });
      return newState;
    }

    default: {
      return state;
    }
  }
}
