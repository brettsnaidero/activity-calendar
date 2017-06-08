import React, { Component } from 'react';

import { Switch, Route } from 'react-router';

// import {Motion, spring} from 'react-motion';

import surroundings from '../img/surroundings.svg';

import MapArea from './MapComponents/MapArea';
import MapData from '../data/mapData.json';

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.mapClick = this.mapClick.bind(this);

    this.state = {
      currentLevel: 1,
      areaId: 0
    }
  }

  mapClick(id) {
    let newVal = this.state.currentLevel + 1;
    this.setState({
      currentLevel: newVal,
      areaId: id
    });
  }

  renderMap() {
    let ans;
    if (this.state.currentLevel !== 1) {
      // Map Areas
      ans = MapData.precincts.map( (item, num) => {
        return (
          <MapArea
            key={num}
            id={item.id}
            points={item.points}
            title={item.title}
            mapClick={this.mapClick}
          />
        )
      })
    } else {
      ans = MapData.precincts.map( (item, num) => {
        return (
          <MapArea
            key={num}
            id={item.id}
            points={item.points}
            title={item.title}
            mapClick={this.mapClick}
          />
        )
      })
    }
    return ans;
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
        <div className="map-area">
          <svg
            viewBox="100 60 800 560"
            xmlSpace="preserve"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Shadow */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Clickable Map Areas */}
            { this.renderMap() }

          </svg>
        </div>

      </section>
    );
  }
};
