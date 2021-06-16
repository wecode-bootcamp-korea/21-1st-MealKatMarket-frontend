import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav/BottomNav';
import FavoriteVerticalCard from '../../components/FavoriteVerticalCard/FavoriteVerticalCard';
import './Favorite.scss';

class Favorite extends React.Component {
  render() {
    return (
      <div className="favorite-container">
        <div className="background">
          <div className="gnb-container">
            <h1>관심상품</h1>
          </div>
          <div className="wish-login-container">
            <p>
              로그인하고 <br /> 관심상품을 담아보세요.
            </p>
            <div className="login-button-wrapper">
              <Link to="/login">
                <button>로그인</button>
              </Link>
            </div>
            <div className="join-link-wrapper">
              <span>쿠캣마켓 회원이 되어보세요!</span>
              <Link to="/" className="join">
                회원가입
              </Link>
            </div>
          </div>
          <div className="blank"></div>
          <div className="popular-list-container">
            <div className="wish-popular-wrapper">
              <p>많은 관심을 받은 상품</p>
              <FavoriteVerticalCard />
            </div>
            <ul></ul>
          </div>
        </div>
        <BottomNav selectedNav={2} />
      </div>
    );
  }
}

export default Favorite;
