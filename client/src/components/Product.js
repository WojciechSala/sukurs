import React from 'react';
import styled from 'styled-components';
import img from '../assets/images/product_1.jpg';
import axios from 'axios';

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

class Product extends React.Component {
  componentDidMount() {
    let Api = axios.create({
      baseURL: `http://localhost:3000`,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    Api.get(`http://localhost:3000/products`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <StyledProduct>
        <StyledProductImage />
        <StyledProductInfo>
          <p>WHITE STUSSY SAMPLE TEE</p>
          <p>40 ZŁ</p>
        </StyledProductInfo>
      </StyledProduct>
    );
  }
}

// const Product = () => (
// );

export default Product;
