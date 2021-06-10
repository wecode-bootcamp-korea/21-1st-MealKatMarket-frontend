import React from 'react';
import './Bargain.scss';
import Modal from '../../components/Modal/Modal';

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
        <div className="background">
          <div className="banner-wrapper">
            <img src="/images/bargain-banner.png" />
          </div>
          <section className="bargain-now-wrapper">
            <div className="image-wrapper">
              <img src="/images/닭갈비.png" alt="food-image" />
              <div className="bargain-now-timer">
                <span>특가할인 종료까지 </span>
                <span className="time">00:00:00</span>
              </div>
            </div>
            <div className="bargain-info">
              <span className="percent">30%</span>
              <span className="now-price">11,900</span>
              <span className="won">원</span>
              <span className="before-price">17,000원</span>
              <p> 밀캣추천 크림 매콤 닭갈비 650g / 닭갈비 파스타</p>
              <a href="#">
                <button>특가 상품 보러가기</button>
              </a>
            </div>
          </section>
          <div className="blank"></div>
          <section className="bargain-next-wrapper">
            <p className="next-title">다음 특가</p>
            <span className="detail-text">
              오후 12시, 단 하루만 신상품 초특가!
            </span>
            <div className="next-bargain-image">
              <a href="#">
                <div className="color-overlay"></div>
                <img
                  className="pizza-image"
                  src="/images/pizza.png"
                  alt="food-image"
                />
                <p className="open-time">
                  06월 11일 12:00 <br />
                  오픈예정
                </p>
              </a>
            </div>
            <div className="bargain-info">
              <span className="percent">34%</span>
              <span className="now-price">6,500원</span>
              <span className="before-price">9,900원</span>
              <p> 오븐 나폴리 피자 3종</p>
              <a className="open-link">
                <button onClick={openModal}>
                  <img src="/icon/Notification.svg" alt="noti-icon" />
                  오픈 알림 신청
                </button>
              </a>
            </div>
          </section>
        </div>
        {this.state.visible ? <Modal closeModal={this.closeModal} /> : null}
      </div>
    );
  }
}

export default Bargain;
