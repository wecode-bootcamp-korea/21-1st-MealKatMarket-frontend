import React from 'react';
import './Register.scss';

class Register extends React.Component {
  render() {
    return (
      <body>
        <header></header>
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
            <input type="submit" value="가입하기" />
          </form>
        </main>
      </body>
    );
  }
}

export default Register;
