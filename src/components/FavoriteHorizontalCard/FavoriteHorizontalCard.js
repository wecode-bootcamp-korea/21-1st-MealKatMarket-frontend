import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteHorizontalCard.scss';

class FavoriteHorizontalCard extends React.Component {
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
    const { detail_image, name, discount, discounted_price } = this.props.liked;
    return (
      <li className="favorite-horizontal-card-container">
        <div className="card-wrapper">
          <Link to="/" className="image-wrapper">
            <img src={detail_image} alt="food" />
          </Link>
          <div className="info-wrapper">
            <Link to="/" className="info-link">
              <p className="product-name">{name}</p>
              <span className={discount === 0 ? 'non' : 'discount'}>
                {discount}%
              </span>
              <span className="product-price">
                {Math.abs(discounted_price).toLocaleString()} <span>원</span>
              </span>
            </Link>
          </div>
          <div className="icon-wrapper">
            <img
              onClick={this.toggleLike}
              src={
                this.state.isLiked
                  ? '/icon/heart-empty.svg'
                  : '/icon/heart-full.svg'
              }
              className="heart-button"
              alt="heart"
            />
            <img className="cart-icon" src="/icon/Buy.svg" alt="cart-icon" />
          </div>
        </div>
      </li>
    );
  }
}

export default FavoriteHorizontalCard;
