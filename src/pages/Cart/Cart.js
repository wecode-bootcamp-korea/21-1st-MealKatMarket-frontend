import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="cart-container">
        <div className="background">
          <header>
            <span className="left-arrow">
              <img alt="return back icon" src="/images/LeftArrow.svg" />
            </span>
            <span class="header-title">카트</span>
            <span className="home-icon">
              <img alt="Home Icon" src="/images/Home_Black.svg" />
            </span>
          </header>
          <section className="cart-banner">
            <img alt="banner" src="/images/cart_banner.png" />
          </section>
          <section className="cart-goods-container">
            <section className="goods-exist">
              <button className="add-address-button">배송지 입력</button>
            </section>
            <section className="goods-empty">
              <img alt="cart icon" src="/images/Buy_shadow.svg" />
              <p>카트가 비어있어요</p>
              <Link className="add-cart" to="/">
                채우러 가기
              </Link>
            </section>
          </section>
        </div>
        <section className="current-popular-goods-container">
          <p>실시간 베스트 상품</p>
        </section>
      </div>
    );
  }
}

export default Cart;
