import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const StyledShop = styled.div``;

const Shop = () => (
  <StyledShop>
    <Navbar />
    <Products />
  </StyledShop>
);

export default Shop;
