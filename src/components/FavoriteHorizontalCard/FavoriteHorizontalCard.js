import React from 'react';
import './FavoriteHorizontalCard.scss';

class FavoriteHorizontalCard extends React.Component {
  render() {
    return (
      <li className="favorite-horizontal-card-container">
        <div className="card-wrapper">
          <a className="image-wrapper">
            <img src="/images/닭갈비.png" />
          </a>
          <div className="info-wrapper">
            <a className="info-link">
              <p className="product-name">
                밀캣마켓 매콤크림 닭갈비 650g / 닭갈비 파스타(갈비양념/일반양념)
              </p>
              <p className="product-price">
                9,900 <span>원</span>
              </p>
            </a>
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
