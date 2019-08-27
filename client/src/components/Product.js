import React from 'react';
import styled from 'styled-components';
import img from '../assets/images/product_1.jpg';

const StyledProduct = styled.div`
  width: 150px;
  height: 200px;
  max-width: calc((100vw - 36px) / 2);
  font-size: ${({ theme }) => theme.font.size.mobile.xs};

  /* :nth-child(odd) {
    justify-self: start;
  }
  :nth-child(even) {
    justify-self: end;
  } */
`;

const StyledProductImage = styled.div`
  width: 100%;
  height: 160px;
  background: url(${img});
  background-size: cover;
`;

const StyledProductInfo = styled.div`
  width: 100%;
  text-align: center;

  p {
    margin-bottom: 0;
  }
`;

const Product = () => (
  <StyledProduct>
    <StyledProductImage />
    <StyledProductInfo>
      <p>WHITE STUSSY SAMPLE TEE</p>
      <p>40 ZŁ</p>
    </StyledProductInfo>
  </StyledProduct>
);

export default Product;
