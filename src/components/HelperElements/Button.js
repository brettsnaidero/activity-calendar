import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

export default class Button extends Component {
  render() {
    return (
      <Link to="/schedule" className={`button button--${this.props.type}`}>
        { this.props.label }
      </Link>
    );
  }
};
