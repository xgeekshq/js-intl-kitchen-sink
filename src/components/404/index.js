import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../assets/images/404.svg';
import styles from './styles.module.css';

const NoMatch = () => {
  function setHome() {
    let mainmenu = document.getElementById('mainmenu');
    mainmenu.setAttribute('selectedKeys', ['1']);
  }

  return (
    <div>
      <img src={NotFoundImg} className={styles.image} alt="404"></img>
      <div>
        <div className={styles.main}>404</div>
        <div>Sorry, the page you intended is still under development.</div>
      </div>
      <div>
        <a href="/" onclick="setHome()">
          <span className="nav-text">Home</span>
        </a>
      </div>
    </div>
  );
};

export default NoMatch;
