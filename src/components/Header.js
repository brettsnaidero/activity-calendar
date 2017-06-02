import React, { Component } from 'react';

import logo from '../img/logo.svg'; 

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <header className="App-header header">
        <div className="App-logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
    );
  }
};
