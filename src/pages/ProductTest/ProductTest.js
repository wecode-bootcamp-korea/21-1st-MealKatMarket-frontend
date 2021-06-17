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
        // console.log(res);
        let result = res.slice(this.state.preItems, this.state.items);
        this.setState({
          cardData: [...this.state.cardData, ...result],
        });
        // console.log(result);
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
    this.componentDidMount();
  };

  render() {
    const { cardData } = this.state;
    return (
      <div className="product-container">
        <div className="background">
          <ul className="swiper-wrapper">
            <li className="menu-wrapper">
              <Link to="/products" className="menu">
                전체
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=1" className="menu-2">
                간편요리
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=2" className="menu">
                밥류
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=3" className="menu">
                면류
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=4" className="menu">
                반찬
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=5" className="menu">
                간식
              </Link>
            </li>
            <li>
              <Link to="/products?category-id=6" className="menu">
                음료
              </Link>
            </li>
          </ul>
          <div className="filter-button">
            <button onClick={this.showDropdown}>
              인기상품순
              <img src="/icon/swap.svg" alt="swap-icon" />
            </button>
            {this.state.showDropdown && (
              <ul className="filter-dropdown">
                <li>
                  <Link className="link">출시일순</Link>
                </li>
                <li>
                  <Link className="link">인기상품순</Link>
                </li>
                <li>
                  <Link className="link">후기많은순</Link>
                </li>
                <li>
                  <Link className="link">낮은가격순</Link>
                </li>
                <li>
                  <Link className="link">높은가격순</Link>
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
