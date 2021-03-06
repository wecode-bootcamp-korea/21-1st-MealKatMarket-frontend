import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search/Search';
import Cart from './pages/Cart/Cart';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import Bargain from './pages/Bargain/Bargain';
import Favorite from './pages/Favorite/Favorite';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import FavoriteMy from './pages/Favorite-my/FavoriteMy';
import ProductTest from './pages/ProductTest/ProductTest';
import SearchResult from './pages/SearchResult/SearchResult';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/product" component={Product} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/products/search" component={Search} />
          <Route
            exact
            path="/products/search/result/"
            component={SearchResult}
          />
          <Route exact path="/test" component={ProductTest} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bargain" component={Bargain} />
          <Route exact path="/favorite" component={Favorite} />
          <Route exact path="/favoritemine" component={FavoriteMy} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/*" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
