import React from 'react';
import { Layout, PageHeader } from 'antd';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';

const { Header: HeaderAntd } = Layout;

const Header = () => {
  const pathname = useLocation().pathname;
  const subTitle = pathname == '/' ? 'Home' : pathname.split('/')[1];
  return (
    <HeaderAntd className={styles.header}>
      <PageHeader title="JS Intl Kitchen Sink" subTitle={subTitle} />
    </HeaderAntd>
  );
};

export default Header;
