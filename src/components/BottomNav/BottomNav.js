import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.scss';

class BottomNav extends React.Component {
  logout = () => {
    localStorage.removeItem('token');
  };

  render() {
    const { selectedNav } = this.props;
    const tokenForAuth = localStorage.getItem('token');

    return (
      <div className="bottom-container">
        <div className="background">
          <ul className="list-wrapper">
            {!tokenForAuth
              ? LOGIN_NAV_ARR.map((nav, idx) => {
                  return (
                    <li>
                      <Link
                        to={nav.url}
                        key={idx}
                        className={
                          selectedNav === nav.no ? 'icon-selected' : 'icon-link'
                        }
                      >
                        <img src={nav.src} alt={nav.alt} />
                        <span>{nav.name}</span>
                      </Link>
                    </li>
                  );
                })
              : LOGOUT_NAV_ARR.map((nav, idx) => {
                  return nav.no === 3 ? (
                    <li>
                      <Link
                        to={nav.url}
                        key={idx}
                        onClick={this.logout}
                        className={
                          selectedNav === nav.no ? 'icon-selected' : 'icon-link'
                        }
                      >
                        <img src={nav.src} alt={nav.alt} />
                        <span>{nav.name}</span>
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link
                        to={nav.url}
                        key={idx}
                        className={
                          selectedNav === nav.no ? 'icon-selected' : 'icon-link'
                        }
                      >
                        <img src={nav.src} alt={nav.alt} />
                        <span>{nav.name}</span>
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

export default BottomNav;

const LOGIN_NAV_ARR = [
  {
    name: '홈',
    url: '/product',
    src: '/icon/Home.svg',
    alt: 'icon',
    no: 0,
  },
  { name: '카트', url: '/cart', src: '/icon/Buy.svg', alt: 'icon', no: 1 },
  {
    name: '관심상품',
    url: '/favorite',
    src: '/icon/heart.svg',
    alt: 'icon',
    no: 2,
  },
  {
    name: '로그인',
    url: '/login',
    src: '/icon/Profile.svg',
    alt: 'icon',
    no: 3,
  },
];

const LOGOUT_NAV_ARR = [
  {
    name: '홈',
    url: '/product',
    src: '/icon/Home.svg',
    alt: 'icon',
    no: 0,
  },
  { name: '카트', url: '/cart', src: '/icon/Buy.svg', alt: 'icon', no: 1 },
  {
    name: '관심상품',
    url: '/favoritemine',
    src: '/icon/heart.svg',
    alt: 'icon',
    no: 2,
  },
  {
    name: '로그아웃',
    url: '/',
    src: '/icon/Profile.svg',
    alt: 'icon',
    no: 3,
  },
];
