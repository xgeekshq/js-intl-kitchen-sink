import React from 'react';
import { Layout, Card } from 'antd';

import styles from './styles.module.css';

import MainMenu from '../MainMenu';
import Ads from '../ads';

const { Sider: SiderAntd } = Layout;

const Sidebar = () => {
  return (
    <SiderAntd className={styles.sider}>
      <div className={styles.siderChildren}>
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
        <div>
          <br />
          <Card style={{ margin: 10 }} bodyStyle={{ padding: 0 }}>
            <div style={{ padding: 10 }}>
              <h4>Something not working?</h4>
              <a href="https://github.com/xgeekshq/js-intl-kitchen-sink/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%3A+">
                Let us know
              </a>
            </div>
          </Card>
          <br />
          <Ads />
        </div>
      </div>
    </SiderAntd>
  );
};

export default Sidebar;
