import React, { Component } from 'react';

export default class OffCanvas extends Component {
  render() {
    return (
      <nav className="pushy pushy-left">
        <ul>
          <li className="pushy-link">
            <button className="close">
              <span className="one"></span>
              <span className="two"></span>
              Close Menu
            </button>
          </li>
          <li className="pushy-link"><a href="#">About</a></li>
          <li className="pushy-link"><a href="#">Credits</a></li>
        </ul>
      </nav>
    );
  }
};
