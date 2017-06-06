import React, { Component } from 'react';

export default class OffCanvas extends Component {
  render() {
    return (
      <nav className="pushy pushy-right">
        <ul>
          <li className="pushy-link">
            <button onClick={ this.props.toggleOffCanvas } className="close">
              <span className="one"></span>
              <span className="two"></span>
              Close Menu
            </button>
          </li>
          <li className="pushy-link">About</li>
          <li className="pushy-link">Credits</li>
        </ul>
      </nav>
    );
  }
};
