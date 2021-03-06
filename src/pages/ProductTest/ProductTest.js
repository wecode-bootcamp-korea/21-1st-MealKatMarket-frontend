import React from 'react';
import { Link } from 'react-router-dom';
import './ProductTest.scss';
import List from '../../components/ProductCard/List';

class ProductTest extends React.Component {
  constructor() {
    super();

    this.state = {
      showDropdown: false,
      cardData: [],
      items: 10,
      preItems: 0,
    };
  }

  showDropdown = () => {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        let result = res.slice(this.state.preItems, this.state.items);
        this.setState({
          cardData: [...this.state.cardData, ...result],
        });
      });
    window.addEventListener('scroll', this.infiniteScroll, true);
  }

  infiniteScroll = () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 10,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      fetch('http://localhost:3000/data/data.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          let result = res.slice(this.state.preItems, this.state.items);
          this.setState({
            cardData: [...this.state.cardData, ...result],
          });
        });
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.infiniteScroll);
  };
  render() {
    const { cardData } = this.state;
    return (
      <div className="product-test-container">
        <div className="background">
          <ul className="swiper-wrapper">
            <li className="menu-wrapper">
              <Link to="/products" className="menu">
                ??????
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=1" className="menu-2">
                ????????????
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=2" className="menu">
                ??????
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=3" className="menu">
                ??????
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=4" className="menu">
                ??????
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=5" className="menu">
                ??????
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=6" className="menu">
                ??????
              </Link>
            </li>
          </ul>
          <div className="filter-button">
            <button onClick={this.showDropdown}>
              ???????????????
              <img src="/icon/swap.svg" alt="swap-icon" />
            </button>
            {this.state.showDropdown && (
              <ul className="filter-dropdown">
                <li>
                  <Link className="link">????????????</Link>
                </li>
                <li>
                  <Link className="link">???????????????</Link>
                </li>
                <li>
                  <Link className="link">???????????????</Link>
                </li>
                <li>
                  <Link className="link">???????????????</Link>
                </li>
                <li>
                  <Link className="link">???????????????</Link>
                </li>
              </ul>
            )}
          </div>
          <ul>
            <List cardData={cardData} />
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductTest;
