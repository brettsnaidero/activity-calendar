import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import testData from '../data/testEvent';

export default class Calendar extends Component {
  constructor(props, context) {
    super(props, context);

    this.context = context;
    this.state = {
      events: testData
    };

    BigCalendar.setLocalizer(
      BigCalendar.momentLocalizer(moment)
    );
  }

  handleSelectSlot({start, end}) {
      //create an event with title "Test"
      console.log("handleSelectSlot: " + start + " - " + end);
  }

  handleSelectEvent() {

  }

  EventWeek(props) {
      return <strong>{props.event.title}</strong>
  }

  EventAgenda(props) {
      return <em>{props.event.title}</em>
  }

  render() {
    return (
      <section className="calendar">
        <BigCalendar
          selectable
          popup
          events={this.state.events}
          onSelectSlot={this.handleSelectSlot}
          onSelectEvent={this.handleSelectEvent}
          eventPropGetter={e => ({ className: 'test-class'})} /* Here you can define a style for the element */
          components={{
            event: this.EventWeek,
            agenda: {
              event: this.EventAgenda
            }
          }}
        />
      </section>
    );
  }
};
