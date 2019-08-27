import React from 'react';
import styled from 'styled-components';
import Product from './Product.js';

const StyledProducts = styled.div`
  width: calc(100vw - 32px);
  padding: 0 16px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 50px;
`;

const Products = () => (
  <StyledProducts>
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </StyledProducts>
);

export default Products;
