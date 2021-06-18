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
            return (
              index < 4 && (
                <div className="all-wrapper">
                  <div className="image-wrapper" key={index}>
                    <Link to="/" className="detail-link">
                      <img src={data.image} alt="food" />
                    </Link>
                  </div>
                  <div className="info-wrapper">
                    <Link to="/" className="detail-link">
                      <p className="name">{`${data.name.substring(
                        0,
                        7
                      )}...`}</p>
                      <p className="before-price">
                        {parseInt(data.price.slice(0, -3)).toLocaleString()}
                      </p>
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
