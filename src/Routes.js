import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Cart from './pages/Cart/Cart';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import BottomNav from './components/BottomNav/BottomNav';
import Favorite from './pages/Favorite/Favorite';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bottomnav" component={BottomNav} />
          <Route exact path="/favorite" component={Favorite} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
