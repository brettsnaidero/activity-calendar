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
        <h3>Schedule An Event</h3>
        <form>

          <div>
            <input type="checkbox" />
            <label>Is this a car free event?</label>
          </div>

          <div>
            <label>Start Time/Date</label>
            <input type="text" />
          </div>
          <div>
            <label>End Time/Date</label>
            <input type="text" />
          </div>

          <div>
            <label>Type</label>
            <select>
              <option>1</option>
            </select>
          </div>

          <div>
            <label></label>
          </div>

          <div className="Actions">
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
};
