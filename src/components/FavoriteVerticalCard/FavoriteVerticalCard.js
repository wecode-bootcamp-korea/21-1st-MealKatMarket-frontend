import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteVerticalCard.scss';

class FavoriteVerticalCard extends React.Component {
  render() {
    return (
      <li className="favorite-vertical-card-container">
        <div className="card-wrapper">
          <div className="image-wrapper">
            <Link to="/" className="image-link">
              <img src="/images/닭갈비.png" alt="food" />
              <Link to="/" className="cart-icon-link">
                <img src="/icon/cart-button.svg" alt="cart-icon" />
              </Link>
            </Link>
          </div>
          <div className="product-info-wrapper">
            <Link to="/" className="product-info">
              <div className="product-name">
                밀캣마켓 매콤크림 닭갈비 650g / 닭갈비 파스타
              </div>
              <div className="product-price">
                <span className="price">9,900</span>
                <span className="won">원</span>
              </div>
            </Link>
          </div>
          <div className="product-etc">
            <Link to="/" className="heart-link">
              <img src="/icon/heart-gray.svg" alt="heart-icon" />
            </Link>
            <Link to="/" className="review-link">
              <span className="review-line">|</span>
              <span className="review-text">후기</span>
              <span className="review-count">40,542</span>
            </Link>
          </div>
        </div>
      </li>
    );
  }
}

export default FavoriteVerticalCard;
