import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.path.addEventListener('click',
      () => this.props.mapClick(this.props.id)
    );
  }

  componentWillUnmount(){
    this.path.removeEventListener('click',
      () => this.props.mapClick(this.props.id)
    );
  }

  render() {
    return (
      <g ref={ref => this.path = ref}>
        <path
          className="svg--shadow"
          title={this.props.title}
          d={this.props.points}
        />
        <path
          className="svg--area"
          title={this.props.title}
          d={this.props.points}
          id={`area${this.props.id}`}
        >
          <text textAnchor="middle">
            <textPath startOffset="50%" xlinkHref={`#area${this.props.id}`} fontFamily="Verdana" fontSize="35">
              {this.props.title}
            </textPath>
          </text>
        </path>
      </g>
    );
  }
};

Map.propTypes = {
  title: React.PropTypes.string,

  points: React.PropTypes.string.isRequired
}
