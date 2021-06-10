import React from 'react';
import './Favorite.scss';

class Favorite extends React.Component {
  render() {
    return (
      <div className="favorite-container">
        <div className="background">
          <div className="gnb-container">
            <h1>관심상품</h1>
          </div>
          <div className="wish-login-wrapper">
            <p>
              로그인하고 <br /> 관심상품을 담아보세요.
            </p>
            <div className="login-button-wrapper">
              <button>로그인</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorite;
