import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <section className="navigation-bar">
        <div className="navigation-bar--mapcrumbs">
          
        </div>
        <div className="navigation-bar--toggle">
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/map">Map</NavLink>
        </div>
      </section>
    );
  }
};
