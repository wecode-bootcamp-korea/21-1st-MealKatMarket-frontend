import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render() {
    const { currentMenu } = this.props;

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
          <Link to="/products/search">
            <img src="/icon/Search.svg" alt="search_icon" />
          </Link>
        </div>
        <div className="header-top-menu">
          <ul className="header-top-menu-list">
            {MENU_ARR.map((menu, index) => {
              return (
                <li>
                  <Link
                    to={menu.url}
                    key={index}
                    className={`menu${
                      currentMenu === menu.no ? '-clicked' : '-link'
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;

const MENU_ARR = [
  { name: '밀캣추천', url: '/main', className: 'menu-link', no: 0 },
  { name: '상품보기', url: '/product', className: 'menu-link', no: 1 },
  { name: '런칭특가', url: '/bargain', className: 'menu-link', no: 2 },
];
