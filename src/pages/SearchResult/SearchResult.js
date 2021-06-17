import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchResult extends React.Component {
  componentDidMount() {
    fetch(`http://10.58.3.193:8000/products/search?keyword=아`)
      .then(res => res.json())
      .then(res => console.log(res));
  }

  constructor() {
    super();
    this.state = {
      searchedData: [],
    };
  }

  render() {
    return <div></div>;
  }
}

export default withRouter(SearchResult);
