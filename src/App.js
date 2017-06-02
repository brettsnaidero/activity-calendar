import React, { Component } from 'react';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { CSSTransitionGroup } from 'react-transition-group';

// Pages
import Calendar from './components/Calendar';
import Map from './components/Map';
import ScheduleAnEvent from './components/ScheduleAnEvent';
import MyEvents from './components/MyEvents';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

import './sass/style.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          {/* Header */}
          <Header />

          {/* Left Sidebar Area */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="main">
            <div className="main--area">
              <NavigationBar
                config="calendar"
              />

              <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                <Switch>
                  <Route
          	    		path="/map"
          	    		component={Map}
          	    	/>
                  <Route
                    path="/schedule"
                    component={ScheduleAnEvent}
                  />
                  <Route
                    path="/myevents"
                    component={MyEvents}
                  />
                  <Route
                    path="/"
                    component={Calendar}
                  />
                </Switch>
              </CSSTransitionGroup>
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
