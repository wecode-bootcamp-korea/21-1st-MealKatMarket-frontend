import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Card from './components/ProductCard/Card';
import Product from './pages/Product/Product';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/product-card" component={Card} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
