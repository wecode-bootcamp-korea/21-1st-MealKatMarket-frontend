import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search/Search';
import Cart from './pages/Cart/Cart';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
<<<<<<< HEAD
=======
import Card from './components/ProductCard/Card';
import BottomNav from './components/BottomNav/BottomNav';
>>>>>>> master
import Bargain from './pages/Bargain/Bargain';
import Favorite from './pages/Favorite/Favorite';
import Detail from './pages/Detail/Detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Product} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/productcard" component={Card} />
          <Route exact path="/bottomnav" component={BottomNav} />
          <Route exact path="/bargain" component={Bargain} />
          <Route exact path="/favorite" component={Favorite} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
