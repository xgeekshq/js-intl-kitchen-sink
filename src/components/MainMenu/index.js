import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Ads from '../ads';

const MainMenu = () => {
  return (
    <Menu id="mainmenu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/">
          <Icon type="home" />
          <span className="nav-text">Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/DateTimeFormat">
          <span className="nav-text">DateTimeFormat</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/NumberFormat">
          <span className="nav-text">NumberFormat</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/Collator">
          <span className="nav-text">Collator</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/PluralRules">
          <span className="nav-text">PluralRules</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/RelativeTimeFormat">
          <span className="nav-text">RelativeTimeFormat</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link to="/getCanonicalLocales">
          <span className="nav-text">getCanonicalLocales</span>
        </Link>
      </Menu.Item>
      <Ads />
    </Menu>
  );
};

export default MainMenu;
