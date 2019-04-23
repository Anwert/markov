import React, { Component } from 'react';
import { Circle } from 'react-yandex-maps';

class Point extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: this.props.radius,
      coordinates: this.props.coordinates,
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <Circle
            geometry={[this.props.coordinates, parseInt(this.props.radius)]}
            options={{
              draggable: false,
              fillColor: '#DB709377',
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWidth: 3,
            }}
        />
    );
  }
}

export default Point;
