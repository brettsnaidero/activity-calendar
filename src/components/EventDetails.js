import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import testData from '../data/testEvent';

export default class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'title': '',
      'id': '',
      'start': '',
      'end':  '',
      'class': '',
      'location': {
        'precinct': '',
        'locality': '',
        'site': ''
      },
      'details': [
        'description': '',
        'carfree': false,
        'important': false,
        'attendees': '',
        'income': '',
        'organisation': '',
        'internalcontact': '',
        'onsitecontact': '',
        'onsitenumber': '',
        'comments': ''
      ]
    }
  }

  componentWillMount() {
    // Look for event matching id from URL
    let answer = {};
    testData.map( (e) => {
      if (e.id == this.props.match.params.id) {
        answer = e;
      }
    });

    console.log("Answer", answer);

    // Propagate content
    if(answer.title.length > 0) {
      this.setState(answer)
    } else {
      this.setState({
        'title': 'Not Found'
      })
    }
  }

  render() {
    console.log( this.state.start );
    return (
      <section className="event-details">
        <div className="content">
          <h2>
            <Link to="/" className="back">Back</Link>
            { this.state.title }
          </h2>

          <div className="details">
            <div className="details--field half">
              <div className="details--label">Is this a car free event?</div>
              <div className="details--answer">{ this.state.details.carfree ? 'Yes': 'No' }</div>
            </div>

            <div className="details--field half last">
              <div className="details--label">Important/VIP/Urgent Event</div>
              <div className="details--answer">{ this.state.details.important ? 'Yes': 'No' }</div>
            </div>

            <hr />

            <div className="details--field half">
              <div className="details--label">Start Time/Date</div>
              {/* <div className="details--answer">{ this.state.start }</div> */}
            </div>

            <div className="details--field half last">
              <div className="details--label">End Time/Date</div>
              {/* <div className="details--answer">{ this.state.end }</div> */}
            </div>

            <hr />

            <div className="details--field half">
              <div className="label--label">Type</div>
              <div className="details--answer">{ this.state.class }</div>
            </div>

            <div className="details--field half last">
              <div className="label--label">Number of Attendees</div>
              <div className="details--answer">{ this.state.details.attendees }</div>
            </div>

            <div className="details--field half">
              <div className="label--label">Precinct</div>
              <div className="details--answer">{ this.state.location.precinct }</div>
            </div>

            <div className="details--field half last">
              <div className="label--label">Locality</div>
              <div className="details--answer">{ this.state.location.locality }</div>
            </div>

            <div className="details--field half">
              <div className="label--label">Site</div>
              <div className="details--answer">{ this.state.location.site }</div>
            </div>

            <hr />

            <div className="details--field">
              <div className="label--label">Income generated</div>
              <div className="details--answer">{ this.state.details.income }</div>
            </div>

            <hr />

            <div className="details--field half">
              <div className="label--label">Organisation</div>
              <div className="details--answer">{ this.state.details.organisation }</div>
            </div>

            <div className="details--field half last">
              <div className="label--label">Internal Contact</div>
              <div className="details--answer">{ this.state.details.internalcontact }</div>
            </div>

            <div className="details--field half">
              <div className="label--label">Onsite Contact Name</div>
              <div className="details--answer">{ this.state.details.onsitecontact }</div>
            </div>

            <div className="details--field half last">
              <div className="label--label">Onsite Contact Mobile Number</div>
              <div className="details--answer">{ this.state.details.onsitenumber }</div>
            </div>

            <div className="details--field">
              <div className="label--label">Comments</div>
              <div className="details--answer">{ this.state.details.comments }</div>
            </div>
          </div>

        </div>
      </section>
    );
  }
};

EventDetails.propTypes = {
  title: React.PropTypes.string
}
