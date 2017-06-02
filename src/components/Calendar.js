import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testData: [
        {
          'title': 'All Day Event',
          'allDay': true,
          'start': new Date(2017, 6, 2, 6, 0, 0),
          'end': new Date(2017, 6, 2, 18, 0, 0)
        },
        {
          'title': 'Long Event',
          'start': new Date(2017, 6, 7),
          'end': new Date(2017, 6, 10)
        }
      ]
    }
  }

  onNavigate() {
    console.log('onNavigate');

  }

  onView() {
    console.log('onView');

  }

  render() {
    return (
      <section className="calendar">
        <BigCalendar
          ref="calendar"
          events={this.state.testData}
          startAccessor="startDate"
          endAccessor="endDate"
          onNavigate={ this.onNavigate() }
          onView={ this.onView() }
        />
      </section>
    );
  }
};
