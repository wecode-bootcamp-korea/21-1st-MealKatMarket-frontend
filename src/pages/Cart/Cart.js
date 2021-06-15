import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

class Cart extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="cart-container">
        <div className="background">
          <header>
            <span className="left-arrow" onClick={this.goBack}>
              <img alt="return back icon" src="/icon/LeftArrow.svg" />
            </span>
            <span class="header-title">카트</span>
            <span className="home-icon">
              <Link to="/">
                <img alt="Home Icon" src="/icon/Home_Black.svg" />
              </Link>
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
              <img alt="cart icon" src="/icon/Buy_shadow.svg" />
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
