import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import _ from 'lodash';

import testData from '../data/testEvent';

export default class Calendar extends Component {
  constructor(props, context) {
    super(props, context);

    this.context = context;

    this.state = {
      events: testData,
      filteredEvents: testData
    };

    // Use Moment plugin with calendar
    BigCalendar.setLocalizer(
      BigCalendar.momentLocalizer(moment)
    );
  }

  filterEvents(nextProps) {
    let filteredEvents = [];

    // Event Type Filters
    if(nextProps.eventFilters.size > 0) {
      filteredEvents = this.state.events.reduce( (event) => {
        for (let item of nextProps.eventFilters) {
          console.log(event);
          return event;
          // if (event.class === item) {
          //   return event;
          // }
        }
      });
    }
    console.log(filteredEvents);
    // Location Filters
    if(nextProps.locationFilters.size > 0) {
      filteredEvents = filteredEvents.map( (event) => {
        for (let item of nextProps.locationFilters) {
          // if (event.location.locality === item) { // Need to work out a solution for subs!
          //   return event;
          // }
        }
      });
    }

    this.setState({
      filteredEvents: filteredEvents
    });
  }

  componentWillReceiveProps(nextProps) {
    this.filterEvents(nextProps);
  }

  handleSelectSlot({start, end}) {
    //create an event with title "Test"
    console.log("handleSelectSlot: " + start + " - " + end);
  }

  handleSelectEvent(event) {
    // Programatically navigate to event details page
    this.props.history.push(`/event/${event.id}`);
  }

  EventWeek(props) {
      return (
        <strong>
          { props.event.title }
        </strong>
      )
  }

  EventAgenda(props) {
      return (
        <em>
          { props.event.title }
        </em>
      )
  }

  render() {
    return (
      <section className="calendar">
        <BigCalendar
          selectable
          popup
          history={this.props.history}
          events={this.state.filteredEvents}
          onSelectSlot={this.handleSelectSlot}
          onSelectEvent={this.handleSelectEvent}
          eventPropGetter={e => ({ className: `${e.class}-class` })}
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
