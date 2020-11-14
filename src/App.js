import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import EditProducts from './components/EditProducts';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products}/>
          <Route exact path="/products/new" component={NewProducts}/>
          <Route exact path="/products/edit/:id" component={EditProducts}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;