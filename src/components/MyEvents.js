import React, { Component } from 'react';

export default class MyEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="content">
          <h2>Event Title</h2>
          <div className="details">
            <div className="field">
              <div className="label">Start Time/Date:</div>
              <div className="">02:00PM, January 21, 2017</div>
            </div>
          </div>
          <form>
            <div className="Actions">
              <button type="submit" className="button button--submit">
                Delete
              </button>
            </div>
          </form>
        </div>
        <div className="content">
          <h2>Event Title</h2>
          <div className="details">
            <div className="field">
              <div className="label">Start Time/Date:</div>
              <div className="">02:00PM, January 21, 2017</div>
            </div>
          </div>
          <form>
            <div className="Actions">
              <button type="submit" className="button button--submit">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
