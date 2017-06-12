import React, { Component } from 'react';

import { Switch, Route } from 'react-router';
import { withRouter, NavLink } from 'react-router-dom';

import { CSSTransitionGroup } from 'react-transition-group';

import Button from './HelperElements/Button';

import Filters from './SidebarComponents/Filters';
import MapSidebar from './SidebarComponents/MapSidebar';
import ScheduleSidebar from './SidebarComponents/ScheduleSidebar';
import MyEventsSidebar from './SidebarComponents/MyEventsSidebar';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <Route path="/" render={ (props) => (
        <div className={"sidebar with-bottom " + (props.location.pathname === "/calendar" || props.location.pathname === "/map" || props.location.pathname === "/" ? "with-top" : "no-top")}>
          {/* Top */}
          <Switch>
            <Route path="/map">
              <div className="sidebar--area sidebar--top">
                <Button
                  type="schedule"
                  label="Schedule an Event"
                />
              </div>
            </Route>
            <Route path="/calendar">
              <div className="sidebar--area sidebar--top">
                <Button
                  type="schedule"
                  label="Schedule an Event"
                />
              </div>
            </Route>
            <Route path="/" exact>
              <div className="sidebar--area sidebar--top">
                <Button
                  type="schedule"
                  label="Schedule an Event"
                />
              </div>
            </Route>
          </Switch>
          {/* Main */}
          <div className="sidebar--area sidebar--main">
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <Switch>
                <Route
                  path="/map"
                  component={MapSidebar}
                />
                <Route
                  path="/schedule"
                  component={ScheduleSidebar}
                />
                <Route
                  path="/myevents"
                  component={MyEventsSidebar}
                />
                <Route
                  path="/"
                  render={() => (
                    <Filters updateFilters={this.props.updateFilters} />
                  )}
                />
              </Switch>
            </CSSTransitionGroup>
          </div>
          {/* Bottom */}
          <div className="sidebar--area sidebar--bottom">
            <NavLink to="/calendar" className="button button--toggle first">
              Calendar
            </NavLink>
            <NavLink to="/map" className="button button--toggle second">
              Map
            </NavLink>
          </div>
        </div>
      )}/>
    );
  }
};
