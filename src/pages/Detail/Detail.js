import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
      isModalOn: false,
      isClicked: true,
      isVisible: true,
      isLiked: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    const authToken = localStorage.getItem('Token');

    const {
      match: {
        params: { id },
      },
    } = this.props;

    // Config로 수정 예정
    fetch(`http://10.58.2.187:8000/products/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ productInfo: res });
      });

    fetch(`http://10.58.2.187:8000/products/wish/${id}`, {
      headers: {
        // Token 써야하지만 임시 테스트용으로 직접 Token 넣어둠
        Authorization: authToken,
      },
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          isLiked: res,
        })
      );
  };

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
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetch(`http://10.58.2.187:8000/wishes`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.uJTe8E89_3-PP14E_a7BtLHfOI6RgAWUNOwhNCo6nng',
      },
      body: JSON.stringify({
        food_id: id,
      }),
    })
      .then(res => res.json())
      .then(res => {
        res && this.state.isLiked
          ? this.setState({ isLiked: false })
          : this.setState({ isLiked: true });
      });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { isClicked, isVisible, isModalOn, isLiked } = this.state;
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
                src={message.image[0]}
                className="product-photo"
              />
              <article className="product-info">
                <p className="product-title">{message.name}</p>
                <p className="product-price">
                  {message.price.toLocaleString()}원
                </p>
                <div className="product-discount-info">
                  <p className="product-discount-price">
                    {message.discounted_price.toLocaleString()}원
                  </p>
                  <p className="product-discount-percent">
                    {message.discount}%
                  </p>
                </div>
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
                className="delivery-info-image"
              />
            </section>
            <section className="product-recommend">
              <p className="recommend-title">이 상품은 어떠세요?</p>
              <section className="recommend-card-container">
                <RecommendCard recommendData={message.recommend_food} />
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
                <img alt="product info" src={message.detail_image} />
                <img alt="delivery info" src="/images/쿠캣당일발송.png" />
              </section>
            </section>
            <section className="purchase-bar">
              {isLiked ? (
                <img
                  alt="heart"
                  src="/icon/heart.svg"
                  onClick={this.handleLikeButton}
                />
              ) : (
                <div>dd</div>
              )}

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

export default withRouter(Detail);
