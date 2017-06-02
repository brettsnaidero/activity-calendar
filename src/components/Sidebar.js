import React, { Component } from 'react';

import Button from './HelperElements/Button';

import Filters from './SidebarComponents/Filters';

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
          <Filters />
        </div>
        {/* Bottom
        <div className="sidebar--area sidebar--bottom">
        </div>
        */}
      </div>
    );
  }
};
