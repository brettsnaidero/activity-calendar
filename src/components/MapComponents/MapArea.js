import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Map extends Component {
  componentDidMount() {
    this.path.addEventListener('click',
      () => this.props.mapClick(this.props.num)
    );
  }

  componentWillUnmount(){
    this.path.removeEventListener('click',
      () => this.props.mapClick(this.props.num)
    );
  }

  render() {
    // Get coordinates of path (for center)
    let examplePath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    examplePath.setAttribute("d", this.props.points);
    let shape = examplePath.getBBox();

    return (
      <g ref={ref => this.path = ref}>
        <path
          className="svg--shadow"
          title={this.props.title}
          d={this.props.points}
        />
        <path
          ref="path"
          className="svg--area"
          title={this.props.title}
          d={this.props.points}
          id={`area${this.props.id}`}
        />
        <text textAnchor="middle" x={shape.x + (shape.width/2)} y={shape.y + (shape.height/2)} fontFamily="Open Sans" fontSize="12" fill="#3a4168">
          {this.props.title}
        </text>
      </g>
    );
  }
};

Map.propTypes = {
  title: React.PropTypes.string,

  points: React.PropTypes.string.isRequired
}
