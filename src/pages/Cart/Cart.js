import React from 'react';
import { Link } from 'react-router-dom';
import RecommendCard from '../../components/RecommendCard/RecommendCard';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      currentItems: [],
      recommendData: [],
    };
  }

  componentDidUpdate() {
    console.log(this.state.recommendData);
  }

  componentDidMount() {
    fetch('/data/RecommendData.json')
      .then(res => res.json())
      .then(res => this.setState({ recommendData: res }));
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { currentItems, recommendData } = this.state;

    return (
      <div className="Cart">
        <div className="background">
          <header>
            <span className="left-arrow" onClick={this.goBack}>
              <img alt="return back icon" src="/icon/LeftArrow.svg" />
            </span>
            <span className="header-title">카트</span>
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
            {currentItems.length > 0 ? (
              <section className="goods-exist">
                <button className="add-address-button">배송지 입력</button>
              </section>
            ) : (
              <section className="goods-empty">
                <img alt="cart icon" src="/icon/Buy_shadow.svg" />
                <p>카트가 비어있어요</p>
                <Link className="add-cart" to="/">
                  채우러 가기
                </Link>
              </section>
            )}
          </section>
        </div>
        <section className="current-popular-goods-container">
          <p>실시간 베스트 상품</p>
          <section className="goods-container">
            {recommendData.length > 0 && (
              <RecommendCard recommendData={recommendData} />
            )}
          </section>
        </section>
        {currentItems.length > 0 && (
          <section className="calculate-container">
            <section className="total-product-value">
              <span className="value-text">총 상품 금액</span>
              <span className="value-number">7,500원</span>
            </section>
            <section className="total-shipping-value">
              <span className="value-text">총 배송비</span>
              <span className="value-number">3,000원</span>
            </section>
            <div className="divide-line"></div>
            <section className="total-value">
              <span className="total-text">결제예정금액</span>
              <span className="total-number">10,500원</span>
            </section>
          </section>
        )}
      </div>
    );
  }
}

export default Cart;
