import React from 'react';
import { Link } from 'react-router-dom';
import './RecommendCard.scss';

class RecommendCard extends React.Component {
  render() {
    return (
      <div className="RecommendCard">
        <div className="background">
          <div className="image-wrapper">
            <span className="sale">SALE</span>
            <span className="new">NEW</span>
            <Link to="/" className="detail-link">
              <img src="/images/donut.png" alt="donut" />
            </Link>
          </div>
          <div className="info-wrapper">
            <Link to="/" className="detail-link">
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
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendCard;
