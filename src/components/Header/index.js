import React from 'react';
import { Layout, PageHeader } from 'antd';
import styles from './styles.module.css';

const { Header: HeaderAntd } = Layout;

const Header = () => {
  return (
    <HeaderAntd className={styles.header}>
      <PageHeader title="JS Intl Kitchen Sink" subTitle="Home" />
    </HeaderAntd>
  );
};

export default Header;
