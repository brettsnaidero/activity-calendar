import React, { Component } from 'react';
import MapData from '../../data/mapData.json';

import _ from 'lodash';

export default class MapSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar--map">

        { _.map(MapData.precincts, item => {
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
            <div>
              <h3>{item.title}</h3>
              {babies}
            </div>
          )
        }) }

      </div>
    );
  }
};
