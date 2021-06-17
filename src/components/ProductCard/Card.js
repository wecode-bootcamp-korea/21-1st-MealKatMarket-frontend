import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import Status from './Status';

class Card extends React.Component {
  render() {
    const {
      img_url,
      status,
      name,
      price,
      discount,
      discounted_price,
      star_score,
      review_count,
    } = this.props.card;

    return (
      <li className="productcard-wrapper">
        <div className="image-wrapper">
          <Status status={status} />
          <Link to="#" className="detail-link">
            <img src={img_url} alt="donut" />
          </Link>
          <Link to="/" className="cart-link">
            <img src="/icon/cart-button-40.svg" alt="cart-icon" />
          </Link>
        </div>
        <div className="info-wrapper">
          <Link to="#" className="detail-link">
            <p className="name">{name}</p>
            <p className="before-price">{price}</p>
            <div className="price-line">
              <span className={discount === undefined ? 'non' : 'discount'}>
                {discount}
              </span>
              <span className="now-price">{discounted_price}</span>
              <span className="won">원</span>
            </div>
          </Link>
          <Link to="#" className="review-link">
            <img src="/icon/star.svg" alt="star-icon" />
            <span> {star_score}</span>
            <span> | </span>
            <span> 후기 {review_count}</span>
          </Link>
        </div>
      </li>
    );
  }
}

export default Card;
