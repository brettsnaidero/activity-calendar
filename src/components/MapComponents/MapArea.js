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

  polygonCentroid(pointList) {
    var cnt = 0;
    var ans = {
      x: 0,
      y: 0
    };

    for ( let i = 0; i < pointList.length; i++ ) {
        if ( pointList[i][0] == 'M' || pointList[i][0] == 'L' ){
            console.log(pointList[i]);
            ans.x += pointList[i][1];
            ans.y += pointList[i][2];
            cnt++;
        }
    }
    ans.x /= cnt;
    ans.y /= cnt;

    return ans;
  }

  render() {
    // Get coordinates of path (for center)
    let examplePath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    examplePath.setAttribute("d", this.props.points);
    let shape = examplePath.getBBox();

    // Find centroid of shape
    let center = this.polygonCentroid(this.props.points);
    console.log(center);

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
