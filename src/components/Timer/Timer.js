import React, { Component } from 'react';
import './Timer.scss';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { hours: '00', minutes: '00', seconds: '00', timeUp: false };
  }
  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className="timer-container">
        <span>특가할인 종료까지</span>
        <span>{hours}:</span>
        <span>{minutes}:</span>
        <span>{seconds}</span>
      </div>
    );
  }
}
