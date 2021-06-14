import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

class Product extends React.Component {
  render() {
    return (
      <div className="product-container">
        <div className="background">
          <ul className="swiper-wrapper">
            <li className="menu-wrapper">
              <Link to="/" className="menu">
                전체
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-2">
                간편요리
              </Link>
            </li>
            <li>
              <Link to="/" className="menu">
                밥류
              </Link>
            </li>
            <li>
              <Link to="/" className="menu">
                면류
              </Link>
            </li>
            <li>
              <Link to="/" className="menu">
                반찬
              </Link>
            </li>
            <li>
              <Link to="/" className="menu">
                간식
              </Link>
            </li>
            <li>
              <Link to="/" className="menu">
                음료
              </Link>
            </li>
          </ul>
          <ul></ul>
        </div>
      </div>
    );
  }
}

export default Product;
