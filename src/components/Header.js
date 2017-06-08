import React, { Component } from 'react';

import logo from '../img/logo.svg';
import avatar from '../img/avatar.svg';


export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header--logo">
          <img src={logo} alt="Logo" />
          <div className="tag">Activity Calendar</div>
        </div>
        <div className="header--user">
          <div className="user-image">
            <img src={avatar} alt="User avatar" />
          </div>
          <div>
            Hello, UserName
          </div>
        </div>
        <div className="header--controls">
          <button onClick={ this.props.toggleOffCanvas } className="open-menu menu-btn">
            <svg viewBox="0 0 10 10">
              <polyline points="1,1 9,1" />
              <polyline points="1,5 9,5" />
              <polyline points="1,9 9,9" />
            </svg>
          </button>
        </div>
      </header>
    );
  }
};
