import React, { Component } from 'react';

import logo from '../img/logo.svg';
import avatar from '../img/avatar.svg';

import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.openDropdown = this.openDropdown.bind(this);

    this.state = {
      userDropDown: 'closed'
    }
  }

  openDropdown() {
    if(this.state.userDropDown === 'closed') {
      this.setState({
        userDropDown: 'open'
      });
    } else {
      this.setState({
        userDropDown: 'closed'
      });
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header--logo">
          <img src={logo} alt="Logo" />
          <div className="tag">Activity Calendar</div>
        </div>
        <div
          className={`header--user ${this.state.userDropDown}`}
          onClick={this.openDropdown}
        >
          <div className="user-image">
            <img src={avatar} alt="User avatar" />
          </div>
          <div>
            Hello, UserName
          </div>

          {/* Dropdown */}
          <div className="dropdown">
            <ul>
              <li><a href="#" title="">Sign Out</a></li>
              <li><NavLink to="/myevents">My Events</NavLink></li>
            </ul>
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
