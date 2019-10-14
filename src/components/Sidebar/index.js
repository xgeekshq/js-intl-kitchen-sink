import React from 'react';
import { Layout } from 'antd';
import styles from './styles.module.css';
import MainMenu from '../MainMenu';

const { Sider: SiderAntd } = Layout;

const Sidebar = () => {
  return (
    <SiderAntd className={styles.sider}>
      <div className={styles.logo}>
        <img
          src="http://www.xgeeks.io/assets/xgeeks_logo_white.svg"
          alt="logo"
        />
        <p>Open Source</p>
      </div>
      <MainMenu />
    </SiderAntd>
  );
};

export default Sidebar;
