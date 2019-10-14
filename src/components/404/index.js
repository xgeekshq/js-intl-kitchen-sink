import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../assets/images/404.svg';
import styles from './styles.module.css';
export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <img src={NotFoundImg} className={styles.image} alt="404"></img>
        <div>
          <div className={styles.main}>404</div>
          <div>Sorry, the page you intended is still under development.</div>
        </div>
        <div>
          <Link to="/">
            <span className="nav-text">Home</span>
          </Link>
        </div>
      </div>
    );
  }
}
