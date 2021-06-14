import React from 'react';
import './Register.scss';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      username: '',
      phoneNumber: '',
    };
  }

  validateEmail = () => {
    const { email } = this.state;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,10})+$/;
    return email.match(regexEmail);
  };

  validatePassword = () => {
    const { password, passwordConfirm } = this.state;
    let validatedResult = '';

    if (password === passwordConfirm) {
      const regexPassword =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{7,20}$/;
      passwordConfirm.match(regexPassword)
        ? (validatedResult = '유효한 비밀번호입니다')
        : (validatedResult = '8~20글자의 비밀번호를 입력해주세요');
    } else if (password !== passwordConfirm) {
      validatedResult = '비밀번호가 일치하지 않습니다';
    }

    return validatedResult;
  };

  validateUserName = () => {
    const { username } = this.state;
    const regexUsername = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    return username.match(regexUsername);
  };

  validatePhoneNumber = () => {
    const { phoneNumber } = this.state;
    const regexPhoneNumber = /^\d{3}-\d{4}-\d{4}$/;
    return phoneNumber.match(regexPhoneNumber);
  };

  fetchToDatabase = () => {
    const { email, password, username, phoneNumber } = this.state;
    fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        username,
        phoneNumber,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  handleInput = e => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const allValid =
      this.validateEmail() &&
      this.validatePassword() &&
      this.validateUserName() &&
      this.validatePhoneNumber();

    return (
      <div className="register-container">
        <header>
          <span className="back-arrow">
            <img alt="backward" src="/icon/LeftArrow.svg" />
          </span>
          <span className="register-title">회원가입</span>
          <span className="home-icon">
            <img alt="home" src="/icon/home_orange.svg" />
          </span>
        </header>
        <main>
          <form action="#" onSubmit={this.handleSubmit}>
            <section className="email-container">
              <label>이메일</label>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="example@xxx.com"
                  onChange={this.handleInput}
                />
              </div>
              <span>
                {this.validateEmail()
                  ? '유효한 이메일입니다'
                  : '이메일을 입력해주세요'}
              </span>
            </section>
            <section className="password-container">
              <label>비밀번호</label>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="8~20자 이상의 특수문자(!@#$%^*+=-)를 포함한 암호를 입력해주세요"
                  onChange={this.handleInput}
                />
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="비밀번호 확인"
                  onChange={this.handleInput}
                />
              </div>
              <span>
                {this.validatePassword() || '비밀번호를 입력해주세요'}
              </span>
            </section>
            <section className="name-container">
              <label>이름</label>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="한글 2~4자, 영어 2~10자"
                  onChange={this.handleInput}
                />
              </div>
              <span>
                {this.validateUserName()
                  ? '유효한 이름입니다'
                  : '이름을 입력해주세요'}
              </span>
            </section>
            <section className="phone-container">
              <label>휴대전화</label>
              <div>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="-를 포함하여 입력"
                  onChange={this.handleInput}
                />
              </div>
              <span>
                {this.validatePhoneNumber()
                  ? '유효한 휴대전화 번호입니다'
                  : '번호를 입력해주세요'}
              </span>
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
            {allValid ? (
              <input
                type="submit"
                className="valid-submit-button"
                value="가입하기"
                onClick={this.fetchToDatabase}
                style={{ backgroundColor: '#f55b04', color: '#ffffff' }}
              />
            ) : (
              <input
                type="submit"
                classNAme="invalid-submit-button"
                value="가입하기"
                style={{ backgroundColor: '#f3f3f0' }}
              />
            )}
          </form>
        </main>
      </div>
    );
  }
}

export default Register;
