import React from 'react';
import { Icon } from 'antd';

import styles from './styles.module.css';

const PopoverContent = ({ children, onMouseEnter, onMouseLeave }) => (
  <div
    className={styles.container}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
    <Icon className={styles.question} theme="twoTone" type="question-circle" />
  </div>
);

export default PopoverContent;
