import React from 'react';
import styled from 'styled-components';

const StyledProduct = styled.div`
  width: 150px;
  height: 200px;
  max-width: calc((100vw - 36px) / 2);
  background-color: blue;

  :nth-child(odd) {
    justify-self: start;
  }
  :nth-child(even) {
    justify-self: end;
  }
`;
const StyledProductImage = styled.div``;
const StyledProductInfo = styled.div``;

const Product = () => (
  <StyledProduct>
    <StyledProductImage>photo</StyledProductImage>
    <StyledProductInfo>info</StyledProductInfo>
  </StyledProduct>
);

export default Product;
