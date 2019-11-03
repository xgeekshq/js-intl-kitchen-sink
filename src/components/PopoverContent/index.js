import React from 'react';

import styles from './styles.module.css';

import QuestionMarkImg from '../../assets/images/question.svg';

const PopoverContent = ({ children, ...other }) => (
  <div className={styles.container} {...other}>
    {children}
    <img alt="" className={styles.image} src={QuestionMarkImg} />
  </div>
);

export default PopoverContent;
