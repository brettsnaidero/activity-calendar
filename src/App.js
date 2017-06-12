import React, { Component } from 'react';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { CSSTransitionGroup } from 'react-transition-group';

// Pages
import Calendar from './components/Calendar';
import Map from './components/Map';
import ScheduleAnEvent from './components/ScheduleAnEvent';
import MyEvents from './components/MyEvents';
import EventDetails from './components/EventDetails';
import NotFound from './components/NotFound';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import OffCanvas from './components/OffCanvas';

// Styles
import './sass/style.css';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

// Create store (Global state storage)
const store = createStore(allReducers);

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleOffCanvas = this.toggleOffCanvas.bind(this);
    this.updateFilters = this.updateFilters.bind(this);

    this.state = {
      offCanvasMenuShow: false,

      eventFilters: {},
      locationFilters: {}
    }
  }

  toggleOffCanvas() {
    let newStatus = !this.state.offCanvasMenuShow;
    this.setState({
      offCanvasMenuShow: newStatus
    });
  }

  updateFilters(locations, events) {
    this.setState({
      locationFilters: locations,
      eventFilters: events
    })
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={`container ` + (this.state.offCanvasMenuShow ? `pushy-open-right` : `pushy-closed`)}>

            <OffCanvas
              toggleOffCanvas={this.toggleOffCanvas}
            />

            {/* Site Overlay for Off Canvas */}
            <div className="site-overlay" onClick={this.toggleOffCanvas}></div>

            <div id="container">
              {/* Header */}
              <Header
                toggleOffCanvas={this.toggleOffCanvas}
              />

              {/* Left Sidebar Area */}
              <Sidebar
                updateFilters={this.updateFilters}
              />

              {/* Main Content Area */}
              <div className="main">
                <div className="main--area">

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
                        path="/event/:id"
                        component={EventDetails}
                      />
                      <Route
                        path="/calendar"
                        render={({history}) =>
                          <Calendar
                            history={history}
                            eventFilters={this.state.eventFilters}
                            locationFilters={this.state.locationFilters}
                          />
                        }
                      />
                      <Route
                        path="/"
                        exact
                        component={Calendar}
                      />
                      <Route
                        path="*"
                        component={NotFound}
                      />
                    </Switch>
                  </CSSTransitionGroup>
                </div>
              </div>

            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
