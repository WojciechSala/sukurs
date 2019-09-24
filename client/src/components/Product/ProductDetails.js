import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const StyledProductDetails = styled.div`
  width: 150px;
  height: 200px;
  max-width: calc((100vw - 36px) / 2);
  font-size: ${({ theme }) => theme.font.size.mobile.xs};
`;

function ProductDetails() {
  const product = useSelector(state => state.productsReducer.items[0]);

  return (
    <StyledProductDetails>
      <Navbar />
      {/* {product.name} */}
    </StyledProductDetails>
  );
}

export default ProductDetails;
