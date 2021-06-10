import React from 'react';
import './Header.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="header-container">
          <div className="logo-contatiner">
            <button className="logo-button">
              <a herf="#" className="logo-link">
                <img className="logo" src="/images/logo3.png" alt="logo" />
              </a>
            </button>
          </div>
          <img src="/icon/Search.svg" alt="search_icon" />
        </div>
        <div className="header-top-menu">
          <ul className="header-top-menu-list">
            <li>
              <a href="#" className="menu-link">
                쿠캣추천
              </a>
            </li>
            <li>
              <a href="#" className="menu-link">
                베스트
              </a>
            </li>
            <li>
              <a href="#" className="menu-link">
                런칭특가
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
