import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
import Card from '../../components/ProductCard/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BottomNav from '../../components/BottomNav/BottomNav';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      showDropdown: false,
      cardData: [],
      selectedFilter: 0,
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
    const CATEGORY_FILTERS = [
      { name: '전체', url: '/products', no: 0 },
      {
        name: '간편요리',
        url: '/products?categoryId=1',
        no: 1,
      },
      {
        name: '밥류',
        url: '/products?categoryId=2',
        no: 2,
      },
      {
        name: '면류',
        url: '/products?categoryId=3',
        no: 3,
      },
      {
        name: '반찬',
        url: '/products?categoryId=4',
        no: 4,
      },
      {
        name: '간식',
        url: '/products?categoryId=5',
        no: 5,
      },
      {
        name: '음료',
        url: '/products?categoryId=6',
        no: 5,
      },
    ];
    return (
      <>
        <div className="product-container">
          <Header currentMenu={1} />
          <div className="background">
            <ul className="swiper-wrapper">
              {CATEGORY_FILTERS.map((cate, index) => {
                console.log(cate, index);
                return (
                  <li>
                    <Link
                      to={cate.url}
                      key={index}
                      className={
                        this.state.selectedFilter === cate.no
                          ? 'menu-clicked'
                          : 'menu'
                      }
                    >
                      {cate.name}
                    </Link>
                  </li>
                );
              })}
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
          <BottomNav />
          <Footer />
        </div>
      </>
    );
  }
}

export default Product;
