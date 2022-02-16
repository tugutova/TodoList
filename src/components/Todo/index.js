import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Modal, Form, Input, Button,
} from 'antd';
import * as actions from '../../store/actions/todos';

export default function Todo({ todo, deleteHandler }) {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (value) => {
    if (value) {
      dispatch(actions.editTodo());
      try {
        const { id } = todo;
        const newPayload = { ...value, id };
        console.log(newPayload);
        dispatch(actions.editTodoSuccess(newPayload));
      } catch (e) {
        dispatch(actions.createTodoError(e));
      }
      handleCancel();
    }
  };

  return (
    <>
      <Modal
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={[]}
      >
        <h2>Редактирование todo</h2>
        <br />
        <div>
          <Form
            onFinish={onFinish}
            initialValues={{
              title: todo.title,
            }}
          >
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Введите значение!',
                },
              ]}
            >
              <Input placeholder={todo.title} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Сохранить данные
              </Button>
              {' '}
              <Button type="default" onClick={handleCancel} className="login-form-button">
                Отмена
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <p>{todo.title}</p>
      <p>{String(todo.id)}</p>
      <Button
        type="primary"
        onClick={() => deleteHandler(todo.id)}
      >
        Удалить
      </Button>
      {' '}
      <Button
        type="primary"
        onClick={() => showModal(todo.id)}
      >
        Редактировать
      </Button>
      <hr />
    </>
  );
}
