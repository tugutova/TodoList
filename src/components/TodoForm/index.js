import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/todos';

const initialState = {
  title: '',
  id: nanoid(),
};

export default function TodoForm() {
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();

  const onCreateTodo = async (todoData) => {
    dispatch(actions.createTodo());
    try {
      console.log(todoData);
      dispatch(actions.createTodoSuccess({ todoData }));
    } catch (e) {
      dispatch(actions.createTodoError(e));
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onCreateTodo(formState);
    setFormState(initialState);
  };

  const onChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <br />
        <input
          className="inputForm"
          type="text"
          name="title"
          value={formState.title}
          onChange={onChange}
        />
        {' '}
        <button type="submit" className="buttonForm">Создать</button>
      </form>
      <br />
      <hr />

    </>
  );
}
