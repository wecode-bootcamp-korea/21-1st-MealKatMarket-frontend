import React from 'react';
import './Register.scss';

class Register extends React.Component {
  render() {
    return (
      <div className="register-container">
        <header>
          <span className="back-arrow">뒤로가기</span>
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
                <input type="email" placeholder="email을 입력해주세요" />
              </div>
            </section>
            <section className="password-container">
              <label>비밀번호</label>
              <div>
                <input
                  type="password"
                  placeholder="8~20자 이상의 패스워드를 입력해주세요"
                />
                <input type="password" placeholder="비밀번호 확인" />
              </div>
            </section>
            <section className="name-container">
              <label>이름</label>
              <div>
                <input type="text" placeholder="이름 입력" />
              </div>
            </section>
            <section className="phone-container">
              <label>휴대전화</label>
              <div>
                <input type="text" placeholder="-제외하고 번호 입력" />
              </div>
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
