import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <section className="navigation-bar">
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/map">Map</NavLink>
      </section>
    );
  }
};
