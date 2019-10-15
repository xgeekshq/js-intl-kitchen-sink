import React from 'react';
import { Menu, Icon } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const MainMenu = () => {
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home" />
          <span className="nav-text">Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/DateTimeFormat">
        <Link to="/DateTimeFormat">
          <span className="nav-text">DateTimeFormat</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/NumberFormat">
        <Link to="/NumberFormat">
          <span className="nav-text">NumberFormat</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/Collator">
        <Link to="/Collator">
          <span className="nav-text">Collator</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/PluralRules">
        <Link to="/PluralRules">
          <span className="nav-text">PluralRules</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/RelativeTimeFormat">
        <Link to="/RelativeTimeFormat">
          <span className="nav-text">RelativeTimeFormat</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/getCanonicalLocales">
        <Link to="/getCanonicalLocales">
          <span className="nav-text">getCanonicalLocales</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
