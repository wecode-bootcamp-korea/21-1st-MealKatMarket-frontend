import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import Status from './Status';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  toggleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

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
          <img
            onClick={this.toggleLike}
            src={
              this.state.isLiked
                ? '/icon/heart-40-liked.svg'
                : '/icon/heart-40.svg'
            }
            className="heart-button"
            alt="heart"
          />
        </div>
        <div className="info-wrapper">
          <Link to="#" className="detail-link">
            <p className="name">{name}</p>
            <p className={discounted_price === price ? 'non' : 'before-price'}>
              {Math.abs(price).toLocaleString()}원
            </p>
            <div className="price-line">
              <span className={discount === 0 ? 'non' : 'discount'}>
                {discount}%
              </span>
              <span className="now-price">
                {Math.abs(discounted_price).toLocaleString()}
              </span>
              <span className="won">원</span>
            </div>
          </Link>
          <Link to="#" className="review-link">
            <img src="/icon/star.svg" alt="star-icon" />
            <span> {star_score}</span>
            <span> | </span>
            <span> 후기 {review_count.toLocaleString()}</span>
          </Link>
        </div>
      </li>
    );
  }
}

export default Card;
