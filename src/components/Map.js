import React, { Component } from 'react';

import { Switch, Route } from 'react-router';

import MapArea from './MapComponents/MapArea';
import MapData from '../data/mapData.json';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { exampleAction } from '../actions/index';

class Map extends Component {
  constructor(props) {
    super(props);

    this.mapClick = this.mapClick.bind(this);

    this.state = {
      currentLevel: 1,
      areaId: 0
    }
  }

  componentDidMount() {
    let TodayDate = new Date();
    let today = TodayDate.getDay();
    let month = TodayDate.getMonth();
  }

  mapClick(num) {
    console.log("Clicked!", num);
    let newLevel = this.state.currentLevel + 1;
    this.setState({
      currentLevel: newLevel,
      areaId: num
    });
  }

  prevDay() {

  }

  nextDay() {

  }

  renderMap() {
    let ans;
    if (this.state.currentLevel !== 1) {
      // Localities
      ans = MapData.precincts[this.state.areaId].localities.map( (item, num) => {
        return (
          <MapArea
            key={num}
            id={item.id}
            points={item.points}
            title={item.title}
            mapClick={this.mapClick}
            num={num}
          />
        )
      })
    } else {
      ans = MapData.precincts.map( (item, num) => {
        // Precincts
        return (
          <MapArea
            key={num}
            id={item.id}
            points={item.points}
            title={item.title}
            mapClick={this.mapClick}
            num={num}
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
            path="/map"
          >
            <div className="map--header">
              <div className="breadcrumbs">
                Breadcrumbs
              </div>
              <div className="day">
                { this.state.currentDate }
              </div>
              <div className="controls">
                <button onClick={this.prevDay}>Back</button>
                <button className="active">Today</button>
                <button onClick={this.nextDay}>Next</button>
              </div>
            </div>
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

function mapStateToProps(state) {
  return {
	  // mapCurrentLevel: state.currentLevel
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    exampleAction: exampleAction
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Map);
