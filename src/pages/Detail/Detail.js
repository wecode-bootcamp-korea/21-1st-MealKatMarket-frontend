import React from 'react';
import { Link } from 'react-router-dom';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.mainTab = React.createRef();
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

  handleScroll = () => {
    const headerHeight = window.pageYOffset;
    const mainTabHeight = this.mainTab.current.offsetTop;

    if (headerHeight > mainTabHeight - 60) {
      this.setState({ isVisible: false });
    } else if (headerHeight < mainTabHeight - 60) {
      this.setState({ isVisible: true });
    }
  };

  toggleModal = () => {
    console.log('object');
  };

  render() {
    const { isVisible } = this.state;
    return (
      <main className="detail">
        <section>
          <header
            className={
              isVisible ? 'detail-header visible ' : 'detail-header invisible'
            }
          >
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
          <section className="product-delivery-info">
            <img
              alt="delivery info"
              src="/images/delivery_info.png"
              class="delivery-info-image"
            />
          </section>
          <section className="product-recommend">
            <p className="recommend-title">이 상품은 어떠세요?</p>
          </section>
          <section className="product-main-information" ref={this.mainTab}>
            <section className="product-tab">
              <ul>
                <li>상품정보</li>
                <li>구매정보</li>
                <li>후기</li>
                <li>문의</li>
              </ul>
            </section>
            <section className="product-main-image-container">
              테스트 페이지
            </section>
          </section>
          <section className="purchase-bar">
            <img alt="heart" src="/icon/heart.svg" />
            <button className="purchase-button" onClick={this.toggleModal}>
              구매하기
            </button>
          </section>
        </section>
      </main>
    );
  }
}

export default Detail;
