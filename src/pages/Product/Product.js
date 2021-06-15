import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
import Card from '../../components/ProductCard/Card';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      showDropdown: false,
      cardData: [],
    };
  }

  handleDropdown = () => {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  componentDidMount() {
    fetch('/products', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data,
        });
      });
  }
  render() {
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
            <button onClick={this.handleDropdown}>
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
          <ul className="product-list">
            {this.state.cardData.result &&
              this.state.cardData.result.map((card, idx) => (
                <Card key={idx} card={card} />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Product;
