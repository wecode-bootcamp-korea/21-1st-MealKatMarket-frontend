import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.scss';

class BottomNav extends React.Component {
  render() {
    const { selectedNav } = this.props;

    return (
      <div className="bottom-container">
        <div className="background">
          <ul className="list-wrapper">
            {navArr.map((nav, idx) => {
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
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BottomNav;

const navArr = [
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
    name: '마이밀캣',
    url: '/',
    src: '/icon/Profile.svg',
    alt: 'icon',
    no: 3,
  },
];
