import React from 'react';
import { Link } from 'react-router-dom';
import './SearchList.scss';

class SearchList extends React.Component {
  render() {
    const { inputValue, searchedData } = this.props;
    return (
      <section id="SearchList">
        <ul id="search-list-container">
          {searchedData &&
            searchedData.map((data, index) => {
              return (
                <Link
                  to={`search/result?keyword=${inputValue}`}
                  className="search-link"
                  key={index}
                >
                  <li key={index} id="search-list-items">
                    <img alt="search" src="/icon/Search.svg" />{' '}
                    <p>{data.name}</p>
                  </li>
                </Link>
              );
            })}
        </ul>
      </section>
    );
  }
}

export default SearchList;
