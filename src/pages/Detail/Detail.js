import React from 'react';
import { Link } from 'react-router-dom';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      isVisible: true,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = e => {
    const header = document.querySelector('.detail-header');
    const headerHeight = window.pageYOffset;
    const mainTabHeight = document.querySelector(
      '.product-main-information'
    ).clientHeight;

    headerHeight - 50 > mainTabHeight
      ? this.setState({ isVisible: false })
      : this.setState({ isVisible: true });
  };

  render() {
    return (
      <main className="detail">
        <section>
          <header className="detail-header">
            <section className="left-icon-container">
              <span>
                <img alt="backward" src="/icon/LeftArrow.svg" />
              </span>
            </section>
            <section className="right-icon-container">
              <span>
                <img alt="search" src="/icon/Search.svg" />
              </span>
              <span>
                <img alt="home" src="/icon/Home.svg" />
              </span>
              <span>
                <img alt="cart" src="/icon/Buy.svg" />
              </span>
            </section>
          </header>
          <section className="product-preview-information">
            <img alt="product" src="/images/namul.jpeg" class="product-photo" />
            <article className="product-info">
              <p className="product-company">띵커바디</p>
              <p className="product-title">띵커바디 식단관리 도시락</p>
              <p className="product-price">23,900원</p>
              <p className="product-origin">원산지표시: 상품정보고시 참조</p>
              <div className="product-rating">4.9</div>
              <Link to="/" className="product-review">
                30000개의 후기
              </Link>
            </article>
          </section>
          <section className="product-delivery-info"></section>
          <section className="product-main-information">
            <section className="product-tab">
              <ul>
                <li>상품정보</li>
                <li>후기</li>
              </ul>
            </section>
            <section className="product-main-image-container"></section>
          </section>
          <section className="purchase-bar">
            <img alt="heart" src="/icon/heart.svg" />
            <button className="purchase-button">구매하기</button>
          </section>
        </section>
      </main>
    );
  }
}

export default Detail;
