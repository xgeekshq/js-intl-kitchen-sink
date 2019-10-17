import React from 'react';
import { Layout, PageHeader } from 'antd';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import { Icon } from 'antd';

const { Header: HeaderAntd } = Layout;

const Header = () => {
  const pathname = useLocation().pathname;
  const subTitle = pathname == '/' ? 'Home' : pathname.split('/')[1];
  return (
    <HeaderAntd className={styles.header}>
      <PageHeader title="JS Intl Kitchen Sink" subTitle={subTitle} />
      <a
        href="https://twitter.com/xgeeksio"
        rel="noopener noreferrer"
        target="_black"
        className={styles.twitterFollow}
      >
        <Icon
          className={styles.icon}
          type="twitter"
          href="https://twitter.com/xgeeksio"
        />
      </a>
    </HeaderAntd>
  );
};

export default Header;
