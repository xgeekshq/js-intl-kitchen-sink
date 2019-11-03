import React from 'react';

import styles from './styles.module.css';

import QuestionMarkImg from '../../assets/images/question.svg';

const PopoverContent = ({ children, onMouseEnter, onMouseLeave }) => (
  <div
    className={styles.container}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
    <img alt="" className={styles.image} src={QuestionMarkImg} />
  </div>
);

export default PopoverContent;
