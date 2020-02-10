import React, { Component } from 'react';
import * as d3 from "d3";

import {
  Ball
} from '../Ball/ball';

class Balls extends Component {
  state = {
    y: this.props.y,
    vy: 0
  };

  timer = null;

  componentDidMount() {
    this.timer = d3.timer(() => this.loop());
    this.loop();
  }

  componentWillUnmount() {
    this.timer.stop();
  }

  loop = () => {
    let { y, vy } = this.state;

    // Velocity, Bounce
    if (y > 750) {
      vy = -vy * 0.83;
    }
    y = y + vy;
    vy = vy + 0.3;
    this.setState({y, vy})
  };

  render() {
    const { x, fill } = this.props;
    const { y } = this.state;
    return (
        <svg className='svg'>
          <Ball x={x} y={y} fill={fill}/>
        </svg>
    )
  }
}

export default Balls;
