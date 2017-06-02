import React, { Component } from 'react';

import logo from '../img/logo.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  openOffCanvas() {

  }

  render() {
    return (
      <header className="header">
        <div className="header--logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header--controls">
          <button onClick={this.openOffCanvas()} className="open-menu menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    );
  }
};
