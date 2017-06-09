import React, { Component } from 'react';
import PropTypes from 'prop-types';

import testData from '../data/testEvent';

export default class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    // Look for event matching id from URL
    let answer = testData.filter( (e) => {
      return e.id == this.props.match.params.id;
    });

    // Propagate content
    if(answer.length > 0) {
      this.setState({
        title: answer[0].title
      })
    } else {
      this.setState({
        title: 'Not Found'
      })
    }
  }

  render() {
    return (
      <section className="event-details">
        <div className="content">
          <h2>{ this.state.title }</h2>

          <div className="field half">
            <div className="label">Is this a car free event?</div>
            <div></div>
          </div>

          <div className="field half last">
            <div className="label">Important/VIP/Urgent Event</div>
            <div></div>
          </div>

          <hr />

          <div className="field half">
            <div className="label">Start Time/Date</div>
            <div></div>
          </div>

          <div className="field half last">
            <div className="label">End Time/Date</div>
            <div></div>
          </div>

          <div className="field">
            <div className="label">Repeat event...</div>
            <div></div>
          </div>

          <hr />

          <div className="field half">
            <div className="label">Type</div>
            <div></div>
          </div>

          <div className="field half last">
            <div className="label">Activity / Title</div>
            <div></div>
          </div>

          <div className="field half">
            <div className="label">Number of Attendees</div>
            <div></div>
          </div>

          <div className="field half last">
            <div className="label">Precinct</div>
            <div></div>
          </div>

          <div className="field half">
            <div className="label">Location</div>
            <div></div>
          </div>

          <div className="field half last">
            <div className="label">Site</div>
            <div></div>
          </div>

          <hr />

          <div className="field">
            <div className="label">Income generated</div>
            <div></div>
          </div>

          <hr />

          <div className="field half">
            <div className="label">Organisation</div>
            <div></div>
          </div>

          <div className="field half last">
            <div className="label">Internal Contact</div>
            <div></div>
          </div>

          <div className="field half">
            <div className="label">Onsite Contact Name</div>
            <div></div>
          </div>

          <div className="field half last">
            <div className="label">Onsite Contact Mobile Number</div>
            <div></div>
          </div>

          <div className="field">
            <div className="label">Comments</div>
            <div></div>
          </div>

        </div>
      </section>
    );
  }
};

EventDetails.propTypes = {
  title: React.PropTypes.string
}
