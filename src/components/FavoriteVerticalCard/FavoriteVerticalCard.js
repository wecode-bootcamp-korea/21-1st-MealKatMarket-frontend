import React from 'react';
import './FavoriteVerticalCard.scss';

class FavoriteVerticalCard extends React.Component {
  render() {
    return (
      <li className="favorite-vertical-card-container">
        <div className="card-wrapper">
          <div className="image-wrapper">
            <a href="#" className="image-link">
              <img src="/images/닭갈비.png" alt="food-image" />
              <a href="#" className="cart-icon-link">
                <img src="/icon/cart-button.svg" alt="cart-icon" />
              </a>
            </a>
          </div>
          <div className="product-info-wrapper">
            <a className="product-info">
              <div className="product-name">
                밀캣마켓 매콤크림 닭갈비 650g / 닭갈비 파스타
              </div>
              <div className="product-price">
                <span className="price">9,900</span>
                <span className="won">원</span>
              </div>
            </a>
          </div>
          <div className="product-etc">
            <a href="#" className="heart-link">
              <img src="/icon/heart-gray.svg" alt="heart-icon" />
            </a>
            <a href="#" className="review-link">
              <span className="review-line">|</span>
              <span className="review-text">후기</span>
              <span className="review-count">40,542</span>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default FavoriteVerticalCard;
