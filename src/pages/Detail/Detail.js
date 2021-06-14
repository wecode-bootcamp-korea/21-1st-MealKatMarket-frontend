import React from 'react';
import { Link } from 'react-router-dom';
import BottomModal from '../../components/BottomModal/BottomModal';
import Footer from '../../components/Footer/Footer';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.mainTab = React.createRef();
    this.state = {
      productInfo: [],
      isModalOn: false,
      isClicked: true,
      isVisible: true,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);

    // Config로 수정 예정
    fetch(`http://10.58.7.67:8000/products?category_id=1&food_id=1`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ productInfo: res });
      });
  };

  componentDidUpdate() {
    const {
      productInfo: { message },
    } = this.state;
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const headerHeight = window.pageYOffset;
    const mainTabHeight = this.mainTab.current.offsetTop;

    if (headerHeight > mainTabHeight - 60 && this.state.isVisible) {
      this.setState({ isVisible: false });
    } else if (headerHeight < mainTabHeight - 60 && !this.state.isVisible) {
      this.setState({ isVisible: true });
    }
  };

  toggleModal = () => {
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
  };

  toggleClicked = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { isClicked, isVisible, isModalOn, productInfo } = this.state;
    const {
      productInfo: { message },
    } = this.state;

    if (isModalOn) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

    return (
      <main className="detail">
        {message && (
          <section key="3" className="detail-container">
            {isModalOn && (
              <BottomModal
                toggleModal={this.toggleModal}
                requireOption={message.required_food}
                selectOption={message.select_food}
              />
            )}
            <header
              className={
                isVisible ? 'detail-header visible ' : 'detail-header invisible'
              }
            >
              <section className="left-icon-container">
                <span>
                  <img
                    alt="backward"
                    src="/icon/LeftArrow.svg"
                    onClick={this.goBack}
                  />
                </span>
              </section>
              <section className="right-icon-container">
                <span>
                  <Link to="/search">
                    <img alt="search" src="/icon/Search.svg" />
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <img alt="home" src="/icon/Home.svg" />
                  </Link>
                </span>
                <span>
                  <Link to="/cart">
                    <img alt="cart" src="/icon/Buy.svg" />
                  </Link>
                </span>
              </section>
            </header>
            <section className="product-preview-information">
              <img
                alt="product"
                src={message.detail_image}
                class="product-photo"
              />
              <article className="product-info">
                <p className="product-title">{message.name}</p>
                <p className="product-price">
                  {message.price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </p>
                <p className="product-origin">원산지표시: 상품정보고시 참조</p>
                <div className="product-rating">{message.star_score}</div>
                <Link to="/" className="product-review">
                  {message.review_count}개의 후기
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
                  {isClicked ? (
                    <li class="clicked" onClick={this.toggleClicked}>
                      상품정보
                    </li>
                  ) : (
                    <li class onClick={this.toggleClicked}>
                      상품정보
                    </li>
                  )}
                  {!isClicked ? (
                    <li class="clicked" onClick={this.toggleClicked}>
                      후기
                    </li>
                  ) : (
                    <li class onClick={this.toggleClicked}>
                      후기
                    </li>
                  )}
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
            <Footer />
          </section>
        )}
      </main>
    );
  }
}

export default Detail;
