import React from 'react';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="background">
          <div className="gnb-container">
            <img
              className="arrow"
              src="/icon/LeftArrow.svg"
              alt="left-arrow-icon"
            />
            <img className="home" src="/icon/Home.svg" alt="home-icon" />
          </div>
          <div className="form-wrapper">
            <p className="email">이메일</p>
            <input placeholder="example@mealkat.com"></input>
            <p className="password">비밀번호</p>
            <input type="password" placeholder="비밀번호 입력"></input>
          </div>
          <div className="login-remember-wrapper">
            <input type="checkbox"></input>
            <label>로그인 상태 유지</label>
          </div>
          <div className="login-button-wrapper">
            <button>로그인</button>
          </div>
          <div className="more-button-wrapper">
            <a href="#">아이디 찾기</a>
            <a href="#">|</a>
            <a href="#">비밀번호 찾기</a>
            <a href="#">|</a>
            <a href="#">회원가입</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
