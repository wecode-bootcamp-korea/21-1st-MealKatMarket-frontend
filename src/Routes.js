import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Cart from './pages/Cart/Cart';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';

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
        </Switch>
      </Router>
    );
  }
}

export default Routes;
