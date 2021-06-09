import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <section className="footer-title">(주) 밀켓 사업자 정보</section>
        <div className="divide-line"></div>
        <section className="footer-content">
          <article>
            <span class="title">대표자</span>
            <span className="content">위고두</span>
          </article>
          <article>
            <span class="title">주소</span>
            <span className="content">서울 강남구 테헤란로 427 위워크</span>
          </article>
          <article>
            <span class="title">사업자등록번호</span>
            <span className="content">530-81-01310</span>
          </article>
          <article>
            <span class="title">고객센터</span>
            <span className="content">02-538-9481</span>
          </article>
          <article>
            <span class="title">마케팅 제휴문의</span>
            <span className="content">mealkat@graceful.co.kr</span>
          </article>
          <article>
            <span class="title">개인정보보호 책임자</span>
            <span className="content">security@mealkat.com</span>
          </article>
        </section>
      </div>
    );
  }
}

export default Footer;
