import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import Products from '../components/Products/Products';

const StyledShop = styled.div`
  width: 100vw;
  height: auto;
`;

const Shop = () => (
  <StyledShop>
    <Navbar />
    <Products />
  </StyledShop>
);

export default Shop;
