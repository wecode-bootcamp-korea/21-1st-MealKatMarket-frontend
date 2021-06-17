import React from 'react';
import './Card.scss';
import Card from './Card';

class List extends React.Component {
  render() {
    const { cardData } = this.props;
    return (
      <div className="product-list">
        {cardData.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
    );
  }
}

export default List;
