import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPassword: '',
    };
  }

  goToMain = () => {
    fetch('http://:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.userId,
        password: this.state.userPassword,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.message === 'SUCCESS') {
          this.props.history.push('/product');
          localStorage.setItem('token', result.token);
        }
      });
  };

  handleIdInput = e => {
    this.setState({
      userId: e.target.value,
    });
  };

  handlePasswordInput = e => {
    this.setState({
      userPassword: e.target.value,
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { handleIdInput, handlePasswordInput } = this;
    const { userId, userPassword } = this.state;

    return (
      <div className="login-container">
        <div className="background">
          <div className="gnb-container">
            <img
              className="arrow"
              src="/icon/LeftArrow.svg"
              alt="left-arrow-icon"
              onClick={this.goBack}
            />
            <img className="home" src="/icon/Home.svg" alt="home-icon" />
          </div>
          <div className="form-wrapper">
            <p className="email">이메일</p>
            <input
              placeholder="example@mealkat.com"
              value={userId}
              onChange={handleIdInput}
            ></input>
            <p className="password">비밀번호</p>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={userPassword}
              onChange={handlePasswordInput}
            ></input>
          </div>
          <div className="login-remember-wrapper">
            <input type="checkbox"></input>
            <label>로그인 상태 유지</label>
          </div>
          <div className="login-button-wrapper">
            <button onClick={this.goToMain}>로그인</button>
          </div>
          <div className="more-button-wrapper">
            <Link to="/">아이디 찾기</Link>
            <Link to="/">|</Link>
            <Link to="/">비밀번호 찾기</Link>
            <Link to="/">|</Link>

            <Link to="/register">회원가입</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
