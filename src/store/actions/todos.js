import * as types from '../types/todos';

export const createTodo = () => ({
  type: types.CREATE_TODO,
});

export const createTodoError = (payload) => ({
  type: types.CREATE_TODO_ERROR,
  payload,
  error: true,
});

export const createTodoSuccess = (payload) => ({
  type: types.CREATE_TODO_SUCCESS,
  payload,
});

export const deleteTodo = () => ({
  type: types.DELETE_TODO,
});

export const deleteTodoError = (payload) => ({
  type: types.DELETE_TODO_ERROR,
  payload,
  error: true,
});

export const deleteTodoSuccess = (payload) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload,
});

export const initTodos = () => ({
  type: types.INIT_TODOS,
});

export const initTodosError = (payload) => ({
  type: types.INIT_TODOS_ERROR,
  payload,
  error: true,
});

export const initTodosSuccess = (payload) => ({
  type: types.INIT_TODOS_SUCCESS,
  payload,
});
export const editTodo = (payload) => ({
  type: types.EDIT_TODO,
  payload,
});

export const editTodoSuccess = (payload) => ({
  type: types.EDIT_TODO_SUCCESS,
  payload,
});

export const editTodoError = (payload) => ({
  type: types.EDIT_TODO_ERROR,
  payload,
  error: true,
});
