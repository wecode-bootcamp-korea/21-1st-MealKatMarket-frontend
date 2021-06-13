import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends React.Component {
  render() {
    return (
      <div className="productcard-wrapper">
        <div className="background">
          <div className="image-wrapper">
            <span className="sale">SALE</span>
            <span className="new">NEW</span>
            <Link to="#" className="detail-link">
              <img src="/images/donut.png" alt="donut" />
            </Link>
            <Link to="/" className="cart-link">
              <img src="/icon/cart-button-40.svg" alt="cart-icon" />
            </Link>
          </div>
          <div className="info-wrapper">
            <Link to="#" className="detail-link">
              <p className="name">
                캘리포니아 도넛 5종(플레인/초콜릿/딸기화이트/로투스커피)
              </p>
              <p className="before-price">17,000원</p>
              <div className="price-line">
                <span className="percent">12%</span>
                <span className="now-price">14,900</span>
                <span className="won">원</span>
              </div>
            </Link>
            <Link to="#" className="review-link">
              <img src="/icon/star.svg" alt="star-icon" />
              <span> 4.6</span>
              <span> | </span>
              <span> 후기 281</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
