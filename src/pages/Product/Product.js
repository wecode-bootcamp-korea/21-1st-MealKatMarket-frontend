import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
import List from '../../components/ProductCard/List';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BottomNav from '../../components/BottomNav/BottomNav';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      showDropdown: false,
      select: 0,
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

  handleFilterMenu = index => {
    this.setState({
      select: index,
    });
  };

  infiniteScroll = () => {
    let scrollHeight = document.documentElement.scrollHeight - 10;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        items: this.state.items + 10,
      });
    }
  };

  componentDidMount = () => {
    fetch(`http://10.58.5.96:8000/products`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          cardData: res,
        });
      });
    window.addEventListener('scroll', this.infiniteScroll, true);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`http://10.58.5.96:8000/products${this.props.location.search}`)
        .then(res => res.json())
        .then(res => this.setState({ cardData: res }));
      //state값이 들어와야!!!!!!!!!!!
    }
    if (prevState.items !== this.state.items) {
      fetch(`http://10.58.5.96:8000/products${this.props.location.search}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            cardData: [...this.state.cardData, ...res.result],
          });
        });
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.infiniteScroll);
  };

  render() {
    const { cardData } = this.state;

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
                        this.state.select === category.number
                          ? 'menu-clicked'
                          : 'menu'
                      }
                      onClick={() => this.handleFilterMenu(index)}
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="filter-button">
              <button onClick={this.handleDropdown}>
                별점높은순
                <img src="/icon/swap.svg" alt="swap-icon" />
              </button>
              {this.state.showDropdown && (
                <ul className="filter-dropdown">
                  {SORT_FILTERS.map((sort, index) => {
                    return (
                      <li>
                        <Link
                          to={`/product?${this.props.location.search}&sort=${sort.id}`}
                          className="link"
                          key={index}
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
              {this.state.cardData && <List cardData={cardData} />}
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
  { name: '높은가격순', number: 3, id: '-price' },
  { name: 'MD추천순', number: 4, id: '-star_score' },
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
