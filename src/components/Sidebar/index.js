import React from 'react';
import { Layout } from 'antd';

import styles from './styles.module.css';

import MainMenu from '../MainMenu';
import Ads from '../ads';

const { Sider: SiderAntd } = Layout;

const Sidebar = () => {
  return (
    <SiderAntd className={styles.sider}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div>
          <div className={styles.logo}>
            <img
              src="http://www.xgeeks.io/assets/xgeeks_logo_white.svg"
              alt="logo"
            />
            <p>Open Source</p>
          </div>
          <MainMenu />
        </div>
        <Ads />
      </div>
    </SiderAntd>
  );
};

export default Sidebar;
