import React from 'react';
import { Link } from 'react-router-dom';
import RecommendCard from '../../components/RecommendCard/RecommendCard';
import BottomModal from '../../components/BottomModal/BottomModal';
import Footer from '../../components/Footer/Footer';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.mainTab = React.createRef();
    this.state = {
      productInfo: [],
      recommendProduct: [],
      isModalOn: false,
      isClicked: true,
      isVisible: true,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);

    // Config로 수정 예정
    fetch(`/data/Project.json`)
      .then(res => res.json())
      .then(res => {
        this.setState({ productInfo: res });
      });

    fetch('/data/RecommendData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ recommendProduct: res });
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

  handleLikeButton = () => {
    fetch(`http://${process.env.KYUCHEOL_IP_ADDRESS}/wishes?food_id=4`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.JMYVoc9YUtC3QJfn1dwgZGYInuLr6MMZq0UnlsDZgQo',
      },
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { isClicked, isVisible, isModalOn, productInfo, recommendProduct } =
      this.state;

    if (isModalOn) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

    return (
      <main className="detail">
        {productInfo &&
          productInfo.map(productInfo => (
            <section key="3" className="detail-container">
              {isModalOn && (
                <BottomModal
                  toggleModal={this.toggleModal}
                  requireOption={productInfo.required_food}
                  selectOption={productInfo.select_food}
                />
              )}
              <header
                className={
                  isVisible
                    ? 'detail-header visible '
                    : 'detail-header invisible'
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
                  src={productInfo.detail_image[0].image_url}
                  className="product-photo"
                />
                <article className="product-info">
                  <p className="product-title">{productInfo.name}</p>
                  <p className="product-price">
                    {productInfo.price.toLocaleString()}원
                  </p>
                  <div className="product-discount-info">
                    <p className="product-discount-price">
                      {productInfo.discounted_price.toLocaleString()}원
                    </p>
                    <p className="product-discount-percent">
                      {productInfo.discount}
                    </p>
                  </div>
                  <p className="product-origin">
                    원산지표시: 상품정보고시 참조
                  </p>
                  <div className="product-rating">{productInfo.star_score}</div>
                  <Link to="/" className="product-review">
                    {productInfo.review_count}개의 후기
                  </Link>
                </article>
              </section>
              <section className="product-delivery-info">
                <img
                  alt="delivery info"
                  src="/images/delivery_info.png"
                  className="delivery-info-image"
                />
              </section>
              <section className="product-recommend">
                <p className="recommend-title">이 상품은 어떠세요?</p>
                <section className="recommend-card-container">
                  <RecommendCard recommendData={recommendProduct} />
                </section>
              </section>
              <section className="product-main-information" ref={this.mainTab}>
                <section className="product-tab">
                  <ul>
                    {isClicked ? (
                      <li className="clicked" onClick={this.toggleClicked}>
                        상품정보
                      </li>
                    ) : (
                      <li onClick={this.toggleClicked}>상품정보</li>
                    )}
                    {!isClicked ? (
                      <li className="clicked" onClick={this.toggleClicked}>
                        후기
                      </li>
                    ) : (
                      <li onClick={this.toggleClicked}>후기</li>
                    )}
                  </ul>
                </section>
                <section className="product-main-image-container">
                  테스트 페이지
                </section>
              </section>
              <section className="purchase-bar">
                <img
                  alt="heart"
                  src="/icon/heart.svg"
                  onClick={this.handleLikeButton}
                />
                <button className="purchase-button" onClick={this.toggleModal}>
                  구매하기
                </button>
              </section>
              <Footer />
            </section>
          ))}
      </main>
    );
  }
}

export default Detail;
