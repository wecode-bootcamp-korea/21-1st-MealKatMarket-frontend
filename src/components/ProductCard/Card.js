import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import Status from './Status';

class Card extends React.Component {
  render() {
    const {
      card_img,
      status,
      name,
      before_price,
      percent,
      now_price,
      star,
      review,
    } = this.props.card;
    return (
      <li className="productcard-wrapper">
        <div className="image-wrapper">
          <Status status={status} />
          <Link to="#" className="detail-link">
            <img src={card_img} alt="donut" />
          </Link>
          <Link to="/" className="cart-link">
            <img src="/icon/cart-button-40.svg" alt="cart-icon" />
          </Link>
        </div>
        <div className="info-wrapper">
          <Link to="#" className="detail-link">
            <p className="name">{name}</p>
            <p className="before-price">{before_price}</p>
            <div className="price-line">
              <span className={percent === undefined ? 'non' : 'percent'}>
                {percent}
              </span>
              <span className="now-price">{now_price}</span>
              <span className="won">원</span>
            </div>
          </Link>
          <Link to="#" className="review-link">
            <img src="/icon/star.svg" alt="star-icon" />
            <span> {star}</span>
            <span> | </span>
            <span> 후기 {review}</span>
          </Link>
        </div>
      </li>
    );
  }
}

export default Card;
