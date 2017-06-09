import React, { Component } from 'react';

import EventData from '../../data/testEvent';
import MapData from '../../data/mapData.json';

import { Link } from 'react-router-dom';

import _ from 'lodash';

export default class MapSidebar extends Component {
  constructor(props) {
    super(props);

    this.state= {
      selected: '',
      todayDate: new Date(),
      currentDate: new Date()
    }
  }

  componentDidMount() {
    console.log(
      this.state.todayDate,
      this.state.currentDate
    )
  }

  onMouseEnterHandler(id) {
    console.log('enter');
  }

  onMouseLeaveHandler(id) {
    console.log('leave');
  }

  areaClick(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="sidebar--map">

        { _.map(MapData.precincts, (item, num) => {
          // Localities
          let children;
          if (item.localities) {
            children = (
              <ul>
                {_.map(item.localities, (locality, i) => {
                  let numOfEvents = 0;
                  let test = EventData.map( (event) => {
                    // Check if event is in location
                    if (locality.id === event.location.locality) {
                      // Check if event is on currently selected day
                      if (
                        event.start.getYear() === this.state.currentDate.getYear() &&
                        event.start.getDate() === this.state.currentDate.getDate() &&
                        event.start.getDay() === this.state.currentDate.getDay()
                      ) {
                        numOfEvents++;
                      }
                    }
                  });

                  return (
                    <li key={i}>
                      {locality.title}
                      <span>{numOfEvents}</span>
                    </li>
                  )
                })}
              </ul>
            )
          }
          //
          return (
            <div key={num}>
              <h3>
                <Link
                  to={`/map/${item.id}`}
                  onMouseEnter={() => this.onMouseEnterHandler(item.id)}
                  onMouseLeave={() => this.onMouseLeaveHandler(item.id)}
                  onClick={() => this.areaClick(item.id)}
                >
                  { item.title }
                </Link>
              </h3>
              { children }
            </div>
          )
        }) }

      </div>
    );
  }
};
