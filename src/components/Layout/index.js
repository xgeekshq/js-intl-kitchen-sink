import React from 'react';
import GithubCorner from 'react-github-corner';
import { Layout, Menu, Icon, PageHeader } from 'antd';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const { Header, Footer, Content, Sider } = Layout;

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Sider className={styles.sider}>
        <div className={styles.logo}>
          <img
            src="http://www.xgeeks.io/assets/xgeeks_logo_white.svg"
            alt="logo"
          />
          <p>Open Source</p>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
          <div>
            <a href="https://developer.mozilla.org/en-US/">
              <img
                alt="By Developers for Developers"
                src="https://mdn.mozillademos.org/files/16133/Accurate_Docs_for_Precise_Development_240x480.jpg"
                style={{
                  padding: '10px',
                  height: 'auto',
                  width: '200px',
                }}
              />
            </a>
          </div>
        </Menu>
      </Sider>
      <Layout className={styles.contentLayout}>
        <Header className={styles.header}>
          <PageHeader title="JS Intl Kitchen Sink" subTitle="Home" />
        </Header>
        <Content className={styles.content}>
          <div className={styles.contentWrapper}>{children}</div>
        </Content>
        <Footer className={styles.footer}>
          <span>
            <a href="http://www.xgeeks.io/">xgeeks</a> ©2019 Created by{' '}
            <a href="http://www.xgeeks.io/">xgeeks</a> & amazing collaborators
            from the Open Source Community 💜
          </span>
        </Footer>
      </Layout>
      <GithubCorner
        bannerColor="#1790ff"
        octoColor="#e8e8e8"
        href="https://github.com/xgeekshq/js-intl-kitchen-sink"
      />
    </Layout>
  );
};

export default PageLayout;
