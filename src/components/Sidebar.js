import React, { Component } from 'react';

import { Switch, Route } from 'react-router';

import { CSSTransitionGroup } from 'react-transition-group';

import Button from './HelperElements/Button';

import Filters from './SidebarComponents/Filters';
import MapSidebar from './SidebarComponents/MapSidebar';
import ScheduleSidebar from './SidebarComponents/ScheduleSidebar';
import MyEventsSidebar from './SidebarComponents/MyEventsSidebar';

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="sidebar">
        {/* Top */}
        <div className="sidebar--area sidebar--top">
          <Button
            type="schedule"
            label="Schedule an Event"
          />
        </div>
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
                component={Filters}
              />
            </Switch>
          </CSSTransitionGroup>
        </div>
        {/* Bottom
        <div className="sidebar--area sidebar--bottom">
        </div>
        */}
      </div>
    );
  }
};
