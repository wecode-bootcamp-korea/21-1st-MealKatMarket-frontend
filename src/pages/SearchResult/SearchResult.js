import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchResult extends React.Component {
  componentDidMount() {
    const {
      location: { search: searchKeyword },
    } = this.props
      .fetch(`http://10.58.3.193:8000/products/search${searchKeyword}`)
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
    console.log(this.props);
    return <div></div>;
  }
}

export default withRouter(SearchResult);
