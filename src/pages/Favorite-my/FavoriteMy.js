import React from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import FavoriteHorizontalCard from '../../components/FavoriteHorizontalCard/FavoriteHorizontalCard';
import './FavoriteMy.scss';

class FavoriteMy extends React.Component {
  constructor() {
    super();
    this.state = {
      likedData: [],
    };
  }

  componentDidMount = () => {
    const authToken = localStorage.getItem('token');

    fetch(`http://10.58.5.96:8000/wishes`, {
      method: 'GET',
      headers: {
        Authorization: authToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          likedData: data,
        });
      });
  };

  render() {
    const objLength = this.state.likedData?.wish_list?.length;

    return (
      <div className="favorite-mine-container">
        <div className="background">
          <div className="gnb-container">
            <h1>관심상품</h1>
            <div className="total-wrapper">
              <span>전체</span>
              <span className="number">{objLength}</span>
            </div>
          </div>
          <ul className="favorite-list">
            {this.state.likedData.wish_list &&
              this.state.likedData.wish_list.map((liked, index) => (
                <FavoriteHorizontalCard key={index} liked={liked} />
              ))}
          </ul>
        </div>
        <BottomNav selectedNav={2} />
      </div>
    );
  }
}

export default FavoriteMy;
