import React from 'react';
import GithubCorner from 'react-github-corner';
import { Layout, BackTop } from 'antd';

import styles from './styles.module.css';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';

const { Content } = Layout;

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <Layout className={styles.contentLayout}>
        <Header />
        <Content className={styles.content}>
          <div className={styles.contentWrapper}>{children}</div>
        </Content>
        <Footer />
      </Layout>
      <GithubCorner
        className={styles.githubCornerWithFocus}
        bannerColor="#1790ff"
        octoColor="#e8e8e8"
        href="https://github.com/xgeekshq/js-intl-kitchen-sink"
      />
      <BackTop className={styles.backToTop} />
    </Layout>
  );
};

export default PageLayout;
