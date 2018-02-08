import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/404">404</Link>
      </Menu.Item>
      <Menu.Item key="/demo">
        <Link to="/demo">Demo</Link>
      </Menu.Item>
      <Menu.Item key="/table">
        <Link to="/table">table</Link>
      </Menu.Item>
    </Menu>
  );
}


export default Header;
