import React, { Component } from 'react';

export default class ScheduleAnEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="content">
        <h2>Fill out your event's details:</h2>
        <form>

          <div className="field checkbox half">
            <input id="op1" className="checkbox" name="op1" type="checkbox" value="option1" />
            <label htmlFor="op1">
              <svg viewBox="0 0 10 10">
                <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
              </svg>
              Is this a car free event?
            </label>
          </div>

          <div className="field checkbox half last">
            <input id="op2" className="checkbox" name="op2" type="checkbox" value="option2" />
            <label htmlFor="op2">
              <svg viewBox="0 0 10 10">
                <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
              </svg>
              Flag as Important/VIP/Urgent Event
            </label>
          </div>

          <hr />

          <div className="field half">
            <label>Start Time/Date</label>
            <input type="text" />
          </div>

          <div className="field half last">
            <label>End Time/Date</label>
            <input type="text" />
          </div>

          <div className="field checkbox">
            <input id="op3" type="checkbox" />
            <label htmlFor="op3">
              <svg viewBox="0 0 10 10">
                <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
              </svg>
              Repeat event...
            </label>
          </div>

          <hr />

          <div className="field half">
            <label>Type</label>
            <select>
              <option>1</option>
            </select>
          </div>

          <div className="field requiredField half last">
            <label>Activity / Title</label>
            <select>
              <option>1</option>
            </select>
            {/* Validation Message */}
          </div>

          <div className="field requiredField half">
            <label>Number of Attendees</label>
            <select>
              <option>1</option>
            </select>
            {/* Validation Message */}
          </div>

          <div className="field requiredField half last">
            <label>Precinct</label>
            <select>
              <option>1</option>
            </select>
            {/* Validation Message */}
          </div>

          <div className="field requiredField half">
            <label>Location</label>
            <select>
              <option>1</option>
            </select>
            {/* Validation Message */}
          </div>

          <div className="field requiredField half last">
            <label>Site</label>
            <select>
              <option>1</option>
            </select>
            {/* Validation Message */}
          </div>

          <hr />

          <div className="field">
            <label>Income generated</label>
            <input type="text" />
          </div>

          <hr />

          <div className="field half">
            <label>Organisation</label>
            <input type="text" />
          </div>

          <div className="field requiredField half last">
            <label>Internal Contact</label>
            <input type="text" />
          </div>

          <div className="field half">
            <label>Onsite Contact Name</label>
            <input type="text" />
          </div>

          <div className="field half last">
            <label>Onsite Contact Mobile Number</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Comments</label>
            <textarea></textarea>
          </div>

          <div className="Actions">
            <button type="submit" className="button button--submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
};
