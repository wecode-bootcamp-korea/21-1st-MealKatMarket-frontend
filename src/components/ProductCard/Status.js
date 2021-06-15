import { Component } from 'react';
import './Status.scss';

export default class Status extends Component {
  render() {
    const { status } = this.props;

    return <div className="Status">{STATUS_MAP[status]}</div>;
  }
}

const STATUS_MAP = {
  new: <span className="new"> NEW </span>,
  sale: <span className="sale"> SALE</span>,
  both: (
    <div>
      <span className="new"> NEW </span>
      <span className="and-sale"> SALE</span>
    </div>
  ),
};
