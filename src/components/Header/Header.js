import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/" className="logo-link">
                <img className="logo" src="/images/logo3.png" alt="logo" />
              </Link>
            </button>
          </div>
          <Link to="/search">
            <img src="/icon/Search.svg" alt="search_icon" />
          </Link>
        </div>
        <div className="header-top-menu">
          <ul className="header-top-menu-list">
            <li>
              <Link to="/" className="menu-link">
                쿠캣추천
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-link">
                베스트
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-link">
                런칭특가
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
