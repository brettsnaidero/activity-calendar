import React, { Component } from 'react';

import eventTypes from '../../data/eventTypes';
import MapData from '../../data/mapData.json';

import _ from 'lodash';

export default class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  eventTypeFilters() {
    return (
      <ul className="optionset checkboxset">
        <li>
          <input id="allEventTypes" className="checkbox" name="allEventTypes" type="checkbox" value="allEventTypes" checked="true" />
          <label htmlFor="allEventTypes">
            <svg viewBox="0 0 10 10">
              <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
            </svg>
            All
          </label>
        </li>
        { eventTypes.map( (item, index) => {
          return (
            <li>
              <input id={item.id} className="checkbox" name={item.id} type="checkbox" value={item.id} />
              <label htmlFor={item.id}>
                <svg viewBox="0 0 10 10">
                  <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
                </svg>
                {item.name}
              </label>
            </li>
          )
        })}
      </ul>
    )
  }

  locationFilters() {
    return (
      <ul className="optionset checkboxset">
        <li>
          <input id="allLocations" className="checkbox" name="allLocations" type="checkbox" value="allLocations" checked="true" />
          <label htmlFor="allLocations">
            <svg viewBox="0 0 10 10">
              <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
            </svg>
            All
          </label>
        </li>

        { _.map(MapData.precincts, (item, num) => {
          // Localities
          let babies;
          if (item.localities) {
            babies = (
              <ul className="sub">
                { _.map(item.localities, (childItem, i) => {
                  return (
                    <li key={i}>
                      <input id={item.id + ' ' + childItem.id} className="checkbox" name={item.id + ' ' + childItem.id} type="checkbox" value={item.id + ' ' + childItem.id} />
                      <label htmlFor={item.id + ' ' + childItem.id}>
                        <svg viewBox="0 0 10 10">
                          <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
                        </svg>
                        {childItem.title} <span>0</span>
                      </label>
                    </li>
                  )
                }) }
              </ul>
            )
          }
          //
          return (
            <li className="odd valoption1" key={num}>
              <input id={item.id} className="checkbox" name={item.id} type="checkbox" value={item.id} />
              <label htmlFor={item.id}>
                <svg viewBox="0 0 10 10">
                  <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
                </svg>
                { item.title }
              </label>
              { babies }
            </li>
          )
        }) }

      </ul>
    )
  }



  render() {
    return (
      <div className="sidebar--filters">

        <h3>Filter by event type:</h3>
        { this.eventTypeFilters() }

        <h3>Filter by location:</h3>
        { this.locationFilters() }

      </div>
    );
  }
};
