import React, { Component } from 'react';

import { Switch, Route } from 'react-router';

import surroundings from '../img/surroundings.svg';

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLevel: 1

    }
  }

  render() {
    return (
      <section className="map">

        {/* Levels */}
        <Switch>
          <Route
            path="/map/:id">
            <p>Hey</p>
          </Route>
        </Switch>

        {/* */}
        <div className="mall">
          <div className="surroundings">
            <img className="surroundings__map" src={surroundings} alt="Surroundings" />
          </div>
        </div>

      </section>
    );
  }
};
