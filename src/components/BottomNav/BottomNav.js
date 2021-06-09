import React from 'react';
import './BottomNav.scss';

class BottomNav extends React.Component {
  render() {
    return (
      <div className="bottom-container">
        <div className="background">
          <ul className="list-wrapper">
            <li>
              <a href="#">
                <img src="/icon/Home.svg" />
                <span>홈</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icon/Buy.svg" />
                <span>카트</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icon/heart.svg" />
                <span>관심상품</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/icon/Profile.svg" />
                <span>마이밀캣</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BottomNav;
