import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search/Search';
import Cart from './pages/Cart/Cart';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import ProductCard from './components/ProductCard/ProductCard';
import BottomNav from './components/BottomNav/BottomNav';
import Bargain from './pages/Bargain/Bargain';
import Timer from './components/Timer/Timer';
import Favorite from './pages/Favorite/Favorite';
import Detail from './pages/Detail/Detail';
import FavoriteHorizontalCard from './components/FavoriteHorizontalCard/FavoriteHorizontalCard';
import FavoriteVerticalCard from './components/FavoriteVerticalCard/FavoriteVerticalCard';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/productcard" component={ProductCard} />
          <Route exact path="/bottomnav" component={BottomNav} />
          <Route exact path="/bargain" component={Bargain} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/favorite" component={Favorite} />
          <Route exact path="/detail" component={Detail} />
          <Route
            exact
            path="/favoritehorizontalcard"
            component={FavoriteHorizontalCard}
          />
          <Route
            exact
            path="/favoriteverticalcard"
            component={FavoriteVerticalCard}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
