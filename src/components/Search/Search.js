import React from 'react';
import './Search.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendKeyword: [
        '곰표떡볶이',
        'LA갈비',
        '육즙만두',
        '감자탕',
        '닭갈비',
      ],
      popularKeyword: ['만두', '찹쌀떡', '치즈볼', '도시락', '닭발'],
    };
  }
  render() {
    const { recommendKeyword, popularKeyword } = this.state;
    return (
      <div className="search-container">
        <div className="background">
          <section className="search-bar-container">
            <section className="back-arrow">
              <img alt="back arrow" src="/images/LeftArrow.svg" />
            </section>
            <p className="search-title">무엇을 찾고 계신가요?</p>
            <div className="search-input-container">
              <input type="text" className="search-input" />
              <span>
                <img src="/images/search.svg" />
              </span>
            </div>
          </section>
          <section className="recommend-keyword">
            <p className="keyword-title">추천 검색어</p>
            <ul>
              {recommendKeyword.length > 0 &&
                recommendKeyword.map((data, index) => {
                  return <li key={index}>{data}</li>;
                })}
            </ul>
          </section>
          <section className="popular-keyword">
            <p className="keyword-title">인기 검색어</p>
            <ul>
              {popularKeyword.length > 0 &&
                popularKeyword.map((data, index) => {
                  return <li key={index}>{data}</li>;
                })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Search;
