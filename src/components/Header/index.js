import React from 'react';
import { Layout, PageHeader } from 'antd';
import styles from './styles.module.css';
import { Icon } from 'antd';

const { Header: HeaderAntd } = Layout;

const Header = () => {
  return (
    <HeaderAntd className={styles.header}>
      <PageHeader title="JS Intl Kitchen Sink" subTitle="Home" />
      <a
        href="https://twitter.com/xgeeksio"
        rel="noopener noreferrer"
        target="_black"
        className={styles.twitterFollow}
      >
        <Icon
          type="twitter"
          href="https://twitter.com/xgeeksio"
          style={{
            padding: '10px',
            fontSize: '1.5rem',
            color: '#fff',
            cursor: 'pointer',
          }}
        />
      </a>
    </HeaderAntd>
  );
};

export default Header;
