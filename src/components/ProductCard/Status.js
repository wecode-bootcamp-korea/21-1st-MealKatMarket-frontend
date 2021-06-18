import { Component } from 'react';
import './Status.scss';

export default class Status extends Component {
  render() {
    const { status } = this.props;

    return <div className="Status">{STATUS_MAP[status]}</div>;
  }
}

const STATUS_MAP = {
  true: <span className="sale"> SALE</span>,
};
