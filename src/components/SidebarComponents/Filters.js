import React, { Component } from 'react';

export default class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="sidebar--filters">

        <h3>Filter by location</h3>

        <ul className="optionset checkboxset">

          <li className="odd valoption1">
            <input id="op1" className="checkbox" name="op1" type="checkbox" value="option1" />
            <label htmlFor="op1">
              <svg viewBox="0 0 10 10">
                <polyline points="1.5,5.5 4,8 8,2"></polyline>
              </svg>
              Option 1
            </label>
          </li>

          <li className="even valoption1">
            <input id="op2" className="checkbox" name="op2" type="checkbox" value="option2" />
            <label htmlFor="op2">
              <svg viewBox="0 0 10 10">
                <polyline points="1.5,5.5 4,8 8,2"></polyline>
              </svg>
              Option 1
            </label>
          </li>

        </ul>

        <h3>Filter by event type</h3>

        <ul className="optionset checkboxset">

          <li className="odd evoption1">
            <input id="ev1" className="checkbox" name="ev1" type="checkbox" value="event1" />
            <label htmlFor="ev1">
              <svg viewBox="0 0 10 10">
                <polyline points="1.5,5.5 4,8 8,2"></polyline>
              </svg>
              Event type 1
            </label>
          </li>

          <li className="even evoption2">
            <input id="ev2" className="checkbox" name="ev2" type="checkbox" value="event2" />
            <label htmlFor="ev2">
              <svg viewBox="0 0 10 10">
                <polyline points="1.5,5.5 4,8 8,2"></polyline>
              </svg>
              Event type 2
            </label>
          </li>

        </ul>

      </div>
    );
  }
};
