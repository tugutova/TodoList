import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { List, Typography } from 'antd';
import * as actions from '../../store/actions/todos';
import Todo from '../Todo';

const todosSelector = (state) => state.todos;

export default function TodoList() {
  const { data: todos } = useSelector(todosSelector);
  const dispatch = useDispatch();

  const onDeleteTodo = async (todoId) => {
    dispatch(actions.deleteTodo());
    try {
      dispatch(actions.deleteTodoSuccess(todoId));
    } catch (e) {
      dispatch(actions.deleteTodoError(e));
    }
  };

  useEffect(() => {
    dispatch(actions.initTodos());
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => dispatch(actions.initTodosSuccess({ data: res.data })))
      .catch((err) => dispatch(actions.initTodosError(err)));
  }, [dispatch]);

  if (todos.length === 0) {
    return <div>Извините todo нет, создайте новый</div>;
  }
  const todoItems = todos.map((todo) => (
    <Todo
      key={String(todo.id)}
      todo={todo}
      deleteHandler={onDeleteTodo}
    />
  ));

  return (
    <div>
      <List
        bordered
        dataSource={todoItems}
        pagination
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark />
            {' '}
            {item}
          </List.Item>
        )}
      />
    </div>
  );
}
