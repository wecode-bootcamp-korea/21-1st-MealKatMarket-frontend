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
          {/* <div className="wish-login-container">
            <p>
              로그인하고 <br /> 관심상품을 담아보세요.
            </p>
            <div className="login-button-wrapper">
              <button>로그인</button>
            </div>
            <div className="join-link-wrapper">
              <span>쿠캣마켓 회원이 되어보세요!</span>
              <a href="#">회원가입</a>
            </div>
          </div> */}
          <div className="empty-container">
            <img src="/images/텅.png" alt="empty" />
            <span>관심상품이 없습니다.</span>
          </div>
          <div className="blank"></div>
          <div className="popular-list-container">
            <div className="wish-popular-wrapper">
              <p>많은 관심을 받은 상품</p>
            </div>
            <ul></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorite;
