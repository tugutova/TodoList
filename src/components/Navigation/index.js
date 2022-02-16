import { Outlet, NavLink } from 'react-router-dom';
import { Space, Row, Col } from 'antd';

export default function Navigation() {
  return (
    <>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '0.5rem',
          paddingTop: '0.5rem',
          backgroundColor: 'WhiteSmoke',
          fontSize: '20px',
        }}
      >
        <Row justify="center">
          <Col span={8} offset={2}>
            <Space direction="horizontal" align="center" size="large">
              <img src="/todoList.png" alt="logo" className="logo" width="100px" />

              <NavLink to="/">Главная</NavLink>

              <NavLink to="/todolist">TodoList</NavLink>

            </Space>
          </Col>
        </Row>
      </nav>
      <Outlet />
    </>
  );
}
