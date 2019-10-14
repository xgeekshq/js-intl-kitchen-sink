import React from 'react';
import { Layout } from 'antd';
import styles from './styles.module.css';

const { Footer: FooterAntd } = Layout;

const Footer = () => {
  return (
    <FooterAntd className={styles.footer}>
      <span>
        <a href="http://www.xgeeks.io/">xgeeks</a> ©2019 Created by{' '}
        <a href="http://www.xgeeks.io/">xgeeks</a> & amazing collaborators from
        the Open Source Community 💜
      </span>
    </FooterAntd>
  );
};

export default Footer;
