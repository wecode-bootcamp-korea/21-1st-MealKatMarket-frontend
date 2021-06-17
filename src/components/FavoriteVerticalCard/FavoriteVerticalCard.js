import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteVerticalCard.scss';

class FavoriteVerticalCard extends React.Component {
  render() {
    return (
      <li className="favorite-vertical-card-container">
        {RECOMMEND_DATA.map(data => {
          return (
            <div className="card-wrapper">
              <div className="image-wrapper">
                <span className="new">BEST</span>
                <Link to="/" className="image-link">
                  <img src={data.img_url} alt="food" />
                  <Link to="/" className="cart-icon-link">
                    <img src="/icon/cart-button.svg" alt="cart-icon" />
                  </Link>
                </Link>
              </div>
              <div className="product-info-wrapper">
                <Link to="/" className="product-info">
                  <div className="product-name">{data.name}</div>
                  <div className="product-price">
                    <span className="price">{data.price.toLocaleString()}</span>
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
                  <span className="review-count">{data.review_count}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </li>
    );
  }
}

export default FavoriteVerticalCard;

const RECOMMEND_DATA = [
  {
    id: 1,
    name: '캘리포니아 도넛 5종',
    price: 18000,
    discount: '15%',
    discounted_price: 15300,
    img_url: '/images/donut.png',
    review_count: '13,442',
  },
  {
    id: 2,
    name: '계피가 포함된 핫쵸코',
    price: 7000,
    discount: '10%',
    discounted_price: 6300,
    img_url: '/images/hot_choco.png',
    review_count: '10,747',
  },
  {
    id: 3,
    name: '방금 잡은 닭갈비',
    price: 20000,
    discount: '5%',
    discounted_price: 19000,
    img_url: '/images/닭갈비.png',
    review_count: '9,346',
  },
];
