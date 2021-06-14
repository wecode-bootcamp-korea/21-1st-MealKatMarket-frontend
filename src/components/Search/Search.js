import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import SearchList from '../../components/SearchList/SearchList';
import './Search.scss';

const { inputValue, searchedData } = this.state;

const RECOMMEND_KEYWORD = [
  '곰표떡볶이',
  'LA갈비',
  '육즙만두',
  '감자탕',
  '모슬포',
];
const POPULAR_KEYWORD = ['만두', '찹쌀떡', '치즈볼', '오징어', '모슬포'];
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      searchedData: [],
      inputValue: '',
    };
  }

  componentDidMount() {
    fetch('/data/testData.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          productData: res,
        })
      );
  }

  searchByInput = () => {
    const { productData, inputValue } = this.state;
    const filteredData = productData.filter(data =>
      data.name.includes(inputValue)
    );

    this.setState({ searchedData: !inputValue ? [] : filteredData });
  };

  searchByKeyword = keyword => {
    const { productData } = this.state;
    const filteredData = productData.filter(data =>
      data.name.includes(keyword)
    );

    this.setState({ searchedData: filteredData });
  };

  handleClickCross = () => {
    this.setState({
      inputValue: '',
    });
  };

  handleClickKeyword = e => {
    const {
      target: { innerText: keyword },
    } = e;

    this.setState({ inputValue: keyword });
    this.searchByKeyword(keyword);
  };

  handleInput = e => {
    const {
      target: { value },
    } = e;
    this.setState(
      {
        inputValue: value,
      },
      this.searchByInput()
    );
  };

  render() {
    return (
      <div className="search">
        <div className="background">
          <section className="search-bar-container">
            <section className="back-arrow">
              <Link to="/">
                <img alt="back arrow" src="/icon/LeftArrow.svg" />
              </Link>
            </section>
            <p className="search-title">무엇을 찾고 계신가요?</p>
            <div className="search-input-container">
              <input
                type="text"
                className="search-input"
                onChange={this.handleInput}
                value={inputValue}
              />
              <span>
                {!inputValue ? (
                  <img alt="search" src="/icon/search.svg" />
                ) : (
                  <img
                    alt="close"
                    src="/icon/close.svg"
                    onClick={this.handleClickCross}
                  />
                )}
              </span>
            </div>
          </section>
          {/* RecommendKeyword 컴포넌트로 분리 예정 */}
          {!inputValue ? (
            <>
              <section className="recommend-keyword">
                <p className="keyword-title">추천 검색어</p>
                <ul>
                  {RECOMMEND_KEYWORD.map((data, index) => {
                    return (
                      <li key={index} onClick={e => this.handleClickKeyword(e)}>
                        {data}
                      </li>
                    );
                  })}
                </ul>
              </section>
              <section className="popular-keyword">
                <p className="keyword-title">인기 검색어</p>
                <ul>
                  {POPULAR_KEYWORD.map((data, index) => {
                    return (
                      <li key={index} onClick={e => this.handleClickKeyword(e)}>
                        {data}
                      </li>
                    );
                  })}
                </ul>
              </section>
            </>
          ) : (
            <SearchList searchedData={searchedData} inputValue={inputValue} />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
