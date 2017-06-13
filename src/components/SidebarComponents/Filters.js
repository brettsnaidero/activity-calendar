import React, { Component } from 'react';

import eventTypes from '../../data/eventTypes';
import MapData from '../../data/mapData.json';

import Checkbox from '../HelperElements/Checkbox';

import _ from 'lodash';

export default class Filters extends Component {
  constructor(props) {
    super(props);

    this.toggleAllEvents = this.toggleAllEvents.bind(this);
    this.toggleEventCheckbox = this.toggleEventCheckbox.bind(this);
    this.toggleAllLocations = this.toggleAllLocations.bind(this);
    this.toggleLocationCheckbox = this.toggleLocationCheckbox.bind(this);

    this.state = {
      allEvents: true,
      allLocations: true,
      selectedEventCheckboxes: new Set(),
      selectedLocationCheckboxes: new Set()
    }
  }

  toggleAllEvents() {
    // If filters active
    if ( this.state.allEvents ) {
      this.setState({
        allEvents: false
      });
    } else {
      // Else turn off all the filters
      eventTypes.map( (item) => {
        if (this.refs[`event-${item.id}`].state.isChecked === true) {
          this.refs[`event-${item.id}`].toggleCheckboxChange();
        }
      })
      // And set 'all' to true
      this.setState({
        allEvents: true
      });
    }

    // Update filters
    this.props.updateFilters(this.state.selectedLocationCheckboxes, this.state.selectedEventCheckboxes);
  }

  toggleEventCheckbox(label) {
    if (this.state.selectedEventCheckboxes.has(label)) {
      this.state.selectedEventCheckboxes.delete(label);
    } else {
      this.state.selectedEventCheckboxes.add(label);
    }

    // Turn off 'all' if it is active
    this.setState({
      allEvents: false
    });

    // Update filters
    this.props.updateFilters(this.state.selectedLocationCheckboxes, this.state.selectedEventCheckboxes);
  }

  eventTypeFilters() {
    return (
      <ul className="optionset checkboxset">
        <li>
          <input
            id="allEventTypes"
            className="checkbox"
            name="allEventTypes"
            type="checkbox"
            value="allEventTypes"
            checked={this.state.allEvents}
            onChange={this.toggleAllEvents}
          />
          <label htmlFor="allEventTypes">
            <svg viewBox="0 0 10 10">
              <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
            </svg>
            All
          </label>
        </li>
        { eventTypes.map( (item, index) => {
          return (
            <li key={index}>
              <Checkbox
                handleCheckboxChange={this.toggleCheckbox}
                id={item.id}
                name={item.name}
                handleCheckboxChange={this.toggleEventCheckbox}
                ref={`event-${item.id}`}
              />
            </li>
          )
        })}
      </ul>
    )
  }

  toggleAllLocations() {
    // If filters active
    if ( this.state.allLocations ) {
      this.setState({
        allLocations: false
      });
    } else {
      // Else turn off all the filters
      MapData.precincts.map( (item) => {
        if (this.refs[`location-${item.id}`].state.isChecked === true) {
          this.refs[`location-${item.id}`].toggleCheckboxChange();
          if (item.localities) {
            _.map(item.localities, (childItem) => {
              if (this.refs[`location-${childItem.id}`].state.isChecked === true) {
                this.refs[`location-${childItem.id}`].toggleCheckboxChange();
              }
            })
          }
        }
      })
      // And set 'all' to true
      this.setState({
        allLocations: true
      });
    }

    // Update filters
    this.props.updateFilters(this.state.selectedLocationCheckboxes, this.state.selectedEventCheckboxes);
  }

  toggleLocationCheckbox(label) {
    if (this.state.selectedLocationCheckboxes.has(label)) {
      this.state.selectedLocationCheckboxes.delete(label);
    } else {
      this.state.selectedLocationCheckboxes.add(label);
    }

    // Turn off 'all' if it is active
    this.setState({
      allLocations: false
    });

    // Update filters
    this.props.updateFilters(this.state.selectedLocationCheckboxes, this.state.selectedEventCheckboxes);
  }

  locationFilters() {
    return (
      <ul className="optionset checkboxset">
        <li>
          <input
            id="allLocations"
            className="checkbox"
            name="allLocations"
            type="checkbox"
            value="allLocations"
            checked={this.state.allLocations}
            onChange={this.toggleAllLocations}
          />
          <label htmlFor="allLocations">
            <svg viewBox="0 0 10 10">
              <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
            </svg>
            All
          </label>
        </li>

        { _.map(MapData.precincts, (item, num) => {
          // Localities
          let localities;
          if (item.localities) {
            // If precinct is ticked, add class to show children
            let activeClass = false;
            if( this.state.selectedLocationCheckboxes.has(item.id) ) {
              activeClass = true
            }

            localities = (
              <ul className={activeClass ? "sub active" : "sub"}>
                { _.map(item.localities, (childItem, i) => {
                  return (
                    <li key={i}>
                      <Checkbox
                        handleCheckboxChange={this.toggleCheckbox}
                        id={childItem.id}
                        name={childItem.title}
                        handleCheckboxChange={this.toggleLocationCheckbox}
                        ref={`location-${childItem.id}`}
                      />
                    </li>
                  )
                }) }
              </ul>
            )
          }
          //
          return (
            <li className="odd valoption1" key={num}>
              <Checkbox
                handleCheckboxChange={this.toggleCheckbox}
                id={item.id}
                name={item.title}
                handleCheckboxChange={this.toggleLocationCheckbox}
                ref={`location-${item.id}`}
              />
              { localities }
            </li>
          )
        }) }

      </ul>
    )
  }

  render() {
    return (
      <div className="sidebar--filters">

        <h3>Filter by event type:</h3>
        { this.eventTypeFilters() }

        <h3>Filter by location:</h3>
        { this.locationFilters() }

      </div>
    );
  }
};
