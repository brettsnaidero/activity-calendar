import React, { Component } from 'react';

export default class ScheduleAnEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>
        Schedule An Event
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
};
