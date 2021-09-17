import React from 'react';
import { Link } from 'react-router-dom';
import './RecommendCard.scss';

class RecommendCard extends React.Component {
  render() {
    const { recommendData } = this.props;

    return (
      <div className="RecommendCard">
        <div className="background-wrapper">
          {recommendData.map((data, index) => {
            console.log(data);
            return (
              index < 4 && (
                <div className="all-wrapper" key={data.id}>
                  <div className="image-wrapper">
                    <Link to="/" className="detail-link">
                      <img src={data.img_url} alt="food" />
                    </Link>
                  </div>
                  <div className="info-wrapper">
                    <Link to="/" className="detail-link">
                      <p className="name">{`${data.name.substring(
                        0,
                        7
                      )}...`}</p>
                      <span className="before-price">
                        {data.price.toLocaleString()}
                      </span>
                      <div className="price-line">
                        <span className="percent">{data.discount}</span>
                        <span className="won">₩</span>
                        <span className="now-price">
                          {data.discounted_price.toLocaleString()}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecommendCard;
