import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const { closeModal } = this.props;
    return (
      <div className="modal-background">
        <div className="modal-wrapper">
          <button onClick={closeModal} className="close-button">
            <img src="/icon/close.svg"></img>
          </button>
          <span>로그인이 필요한 서비스입니다.</span>
          <a href="http://localhost:3000/login">
            <button className="login-button">로그인하기</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
