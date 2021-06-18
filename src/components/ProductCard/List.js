import React from 'react';
import './Card.scss';
import Card from './Card';

class List extends React.Component {
  render() {
    const { cardData } = this.props;
    console.log(this.props.cardData);
    return (
      <div className="product-list">
        {cardData.result &&
          cardData.result.map((card, idx) => <Card key={idx} card={card} />)}
      </div>
    );
  }
}

export default List;
