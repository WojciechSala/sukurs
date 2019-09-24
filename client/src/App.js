import React from 'react';
import MasterStyle from './assets/styles/MasterStyle';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './components/Product/ProductDetails';

function App() {
  return (
    <MasterStyle>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/:slug" component={ProductDetails} />
      </Router>
    </MasterStyle>
  );
}

export default App;
