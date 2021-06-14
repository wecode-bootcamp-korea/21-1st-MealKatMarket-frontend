import React from 'react';
import './Search.scss';

const RECOMMEND_KEYWORD = [
  '곰표떡볶이',
  'LA갈비',
  '육즙만두',
  '감자탕',
  '닭갈비',
];
const POPULAR_KEYWORD = ['만두', '찹쌀떡', '치즈볼', '도시락', '닭발'];
class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="background">
          <section className="search-bar-container">
            <section className="back-arrow">
              <img alt="back arrow" src="/icon/LeftArrow.svg" />
            </section>
            <p className="search-title">무엇을 찾고 계신가요?</p>
            <div className="search-input-container">
              <input type="text" className="search-input" />
              <span>
                <img alt="search" src="/icon/search.svg" />
              </span>
            </div>
          </section>
          <section className="recommend-keyword">
            <p className="keyword-title">추천 검색어</p>
            <ul>
              {RECOMMEND_KEYWORD.map((data, index) => {
                return <li key={index}>{data}</li>;
              })}
            </ul>
          </section>
          <section className="popular-keyword">
            <p className="keyword-title">인기 검색어</p>
            <ul>
              {POPULAR_KEYWORD.map((data, index) => {
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
