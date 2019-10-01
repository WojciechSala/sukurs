import React from 'react';
import MasterStyle from './assets/styles/MasterStyle';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './components/Product/ProductDetails';
import Collabs from './pages/Collabs';

function App() {
  return (
    <MasterStyle>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/products/:slug" component={ProductDetails} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/collabs" exact component={Collabs} />
      </Router>
    </MasterStyle>
  );
}

export default App;
