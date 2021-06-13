import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteHorizontalCard.scss';

class FavoriteHorizontalCard extends React.Component {
  render() {
    return (
      <li className="favorite-horizontal-card-container">
        <div className="card-wrapper">
          <Link to="/" className="image-wrapper">
            <img src="/images/닭갈비.png" alt="food" />
          </Link>
          <div className="info-wrapper">
            <Link to="/" className="info-link">
              <p className="product-name">
                밀캣마켓 매콤크림 닭갈비 650g / 닭갈비 파스타(갈비양념/일반양념)
              </p>
              <p className="product-price">
                9,900 <span>원</span>
              </p>
            </Link>
          </div>
          <div className="icon-wrapper">
            <img src="/icon/heart.svg" alt="heart-icon" />
            <img className="cart-icon" src="/icon/Buy.svg" alt="cart-icon" />
          </div>
        </div>
      </li>
    );
  }
}

export default FavoriteHorizontalCard;
