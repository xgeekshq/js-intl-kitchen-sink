import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../assets/images/404.svg';
import './index.css';
export default class NoMatch extends Component {
  render() {
    return (
      <div className="container">
        <img src={NotFoundImg} alt="404"></img>
        <div className="content">
          <div className="main">404</div>
          <div className="sub">
            Sorry, the page you intended is still under development.
          </div>
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
