import React from 'react';
import './Bargain.scss';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import Timer from '../../components/Timer/Timer';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BottomNav from '../../components/BottomNav/BottomNav';

class Bargain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal = () => {
    this.setState({
      visible: true,
    });
  };

  closeModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { openModal } = this;
    return (
      <div className="bargain-container">
        <Header />
        <div className="background">
          <div className="banner-wrapper">
            <img src="/images/bargain-banner.png" alt="banner" />
          </div>
          <section className="bargain-now-wrapper">
            <div className="image-wrapper">
              <img src="/images/닭갈비.png" alt="food" />
              <div className="bargain-now-timer">
                <Timer />
              </div>
            </div>
            <div className="bargain-info">
              <span className="percent">30%</span>
              <span className="now-price">11,900</span>
              <span className="won">원</span>
              <span className="before-price">17,000원</span>
              <p> 밀캣추천 크림 매콤 닭갈비 650g / 닭갈비 파스타</p>
              <Link to="/">
                <button>특가 상품 보러가기</button>
              </Link>
            </div>
          </section>
          <div className="blank"></div>
          <section className="bargain-next-wrapper">
            <p className="next-title">다음 특가</p>
            <span className="detail-text">
              오후 12시, 단 하루만 신상품 초특가!
            </span>
            <div className="next-bargain-image">
              <Link to="/">
                <div className="color-overlay"></div>
                <img
                  className="pizza-image"
                  src="/images/pizza.png"
                  alt="food"
                />
                <p className="open-time">
                  06월 11일 12:00 <br />
                  오픈예정
                </p>
              </Link>
            </div>
            <div className="bargain-info">
              <span className="percent">34%</span>
              <span className="now-price">6,500원</span>
              <span className="before-price">9,900원</span>
              <p> 오븐 나폴리 피자 3종</p>
              <Link className="open-link">
                <button onClick={openModal}>
                  <img src="/icon/Notification.svg" alt="noti-icon" />
                  오픈 알림 신청
                </button>
              </Link>
            </div>
          </section>
        </div>
        <BottomNav />
        <Footer />
        {this.state.visible && <Modal closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default Bargain;
