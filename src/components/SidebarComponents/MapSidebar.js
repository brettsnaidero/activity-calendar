import React, { Component } from 'react';
import MapData from '../../data/mapData.json';

import { Link } from 'react-router-dom';

import _ from 'lodash';

export default class MapSidebar extends Component {
  constructor(props) {
    super(props);
  }

  onMouseEnterHandler(id) {
    console.log('enter');
  }

  onMouseLeaveHandler(id) {
    console.log('leave');
  }

  render() {
    return (
      <div className="sidebar--map">

        { _.map(MapData.precincts, (item, num) => {
          // Localities
          let babies;
          if (item.localities) {
            babies = (
              <ul>
                {_.map(item.localities, (childItem, i) => {
                  return (
                    <li key={i}>{childItem.title} <span>0</span></li>
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
                >
                  { item.title }
                </Link>
              </h3>
              {babies}
            </div>
          )
        }) }

      </div>
    );
  }
};
