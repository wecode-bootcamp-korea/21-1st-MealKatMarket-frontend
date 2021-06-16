import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.scss';

class BottomNav extends React.Component {
  render() {
    return (
      <div className="bottom-container">
        <div className="background">
          <ul className="list-wrapper">
            <li>
              <Link to="/" className="icon-link">
                <img src="/icon/Home.svg" alt="home-icon" />
                <span>홈</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="icon-link">
                <img src="/icon/Buy.svg" alt="cart-icon" />
                <span>카트</span>
              </Link>
            </li>
            <li>
              <Link to="/favorite" className="icon-link">
                <img src="/icon/heart.svg" alt="heart-icon" />
                <span>관심상품</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="icon-link">
                <img src="/icon/Profile.svg" alt="profile-icon" />
                <span>마이밀캣</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BottomNav;
