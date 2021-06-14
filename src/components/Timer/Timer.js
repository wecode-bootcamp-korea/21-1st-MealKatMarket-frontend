import React, { Component } from 'react';
import './Timer.scss';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = { hours: 0, minutes: 0, seconds: 0 };
    this.timer = null;
    this.deadline = null;
  }

  count() {
    let now = new Date().getTime();
    let t = this.deadline - now;
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    this.setState({ hours, minutes, seconds });

    if (t < 0) {
      clearInterval(this.timer);
      this.setState({ hours: 0, minutes: 0, seconds: 0 });
    }
  }

  componentDidMount() {
    this.deadline = new Date('jun 15, 2021 24:00:00').getTime();
    this.timer = setInterval(this.count, 1000);
  }
  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className="timer-container">
        <span className="text">특가할인 종료까지</span>
        <span className="time">
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
    );
  }
}
