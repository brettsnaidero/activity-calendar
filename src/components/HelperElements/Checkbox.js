import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);

    this.state = {
      isChecked: false
    }
  }

  toggleCheckboxChange() {
    const { handleCheckboxChange, id } = this.props;

    this.setState(({ isChecked }) => ({
        isChecked: !isChecked
    }));

    handleCheckboxChange(id);
  }

  render() {
    const { isChecked } = this.state;

    return (
      <div>
        <input
          id={this.props.id}
          className="checkbox"
          name={this.props.id}
          type="checkbox"
          value={this.props.id}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        />
        <label htmlFor={this.props.id}>
          <svg viewBox="0 0 10 10">
            <polyline points="1.5,5 4.25,7.75 8.5,1.75"></polyline>
          </svg>
          { this.props.name }
        </label>
      </div>
    );
  }
};

Checkbox.propTypes = {
  handleCheckboxChange: React.PropTypes.func.isRequired,
};
