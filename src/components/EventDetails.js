import React, { Component } from 'react';
import PropTypes from 'prop-types';

import testData from '../data/testEvent';

export default class EventDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="event-details">
        { this.props.title }
      </section>
    );
  }
};

EventDetails.propTypes = {
  title: React.PropTypes.string
}
