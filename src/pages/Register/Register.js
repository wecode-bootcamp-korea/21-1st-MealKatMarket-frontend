import React from 'react';
import './Register.scss';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      phoneNumber: '',
      emailAlertText: '',
      passwordAlertText: '',
      phoneAlertText: '',
    };
  }

  validateEmail = () => {
    const { email } = this.state;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,10})+$/;

    if (email) {
      email.match(regexEmail)
        ? this.setState({ emailAlertText: '유효한 이메일입니다.' })
        : this.setState({
            emailAlertText: '유효한 이메일을 입력해주세요.',
          });
    } else {
      this.setState({ emailAlertText: '' });
    }
  };

  validatePassword = () => {
    const { password, passwordConfirm } = this.state;

    if (password && passwordConfirm) {
      if (password === passwordConfirm) {
        const regexPassword =
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{7,15}$/;
        passwordConfirm.match(regexPassword)
          ? this.setState({ passwordAlertText: '유효한 비밀번호입니다' })
          : this.setState({
              passwordAlertText: '8자 이상 15자 이하의 비밀번호를 입력해주세요',
            });
      } else if (password !== passwordConfirm) {
        this.setState({ passwordAlertText: '비밀번호가 일치하지 않습니다' });
      }
    } else {
      this.setState({ passwordAlertText: '' });
    }
  };

  validatePhoneNumber = () => {
    const { phoneNumber } = this.state;

    if (phoneNumber) {
      const regexPhoneNumber = /^\d{3}-\d{4}-\d{4}$/;
      phoneNumber.match(regexPhoneNumber)
        ? this.setState({ phoneAlertText: '유효한 휴대폰 번호입니다.' })
        : this.setState({
            phoneAlertText: '010-1234-5678 형식으로 입력해주세요',
          });
    } else {
      this.setState({ phoneAlertText: '' });
    }
  };

  handleInput = e => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { emailAlertText, passwordAlertText, phoneAlertText } = this.state;
    return (
      <div className="register-container">
        <header>
          <span className="back-arrow">
            <img src="/images/LeftArrow.svg" />
          </span>
          <span className="register-title">회원가입</span>
          <span className="home-icon">
            <img src="/images/home_orange.svg" />
          </span>
        </header>
        <main>
          <form action="#">
            <section className="email-container">
              <label>이메일</label>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="example@xxx.com"
                  onChange={this.handleInput}
                  onKeyUp={this.validateEmail}
                />
              </div>
              <span>{emailAlertText}</span>
            </section>
            <section className="password-container">
              <label>비밀번호</label>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="8~20자 이상의 패스워드를 입력해주세요"
                  onChange={this.handleInput}
                  onKeyUp={this.validatePassword}
                />
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="비밀번호 확인"
                  onChange={this.handleInput}
                  onKeyUp={this.validatePassword}
                />
              </div>
              <span>{passwordAlertText}</span>
            </section>
            <section className="name-container">
              <label>이름</label>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="이름 입력"
                  onChange={this.handleInput}
                />
              </div>
            </section>
            <section className="phone-container">
              <label>휴대전화</label>
              <div>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="-를 포함하여 입력"
                  onChange={this.handleInput}
                  onKeyUp={this.validatePhoneNumber}
                />
              </div>
              <span>{phoneAlertText}</span>
            </section>
            <section className="checkbox-container">
              <section>
                <input
                  type="checkbox"
                  className="agree_all"
                  value="agree_all"
                />
                <label htmlFor="agree_all">아래 내용에 전부 동의합니다.</label>
              </section>
              <section>
                <input type="checkbox" className="agree_14" value="agree_14" />
                <label htmlFor="agree_14">만 14세 이상입니다.</label>
              </section>
              <section>
                <input type="checkbox" className="term_1" value="term_1" />
                <label htmlFor="term_1">쿠켓마켓 이용약관에 동의합니다.</label>
              </section>
              <section>
                <input type="checkbox" className="term_2" value="term_2" />
                <label htmlFor="term_2">
                  개인정보 수집 및 이용 동의합니다.
                </label>
              </section>
            </section>
            <input type="submit" value="가입하기" />
          </form>
        </main>
      </div>
    );
  }
}

export default Register;
