import React, { Component } from 'react';
import styled from 'styled-components';

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

const StyledProductImage = styled.img`
  width: 100%;
  height: 160px;
  background-size: cover;
`;

const StyledProductInfo = styled.div`
  width: 100%;
  text-align: center;

  p {
    margin-bottom: 0;
  }
`;

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ''
    };
  }

  async componentDidMount() {
    const importedImageModule = await import(
      '../../../server/uploads/products/' + this.props.image
    );

    await this.setState({
      // path to imported module HAS TO BE .default
      images: importedImageModule.default
    });
  }

  render() {
    return (
      <StyledProduct>
        <StyledProductImage src={this.state.images} />
        <StyledProductInfo>
          <p>{this.props.name}</p>
          <p>{this.props.price} ZŁ</p>
        </StyledProductInfo>
      </StyledProduct>
    );
  }
}
export default Product;
