import React from 'react';
import styled from 'styled-components';
import Product from './Product.js';

const StyledProducts = styled.div``;

const Products = () => (
  <StyledProducts>
    <Product />
    <Product />
    <Product />
    <Product />
  </StyledProducts>
);

export default Products;
