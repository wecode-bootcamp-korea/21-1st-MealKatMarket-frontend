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
      selectedFilter: '',
      cardData: [],
      productList: [],
      items: 10,
      preItems: 0,
    };
  }

  handleDropdown = () => {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  componentDidMount = () => {
    fetch(`http://10.58.3.36:8000/products${this.props.location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cardData: data,
        });
      });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`http://10.58.3.36:8000/products${this.props.location.search}`)
        .then(res => res.json())
        .then(res => this.setState({ cardData: res }));
      //state값이 들어와야!!!!!!!!!!!
    }
  };

  render() {
    return (
      <>
        <div className="product-container">
          <Header currentMenu={1} />
          <div className="background">
            <ul className="swiper-wrapper">
              {CATEGORY_FILTERS.map((category, index) => {
                return (
                  <li>
                    <Link
                      to={
                        category.number === 0
                          ? `/product`
                          : `/product?categoryId=${category.number}`
                      }
                      key={index}
                      className={
                        this.state.selectedFilter === category.number
                          ? 'menu-clicked'
                          : 'menu'
                      }
                    >
                      {category.name}
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
                  {SORT_FILTERS.map(sort => {
                    return (
                      <li>
                        <Link
                          to={`/product?${this.props.location.search}&sort=${sort.id}`}
                          className="link"
                        >
                          {sort.name}
                        </Link>
                      </li>
                    );
                  })}
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
          <BottomNav selectedNav={0} />
          <Footer />
        </div>
      </>
    );
  }
}

export default Product;

const SORT_FILTERS = [
  { name: '별점높은순', number: 0, id: '-star_score' },
  { name: '후기많은순', number: 1, id: '-review_count' },
  { name: '낮은가격순', number: 2, id: 'price' },
  { name: '높은가격순', number: 3, id: 'price' },
];

const CATEGORY_FILTERS = [
  { name: '전체', number: 0 },
  {
    name: '간편요리',
    number: 1,
  },
  {
    name: '밥류',
    number: 2,
  },
  {
    name: '면류',
    number: 3,
  },
  {
    name: '반찬',
    number: 4,
  },
  {
    name: '간식',
    number: 5,
  },
  {
    name: '음료',
    number: 6,
  },
];
